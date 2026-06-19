export const researchHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Enlarging the Scope of History &mdash; TypewriterLM</title>
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
        flex-wrap: wrap;
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        border-bottom: 1px solid var(--rule);
        padding-bottom: 6px;
        line-height: 1.6;
      }
      .dateline a {
        color: var(--ink);
        text-decoration: none;
      }
      .dateline a:hover,
      .dateline a:focus {
        text-decoration: underline;
      }

      .hero {
        text-align: center;
        padding: 26px 0 8px;
      }
      .notice-line {
        font-size: 12px;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--ink-faint);
        margin: 0 0 14px;
      }
      .hero h1 {
        font-size: 38px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.02em;
        line-height: 1.15;
        margin: 0 auto 6px;
        max-width: 700px;
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
        max-width: 560px;
        margin: 0 auto;
      }

      .article {
        max-width: 640px;
        margin: 22px auto 0;
        font-size: 16px;
        line-height: 1.7;
      }
      .article p {
        margin: 0 0 14px;
      }
      .article a {
        color: var(--ink);
      }
      .article .lede::first-letter {
        font-family: "UnifrakturCook", "Old Standard TT", serif;
        font-size: 54px;
        line-height: 0.85;
        float: left;
        padding: 6px 8px 0 0;
      }

      .section-label {
        text-align: center;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        margin: 30px 0 4px;
        border-top: 3px double var(--rule);
        padding-top: 14px;
      }
      .section-sub {
        text-align: center;
        font-style: italic;
        font-size: 14px;
        color: var(--ink-faint);
        margin: 0 0 16px;
      }

      .cards {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 14px;
      }
      .card {
        border: 1px solid var(--rule);
        background: var(--paper-deep);
        padding: 16px 18px 14px;
        display: flex;
        flex-direction: column;
      }
      .card.wide {
        grid-column: 1 / -1;
      }
      .card .kicker {
        font-size: 11px;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: var(--ink-faint);
        margin: 0 0 6px;
      }
      .card h3 {
        font-size: 19px;
        font-weight: 700;
        line-height: 1.25;
        margin: 0 0 8px;
      }
      .card p {
        font-size: 14.5px;
        line-height: 1.65;
        margin: 0 0 10px;
      }
      .card p:last-child {
        margin-bottom: 0;
      }
      .card .tag {
        margin-top: auto;
        padding-top: 8px;
        font-size: 12px;
        font-style: italic;
        color: var(--ink-faint);
        border-top: 1px dotted var(--ink-faint);
      }

      .caveat {
        border: 1px solid var(--rule);
        outline: 3px double var(--rule);
        outline-offset: 3px;
        background: var(--paper-deep);
        max-width: 640px;
        margin: 30px auto 0;
        padding: 18px 22px;
      }
      .caveat .kicker {
        font-size: 11px;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: var(--ink-faint);
        margin: 0 0 8px;
        text-align: center;
      }
      .caveat p {
        font-size: 15px;
        line-height: 1.7;
        margin: 0;
      }

      .reference {
        max-width: 640px;
        margin: 26px auto 0;
        font-size: 13px;
        line-height: 1.7;
        color: var(--ink-faint);
        border-top: 1px solid var(--rule);
        padding-top: 10px;
      }
      .reference strong {
        color: var(--ink);
      }
      .reference a {
        color: var(--ink);
      }

      .cta {
        text-align: center;
        margin: 26px 0 0;
      }
      .cta a {
        display: inline-block;
        font-size: 13px;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        background: var(--ink);
        color: var(--paper);
        padding: 10px 20px;
        text-decoration: none;
      }
      .cta a:hover,
      .cta a:focus {
        background: transparent;
        color: var(--ink);
        box-shadow: 0 0 0 1px var(--ink) inset;
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
          font-size: 28px;
        }
        .cards {
          grid-template-columns: 1fr;
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
          <span>Research</span>
        </div>
      </header>

      <section class="hero">
        <p class="notice-line">An essay upon the uses of a mind that stops at 1913</p>
        <h1>Enlarging the Scope<br />of History</h1>
        <div class="ornament">&#10070; &#10070; &#10070;</div>
        <p class="standfirst">What becomes possible when the study of the past acquires a new instrument &mdash; a language model that has read fifty-four billion words of the old world and not one word of ours.</p>
      </section>

      <div class="article">
        <p class="lede">History, the word, comes from the Greek <em>histor&iacute;a</em> &mdash; inquiry, knowledge gained through investigation. For two centuries the instruments of that inquiry have been settled: the archive, the footnote, the trained suspicion of the reader. TypewriterLM, a 7.24-billion-parameter language model trained exclusively on English text written between 1700 and 1913, is a genuinely new instrument &mdash; not a replacement for any of the old ones, but an addition to the kit. It does not know that the war came. It does not know what a computer is, except that it is &ldquo;a person who performs arithmetical operations.&rdquo; That ignorance, rigorously enforced, is the whole point.</p>
        <p>The accompanying paper describes how such a thing is built: a 54-billion-token corpus scrubbed of modern contamination, an instruction-tuning method in which every response must be lexically grounded in pre-1913 source passages, and a benchmark that measures how <em>surprised</em> the model is by events it should not know. What follows is a sketch of what the instrument is <em>for</em> &mdash; seven ways it enlarges the traditional scope of historical inquiry.</p>
      </div>

      <p class="section-label">Seven Enlargements</p>
      <p class="section-sub">of the traditional scope of inquiry</p>

      <div class="cards">
        <div class="card">
          <p class="kicker">I &middot; History of Expectations</p>
          <h3>Measuring the horizon of expectation</h3>
          <p>The German historian Reinhart Koselleck argued that every era lives between its &ldquo;space of experience&rdquo; and its &ldquo;horizon of expectation&rdquo; &mdash; what people had lived through versus what futures they considered possible. That second thing has always been nearly impossible to study rigorously, because hindsight contaminates everything: we read 1913 sources already knowing about 1914.</p>
          <p>The paper&rsquo;s surprisingness metric quietly changes this. When TypewriterLM assigns a probability to a statement about a future event, it is literally quantifying how thinkable that statement was within pre-1913 discourse. The decades-long debate over whether the Great War was anticipated or a bolt from the blue suddenly has an instrument: one can measure which war scenarios the aggregate written record found probable, improbable, or unimaginable.</p>
          <p class="tag">A new evidentiary genre for the history of expectations.</p>
        </div>

        <div class="card">
          <p class="kicker">II &middot; Conceptual History</p>
          <h3>Perplexity as a dating instrument</h3>
          <p>Flip the same metric around and you get a tool for conceptual history &mdash; Koselleck again, <em>Begriffsgeschichte</em>. A sentence that a pre-1913 model finds wildly improbable but a pre-1930 model finds ordinary marks the moment a concept became sayable.</p>
          <p>The paper proposes training models at successive temporal cutoffs, and that series would let historians chart not just when words appeared &mdash; dictionaries do that &mdash; but when whole ways of putting things entered the language: when &ldquo;the economy&rdquo; became something that could grow, when &ldquo;stress&rdquo; migrated from engineering to the psyche. Word-frequency tools count tokens; a language model measures the probability of entire thoughts.</p>
          <p class="tag">When did this become sayable? is now an empirical question.</p>
        </div>

        <div class="card">
          <p class="kicker">III &middot; History of Science</p>
          <h3>The multiple-discovery question</h3>
          <p>Behind the headline &ldquo;Einstein test&rdquo; &mdash; could a model trained only on pre-1905 physics derive special relativity? &mdash; lies a serious scholarly use. Historians of science have long debated Merton&rsquo;s thesis that discoveries are &ldquo;multiples,&rdquo; products of ideas already in the air rather than lone genius.</p>
          <p>A leakage-free period model gives a way to probe the ambient discourse: how close to relativity, or natural selection, or germ theory, does the textual record get on its own? Even negative results are informative &mdash; they measure exactly how large the conceptual leap was.</p>
          <p class="tag">An instrument for what was &ldquo;in the air.&rdquo;</p>
        </div>

        <div class="card">
          <p class="kicker">IV &middot; Method</p>
          <h3>Hypothesis generation, archive as ground truth</h3>
          <p>This framing defuses the obvious objection &mdash; the model confabulates, so how can it be evidence? The answer: it isn&rsquo;t evidence. It is a finding aid. Probe the model, notice it persistently associates, say, vegetarianism with social reform movements, and you have generated a hypothesis plus implicit search terms; then you go verify in the actual digitized archive.</p>
          <p>The model functions as a compressed, interactive index of fifty-four billion tokens &mdash; distant reading you can interrogate conversationally. The inquiry loop is: ask the engine, then check the sources.</p>
          <p class="tag">Histor&iacute;a made into a workflow.</p>
        </div>

        <div class="card">
          <p class="kicker">V &middot; Archival Science</p>
          <h3>A mirror held up to the archive itself</h3>
          <p>Here is a counterintuitive one: the model&rsquo;s biases are a feature for one specific field. Because 97.7% of the corpus is Harvard&rsquo;s digitized book collection, TypewriterLM does not model &ldquo;the past&rdquo; &mdash; it models what one great Anglophone library preserved and digitized.</p>
          <p>Archival science and the historiography of silence &mdash; whose voices survive? whose were never written down? &mdash; gain a new object of study: one can probe the model to characterize, at scale, exactly what the elite printed record contains and omits about women, colonized peoples, the working class. The model makes the archive&rsquo;s shape visible in a way shelf-browsing never could.</p>
          <p class="tag">The shape of the archive, made legible.</p>
        </div>

        <div class="card">
          <p class="kicker">VI &middot; Historiography &harr; NLP</p>
          <h3>Machine-enforced source criticism</h3>
          <p>The lexical grounding constraint &mdash; every response built only from words attested in a pre-1913 source passage &mdash; is, structurally, the historian&rsquo;s citation discipline turned into a verifier program. The interesting direction is the reverse one: historiography has spent two centuries developing rules for trustworthy testimony &mdash; Ranke&rsquo;s <em>wie es eigentlich gewesen</em>, source criticism, the footnote &mdash; and now NLP is independently reinventing those rules under the name &ldquo;grounding,&rdquo; because it faces the same problem: a fluent narrator that cannot be trusted.</p>
          <p>The study of history can enrich the study of language models at least as much as the reverse. It is telling that one of the rival models in this space is literally named Ranke-4B.</p>
          <p class="tag">Two centuries of method, rediscovered as engineering.</p>
        </div>

        <div class="card wide">
          <p class="kicker">VII &middot; Pedagogy</p>
          <h3>Defamiliarization as teaching</h3>
          <p>The deepest skill history teaches is that the past is not the present in costume. Nothing communicates this faster than asking a fluent, articulate intelligence &ldquo;what is a computer?&rdquo; and receiving &ldquo;a person who performs arithmetical operations.&rdquo; Students feel the strangeness in seconds &mdash; the casual assumptions, the missing concepts, the different common sense &mdash; and that visceral encounter with otherness is precisely what textbooks struggle to produce. The Inquiry Desk on this site is, among other things, a pedagogical instrument for the single hardest lesson in historical thinking.</p>
        </div>
      </div>

      <div class="caveat">
        <p class="kicker">The Honest Caveat</p>
        <p>The paper hands it to us directly: even a careful pipeline leaked &mdash; the model surfaced knowledge of the 1964 Civil Rights Act despite a 1913 cutoff. So the model is itself a source requiring criticism, never a witness to be taken at its word. But notice that this caveat is not a weakness of the framing; it is the completion of it. An instrument of inquiry that must itself be interrogated is the most historiographically authentic tool imaginable.</p>
      </div>

      <div class="reference">
        <p><strong>Reference.</strong> Luo, X., Shinnick, Z., Griesshaber, N., Wang, Y., Yu, J., Shi, F., Torr, P., and Lu, Y. <em>Pretraining Language Models on Historical Text.</em> University of Waterloo, Vector Institute, Adelaide University, University of Oxford, and University College London. <a href="https://arxiv.org/abs/2606.02991">arXiv:2606.02991</a>. The paper introduces TypewriterLM (7.24B parameters, knowledge cutoff 1913), the 54-billion-token TypewriterCorpus, lexically grounded instruction tuning (History-LIMA, History-SelfInstruct), and the History-Event benchmark of 2,344 events for measuring temporal surprisingness.</p>
      </div>

      <div class="cta">
        <a href="/instruct">Conduct the inquiry yourself &rarr;</a>
      </div>

      <p class="colophon">A joint undertaking of UCL and Oxford &mdash; London, 1913</p>
    </div>
  </body>
</html>`;
