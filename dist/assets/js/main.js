!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=3)}([function(e,t,n){var r=n(1),i=n(2);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1},a=(r(i,o),i.locals?i.locals:{});e.exports=a},function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],c=t.base?o[0]+t.base:o[0],u=n[c]||0,d="".concat(c," ").concat(u);n[c]=u+1;var l=s(d),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==l?(a[l].references++,a[l].updater(f)):a.push({identifier:d,updater:m(f,t),references:1}),r.push(d)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,l=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function h(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,v=0;function m(e,t){var n,r,i;if(t.singleton){var o=v++;n=p||(p=u(t)),r=f.bind(null,n,o,!1),i=f.bind(null,n,o,!0)}else n=u(t),r=h.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=s(n[r]);a[i].references--}for(var o=c(e,t),u=0;u<n.length;u++){var d=s(n[u]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=o}}}},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);function r(e,t=50,n=50,r=1,i=1,o=30,a="#000"){this.x=t,this.y=n,this.dx=r,this.dy=i,this.r=o,this.color=a,this.draw=()=>{e.beginPath(),e.arc(this.x,this.y,this.r,0,2*Math.PI,!1),e.fillStyle=a,e.fill(),e.closePath()},this.move=()=>{(this.x+this.r>innerWidth||this.x-this.r<0)&&(this.dx=-this.dx),(this.y+this.r>innerHeight||this.y-this.r<0)&&(this.dy=-this.dy),this.x+=this.dx,this.y+=this.dy,this.draw()}}const i=(e,t)=>Math.floor(Math.random()*(t+1-e))+e;var o=document.getElementById("random-moving");o.width=window.innerWidth,o.height=window.innerHeight;var a=o.getContext("2d"),s=[];function c(){var e=["#FF8877","#FFDD66","#3EE3BB","#3ECCDD","#0091C9"];for(let f=0;f<100;f++){var t=i(u,innerWidth-u),n=i(u,innerHeight-u),o=i(-2,2),c=i(-2,2),u=i(2,30),d=e[i(0,e.length-1)],l=new r(a,t,n,o,c,u,d);l.draw(),s.push(l)}}function u(){requestAnimationFrame(u),a.clearRect(0,0,innerWidth,innerHeight),s.forEach(e=>{e.move()})}c(),u(),window.addEventListener("resize",(function(){o.width=window.innerWidth,o.height=window.innerHeight,c(),u()}))}]);