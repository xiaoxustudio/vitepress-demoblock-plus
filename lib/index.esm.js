import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const bundledLanguagesInfo = [
  {
    "id": "abap",
    "name": "ABAP",
    "import": () => import('./abap-PfGvLjtO.js')
  },
  {
    "id": "actionscript-3",
    "name": "ActionScript",
    "import": () => import('./actionscript-3-B5SPWWQA.js')
  },
  {
    "id": "ada",
    "name": "Ada",
    "import": () => import('./ada-CjZNw5Pr.js')
  },
  {
    "id": "angular-html",
    "name": "Angular HTML",
    "import": () => import('./angular-html-_wiXlBRM.js').then(function (n) { return n.f; })
  },
  {
    "id": "angular-ts",
    "name": "Angular TypeScript",
    "import": () => import('./angular-ts-B_2xYLIQ.js')
  },
  {
    "id": "apache",
    "name": "Apache Conf",
    "import": () => import('./apache-US6q4No-.js')
  },
  {
    "id": "apex",
    "name": "Apex",
    "import": () => import('./apex-C1njo6Pa.js')
  },
  {
    "id": "apl",
    "name": "APL",
    "import": () => import('./apl-C9W6vCle.js')
  },
  {
    "id": "applescript",
    "name": "AppleScript",
    "import": () => import('./applescript-CnaU4fBc.js')
  },
  {
    "id": "ara",
    "name": "Ara",
    "import": () => import('./ara-DJeuA4UL.js')
  },
  {
    "id": "asciidoc",
    "name": "AsciiDoc",
    "aliases": [
      "adoc"
    ],
    "import": () => import('./asciidoc-DBzY_SFp.js')
  },
  {
    "id": "asm",
    "name": "Assembly",
    "import": () => import('./asm-Ckd3WCx6.js')
  },
  {
    "id": "astro",
    "name": "Astro",
    "import": () => import('./astro-CUYhhFL8.js')
  },
  {
    "id": "awk",
    "name": "AWK",
    "import": () => import('./awk-Bp3NCCJk.js')
  },
  {
    "id": "ballerina",
    "name": "Ballerina",
    "import": () => import('./ballerina-HV56tcmn.js')
  },
  {
    "id": "bat",
    "name": "Batch File",
    "aliases": [
      "batch"
    ],
    "import": () => import('./bat-DH3piprL.js')
  },
  {
    "id": "beancount",
    "name": "Beancount",
    "import": () => import('./beancount-QTJZpiNr.js')
  },
  {
    "id": "berry",
    "name": "Berry",
    "aliases": [
      "be"
    ],
    "import": () => import('./berry-fg7zcndx.js')
  },
  {
    "id": "bibtex",
    "name": "BibTeX",
    "import": () => import('./bibtex-_nVQ7ksi.js')
  },
  {
    "id": "bicep",
    "name": "Bicep",
    "import": () => import('./bicep-3thVNeU0.js')
  },
  {
    "id": "blade",
    "name": "Blade",
    "import": () => import('./blade-DqwRBQPS.js')
  },
  {
    "id": "c",
    "name": "C",
    "import": () => import('./c-RparLEUA.js')
  },
  {
    "id": "cadence",
    "name": "Cadence",
    "aliases": [
      "cdc"
    ],
    "import": () => import('./cadence-y7JF8AVn.js')
  },
  {
    "id": "clarity",
    "name": "Clarity",
    "import": () => import('./clarity-BJCq7qS_.js')
  },
  {
    "id": "clojure",
    "name": "Clojure",
    "aliases": [
      "clj"
    ],
    "import": () => import('./clojure-DUldyaQj.js')
  },
  {
    "id": "cmake",
    "name": "CMake",
    "import": () => import('./cmake-a-8EfZAH.js')
  },
  {
    "id": "cobol",
    "name": "COBOL",
    "import": () => import('./cobol-CbLmteZD.js')
  },
  {
    "id": "codeowners",
    "name": "CODEOWNERS",
    "import": () => import('./codeowners-Cn8XxHOJ.js')
  },
  {
    "id": "codeql",
    "name": "CodeQL",
    "aliases": [
      "ql"
    ],
    "import": () => import('./codeql-DSqC2RW9.js')
  },
  {
    "id": "coffee",
    "name": "CoffeeScript",
    "aliases": [
      "coffeescript"
    ],
    "import": () => import('./coffee-CI2tvHVN.js')
  },
  {
    "id": "common-lisp",
    "name": "Common Lisp",
    "aliases": [
      "lisp"
    ],
    "import": () => import('./common-lisp-C5mZjXQi.js')
  },
  {
    "id": "coq",
    "name": "Coq",
    "import": () => import('./coq-Cvvtg-18.js')
  },
  {
    "id": "cpp",
    "name": "C++",
    "aliases": [
      "c++"
    ],
    "import": () => import('./cpp-CX-2wqD_.js')
  },
  {
    "id": "crystal",
    "name": "Crystal",
    "import": () => import('./crystal-CiIzc6_O.js')
  },
  {
    "id": "csharp",
    "name": "C#",
    "aliases": [
      "c#",
      "cs"
    ],
    "import": () => import('./csharp-qXkRCBoz.js')
  },
  {
    "id": "css",
    "name": "CSS",
    "import": () => import('./css-DoNn9y_q.js')
  },
  {
    "id": "csv",
    "name": "CSV",
    "import": () => import('./csv-SV4Sx2_F.js')
  },
  {
    "id": "cue",
    "name": "CUE",
    "import": () => import('./cue-CLkJwmoA.js')
  },
  {
    "id": "cypher",
    "name": "Cypher",
    "aliases": [
      "cql"
    ],
    "import": () => import('./cypher-MPgrTNlt.js')
  },
  {
    "id": "d",
    "name": "D",
    "import": () => import('./d-CQFbVqSj.js')
  },
  {
    "id": "dart",
    "name": "Dart",
    "import": () => import('./dart-DFZ6KCMX.js')
  },
  {
    "id": "dax",
    "name": "DAX",
    "import": () => import('./dax-DT96b3ev.js')
  },
  {
    "id": "desktop",
    "name": "Desktop",
    "import": () => import('./desktop-CgQIgD52.js')
  },
  {
    "id": "diff",
    "name": "Diff",
    "import": () => import('./diff-VMUPACBq.js')
  },
  {
    "id": "docker",
    "name": "Dockerfile",
    "aliases": [
      "dockerfile"
    ],
    "import": () => import('./docker-t1MdAjrc.js')
  },
  {
    "id": "dotenv",
    "name": "dotEnv",
    "import": () => import('./dotenv-ua7-lU6L.js')
  },
  {
    "id": "dream-maker",
    "name": "Dream Maker",
    "import": () => import('./dream-maker-CTzOhkuS.js')
  },
  {
    "id": "edge",
    "name": "Edge",
    "import": () => import('./edge-ClKPT6cD.js')
  },
  {
    "id": "elixir",
    "name": "Elixir",
    "import": () => import('./elixir-DuNB1BBS.js')
  },
  {
    "id": "elm",
    "name": "Elm",
    "import": () => import('./elm-CrGdvw7C.js')
  },
  {
    "id": "emacs-lisp",
    "name": "Emacs Lisp",
    "aliases": [
      "elisp"
    ],
    "import": () => import('./emacs-lisp-B9JeC_yr.js')
  },
  {
    "id": "erb",
    "name": "ERB",
    "import": () => import('./erb-DNw09RIH.js')
  },
  {
    "id": "erlang",
    "name": "Erlang",
    "aliases": [
      "erl"
    ],
    "import": () => import('./erlang-C0ORVSrU.js')
  },
  {
    "id": "fennel",
    "name": "Fennel",
    "import": () => import('./fennel-BDlLDsUs.js')
  },
  {
    "id": "fish",
    "name": "Fish",
    "import": () => import('./fish-Mo8MO8cG.js')
  },
  {
    "id": "fluent",
    "name": "Fluent",
    "aliases": [
      "ftl"
    ],
    "import": () => import('./fluent-OTCBTsog.js')
  },
  {
    "id": "fortran-fixed-form",
    "name": "Fortran (Fixed Form)",
    "aliases": [
      "f",
      "for",
      "f77"
    ],
    "import": () => import('./fortran-fixed-form-DxtoEefG.js')
  },
  {
    "id": "fortran-free-form",
    "name": "Fortran (Free Form)",
    "aliases": [
      "f90",
      "f95",
      "f03",
      "f08",
      "f18"
    ],
    "import": () => import('./fortran-free-form-BoQi57qK.js')
  },
  {
    "id": "fsharp",
    "name": "F#",
    "aliases": [
      "f#",
      "fs"
    ],
    "import": () => import('./fsharp-J-ZpmV7b.js')
  },
  {
    "id": "gdresource",
    "name": "GDResource",
    "import": () => import('./gdresource-DU-WF2FF.js')
  },
  {
    "id": "gdscript",
    "name": "GDScript",
    "import": () => import('./gdscript-CX8wliWw.js')
  },
  {
    "id": "gdshader",
    "name": "GDShader",
    "import": () => import('./gdshader-BO43XYMV.js')
  },
  {
    "id": "genie",
    "name": "Genie",
    "import": () => import('./genie-COTUmeg_.js')
  },
  {
    "id": "gherkin",
    "name": "Gherkin",
    "import": () => import('./gherkin-YXIT6vWv.js')
  },
  {
    "id": "git-commit",
    "name": "Git Commit Message",
    "import": () => import('./git-commit-B_f177bH.js')
  },
  {
    "id": "git-rebase",
    "name": "Git Rebase Message",
    "import": () => import('./git-rebase-B0rO9q8d.js')
  },
  {
    "id": "gleam",
    "name": "Gleam",
    "import": () => import('./gleam-r8mwmyOD.js')
  },
  {
    "id": "glimmer-js",
    "name": "Glimmer JS",
    "aliases": [
      "gjs"
    ],
    "import": () => import('./glimmer-js-MozmigTL.js')
  },
  {
    "id": "glimmer-ts",
    "name": "Glimmer TS",
    "aliases": [
      "gts"
    ],
    "import": () => import('./glimmer-ts-BcEBv08f.js')
  },
  {
    "id": "glsl",
    "name": "GLSL",
    "import": () => import('./glsl-vKfMnumi.js')
  },
  {
    "id": "gnuplot",
    "name": "Gnuplot",
    "import": () => import('./gnuplot-TLobhHSn.js')
  },
  {
    "id": "go",
    "name": "Go",
    "import": () => import('./go-Dp0tar3r.js')
  },
  {
    "id": "graphql",
    "name": "GraphQL",
    "aliases": [
      "gql"
    ],
    "import": () => import('./graphql-YkF5oJML.js')
  },
  {
    "id": "groovy",
    "name": "Groovy",
    "import": () => import('./groovy-xt9ETOUK.js')
  },
  {
    "id": "hack",
    "name": "Hack",
    "import": () => import('./hack-CgVeLdAF.js')
  },
  {
    "id": "haml",
    "name": "Ruby Haml",
    "import": () => import('./haml-DTMQzsJV.js')
  },
  {
    "id": "handlebars",
    "name": "Handlebars",
    "aliases": [
      "hbs"
    ],
    "import": () => import('./handlebars-B4IK_qch.js')
  },
  {
    "id": "haskell",
    "name": "Haskell",
    "aliases": [
      "hs"
    ],
    "import": () => import('./haskell-UXfZSk_5.js')
  },
  {
    "id": "haxe",
    "name": "Haxe",
    "import": () => import('./haxe-uPj594z5.js')
  },
  {
    "id": "hcl",
    "name": "HashiCorp HCL",
    "import": () => import('./hcl-i6gSlZqY.js')
  },
  {
    "id": "hjson",
    "name": "Hjson",
    "import": () => import('./hjson-Da_qJv9S.js')
  },
  {
    "id": "hlsl",
    "name": "HLSL",
    "import": () => import('./hlsl-DxdRzscs.js')
  },
  {
    "id": "html",
    "name": "HTML",
    "import": () => import('./html-Eq4sA2a8.js')
  },
  {
    "id": "html-derivative",
    "name": "HTML (Derivative)",
    "import": () => import('./html-derivative-B_UhcMkx.js')
  },
  {
    "id": "http",
    "name": "HTTP",
    "import": () => import('./http-B0CiWgv6.js')
  },
  {
    "id": "hxml",
    "name": "HXML",
    "import": () => import('./hxml-Zl3a4P_8.js')
  },
  {
    "id": "hy",
    "name": "Hy",
    "import": () => import('./hy-BnFtj81t.js')
  },
  {
    "id": "imba",
    "name": "Imba",
    "import": () => import('./imba-DBVe8Aym.js')
  },
  {
    "id": "ini",
    "name": "INI",
    "aliases": [
      "properties"
    ],
    "import": () => import('./ini-UFCqVqOy.js')
  },
  {
    "id": "java",
    "name": "Java",
    "import": () => import('./java-D1WhEMP8.js')
  },
  {
    "id": "javascript",
    "name": "JavaScript",
    "aliases": [
      "js"
    ],
    "import": () => import('./javascript-C67l1L3o.js')
  },
  {
    "id": "jinja",
    "name": "Jinja",
    "import": () => import('./jinja-DVZkfrpO.js')
  },
  {
    "id": "jison",
    "name": "Jison",
    "import": () => import('./jison-6pxZ7IDQ.js')
  },
  {
    "id": "json",
    "name": "JSON",
    "import": () => import('./json-B3_XiHYH.js')
  },
  {
    "id": "json5",
    "name": "JSON5",
    "import": () => import('./json5-D9-7wPSE.js')
  },
  {
    "id": "jsonc",
    "name": "JSON with Comments",
    "import": () => import('./jsonc-hcRuV5XG.js')
  },
  {
    "id": "jsonl",
    "name": "JSON Lines",
    "import": () => import('./jsonl-rweqJBk5.js')
  },
  {
    "id": "jsonnet",
    "name": "Jsonnet",
    "import": () => import('./jsonnet-gOCFe-ye.js')
  },
  {
    "id": "jssm",
    "name": "JSSM",
    "aliases": [
      "fsl"
    ],
    "import": () => import('./jssm-D7LXcue7.js')
  },
  {
    "id": "jsx",
    "name": "JSX",
    "import": () => import('./jsx-Dhek_lNz.js')
  },
  {
    "id": "julia",
    "name": "Julia",
    "aliases": [
      "jl"
    ],
    "import": () => import('./julia-DP0-kxhK.js')
  },
  {
    "id": "kotlin",
    "name": "Kotlin",
    "aliases": [
      "kt",
      "kts"
    ],
    "import": () => import('./kotlin-Tza7BhgS.js')
  },
  {
    "id": "kusto",
    "name": "Kusto",
    "aliases": [
      "kql"
    ],
    "import": () => import('./kusto-CMHlI5_o.js')
  },
  {
    "id": "latex",
    "name": "LaTeX",
    "import": () => import('./latex-DueZhn8H.js')
  },
  {
    "id": "lean",
    "name": "Lean 4",
    "aliases": [
      "lean4"
    ],
    "import": () => import('./lean-D6DOmPQZ.js')
  },
  {
    "id": "less",
    "name": "Less",
    "import": () => import('./less-CDJTZNZx.js')
  },
  {
    "id": "liquid",
    "name": "Liquid",
    "import": () => import('./liquid-Bqd5xN-j.js')
  },
  {
    "id": "log",
    "name": "Log file",
    "import": () => import('./log-DErWLWEo.js')
  },
  {
    "id": "logo",
    "name": "Logo",
    "import": () => import('./logo-Ck7ZNctf.js')
  },
  {
    "id": "lua",
    "name": "Lua",
    "import": () => import('./lua-pd6nIbVt.js')
  },
  {
    "id": "luau",
    "name": "Luau",
    "import": () => import('./luau-DNLW4F02.js')
  },
  {
    "id": "make",
    "name": "Makefile",
    "aliases": [
      "makefile"
    ],
    "import": () => import('./make-CH8ivb4o.js')
  },
  {
    "id": "markdown",
    "name": "Markdown",
    "aliases": [
      "md"
    ],
    "import": () => import('./markdown-Bjhbzspo.js')
  },
  {
    "id": "marko",
    "name": "Marko",
    "import": () => import('./marko-By4T9vpq.js')
  },
  {
    "id": "matlab",
    "name": "MATLAB",
    "import": () => import('./matlab-DQ1RowLR.js')
  },
  {
    "id": "mdc",
    "name": "MDC",
    "import": () => import('./mdc-BPdsWDeB.js')
  },
  {
    "id": "mdx",
    "name": "MDX",
    "import": () => import('./mdx-LyeGqp7f.js')
  },
  {
    "id": "mermaid",
    "name": "Mermaid",
    "import": () => import('./mermaid-CIG4iGx1.js')
  },
  {
    "id": "mojo",
    "name": "Mojo",
    "import": () => import('./mojo-D33nq73j.js')
  },
  {
    "id": "move",
    "name": "Move",
    "import": () => import('./move-BltUafnN.js')
  },
  {
    "id": "narrat",
    "name": "Narrat Language",
    "aliases": [
      "nar"
    ],
    "import": () => import('./narrat-BCS3F2yp.js')
  },
  {
    "id": "nextflow",
    "name": "Nextflow",
    "aliases": [
      "nf"
    ],
    "import": () => import('./nextflow-CR3STrlG.js')
  },
  {
    "id": "nginx",
    "name": "Nginx",
    "import": () => import('./nginx-BoKi2qIY.js')
  },
  {
    "id": "nim",
    "name": "Nim",
    "import": () => import('./nim-D_X8_hY5.js')
  },
  {
    "id": "nix",
    "name": "Nix",
    "import": () => import('./nix-B256vN7E.js')
  },
  {
    "id": "nushell",
    "name": "nushell",
    "aliases": [
      "nu"
    ],
    "import": () => import('./nushell-BBODmBJi.js')
  },
  {
    "id": "objective-c",
    "name": "Objective-C",
    "aliases": [
      "objc"
    ],
    "import": () => import('./objective-c-DOS22jA9.js')
  },
  {
    "id": "objective-cpp",
    "name": "Objective-C++",
    "import": () => import('./objective-cpp-TRdlEk2g.js')
  },
  {
    "id": "ocaml",
    "name": "OCaml",
    "import": () => import('./ocaml-qBzckQCJ.js')
  },
  {
    "id": "pascal",
    "name": "Pascal",
    "import": () => import('./pascal-3HTpnwpp.js')
  },
  {
    "id": "perl",
    "name": "Perl",
    "import": () => import('./perl-CzuAIuGO.js')
  },
  {
    "id": "php",
    "name": "PHP",
    "import": () => import('./php-BhYZK4_-.js')
  },
  {
    "id": "plsql",
    "name": "PL/SQL",
    "import": () => import('./plsql-C0fyqsO0.js')
  },
  {
    "id": "po",
    "name": "Gettext PO",
    "aliases": [
      "pot",
      "potx"
    ],
    "import": () => import('./po-CcCGIg8G.js')
  },
  {
    "id": "postcss",
    "name": "PostCSS",
    "import": () => import('./postcss-wLX4xaF-.js')
  },
  {
    "id": "powerquery",
    "name": "PowerQuery",
    "import": () => import('./powerquery-Cu21y3vL.js')
  },
  {
    "id": "powershell",
    "name": "PowerShell",
    "aliases": [
      "ps",
      "ps1"
    ],
    "import": () => import('./powershell-Ck7-Ofz9.js')
  },
  {
    "id": "prisma",
    "name": "Prisma",
    "import": () => import('./prisma-BZ6ds9Dc.js')
  },
  {
    "id": "prolog",
    "name": "Prolog",
    "import": () => import('./prolog--cKXH8mU.js')
  },
  {
    "id": "proto",
    "name": "Protocol Buffer 3",
    "aliases": [
      "protobuf"
    ],
    "import": () => import('./proto-Dz5a3V6g.js')
  },
  {
    "id": "pug",
    "name": "Pug",
    "aliases": [
      "jade"
    ],
    "import": () => import('./pug-BuUjPLGk.js')
  },
  {
    "id": "puppet",
    "name": "Puppet",
    "import": () => import('./puppet-CfutUqpN.js')
  },
  {
    "id": "purescript",
    "name": "PureScript",
    "import": () => import('./purescript-BlP6AdMt.js')
  },
  {
    "id": "python",
    "name": "Python",
    "aliases": [
      "py"
    ],
    "import": () => import('./python-DdAFQc43.js')
  },
  {
    "id": "qml",
    "name": "QML",
    "import": () => import('./qml-ByojCR7G.js')
  },
  {
    "id": "qmldir",
    "name": "QML Directory",
    "import": () => import('./qmldir-CAUG0jcA.js')
  },
  {
    "id": "qss",
    "name": "Qt Style Sheets",
    "import": () => import('./qss-D0sDDoJ-.js')
  },
  {
    "id": "r",
    "name": "R",
    "import": () => import('./r-VExt3r4_.js')
  },
  {
    "id": "racket",
    "name": "Racket",
    "import": () => import('./racket-CSvKQcU8.js')
  },
  {
    "id": "raku",
    "name": "Raku",
    "aliases": [
      "perl6"
    ],
    "import": () => import('./raku-B5YGNUlb.js')
  },
  {
    "id": "razor",
    "name": "ASP.NET Razor",
    "import": () => import('./razor-CL8fgQcy.js')
  },
  {
    "id": "reg",
    "name": "Windows Registry Script",
    "import": () => import('./reg-DnkMdH7P.js')
  },
  {
    "id": "regexp",
    "name": "RegExp",
    "aliases": [
      "regex"
    ],
    "import": () => import('./regexp-1N4mqI49.js')
  },
  {
    "id": "rel",
    "name": "Rel",
    "import": () => import('./rel-CrB3NqNz.js')
  },
  {
    "id": "riscv",
    "name": "RISC-V",
    "import": () => import('./riscv-jcVfKuR4.js')
  },
  {
    "id": "rst",
    "name": "reStructuredText",
    "import": () => import('./rst-CMLN9-mn.js')
  },
  {
    "id": "ruby",
    "name": "Ruby",
    "aliases": [
      "rb"
    ],
    "import": () => import('./ruby-m93CscaW.js')
  },
  {
    "id": "rust",
    "name": "Rust",
    "aliases": [
      "rs"
    ],
    "import": () => import('./rust-COW7ZJIp.js')
  },
  {
    "id": "sas",
    "name": "SAS",
    "import": () => import('./sas-DEQFkSQy.js')
  },
  {
    "id": "sass",
    "name": "Sass",
    "import": () => import('./sass-oJwsKQdv.js')
  },
  {
    "id": "scala",
    "name": "Scala",
    "import": () => import('./scala-DWUNMMxx.js')
  },
  {
    "id": "scheme",
    "name": "Scheme",
    "import": () => import('./scheme-DvKkvYn6.js')
  },
  {
    "id": "scss",
    "name": "SCSS",
    "import": () => import('./scss-Ce0o3RlH.js')
  },
  {
    "id": "shaderlab",
    "name": "ShaderLab",
    "aliases": [
      "shader"
    ],
    "import": () => import('./shaderlab-eCoehSuZ.js')
  },
  {
    "id": "shellscript",
    "name": "Shell",
    "aliases": [
      "bash",
      "sh",
      "shell",
      "zsh"
    ],
    "import": () => import('./shellscript-D2vWFtz8.js')
  },
  {
    "id": "shellsession",
    "name": "Shell Session",
    "aliases": [
      "console"
    ],
    "import": () => import('./shellsession-DwcbwtFe.js')
  },
  {
    "id": "smalltalk",
    "name": "Smalltalk",
    "import": () => import('./smalltalk-CHhY1l2A.js')
  },
  {
    "id": "solidity",
    "name": "Solidity",
    "import": () => import('./solidity-BvJD7_HO.js')
  },
  {
    "id": "soy",
    "name": "Closure Templates",
    "aliases": [
      "closure-templates"
    ],
    "import": () => import('./soy-uFMLDv8F.js')
  },
  {
    "id": "sparql",
    "name": "SPARQL",
    "import": () => import('./sparql-Cgg-C-NB.js')
  },
  {
    "id": "splunk",
    "name": "Splunk Query Language",
    "aliases": [
      "spl"
    ],
    "import": () => import('./splunk-Bjyy5GTb.js')
  },
  {
    "id": "sql",
    "name": "SQL",
    "import": () => import('./sql-yVRMvi0O.js')
  },
  {
    "id": "ssh-config",
    "name": "SSH Config",
    "import": () => import('./ssh-config-Cf9fh-Of.js')
  },
  {
    "id": "stata",
    "name": "Stata",
    "import": () => import('./stata-DazvD6a_.js')
  },
  {
    "id": "stylus",
    "name": "Stylus",
    "aliases": [
      "styl"
    ],
    "import": () => import('./stylus-k-WBxfe-.js')
  },
  {
    "id": "svelte",
    "name": "Svelte",
    "import": () => import('./svelte-DWCUD5iW.js')
  },
  {
    "id": "swift",
    "name": "Swift",
    "import": () => import('./swift-BzuzlBOj.js')
  },
  {
    "id": "system-verilog",
    "name": "SystemVerilog",
    "import": () => import('./system-verilog-CiSd1dc5.js')
  },
  {
    "id": "systemd",
    "name": "Systemd Units",
    "import": () => import('./systemd-ymdT5skM.js')
  },
  {
    "id": "tasl",
    "name": "Tasl",
    "import": () => import('./tasl-BBPcXWu6.js')
  },
  {
    "id": "tcl",
    "name": "Tcl",
    "import": () => import('./tcl-e6HSX4IZ.js')
  },
  {
    "id": "templ",
    "name": "Templ",
    "import": () => import('./templ-DOJylgPM.js')
  },
  {
    "id": "terraform",
    "name": "Terraform",
    "aliases": [
      "tf",
      "tfvars"
    ],
    "import": () => import('./terraform--6Vhp8t1.js')
  },
  {
    "id": "tex",
    "name": "TeX",
    "import": () => import('./tex-CCxHjfv3.js')
  },
  {
    "id": "toml",
    "name": "TOML",
    "import": () => import('./toml-DU9_HPOl.js')
  },
  {
    "id": "ts-tags",
    "name": "TypeScript with Tags",
    "aliases": [
      "lit"
    ],
    "import": () => import('./ts-tags-CDIGb8cU.js')
  },
  {
    "id": "tsv",
    "name": "TSV",
    "import": () => import('./tsv-Cncuw_uP.js')
  },
  {
    "id": "tsx",
    "name": "TSX",
    "import": () => import('./tsx-Ds786Is9.js')
  },
  {
    "id": "turtle",
    "name": "Turtle",
    "import": () => import('./turtle-B3VrIQpU.js')
  },
  {
    "id": "twig",
    "name": "Twig",
    "import": () => import('./twig-DBgrNB9O.js')
  },
  {
    "id": "typescript",
    "name": "TypeScript",
    "aliases": [
      "ts"
    ],
    "import": () => import('./typescript-CYliDbTU.js')
  },
  {
    "id": "typespec",
    "name": "TypeSpec",
    "aliases": [
      "tsp"
    ],
    "import": () => import('./typespec-Cbqv9F7Y.js')
  },
  {
    "id": "typst",
    "name": "Typst",
    "aliases": [
      "typ"
    ],
    "import": () => import('./typst-BWa1TV7J.js')
  },
  {
    "id": "v",
    "name": "V",
    "import": () => import('./v-s2YH5juv.js')
  },
  {
    "id": "vala",
    "name": "Vala",
    "import": () => import('./vala-DT3-eqQ9.js')
  },
  {
    "id": "vb",
    "name": "Visual Basic",
    "aliases": [
      "cmd"
    ],
    "import": () => import('./vb-Awm61LJT.js')
  },
  {
    "id": "verilog",
    "name": "Verilog",
    "import": () => import('./verilog-BTySLpX1.js')
  },
  {
    "id": "vhdl",
    "name": "VHDL",
    "import": () => import('./vhdl-BL0e3dLh.js')
  },
  {
    "id": "viml",
    "name": "Vim Script",
    "aliases": [
      "vim",
      "vimscript"
    ],
    "import": () => import('./viml-C5CdLap9.js')
  },
  {
    "id": "vue",
    "name": "Vue",
    "import": () => import('./vue-BJumed3A.js')
  },
  {
    "id": "vue-html",
    "name": "Vue HTML",
    "import": () => import('./vue-html-B10zR8xp.js')
  },
  {
    "id": "vyper",
    "name": "Vyper",
    "aliases": [
      "vy"
    ],
    "import": () => import('./vyper-B2keZ4J0.js')
  },
  {
    "id": "wasm",
    "name": "WebAssembly",
    "import": () => import('./wasm-DILJjEZQ.js')
  },
  {
    "id": "wenyan",
    "name": "Wenyan",
    "aliases": [
      "\u6587\u8A00"
    ],
    "import": () => import('./wenyan-eANXBf90.js')
  },
  {
    "id": "wgsl",
    "name": "WGSL",
    "import": () => import('./wgsl-q491FsLB.js')
  },
  {
    "id": "wikitext",
    "name": "Wikitext",
    "aliases": [
      "mediawiki",
      "wiki"
    ],
    "import": () => import('./wikitext-CBCQuC0e.js')
  },
  {
    "id": "wolfram",
    "name": "Wolfram",
    "aliases": [
      "wl"
    ],
    "import": () => import('./wolfram-V2PbioLU.js')
  },
  {
    "id": "xml",
    "name": "XML",
    "import": () => import('./xml-CGBdWXsr.js')
  },
  {
    "id": "xsl",
    "name": "XSL",
    "import": () => import('./xsl-D2rJ1u14.js')
  },
  {
    "id": "yaml",
    "name": "YAML",
    "aliases": [
      "yml"
    ],
    "import": () => import('./yaml-CMMbN--x.js')
  },
  {
    "id": "zenscript",
    "name": "ZenScript",
    "import": () => import('./zenscript-BnNVz2gQ.js')
  },
  {
    "id": "zig",
    "name": "Zig",
    "import": () => import('./zig-DoJtxXfn.js')
  }
];
const bundledLanguagesBase = Object.fromEntries(bundledLanguagesInfo.map((i) => [i.id, i.import]));
const bundledLanguagesAlias = Object.fromEntries(bundledLanguagesInfo.flatMap((i) => i.aliases?.map((a) => [a, i.import]) || []));
const bundledLanguages = {
  ...bundledLanguagesBase,
  ...bundledLanguagesAlias
};

const getWasmInlined = async (info) => {
  return import('./wasm-Dhj7AXtS.js').then((wasm) => wasm.default(info));
};

const bundledThemesInfo = [
  {
    "id": "andromeeda",
    "displayName": "Andromeeda",
    "type": "dark",
    "import": () => import('./andromeeda-XcesA-8v.js')
  },
  {
    "id": "aurora-x",
    "displayName": "Aurora X",
    "type": "dark",
    "import": () => import('./aurora-x-BtMvd7nI.js')
  },
  {
    "id": "ayu-dark",
    "displayName": "Ayu Dark",
    "type": "dark",
    "import": () => import('./ayu-dark-BSDWFLrw.js')
  },
  {
    "id": "catppuccin-frappe",
    "displayName": "Catppuccin Frapp\xE9",
    "type": "dark",
    "import": () => import('./catppuccin-frappe-9DxsZONV.js')
  },
  {
    "id": "catppuccin-latte",
    "displayName": "Catppuccin Latte",
    "type": "light",
    "import": () => import('./catppuccin-latte-DUmfl8lz.js')
  },
  {
    "id": "catppuccin-macchiato",
    "displayName": "Catppuccin Macchiato",
    "type": "dark",
    "import": () => import('./catppuccin-macchiato-CrYfgq8F.js')
  },
  {
    "id": "catppuccin-mocha",
    "displayName": "Catppuccin Mocha",
    "type": "dark",
    "import": () => import('./catppuccin-mocha-cB9O--aF.js')
  },
  {
    "id": "dark-plus",
    "displayName": "Dark Plus",
    "type": "dark",
    "import": () => import('./dark-plus-C21b1ENp.js')
  },
  {
    "id": "dracula",
    "displayName": "Dracula Theme",
    "type": "dark",
    "import": () => import('./dracula-D9L_h-PS.js')
  },
  {
    "id": "dracula-soft",
    "displayName": "Dracula Theme Soft",
    "type": "dark",
    "import": () => import('./dracula-soft-CzK6CBUg.js')
  },
  {
    "id": "everforest-dark",
    "displayName": "Everforest Dark",
    "type": "dark",
    "import": () => import('./everforest-dark-C2qAK-Nm.js')
  },
  {
    "id": "everforest-light",
    "displayName": "Everforest Light",
    "type": "light",
    "import": () => import('./everforest-light-ByIIeagZ.js')
  },
  {
    "id": "github-dark",
    "displayName": "GitHub Dark",
    "type": "dark",
    "import": () => import('./github-dark-D3-fsOKS.js')
  },
  {
    "id": "github-dark-default",
    "displayName": "GitHub Dark Default",
    "type": "dark",
    "import": () => import('./github-dark-default-WvRGqzJx.js')
  },
  {
    "id": "github-dark-dimmed",
    "displayName": "GitHub Dark Dimmed",
    "type": "dark",
    "import": () => import('./github-dark-dimmed-Di1zCf-H.js')
  },
  {
    "id": "github-dark-high-contrast",
    "displayName": "GitHub Dark High Contrast",
    "type": "dark",
    "import": () => import('./github-dark-high-contrast-cDVmkAqn.js')
  },
  {
    "id": "github-light",
    "displayName": "GitHub Light",
    "type": "light",
    "import": () => import('./github-light-DqqgOqlM.js')
  },
  {
    "id": "github-light-default",
    "displayName": "GitHub Light Default",
    "type": "light",
    "import": () => import('./github-light-default-G8HBrsqv.js')
  },
  {
    "id": "github-light-high-contrast",
    "displayName": "GitHub Light High Contrast",
    "type": "light",
    "import": () => import('./github-light-high-contrast-CAv1g1hm.js')
  },
  {
    "id": "houston",
    "displayName": "Houston",
    "type": "dark",
    "import": () => import('./houston-Ds2aoFPM.js')
  },
  {
    "id": "laserwave",
    "displayName": "LaserWave",
    "type": "dark",
    "import": () => import('./laserwave-B7euxcPn.js')
  },
  {
    "id": "light-plus",
    "displayName": "Light Plus",
    "type": "light",
    "import": () => import('./light-plus-CWstZaBa.js')
  },
  {
    "id": "material-theme",
    "displayName": "Material Theme",
    "type": "dark",
    "import": () => import('./material-theme-Bwr9d_Ik.js')
  },
  {
    "id": "material-theme-darker",
    "displayName": "Material Theme Darker",
    "type": "dark",
    "import": () => import('./material-theme-darker-DdBPnvrV.js')
  },
  {
    "id": "material-theme-lighter",
    "displayName": "Material Theme Lighter",
    "type": "light",
    "import": () => import('./material-theme-lighter-BxsHBGRd.js')
  },
  {
    "id": "material-theme-ocean",
    "displayName": "Material Theme Ocean",
    "type": "dark",
    "import": () => import('./material-theme-ocean-CyP5lXcv.js')
  },
  {
    "id": "material-theme-palenight",
    "displayName": "Material Theme Palenight",
    "type": "dark",
    "import": () => import('./material-theme-palenight-D9zexPgh.js')
  },
  {
    "id": "min-dark",
    "displayName": "Min Dark",
    "type": "dark",
    "import": () => import('./min-dark-DmM1b6Xt.js')
  },
  {
    "id": "min-light",
    "displayName": "Min Light",
    "type": "light",
    "import": () => import('./min-light-LTflx352.js')
  },
  {
    "id": "monokai",
    "displayName": "Monokai",
    "type": "dark",
    "import": () => import('./monokai-Bthv0J6S.js')
  },
  {
    "id": "night-owl",
    "displayName": "Night Owl",
    "type": "dark",
    "import": () => import('./night-owl-BR4iYaqi.js')
  },
  {
    "id": "nord",
    "displayName": "Nord",
    "type": "dark",
    "import": () => import('./nord-D_lPy4Xt.js')
  },
  {
    "id": "one-dark-pro",
    "displayName": "One Dark Pro",
    "type": "dark",
    "import": () => import('./one-dark-pro-CZ1ny2Mh.js')
  },
  {
    "id": "one-light",
    "displayName": "One Light",
    "type": "light",
    "import": () => import('./one-light-_kLkK7-A.js')
  },
  {
    "id": "poimandres",
    "displayName": "Poimandres",
    "type": "dark",
    "import": () => import('./poimandres-DSZtIj8k.js')
  },
  {
    "id": "red",
    "displayName": "Red",
    "type": "dark",
    "import": () => import('./red-C6MrXHm-.js')
  },
  {
    "id": "rose-pine",
    "displayName": "Ros\xE9 Pine",
    "type": "dark",
    "import": () => import('./rose-pine-O7s51877.js')
  },
  {
    "id": "rose-pine-dawn",
    "displayName": "Ros\xE9 Pine Dawn",
    "type": "light",
    "import": () => import('./rose-pine-dawn-CBiaY0RP.js')
  },
  {
    "id": "rose-pine-moon",
    "displayName": "Ros\xE9 Pine Moon",
    "type": "dark",
    "import": () => import('./rose-pine-moon-CvBf5SR4.js')
  },
  {
    "id": "slack-dark",
    "displayName": "Slack Dark",
    "type": "dark",
    "import": () => import('./slack-dark-COTrafp3.js')
  },
  {
    "id": "slack-ochin",
    "displayName": "Slack Ochin",
    "type": "light",
    "import": () => import('./slack-ochin-Bn0zfduE.js')
  },
  {
    "id": "snazzy-light",
    "displayName": "Snazzy Light",
    "type": "light",
    "import": () => import('./snazzy-light-GZteANtr.js')
  },
  {
    "id": "solarized-dark",
    "displayName": "Solarized Dark",
    "type": "dark",
    "import": () => import('./solarized-dark-WAbYFw7B.js')
  },
  {
    "id": "solarized-light",
    "displayName": "Solarized Light",
    "type": "light",
    "import": () => import('./solarized-light-BxC2XS5C.js')
  },
  {
    "id": "synthwave-84",
    "displayName": "Synthwave '84",
    "type": "dark",
    "import": () => import('./synthwave-84-z1XOph4_.js')
  },
  {
    "id": "tokyo-night",
    "displayName": "Tokyo Night",
    "type": "dark",
    "import": () => import('./tokyo-night-GVQb1aWH.js')
  },
  {
    "id": "vesper",
    "displayName": "Vesper",
    "type": "dark",
    "import": () => import('./vesper-Dlv2S9UC.js')
  },
  {
    "id": "vitesse-black",
    "displayName": "Vitesse Black",
    "type": "dark",
    "import": () => import('./vitesse-black-_UtM47A4.js')
  },
  {
    "id": "vitesse-dark",
    "displayName": "Vitesse Dark",
    "type": "dark",
    "import": () => import('./vitesse-dark-Dpm060H2.js')
  },
  {
    "id": "vitesse-light",
    "displayName": "Vitesse Light",
    "type": "light",
    "import": () => import('./vitesse-light-B_6uPACx.js')
  }
];
const bundledThemes = Object.fromEntries(bundledThemesInfo.map((i) => [i.id, i.import]));

