(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{101:function(t,s,n){"use strict";var a=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),n("pre",[n("code",[t._v(t._s(2))])]),t._m(13),n("p",[t._v("指令也起作用：")]),t._m(14),t._m(15),t._m(16),n("pre",[n("code",t._l(3,function(s){return n("span",[t._v(t._s(s)+" ")])}))]),t._m(17),n("p",[t._v("已编译的组件没有任何私有数据，但可以访问"),n("router-link",{attrs:{to:"./custom-themes.html#site-and-page-metadata"}},[t._v("网站元数据")]),t._v("。例如：")],1),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),t._m(30),n("p",[t._v("在任何 markdown 文件中，你可以直接使用这些组件（名称是从文件名推断的）：")]),t._m(31),n("demo-1"),n("OtherComponent"),t._m(32),t._m(33),t._m(34),n("p",{staticClass:"demo",class:t.$style.example}),n("hr"),t._m(35),n("hr")],1)},e=[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"在-markdown-中使用-vue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-markdown-中使用-vue","aria-hidden":"true"}},[this._v("#")]),this._v(" 在 Markdown 中使用 Vue")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"浏览器-api-访问限制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器-api-访问限制","aria-hidden":"true"}},[this._v("#")]),this._v(" 浏览器 API 访问限制")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("由于 VuePress 应用程序在生成静态构建文件时会在 Node.js 中进行服务器渲染，所以任何 Vue 用法都必须符合"),s("a",{attrs:{href:"https://ssr.vuejs.org/en/universal.html",target:"_blank",rel:"noopener noreferrer"}},[this._v("通用代码要求")]),this._v("。简而言之，确保只在 "),s("code",[this._v("beforeMounted")]),this._v(" 或 "),s("code",[this._v("mounted")]),this._v(" 钩子中访问 Browser / DOM API。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果你正在使用或演示非 SSR 友好的组件（比如说包含了自定义指令），则可以将它们包装在内置的 "),s("code",[this._v("<ClientOnly>")]),this._v(" 组件中：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-md"}},[n("code",[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ClientOnly")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("NonSSRFriendlyComponent")]),n("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ClientOnly")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("请注意，这不会修复"),s("strong",[this._v("在 import")]),this._v(" 时访问浏览器 API 的组件或库的问题 - 为了使用在导入时使用浏览器环境的代码，你需要将它们动态地导入到合适的生命周期钩子中：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-vue"}},[n("code",[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("mounted")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'./lib-that-access-window-on-import'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("then")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("module "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// use code")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"模板-templating"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模板-templating","aria-hidden":"true"}},[this._v("#")]),this._v(" 模板(templating)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"插值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插值","aria-hidden":"true"}},[this._v("#")]),this._v(" 插值")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("每个 markdown 文件首先被编译成 HTML，然后作为 Vue 组件传递给 "),s("code",[this._v("vue-loader")]),this._v(" 。这意味着你可以在文本中使用 Vue 风格的插值表达式：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("输入")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[this._v("{{ 1 + 1 }}\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("输出")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指令","aria-hidden":"true"}},[this._v("#")]),this._v(" 指令")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("输入")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-md"}},[n("code",[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("v-for")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("i in 3"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ i }} "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("输出")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"访问网站和页面数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#访问网站和页面数据","aria-hidden":"true"}},[this._v("#")]),this._v(" 访问网站和页面数据")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("输入")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[this._v("{{ $page }}\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("输出")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v('"path"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"/using-vue.html"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v('"title"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Using Vue in Markdown"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v('"frontmatter"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"转义-escaping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转义-escaping","aria-hidden":"true"}},[this._v("#")]),this._v(" 转义(escaping)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("默认情况下，fenced 代码块会自动用 "),s("code",[this._v("v-pre")]),this._v(" 包装。如果要在内联代码片段或纯文本内显示原始插值或特定于 Vue 的语法，则需要用 "),s("code",[this._v("v-pre")]),this._v(" 自定义容器包装段落：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("输入")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[this._v("::: v-pre\n"),s("span",{attrs:{class:"token code keyword"}},[this._v("`{{ This will be displayed as-is }}`")]),this._v("\n:::\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("输出")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{pre:!0},[s("p",[s("code",[this._v("{{ This will be displayed as-is }}")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用组件（using-components）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用组件（using-components）","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用组件（Using Components）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v(".vuepress / components")]),this._v(" 中的任意 "),s("code",[this._v("* .vue")]),this._v(" 文件都会自动注册为全局的异步组件。例如：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v(".\n└─ .vuepress\n   └─ components\n      ├─ demo-1.vue\n      └─ OtherComponent.vue\n")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-md"}},[n("code",[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("demo-1")]),n("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("OtherComponent")]),n("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("重要的")]),s("p",[this._v("确保自定义组件的名称包含连字符或符合 PascalCase 命名规则。否则，它将被视为内联元素，并被包裹在一个 "),s("code",[this._v("<p>")]),this._v(" 标签内，这将导致 hydration （Vue 的渲染子过程）不匹配，因为 "),s("code",[this._v("<p>")]),this._v(" 不允许块元素放置在其中。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"脚本和样式提升-script-style-hoisting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#脚本和样式提升-script-style-hoisting","aria-hidden":"true"}},[this._v("#")]),this._v(" 脚本和样式提升(script & style hoisting)")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("有时你可能需要将一些 JavaScript 或 CSS 仅应用于当前页面。在这些情况下，你可以在 markdown 文件中直接编写原生的 "),n("code",[t._v("<script>")]),t._v(" 和 "),n("code",[t._v("<style>")]),t._v(" 块，并将它们从编译的 HTML 中提取出来，以 "),n("code",[t._v("<script>")]),t._v(" 和 "),n("code",[t._v("<style>")]),t._v(" 的形式插入到生成 Vue 单个文件组件中。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("原文："),s("a",{attrs:{href:"https://vuepress.vuejs.org/guide/using-vue.html",target:"_blank",rel:"noopener noreferrer"}},[this._v("https://vuepress.vuejs.org/guide/using-vue.html")])])])}];n.d(s,"a",function(){return a}),n.d(s,"b",function(){return e})},104:function(t,s,n){t.exports={example:"example_2DuOfB6G"}},105:function(t,s,n){t.exports=n(104)},106:function(t,s,n){"use strict";n.r(s),s.default={mounted:function(){document.querySelector("."+this.$style.example).textContent="这是通过内联脚本渲染的并由内嵌 CSS 样式呈现"}}},121:function(t,s,n){"use strict";n.r(s);var a=n(101),e=n(98),r=n.n(e);for(var c in e)"default"!==c&&function(t){n.d(s,t,function(){return e[t]})}(c);var i=n(105),o=n.n(i),_=n(1);var u=Object(_.a)(r.a,a.a,a.b,!1,function(t){this.$style=o.a.locals||o.a},null,null);s.default=u.exports},98:function(t,s,n){t.exports=n(106)}}]);