(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(601),o=n.n(r),l=n(314),c=n.n(l)()(o());c.push([e.id,"*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nmain{\n    display: flex;\n    align-content: center;\n    justify-content: center;\n}\n\n.gameboard-player, .gameboard-computer{\n    width: 500px;\n    height: 500px;\n    border: 2px solid grey;\n    display: flex;\n    flex-direction: column;\n\n}\n.ship-row{\n    display: flex;\n    min-height: 50px;\n    flex: auto;\n}\n\n.ship-cell, .no-ship-cell, .no-ship-cell-hit, .shit-cell-hit{\n    background: none;\n    min-width: 10%;\n    min-height: 10%;\n    flex: auto; \n    padding: 2px;\n}\n\n.ship-filled{\n    border: 4px solid blue;\n    background-color:rgb(134, 134, 221) ;\n}\n\n.no-ship-cell-hit, .no-ship-border-cell-hit{\n    display: flex;\n    margin: 0 auto;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background-color: rgb(46, 46, 46);\n    padding: 2px;\n}\n\n.no-ship-border-cell-hit{\n    background-color: grey;\n}\n\n.ship-cell-hit{\n    border: 4px solid red;\n    background-color: rgb(248, 123, 123);\n}",""]);const s=c},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,l){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var s=0;s<this.length;s++){var a=this[s][0];null!=a&&(c[a]=!0)}for(var i=0;i<e.length;i++){var u=[].concat(e[i]);r&&c[u[0]]||(void 0!==l&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=l),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var l={},c=[],s=0;s<e.length;s++){var a=e[s],i=r.base?a[0]+r.base:a[0],u=l[i]||0,d="".concat(i," ").concat(u);l[i]=u+1;var p=n(d),h={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var f=o(h,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:f,references:1})}c.push(d)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var l=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<l.length;c++){var s=n(l[c]);t[s].references--}for(var a=r(e,o),i=0;i<l.length;i++){var u=n(l[i]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}l=a}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var l=n.sourceMap;l&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(l))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var l=t[r]={id:r,exports:{}};return e[r](l,l.exports,n),l.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{class e{constructor(e){this.name=e,this.player="Human"}}class t{plays=[];constructor(e){this.name=e,this.player="Computer"}getRandomNumber(e=0,t=10){return Math.floor(Math.random()*(t-e)+e)}arrayContainsArray(e,t){return e.some((e=>JSON.stringify(e)===JSON.stringify(t)))}makePlay(e=0,t=0){if(this.arrayContainsArray(this.plays,[e,t])){let e=this.getRandomNumber(),t=this.getRandomNumber();return this.makePlay(e,t)}return this.plays.push([e,t]),{row:e,column:t}}}const r=e=>{const t=document.querySelector(".gameboard-computer");t.onclick=function(n){if("BUTTON"===n.target.tagName){let r=n.target.dataset.cellNo.split("");const o=e(~~r[0],~~r[1]);if(o){if(n.target.classList.contains("ship-cell")){if(n.target.classList.add("ship-cell-hit"),console.log({diagonalCell:o}),o.length>0){console.log({diagonalCell:o});for(let e of o){let n=t.querySelector(`[data-cell-no = '${e[0]}${e[1]}']`);if(console.log({emptyDiagonalCell:n}),n){const e=document.createElement("span");e.classList.add("no-ship-border-cell-hit"),n.append(e)}}}return!0}if(n.target.classList.contains("no-ship-cell")){const e=document.createElement("span");return e.classList.add("no-ship-cell-hit"),n.target.append(e),!1}}}}},o=(e,t)=>{const n=document.querySelector(`.gameboard-player [data-cell-no = '${e}']`);if(n){const r=e.split("");if(t(~~r[0],~~r[1])){if(n.classList.contains("ship-cell"))return n.classList.add("ship-cell-hit"),!0;if(n.classList.contains("no-ship-cell")){const e=document.createElement("span");return e.classList.add("no-ship-cell-hit"),n.append(e),!1}}}};class l{head=null;constructor(e,t=1,n){this.head=e,this.length=t,this.hit=0,this.sunk=!1,this.direction=n}append(e){this.head||(this.head=Node(e));let t=this.head;for(;null!==t.nextNode;)t=t.nextNode;return t.nextNode=new Node(e)}getHead(){return this.head}isHit(){this.hit++}isSunk(){let e=this.hit==this.length;return this.sunk=e,e}}const c=()=>{let e=[],t=[],n=[];const r=[{length:4,count:1},{length:3,count:2},{length:2,count:3},{length:1,count:4}];function o(n,r){if(u(n.row,n.column)&&h(n,r.length,"vertical")){let l=f(n,r);return l.every((e=>u(e[0],e[1])))?(t.push(...l),n):o(p(e[i()][i()]),r)}return o(p(e[i()][i()]),r)}function c(n,r){if(u(n.row,n.column)&&h(n,r.length,"horizontal")){let l=y(n,r);return l.every((e=>u(e[0],e[1])))?(t.push(...l),n):o(p(e[i()][i()]),r)}return c(p(e[i()][i()]),r)}function i(e=0,t=10){return Math.floor(Math.random()*(t-e)+e)}function u(t,n){if(t>9||n>9)return!1;let r=e[t][n];return!(Object.keys(r.filled).length>0)}function d(t,n){return!!(t<10&&t>=0&&n<10&&n>=0&&e[t][n])}function p(n){return 0!==Object.keys(n.filled).length||(r=t,o=[n.row,n.column],r.some((e=>JSON.stringify(e)===JSON.stringify(o))))?p(e[i()][i()]):n;var r,o}function h(e,t,n){if(n.includes("vertical")){let{row:n,column:r}=e,o=d(n,r),l=d(n,r+(t-1));return!(!o||!l)}{let{row:n,column:r}=e,o=d(n,r),l=d(n+(t-1),r);return!(!o||!l)}}function f(e,t){const{front:n,up:r,down:o,back:l}=a();let c=[],s=(e.row,e.column);for(let a=0;a<t.length;a++)0===e.row&&(0===s?(a===t.length-1&&c.push(...r(e.row,s)),c.push(...n(e.row,s)),s++):9===s?(0===a&&c.push(...o(e.row,s)),c.push(...n(e.row,s)),s++):s>0&&s<9&&(0===a&&c.push(...o(e.row,s)),a===t.length-1&&(c.push(...r(e.row,s)),c.push(...n(e.row,s))),s++)),9===e.row&&(0===s?(a===t.length-1&&c.push(...r(e.row,s)),c.push(...l(e.row,s)),s++):9===e.column?(0===a&&c.push(...o(e.row,s)),c.push(...l(e.row,s)),s++):s>0&&s<9&&(0===a&&c.push(...o(e.row,s)),a===t.length-1&&c.push(...r(e.row,s)),c.push(...l(e.row,s)),s++)),e.row>0&&e.row<9&&(0===s?(a===t.length-1&&c.push(...r(e.row,s)),c.push(...l(e.row,s),...n(e.row,s)),s++):9===e.column?(0===a&&c.push(...o(e.row,s)),c.push(...l(e.row,s),...n(e.row,s)),s++):s>0&&s<9&&(0===a&&c.push(...o(e.row,s)),a===t.length-1&&c.push(...r(e.row,s)),c.push(...l(e.row,s),...n(e.row,s)),s++));return c.filter((e=>!0===d(e[0],e[1])))}function m(t,n){return!!e[t][n].attacked}function g(e){let t=e.row,n=e.column;return[[t-1,n+1],[t-1,n-1],[t+1,n-1],[t+1,n+1]].filter((e=>!0===d(e[0],e[1])&&!1===m(e[0],e[1])&&!0===u(e[0],e[1])))}function y(e,t){const{up:n,down:r,front:o,back:l}=a().horizontal;let c=[],s=e.row;for(let a=0;a<t.length;a++)0===e.column&&(0===s?(a===t.length-1&&c.push(...o(s,e.column)),c.push(...n(s,e.column)),s++):9===s?(0===a&&c.push(...l(s,e.column)),c.push(...n(s,e.column)),s++):s>0&&s<9&&(0===a&&c.push(...l(s,e.column)),a===t.length-1&&c.push(...o(s,e.column)),c.push(...n(s,e.column)),s++)),9===e.column&&(0===s?(a===t.length-1&&c.push(...o(s,e.column)),c.push(...r(s,e.column)),s++):9===s?(0===a&&c.push(...l(s,e.column)),c.push(...r(s,e.column)),s++):s>0&&s<9&&(0===a&&c.push(...l(s,e.column)),a===t.length-1&&c.push(...o(s,e.column)),c.push(...r(s,e.column)),s++)),e.column>0&&e.column<9&&(0===s?(a===t.length-1&&c.push(...o(s,e.column)),c.push(...r(s,e.column)),c.push(...n(s,e.column)),s++):9===s?(0===a&&c.push(...l(s,e.column)),c.push(...r(s,e.column)),c.push(...n(s,e.column)),s++):s>0&&s<9&&(0===a&&c.push(...l(s,e.column)),a===t.length-1&&c.push(...o(s,e.column)),c.push(...r(s,e.column)),c.push(...n(s,e.column)),s++));return c.filter((e=>!0===d(e[0],e[1])))}return function(){const t=[0,1,2,3,4,5,6,7,8,9],n=[0,1,2,3,4,5,6,7,8,9];for(let r=0;r<t.length;r++){let o=[];for(let e=0;e<n.length;e++){let l=new s(t[r],n[e]);o.push(l)}e.push(o)}}(),{returnGrid:function(){return e},receiveAttack:function t(n,r){const o=e[n][r];if(console.log({cell:o}),u(n,r))return o.attacked=!0,!0;{let n=o.filled,r=e[n.getHead()[0]][n.getHead()[1]];if(n.isHit(),!n.isSunk()){o.attacked=!0;const e=g(o);return e.forEach((e=>t(e[0],e[1]))),e}if("vertical"===n.direction){let e=f(r,n).filter((e=>!1===m(e[0],e[1])&&!0===u(e[0],e[1])));return e.forEach((e=>t(e[0],e[1]))),e}if("horizontal"===n.direction){let e=y(r,n).filter((e=>!1===m(e[0],e[1])&&!0===u(e[0],e[1])));return e.forEach((e=>t(e[0],e[1]))),e}}},checkSunkenShips:function(){return n.length>0&&n.every((e=>e.filled.isSunk()))},cellState:u,cellCheck:p,shipFitInGrid:h,findVerticalAdjacentCells:f,checkForPerfectFitVertical:o,checkForPerfectFitHorizontal:c,findHorizontalAdjacentCells:y,placeShip:function(s=0,a=0){let u=e[s][a];for(let s of r)for(let r=0;r<s.count;r++){let r=i(0,2),a=p(u);if(1===r){let r=o(a,s),{row:c,column:i}=r,u=new l([c,i],s.length,"vertical");for(let r=0;r<s.length;r++)console.log({row:c,column:i}),e[c][i].filled=u,t.push([c,i]),n.push(e[c][i]),i++}else{let r=c(a,s),{row:o,column:i}=r,u=new l([o,i],s.length,"horizontal");for(let r=0;r<s.length;r++)console.log({row:o,column:i}),e[o][i].filled=u,t.push([o,i]),n.push(e[o][i]),o++}}},findDiagonals:g}};class s{constructor(e,t,n={}){this.column=t,this.row=e,this.filled=n,this.attacked=!1}}const a=()=>({up:function(e,t){let n=t+1;return[[e-1,n],[e+1,n],[e,n]]},down:function(e,t){let n=t-1;return[[e-1,n],[e+1,n],[e,n]]},front:function(e,t){return[[e+1,t]]},back:function(e,t){return[[e-1,t]]},horizontal:{front(e,t){let n=e+1;return[[n,t],[n,t+1],[n,t-1]]},down:(e,t)=>[[e,t-1]],up:(e,t)=>[[e,t+1]],back:(e,t)=>[[e-1,t],[e-1,t+1],[e-1,t-1]]}});var i=n(72),u=n.n(i),d=n(825),p=n.n(d),h=n(659),f=n.n(h),m=n(56),g=n.n(m),y=n(540),w=n.n(y),v=n(113),b=n.n(v),k=n(208),x={};x.styleTagTransform=b(),x.setAttributes=g(),x.insert=f().bind(null,"head"),x.domAPI=p(),x.insertStyleElement=w(),u()(k.A,x),k.A&&k.A.locals&&k.A.locals,function(){const{computerGameboard:n,playerGameBoard:l}=function(){const e=document.querySelector("body"),t=document.createElement("main"),{playerBoard:n,computerBoard:r}={playerBoard:e=>{const t=document.createElement("div");t.classList.add("gameboard-player");for(let n=0;n<e.length;n++){const r=document.createElement("div");r.classList.add("ship-row");for(let t of e[n])if(Object.keys(t.filled).length>0){const e=document.createElement("button");e.dataset.cellNo=`${t.row}${t.column}`,e.classList.add("ship-cell"),e.classList.add("ship-filled"),r.append(e)}else{const e=document.createElement("button");e.dataset.cellNo=`${t.row}${t.column}`,e.classList.add("no-ship-cell"),r.append(e)}t.append(r)}return t},computerBoard:e=>{const t=document.createElement("div");t.classList.add("gameboard-computer");for(let n=0;n<e.length;n++){const r=document.createElement("div");r.classList.add("ship-row");for(let t of e[n])if(Object.keys(t.filled).length>0){const e=document.createElement("button");e.dataset.cellNo=`${t.row}${t.column}`,e.classList.add("ship-cell"),r.append(e)}else{const e=document.createElement("button");e.dataset.cellNo=`${t.row}${t.column}`,e.classList.add("no-ship-cell"),r.append(e)}t.append(r)}return t}};e.append(t);let o=c(),l=c();return o.placeShip(),l.placeShip(),console.log(o.returnGrid()),console.log(l.returnGrid()),t.append(n(o.returnGrid()),r(l.returnGrid())),{computerGameboard:l,playerGameBoard:o}}();let{currentPlayer:s,switchCurrentPlayer:a}=function(){let n=[],r=new e("Mark"),o=new t("E-3000");n.push(r,o);let l=n[0];return{currentPlayer:l,switchCurrentPlayer:function(){return l.player.includes("Human")?(l=n[1],l):l.player.includes("Computer")?(l=n[0],l):void 0}}}(),i=!1;for(;!i;)if("Human"===s.player){const e=r(n.receiveAttack);e?i=n.checkSunkenShips():!1===e&&(s=a())}else if("Computer"===s.player){let{row:e,column:t}=s.makePlay();o(`${e}${t}`,l.receiveAttack)?i=l.checkSunkenShips():s=a()}}()})()})();