var FontStyle;
(function (FontStyle) {
    FontStyle[FontStyle["NotSet"] = -1] = "NotSet";
    FontStyle[FontStyle["None"] = 0] = "None";
    FontStyle[FontStyle["Italic"] = 1] = "Italic";
    FontStyle[FontStyle["Bold"] = 2] = "Bold";
    FontStyle[FontStyle["Underline"] = 4] = "Underline";
})(FontStyle || (FontStyle = {}));

/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
({
    InDebugMode: (typeof process !== 'undefined' && !!process.env['VSCODE_TEXTMATE_DEBUG'])
});

/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
var EncodedTokenAttributes;
(function (EncodedTokenAttributes) {
    function toBinaryStr(encodedTokenAttributes) {
        return encodedTokenAttributes.toString(2).padStart(32, "0");
    }
    EncodedTokenAttributes.toBinaryStr = toBinaryStr;
    function print(encodedTokenAttributes) {
        const languageId = EncodedTokenAttributes.getLanguageId(encodedTokenAttributes);
        const tokenType = EncodedTokenAttributes.getTokenType(encodedTokenAttributes);
        const fontStyle = EncodedTokenAttributes.getFontStyle(encodedTokenAttributes);
        const foreground = EncodedTokenAttributes.getForeground(encodedTokenAttributes);
        const background = EncodedTokenAttributes.getBackground(encodedTokenAttributes);
        console.log({
            languageId: languageId,
            tokenType: tokenType,
            fontStyle: fontStyle,
            foreground: foreground,
            background: background,
        });
    }
    EncodedTokenAttributes.print = print;
    function getLanguageId(encodedTokenAttributes) {
        return ((encodedTokenAttributes & 255 /* EncodedTokenDataConsts.LANGUAGEID_MASK */) >>>
            0 /* EncodedTokenDataConsts.LANGUAGEID_OFFSET */);
    }
    EncodedTokenAttributes.getLanguageId = getLanguageId;
    function getTokenType(encodedTokenAttributes) {
        return ((encodedTokenAttributes & 768 /* EncodedTokenDataConsts.TOKEN_TYPE_MASK */) >>>
            8 /* EncodedTokenDataConsts.TOKEN_TYPE_OFFSET */);
    }
    EncodedTokenAttributes.getTokenType = getTokenType;
    function containsBalancedBrackets(encodedTokenAttributes) {
        return (encodedTokenAttributes & 1024 /* EncodedTokenDataConsts.BALANCED_BRACKETS_MASK */) !== 0;
    }
    EncodedTokenAttributes.containsBalancedBrackets = containsBalancedBrackets;
    function getFontStyle(encodedTokenAttributes) {
        return ((encodedTokenAttributes & 30720 /* EncodedTokenDataConsts.FONT_STYLE_MASK */) >>>
            11 /* EncodedTokenDataConsts.FONT_STYLE_OFFSET */);
    }
    EncodedTokenAttributes.getFontStyle = getFontStyle;
    function getForeground(encodedTokenAttributes) {
        return ((encodedTokenAttributes & 16744448 /* EncodedTokenDataConsts.FOREGROUND_MASK */) >>>
            15 /* EncodedTokenDataConsts.FOREGROUND_OFFSET */);
    }
    EncodedTokenAttributes.getForeground = getForeground;
    function getBackground(encodedTokenAttributes) {
        return ((encodedTokenAttributes & 4278190080 /* EncodedTokenDataConsts.BACKGROUND_MASK */) >>>
            24 /* EncodedTokenDataConsts.BACKGROUND_OFFSET */);
    }
    EncodedTokenAttributes.getBackground = getBackground;
    /**
     * Updates the fields in `metadata`.
     * A value of `0`, `NotSet` or `null` indicates that the corresponding field should be left as is.
     */
    function set(encodedTokenAttributes, languageId, tokenType, containsBalancedBrackets, fontStyle, foreground, background) {
        let _languageId = EncodedTokenAttributes.getLanguageId(encodedTokenAttributes);
        let _tokenType = EncodedTokenAttributes.getTokenType(encodedTokenAttributes);
        let _containsBalancedBracketsBit = EncodedTokenAttributes.containsBalancedBrackets(encodedTokenAttributes) ? 1 : 0;
        let _fontStyle = EncodedTokenAttributes.getFontStyle(encodedTokenAttributes);
        let _foreground = EncodedTokenAttributes.getForeground(encodedTokenAttributes);
        let _background = EncodedTokenAttributes.getBackground(encodedTokenAttributes);
        if (languageId !== 0) {
            _languageId = languageId;
        }
        if (tokenType !== 8 /* OptionalStandardTokenType.NotSet */) {
            _tokenType = fromOptionalTokenType(tokenType);
        }
        if (containsBalancedBrackets !== null) {
            _containsBalancedBracketsBit = containsBalancedBrackets ? 1 : 0;
        }
        if (fontStyle !== -1 /* FontStyle.NotSet */) {
            _fontStyle = fontStyle;
        }
        if (foreground !== 0) {
            _foreground = foreground;
        }
        if (background !== 0) {
            _background = background;
        }
        return (((_languageId << 0 /* EncodedTokenDataConsts.LANGUAGEID_OFFSET */) |
            (_tokenType << 8 /* EncodedTokenDataConsts.TOKEN_TYPE_OFFSET */) |
            (_containsBalancedBracketsBit <<
                10 /* EncodedTokenDataConsts.BALANCED_BRACKETS_OFFSET */) |
            (_fontStyle << 11 /* EncodedTokenDataConsts.FONT_STYLE_OFFSET */) |
            (_foreground << 15 /* EncodedTokenDataConsts.FOREGROUND_OFFSET */) |
            (_background << 24 /* EncodedTokenDataConsts.BACKGROUND_OFFSET */)) >>>
            0);
    }
    EncodedTokenAttributes.set = set;
})(EncodedTokenAttributes || (EncodedTokenAttributes = {}));
function toOptionalTokenType(standardType) {
    return standardType;
}
function fromOptionalTokenType(standardType) {
    return standardType;
}

/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
function createMatchers(selector, matchesName) {
    const results = [];
    const tokenizer = newTokenizer(selector);
    let token = tokenizer.next();
    while (token !== null) {
        let priority = 0;
        if (token.length === 2 && token.charAt(1) === ':') {
            switch (token.charAt(0)) {
                case 'R':
                    priority = 1;
                    break;
                case 'L':
                    priority = -1;
                    break;
                default:
                    console.log(`Unknown priority ${token} in scope selector`);
            }
            token = tokenizer.next();
        }
        let matcher = parseConjunction();
        results.push({ matcher, priority });
        if (token !== ',') {
            break;
        }
        token = tokenizer.next();
    }
    return results;
    function parseOperand() {
        if (token === '-') {
            token = tokenizer.next();
            const expressionToNegate = parseOperand();
            return matcherInput => !!expressionToNegate && !expressionToNegate(matcherInput);
        }
        if (token === '(') {
            token = tokenizer.next();
            const expressionInParents = parseInnerExpression();
            if (token === ')') {
                token = tokenizer.next();
            }
            return expressionInParents;
        }
        if (isIdentifier(token)) {
            const identifiers = [];
            do {
                identifiers.push(token);
                token = tokenizer.next();
            } while (isIdentifier(token));
            return matcherInput => matchesName(identifiers, matcherInput);
        }
        return null;
    }
    function parseConjunction() {
        const matchers = [];
        let matcher = parseOperand();
        while (matcher) {
            matchers.push(matcher);
            matcher = parseOperand();
        }
        return matcherInput => matchers.every(matcher => matcher(matcherInput)); // and
    }
    function parseInnerExpression() {
        const matchers = [];
        let matcher = parseConjunction();
        while (matcher) {
            matchers.push(matcher);
            if (token === '|' || token === ',') {
                do {
                    token = tokenizer.next();
                } while (token === '|' || token === ','); // ignore subsequent commas
            }
            else {
                break;
            }
            matcher = parseConjunction();
        }
        return matcherInput => matchers.some(matcher => matcher(matcherInput)); // or
    }
}
function isIdentifier(token) {
    return !!token && !!token.match(/[\w\.:]+/);
}
function newTokenizer(input) {
    let regex = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g;
    let match = regex.exec(input);
    return {
        next: () => {
            if (!match) {
                return null;
            }
            const res = match[0];
            match = regex.exec(input);
            return res;
        }
    };
}

/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
function disposeOnigString(str) {
    if (typeof str.dispose === 'function') {
        str.dispose();
    }
}

/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
function clone(something) {
    return doClone(something);
}
function doClone(something) {
    if (Array.isArray(something)) {
        return cloneArray(something);
    }
    if (typeof something === 'object') {
        return cloneObj(something);
    }
    return something;
}
function cloneArray(arr) {
    let r = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        r[i] = doClone(arr[i]);
    }
    return r;
}
function cloneObj(obj) {
    let r = {};
    for (let key in obj) {
        r[key] = doClone(obj[key]);
    }
    return r;
}
function mergeObjects(target, ...sources) {
    sources.forEach(source => {
        for (let key in source) {
            target[key] = source[key];
        }
    });
    return target;
}
function basename(path) {
    const idx = ~path.lastIndexOf('/') || ~path.lastIndexOf('\\');
    if (idx === 0) {
        return path;
    }
    else if (~idx === path.length - 1) {
        return basename(path.substring(0, path.length - 1));
    }
    else {
        return path.substr(~idx + 1);
    }
}
let CAPTURING_REGEX_SOURCE = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/g;
class RegexSource {
    static hasCaptures(regexSource) {
        if (regexSource === null) {
            return false;
        }
        CAPTURING_REGEX_SOURCE.lastIndex = 0;
        return CAPTURING_REGEX_SOURCE.test(regexSource);
    }
    static replaceCaptures(regexSource, captureSource, captureIndices) {
        return regexSource.replace(CAPTURING_REGEX_SOURCE, (match, index, commandIndex, command) => {
            let capture = captureIndices[parseInt(index || commandIndex, 10)];
            if (capture) {
                let result = captureSource.substring(capture.start, capture.end);
                // Remove leading dots that would make the selector invalid
                while (result[0] === '.') {
                    result = result.substring(1);
                }
                switch (command) {
                    case 'downcase':
                        return result.toLowerCase();
                    case 'upcase':
                        return result.toUpperCase();
                    default:
                        return result;
                }
            }
            else {
                return match;
            }
        });
    }
}
function strcmp(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}
function strArrCmp(a, b) {
    if (a === null && b === null) {
        return 0;
    }
    if (!a) {
        return -1;
    }
    if (!b) {
        return 1;
    }
    let len1 = a.length;
    let len2 = b.length;
    if (len1 === len2) {
        for (let i = 0; i < len1; i++) {
            let res = strcmp(a[i], b[i]);
            if (res !== 0) {
                return res;
            }
        }
        return 0;
    }
    return len1 - len2;
}
function isValidHexColor(hex) {
    if (/^#[0-9a-f]{6}$/i.test(hex)) {
        // #rrggbb
        return true;
    }
    if (/^#[0-9a-f]{8}$/i.test(hex)) {
        // #rrggbbaa
        return true;
    }
    if (/^#[0-9a-f]{3}$/i.test(hex)) {
        // #rgb
        return true;
    }
    if (/^#[0-9a-f]{4}$/i.test(hex)) {
        // #rgba
        return true;
    }
    return false;
}
/**
 * Escapes regular expression characters in a given string
 */
function escapeRegExpCharacters(value) {
    return value.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, '\\$&');
}
class CachedFn {
    fn;
    cache = new Map();
    constructor(fn) {
        this.fn = fn;
    }
    get(key) {
        if (this.cache.has(key)) {
            return this.cache.get(key);
        }
        const value = this.fn(key);
        this.cache.set(key, value);
        return value;
    }
}

/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
/**
 * References the top level rule of a grammar with the given scope name.
*/
class TopLevelRuleReference {
    scopeName;
    constructor(scopeName) {
        this.scopeName = scopeName;
    }
    toKey() {
        return this.scopeName;
    }
}
/**
 * References a rule of a grammar in the top level repository section with the given name.
*/
class TopLevelRepositoryRuleReference {
    scopeName;
    ruleName;
    constructor(scopeName, ruleName) {
        this.scopeName = scopeName;
        this.ruleName = ruleName;
    }
    toKey() {
        return `${this.scopeName}#${this.ruleName}`;
    }
}
class ExternalReferenceCollector {
    _references = [];
    _seenReferenceKeys = new Set();
    get references() {
        return this._references;
    }
    visitedRule = new Set();
    add(reference) {
        const key = reference.toKey();
        if (this._seenReferenceKeys.has(key)) {
            return;
        }
        this._seenReferenceKeys.add(key);
        this._references.push(reference);
    }
}
class ScopeDependencyProcessor {
    repo;
    initialScopeName;
    seenFullScopeRequests = new Set();
    seenPartialScopeRequests = new Set();
    Q;
    constructor(repo, initialScopeName) {
        this.repo = repo;
        this.initialScopeName = initialScopeName;
        this.seenFullScopeRequests.add(this.initialScopeName);
        this.Q = [new TopLevelRuleReference(this.initialScopeName)];
    }
    processQueue() {
        const q = this.Q;
        this.Q = [];
        const deps = new ExternalReferenceCollector();
        for (const dep of q) {
            collectReferencesOfReference(dep, this.initialScopeName, this.repo, deps);
        }
        for (const dep of deps.references) {
            if (dep instanceof TopLevelRuleReference) {
                if (this.seenFullScopeRequests.has(dep.scopeName)) {
                    // already processed
                    continue;
                }
                this.seenFullScopeRequests.add(dep.scopeName);
                this.Q.push(dep);
            }
            else {
                if (this.seenFullScopeRequests.has(dep.scopeName)) {
                    // already processed in full
                    continue;
                }
                if (this.seenPartialScopeRequests.has(dep.toKey())) {
                    // already processed
                    continue;
                }
                this.seenPartialScopeRequests.add(dep.toKey());
                this.Q.push(dep);
            }
        }
    }
}
function collectReferencesOfReference(reference, baseGrammarScopeName, repo, result) {
    const selfGrammar = repo.lookup(reference.scopeName);
    if (!selfGrammar) {
        if (reference.scopeName === baseGrammarScopeName) {
            throw new Error(`No grammar provided for <${baseGrammarScopeName}>`);
        }
        return;
    }
    const baseGrammar = repo.lookup(baseGrammarScopeName);
    if (reference instanceof TopLevelRuleReference) {
        collectExternalReferencesInTopLevelRule({ baseGrammar, selfGrammar }, result);
    }
    else {
        collectExternalReferencesInTopLevelRepositoryRule(reference.ruleName, { baseGrammar, selfGrammar, repository: selfGrammar.repository }, result);
    }
    const injections = repo.injections(reference.scopeName);
    if (injections) {
        for (const injection of injections) {
            result.add(new TopLevelRuleReference(injection));
        }
    }
}
function collectExternalReferencesInTopLevelRepositoryRule(ruleName, context, result) {
    if (context.repository && context.repository[ruleName]) {
        const rule = context.repository[ruleName];
        collectExternalReferencesInRules([rule], context, result);
    }
}
function collectExternalReferencesInTopLevelRule(context, result) {
    if (context.selfGrammar.patterns && Array.isArray(context.selfGrammar.patterns)) {
        collectExternalReferencesInRules(context.selfGrammar.patterns, { ...context, repository: context.selfGrammar.repository }, result);
    }
    if (context.selfGrammar.injections) {
        collectExternalReferencesInRules(Object.values(context.selfGrammar.injections), { ...context, repository: context.selfGrammar.repository }, result);
    }
}
function collectExternalReferencesInRules(rules, context, result) {
    for (const rule of rules) {
        if (result.visitedRule.has(rule)) {
            continue;
        }
        result.visitedRule.add(rule);
        const patternRepository = rule.repository ? mergeObjects({}, context.repository, rule.repository) : context.repository;
        if (Array.isArray(rule.patterns)) {
            collectExternalReferencesInRules(rule.patterns, { ...context, repository: patternRepository }, result);
        }
        const include = rule.include;
        if (!include) {
            continue;
        }
        const reference = parseInclude(include);
        switch (reference.kind) {
            case 0 /* IncludeReferenceKind.Base */:
                collectExternalReferencesInTopLevelRule({ ...context, selfGrammar: context.baseGrammar }, result);
                break;
            case 1 /* IncludeReferenceKind.Self */:
                collectExternalReferencesInTopLevelRule(context, result);
                break;
            case 2 /* IncludeReferenceKind.RelativeReference */:
                collectExternalReferencesInTopLevelRepositoryRule(reference.ruleName, { ...context, repository: patternRepository }, result);
                break;
            case 3 /* IncludeReferenceKind.TopLevelReference */:
            case 4 /* IncludeReferenceKind.TopLevelRepositoryReference */:
                const selfGrammar = reference.scopeName === context.selfGrammar.scopeName
                    ? context.selfGrammar
                    : reference.scopeName === context.baseGrammar.scopeName
                        ? context.baseGrammar
                        : undefined;
                if (selfGrammar) {
                    const newContext = { baseGrammar: context.baseGrammar, selfGrammar, repository: patternRepository };
                    if (reference.kind === 4 /* IncludeReferenceKind.TopLevelRepositoryReference */) {
                        collectExternalReferencesInTopLevelRepositoryRule(reference.ruleName, newContext, result);
                    }
                    else {
                        collectExternalReferencesInTopLevelRule(newContext, result);
                    }
                }
                else {
                    if (reference.kind === 4 /* IncludeReferenceKind.TopLevelRepositoryReference */) {
                        result.add(new TopLevelRepositoryRuleReference(reference.scopeName, reference.ruleName));
                    }
                    else {
                        result.add(new TopLevelRuleReference(reference.scopeName));
                    }
                }
                break;
        }
    }
}
class BaseReference {
    kind = 0 /* IncludeReferenceKind.Base */;
}
class SelfReference {
    kind = 1 /* IncludeReferenceKind.Self */;
}
class RelativeReference {
    ruleName;
    kind = 2 /* IncludeReferenceKind.RelativeReference */;
    constructor(ruleName) {
        this.ruleName = ruleName;
    }
}
class TopLevelReference {
    scopeName;
    kind = 3 /* IncludeReferenceKind.TopLevelReference */;
    constructor(scopeName) {
        this.scopeName = scopeName;
    }
}
class TopLevelRepositoryReference {
    scopeName;
    ruleName;
    kind = 4 /* IncludeReferenceKind.TopLevelRepositoryReference */;
    constructor(scopeName, ruleName) {
        this.scopeName = scopeName;
        this.ruleName = ruleName;
    }
}
function parseInclude(include) {
    if (include === '$base') {
        return new BaseReference();
    }
    else if (include === '$self') {
        return new SelfReference();
    }
    const indexOfSharp = include.indexOf("#");
    if (indexOfSharp === -1) {
        return new TopLevelReference(include);
    }
    else if (indexOfSharp === 0) {
        return new RelativeReference(include.substring(1));
    }
    else {
        const scopeName = include.substring(0, indexOfSharp);
        const ruleName = include.substring(indexOfSharp + 1);
        return new TopLevelRepositoryReference(scopeName, ruleName);
    }
}

/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
const HAS_BACK_REFERENCES = /\\(\d+)/;
const BACK_REFERENCING_END = /\\(\d+)/g;
// This is a special constant to indicate that the end regexp matched.
const endRuleId = -1;
// This is a special constant to indicate that the while regexp matched.
const whileRuleId = -2;
function ruleIdFromNumber(id) {
    return id;
}
function ruleIdToNumber(id) {
    return id;
}
class Rule {
    $location;
    id;
    _nameIsCapturing;
    _name;
    _contentNameIsCapturing;
    _contentName;
    constructor($location, id, name, contentName) {
        this.$location = $location;
        this.id = id;
        this._name = name || null;
        this._nameIsCapturing = RegexSource.hasCaptures(this._name);
        this._contentName = contentName || null;
        this._contentNameIsCapturing = RegexSource.hasCaptures(this._contentName);
    }
    get debugName() {
        const location = this.$location ? `${basename(this.$location.filename)}:${this.$location.line}` : 'unknown';
        return `${this.constructor.name}#${this.id} @ ${location}`;
    }
    getName(lineText, captureIndices) {
        if (!this._nameIsCapturing || this._name === null || lineText === null || captureIndices === null) {
            return this._name;
        }
        return RegexSource.replaceCaptures(this._name, lineText, captureIndices);
    }
    getContentName(lineText, captureIndices) {
        if (!this._contentNameIsCapturing || this._contentName === null) {
            return this._contentName;
        }
        return RegexSource.replaceCaptures(this._contentName, lineText, captureIndices);
    }
}
class CaptureRule extends Rule {
    retokenizeCapturedWithRuleId;
    constructor($location, id, name, contentName, retokenizeCapturedWithRuleId) {
        super($location, id, name, contentName);
        this.retokenizeCapturedWithRuleId = retokenizeCapturedWithRuleId;
    }
    dispose() {
        // nothing to dispose
    }
    collectPatterns(grammar, out) {
        throw new Error('Not supported!');
    }
    compile(grammar, endRegexSource) {
        throw new Error('Not supported!');
    }
    compileAG(grammar, endRegexSource, allowA, allowG) {
        throw new Error('Not supported!');
    }
}
class MatchRule extends Rule {
    _match;
    captures;
    _cachedCompiledPatterns;
    constructor($location, id, name, match, captures) {
        super($location, id, name, null);
        this._match = new RegExpSource(match, this.id);
        this.captures = captures;
        this._cachedCompiledPatterns = null;
    }
    dispose() {
        if (this._cachedCompiledPatterns) {
            this._cachedCompiledPatterns.dispose();
            this._cachedCompiledPatterns = null;
        }
    }
    get debugMatchRegExp() {
        return `${this._match.source}`;
    }
    collectPatterns(grammar, out) {
        out.push(this._match);
    }
    compile(grammar, endRegexSource) {
        return this._getCachedCompiledPatterns(grammar).compile(grammar);
    }
    compileAG(grammar, endRegexSource, allowA, allowG) {
        return this._getCachedCompiledPatterns(grammar).compileAG(grammar, allowA, allowG);
    }
    _getCachedCompiledPatterns(grammar) {
        if (!this._cachedCompiledPatterns) {
            this._cachedCompiledPatterns = new RegExpSourceList();
            this.collectPatterns(grammar, this._cachedCompiledPatterns);
        }
        return this._cachedCompiledPatterns;
    }
}
class IncludeOnlyRule extends Rule {
    hasMissingPatterns;
    patterns;
    _cachedCompiledPatterns;
    constructor($location, id, name, contentName, patterns) {
        super($location, id, name, contentName);
        this.patterns = patterns.patterns;
        this.hasMissingPatterns = patterns.hasMissingPatterns;
        this._cachedCompiledPatterns = null;
    }
    dispose() {
        if (this._cachedCompiledPatterns) {
            this._cachedCompiledPatterns.dispose();
            this._cachedCompiledPatterns = null;
        }
    }
    collectPatterns(grammar, out) {
        for (const pattern of this.patterns) {
            const rule = grammar.getRule(pattern);
            rule.collectPatterns(grammar, out);
        }
    }
    compile(grammar, endRegexSource) {
        return this._getCachedCompiledPatterns(grammar).compile(grammar);
    }
    compileAG(grammar, endRegexSource, allowA, allowG) {
        return this._getCachedCompiledPatterns(grammar).compileAG(grammar, allowA, allowG);
    }
    _getCachedCompiledPatterns(grammar) {
        if (!this._cachedCompiledPatterns) {
            this._cachedCompiledPatterns = new RegExpSourceList();
            this.collectPatterns(grammar, this._cachedCompiledPatterns);
        }
        return this._cachedCompiledPatterns;
    }
}
class BeginEndRule extends Rule {
    _begin;
    beginCaptures;
    _end;
    endHasBackReferences;
    endCaptures;
    applyEndPatternLast;
    hasMissingPatterns;
    patterns;
    _cachedCompiledPatterns;
    constructor($location, id, name, contentName, begin, beginCaptures, end, endCaptures, applyEndPatternLast, patterns) {
        super($location, id, name, contentName);
        this._begin = new RegExpSource(begin, this.id);
        this.beginCaptures = beginCaptures;
        this._end = new RegExpSource(end ? end : '\uFFFF', -1);
        this.endHasBackReferences = this._end.hasBackReferences;
        this.endCaptures = endCaptures;
        this.applyEndPatternLast = applyEndPatternLast || false;
        this.patterns = patterns.patterns;
        this.hasMissingPatterns = patterns.hasMissingPatterns;
        this._cachedCompiledPatterns = null;
    }
    dispose() {
        if (this._cachedCompiledPatterns) {
            this._cachedCompiledPatterns.dispose();
            this._cachedCompiledPatterns = null;
        }
    }
    get debugBeginRegExp() {
        return `${this._begin.source}`;
    }
    get debugEndRegExp() {
        return `${this._end.source}`;
    }
    getEndWithResolvedBackReferences(lineText, captureIndices) {
        return this._end.resolveBackReferences(lineText, captureIndices);
    }
    collectPatterns(grammar, out) {
        out.push(this._begin);
    }
    compile(grammar, endRegexSource) {
        return this._getCachedCompiledPatterns(grammar, endRegexSource).compile(grammar);
    }
    compileAG(grammar, endRegexSource, allowA, allowG) {
        return this._getCachedCompiledPatterns(grammar, endRegexSource).compileAG(grammar, allowA, allowG);
    }
    _getCachedCompiledPatterns(grammar, endRegexSource) {
        if (!this._cachedCompiledPatterns) {
            this._cachedCompiledPatterns = new RegExpSourceList();
            for (const pattern of this.patterns) {
                const rule = grammar.getRule(pattern);
                rule.collectPatterns(grammar, this._cachedCompiledPatterns);
            }
            if (this.applyEndPatternLast) {
                this._cachedCompiledPatterns.push(this._end.hasBackReferences ? this._end.clone() : this._end);
            }
            else {
                this._cachedCompiledPatterns.unshift(this._end.hasBackReferences ? this._end.clone() : this._end);
            }
        }
        if (this._end.hasBackReferences) {
            if (this.applyEndPatternLast) {
                this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length() - 1, endRegexSource);
            }
            else {
                this._cachedCompiledPatterns.setSource(0, endRegexSource);
            }
        }
        return this._cachedCompiledPatterns;
    }
}
class BeginWhileRule extends Rule {
    _begin;
    beginCaptures;
    whileCaptures;
    _while;
    whileHasBackReferences;
    hasMissingPatterns;
    patterns;
    _cachedCompiledPatterns;
    _cachedCompiledWhilePatterns;
    constructor($location, id, name, contentName, begin, beginCaptures, _while, whileCaptures, patterns) {
        super($location, id, name, contentName);
        this._begin = new RegExpSource(begin, this.id);
        this.beginCaptures = beginCaptures;
        this.whileCaptures = whileCaptures;
        this._while = new RegExpSource(_while, whileRuleId);
        this.whileHasBackReferences = this._while.hasBackReferences;
        this.patterns = patterns.patterns;
        this.hasMissingPatterns = patterns.hasMissingPatterns;
        this._cachedCompiledPatterns = null;
        this._cachedCompiledWhilePatterns = null;
    }
    dispose() {
        if (this._cachedCompiledPatterns) {
            this._cachedCompiledPatterns.dispose();
            this._cachedCompiledPatterns = null;
        }
        if (this._cachedCompiledWhilePatterns) {
            this._cachedCompiledWhilePatterns.dispose();
            this._cachedCompiledWhilePatterns = null;
        }
    }
    get debugBeginRegExp() {
        return `${this._begin.source}`;
    }
    get debugWhileRegExp() {
        return `${this._while.source}`;
    }
    getWhileWithResolvedBackReferences(lineText, captureIndices) {
        return this._while.resolveBackReferences(lineText, captureIndices);
    }
    collectPatterns(grammar, out) {
        out.push(this._begin);
    }
    compile(grammar, endRegexSource) {
        return this._getCachedCompiledPatterns(grammar).compile(grammar);
    }
    compileAG(grammar, endRegexSource, allowA, allowG) {
        return this._getCachedCompiledPatterns(grammar).compileAG(grammar, allowA, allowG);
    }
    _getCachedCompiledPatterns(grammar) {
        if (!this._cachedCompiledPatterns) {
            this._cachedCompiledPatterns = new RegExpSourceList();
            for (const pattern of this.patterns) {
                const rule = grammar.getRule(pattern);
                rule.collectPatterns(grammar, this._cachedCompiledPatterns);
            }
        }
        return this._cachedCompiledPatterns;
    }
    compileWhile(grammar, endRegexSource) {
        return this._getCachedCompiledWhilePatterns(grammar, endRegexSource).compile(grammar);
    }
    compileWhileAG(grammar, endRegexSource, allowA, allowG) {
        return this._getCachedCompiledWhilePatterns(grammar, endRegexSource).compileAG(grammar, allowA, allowG);
    }
    _getCachedCompiledWhilePatterns(grammar, endRegexSource) {
        if (!this._cachedCompiledWhilePatterns) {
            this._cachedCompiledWhilePatterns = new RegExpSourceList();
            this._cachedCompiledWhilePatterns.push(this._while.hasBackReferences ? this._while.clone() : this._while);
        }
        if (this._while.hasBackReferences) {
            this._cachedCompiledWhilePatterns.setSource(0, endRegexSource ? endRegexSource : '\uFFFF');
        }
        return this._cachedCompiledWhilePatterns;
    }
}
class RuleFactory {
    static createCaptureRule(helper, $location, name, contentName, retokenizeCapturedWithRuleId) {
        return helper.registerRule((id) => {
            return new CaptureRule($location, id, name, contentName, retokenizeCapturedWithRuleId);
        });
    }
    static getCompiledRuleId(desc, helper, repository) {
        if (!desc.id) {
            helper.registerRule((id) => {
                desc.id = id;
                if (desc.match) {
                    return new MatchRule(desc.$vscodeTextmateLocation, desc.id, desc.name, desc.match, RuleFactory._compileCaptures(desc.captures, helper, repository));
                }
                if (typeof desc.begin === 'undefined') {
                    if (desc.repository) {
                        repository = mergeObjects({}, repository, desc.repository);
                    }
                    let patterns = desc.patterns;
                    if (typeof patterns === 'undefined' && desc.include) {
                        patterns = [{ include: desc.include }];
                    }
                    return new IncludeOnlyRule(desc.$vscodeTextmateLocation, desc.id, desc.name, desc.contentName, RuleFactory._compilePatterns(patterns, helper, repository));
                }
                if (desc.while) {
                    return new BeginWhileRule(desc.$vscodeTextmateLocation, desc.id, desc.name, desc.contentName, desc.begin, RuleFactory._compileCaptures(desc.beginCaptures || desc.captures, helper, repository), desc.while, RuleFactory._compileCaptures(desc.whileCaptures || desc.captures, helper, repository), RuleFactory._compilePatterns(desc.patterns, helper, repository));
                }
                return new BeginEndRule(desc.$vscodeTextmateLocation, desc.id, desc.name, desc.contentName, desc.begin, RuleFactory._compileCaptures(desc.beginCaptures || desc.captures, helper, repository), desc.end, RuleFactory._compileCaptures(desc.endCaptures || desc.captures, helper, repository), desc.applyEndPatternLast, RuleFactory._compilePatterns(desc.patterns, helper, repository));
            });
        }
        return desc.id;
    }
    static _compileCaptures(captures, helper, repository) {
        let r = [];
        if (captures) {
            // Find the maximum capture id
            let maximumCaptureId = 0;
            for (const captureId in captures) {
                if (captureId === '$vscodeTextmateLocation') {
                    continue;
                }
                const numericCaptureId = parseInt(captureId, 10);
                if (numericCaptureId > maximumCaptureId) {
                    maximumCaptureId = numericCaptureId;
                }
            }
            // Initialize result
            for (let i = 0; i <= maximumCaptureId; i++) {
                r[i] = null;
            }
            // Fill out result
            for (const captureId in captures) {
                if (captureId === '$vscodeTextmateLocation') {
                    continue;
                }
                const numericCaptureId = parseInt(captureId, 10);
                let retokenizeCapturedWithRuleId = 0;
                if (captures[captureId].patterns) {
                    retokenizeCapturedWithRuleId = RuleFactory.getCompiledRuleId(captures[captureId], helper, repository);
                }
                r[numericCaptureId] = RuleFactory.createCaptureRule(helper, captures[captureId].$vscodeTextmateLocation, captures[captureId].name, captures[captureId].contentName, retokenizeCapturedWithRuleId);
            }
        }
        return r;
    }
    static _compilePatterns(patterns, helper, repository) {
        let r = [];
        if (patterns) {
            for (let i = 0, len = patterns.length; i < len; i++) {
                const pattern = patterns[i];
                let ruleId = -1;
                if (pattern.include) {
                    const reference = parseInclude(pattern.include);
                    switch (reference.kind) {
                        case 0 /* IncludeReferenceKind.Base */:
                        case 1 /* IncludeReferenceKind.Self */:
                            ruleId = RuleFactory.getCompiledRuleId(repository[pattern.include], helper, repository);
                            break;
                        case 2 /* IncludeReferenceKind.RelativeReference */:
                            // Local include found in `repository`
                            let localIncludedRule = repository[reference.ruleName];
                            if (localIncludedRule) {
                                ruleId = RuleFactory.getCompiledRuleId(localIncludedRule, helper, repository);
                            }
                            break;
                        case 3 /* IncludeReferenceKind.TopLevelReference */:
                        case 4 /* IncludeReferenceKind.TopLevelRepositoryReference */:
                            const externalGrammarName = reference.scopeName;
                            const externalGrammarInclude = reference.kind === 4 /* IncludeReferenceKind.TopLevelRepositoryReference */
                                ? reference.ruleName
                                : null;
                            // External include
                            const externalGrammar = helper.getExternalGrammar(externalGrammarName, repository);
                            if (externalGrammar) {
                                if (externalGrammarInclude) {
                                    let externalIncludedRule = externalGrammar.repository[externalGrammarInclude];
                                    if (externalIncludedRule) {
                                        ruleId = RuleFactory.getCompiledRuleId(externalIncludedRule, helper, externalGrammar.repository);
                                    }
                                }
                                else {
                                    ruleId = RuleFactory.getCompiledRuleId(externalGrammar.repository.$self, helper, externalGrammar.repository);
                                }
                            }
                            break;
                    }
                }
                else {
                    ruleId = RuleFactory.getCompiledRuleId(pattern, helper, repository);
                }
                if (ruleId !== -1) {
                    const rule = helper.getRule(ruleId);
                    let skipRule = false;
                    if (rule instanceof IncludeOnlyRule || rule instanceof BeginEndRule || rule instanceof BeginWhileRule) {
                        if (rule.hasMissingPatterns && rule.patterns.length === 0) {
                            skipRule = true;
                        }
                    }
                    if (skipRule) {
                        // console.log('REMOVING RULE ENTIRELY DUE TO EMPTY PATTERNS THAT ARE MISSING');
                        continue;
                    }
                    r.push(ruleId);
                }
            }
        }
        return {
            patterns: r,
            hasMissingPatterns: ((patterns ? patterns.length : 0) !== r.length)
        };
    }
}
class RegExpSource {
    source;
    ruleId;
    hasAnchor;
    hasBackReferences;
    _anchorCache;
    constructor(regExpSource, ruleId) {
        if (regExpSource) {
            const len = regExpSource.length;
            let lastPushedPos = 0;
            let output = [];
            let hasAnchor = false;
            for (let pos = 0; pos < len; pos++) {
                const ch = regExpSource.charAt(pos);
                if (ch === '\\') {
                    if (pos + 1 < len) {
                        const nextCh = regExpSource.charAt(pos + 1);
                        if (nextCh === 'z') {
                            output.push(regExpSource.substring(lastPushedPos, pos));
                            output.push('$(?!\\n)(?<!\\n)');
                            lastPushedPos = pos + 2;
                        }
                        else if (nextCh === 'A' || nextCh === 'G') {
                            hasAnchor = true;
                        }
                        pos++;
                    }
                }
            }
            this.hasAnchor = hasAnchor;
            if (lastPushedPos === 0) {
                // No \z hit
                this.source = regExpSource;
            }
            else {
                output.push(regExpSource.substring(lastPushedPos, len));
                this.source = output.join('');
            }
        }
        else {
            this.hasAnchor = false;
            this.source = regExpSource;
        }
        if (this.hasAnchor) {
            this._anchorCache = this._buildAnchorCache();
        }
        else {
            this._anchorCache = null;
        }
        this.ruleId = ruleId;
        this.hasBackReferences = HAS_BACK_REFERENCES.test(this.source);
        // console.log('input: ' + regExpSource + ' => ' + this.source + ', ' + this.hasAnchor);
    }
    clone() {
        return new RegExpSource(this.source, this.ruleId);
    }
    setSource(newSource) {
        if (this.source === newSource) {
            return;
        }
        this.source = newSource;
        if (this.hasAnchor) {
            this._anchorCache = this._buildAnchorCache();
        }
    }
    resolveBackReferences(lineText, captureIndices) {
        let capturedValues = captureIndices.map((capture) => {
            return lineText.substring(capture.start, capture.end);
        });
        BACK_REFERENCING_END.lastIndex = 0;
        return this.source.replace(BACK_REFERENCING_END, (match, g1) => {
            return escapeRegExpCharacters(capturedValues[parseInt(g1, 10)] || '');
        });
    }
    _buildAnchorCache() {
        let A0_G0_result = [];
        let A0_G1_result = [];
        let A1_G0_result = [];
        let A1_G1_result = [];
        let pos, len, ch, nextCh;
        for (pos = 0, len = this.source.length; pos < len; pos++) {
            ch = this.source.charAt(pos);
            A0_G0_result[pos] = ch;
            A0_G1_result[pos] = ch;
            A1_G0_result[pos] = ch;
            A1_G1_result[pos] = ch;
            if (ch === '\\') {
                if (pos + 1 < len) {
                    nextCh = this.source.charAt(pos + 1);
                    if (nextCh === 'A') {
                        A0_G0_result[pos + 1] = '\uFFFF';
                        A0_G1_result[pos + 1] = '\uFFFF';
                        A1_G0_result[pos + 1] = 'A';
                        A1_G1_result[pos + 1] = 'A';
                    }
                    else if (nextCh === 'G') {
                        A0_G0_result[pos + 1] = '\uFFFF';
                        A0_G1_result[pos + 1] = 'G';
                        A1_G0_result[pos + 1] = '\uFFFF';
                        A1_G1_result[pos + 1] = 'G';
                    }
                    else {
                        A0_G0_result[pos + 1] = nextCh;
                        A0_G1_result[pos + 1] = nextCh;
                        A1_G0_result[pos + 1] = nextCh;
                        A1_G1_result[pos + 1] = nextCh;
                    }
                    pos++;
                }
            }
        }
        return {
            A0_G0: A0_G0_result.join(''),
            A0_G1: A0_G1_result.join(''),
            A1_G0: A1_G0_result.join(''),
            A1_G1: A1_G1_result.join('')
        };
    }
    resolveAnchors(allowA, allowG) {
        if (!this.hasAnchor || !this._anchorCache) {
            return this.source;
        }
        if (allowA) {
            if (allowG) {
                return this._anchorCache.A1_G1;
            }
            else {
                return this._anchorCache.A1_G0;
            }
        }
        else {
            if (allowG) {
                return this._anchorCache.A0_G1;
            }
            else {
                return this._anchorCache.A0_G0;
            }
        }
    }
}
class RegExpSourceList {
    _items;
    _hasAnchors;
    _cached;
    _anchorCache;
    constructor() {
        this._items = [];
        this._hasAnchors = false;
        this._cached = null;
        this._anchorCache = {
            A0_G0: null,
            A0_G1: null,
            A1_G0: null,
            A1_G1: null
        };
    }
    dispose() {
        this._disposeCaches();
    }
    _disposeCaches() {
        if (this._cached) {
            this._cached.dispose();
            this._cached = null;
        }
        if (this._anchorCache.A0_G0) {
            this._anchorCache.A0_G0.dispose();
            this._anchorCache.A0_G0 = null;
        }
        if (this._anchorCache.A0_G1) {
            this._anchorCache.A0_G1.dispose();
            this._anchorCache.A0_G1 = null;
        }
        if (this._anchorCache.A1_G0) {
            this._anchorCache.A1_G0.dispose();
            this._anchorCache.A1_G0 = null;
        }
        if (this._anchorCache.A1_G1) {
            this._anchorCache.A1_G1.dispose();
            this._anchorCache.A1_G1 = null;
        }
    }
    push(item) {
        this._items.push(item);
        this._hasAnchors = this._hasAnchors || item.hasAnchor;
    }
    unshift(item) {
        this._items.unshift(item);
        this._hasAnchors = this._hasAnchors || item.hasAnchor;
    }
    length() {
        return this._items.length;
    }
    setSource(index, newSource) {
        if (this._items[index].source !== newSource) {
            // bust the cache
            this._disposeCaches();
            this._items[index].setSource(newSource);
        }
    }
    compile(onigLib) {
        if (!this._cached) {
            let regExps = this._items.map(e => e.source);
            this._cached = new CompiledRule(onigLib, regExps, this._items.map(e => e.ruleId));
        }
        return this._cached;
    }
    compileAG(onigLib, allowA, allowG) {
        if (!this._hasAnchors) {
            return this.compile(onigLib);
        }
        else {
            if (allowA) {
                if (allowG) {
                    if (!this._anchorCache.A1_G1) {
                        this._anchorCache.A1_G1 = this._resolveAnchors(onigLib, allowA, allowG);
                    }
                    return this._anchorCache.A1_G1;
                }
                else {
                    if (!this._anchorCache.A1_G0) {
                        this._anchorCache.A1_G0 = this._resolveAnchors(onigLib, allowA, allowG);
                    }
                    return this._anchorCache.A1_G0;
                }
            }
            else {
                if (allowG) {
                    if (!this._anchorCache.A0_G1) {
                        this._anchorCache.A0_G1 = this._resolveAnchors(onigLib, allowA, allowG);
                    }
                    return this._anchorCache.A0_G1;
                }
                else {
                    if (!this._anchorCache.A0_G0) {
                        this._anchorCache.A0_G0 = this._resolveAnchors(onigLib, allowA, allowG);
                    }
                    return this._anchorCache.A0_G0;
                }
            }
        }
    }
    _resolveAnchors(onigLib, allowA, allowG) {
        let regExps = this._items.map(e => e.resolveAnchors(allowA, allowG));
        return new CompiledRule(onigLib, regExps, this._items.map(e => e.ruleId));
    }
}
class CompiledRule {
    regExps;
    rules;
    scanner;
    constructor(onigLib, regExps, rules) {
        this.regExps = regExps;
        this.rules = rules;
        this.scanner = onigLib.createOnigScanner(regExps);
    }
    dispose() {
        if (typeof this.scanner.dispose === "function") {
            this.scanner.dispose();
        }
    }
    toString() {
        const r = [];
        for (let i = 0, len = this.rules.length; i < len; i++) {
            r.push("   - " + this.rules[i] + ": " + this.regExps[i]);
        }
        return r.join("\n");
    }
    findNextMatchSync(string, startPosition, options) {
        const result = this.scanner.findNextMatchSync(string, startPosition, options);
        if (!result) {
            return null;
        }
        return {
            ruleId: this.rules[result.index],
            captureIndices: result.captureIndices,
        };
    }
}

