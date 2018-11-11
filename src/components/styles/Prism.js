import { injectGlobal } from 'emotion';

const Prism = injectGlobal`
  code[class*="language-"],
  pre[class*="language-"] {
      font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
      text-align: left;
      white-space: pre;
      word-spacing: normal;
      word-break: normal;
      word-wrap: normal;
      line-height: 1.5;
      tab-size: 4;
      hyphens: none;
  }

  /* Code Blocks */
  pre[class*="language-"] {
      padding: .4em .8em;
      margin: .5em 0;
      overflow: auto;
      background: black;
      background-size: 1em 1em;
      border-radius: .3em;
  }

  code[class*="language-"] {
      background: black;
      color: white;
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
      padding: .1em .3em;
      border-radius: .3em;
      box-shadow: none;
      white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
      color: #aaa;
  }

  .token.punctuation {
      color: #999;
  }

  .namespace {
      opacity: .7;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol {
      color: #0cf;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin {
      color: yellow;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .toke.variable,
  .token.inserted {
      color: yellowgreen;
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
      color: deeppink;
  }

  .token.regex,
  .token.important {
      color: orange;
  }

  .token.important,
  .token.bold {
      font-weight: bold;
  }
  .token.italic {
      font-style: italic;
  }

  .token.entity {
      cursor: help;
  }

  .token.deleted {
      color: red;
  }

  .gatsby-highlight-code-line {
      background-color: #222;
      display: block;
      margin-right: -1em;
      margin-left: -1em;
      padding-right: 1em;
      padding-left: 0.75em;
      border-left: 0.25em solid #f44;
  }

  .gatsby-highlight {
      background-color: black;
      border-radius: 0.3em;
      margin: 0.5em 0;
      padding: 1em;
      overflow: auto;
  }

  .gatsby-highlight pre[class*="language-"] {
      background-color: transparent;
      margin: 0;
      padding: 0;
      overflow: initial;
      float: left;
      min-width: 100%;
  }
`;

export default Prism;
