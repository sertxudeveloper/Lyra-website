(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{368:function(a,s,t){"use strict";t.r(s);var e=t(44),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"funcionalidades"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#funcionalidades"}},[a._v("#")]),a._v(" Funcionalidades")]),a._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#mostrar-ocultar-campos"}},[a._v("Mostrar/Ocultar campos")])]),t("li",[t("a",{attrs:{href:"#ordenar-registros"}},[a._v("Ordenar registros")]),t("ul",[t("li",[t("a",{attrs:{href:"#limite-de-longitud"}},[a._v("Límite de longitud")])])])]),t("li",[t("a",{attrs:{href:"#validaciones"}},[a._v("Validaciones")])]),t("li",[t("a",{attrs:{href:"#campos-calculados"}},[a._v("Campos calculados")])]),t("li",[t("a",{attrs:{href:"#ordenacion-de-campos"}},[a._v("Ordenación de campos")])])])]),t("p"),a._v(" "),t("h2",{attrs:{id:"mostrar-ocultar-campos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mostrar-ocultar-campos"}},[a._v("#")]),a._v(" Mostrar/Ocultar campos")]),a._v(" "),t("p",[a._v("Algunos campos se ocultan automáticamente de algunas vistas, por ejemplo, el campo "),t("code",[a._v("Id")]),a._v(" se oculta de la vista de creación y edición.\nPuede ocultar los campos utilizando los siguientes métodos:")]),a._v(" "),t("ul",[t("li",[a._v("hideOnIndex")]),a._v(" "),t("li",[a._v("hideOnShow")]),a._v(" "),t("li",[a._v("hideOnCreate")]),a._v(" "),t("li",[a._v("hideOnEdit")])]),a._v(" "),t("p",[a._v("Puede concatenar cualquiera de estos métodos al definir un campo para indicar dónde debe mostrarse o no el mismo:")]),a._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[a._v("Text"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'Name'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("hideOnIndex")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("Además, si quiere invertir la funcionalidad del método y mostrar un campo que por defecto está oculto debe pasarle un booleano falso al método.")]),a._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[a._v("Id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'Id'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("hideOnCreate")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean constant"}},[a._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"ordenar-registros"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ordenar-registros"}},[a._v("#")]),a._v(" Ordenar registros")]),a._v(" "),t("p",[a._v("Si desea ordenar los registros de la vista index, debe utilizar el método "),t("code",[a._v("sortable")]),a._v(" en el campo que desea añadir el sistema de ordenación.")]),a._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[a._v("Id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'Id'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sortable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"limite-de-longitud"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#limite-de-longitud"}},[a._v("#")]),a._v(" Límite de longitud")]),a._v(" "),t("p",[a._v("Con el método "),t("code",[a._v("size")]),a._v(" podemos añadir un límite de longitud, el primer parámetro es necesario y debe ser un int para especificar la longitud máxima, el segundo parámetro es opcional y determinará el tipo de límite.")]),a._v(" "),t("p",[a._v("Existen dos modos de límite, el modo fuerte y el modo débil.")]),a._v(" "),t("h4",{attrs:{id:"modo-debil"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modo-debil"}},[a._v("#")]),a._v(" Modo débil")]),a._v(" "),t("p",[a._v("Este modo muestra el número de caracteres seguido de la longitud máxima establecida.")]),a._v(" "),t("p",[a._v("Una vez alcanzado el límite, el usuario podrá seguir escribiendo, se utiliza únicamente como un límite de caracteres orientativo.")]),a._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[a._v("Text"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'Name'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("size")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("25")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"modo-fuerte"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modo-fuerte"}},[a._v("#")]),a._v(" Modo fuerte")]),a._v(" "),t("p",[a._v("Este modo, al igual que el modo débil, muestra el número de caracteres seguido de la longitud máxima establecida.")]),a._v(" "),t("p",[a._v("Una vez se ha alcanzado el límite, el usuario no podrá seguir escribiendo. Tenga en cuenta que este límite es sólo del lado del cliente.")]),a._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[a._v("Text"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'Name'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("size")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("25")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean constant"}},[a._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"validaciones"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#validaciones"}},[a._v("#")]),a._v(" Validaciones")]),a._v(" "),t("p",[a._v("Los campos permiten añadir validaciones utilizando el sistema de validaciones de Laravel.")]),a._v(" "),t("p",[a._v('Para añadir una validación debe utilizar el método "rules" añadiendo las distintas validaciones.')]),a._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[a._v("Password"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'Password'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rules")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'nullable'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'string'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'min:8'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"campos-calculados"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#campos-calculados"}},[a._v("#")]),a._v(" Campos calculados")]),a._v(" "),t("p",[a._v("Si desea añadir campos cuyo valor no se almacena en la base de datos, sino que se calcula a partir de otro dato debe añadir un callback en vez del nombre de la columna.")]),a._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[a._v("Text"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'Age'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" \\"),t("span",{pre:!0,attrs:{class:"token package"}},[a._v("Carbon")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("parse")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$this")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[a._v("birth_date")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[a._v("age")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("Debido a la naturaleza  de estos campos, únicamente se pueden mostrar en las vistas index y show.")]),a._v(" "),t("h2",{attrs:{id:"ordenacion-de-campos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ordenacion-de-campos"}},[a._v("#")]),a._v(" Ordenación de campos")]),a._v(" "),t("p",[a._v("Si desea habilitar el sistema de ordenación por un campo debe añadir el método "),t("code",[a._v("sortable")]),a._v(" a la declaración del campo.")]),a._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[a._v("Text"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'Title'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sortable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);