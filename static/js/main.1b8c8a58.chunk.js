(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,n,t){e.exports=t(29)},22:function(e,n,t){var a={"./ceb/":23,"./en/":24,"./tl/":25};function r(e){var n=c(e);return t(n)}function c(e){var n=a[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=22},23:function(e,n,t){"use strict";t.r(n),t.d(n,"get",function(){return a});var a={home:"balay",back:"balik",ok:"gi",cancel:"aylang"}},24:function(e,n,t){"use strict";t.r(n),t.d(n,"get",function(){return a});var a={home:"home",back:"back",ok:"ok",cancel:"cancel"}},25:function(e,n,t){"use strict";t.r(n),t.d(n,"get",function(){return a});var a={home:"bahay",back:"balik",ok:"sige",cancel:"huwag"}},29:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(8),o=t.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l,i,u,s,m=t(31),p=t(32),f=t(9),d=t(10),E=t(13),h=t(11),v=t(14),b=t(30),O=t(33),g={ceb:function(){return{code:"ceb",name:"Cebuano",active:!0}},tl:function(){return{code:"tl",name:"Tagalog",active:!0}},en:function(){return{code:"en",name:"English",active:!0}},es:function(){return{code:"es",name:"Spanish",active:!1}},de:function(){return{code:"de",name:"German",active:!1}},cn:function(){return{code:"cn",name:"Chinese",active:!1}},jpn:function(){return{code:"jpn",name:"Japanese",active:!1}},kor:function(){return{code:"kor",name:"Korean",active:!1}}},k=function(e,n){var t=e;return n&&Object.entries(n).forEach(function(e){t=t.replace(":".concat(e[0]),"".concat(e[1]))}),u+t},w=function(e){return k("/blog",e)},j=function(e){return k("/about",e)},y=function(e){return k("/contact",e)},T=function(e){return k("/admin",e)},U=function(e){return k("/",e)},A=function(e){var n=s.split("/");n[1].length<=3&&(n[1]=n[1].replace("".concat(l.code),""),"/"!==s&&""!==u&&n.shift());var t=e&&"/".concat(e.code)||"";return"".concat(t).concat(n.join("/"))},C=function(e){function n(e){var t;return Object(f.a)(this,n),(t=Object(E.a)(this,Object(h.a)(n).call(this,e))).propUpdate(),t.state={locale:l},t}return Object(v.a)(n,e),Object(d.a)(n,[{key:"componentDidUpdate",value:function(e){this.props!==e&&(this.propUpdate(),this.setState({locale:l}))}},{key:"propUpdate",value:function(){var e=this.props.match.params;!function(e,n){var a=Object.entries(g).find(function(e){return e[1]().active}),r=Object.entries(g).find(function(e){return e[1]().code===n&&e[1]().active}),c=r&&r[1]()||a&&a[1](),o=c&&c.code;l=Object.assign({},c),i=Object.assign({},t(22)("./"+(c&&c.code)+"/").get),u=n===o?"/".concat(o):"",s=e}(this.props.history.location.pathname,e.lang),console.log(this.props.match),console.log(U)}},{key:"render",value:function(){return r.a.createElement("div",null,"Welcome to Dino's Blog",r.a.createElement(b.a,{to:U(),replace:!0},"HOME"),r.a.createElement(b.a,{to:j(),replace:!0},"ABOUT ME"),r.a.createElement(b.a,{to:y(),replace:!0},"CONTACT ME"),r.a.createElement(b.a,{to:w(),replace:!0},"BLOG"),r.a.createElement(b.a,{to:A(g.en()),replace:!0},"ENGLISH"),r.a.createElement(b.a,{to:A(g.ceb()),replace:!0},"CEBUANO"),r.a.createElement(b.a,{to:A(g.tl()),replace:!0},"TAGALOG"),r.a.createElement(b.a,{to:A(),replace:!0},"DEFAULT"),r.a.createElement("br",null),i.home,r.a.createElement("br",null),i.ok,r.a.createElement("br",null),i.cancel,r.a.createElement("br",null),i.back,r.a.createElement(O.a,null,r.a.createElement(p.a,{path:j(),render:function(){return r.a.createElement("p",null,"ABOUT")}}),r.a.createElement(p.a,{path:y(),render:function(){return r.a.createElement("p",null,"CONTACT")}}),r.a.createElement(p.a,{path:w(),render:function(){return r.a.createElement("p",null,"BLOG")}}),r.a.createElement(p.a,{path:T(),render:function(){return r.a.createElement("p",null,"ADMIN")}}),r.a.createElement(p.a,{exact:!0,path:U(),render:function(){return r.a.createElement("p",null,"HOME")}}),r.a.createElement(p.a,{render:function(){return r.a.createElement("p",null,"NOT FOUND")}})))}}]),n}(a.Component);o.a.render(r.a.createElement(m.a,null,r.a.createElement(p.a,{path:"/:lang?",render:function(e){return r.a.createElement(C,e)}})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.1b8c8a58.chunk.js.map