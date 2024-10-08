(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{425:function(t,a,e){"use strict";e.r(a);var s=e(10),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),a("li",[a("a",{attrs:{href:"#prerequisites"}},[t._v("Prerequisites")])]),a("li",[a("a",{attrs:{href:"#manual-setup-of-files"}},[t._v("Manual Setup of Files")]),a("ul",[a("li",[a("a",{attrs:{href:"#create-package-directory"}},[t._v("Create Package Directory")])]),a("li",[a("a",{attrs:{href:"#create-service-provider"}},[t._v("Create Service Provider")])]),a("li",[a("a",{attrs:{href:"#register-your-package"}},[t._v("Register Your Package")])]),a("li",[a("a",{attrs:{href:"#run-the-commands"}},[t._v("Run the Commands")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("A package is a self-contained module that encapsulates specific features or functionality, allowing developers to add custom features without altering the core codebase. This approach not only preserves the integrity of the core system but also ensures that updates and maintenance can be carried out smoothly.")]),t._v(" "),a("p",[t._v("By developing packages, you can introduce new functionalities, integrate third-party services, or customize existing features to better meet your business requirements. Each package is isolated, promoting clean code practices and enabling easier debugging and testing.")]),t._v(" "),a("p",[t._v("This guide will take you through the process of creating a package for UnoPim, from setting up the directory structure to defining configurations, routes, controllers, models, and views. By the end of this guide, you will have a solid understanding of how to develop and integrate packages into the UnoPim platform, enhancing its capabilities while maintaining a robust and maintainable codebase.")]),t._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),a("ul",[a("li",[t._v("A working UnoPim application")]),t._v(" "),a("li",[t._v("Composer installed")])]),t._v(" "),a("h2",{attrs:{id:"manual-setup-of-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-setup-of-files"}},[t._v("#")]),t._v(" Manual Setup of Files")]),t._v(" "),a("p",[t._v("If you prefer to set up your package manually, follow these steps assuming you are familiar with package directory structures and workflows. We'll use the default "),a("strong",[a("code",[t._v("package")])]),t._v(" folder in UnoPim as an example.")]),t._v(" "),a("h3",{attrs:{id:"create-package-directory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-package-directory"}},[t._v("#")]),t._v(" Create Package Directory")]),t._v(" "),a("p",[t._v("Inside the "),a("strong",[a("code",[t._v("packages/Webkul")])]),t._v(" folder, create a folder with your package name. Your structure should look like this:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("└── packages\n    └── Webkul\n        └── Example\n")])])]),a("p",[t._v("In your package folder, create a folder named as "),a("strong",[a("code",[t._v("src")])]),t._v(". This is where you'll put all your package-related files. Your updated structure will look like this:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("└── packages\n    └── Webkul\n        └── Example\n            └── src\n")])])]),a("h3",{attrs:{id:"create-service-provider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-service-provider"}},[t._v("#")]),t._v(" Create Service Provider")]),t._v(" "),a("p",[t._v("In the "),a("strong",[a("code",[t._v("src")])]),t._v(" folder, create a folder named as "),a("strong",[a("code",[t._v("Providers")])]),t._v(". Inside that folder, create a file named as "),a("strong",[a("code",[t._v("ExampleServiceProvider.php")])]),t._v(". Your structure should look like this:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("└── packages\n    └── Webkul\n        └── Example\n            └── src\n                └── Providers\n                    └── ExampleServiceProvider.php\n")])])]),a("p",[t._v("Copy the following code and paste it into "),a("strong",[a("code",[t._v("ExampleServiceProvider.php")])]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Providers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Support"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ServiceProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("ExampleServiceProvider")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceProvider")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Bootstrap services.\n     *\n     * @return void\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("boot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Register services.\n     *\n     * @return void\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("register")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),a("h3",{attrs:{id:"register-your-package"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#register-your-package"}},[t._v("#")]),t._v(" Register Your Package")]),t._v(" "),a("p",[t._v("Add your package's namespace to the "),a("strong",[a("code",[t._v("psr-4")])]),t._v(" section in the "),a("strong",[a("code",[t._v("composer.json")])]),t._v(" file located in the root directory of your UnoPim application. Update it as follows:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"autoload"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ...\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"psr-4"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Other PSR-4 namespaces")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Webkul\\\\Example\\\\"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"packages/Webkul/Example/src"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Register your package's service provider in the "),a("strong",[a("code",[t._v("config/app.php")])]),t._v(" file located in the root directory of your UnoPim application. Add the following line to the "),a("strong",[a("code",[t._v("providers")])]),t._v(" array:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Other configuration options")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'providers'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("ServiceProvider")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defaultProviders")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("merge")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Other service providers")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[t._v("Webkul"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Providers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ExampleServiceProvider")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Other configuration options")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),a("h3",{attrs:{id:"run-the-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-the-commands"}},[t._v("#")]),t._v(" Run the Commands")]),t._v(" "),a("p",[t._v("Run the following command to autoload your package:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("composer")]),t._v(" dump-autoload\n")])])]),a("p",[t._v("Your package is now ready to use!")])])}),[],!1,null,null,null);a.default=r.exports}}]);