/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
class Theme {
    _colorMap;
    _defaults;
    _root;
    static createFromRawTheme(source, colorMap) {
        return this.createFromParsedTheme(parseTheme(source), colorMap);
    }
    static createFromParsedTheme(source, colorMap) {
        return resolveParsedThemeRules(source, colorMap);
    }
    _cachedMatchRoot = new CachedFn((scopeName) => this._root.match(scopeName));
    constructor(_colorMap, _defaults, _root) {
        this._colorMap = _colorMap;
        this._defaults = _defaults;
        this._root = _root;
    }
    getColorMap() {
        return this._colorMap.getColorMap();
    }
    getDefaults() {
        return this._defaults;
    }
    match(scopePath) {
        if (scopePath === null) {
            return this._defaults;
        }
        const scopeName = scopePath.scopeName;
        const matchingTrieElements = this._cachedMatchRoot.get(scopeName);
        const effectiveRule = matchingTrieElements.find((v) => _scopePathMatchesParentScopes(scopePath.parent, v.parentScopes));
        if (!effectiveRule) {
            return null;
        }
        return new StyleAttributes(effectiveRule.fontStyle, effectiveRule.foreground, effectiveRule.background);
    }
}
class ScopeStack {
    parent;
    scopeName;
    static push(path, scopeNames) {
        for (const name of scopeNames) {
            path = new ScopeStack(path, name);
        }
        return path;
    }
    static from(...segments) {
        let result = null;
        for (let i = 0; i < segments.length; i++) {
            result = new ScopeStack(result, segments[i]);
        }
        return result;
    }
    constructor(parent, scopeName) {
        this.parent = parent;
        this.scopeName = scopeName;
    }
    push(scopeName) {
        return new ScopeStack(this, scopeName);
    }
    getSegments() {
        let item = this;
        const result = [];
        while (item) {
            result.push(item.scopeName);
            item = item.parent;
        }
        result.reverse();
        return result;
    }
    toString() {
        return this.getSegments().join(' ');
    }
    extends(other) {
        if (this === other) {
            return true;
        }
        if (this.parent === null) {
            return false;
        }
        return this.parent.extends(other);
    }
    getExtensionIfDefined(base) {
        const result = [];
        let item = this;
        while (item && item !== base) {
            result.push(item.scopeName);
            item = item.parent;
        }
        return item === base ? result.reverse() : undefined;
    }
}
function _scopePathMatchesParentScopes(scopePath, parentScopes) {
    if (parentScopes === null) {
        return true;
    }
    let index = 0;
    let scopePattern = parentScopes[index];
    while (scopePath) {
        if (_matchesScope(scopePath.scopeName, scopePattern)) {
            index++;
            if (index === parentScopes.length) {
                return true;
            }
            scopePattern = parentScopes[index];
        }
        scopePath = scopePath.parent;
    }
    return false;
}
function _matchesScope(scopeName, scopePattern) {
    return scopePattern === scopeName || (scopeName.startsWith(scopePattern) && scopeName[scopePattern.length] === '.');
}
class StyleAttributes {
    fontStyle;
    foregroundId;
    backgroundId;
    constructor(fontStyle, foregroundId, backgroundId) {
        this.fontStyle = fontStyle;
        this.foregroundId = foregroundId;
        this.backgroundId = backgroundId;
    }
}
/**
 * Parse a raw theme into rules.
 */
function parseTheme(source) {
    if (!source) {
        return [];
    }
    if (!source.settings || !Array.isArray(source.settings)) {
        return [];
    }
    let settings = source.settings;
    let result = [], resultLen = 0;
    for (let i = 0, len = settings.length; i < len; i++) {
        let entry = settings[i];
        if (!entry.settings) {
            continue;
        }
        let scopes;
        if (typeof entry.scope === 'string') {
            let _scope = entry.scope;
            // remove leading commas
            _scope = _scope.replace(/^[,]+/, '');
            // remove trailing commans
            _scope = _scope.replace(/[,]+$/, '');
            scopes = _scope.split(',');
        }
        else if (Array.isArray(entry.scope)) {
            scopes = entry.scope;
        }
        else {
            scopes = [''];
        }
        let fontStyle = -1 /* FontStyle.NotSet */;
        if (typeof entry.settings.fontStyle === 'string') {
            fontStyle = 0 /* FontStyle.None */;
            let segments = entry.settings.fontStyle.split(' ');
            for (let j = 0, lenJ = segments.length; j < lenJ; j++) {
                let segment = segments[j];
                switch (segment) {
                    case 'italic':
                        fontStyle = fontStyle | 1 /* FontStyle.Italic */;
                        break;
                    case 'bold':
                        fontStyle = fontStyle | 2 /* FontStyle.Bold */;
                        break;
                    case 'underline':
                        fontStyle = fontStyle | 4 /* FontStyle.Underline */;
                        break;
                    case 'strikethrough':
                        fontStyle = fontStyle | 8 /* FontStyle.Strikethrough */;
                        break;
                }
            }
        }
        let foreground = null;
        if (typeof entry.settings.foreground === 'string' && isValidHexColor(entry.settings.foreground)) {
            foreground = entry.settings.foreground;
        }
        let background = null;
        if (typeof entry.settings.background === 'string' && isValidHexColor(entry.settings.background)) {
            background = entry.settings.background;
        }
        for (let j = 0, lenJ = scopes.length; j < lenJ; j++) {
            let _scope = scopes[j].trim();
            let segments = _scope.split(' ');
            let scope = segments[segments.length - 1];
            let parentScopes = null;
            if (segments.length > 1) {
                parentScopes = segments.slice(0, segments.length - 1);
                parentScopes.reverse();
            }
            result[resultLen++] = new ParsedThemeRule(scope, parentScopes, i, fontStyle, foreground, background);
        }
    }
    return result;
}
class ParsedThemeRule {
    scope;
    parentScopes;
    index;
    fontStyle;
    foreground;
    background;
    constructor(scope, parentScopes, index, fontStyle, foreground, background) {
        this.scope = scope;
        this.parentScopes = parentScopes;
        this.index = index;
        this.fontStyle = fontStyle;
        this.foreground = foreground;
        this.background = background;
    }
}
/**
 * Resolve rules (i.e. inheritance).
 */
function resolveParsedThemeRules(parsedThemeRules, _colorMap) {
    // Sort rules lexicographically, and then by index if necessary
    parsedThemeRules.sort((a, b) => {
        let r = strcmp(a.scope, b.scope);
        if (r !== 0) {
            return r;
        }
        r = strArrCmp(a.parentScopes, b.parentScopes);
        if (r !== 0) {
            return r;
        }
        return a.index - b.index;
    });
    // Determine defaults
    let defaultFontStyle = 0 /* FontStyle.None */;
    let defaultForeground = '#000000';
    let defaultBackground = '#ffffff';
    while (parsedThemeRules.length >= 1 && parsedThemeRules[0].scope === '') {
        let incomingDefaults = parsedThemeRules.shift();
        if (incomingDefaults.fontStyle !== -1 /* FontStyle.NotSet */) {
            defaultFontStyle = incomingDefaults.fontStyle;
        }
        if (incomingDefaults.foreground !== null) {
            defaultForeground = incomingDefaults.foreground;
        }
        if (incomingDefaults.background !== null) {
            defaultBackground = incomingDefaults.background;
        }
    }
    let colorMap = new ColorMap(_colorMap);
    let defaults = new StyleAttributes(defaultFontStyle, colorMap.getId(defaultForeground), colorMap.getId(defaultBackground));
    let root = new ThemeTrieElement(new ThemeTrieElementRule(0, null, -1 /* FontStyle.NotSet */, 0, 0), []);
    for (let i = 0, len = parsedThemeRules.length; i < len; i++) {
        let rule = parsedThemeRules[i];
        root.insert(0, rule.scope, rule.parentScopes, rule.fontStyle, colorMap.getId(rule.foreground), colorMap.getId(rule.background));
    }
    return new Theme(colorMap, defaults, root);
}
class ColorMap {
    _isFrozen;
    _lastColorId;
    _id2color;
    _color2id;
    constructor(_colorMap) {
        this._lastColorId = 0;
        this._id2color = [];
        this._color2id = Object.create(null);
        if (Array.isArray(_colorMap)) {
            this._isFrozen = true;
            for (let i = 0, len = _colorMap.length; i < len; i++) {
                this._color2id[_colorMap[i]] = i;
                this._id2color[i] = _colorMap[i];
            }
        }
        else {
            this._isFrozen = false;
        }
    }
    getId(color) {
        if (color === null) {
            return 0;
        }
        color = color.toUpperCase();
        let value = this._color2id[color];
        if (value) {
            return value;
        }
        if (this._isFrozen) {
            throw new Error(`Missing color in color map - ${color}`);
        }
        value = ++this._lastColorId;
        this._color2id[color] = value;
        this._id2color[value] = color;
        return value;
    }
    getColorMap() {
        return this._id2color.slice(0);
    }
}
class ThemeTrieElementRule {
    scopeDepth;
    parentScopes;
    fontStyle;
    foreground;
    background;
    constructor(scopeDepth, parentScopes, fontStyle, foreground, background) {
        this.scopeDepth = scopeDepth;
        this.parentScopes = parentScopes;
        this.fontStyle = fontStyle;
        this.foreground = foreground;
        this.background = background;
    }
    clone() {
        return new ThemeTrieElementRule(this.scopeDepth, this.parentScopes, this.fontStyle, this.foreground, this.background);
    }
    static cloneArr(arr) {
        let r = [];
        for (let i = 0, len = arr.length; i < len; i++) {
            r[i] = arr[i].clone();
        }
        return r;
    }
    acceptOverwrite(scopeDepth, fontStyle, foreground, background) {
        if (this.scopeDepth > scopeDepth) {
            console.log('how did this happen?');
        }
        else {
            this.scopeDepth = scopeDepth;
        }
        // console.log('TODO -> my depth: ' + this.scopeDepth + ', overwriting depth: ' + scopeDepth);
        if (fontStyle !== -1 /* FontStyle.NotSet */) {
            this.fontStyle = fontStyle;
        }
        if (foreground !== 0) {
            this.foreground = foreground;
        }
        if (background !== 0) {
            this.background = background;
        }
    }
}
class ThemeTrieElement {
    _mainRule;
    _children;
    _rulesWithParentScopes;
    constructor(_mainRule, rulesWithParentScopes = [], _children = {}) {
        this._mainRule = _mainRule;
        this._children = _children;
        this._rulesWithParentScopes = rulesWithParentScopes;
    }
    static _sortBySpecificity(arr) {
        if (arr.length === 1) {
            return arr;
        }
        arr.sort(this._cmpBySpecificity);
        return arr;
    }
    static _cmpBySpecificity(a, b) {
        if (a.scopeDepth === b.scopeDepth) {
            const aParentScopes = a.parentScopes;
            const bParentScopes = b.parentScopes;
            let aParentScopesLen = aParentScopes === null ? 0 : aParentScopes.length;
            let bParentScopesLen = bParentScopes === null ? 0 : bParentScopes.length;
            if (aParentScopesLen === bParentScopesLen) {
                for (let i = 0; i < aParentScopesLen; i++) {
                    const aLen = aParentScopes[i].length;
                    const bLen = bParentScopes[i].length;
                    if (aLen !== bLen) {
                        return bLen - aLen;
                    }
                }
            }
            return bParentScopesLen - aParentScopesLen;
        }
        return b.scopeDepth - a.scopeDepth;
    }
    match(scope) {
        if (scope === '') {
            return ThemeTrieElement._sortBySpecificity([].concat(this._mainRule).concat(this._rulesWithParentScopes));
        }
        let dotIndex = scope.indexOf('.');
        let head;
        let tail;
        if (dotIndex === -1) {
            head = scope;
            tail = '';
        }
        else {
            head = scope.substring(0, dotIndex);
            tail = scope.substring(dotIndex + 1);
        }
        if (this._children.hasOwnProperty(head)) {
            return this._children[head].match(tail);
        }
        return ThemeTrieElement._sortBySpecificity([].concat(this._mainRule).concat(this._rulesWithParentScopes));
    }
    insert(scopeDepth, scope, parentScopes, fontStyle, foreground, background) {
        if (scope === '') {
            this._doInsertHere(scopeDepth, parentScopes, fontStyle, foreground, background);
            return;
        }
        let dotIndex = scope.indexOf('.');
        let head;
        let tail;
        if (dotIndex === -1) {
            head = scope;
            tail = '';
        }
        else {
            head = scope.substring(0, dotIndex);
            tail = scope.substring(dotIndex + 1);
        }
        let child;
        if (this._children.hasOwnProperty(head)) {
            child = this._children[head];
        }
        else {
            child = new ThemeTrieElement(this._mainRule.clone(), ThemeTrieElementRule.cloneArr(this._rulesWithParentScopes));
            this._children[head] = child;
        }
        child.insert(scopeDepth + 1, tail, parentScopes, fontStyle, foreground, background);
    }
    _doInsertHere(scopeDepth, parentScopes, fontStyle, foreground, background) {
        if (parentScopes === null) {
            // Merge into the main rule
            this._mainRule.acceptOverwrite(scopeDepth, fontStyle, foreground, background);
            return;
        }
        // Try to merge into existing rule
        for (let i = 0, len = this._rulesWithParentScopes.length; i < len; i++) {
            let rule = this._rulesWithParentScopes[i];
            if (strArrCmp(rule.parentScopes, parentScopes) === 0) {
                // bingo! => we get to merge this into an existing one
                rule.acceptOverwrite(scopeDepth, fontStyle, foreground, background);
                return;
            }
        }
        // Must add a new rule
        // Inherit from main rule
        if (fontStyle === -1 /* FontStyle.NotSet */) {
            fontStyle = this._mainRule.fontStyle;
        }
        if (foreground === 0) {
            foreground = this._mainRule.foreground;
        }
        if (background === 0) {
            background = this._mainRule.background;
        }
        this._rulesWithParentScopes.push(new ThemeTrieElementRule(scopeDepth, parentScopes, fontStyle, foreground, background));
    }
}

/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
class BasicScopeAttributes {
    languageId;
    tokenType;
    constructor(languageId, tokenType) {
        this.languageId = languageId;
        this.tokenType = tokenType;
    }
}
class BasicScopeAttributesProvider {
    _defaultAttributes;
    _embeddedLanguagesMatcher;
    constructor(initialLanguageId, embeddedLanguages) {
        this._defaultAttributes = new BasicScopeAttributes(initialLanguageId, 8 /* OptionalStandardTokenType.NotSet */);
        this._embeddedLanguagesMatcher = new ScopeMatcher(Object.entries(embeddedLanguages || {}));
    }
    getDefaultAttributes() {
        return this._defaultAttributes;
    }
    getBasicScopeAttributes(scopeName) {
        if (scopeName === null) {
            return BasicScopeAttributesProvider._NULL_SCOPE_METADATA;
        }
        return this._getBasicScopeAttributes.get(scopeName);
    }
    static _NULL_SCOPE_METADATA = new BasicScopeAttributes(0, 0);
    _getBasicScopeAttributes = new CachedFn((scopeName) => {
        const languageId = this._scopeToLanguage(scopeName);
        const standardTokenType = this._toStandardTokenType(scopeName);
        return new BasicScopeAttributes(languageId, standardTokenType);
    });
    /**
     * Given a produced TM scope, return the language that token describes or null if unknown.
     * e.g. source.html => html, source.css.embedded.html => css, punctuation.definition.tag.html => null
     */
    _scopeToLanguage(scope) {
        return this._embeddedLanguagesMatcher.match(scope) || 0;
    }
    _toStandardTokenType(scopeName) {
        const m = scopeName.match(BasicScopeAttributesProvider.STANDARD_TOKEN_TYPE_REGEXP);
        if (!m) {
            return 8 /* OptionalStandardTokenType.NotSet */;
        }
        switch (m[1]) {
            case "comment":
                return 1 /* OptionalStandardTokenType.Comment */;
            case "string":
                return 2 /* OptionalStandardTokenType.String */;
            case "regex":
                return 3 /* OptionalStandardTokenType.RegEx */;
            case "meta.embedded":
                return 0 /* OptionalStandardTokenType.Other */;
        }
        throw new Error("Unexpected match for standard token type!");
    }
    static STANDARD_TOKEN_TYPE_REGEXP = /\b(comment|string|regex|meta\.embedded)\b/;
}
class ScopeMatcher {
    values;
    scopesRegExp;
    constructor(values) {
        if (values.length === 0) {
            this.values = null;
            this.scopesRegExp = null;
        }
        else {
            this.values = new Map(values);
            // create the regex
            const escapedScopes = values.map(([scopeName, value]) => escapeRegExpCharacters(scopeName));
            escapedScopes.sort();
            escapedScopes.reverse(); // Longest scope first
            this.scopesRegExp = new RegExp(`^((${escapedScopes.join(")|(")}))($|\\.)`, "");
        }
    }
    match(scope) {
        if (!this.scopesRegExp) {
            return undefined;
        }
        const m = scope.match(this.scopesRegExp);
        if (!m) {
            // no scopes matched
            return undefined;
        }
        return this.values.get(m[1]);
    }
}

/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
class TokenizeStringResult {
    stack;
    stoppedEarly;
    constructor(stack, stoppedEarly) {
        this.stack = stack;
        this.stoppedEarly = stoppedEarly;
    }
}
/**
 * Tokenize a string
 * @param grammar
 * @param lineText
 * @param isFirstLine
 * @param linePos
 * @param stack
 * @param lineTokens
 * @param checkWhileConditions
 * @param timeLimit Use `0` to indicate no time limit
 * @returns the StackElement or StackElement.TIME_LIMIT_REACHED if the time limit has been reached
 */
function _tokenizeString(grammar, lineText, isFirstLine, linePos, stack, lineTokens, checkWhileConditions, timeLimit) {
    const lineLength = lineText.content.length;
    let STOP = false;
    let anchorPosition = -1;
    if (checkWhileConditions) {
        const whileCheckResult = _checkWhileConditions(grammar, lineText, isFirstLine, linePos, stack, lineTokens);
        stack = whileCheckResult.stack;
        linePos = whileCheckResult.linePos;
        isFirstLine = whileCheckResult.isFirstLine;
        anchorPosition = whileCheckResult.anchorPosition;
    }
    const startTime = Date.now();
    while (!STOP) {
        if (timeLimit !== 0) {
            const elapsedTime = Date.now() - startTime;
            if (elapsedTime > timeLimit) {
                return new TokenizeStringResult(stack, true);
            }
        }
        scanNext(); // potentially modifies linePos && anchorPosition
    }
    return new TokenizeStringResult(stack, false);
    function scanNext() {
        const r = matchRuleOrInjections(grammar, lineText, isFirstLine, linePos, stack, anchorPosition);
        if (!r) {
            // No match
            lineTokens.produce(stack, lineLength);
            STOP = true;
            return;
        }
        const captureIndices = r.captureIndices;
        const matchedRuleId = r.matchedRuleId;
        const hasAdvanced = captureIndices && captureIndices.length > 0
            ? captureIndices[0].end > linePos
            : false;
        if (matchedRuleId === endRuleId) {
            // We matched the `end` for this rule => pop it
            const poppedRule = stack.getRule(grammar);
            lineTokens.produce(stack, captureIndices[0].start);
            stack = stack.withContentNameScopesList(stack.nameScopesList);
            handleCaptures(grammar, lineText, isFirstLine, stack, lineTokens, poppedRule.endCaptures, captureIndices);
            lineTokens.produce(stack, captureIndices[0].end);
            // pop
            const popped = stack;
            stack = stack.parent;
            anchorPosition = popped.getAnchorPos();
            if (!hasAdvanced && popped.getEnterPos() === linePos) {
                // See https://github.com/Microsoft/vscode-textmate/issues/12
                // Let's assume this was a mistake by the grammar author and the intent was to continue in this state
                stack = popped;
                lineTokens.produce(stack, lineLength);
                STOP = true;
                return;
            }
        }
        else {
            // We matched a rule!
            const _rule = grammar.getRule(matchedRuleId);
            lineTokens.produce(stack, captureIndices[0].start);
            const beforePush = stack;
            // push it on the stack rule
            const scopeName = _rule.getName(lineText.content, captureIndices);
            const nameScopesList = stack.contentNameScopesList.pushAttributed(scopeName, grammar);
            stack = stack.push(matchedRuleId, linePos, anchorPosition, captureIndices[0].end === lineLength, null, nameScopesList, nameScopesList);
            if (_rule instanceof BeginEndRule) {
                const pushedRule = _rule;
                handleCaptures(grammar, lineText, isFirstLine, stack, lineTokens, pushedRule.beginCaptures, captureIndices);
                lineTokens.produce(stack, captureIndices[0].end);
                anchorPosition = captureIndices[0].end;
                const contentName = pushedRule.getContentName(lineText.content, captureIndices);
                const contentNameScopesList = nameScopesList.pushAttributed(contentName, grammar);
                stack = stack.withContentNameScopesList(contentNameScopesList);
                if (pushedRule.endHasBackReferences) {
                    stack = stack.withEndRule(pushedRule.getEndWithResolvedBackReferences(lineText.content, captureIndices));
                }
                if (!hasAdvanced && beforePush.hasSameRuleAs(stack)) {
                    stack = stack.pop();
                    lineTokens.produce(stack, lineLength);
                    STOP = true;
                    return;
                }
            }
            else if (_rule instanceof BeginWhileRule) {
                const pushedRule = _rule;
                handleCaptures(grammar, lineText, isFirstLine, stack, lineTokens, pushedRule.beginCaptures, captureIndices);
                lineTokens.produce(stack, captureIndices[0].end);
                anchorPosition = captureIndices[0].end;
                const contentName = pushedRule.getContentName(lineText.content, captureIndices);
                const contentNameScopesList = nameScopesList.pushAttributed(contentName, grammar);
                stack = stack.withContentNameScopesList(contentNameScopesList);
                if (pushedRule.whileHasBackReferences) {
                    stack = stack.withEndRule(pushedRule.getWhileWithResolvedBackReferences(lineText.content, captureIndices));
                }
                if (!hasAdvanced && beforePush.hasSameRuleAs(stack)) {
                    stack = stack.pop();
                    lineTokens.produce(stack, lineLength);
                    STOP = true;
                    return;
                }
            }
            else {
                const matchingRule = _rule;
                handleCaptures(grammar, lineText, isFirstLine, stack, lineTokens, matchingRule.captures, captureIndices);
                lineTokens.produce(stack, captureIndices[0].end);
                // pop rule immediately since it is a MatchRule
                stack = stack.pop();
                if (!hasAdvanced) {
                    stack = stack.safePop();
                    lineTokens.produce(stack, lineLength);
                    STOP = true;
                    return;
                }
            }
        }
        if (captureIndices[0].end > linePos) {
            // Advance stream
            linePos = captureIndices[0].end;
            isFirstLine = false;
        }
    }
}
/**
 * Walk the stack from bottom to top, and check each while condition in this order.
 * If any fails, cut off the entire stack above the failed while condition. While conditions
 * may also advance the linePosition.
 */
function _checkWhileConditions(grammar, lineText, isFirstLine, linePos, stack, lineTokens) {
    let anchorPosition = (stack.beginRuleCapturedEOL ? 0 : -1);
    const whileRules = [];
    for (let node = stack; node; node = node.pop()) {
        const nodeRule = node.getRule(grammar);
        if (nodeRule instanceof BeginWhileRule) {
            whileRules.push({
                rule: nodeRule,
                stack: node
            });
        }
    }
    for (let whileRule = whileRules.pop(); whileRule; whileRule = whileRules.pop()) {
        const { ruleScanner, findOptions } = prepareRuleWhileSearch(whileRule.rule, grammar, whileRule.stack.endRule, isFirstLine, linePos === anchorPosition);
        const r = ruleScanner.findNextMatchSync(lineText, linePos, findOptions);
        if (r) {
            const matchedRuleId = r.ruleId;
            if (matchedRuleId !== whileRuleId) {
                // we shouldn't end up here
                stack = whileRule.stack.pop();
                break;
            }
            if (r.captureIndices && r.captureIndices.length) {
                lineTokens.produce(whileRule.stack, r.captureIndices[0].start);
                handleCaptures(grammar, lineText, isFirstLine, whileRule.stack, lineTokens, whileRule.rule.whileCaptures, r.captureIndices);
                lineTokens.produce(whileRule.stack, r.captureIndices[0].end);
                anchorPosition = r.captureIndices[0].end;
                if (r.captureIndices[0].end > linePos) {
                    linePos = r.captureIndices[0].end;
                    isFirstLine = false;
                }
            }
        }
        else {
            stack = whileRule.stack.pop();
            break;
        }
    }
    return { stack: stack, linePos: linePos, anchorPosition: anchorPosition, isFirstLine: isFirstLine };
}
function matchRuleOrInjections(grammar, lineText, isFirstLine, linePos, stack, anchorPosition) {
    // Look for normal grammar rule
    const matchResult = matchRule(grammar, lineText, isFirstLine, linePos, stack, anchorPosition);
    // Look for injected rules
    const injections = grammar.getInjections();
    if (injections.length === 0) {
        // No injections whatsoever => early return
        return matchResult;
    }
    const injectionResult = matchInjections(injections, grammar, lineText, isFirstLine, linePos, stack, anchorPosition);
    if (!injectionResult) {
        // No injections matched => early return
        return matchResult;
    }
    if (!matchResult) {
        // Only injections matched => early return
        return injectionResult;
    }
    // Decide if `matchResult` or `injectionResult` should win
    const matchResultScore = matchResult.captureIndices[0].start;
    const injectionResultScore = injectionResult.captureIndices[0].start;
    if (injectionResultScore < matchResultScore || (injectionResult.priorityMatch && injectionResultScore === matchResultScore)) {
        // injection won!
        return injectionResult;
    }
    return matchResult;
}
function matchRule(grammar, lineText, isFirstLine, linePos, stack, anchorPosition) {
    const rule = stack.getRule(grammar);
    const { ruleScanner, findOptions } = prepareRuleSearch(rule, grammar, stack.endRule, isFirstLine, linePos === anchorPosition);
    const r = ruleScanner.findNextMatchSync(lineText, linePos, findOptions);
    if (r) {
        return {
            captureIndices: r.captureIndices,
            matchedRuleId: r.ruleId
        };
    }
    return null;
}
function matchInjections(injections, grammar, lineText, isFirstLine, linePos, stack, anchorPosition) {
    // The lower the better
    let bestMatchRating = Number.MAX_VALUE;
    let bestMatchCaptureIndices = null;
    let bestMatchRuleId;
    let bestMatchResultPriority = 0;
    const scopes = stack.contentNameScopesList.getScopeNames();
    for (let i = 0, len = injections.length; i < len; i++) {
        const injection = injections[i];
        if (!injection.matcher(scopes)) {
            // injection selector doesn't match stack
            continue;
        }
        const rule = grammar.getRule(injection.ruleId);
        const { ruleScanner, findOptions } = prepareRuleSearch(rule, grammar, null, isFirstLine, linePos === anchorPosition);
        const matchResult = ruleScanner.findNextMatchSync(lineText, linePos, findOptions);
        if (!matchResult) {
            continue;
        }
        const matchRating = matchResult.captureIndices[0].start;
        if (matchRating >= bestMatchRating) {
            // Injections are sorted by priority, so the previous injection had a better or equal priority
            continue;
        }
        bestMatchRating = matchRating;
        bestMatchCaptureIndices = matchResult.captureIndices;
        bestMatchRuleId = matchResult.ruleId;
        bestMatchResultPriority = injection.priority;
        if (bestMatchRating === linePos) {
            // No more need to look at the rest of the injections.
            break;
        }
    }
    if (bestMatchCaptureIndices) {
        return {
            priorityMatch: bestMatchResultPriority === -1,
            captureIndices: bestMatchCaptureIndices,
            matchedRuleId: bestMatchRuleId
        };
    }
    return null;
}
function prepareRuleSearch(rule, grammar, endRegexSource, allowA, allowG) {
    const ruleScanner = rule.compileAG(grammar, endRegexSource, allowA, allowG);
    return { ruleScanner, findOptions: 0 /* FindOption.None */ };
}
function prepareRuleWhileSearch(rule, grammar, endRegexSource, allowA, allowG) {
    const ruleScanner = rule.compileWhileAG(grammar, endRegexSource, allowA, allowG);
    return { ruleScanner, findOptions: 0 /* FindOption.None */ };
}
function handleCaptures(grammar, lineText, isFirstLine, stack, lineTokens, captures, captureIndices) {
    if (captures.length === 0) {
        return;
    }
    const lineTextContent = lineText.content;
    const len = Math.min(captures.length, captureIndices.length);
    const localStack = [];
    const maxEnd = captureIndices[0].end;
    for (let i = 0; i < len; i++) {
        const captureRule = captures[i];
        if (captureRule === null) {
            // Not interested
            continue;
        }
        const captureIndex = captureIndices[i];
        if (captureIndex.length === 0) {
            // Nothing really captured
            continue;
        }
        if (captureIndex.start > maxEnd) {
            // Capture going beyond consumed string
            break;
        }
        // pop captures while needed
        while (localStack.length > 0 && localStack[localStack.length - 1].endPos <= captureIndex.start) {
            // pop!
            lineTokens.produceFromScopes(localStack[localStack.length - 1].scopes, localStack[localStack.length - 1].endPos);
            localStack.pop();
        }
        if (localStack.length > 0) {
            lineTokens.produceFromScopes(localStack[localStack.length - 1].scopes, captureIndex.start);
        }
        else {
            lineTokens.produce(stack, captureIndex.start);
        }
        if (captureRule.retokenizeCapturedWithRuleId) {
            // the capture requires additional matching
            const scopeName = captureRule.getName(lineTextContent, captureIndices);
            const nameScopesList = stack.contentNameScopesList.pushAttributed(scopeName, grammar);
            const contentName = captureRule.getContentName(lineTextContent, captureIndices);
            const contentNameScopesList = nameScopesList.pushAttributed(contentName, grammar);
            const stackClone = stack.push(captureRule.retokenizeCapturedWithRuleId, captureIndex.start, -1, false, null, nameScopesList, contentNameScopesList);
            const onigSubStr = grammar.createOnigString(lineTextContent.substring(0, captureIndex.end));
            _tokenizeString(grammar, onigSubStr, (isFirstLine && captureIndex.start === 0), captureIndex.start, stackClone, lineTokens, false, /* no time limit */ 0);
            disposeOnigString(onigSubStr);
            continue;
        }
        const captureRuleScopeName = captureRule.getName(lineTextContent, captureIndices);
        if (captureRuleScopeName !== null) {
            // push
            const base = localStack.length > 0 ? localStack[localStack.length - 1].scopes : stack.contentNameScopesList;
            const captureRuleScopesList = base.pushAttributed(captureRuleScopeName, grammar);
            localStack.push(new LocalStackElement(captureRuleScopesList, captureIndex.end));
        }
    }
    while (localStack.length > 0) {
        // pop!
        lineTokens.produceFromScopes(localStack[localStack.length - 1].scopes, localStack[localStack.length - 1].endPos);
        localStack.pop();
    }
}
class LocalStackElement {
    scopes;
    endPos;
    constructor(scopes, endPos) {
        this.scopes = scopes;
        this.endPos = endPos;
    }
}

