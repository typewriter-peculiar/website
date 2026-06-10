export const homeHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>The Study of History in the Age of Machine Learning</title>
    <style>
      body {
        max-width: 720px;
        margin: 40px auto;
        padding: 0 20px;
        font-family: system-ui, sans-serif;
      }
      nav {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-top: 24px;
      }
      a {
        display: block;
        padding: 16px;
        border: 1px solid #ddd;
        border-radius: 6px;
        color: #6B4226;
        text-decoration: none;
        font-weight: 700;
      }
      a:hover,
      a:focus {
        outline: 2px solid #6B4226;
      }
      .hero {
        display: block;
        width: 100%;
        max-width: 420px;
        height: auto;
        margin: 24px auto;
      }
    </style>
  </head>
  <body>
    <h1>The Study of History<br />in the Age of Machine Learning</h1>
    <img class="hero" src="/typewriter_recursive.png" alt="A typewriter typing the words: the cat sat on the mat ..." />
    <nav>
      <a href="/instruct">💬 instruct &mdash; chat with 1913</a>
      <a href="/blog">blog</a>
    </nav>
  </body>
</html>`;
