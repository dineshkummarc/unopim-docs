/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "0.1/advanced/events.html",
    "revision": "4faea956b2d82ff16beda1a2bfa1ee75"
  },
  {
    "url": "0.1/advanced/helpers.html",
    "revision": "003453391c406692e2573886ef130285"
  },
  {
    "url": "0.1/advanced/index.html",
    "revision": "91926740e21dc2bbd6f1439a8d4e08d0"
  },
  {
    "url": "0.1/advanced/override-core-model.html",
    "revision": "6bd3f4aabd923002445baca39eeb8f1c"
  },
  {
    "url": "0.1/advanced/render-event.html",
    "revision": "506695cdb6186b54806e77f911ade45b"
  },
  {
    "url": "0.1/advanced/security-practice.html",
    "revision": "052215edb6542d416a903ca1caf5821b"
  },
  {
    "url": "0.1/api/attribute_families.html",
    "revision": "389136087618ac7696dae5567bba1a5e"
  },
  {
    "url": "0.1/api/attribute_groups.html",
    "revision": "1c6f5713f372037c8298c65018dec93c"
  },
  {
    "url": "0.1/api/attribute_options.html",
    "revision": "8d16cce5a4f62ef843f626ec660fecf5"
  },
  {
    "url": "0.1/api/attribute.html",
    "revision": "4f483eeed2674db1fdda1a4ff6c4cf0a"
  },
  {
    "url": "0.1/api/authenticate.html",
    "revision": "ec4b35ecb29f2ac37b732a019efaf0a9"
  },
  {
    "url": "0.1/api/category_field_options.html",
    "revision": "dd4d1ff493a308aaacf8e280e2207edc"
  },
  {
    "url": "0.1/api/category_fields.html",
    "revision": "11ece573abb6b5025064658c282c2f42"
  },
  {
    "url": "0.1/api/category.html",
    "revision": "4a680b4ff0b542d60d7159fabacd833b"
  },
  {
    "url": "0.1/api/channel.html",
    "revision": "bc749bfc778234eb1eff48b5817ff6c8"
  },
  {
    "url": "0.1/api/configurable_products.html",
    "revision": "3151555a4e7ec99be984abbdc2082ad1"
  },
  {
    "url": "0.1/api/configuration.html",
    "revision": "5d46b1f07c1b19da90096bbf1b19853b"
  },
  {
    "url": "0.1/api/currency.html",
    "revision": "9713241c6d181cb9f745966bc4780245"
  },
  {
    "url": "0.1/api/explanation.html",
    "revision": "4994e6d6623d1aaecaba596ca4ad5694"
  },
  {
    "url": "0.1/api/getting-started-with-the-api.html",
    "revision": "36f963bba412ad4b70bde9c3cf8a428e"
  },
  {
    "url": "0.1/api/index.html",
    "revision": "9d6f8cfa7e0276e53d20632ba3797e0b"
  },
  {
    "url": "0.1/api/locales.html",
    "revision": "9709d4bd2a35604e718fb1216f8d9991"
  },
  {
    "url": "0.1/api/media.html",
    "revision": "4863d3db3fc49da086f598c800de4e4d"
  },
  {
    "url": "0.1/api/postman_collection.html",
    "revision": "7a822b11ac4fdddd08d5f56b9645fee9"
  },
  {
    "url": "0.1/api/product.html",
    "revision": "4bb006f3dbbf3693ce5ba8eec858ae76"
  },
  {
    "url": "0.1/architecture/frontend.html",
    "revision": "05781fb5f804c34f347817d7663c522a"
  },
  {
    "url": "0.1/architecture/index.html",
    "revision": "f4c67a0bee06a281e99af0f8eecc490f"
  },
  {
    "url": "0.1/architecture/modular-design.html",
    "revision": "eb72bb0401eaa48f894cc8caea5f4cda"
  },
  {
    "url": "0.1/architecture/packages.html",
    "revision": "767f67bae8bc11fb30991655adccdffc"
  },
  {
    "url": "0.1/architecture/repository-pattern.html",
    "revision": "835185e6271f112d857f03361c7abda2"
  },
  {
    "url": "0.1/introduction/configuring_supervisor.html",
    "revision": "ba0ff24265e1a8f8241c4bbb86528c10"
  },
  {
    "url": "0.1/introduction/creating-newuser.html",
    "revision": "abf50b591243fafe9dd8c72eab154b3e"
  },
  {
    "url": "0.1/introduction/index.html",
    "revision": "fbb73283dfb2631bb467712ac069c7dd"
  },
  {
    "url": "0.1/introduction/installation.html",
    "revision": "f13ae0caa55c0a89f6a88251bf2edd49"
  },
  {
    "url": "0.1/introduction/requirements.html",
    "revision": "9068688da3c9beeed0a422d6f4470efb"
  },
  {
    "url": "0.1/packages/add-menu-in-admin.html",
    "revision": "824d03db4a23a6b216570667e279ce6a"
  },
  {
    "url": "0.1/packages/blade-components.html",
    "revision": "927352ea225cded0782725d15ba04ca9"
  },
  {
    "url": "0.1/packages/bundling-assets.html",
    "revision": "50b3bbfc241b3aab61c59b1cde831ac3"
  },
  {
    "url": "0.1/packages/controllers.html",
    "revision": "bcf8e640361093b7b4002f21a8419d83"
  },
  {
    "url": "0.1/packages/create-acl.html",
    "revision": "5201d9260dd37b8c20707bae42420610"
  },
  {
    "url": "0.1/packages/create-migrations.html",
    "revision": "82ef9453828340945c65aae399d3c8c4"
  },
  {
    "url": "0.1/packages/create-models.html",
    "revision": "ad5c17a524b9556581d37cf600b2c17e"
  },
  {
    "url": "0.1/packages/create-package.html",
    "revision": "50a5cfe8340ee1291d0f4c153157e3ee"
  },
  {
    "url": "0.1/packages/data-transfer.html",
    "revision": "e6730f2bc80895a6d9927af95f7147cc"
  },
  {
    "url": "0.1/packages/datagrid.html",
    "revision": "7420ae5c0400eb0edae99ef6f1a94bc4"
  },
  {
    "url": "0.1/packages/history.html",
    "revision": "d7c4b820101371b18d4e6066b42911f9"
  },
  {
    "url": "0.1/packages/index.html",
    "revision": "e2a84845e0ec5448d117122a772f9c20"
  },
  {
    "url": "0.1/packages/layouts.html",
    "revision": "c16c95ed8dc4d4cc7ee8115fb42294c7"
  },
  {
    "url": "0.1/packages/localization.html",
    "revision": "f46bce3d3cb93051886aa2ca55ba701f"
  },
  {
    "url": "0.1/packages/routes.html",
    "revision": "f83aad51458ca891c64843087ae03ee3"
  },
  {
    "url": "0.1/packages/store-data-through-repositories.html",
    "revision": "3e659f6d2404d5e32f4f9e06fb58bf7a"
  },
  {
    "url": "0.1/packages/validation.html",
    "revision": "31c7897bb6251cda8214d55fee1d8aa2"
  },
  {
    "url": "0.1/packages/views.html",
    "revision": "b06020f55ff562737cc838654da56831"
  },
  {
    "url": "0.1/plugins/add-side-menu.html",
    "revision": "dcbaecf14f429ef5149333a18d4ff87e"
  },
  {
    "url": "0.1/plugins/create-export-profile.html",
    "revision": "b1a84e5022daeaa09b86e4420224ddda"
  },
  {
    "url": "0.1/plugins/create-import-profile.html",
    "revision": "5873f134d6a49d7534c6a4794b953516"
  },
  {
    "url": "0.1/plugins/create-plugin.html",
    "revision": "2210439003f149a3d2f7640e50e1a964"
  },
  {
    "url": "0.1/plugins/index.html",
    "revision": "1aa306837641c8223c21c28ce8a3e827"
  },
  {
    "url": "0.1/plugins/plugin-deployment.html",
    "revision": "18b87c15f7022915bb2b9c69b44443e8"
  },
  {
    "url": "0.1/prologue/contribution-guide.html",
    "revision": "4c523cca8a7b5d81213e5cc945c0963b"
  },
  {
    "url": "0.1/prologue/index.html",
    "revision": "96446b6c933af9cab9edef75be27f13f"
  },
  {
    "url": "404.html",
    "revision": "6cec10b6f38a49f2257b80335572c6fd"
  },
  {
    "url": "assets/css/0.styles.d1829642.css",
    "revision": "ccd9566401441bcce58ff3468c1db8c5"
  },
  {
    "url": "assets/img/apiKey.530fc37b.png",
    "revision": "530fc37b5c01405e35da6781e2290bc7"
  },
  {
    "url": "assets/img/collection_export.0c1fb331.png",
    "revision": "0c1fb331c40669d9e910069522f993d3"
  },
  {
    "url": "assets/img/configuration.beedd9e9.png",
    "revision": "beedd9e9f84d58e77e3195234ccc4406"
  },
  {
    "url": "assets/img/environment_export.4d1f8856.png",
    "revision": "4d1f885635f60b5af7c4bbdefee828e2"
  },
  {
    "url": "assets/img/environment_variable.5805dc92.png",
    "revision": "5805dc92fb094bf0ad0345c9bd6eb01b"
  },
  {
    "url": "assets/img/generate.63faefc6.png",
    "revision": "63faefc6c374f54f21efa8c2251c30bf"
  },
  {
    "url": "assets/img/saveIntegration.b9b9e346.png",
    "revision": "b9b9e346e2502fc0ab42b337e83c29cf"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.4723c82d.js",
    "revision": "c4c02dd93ead3760668f9c1a34e32fe6"
  },
  {
    "url": "assets/js/10.fed0cda8.js",
    "revision": "0202f7f187ec8af0610fc3e05a95f1d5"
  },
  {
    "url": "assets/js/100.7c5a8c17.js",
    "revision": "44dcb3218d2bc07de390980edf961a65"
  },
  {
    "url": "assets/js/101.e85052ff.js",
    "revision": "76ed8953642e050d0f75c3a71b9a06a2"
  },
  {
    "url": "assets/js/102.bd4fedee.js",
    "revision": "645f14c2d1539954a9908b7b9279ebf0"
  },
  {
    "url": "assets/js/103.c4c0951a.js",
    "revision": "6f71dabace3848c804ed3f23bf143b59"
  },
  {
    "url": "assets/js/104.2ff15db2.js",
    "revision": "ed282dc00c590699d41bc14ec1da13fa"
  },
  {
    "url": "assets/js/105.1251fdb4.js",
    "revision": "35456acb561dff28a74bd916cd2c44dd"
  },
  {
    "url": "assets/js/106.3e71047f.js",
    "revision": "84d5599ebbe1c0c31dd7ef3155b52e36"
  },
  {
    "url": "assets/js/107.ee92d722.js",
    "revision": "cadf534f06dc2517b90c5efdbbda23fc"
  },
  {
    "url": "assets/js/108.b864b44d.js",
    "revision": "d351b4b73b5e5e37b4a2916338b637b4"
  },
  {
    "url": "assets/js/109.79d86d41.js",
    "revision": "f017c467340d52cf0088ef17b9f0d0ff"
  },
  {
    "url": "assets/js/11.7a5942b2.js",
    "revision": "47f2ed28b814943a0210ae159a901a95"
  },
  {
    "url": "assets/js/110.2ae08f68.js",
    "revision": "20c08173decfad904892248c0eb5c106"
  },
  {
    "url": "assets/js/111.223c50ff.js",
    "revision": "ba4fc7ebd2180850b848d592c893d89c"
  },
  {
    "url": "assets/js/112.0ba16a2c.js",
    "revision": "25334dc64ebba8a77ae2ea2fb1035cad"
  },
  {
    "url": "assets/js/113.fc936765.js",
    "revision": "8a8d9c4d0f5cfb465c7f93cd4d307af3"
  },
  {
    "url": "assets/js/114.6a56a59c.js",
    "revision": "0ada0155963d7fbe41354fe9f7208f67"
  },
  {
    "url": "assets/js/115.da2c7ab8.js",
    "revision": "d9da97c65a06ac28189a38be01faca0b"
  },
  {
    "url": "assets/js/116.23962305.js",
    "revision": "e321db30574052b588333b10121bc965"
  },
  {
    "url": "assets/js/117.ef61bd8b.js",
    "revision": "d39103bac1cee930cfd961039e0d9228"
  },
  {
    "url": "assets/js/118.23f53409.js",
    "revision": "31a5edc169ec2de04925f7c8a4687cae"
  },
  {
    "url": "assets/js/119.c21c28f6.js",
    "revision": "b727776974e8f6573fbf15dc08979781"
  },
  {
    "url": "assets/js/12.869a83d5.js",
    "revision": "dde99edf3a2e01854b17368304928f1d"
  },
  {
    "url": "assets/js/120.d31206dc.js",
    "revision": "c3f7ccedac89faa62aa4c95f57ccd5ab"
  },
  {
    "url": "assets/js/121.91216dbb.js",
    "revision": "ad4c87fa956254303d0ae1ddb6d99753"
  },
  {
    "url": "assets/js/122.58b63b22.js",
    "revision": "0799047ecc26c4af178b670867fdd464"
  },
  {
    "url": "assets/js/123.32dc9608.js",
    "revision": "0282abc77008cc54e0f25b414d8c20ae"
  },
  {
    "url": "assets/js/124.9362a801.js",
    "revision": "e8bb2a2a7a1a51cc359145e39162864e"
  },
  {
    "url": "assets/js/125.d51758f0.js",
    "revision": "254383d919c1d91fbc6b1d533cea53d0"
  },
  {
    "url": "assets/js/126.d03a669a.js",
    "revision": "5b09b0a9f00a2d17882a0b3bb22b3046"
  },
  {
    "url": "assets/js/127.1af49989.js",
    "revision": "af4ac13329930b10bf92a0cdde723ffc"
  },
  {
    "url": "assets/js/128.22fab96c.js",
    "revision": "2b73670d4d427830cba3852ad924159b"
  },
  {
    "url": "assets/js/129.87955e51.js",
    "revision": "d5c6e274897c58678d90d369e8a5841b"
  },
  {
    "url": "assets/js/13.9c2c520e.js",
    "revision": "13c4145d59b2ca162df6408a8d21b4c9"
  },
  {
    "url": "assets/js/130.6d67da6f.js",
    "revision": "c6168f8f7e710059c4bb42b10e4acf7c"
  },
  {
    "url": "assets/js/131.b4ed0cf7.js",
    "revision": "98c1f907572dd2c7c0273d5608a5d04f"
  },
  {
    "url": "assets/js/132.5204a131.js",
    "revision": "fc1d33b479350b119429b9fb6ba39d7c"
  },
  {
    "url": "assets/js/133.e2393843.js",
    "revision": "509026f6687266ef874f7f4a02e45960"
  },
  {
    "url": "assets/js/134.9aca845c.js",
    "revision": "874909f28aa78851a751c6e462405de7"
  },
  {
    "url": "assets/js/135.903115ae.js",
    "revision": "817f5879bfbb9cc094ae928d4b63f4f5"
  },
  {
    "url": "assets/js/136.71c1fc26.js",
    "revision": "669095dac371f0b07ea1a52971579a9b"
  },
  {
    "url": "assets/js/137.ab2503fa.js",
    "revision": "4f2380379b589ec19c105df3a99bbd28"
  },
  {
    "url": "assets/js/138.2af7b8bd.js",
    "revision": "548fe55eb9bdedeb3460e34cdd92f621"
  },
  {
    "url": "assets/js/139.3d9ae57c.js",
    "revision": "69e18419b9b38be6a5c3c30bb1ac74b1"
  },
  {
    "url": "assets/js/14.b062c4c6.js",
    "revision": "335759fe9a13c3c4414174b23c978fb2"
  },
  {
    "url": "assets/js/140.f503e944.js",
    "revision": "0746bb6e2b629bf29a42441da0efe29a"
  },
  {
    "url": "assets/js/141.50bbe411.js",
    "revision": "97b46d1d5d825bfe6890c3cb3f120778"
  },
  {
    "url": "assets/js/142.f57763fe.js",
    "revision": "7a0a6956d3f50ca62217e26df322ed34"
  },
  {
    "url": "assets/js/143.6180239f.js",
    "revision": "1c67f0be01a92412b9d27e30d9d0d5c8"
  },
  {
    "url": "assets/js/144.b35c7643.js",
    "revision": "adfa8e001c68ee2ded55fa383c5e0619"
  },
  {
    "url": "assets/js/15.074494e5.js",
    "revision": "007cdff8d2f8cca9ddcbce866cc15210"
  },
  {
    "url": "assets/js/16.00f79b3e.js",
    "revision": "1322e09dbc454cc982bce708e8fb3b91"
  },
  {
    "url": "assets/js/17.f81d5789.js",
    "revision": "93de3f085ce54cb8902db2ab94e1302a"
  },
  {
    "url": "assets/js/18.0b390a25.js",
    "revision": "6651c7e04ff9312951b25a7d0ea3968f"
  },
  {
    "url": "assets/js/19.d5598e67.js",
    "revision": "6faf6fe3efb4136f7017bc670a6066d7"
  },
  {
    "url": "assets/js/2.466c6646.js",
    "revision": "ba2b24fb67e591ece43f493159f91cb3"
  },
  {
    "url": "assets/js/20.14b34ea9.js",
    "revision": "bbb5d74b813e0c070377434bc6ee7c62"
  },
  {
    "url": "assets/js/21.98281c1b.js",
    "revision": "1e7b6bbf5531b6e50b3be33c9e683de8"
  },
  {
    "url": "assets/js/22.db3db27b.js",
    "revision": "8b81fa872f1ff8146f863cdae392237e"
  },
  {
    "url": "assets/js/23.d4e03221.js",
    "revision": "6347347056827be2ad15df29d518b9a9"
  },
  {
    "url": "assets/js/24.12358281.js",
    "revision": "f916ba5b993c016db13557cf89c2bf3e"
  },
  {
    "url": "assets/js/25.d5c285d1.js",
    "revision": "8bef706b01949f4ec5511dd36db8c589"
  },
  {
    "url": "assets/js/26.b1aecfac.js",
    "revision": "aaaeab47e978a24b0b07eca3cbce2397"
  },
  {
    "url": "assets/js/27.ae9056f2.js",
    "revision": "3aa2f8f4950c5a261d844c1cbad07387"
  },
  {
    "url": "assets/js/28.ae35ced3.js",
    "revision": "b44772817544ba0dc39a564396c20907"
  },
  {
    "url": "assets/js/29.7a8c5ff0.js",
    "revision": "120516321ba01c0ceb3676288b9c411a"
  },
  {
    "url": "assets/js/3.c08788cf.js",
    "revision": "9a5397d300c118eaed270de3385d25b0"
  },
  {
    "url": "assets/js/30.96f663fd.js",
    "revision": "fc304b529965573e477dc73ff77e76fe"
  },
  {
    "url": "assets/js/31.a61361ac.js",
    "revision": "66520e7fe9fab98b81d97507534b2484"
  },
  {
    "url": "assets/js/32.f798d157.js",
    "revision": "60a5c8918041d0243e6c68c040855e43"
  },
  {
    "url": "assets/js/33.feba05de.js",
    "revision": "cfb41b589946298d15d9686266e81f0c"
  },
  {
    "url": "assets/js/34.bc36d499.js",
    "revision": "ed30413fbce2499299fee8c8c17b7b4f"
  },
  {
    "url": "assets/js/35.e104785a.js",
    "revision": "c3c6a16ba97af79f0191d308524f0271"
  },
  {
    "url": "assets/js/36.2385f469.js",
    "revision": "efa53a4fc234eba0833e222456d1b32a"
  },
  {
    "url": "assets/js/37.0137c944.js",
    "revision": "4cf5c4e8461de8d9ef64aa900016ed95"
  },
  {
    "url": "assets/js/38.3b83ab72.js",
    "revision": "6bd6e72dec5cfe3061bfa98d51469a0a"
  },
  {
    "url": "assets/js/39.4f0dd914.js",
    "revision": "639d7b2e6d3f23a55ec5060f6a7a6319"
  },
  {
    "url": "assets/js/4.7528cfee.js",
    "revision": "3d5eee6141c415de30f9556231051c62"
  },
  {
    "url": "assets/js/40.84257efe.js",
    "revision": "3500cf373c5fa9f883e6be90ab9de6a7"
  },
  {
    "url": "assets/js/41.2132c626.js",
    "revision": "d3fe179ba48eb14546cf884b71b40573"
  },
  {
    "url": "assets/js/42.76cea26c.js",
    "revision": "999577361dad44f4c616ee12151afe77"
  },
  {
    "url": "assets/js/43.d755fa45.js",
    "revision": "ce53e8a1dd039ce2a01207bc639c7b60"
  },
  {
    "url": "assets/js/44.ae6edabc.js",
    "revision": "5577567dad32cd709543f259c5ece038"
  },
  {
    "url": "assets/js/45.425239dd.js",
    "revision": "741561075c963ee316db6d9a98732cd3"
  },
  {
    "url": "assets/js/46.d59cc5a9.js",
    "revision": "8226417d4afd38b687294d13c3512f9a"
  },
  {
    "url": "assets/js/47.58e82176.js",
    "revision": "86f38a13c423266e36c12323f41dc60a"
  },
  {
    "url": "assets/js/48.6cb5e000.js",
    "revision": "aaecd05088d406d0a6fae5a18cf862ba"
  },
  {
    "url": "assets/js/49.7c227cf0.js",
    "revision": "eb50457819e1581fe02aeb72974f6200"
  },
  {
    "url": "assets/js/5.5873d029.js",
    "revision": "1a8e799eb717b41b19039adaf73f51e6"
  },
  {
    "url": "assets/js/50.0b419f14.js",
    "revision": "6481f23dc267494a5192477113f0d67d"
  },
  {
    "url": "assets/js/51.09ab9406.js",
    "revision": "a702a7243dea591e7d8f9e02cc2482e5"
  },
  {
    "url": "assets/js/52.69bf0982.js",
    "revision": "874e680174e6f0ecbe54131ec08a5e84"
  },
  {
    "url": "assets/js/53.98b41557.js",
    "revision": "4defa8a19fff6e8f965c0e5542d7515f"
  },
  {
    "url": "assets/js/54.4eebf92f.js",
    "revision": "1482f73cc7aaf70faf13b1642905427a"
  },
  {
    "url": "assets/js/55.7bca28d3.js",
    "revision": "be6d27bfb6bf7026bed004a6b0e56ef9"
  },
  {
    "url": "assets/js/56.4c919cee.js",
    "revision": "8dc174c6c73a17116c1263fae7c40522"
  },
  {
    "url": "assets/js/57.b9064135.js",
    "revision": "7b63c421937ed263436b2c2a5979da50"
  },
  {
    "url": "assets/js/58.4c4390bb.js",
    "revision": "1f44e6eb5429653b438ce5e4a1d3dbe5"
  },
  {
    "url": "assets/js/59.40c207ba.js",
    "revision": "deba41754c35e706990379707db5d18f"
  },
  {
    "url": "assets/js/60.d102b10a.js",
    "revision": "ddbb490409c97fc09f206685a1f5b186"
  },
  {
    "url": "assets/js/61.c61eb634.js",
    "revision": "d2a74bac13cf56678a66ee48f198c7bc"
  },
  {
    "url": "assets/js/62.c75efc70.js",
    "revision": "cdc23b74b80bef350625f2a7c3d3f4b0"
  },
  {
    "url": "assets/js/63.7888c3a2.js",
    "revision": "20263cea02a6a44f1b3a8dcec6c50472"
  },
  {
    "url": "assets/js/64.7f8cb3b6.js",
    "revision": "4a22006820ac6faa265c73b092653c80"
  },
  {
    "url": "assets/js/65.48c92b8c.js",
    "revision": "9c9e01ae64b36d5050fe57c9e3aa5c4b"
  },
  {
    "url": "assets/js/66.12006d28.js",
    "revision": "4b219cd43bfef9f8a087817313015dd5"
  },
  {
    "url": "assets/js/67.cef3f450.js",
    "revision": "5ffe8eb3a8285c687c0870e34306c0ae"
  },
  {
    "url": "assets/js/68.bd7b5418.js",
    "revision": "00a7ea813041f5db01ba688750829d18"
  },
  {
    "url": "assets/js/69.aa0a0c8b.js",
    "revision": "d1062d0d46009d928f4cc1f950a44eb4"
  },
  {
    "url": "assets/js/70.42261e56.js",
    "revision": "06a9f1363e00448f1a4998cec289857d"
  },
  {
    "url": "assets/js/71.2d4587c2.js",
    "revision": "7efab9b7c3d9c67c4ed4a59a1661954b"
  },
  {
    "url": "assets/js/72.6d8cc15c.js",
    "revision": "bfc79831434c820ac081ef5b8eef340f"
  },
  {
    "url": "assets/js/73.cf767379.js",
    "revision": "64a63d1d6788428be0bdffda72d090ff"
  },
  {
    "url": "assets/js/74.8e073d0d.js",
    "revision": "719a4cd4937a8d70165ca312d2edff4d"
  },
  {
    "url": "assets/js/75.ad4e1a31.js",
    "revision": "fdcaa3b03bf02f19230469648d0e378c"
  },
  {
    "url": "assets/js/76.a26a9b3f.js",
    "revision": "8db72dae2dd94a063357dc874a8228cd"
  },
  {
    "url": "assets/js/77.cea22d78.js",
    "revision": "8966bbe2e2da2d9ab897d27f3af06748"
  },
  {
    "url": "assets/js/78.8ecd46e0.js",
    "revision": "35881b1aefde84d2439a02e9570bc933"
  },
  {
    "url": "assets/js/79.b30adda9.js",
    "revision": "631cd56fd28be06c29575de6f4cae021"
  },
  {
    "url": "assets/js/8.11eb4c04.js",
    "revision": "e6f1463d058e8995cf88e3027da8e36c"
  },
  {
    "url": "assets/js/80.46a486c4.js",
    "revision": "426231e9afae21a70a8a9a946a9f24a6"
  },
  {
    "url": "assets/js/81.b7f23e41.js",
    "revision": "1006cb8a540bc75ba39dcade8b685101"
  },
  {
    "url": "assets/js/82.484e831a.js",
    "revision": "0f82946f8278ce21ba3b3f647ec7a812"
  },
  {
    "url": "assets/js/83.95b86a33.js",
    "revision": "8b81c8a04e6c6d04f77fadb1987a57f8"
  },
  {
    "url": "assets/js/84.66eeae4b.js",
    "revision": "f4f6f640417ab45b7049bda4d8b76ceb"
  },
  {
    "url": "assets/js/85.164b905f.js",
    "revision": "091c93304a51b5a1cafe8d66089b4ffa"
  },
  {
    "url": "assets/js/86.b06f9910.js",
    "revision": "656de00cc5be01444e0568c3ddc6ee18"
  },
  {
    "url": "assets/js/87.5f065c4a.js",
    "revision": "a9125578327fb887b2b2b0d274ee92b4"
  },
  {
    "url": "assets/js/88.b74bb6f6.js",
    "revision": "dbca8ea83b55b3f84e948683344ce794"
  },
  {
    "url": "assets/js/89.58cc48e9.js",
    "revision": "dec36674a0a1f58d6331924bf45eaa53"
  },
  {
    "url": "assets/js/9.87cd171b.js",
    "revision": "09ac2a291466db1d881498af5aa28d8a"
  },
  {
    "url": "assets/js/90.1952bc4e.js",
    "revision": "b4775d5695fa27f392e26b341109523f"
  },
  {
    "url": "assets/js/91.ed4367ea.js",
    "revision": "645cc3aad88214a48080dc9aea89a32e"
  },
  {
    "url": "assets/js/92.95d41027.js",
    "revision": "33796e3dd903f9f18c1b9af1fd6b30d7"
  },
  {
    "url": "assets/js/93.ba31d9f1.js",
    "revision": "c3fdc9b32cf0a617c70979096c882cf3"
  },
  {
    "url": "assets/js/94.7e7f62bd.js",
    "revision": "b01cfcb8b007188396b6277a5be35e0d"
  },
  {
    "url": "assets/js/95.e542468c.js",
    "revision": "47912545c3279b9fef3455f0ff9ca8bc"
  },
  {
    "url": "assets/js/96.ba827395.js",
    "revision": "3b630bebcf4da1660b59c8258ac456a6"
  },
  {
    "url": "assets/js/97.799c6e9e.js",
    "revision": "9f7e19f89259d3448c70cc755a6fcc50"
  },
  {
    "url": "assets/js/98.56058334.js",
    "revision": "f68e567d18f198c7cc5bd30f84637c34"
  },
  {
    "url": "assets/js/99.e38cd91a.js",
    "revision": "eb46d5f81ade112b2aef162fb6f61e57"
  },
  {
    "url": "assets/js/app.df605bb5.js",
    "revision": "0598e29ce5b568c1de7982d8c021d72c"
  },
  {
    "url": "assets/js/vendors~docsearch.853f9491.js",
    "revision": "2a35ff79546433b513381c2030dc1b6f"
  },
  {
    "url": "index.html",
    "revision": "b166049ec1c1f614f269884a2f3333d4"
  },
  {
    "url": "logo.png",
    "revision": "b6fe2a7e1a8fcc87485babdbcb598c31"
  },
  {
    "url": "master/advanced/events.html",
    "revision": "7c8872d51332d1978be074818045bdf1"
  },
  {
    "url": "master/advanced/helpers.html",
    "revision": "d10069241d76300708422120dbce1288"
  },
  {
    "url": "master/advanced/index.html",
    "revision": "2817d3a6087cc60bd7f7d6b5721d6deb"
  },
  {
    "url": "master/advanced/override-core-model.html",
    "revision": "455f7e1f6e1dd5d5a9982acb3d4aab37"
  },
  {
    "url": "master/advanced/render-event.html",
    "revision": "60a4dfe1b8d28bf2f288e93aabc98671"
  },
  {
    "url": "master/advanced/security-practice.html",
    "revision": "60db32f5977b02a193d813f6c0735818"
  },
  {
    "url": "master/api/attribute_families.html",
    "revision": "8c6e0cfe8a7ed6abd7c088330e886363"
  },
  {
    "url": "master/api/attribute_groups.html",
    "revision": "35bbec9834e31b124922b185eaad040b"
  },
  {
    "url": "master/api/attribute_options.html",
    "revision": "7ca829422c2ae84ebfac65e82efe700e"
  },
  {
    "url": "master/api/attribute.html",
    "revision": "fef399f37a54a4dcdc9691380d492d39"
  },
  {
    "url": "master/api/authenticate.html",
    "revision": "961d0be9d09a29a8c8c1d44b20a9afdc"
  },
  {
    "url": "master/api/category_field_options.html",
    "revision": "3b2cacc16d46a5860f8462e3c52798f9"
  },
  {
    "url": "master/api/category_fields.html",
    "revision": "afeefcb707fb1000926865f9a09ad863"
  },
  {
    "url": "master/api/category.html",
    "revision": "afd2bbe3aec9e65fc9ea6f01f2ea359c"
  },
  {
    "url": "master/api/channel.html",
    "revision": "6890e54e7cd804a04774f6220b17e4bf"
  },
  {
    "url": "master/api/configurable_products.html",
    "revision": "c20a6d2e17ae29fe61b90714b577e29e"
  },
  {
    "url": "master/api/configuration.html",
    "revision": "612bb4d0d830c4cb86edff124add99dd"
  },
  {
    "url": "master/api/currency.html",
    "revision": "1bac6829255e85dd37ab5b51c1c19769"
  },
  {
    "url": "master/api/explanation.html",
    "revision": "a538806bd3bcc9a34a2cd5e752a097ea"
  },
  {
    "url": "master/api/getting-started-with-the-api.html",
    "revision": "21e021c9a58411ce42c80bd0ad9a5443"
  },
  {
    "url": "master/api/index.html",
    "revision": "429507a9640d575e12d199cd9b7cf6de"
  },
  {
    "url": "master/api/locales.html",
    "revision": "0e83d773fefdfd9e62fa40e2330a48bc"
  },
  {
    "url": "master/api/media.html",
    "revision": "a874f8f5b5c546f29bf574731a26861f"
  },
  {
    "url": "master/api/postman_collection.html",
    "revision": "15163e2829daeb98a2b6d1fb48a540e9"
  },
  {
    "url": "master/api/product.html",
    "revision": "23f59e2654edaa938d5afbe936674101"
  },
  {
    "url": "master/architecture/frontend.html",
    "revision": "fa777388868bb16c3e411cfd06bc51d3"
  },
  {
    "url": "master/architecture/index.html",
    "revision": "44bc057252ee554cb4a2b33ca1d24312"
  },
  {
    "url": "master/architecture/modular-design.html",
    "revision": "b9aac2505ec83b25c0b50b67501184a1"
  },
  {
    "url": "master/architecture/packages.html",
    "revision": "1477ba018f9bdbb886ecfe9f69f4152f"
  },
  {
    "url": "master/architecture/repository-pattern.html",
    "revision": "bcba4ce3acb664a68b0715e9698026a0"
  },
  {
    "url": "master/introduction/configuring_supervisor.html",
    "revision": "8cc23c9f0a43f148d3563b01a9035f4d"
  },
  {
    "url": "master/introduction/creating-newuser.html",
    "revision": "0e666d47b20e521b336a05818e3e9858"
  },
  {
    "url": "master/introduction/index.html",
    "revision": "a0822dd6c3a5599ea799cc17c2106b4c"
  },
  {
    "url": "master/introduction/installation.html",
    "revision": "8269a4f96d9e7886ac70b8dd07e2fcce"
  },
  {
    "url": "master/introduction/requirements.html",
    "revision": "6295d4f0a801c8ae4f109914e9e7c14a"
  },
  {
    "url": "master/packages/add-menu-in-admin.html",
    "revision": "652a86f4de0d4e2a6d6c28ac37a68314"
  },
  {
    "url": "master/packages/blade-components.html",
    "revision": "959a6f4c5013b0205bea705cafa65824"
  },
  {
    "url": "master/packages/bundling-assets.html",
    "revision": "77be93031be227e3fb778260a40f32b5"
  },
  {
    "url": "master/packages/controllers.html",
    "revision": "ba749ab665572c124dc87e46c2d84c02"
  },
  {
    "url": "master/packages/create-acl.html",
    "revision": "4a6aabac0a51f51ef6d10fccca28f0af"
  },
  {
    "url": "master/packages/create-migrations.html",
    "revision": "8e46cf6377d9b392c18086027ea9a493"
  },
  {
    "url": "master/packages/create-models.html",
    "revision": "044c096713874d16a3eba3b905a20b3e"
  },
  {
    "url": "master/packages/create-package.html",
    "revision": "b078447ac3675f2fa10f9f14448a6a89"
  },
  {
    "url": "master/packages/data-transfer.html",
    "revision": "4f96496492c84bfddfb26c5ff24a7d19"
  },
  {
    "url": "master/packages/datagrid.html",
    "revision": "1eb3d14982036b9397c1244736ee037a"
  },
  {
    "url": "master/packages/history.html",
    "revision": "99cda87bafb62c710449cb2a539a3966"
  },
  {
    "url": "master/packages/index.html",
    "revision": "bf362a212043ee0191112b1a76631320"
  },
  {
    "url": "master/packages/layouts.html",
    "revision": "0849cc6b0a4594c462180c05d5ff2dd6"
  },
  {
    "url": "master/packages/localization.html",
    "revision": "6c6fe011c04becd7a805b86063eaaec8"
  },
  {
    "url": "master/packages/routes.html",
    "revision": "4a7f20ab547cff83ad5e4a076b3ad5bc"
  },
  {
    "url": "master/packages/store-data-through-repositories.html",
    "revision": "b8617696a7e06a7f2f51582fdf129efc"
  },
  {
    "url": "master/packages/validation.html",
    "revision": "6399a42b5192df5ca1111c80b4ea3b55"
  },
  {
    "url": "master/packages/views.html",
    "revision": "0b7c3aa338fbc26c5e0a99224321ed2c"
  },
  {
    "url": "master/plugins/add-side-menu.html",
    "revision": "c5a0c6c987b8700ec17d17549a24585c"
  },
  {
    "url": "master/plugins/create-export-profile.html",
    "revision": "e9ddce190dd199dc9eddb7e5a80e33ad"
  },
  {
    "url": "master/plugins/create-import-profile.html",
    "revision": "0fff5311d7c6582bc1aaa75864751113"
  },
  {
    "url": "master/plugins/create-plugin.html",
    "revision": "40982ed24c39d071b921524f1240582e"
  },
  {
    "url": "master/plugins/index.html",
    "revision": "3d6a76ce1247204376796f3f828b7127"
  },
  {
    "url": "master/plugins/plugin-deployment.html",
    "revision": "a636a37aa93b057ad0b76cd788fb0486"
  },
  {
    "url": "master/prologue/contribution-guide.html",
    "revision": "56fa4a003e422d6f8e01dd1b3cd027f9"
  },
  {
    "url": "master/prologue/index.html",
    "revision": "1b08e292c516e3593a6cc51c2999ed97"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
