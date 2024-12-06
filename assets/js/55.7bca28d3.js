(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{353:function(t,e,a){"use strict";a.r(e);var s=a(10),o=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#install-using-composer"}},[t._v("Install Using Composer")])]),e("li",[e("a",{attrs:{href:"#installation-with-docker"}},[t._v("Installation with Docker")])]),e("li",[e("a",{attrs:{href:"#start-using-unopim"}},[t._v("Start Using UnoPim")]),e("ul",[e("li",[e("a",{attrs:{href:"#on-a-production-server"}},[t._v("On a Production Server")])]),e("li",[e("a",{attrs:{href:"#on-your-local-server"}},[t._v("On Your Local Server")])])])]),e("li",[e("a",{attrs:{href:"#configuring-the-virtual-host"}},[t._v("Configuring the Virtual Host")]),e("ul",[e("li",[e("a",{attrs:{href:"#creating-the-virtual-host-file"}},[t._v("Creating the Virtual Host File")])]),e("li",[e("a",{attrs:{href:"#enabling-the-virtual-host"}},[t._v("Enabling the Virtual Host")])]),e("li",[e("a",{attrs:{href:"#adding-the-virtual-host-name"}},[t._v("Adding the Virtual Host Name")])])])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"install-using-composer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-using-composer"}},[t._v("#")]),t._v(" Install Using Composer")]),t._v(" "),e("p",[t._v("To install UnoPim using Composer, use the following steps:")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Choose the directory where you want to install UnoPim. Open your terminal and navigate to this directory.")])]),t._v(" "),e("li",[e("p",[t._v("If you have downloaded the zip file from the Git repository, extract the files into your desired directory and run the following command to set up the project:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("composer")]),t._v(" create-project\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Otherwise, to directly install UnoPim, run the following command in your terminal:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("composer")]),t._v(" create-project unopim/unopim\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Run the following command to complete the installation:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("php artisan unopim:install\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("During the installation process, if the "),e("strong",[e("code",[t._v(".env")])]),t._v(" file doesn't exist, the installer will prompt you to provide the necessary information.")])]),t._v(" "),e("ul",[e("li",[t._v("Follow the prompts during the installation process to provide the following details:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("- Please Enter the APP URL :\n- Please Enter the Application Name : \n- Please select the default locale :\n- Please enter the default currency :\n- Please choose the Allowed Locales for your channels :\n- Please choose the Allowed Currencies for your channels :\n- Please select the Database Connection :\n- Please enter the Database Host :\n- Please enter the Database Port Number :\n- Please enter the Database Name :\n- Please enter the Database Prefix :\n- Please enter the Database Username :\n- Please enter the Database Password :\n")])])]),e("ul",[e("li",[t._v("For Create your admin credentials:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("- Enter the Name of Admin User :\n- Enter the Email address of the Admin User :\n- Configure the Password for admin user :\n")])])])])]),t._v(" "),e("h2",{attrs:{id:"installation-with-docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation-with-docker"}},[t._v("#")]),t._v(" Installation with Docker")]),t._v(" "),e("p",[t._v("If you have Docker/Docker Compose installed, follow these steps:")]),t._v(" "),e("ol",[e("li",[e("p",[e("strong",[t._v("Clone the repository")]),t._v(":")]),t._v(" "),e("ul",[e("li",[t._v("HTTPS: "),e("code",[t._v("git clone https://github.com/unopim/unopim.git")])]),t._v(" "),e("li",[t._v("SSH: "),e("code",[t._v("git clone git@github.com:unopim/unopim.git")])])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Enter the directory")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" unopim\n")])])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Start the Docker containers")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker-compose")]),t._v(" up "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v("\n")])])]),e("p",[t._v("This will pull the necessary images and set up the environment. Once running, access the application at:")]),t._v(" "),e("ul",[e("li",[t._v("Application: "),e("code",[t._v("http://localhost:8000")])]),t._v(" "),e("li",[t._v("MySQL: "),e("code",[t._v("http://localhost:3306")])])])])]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("Note")]),t._v(":"),e("br"),t._v("\nIf MySQL is already running on your system, change the MySQL port in the "),e("code",[t._v("docker-compose.yml")]),t._v(" and "),e("code",[t._v(".env")]),t._v(" files."),e("br"),t._v("\nRun "),e("code",[t._v("docker-compose up -d")]),t._v(" again to apply changes.")])]),t._v(" "),e("h2",{attrs:{id:"start-using-unopim"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-using-unopim"}},[t._v("#")]),t._v(" Start Using UnoPim")]),t._v(" "),e("h3",{attrs:{id:"on-a-production-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#on-a-production-server"}},[t._v("#")]),t._v(" On a Production Server")]),t._v(" "),e("p",[t._v("To access UnoPim on a production server, open your domain in a web browser. For example:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("https://example.com/\n")])])]),e("h3",{attrs:{id:"on-your-local-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#on-your-local-server"}},[t._v("#")]),t._v(" On Your Local Server")]),t._v(" "),e("p",[t._v("To access UnoPim on your local server, follow these steps:")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Configure your HTTP server to point to the "),e("strong",[e("code",[t._v("public/")])]),t._v(" directory of the project.")])]),t._v(" "),e("li",[e("p",[t._v("Run the following command:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("php artisan serve\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Open your browser and access the provided local server URL.")])])]),t._v(" "),e("h2",{attrs:{id:"configuring-the-virtual-host"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-virtual-host"}},[t._v("#")]),t._v(" Configuring the Virtual Host")]),t._v(" "),e("h3",{attrs:{id:"creating-the-virtual-host-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-virtual-host-file"}},[t._v("#")]),t._v(" Creating the Virtual Host File")]),t._v(" "),e("p",[t._v("This guide explains how to create and configure a virtual host for Apache to point to the installation folder of UnoPIM, Create the file "),e("strong",[e("code",[t._v("/etc/apache2/sites-available/unopim.local.conf")])]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-apache extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<VirtualHost *:80>\n    ServerName unopim.local\n\n    DocumentRoot /path/to/installation/unopim/public\n    <Directory /path/to/installation/unopim/public>\n        Options FollowSymLinks MultiViews\n        AllowOverride All\n        Require all granted\n    </Directory>\n\n    ReWriteEngine On\n\n    <FilesMatch \\.php$>\n        SetHandler "proxy:unix:/run/php/php8.2-fpm.sock|fcgi://localhost/"\n    </FilesMatch>\n\n    ErrorLog ${APACHE_LOG_DIR}/unopim_error.log\n    LogLevel warn\n    CustomLog ${APACHE_LOG_DIR}/unopim_access.log combined\n</VirtualHost>\n')])])]),e("p",[t._v("Notes:")]),t._v(" "),e("ul",[e("li",[t._v("Replace "),e("strong",[e("code",[t._v("/path/to/installation")])]),t._v(" with the actual path where UnoPIM is installed.")]),t._v(" "),e("li",[t._v("Ensure that "),e("strong",[e("code",[t._v("/run/php/php8.2-fpm.sock")])]),t._v(" matches the socket path defined in "),e("strong",[e("code",[t._v("/etc/php/8.2/fpm/pool.d/www.conf")])]),t._v(". Update this value if it differs.")])]),t._v(" "),e("h3",{attrs:{id:"enabling-the-virtual-host"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#enabling-the-virtual-host"}},[t._v("#")]),t._v(" Enabling the Virtual Host")]),t._v(" "),e("p",[t._v("Run the following commands to enable the virtual host:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" apache2ctl configtest\n "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This will return 'Syntax OK'")]),t._v("\n\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" a2ensite unopim.local\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" apache2 reload\n")])])]),e("h3",{attrs:{id:"adding-the-virtual-host-name"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adding-the-virtual-host-name"}},[t._v("#")]),t._v(" Adding the Virtual Host Name")]),t._v(" "),e("p",[t._v("Add the following entry to your "),e("strong",[e("code",[t._v("/etc/hosts")])]),t._v(" file:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" 127.0.0.1    unopim.local\n")])])]),e("p",[t._v("Your virtual host configuration for UnoPIM is now complete. Visit "),e("strong",[e("code",[t._v("http://unopim.local")])]),t._v(" in your browser to access the application.")])])}),[],!1,null,null,null);e.default=o.exports}}]);