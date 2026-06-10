import type { Env } from "../index";

export const instructHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>💬 instruct</title>
    <style>
      body {
        max-width: 720px;
        margin: 40px auto;
        padding: 0 20px;
        font-family: system-ui, sans-serif;
      }
      .chat {
        border: 1px solid #ddd;
        padding: 16px;
        min-height: 180px;
        white-space: pre-wrap;
      }
      .line {
        margin: 0 0 12px;
      }
      .label {
        font-weight: 700;
      }
      textarea {
        width: 100%;
        min-height: 120px;
        padding: 12px;
        font: inherit;
      }
      textarea:focus {
        outline: 2px solid #6B4226;
      }
      button {
        margin-top: 12px;
        padding: 10px 16px;
        font: inherit;
        border-radius: 6px;
        appearance: none;
        -webkit-appearance: none;
        background-color: #f5f5f5;
        border: 1px solid #999;
        color: #333;
        cursor: pointer;
      }
      button:focus {
        outline: 2px solid #6B4226;
      }
      .model-note {
        margin: 0 0 16px;
        color: #6B4226;
        font-weight: 700;
      }
    </style>
  </head>
  <body>
    <h1>💬</h1>
    <p class="model-note">instruction-tuned model (not a base model)</p>
    <div id="chat" class="chat"></div>
    <textarea id="message" placeholder="Compose a poem upon the subject of typewriter."></textarea>
    <br />
    <button id="send">Strike</button>
    <script>
      const message = document.querySelector("#message");
      const chat = document.querySelector("#chat");
      const button = document.querySelector("#send");

      function addLine(label, text) {
        const line = document.createElement("p");
        const labelNode = document.createElement("span");
        const textNode = document.createTextNode(" " + text);
        line.className = "line";
        labelNode.className = "label";
        labelNode.textContent = label + ":";
        line.append(labelNode, textNode);
        chat.appendChild(line);
        return textNode;
      }

      document.querySelector("#send").addEventListener("click", async () => {
        const text = message.value.trim();
        if (!text) return;

        addLine("typist", text);
        message.value = "";
        button.disabled = true;

        try {
          const reply = addLine("typewriter", "");
          const response = await fetch("/api/chat", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ message: text }),
          });

          if (!response.ok) {
            reply.data += await response.text();
            return;
          }

          const reader = response.body.getReader();
          const decoder = new TextDecoder();

          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            reply.data += decoder.decode(value, { stream: true });
          }
        } catch (error) {
          addLine("typewriter", "Error talking to the model.");
        } finally {
          button.disabled = false;
          message.focus();
        }
      });
    </script>
  </body>
</html>`;

const jsonHeaders = {
  "content-type": "application/json; charset=utf-8",
};

function json(data: unknown, init?: ResponseInit): Response {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: { ...jsonHeaders, ...init?.headers },
  });
}

function streamVllmResponse(upstream: Response): Response {
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  let buffer = "";

  const stream = new ReadableStream({
    async start(controller) {
      const reader = upstream.body?.getReader();

      if (!reader) {
        controller.close();
        return;
      }

      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          controller.close();
          break;
        }

        buffer += decoder.decode(value, { stream: true });
        const events = buffer.split("\n\n");
        buffer = events.pop() ?? "";

        for (const event of events) {
          for (const line of event.split("\n")) {
            if (!line.startsWith("data: ")) continue;

            const data = line.slice(6).trim();
            if (!data || data === "[DONE]") continue;

            const chunk = JSON.parse(data) as {
              choices?: Array<{ delta?: { content?: string } }>;
            };
            const content = chunk.choices?.[0]?.delta?.content;

            if (content) {
              controller.enqueue(encoder.encode(content));
            }
          }
        }
      }
    },
  });

  return new Response(stream, {
    headers: {
      "cache-control": "no-cache",
      "content-type": "text/plain; charset=utf-8",
    },
  });
}

export async function handleChat(request: Request, env: Env): Promise<Response> {
  if (!env.VLLM_URL || !env.VLLM_API_KEY || !env.VLLM_MODEL) {
    return json({ error: "Missing VLLM_URL, VLLM_API_KEY, or VLLM_MODEL" }, { status: 500 });
  }

  const body = (await request.json()) as { message?: string };
  const prompt = body.message?.trim();

  if (!prompt) {
    return json({ error: "Message is required" }, { status: 400 });
  }

  const upstream = await fetch(`${env.VLLM_URL.replace(/\/$/, "")}/v1/chat/completions`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${env.VLLM_API_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: env.VLLM_MODEL,
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      top_p: 0.95,
      max_tokens: 256,
      repetition_penalty: 1.08,
      stream: true,
    }),
  });

  if (!upstream.ok) {
    return json({ error: await upstream.text() }, { status: upstream.status });
  }

  return streamVllmResponse(upstream);
}