/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
function createGrammar(scopeName, grammar, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors, grammarRepository, onigLib) {
    return new Grammar(scopeName, grammar, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors, grammarRepository, onigLib); //TODO
}
function collectInjections(result, selector, rule, ruleFactoryHelper, grammar) {
    const matchers = createMatchers(selector, nameMatcher);
    const ruleId = RuleFactory.getCompiledRuleId(rule, ruleFactoryHelper, grammar.repository);
    for (const matcher of matchers) {
        result.push({
            debugSelector: selector,
            matcher: matcher.matcher,
            ruleId: ruleId,
            grammar: grammar,
            priority: matcher.priority
        });
    }
}
function nameMatcher(identifers, scopes) {
    if (scopes.length < identifers.length) {
        return false;
    }
    let lastIndex = 0;
    return identifers.every(identifier => {
        for (let i = lastIndex; i < scopes.length; i++) {
            if (scopesAreMatching(scopes[i], identifier)) {
                lastIndex = i + 1;
                return true;
            }
        }
        return false;
    });
}
function scopesAreMatching(thisScopeName, scopeName) {
    if (!thisScopeName) {
        return false;
    }
    if (thisScopeName === scopeName) {
        return true;
    }
    const len = scopeName.length;
    return thisScopeName.length > len && thisScopeName.substr(0, len) === scopeName && thisScopeName[len] === '.';
}
class Grammar {
    _rootScopeName;
    balancedBracketSelectors;
    _onigLib;
    _rootId;
    _lastRuleId;
    _ruleId2desc;
    _includedGrammars;
    _grammarRepository;
    _grammar;
    _injections;
    _basicScopeAttributesProvider;
    _tokenTypeMatchers;
    get themeProvider() { return this._grammarRepository; }
    constructor(_rootScopeName, grammar, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors, grammarRepository, _onigLib) {
        this._rootScopeName = _rootScopeName;
        this.balancedBracketSelectors = balancedBracketSelectors;
        this._onigLib = _onigLib;
        this._basicScopeAttributesProvider = new BasicScopeAttributesProvider(initialLanguage, embeddedLanguages);
        this._rootId = -1;
        this._lastRuleId = 0;
        this._ruleId2desc = [null];
        this._includedGrammars = {};
        this._grammarRepository = grammarRepository;
        this._grammar = initGrammar(grammar, null);
        this._injections = null;
        this._tokenTypeMatchers = [];
        if (tokenTypes) {
            for (const selector of Object.keys(tokenTypes)) {
                const matchers = createMatchers(selector, nameMatcher);
                for (const matcher of matchers) {
                    this._tokenTypeMatchers.push({
                        matcher: matcher.matcher,
                        type: tokenTypes[selector],
                    });
                }
            }
        }
    }
    dispose() {
        for (const rule of this._ruleId2desc) {
            if (rule) {
                rule.dispose();
            }
        }
    }
    createOnigScanner(sources) {
        return this._onigLib.createOnigScanner(sources);
    }
    createOnigString(sources) {
        return this._onigLib.createOnigString(sources);
    }
    getMetadataForScope(scope) {
        return this._basicScopeAttributesProvider.getBasicScopeAttributes(scope);
    }
    _collectInjections() {
        const grammarRepository = {
            lookup: (scopeName) => {
                if (scopeName === this._rootScopeName) {
                    return this._grammar;
                }
                return this.getExternalGrammar(scopeName);
            },
            injections: (scopeName) => {
                return this._grammarRepository.injections(scopeName);
            },
        };
        const result = [];
        const scopeName = this._rootScopeName;
        const grammar = grammarRepository.lookup(scopeName);
        if (grammar) {
            // add injections from the current grammar
            const rawInjections = grammar.injections;
            if (rawInjections) {
                for (let expression in rawInjections) {
                    collectInjections(result, expression, rawInjections[expression], this, grammar);
                }
            }
            // add injection grammars contributed for the current scope
            const injectionScopeNames = this._grammarRepository.injections(scopeName);
            if (injectionScopeNames) {
                injectionScopeNames.forEach((injectionScopeName) => {
                    const injectionGrammar = this.getExternalGrammar(injectionScopeName);
                    if (injectionGrammar) {
                        const selector = injectionGrammar.injectionSelector;
                        if (selector) {
                            collectInjections(result, selector, injectionGrammar, this, injectionGrammar);
                        }
                    }
                });
            }
        }
        result.sort((i1, i2) => i1.priority - i2.priority); // sort by priority
        return result;
    }
    getInjections() {
        if (this._injections === null) {
            this._injections = this._collectInjections();
        }
        return this._injections;
    }
    registerRule(factory) {
        const id = ++this._lastRuleId;
        const result = factory(ruleIdFromNumber(id));
        this._ruleId2desc[id] = result;
        return result;
    }
    getRule(ruleId) {
        return this._ruleId2desc[ruleIdToNumber(ruleId)];
    }
    getExternalGrammar(scopeName, repository) {
        if (this._includedGrammars[scopeName]) {
            return this._includedGrammars[scopeName];
        }
        else if (this._grammarRepository) {
            const rawIncludedGrammar = this._grammarRepository.lookup(scopeName);
            if (rawIncludedGrammar) {
                // console.log('LOADED GRAMMAR ' + pattern.include);
                this._includedGrammars[scopeName] = initGrammar(rawIncludedGrammar, repository && repository.$base);
                return this._includedGrammars[scopeName];
            }
        }
        return undefined;
    }
    tokenizeLine(lineText, prevState, timeLimit = 0) {
        const r = this._tokenize(lineText, prevState, false, timeLimit);
        return {
            tokens: r.lineTokens.getResult(r.ruleStack, r.lineLength),
            ruleStack: r.ruleStack,
            stoppedEarly: r.stoppedEarly,
        };
    }
    tokenizeLine2(lineText, prevState, timeLimit = 0) {
        const r = this._tokenize(lineText, prevState, true, timeLimit);
        return {
            tokens: r.lineTokens.getBinaryResult(r.ruleStack, r.lineLength),
            ruleStack: r.ruleStack,
            stoppedEarly: r.stoppedEarly,
        };
    }
    _tokenize(lineText, prevState, emitBinaryTokens, timeLimit) {
        if (this._rootId === -1) {
            this._rootId = RuleFactory.getCompiledRuleId(this._grammar.repository.$self, this, this._grammar.repository);
            // This ensures ids are deterministic, and thus equal in renderer and webworker.
            this.getInjections();
        }
        let isFirstLine;
        if (!prevState || prevState === StateStackImpl.NULL) {
            isFirstLine = true;
            const rawDefaultMetadata = this._basicScopeAttributesProvider.getDefaultAttributes();
            const defaultStyle = this.themeProvider.getDefaults();
            const defaultMetadata = EncodedTokenAttributes.set(0, rawDefaultMetadata.languageId, rawDefaultMetadata.tokenType, null, defaultStyle.fontStyle, defaultStyle.foregroundId, defaultStyle.backgroundId);
            const rootScopeName = this.getRule(this._rootId).getName(null, null);
            let scopeList;
            if (rootScopeName) {
                scopeList = AttributedScopeStack.createRootAndLookUpScopeName(rootScopeName, defaultMetadata, this);
            }
            else {
                scopeList = AttributedScopeStack.createRoot("unknown", defaultMetadata);
            }
            prevState = new StateStackImpl(null, this._rootId, -1, -1, false, null, scopeList, scopeList);
        }
        else {
            isFirstLine = false;
            prevState.reset();
        }
        lineText = lineText + "\n";
        const onigLineText = this.createOnigString(lineText);
        const lineLength = onigLineText.content.length;
        const lineTokens = new LineTokens(emitBinaryTokens, lineText, this._tokenTypeMatchers, this.balancedBracketSelectors);
        const r = _tokenizeString(this, onigLineText, isFirstLine, 0, prevState, lineTokens, true, timeLimit);
        disposeOnigString(onigLineText);
        return {
            lineLength: lineLength,
            lineTokens: lineTokens,
            ruleStack: r.stack,
            stoppedEarly: r.stoppedEarly,
        };
    }
}
function initGrammar(grammar, base) {
    grammar = clone(grammar);
    grammar.repository = grammar.repository || {};
    grammar.repository.$self = {
        $vscodeTextmateLocation: grammar.$vscodeTextmateLocation,
        patterns: grammar.patterns,
        name: grammar.scopeName
    };
    grammar.repository.$base = base || grammar.repository.$self;
    return grammar;
}
class AttributedScopeStack {
    parent;
    scopePath;
    tokenAttributes;
    static fromExtension(namesScopeList, contentNameScopesList) {
        let current = namesScopeList;
        let scopeNames = namesScopeList?.scopePath ?? null;
        for (const frame of contentNameScopesList) {
            scopeNames = ScopeStack.push(scopeNames, frame.scopeNames);
            current = new AttributedScopeStack(current, scopeNames, frame.encodedTokenAttributes);
        }
        return current;
    }
    static createRoot(scopeName, tokenAttributes) {
        return new AttributedScopeStack(null, new ScopeStack(null, scopeName), tokenAttributes);
    }
    static createRootAndLookUpScopeName(scopeName, tokenAttributes, grammar) {
        const rawRootMetadata = grammar.getMetadataForScope(scopeName);
        const scopePath = new ScopeStack(null, scopeName);
        const rootStyle = grammar.themeProvider.themeMatch(scopePath);
        const resolvedTokenAttributes = AttributedScopeStack.mergeAttributes(tokenAttributes, rawRootMetadata, rootStyle);
        return new AttributedScopeStack(null, scopePath, resolvedTokenAttributes);
    }
    get scopeName() { return this.scopePath.scopeName; }
    /**
     * Invariant:
     * ```
     * if (parent && !scopePath.extends(parent.scopePath)) {
     * 	throw new Error();
     * }
     * ```
     */
    constructor(parent, scopePath, tokenAttributes) {
        this.parent = parent;
        this.scopePath = scopePath;
        this.tokenAttributes = tokenAttributes;
    }
    toString() {
        return this.getScopeNames().join(' ');
    }
    equals(other) {
        return AttributedScopeStack.equals(this, other);
    }
    static equals(a, b) {
        do {
            if (a === b) {
                return true;
            }
            if (!a && !b) {
                // End of list reached for both
                return true;
            }
            if (!a || !b) {
                // End of list reached only for one
                return false;
            }
            if (a.scopeName !== b.scopeName || a.tokenAttributes !== b.tokenAttributes) {
                return false;
            }
            // Go to previous pair
            a = a.parent;
            b = b.parent;
        } while (true);
    }
    static mergeAttributes(existingTokenAttributes, basicScopeAttributes, styleAttributes) {
        let fontStyle = -1 /* FontStyle.NotSet */;
        let foreground = 0;
        let background = 0;
        if (styleAttributes !== null) {
            fontStyle = styleAttributes.fontStyle;
            foreground = styleAttributes.foregroundId;
            background = styleAttributes.backgroundId;
        }
        return EncodedTokenAttributes.set(existingTokenAttributes, basicScopeAttributes.languageId, basicScopeAttributes.tokenType, null, fontStyle, foreground, background);
    }
    pushAttributed(scopePath, grammar) {
        if (scopePath === null) {
            return this;
        }
        if (scopePath.indexOf(' ') === -1) {
            // This is the common case and much faster
            return AttributedScopeStack._pushAttributed(this, scopePath, grammar);
        }
        const scopes = scopePath.split(/ /g);
        let result = this;
        for (const scope of scopes) {
            result = AttributedScopeStack._pushAttributed(result, scope, grammar);
        }
        return result;
    }
    static _pushAttributed(target, scopeName, grammar) {
        const rawMetadata = grammar.getMetadataForScope(scopeName);
        const newPath = target.scopePath.push(scopeName);
        const scopeThemeMatchResult = grammar.themeProvider.themeMatch(newPath);
        const metadata = AttributedScopeStack.mergeAttributes(target.tokenAttributes, rawMetadata, scopeThemeMatchResult);
        return new AttributedScopeStack(target, newPath, metadata);
    }
    getScopeNames() {
        return this.scopePath.getSegments();
    }
    getExtensionIfDefined(base) {
        const result = [];
        let self = this;
        while (self && self !== base) {
            result.push({
                encodedTokenAttributes: self.tokenAttributes,
                scopeNames: self.scopePath.getExtensionIfDefined(self.parent?.scopePath ?? null),
            });
            self = self.parent;
        }
        return self === base ? result.reverse() : undefined;
    }
}
/**
 * Represents a "pushed" state on the stack (as a linked list element).
 */
class StateStackImpl {
    parent;
    ruleId;
    beginRuleCapturedEOL;
    endRule;
    nameScopesList;
    contentNameScopesList;
    _stackElementBrand = undefined;
    // TODO remove me
    static NULL = new StateStackImpl(null, 0, 0, 0, false, null, null, null);
    /**
     * The position on the current line where this state was pushed.
     * This is relevant only while tokenizing a line, to detect endless loops.
     * Its value is meaningless across lines.
     */
    _enterPos;
    /**
     * The captured anchor position when this stack element was pushed.
     * This is relevant only while tokenizing a line, to restore the anchor position when popping.
     * Its value is meaningless across lines.
     */
    _anchorPos;
    /**
     * The depth of the stack.
     */
    depth;
    /**
     * Invariant:
     * ```
     * if (contentNameScopesList !== nameScopesList && contentNameScopesList?.parent !== nameScopesList) {
     * 	throw new Error();
     * }
     * if (this.parent && !nameScopesList.extends(this.parent.contentNameScopesList)) {
     * 	throw new Error();
     * }
     * ```
     */
    constructor(
    /**
     * The previous state on the stack (or null for the root state).
     */
    parent, 
    /**
     * The state (rule) that this element represents.
     */
    ruleId, enterPos, anchorPos, 
    /**
     * The state has entered and captured \n. This means that the next line should have an anchorPosition of 0.
     */
    beginRuleCapturedEOL, 
    /**
     * The "pop" (end) condition for this state in case that it was dynamically generated through captured text.
     */
    endRule, 
    /**
     * The list of scopes containing the "name" for this state.
     */
    nameScopesList, 
    /**
     * The list of scopes containing the "contentName" (besides "name") for this state.
     * This list **must** contain as an element `scopeName`.
     */
    contentNameScopesList) {
        this.parent = parent;
        this.ruleId = ruleId;
        this.beginRuleCapturedEOL = beginRuleCapturedEOL;
        this.endRule = endRule;
        this.nameScopesList = nameScopesList;
        this.contentNameScopesList = contentNameScopesList;
        this.depth = this.parent ? this.parent.depth + 1 : 1;
        this._enterPos = enterPos;
        this._anchorPos = anchorPos;
    }
    equals(other) {
        if (other === null) {
            return false;
        }
        return StateStackImpl._equals(this, other);
    }
    static _equals(a, b) {
        if (a === b) {
            return true;
        }
        if (!this._structuralEquals(a, b)) {
            return false;
        }
        return AttributedScopeStack.equals(a.contentNameScopesList, b.contentNameScopesList);
    }
    /**
     * A structural equals check. Does not take into account `scopes`.
     */
    static _structuralEquals(a, b) {
        do {
            if (a === b) {
                return true;
            }
            if (!a && !b) {
                // End of list reached for both
                return true;
            }
            if (!a || !b) {
                // End of list reached only for one
                return false;
            }
            if (a.depth !== b.depth ||
                a.ruleId !== b.ruleId ||
                a.endRule !== b.endRule) {
                return false;
            }
            // Go to previous pair
            a = a.parent;
            b = b.parent;
        } while (true);
    }
    clone() {
        return this;
    }
    static _reset(el) {
        while (el) {
            el._enterPos = -1;
            el._anchorPos = -1;
            el = el.parent;
        }
    }
    reset() {
        StateStackImpl._reset(this);
    }
    pop() {
        return this.parent;
    }
    safePop() {
        if (this.parent) {
            return this.parent;
        }
        return this;
    }
    push(ruleId, enterPos, anchorPos, beginRuleCapturedEOL, endRule, nameScopesList, contentNameScopesList) {
        return new StateStackImpl(this, ruleId, enterPos, anchorPos, beginRuleCapturedEOL, endRule, nameScopesList, contentNameScopesList);
    }
    getEnterPos() {
        return this._enterPos;
    }
    getAnchorPos() {
        return this._anchorPos;
    }
    getRule(grammar) {
        return grammar.getRule(this.ruleId);
    }
    toString() {
        const r = [];
        this._writeString(r, 0);
        return "[" + r.join(",") + "]";
    }
    _writeString(res, outIndex) {
        if (this.parent) {
            outIndex = this.parent._writeString(res, outIndex);
        }
        res[outIndex++] = `(${this.ruleId}, ${this.nameScopesList?.toString()}, ${this.contentNameScopesList?.toString()})`;
        return outIndex;
    }
    withContentNameScopesList(contentNameScopeStack) {
        if (this.contentNameScopesList === contentNameScopeStack) {
            return this;
        }
        return this.parent.push(this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, this.endRule, this.nameScopesList, contentNameScopeStack);
    }
    withEndRule(endRule) {
        if (this.endRule === endRule) {
            return this;
        }
        return new StateStackImpl(this.parent, this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, endRule, this.nameScopesList, this.contentNameScopesList);
    }
    // Used to warn of endless loops
    hasSameRuleAs(other) {
        let el = this;
        while (el && el._enterPos === other._enterPos) {
            if (el.ruleId === other.ruleId) {
                return true;
            }
            el = el.parent;
        }
        return false;
    }
    toStateStackFrame() {
        return {
            ruleId: ruleIdToNumber(this.ruleId),
            beginRuleCapturedEOL: this.beginRuleCapturedEOL,
            endRule: this.endRule,
            nameScopesList: this.nameScopesList?.getExtensionIfDefined(this.parent?.nameScopesList ?? null) ?? [],
            contentNameScopesList: this.contentNameScopesList?.getExtensionIfDefined(this.nameScopesList) ?? [],
        };
    }
    static pushFrame(self, frame) {
        const namesScopeList = AttributedScopeStack.fromExtension(self?.nameScopesList ?? null, frame.nameScopesList);
        return new StateStackImpl(self, ruleIdFromNumber(frame.ruleId), frame.enterPos ?? -1, frame.anchorPos ?? -1, frame.beginRuleCapturedEOL, frame.endRule, namesScopeList, AttributedScopeStack.fromExtension(namesScopeList, frame.contentNameScopesList));
    }
}
class BalancedBracketSelectors {
    balancedBracketScopes;
    unbalancedBracketScopes;
    allowAny = false;
    constructor(balancedBracketScopes, unbalancedBracketScopes) {
        this.balancedBracketScopes = balancedBracketScopes.flatMap((selector) => {
            if (selector === '*') {
                this.allowAny = true;
                return [];
            }
            return createMatchers(selector, nameMatcher).map((m) => m.matcher);
        });
        this.unbalancedBracketScopes = unbalancedBracketScopes.flatMap((selector) => createMatchers(selector, nameMatcher).map((m) => m.matcher));
    }
    get matchesAlways() {
        return this.allowAny && this.unbalancedBracketScopes.length === 0;
    }
    get matchesNever() {
        return this.balancedBracketScopes.length === 0 && !this.allowAny;
    }
    match(scopes) {
        for (const excluder of this.unbalancedBracketScopes) {
            if (excluder(scopes)) {
                return false;
            }
        }
        for (const includer of this.balancedBracketScopes) {
            if (includer(scopes)) {
                return true;
            }
        }
        return this.allowAny;
    }
}
class LineTokens {
    balancedBracketSelectors;
    _emitBinaryTokens;
    /**
     * defined only if `false`.
     */
    _lineText;
    /**
     * used only if `_emitBinaryTokens` is false.
     */
    _tokens;
    /**
     * used only if `_emitBinaryTokens` is true.
     */
    _binaryTokens;
    _lastTokenEndIndex;
    _tokenTypeOverrides;
    constructor(emitBinaryTokens, lineText, tokenTypeOverrides, balancedBracketSelectors) {
        this.balancedBracketSelectors = balancedBracketSelectors;
        this._emitBinaryTokens = emitBinaryTokens;
        this._tokenTypeOverrides = tokenTypeOverrides;
        {
            this._lineText = null;
        }
        this._tokens = [];
        this._binaryTokens = [];
        this._lastTokenEndIndex = 0;
    }
    produce(stack, endIndex) {
        this.produceFromScopes(stack.contentNameScopesList, endIndex);
    }
    produceFromScopes(scopesList, endIndex) {
        if (this._lastTokenEndIndex >= endIndex) {
            return;
        }
        if (this._emitBinaryTokens) {
            let metadata = scopesList?.tokenAttributes ?? 0;
            let containsBalancedBrackets = false;
            if (this.balancedBracketSelectors?.matchesAlways) {
                containsBalancedBrackets = true;
            }
            if (this._tokenTypeOverrides.length > 0 || (this.balancedBracketSelectors && !this.balancedBracketSelectors.matchesAlways && !this.balancedBracketSelectors.matchesNever)) {
                // Only generate scope array when required to improve performance
                const scopes = scopesList?.getScopeNames() ?? [];
                for (const tokenType of this._tokenTypeOverrides) {
                    if (tokenType.matcher(scopes)) {
                        metadata = EncodedTokenAttributes.set(metadata, 0, toOptionalTokenType(tokenType.type), null, -1 /* FontStyle.NotSet */, 0, 0);
                    }
                }
                if (this.balancedBracketSelectors) {
                    containsBalancedBrackets = this.balancedBracketSelectors.match(scopes);
                }
            }
            if (containsBalancedBrackets) {
                metadata = EncodedTokenAttributes.set(metadata, 0, 8 /* OptionalStandardTokenType.NotSet */, containsBalancedBrackets, -1 /* FontStyle.NotSet */, 0, 0);
            }
            if (this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 1] === metadata) {
                // no need to push a token with the same metadata
                this._lastTokenEndIndex = endIndex;
                return;
            }
            this._binaryTokens.push(this._lastTokenEndIndex);
            this._binaryTokens.push(metadata);
            this._lastTokenEndIndex = endIndex;
            return;
        }
        const scopes = scopesList?.getScopeNames() ?? [];
        this._tokens.push({
            startIndex: this._lastTokenEndIndex,
            endIndex: endIndex,
            // value: lineText.substring(lastTokenEndIndex, endIndex),
            scopes: scopes
        });
        this._lastTokenEndIndex = endIndex;
    }
    getResult(stack, lineLength) {
        if (this._tokens.length > 0 && this._tokens[this._tokens.length - 1].startIndex === lineLength - 1) {
            // pop produced token for newline
            this._tokens.pop();
        }
        if (this._tokens.length === 0) {
            this._lastTokenEndIndex = -1;
            this.produce(stack, lineLength);
            this._tokens[this._tokens.length - 1].startIndex = 0;
        }
        return this._tokens;
    }
    getBinaryResult(stack, lineLength) {
        if (this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 2] === lineLength - 1) {
            // pop produced token for newline
            this._binaryTokens.pop();
            this._binaryTokens.pop();
        }
        if (this._binaryTokens.length === 0) {
            this._lastTokenEndIndex = -1;
            this.produce(stack, lineLength);
            this._binaryTokens[this._binaryTokens.length - 2] = 0;
        }
        const result = new Uint32Array(this._binaryTokens.length);
        for (let i = 0, len = this._binaryTokens.length; i < len; i++) {
            result[i] = this._binaryTokens[i];
        }
        return result;
    }
}

/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
class SyncRegistry {
    _onigLibPromise;
    _grammars = new Map();
    _rawGrammars = new Map();
    _injectionGrammars = new Map();
    _theme;
    constructor(theme, _onigLibPromise) {
        this._onigLibPromise = _onigLibPromise;
        this._theme = theme;
    }
    dispose() {
        for (const grammar of this._grammars.values()) {
            grammar.dispose();
        }
    }
    setTheme(theme) {
        this._theme = theme;
    }
    getColorMap() {
        return this._theme.getColorMap();
    }
    /**
     * Add `grammar` to registry and return a list of referenced scope names
     */
    addGrammar(grammar, injectionScopeNames) {
        this._rawGrammars.set(grammar.scopeName, grammar);
        if (injectionScopeNames) {
            this._injectionGrammars.set(grammar.scopeName, injectionScopeNames);
        }
    }
    /**
     * Lookup a raw grammar.
     */
    lookup(scopeName) {
        return this._rawGrammars.get(scopeName);
    }
    /**
     * Returns the injections for the given grammar
     */
    injections(targetScope) {
        return this._injectionGrammars.get(targetScope);
    }
    /**
     * Get the default theme settings
     */
    getDefaults() {
        return this._theme.getDefaults();
    }
    /**
     * Match a scope in the theme.
     */
    themeMatch(scopePath) {
        return this._theme.match(scopePath);
    }
    /**
     * Lookup a grammar.
     */
    async grammarForScopeName(scopeName, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors) {
        if (!this._grammars.has(scopeName)) {
            let rawGrammar = this._rawGrammars.get(scopeName);
            if (!rawGrammar) {
                return null;
            }
            this._grammars.set(scopeName, createGrammar(scopeName, rawGrammar, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors, this, await this._onigLibPromise));
        }
        return this._grammars.get(scopeName);
    }
}

/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
/**
 * The registry that will hold all grammars.
 */
let Registry$1 = class Registry {
    _options;
    _syncRegistry;
    _ensureGrammarCache;
    constructor(options) {
        this._options = options;
        this._syncRegistry = new SyncRegistry(Theme.createFromRawTheme(options.theme, options.colorMap), options.onigLib);
        this._ensureGrammarCache = new Map();
    }
    dispose() {
        this._syncRegistry.dispose();
    }
    /**
     * Change the theme. Once called, no previous `ruleStack` should be used anymore.
     */
    setTheme(theme, colorMap) {
        this._syncRegistry.setTheme(Theme.createFromRawTheme(theme, colorMap));
    }
    /**
     * Returns a lookup array for color ids.
     */
    getColorMap() {
        return this._syncRegistry.getColorMap();
    }
    /**
     * Load the grammar for `scopeName` and all referenced included grammars asynchronously.
     * Please do not use language id 0.
     */
    loadGrammarWithEmbeddedLanguages(initialScopeName, initialLanguage, embeddedLanguages) {
        return this.loadGrammarWithConfiguration(initialScopeName, initialLanguage, { embeddedLanguages });
    }
    /**
     * Load the grammar for `scopeName` and all referenced included grammars asynchronously.
     * Please do not use language id 0.
     */
    loadGrammarWithConfiguration(initialScopeName, initialLanguage, configuration) {
        return this._loadGrammar(initialScopeName, initialLanguage, configuration.embeddedLanguages, configuration.tokenTypes, new BalancedBracketSelectors(configuration.balancedBracketSelectors || [], configuration.unbalancedBracketSelectors || []));
    }
    /**
     * Load the grammar for `scopeName` and all referenced included grammars asynchronously.
     */
    loadGrammar(initialScopeName) {
        return this._loadGrammar(initialScopeName, 0, null, null, null);
    }
    async _loadGrammar(initialScopeName, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors) {
        const dependencyProcessor = new ScopeDependencyProcessor(this._syncRegistry, initialScopeName);
        while (dependencyProcessor.Q.length > 0) {
            await Promise.all(dependencyProcessor.Q.map((request) => this._loadSingleGrammar(request.scopeName)));
            dependencyProcessor.processQueue();
        }
        return this._grammarForScopeName(initialScopeName, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors);
    }
    async _loadSingleGrammar(scopeName) {
        if (!this._ensureGrammarCache.has(scopeName)) {
            this._ensureGrammarCache.set(scopeName, this._doLoadSingleGrammar(scopeName));
        }
        return this._ensureGrammarCache.get(scopeName);
    }
    async _doLoadSingleGrammar(scopeName) {
        const grammar = await this._options.loadGrammar(scopeName);
        if (grammar) {
            const injections = typeof this._options.getInjections === "function" ? this._options.getInjections(scopeName) : undefined;
            this._syncRegistry.addGrammar(grammar, injections);
        }
    }
    /**
     * Adds a rawGrammar.
     */
    async addGrammar(rawGrammar, injections = [], initialLanguage = 0, embeddedLanguages = null) {
        this._syncRegistry.addGrammar(rawGrammar, injections);
        return (await this._grammarForScopeName(rawGrammar.scopeName, initialLanguage, embeddedLanguages));
    }
    /**
     * Get the grammar for `scopeName`. The grammar must first be created via `loadGrammar` or `addGrammar`.
     */
    _grammarForScopeName(scopeName, initialLanguage = 0, embeddedLanguages = null, tokenTypes = null, balancedBracketSelectors = null) {
        return this._syncRegistry.grammarForScopeName(scopeName, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors);
    }
};
const INITIAL = StateStackImpl.NULL;

/**
 * Helpers to manage the "collapsed" metadata of an entire StackElement stack.
 * The following assumptions have been made:
 *  - languageId < 256 => needs 8 bits
 *  - unique color count < 512 => needs 9 bits
 *
 * The binary format is:
 * - -------------------------------------------
 *     3322 2222 2222 1111 1111 1100 0000 0000
 *     1098 7654 3210 9876 5432 1098 7654 3210
 * - -------------------------------------------
 *     xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx
 *     bbbb bbbb bfff ffff ffFF FTTT LLLL LLLL
 * - -------------------------------------------
 *  - L = LanguageId (8 bits)
 *  - T = StandardTokenType (3 bits)
 *  - F = FontStyle (3 bits)
 *  - f = foreground color (9 bits)
 *  - b = background color (9 bits)
 */
const MetadataConsts = {
    LANGUAGEID_MASK: 0b00000000000000000000000011111111,
    TOKEN_TYPE_MASK: 0b00000000000000000000001100000000,
    BALANCED_BRACKETS_MASK: 0b00000000000000000000010000000000,
    FONT_STYLE_MASK: 0b00000000000000000011100000000000,
    FOREGROUND_MASK: 0b00000000011111111100000000000000,
    BACKGROUND_MASK: 0b11111111100000000000000000000000,
    LANGUAGEID_OFFSET: 0,
    TOKEN_TYPE_OFFSET: 8,
    BALANCED_BRACKETS_OFFSET: 10,
    FONT_STYLE_OFFSET: 11,
    FOREGROUND_OFFSET: 15,
    BACKGROUND_OFFSET: 24,
};
class StackElementMetadata {
    static toBinaryStr(metadata) {
        let r = metadata.toString(2);
        while (r.length < 32)
            r = `0${r}`;
        return r;
    }
    // public static printMetadata(metadata: number): void {
    //   const languageId = StackElementMetadata.getLanguageId(metadata)
    //   const tokenType = StackElementMetadata.getTokenType(metadata)
    //   const fontStyle = StackElementMetadata.getFontStyle(metadata)
    //   const foreground = StackElementMetadata.getForeground(metadata)
    //   const background = StackElementMetadata.getBackground(metadata)
    //   console.log({
    //     languageId,
    //     tokenType,
    //     fontStyle,
    //     foreground,
    //     background,
    //   })
    // }
    static getLanguageId(metadata) {
        return (metadata & MetadataConsts.LANGUAGEID_MASK) >>> MetadataConsts.LANGUAGEID_OFFSET;
    }
    static getTokenType(metadata) {
        return (metadata & MetadataConsts.TOKEN_TYPE_MASK) >>> MetadataConsts.TOKEN_TYPE_OFFSET;
    }
    static getFontStyle(metadata) {
        return (metadata & MetadataConsts.FONT_STYLE_MASK) >>> MetadataConsts.FONT_STYLE_OFFSET;
    }
    static getForeground(metadata) {
        return (metadata & MetadataConsts.FOREGROUND_MASK) >>> MetadataConsts.FOREGROUND_OFFSET;
    }
    static getBackground(metadata) {
        return (metadata & MetadataConsts.BACKGROUND_MASK) >>> MetadataConsts.BACKGROUND_OFFSET;
    }
    static containsBalancedBrackets(metadata) {
        return (metadata & MetadataConsts.BALANCED_BRACKETS_MASK) !== 0;
    }
    static set(metadata, languageId, tokenType, fontStyle, foreground, background) {
        let _languageId = StackElementMetadata.getLanguageId(metadata);
        let _tokenType = StackElementMetadata.getTokenType(metadata);
        let _fontStyle = StackElementMetadata.getFontStyle(metadata);
        let _foreground = StackElementMetadata.getForeground(metadata);
        let _background = StackElementMetadata.getBackground(metadata);
        const _containsBalancedBracketsBit = StackElementMetadata.containsBalancedBrackets(metadata)
            ? 1
            : 0;
        if (languageId !== 0)
            _languageId = languageId;
        if (tokenType !== 0 /* TemporaryStandardTokenType.Other */) {
            _tokenType
                = tokenType === 8 /* TemporaryStandardTokenType.MetaEmbedded */ ? 0 /* StandardTokenType.Other */ : tokenType;
        }
        if (fontStyle !== FontStyle.NotSet)
            _fontStyle = fontStyle;
        if (foreground !== 0)
            _foreground = foreground;
        if (background !== 0)
            _background = background;
        return (((_languageId << MetadataConsts.LANGUAGEID_OFFSET)
            | (_tokenType << MetadataConsts.TOKEN_TYPE_OFFSET)
            | (_fontStyle << MetadataConsts.FONT_STYLE_OFFSET)
            | (_containsBalancedBracketsBit << MetadataConsts.BALANCED_BRACKETS_OFFSET)
            | (_foreground << MetadataConsts.FOREGROUND_OFFSET)
            | (_background << MetadataConsts.BACKGROUND_OFFSET))
            >>> 0);
    }
}

/**
 * Split a string into lines, each line preserves the line ending.
 */
function splitLines(code, preserveEnding = false) {
    const parts = code.split(/(\r?\n)/g);
    let index = 0;
    const lines = [];
    for (let i = 0; i < parts.length; i += 2) {
        const line = preserveEnding
            ? parts[i] + (parts[i + 1] || '')
            : parts[i];
        lines.push([line, index]);
        index += parts[i].length;
        index += parts[i + 1]?.length || 0;
    }
    return lines;
}
/**
 * Check if the language is plaintext that is ignored by Shiki.
 *
 * Hard-coded plain text languages: `plaintext`, `txt`, `text`, `plain`.
 */
function isPlainLang(lang) {
    return !lang || ['plaintext', 'txt', 'text', 'plain'].includes(lang);
}
/**
 * Check if the language is specially handled or bypassed by Shiki.
 *
 * Hard-coded languages: `ansi` and plaintexts like `plaintext`, `txt`, `text`, `plain`.
 */
function isSpecialLang(lang) {
    return lang === 'ansi' || isPlainLang(lang);
}
/**
 * Check if the theme is specially handled or bypassed by Shiki.
 *
 * Hard-coded themes: `none`.
 */
function isNoneTheme(theme) {
    return theme === 'none';
}
/**
 * Check if the theme is specially handled or bypassed by Shiki.
 *
 * Hard-coded themes: `none`.
 */
function isSpecialTheme(theme) {
    return isNoneTheme(theme);
}
/**
 * Utility to append class to a hast node
 *
 * If the `property.class` is a string, it will be splitted by space and converted to an array.
 */
function addClassToHast(node, className) {
    if (!className)
        return node;
    node.properties ||= {};
    node.properties.class ||= [];
    if (typeof node.properties.class === 'string')
        node.properties.class = node.properties.class.split(/\s+/g);
    if (!Array.isArray(node.properties.class))
        node.properties.class = [];
    const targets = Array.isArray(className) ? className : className.split(/\s+/g);
    for (const c of targets) {
        if (c && !node.properties.class.includes(c))
            node.properties.class.push(c);
    }
    return node;
}
/**
 * Split a token into multiple tokens by given offsets.
 *
 * The offsets are relative to the token, and should be sorted.
 */
function splitToken(token, offsets) {
    let lastOffset = 0;
    const tokens = [];
    for (const offset of offsets) {
        if (offset > lastOffset) {
            tokens.push({
                ...token,
                content: token.content.slice(lastOffset, offset),
                offset: token.offset + lastOffset,
            });
        }
        lastOffset = offset;
    }
    if (lastOffset < token.content.length) {
        tokens.push({
            ...token,
            content: token.content.slice(lastOffset),
            offset: token.offset + lastOffset,
        });
    }
    return tokens;
}
/**
 * Split 2D tokens array by given breakpoints.
 */
function splitTokens(tokens, breakpoints) {
    const sorted = Array.from(breakpoints instanceof Set ? breakpoints : new Set(breakpoints))
        .sort((a, b) => a - b);
    if (!sorted.length)
        return tokens;
    return tokens.map((line) => {
        return line.flatMap((token) => {
            const breakpointsInToken = sorted
                .filter(i => token.offset < i && i < token.offset + token.content.length)
                .map(i => i - token.offset)
                .sort((a, b) => a - b);
            if (!breakpointsInToken.length)
                return token;
            return splitToken(token, breakpointsInToken);
        });
    });
}
function resolveColorReplacements(theme, options) {
    const replacements = typeof theme === 'string' ? {} : { ...theme.colorReplacements };
    const themeName = typeof theme === 'string' ? theme : theme.name;
    for (const [key, value] of Object.entries(options?.colorReplacements || {})) {
        if (typeof value === 'string')
            replacements[key] = value;
        else if (key === themeName)
            Object.assign(replacements, value);
    }
    return replacements;
}
function applyColorReplacements(color, replacements) {
    if (!color)
        return color;
    return replacements?.[color?.toLowerCase()] || color;
}
function getTokenStyleObject(token) {
    const styles = {};
    if (token.color)
        styles.color = token.color;
    if (token.bgColor)
        styles['background-color'] = token.bgColor;
    if (token.fontStyle) {
        if (token.fontStyle & FontStyle.Italic)
            styles['font-style'] = 'italic';
        if (token.fontStyle & FontStyle.Bold)
            styles['font-weight'] = 'bold';
        if (token.fontStyle & FontStyle.Underline)
            styles['text-decoration'] = 'underline';
    }
    return styles;
}
function stringifyTokenStyle(token) {
    return Object.entries(token).map(([key, value]) => `${key}:${value}`).join(';');
}
/**
 * Creates a converter between index and position in a code block.
 *
 * Overflow/underflow are unchecked.
 */
