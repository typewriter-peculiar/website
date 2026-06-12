import type { Env } from "../index";

export const instructHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>The Inquiry Desk &mdash; TypewriterLM</title>
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&family=UnifrakturCook:wght@700&display=swap" rel="stylesheet" />
    <style>
      :root {
        --paper: #f6efdc;
        --paper-deep: #efe5cc;
        --desk: #d9cfb6;
        --ink: #221d14;
        --ink-faint: #5d5440;
        --rule: #2b2418;
      }
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        padding: 28px 14px 48px;
        background: var(--desk);
        color: var(--ink);
        font-family: "Old Standard TT", Georgia, "Times New Roman", serif;
      }
      .sheet {
        max-width: 880px;
        margin: 0 auto;
        background:
          radial-gradient(ellipse at 20% 0%, rgba(255, 252, 240, 0.55), transparent 55%),
          radial-gradient(ellipse at 85% 100%, rgba(120, 96, 50, 0.10), transparent 50%),
          var(--paper);
        border: 1px solid var(--rule);
        box-shadow: 0 1px 0 #fff inset, 6px 8px 0 rgba(43, 36, 24, 0.25);
        padding: 18px 34px 30px;
      }

      .dateline {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 12px;
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        border-bottom: 1px solid var(--rule);
        padding-bottom: 6px;
        flex-wrap: wrap;
      }
      .dateline a {
        color: var(--ink);
        text-decoration: none;
      }
      .dateline a:hover,
      .dateline a:focus {
        text-decoration: underline;
      }
      #sound {
        background: none;
        border: none;
        padding: 0;
        font: inherit;
        letter-spacing: inherit;
        text-transform: inherit;
        color: var(--ink-faint);
        cursor: pointer;
      }
      #sound:hover,
      #sound:focus {
        color: var(--ink);
        text-decoration: underline;
      }

      .hero {
        text-align: center;
        padding: 26px 0 4px;
      }
      .notice-line {
        font-size: 12px;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--ink-faint);
        margin: 0 0 14px;
      }
      .hero h1 {
        font-size: 36px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.02em;
        line-height: 1.15;
        margin: 0 auto 6px;
        max-width: 640px;
      }
      .ornament {
        font-size: 14px;
        letter-spacing: 0.6em;
        color: var(--ink-faint);
        margin: 4px 0 10px;
      }
      .standfirst {
        font-style: italic;
        font-size: 17px;
        line-height: 1.6;
        max-width: 480px;
        margin: 0 auto;
      }

      .chatwrap {
        display: none;
        margin-top: 24px;
      }
      body.started .chatwrap {
        display: block;
      }
      body.started .intro {
        display: none;
      }
      .chat {
        border: 1px solid var(--rule);
        outline: 3px double var(--rule);
        outline-offset: 3px;
        background: var(--paper-deep);
        padding: 18px 20px 6px;
        min-height: 160px;
        max-height: 50vh;
        overflow-y: auto;
        white-space: pre-wrap;
        font-size: 16px;
        line-height: 1.6;
      }
      .line {
        margin: 0 0 14px;
      }
      .label {
        font-weight: 700;
        font-size: 12px;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--ink-faint);
      }

      .prompt-area {
        margin: 24px auto 0;
        max-width: 620px;
      }
      body.started .prompt-area {
        max-width: none;
        margin-top: 16px;
      }
      .prompt-label {
        text-align: center;
        font-size: 12px;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        margin: 0 0 8px;
      }
      .prompt-box {
        display: flex;
        align-items: center;
        gap: 12px;
        border: 1px solid var(--rule);
        outline: 3px double var(--rule);
        outline-offset: 3px;
        background: var(--paper-deep);
        padding: 9px 10px 9px 18px;
      }
      #message {
        flex: 1;
        min-width: 0;
        border: none;
        background: transparent;
        font-family: "Old Standard TT", Georgia, serif;
        font-style: italic;
        font-size: 17px;
        color: var(--ink);
        padding: 6px 0;
      }
      #message:focus {
        outline: none;
      }
      #message::placeholder {
        color: var(--ink-faint);
        opacity: 0.8;
      }
      .inquire {
        font-family: inherit;
        font-size: 13px;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        background: var(--ink);
        color: var(--paper);
        border: none;
        padding: 9px 18px;
        cursor: pointer;
        white-space: nowrap;
      }
      .inquire:hover:not(:disabled),
      .inquire:focus:not(:disabled) {
        background: transparent;
        color: var(--ink);
        box-shadow: 0 0 0 1px var(--ink) inset;
      }
      .inquire:disabled {
        opacity: 0.5;
        cursor: default;
      }
      .chips {
        display: flex;
        gap: 8px 18px;
        justify-content: center;
        margin-top: 14px;
        flex-wrap: wrap;
      }
      .chip {
        background: none;
        border: none;
        border-bottom: 1px dotted var(--ink-faint);
        padding: 0 0 1px;
        font-family: "Old Standard TT", Georgia, serif;
        font-style: italic;
        font-size: 13px;
        color: var(--ink-faint);
        cursor: pointer;
      }
      .chip:hover,
      .chip:focus {
        color: var(--ink);
        border-bottom-color: var(--ink);
      }

      .answers {
        margin-top: 30px;
        border-top: 3px double var(--rule);
        padding-top: 14px;
      }
      .answers-label {
        text-align: center;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        margin: 0 0 16px;
      }
      .answers-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
      }
      .answer-card {
        padding: 2px 20px 8px;
      }
      .answer-card + .answer-card {
        border-left: 1px solid var(--rule);
      }
      .answer-card .asked {
        font-size: 12px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        text-align: center;
        margin: 0 0 8px;
        color: var(--ink-faint);
      }
      .answer-card .quote {
        font-size: 15px;
        font-style: italic;
        line-height: 1.55;
        text-align: center;
        margin: 0;
      }

      .colophon {
        margin-top: 30px;
        border-top: 1px solid var(--rule);
        padding-top: 8px;
        text-align: center;
        font-size: 11px;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--ink-faint);
      }

      @media (max-width: 640px) {
        .sheet {
          padding: 14px 18px 24px;
        }
        .hero h1 {
          font-size: 27px;
        }
        .answers-grid {
          grid-template-columns: 1fr;
        }
        .answer-card + .answer-card {
          border-left: none;
          border-top: 1px solid var(--rule);
          margin-top: 10px;
          padding-top: 12px;
        }
      }
    </style>
  </head>
  <body>
    <div class="sheet">
      <header>
        <div class="dateline">
          <a href="/">&larr; TypewriterLM</a>
          <span>London, 1913.</span>
          <button id="sound" type="button" aria-pressed="true">Sound: On</button>
        </div>
      </header>

      <section class="hero">
        <p class="notice-line">Instruction-tuned model &mdash; not a base model</p>
        <h1 class="intro">The Inquiry Desk</h1>
        <div class="ornament intro">&#10070; &#10070; &#10070;</div>
        <p class="standfirst intro">Put your question to a mind that stops at 1913; it shall strike its answer letter by letter.</p>
      </section>

      <section class="chatwrap">
        <div id="chat" class="chat" aria-live="polite"></div>
      </section>

      <section class="prompt-area">
        <p class="prompt-label intro">Inquiries Within</p>
        <div class="prompt-box">
          <input id="message" type="text" autocomplete="off" placeholder="Address your question to the machine&hellip;" />
          <button id="send" class="inquire" type="button">Strike</button>
        </div>
        <div class="chips intro">
          <button class="chip" type="button">Will there soon be a war in Europe?</button>
          <button class="chip" type="button">Compose a poem upon the subject of typewriter.</button>
          <button class="chip" type="button">What cures consumption?</button>
        </div>
      </section>

      <section class="answers intro">
        <p class="answers-label">What It Answers, in Its Own Words</p>
        <div class="answers-grid">
          <div class="answer-card">
            <p class="asked">Asked about a computer</p>
            <p class="quote">&ldquo;a person who performs arithmetical operations&rdquo;</p>
          </div>
          <div class="answer-card">
            <p class="asked">Asked about Einstein</p>
            <p class="quote">&ldquo;of whom we have not yet learned to speak as a physicist&rdquo;</p>
          </div>
          <div class="answer-card">
            <p class="asked">Asked about war in Europe</p>
            <p class="quote">&ldquo;it would not surprise me if this country were to go to war with France within ninety days&rdquo;</p>
          </div>
        </div>
      </section>

      <p class="colophon">Printed &amp; published by the TypewriterLM Press &mdash; London, 1913</p>
    </div>

    <script>
      var message = document.getElementById("message");
      var chat = document.getElementById("chat");
      var button = document.getElementById("send");
      var soundBtn = document.getElementById("sound");
      var soundOn = true;
      var busy = false;
      var actx = null;
      var noiseBuf = null;

      function ensureAudio() {
        if (!actx) {
          actx = new (window.AudioContext || window.webkitAudioContext)();
          var len = Math.floor(actx.sampleRate * 0.05);
          noiseBuf = actx.createBuffer(1, len, actx.sampleRate);
          var data = noiseBuf.getChannelData(0);
          for (var i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
        }
        if (actx.state === "suspended") actx.resume();
      }

      function clack(strength) {
        if (!soundOn) return;
        ensureAudio();
        var t = actx.currentTime;
        var src = actx.createBufferSource();
        src.buffer = noiseBuf;
        src.playbackRate.value = 0.8 + Math.random() * 0.5;
        var filter = actx.createBiquadFilter();
        filter.type = "bandpass";
        filter.frequency.value = 2200 + Math.random() * 1800;
        filter.Q.value = 1.2;
        var gain = actx.createGain();
        gain.gain.setValueAtTime(0.12 * strength, t);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.04);
        src.connect(filter);
        filter.connect(gain);
        gain.connect(actx.destination);
        src.start(t);
        src.stop(t + 0.05);
      }

      function bell() {
        if (!soundOn) return;
        ensureAudio();
        var t = actx.currentTime;
        var osc = actx.createOscillator();
        osc.type = "sine";
        osc.frequency.value = 1760;
        var gain = actx.createGain();
        gain.gain.setValueAtTime(0.08, t);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);
        osc.connect(gain);
        gain.connect(actx.destination);
        osc.start(t);
        osc.stop(t + 0.5);
      }

      soundBtn.addEventListener("click", function () {
        soundOn = !soundOn;
        soundBtn.textContent = soundOn ? "Sound: On" : "Sound: Off";
        soundBtn.setAttribute("aria-pressed", soundOn ? "true" : "false");
        if (soundOn) clack(1);
      });

      message.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          e.preventDefault();
          send();
          return;
        }
        if (e.key.length === 1 || e.key === "Backspace") clack(1);
      });

      Array.prototype.forEach.call(document.querySelectorAll(".chip"), function (chip) {
        chip.addEventListener("click", function () {
          message.value = chip.textContent;
          clack(1);
          message.focus();
        });
      });

      function addLine(label, text) {
        var line = document.createElement("p");
        var labelNode = document.createElement("span");
        var textNode = document.createTextNode(" " + text);
        line.className = "line";
        labelNode.className = "label";
        labelNode.textContent = label + ".";
        line.append(labelNode, textNode);
        chat.appendChild(line);
        chat.scrollTop = chat.scrollHeight;
        return textNode;
      }

      function finish() {
        busy = false;
        button.disabled = false;
        message.focus();
      }

      async function send() {
        var text = message.value.trim();
        if (!text || busy) return;
        busy = true;
        button.disabled = true;
        document.body.classList.add("started");
        bell();
        addLine("Typist", text);
        message.value = "";
        var reply = addLine("Typewriter", "");
        var timer = null;
        try {
          var response = await fetch("/api/chat", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ message: text }),
          });

          if (!response.ok) {
            reply.data += await response.text();
            finish();
            return;
          }

          var reader = response.body.getReader();
          var decoder = new TextDecoder();
          var pending = "";
          var streamDone = false;

          timer = setInterval(function () {
            if (pending.length) {
              var ch = pending.charAt(0);
              pending = pending.slice(1);
              reply.data += ch;
              if (ch !== " " && ch !== "\\n") clack(0.6);
              chat.scrollTop = chat.scrollHeight;
            } else if (streamDone) {
              clearInterval(timer);
              bell();
              finish();
            }
          }, 18);

          while (true) {
            var r = await reader.read();
            if (r.done) break;
            pending += decoder.decode(r.value, { stream: true });
          }
          streamDone = true;
        } catch (err) {
          if (timer) clearInterval(timer);
          reply.data += " Error talking to the model.";
          finish();
        }
      }

      button.addEventListener("click", send);
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
  if (!env.VLLM_URL || !env.VLLM_MODEL) {
    return json({ error: "Missing VLLM_URL or VLLM_MODEL" }, { status: 500 });
  }

  const body = (await request.json()) as { message?: string };
  const prompt = body.message?.trim();

  if (!prompt) {
    return json({ error: "Message is required" }, { status: 400 });
  }

  const upstream = await fetch(`${env.VLLM_URL.replace(/\/$/, "")}/v1/chat/completions`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${env.VLLM_API_KEY || "dummy"}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: env.VLLM_MODEL,
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 256,
      stream: true,
    }),
  });

  if (!upstream.ok) {
    const text = await upstream.text();
    if (text.includes("1003")) {
      return json(
        {
          error:
            "Cannot reach the model server. Set VLLM_URL to a public hostname (e.g. a Cloudflare Tunnel URL), not localhost.",
        },
        { status: 502 },
      );
    }
    return json({ error: text }, { status: upstream.status });
  }

  return streamVllmResponse(upstream);
}
