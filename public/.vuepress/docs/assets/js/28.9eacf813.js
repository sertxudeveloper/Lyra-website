(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{376:function(a,e,s){"use strict";s.r(e);var r=s(44),t=Object(r.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"modos-de-funcionamiento"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modos-de-funcionamiento"}},[a._v("#")]),a._v(" Modos de funcionamiento")]),a._v(" "),s("p",[a._v("Lyra dispone de dos modos de funcionamiento.")]),a._v(" "),s("h2",{attrs:{id:"basico"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basico"}},[a._v("#")]),a._v(" Básico")]),a._v(" "),s("p",[a._v("El modo básico es el que viene por defecto, permite el acceso completo a los usuarios especificados utilizando el sistema de autenticación existente en Laravel.")]),a._v(" "),s("p",[a._v("Para permitir el acceso a los usuarios deseados, debe modificar el fichero de configuración de Lyra, la opción "),s("code",[a._v("authenticator")]),a._v(" debe tener el valor "),s("code",[a._v("Lyra::MODE_BASIC")]),a._v(", bajo esa opción encontrará el array "),s("code",[a._v("authorized_users")]),a._v(", en este array debe añadir el correo electrónico de los usuarios que deben poder acceder.")]),a._v(" "),s("p",[a._v("Tenga en cuenta los usuarios tendrán acceso completo a todas las partes de Lyra.")]),a._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v('"authenticator"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" Lyra"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("MODE_BASIC")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v('"authorized_users"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v('"lyra@sertxu.dev"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h2",{attrs:{id:"avanzado"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#avanzado"}},[a._v("#")]),a._v(" Avanzado")]),a._v(" "),s("p",[a._v("El modo avanzado es el más completo, ofrece un sistema de acceso basado en roles y un sistema de notificaciones.\nAl utilizar este modo, el array "),s("code",[a._v("authorized_users")]),a._v(" se ignorará.")]),a._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v('"authenticator"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" Lyra"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("MODE_ADVANCED")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Además, este modo añade un nuevo sistema de autenticación independiente de forma que los usuarios de Laravel y los usuarios de Lyra permanecerán separados.")]),a._v(" "),s("h3",{attrs:{id:"crear-un-rol"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crear-un-rol"}},[a._v("#")]),a._v(" Crear un rol")]),a._v(" "),s("p",[a._v("Para crear un nuevo rol debe ejecutar el siguiente comando indicando el nombre del rol.")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ php artisan lyra:role "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Puede asignar diferentes permisos a los roles que haya creado, para ello ejecute el siguiente comando.")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ php artisan lyra:permission "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Podrá decidir a qué recursos tiene acceso y las acciones que puede realizar el rol.")]),a._v(" "),s("h3",{attrs:{id:"crear-un-usuario"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crear-un-usuario"}},[a._v("#")]),a._v(" Crear un usuario")]),a._v(" "),s("p",[a._v("Para crear un nuevo usuario debe ejecutar el siguiente comando.")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ php artisan lyra:user\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Este comando solicitará que introduzca el nombre de usuario, el correo, la contraseña, la confirmación de contraseña y el rol del usuario.")])])}),[],!1,null,null,null);e.default=t.exports}}]);