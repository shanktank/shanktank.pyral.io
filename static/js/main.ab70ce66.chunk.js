(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n.p+"static/media/github.192a6620.svg"},,,,,,,,function(e,t,n){e.exports=n.p+"static/media/linkedin.9e36c8fd.svg"},function(e,t,n){e.exports=n.p+"static/media/mail.e93d5761.svg"},,function(e,t,n){e.exports=n(39)},,,,,function(e,t,n){},function(e,t,n){},,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(8),o=n.n(c),i=n(2),l=n(3),s=n(5),u=n(4),f=n(1);n(22);var m=function(e){return a.a.createElement("img",{className:"tab-image",src:e.icon,alt:"icon"})},d=n(14),p=n.n(d),h=n(6),v=n.n(h),y=n(15),b=n.n(y);n(23);function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}var g=function(e){Object(s.a)(n,e);var t=j(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={icons:[p.a,v.a,b.a],links:["https://linkedin.com/in/jaredjpruett","https://github.com/shanktank","/"]},r}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state.icons.map(function(t,n){return a.a.createElement("div",{className:"Link",key:n},a.a.createElement("a",{href:e.state.links[n],target:"_blank",rel:"noopener noreferrer"},a.a.createElement(m,{icon:t})))});return a.a.createElement("div",{className:"Links"},t)}}]),n}(a.a.Component),k=n(16),w=n.n(k);n(35);function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}var O=function(e){Object(s.a)(n,e);var t=E(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={showModal:!1,currentProject:{}},r}return Object(l.a)(n,[{key:"handleOpenModal",value:function(e){this.setState({showModal:!0,currentProject:e})}},{key:"handleCloseModal",value:function(e){this.setState({showModal:!1})}},{key:"componentDidMount",value:function(){var e=this;document.addEventListener("keydown",function(t){return e.handlePressEscape(t)})}},{key:"componentWillUnmount",value:function(){var e=this;document.removeEventListener("keydown",function(t){return e.handlePressEscape(t)})}},{key:"handleClickOutside",value:function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.state.showModal&&0===e.button&&this.handleCloseModal()}},{key:"handlePressEscape",value:function(e){this.state.showModal&&27===(e=e||window.event).keyCode&&this.state.showModal&&this.handleCloseModal()}},{key:"renderProject",value:function(e){var t=[a.a.createElement("li",null,a.a.createElement("a",{href:"https://github.com/jaredjpruett/".concat(e.repo),target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{className:"project-icon",src:v.a,alt:"icon"})),e.name)];return e.url&&t.push(a.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},"Hosted")),a.a.createElement(w.a,{className:"content-modal",ariaHideApp:!1,isOpen:this.state.showModal},a.a.createElement("div",{className:"foo"},a.a.createElement("video",{controls:!0,width:"1000"},a.a.createElement("source",{src:"vid/".concat(e.webm),type:"video/webm"}))),a.a.createElement("div",{className:"repo-link"},a.a.createElement("ul",null,t)))}},{key:"render",value:function(){var e=this,t=this.props.tiles.map(function(t,n){return a.a.createElement("div",{className:"Tile image-container",id:t.name,key:n},a.a.createElement("img",{className:"content-image",src:"img/".concat(t.image),alt:"img",onClick:function(){return e.handleOpenModal(t)}}),a.a.createElement("div",{className:"after",onClick:function(){return e.handleOpenModal(t)}},t.name))});return a.a.createElement("div",{className:"Content"},a.a.createElement("div",{className:"Tiles"},t),this.renderProject(this.state.currentProject))}}]),n}(a.a.Component);n(36);function R(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}var M=function(e){Object(s.a)(n,e);var t=R(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={modalRef:null,projects:[{name:"Clocker",image:"clocker.png",webm:"clocker.webm",repo:"cs-clocker",url:"/stuff/projects/clocker/index.html"},{name:"Cygwin + Eclipse Installer",image:"project2.png",webm:"project2.webm",repo:"cygwin-plus-eclipse-installer",url:""},{name:"Neoplayer",image:"project3.png",webm:"project3.webm",repo:"neoplayer2",url:""},{name:"ICU+",image:"project4.png",webm:"project4.webm",repo:"icu",url:""},{name:"OpenOSRS Plugins",image:"project5.png",webm:"project5.webm",repo:"openosrs-plugins",url:""}]},r}return Object(l.a)(n,[{key:"handleModal",value:function(e){this.setState({modalRef:e})}},{key:"render",value:function(){var e=this;return a.a.createElement(O,{className:"Contents",tiles:this.state.projects,onTileClick:function(t){return e.handleModal(t)}})}}]),n}(a.a.Component);n(37);function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}var N=function(e){Object(s.a)(n,e);var t=C(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{id:"div-root"},a.a.createElement("div",{id:"div-left"},a.a.createElement(g,null)),a.a.createElement("div",{id:"div-right"},a.a.createElement(M,null)),a.a.createElement("div",{id:"div-notice"},a.a.createElement("p",null,"(Most images and videos are currently placeholders!)")))}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(38);o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}],[[17,1,2]]]);
//# sourceMappingURL=main.ab70ce66.chunk.js.map