function createPositionConverter(code) {
    const lines = splitLines(code, true).map(([line]) => line);
    function indexToPos(index) {
        if (index === code.length) {
            return {
                line: lines.length - 1,
                character: lines[lines.length - 1].length,
            };
        }
        let character = index;
        let line = 0;
        for (const lineText of lines) {
            if (character < lineText.length)
                break;
            character -= lineText.length;
            line++;
        }
        return { line, character };
    }
    function posToIndex(line, character) {
        let index = 0;
        for (let i = 0; i < line; i++)
            index += lines[i].length;
        index += character;
        return index;
    }
    return {
        lines,
        indexToPos,
        posToIndex,
    };
}

// src/colors.ts
var namedColors = [
  "black",
  "red",
  "green",
  "yellow",
  "blue",
  "magenta",
  "cyan",
  "white",
  "brightBlack",
  "brightRed",
  "brightGreen",
  "brightYellow",
  "brightBlue",
  "brightMagenta",
  "brightCyan",
  "brightWhite"
];

// src/decorations.ts
var decorations = {
  1: "bold",
  2: "dim",
  3: "italic",
  4: "underline",
  7: "reverse",
  9: "strikethrough"
};

// src/parser.ts
function findSequence(value, position) {
  const nextEscape = value.indexOf("\x1B[", position);
  if (nextEscape !== -1) {
    const nextClose = value.indexOf("m", nextEscape);
    return {
      sequence: value.substring(nextEscape + 2, nextClose).split(";"),
      startPosition: nextEscape,
      position: nextClose + 1
    };
  }
  return {
    position: value.length
  };
}
function parseColor(sequence, index) {
  let offset = 1;
  const colorMode = sequence[index + offset++];
  let color;
  if (colorMode === "2") {
    const rgb = [
      sequence[index + offset++],
      sequence[index + offset++],
      sequence[index + offset]
    ].map((x) => Number.parseInt(x));
    if (rgb.length === 3 && !rgb.some((x) => Number.isNaN(x))) {
      color = {
        type: "rgb",
        rgb
      };
    }
  } else if (colorMode === "5") {
    const colorIndex = Number.parseInt(sequence[index + offset]);
    if (!Number.isNaN(colorIndex)) {
      color = { type: "table", index: Number(colorIndex) };
    }
  }
  return [offset, color];
}
function parseSequence(sequence) {
  const commands = [];
  for (let i = 0; i < sequence.length; i++) {
    const code = sequence[i];
    const codeInt = Number.parseInt(code);
    if (Number.isNaN(codeInt))
      continue;
    if (codeInt === 0) {
      commands.push({ type: "resetAll" });
    } else if (codeInt <= 9) {
      const decoration = decorations[codeInt];
      if (decoration) {
        commands.push({
          type: "setDecoration",
          value: decorations[codeInt]
        });
      }
    } else if (codeInt <= 29) {
      const decoration = decorations[codeInt - 20];
      if (decoration) {
        commands.push({
          type: "resetDecoration",
          value: decoration
        });
      }
    } else if (codeInt <= 37) {
      commands.push({
        type: "setForegroundColor",
        value: { type: "named", name: namedColors[codeInt - 30] }
      });
    } else if (codeInt === 38) {
      const [offset, color] = parseColor(sequence, i);
      if (color) {
        commands.push({
          type: "setForegroundColor",
          value: color
        });
      }
      i += offset;
    } else if (codeInt === 39) {
      commands.push({
        type: "resetForegroundColor"
      });
    } else if (codeInt <= 47) {
      commands.push({
        type: "setBackgroundColor",
        value: { type: "named", name: namedColors[codeInt - 40] }
      });
    } else if (codeInt === 48) {
      const [offset, color] = parseColor(sequence, i);
      if (color) {
        commands.push({
          type: "setBackgroundColor",
          value: color
        });
      }
      i += offset;
    } else if (codeInt === 49) {
      commands.push({
        type: "resetBackgroundColor"
      });
    } else if (codeInt >= 90 && codeInt <= 97) {
      commands.push({
        type: "setForegroundColor",
        value: { type: "named", name: namedColors[codeInt - 90 + 8] }
      });
    } else if (codeInt >= 100 && codeInt <= 107) {
      commands.push({
        type: "setBackgroundColor",
        value: { type: "named", name: namedColors[codeInt - 100 + 8] }
      });
    }
  }
  return commands;
}
function createAnsiSequenceParser() {
  let foreground = null;
  let background = null;
  let decorations2 = /* @__PURE__ */ new Set();
  return {
    parse(value) {
      const tokens = [];
      let position = 0;
      do {
        const findResult = findSequence(value, position);
        const text = findResult.sequence ? value.substring(position, findResult.startPosition) : value.substring(position);
        if (text.length > 0) {
          tokens.push({
            value: text,
            foreground,
            background,
            decorations: new Set(decorations2)
          });
        }
        if (findResult.sequence) {
          const commands = parseSequence(findResult.sequence);
          for (const styleToken of commands) {
            if (styleToken.type === "resetAll") {
              foreground = null;
              background = null;
              decorations2.clear();
            } else if (styleToken.type === "resetForegroundColor") {
              foreground = null;
            } else if (styleToken.type === "resetBackgroundColor") {
              background = null;
            } else if (styleToken.type === "resetDecoration") {
              decorations2.delete(styleToken.value);
            }
          }
          for (const styleToken of commands) {
            if (styleToken.type === "setForegroundColor") {
              foreground = styleToken.value;
            } else if (styleToken.type === "setBackgroundColor") {
              background = styleToken.value;
            } else if (styleToken.type === "setDecoration") {
              decorations2.add(styleToken.value);
            }
          }
        }
        position = findResult.position;
      } while (position < value.length);
      return tokens;
    }
  };
}

// src/palette.ts
var defaultNamedColorsMap = {
  black: "#000000",
  red: "#bb0000",
  green: "#00bb00",
  yellow: "#bbbb00",
  blue: "#0000bb",
  magenta: "#ff00ff",
  cyan: "#00bbbb",
  white: "#eeeeee",
  brightBlack: "#555555",
  brightRed: "#ff5555",
  brightGreen: "#00ff00",
  brightYellow: "#ffff55",
  brightBlue: "#5555ff",
  brightMagenta: "#ff55ff",
  brightCyan: "#55ffff",
  brightWhite: "#ffffff"
};
function createColorPalette(namedColorsMap = defaultNamedColorsMap) {
  function namedColor(name) {
    return namedColorsMap[name];
  }
  function rgbColor(rgb) {
    return `#${rgb.map((x) => Math.max(0, Math.min(x, 255)).toString(16).padStart(2, "0")).join("")}`;
  }
  let colorTable;
  function getColorTable() {
    if (colorTable) {
      return colorTable;
    }
    colorTable = [];
    for (let i = 0; i < namedColors.length; i++) {
      colorTable.push(namedColor(namedColors[i]));
    }
    let levels = [0, 95, 135, 175, 215, 255];
    for (let r = 0; r < 6; r++) {
      for (let g = 0; g < 6; g++) {
        for (let b = 0; b < 6; b++) {
          colorTable.push(rgbColor([levels[r], levels[g], levels[b]]));
        }
      }
    }
    let level = 8;
    for (let i = 0; i < 24; i++, level += 10) {
      colorTable.push(rgbColor([level, level, level]));
    }
    return colorTable;
  }
  function tableColor(index) {
    return getColorTable()[index];
  }
  function value(color) {
    switch (color.type) {
      case "named":
        return namedColor(color.name);
      case "rgb":
        return rgbColor(color.rgb);
      case "table":
        return tableColor(color.index);
    }
  }
  return {
    value
  };
}

function tokenizeAnsiWithTheme(theme, fileContents, options) {
    const colorReplacements = resolveColorReplacements(theme, options);
    const lines = splitLines(fileContents);
    const colorPalette = createColorPalette(Object.fromEntries(namedColors.map(name => [
        name,
        theme.colors?.[`terminal.ansi${name[0].toUpperCase()}${name.substring(1)}`],
    ])));
    const parser = createAnsiSequenceParser();
    return lines.map(line => parser.parse(line[0]).map((token) => {
        let color;
        let bgColor;
        if (token.decorations.has('reverse')) {
            color = token.background ? colorPalette.value(token.background) : theme.bg;
            bgColor = token.foreground ? colorPalette.value(token.foreground) : theme.fg;
        }
        else {
            color = token.foreground ? colorPalette.value(token.foreground) : theme.fg;
            bgColor = token.background ? colorPalette.value(token.background) : undefined;
        }
        color = applyColorReplacements(color, colorReplacements);
        bgColor = applyColorReplacements(bgColor, colorReplacements);
        if (token.decorations.has('dim'))
            color = dimColor(color);
        let fontStyle = FontStyle.None;
        if (token.decorations.has('bold'))
            fontStyle |= FontStyle.Bold;
        if (token.decorations.has('italic'))
            fontStyle |= FontStyle.Italic;
        if (token.decorations.has('underline'))
            fontStyle |= FontStyle.Underline;
        return {
            content: token.value,
            offset: line[1], // TODO: more accurate offset? might need to fork ansi-sequence-parser
            color,
            bgColor,
            fontStyle,
        };
    }));
}
/**
 * Adds 50% alpha to a hex color string or the "-dim" postfix to a CSS variable
 */
function dimColor(color) {
    const hexMatch = color.match(/#([0-9a-f]{3})([0-9a-f]{3})?([0-9a-f]{2})?/);
    if (hexMatch) {
        if (hexMatch[3]) {
            // convert from #rrggbbaa to #rrggbb(aa/2)
            const alpha = Math.round(Number.parseInt(hexMatch[3], 16) / 2)
                .toString(16)
                .padStart(2, '0');
            return `#${hexMatch[1]}${hexMatch[2]}${alpha}`;
        }
        else if (hexMatch[2]) {
            // convert from #rrggbb to #rrggbb80
            return `#${hexMatch[1]}${hexMatch[2]}80`;
        }
        else {
            // convert from #rgb to #rrggbb80
            return `#${Array.from(hexMatch[1])
                .map(x => `${x}${x}`)
                .join('')}80`;
        }
    }
    const cssVarMatch = color.match(/var\((--[\w-]+-ansi-[\w-]+)\)/);
    if (cssVarMatch)
        return `var(${cssVarMatch[1]}-dim)`;
    return color;
}

class ShikiError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ShikiError';
    }
}

/**
 * GrammarState is a special reference object that holds the state of a grammar.
 *
 * It's used to highlight code snippets that are part of the target language.
 */
class GrammarState {
    _stack;
    lang;
    theme;
    /**
     * Static method to create a initial grammar state.
     */
    static initial(lang, theme) {
        return new GrammarState(INITIAL, lang, theme);
    }
    constructor(_stack, lang, theme) {
        this._stack = _stack;
        this.lang = lang;
        this.theme = theme;
    }
    get scopes() {
        return getScopes(this._stack);
    }
    toJSON() {
        return {
            lang: this.lang,
            theme: this.theme,
            scopes: this.scopes,
        };
    }
}
function getScopes(stack) {
    const scopes = [];
    const visited = new Set();
    function pushScope(stack) {
        if (visited.has(stack))
            return;
        visited.add(stack);
        const name = stack?.nameScopesList?.scopeName;
        if (name)
            scopes.push(name);
        if (stack.parent)
            pushScope(stack.parent);
    }
    pushScope(stack);
    return scopes;
}
function getGrammarStack(state) {
    if (!(state instanceof GrammarState))
        throw new ShikiError('Invalid grammar state');
    // @ts-expect-error _stack is private
    return state._stack;
}

/**
 * Code to tokens, with a simple theme.
 */
function codeToTokensBase$1(internal, code, options = {}) {
    const { lang = 'text', theme: themeName = internal.getLoadedThemes()[0], } = options;
    if (isPlainLang(lang) || isNoneTheme(themeName))
        return splitLines(code).map(line => [{ content: line[0], offset: line[1] }]);
    const { theme, colorMap } = internal.setTheme(themeName);
    if (lang === 'ansi')
        return tokenizeAnsiWithTheme(theme, code, options);
    const _grammar = internal.getLanguage(lang);
    if (options.grammarState) {
        if (options.grammarState.lang !== _grammar.name) {
            throw new ShikiError(`Grammar state language "${options.grammarState.lang}" does not match highlight language "${_grammar.name}"`);
        }
        if (options.grammarState.theme !== themeName) {
            throw new ShikiError(`Grammar state theme "${options.grammarState.theme}" does not match highlight theme "${themeName}"`);
        }
    }
    return tokenizeWithTheme(code, _grammar, theme, colorMap, options);
}
function getLastGrammarState$1(internal, code, options = {}) {
    const { lang = 'text', theme: themeName = internal.getLoadedThemes()[0], } = options;
    if (isPlainLang(lang) || isNoneTheme(themeName))
        throw new ShikiError('Plain language does not have grammar state');
    if (lang === 'ansi')
        throw new ShikiError('ANSI language does not have grammar state');
    const { theme, colorMap } = internal.setTheme(themeName);
    const _grammar = internal.getLanguage(lang);
    return new GrammarState(_tokenizeWithTheme(code, _grammar, theme, colorMap, options).stateStack, _grammar.name, theme.name);
}
function tokenizeWithTheme(code, grammar, theme, colorMap, options) {
    return _tokenizeWithTheme(code, grammar, theme, colorMap, options).tokens;
}
function _tokenizeWithTheme(code, grammar, theme, colorMap, options) {
    const colorReplacements = resolveColorReplacements(theme, options);
    const { tokenizeMaxLineLength = 0, tokenizeTimeLimit = 500, } = options;
    const lines = splitLines(code);
    let stateStack = options.grammarState
        ? getGrammarStack(options.grammarState)
        : options.grammarContextCode != null
            ? _tokenizeWithTheme(options.grammarContextCode, grammar, theme, colorMap, {
                ...options,
                grammarState: undefined,
                grammarContextCode: undefined,
            }).stateStack
            : INITIAL;
    let actual = [];
    const final = [];
    for (let i = 0, len = lines.length; i < len; i++) {
        const [line, lineOffset] = lines[i];
        if (line === '') {
            actual = [];
            final.push([]);
            continue;
        }
        // Do not attempt to tokenize if the line length is longer than the `tokenizationMaxLineLength`
        if (tokenizeMaxLineLength > 0 && line.length >= tokenizeMaxLineLength) {
            actual = [];
            final.push([{
                    content: line,
                    offset: lineOffset,
                    color: '',
                    fontStyle: 0,
                }]);
            continue;
        }
        let resultWithScopes;
        let tokensWithScopes;
        let tokensWithScopesIndex;
        if (options.includeExplanation) {
            resultWithScopes = grammar.tokenizeLine(line, stateStack);
            tokensWithScopes = resultWithScopes.tokens;
            tokensWithScopesIndex = 0;
        }
        const result = grammar.tokenizeLine2(line, stateStack, tokenizeTimeLimit);
        const tokensLength = result.tokens.length / 2;
        for (let j = 0; j < tokensLength; j++) {
            const startIndex = result.tokens[2 * j];
            const nextStartIndex = j + 1 < tokensLength ? result.tokens[2 * j + 2] : line.length;
            if (startIndex === nextStartIndex)
                continue;
            const metadata = result.tokens[2 * j + 1];
            const color = applyColorReplacements(colorMap[StackElementMetadata.getForeground(metadata)], colorReplacements);
            const fontStyle = StackElementMetadata.getFontStyle(metadata);
            const token = {
                content: line.substring(startIndex, nextStartIndex),
                offset: lineOffset + startIndex,
                color,
                fontStyle,
            };
            if (options.includeExplanation) {
                const themeSettingsSelectors = [];
                if (options.includeExplanation !== 'scopeName') {
                    for (const setting of theme.settings) {
                        let selectors;
                        switch (typeof setting.scope) {
                            case 'string':
                                selectors = setting.scope.split(/,/).map(scope => scope.trim());
                                break;
                            case 'object':
                                selectors = setting.scope;
                                break;
                            default:
                                continue;
                        }
                        themeSettingsSelectors.push({
                            settings: setting,
                            selectors: selectors.map(selector => selector.split(/ /)),
                        });
                    }
                }
                token.explanation = [];
                let offset = 0;
                while (startIndex + offset < nextStartIndex) {
                    const tokenWithScopes = tokensWithScopes[tokensWithScopesIndex];
                    const tokenWithScopesText = line.substring(tokenWithScopes.startIndex, tokenWithScopes.endIndex);
                    offset += tokenWithScopesText.length;
                    token.explanation.push({
                        content: tokenWithScopesText,
                        scopes: options.includeExplanation === 'scopeName'
                            ? explainThemeScopesNameOnly(tokenWithScopes.scopes)
                            : explainThemeScopesFull(themeSettingsSelectors, tokenWithScopes.scopes),
                    });
                    tokensWithScopesIndex += 1;
                }
            }
            actual.push(token);
        }
        final.push(actual);
        actual = [];
        stateStack = result.ruleStack;
    }
    return {
        tokens: final,
        stateStack,
    };
}
function explainThemeScopesNameOnly(scopes) {
    return scopes.map(scope => ({ scopeName: scope }));
}
function explainThemeScopesFull(themeSelectors, scopes) {
    const result = [];
    for (let i = 0, len = scopes.length; i < len; i++) {
        const scope = scopes[i];
        result[i] = {
            scopeName: scope,
            themeMatches: explainThemeScope(themeSelectors, scope, scopes.slice(0, i)),
        };
    }
    return result;
}
function matchesOne(selector, scope) {
    return selector === scope
        || (scope.substring(0, selector.length) === selector && scope[selector.length] === '.');
}
function matches(selectors, scope, parentScopes) {
    if (!matchesOne(selectors[selectors.length - 1], scope))
        return false;
    let selectorParentIndex = selectors.length - 2;
    let parentIndex = parentScopes.length - 1;
    while (selectorParentIndex >= 0 && parentIndex >= 0) {
        if (matchesOne(selectors[selectorParentIndex], parentScopes[parentIndex]))
            selectorParentIndex -= 1;
        parentIndex -= 1;
    }
    if (selectorParentIndex === -1)
        return true;
    return false;
}
function explainThemeScope(themeSettingsSelectors, scope, parentScopes) {
    const result = [];
    for (const { selectors, settings } of themeSettingsSelectors) {
        for (const selectorPieces of selectors) {
            if (matches(selectorPieces, scope, parentScopes)) {
                result.push(settings);
                break; // continue to the next theme settings
            }
        }
    }
    return result;
}

/**
 * Get tokens with multiple themes
 */
function codeToTokensWithThemes$1(internal, code, options) {
    const themes = Object.entries(options.themes)
        .filter(i => i[1])
        .map(i => ({ color: i[0], theme: i[1] }));
    const tokens = syncThemesTokenization(...themes.map(t => codeToTokensBase$1(internal, code, {
        ...options,
        theme: t.theme,
    })));
    const mergedTokens = tokens[0]
        .map((line, lineIdx) => line
        .map((_token, tokenIdx) => {
        const mergedToken = {
            content: _token.content,
            variants: {},
            offset: _token.offset,
        };
        if ('includeExplanation' in options && options.includeExplanation) {
            mergedToken.explanation = _token.explanation;
        }
        tokens.forEach((t, themeIdx) => {
            const { content: _, explanation: __, offset: ___, ...styles } = t[lineIdx][tokenIdx];
            mergedToken.variants[themes[themeIdx].color] = styles;
        });
        return mergedToken;
    }));
    return mergedTokens;
}
/**
 * Break tokens from multiple themes into same tokenization.
 *
 * For example, given two themes that tokenize `console.log("hello")` as:
 *
 * - `console . log (" hello ")` (6 tokens)
 * - `console .log ( "hello" )` (5 tokens)
 *
 * This function will return:
 *
 * - `console . log ( " hello " )` (8 tokens)
 * - `console . log ( " hello " )` (8 tokens)
 */
function syncThemesTokenization(...themes) {
    const outThemes = themes.map(() => []);
    const count = themes.length;
    for (let i = 0; i < themes[0].length; i++) {
        const lines = themes.map(t => t[i]);
        const outLines = outThemes.map(() => []);
        outThemes.forEach((t, i) => t.push(outLines[i]));
        const indexes = lines.map(() => 0);
        const current = lines.map(l => l[0]);
        while (current.every(t => t)) {
            const minLength = Math.min(...current.map(t => t.content.length));
            for (let n = 0; n < count; n++) {
                const token = current[n];
                if (token.content.length === minLength) {
                    outLines[n].push(token);
                    indexes[n] += 1;
                    current[n] = lines[n][indexes[n]];
                }
                else {
                    outLines[n].push({
                        ...token,
                        content: token.content.slice(0, minLength),
                    });
                    current[n] = {
                        ...token,
                        content: token.content.slice(minLength),
                        offset: token.offset + minLength,
                    };
                }
            }
        }
    }
    return outThemes;
}

/**
 * High-level code-to-tokens API.
 *
 * It will use `codeToTokensWithThemes` or `codeToTokensBase` based on the options.
 */
function codeToTokens$1(internal, code, options) {
    let bg;
    let fg;
    let tokens;
    let themeName;
    let rootStyle;
    if ('themes' in options) {
        const { defaultColor = 'light', cssVariablePrefix = '--shiki-', } = options;
        const themes = Object.entries(options.themes)
            .filter(i => i[1])
            .map(i => ({ color: i[0], theme: i[1] }))
            .sort((a, b) => a.color === defaultColor ? -1 : b.color === defaultColor ? 1 : 0);
        if (themes.length === 0)
            throw new ShikiError('`themes` option must not be empty');
        const themeTokens = codeToTokensWithThemes$1(internal, code, options);
        if (defaultColor && !themes.find(t => t.color === defaultColor))
            throw new ShikiError(`\`themes\` option must contain the defaultColor key \`${defaultColor}\``);
        const themeRegs = themes.map(t => internal.getTheme(t.theme));
        const themesOrder = themes.map(t => t.color);
        tokens = themeTokens
            .map(line => line.map(token => mergeToken(token, themesOrder, cssVariablePrefix, defaultColor)));
        const themeColorReplacements = themes.map(t => resolveColorReplacements(t.theme, options));
        fg = themes.map((t, idx) => (idx === 0 && defaultColor
            ? ''
            : `${cssVariablePrefix + t.color}:`) + (applyColorReplacements(themeRegs[idx].fg, themeColorReplacements[idx]) || 'inherit')).join(';');
        bg = themes.map((t, idx) => (idx === 0 && defaultColor
            ? ''
            : `${cssVariablePrefix + t.color}-bg:`) + (applyColorReplacements(themeRegs[idx].bg, themeColorReplacements[idx]) || 'inherit')).join(';');
        themeName = `shiki-themes ${themeRegs.map(t => t.name).join(' ')}`;
        rootStyle = defaultColor ? undefined : [fg, bg].join(';');
    }
    else if ('theme' in options) {
        const colorReplacements = resolveColorReplacements(options.theme, options);
        tokens = codeToTokensBase$1(internal, code, options);
        const _theme = internal.getTheme(options.theme);
        bg = applyColorReplacements(_theme.bg, colorReplacements);
        fg = applyColorReplacements(_theme.fg, colorReplacements);
        themeName = _theme.name;
    }
    else {
        throw new ShikiError('Invalid options, either `theme` or `themes` must be provided');
    }
    return {
        tokens,
        fg,
        bg,
        themeName,
        rootStyle,
    };
}
function mergeToken(merged, variantsOrder, cssVariablePrefix, defaultColor) {
    const token = {
        content: merged.content,
        explanation: merged.explanation,
        offset: merged.offset,
    };
    const styles = variantsOrder.map(t => getTokenStyleObject(merged.variants[t]));
    // Get all style keys, for themes that missing some style, we put `inherit` to override as needed
    const styleKeys = new Set(styles.flatMap(t => Object.keys(t)));
    const mergedStyles = styles.reduce((acc, cur, idx) => {
        for (const key of styleKeys) {
            const value = cur[key] || 'inherit';
            if (idx === 0 && defaultColor) {
                acc[key] = value;
            }
            else {
                const keyName = key === 'color' ? '' : key === 'background-color' ? '-bg' : `-${key}`;
                const varKey = cssVariablePrefix + variantsOrder[idx] + (key === 'color' ? '' : keyName);
                if (acc[key])
                    acc[key] += `;${varKey}:${value}`;
                else
                    acc[key] = `${varKey}:${value}`;
            }
        }
        return acc;
    }, {});
    token.htmlStyle = defaultColor
        ? stringifyTokenStyle(mergedStyles)
        : Object.values(mergedStyles).join(';');
    return token;
}

/**
 * A built-in transformer to add decorations to the highlighted code.
 */
function transformerDecorations() {
    const map = new WeakMap();
    function getContext(shiki) {
        if (!map.has(shiki.meta)) {
            const converter = createPositionConverter(shiki.source);
            function normalizePosition(p) {
                if (typeof p === 'number') {
                    if (p < 0 || p > shiki.source.length)
                        throw new ShikiError(`Invalid decoration offset: ${p}. Code length: ${shiki.source.length}`);
                    return {
                        ...converter.indexToPos(p),
                        offset: p,
                    };
                }
                else {
                    const line = converter.lines[p.line];
                    if (line === undefined)
                        throw new ShikiError(`Invalid decoration position ${JSON.stringify(p)}. Lines length: ${converter.lines.length}`);
                    if (p.character < 0 || p.character > line.length)
                        throw new ShikiError(`Invalid decoration position ${JSON.stringify(p)}. Line ${p.line} length: ${line.length}`);
                    return {
                        ...p,
                        offset: converter.posToIndex(p.line, p.character),
                    };
                }
            }
            const decorations = (shiki.options.decorations || [])
                .map((d) => ({
                ...d,
                start: normalizePosition(d.start),
                end: normalizePosition(d.end),
            }));
            verifyIntersections(decorations);
            map.set(shiki.meta, {
                decorations,
                converter,
                source: shiki.source,
            });
        }
        return map.get(shiki.meta);
    }
    function verifyIntersections(items) {
        for (let i = 0; i < items.length; i++) {
            const foo = items[i];
            if (foo.start.offset > foo.end.offset)
                throw new ShikiError(`Invalid decoration range: ${JSON.stringify(foo.start)} - ${JSON.stringify(foo.end)}`);
            for (let j = i + 1; j < items.length; j++) {
                const bar = items[j];
                const isFooHasBarStart = foo.start.offset < bar.start.offset && bar.start.offset < foo.end.offset;
                const isFooHasBarEnd = foo.start.offset < bar.end.offset && bar.end.offset < foo.end.offset;
                const isBarHasFooStart = bar.start.offset < foo.start.offset && foo.start.offset < bar.end.offset;
                const isBarHasFooEnd = bar.start.offset < foo.end.offset && foo.end.offset < bar.end.offset;
                if (isFooHasBarStart || isFooHasBarEnd || isBarHasFooStart || isBarHasFooEnd) {
                    if (isFooHasBarEnd && isFooHasBarEnd)
                        continue; // nested
                    if (isBarHasFooStart && isBarHasFooEnd)
                        continue; // nested
                    throw new ShikiError(`Decorations ${JSON.stringify(foo.start)} and ${JSON.stringify(bar.start)} intersect.`);
                }
            }
        }
    }
    return {
        name: 'shiki:decorations',
        tokens(tokens) {
            if (!this.options.decorations?.length)
                return;
            const ctx = getContext(this);
            const breakpoints = ctx.decorations.flatMap(d => [d.start.offset, d.end.offset]);
            const splitted = splitTokens(tokens, breakpoints);
            return splitted;
        },
        code(codeEl) {
            if (!this.options.decorations?.length)
                return;
            const ctx = getContext(this);
            const lines = Array.from(codeEl.children).filter(i => i.type === 'element' && i.tagName === 'span');
            if (lines.length !== ctx.converter.lines.length)
                throw new ShikiError(`Number of lines in code element (${lines.length}) does not match the number of lines in the source (${ctx.converter.lines.length}). Failed to apply decorations.`);
            function applyLineSection(line, start, end, decoration) {
                const lineEl = lines[line];
                let text = '';
                let startIndex = -1;
                let endIndex = -1;
                function stringify(el) {
                    if (el.type === 'text')
                        return el.value;
                    if (el.type === 'element')
                        return el.children.map(stringify).join('');
                    return '';
                }
                if (start === 0)
                    startIndex = 0;
                if (end === 0)
                    endIndex = 0;
                if (end === Number.POSITIVE_INFINITY)
                    endIndex = lineEl.children.length;
                if (startIndex === -1 || endIndex === -1) {
                    for (let i = 0; i < lineEl.children.length; i++) {
                        text += stringify(lineEl.children[i]);
                        if (startIndex === -1 && text.length === start)
                            startIndex = i + 1;
                        if (endIndex === -1 && text.length === end)
                            endIndex = i + 1;
                    }
                }
                if (startIndex === -1)
                    throw new ShikiError(`Failed to find start index for decoration ${JSON.stringify(decoration.start)}`);
                if (endIndex === -1)
                    throw new ShikiError(`Failed to find end index for decoration ${JSON.stringify(decoration.end)}`);
                const children = lineEl.children.slice(startIndex, endIndex);
                // Full line decoration
                if (!decoration.alwaysWrap && children.length === lineEl.children.length) {
                    applyDecoration(lineEl, decoration, 'line');
                }
                // Single token decoration
                else if (!decoration.alwaysWrap && children.length === 1 && children[0].type === 'element') {
                    applyDecoration(children[0], decoration, 'token');
                }
                // Create a wrapper for the decoration
                else {
                    const wrapper = {
                        type: 'element',
                        tagName: 'span',
                        properties: {},
                        children,
                    };
                    applyDecoration(wrapper, decoration, 'wrapper');
                    lineEl.children.splice(startIndex, children.length, wrapper);
                }
            }
            function applyLine(line, decoration) {
                lines[line] = applyDecoration(lines[line], decoration, 'line');
            }
            function applyDecoration(el, decoration, type) {
                const properties = decoration.properties || {};
                const transform = decoration.transform || (i => i);
                el.tagName = decoration.tagName || 'span';
                el.properties = {
                    ...el.properties,
                    ...properties,
                    class: el.properties.class,
                };
                if (decoration.properties?.class)
                    addClassToHast(el, decoration.properties.class);
                el = transform(el, type) || el;
                return el;
            }
            const lineApplies = [];
            // Apply decorations in reverse order so the nested ones get applied first.
            const sorted = ctx.decorations.sort((a, b) => b.start.offset - a.start.offset);
            for (const decoration of sorted) {
                const { start, end } = decoration;
                if (start.line === end.line) {
                    applyLineSection(start.line, start.character, end.character, decoration);
                }
                else if (start.line < end.line) {
                    applyLineSection(start.line, start.character, Number.POSITIVE_INFINITY, decoration);
                    for (let i = start.line + 1; i < end.line; i++)
                        lineApplies.unshift(() => applyLine(i, decoration));
                    applyLineSection(end.line, 0, end.character, decoration);
                }
            }
            lineApplies.forEach(i => i());
        },
    };
}

const builtInTransformers = [
    /* @__PURE__ */ transformerDecorations(),
];
function getTransformers(options) {
    return [
        ...options.transformers || [],
        ...builtInTransformers,
    ];
}

function codeToHast$1(internal, code, options, transformerContext = {
    meta: {},
    options,
    codeToHast: (_code, _options) => codeToHast$1(internal, _code, _options),
    codeToTokens: (_code, _options) => codeToTokens$1(internal, _code, _options),
}) {
    let input = code;
    for (const transformer of getTransformers(options))
        input = transformer.preprocess?.call(transformerContext, input, options) || input;
    let { tokens, fg, bg, themeName, rootStyle, } = codeToTokens$1(internal, input, options);
    const { mergeWhitespaces = true, } = options;
    if (mergeWhitespaces === true)
        tokens = mergeWhitespaceTokens(tokens);
    else if (mergeWhitespaces === 'never')
        tokens = splitWhitespaceTokens(tokens);
    const contextSource = {
        ...transformerContext,
        get source() {
            return input;
        },
    };
    for (const transformer of getTransformers(options))
        tokens = transformer.tokens?.call(contextSource, tokens) || tokens;
    return tokensToHast(tokens, {
        ...options,
        fg,
        bg,
        themeName,
        rootStyle,
    }, contextSource);
}
function tokensToHast(tokens, options, transformerContext) {
    const transformers = getTransformers(options);
    const lines = [];
    const root = {
        type: 'root',
        children: [],
    };
    const { structure = 'classic', } = options;
    let preNode = {
        type: 'element',
        tagName: 'pre',
        properties: {
            class: `shiki ${options.themeName || ''}`,
            style: options.rootStyle || `background-color:${options.bg};color:${options.fg}`,
            tabindex: '0',
            ...Object.fromEntries(Array.from(Object.entries(options.meta || {}))
                .filter(([key]) => !key.startsWith('_'))),
        },
        children: [],
    };
    let codeNode = {
        type: 'element',
        tagName: 'code',
        properties: {},
        children: lines,
    };
    const lineNodes = [];
    const context = {
        ...transformerContext,
        structure,
        addClassToHast,
        get source() {
            return transformerContext.source;
        },
        get tokens() {
            return tokens;
        },
        get options() {
            return options;
        },
        get root() {
            return root;
        },
        get pre() {
            return preNode;
        },
        get code() {
            return codeNode;
        },
        get lines() {
            return lineNodes;
        },
    };
    tokens.forEach((line, idx) => {
        if (idx) {
            if (structure === 'inline')
                root.children.push({ type: 'element', tagName: 'br', properties: {}, children: [] });
            else if (structure === 'classic')
                lines.push({ type: 'text', value: '\n' });
        }
        let lineNode = {
            type: 'element',
            tagName: 'span',
            properties: { class: 'line' },
            children: [],
        };
        let col = 0;
        for (const token of line) {
            let tokenNode = {
                type: 'element',
                tagName: 'span',
                properties: {},
                children: [{ type: 'text', value: token.content }],
            };
            const style = token.htmlStyle || stringifyTokenStyle(getTokenStyleObject(token));
            if (style)
                tokenNode.properties.style = style;
            for (const transformer of transformers)
                tokenNode = transformer?.span?.call(context, tokenNode, idx + 1, col, lineNode) || tokenNode;
            if (structure === 'inline')
                root.children.push(tokenNode);
            else if (structure === 'classic')
                lineNode.children.push(tokenNode);
            col += token.content.length;
        }
        if (structure === 'classic') {
            for (const transformer of transformers)
                lineNode = transformer?.line?.call(context, lineNode, idx + 1) || lineNode;
            lineNodes.push(lineNode);
            lines.push(lineNode);
        }
    });
    if (structure === 'classic') {
        for (const transformer of transformers)
            codeNode = transformer?.code?.call(context, codeNode) || codeNode;
        preNode.children.push(codeNode);
        for (const transformer of transformers)
            preNode = transformer?.pre?.call(context, preNode) || preNode;
        root.children.push(preNode);
    }
    let result = root;
    for (const transformer of transformers)
        result = transformer?.root?.call(context, result) || result;
    return result;
}
function mergeWhitespaceTokens(tokens) {
    return tokens.map((line) => {
        const newLine = [];
        let carryOnContent = '';
        let firstOffset = 0;
        line.forEach((token, idx) => {
            const isUnderline = token.fontStyle && token.fontStyle & FontStyle.Underline;
            const couldMerge = !isUnderline;
            if (couldMerge && token.content.match(/^\s+$/) && line[idx + 1]) {
                if (!firstOffset)
                    firstOffset = token.offset;
                carryOnContent += token.content;
            }
            else {
                if (carryOnContent) {
                    if (couldMerge) {
                        newLine.push({
                            ...token,
                            offset: firstOffset,
                            content: carryOnContent + token.content,
                        });
                    }
                    else {
                        newLine.push({
                            content: carryOnContent,
                            offset: firstOffset,
                        }, token);
                    }
                    firstOffset = 0;
                    carryOnContent = '';
                }
                else {
                    newLine.push(token);
                }
            }
        });
        return newLine;
    });
}
function splitWhitespaceTokens(tokens) {
    return tokens.map((line) => {
        return line.flatMap((token) => {
            if (token.content.match(/^\s+$/))
                return token;
            // eslint-disable-next-line regexp/no-super-linear-backtracking
            const match = token.content.match(/^(\s*)(.*?)(\s*)$/);
            if (!match)
                return token;
            const [, leading, content, trailing] = match;
            if (!leading && !trailing)
                return token;
            const expanded = [{
                    ...token,
                    offset: token.offset + leading.length,
                    content,
                }];
            if (leading) {
                expanded.unshift({
                    content: leading,
                    offset: token.offset,
                });
            }
            if (trailing) {
                expanded.push({
                    content: trailing,
                    offset: token.offset + leading.length + content.length,
                });
            }
            return expanded;
        });
    });
}

/**
 * List of HTML void tag names.
 *
 * @type {Array<string>}
 */
