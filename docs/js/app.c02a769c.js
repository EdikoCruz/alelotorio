(function(t){function e(e){for(var o,n,r=e[0],l=e[1],c=e[2],u=0,d=[];u<r.length;u++)n=r[u],s[n]&&d.push(s[n][0]),s[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],o=!0,n=1;n<a.length;n++){var r=a[n];0!==s[r]&&(o=!1)}o&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var o={},n={app:0},s={app:0},i=[];function r(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"69ad75b8"}[t]+".js"}function l(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={about:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise(function(e,a){for(var o="css/"+({about:"about"}[t]||t)+"."+{about:"7fc28ccf"}[t]+".css",n=l.p+o,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var r=s[i],c=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(c===o||c===n))return e()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){r=u[i],c=r.getAttribute("data-href");if(c===o||c===n)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var o=e&&e.target&&e.target.src||n,s=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");s.request=o,a(s)},d.href=n;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){n[t]=0}));var o=s[t];if(0!==o)if(o)e.push(o[2]);else{var i=new Promise(function(e,a){o=s[t]=[e,a]});e.push(o[2]=i);var c,u=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=r(t),c=function(e){d.onerror=d.onload=null,clearTimeout(p);var a=s[t];if(0!==a){if(a){var o=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+o+": "+n+")");i.type=o,i.request=n,a[1](i)}s[t]=void 0}};var p=setTimeout(function(){c({type:"timeout",target:d})},12e4);d.onerror=d.onload=c,u.appendChild(d)}return Promise.all(e)},l.m=t,l.c=o,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(a,o,function(e){return t[e]}.bind(null,o));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/alelotorio/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var p=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"0931":function(t,e,a){"use strict";var o=a("7213"),n=a.n(o);n.a},"0df0":function(t,e,a){},"128d":function(t,e,a){},1914:function(t,e,a){},"21bb":function(t,e,a){"use strict";var o=a("1914"),n=a.n(o);n.a},2856:function(t,e,a){},"29c5":function(t,e,a){"use strict";var o=a("0df0"),n=a.n(o);n.a},4678:function(t,e,a){var o={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=s(t);return a(e)}function s(t){var e=o[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}n.keys=function(){return Object.keys(o)},n.resolve=s,t.exports=n,n.id="4678"},"578f":function(t,e,a){"use strict";var o=a("128d"),n=a.n(o);n.a},"5c0b":function(t,e,a){"use strict";var o=a("2856"),n=a.n(o);n.a},7213:function(t,e,a){},"90e1":function(t,e,a){"use strict";var o=a("d6af"),n=a.n(o);n.a},cd49:function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var o=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav",[a("div",{staticClass:"nav-wrapper"},[a("router-link",{staticClass:"brand-logo center",attrs:{to:"/"}},[t._v("Alelotório")])],1)]),a("router-view")],1)},s=[],i=(a("5c0b"),a("2877")),r={},l=Object(i["a"])(r,n,s,!1,null,null,null);l.options.__file="App.vue";var c=l.exports,u=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home container"},[a("form",{staticClass:"col s12 vertical-margin",on:{submit:function(t){t.preventDefault()}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12 l5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.population.name,expression:"population.name"}],attrs:{id:"population-name",type:"text"},domProps:{value:t.population.name},on:{input:function(e){e.target.composing||t.$set(t.population,"name",e.target.value)}}}),a("label",{attrs:{for:"population-name"}},[t._v("Nome")])]),a("div",{staticClass:"input-field col s12 l5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.population.size,expression:"population.size"}],attrs:{id:"population-size",type:"number",min:t.config.minSize,max:t.config.maxSize,step:t.config.step},domProps:{value:t.population.size},on:{input:function(e){e.target.composing||t.$set(t.population,"size",e.target.value)}}}),a("label",{attrs:{for:"population-size"}},[t._v("Tamanho")])]),a("div",{staticClass:"input-field col s12 l2 center-align"},[a("button",{staticClass:"waves-effect waves-light btn",on:{click:t.addPopulation}},[t._v("Adicionar")])])])]),a("div",{staticClass:"divider"}),a("table",{staticClass:"striped centered vertical-margin"},[t._m(0),a("tbody",t._l(t.populations,function(e,o){return a("tr",{key:o},[a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.size))]),a("td",[a("button",{staticClass:"waves-effect waves-light btn",on:{click:function(e){t.removePopulation(o)}}},[a("i",{staticClass:"material-icons center"},[t._v("delete")])])])])})),a("tfoot",[a("tr",[a("td",{staticClass:"center-align",attrs:{colspan:"3"}},[a("button",{staticClass:"waves-effect waves-light btn",on:{click:t.generateOffspring}},[t._v("Gerar Gráficos")])])])])]),a("div",{staticClass:"row"},[a("ul",{staticClass:"col s12 tabs teal lighten-5"},[a("li",{staticClass:"tab"},[a("a",{class:[-1===t.tabs.show?"active":""],on:{click:function(e){t.tabs.show=-1}}},[t._v("Todos")])]),t._l(t.populations,function(e,o){return a("li",{key:o,staticClass:"tab"},[a("a",{class:[t.tabs.show===o?"active":""],on:{click:function(e){t.tabs.show=o}}},[t._v(t._s(e.name))])])})],2)]),a("div",{directives:[{name:"show",rawName:"v-show",value:-1===t.tabs.show,expression:"tabs.show === -1"}],staticClass:"row vertical-margin"},[a("alleles-histogram",{staticClass:"col s12",attrs:{populations:t.populations,"a1-color":t.config.colors.a1,"a2-color":t.config.colors.a2}}),a("div",{staticClass:"col s12"},[a("div",{staticClass:"col s12 l6"},[a("alleles-donut",{attrs:{populations:t.populations,"a1-color":t.config.colors.a1,"a2-color":t.config.colors.a2}})],1),a("alleles-table",{staticClass:"col s12 l6",attrs:{populations:t.populations}})],1)],1),t._l(t.populations,function(e,o){return a("div",{directives:[{name:"show",rawName:"v-show",value:t.tabs.show===o,expression:"tabs.show === i"}],key:o,staticClass:"row vertical-margin"},[a("alleles-histogram",{staticClass:"col s12",attrs:{partialName:!0,population:e,"a1-color":t.config.colors.a1,"a2-color":t.config.colors.a2}}),a("diploid-by-generation",{staticClass:"col s12",attrs:{population:e,"a1-color":t.config.colors.a1,"both-color":t.config.colors.both,"a2-color":t.config.colors.a2}})],1)})],2)},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Nome")]),a("th",[t._v("Tamanho")]),a("th",[t._v("Remover")])])])}],f=a("c93e"),b=(a("ac6a"),a("7f7f"),a("c5f6"),a("c665")),m=a("dc0a"),v=a("d328"),h=a("11d9"),j=a("9ab4"),g=a("60a3"),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"alleles-donut"},[a("pie-chart",{attrs:{data:t.data,colors:[t.a1Color,t.a2Color],donut:!0}})],1)},_=[],O=function(t){function e(){return Object(b["a"])(this,e),Object(v["a"])(this,Object(h["a"])(e).apply(this,arguments))}return Object(m["a"])(e,t),e}(g["c"]);j["a"]([Object(g["b"])()],O.prototype,"populations",void 0),j["a"]([Object(g["b"])()],O.prototype,"a1Color",void 0),j["a"]([Object(g["b"])()],O.prototype,"a2Color",void 0),O=j["a"]([Object(g["a"])({computed:{data:function(){var t=this,e=t.populations;t.a1Color,t.a2Color;return e.reduce(function(t,e){return"A1"===e.allele?t[0][1]+=1:"A2"===e.allele&&(t[1][1]+=1),t},[["A1",0],["A2",0]])}}})],O);var w=O,C=w,k=(a("29c5"),Object(i["a"])(C,y,_,!1,null,"cddae16a",null));k.options.__file="AllelesDonut.vue";var z=k.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"alleles-histogram"},[a("line-chart",{attrs:{data:t.data,messages:{empty:"Sem dados"},height:"200px",legend:"bottom",xtitle:"Geração",ytitle:"Alelo %"}})],1)},x=[],D=function(t){function e(){return Object(b["a"])(this,e),Object(v["a"])(this,Object(h["a"])(e).apply(this,arguments))}return Object(m["a"])(e,t),e}(g["c"]);j["a"]([Object(g["b"])()],D.prototype,"populations",void 0),j["a"]([Object(g["b"])()],D.prototype,"population",void 0),j["a"]([Object(g["b"])()],D.prototype,"a1Color",void 0),j["a"]([Object(g["b"])()],D.prototype,"a2Color",void 0),j["a"]([Object(g["b"])()],D.prototype,"attribute",void 0),j["a"]([Object(g["b"])()],D.prototype,"partialName",void 0),D=j["a"]([Object(g["a"])({computed:{data:function(){var t=this,e=t.populations||[t.population],a=t.a1Color||"#cfd8dc",o=t.a2Color||"#607d8b",n=t.partialName,s=t.attribute||"histogramData";return e.reduce(function(t,e){return t.push(Object(f["a"])({},e[s].a1,{color:a,name:n?"A1":e[s].a1.name})),t.push(Object(f["a"])({},e[s].a2,{color:o,name:n?"A1":e[s].a2.name})),t},[])}}})],D);var N=D,P=N,E=(a("90e1"),Object(i["a"])(P,A,x,!1,null,"5c6b4c03",null));E.options.__file="AllelesHistogram.vue";var S=E.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"alleles-table"},[a("table",{staticClass:"striped centered"},[t._m(0),a("tbody",t._l(t.populations,function(e,o){return a("tr",{key:o},[a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.allele||"-"))]),a("td",[t._v(t._s(e.generation||"-"))])])}))])])},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Nome")]),a("th",[t._v("Alelo fixado")]),a("th",[t._v("Geração em que o alelo foi fixado")])])])}],G=function(t){function e(){return Object(b["a"])(this,e),Object(v["a"])(this,Object(h["a"])(e).apply(this,arguments))}return Object(m["a"])(e,t),e}(g["c"]);j["a"]([Object(g["b"])()],G.prototype,"populations",void 0),G=j["a"]([g["a"]],G);var q=G,B=q,F=(a("0931"),Object(i["a"])(B,T,$,!1,null,"720728e8",null));F.options.__file="AllelesTable.vue";var H=F.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"diploid-by-generation center-align"},[a("table",{staticClass:"striped centered"},[a("thead",[a("tr",[a("th",{attrs:{colspan:"3"}},[t._v("Geração "+t._s(Number(t.generation)+1))])]),t._m(0)]),a("tbody",[a("tr",[a("td",[t._v(t._s(t.population.diploidData.length>0?t.population.diploidData[t.generation].a1a1:"-"))]),a("td",[t._v(t._s(t.population.diploidData.length>0?t.population.diploidData[t.generation].both:"-"))]),a("td",[t._v(t._s(t.population.diploidData.length>0?t.population.diploidData[t.generation].a2a2:"-"))])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col s6 offset-s3"},[a("pie-chart",{attrs:{data:t.data,colors:[t.a1Color||"#cfd8dc",t.bothColor||"#90a4ae",t.a2Color||"#607d8b"],donut:!0}})],1)]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.generation,expression:"generation"}],attrs:{type:"range",min:"0",max:t.population.diploidData.length-1},domProps:{value:t.generation},on:{__r:function(e){t.generation=e.target.value}}})])},J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("A1A1")]),a("th",[t._v("Ambos")]),a("th",[t._v("A2A2")])])}],U=function(t){function e(){return Object(b["a"])(this,e),Object(v["a"])(this,Object(h["a"])(e).apply(this,arguments))}return Object(m["a"])(e,t),e}(g["c"]);j["a"]([Object(g["b"])()],U.prototype,"population",void 0),j["a"]([Object(g["b"])()],U.prototype,"a1Color",void 0),j["a"]([Object(g["b"])()],U.prototype,"a2Color",void 0),j["a"]([Object(g["b"])()],U.prototype,"bothColor",void 0),U=j["a"]([Object(g["a"])({data:function(){return{generation:0}},computed:{data:function(){var t=this,e=t.population,a=t.generation;return[["A1A1",e.diploidData.length>0?e.diploidData[a].a1a1:"-"],["Ambos",e.diploidData.length>0?e.diploidData[a].both:"-"],["A2A2",e.diploidData.length>0?e.diploidData[a].a2a2:"-"]]}}})],U);var R=U,I=R,K=(a("578f"),Object(i["a"])(I,L,J,!1,null,"dcf39eee",null));K.options.__file="DiploidByGeneration.vue";var Q=K.exports,V=function(t){function e(){return Object(b["a"])(this,e),Object(v["a"])(this,Object(h["a"])(e).apply(this,arguments))}return Object(m["a"])(e,t),e}(g["c"]);V=j["a"]([Object(g["a"])({components:{AllelesDonut:z,AllelesHistogram:S,AllelesTable:H,DiploidByGeneration:Q},data:function(){return{tabs:{show:-1},config:{maxNumberOfGenerations:5e3,histogramMultiplicity:10,minSize:4,maxSize:1e3,step:4,colors:{a1:"#f48fb1",a2:"#9fa8da",both:"#ce93d8"}},population:{},populations:[]}},methods:{createPopulationForm:function(){var t=this;t.population={name:"",size:"",allele:"-",generation:"",histogramData:{a1:{},a2:{}},histogramDataCleaned:{a1:{},a2:{}},diploidData:[]}},addPopulation:function(){var t=M.toast,e=this,a=e.population,o=e.populations,n=e.config.minSize,s=e.config.maxSize,i=e.config.step,r=Number(a.size),l=a.name;l?r%i!==0?t({html:"O tamanho precisa ser múltiplo de ".concat(i)}):r<n?t({html:"O tamanho não pode ser menor ".concat(n)}):r>s?t({html:"O tamanho não pode ser maior ".concat(s)}):(o.push(a),e.createPopulationForm()):t({html:"O nome não pode estar em branco"})},removePopulation:function(t){var e=this;e.populations.splice(t,1)},generateOffspring:function(){var t=this,e=t.populations,a=t.config.maxNumberOfGenerations,o=t.config.histogramMultiplicity;e.forEach(function(t){var e=t.size,n=t.size,s=2*t.size,i=t.size,r=[{a1a1:s/4,a2a2:s/4,both:s/2}],l={name:"".concat(t.name," A1"),data:{1:50}},c={name:"".concat(t.name," A2"),data:{1:50}},u=2;while(u<=a&&e!==s&&n!==s){for(var d=0,p=0,b={a1a1:0,a2a2:0,both:0},m=0;m<i;m++){var v=Math.ceil(Math.random()*s)<=e?"a1":"a2",h=Math.ceil(Math.random()*s)<=n?"a2":"a1";"a1"===h&&"a1"===v?(b.a1a1+=1,d+=2):"a2"===h&&"a2"===v?(b.a2a2+=1,p+=2):(b.both+=1,d+=1,p+=1)}r.push(b),e=d,n=p,l.data[u]=e/s*100,c.data[u]=n/s*100,u+=1}t.generation=Math.min(u,a),t.allele=u===a?"-":e===s?"A1":"A2";var j=Object(f["a"])({},l),g=Object(f["a"])({},c);j.data={0:50},g.data={0:50};var y=o;while(y<u)j.data[y]=l.data[y],g.data[y]=c.data[y],y+=o;j.data[Math.floor(u/o)*o]=l.data[u-1],g.data[Math.floor(u/o)*o]=c.data[u-1],t.histogramDataCleaned={a1:j,a2:g},t.histogramData={a1:l,a2:c},t.diploidData=r})}},computed:{},mounted:function(){var t=this;t.createPopulationForm(),t.population.name="Aquário",t.population.size=20,t.addPopulation(),t.population.name="Pet shop",t.population.size=80,t.addPopulation(),t.population.name="Distribuidor",t.population.size=200,t.addPopulation()}})],V);var W=V,X=W,Y=(a("21bb"),Object(i["a"])(X,d,p,!1,null,null,null));Y.options.__file="Home.vue";var Z=Y.exports;o["default"].use(u["a"]);var tt=new u["a"]({mode:"history",base:"/alelotorio/",routes:[{path:"/",name:"home",component:Z},{path:"/vuehome",name:"vuehome",component:function(){return a.e("about").then(a.bind(null,"02d9"))}},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),et=a("2f62");o["default"].use(et["a"]);var at=new et["a"].Store({state:{},mutations:{},actions:{}}),ot=a("d842"),nt=a("5b20"),st=a.n(nt),it=a("9483");Object(it["a"])("".concat("/alelotorio/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("8266"),a("6885");st.a.defaults.global.elements.point.radius=0,o["default"].use(ot["a"],{adapter:st.a}),o["default"].config.productionTip=!1,new o["default"]({router:tt,store:at,render:function(t){return t(c)}}).$mount("#app")},d6af:function(t,e,a){}});
//# sourceMappingURL=app.c02a769c.js.map