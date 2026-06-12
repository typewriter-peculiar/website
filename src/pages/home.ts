export const homeHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>TypewriterLM &mdash; Ask a mind that stops at 1913</title>
    <style>
      :root {
        --bg: #fafaf9;
        --surface: #ffffff;
        --surface-alt: #f4f3f1;
        --border: #e2e0dc;
        --border-strong: #ccc8c2;
        --text: #1f1d1a;
        --text-secondary: #6b6660;
        --text-tertiary: #9a948c;
        --accent: #6B4226;
        --accent-bg: #f3ece5;
        --radius-lg: 12px;
        --radius-md: 8px;
        --serif: Georgia, "Times New Roman", serif;
      }
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        padding: 24px 16px;
        background: var(--bg);
        color: var(--text);
        font-family: system-ui, sans-serif;
      }
      .frame {
        max-width: 860px;
        margin: 0 auto;
        background: var(--surface);
        border: 0.5px solid var(--border);
        border-radius: var(--radius-lg);
        overflow: hidden;
      }

      .topbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 14px 24px;
        border-bottom: 0.5px solid var(--border);
      }
      .brand {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 15px;
        font-weight: 500;
      }
      .topbar nav {
        display: flex;
        align-items: center;
        gap: 20px;
        font-size: 13px;
        color: var(--text-secondary);
        flex-wrap: wrap;
      }
      .topbar nav a {
        color: inherit;
        text-decoration: none;
      }
      .topbar nav a:hover,
      .topbar nav a:focus {
        color: var(--accent);
      }
      .nav-pill {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        border: 0.5px solid var(--border-strong);
        border-radius: var(--radius-md);
        padding: 5px 10px;
        color: var(--text);
      }

      .hero {
        padding: 40px 24px 28px;
        text-align: center;
      }
      .badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: var(--surface-alt);
        border-radius: 999px;
        padding: 4px 12px;
        font-size: 12px;
        color: var(--text-secondary);
        margin-bottom: 16px;
      }
      .hero h1 {
        font-size: 30px;
        font-weight: 500;
        margin: 0 0 10px;
        letter-spacing: -0.01em;
      }
      .hero p {
        font-size: 15px;
        color: var(--text-secondary);
        margin: 0 auto;
        max-width: 460px;
        line-height: 1.6;
      }

      .prompt-area {
        padding: 0 48px 12px;
      }
      .prompt-box {
        display: flex;
        align-items: center;
        gap: 10px;
        border: 0.5px solid var(--border-strong);
        border-radius: var(--radius-lg);
        padding: 12px 16px;
        text-decoration: none;
      }
      .prompt-box:hover,
      .prompt-box:focus {
        border-color: var(--accent);
        outline: none;
      }
      .prompt-text {
        flex: 1;
        font-size: 15px;
        font-family: var(--serif);
        color: var(--text);
      }
      .inquire {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: var(--accent-bg);
        color: var(--accent);
        border-radius: var(--radius-md);
        padding: 7px 14px;
        font-size: 13px;
        font-weight: 500;
        white-space: nowrap;
      }
      .chips {
        display: flex;
        gap: 8px;
        justify-content: center;
        margin-top: 10px;
        flex-wrap: wrap;
      }
      .chips a {
        font-size: 12px;
        color: var(--text-secondary);
        border: 0.5px solid var(--border);
        border-radius: 999px;
        padding: 4px 12px;
        text-decoration: none;
      }
      .chips a:hover,
      .chips a:focus {
        color: var(--accent);
        border-color: var(--accent);
      }

      .answers {
        padding: 20px 24px 24px;
      }
      .answers-label {
        font-size: 12px;
        color: var(--text-tertiary);
        text-align: center;
        margin: 0 0 12px;
        letter-spacing: 0.04em;
      }
      .answers-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 12px;
      }
      .answer-card {
        background: var(--surface-alt);
        border-radius: var(--radius-md);
        padding: 14px 16px;
      }
      .answer-card .asked {
        font-size: 12px;
        color: var(--text-secondary);
        margin: 0 0 6px;
      }
      .answer-card .quote {
        font-size: 13px;
        font-family: var(--serif);
        font-style: italic;
        margin: 0;
        line-height: 1.5;
        color: var(--text);
      }

      @media (max-width: 600px) {
        .prompt-area {
          padding: 0 20px 12px;
        }
        .topbar {
          flex-direction: column;
          align-items: flex-start;
        }
      }
    </style>
  </head>
  <body>
    <div class="frame">
      <header class="topbar">
        <div class="brand">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="2" y="6" width="20" height="12" rx="2"></rect>
            <path d="M6 10h0M10 10h0M14 10h0M18 10h0M6 14h0M18 14h0M9 14h6"></path>
          </svg>
          <span>TypewriterLM</span>
        </div>
        <nav>
          <a href="/instruct">Playground</a>
          <a href="/blog">Blog</a>
          <span>API</span>
          <span>Paper</span>
          <span>Models</span>
          <span class="nav-pill">&#129303; Hugging Face</span>
        </nav>
      </header>

      <section class="hero">
        <div class="badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="9"></circle>
            <path d="M12 7v5l3 3"></path>
          </svg>
          Knowledge cutoff: 1913 &middot; 7.24B parameters &middot; trained on 54B historical tokens
        </div>
        <h1>Ask a mind that stops at 1913</h1>
        <p>A language model trained only on the written world of 1700&ndash;1913. History means inquiry &mdash; run it yourself.</p>
      </section>

      <section class="prompt-area">
        <a class="prompt-box" href="/instruct">
          <span class="prompt-text">What is a computer?</span>
          <span class="inquire">Inquire
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6"></path>
            </svg>
          </span>
        </a>
        <div class="chips">
          <a href="/instruct">Will there soon be a war in Europe?</a>
          <a href="/instruct">Who is Albert Einstein?</a>
          <a href="/instruct">What cures consumption?</a>
        </div>
      </section>

      <section class="answers">
        <p class="answers-label">What it answers, in its own words</p>
        <div class="answers-grid">
          <div class="answer-card">
            <p class="asked">Asked about a computer</p>
            <p class="quote">"a person who performs arithmetical operations"</p>
          </div>
          <div class="answer-card">
            <p class="asked">Asked about Einstein</p>
            <p class="quote">"of whom we have not yet learned to speak as a physicist"</p>
          </div>
          <div class="answer-card">
            <p class="asked">Asked about war in Europe</p>
            <p class="quote">"it would not surprise me if this country were to go to war with France within ninety days"</p>
          </div>
        </div>
      </section>
    </div>
  </body>
</html>`;