const htmlVoidElements = [
  'area',
  'base',
  'basefont',
  'bgsound',
  'br',
  'col',
  'command',
  'embed',
  'frame',
  'hr',
  'image',
  'img',
  'input',
  'keygen',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr'
];

/**
 * @typedef {import('./info.js').Info} Info
 * @typedef {Record<string, Info>} Properties
 * @typedef {Record<string, string>} Normal
 */

class Schema {
  /**
   * @constructor
   * @param {Properties} property
   * @param {Normal} normal
   * @param {string} [space]
   */
  constructor(property, normal, space) {
    this.property = property;
    this.normal = normal;
    if (space) {
      this.space = space;
    }
  }
}

/** @type {Properties} */
Schema.prototype.property = {};
/** @type {Normal} */
Schema.prototype.normal = {};
/** @type {string|null} */
Schema.prototype.space = null;

/**
 * @typedef {import('./schema.js').Properties} Properties
 * @typedef {import('./schema.js').Normal} Normal
 */


/**
 * @param {Schema[]} definitions
 * @param {string} [space]
 * @returns {Schema}
 */
function merge(definitions, space) {
  /** @type {Properties} */
  const property = {};
  /** @type {Normal} */
  const normal = {};
  let index = -1;

  while (++index < definitions.length) {
    Object.assign(property, definitions[index].property);
    Object.assign(normal, definitions[index].normal);
  }

  return new Schema(property, normal, space)
}

/**
 * @param {string} value
 * @returns {string}
 */
function normalize(value) {
  return value.toLowerCase()
}

class Info {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   */
  constructor(property, attribute) {
    /** @type {string} */
    this.property = property;
    /** @type {string} */
    this.attribute = attribute;
  }
}

/** @type {string|null} */
Info.prototype.space = null;
Info.prototype.boolean = false;
Info.prototype.booleanish = false;
Info.prototype.overloadedBoolean = false;
Info.prototype.number = false;
Info.prototype.commaSeparated = false;
Info.prototype.spaceSeparated = false;
Info.prototype.commaOrSpaceSeparated = false;
Info.prototype.mustUseProperty = false;
Info.prototype.defined = false;

let powers = 0;

const boolean = increment();
const booleanish = increment();
const overloadedBoolean = increment();
const number = increment();
const spaceSeparated = increment();
const commaSeparated = increment();
const commaOrSpaceSeparated = increment();

function increment() {
  return 2 ** ++powers
}

var types = /*#__PURE__*/Object.freeze({
  __proto__: null,
  boolean: boolean,
  booleanish: booleanish,
  commaOrSpaceSeparated: commaOrSpaceSeparated,
  commaSeparated: commaSeparated,
  number: number,
  overloadedBoolean: overloadedBoolean,
  spaceSeparated: spaceSeparated
});

/** @type {Array<keyof types>} */
// @ts-expect-error: hush.
const checks = Object.keys(types);

class DefinedInfo extends Info {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   * @param {number|null} [mask]
   * @param {string} [space]
   */
  constructor(property, attribute, mask, space) {
    let index = -1;

    super(property, attribute);

    mark(this, 'space', space);

    if (typeof mask === 'number') {
      while (++index < checks.length) {
        const check = checks[index];
        mark(this, checks[index], (mask & types[check]) === types[check]);
      }
    }
  }
}

DefinedInfo.prototype.defined = true;

/**
 * @param {DefinedInfo} values
 * @param {string} key
 * @param {unknown} value
 */
function mark(values, key, value) {
  if (value) {
    // @ts-expect-error: assume `value` matches the expected value of `key`.
    values[key] = value;
  }
}

/**
 * @typedef {import('./schema.js').Properties} Properties
 * @typedef {import('./schema.js').Normal} Normal
 *
 * @typedef {Record<string, string>} Attributes
 *
 * @typedef {Object} Definition
 * @property {Record<string, number|null>} properties
 * @property {(attributes: Attributes, property: string) => string} transform
 * @property {string} [space]
 * @property {Attributes} [attributes]
 * @property {Array<string>} [mustUseProperty]
 */


const own$3 = {}.hasOwnProperty;

/**
 * @param {Definition} definition
 * @returns {Schema}
 */
function create(definition) {
  /** @type {Properties} */
  const property = {};
  /** @type {Normal} */
  const normal = {};
  /** @type {string} */
  let prop;

  for (prop in definition.properties) {
    if (own$3.call(definition.properties, prop)) {
      const value = definition.properties[prop];
      const info = new DefinedInfo(
        prop,
        definition.transform(definition.attributes || {}, prop),
        value,
        definition.space
      );

      if (
        definition.mustUseProperty &&
        definition.mustUseProperty.includes(prop)
      ) {
        info.mustUseProperty = true;
      }

      property[prop] = info;

      normal[normalize(prop)] = prop;
      normal[normalize(info.attribute)] = prop;
    }
  }

  return new Schema(property, normal, definition.space)
}

const xlink = create({
  space: 'xlink',
  transform(_, prop) {
    return 'xlink:' + prop.slice(5).toLowerCase()
  },
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
});

const xml = create({
  space: 'xml',
  transform(_, prop) {
    return 'xml:' + prop.slice(3).toLowerCase()
  },
  properties: {xmlLang: null, xmlBase: null, xmlSpace: null}
});

/**
 * @param {Record<string, string>} attributes
 * @param {string} attribute
 * @returns {string}
 */
function caseSensitiveTransform(attributes, attribute) {
  return attribute in attributes ? attributes[attribute] : attribute
}

/**
 * @param {Record<string, string>} attributes
 * @param {string} property
 * @returns {string}
 */
function caseInsensitiveTransform(attributes, property) {
  return caseSensitiveTransform(attributes, property.toLowerCase())
}

const xmlns = create({
  space: 'xmlns',
  attributes: {xmlnsxlink: 'xmlns:xlink'},
  transform: caseInsensitiveTransform,
  properties: {xmlns: null, xmlnsXLink: null}
});

const aria = create({
  transform(_, prop) {
    return prop === 'role' ? prop : 'aria-' + prop.slice(4).toLowerCase()
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: booleanish,
    ariaAutoComplete: null,
    ariaBusy: booleanish,
    ariaChecked: booleanish,
    ariaColCount: number,
    ariaColIndex: number,
    ariaColSpan: number,
    ariaControls: spaceSeparated,
    ariaCurrent: null,
    ariaDescribedBy: spaceSeparated,
    ariaDetails: null,
    ariaDisabled: booleanish,
    ariaDropEffect: spaceSeparated,
    ariaErrorMessage: null,
    ariaExpanded: booleanish,
    ariaFlowTo: spaceSeparated,
    ariaGrabbed: booleanish,
    ariaHasPopup: null,
    ariaHidden: booleanish,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: spaceSeparated,
    ariaLevel: number,
    ariaLive: null,
    ariaModal: booleanish,
    ariaMultiLine: booleanish,
    ariaMultiSelectable: booleanish,
    ariaOrientation: null,
    ariaOwns: spaceSeparated,
    ariaPlaceholder: null,
    ariaPosInSet: number,
    ariaPressed: booleanish,
    ariaReadOnly: booleanish,
    ariaRelevant: null,
    ariaRequired: booleanish,
    ariaRoleDescription: spaceSeparated,
    ariaRowCount: number,
    ariaRowIndex: number,
    ariaRowSpan: number,
    ariaSelected: booleanish,
    ariaSetSize: number,
    ariaSort: null,
    ariaValueMax: number,
    ariaValueMin: number,
    ariaValueNow: number,
    ariaValueText: null,
    role: null
  }
});

const html$3 = create({
  space: 'html',
  attributes: {
    acceptcharset: 'accept-charset',
    classname: 'class',
    htmlfor: 'for',
    httpequiv: 'http-equiv'
  },
  transform: caseInsensitiveTransform,
  mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: commaSeparated,
    acceptCharset: spaceSeparated,
    accessKey: spaceSeparated,
    action: null,
    allow: null,
    allowFullScreen: boolean,
    allowPaymentRequest: boolean,
    allowUserMedia: boolean,
    alt: null,
    as: null,
    async: boolean,
    autoCapitalize: null,
    autoComplete: spaceSeparated,
    autoFocus: boolean,
    autoPlay: boolean,
    blocking: spaceSeparated,
    capture: null,
    charSet: null,
    checked: boolean,
    cite: null,
    className: spaceSeparated,
    cols: number,
    colSpan: null,
    content: null,
    contentEditable: booleanish,
    controls: boolean,
    controlsList: spaceSeparated,
    coords: number | commaSeparated,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: boolean,
    defer: boolean,
    dir: null,
    dirName: null,
    disabled: boolean,
    download: overloadedBoolean,
    draggable: booleanish,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: boolean,
    formTarget: null,
    headers: spaceSeparated,
    height: number,
    hidden: boolean,
    high: number,
    href: null,
    hrefLang: null,
    htmlFor: spaceSeparated,
    httpEquiv: spaceSeparated,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: boolean,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: boolean,
    itemId: null,
    itemProp: spaceSeparated,
    itemRef: spaceSeparated,
    itemScope: boolean,
    itemType: spaceSeparated,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: boolean,
    low: number,
    manifest: null,
    max: null,
    maxLength: number,
    media: null,
    method: null,
    min: null,
    minLength: number,
    multiple: boolean,
    muted: boolean,
    name: null,
    nonce: null,
    noModule: boolean,
    noValidate: boolean,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: boolean,
    optimum: number,
    pattern: null,
    ping: spaceSeparated,
    placeholder: null,
    playsInline: boolean,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: boolean,
    referrerPolicy: null,
    rel: spaceSeparated,
    required: boolean,
    reversed: boolean,
    rows: number,
    rowSpan: number,
    sandbox: spaceSeparated,
    scope: null,
    scoped: boolean,
    seamless: boolean,
    selected: boolean,
    shadowRootDelegatesFocus: boolean,
    shadowRootMode: null,
    shape: null,
    size: number,
    sizes: null,
    slot: null,
    span: number,
    spellCheck: booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: number,
    step: null,
    style: null,
    tabIndex: number,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: boolean,
    useMap: null,
    value: booleanish,
    width: number,
    wrap: null,

    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null, // Several. Use CSS `text-align` instead,
    aLink: null, // `<body>`. Use CSS `a:active {color}` instead
    archive: spaceSeparated, // `<object>`. List of URIs to archives
    axis: null, // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null, // `<body>`. Use CSS `background-image` instead
    bgColor: null, // `<body>` and table elements. Use CSS `background-color` instead
    border: number, // `<table>`. Use CSS `border-width` instead,
    borderColor: null, // `<table>`. Use CSS `border-color` instead,
    bottomMargin: number, // `<body>`
    cellPadding: null, // `<table>`
    cellSpacing: null, // `<table>`
    char: null, // Several table elements. When `align=char`, sets the character to align on
    charOff: null, // Several table elements. When `char`, offsets the alignment
    classId: null, // `<object>`
    clear: null, // `<br>`. Use CSS `clear` instead
    code: null, // `<object>`
    codeBase: null, // `<object>`
    codeType: null, // `<object>`
    color: null, // `<font>` and `<hr>`. Use CSS instead
    compact: boolean, // Lists. Use CSS to reduce space between items instead
    declare: boolean, // `<object>`
    event: null, // `<script>`
    face: null, // `<font>`. Use CSS instead
    frame: null, // `<table>`
    frameBorder: null, // `<iframe>`. Use CSS `border` instead
    hSpace: number, // `<img>` and `<object>`
    leftMargin: number, // `<body>`
    link: null, // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null, // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null, // `<img>`. Use a `<picture>`
    marginHeight: number, // `<body>`
    marginWidth: number, // `<body>`
    noResize: boolean, // `<frame>`
    noHref: boolean, // `<area>`. Use no href instead of an explicit `nohref`
    noShade: boolean, // `<hr>`. Use background-color and height instead of borders
    noWrap: boolean, // `<td>` and `<th>`
    object: null, // `<applet>`
    profile: null, // `<head>`
    prompt: null, // `<isindex>`
    rev: null, // `<link>`
    rightMargin: number, // `<body>`
    rules: null, // `<table>`
    scheme: null, // `<meta>`
    scrolling: booleanish, // `<frame>`. Use overflow in the child context
    standby: null, // `<object>`
    summary: null, // `<table>`
    text: null, // `<body>`. Use CSS `color` instead
    topMargin: number, // `<body>`
    valueType: null, // `<param>`
    version: null, // `<html>`. Use a doctype.
    vAlign: null, // Several. Use CSS `vertical-align` instead
    vLink: null, // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: number, // `<img>` and `<object>`

    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: boolean,
    disableRemotePlayback: boolean,
    prefix: null,
    property: null,
    results: number,
    security: null,
    unselectable: null
  }
});

const svg$1 = create({
  space: 'svg',
  attributes: {
    accentHeight: 'accent-height',
    alignmentBaseline: 'alignment-baseline',
    arabicForm: 'arabic-form',
    baselineShift: 'baseline-shift',
    capHeight: 'cap-height',
    className: 'class',
    clipPath: 'clip-path',
    clipRule: 'clip-rule',
    colorInterpolation: 'color-interpolation',
    colorInterpolationFilters: 'color-interpolation-filters',
    colorProfile: 'color-profile',
    colorRendering: 'color-rendering',
    crossOrigin: 'crossorigin',
    dataType: 'datatype',
    dominantBaseline: 'dominant-baseline',
    enableBackground: 'enable-background',
    fillOpacity: 'fill-opacity',
    fillRule: 'fill-rule',
    floodColor: 'flood-color',
    floodOpacity: 'flood-opacity',
    fontFamily: 'font-family',
    fontSize: 'font-size',
    fontSizeAdjust: 'font-size-adjust',
    fontStretch: 'font-stretch',
    fontStyle: 'font-style',
    fontVariant: 'font-variant',
    fontWeight: 'font-weight',
    glyphName: 'glyph-name',
    glyphOrientationHorizontal: 'glyph-orientation-horizontal',
    glyphOrientationVertical: 'glyph-orientation-vertical',
    hrefLang: 'hreflang',
    horizAdvX: 'horiz-adv-x',
    horizOriginX: 'horiz-origin-x',
    horizOriginY: 'horiz-origin-y',
    imageRendering: 'image-rendering',
    letterSpacing: 'letter-spacing',
    lightingColor: 'lighting-color',
    markerEnd: 'marker-end',
    markerMid: 'marker-mid',
    markerStart: 'marker-start',
    navDown: 'nav-down',
    navDownLeft: 'nav-down-left',
    navDownRight: 'nav-down-right',
    navLeft: 'nav-left',
    navNext: 'nav-next',
    navPrev: 'nav-prev',
    navRight: 'nav-right',
    navUp: 'nav-up',
    navUpLeft: 'nav-up-left',
    navUpRight: 'nav-up-right',
    onAbort: 'onabort',
    onActivate: 'onactivate',
    onAfterPrint: 'onafterprint',
    onBeforePrint: 'onbeforeprint',
    onBegin: 'onbegin',
    onCancel: 'oncancel',
    onCanPlay: 'oncanplay',
    onCanPlayThrough: 'oncanplaythrough',
    onChange: 'onchange',
    onClick: 'onclick',
    onClose: 'onclose',
    onCopy: 'oncopy',
    onCueChange: 'oncuechange',
    onCut: 'oncut',
    onDblClick: 'ondblclick',
    onDrag: 'ondrag',
    onDragEnd: 'ondragend',
    onDragEnter: 'ondragenter',
    onDragExit: 'ondragexit',
    onDragLeave: 'ondragleave',
    onDragOver: 'ondragover',
    onDragStart: 'ondragstart',
    onDrop: 'ondrop',
    onDurationChange: 'ondurationchange',
    onEmptied: 'onemptied',
    onEnd: 'onend',
    onEnded: 'onended',
    onError: 'onerror',
    onFocus: 'onfocus',
    onFocusIn: 'onfocusin',
    onFocusOut: 'onfocusout',
    onHashChange: 'onhashchange',
    onInput: 'oninput',
    onInvalid: 'oninvalid',
    onKeyDown: 'onkeydown',
    onKeyPress: 'onkeypress',
    onKeyUp: 'onkeyup',
    onLoad: 'onload',
    onLoadedData: 'onloadeddata',
    onLoadedMetadata: 'onloadedmetadata',
    onLoadStart: 'onloadstart',
    onMessage: 'onmessage',
    onMouseDown: 'onmousedown',
    onMouseEnter: 'onmouseenter',
    onMouseLeave: 'onmouseleave',
    onMouseMove: 'onmousemove',
    onMouseOut: 'onmouseout',
    onMouseOver: 'onmouseover',
    onMouseUp: 'onmouseup',
    onMouseWheel: 'onmousewheel',
    onOffline: 'onoffline',
    onOnline: 'ononline',
    onPageHide: 'onpagehide',
    onPageShow: 'onpageshow',
    onPaste: 'onpaste',
    onPause: 'onpause',
    onPlay: 'onplay',
    onPlaying: 'onplaying',
    onPopState: 'onpopstate',
    onProgress: 'onprogress',
    onRateChange: 'onratechange',
    onRepeat: 'onrepeat',
    onReset: 'onreset',
    onResize: 'onresize',
    onScroll: 'onscroll',
    onSeeked: 'onseeked',
    onSeeking: 'onseeking',
    onSelect: 'onselect',
    onShow: 'onshow',
    onStalled: 'onstalled',
    onStorage: 'onstorage',
    onSubmit: 'onsubmit',
    onSuspend: 'onsuspend',
    onTimeUpdate: 'ontimeupdate',
    onToggle: 'ontoggle',
    onUnload: 'onunload',
    onVolumeChange: 'onvolumechange',
    onWaiting: 'onwaiting',
    onZoom: 'onzoom',
    overlinePosition: 'overline-position',
    overlineThickness: 'overline-thickness',
    paintOrder: 'paint-order',
    panose1: 'panose-1',
    pointerEvents: 'pointer-events',
    referrerPolicy: 'referrerpolicy',
    renderingIntent: 'rendering-intent',
    shapeRendering: 'shape-rendering',
    stopColor: 'stop-color',
    stopOpacity: 'stop-opacity',
    strikethroughPosition: 'strikethrough-position',
    strikethroughThickness: 'strikethrough-thickness',
    strokeDashArray: 'stroke-dasharray',
    strokeDashOffset: 'stroke-dashoffset',
    strokeLineCap: 'stroke-linecap',
    strokeLineJoin: 'stroke-linejoin',
    strokeMiterLimit: 'stroke-miterlimit',
    strokeOpacity: 'stroke-opacity',
    strokeWidth: 'stroke-width',
    tabIndex: 'tabindex',
    textAnchor: 'text-anchor',
    textDecoration: 'text-decoration',
    textRendering: 'text-rendering',
    transformOrigin: 'transform-origin',
    typeOf: 'typeof',
    underlinePosition: 'underline-position',
    underlineThickness: 'underline-thickness',
    unicodeBidi: 'unicode-bidi',
    unicodeRange: 'unicode-range',
    unitsPerEm: 'units-per-em',
    vAlphabetic: 'v-alphabetic',
    vHanging: 'v-hanging',
    vIdeographic: 'v-ideographic',
    vMathematical: 'v-mathematical',
    vectorEffect: 'vector-effect',
    vertAdvY: 'vert-adv-y',
    vertOriginX: 'vert-origin-x',
    vertOriginY: 'vert-origin-y',
    wordSpacing: 'word-spacing',
    writingMode: 'writing-mode',
    xHeight: 'x-height',
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: 'playbackorder',
    timelineBegin: 'timelinebegin'
  },
  transform: caseSensitiveTransform,
  properties: {
    about: commaOrSpaceSeparated,
    accentHeight: number,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: number,
    amplitude: number,
    arabicForm: null,
    ascent: number,
    attributeName: null,
    attributeType: null,
    azimuth: number,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: number,
    by: null,
    calcMode: null,
    capHeight: number,
    className: spaceSeparated,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: number,
    diffuseConstant: number,
    direction: null,
    display: null,
    dur: null,
    divisor: number,
    dominantBaseline: null,
    download: boolean,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: number,
    enableBackground: null,
    end: null,
    event: null,
    exponent: number,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: number,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: commaSeparated,
    g2: commaSeparated,
    glyphName: commaSeparated,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: number,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: number,
    horizOriginX: number,
    horizOriginY: number,
    id: null,
    ideographic: number,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: number,
    k: number,
    k1: number,
    k2: number,
    k3: number,
    k4: number,
    kernelMatrix: commaOrSpaceSeparated,
    kernelUnitLength: null,
    keyPoints: null, // SEMI_COLON_SEPARATED
    keySplines: null, // SEMI_COLON_SEPARATED
    keyTimes: null, // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: number,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: number,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: number,
    overlineThickness: number,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: number,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: spaceSeparated,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: number,
    pointsAtY: number,
    pointsAtZ: number,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: commaOrSpaceSeparated,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: commaOrSpaceSeparated,
    rev: commaOrSpaceSeparated,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: commaOrSpaceSeparated,
    requiredFeatures: commaOrSpaceSeparated,
    requiredFonts: commaOrSpaceSeparated,
    requiredFormats: commaOrSpaceSeparated,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: number,
    specularExponent: number,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: number,
    strikethroughThickness: number,
    string: null,
    stroke: null,
    strokeDashArray: commaOrSpaceSeparated,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: number,
    strokeOpacity: number,
    strokeWidth: null,
    style: null,
    surfaceScale: number,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: commaOrSpaceSeparated,
    tabIndex: number,
    tableValues: null,
    target: null,
    targetX: number,
    targetY: number,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: commaOrSpaceSeparated,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: number,
    underlineThickness: number,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: number,
    values: null,
    vAlphabetic: number,
    vMathematical: number,
    vectorEffect: null,
    vHanging: number,
    vIdeographic: number,
    version: null,
    vertAdvY: number,
    vertOriginX: number,
    vertOriginY: number,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: number,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
});

/**
 * @typedef {import('./util/schema.js').Schema} Schema
 */


const valid = /^data[-\w.:]+$/i;
const dash = /-[a-z]/g;
const cap = /[A-Z]/g;

/**
 * @param {Schema} schema
 * @param {string} value
 * @returns {Info}
 */
function find(schema, value) {
  const normal = normalize(value);
  let prop = value;
  let Type = Info;

  if (normal in schema.normal) {
    return schema.property[schema.normal[normal]]
  }

  if (normal.length > 4 && normal.slice(0, 4) === 'data' && valid.test(value)) {
    // Attribute or property.
    if (value.charAt(4) === '-') {
      // Turn it into a property.
      const rest = value.slice(5).replace(dash, camelcase);
      prop = 'data' + rest.charAt(0).toUpperCase() + rest.slice(1);
    } else {
      // Turn it into an attribute.
      const rest = value.slice(4);

      if (!dash.test(rest)) {
        let dashes = rest.replace(cap, kebab);

        if (dashes.charAt(0) !== '-') {
          dashes = '-' + dashes;
        }

        value = 'data' + dashes;
      }
    }

    Type = DefinedInfo;
  }

  return new Type(prop, value)
}

/**
 * @param {string} $0
 * @returns {string}
 */
function kebab($0) {
  return '-' + $0.toLowerCase()
}

/**
 * @param {string} $0
 * @returns {string}
 */
function camelcase($0) {
  return $0.charAt(1).toUpperCase()
}

/**
 * @typedef {import('./lib/util/info.js').Info} Info
 * @typedef {import('./lib/util/schema.js').Schema} Schema
 */

const html$2 = merge([xml, xlink, xmlns, aria, html$3], 'html');
const svg = merge([xml, xlink, xmlns, aria, svg$1], 'svg');

/**
 * @callback Handler
 *   Handle a value, with a certain ID field set to a certain value.
 *   The ID field is passed to `zwitch`, and it’s value is this function’s
 *   place on the `handlers` record.
 * @param {...any} parameters
 *   Arbitrary parameters passed to the zwitch.
 *   The first will be an object with a certain ID field set to a certain value.
 * @returns {any}
 *   Anything!
 */

/**
 * @callback UnknownHandler
 *   Handle values that do have a certain ID field, but it’s set to a value
 *   that is not listed in the `handlers` record.
 * @param {unknown} value
 *   An object with a certain ID field set to an unknown value.
 * @param {...any} rest
 *   Arbitrary parameters passed to the zwitch.
 * @returns {any}
 *   Anything!
 */

/**
 * @callback InvalidHandler
 *   Handle values that do not have a certain ID field.
 * @param {unknown} value
 *   Any unknown value.
 * @param {...any} rest
 *   Arbitrary parameters passed to the zwitch.
 * @returns {void|null|undefined|never}
 *   This should crash or return nothing.
 */

/**
 * @template {InvalidHandler} [Invalid=InvalidHandler]
 * @template {UnknownHandler} [Unknown=UnknownHandler]
 * @template {Record<string, Handler>} [Handlers=Record<string, Handler>]
 * @typedef Options
 *   Configuration (required).
 * @property {Invalid} [invalid]
 *   Handler to use for invalid values.
 * @property {Unknown} [unknown]
 *   Handler to use for unknown values.
 * @property {Handlers} [handlers]
 *   Handlers to use.
 */

const own$2 = {}.hasOwnProperty;

/**
 * Handle values based on a field.
 *
 * @template {InvalidHandler} [Invalid=InvalidHandler]
 * @template {UnknownHandler} [Unknown=UnknownHandler]
 * @template {Record<string, Handler>} [Handlers=Record<string, Handler>]
 * @param {string} key
 *   Field to switch on.
 * @param {Options<Invalid, Unknown, Handlers>} [options]
 *   Configuration (required).
 * @returns {{unknown: Unknown, invalid: Invalid, handlers: Handlers, (...parameters: Parameters<Handlers[keyof Handlers]>): ReturnType<Handlers[keyof Handlers]>, (...parameters: Parameters<Unknown>): ReturnType<Unknown>}}
 */
function zwitch(key, options) {
  const settings = options || {};

  /**
   * Handle one value.
   *
   * Based on the bound `key`, a respective handler will be called.
   * If `value` is not an object, or doesn’t have a `key` property, the special
   * “invalid” handler will be called.
   * If `value` has an unknown `key`, the special “unknown” handler will be
   * called.
   *
   * All arguments, and the context object, are passed through to the handler,
   * and it’s result is returned.
   *
   * @this {unknown}
   *   Any context object.
   * @param {unknown} [value]
   *   Any value.
   * @param {...unknown} parameters
   *   Arbitrary parameters passed to the zwitch.
   * @property {Handler} invalid
   *   Handle for values that do not have a certain ID field.
   * @property {Handler} unknown
   *   Handle values that do have a certain ID field, but it’s set to a value
   *   that is not listed in the `handlers` record.
   * @property {Handlers} handlers
   *   Record of handlers.
   * @returns {unknown}
   *   Anything.
   */
  function one(value, ...parameters) {
    /** @type {Handler|undefined} */
    let fn = one.invalid;
    const handlers = one.handlers;

    if (value && own$2.call(value, key)) {
      // @ts-expect-error Indexable.
      const id = String(value[key]);
      // @ts-expect-error Indexable.
      fn = own$2.call(handlers, id) ? handlers[id] : one.unknown;
    }

    if (fn) {
      return fn.call(this, value, ...parameters)
    }
  }

  one.handlers = settings.handlers || {};
  one.invalid = settings.invalid;
  one.unknown = settings.unknown;

  // @ts-expect-error: matches!
  return one
}

/**
 * @typedef CoreOptions
 * @property {Array<string>} [subset=[]]
 *   Whether to only escape the given subset of characters.
 * @property {boolean} [escapeOnly=false]
 *   Whether to only escape possibly dangerous characters.
 *   Those characters are `"`, `&`, `'`, `<`, `>`, and `` ` ``.
 *
 * @typedef FormatOptions
 * @property {(code: number, next: number, options: CoreWithFormatOptions) => string} format
 *   Format strategy.
 *
 * @typedef {CoreOptions & FormatOptions & import('./util/format-smart.js').FormatSmartOptions} CoreWithFormatOptions
 */

/**
 * Encode certain characters in `value`.
 *
 * @param {string} value
 * @param {CoreWithFormatOptions} options
 * @returns {string}
 */
function core(value, options) {
  value = value.replace(
    options.subset ? charactersToExpression(options.subset) : /["&'<>`]/g,
    basic
  );

  if (options.subset || options.escapeOnly) {
    return value
  }

  return (
    value
      // Surrogate pairs.
      .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, surrogate)
      // BMP control characters (C0 except for LF, CR, SP; DEL; and some more
      // non-ASCII ones).
      .replace(
        // eslint-disable-next-line no-control-regex, unicorn/no-hex-escape
        /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,
        basic
      )
  )

  /**
   * @param {string} pair
   * @param {number} index
   * @param {string} all
   */
  function surrogate(pair, index, all) {
    return options.format(
      (pair.charCodeAt(0) - 0xd800) * 0x400 +
        pair.charCodeAt(1) -
        0xdc00 +
        0x10000,
      all.charCodeAt(index + 2),
      options
    )
  }

  /**
   * @param {string} character
   * @param {number} index
   * @param {string} all
   */
  function basic(character, index, all) {
    return options.format(
      character.charCodeAt(0),
      all.charCodeAt(index + 1),
      options
    )
  }
}

/**
 * @param {Array<string>} subset
 * @returns {RegExp}
 */
function charactersToExpression(subset) {
  /** @type {Array<string>} */
  const groups = [];
  let index = -1;

  while (++index < subset.length) {
    groups.push(subset[index].replace(/[|\\{}()[\]^$+*?.]/g, '\\$&'));
  }

  return new RegExp('(?:' + groups.join('|') + ')', 'g')
}

/**
 * Configurable ways to encode characters as hexadecimal references.
 *
 * @param {number} code
 * @param {number} next
 * @param {boolean|undefined} omit
 * @returns {string}
 */
function toHexadecimal(code, next, omit) {
  const value = '&#x' + code.toString(16).toUpperCase();
  return omit && next && !/[\dA-Fa-f]/.test(String.fromCharCode(next))
    ? value
    : value + ';'
}

/**
 * Configurable ways to encode characters as decimal references.
 *
 * @param {number} code
 * @param {number} next
 * @param {boolean|undefined} omit
 * @returns {string}
 */
function toDecimal(code, next, omit) {
  const value = '&#' + String(code);
  return omit && next && !/\d/.test(String.fromCharCode(next))
    ? value
    : value + ';'
}

/**
 * List of legacy HTML named character references that don’t need a trailing semicolon.
 *
 * @type {Array<string>}
 */
const characterEntitiesLegacy = [
  'AElig',
  'AMP',
  'Aacute',
  'Acirc',
  'Agrave',
  'Aring',
  'Atilde',
  'Auml',
  'COPY',
  'Ccedil',
  'ETH',
  'Eacute',
  'Ecirc',
  'Egrave',
  'Euml',
  'GT',
  'Iacute',
  'Icirc',
  'Igrave',
  'Iuml',
  'LT',
  'Ntilde',
  'Oacute',
  'Ocirc',
  'Ograve',
  'Oslash',
  'Otilde',
  'Ouml',
  'QUOT',
  'REG',
  'THORN',
  'Uacute',
  'Ucirc',
  'Ugrave',
  'Uuml',
  'Yacute',
  'aacute',
  'acirc',
  'acute',
  'aelig',
  'agrave',
  'amp',
  'aring',
  'atilde',
  'auml',
  'brvbar',
  'ccedil',
  'cedil',
  'cent',
  'copy',
  'curren',
  'deg',
  'divide',
  'eacute',
  'ecirc',
  'egrave',
  'eth',
  'euml',
  'frac12',
  'frac14',
  'frac34',
  'gt',
  'iacute',
  'icirc',
  'iexcl',
  'igrave',
  'iquest',
  'iuml',
  'laquo',
  'lt',
  'macr',
  'micro',
  'middot',
  'nbsp',
  'not',
  'ntilde',
  'oacute',
  'ocirc',
  'ograve',
  'ordf',
  'ordm',
  'oslash',
  'otilde',
  'ouml',
  'para',
  'plusmn',
  'pound',
  'quot',
  'raquo',
  'reg',
  'sect',
  'shy',
  'sup1',
  'sup2',
  'sup3',
  'szlig',
  'thorn',
  'times',
  'uacute',
  'ucirc',
  'ugrave',
  'uml',
  'uuml',
  'yacute',
  'yen',
  'yuml'
];

/**
 * Map of named character references from HTML 4.
 *
 * @type {Record<string, string>}
 */
const characterEntitiesHtml4 = {
  nbsp: ' ',
  iexcl: '¡',
  cent: '¢',
  pound: '£',
  curren: '¤',
  yen: '¥',
  brvbar: '¦',
  sect: '§',
  uml: '¨',
  copy: '©',
  ordf: 'ª',
  laquo: '«',
  not: '¬',
  shy: '­',
  reg: '®',
  macr: '¯',
  deg: '°',
  plusmn: '±',
  sup2: '²',
  sup3: '³',
  acute: '´',
  micro: 'µ',
  para: '¶',
  middot: '·',
  cedil: '¸',
  sup1: '¹',
  ordm: 'º',
  raquo: '»',
  frac14: '¼',
  frac12: '½',
  frac34: '¾',
  iquest: '¿',
  Agrave: 'À',
  Aacute: 'Á',
  Acirc: 'Â',
  Atilde: 'Ã',
  Auml: 'Ä',
  Aring: 'Å',
  AElig: 'Æ',
  Ccedil: 'Ç',
  Egrave: 'È',
  Eacute: 'É',
  Ecirc: 'Ê',
  Euml: 'Ë',
  Igrave: 'Ì',
  Iacute: 'Í',
  Icirc: 'Î',
  Iuml: 'Ï',
  ETH: 'Ð',
  Ntilde: 'Ñ',
  Ograve: 'Ò',
  Oacute: 'Ó',
  Ocirc: 'Ô',
  Otilde: 'Õ',
  Ouml: 'Ö',
  times: '×',
  Oslash: 'Ø',
  Ugrave: 'Ù',
  Uacute: 'Ú',
  Ucirc: 'Û',
  Uuml: 'Ü',
  Yacute: 'Ý',
  THORN: 'Þ',
  szlig: 'ß',
  agrave: 'à',
  aacute: 'á',
  acirc: 'â',
  atilde: 'ã',
  auml: 'ä',
  aring: 'å',
  aelig: 'æ',
  ccedil: 'ç',
  egrave: 'è',
  eacute: 'é',
  ecirc: 'ê',
  euml: 'ë',
  igrave: 'ì',
  iacute: 'í',
  icirc: 'î',
  iuml: 'ï',
  eth: 'ð',
  ntilde: 'ñ',
  ograve: 'ò',
  oacute: 'ó',
  ocirc: 'ô',
  otilde: 'õ',
  ouml: 'ö',
  divide: '÷',
  oslash: 'ø',
  ugrave: 'ù',
  uacute: 'ú',
  ucirc: 'û',
  uuml: 'ü',
  yacute: 'ý',
  thorn: 'þ',
  yuml: 'ÿ',
  fnof: 'ƒ',
  Alpha: 'Α',
  Beta: 'Β',
  Gamma: 'Γ',
  Delta: 'Δ',
  Epsilon: 'Ε',
  Zeta: 'Ζ',
  Eta: 'Η',
  Theta: 'Θ',
  Iota: 'Ι',
  Kappa: 'Κ',
  Lambda: 'Λ',
  Mu: 'Μ',
  Nu: 'Ν',
  Xi: 'Ξ',
  Omicron: 'Ο',
  Pi: 'Π',
  Rho: 'Ρ',
  Sigma: 'Σ',
  Tau: 'Τ',
  Upsilon: 'Υ',
  Phi: 'Φ',
  Chi: 'Χ',
  Psi: 'Ψ',
  Omega: 'Ω',
  alpha: 'α',
  beta: 'β',
  gamma: 'γ',
  delta: 'δ',
  epsilon: 'ε',
  zeta: 'ζ',
  eta: 'η',
  theta: 'θ',
  iota: 'ι',
  kappa: 'κ',
  lambda: 'λ',
  mu: 'μ',
  nu: 'ν',
  xi: 'ξ',
  omicron: 'ο',
  pi: 'π',
  rho: 'ρ',
  sigmaf: 'ς',
  sigma: 'σ',
  tau: 'τ',
  upsilon: 'υ',
  phi: 'φ',
  chi: 'χ',
  psi: 'ψ',
  omega: 'ω',
  thetasym: 'ϑ',
  upsih: 'ϒ',
  piv: 'ϖ',
  bull: '•',
  hellip: '…',
  prime: '′',
  Prime: '″',
  oline: '‾',
  frasl: '⁄',
  weierp: '℘',
  image: 'ℑ',
  real: 'ℜ',
  trade: '™',
  alefsym: 'ℵ',
  larr: '←',
  uarr: '↑',
  rarr: '→',
  darr: '↓',
  harr: '↔',
  crarr: '↵',
  lArr: '⇐',
  uArr: '⇑',
  rArr: '⇒',
  dArr: '⇓',
  hArr: '⇔',
  forall: '∀',
  part: '∂',
  exist: '∃',
  empty: '∅',
  nabla: '∇',
  isin: '∈',
  notin: '∉',
  ni: '∋',
  prod: '∏',
  sum: '∑',
  minus: '−',
  lowast: '∗',
  radic: '√',
  prop: '∝',
  infin: '∞',
  ang: '∠',
  and: '∧',
  or: '∨',
  cap: '∩',
  cup: '∪',
  int: '∫',
  there4: '∴',
  sim: '∼',
  cong: '≅',
  asymp: '≈',
  ne: '≠',
  equiv: '≡',
  le: '≤',
  ge: '≥',
  sub: '⊂',
  sup: '⊃',
  nsub: '⊄',
  sube: '⊆',
  supe: '⊇',
  oplus: '⊕',
  otimes: '⊗',
  perp: '⊥',
  sdot: '⋅',
  lceil: '⌈',
  rceil: '⌉',
  lfloor: '⌊',
  rfloor: '⌋',
  lang: '〈',
  rang: '〉',
  loz: '◊',
  spades: '♠',
  clubs: '♣',
  hearts: '♥',
  diams: '♦',
  quot: '"',
  amp: '&',
  lt: '<',
  gt: '>',
  OElig: 'Œ',
  oelig: 'œ',
  Scaron: 'Š',
  scaron: 'š',
  Yuml: 'Ÿ',
  circ: 'ˆ',
  tilde: '˜',
  ensp: ' ',
  emsp: ' ',
  thinsp: ' ',
  zwnj: '‌',
  zwj: '‍',
  lrm: '‎',
  rlm: '‏',
  ndash: '–',
  mdash: '—',
  lsquo: '‘',
  rsquo: '’',
  sbquo: '‚',
  ldquo: '“',
  rdquo: '”',
  bdquo: '„',
  dagger: '†',
  Dagger: '‡',
  permil: '‰',
  lsaquo: '‹',
  rsaquo: '›',
  euro: '€'
};

/**
 * List of legacy (that don’t need a trailing `;`) named references which could,
 * depending on what follows them, turn into a different meaning
 *
 * @type {Array<string>}
 */
const dangerous = [
  'cent',
  'copy',
  'divide',
  'gt',
  'lt',
  'not',
  'para',
  'times'
];

const own$1 = {}.hasOwnProperty;

/**
 * `characterEntitiesHtml4` but inverted.
 *
 * @type {Record<string, string>}
 */
const characters = {};

/** @type {string} */
let key;

for (key in characterEntitiesHtml4) {
  if (own$1.call(characterEntitiesHtml4, key)) {
    characters[characterEntitiesHtml4[key]] = key;
  }
}

/**
 * Configurable ways to encode characters as named references.
 *
 * @param {number} code
 * @param {number} next
 * @param {boolean|undefined} omit
 * @param {boolean|undefined} attribute
 * @returns {string}
 */
function toNamed(code, next, omit, attribute) {
  const character = String.fromCharCode(code);

  if (own$1.call(characters, character)) {
    const name = characters[character];
    const value = '&' + name;

    if (
      omit &&
      characterEntitiesLegacy.includes(name) &&
      !dangerous.includes(name) &&
      (!attribute ||
        (next &&
          next !== 61 /* `=` */ &&
          /[^\da-z]/i.test(String.fromCharCode(next))))
    ) {
      return value
    }

    return value + ';'
  }

  return ''
}

/**
 * @typedef FormatSmartOptions
 * @property {boolean} [useNamedReferences=false]
 *   Prefer named character references (`&amp;`) where possible.
 * @property {boolean} [useShortestReferences=false]
 *   Prefer the shortest possible reference, if that results in less bytes.
 *   **Note**: `useNamedReferences` can be omitted when using `useShortestReferences`.
 * @property {boolean} [omitOptionalSemicolons=false]
 *   Whether to omit semicolons when possible.
 *   **Note**: This creates what HTML calls “parse errors” but is otherwise still valid HTML — don’t use this except when building a minifier.
 *   Omitting semicolons is possible for certain named and numeric references in some cases.
 * @property {boolean} [attribute=false]
 *   Create character references which don’t fail in attributes.
 *   **Note**: `attribute` only applies when operating dangerously with
 *   `omitOptionalSemicolons: true`.
 */


/**
 * Configurable ways to encode a character yielding pretty or small results.
 *
 * @param {number} code
 * @param {number} next
 * @param {FormatSmartOptions} options
 * @returns {string}
 */
function formatSmart(code, next, options) {
  let numeric = toHexadecimal(code, next, options.omitOptionalSemicolons);
  /** @type {string|undefined} */
  let named;

  if (options.useNamedReferences || options.useShortestReferences) {
    named = toNamed(
      code,
      next,
      options.omitOptionalSemicolons,
      options.attribute
    );
  }

  // Use the shortest numeric reference when requested.
  // A simple algorithm would use decimal for all code points under 100, as
  // those are shorter than hexadecimal:
  //
  // * `&#99;` vs `&#x63;` (decimal shorter)
  // * `&#100;` vs `&#x64;` (equal)
  //
  // However, because we take `next` into consideration when `omit` is used,
  // And it would be possible that decimals are shorter on bigger values as
  // well if `next` is hexadecimal but not decimal, we instead compare both.
  if (
    (options.useShortestReferences || !named) &&
    options.useShortestReferences
  ) {
    const decimal = toDecimal(code, next, options.omitOptionalSemicolons);

    if (decimal.length < numeric.length) {
      numeric = decimal;
    }
  }

  return named &&
    (!options.useShortestReferences || named.length < numeric.length)
    ? named
    : numeric
}

/**
 * @typedef {import('./core.js').CoreOptions & import('./util/format-smart.js').FormatSmartOptions} Options
 * @typedef {import('./core.js').CoreOptions} LightOptions
 */


/**
 * Encode special characters in `value`.
 *
 * @param {string} value
 *   Value to encode.
 * @param {Options} [options]
 *   Configuration.
 * @returns {string}
 *   Encoded value.
 */
function stringifyEntities(value, options) {
  return core(value, Object.assign({format: formatSmart}, options))
}

/**
 * @typedef {import('hast').Comment} Comment
 * @typedef {import('hast').Parents} Parents
 *
 * @typedef {import('../index.js').State} State
 */


const htmlCommentRegex = /^>|^->|<!--|-->|--!>|<!-$/g;

// Declare arrays as variables so it can be cached by `stringifyEntities`
const bogusCommentEntitySubset = ['>'];
const commentEntitySubset = ['<', '>'];

/**
 * Serialize a comment.
 *
 * @param {Comment} node
 *   Node to handle.
 * @param {number | undefined} _1
 *   Index of `node` in `parent.
 * @param {Parents | undefined} _2
 *   Parent of `node`.
 * @param {State} state
 *   Info passed around about the current state.
 * @returns {string}
 *   Serialized node.
 */
function comment(node, _1, _2, state) {
  // See: <https://html.spec.whatwg.org/multipage/syntax.html#comments>
  return state.settings.bogusComments
    ? '<?' +
        stringifyEntities(
          node.value,
          Object.assign({}, state.settings.characterReferences, {
            subset: bogusCommentEntitySubset
          })
        ) +
        '>'
    : '<!--' + node.value.replace(htmlCommentRegex, encode) + '-->'

  /**
   * @param {string} $0
   */
  function encode($0) {
    return stringifyEntities(
      $0,
      Object.assign({}, state.settings.characterReferences, {
        subset: commentEntitySubset
      })
    )
  }
}

/**
 * @typedef {import('hast').Doctype} Doctype
 * @typedef {import('hast').Parents} Parents
 *
 * @typedef {import('../index.js').State} State
 */


/**
 * Serialize a doctype.
 *
 * @param {Doctype} _1
 *   Node to handle.
 * @param {number | undefined} _2
 *   Index of `node` in `parent.
 * @param {Parents | undefined} _3
 *   Parent of `node`.
 * @param {State} state
 *   Info passed around about the current state.
 * @returns {string}
 *   Serialized node.
 */
function doctype(_1, _2, _3, state) {
  return (
    '<!' +
    (state.settings.upperDoctype ? 'DOCTYPE' : 'doctype') +
    (state.settings.tightDoctype ? '' : ' ') +
    'html>'
  )
}

/**
 * Count how often a character (or substring) is used in a string.
 *
 * @param {string} value
 *   Value to search in.
 * @param {string} character
 *   Character (or substring) to look for.
 * @return {number}
 *   Number of times `character` occurred in `value`.
 */
function ccount(value, character) {
  const source = String(value);

  if (typeof character !== 'string') {
    throw new TypeError('Expected character')
  }

  let count = 0;
  let index = source.indexOf(character);

  while (index !== -1) {
    count++;
    index = source.indexOf(character, index + character.length);
  }

  return count
}

/**
 * @typedef Options
 *   Configuration for `stringify`.
 * @property {boolean} [padLeft=true]
 *   Whether to pad a space before a token.
 * @property {boolean} [padRight=false]
 *   Whether to pad a space after a token.
 */


/**
 * Serialize an array of strings or numbers to comma-separated tokens.
 *
 * @param {Array<string|number>} values
 *   List of tokens.
 * @param {Options} [options]
 *   Configuration for `stringify` (optional).
 * @returns {string}
 *   Comma-separated tokens.
 */
function stringify$1(values, options) {
  const settings = options || {};

  // Ensure the last empty entry is seen.
  const input = values[values.length - 1] === '' ? [...values, ''] : values;

  return input
    .join(
      (settings.padRight ? ' ' : '') +
        ',' +
        (settings.padLeft === false ? '' : ' ')
    )
    .trim()
}

/**
 * Parse space-separated tokens to an array of strings.
 *
 * @param {string} value
 *   Space-separated tokens.
 * @returns {Array<string>}
 *   List of tokens.
 */

/**
 * Serialize an array of strings as space separated-tokens.
 *
 * @param {Array<string|number>} values
 *   List of tokens.
 * @returns {string}
 *   Space-separated tokens.
 */
function stringify(values) {
  return values.join(' ').trim()
}

/**
 * @typedef {import('hast').Nodes} Nodes
 */

// HTML whitespace expression.
// See <https://infra.spec.whatwg.org/#ascii-whitespace>.
const re = /[ \t\n\f\r]/g;

/**
 * Check if the given value is *inter-element whitespace*.
 *
 * @param {Nodes | string} thing
 *   Thing to check (`Node` or `string`).
 * @returns {boolean}
 *   Whether the `value` is inter-element whitespace (`boolean`): consisting of
 *   zero or more of space, tab (`\t`), line feed (`\n`), carriage return
 *   (`\r`), or form feed (`\f`); if a node is passed it must be a `Text` node,
 *   whose `value` field is checked.
 */
function whitespace(thing) {
  return typeof thing === 'object'
    ? thing.type === 'text'
      ? empty(thing.value)
      : false
    : empty(thing)
}

/**
 * @param {string} value
 * @returns {boolean}
 */
function empty(value) {
  return value.replace(re, '') === ''
}

/**
 * @typedef {import('hast').Parents} Parents
 * @typedef {import('hast').RootContent} RootContent
 */


const siblingAfter = siblings(1);
const siblingBefore = siblings(-1);

/** @type {Array<RootContent>} */
const emptyChildren$1 = [];

/**
 * Factory to check siblings in a direction.
 *
 * @param {number} increment
 */
function siblings(increment) {
  return sibling

  /**
   * Find applicable siblings in a direction.
   *
   * @template {Parents} Parent
   *   Parent type.
   * @param {Parent | undefined} parent
   *   Parent.
   * @param {number | undefined} index
   *   Index of child in `parent`.
   * @param {boolean | undefined} [includeWhitespace=false]
   *   Whether to include whitespace (default: `false`).
   * @returns {Parent extends {children: Array<infer Child>} ? Child | undefined : never}
   *   Child of parent.
   */
  function sibling(parent, index, includeWhitespace) {
    const siblings = parent ? parent.children : emptyChildren$1;
    let offset = (index || 0) + increment;
    let next = siblings[offset];

    if (!includeWhitespace) {
      while (next && whitespace(next)) {
        offset += increment;
        next = siblings[offset];
      }
    }

    // @ts-expect-error: it’s a correct child.
    return next
  }
}

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Parents} Parents
 */

