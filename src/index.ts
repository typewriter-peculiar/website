const html = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>typewriter.chat - calmer conversations for writing</title>
    <meta
      name="description"
      content="typewriter.chat is a quiet place for drafting, refining, and sharing thoughts through conversation."
    />
    <meta property="og:title" content="typewriter.chat" />
    <meta
      property="og:description"
      content="A focused chat space for better writing, clearer thinking, and slower conversations."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://typewriter.chat" />
    <meta name="twitter:card" content="summary_large_image" />
    <style>
      :root {
        color-scheme: light;
        --ink: #201914;
        --muted: #6f6258;
        --paper: #fffaf2;
        --panel: #f4eadc;
        --accent: #c45f35;
        --accent-dark: #76351f;
        --line: rgba(32, 25, 20, 0.14);
        --shadow: rgba(69, 44, 29, 0.16);
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        min-height: 100vh;
        background:
          radial-gradient(circle at top left, rgba(196, 95, 53, 0.16), transparent 34rem),
          linear-gradient(135deg, #fffaf2 0%, #f5eadb 58%, #ead9c7 100%);
        color: var(--ink);
        font-family:
          ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        line-height: 1.6;
      }

      a {
        color: inherit;
      }

      .page {
        width: min(1120px, calc(100% - 40px));
        margin: 0 auto;
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 28px 0;
      }

      .brand {
        display: inline-flex;
        align-items: center;
        gap: 12px;
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
          monospace;
        font-size: 0.95rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-decoration: none;
        text-transform: uppercase;
      }

      .mark {
        display: grid;
        width: 36px;
        height: 36px;
        place-items: center;
        border: 1px solid var(--line);
        border-radius: 10px;
        background: rgba(255, 250, 242, 0.72);
        box-shadow: 0 12px 30px var(--shadow);
      }

      nav {
        display: flex;
        gap: 22px;
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
          monospace;
        font-size: 0.82rem;
        text-transform: uppercase;
      }

      nav a {
        color: var(--muted);
        text-decoration: none;
      }

      nav a:hover {
        color: var(--ink);
      }

      main {
        padding: 52px 0 72px;
      }

      .hero {
        display: grid;
        grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.8fr);
        gap: 56px;
        align-items: center;
      }

      .eyebrow,
      .kicker {
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
          monospace;
        font-size: 0.78rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--accent-dark);
      }

      h1 {
        max-width: 760px;
        margin: 16px 0 20px;
        font-size: clamp(3rem, 8vw, 6.75rem);
        line-height: 0.92;
        letter-spacing: -0.07em;
      }

      .lede {
        max-width: 620px;
        margin: 0 0 30px;
        color: var(--muted);
        font-size: clamp(1.08rem, 2vw, 1.35rem);
      }

      .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 14px;
      }

      .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 48px;
        padding: 0 22px;
        border: 1px solid var(--ink);
        border-radius: 999px;
        background: var(--ink);
        color: var(--paper);
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
          monospace;
        font-size: 0.82rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-decoration: none;
        text-transform: uppercase;
      }

      .button.secondary {
        background: transparent;
        color: var(--ink);
      }

      .card {
        position: relative;
        overflow: hidden;
        border: 1px solid var(--line);
        border-radius: 28px;
        background: rgba(255, 250, 242, 0.76);
        box-shadow: 0 24px 80px var(--shadow);
      }

      .typewriter {
        padding: 28px;
      }

      .paper {
        min-height: 340px;
        padding: 34px;
        border: 1px solid var(--line);
        border-radius: 18px;
        background:
          linear-gradient(rgba(32, 25, 20, 0.06) 1px, transparent 1px) 0 2.05rem / 100% 2.05rem,
          #fffdf8;
        font-size: 1.05rem;
      }

      .paper p {
        margin: 0 0 1.65rem;
      }

      .cursor {
        display: inline-block;
        width: 0.6em;
        height: 1.15em;
        margin-left: 0.08em;
        transform: translateY(0.18em);
        background: var(--accent);
        animation: blink 1s steps(2, start) infinite;
      }

      @keyframes blink {
        50% {
          opacity: 0;
        }
      }

      .status {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        margin-top: 18px;
      }

      .status div,
      .tile {
        border: 1px solid var(--line);
        border-radius: 18px;
        background: rgba(255, 250, 242, 0.58);
        padding: 20px;
      }

      .status strong,
      .tile strong {
        display: block;
        margin-bottom: 5px;
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
          monospace;
        font-size: 0.77rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .status span,
      .tile p {
        color: var(--muted);
        font-size: 0.95rem;
      }

      .section {
        margin-top: 72px;
      }

      .section h2 {
        margin: 10px 0 16px;
        font-size: clamp(2rem, 4vw, 3.4rem);
        line-height: 1;
        letter-spacing: -0.045em;
      }

      .section-intro {
        max-width: 660px;
        margin: 0;
        color: var(--muted);
        font-size: 1.12rem;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 18px;
        margin-top: 26px;
      }

      .tile p {
        margin: 0;
      }

      footer {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 16px;
        padding: 34px 0 42px;
        border-top: 1px solid var(--line);
        color: var(--muted);
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
          monospace;
        font-size: 0.82rem;
      }

      @media (max-width: 860px) {
        header,
        footer {
          align-items: flex-start;
          flex-direction: column;
        }

        nav {
          flex-wrap: wrap;
        }

        .hero,
        .grid,
        .status {
          grid-template-columns: 1fr;
        }

        main {
          padding-top: 28px;
        }
      }
    </style>
  </head>
  <body>
    <div class="page">
      <header>
        <a class="brand" href="/" aria-label="typewriter.chat home">
          <span class="mark">T</span>
          <span>typewriter.chat</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#idea">Idea</a>
          <a href="#use-cases">Use cases</a>
          <a href="mailto:hello@typewriter.chat">Contact</a>
        </nav>
      </header>

      <main>
        <section class="hero" aria-labelledby="hero-title">
          <div>
            <div class="eyebrow">Quiet chat for clear writing</div>
            <h1 id="hero-title">Write like a conversation. Keep what matters.</h1>
            <p class="lede">
              typewriter.chat is a simple space for drafting messages, essays, notes,
              and ideas through a slower back-and-forth rhythm.
            </p>
            <div class="actions" aria-label="Primary actions">
              <a class="button" href="mailto:hello@typewriter.chat">Join the waitlist</a>
              <a class="button secondary" href="#idea">Learn more</a>
            </div>
          </div>

          <aside class="card typewriter" aria-label="Product preview">
            <div class="paper">
              <p><strong>You:</strong> I know what I mean, but not how to say it.</p>
              <p>
                <strong>Typewriter:</strong> Start with the feeling. I will help shape
                it into something direct, warm, and true.
              </p>
              <p><strong>You:</strong> Make it sound more like me.<span class="cursor"></span></p>
            </div>
          </aside>
        </section>

        <section class="status" aria-label="Launch status">
          <div>
            <strong>Status</strong>
            <span>Early concept</span>
          </div>
          <div>
            <strong>Focus</strong>
            <span>Writing through chat</span>
          </div>
          <div>
            <strong>Built for</strong>
            <span>People who think by typing</span>
          </div>
        </section>

        <section class="section" id="idea">
          <div class="kicker">The idea</div>
          <h2>A chat room for shaping words before they leave your head.</h2>
          <p class="section-intro">
            Most writing tools start with a blank page. typewriter.chat starts with a
            conversation, helping you turn rough thoughts into something ready to send,
            publish, or keep.
          </p>
        </section>

        <section class="section" id="use-cases">
          <div class="kicker">Use cases</div>
          <h2>For drafts that need a little company.</h2>
          <div class="grid">
            <article class="tile">
              <strong>Messages</strong>
              <p>Find the right tone for replies, updates, apologies, and asks.</p>
            </article>
            <article class="tile">
              <strong>Notes</strong>
              <p>Talk through loose ideas until they become useful notes or outlines.</p>
            </article>
            <article class="tile">
              <strong>Publishing</strong>
              <p>Move from a first thought to a cleaner post, memo, or essay draft.</p>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <span>typewriter.chat</span>
        <span>Launching quietly. Built on Cloudflare Workers.</span>
      </footer>
    </div>
  </body>
</html>`;

export default {
  async fetch(): Promise<Response> {
    return new Response(html, {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  },
} satisfies ExportedHandler;
