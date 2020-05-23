(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{360:function(a,s,t){"use strict";t.r(s);var n=t(44),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"dashboard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dashboard"}},[a._v("#")]),a._v(" Dashboard")]),a._v(" "),t("p",[a._v("Por defecto no se incluye ningún dashboard configurado, para configurar uno primero debe crearlo utilizando el siguiente comando indicando el nombre del dashboard.")]),a._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[a._v("$ php artisan lyra"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("dashboard "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("Una vez creado lo puede encontrar en la carpeta "),t("code",[a._v("app/Lyra/Dashboards")]),a._v(".")]),a._v(" "),t("p",[a._v("Posteriormente debe registrarlo en el fichero de configuración.")]),a._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v('"dashboard"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" \\"),t("span",{pre:!0,attrs:{class:"token package"}},[a._v("App"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Lyra"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Dashboards"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Dashboard")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("Ahora solo falta crear las diferentes tarjetas para mostrar información relevante.")]),a._v(" "),t("h2",{attrs:{id:"tarjetas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tarjetas"}},[a._v("#")]),a._v(" Tarjetas")]),a._v(" "),t("p",[a._v("Para crear una tarjeta hay que ejecutar el siguiente comando indicando el nombre de la tarjeta")]),a._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[a._v("$ php artisan lyra"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("card "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("Preguntará que tipo de tarjeta desea crear. Puede elegir entre:")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("Tarjeta simple")]),a._v(": Muestra un único valor junto a un título y un icono.")]),a._v(" "),t("li",[t("strong",[a._v("Tarjeta con métrica")]),a._v(": Muestra un valor junto a un porcentaje, un título y un icono.")]),a._v(" "),t("li",[t("strong",[a._v("Tarjeta de lista ordenada")]),a._v(": Muestra un listado de valores junto a un título.")])]),a._v(" "),t("p",[a._v("Las tarjetas creadas se encuentran en "),t("code",[a._v("app/Lyra/Dashboards/Cards")]),a._v(".")]),a._v(" "),t("p",[a._v("Para añadir una tarjeta al dashboard simplemente hay que importarla y añadir una nueva instancia de la misma en el array que devuelve la función "),t("code",[a._v("dashboard")]),a._v(".")]),a._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("protected")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("dashboard")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// First row")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ExampleCard")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);