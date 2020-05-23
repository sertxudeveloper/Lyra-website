(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{369:function(t,s,a){"use strict";a.r(s);var e=a(25),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"functionalities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functionalities"}},[t._v("#")]),t._v(" Functionalities")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#show-hide-fields"}},[t._v("Show/Hide fields")])]),a("li",[a("a",{attrs:{href:"#length-limit"}},[t._v("Length limit")]),a("ul",[a("li",[a("a",{attrs:{href:"#weak-mode"}},[t._v("Weak mode")])]),a("li",[a("a",{attrs:{href:"#strong-mode"}},[t._v("Strong mode")])])])]),a("li",[a("a",{attrs:{href:"#validations"}},[t._v("Validations")])]),a("li",[a("a",{attrs:{href:"#computed-fields"}},[t._v("Computed fields")])]),a("li",[a("a",{attrs:{href:"#sorting-fields"}},[t._v("Sorting fields")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"show-hide-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-hide-fields"}},[t._v("#")]),t._v(" Show/Hide fields")]),t._v(" "),a("p",[t._v("Some fields are automatically hidden from some views, for example, the "),a("code",[t._v("Id")]),t._v(" field is hidden from the creation and edit view.\nYou can hide fields using the following methods:")]),t._v(" "),a("ul",[a("li",[t._v("hideOnIndex")]),t._v(" "),a("li",[t._v("hideOnShow")]),t._v(" "),a("li",[t._v("hideOnCreate")]),t._v(" "),a("li",[t._v("hideOnEdit")])]),t._v(" "),a("p",[t._v("You can concatenate any of these methods when defining a field to indicate where it should or should not be displayed:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("Text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hideOnIndex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Also, if you want to reverse the functionality of the method and show a field that is hidden by default you must pass a false boolean to the method.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("Id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hideOnCreate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"length-limit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#length-limit"}},[t._v("#")]),t._v(" Length limit")]),t._v(" "),a("p",[t._v("With the "),a("code",[t._v("size")]),t._v(" method we can add a length limit, the first parameter is necessary and must be an int to specify the maximum length, the second parameter is optional and will determine the type of limit.")]),t._v(" "),a("p",[t._v("There are two limit modes, the strong mode and the weak mode.")]),t._v(" "),a("h3",{attrs:{id:"weak-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#weak-mode"}},[t._v("#")]),t._v(" Weak mode")]),t._v(" "),a("p",[t._v("This mode displays the number of characters followed by the maximum length set.")]),t._v(" "),a("p",[t._v("Once the limit has been reached, the user can continue to write, it is used only as an indicative character limit.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("Text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"strong-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#strong-mode"}},[t._v("#")]),t._v(" Strong mode")]),t._v(" "),a("p",[t._v("This mode, like the weak mode, displays the number of characters followed by the maximum length set.")]),t._v(" "),a("p",[t._v("Once the limit has been reached, the user will no longer be able to write.\nNote that this limit is only on the client side.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("Text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"validations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validations"}},[t._v("#")]),t._v(" Validations")]),t._v(" "),a("p",[t._v("The fields allow you to add validations using the Laravel validation system.")]),t._v(" "),a("p",[t._v("To add a validation you must use the "),a("code",[t._v("rules")]),t._v(" method by adding the different validations.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("Password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Password'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rules")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'nullable'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'string'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'min:8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"computed-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#computed-fields"}},[t._v("#")]),t._v(" Computed fields")]),t._v(" "),a("p",[t._v("If you want to add fields whose value is not stored in the database, but is calculated from another data you must add a callback instead of the column name.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("Text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Age'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" \\"),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Carbon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("birth_date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("age")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("Due to the nature of these fields, they can only be displayed in the index and show views.")]),t._v(" "),a("h2",{attrs:{id:"sorting-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sorting-fields"}},[t._v("#")]),t._v(" Sorting fields")]),t._v(" "),a("p",[t._v("If you want to enable the sorting system by a field you must add the "),a("code",[t._v("sortable")]),t._v(" method to the field declaration.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("Text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Title'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sortable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);