/**
 * @callback OmitHandle
 *   Check if a tag can be omitted.
 * @param {Element} element
 *   Element to check.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether to omit a tag.
 *
 */

const own = {}.hasOwnProperty;

/**
 * Factory to check if a given node can have a tag omitted.
 *
 * @param {Record<string, OmitHandle>} handlers
 *   Omission handlers, where each key is a tag name, and each value is the
 *   corresponding handler.
 * @returns {OmitHandle}
 *   Whether to omit a tag of an element.
 */
function omission(handlers) {
  return omit

  /**
   * Check if a given node can have a tag omitted.
   *
   * @type {OmitHandle}
   */
  function omit(node, index, parent) {
    return (
      own.call(handlers, node.tagName) &&
      handlers[node.tagName](node, index, parent)
    )
  }
}

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Parents} Parents
 */


const closing = omission({
  body: body$1,
  caption: headOrColgroupOrCaption,
  colgroup: headOrColgroupOrCaption,
  dd,
  dt,
  head: headOrColgroupOrCaption,
  html: html$1,
  li,
  optgroup,
  option,
  p,
  rp: rubyElement,
  rt: rubyElement,
  tbody: tbody$1,
  td: cells,
  tfoot,
  th: cells,
  thead,
  tr
});

/**
 * Macro for `</head>`, `</colgroup>`, and `</caption>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */
function headOrColgroupOrCaption(_, index, parent) {
  const next = siblingAfter(parent, index, true);
  return (
    !next ||
    (next.type !== 'comment' &&
      !(next.type === 'text' && whitespace(next.value.charAt(0))))
  )
}

/**
 * Whether to omit `</html>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */
function html$1(_, index, parent) {
  const next = siblingAfter(parent, index);
  return !next || next.type !== 'comment'
}

/**
 * Whether to omit `</body>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */
function body$1(_, index, parent) {
  const next = siblingAfter(parent, index);
  return !next || next.type !== 'comment'
}

/**
 * Whether to omit `</p>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */
function p(_, index, parent) {
  const next = siblingAfter(parent, index);
  return next
    ? next.type === 'element' &&
        (next.tagName === 'address' ||
          next.tagName === 'article' ||
          next.tagName === 'aside' ||
          next.tagName === 'blockquote' ||
          next.tagName === 'details' ||
          next.tagName === 'div' ||
          next.tagName === 'dl' ||
          next.tagName === 'fieldset' ||
          next.tagName === 'figcaption' ||
          next.tagName === 'figure' ||
          next.tagName === 'footer' ||
          next.tagName === 'form' ||
          next.tagName === 'h1' ||
          next.tagName === 'h2' ||
          next.tagName === 'h3' ||
          next.tagName === 'h4' ||
          next.tagName === 'h5' ||
          next.tagName === 'h6' ||
          next.tagName === 'header' ||
          next.tagName === 'hgroup' ||
          next.tagName === 'hr' ||
          next.tagName === 'main' ||
          next.tagName === 'menu' ||
          next.tagName === 'nav' ||
          next.tagName === 'ol' ||
          next.tagName === 'p' ||
          next.tagName === 'pre' ||
          next.tagName === 'section' ||
          next.tagName === 'table' ||
          next.tagName === 'ul')
    : !parent ||
        // Confusing parent.
        !(
          parent.type === 'element' &&
          (parent.tagName === 'a' ||
            parent.tagName === 'audio' ||
            parent.tagName === 'del' ||
            parent.tagName === 'ins' ||
            parent.tagName === 'map' ||
            parent.tagName === 'noscript' ||
            parent.tagName === 'video')
        )
}

/**
 * Whether to omit `</li>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */
function li(_, index, parent) {
  const next = siblingAfter(parent, index);
  return !next || (next.type === 'element' && next.tagName === 'li')
}

/**
 * Whether to omit `</dt>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */
function dt(_, index, parent) {
  const next = siblingAfter(parent, index);
  return Boolean(
    next &&
      next.type === 'element' &&
      (next.tagName === 'dt' || next.tagName === 'dd')
  )
}

/**
 * Whether to omit `</dd>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */
function dd(_, index, parent) {
  const next = siblingAfter(parent, index);
  return (
    !next ||
    (next.type === 'element' &&
      (next.tagName === 'dt' || next.tagName === 'dd'))
  )
}

/**
 * Whether to omit `</rt>` or `</rp>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */
function rubyElement(_, index, parent) {
  const next = siblingAfter(parent, index);
  return (
    !next ||
    (next.type === 'element' &&
      (next.tagName === 'rp' || next.tagName === 'rt'))
  )
}

/**
 * Whether to omit `</optgroup>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */
function optgroup(_, index, parent) {
  const next = siblingAfter(parent, index);
  return !next || (next.type === 'element' && next.tagName === 'optgroup')
}

/**
 * Whether to omit `</option>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */
function option(_, index, parent) {
  const next = siblingAfter(parent, index);
  return (
    !next ||
    (next.type === 'element' &&
      (next.tagName === 'option' || next.tagName === 'optgroup'))
  )
}

/**
 * Whether to omit `</thead>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */
function thead(_, index, parent) {
  const next = siblingAfter(parent, index);
  return Boolean(
    next &&
      next.type === 'element' &&
      (next.tagName === 'tbody' || next.tagName === 'tfoot')
  )
}

/**
 * Whether to omit `</tbody>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */
function tbody$1(_, index, parent) {
  const next = siblingAfter(parent, index);
  return (
    !next ||
    (next.type === 'element' &&
      (next.tagName === 'tbody' || next.tagName === 'tfoot'))
  )
}

/**
 * Whether to omit `</tfoot>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */
function tfoot(_, index, parent) {
  return !siblingAfter(parent, index)
}

/**
 * Whether to omit `</tr>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */
function tr(_, index, parent) {
  const next = siblingAfter(parent, index);
  return !next || (next.type === 'element' && next.tagName === 'tr')
}

/**
 * Whether to omit `</td>` or `</th>`.
 *
 * @param {Element} _
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the closing tag can be omitted.
 */
function cells(_, index, parent) {
  const next = siblingAfter(parent, index);
  return (
    !next ||
    (next.type === 'element' &&
      (next.tagName === 'td' || next.tagName === 'th'))
  )
}

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Parents} Parents
 */


const opening = omission({
  body,
  colgroup,
  head,
  html,
  tbody
});

/**
 * Whether to omit `<html>`.
 *
 * @param {Element} node
 *   Element.
 * @returns {boolean}
 *   Whether the opening tag can be omitted.
 */
function html(node) {
  const head = siblingAfter(node, -1);
  return !head || head.type !== 'comment'
}

/**
 * Whether to omit `<head>`.
 *
 * @param {Element} node
 *   Element.
 * @returns {boolean}
 *   Whether the opening tag can be omitted.
 */
function head(node) {
  const children = node.children;
  /** @type {Array<string>} */
  const seen = [];
  let index = -1;

  while (++index < children.length) {
    const child = children[index];
    if (
      child.type === 'element' &&
      (child.tagName === 'title' || child.tagName === 'base')
    ) {
      if (seen.includes(child.tagName)) return false
      seen.push(child.tagName);
    }
  }

  return children.length > 0
}

/**
 * Whether to omit `<body>`.
 *
 * @param {Element} node
 *   Element.
 * @returns {boolean}
 *   Whether the opening tag can be omitted.
 */
function body(node) {
  const head = siblingAfter(node, -1, true);

  return (
    !head ||
    (head.type !== 'comment' &&
      !(head.type === 'text' && whitespace(head.value.charAt(0))) &&
      !(
        head.type === 'element' &&
        (head.tagName === 'meta' ||
          head.tagName === 'link' ||
          head.tagName === 'script' ||
          head.tagName === 'style' ||
          head.tagName === 'template')
      ))
  )
}

/**
 * Whether to omit `<colgroup>`.
 * The spec describes some logic for the opening tag, but it’s easier to
 * implement in the closing tag, to the same effect, so we handle it there
 * instead.
 *
 * @param {Element} node
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the opening tag can be omitted.
 */
function colgroup(node, index, parent) {
  const previous = siblingBefore(parent, index);
  const head = siblingAfter(node, -1, true);

  // Previous colgroup was already omitted.
  if (
    parent &&
    previous &&
    previous.type === 'element' &&
    previous.tagName === 'colgroup' &&
    closing(previous, parent.children.indexOf(previous), parent)
  ) {
    return false
  }

  return Boolean(head && head.type === 'element' && head.tagName === 'col')
}

/**
 * Whether to omit `<tbody>`.
 *
 * @param {Element} node
 *   Element.
 * @param {number | undefined} index
 *   Index of element in parent.
 * @param {Parents | undefined} parent
 *   Parent of element.
 * @returns {boolean}
 *   Whether the opening tag can be omitted.
 */
function tbody(node, index, parent) {
  const previous = siblingBefore(parent, index);
  const head = siblingAfter(node, -1);

  // Previous table section was already omitted.
  if (
    parent &&
    previous &&
    previous.type === 'element' &&
    (previous.tagName === 'thead' || previous.tagName === 'tbody') &&
    closing(previous, parent.children.indexOf(previous), parent)
  ) {
    return false
  }

  return Boolean(head && head.type === 'element' && head.tagName === 'tr')
}

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Parents} Parents
 * @typedef {import('hast').Properties} Properties
 *
 * @typedef {import('../index.js').State} State
 */


/**
 * Maps of subsets.
 *
 * Each value is a matrix of tuples.
 * The value at `0` causes parse errors, the value at `1` is valid.
 * Of both, the value at `0` is unsafe, and the value at `1` is safe.
 *
 * @type {Record<'double' | 'name' | 'single' | 'unquoted', Array<[Array<string>, Array<string>]>>}
 */
const constants = {
  // See: <https://html.spec.whatwg.org/#attribute-name-state>.
  name: [
    ['\t\n\f\r &/=>'.split(''), '\t\n\f\r "&\'/=>`'.split('')],
    ['\0\t\n\f\r "&\'/<=>'.split(''), '\0\t\n\f\r "&\'/<=>`'.split('')]
  ],
  // See: <https://html.spec.whatwg.org/#attribute-value-(unquoted)-state>.
  unquoted: [
    ['\t\n\f\r &>'.split(''), '\0\t\n\f\r "&\'<=>`'.split('')],
    ['\0\t\n\f\r "&\'<=>`'.split(''), '\0\t\n\f\r "&\'<=>`'.split('')]
  ],
  // See: <https://html.spec.whatwg.org/#attribute-value-(single-quoted)-state>.
  single: [
    ["&'".split(''), '"&\'`'.split('')],
    ["\0&'".split(''), '\0"&\'`'.split('')]
  ],
  // See: <https://html.spec.whatwg.org/#attribute-value-(double-quoted)-state>.
  double: [
    ['"&'.split(''), '"&\'`'.split('')],
    ['\0"&'.split(''), '\0"&\'`'.split('')]
  ]
};

/**
 * Serialize an element node.
 *
 * @param {Element} node
 *   Node to handle.
 * @param {number | undefined} index
 *   Index of `node` in `parent.
 * @param {Parents | undefined} parent
 *   Parent of `node`.
 * @param {State} state
 *   Info passed around about the current state.
 * @returns {string}
 *   Serialized node.
 */
function element(node, index, parent, state) {
  const schema = state.schema;
  const omit = schema.space === 'svg' ? false : state.settings.omitOptionalTags;
  let selfClosing =
    schema.space === 'svg'
      ? state.settings.closeEmptyElements
      : state.settings.voids.includes(node.tagName.toLowerCase());
  /** @type {Array<string>} */
  const parts = [];
  /** @type {string} */
  let last;

  if (schema.space === 'html' && node.tagName === 'svg') {
    state.schema = svg;
  }

  const attributes = serializeAttributes(state, node.properties);

  const content = state.all(
    schema.space === 'html' && node.tagName === 'template' ? node.content : node
  );

  state.schema = schema;

  // If the node is categorised as void, but it has children, remove the
  // categorisation.
  // This enables for example `menuitem`s, which are void in W3C HTML but not
  // void in WHATWG HTML, to be stringified properly.
  // Note: `menuitem` has since been removed from the HTML spec, and so is no
  // longer void.
  if (content) selfClosing = false;

  if (attributes || !omit || !opening(node, index, parent)) {
    parts.push('<', node.tagName, attributes ? ' ' + attributes : '');

    if (
      selfClosing &&
      (schema.space === 'svg' || state.settings.closeSelfClosing)
    ) {
      last = attributes.charAt(attributes.length - 1);
      if (
        !state.settings.tightSelfClosing ||
        last === '/' ||
        (last && last !== '"' && last !== "'")
      ) {
        parts.push(' ');
      }

      parts.push('/');
    }

    parts.push('>');
  }

  parts.push(content);

  if (!selfClosing && (!omit || !closing(node, index, parent))) {
    parts.push('</' + node.tagName + '>');
  }

  return parts.join('')
}

/**
 * @param {State} state
 * @param {Properties | null | undefined} properties
 * @returns {string}
 */
function serializeAttributes(state, properties) {
  /** @type {Array<string>} */
  const values = [];
  let index = -1;
  /** @type {string} */
  let key;

  if (properties) {
    for (key in properties) {
      if (properties[key] !== null && properties[key] !== undefined) {
        const value = serializeAttribute(state, key, properties[key]);
        if (value) values.push(value);
      }
    }
  }

  while (++index < values.length) {
    const last = state.settings.tightAttributes
      ? values[index].charAt(values[index].length - 1)
      : undefined;

    // In tight mode, don’t add a space after quoted attributes.
    if (index !== values.length - 1 && last !== '"' && last !== "'") {
      values[index] += ' ';
    }
  }

  return values.join('')
}

/**
 * @param {State} state
 * @param {string} key
 * @param {Properties[keyof Properties]} value
 * @returns {string}
 */
function serializeAttribute(state, key, value) {
  const info = find(state.schema, key);
  const x =
    state.settings.allowParseErrors && state.schema.space === 'html' ? 0 : 1;
  const y = state.settings.allowDangerousCharacters ? 0 : 1;
  let quote = state.quote;
  /** @type {string | undefined} */
  let result;

  if (info.overloadedBoolean && (value === info.attribute || value === '')) {
    value = true;
  } else if (
    info.boolean ||
    (info.overloadedBoolean && typeof value !== 'string')
  ) {
    value = Boolean(value);
  }

  if (
    value === null ||
    value === undefined ||
    value === false ||
    (typeof value === 'number' && Number.isNaN(value))
  ) {
    return ''
  }

  const name = stringifyEntities(
    info.attribute,
    Object.assign({}, state.settings.characterReferences, {
      // Always encode without parse errors in non-HTML.
      subset: constants.name[x][y]
    })
  );

  // No value.
  // There is currently only one boolean property in SVG: `[download]` on
  // `<a>`.
  // This property does not seem to work in browsers (Firefox, Safari, Chrome),
  // so I can’t test if dropping the value works.
  // But I assume that it should:
  //
  // ```html
  // <!doctype html>
  // <svg viewBox="0 0 100 100">
  //   <a href=https://example.com download>
  //     <circle cx=50 cy=40 r=35 />
  //   </a>
  // </svg>
  // ```
  //
  // See: <https://github.com/wooorm/property-information/blob/main/lib/svg.js>
  if (value === true) return name

  // `spaces` doesn’t accept a second argument, but it’s given here just to
  // keep the code cleaner.
  value = Array.isArray(value)
    ? (info.commaSeparated ? stringify$1 : stringify)(value, {
        padLeft: !state.settings.tightCommaSeparatedLists
      })
    : String(value);

  if (state.settings.collapseEmptyAttributes && !value) return name

  // Check unquoted value.
  if (state.settings.preferUnquoted) {
    result = stringifyEntities(
      value,
      Object.assign({}, state.settings.characterReferences, {
        attribute: true,
        subset: constants.unquoted[x][y]
      })
    );
  }

  // If we don’t want unquoted, or if `value` contains character references when
  // unquoted…
  if (result !== value) {
    // If the alternative is less common than `quote`, switch.
    if (
      state.settings.quoteSmart &&
      ccount(value, quote) > ccount(value, state.alternative)
    ) {
      quote = state.alternative;
    }

    result =
      quote +
      stringifyEntities(
        value,
        Object.assign({}, state.settings.characterReferences, {
          // Always encode without parse errors in non-HTML.
          subset: (quote === "'" ? constants.single : constants.double)[x][y],
          attribute: true
        })
      ) +
      quote;
  }

  // Don’t add a `=` for unquoted empties.
  return name + (result ? '=' + result : result)
}

/**
 * @typedef {import('hast').Parents} Parents
 * @typedef {import('hast').Text} Text
 *
 * @typedef {import('mdast-util-to-hast').Raw} Raw
 *
 * @typedef {import('../index.js').State} State
 */


// Declare array as variable so it can be cached by `stringifyEntities`
const textEntitySubset = ['<', '&'];

/**
 * Serialize a text node.
 *
 * @param {Raw | Text} node
 *   Node to handle.
 * @param {number | undefined} _
 *   Index of `node` in `parent.
 * @param {Parents | undefined} parent
 *   Parent of `node`.
 * @param {State} state
 *   Info passed around about the current state.
 * @returns {string}
 *   Serialized node.
 */
function text(node, _, parent, state) {
  // Check if content of `node` should be escaped.
  return parent &&
    parent.type === 'element' &&
    (parent.tagName === 'script' || parent.tagName === 'style')
    ? node.value
    : stringifyEntities(
        node.value,
        Object.assign({}, state.settings.characterReferences, {
          subset: textEntitySubset
        })
      )
}

/**
 * @typedef {import('hast').Parents} Parents
 *
 * @typedef {import('mdast-util-to-hast').Raw} Raw
 *
 * @typedef {import('../index.js').State} State
 */


/**
 * Serialize a raw node.
 *
 * @param {Raw} node
 *   Node to handle.
 * @param {number | undefined} index
 *   Index of `node` in `parent.
 * @param {Parents | undefined} parent
 *   Parent of `node`.
 * @param {State} state
 *   Info passed around about the current state.
 * @returns {string}
 *   Serialized node.
 */
function raw(node, index, parent, state) {
  return state.settings.allowDangerousHtml
    ? node.value
    : text(node, index, parent, state)
}

/**
 * @typedef {import('hast').Parents} Parents
 * @typedef {import('hast').Root} Root
 *
 * @typedef {import('../index.js').State} State
 */


/**
 * Serialize a root.
 *
 * @param {Root} node
 *   Node to handle.
 * @param {number | undefined} _1
 *   Index of `node` in `parent.
 * @param {Parents | undefined} _2
 *   Parent of `node`.
 * @param {State} state
 *   Info passed around about the current state.
 * @returns {string}
 *   Serialized node.
 */
function root(node, _1, _2, state) {
  return state.all(node)
}

/**
 * @typedef {import('hast').Nodes} Nodes
 * @typedef {import('hast').Parents} Parents
 *
 * @typedef {import('../index.js').State} State
 */


/**
 * @type {(node: Nodes, index: number | undefined, parent: Parents | undefined, state: State) => string}
 */
const handle = zwitch('type', {
  invalid,
  unknown,
  handlers: {comment, doctype, element, raw, root, text}
});

/**
 * Fail when a non-node is found in the tree.
 *
 * @param {unknown} node
 *   Unknown value.
 * @returns {never}
 *   Never.
 */
function invalid(node) {
  throw new Error('Expected node, not `' + node + '`')
}

/**
 * Fail when a node with an unknown type is found in the tree.
 *
 * @param {unknown} node_
 *  Unknown node.
 * @returns {never}
 *   Never.
 */
function unknown(node_) {
  // `type` is guaranteed by runtime JS.
  const node = /** @type {Nodes} */ (node_);
  throw new Error('Cannot compile unknown node `' + node.type + '`')
}

/**
 * @typedef {import('hast').Nodes} Nodes
 * @typedef {import('hast').Parents} Parents
 * @typedef {import('hast').RootContent} RootContent
 *
 * @typedef {import('property-information').Schema} Schema
 *
 * @typedef {import('stringify-entities').Options} StringifyEntitiesOptions
 */


/** @type {Options} */
const emptyOptions = {};

/** @type {CharacterReferences} */
const emptyCharacterReferences = {};

/** @type {Array<never>} */
const emptyChildren = [];

/**
 * Serialize hast as HTML.
 *
 * @param {Array<RootContent> | Nodes} tree
 *   Tree to serialize.
 * @param {Options | null | undefined} [options]
 *   Configuration (optional).
 * @returns {string}
 *   Serialized HTML.
 */
function toHtml(tree, options) {
  const options_ = emptyOptions;
  const quote = options_.quote || '"';
  const alternative = quote === '"' ? "'" : '"';

  if (quote !== '"' && quote !== "'") {
    throw new Error('Invalid quote `' + quote + '`, expected `\'` or `"`')
  }

  /** @type {State} */
  const state = {
    one,
    all,
    settings: {
      omitOptionalTags: options_.omitOptionalTags || false,
      allowParseErrors: options_.allowParseErrors || false,
      allowDangerousCharacters: options_.allowDangerousCharacters || false,
      quoteSmart: options_.quoteSmart || false,
      preferUnquoted: options_.preferUnquoted || false,
      tightAttributes: options_.tightAttributes || false,
      upperDoctype: options_.upperDoctype || false,
      tightDoctype: options_.tightDoctype || false,
      bogusComments: options_.bogusComments || false,
      tightCommaSeparatedLists: options_.tightCommaSeparatedLists || false,
      tightSelfClosing: options_.tightSelfClosing || false,
      collapseEmptyAttributes: options_.collapseEmptyAttributes || false,
      allowDangerousHtml: options_.allowDangerousHtml || false,
      voids: options_.voids || htmlVoidElements,
      characterReferences:
        options_.characterReferences || emptyCharacterReferences,
      closeSelfClosing: options_.closeSelfClosing || false,
      closeEmptyElements: options_.closeEmptyElements || false
    },
    schema: options_.space === 'svg' ? svg : html$2,
    quote,
    alternative
  };

  return state.one(
    Array.isArray(tree) ? {type: 'root', children: tree} : tree,
    undefined,
    undefined
  )
}

/**
 * Serialize a node.
 *
 * @this {State}
 *   Info passed around about the current state.
 * @param {Nodes} node
 *   Node to handle.
 * @param {number | undefined} index
 *   Index of `node` in `parent.
 * @param {Parents | undefined} parent
 *   Parent of `node`.
 * @returns {string}
 *   Serialized node.
 */
function one(node, index, parent) {
  return handle(node, index, parent, this)
}

/**
 * Serialize all children of `parent`.
 *
 * @this {State}
 *   Info passed around about the current state.
 * @param {Parents | undefined} parent
 *   Parent whose children to serialize.
 * @returns {string}
 */
function all(parent) {
  /** @type {Array<string>} */
  const results = [];
  const children = (parent && parent.children) || emptyChildren;
  let index = -1;

  while (++index < children.length) {
    results[index] = this.one(children[index], index, parent);
  }

  return results.join('')
}

/**
 * Get highlighted code in HTML.
 */
function codeToHtml$2(internal, code, options) {
    const context = {
        meta: {},
        options,
        codeToHast: (_code, _options) => codeToHast$1(internal, _code, _options),
        codeToTokens: (_code, _options) => codeToTokens$1(internal, _code, _options),
    };
    let result = toHtml(codeToHast$1(internal, code, options, context));
    for (const transformer of getTransformers(options))
        result = transformer.postprocess?.call(context, result, options) || result;
    return result;
}

async function main(init) {
    let wasmMemory;
    let buffer;
    const binding = {};
    function updateGlobalBufferAndViews(buf) {
        buffer = buf;
        binding.HEAPU8 = new Uint8Array(buf);
        binding.HEAPU32 = new Uint32Array(buf);
    }
    function _emscripten_get_now() {
        return typeof performance !== 'undefined' ? performance.now() : Date.now();
    }
    function _emscripten_memcpy_big(dest, src, num) {
        binding.HEAPU8.copyWithin(dest, src, src + num);
    }
    function getHeapMax() {
        return 2147483648;
    }
    function emscripten_realloc_buffer(size) {
        try {
            wasmMemory.grow((size - buffer.byteLength + 65535) >>> 16);
            updateGlobalBufferAndViews(wasmMemory.buffer);
            return 1;
        }
        catch { }
    }
    function _emscripten_resize_heap(requestedSize) {
        const oldSize = binding.HEAPU8.length;
        requestedSize = requestedSize >>> 0;
        const maxHeapSize = getHeapMax();
        if (requestedSize > maxHeapSize)
            return false;
        const alignUp = (x, multiple) => x + ((multiple - (x % multiple)) % multiple);
        for (let cutDown = 1; cutDown <= 4; cutDown *= 2) {
            let overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
            overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
            const newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
            const replacement = emscripten_realloc_buffer(newSize);
            if (replacement)
                return true;
        }
        return false;
    }
    const UTF8Decoder = typeof TextDecoder != 'undefined' ? new TextDecoder('utf8') : undefined;
    function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead = 1024) {
        const endIdx = idx + maxBytesToRead;
        let endPtr = idx;
        while (heapOrArray[endPtr] && !(endPtr >= endIdx))
            ++endPtr;
        if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
            return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
        }
        let str = '';
        while (idx < endPtr) {
            let u0 = heapOrArray[idx++];
            if (!(u0 & 128)) {
                str += String.fromCharCode(u0);
                continue;
            }
            const u1 = heapOrArray[idx++] & 63;
            if ((u0 & 224) === 192) {
                str += String.fromCharCode(((u0 & 31) << 6) | u1);
                continue;
            }
            const u2 = heapOrArray[idx++] & 63;
            if ((u0 & 240) === 224) {
                u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
            }
            else {
                u0 = ((u0 & 7) << 18)
                    | (u1 << 12)
                    | (u2 << 6)
                    | (heapOrArray[idx++] & 63);
            }
            if (u0 < 65536) {
                str += String.fromCharCode(u0);
            }
            else {
                const ch = u0 - 65536;
                str += String.fromCharCode(55296 | (ch >> 10), 56320 | (ch & 1023));
            }
        }
        return str;
    }
    function UTF8ToString(ptr, maxBytesToRead) {
        return ptr ? UTF8ArrayToString(binding.HEAPU8, ptr, maxBytesToRead) : '';
    }
    const asmLibraryArg = {
        emscripten_get_now: _emscripten_get_now,
        emscripten_memcpy_big: _emscripten_memcpy_big,
        emscripten_resize_heap: _emscripten_resize_heap,
        fd_write: () => 0,
    };
    async function createWasm() {
        const info = {
            env: asmLibraryArg,
            wasi_snapshot_preview1: asmLibraryArg,
        };
        const exports = await init(info);
        wasmMemory = exports.memory;
        updateGlobalBufferAndViews(wasmMemory.buffer);
        Object.assign(binding, exports);
        binding.UTF8ToString = UTF8ToString;
    }
    await createWasm();
    return binding;
}

