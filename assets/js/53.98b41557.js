(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{351:function(t,a,s){"use strict";s.r(a);var e=s(10),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"configuring-supervisor-for-unopim"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-supervisor-for-unopim"}},[t._v("#")]),t._v(" Configuring Supervisor for UnoPIM")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#step-1-install-supervisor"}},[t._v("Step 1: Install Supervisor")])]),a("li",[a("a",{attrs:{href:"#step-2-configure-supervisor-for-unopim"}},[t._v("Step 2: Configure Supervisor for UnoPIM")]),a("ul",[a("li",[a("a",{attrs:{href:"#notes"}},[t._v("Notes:")])])])]),a("li",[a("a",{attrs:{href:"#step-3-apply-changes"}},[t._v("Step 3: Apply Changes")])]),a("li",[a("a",{attrs:{href:"#step-4-start-the-daemon"}},[t._v("Step 4: Start the Daemon")])]),a("li",[a("a",{attrs:{href:"#logs"}},[t._v("Logs")])])])]),a("p"),t._v(" "),a("p",[t._v("Supervisor is used to manage the job queue daemon for UnoPIM. Follow these steps to set it up.")]),t._v(" "),a("h2",{attrs:{id:"step-1-install-supervisor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1-install-supervisor"}},[t._v("#")]),t._v(" Step 1: Install Supervisor")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Update your package manager:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Install Supervisor:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" supervisor\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Verify the installation:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("supervisorctl status\n")])])])])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"step-2-configure-supervisor-for-unopim"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-2-configure-supervisor-for-unopim"}},[t._v("#")]),t._v(" Step 2: Configure Supervisor for UnoPIM")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Navigate to the Supervisor configuration directory:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /etc/supervisor/conf.d\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Create a configuration file named "),a("code",[t._v("unopim_queue_daemon.conf")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nano")]),t._v(" /etc/supervisor/conf.d/unopim_queue_daemon.conf\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Add the following content:")]),t._v(" "),a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[t._v("program:unopim-worker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("/path/to/php /path/to/your/unopim/artisan queue:work")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("autostart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("true")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("autorestart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("true")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("my_user")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("numprocs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("8")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("process_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("%(program_name)s_%(process_num)02d")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("stderr_logfile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("/var/log/unopim_worker.err.log")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("stdout_logfile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("/var/log/unopim_worker.out.log")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("stopasgroup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("true")]),t._v("\n")])])]),a("h3",{attrs:{id:"notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[t._v("#")]),t._v(" Notes:")]),t._v(" "),a("ul",[a("li",[t._v("Replace "),a("code",[t._v("/path/to/php")]),t._v(" with the path to your PHP binary.")]),t._v(" "),a("li",[t._v("Replace "),a("code",[t._v("/path/to/your/unopim")]),t._v(" with the installation directory of UnoPIM.")]),t._v(" "),a("li",[t._v("Replace "),a("code",[t._v("my_user")]),t._v(" with the user that runs PHP-FPM (e.g., "),a("code",[t._v("www-data")]),t._v(").")])])])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"step-3-apply-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-3-apply-changes"}},[t._v("#")]),t._v(" Step 3: Apply Changes")]),t._v(" "),a("p",[t._v("Run the following commands to apply the new Supervisor configuration:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ supervisorctl reread\n$ supervisorctl update\n")])])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"step-4-start-the-daemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-4-start-the-daemon"}},[t._v("#")]),t._v(" Step 4: Start the Daemon")]),t._v(" "),a("p",[t._v("Start the UnoPIM queue daemon:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ supervisorctl start unopim_queue_daemon\n")])])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"logs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logs"}},[t._v("#")]),t._v(" Logs")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Error Log")]),t._v(": "),a("code",[t._v("/var/log/unopim_worker.err.log")])]),t._v(" "),a("li",[a("strong",[t._v("Output Log")]),t._v(": "),a("code",[t._v("/var/log/unopim_worker.out.log")])])]),t._v(" "),a("p",[t._v("Monitor these logs for troubleshooting and ensure the queue daemon runs as expected.")])])}),[],!1,null,null,null);a.default=r.exports}}]);