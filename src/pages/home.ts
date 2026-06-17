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
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        border-bottom: 1px solid var(--rule);
        padding-bottom: 6px;
        line-height: 1.6;
      }
      .dateline-tools {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 12px;
        flex-wrap: wrap;
      }
      .dateline-tools .center {
        margin: 0 auto;
        text-align: center;
      }
      .masthead {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 14px;
        padding: 18px 0 10px;
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
        margin: 10px 0 0;
      }
      .epigraph {
        font-style: italic;
        font-size: 20px;
        line-height: 1.7;
        max-width: 540px;
        margin: 0 auto 10px;
        text-align: center;
        border: none;
        padding: 0;
      }
      .hero .ornament {
        font-size: 14px;
        letter-spacing: 0.6em;
        color: var(--ink-faint);
        margin: 4px 0 10px;
      }
      .intro {
        max-width: 600px;
        margin: 18px auto 0;
        text-align: left;
        overflow: hidden;
      }
      .intro .lede {
        font-size: 15px;
        line-height: 1.75;
        margin: 0;
      }
      .feature {
        float: right;
        width: 190px;
        max-width: 42%;
        height: auto;
        margin: 0 0 8px 22px;
        shape-outside: content-box;
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
      }
      .prompt-text {
        flex: 1;
        min-width: 0;
        border: none;
        background: transparent;
        font-family: "Old Standard TT", Georgia, "Times New Roman", serif;
        font-size: 17px;
        font-style: italic;
        color: var(--ink);
        padding: 0;
      }
      .prompt-text:focus {
        outline: none;
      }
      .prompt-text::placeholder {
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
        padding: 8px 16px;
        white-space: nowrap;
        cursor: pointer;
      }
      .prompt-box:focus-within .inquire {
        background: transparent;
        color: var(--ink);
        box-shadow: 0 0 0 1px var(--ink) inset;
      }
      .inquire:hover {
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
      .chip {
        background: none;
        border: none;
        border-bottom: 1px dotted var(--ink-faint);
        padding: 0 0 1px;
        font-family: "Old Standard TT", Georgia, "Times New Roman", serif;
        font-size: 13px;
        font-style: italic;
        color: var(--ink-faint);
        cursor: pointer;
      }
      .chip:hover,
      .chip:focus {
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
        .epigraph {
          font-size: 17px;
        }
        .intro {
          text-align: center;
        }
        .feature {
          float: none;
          display: block;
          width: 200px;
          max-width: 70%;
          margin: 0 auto 12px;
        }
      }
    </style>
  </head>
  <body>
    <div class="sheet">
      <header>
        <div class="dateline dateline-tools">
          <span>Edited by Zhiwei Wang</span>
          <span class="center">London, 1938.</span>
          <span>Price One Penny.</span>
        </div>
        <div class="masthead">
          <span class="title">TypewriterLM</span>
        </div>
        <p class="motto">A language model trained only upon the written world of 1700&ndash;1938.</p>
        <nav class="contents">
          <a href="/blog">Research</a>
          <span class="sep">&middot;</span>
          <a href="https://arxiv.org/abs/2606.02991">Paper</a>
          <span class="sep">&middot;</span>
          <a href="https://huggingface.co/typewriter-ai">&#129303; Hugging Face</a>
        </nav>
      </header>

      <section class="hero">
        <blockquote class="epigraph">
          The weights remember what the words once meant.<br />
          The attention turns where the old authors turned.<br />
          What the model returns is not creation &mdash;<br />
          it is the archive, compressed and answerable.
        </blockquote>
        <div class="ornament">&#10070; &#10070; &#10070;</div>
        <div class="intro">
          <img class="feature" src="/typewriter_recursive.png" alt="A typewriter striking out the words: the cat sat on the mat" />
          <p class="lede">Behind this page is a language model trained on the written world of 1700&ndash;1938 &mdash; fifty-four billion tokens of books, pamphlets, parliamentary record, and scientific prose. It carries the knowledge and the blind spots of its era in equal measure. It has read one world war into its weights but cannot see the next. What you ask it is up to you. What it answers is drawn from the record alone.</p>
        </div>
        <p class="notice-line">Knowledge cutoff: 1938 &middot; 7.24B parameters &middot; trained on 54B historical tokens</p>
      </section>

      <section class="prompt-area">
        <p class="prompt-label">History means inquiry &mdash; conduct it yourself.</p>
        <form class="prompt-box" action="#" method="post">
          <input class="prompt-text" type="text" placeholder="Address your question to the machine&hellip;" autocomplete="off" />
          <button class="inquire" type="submit">Inquire &rarr;</button>
        </form>
        <div class="chips">
          <button class="chip" type="button">What is computation?</button>
          <button class="chip" type="button">Write an essay about industrialization.</button>
          <button class="chip" type="button">Write a poem upon the subject of typewriter.</button>
        </div>
        <script>
          (function(){
            var form = document.querySelector(".prompt-box");
            var input = form.querySelector(".prompt-text");
            var chips = document.querySelectorAll(".chip");
            var storageKey = "typewriter-inquiry";
            function goInstruct(question) {
              if (question) sessionStorage.setItem(storageKey, question);
              window.location.href = "/instruct";
            }
            form.addEventListener("submit", function(e) {
              e.preventDefault();
              goInstruct(input.value.trim());
            });
            for (var i = 0; i < chips.length; i++) {
              chips[i].addEventListener("click", function() {
                goInstruct(this.textContent.trim());
              });
            }
          })();
        </script>
      </section>

      <p class="colophon">A joint undertaking of UCL and Oxford &mdash; London, 1938</p>
    </div>
  </body>
</html>`;
