(function(t){function a(a){for(var o,n,r=a[0],l=a[1],c=a[2],u=0,d=[];u<r.length;u++)n=r[u],s[n]&&d.push(s[n][0]),s[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);p&&p(a);while(d.length)d.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],o=!0,n=1;n<e.length;n++){var r=e[n];0!==s[r]&&(o=!1)}o&&(i.splice(a--,1),t=l(l.s=e[0]))}return t}var o={},n={app:0},s={app:0},i=[];function r(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"ff22bc3e"}[t]+".js"}function l(a){if(o[a])return o[a].exports;var e=o[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.e=function(t){var a=[],e={about:1};n[t]?a.push(n[t]):0!==n[t]&&e[t]&&a.push(n[t]=new Promise(function(a,e){for(var o="css/"+({about:"about"}[t]||t)+"."+{about:"fd0c252e"}[t]+".css",n=l.p+o,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var r=s[i],c=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(c===o||c===n))return a()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){r=u[i],c=r.getAttribute("data-href");if(c===o||c===n)return a()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=a,d.onerror=function(a){var o=a&&a.target&&a.target.src||n,s=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");s.request=o,e(s)},d.href=n;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){n[t]=0}));var o=s[t];if(0!==o)if(o)a.push(o[2]);else{var i=new Promise(function(a,e){o=s[t]=[a,e]});a.push(o[2]=i);var c,u=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=r(t),c=function(a){d.onerror=d.onload=null,clearTimeout(p);var e=s[t];if(0!==e){if(e){var o=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src,i=new Error("Loading chunk "+t+" failed.\n("+o+": "+n+")");i.type=o,i.request=n,e[1](i)}s[t]=void 0}};var p=setTimeout(function(){c({type:"timeout",target:d})},12e4);d.onerror=d.onload=c,u.appendChild(d)}return Promise.all(a)},l.m=t,l.c=o,l.d=function(t,a,e){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var o in t)l.d(e,o,function(a){return t[a]}.bind(null,o));return e},l.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="/alelotorio/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=a,c=c.slice();for(var d=0;d<c.length;d++)a(c[d]);var p=u;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("cd49")},"0c4e":function(t,a,e){},"18a0":function(t,a,e){"use strict";var o=e("39cc"),n=e.n(o);n.a},1914:function(t,a,e){},"21bb":function(t,a,e){"use strict";var o=e("1914"),n=e.n(o);n.a},2856:function(t,a,e){},"39cc":function(t,a,e){},4678:function(t,a,e){var o={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var a=s(t);return e(a)}function s(t){var a=o[t];if(!(a+1)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a}n.keys=function(){return Object.keys(o)},n.resolve=s,t.exports=n,n.id="4678"},"4fed":function(t,a,e){"use strict";var o=e("0c4e"),n=e.n(o);n.a},"503f":function(t,a,e){},"5c0b":function(t,a,e){"use strict";var o=e("2856"),n=e.n(o);n.a},"83be":function(t,a,e){"use strict";var o=e("503f"),n=e.n(o);n.a},ca3a:function(t,a,e){},cd49:function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("097d");var o=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("nav",{staticClass:"nav-extended"},[t._m(0),e("div",{staticClass:"nav-content"},[e("ul",{staticClass:"tabs tabs-transparent row"},[e("li",{staticClass:"tab col s6"},[e("router-link",{attrs:{to:"/"}},[t._v("Comparação")])],1),e("li",{staticClass:"tab col s6"},[e("router-link",{attrs:{to:"/multiple"}},[t._v("Repetição")])],1)])])]),e("router-view")],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"nav-wrapper"},[e("span",{staticClass:"brand-logo center",attrs:{to:"/"}},[t._v("Alelotório")])])}],i=(e("5c0b"),e("2877")),r={},l=Object(i["a"])(r,n,s,!1,null,null,null);l.options.__file="App.vue";var c=l.exports,u=e("8c4f"),d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home container"},[e("form",{staticClass:"col s12 vertical-margin",on:{submit:function(t){t.preventDefault()}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"input-field col s12 l5"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.population.name,expression:"population.name"}],attrs:{id:"population-name",type:"text"},domProps:{value:t.population.name},on:{input:function(a){a.target.composing||t.$set(t.population,"name",a.target.value)}}}),e("label",{attrs:{for:"population-name"}},[t._v("Nome")])]),e("div",{staticClass:"input-field col s12 l5"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.population.size,expression:"population.size"}],attrs:{id:"population-size",type:"number",min:t.config.minSize,max:t.config.maxSize,step:t.config.step},domProps:{value:t.population.size},on:{input:function(a){a.target.composing||t.$set(t.population,"size",a.target.value)}}}),e("label",{attrs:{for:"population-size"}},[t._v("Tamanho")])]),e("div",{staticClass:"input-field col s12 l2 center-align"},[e("button",{staticClass:"waves-effect waves-light btn",on:{click:t.addPopulation}},[t._v("Adicionar")])])])]),e("div",{staticClass:"divider"}),e("table",{staticClass:"striped centered vertical-margin"},[t._m(0),e("tbody",t._l(t.populations,function(a,o){return e("tr",{key:o},[e("td",[t._v(t._s(a.name))]),e("td",[t._v(t._s(a.size))]),e("td",[e("button",{staticClass:"waves-effect waves-light btn",on:{click:function(a){t.removePopulation(o)}}},[e("i",{staticClass:"material-icons center"},[t._v("delete")])])])])})),e("tfoot",[e("tr",[e("td",{staticClass:"center-align",attrs:{colspan:"3"}},[e("button",{staticClass:"waves-effect waves-light btn",on:{click:t.generateOffspring}},[t._v("Gerar Gráficos")])])])])]),e("div",{staticClass:"row"},[e("ul",{staticClass:"col s12 tabs teal lighten-5"},[e("li",{staticClass:"tab"},[e("a",{class:[-1===t.tabs.show?"active":""],on:{click:function(a){t.tabs.show=-1}}},[t._v("Todos")])]),t._l(t.populations,function(a,o){return e("li",{key:o,staticClass:"tab"},[e("a",{class:[t.tabs.show===o?"active":""],on:{click:function(a){t.tabs.show=o}}},[t._v(t._s(a.name))])])})],2)]),e("div",{directives:[{name:"show",rawName:"v-show",value:-1===t.tabs.show,expression:"tabs.show === -1"}],staticClass:"row vertical-margin"},[e("alleles-histogram",{staticClass:"col s12 vertical-margin",attrs:{populations:t.populations,"a1-color":t.config.colors.alleles.a1,"a2-color":t.config.colors.alleles.a2}}),e("div",{staticClass:"col s12"},[e("alleles-table",{staticClass:"col s12 l8",attrs:{"a1-color":t.config.colors.alleles.a1,"a2-color":t.config.colors.alleles.a2,populations:t.populations}}),e("alleles-donut",{staticClass:"col s12 l4",attrs:{populations:t.populations,"a1-color":t.config.colors.alleles.a1,"a2-color":t.config.colors.alleles.a2}})],1)],1),t._l(t.populations,function(a,o){return e("div",{directives:[{name:"show",rawName:"v-show",value:t.tabs.show===o,expression:"tabs.show === i"}],key:o,staticClass:"row vertical-margin"},[e("alleles-histogram",{staticClass:"col s12",attrs:{partialName:!0,population:a,"a1-color":t.config.colors.alleles.a1,"a2-color":t.config.colors.alleles.a2}}),e("diploid-by-generation",{staticClass:"col s12",attrs:{population:a,"a1-color":t.config.colors.diploids.a1a1,"both-color":t.config.colors.diploids.both,"a2-color":t.config.colors.diploids.a2a2}})],1)})],2)},p=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("Nome")]),e("th",[t._v("Tamanho")]),e("th",[t._v("Remover")])])])}],f=e("c93e"),b=(e("ac6a"),e("7f7f"),e("c5f6"),e("c665")),m=e("dc0a"),v=e("d328"),h=e("11d9"),j=e("9ab4"),g=e("60a3"),y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"alleles-donut"},[e("pie-chart",{attrs:{height:"200px",legend:!1,data:t.data,colors:[t.a2Color,t.a1Color],donut:!0}})],1)},_=[],O=function(t){function a(){return Object(b["a"])(this,a),Object(v["a"])(this,Object(h["a"])(a).apply(this,arguments))}return Object(m["a"])(a,t),a}(g["c"]);j["a"]([Object(g["b"])()],O.prototype,"populations",void 0),j["a"]([Object(g["b"])()],O.prototype,"a1Color",void 0),j["a"]([Object(g["b"])()],O.prototype,"a2Color",void 0),O=j["a"]([Object(g["a"])({computed:{data:function(){var t=this,a=t.populations;return a.reduce(function(t,a){return"A2"===a.allele?t[0][1]+=1:"A1"===a.allele&&(t[1][1]+=1),t},[["A2",0],["A1",0]])}}})],O);var C=O,w=C,k=(e("4fed"),Object(i["a"])(w,y,_,!1,null,"29fdaae2",null));k.options.__file="AllelesDonut.vue";var A=k.exports,z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"alleles-histogram"},[e("line-chart",{attrs:{data:t.data,messages:{empty:"Sem dados"},legend:!1,height:"200px",xtitle:"Geração",ytitle:"Alelo %"}})],1)},x=[],D=function(t){function a(){return Object(b["a"])(this,a),Object(v["a"])(this,Object(h["a"])(a).apply(this,arguments))}return Object(m["a"])(a,t),a}(g["c"]);j["a"]([Object(g["b"])()],D.prototype,"populations",void 0),j["a"]([Object(g["b"])()],D.prototype,"population",void 0),j["a"]([Object(g["b"])()],D.prototype,"a1Color",void 0),j["a"]([Object(g["b"])()],D.prototype,"a2Color",void 0),j["a"]([Object(g["b"])()],D.prototype,"attribute",void 0),j["a"]([Object(g["b"])()],D.prototype,"partialName",void 0),D=j["a"]([Object(g["a"])({computed:{data:function(){var t=this,a=t.populations||[t.population],e=t.a1Color||"#cfd8dc",o=t.a2Color||"#607d8b",n=t.partialName,s=t.attribute||"histogramData";return a.reduce(function(t,a){return t.push(Object(f["a"])({},a[s].a1,{color:e,name:n?"A1":a[s].a1.name})),t.push(Object(f["a"])({},a[s].a2,{color:o,name:n?"A2":a[s].a2.name})),t},[])}}})],D);var N=D,P=N,E=(e("83be"),Object(i["a"])(P,z,x,!1,null,"682492c4",null));E.options.__file="AllelesHistogram.vue";var S=E.exports,T=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"alleles-table"},[e("table",{staticClass:"striped centered"},[t._m(0),e("tbody",t._l(t.populations,function(a,o){return e("tr",{key:o},[e("td",[t._v(t._s(a.name))]),e("td",{style:{color:"A1"===a.allele?t.a1Color||"#cfd8dc":t.a2Color||"#607d8b",fontWeight:"bold"}},[t._v("\n            "+t._s(a.allele||"-"))]),e("td",[t._v(t._s(a.generation||"-"))])])}))])])},$=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("Nome")]),e("th",[t._v("Alelo fixado")]),e("th",[t._v("Geração em que o alelo foi fixado")])])])}],G=function(t){function a(){return Object(b["a"])(this,a),Object(v["a"])(this,Object(h["a"])(a).apply(this,arguments))}return Object(m["a"])(a,t),a}(g["c"]);j["a"]([Object(g["b"])()],G.prototype,"populations",void 0),j["a"]([Object(g["b"])()],G.prototype,"a1Color",void 0),j["a"]([Object(g["b"])()],G.prototype,"a2Color",void 0),G=j["a"]([g["a"]],G);var q=G,B=q,F=(e("18a0"),Object(i["a"])(B,T,$,!1,null,"10b20db6",null));F.options.__file="AllelesTable.vue";var H=F.exports,L=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"diploid-by-generation center-align"},[e("table",{staticClass:"striped centered vertical-margin"},[t._m(0),e("tbody",[e("tr",[e("td",[t._v(t._s(t.population.diploidData.length>0?t.population.diploidData[t.generation].a1a1:"-"))]),e("td",[t._v(t._s(t.population.diploidData.length>0?t.population.diploidData[t.generation].both:"-"))]),e("td",[t._v(t._s(t.population.diploidData.length>0?t.population.diploidData[t.generation].a2a2:"-"))])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col s6 offset-s3"},[e("pie-chart",{attrs:{data:t.data,legend:!1,colors:[t.a2Color||"#607d8b",t.bothColor||"#90a4ae",t.a1Color||"#cfd8dc"],donut:!0}})],1)]),e("div",{staticClass:"col s12 blue-grey lighten-5"},[e("h6",[e("b",[t._v("Geração "+t._s(Number(t.generation)+1))])]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.generation,expression:"generation"}],attrs:{type:"range",min:"0",max:t.population.diploidData.length-1},domProps:{value:t.generation},on:{__r:function(a){t.generation=a.target.value}}})])])},J=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("A1A1")]),e("th",[t._v("A1A2 ou A2A1")]),e("th",[t._v("A2A2")])]),e("tr",[e("th",[e("i",{staticClass:"fas fa-fish fa-2x a1a1"})]),e("th",[e("i",{staticClass:"fas fa-fish fa-2x both"})]),e("th",[e("i",{staticClass:"fas fa-fish fa-2x a2a2"})])])])}],R=function(t){function a(){return Object(b["a"])(this,a),Object(v["a"])(this,Object(h["a"])(a).apply(this,arguments))}return Object(m["a"])(a,t),a}(g["c"]);j["a"]([Object(g["b"])()],R.prototype,"population",void 0),j["a"]([Object(g["b"])()],R.prototype,"a1Color",void 0),j["a"]([Object(g["b"])()],R.prototype,"a2Color",void 0),j["a"]([Object(g["b"])()],R.prototype,"bothColor",void 0),R=j["a"]([Object(g["a"])({data:function(){return{generation:0}},computed:{data:function(){var t=this,a=t.population,e=t.generation;return[["A2A2",a.diploidData.length>0?a.diploidData[e].a2a2:"-"],["A1A2 ou A2A1",a.diploidData.length>0?a.diploidData[e].both:"-"],["A1A1",a.diploidData.length>0?a.diploidData[e].a1a1:"-"]]}}})],R);var U=R,W=U,I=(e("f9ed"),Object(i["a"])(W,L,J,!1,null,"73e336c0",null));I.options.__file="DiploidByGeneration.vue";var K=I.exports,Q=function(t){function a(){return Object(b["a"])(this,a),Object(v["a"])(this,Object(h["a"])(a).apply(this,arguments))}return Object(m["a"])(a,t),a}(g["c"]);Q=j["a"]([Object(g["a"])({components:{AllelesDonut:A,AllelesHistogram:S,AllelesTable:H,DiploidByGeneration:K},data:function(){return{tabs:{show:-1},config:{maxNumberOfGenerations:5e3,histogramMultiplicity:10,minSize:4,maxSize:1e3,step:4,colors:{alleles:{a1:"#f48fb1",a2:"#9fa8da",both:"#ce93d8"},diploids:{a1a1:"#ffe082",a2a2:"#bf360c",both:"#ff9100"}}},population:{},populations:[]}},methods:{createPopulationForm:function(){var t=this;t.population={name:"",size:"",allele:"-",generation:"",histogramData:{a1:{},a2:{}},histogramDataCleaned:{a1:{},a2:{}},diploidData:[]}},addPopulation:function(){var t=M.toast,a=this,e=a.population,o=a.populations,n=a.config.minSize,s=a.config.maxSize,i=a.config.step,r=Number(e.size),l=e.name;l?r%i!==0?t({html:"O tamanho precisa ser múltiplo de ".concat(i)}):r<n?t({html:"O tamanho não pode ser menor ".concat(n)}):r>s?t({html:"O tamanho não pode ser maior ".concat(s)}):(o.push(e),a.createPopulationForm()):t({html:"O nome não pode estar em branco"})},removePopulation:function(t){var a=this;a.populations.splice(t,1)},generateOffspring:function(){var t=this,a=t.populations,e=t.config.maxNumberOfGenerations,o=t.config.histogramMultiplicity;a.forEach(function(t){var a=t.size,n=t.size,s=2*t.size,i=t.size,r=[{a1a1:s/4,a2a2:s/4,both:s/2}],l={name:"".concat(t.name," A1"),data:{1:50}},c={name:"".concat(t.name," A2"),data:{1:50}},u=2;while(u<=e&&a!==s&&n!==s){for(var d=0,p=0,b={a1a1:0,a2a2:0,both:0},m=0;m<i;m++){var v=Math.ceil(Math.random()*s)<=a?"a1":"a2",h=Math.ceil(Math.random()*s)<=n?"a2":"a1";"a1"===h&&"a1"===v?(b.a1a1+=1,d+=2):"a2"===h&&"a2"===v?(b.a2a2+=1,p+=2):(b.both+=1,d+=1,p+=1)}r.push(b),a=d,n=p,l.data[u]=a/s*100,c.data[u]=n/s*100,u+=1}t.generation=Math.min(u,e),t.allele=u===e?"-":a===s?"A1":"A2";var j=Object(f["a"])({},l),g=Object(f["a"])({},c);j.data={0:50},g.data={0:50};var y=o;while(y<u)j.data[y]=l.data[y],g.data[y]=c.data[y],y+=o;j.data[Math.floor(u/o)*o]=l.data[u-1],g.data[Math.floor(u/o)*o]=c.data[u-1],t.histogramDataCleaned={a1:j,a2:g},t.histogramData={a1:l,a2:c},t.diploidData=r})}},computed:{},mounted:function(){var t=this;t.createPopulationForm(),t.population.name="Aquário",t.population.size=20,t.addPopulation(),t.population.name="Pet shop",t.population.size=80,t.addPopulation(),t.population.name="Distribuidor",t.population.size=200,t.addPopulation()}})],Q);var V=Q,X=V,Y=(e("21bb"),Object(i["a"])(X,d,p,!1,null,null,null));Y.options.__file="Home.vue";var Z=Y.exports;o["default"].use(u["a"]);var tt=new u["a"]({mode:"history",base:"/alelotorio/",routes:[{path:"/",name:"home",component:Z},{path:"/multiple",name:"multiple",component:function(){return e.e("about").then(e.bind(null,"0955"))}}]}),at=e("2f62");o["default"].use(at["a"]);var et=new at["a"].Store({state:{},mutations:{},actions:{}}),ot=e("d842"),nt=e("5b20"),st=e.n(nt),it=e("9483");Object(it["a"])("".concat("/alelotorio/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});e("8266"),e("6885");st.a.defaults.global.elements.point.radius=0,o["default"].use(ot["a"],{adapter:st.a}),o["default"].config.productionTip=!1,new o["default"]({router:tt,store:et,render:function(t){return t(c)}}).$mount("#app")},f9ed:function(t,a,e){"use strict";var o=e("ca3a"),n=e.n(o);n.a}});
//# sourceMappingURL=app.6ccc7b3f.js.map