/* ---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *-------------------------------------------------------- */
let onigBinding = null;
let defaultDebugCall = false;
function throwLastOnigError(onigBinding) {
    throw new ShikiError(onigBinding.UTF8ToString(onigBinding.getLastOnigError()));
}
class UtfString {
    static _utf8ByteLength(str) {
        let result = 0;
        for (let i = 0, len = str.length; i < len; i++) {
            const charCode = str.charCodeAt(i);
            let codepoint = charCode;
            let wasSurrogatePair = false;
            if (charCode >= 0xD800 && charCode <= 0xDBFF) {
                // Hit a high surrogate, try to look for a matching low surrogate
                if (i + 1 < len) {
                    const nextCharCode = str.charCodeAt(i + 1);
                    if (nextCharCode >= 0xDC00 && nextCharCode <= 0xDFFF) {
                        // Found the matching low surrogate
                        codepoint = (((charCode - 0xD800) << 10) + 0x10000) | (nextCharCode - 0xDC00);
                        wasSurrogatePair = true;
                    }
                }
            }
            if (codepoint <= 0x7F)
                result += 1;
            else if (codepoint <= 0x7FF)
                result += 2;
            else if (codepoint <= 0xFFFF)
                result += 3;
            else
                result += 4;
            if (wasSurrogatePair)
                i++;
        }
        return result;
    }
    utf16Length;
    utf8Length;
    utf16Value;
    utf8Value;
    utf16OffsetToUtf8;
    utf8OffsetToUtf16;
    constructor(str) {
        const utf16Length = str.length;
        const utf8Length = UtfString._utf8ByteLength(str);
        const computeIndicesMapping = (utf8Length !== utf16Length);
        const utf16OffsetToUtf8 = computeIndicesMapping ? new Uint32Array(utf16Length + 1) : null;
        if (computeIndicesMapping)
            utf16OffsetToUtf8[utf16Length] = utf8Length;
        const utf8OffsetToUtf16 = computeIndicesMapping ? new Uint32Array(utf8Length + 1) : null;
        if (computeIndicesMapping)
            utf8OffsetToUtf16[utf8Length] = utf16Length;
        const utf8Value = new Uint8Array(utf8Length);
        let i8 = 0;
        for (let i16 = 0; i16 < utf16Length; i16++) {
            const charCode = str.charCodeAt(i16);
            let codePoint = charCode;
            let wasSurrogatePair = false;
            if (charCode >= 0xD800 && charCode <= 0xDBFF) {
                // Hit a high surrogate, try to look for a matching low surrogate
                if (i16 + 1 < utf16Length) {
                    const nextCharCode = str.charCodeAt(i16 + 1);
                    if (nextCharCode >= 0xDC00 && nextCharCode <= 0xDFFF) {
                        // Found the matching low surrogate
                        codePoint = (((charCode - 0xD800) << 10) + 0x10000) | (nextCharCode - 0xDC00);
                        wasSurrogatePair = true;
                    }
                }
            }
            if (computeIndicesMapping) {
                utf16OffsetToUtf8[i16] = i8;
                if (wasSurrogatePair)
                    utf16OffsetToUtf8[i16 + 1] = i8;
                if (codePoint <= 0x7F) {
                    utf8OffsetToUtf16[i8 + 0] = i16;
                }
                else if (codePoint <= 0x7FF) {
                    utf8OffsetToUtf16[i8 + 0] = i16;
                    utf8OffsetToUtf16[i8 + 1] = i16;
                }
                else if (codePoint <= 0xFFFF) {
                    utf8OffsetToUtf16[i8 + 0] = i16;
                    utf8OffsetToUtf16[i8 + 1] = i16;
                    utf8OffsetToUtf16[i8 + 2] = i16;
                }
                else {
                    utf8OffsetToUtf16[i8 + 0] = i16;
                    utf8OffsetToUtf16[i8 + 1] = i16;
                    utf8OffsetToUtf16[i8 + 2] = i16;
                    utf8OffsetToUtf16[i8 + 3] = i16;
                }
            }
            if (codePoint <= 0x7F) {
                utf8Value[i8++] = codePoint;
            }
            else if (codePoint <= 0x7FF) {
                utf8Value[i8++] = 0b11000000 | ((codePoint & 0b00000000000000000000011111000000) >>> 6);
                utf8Value[i8++] = 0b10000000 | ((codePoint & 0b00000000000000000000000000111111) >>> 0);
            }
            else if (codePoint <= 0xFFFF) {
                utf8Value[i8++] = 0b11100000 | ((codePoint & 0b00000000000000001111000000000000) >>> 12);
                utf8Value[i8++] = 0b10000000 | ((codePoint & 0b00000000000000000000111111000000) >>> 6);
                utf8Value[i8++] = 0b10000000 | ((codePoint & 0b00000000000000000000000000111111) >>> 0);
            }
            else {
                utf8Value[i8++] = 0b11110000 | ((codePoint & 0b00000000000111000000000000000000) >>> 18);
                utf8Value[i8++] = 0b10000000 | ((codePoint & 0b00000000000000111111000000000000) >>> 12);
                utf8Value[i8++] = 0b10000000 | ((codePoint & 0b00000000000000000000111111000000) >>> 6);
                utf8Value[i8++] = 0b10000000 | ((codePoint & 0b00000000000000000000000000111111) >>> 0);
            }
            if (wasSurrogatePair)
                i16++;
        }
        this.utf16Length = utf16Length;
        this.utf8Length = utf8Length;
        this.utf16Value = str;
        this.utf8Value = utf8Value;
        this.utf16OffsetToUtf8 = utf16OffsetToUtf8;
        this.utf8OffsetToUtf16 = utf8OffsetToUtf16;
    }
    createString(onigBinding) {
        const result = onigBinding.omalloc(this.utf8Length);
        onigBinding.HEAPU8.set(this.utf8Value, result);
        return result;
    }
}
class OnigString {
    static LAST_ID = 0;
    static _sharedPtr = 0; // a pointer to a string of 10000 bytes
    static _sharedPtrInUse = false;
    id = (++OnigString.LAST_ID);
    _onigBinding;
    content;
    utf16Length;
    utf8Length;
    utf16OffsetToUtf8;
    utf8OffsetToUtf16;
    ptr;
    constructor(str) {
        if (!onigBinding)
            throw new ShikiError('Must invoke loadWasm first.');
        this._onigBinding = onigBinding;
        this.content = str;
        const utfString = new UtfString(str);
        this.utf16Length = utfString.utf16Length;
        this.utf8Length = utfString.utf8Length;
        this.utf16OffsetToUtf8 = utfString.utf16OffsetToUtf8;
        this.utf8OffsetToUtf16 = utfString.utf8OffsetToUtf16;
        if (this.utf8Length < 10000 && !OnigString._sharedPtrInUse) {
            if (!OnigString._sharedPtr)
                OnigString._sharedPtr = onigBinding.omalloc(10000);
            OnigString._sharedPtrInUse = true;
            onigBinding.HEAPU8.set(utfString.utf8Value, OnigString._sharedPtr);
            this.ptr = OnigString._sharedPtr;
        }
        else {
            this.ptr = utfString.createString(onigBinding);
        }
    }
    convertUtf8OffsetToUtf16(utf8Offset) {
        if (this.utf8OffsetToUtf16) {
            if (utf8Offset < 0)
                return 0;
            if (utf8Offset > this.utf8Length)
                return this.utf16Length;
            return this.utf8OffsetToUtf16[utf8Offset];
        }
        return utf8Offset;
    }
    convertUtf16OffsetToUtf8(utf16Offset) {
        if (this.utf16OffsetToUtf8) {
            if (utf16Offset < 0)
                return 0;
            if (utf16Offset > this.utf16Length)
                return this.utf8Length;
            return this.utf16OffsetToUtf8[utf16Offset];
        }
        return utf16Offset;
    }
    dispose() {
        if (this.ptr === OnigString._sharedPtr)
            OnigString._sharedPtrInUse = false;
        else
            this._onigBinding.ofree(this.ptr);
    }
}
class OnigScanner {
    _onigBinding;
    _ptr;
    constructor(patterns) {
        if (!onigBinding)
            throw new ShikiError('Must invoke loadWasm first.');
        const strPtrsArr = [];
        const strLenArr = [];
        for (let i = 0, len = patterns.length; i < len; i++) {
            const utfString = new UtfString(patterns[i]);
            strPtrsArr[i] = utfString.createString(onigBinding);
            strLenArr[i] = utfString.utf8Length;
        }
        const strPtrsPtr = onigBinding.omalloc(4 * patterns.length);
        onigBinding.HEAPU32.set(strPtrsArr, strPtrsPtr / 4);
        const strLenPtr = onigBinding.omalloc(4 * patterns.length);
        onigBinding.HEAPU32.set(strLenArr, strLenPtr / 4);
        const scannerPtr = onigBinding.createOnigScanner(strPtrsPtr, strLenPtr, patterns.length);
        for (let i = 0, len = patterns.length; i < len; i++)
            onigBinding.ofree(strPtrsArr[i]);
        onigBinding.ofree(strLenPtr);
        onigBinding.ofree(strPtrsPtr);
        if (scannerPtr === 0)
            throwLastOnigError(onigBinding);
        this._onigBinding = onigBinding;
        this._ptr = scannerPtr;
    }
    dispose() {
        this._onigBinding.freeOnigScanner(this._ptr);
    }
    findNextMatchSync(string, startPosition, arg) {
        let debugCall = defaultDebugCall;
        let options = 0 /* FindOption.None */;
        if (typeof arg === 'number') {
            if (arg & 8 /* FindOption.DebugCall */)
                debugCall = true;
            options = arg;
        }
        else if (typeof arg === 'boolean') {
            debugCall = arg;
        }
        if (typeof string === 'string') {
            string = new OnigString(string);
            const result = this._findNextMatchSync(string, startPosition, debugCall, options);
            string.dispose();
            return result;
        }
        return this._findNextMatchSync(string, startPosition, debugCall, options);
    }
    _findNextMatchSync(string, startPosition, debugCall, options) {
        const onigBinding = this._onigBinding;
        let resultPtr;
        if (debugCall)
            resultPtr = onigBinding.findNextOnigScannerMatchDbg(this._ptr, string.id, string.ptr, string.utf8Length, string.convertUtf16OffsetToUtf8(startPosition), options);
        else
            resultPtr = onigBinding.findNextOnigScannerMatch(this._ptr, string.id, string.ptr, string.utf8Length, string.convertUtf16OffsetToUtf8(startPosition), options);
        if (resultPtr === 0) {
            // no match
            return null;
        }
        const HEAPU32 = onigBinding.HEAPU32;
        let offset = resultPtr / 4; // byte offset -> uint32 offset
        const index = HEAPU32[offset++];
        const count = HEAPU32[offset++];
        const captureIndices = [];
        for (let i = 0; i < count; i++) {
            const beg = string.convertUtf8OffsetToUtf16(HEAPU32[offset++]);
            const end = string.convertUtf8OffsetToUtf16(HEAPU32[offset++]);
            captureIndices[i] = {
                start: beg,
                end,
                length: end - beg,
            };
        }
        return {
            index,
            captureIndices,
        };
    }
}
function isInstantiatorOptionsObject(dataOrOptions) {
    return (typeof dataOrOptions.instantiator === 'function');
}
function isInstantiatorModule(dataOrOptions) {
    return (typeof dataOrOptions.default === 'function');
}
function isDataOptionsObject(dataOrOptions) {
    return (typeof dataOrOptions.data !== 'undefined');
}
function isResponse(dataOrOptions) {
    return (typeof Response !== 'undefined' && dataOrOptions instanceof Response);
}
function isArrayBuffer(data) {
    return (typeof ArrayBuffer !== 'undefined' && (data instanceof ArrayBuffer || ArrayBuffer.isView(data)))
        // eslint-disable-next-line node/prefer-global/buffer
        || (typeof Buffer !== 'undefined' && Buffer.isBuffer?.(data))
        || (typeof SharedArrayBuffer !== 'undefined' && data instanceof SharedArrayBuffer)
        || (typeof Uint32Array !== 'undefined' && data instanceof Uint32Array);
}
let initPromise;
function loadWasm(options) {
    if (initPromise)
        return initPromise;
    async function _load() {
        onigBinding = await main(async (info) => {
            let instance = options;
            instance = await instance;
            if (typeof instance === 'function')
                instance = await instance(info);
            if (typeof instance === 'function')
                instance = await instance(info);
            if (isInstantiatorOptionsObject(instance)) {
                instance = await instance.instantiator(info);
            }
            else if (isInstantiatorModule(instance)) {
                instance = await instance.default(info);
            }
            else {
                if (isDataOptionsObject(instance))
                    instance = instance.data;
                if (isResponse(instance)) {
                    if (typeof WebAssembly.instantiateStreaming === 'function')
                        instance = await _makeResponseStreamingLoader(instance)(info);
                    else
                        instance = await _makeResponseNonStreamingLoader(instance)(info);
                }
                else if (isArrayBuffer(instance)) {
                    instance = await _makeArrayBufferLoader(instance)(info);
                }
                // import("shiki/onig.wasm") returns `{ default: WebAssembly.Module }` on cloudflare workers
                // https://developers.cloudflare.com/workers/wrangler/bundling/
                else if (instance instanceof WebAssembly.Module) {
                    instance = await _makeArrayBufferLoader(instance)(info);
                }
                else if ('default' in instance && instance.default instanceof WebAssembly.Module) {
                    instance = await _makeArrayBufferLoader(instance.default)(info);
                }
            }
            if ('instance' in instance)
                instance = instance.instance;
            if ('exports' in instance)
                instance = instance.exports;
            return instance;
        });
    }
    initPromise = _load();
    return initPromise;
}
function _makeArrayBufferLoader(data) {
    return importObject => WebAssembly.instantiate(data, importObject);
}
function _makeResponseStreamingLoader(data) {
    return importObject => WebAssembly.instantiateStreaming(data, importObject);
}
function _makeResponseNonStreamingLoader(data) {
    return async (importObject) => {
        const arrayBuffer = await data.arrayBuffer();
        return WebAssembly.instantiate(arrayBuffer, importObject);
    };
}
function createOnigString(str) {
    return new OnigString(str);
}
function createOnigScanner(patterns) {
    return new OnigScanner(patterns);
}

/**
 * https://github.com/microsoft/vscode/blob/f7f05dee53fb33fe023db2e06e30a89d3094488f/src/vs/platform/theme/common/colorRegistry.ts#L258-L268
 */
const VSCODE_FALLBACK_EDITOR_FG = { light: '#333333', dark: '#bbbbbb' };
const VSCODE_FALLBACK_EDITOR_BG = { light: '#fffffe', dark: '#1e1e1e' };
const RESOLVED_KEY = '__shiki_resolved';
/**
 * Normalize a textmate theme to shiki theme
 */
function normalizeTheme(rawTheme) {
    // @ts-expect-error private field
    if (rawTheme?.[RESOLVED_KEY])
        return rawTheme;
    const theme = {
        ...rawTheme,
    };
    // Fallback settings
    if (theme.tokenColors && !theme.settings) {
        theme.settings = theme.tokenColors;
        delete theme.tokenColors;
    }
    theme.type ||= 'dark';
    theme.colorReplacements = { ...theme.colorReplacements };
    theme.settings ||= [];
    // Guess fg/bg colors
    let { bg, fg } = theme;
    if (!bg || !fg) {
        /**
         * First try:
         * Theme might contain a global `tokenColor` without `name` or `scope`
         * Used as default value for foreground/background
         */
        const globalSetting = theme.settings
            ? theme.settings.find((s) => !s.name && !s.scope)
            : undefined;
        if (globalSetting?.settings?.foreground)
            fg = globalSetting.settings.foreground;
        if (globalSetting?.settings?.background)
            bg = globalSetting.settings.background;
        /**
         * Second try:
         * If there's no global `tokenColor` without `name` or `scope`
         * Use `editor.foreground` and `editor.background`
         */
        if (!fg && theme?.colors?.['editor.foreground'])
            fg = theme.colors['editor.foreground'];
        if (!bg && theme?.colors?.['editor.background'])
            bg = theme.colors['editor.background'];
        /**
         * Last try:
         * If there's no fg/bg color specified in theme, use default
         */
        if (!fg)
            fg = theme.type === 'light' ? VSCODE_FALLBACK_EDITOR_FG.light : VSCODE_FALLBACK_EDITOR_FG.dark;
        if (!bg)
            bg = theme.type === 'light' ? VSCODE_FALLBACK_EDITOR_BG.light : VSCODE_FALLBACK_EDITOR_BG.dark;
        theme.fg = fg;
        theme.bg = bg;
    }
    // Push a no-scope setting with fallback colors
    if (!(theme.settings[0] && theme.settings[0].settings && !theme.settings[0].scope)) {
        theme.settings.unshift({
            settings: {
                foreground: theme.fg,
                background: theme.bg,
            },
        });
    }
    // Push non-hex colors to color replacements, as `vscode-textmate` doesn't support them
    let replacementCount = 0;
    const replacementMap = new Map();
    function getReplacementColor(value) {
        if (replacementMap.has(value))
            return replacementMap.get(value);
        replacementCount += 1;
        const hex = `#${replacementCount.toString(16).padStart(8, '0').toLowerCase()}`;
        if (theme.colorReplacements?.[`#${hex}`]) // already exists
            return getReplacementColor(value);
        replacementMap.set(value, hex);
        return hex;
    }
    theme.settings = theme.settings.map((setting) => {
        const replaceFg = setting.settings?.foreground && !setting.settings.foreground.startsWith('#');
        const replaceBg = setting.settings?.background && !setting.settings.background.startsWith('#');
        if (!replaceFg && !replaceBg)
            return setting;
        const clone = {
            ...setting,
            settings: {
                ...setting.settings,
            },
        };
        if (replaceFg) {
            const replacement = getReplacementColor(setting.settings.foreground);
            theme.colorReplacements[replacement] = setting.settings.foreground;
            clone.settings.foreground = replacement;
        }
        if (replaceBg) {
            const replacement = getReplacementColor(setting.settings.background);
            theme.colorReplacements[replacement] = setting.settings.background;
            clone.settings.background = replacement;
        }
        return clone;
    });
    for (const key of Object.keys(theme.colors || {})) {
        // Only patch for known keys
        if (key === 'editor.foreground' || key === 'editor.background' || key.startsWith('terminal.ansi')) {
            if (!theme.colors[key]?.startsWith('#')) {
                const replacement = getReplacementColor(theme.colors[key]);
                theme.colorReplacements[replacement] = theme.colors[key];
                theme.colors[key] = replacement;
            }
        }
    }
    Object.defineProperty(theme, RESOLVED_KEY, {
        enumerable: false,
        writable: false,
        value: true,
    });
    return theme;
}

class Registry extends Registry$1 {
    _resolver;
    _themes;
    _langs;
    _alias;
    _resolvedThemes = new Map();
    _resolvedGrammars = new Map();
    _langMap = new Map();
    _langGraph = new Map();
    _textmateThemeCache = new WeakMap();
    _loadedThemesCache = null;
    _loadedLanguagesCache = null;
    constructor(_resolver, _themes, _langs, _alias = {}) {
        super(_resolver);
        this._resolver = _resolver;
        this._themes = _themes;
        this._langs = _langs;
        this._alias = _alias;
        _themes.forEach(t => this.loadTheme(t));
        _langs.forEach(l => this.loadLanguage(l));
    }
    getTheme(theme) {
        if (typeof theme === 'string')
            return this._resolvedThemes.get(theme);
        else
            return this.loadTheme(theme);
    }
    loadTheme(theme) {
        const _theme = normalizeTheme(theme);
        if (_theme.name) {
            this._resolvedThemes.set(_theme.name, _theme);
            // Reset cache
            this._loadedThemesCache = null;
        }
        return _theme;
    }
    getLoadedThemes() {
        if (!this._loadedThemesCache)
            this._loadedThemesCache = [...this._resolvedThemes.keys()];
        return this._loadedThemesCache;
    }
    // Override and re-implement this method to cache the textmate themes as `TextMateTheme.createFromRawTheme`
    // is expensive. Themes can switch often especially for dual-theme support.
    //
    // The parent class also accepts `colorMap` as the second parameter, but since we don't use that,
    // we omit here so it's easier to cache the themes.
    setTheme(theme) {
        let textmateTheme = this._textmateThemeCache.get(theme);
        if (!textmateTheme) {
            textmateTheme = Theme.createFromRawTheme(theme);
            this._textmateThemeCache.set(theme, textmateTheme);
        }
        // @ts-expect-error Access private `_syncRegistry`, but should work in runtime
        this._syncRegistry.setTheme(textmateTheme);
    }
    getGrammar(name) {
        if (this._alias[name]) {
            const resolved = new Set([name]);
            while (this._alias[name]) {
                name = this._alias[name];
                if (resolved.has(name))
                    throw new ShikiError(`Circular alias \`${Array.from(resolved).join(' -> ')} -> ${name}\``);
                resolved.add(name);
            }
        }
        return this._resolvedGrammars.get(name);
    }
    async loadLanguage(lang) {
        if (this.getGrammar(lang.name))
            return;
        const embeddedLazilyBy = new Set([...this._langMap.values()]
            .filter(i => i.embeddedLangsLazy?.includes(lang.name)));
        this._resolver.addLanguage(lang);
        const grammarConfig = {
            balancedBracketSelectors: lang.balancedBracketSelectors || ['*'],
            unbalancedBracketSelectors: lang.unbalancedBracketSelectors || [],
        };
        // @ts-expect-error Private members, set this to override the previous grammar (that can be a stub)
        this._syncRegistry._rawGrammars.set(lang.scopeName, lang);
        const g = await this.loadGrammarWithConfiguration(lang.scopeName, 1, grammarConfig);
        g.name = lang.name;
        this._resolvedGrammars.set(lang.name, g);
        if (lang.aliases) {
            lang.aliases.forEach((alias) => {
                this._alias[alias] = lang.name;
            });
        }
        // Reset cache
        this._loadedLanguagesCache = null;
        // If there is a language that embeds this language lazily, we need to reload it
        if (embeddedLazilyBy.size) {
            for (const e of embeddedLazilyBy) {
                this._resolvedGrammars.delete(e.name);
                // Reset cache
                this._loadedLanguagesCache = null;
                // @ts-expect-error clear cache
                this._syncRegistry?._injectionGrammars?.delete(e.scopeName);
                // @ts-expect-error clear cache
                this._syncRegistry?._grammars?.delete(e.scopeName);
                await this.loadLanguage(this._langMap.get(e.name));
            }
        }
    }
    async init() {
        this._themes.map(t => this.loadTheme(t));
        await this.loadLanguages(this._langs);
    }
    dispose() {
        super.dispose();
        this._resolvedThemes.clear();
        this._resolvedGrammars.clear();
        this._langMap.clear();
        this._langGraph.clear();
        this._loadedThemesCache = null;
    }
    async loadLanguages(langs) {
        for (const lang of langs)
            this.resolveEmbeddedLanguages(lang);
        const langsGraphArray = Array.from(this._langGraph.entries());
        const missingLangs = langsGraphArray.filter(([_, lang]) => !lang);
        if (missingLangs.length) {
            const dependents = langsGraphArray
                .filter(([_, lang]) => lang && lang.embeddedLangs?.some(l => missingLangs.map(([name]) => name).includes(l)))
                .filter(lang => !missingLangs.includes(lang));
            throw new ShikiError(`Missing languages ${missingLangs.map(([name]) => `\`${name}\``).join(', ')}, required by ${dependents.map(([name]) => `\`${name}\``).join(', ')}`);
        }
        for (const [_, lang] of langsGraphArray)
            this._resolver.addLanguage(lang);
        for (const [_, lang] of langsGraphArray)
            await this.loadLanguage(lang);
    }
    getLoadedLanguages() {
        if (!this._loadedLanguagesCache) {
            this._loadedLanguagesCache = [
                ...new Set([...this._resolvedGrammars.keys(), ...Object.keys(this._alias)]),
            ];
        }
        return this._loadedLanguagesCache;
    }
    resolveEmbeddedLanguages(lang) {
        this._langMap.set(lang.name, lang);
        this._langGraph.set(lang.name, lang);
        if (lang.embeddedLangs) {
            for (const embeddedLang of lang.embeddedLangs)
                this._langGraph.set(embeddedLang, this._langMap.get(embeddedLang));
        }
    }
}

class Resolver {
    _langs = new Map();
    _scopeToLang = new Map();
    _injections = new Map();
    _onigLibPromise;
    constructor(onigLibPromise, langs) {
        this._onigLibPromise = onigLibPromise;
        langs.forEach(i => this.addLanguage(i));
    }
    get onigLib() {
        return this._onigLibPromise;
    }
    getLangRegistration(langIdOrAlias) {
        return this._langs.get(langIdOrAlias);
    }
    async loadGrammar(scopeName) {
        return this._scopeToLang.get(scopeName);
    }
    addLanguage(l) {
        this._langs.set(l.name, l);
        if (l.aliases) {
            l.aliases.forEach((a) => {
                this._langs.set(a, l);
            });
        }
        this._scopeToLang.set(l.scopeName, l);
        if (l.injectTo) {
            l.injectTo.forEach((i) => {
                if (!this._injections.get(i))
                    this._injections.set(i, []);
                this._injections.get(i).push(l.scopeName);
            });
        }
    }
    getInjections(scopeName) {
        const scopeParts = scopeName.split('.');
        let injections = [];
        for (let i = 1; i <= scopeParts.length; i++) {
            const subScopeName = scopeParts.slice(0, i).join('.');
            injections = [...injections, ...(this._injections.get(subScopeName) || [])];
        }
        return injections;
    }
}

let _defaultWasmLoader;
let instancesCount = 0;
/**
 * Get the minimal shiki context for rendering.
 */
async function createShikiInternal(options = {}) {
    instancesCount += 1;
    if (options.warnings !== false && instancesCount >= 10 && instancesCount % 10 === 0)
        console.warn(`[Shiki] ${instancesCount} instances have been created. Shiki is supposed to be used as a singleton, consider refactoring your code to cache your highlighter instance; Or call \`highlighter.dispose()\` to release unused instances.`);
    let isDisposed = false;
    async function normalizeGetter(p) {
        return Promise.resolve(typeof p === 'function' ? p() : p).then(r => r.default || r);
    }
    async function resolveLangs(langs) {
        return Array.from(new Set((await Promise.all(langs
            .filter(l => !isSpecialLang(l))
            .map(async (lang) => await normalizeGetter(lang).then(r => Array.isArray(r) ? r : [r])))).flat()));
    }
    const wasmLoader = options.loadWasm || _defaultWasmLoader;
    const [themes, langs,] = await Promise.all([
        Promise.all((options.themes || []).map(normalizeGetter)).then(r => r.map(normalizeTheme)),
        resolveLangs(options.langs || []),
        wasmLoader ? loadWasm(wasmLoader) : undefined,
    ]);
    const resolver = new Resolver(Promise.resolve({
        createOnigScanner(patterns) {
            return createOnigScanner(patterns);
        },
        createOnigString(s) {
            return createOnigString(s);
        },
    }), langs);
    const _registry = new Registry(resolver, themes, langs, options.langAlias);
    await _registry.init();
    let _lastTheme;
    function getLanguage(name) {
        ensureNotDisposed();
        const _lang = _registry.getGrammar(typeof name === 'string' ? name : name.name);
        if (!_lang)
            throw new ShikiError(`Language \`${name}\` not found, you may need to load it first`);
        return _lang;
    }
    function getTheme(name) {
        if (name === 'none')
            return { bg: '', fg: '', name: 'none', settings: [], type: 'dark' };
        ensureNotDisposed();
        const _theme = _registry.getTheme(name);
        if (!_theme)
            throw new ShikiError(`Theme \`${name}\` not found, you may need to load it first`);
        return _theme;
    }
    function setTheme(name) {
        ensureNotDisposed();
        const theme = getTheme(name);
        if (_lastTheme !== name) {
            _registry.setTheme(theme);
            _lastTheme = name;
        }
        const colorMap = _registry.getColorMap();
        return {
            theme,
            colorMap,
        };
    }
    function getLoadedThemes() {
        ensureNotDisposed();
        return _registry.getLoadedThemes();
    }
    function getLoadedLanguages() {
        ensureNotDisposed();
        return _registry.getLoadedLanguages();
    }
    async function loadLanguage(...langs) {
        ensureNotDisposed();
        await _registry.loadLanguages(await resolveLangs(langs));
    }
    async function loadTheme(...themes) {
        ensureNotDisposed();
        await Promise.all(themes.map(async (theme) => isSpecialTheme(theme)
            ? null
            : _registry.loadTheme(await normalizeGetter(theme))));
    }
    function ensureNotDisposed() {
        if (isDisposed)
            throw new ShikiError('Shiki instance has been disposed');
    }
    function dispose() {
        if (isDisposed)
            return;
        isDisposed = true;
        _registry.dispose();
        instancesCount -= 1;
    }
    return {
        setTheme,
        getTheme,
        getLanguage,
        getLoadedThemes,
        getLoadedLanguages,
        loadLanguage,
        loadTheme,
        dispose,
        [Symbol.dispose]: dispose,
    };
}

/**
 * Create a Shiki core highlighter instance, with no languages or themes bundled.
 * Wasm and each language and theme must be loaded manually.
 *
 * @see http://shiki.style/guide/install#fine-grained-bundle
 */
async function createHighlighterCore(options = {}) {
    const internal = await createShikiInternal(options);
    return {
        getLastGrammarState: (code, options) => getLastGrammarState$1(internal, code, options),
        codeToTokensBase: (code, options) => codeToTokensBase$1(internal, code, options),
        codeToTokensWithThemes: (code, options) => codeToTokensWithThemes$1(internal, code, options),
        codeToTokens: (code, options) => codeToTokens$1(internal, code, options),
        codeToHast: (code, options) => codeToHast$1(internal, code, options),
        codeToHtml: (code, options) => codeToHtml$2(internal, code, options),
        ...internal,
        getInternalContext: () => internal,
    };
}

/**
 * Create a `createHighlighter` function with bundled themes and languages.
 *
 * @param bundledLanguages
 * @param bundledThemes
 * @param loadWasm
 */
function createdBundledHighlighter(bundledLanguages, bundledThemes, loadWasm) {
    async function createHighlighter(options) {
        function resolveLang(lang) {
            if (typeof lang === 'string') {
                if (isSpecialLang(lang))
                    return [];
                const bundle = bundledLanguages[lang];
                if (!bundle)
                    throw new ShikiError(`Language \`${lang}\` is not included in this bundle. You may want to load it from external source.`);
                return bundle;
            }
            return lang;
        }
        function resolveTheme(theme) {
            if (isSpecialTheme(theme))
                return 'none';
            if (typeof theme === 'string') {
                const bundle = bundledThemes[theme];
                if (!bundle)
                    throw new ShikiError(`Theme \`${theme}\` is not included in this bundle. You may want to load it from external source.`);
                return bundle;
            }
            return theme;
        }
        const _themes = (options.themes ?? []).map(i => resolveTheme(i));
        const langs = (options.langs ?? [])
            .map(i => resolveLang(i));
        const core = await createHighlighterCore({
            ...options,
            themes: _themes,
            langs,
            loadWasm,
        });
        return {
            ...core,
            loadLanguage(...langs) {
                return core.loadLanguage(...langs.map(resolveLang));
            },
            loadTheme(...themes) {
                return core.loadTheme(...themes.map(resolveTheme));
            },
        };
    }
    return createHighlighter;
}
function makeSingletonHighlighter(createHighlighter) {
    let _shiki;
    async function getSingletonHighlighter(options = {}) {
        if (!_shiki) {
            _shiki = createHighlighter({
                ...options,
                themes: options.themes || [],
                langs: options.langs || [],
            });
            return _shiki;
        }
        else {
            const s = await _shiki;
            await Promise.all([
                s.loadTheme(...(options.themes || [])),
                s.loadLanguage(...(options.langs || [])),
            ]);
            return s;
        }
    }
    return getSingletonHighlighter;
}
function createSingletonShorthands(createHighlighter) {
    const getSingletonHighlighter = makeSingletonHighlighter(createHighlighter);
    return {
        getSingletonHighlighter(options) {
            return getSingletonHighlighter(options);
        },
        async codeToHtml(code, options) {
            const shiki = await getSingletonHighlighter({
                langs: [options.lang],
                themes: ('theme' in options ? [options.theme] : Object.values(options.themes)),
            });
            return shiki.codeToHtml(code, options);
        },
        async codeToHast(code, options) {
            const shiki = await getSingletonHighlighter({
                langs: [options.lang],
                themes: ('theme' in options ? [options.theme] : Object.values(options.themes)),
            });
            return shiki.codeToHast(code, options);
        },
        async codeToTokens(code, options) {
            const shiki = await getSingletonHighlighter({
                langs: [options.lang],
                themes: ('theme' in options ? [options.theme] : Object.values(options.themes)),
            });
            return shiki.codeToTokens(code, options);
        },
        async codeToTokensBase(code, options) {
            const shiki = await getSingletonHighlighter({
                langs: [options.lang],
                themes: [options.theme],
            });
            return shiki.codeToTokensBase(code, options);
        },
        async codeToTokensWithThemes(code, options) {
            const shiki = await getSingletonHighlighter({
                langs: [options.lang],
                themes: Object.values(options.themes).filter(Boolean),
            });
            return shiki.codeToTokensWithThemes(code, options);
        },
        async getLastGrammarState(code, options) {
            const shiki = await getSingletonHighlighter({
                langs: [options.lang],
                themes: [options.theme],
            });
            return shiki.getLastGrammarState(code, options);
        },
    };
}

const createHighlighter = /* @__PURE__ */ createdBundledHighlighter(
  bundledLanguages,
  bundledThemes,
  getWasmInlined
);
const {
  codeToHtml: codeToHtml$1,
  codeToHast,
  codeToTokens,
  codeToTokensBase,
  codeToTokensWithThemes,
  getSingletonHighlighter,
  getLastGrammarState
} = /* @__PURE__ */ createSingletonShorthands(
  createHighlighter
);

const { resolve } = path;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let codeToHtml;
await (async () => {
    let res = await getSingletonHighlighter({
        langs: ["vue", "vue-html"],
        themes: ["material-theme-palenight"],
    });
    codeToHtml = res.codeToHtml;
})();
const demoComponentsPath = resolve(__dirname, "demo.vue");
const getRelativePath = (path1 = "", path2 = "") => {
    const path1Arr = path1.split(/\\|\//g);
    const path2Arr = path2.split(/\\|\//g);
    const path1ArrLen = path1Arr.length;
    let relativePath = "";
    for (let i = 0; i < path1ArrLen; i++) {
        if (path2Arr[i] != path1Arr[i]) {
            if (path1ArrLen - i > 1) {
                relativePath += new Array(path1ArrLen - i).join("../");
            }
            else {
                relativePath = "./";
            }
            relativePath += path2Arr.splice(i).join("/");
            break;
        }
    }
    return relativePath;
};
const getDemoLabel = (demo = "", attr) => {
    let reg = attr
        ? new RegExp(`<demo[^>]+${attr}=['"]([^'"]+)['"]`)
        : /<demo[\s\S]*?>([\s\S]*?)(<\/demo>|\/>)$/;
    let match = demo.match(reg);
    if (match && match.length >= 1) {
        return match[1] || "";
    }
    return "";
};
var index = (md) => {
    const render = md.render;
    md.render = (...args) => {
        let docPath = args[1].path;
        let result = render.call(md, ...args);
        const demoReg = /<demo([\s\S]*?)(<\/demo>|\/>)/;
        const demoReg_g = new RegExp(demoReg, "g");
        const demoLabels = result.match(demoReg_g);
        demoLabels?.forEach(async (demo) => {
            let codeStr = "";
            let htmlStr = "";
            let descStr = "";
            const slot = getDemoLabel(demo);
            const demoSrc = getDemoLabel(demo, "src");
            const demoDesc = getDemoLabel(demo, "desc");
            const demoLang = getDemoLabel(demo, "lang") || "vue";
            const demoPath = resolve(docPath, "../", demoSrc);
            let demoRelativePath = "";
            const existSrc = demoSrc && fs.existsSync(demoPath);
            if (slot?.trim()) {
                codeStr = slot;
            }
            else if (existSrc) {
                codeStr = fs.readFileSync(demoPath).toString();
                demoRelativePath = getRelativePath(demoComponentsPath, demoPath);
            }
            else {
                codeStr = "src文件不存在";
            }
            htmlStr = codeToHtml(codeStr, {
                transformers: [
                    {
                        code(node) {
                            this.addClassToHast(node, "language-js");
                        },
                        line(node, line) {
                            node.properties["data-line"] = line;
                            if ([1, 3, 4].includes(line))
                                this.addClassToHast(node, "highlight");
                        },
                        span(node, line, col) {
                            node.properties["data-token"] = `token:${line}:${col}`;
                        },
                    },
                ],
                lang: demoLang,
                theme: "material-theme-palenight",
            });
            descStr = md.renderInline(demoDesc) || "";
            let demoStr = demo.replace(">", ` codeStr="${encodeURIComponent(codeStr)}" htmlStr="${encodeURIComponent(htmlStr)}" description="${encodeURIComponent(descStr)}" codePath="${demoRelativePath}" language="${demoLang}">`);
            result = result.replace(demo, demoStr);
        });
        return result;
    };
};

export { index as default };
