interface Env {
  VLLM_URL: string;
  VLLM_API_KEY: string;
  VLLM_MODEL: string;
}

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>typewriter.chat</title>
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
      button {
        margin-top: 12px;
        padding: 10px 16px;
        font: inherit;
      }
    </style>
  </head>
  <body>
    <h1>typewriter.chat</h1>
    <div id="chat" class="chat"></div>
    <textarea id="message" placeholder="Say hi..."></textarea>
    <br />
    <button id="send">Send</button>
    <script>
      const message = document.querySelector("#message");
      const chat = document.querySelector("#chat");
      const button = document.querySelector("#send");

      function addLine(label, text) {
        const line = document.createElement("p");
        const labelNode = document.createElement("span");
        line.className = "line";
        labelNode.className = "label";
        labelNode.textContent = label + ":";
        line.append(labelNode, " " + text);
        chat.appendChild(line);
      }

      document.querySelector("#send").addEventListener("click", async () => {
        const text = message.value.trim();
        if (!text) return;

        addLine("user", text);
        message.value = "";
        button.disabled = true;

        try {
          const response = await fetch("/api/chat", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ message: text }),
          });
          const data = await response.json();
          addLine("typewriter", data.reply || data.error || "No response");
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

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === "GET" && url.pathname === "/") {
      return new Response(html, {
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }

    if (request.method === "POST" && url.pathname === "/api/chat") {
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
        }),
      });

      if (!upstream.ok) {
        return json({ error: await upstream.text() }, { status: upstream.status });
      }

      const data = (await upstream.json()) as {
        choices?: Array<{ message?: { content?: string } }>;
      };

      return json({ reply: data.choices?.[0]?.message?.content ?? "" });
    }

    return new Response("Not found", { status: 404 });
  },
} satisfies ExportedHandler<Env>;
