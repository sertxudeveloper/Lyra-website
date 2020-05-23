(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{361:function(e,s,t){"use strict";t.r(s);var a=t(44),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"componentes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#componentes"}},[e._v("#")]),e._v(" Componentes")]),e._v(" "),t("p",[e._v("Lyra incluye un sistema que le permite añadir funcionalidades extras ya sea creando sus propios componentes o importando de terceros.")]),e._v(" "),t("p",[e._v("Estos componentes permiten tener sus propias rutas API, scripts de JavaScript, estilos e incluso implementar sus propios componentes Vue.js.")]),e._v(" "),t("h2",{attrs:{id:"creacion-de-un-componente"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creacion-de-un-componente"}},[e._v("#")]),e._v(" Creación de un componente")]),e._v(" "),t("p",[e._v('Para crear un componente es necesario ejecutar el siguiente comando pasándole el vendor y el nombre en "snake case", por ejemplo, '),t("code",[e._v("sertxudeveloper/test-component")]),e._v(".")]),e._v(" "),t("p",[e._v("Los componentes creados se encuentran en la carpeta "),t("code",[e._v("lyra-components")]),e._v(" dentro de la aplicación web.")]),e._v(" "),t("h2",{attrs:{id:"registrar-un-componente"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#registrar-un-componente"}},[e._v("#")]),e._v(" Registrar un componente")]),e._v(" "),t("p",[e._v("Tras crear o importar un componente e instalar las dependencias necesarias, deberá registrarlo en el menú del panel para poder empezar a utilizarlo.")]),e._v(" "),t("p",[e._v("El registro de un componente es muy similar al de un recurso. A continuación, dispone de un ejemplo de registro.")]),e._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[e._v('"name"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[e._v('"Test Component"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[e._v('"key"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[e._v('"test-component"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[e._v('"icon"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[e._v('"fas fa-question"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[e._v('"component"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" \\"),t("span",{pre:!0,attrs:{class:"token package"}},[e._v("SertxuDeveloper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Testcomponent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Testcomponent")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("Recuerde que, si está utilizando el modo avanzado, deberá asignar los permisos pertinentes para que los diferentes roles puedan utilizar los componentes.")]),e._v(" "),t("h2",{attrs:{id:"registro-de-rutas-assets-estilos-y-scripts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#registro-de-rutas-assets-estilos-y-scripts"}},[e._v("#")]),e._v(" Registro de rutas, assets, estilos y scripts")]),e._v(" "),t("p",[e._v("Dependiendo de si desea registrar rutas API, un asset, un estilo CSS o un script JavaScript, deberá utilizar un método u otro.")]),e._v(" "),t("p",[e._v("Estos métodos se deben utilizar en el método "),t("code",[e._v("boot")]),e._v(" de la clase principal del componente. Ya que Lyra, al registrar un componente en el menú se encargará de ejecutar este método para registrar los ficheros y rutas del mismo.")]),e._v(" "),t("p",[e._v("A continuación, encontrará distintos ejemplos dependiendo del tipo de fichero que desea registrar.")]),e._v(" "),t("h3",{attrs:{id:"registrar-ruta-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#registrar-ruta-api"}},[e._v("#")]),e._v(" Registrar ruta API")]),e._v(" "),t("p",[e._v("Para registrar un fichero de rutas API debe seguir el siguiente ejemplo.")]),e._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[e._v("Lyra"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("route")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'test-component'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[e._v("__DIR__")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'/../routes/api.php'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Para acceder a las rutas de ese fichero debe tener en cuenta que en primer lugar Lyra añade el prefijo "),t("code",[e._v("/components")]),e._v(" a las rutas de los componentes, posteriormente se añade como prefijo el nombre del componente que recibe el primer parámetro.")]),e._v(" "),t("p",[e._v("De esta forma, siguiendo el ejemplo anterior, si ha registrado la ruta "),t("code",[e._v("/test")]),e._v(" deberá ser accedida como "),t("code",[e._v("/components/test-component/test")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"registrar-asset"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#registrar-asset"}},[e._v("#")]),e._v(" Registrar asset")]),e._v(" "),t("p",[e._v("Para registrar un asset debe seguir el siguiente ejemplo.")]),e._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[e._v("Lyra"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("asset")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'test-component-picture'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[e._v("__DIR__")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'/../dist/img/picture.png'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Debe tener en cuenta que el nombre del asset debe ser único, de lo contrario puede sobreescribir alguna ruta ya existente.")]),e._v(" "),t("h3",{attrs:{id:"registrar-estilo-css"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#registrar-estilo-css"}},[e._v("#")]),e._v(" Registrar estilo CSS")]),e._v(" "),t("p",[e._v("Para registrar un estilo CSS debe seguir el siguiente ejemplo.")]),e._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[e._v("Lyra"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("style")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'test-component-style, __DIR__ . '")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("dist"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("css"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("component"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("css'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Debe tener en cuenta que el nombre del estilo CSS debe ser único, de lo contrario puede sobreescribir alguna ruta ya existente.")]),e._v(" "),t("h3",{attrs:{id:"registrar-script-javascript"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#registrar-script-javascript"}},[e._v("#")]),e._v(" Registrar script JavaScript")]),e._v(" "),t("p",[e._v("Para registrar un script JavaScript debe seguir el siguiente ejemplo.")]),e._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[e._v("Lyra"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("script")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'test-component-script, __DIR__ . '")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("dist"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("js"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("component"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("js"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Debe tener en cuenta que el nombre del script JavaScript debe ser único, de lo contrario puede sobreescribir alguna ruta ya existente.")]),e._v(" "),t("p",[e._v("Los scripts se añadirán al final de la etiqueta HTML "),t("code",[e._v("<body>")]),e._v(".")])])}),[],!1,null,null,null);s.default=r.exports}}]);