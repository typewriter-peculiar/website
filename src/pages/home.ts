export const homeHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>TypewriterLM &mdash; Ask a mind that stops at 1913</title>
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

      /* ---------- masthead ---------- */
      .dateline {
        text-align: center;
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        border-bottom: 1px solid var(--rule);
        padding-bottom: 6px;
        line-height: 1.6;
      }
      .masthead {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 14px;
        padding: 18px 0 10px;
      }
      .masthead img {
        width: 54px;
        height: 54px;
        mix-blend-mode: multiply;
      }
      .masthead .title {
        font-family: "UnifrakturCook", "Old Standard TT", serif;
        font-size: 54px;
        line-height: 1;
      }
      .motto {
        text-align: center;
        font-style: italic;
        font-size: 13px;
        color: var(--ink-faint);
        margin: 0 0 12px;
      }
      nav.contents {
        display: flex;
        justify-content: center;
        gap: 8px;
        flex-wrap: wrap;
        border-top: 3px double var(--rule);
        border-bottom: 3px double var(--rule);
        padding: 7px 0;
        font-size: 13px;
        letter-spacing: 0.14em;
        text-transform: uppercase;
      }
      nav.contents a {
        color: var(--ink);
        text-decoration: none;
      }
      nav.contents a:hover,
      nav.contents a:focus {
        text-decoration: underline;
      }
      nav.contents .sep {
        color: var(--ink-faint);
      }

      /* ---------- hero ---------- */
      .hero {
        text-align: center;
        padding: 26px 0 6px;
      }
      .notice-line {
        font-size: 12px;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--ink-faint);
        margin: 0 0 14px;
      }
      .hero h1 {
        font-size: 42px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.02em;
        line-height: 1.15;
        margin: 0 auto 6px;
        max-width: 640px;
      }
      .hero .ornament {
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

      /* ---------- inquiry form ---------- */
      .prompt-area {
        margin: 26px auto 6px;
        max-width: 620px;
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
        padding: 13px 18px;
        text-decoration: none;
        color: var(--ink);
      }
      .prompt-text {
        flex: 1;
        font-size: 17px;
        font-style: italic;
      }
      .inquire {
        font-size: 13px;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        background: var(--ink);
        color: var(--paper);
        padding: 8px 16px;
        white-space: nowrap;
      }
      .prompt-box:hover .inquire,
      .prompt-box:focus .inquire {
        background: transparent;
        color: var(--ink);
        box-shadow: 0 0 0 1px var(--ink) inset;
      }
      .chips {
        display: flex;
        gap: 8px 18px;
        justify-content: center;
        margin-top: 14px;
        flex-wrap: wrap;
      }
      .chips a {
        font-size: 13px;
        font-style: italic;
        color: var(--ink-faint);
        text-decoration: none;
        border-bottom: 1px dotted var(--ink-faint);
        padding-bottom: 1px;
      }
      .chips a:hover,
      .chips a:focus {
        color: var(--ink);
        border-bottom-color: var(--ink);
      }

      /* ---------- colophon ---------- */
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
        .masthead .title {
          font-size: 38px;
        }
        .masthead img {
          width: 42px;
          height: 42px;
        }
        .hero h1 {
          font-size: 30px;
        }
      }
    </style>
  </head>
  <body>
    <div class="sheet">
      <header>
        <div class="dateline">
          Vol. I. &mdash; No. 1. &middot; London, Thursday, June 12, 1913. &middot; Edited by Zhiwei Wang &middot; Price One Penny.
        </div>
        <div class="masthead">
          <img src="/typewriterlm_logo.png" alt="" aria-hidden="true" />
          <span class="title">TypewriterLM</span>
        </div>
        <p class="motto">Knowledge gained through investigation &mdash; histor&iacute;a.</p>
        <nav class="contents">
          <a href="/blog">Blog</a>
          <span class="sep">&middot;</span>
          <span>Paper</span>
          <span class="sep">&middot;</span>
          <span>&#129303; Hugging Face</span>
        </nav>
      </header>

      <section class="hero">
        <p class="notice-line">Knowledge cutoff: 1913 &middot; 7.24B parameters &middot; trained on 54B historical tokens</p>
        <h1>Ask a Mind<br />That Stops at 1913</h1>
        <div class="ornament">&#10070; &#10070; &#10070;</div>
        <p class="standfirst">A language model trained only upon the written world of 1700&ndash;1913. History means inquiry &mdash; conduct it yourself.</p>
      </section>

      <section class="prompt-area">
        <p class="prompt-label">Inquiries Within</p>
        <a class="prompt-box" href="/instruct">
          <span class="prompt-text">What is a computer?</span>
          <span class="inquire">Inquire &rarr;</span>
        </a>
        <div class="chips">
          <a href="/instruct">Will there soon be a war in Europe?</a>
          <a href="/instruct">Compose a poem upon the subject of typewriter.</a>
          <a href="/instruct">What cures consumption?</a>
        </div>
      </section>

      <p class="colophon">A joint undertaking of UCL and the University of Oxford &mdash; London, 1913</p>
    </div>
  </body>
</html>`;
