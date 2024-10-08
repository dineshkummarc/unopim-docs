(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{368:function(t,a,s){"use strict";s.r(a);var e=s(10),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"repositories"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#repositories"}},[t._v("#")]),t._v(" Repositories")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),a("li",[a("a",{attrs:{href:"#dependency-injection"}},[t._v("Dependency Injection")])]),a("li",[a("a",{attrs:{href:"#manually-setting-up-repository-files"}},[t._v("Manually Setting Up Repository Files")]),a("ul",[a("li",[a("a",{attrs:{href:"#setting-up-examplerepository-in-webkul-example-package"}},[t._v("Setting Up ExampleRepository in Webkul/Example Package")])])])]),a("li",[a("a",{attrs:{href:"#available-methods"}},[t._v("Available Methods")]),a("ul",[a("li",[a("a",{attrs:{href:"#all"}},[t._v("All")])]),a("li",[a("a",{attrs:{href:"#find"}},[t._v("Find")])]),a("li",[a("a",{attrs:{href:"#findorfail"}},[t._v("FindOrFail")])]),a("li",[a("a",{attrs:{href:"#create"}},[t._v("Create")])]),a("li",[a("a",{attrs:{href:"#update"}},[t._v("Update")])]),a("li",[a("a",{attrs:{href:"#delete"}},[t._v("Delete")])]),a("li",[a("a",{attrs:{href:"#paginate"}},[t._v("Paginate")])]),a("li",[a("a",{attrs:{href:"#where"}},[t._v("Where")])]),a("li",[a("a",{attrs:{href:"#first"}},[t._v("First")])]),a("li",[a("a",{attrs:{href:"#with"}},[t._v("With")])]),a("li",[a("a",{attrs:{href:"#findwherein"}},[t._v("FindWhereIn")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("In traditional development, application logic is often embedded in controllers. An alternative approach uses Repositories to abstract database operations and queries, promoting cleaner, more maintainable code.")]),t._v(" "),a("p",[t._v("Repositories decouple models from controllers and provide readable names for complex queries. Each Repository class binds to an Eloquent model in its constructor, enabling the use of methods like "),a("code",[t._v("findOrFail")]),t._v(", "),a("code",[t._v("update")]),t._v(", and "),a("code",[t._v("all")]),t._v(". This separation enhances code readability, reusability, and adherence to the separation of concerns principle, making the application easier to manage and scale.")]),t._v(" "),a("h2",{attrs:{id:"dependency-injection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dependency-injection"}},[t._v("#")]),t._v(" Dependency Injection")]),t._v(" "),a("p",[t._v("In the given constructor, we are using dependency injection to bind the ExampleRepository to a protected property within the class. This allows for easy access to the repository's methods and ensures that the class adheres to the principle of dependency inversion, promoting loose coupling and enhancing testability.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Bound in constructor")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("__construct")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("ExampleRepository")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$exampleRepository")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("The constructor binds an instance of "),a("code",[t._v("ExampleRepository")]),t._v(" to the "),a("code",[t._v("$exampleRepository")]),t._v(" property of the class. This is achieved using PHP's constructor property promotion, a feature introduced in PHP 8 that simplifies the declaration and initialization of class properties.")]),t._v(" "),a("h2",{attrs:{id:"manually-setting-up-repository-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manually-setting-up-repository-files"}},[t._v("#")]),t._v(" Manually Setting Up Repository Files")]),t._v(" "),a("p",[t._v("Manually setting up repository files involves creating and organizing repository classes in your application without relying on automated generators. This approach allows for custom structuring and naming conventions tailored to your project's needs. By manually managing repository files, developers can ensure precise control over code organization and maintain consistency across the application architecture.")]),t._v(" "),a("h3",{attrs:{id:"setting-up-examplerepository-in-webkul-example-package"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-examplerepository-in-webkul-example-package"}},[t._v("#")]),t._v(" Setting Up ExampleRepository in Webkul/Example Package")]),t._v(" "),a("p",[t._v("Start by creating a "),a("code",[t._v("Repository")]),t._v(" folder within the "),a("code",[t._v("Webkul/Example/src/")]),t._v(" directory. This folder will house the repository class responsible for handling example-related database operations.Create a file named "),a("code",[t._v("ExampleRepository.php")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("└── packages\n    └── Webkul\n        └── Example\n            └── src\n                ├── ...\n                └── Repository\n                    └── ExampleRepository.php\n")])])]),a("p",[t._v("This file will contain the "),a("code",[t._v("ExampleRepository")]),t._v(" class, which will encapsulate methods for interacting with example data.\nCopy the following code into your newly created repository file.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Repository")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Eloquent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Repository")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("ExampleRepository")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Repository")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n    * Specify the Model class name\n    *\n    * @return string\n    */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("model")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword return-type"}},[t._v("string")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Webkul\\Example\\Contracts\\Example'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),a("p",[t._v("The "),a("code",[t._v("model()")]),t._v(" method within ExampleRepository.php returns the path of your contract class ("),a("code",[t._v("ExampleContract")]),t._v(" in this example). This method initializes the model instance used throughout the repository for database interactions.")]),t._v(" "),a("p",[t._v("Your "),a("code",[t._v("ExampleRepository")]),t._v(" is now set up and ready for use within your application. It encapsulates the logic for interacting with example data, following best practices for separation of concerns and promoting clean architecture.")]),t._v(" "),a("p",[t._v("By utilizing the "),a("code",[t._v("ExampleRepository")]),t._v(", you can efficiently perform database operations related to examples while maintaining a structured and maintainable codebase.")]),t._v(" "),a("h2",{attrs:{id:"available-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#available-methods"}},[t._v("#")]),t._v(" Available Methods")]),t._v(" "),a("p",[t._v("We are using the Prettus Repository package. You can find all available methods in the Prettus repository "),a("a",{attrs:{href:"https://github.com/andersao/l5-repository?tab=readme-ov-file#methods",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(". Here are some examples:")]),t._v(" "),a("p",[t._v("Examples:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Sl. no.")]),t._v(" "),a("th",[t._v("Method")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("all")]),t._v(" "),a("td",[t._v("Find all results in the Repository")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("find")]),t._v(" "),a("td",[t._v("Find a result by ID")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("findOrFail")]),t._v(" "),a("td",[t._v("Retrieve a single record by its ID or throw an exception if not found.")])]),t._v(" "),a("tr",[a("td",[t._v("4")]),t._v(" "),a("td",[t._v("create")]),t._v(" "),a("td",[t._v("Create a new record.")])]),t._v(" "),a("tr",[a("td",[t._v("5")]),t._v(" "),a("td",[t._v("update")]),t._v(" "),a("td",[t._v("Update an existing record by its ID.")])]),t._v(" "),a("tr",[a("td",[t._v("6")]),t._v(" "),a("td",[t._v("delete")]),t._v(" "),a("td",[t._v("Delete a record by its ID.")])]),t._v(" "),a("tr",[a("td",[t._v("7")]),t._v(" "),a("td",[t._v("paginate")]),t._v(" "),a("td",[t._v("Find all results in the Repository with pagination")])]),t._v(" "),a("tr",[a("td",[t._v("8")]),t._v(" "),a("td",[t._v("where")]),t._v(" "),a("td",[t._v("Retrieve records matching specific conditions.")])]),t._v(" "),a("tr",[a("td",[t._v("9")]),t._v(" "),a("td",[t._v("first")]),t._v(" "),a("td",[t._v("Retrieve the first record matching specific conditions.")])]),t._v(" "),a("tr",[a("td",[t._v("10")]),t._v(" "),a("td",[t._v("With(['table_name'])")]),t._v(" "),a("td",[t._v("Load the model relationships Eager load relationships")])]),t._v(" "),a("tr",[a("td",[t._v("11")]),t._v(" "),a("td",[t._v("findWhereIn")]),t._v(" "),a("td",[t._v("Find results by multiple values in one field")])])])]),t._v(" "),a("h3",{attrs:{id:"all"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#all"}},[t._v("#")]),t._v(" All")]),t._v(" "),a("p",[t._v("Retrieve all records.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$examples")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("exampleRepository")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("all")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"find"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#find"}},[t._v("#")]),t._v(" Find")]),t._v(" "),a("p",[t._v("Retrieve a single record by its ID.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$example")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("exampleRepository")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"findorfail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#findorfail"}},[t._v("#")]),t._v(" FindOrFail")]),t._v(" "),a("p",[t._v("Retrieve a single record by its ID or throw an exception if not found.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$example")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("exampleRepository")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findOrFail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"create"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create"}},[t._v("#")]),t._v(" Create")]),t._v(" "),a("p",[t._v("Create a new record.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$example")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("exampleRepository")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Input")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("all")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update"}},[t._v("#")]),t._v(" Update")]),t._v(" "),a("p",[t._v("Update an existing record by its ID.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$example")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("exampleRepository")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Input")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("all")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"delete"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[t._v("#")]),t._v(" Delete")]),t._v(" "),a("p",[t._v("Delete a record by its ID.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("exampleRepository")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"paginate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#paginate"}},[t._v("#")]),t._v(" Paginate")]),t._v(" "),a("p",[t._v("Retrieve paginated records.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$examples")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("exampleRepository")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("paginate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$limit")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$columns")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"where"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where"}},[t._v("#")]),t._v(" Where")]),t._v(" "),a("p",[t._v("Retrieve records matching specific conditions.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("exampleRepository")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteWhere")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Default Condition =")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'email'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'admin@example.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"first"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#first"}},[t._v("#")]),t._v(" First")]),t._v(" "),a("p",[t._v("Retrieve the first record matching specific conditions.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("exampleRepository")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findWhere")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Default Condition =")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'email'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'admin@example.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("first")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"with"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#with"}},[t._v("#")]),t._v(" With")]),t._v(" "),a("p",[t._v("Eager load relationships.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$example")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("exampleRepository")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'state'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"findwherein"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#findwherein"}},[t._v("#")]),t._v(" FindWhereIn")]),t._v(" "),a("p",[t._v("Retrieve records where a specified column's value is within a given array of values.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$examples")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("exampleRepository")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findWhereIn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);