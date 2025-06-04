(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();const xl=()=>{};var Lo={};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Ya=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Ml=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],c=n[e++],l=n[e++],d=((i&7)<<18|(o&63)<<12|(c&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(d>>10)),t[r++]=String.fromCharCode(56320+(d&1023))}else{const o=n[e++],c=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|c&63)}}return t.join("")},Za={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],c=i+1<n.length,l=c?n[i+1]:0,d=i+2<n.length,p=d?n[i+2]:0,y=o>>2,E=(o&3)<<4|l>>4;let S=(l&15)<<2|p>>6,D=p&63;d||(D=64,c||(S=64)),r.push(e[y],e[E],e[S],e[D])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ya(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Ml(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],c=i<n.length?e[n.charAt(i)]:0;++i;const l=i<n.length?e[n.charAt(i)]:64;++i;const d=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||c==null||l==null||d==null)throw new Ul;const p=o<<2|c>>4;if(r.push(p),l!==64){const y=c<<4&240|l>>2;if(r.push(y),d!==64){const E=l<<6&192|d;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ul extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vl=function(n){const t=Ya(n);return Za.encodeByteArray(t,!0)},vr=function(n){return Vl(n).replace(/\./g,"")},tc=function(n){try{return Za.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Fl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const jl=()=>Fl().__FIREBASE_DEFAULTS__,Bl=()=>{if(typeof process>"u"||typeof Lo>"u")return;const n=Lo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},$l=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&tc(n[1]);return t&&JSON.parse(t)},jr=()=>{try{return xl()||jl()||Bl()||$l()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ec=n=>{var t,e;return(e=(t=jr())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},zl=n=>{const t=ec(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},nc=()=>{var n;return(n=jr())===null||n===void 0?void 0:n.config},rc=n=>{var t;return(t=jr())===null||t===void 0?void 0:t[`_${n}`]};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Hl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
* @license
* Copyright 2025 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function kn(n){return n.endsWith(".cloudworkstations.dev")}async function ic(n){return(await fetch(n,{credentials:"include"})).ok}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ql(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[vr(JSON.stringify(e)),vr(JSON.stringify(c)),""].join(".")}const gn={};function Gl(){const n={prod:[],emulator:[]};for(const t of Object.keys(gn))gn[t]?n.emulator.push(t):n.prod.push(t);return n}function Kl(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let xo=!1;function sc(n,t){if(typeof window>"u"||typeof document>"u"||!kn(window.location.host)||gn[n]===t||gn[n]||xo)return;gn[n]=t;function e(E){return`__firebase__banner__${E}`}const r="__firebase__banner",i=Gl().prod.length>0;function o(){const E=document.getElementById(r);E&&E.remove()}function c(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function l(E,S){E.setAttribute("width","24"),E.setAttribute("id",S),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function d(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{xo=!0,o()},E}function p(E,S){E.setAttribute("id",S),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function y(){const E=Kl(r),S=e("text"),D=document.getElementById(S)||document.createElement("span"),N=e("learnmore"),x=document.getElementById(N)||document.createElement("a"),O=e("preprendIcon"),B=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const z=E.element;c(z),p(x,N);const W=d();l(B,O),z.append(B,D,x,W),document.body.appendChild(z)}i?(D.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,D.innerText="Preview backend running in this workspace."),D.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function Ql(){var n;const t=(n=jr())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Xl(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Jl(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Yl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zl(){const n=gt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function th(){return!Ql()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function eh(){try{return typeof indexedDB=="object"}catch{return!1}}function nh(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const rh="FirebaseError";class qt extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=rh,Object.setPrototypeOf(this,qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nn.prototype.create)}}class Nn{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],c=o?ih(o,r):"Error",l=`${this.serviceName}: ${c} (${i}).`;return new qt(i,l,r)}}function ih(n,t){return n.replace(sh,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const sh=/\{\$([^}]+)}/g;function oh(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function we(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],c=t[i];if(Mo(o)&&Mo(c)){if(!we(o,c))return!1}else if(o!==c)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Mo(n){return n!==null&&typeof n=="object"}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Rn(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ah(n,t){const e=new ch(n,t);return e.subscribe.bind(e)}class ch{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let i;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");uh(t,["next","error","complete"])?i=t:i={next:t,error:e,complete:r},i.next===void 0&&(i.next=_i),i.error===void 0&&(i.error=_i),i.complete===void 0&&(i.complete=_i);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uh(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function _i(){}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function kt(n){return n&&n._delegate?n._delegate:n}class be{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const ge="[DEFAULT]";/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class lh{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Hl;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t?.identifier),i=(e=t?.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(dh(t))try{this.getOrInitializeService({instanceIdentifier:ge})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=ge){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ge){return this.instances.has(t)}getOptions(t=ge){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,c]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&c.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const c=this.instances.get(i);return c&&t(c,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hh(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ge){return this.component?this.component.multipleInstances?t:ge:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hh(n){return n===ge?void 0:n}function dh(n){return n.instantiationMode==="EAGER"}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class fh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new lh(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(V||(V={}));const ph={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},gh=V.INFO,mh={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},yh=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=mh[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class es{constructor(t){this.name=t,this._logLevel=gh,this._logHandler=yh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in V))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ph[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...t),this._logHandler(this,V.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...t),this._logHandler(this,V.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,V.INFO,...t),this._logHandler(this,V.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,V.WARN,...t),this._logHandler(this,V.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...t),this._logHandler(this,V.ERROR,...t)}}const vh=(n,t)=>t.some(e=>n instanceof e);let Uo,Vo;function wh(){return Uo||(Uo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bh(){return Vo||(Vo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oc=new WeakMap,Li=new WeakMap,ac=new WeakMap,Ci=new WeakMap,ns=new WeakMap;function Ih(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",c)},o=()=>{e(ee(n.result)),i()},c=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",c)});return t.then(e=>{e instanceof IDBCursor&&oc.set(e,n)}).catch(()=>{}),ns.set(t,n),t}function Eh(n){if(Li.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",c),n.removeEventListener("abort",c)},o=()=>{e(),i()},c=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",c),n.addEventListener("abort",c)});Li.set(n,t)}let xi={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Li.get(n);if(t==="objectStoreNames")return n.objectStoreNames||ac.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ee(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Th(n){xi=n(xi)}function _h(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Si(this),t,...e);return ac.set(r,t.sort?t.sort():[t]),ee(r)}:bh().includes(n)?function(...t){return n.apply(Si(this),t),ee(oc.get(this))}:function(...t){return ee(n.apply(Si(this),t))}}function Ch(n){return typeof n=="function"?_h(n):(n instanceof IDBTransaction&&Eh(n),vh(n,wh())?new Proxy(n,xi):n)}function ee(n){if(n instanceof IDBRequest)return Ih(n);if(Ci.has(n))return Ci.get(n);const t=Ch(n);return t!==n&&(Ci.set(n,t),ns.set(t,n)),t}const Si=n=>ns.get(n);function Sh(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const c=indexedDB.open(n,t),l=ee(c);return r&&c.addEventListener("upgradeneeded",d=>{r(ee(c.result),d.oldVersion,d.newVersion,ee(c.transaction),d)}),e&&c.addEventListener("blocked",d=>e(d.oldVersion,d.newVersion,d)),l.then(d=>{o&&d.addEventListener("close",()=>o()),i&&d.addEventListener("versionchange",p=>i(p.oldVersion,p.newVersion,p))}).catch(()=>{}),l}const Ah=["get","getKey","getAll","getAllKeys","count"],kh=["put","add","delete","clear"],Ai=new Map;function Fo(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Ai.get(t))return Ai.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=kh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ah.includes(e)))return;const o=async function(c,...l){const d=this.transaction(c,i?"readwrite":"readonly");let p=d.store;return r&&(p=p.index(l.shift())),(await Promise.all([p[e](...l),i&&d.done]))[0]};return Ai.set(t,o),o}Th(n=>({...n,get:(t,e,r)=>Fo(t,e)||n.get(t,e,r),has:(t,e)=>!!Fo(t,e)||n.has(t,e)}));/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Nh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Rh(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}else return null}).filter(t=>t).join(" ")}}function Rh(n){return n.getComponent()?.type==="VERSION"}const Mi="@firebase/app",jo="0.13.0";/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const $t=new es("@firebase/app"),Dh="@firebase/app-compat",Oh="@firebase/analytics-compat",Ph="@firebase/analytics",Lh="@firebase/app-check-compat",xh="@firebase/app-check",Mh="@firebase/auth",Uh="@firebase/auth-compat",Vh="@firebase/database",Fh="@firebase/data-connect",jh="@firebase/database-compat",Bh="@firebase/functions",$h="@firebase/functions-compat",zh="@firebase/installations",Hh="@firebase/installations-compat",qh="@firebase/messaging",Gh="@firebase/messaging-compat",Kh="@firebase/performance",Wh="@firebase/performance-compat",Qh="@firebase/remote-config",Xh="@firebase/remote-config-compat",Jh="@firebase/storage",Yh="@firebase/storage-compat",Zh="@firebase/firestore",td="@firebase/ai",ed="@firebase/firestore-compat",nd="firebase",rd="11.8.0";/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Ui="[DEFAULT]",id={[Mi]:"fire-core",[Dh]:"fire-core-compat",[Ph]:"fire-analytics",[Oh]:"fire-analytics-compat",[xh]:"fire-app-check",[Lh]:"fire-app-check-compat",[Mh]:"fire-auth",[Uh]:"fire-auth-compat",[Vh]:"fire-rtdb",[Fh]:"fire-data-connect",[jh]:"fire-rtdb-compat",[Bh]:"fire-fn",[$h]:"fire-fn-compat",[zh]:"fire-iid",[Hh]:"fire-iid-compat",[qh]:"fire-fcm",[Gh]:"fire-fcm-compat",[Kh]:"fire-perf",[Wh]:"fire-perf-compat",[Qh]:"fire-rc",[Xh]:"fire-rc-compat",[Jh]:"fire-gcs",[Yh]:"fire-gcs-compat",[Zh]:"fire-fst",[ed]:"fire-fst-compat",[td]:"fire-vertex","fire-js":"fire-js",[nd]:"fire-js-all"};/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const wr=new Map,sd=new Map,Vi=new Map;function Bo(n,t){try{n.container.addComponent(t)}catch(e){$t.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Fe(n){const t=n.name;if(Vi.has(t))return $t.debug(`There were multiple attempts to register component ${t}.`),!1;Vi.set(t,n);for(const e of wr.values())Bo(e,n);for(const e of sd.values())Bo(e,n);return!0}function rs(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function _t(n){return n==null?!1:n.settings!==void 0}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const od={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ne=new Nn("app","Firebase",od);/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ad{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new be("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ne.create("app-deleted",{appName:this._name})}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const qe=rd;function cc(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ui,automaticDataCollectionEnabled:!0},t),i=r.name;if(typeof i!="string"||!i)throw ne.create("bad-app-name",{appName:String(i)});if(e||(e=nc()),!e)throw ne.create("no-options");const o=wr.get(i);if(o){if(we(e,o.options)&&we(r,o.config))return o;throw ne.create("duplicate-app",{appName:i})}const c=new fh(i);for(const d of Vi.values())c.addComponent(d);const l=new ad(e,r,c);return wr.set(i,l),l}function uc(n=Ui){const t=wr.get(n);if(!t&&n===Ui&&nc())return cc();if(!t)throw ne.create("no-app",{appName:n});return t}function re(n,t,e){var r;let i=(r=id[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),c=t.match(/\s|\//);if(o||c){const l=[`Unable to register library "${i}" with version "${t}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&c&&l.push("and"),c&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$t.warn(l.join(" "));return}Fe(new be(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const cd="firebase-heartbeat-database",ud=1,In="firebase-heartbeat-store";let ki=null;function lc(){return ki||(ki=Sh(cd,ud,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(In)}catch(e){console.warn(e)}}}}).catch(n=>{throw ne.create("idb-open",{originalErrorMessage:n.message})})),ki}async function ld(n){try{const t=(await lc()).transaction(In),e=await t.objectStore(In).get(hc(n));return await t.done,e}catch(t){if(t instanceof qt)$t.warn(t.message);else{const e=ne.create("idb-get",{originalErrorMessage:t?.message});$t.warn(e.message)}}}async function $o(n,t){try{const e=(await lc()).transaction(In,"readwrite");await e.objectStore(In).put(t,hc(n)),await e.done}catch(e){if(e instanceof qt)$t.warn(e.message);else{const r=ne.create("idb-set",{originalErrorMessage:e?.message});$t.warn(r.message)}}}function hc(n){return`${n.name}!${n.options.appId}`}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const hd=1024,dd=30;class fd{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new gd(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=zo();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>dd){const o=md(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){$t.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=zo(),{heartbeatsToSend:r,unsentEntries:i}=pd(this._heartbeatsCache.heartbeats),o=vr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return $t.warn(e),""}}}function zo(){return new Date().toISOString().substring(0,10)}function pd(n,t=hd){const e=[];let r=n.slice();for(const i of n){const o=e.find(c=>c.agent===i.agent);if(o){if(o.dates.push(i.date),Ho(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Ho(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class gd{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eh()?nh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ld(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return $o(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return $o(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Ho(n){return vr(JSON.stringify({version:2,heartbeats:n})).length}function md(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function yd(n){Fe(new be("platform-logger",t=>new Nh(t),"PRIVATE")),Fe(new be("heartbeat",t=>new fd(t),"PRIVATE")),re(Mi,jo,n),re(Mi,jo,"esm2017"),re("fire-js","")}yd("");var vd="firebase",wd="11.8.1";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/re(vd,wd,"app");var qo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var is;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(b,f){function g(){}g.prototype=f.prototype,b.D=f.prototype,b.prototype=new g,b.prototype.constructor=b,b.C=function(v,w,T){for(var m=Array(arguments.length-2),xt=2;xt<arguments.length;xt++)m[xt-2]=arguments[xt];return f.prototype[w].apply(v,m)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,f,g){g||(g=0);var v=Array(16);if(typeof f=="string")for(var w=0;16>w;++w)v[w]=f.charCodeAt(g++)|f.charCodeAt(g++)<<8|f.charCodeAt(g++)<<16|f.charCodeAt(g++)<<24;else for(w=0;16>w;++w)v[w]=f[g++]|f[g++]<<8|f[g++]<<16|f[g++]<<24;f=b.g[0],g=b.g[1],w=b.g[2];var T=b.g[3],m=f+(T^g&(w^T))+v[0]+3614090360&4294967295;f=g+(m<<7&4294967295|m>>>25),m=T+(w^f&(g^w))+v[1]+3905402710&4294967295,T=f+(m<<12&4294967295|m>>>20),m=w+(g^T&(f^g))+v[2]+606105819&4294967295,w=T+(m<<17&4294967295|m>>>15),m=g+(f^w&(T^f))+v[3]+3250441966&4294967295,g=w+(m<<22&4294967295|m>>>10),m=f+(T^g&(w^T))+v[4]+4118548399&4294967295,f=g+(m<<7&4294967295|m>>>25),m=T+(w^f&(g^w))+v[5]+1200080426&4294967295,T=f+(m<<12&4294967295|m>>>20),m=w+(g^T&(f^g))+v[6]+2821735955&4294967295,w=T+(m<<17&4294967295|m>>>15),m=g+(f^w&(T^f))+v[7]+4249261313&4294967295,g=w+(m<<22&4294967295|m>>>10),m=f+(T^g&(w^T))+v[8]+1770035416&4294967295,f=g+(m<<7&4294967295|m>>>25),m=T+(w^f&(g^w))+v[9]+2336552879&4294967295,T=f+(m<<12&4294967295|m>>>20),m=w+(g^T&(f^g))+v[10]+4294925233&4294967295,w=T+(m<<17&4294967295|m>>>15),m=g+(f^w&(T^f))+v[11]+2304563134&4294967295,g=w+(m<<22&4294967295|m>>>10),m=f+(T^g&(w^T))+v[12]+1804603682&4294967295,f=g+(m<<7&4294967295|m>>>25),m=T+(w^f&(g^w))+v[13]+4254626195&4294967295,T=f+(m<<12&4294967295|m>>>20),m=w+(g^T&(f^g))+v[14]+2792965006&4294967295,w=T+(m<<17&4294967295|m>>>15),m=g+(f^w&(T^f))+v[15]+1236535329&4294967295,g=w+(m<<22&4294967295|m>>>10),m=f+(w^T&(g^w))+v[1]+4129170786&4294967295,f=g+(m<<5&4294967295|m>>>27),m=T+(g^w&(f^g))+v[6]+3225465664&4294967295,T=f+(m<<9&4294967295|m>>>23),m=w+(f^g&(T^f))+v[11]+643717713&4294967295,w=T+(m<<14&4294967295|m>>>18),m=g+(T^f&(w^T))+v[0]+3921069994&4294967295,g=w+(m<<20&4294967295|m>>>12),m=f+(w^T&(g^w))+v[5]+3593408605&4294967295,f=g+(m<<5&4294967295|m>>>27),m=T+(g^w&(f^g))+v[10]+38016083&4294967295,T=f+(m<<9&4294967295|m>>>23),m=w+(f^g&(T^f))+v[15]+3634488961&4294967295,w=T+(m<<14&4294967295|m>>>18),m=g+(T^f&(w^T))+v[4]+3889429448&4294967295,g=w+(m<<20&4294967295|m>>>12),m=f+(w^T&(g^w))+v[9]+568446438&4294967295,f=g+(m<<5&4294967295|m>>>27),m=T+(g^w&(f^g))+v[14]+3275163606&4294967295,T=f+(m<<9&4294967295|m>>>23),m=w+(f^g&(T^f))+v[3]+4107603335&4294967295,w=T+(m<<14&4294967295|m>>>18),m=g+(T^f&(w^T))+v[8]+1163531501&4294967295,g=w+(m<<20&4294967295|m>>>12),m=f+(w^T&(g^w))+v[13]+2850285829&4294967295,f=g+(m<<5&4294967295|m>>>27),m=T+(g^w&(f^g))+v[2]+4243563512&4294967295,T=f+(m<<9&4294967295|m>>>23),m=w+(f^g&(T^f))+v[7]+1735328473&4294967295,w=T+(m<<14&4294967295|m>>>18),m=g+(T^f&(w^T))+v[12]+2368359562&4294967295,g=w+(m<<20&4294967295|m>>>12),m=f+(g^w^T)+v[5]+4294588738&4294967295,f=g+(m<<4&4294967295|m>>>28),m=T+(f^g^w)+v[8]+2272392833&4294967295,T=f+(m<<11&4294967295|m>>>21),m=w+(T^f^g)+v[11]+1839030562&4294967295,w=T+(m<<16&4294967295|m>>>16),m=g+(w^T^f)+v[14]+4259657740&4294967295,g=w+(m<<23&4294967295|m>>>9),m=f+(g^w^T)+v[1]+2763975236&4294967295,f=g+(m<<4&4294967295|m>>>28),m=T+(f^g^w)+v[4]+1272893353&4294967295,T=f+(m<<11&4294967295|m>>>21),m=w+(T^f^g)+v[7]+4139469664&4294967295,w=T+(m<<16&4294967295|m>>>16),m=g+(w^T^f)+v[10]+3200236656&4294967295,g=w+(m<<23&4294967295|m>>>9),m=f+(g^w^T)+v[13]+681279174&4294967295,f=g+(m<<4&4294967295|m>>>28),m=T+(f^g^w)+v[0]+3936430074&4294967295,T=f+(m<<11&4294967295|m>>>21),m=w+(T^f^g)+v[3]+3572445317&4294967295,w=T+(m<<16&4294967295|m>>>16),m=g+(w^T^f)+v[6]+76029189&4294967295,g=w+(m<<23&4294967295|m>>>9),m=f+(g^w^T)+v[9]+3654602809&4294967295,f=g+(m<<4&4294967295|m>>>28),m=T+(f^g^w)+v[12]+3873151461&4294967295,T=f+(m<<11&4294967295|m>>>21),m=w+(T^f^g)+v[15]+530742520&4294967295,w=T+(m<<16&4294967295|m>>>16),m=g+(w^T^f)+v[2]+3299628645&4294967295,g=w+(m<<23&4294967295|m>>>9),m=f+(w^(g|~T))+v[0]+4096336452&4294967295,f=g+(m<<6&4294967295|m>>>26),m=T+(g^(f|~w))+v[7]+1126891415&4294967295,T=f+(m<<10&4294967295|m>>>22),m=w+(f^(T|~g))+v[14]+2878612391&4294967295,w=T+(m<<15&4294967295|m>>>17),m=g+(T^(w|~f))+v[5]+4237533241&4294967295,g=w+(m<<21&4294967295|m>>>11),m=f+(w^(g|~T))+v[12]+1700485571&4294967295,f=g+(m<<6&4294967295|m>>>26),m=T+(g^(f|~w))+v[3]+2399980690&4294967295,T=f+(m<<10&4294967295|m>>>22),m=w+(f^(T|~g))+v[10]+4293915773&4294967295,w=T+(m<<15&4294967295|m>>>17),m=g+(T^(w|~f))+v[1]+2240044497&4294967295,g=w+(m<<21&4294967295|m>>>11),m=f+(w^(g|~T))+v[8]+1873313359&4294967295,f=g+(m<<6&4294967295|m>>>26),m=T+(g^(f|~w))+v[15]+4264355552&4294967295,T=f+(m<<10&4294967295|m>>>22),m=w+(f^(T|~g))+v[6]+2734768916&4294967295,w=T+(m<<15&4294967295|m>>>17),m=g+(T^(w|~f))+v[13]+1309151649&4294967295,g=w+(m<<21&4294967295|m>>>11),m=f+(w^(g|~T))+v[4]+4149444226&4294967295,f=g+(m<<6&4294967295|m>>>26),m=T+(g^(f|~w))+v[11]+3174756917&4294967295,T=f+(m<<10&4294967295|m>>>22),m=w+(f^(T|~g))+v[2]+718787259&4294967295,w=T+(m<<15&4294967295|m>>>17),m=g+(T^(w|~f))+v[9]+3951481745&4294967295,b.g[0]=b.g[0]+f&4294967295,b.g[1]=b.g[1]+(w+(m<<21&4294967295|m>>>11))&4294967295,b.g[2]=b.g[2]+w&4294967295,b.g[3]=b.g[3]+T&4294967295}r.prototype.u=function(b,f){f===void 0&&(f=b.length);for(var g=f-this.blockSize,v=this.B,w=this.h,T=0;T<f;){if(w==0)for(;T<=g;)i(this,b,T),T+=this.blockSize;if(typeof b=="string"){for(;T<f;)if(v[w++]=b.charCodeAt(T++),w==this.blockSize){i(this,v),w=0;break}}else for(;T<f;)if(v[w++]=b[T++],w==this.blockSize){i(this,v),w=0;break}}this.h=w,this.o+=f},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var f=1;f<b.length-8;++f)b[f]=0;var g=8*this.o;for(f=b.length-8;f<b.length;++f)b[f]=g&255,g/=256;for(this.u(b),b=Array(16),f=g=0;4>f;++f)for(var v=0;32>v;v+=8)b[g++]=this.g[f]>>>v&255;return b};function o(b,f){var g=l;return Object.prototype.hasOwnProperty.call(g,b)?g[b]:g[b]=f(b)}function c(b,f){this.h=f;for(var g=[],v=!0,w=b.length-1;0<=w;w--){var T=b[w]|0;v&&T==f||(g[w]=T,v=!1)}this.g=g}var l={};function d(b){return-128<=b&&128>b?o(b,function(f){return new c([f|0],0>f?-1:0)}):new c([b|0],0>b?-1:0)}function p(b){if(isNaN(b)||!isFinite(b))return E;if(0>b)return O(p(-b));for(var f=[],g=1,v=0;b>=g;v++)f[v]=b/g|0,g*=4294967296;return new c(f,0)}function y(b,f){if(b.length==0)throw Error("number format error: empty string");if(f=f||10,2>f||36<f)throw Error("radix out of range: "+f);if(b.charAt(0)=="-")return O(y(b.substring(1),f));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=p(Math.pow(f,8)),v=E,w=0;w<b.length;w+=8){var T=Math.min(8,b.length-w),m=parseInt(b.substring(w,w+T),f);8>T?(T=p(Math.pow(f,T)),v=v.j(T).add(p(m))):(v=v.j(g),v=v.add(p(m)))}return v}var E=d(0),S=d(1),D=d(16777216);n=c.prototype,n.m=function(){if(x(this))return-O(this).m();for(var b=0,f=1,g=0;g<this.g.length;g++){var v=this.i(g);b+=(0<=v?v:4294967296+v)*f,f*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(N(this))return"0";if(x(this))return"-"+O(this).toString(b);for(var f=p(Math.pow(b,6)),g=this,v="";;){var w=Z(g,f).g;g=B(g,w.j(f));var T=((0<g.g.length?g.g[0]:g.h)>>>0).toString(b);if(g=w,N(g))return T+v;for(;6>T.length;)T="0"+T;v=T+v}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function N(b){if(b.h!=0)return!1;for(var f=0;f<b.g.length;f++)if(b.g[f]!=0)return!1;return!0}function x(b){return b.h==-1}n.l=function(b){return b=B(this,b),x(b)?-1:N(b)?0:1};function O(b){for(var f=b.g.length,g=[],v=0;v<f;v++)g[v]=~b.g[v];return new c(g,~b.h).add(S)}n.abs=function(){return x(this)?O(this):this},n.add=function(b){for(var f=Math.max(this.g.length,b.g.length),g=[],v=0,w=0;w<=f;w++){var T=v+(this.i(w)&65535)+(b.i(w)&65535),m=(T>>>16)+(this.i(w)>>>16)+(b.i(w)>>>16);v=m>>>16,T&=65535,m&=65535,g[w]=m<<16|T}return new c(g,g[g.length-1]&-2147483648?-1:0)};function B(b,f){return b.add(O(f))}n.j=function(b){if(N(this)||N(b))return E;if(x(this))return x(b)?O(this).j(O(b)):O(O(this).j(b));if(x(b))return O(this.j(O(b)));if(0>this.l(D)&&0>b.l(D))return p(this.m()*b.m());for(var f=this.g.length+b.g.length,g=[],v=0;v<2*f;v++)g[v]=0;for(v=0;v<this.g.length;v++)for(var w=0;w<b.g.length;w++){var T=this.i(v)>>>16,m=this.i(v)&65535,xt=b.i(w)>>>16,Qe=b.i(w)&65535;g[2*v+2*w]+=m*Qe,z(g,2*v+2*w),g[2*v+2*w+1]+=T*Qe,z(g,2*v+2*w+1),g[2*v+2*w+1]+=m*xt,z(g,2*v+2*w+1),g[2*v+2*w+2]+=T*xt,z(g,2*v+2*w+2)}for(v=0;v<f;v++)g[v]=g[2*v+1]<<16|g[2*v];for(v=f;v<2*f;v++)g[v]=0;return new c(g,0)};function z(b,f){for(;(b[f]&65535)!=b[f];)b[f+1]+=b[f]>>>16,b[f]&=65535,f++}function W(b,f){this.g=b,this.h=f}function Z(b,f){if(N(f))throw Error("division by zero");if(N(b))return new W(E,E);if(x(b))return f=Z(O(b),f),new W(O(f.g),O(f.h));if(x(f))return f=Z(b,O(f)),new W(O(f.g),f.h);if(30<b.g.length){if(x(b)||x(f))throw Error("slowDivide_ only works with positive integers.");for(var g=S,v=f;0>=v.l(b);)g=Nt(g),v=Nt(v);var w=tt(g,1),T=tt(v,1);for(v=tt(v,2),g=tt(g,2);!N(v);){var m=T.add(v);0>=m.l(b)&&(w=w.add(g),T=m),v=tt(v,1),g=tt(g,1)}return f=B(b,w.j(f)),new W(w,f)}for(w=E;0<=b.l(f);){for(g=Math.max(1,Math.floor(b.m()/f.m())),v=Math.ceil(Math.log(g)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),T=p(g),m=T.j(f);x(m)||0<m.l(b);)g-=v,T=p(g),m=T.j(f);N(T)&&(T=S),w=w.add(T),b=B(b,m)}return new W(w,b)}n.A=function(b){return Z(this,b).h},n.and=function(b){for(var f=Math.max(this.g.length,b.g.length),g=[],v=0;v<f;v++)g[v]=this.i(v)&b.i(v);return new c(g,this.h&b.h)},n.or=function(b){for(var f=Math.max(this.g.length,b.g.length),g=[],v=0;v<f;v++)g[v]=this.i(v)|b.i(v);return new c(g,this.h|b.h)},n.xor=function(b){for(var f=Math.max(this.g.length,b.g.length),g=[],v=0;v<f;v++)g[v]=this.i(v)^b.i(v);return new c(g,this.h^b.h)};function Nt(b){for(var f=b.g.length+1,g=[],v=0;v<f;v++)g[v]=b.i(v)<<1|b.i(v-1)>>>31;return new c(g,b.h)}function tt(b,f){var g=f>>5;f%=32;for(var v=b.g.length-g,w=[],T=0;T<v;T++)w[T]=0<f?b.i(T+g)>>>f|b.i(T+g+1)<<32-f:b.i(T+g);return new c(w,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=p,c.fromString=y,is=c}).apply(typeof qo<"u"?qo:typeof self<"u"?self:typeof window<"u"?window:{});var ir=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dc,pn,fc,lr,Fi,pc,gc,mc;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,u){return s==Array.prototype||s==Object.prototype||(s[a]=u.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof ir=="object"&&ir];for(var a=0;a<s.length;++a){var u=s[a];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=e(this);function i(s,a){if(a)t:{var u=r;s=s.split(".");for(var h=0;h<s.length-1;h++){var I=s[h];if(!(I in u))break t;u=u[I]}s=s[s.length-1],h=u[s],a=a(h),a!=h&&a!=null&&t(u,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var u=0,h=!1,I={next:function(){if(!h&&u<s.length){var _=u++;return{value:a(_,s[_]),done:!1}}return h=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},l=this||self;function d(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function p(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function y(s,a,u){return s.call.apply(s.bind,arguments)}function E(s,a,u){if(!s)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,h),s.apply(a,I)}}return function(){return s.apply(a,arguments)}}function S(s,a,u){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:E,S.apply(null,arguments)}function D(s,a){var u=Array.prototype.slice.call(arguments,1);return function(){var h=u.slice();return h.push.apply(h,arguments),s.apply(this,h)}}function N(s,a){function u(){}u.prototype=a.prototype,s.aa=a.prototype,s.prototype=new u,s.prototype.constructor=s,s.Qb=function(h,I,_){for(var k=Array(arguments.length-2),G=2;G<arguments.length;G++)k[G-2]=arguments[G];return a.prototype[I].apply(h,k)}}function x(s){const a=s.length;if(0<a){const u=Array(a);for(let h=0;h<a;h++)u[h]=s[h];return u}return[]}function O(s,a){for(let u=1;u<arguments.length;u++){const h=arguments[u];if(d(h)){const I=s.length||0,_=h.length||0;s.length=I+_;for(let k=0;k<_;k++)s[I+k]=h[k]}else s.push(h)}}class B{constructor(a,u){this.i=a,this.j=u,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function z(s){return/^[\s\xa0]*$/.test(s)}function W(){var s=l.navigator;return s&&(s=s.userAgent)?s:""}function Z(s){return Z[" "](s),s}Z[" "]=function(){};var Nt=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function tt(s,a,u){for(const h in s)a.call(u,s[h],h,s)}function b(s,a){for(const u in s)a.call(void 0,s[u],u,s)}function f(s){const a={};for(const u in s)a[u]=s[u];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(s,a){let u,h;for(let I=1;I<arguments.length;I++){h=arguments[I];for(u in h)s[u]=h[u];for(let _=0;_<g.length;_++)u=g[_],Object.prototype.hasOwnProperty.call(h,u)&&(s[u]=h[u])}}function w(s){var a=1;s=s.split(":");const u=[];for(;0<a&&s.length;)u.push(s.shift()),a--;return s.length&&u.push(s.join(":")),u}function T(s){l.setTimeout(()=>{throw s},0)}function m(){var s=ti;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class xt{constructor(){this.h=this.g=null}add(a,u){const h=Qe.get();h.set(a,u),this.h?this.h.next=h:this.g=h,this.h=h}}var Qe=new B(()=>new tl,s=>s.reset());class tl{constructor(){this.next=this.g=this.h=null}set(a,u){this.h=a,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let Xe,Je=!1,ti=new xt,Ps=()=>{const s=l.Promise.resolve(void 0);Xe=()=>{s.then(el)}};var el=()=>{for(var s;s=m();){try{s.h.call(s.g)}catch(u){T(u)}var a=Qe;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}Je=!1};function Gt(){this.s=this.s,this.C=this.C}Gt.prototype.s=!1,Gt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Gt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ut(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ut.prototype.h=function(){this.defaultPrevented=!0};var nl=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const u=()=>{};l.addEventListener("test",u,a),l.removeEventListener("test",u,a)}catch{}return s}();function Ye(s,a){if(ut.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var u=this.type=s.type,h=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(Nt){t:{try{Z(a.nodeName);var I=!0;break t}catch{}I=!1}I||(a=null)}}else u=="mouseover"?a=s.fromElement:u=="mouseout"&&(a=s.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:rl[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Ye.aa.h.call(this)}}N(Ye,ut);var rl={2:"touch",3:"pen",4:"mouse"};Ye.prototype.h=function(){Ye.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Fn="closure_listenable_"+(1e6*Math.random()|0),il=0;function sl(s,a,u,h,I){this.listener=s,this.proxy=null,this.src=a,this.type=u,this.capture=!!h,this.ha=I,this.key=++il,this.da=this.fa=!1}function jn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Bn(s){this.src=s,this.g={},this.h=0}Bn.prototype.add=function(s,a,u,h,I){var _=s.toString();s=this.g[_],s||(s=this.g[_]=[],this.h++);var k=ni(s,a,h,I);return-1<k?(a=s[k],u||(a.fa=!1)):(a=new sl(a,this.src,_,!!h,I),a.fa=u,s.push(a)),a};function ei(s,a){var u=a.type;if(u in s.g){var h=s.g[u],I=Array.prototype.indexOf.call(h,a,void 0),_;(_=0<=I)&&Array.prototype.splice.call(h,I,1),_&&(jn(a),s.g[u].length==0&&(delete s.g[u],s.h--))}}function ni(s,a,u,h){for(var I=0;I<s.length;++I){var _=s[I];if(!_.da&&_.listener==a&&_.capture==!!u&&_.ha==h)return I}return-1}var ri="closure_lm_"+(1e6*Math.random()|0),ii={};function Ls(s,a,u,h,I){if(Array.isArray(a)){for(var _=0;_<a.length;_++)Ls(s,a[_],u,h,I);return null}return u=Us(u),s&&s[Fn]?s.K(a,u,p(h)?!!h.capture:!1,I):ol(s,a,u,!1,h,I)}function ol(s,a,u,h,I,_){if(!a)throw Error("Invalid event type");var k=p(I)?!!I.capture:!!I,G=oi(s);if(G||(s[ri]=G=new Bn(s)),u=G.add(a,u,h,k,_),u.proxy)return u;if(h=al(),u.proxy=h,h.src=s,h.listener=u,s.addEventListener)nl||(I=k),I===void 0&&(I=!1),s.addEventListener(a.toString(),h,I);else if(s.attachEvent)s.attachEvent(Ms(a.toString()),h);else if(s.addListener&&s.removeListener)s.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return u}function al(){function s(u){return a.call(s.src,s.listener,u)}const a=cl;return s}function xs(s,a,u,h,I){if(Array.isArray(a))for(var _=0;_<a.length;_++)xs(s,a[_],u,h,I);else h=p(h)?!!h.capture:!!h,u=Us(u),s&&s[Fn]?(s=s.i,a=String(a).toString(),a in s.g&&(_=s.g[a],u=ni(_,u,h,I),-1<u&&(jn(_[u]),Array.prototype.splice.call(_,u,1),_.length==0&&(delete s.g[a],s.h--)))):s&&(s=oi(s))&&(a=s.g[a.toString()],s=-1,a&&(s=ni(a,u,h,I)),(u=-1<s?a[s]:null)&&si(u))}function si(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[Fn])ei(a.i,s);else{var u=s.type,h=s.proxy;a.removeEventListener?a.removeEventListener(u,h,s.capture):a.detachEvent?a.detachEvent(Ms(u),h):a.addListener&&a.removeListener&&a.removeListener(h),(u=oi(a))?(ei(u,s),u.h==0&&(u.src=null,a[ri]=null)):jn(s)}}}function Ms(s){return s in ii?ii[s]:ii[s]="on"+s}function cl(s,a){if(s.da)s=!0;else{a=new Ye(a,this);var u=s.listener,h=s.ha||s.src;s.fa&&si(s),s=u.call(h,a)}return s}function oi(s){return s=s[ri],s instanceof Bn?s:null}var ai="__closure_events_fn_"+(1e9*Math.random()>>>0);function Us(s){return typeof s=="function"?s:(s[ai]||(s[ai]=function(a){return s.handleEvent(a)}),s[ai])}function lt(){Gt.call(this),this.i=new Bn(this),this.M=this,this.F=null}N(lt,Gt),lt.prototype[Fn]=!0,lt.prototype.removeEventListener=function(s,a,u,h){xs(this,s,a,u,h)};function mt(s,a){var u,h=s.F;if(h)for(u=[];h;h=h.F)u.push(h);if(s=s.M,h=a.type||a,typeof a=="string")a=new ut(a,s);else if(a instanceof ut)a.target=a.target||s;else{var I=a;a=new ut(h,s),v(a,I)}if(I=!0,u)for(var _=u.length-1;0<=_;_--){var k=a.g=u[_];I=$n(k,h,!0,a)&&I}if(k=a.g=s,I=$n(k,h,!0,a)&&I,I=$n(k,h,!1,a)&&I,u)for(_=0;_<u.length;_++)k=a.g=u[_],I=$n(k,h,!1,a)&&I}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var u=s.g[a],h=0;h<u.length;h++)jn(u[h]);delete s.g[a],s.h--}}this.F=null},lt.prototype.K=function(s,a,u,h){return this.i.add(String(s),a,!1,u,h)},lt.prototype.L=function(s,a,u,h){return this.i.add(String(s),a,!0,u,h)};function $n(s,a,u,h){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var I=!0,_=0;_<a.length;++_){var k=a[_];if(k&&!k.da&&k.capture==u){var G=k.listener,it=k.ha||k.src;k.fa&&ei(s.i,k),I=G.call(it,h)!==!1&&I}}return I&&!h.defaultPrevented}function Vs(s,a,u){if(typeof s=="function")u&&(s=S(s,u));else if(s&&typeof s.handleEvent=="function")s=S(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:l.setTimeout(s,a||0)}function Fs(s){s.g=Vs(()=>{s.g=null,s.i&&(s.i=!1,Fs(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class ul extends Gt{constructor(a,u){super(),this.m=a,this.l=u,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Fs(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ze(s){Gt.call(this),this.h=s,this.g={}}N(Ze,Gt);var js=[];function Bs(s){tt(s.g,function(a,u){this.g.hasOwnProperty(u)&&si(a)},s),s.g={}}Ze.prototype.N=function(){Ze.aa.N.call(this),Bs(this)},Ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ci=l.JSON.stringify,ll=l.JSON.parse,hl=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function ui(){}ui.prototype.h=null;function $s(s){return s.h||(s.h=s.i())}function zs(){}var tn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function li(){ut.call(this,"d")}N(li,ut);function hi(){ut.call(this,"c")}N(hi,ut);var he={},Hs=null;function zn(){return Hs=Hs||new lt}he.La="serverreachability";function qs(s){ut.call(this,he.La,s)}N(qs,ut);function en(s){const a=zn();mt(a,new qs(a))}he.STAT_EVENT="statevent";function Gs(s,a){ut.call(this,he.STAT_EVENT,s),this.stat=a}N(Gs,ut);function yt(s){const a=zn();mt(a,new Gs(a,s))}he.Ma="timingevent";function Ks(s,a){ut.call(this,he.Ma,s),this.size=a}N(Ks,ut);function nn(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},a)}function rn(){this.g=!0}rn.prototype.xa=function(){this.g=!1};function dl(s,a,u,h,I,_){s.info(function(){if(s.g)if(_)for(var k="",G=_.split("&"),it=0;it<G.length;it++){var $=G[it].split("=");if(1<$.length){var ht=$[0];$=$[1];var vt=ht.split("_");k=2<=vt.length&&vt[1]=="type"?k+(ht+"="+$+"&"):k+(ht+"=redacted&")}}else k=null;else k=_;return"XMLHTTP REQ ("+h+") [attempt "+I+"]: "+a+`
`+u+`
`+k})}function fl(s,a,u,h,I,_,k){s.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+I+"]: "+a+`
`+u+`
`+_+" "+k})}function ke(s,a,u,h){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+gl(s,u)+(h?" "+h:"")})}function pl(s,a){s.info(function(){return"TIMEOUT: "+a})}rn.prototype.info=function(){};function gl(s,a){if(!s.g)return a;if(!a)return null;try{var u=JSON.parse(a);if(u){for(s=0;s<u.length;s++)if(Array.isArray(u[s])){var h=u[s];if(!(2>h.length)){var I=h[1];if(Array.isArray(I)&&!(1>I.length)){var _=I[0];if(_!="noop"&&_!="stop"&&_!="close")for(var k=1;k<I.length;k++)I[k]=""}}}}return ci(u)}catch{return a}}var Hn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ws={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},di;function qn(){}N(qn,ui),qn.prototype.g=function(){return new XMLHttpRequest},qn.prototype.i=function(){return{}},di=new qn;function Kt(s,a,u,h){this.j=s,this.i=a,this.l=u,this.R=h||1,this.U=new Ze(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Qs}function Qs(){this.i=null,this.g="",this.h=!1}var Xs={},fi={};function pi(s,a,u){s.L=1,s.v=Qn(Mt(a)),s.m=u,s.P=!0,Js(s,null)}function Js(s,a){s.F=Date.now(),Gn(s),s.A=Mt(s.v);var u=s.A,h=s.R;Array.isArray(h)||(h=[String(h)]),ho(u.i,"t",h),s.C=0,u=s.j.J,s.h=new Qs,s.g=Ro(s.j,u?a:null,!s.m),0<s.O&&(s.M=new ul(S(s.Y,s,s.g),s.O)),a=s.U,u=s.g,h=s.ca;var I="readystatechange";Array.isArray(I)||(I&&(js[0]=I.toString()),I=js);for(var _=0;_<I.length;_++){var k=Ls(u,I[_],h||a.handleEvent,!1,a.h||a);if(!k)break;a.g[k.key]=k}a=s.H?f(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),en(),dl(s.i,s.u,s.A,s.l,s.R,s.m)}Kt.prototype.ca=function(s){s=s.target;const a=this.M;a&&Ut(s)==3?a.j():this.Y(s)},Kt.prototype.Y=function(s){try{if(s==this.g)t:{const vt=Ut(this.g);var a=this.g.Ba();const De=this.g.Z();if(!(3>vt)&&(vt!=3||this.g&&(this.h.h||this.g.oa()||wo(this.g)))){this.J||vt!=4||a==7||(a==8||0>=De?en(3):en(2)),gi(this);var u=this.g.Z();this.X=u;e:if(Ys(this)){var h=wo(this.g);s="";var I=h.length,_=Ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){de(this),sn(this);var k="";break e}this.h.i=new l.TextDecoder}for(a=0;a<I;a++)this.h.h=!0,s+=this.h.i.decode(h[a],{stream:!(_&&a==I-1)});h.length=0,this.h.g+=s,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=u==200,fl(this.i,this.u,this.A,this.l,this.R,vt,u),this.o){if(this.T&&!this.K){e:{if(this.g){var G,it=this.g;if((G=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(G)){var $=G;break e}}$=null}if(u=$)ke(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,mi(this,u);else{this.o=!1,this.s=3,yt(12),de(this),sn(this);break t}}if(this.P){u=!0;let Et;for(;!this.J&&this.C<k.length;)if(Et=ml(this,k),Et==fi){vt==4&&(this.s=4,yt(14),u=!1),ke(this.i,this.l,null,"[Incomplete Response]");break}else if(Et==Xs){this.s=4,yt(15),ke(this.i,this.l,k,"[Invalid Chunk]"),u=!1;break}else ke(this.i,this.l,Et,null),mi(this,Et);if(Ys(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),vt!=4||k.length!=0||this.h.h||(this.s=1,yt(16),u=!1),this.o=this.o&&u,!u)ke(this.i,this.l,k,"[Invalid Chunked Response]"),de(this),sn(this);else if(0<k.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),Ei(ht),ht.M=!0,yt(11))}}else ke(this.i,this.l,k,null),mi(this,k);vt==4&&de(this),this.o&&!this.J&&(vt==4?So(this.j,this):(this.o=!1,Gn(this)))}else Pl(this.g),u==400&&0<k.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),de(this),sn(this)}}}catch{}finally{}};function Ys(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function ml(s,a){var u=s.C,h=a.indexOf(`
`,u);return h==-1?fi:(u=Number(a.substring(u,h)),isNaN(u)?Xs:(h+=1,h+u>a.length?fi:(a=a.slice(h,h+u),s.C=h+u,a)))}Kt.prototype.cancel=function(){this.J=!0,de(this)};function Gn(s){s.S=Date.now()+s.I,Zs(s,s.I)}function Zs(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=nn(S(s.ba,s),a)}function gi(s){s.B&&(l.clearTimeout(s.B),s.B=null)}Kt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(pl(this.i,this.A),this.L!=2&&(en(),yt(17)),de(this),this.s=2,sn(this)):Zs(this,this.S-s)};function sn(s){s.j.G==0||s.J||So(s.j,s)}function de(s){gi(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,Bs(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function mi(s,a){try{var u=s.j;if(u.G!=0&&(u.g==s||yi(u.h,s))){if(!s.K&&yi(u.h,s)&&u.G==3){try{var h=u.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var I=h;if(I[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<s.F)er(u),Zn(u);else break t;Ii(u),yt(18)}}else u.za=I[1],0<u.za-u.T&&37500>I[2]&&u.F&&u.v==0&&!u.C&&(u.C=nn(S(u.Za,u),6e3));if(1>=no(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else pe(u,11)}else if((s.K||u.g==s)&&er(u),!z(a))for(I=u.Da.g.parse(a),a=0;a<I.length;a++){let $=I[a];if(u.T=$[0],$=$[1],u.G==2)if($[0]=="c"){u.K=$[1],u.ia=$[2];const ht=$[3];ht!=null&&(u.la=ht,u.j.info("VER="+u.la));const vt=$[4];vt!=null&&(u.Aa=vt,u.j.info("SVER="+u.Aa));const De=$[5];De!=null&&typeof De=="number"&&0<De&&(h=1.5*De,u.L=h,u.j.info("backChannelRequestTimeoutMs_="+h)),h=u;const Et=s.g;if(Et){const rr=Et.g?Et.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(rr){var _=h.h;_.g||rr.indexOf("spdy")==-1&&rr.indexOf("quic")==-1&&rr.indexOf("h2")==-1||(_.j=_.l,_.g=new Set,_.h&&(vi(_,_.h),_.h=null))}if(h.D){const Ti=Et.g?Et.g.getResponseHeader("X-HTTP-Session-Id"):null;Ti&&(h.ya=Ti,q(h.I,h.D,Ti))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-s.F,u.j.info("Handshake RTT: "+u.R+"ms")),h=u;var k=s;if(h.qa=No(h,h.J?h.ia:null,h.W),k.K){ro(h.h,k);var G=k,it=h.L;it&&(G.I=it),G.B&&(gi(G),Gn(G)),h.g=k}else _o(h);0<u.i.length&&tr(u)}else $[0]!="stop"&&$[0]!="close"||pe(u,7);else u.G==3&&($[0]=="stop"||$[0]=="close"?$[0]=="stop"?pe(u,7):bi(u):$[0]!="noop"&&u.l&&u.l.ta($),u.v=0)}}en(4)}catch{}}var yl=class{constructor(s,a){this.g=s,this.map=a}};function to(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function eo(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function no(s){return s.h?1:s.g?s.g.size:0}function yi(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function vi(s,a){s.g?s.g.add(a):s.h=a}function ro(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}to.prototype.cancel=function(){if(this.i=io(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function io(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const u of s.g.values())a=a.concat(u.D);return a}return x(s.i)}function vl(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(d(s)){for(var a=[],u=s.length,h=0;h<u;h++)a.push(s[h]);return a}a=[],u=0;for(h in s)a[u++]=s[h];return a}function wl(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(d(s)||typeof s=="string"){var a=[];s=s.length;for(var u=0;u<s;u++)a.push(u);return a}a=[],u=0;for(const h in s)a[u++]=h;return a}}}function so(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(d(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var u=wl(s),h=vl(s),I=h.length,_=0;_<I;_++)a.call(void 0,h[_],u&&u[_],s)}var oo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bl(s,a){if(s){s=s.split("&");for(var u=0;u<s.length;u++){var h=s[u].indexOf("="),I=null;if(0<=h){var _=s[u].substring(0,h);I=s[u].substring(h+1)}else _=s[u];a(_,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function fe(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof fe){this.h=s.h,Kn(this,s.j),this.o=s.o,this.g=s.g,Wn(this,s.s),this.l=s.l;var a=s.i,u=new cn;u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),ao(this,u),this.m=s.m}else s&&(a=String(s).match(oo))?(this.h=!1,Kn(this,a[1]||"",!0),this.o=on(a[2]||""),this.g=on(a[3]||"",!0),Wn(this,a[4]),this.l=on(a[5]||"",!0),ao(this,a[6]||"",!0),this.m=on(a[7]||"")):(this.h=!1,this.i=new cn(null,this.h))}fe.prototype.toString=function(){var s=[],a=this.j;a&&s.push(an(a,co,!0),":");var u=this.g;return(u||a=="file")&&(s.push("//"),(a=this.o)&&s.push(an(a,co,!0),"@"),s.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&s.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&s.push("/"),s.push(an(u,u.charAt(0)=="/"?Tl:El,!0))),(u=this.i.toString())&&s.push("?",u),(u=this.m)&&s.push("#",an(u,Cl)),s.join("")};function Mt(s){return new fe(s)}function Kn(s,a,u){s.j=u?on(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function Wn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function ao(s,a,u){a instanceof cn?(s.i=a,Sl(s.i,s.h)):(u||(a=an(a,_l)),s.i=new cn(a,s.h))}function q(s,a,u){s.i.set(a,u)}function Qn(s){return q(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function on(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function an(s,a,u){return typeof s=="string"?(s=encodeURI(s).replace(a,Il),u&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Il(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var co=/[#\/\?@]/g,El=/[#\?:]/g,Tl=/[#\?]/g,_l=/[#\?@]/g,Cl=/#/g;function cn(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Wt(s){s.g||(s.g=new Map,s.h=0,s.i&&bl(s.i,function(a,u){s.add(decodeURIComponent(a.replace(/\+/g," ")),u)}))}n=cn.prototype,n.add=function(s,a){Wt(this),this.i=null,s=Ne(this,s);var u=this.g.get(s);return u||this.g.set(s,u=[]),u.push(a),this.h+=1,this};function uo(s,a){Wt(s),a=Ne(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function lo(s,a){return Wt(s),a=Ne(s,a),s.g.has(a)}n.forEach=function(s,a){Wt(this),this.g.forEach(function(u,h){u.forEach(function(I){s.call(a,I,h,this)},this)},this)},n.na=function(){Wt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),u=[];for(let h=0;h<a.length;h++){const I=s[h];for(let _=0;_<I.length;_++)u.push(a[h])}return u},n.V=function(s){Wt(this);let a=[];if(typeof s=="string")lo(this,s)&&(a=a.concat(this.g.get(Ne(this,s))));else{s=Array.from(this.g.values());for(let u=0;u<s.length;u++)a=a.concat(s[u])}return a},n.set=function(s,a){return Wt(this),this.i=null,s=Ne(this,s),lo(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function ho(s,a,u){uo(s,a),0<u.length&&(s.i=null,s.g.set(Ne(s,a),x(u)),s.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var u=0;u<a.length;u++){var h=a[u];const _=encodeURIComponent(String(h)),k=this.V(h);for(h=0;h<k.length;h++){var I=_;k[h]!==""&&(I+="="+encodeURIComponent(String(k[h]))),s.push(I)}}return this.i=s.join("&")};function Ne(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function Sl(s,a){a&&!s.j&&(Wt(s),s.i=null,s.g.forEach(function(u,h){var I=h.toLowerCase();h!=I&&(uo(this,h),ho(this,I,u))},s)),s.j=a}function Al(s,a){const u=new rn;if(l.Image){const h=new Image;h.onload=D(Qt,u,"TestLoadImage: loaded",!0,a,h),h.onerror=D(Qt,u,"TestLoadImage: error",!1,a,h),h.onabort=D(Qt,u,"TestLoadImage: abort",!1,a,h),h.ontimeout=D(Qt,u,"TestLoadImage: timeout",!1,a,h),l.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=s}else a(!1)}function kl(s,a){const u=new rn,h=new AbortController,I=setTimeout(()=>{h.abort(),Qt(u,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:h.signal}).then(_=>{clearTimeout(I),_.ok?Qt(u,"TestPingServer: ok",!0,a):Qt(u,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(I),Qt(u,"TestPingServer: error",!1,a)})}function Qt(s,a,u,h,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),h(u)}catch{}}function Nl(){this.g=new hl}function Rl(s,a,u){const h=u||"";try{so(s,function(I,_){let k=I;p(I)&&(k=ci(I)),a.push(h+_+"="+encodeURIComponent(k))})}catch(I){throw a.push(h+"type="+encodeURIComponent("_badmap")),I}}function Xn(s){this.l=s.Ub||null,this.j=s.eb||!1}N(Xn,ui),Xn.prototype.g=function(){return new Jn(this.l,this.j)},Xn.prototype.i=function(s){return function(){return s}}({});function Jn(s,a){lt.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Jn,lt),n=Jn.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,ln(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||l).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,un(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,ln(this)),this.g&&(this.readyState=3,ln(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;fo(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function fo(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?un(this):ln(this),this.readyState==3&&fo(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,un(this))},n.Qa=function(s){this.g&&(this.response=s,un(this))},n.ga=function(){this.g&&un(this)};function un(s){s.readyState=4,s.l=null,s.j=null,s.v=null,ln(s)}n.setRequestHeader=function(s,a){this.u.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var u=a.next();!u.done;)u=u.value,s.push(u[0]+": "+u[1]),u=a.next();return s.join(`\r
`)};function ln(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Jn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function po(s){let a="";return tt(s,function(u,h){a+=h,a+=":",a+=u,a+=`\r
`}),a}function wi(s,a,u){t:{for(h in u){var h=!1;break t}h=!0}h||(u=po(u),typeof s=="string"?u!=null&&encodeURIComponent(String(u)):q(s,a,u))}function Q(s){lt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Q,lt);var Dl=/^https?$/i,Ol=["POST","PUT"];n=Q.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,a,u,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():di.g(),this.v=this.o?$s(this.o):$s(di),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(_){go(this,_);return}if(s=u||"",u=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var I in h)u.set(I,h[I]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const _ of h.keys())u.set(_,h.get(_));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(u.keys()).find(_=>_.toLowerCase()=="content-type"),I=l.FormData&&s instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Ol,a,void 0))||h||I||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[_,k]of u)this.g.setRequestHeader(_,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{vo(this),this.u=!0,this.g.send(s),this.u=!1}catch(_){go(this,_)}};function go(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,mo(s),Yn(s)}function mo(s){s.A||(s.A=!0,mt(s,"complete"),mt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,mt(this,"complete"),mt(this,"abort"),Yn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Yn(this,!0)),Q.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?yo(this):this.bb())},n.bb=function(){yo(this)};function yo(s){if(s.h&&typeof c<"u"&&(!s.v[1]||Ut(s)!=4||s.Z()!=2)){if(s.u&&Ut(s)==4)Vs(s.Ea,0,s);else if(mt(s,"readystatechange"),Ut(s)==4){s.h=!1;try{const k=s.Z();t:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var u;if(!(u=a)){var h;if(h=k===0){var I=String(s.D).match(oo)[1]||null;!I&&l.self&&l.self.location&&(I=l.self.location.protocol.slice(0,-1)),h=!Dl.test(I?I.toLowerCase():"")}u=h}if(u)mt(s,"complete"),mt(s,"success");else{s.m=6;try{var _=2<Ut(s)?s.g.statusText:""}catch{_=""}s.l=_+" ["+s.Z()+"]",mo(s)}}finally{Yn(s)}}}}function Yn(s,a){if(s.g){vo(s);const u=s.g,h=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||mt(s,"ready");try{u.onreadystatechange=h}catch{}}}function vo(s){s.I&&(l.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Ut(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Ut(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),ll(a)}};function wo(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Pl(s){const a={};s=(s.g&&2<=Ut(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<s.length;h++){if(z(s[h]))continue;var u=w(s[h]);const I=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const _=a[I]||[];a[I]=_,_.push(u)}b(a,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function hn(s,a,u){return u&&u.internalChannelParams&&u.internalChannelParams[s]||a}function bo(s){this.Aa=0,this.i=[],this.j=new rn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=hn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=hn("baseRetryDelayMs",5e3,s),this.cb=hn("retryDelaySeedMs",1e4,s),this.Wa=hn("forwardChannelMaxRetries",2,s),this.wa=hn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new to(s&&s.concurrentRequestLimit),this.Da=new Nl,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=bo.prototype,n.la=8,n.G=1,n.connect=function(s,a,u,h){yt(0),this.W=s,this.H=a||{},u&&h!==void 0&&(this.H.OSID=u,this.H.OAID=h),this.F=this.X,this.I=No(this,null,this.W),tr(this)};function bi(s){if(Io(s),s.G==3){var a=s.U++,u=Mt(s.I);if(q(u,"SID",s.K),q(u,"RID",a),q(u,"TYPE","terminate"),dn(s,u),a=new Kt(s,s.j,a),a.L=2,a.v=Qn(Mt(u)),u=!1,l.navigator&&l.navigator.sendBeacon)try{u=l.navigator.sendBeacon(a.v.toString(),"")}catch{}!u&&l.Image&&(new Image().src=a.v,u=!0),u||(a.g=Ro(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Gn(a)}ko(s)}function Zn(s){s.g&&(Ei(s),s.g.cancel(),s.g=null)}function Io(s){Zn(s),s.u&&(l.clearTimeout(s.u),s.u=null),er(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&l.clearTimeout(s.s),s.s=null)}function tr(s){if(!eo(s.h)&&!s.s){s.s=!0;var a=s.Ga;Xe||Ps(),Je||(Xe(),Je=!0),ti.add(a,s),s.B=0}}function Ll(s,a){return no(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=nn(S(s.Ga,s,a),Ao(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const I=new Kt(this,this.j,s);let _=this.o;if(this.S&&(_?(_=f(_),v(_,this.S)):_=this.S),this.m!==null||this.O||(I.H=_,_=null),this.P)t:{for(var a=0,u=0;u<this.i.length;u++){e:{var h=this.i[u];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=u;break t}if(a===4096||u===this.i.length-1){a=u+1;break t}}a=1e3}else a=1e3;a=To(this,I,a),u=Mt(this.I),q(u,"RID",s),q(u,"CVER",22),this.D&&q(u,"X-HTTP-Session-Id",this.D),dn(this,u),_&&(this.O?a="headers="+encodeURIComponent(String(po(_)))+"&"+a:this.m&&wi(u,this.m,_)),vi(this.h,I),this.Ua&&q(u,"TYPE","init"),this.P?(q(u,"$req",a),q(u,"SID","null"),I.T=!0,pi(I,u,null)):pi(I,u,a),this.G=2}}else this.G==3&&(s?Eo(this,s):this.i.length==0||eo(this.h)||Eo(this))};function Eo(s,a){var u;a?u=a.l:u=s.U++;const h=Mt(s.I);q(h,"SID",s.K),q(h,"RID",u),q(h,"AID",s.T),dn(s,h),s.m&&s.o&&wi(h,s.m,s.o),u=new Kt(s,s.j,u,s.B+1),s.m===null&&(u.H=s.o),a&&(s.i=a.D.concat(s.i)),a=To(s,u,1e3),u.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),vi(s.h,u),pi(u,h,a)}function dn(s,a){s.H&&tt(s.H,function(u,h){q(a,h,u)}),s.l&&so({},function(u,h){q(a,h,u)})}function To(s,a,u){u=Math.min(s.i.length,u);var h=s.l?S(s.l.Na,s.l,s):null;t:{var I=s.i;let _=-1;for(;;){const k=["count="+u];_==-1?0<u?(_=I[0].g,k.push("ofs="+_)):_=0:k.push("ofs="+_);let G=!0;for(let it=0;it<u;it++){let $=I[it].g;const ht=I[it].map;if($-=_,0>$)_=Math.max(0,I[it].g-100),G=!1;else try{Rl(ht,k,"req"+$+"_")}catch{h&&h(ht)}}if(G){h=k.join("&");break t}}}return s=s.i.splice(0,u),a.D=s,h}function _o(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;Xe||Ps(),Je||(Xe(),Je=!0),ti.add(a,s),s.v=0}}function Ii(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=nn(S(s.Fa,s),Ao(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Co(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=nn(S(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,yt(10),Zn(this),Co(this))};function Ei(s){s.A!=null&&(l.clearTimeout(s.A),s.A=null)}function Co(s){s.g=new Kt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Mt(s.qa);q(a,"RID","rpc"),q(a,"SID",s.K),q(a,"AID",s.T),q(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&q(a,"TO",s.ja),q(a,"TYPE","xmlhttp"),dn(s,a),s.m&&s.o&&wi(a,s.m,s.o),s.L&&(s.g.I=s.L);var u=s.g;s=s.ia,u.L=1,u.v=Qn(Mt(a)),u.m=null,u.P=!0,Js(u,s)}n.Za=function(){this.C!=null&&(this.C=null,Zn(this),Ii(this),yt(19))};function er(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function So(s,a){var u=null;if(s.g==a){er(s),Ei(s),s.g=null;var h=2}else if(yi(s.h,a))u=a.D,ro(s.h,a),h=1;else return;if(s.G!=0){if(a.o)if(h==1){u=a.m?a.m.length:0,a=Date.now()-a.F;var I=s.B;h=zn(),mt(h,new Ks(h,u)),tr(s)}else _o(s);else if(I=a.s,I==3||I==0&&0<a.X||!(h==1&&Ll(s,a)||h==2&&Ii(s)))switch(u&&0<u.length&&(a=s.h,a.i=a.i.concat(u)),I){case 1:pe(s,5);break;case 4:pe(s,10);break;case 3:pe(s,6);break;default:pe(s,2)}}}function Ao(s,a){let u=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(u*=2),u*a}function pe(s,a){if(s.j.info("Error code "+a),a==2){var u=S(s.fb,s),h=s.Xa;const I=!h;h=new fe(h||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Kn(h,"https"),Qn(h),I?Al(h.toString(),u):kl(h.toString(),u)}else yt(2);s.G=0,s.l&&s.l.sa(a),ko(s),Io(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function ko(s){if(s.G=0,s.ka=[],s.l){const a=io(s.h);(a.length!=0||s.i.length!=0)&&(O(s.ka,a),O(s.ka,s.i),s.h.i.length=0,x(s.i),s.i.length=0),s.l.ra()}}function No(s,a,u){var h=u instanceof fe?Mt(u):new fe(u);if(h.g!="")a&&(h.g=a+"."+h.g),Wn(h,h.s);else{var I=l.location;h=I.protocol,a=a?a+"."+I.hostname:I.hostname,I=+I.port;var _=new fe(null);h&&Kn(_,h),a&&(_.g=a),I&&Wn(_,I),u&&(_.l=u),h=_}return u=s.D,a=s.ya,u&&a&&q(h,u,a),q(h,"VER",s.la),dn(s,h),h}function Ro(s,a,u){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new Q(new Xn({eb:u})):new Q(s.pa),a.Ha(s.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Do(){}n=Do.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function nr(){}nr.prototype.g=function(s,a){return new It(s,a)};function It(s,a){lt.call(this),this.g=new bo(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!z(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!z(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new Re(this)}N(It,lt),It.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){bi(this.g)},It.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var u={};u.__data__=s,s=u}else this.u&&(u={},u.__data__=ci(s),s=u);a.i.push(new yl(a.Ya++,s)),a.G==3&&tr(a)},It.prototype.N=function(){this.g.l=null,delete this.j,bi(this.g),delete this.g,It.aa.N.call(this)};function Oo(s){li.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const u in a){s=u;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}N(Oo,li);function Po(){hi.call(this),this.status=1}N(Po,hi);function Re(s){this.g=s}N(Re,Do),Re.prototype.ua=function(){mt(this.g,"a")},Re.prototype.ta=function(s){mt(this.g,new Oo(s))},Re.prototype.sa=function(s){mt(this.g,new Po)},Re.prototype.ra=function(){mt(this.g,"b")},nr.prototype.createWebChannel=nr.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,mc=function(){return new nr},gc=function(){return zn()},pc=he,Fi={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Hn.NO_ERROR=0,Hn.TIMEOUT=8,Hn.HTTP_ERROR=6,lr=Hn,Ws.COMPLETE="complete",fc=Ws,zs.EventType=tn,tn.OPEN="a",tn.CLOSE="b",tn.ERROR="c",tn.MESSAGE="d",lt.prototype.listen=lt.prototype.K,pn=zs,Q.prototype.listenOnce=Q.prototype.L,Q.prototype.getLastError=Q.prototype.Ka,Q.prototype.getLastErrorCode=Q.prototype.Ba,Q.prototype.getStatus=Q.prototype.Z,Q.prototype.getResponseJson=Q.prototype.Oa,Q.prototype.getResponseText=Q.prototype.oa,Q.prototype.send=Q.prototype.ea,Q.prototype.setWithCredentials=Q.prototype.Ha,dc=Q}).apply(typeof ir<"u"?ir:typeof self<"u"?self:typeof window<"u"?window:{});const Go="@firebase/firestore",Ko="4.7.16";/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ft{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let Ge="11.8.1";/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Ie=new es("@firebase/firestore");function Oe(){return Ie.logLevel}function R(n,...t){if(Ie.logLevel<=V.DEBUG){const e=t.map(ss);Ie.debug(`Firestore (${Ge}): ${n}`,...e)}}function Ee(n,...t){if(Ie.logLevel<=V.ERROR){const e=t.map(ss);Ie.error(`Firestore (${Ge}): ${n}`,...e)}}function Br(n,...t){if(Ie.logLevel<=V.WARN){const e=t.map(ss);Ie.warn(`Firestore (${Ge}): ${n}`,...e)}}function ss(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function U(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,yc(n,r,e)}function yc(n,t,e){let r=`FIRESTORE (${Ge}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Ee(r),new Error(r)}function J(n,t,e,r){let i="Unexpected state";typeof e=="string"?i=e:r=e,n||yc(t,i,r)}function H(n,t){return n}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends qt{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ye{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class vc{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class bd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ft.UNAUTHENTICATED))}shutdown(){}}class Id{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Ed{constructor(t){this.t=t,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){J(this.o===void 0,42304);let r=this.i;const i=d=>this.i!==r?(r=this.i,e(d)):Promise.resolve();let o=new ye;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ye,t.enqueueRetryable(()=>i(this.currentUser))};const c=()=>{const d=o;t.enqueueRetryable(async()=>{await d.promise,await i(this.currentUser)})},l=d=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(d=>l(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?l(d):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ye)}},0),c()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string",31837,{l:r}),new vc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return J(t===null||typeof t=="string",2055,{h:t}),new ft(t)}}class Td{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class _d{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Td(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Cd{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,_t(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){J(this.o===void 0,3512);const r=o=>{o.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const c=o.token!==this.m;return this.m=o.token,R("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Wo(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(J(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Wo(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Sd(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ad(){return new TextEncoder}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class wc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Sd(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%62))}return r}}function j(n,t){return n<t?-1:n>t?1:0}function ji(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),i=t.codePointAt(e);if(r!==i){if(r<128&&i<128)return j(r,i);{const o=Ad(),c=kd(o.encode(Qo(n,e)),o.encode(Qo(t,e)));return c!==0?c:j(r,i)}}e+=r>65535?2:1}return j(n.length,t.length)}function Qo(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function kd(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return j(n[e],t[e]);return j(n.length,t.length)}function je(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Xo=-62135596800,Jo=1e6;class rt{static now(){return rt.fromMillis(Date.now())}static fromDate(t){return rt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Jo);return new rt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new P(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new P(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Xo)throw new P(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new P(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Jo}_compareTo(t){return this.seconds===t.seconds?j(this.nanoseconds,t.nanoseconds):j(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Xo;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class K{static fromTimestamp(t){return new K(t)}static min(){return new K(new rt(0,0))}static max(){return new K(new rt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Yo="__name__";class Rt{constructor(t,e,r){e===void 0?e=0:e>t.length&&U(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&U(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Rt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Rt?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=Rt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return j(t.length,e.length)}static compareSegments(t,e){const r=Rt.isNumericId(t),i=Rt.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?Rt.extractNumericId(t).compare(Rt.extractNumericId(e)):ji(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return is.fromString(t.substring(4,t.length-2))}}class X extends Rt{construct(t,e,r){return new X(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new P(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new X(e)}static emptyPath(){return new X([])}}const Nd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends Rt{construct(t,e,r){return new at(t,e,r)}static isValidIdentifier(t){return Nd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Yo}static keyField(){return new at([Yo])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new P(A.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let c=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new P(A.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[i+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new P(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=d,i+=2}else l==="`"?(c=!c,i++):l!=="."||c?(r+=l,i++):(o(),i++)}if(o(),c)throw new P(A.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new at(e)}static emptyPath(){return new at([])}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class M{constructor(t){this.path=t}static fromPath(t){return new M(X.fromString(t))}static fromName(t){return new M(X.fromString(t).popFirst(5))}static empty(){return new M(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new X(t.slice()))}}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const En=-1;function Rd(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=K.fromTimestamp(r===1e9?new rt(e+1,0):new rt(e,r));return new oe(i,M.empty(),t)}function Dd(n){return new oe(n.readTime,n.key,En)}class oe{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new oe(K.min(),M.empty(),En)}static max(){return new oe(K.max(),M.empty(),En)}}function Od(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:j(n.largestBatchId,t.largestBatchId))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Pd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ld{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function os(n){if(n.code!==A.FAILED_PRECONDITION||n.message!==Pd)throw n;R("LocalStore","Unexpectedly lost primary lease")}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&U(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):C.reject(e)}static resolve(t){return new C((e,r)=>{e(t)})}static reject(t){return new C((e,r)=>{r(t)})}static waitFor(t){return new C((e,r)=>{let i=0,o=0,c=!1;t.forEach(l=>{++i,l.next(()=>{++o,c&&o===i&&e()},d=>r(d))}),c=!0,o===i&&e()})}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next(i=>i?C.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new C((r,i)=>{const o=t.length,c=new Array(o);let l=0;for(let d=0;d<o;d++){const p=d;e(t[p]).next(y=>{c[p]=y,++l,l===o&&r(c)},y=>i(y))}})}static doWhile(t,e){return new C((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function xd(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Dn(n){return n.name==="IndexedDbTransactionError"}/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class as{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>e.writeSequenceNumber(r))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}as.le=-1;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const cs=-1;function us(n){return n==null}function br(n){return n===0&&1/n==-1/0}function Md(n){return typeof n=="number"&&Number.isInteger(n)&&!br(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const bc="";function Ud(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Zo(t)),t=Vd(n.get(e),t);return Zo(t)}function Vd(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case bc:e+="";break;default:e+=o}}return e}function Zo(n){return n+bc+""}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ta(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ke(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Ic(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class bt{constructor(t,e){this.comparator=t,this.root=e||st.EMPTY}insert(t,e){return new bt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,st.BLACK,null,null))}remove(t){return new bt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,st.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new sr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new sr(this.root,t,this.comparator,!1)}getReverseIterator(){return new sr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new sr(this.root,t,this.comparator,!0)}}class sr{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class st{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??st.RED,this.left=i??st.EMPTY,this.right=o??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new st(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return st.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw U(43730,{key:this.key,value:this.value});if(this.right.isRed())throw U(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw U(27949);return t+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw U(57766)}get value(){throw U(16141)}get color(){throw U(16727)}get left(){throw U(29726)}get right(){throw U(36894)}copy(n,t,e,r,i){return this}insert(n,t,e){return new st(n,t)}remove(n,t){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ct{constructor(t){this.comparator=t,this.data=new bt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ea(this.data.getIterator())}getIteratorFrom(t){return new ea(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof ct)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ct(this.comparator);return e.data=t,e}}class ea{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class St{constructor(t){this.fields=t,t.sort(at.comparator)}static empty(){return new St([])}unionWith(t){let e=new ct(at.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new St(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return je(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Fd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Pt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Fd("Invalid base64 string: "+i):i}}(t);return new Pt(e)}static fromUint8Array(t){const e=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(t);return new Pt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let r=0;r<t.length;r++)e[r]=t.charCodeAt(r);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const jd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Te(n){if(J(!!n,39018),typeof n=="string"){let t=0;const e=jd.exec(n);if(J(!!e,46558,{timestamp:n}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ot(n.seconds),nanos:ot(n.nanos)}}function ot(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Be(n){return typeof n=="string"?Pt.fromBase64String(n):Pt.fromUint8Array(n)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Ec="server_timestamp",Tc="__type__",_c="__previous_value__",Cc="__local_write_time__";function ls(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{})[Tc])===null||e===void 0?void 0:e.stringValue)===Ec}function hs(n){const t=n.mapValue.fields[_c];return ls(t)?hs(t):t}function Ir(n){const t=Te(n.mapValue.fields[Cc].timestampValue);return new rt(t.seconds,t.nanos)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Bd{constructor(t,e,r,i,o,c,l,d,p,y){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=c,this.autoDetectLongPolling=l,this.longPollingOptions=d,this.useFetchStreams=p,this.isUsingEmulator=y}}const Er="(default)";class Tr{constructor(t,e){this.projectId=t,this.database=e||Er}static empty(){return new Tr("","")}get isDefaultDatabase(){return this.database===Er}isEqual(t){return t instanceof Tr&&t.projectId===this.projectId&&t.database===this.database}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Sc="__type__",$d="__max__",or={mapValue:{}},Ac="__vector__",Bi="value";function _e(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ls(n)?4:Hd(n)?9007199254740991:zd(n)?10:11:U(28295,{value:n})}function Lt(n,t){if(n===t)return!0;const e=_e(n);if(e!==_e(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Ir(n).isEqual(Ir(t));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Te(r.timestampValue),c=Te(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(r,i){return Be(r.bytesValue).isEqual(Be(i.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(r,i){return ot(r.geoPointValue.latitude)===ot(i.geoPointValue.latitude)&&ot(r.geoPointValue.longitude)===ot(i.geoPointValue.longitude)}(n,t);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ot(r.integerValue)===ot(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=ot(r.doubleValue),c=ot(i.doubleValue);return o===c?br(o)===br(c):isNaN(o)&&isNaN(c)}return!1}(n,t);case 9:return je(n.arrayValue.values||[],t.arrayValue.values||[],Lt);case 10:case 11:return function(r,i){const o=r.mapValue.fields||{},c=i.mapValue.fields||{};if(ta(o)!==ta(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Lt(o[l],c[l])))return!1;return!0}(n,t);default:return U(52216,{left:n})}}function Tn(n,t){return(n.values||[]).find(e=>Lt(e,t))!==void 0}function $e(n,t){if(n===t)return 0;const e=_e(n),r=_e(t);if(e!==r)return j(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,t.booleanValue);case 2:return function(i,o){const c=ot(i.integerValue||i.doubleValue),l=ot(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,t);case 3:return na(n.timestampValue,t.timestampValue);case 4:return na(Ir(n),Ir(t));case 5:return ji(n.stringValue,t.stringValue);case 6:return function(i,o){const c=Be(i),l=Be(o);return c.compareTo(l)}(n.bytesValue,t.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let d=0;d<c.length&&d<l.length;d++){const p=j(c[d],l[d]);if(p!==0)return p}return j(c.length,l.length)}(n.referenceValue,t.referenceValue);case 8:return function(i,o){const c=j(ot(i.latitude),ot(o.latitude));return c!==0?c:j(ot(i.longitude),ot(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return ra(n.arrayValue,t.arrayValue);case 10:return function(i,o){var c,l,d,p;const y=i.fields||{},E=o.fields||{},S=(c=y[Bi])===null||c===void 0?void 0:c.arrayValue,D=(l=E[Bi])===null||l===void 0?void 0:l.arrayValue,N=j(((d=S?.values)===null||d===void 0?void 0:d.length)||0,((p=D?.values)===null||p===void 0?void 0:p.length)||0);return N!==0?N:ra(S,D)}(n.mapValue,t.mapValue);case 11:return function(i,o){if(i===or.mapValue&&o===or.mapValue)return 0;if(i===or.mapValue)return 1;if(o===or.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),d=o.fields||{},p=Object.keys(d);l.sort(),p.sort();for(let y=0;y<l.length&&y<p.length;++y){const E=ji(l[y],p[y]);if(E!==0)return E;const S=$e(c[l[y]],d[p[y]]);if(S!==0)return S}return j(l.length,p.length)}(n.mapValue,t.mapValue);default:throw U(23264,{Pe:e})}}function na(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return j(n,t);const e=Te(n),r=Te(t),i=j(e.seconds,r.seconds);return i!==0?i:j(e.nanos,r.nanos)}function ra(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=$e(e[i],r[i]);if(o)return o}return j(e.length,r.length)}function ze(n){return $i(n)}function $i(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const e=Te(t);return`time(${e.seconds},${e.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Be(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return M.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let e="[",r=!0;for(const i of t.values||[])r?r=!1:e+=",",e+=$i(i);return e+"]"}(n.arrayValue):"mapValue"in n?function(t){const e=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const o of e)i?i=!1:r+=",",r+=`${o}:${$i(t.fields[o])}`;return r+"}"}(n.mapValue):U(61005,{value:n})}function hr(n){switch(_e(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=hs(n);return t?16+hr(t):16;case 5:return 2*n.stringValue.length;case 6:return Be(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(e){return(e.values||[]).reduce((r,i)=>r+hr(i),0)}(n.arrayValue);case 10:case 11:return function(e){let r=0;return Ke(e.fields,(i,o)=>{r+=i.length+hr(o)}),r}(n.mapValue);default:throw U(13486,{value:n})}}function zi(n){return!!n&&"integerValue"in n}function ds(n){return!!n&&"arrayValue"in n}function dr(n){return!!n&&"mapValue"in n}function zd(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{})[Sc])===null||e===void 0?void 0:e.stringValue)===Ac}function mn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Ke(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=mn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=mn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Hd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===$d}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ct{constructor(t){this.value=t}static empty(){return new Ct({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!dr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=mn(e)}setAll(t){let e=at.emptyPath(),r={},i=[];t.forEach((c,l)=>{if(!e.isImmediateParentOf(l)){const d=this.getFieldsMap(e);this.applyChanges(d,r,i),r={},i=[],e=l.popLast()}c?r[l.lastSegment()]=mn(c):i.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());dr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Lt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];dr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){Ke(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new Ct(mn(this.value))}}function kc(n){const t=[];return Ke(n.fields,(e,r)=>{const i=new at([e]);if(dr(r)){const o=kc(r.mapValue).fields;if(o.length===0)t.push(i);else for(const c of o)t.push(i.child(c))}else t.push(i)}),new St(t)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Tt{constructor(t,e,r,i,o,c,l){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=c,this.documentState=l}static newInvalidDocument(t){return new Tt(t,0,K.min(),K.min(),K.min(),Ct.empty(),0)}static newFoundDocument(t,e,r,i){return new Tt(t,1,e,K.min(),r,i,0)}static newNoDocument(t,e){return new Tt(t,2,e,K.min(),K.min(),Ct.empty(),0)}static newUnknownDocument(t,e){return new Tt(t,3,e,K.min(),K.min(),Ct.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Tt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class _r{constructor(t,e){this.position=t,this.inclusive=e}}function ia(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],c=n.position[i];if(o.field.isKeyField()?r=M.comparator(M.fromName(c.referenceValue),e.key):r=$e(c,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function sa(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Lt(n.position[e],t.position[e]))return!1;return!0}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Cr{constructor(t,e="asc"){this.field=t,this.dir=e}}function qd(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Nc{}class nt extends Nc{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Kd(t,e,r):e==="array-contains"?new Xd(t,r):e==="in"?new Jd(t,r):e==="not-in"?new Yd(t,r):e==="array-contains-any"?new Zd(t,r):new nt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Wd(t,r):new Qd(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison($e(e,this.value)):e!==null&&_e(this.value)===_e(e)&&this.matchesComparison($e(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return U(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ae extends Nc{constructor(t,e){super(),this.filters=t,this.op=e,this.Te=null}static create(t,e){return new ae(t,e)}matches(t){return Rc(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Rc(n){return n.op==="and"}function Dc(n){return Gd(n)&&Rc(n)}function Gd(n){for(const t of n.filters)if(t instanceof ae)return!1;return!0}function Hi(n){if(n instanceof nt)return n.field.canonicalString()+n.op.toString()+ze(n.value);if(Dc(n))return n.filters.map(t=>Hi(t)).join(",");{const t=n.filters.map(e=>Hi(e)).join(",");return`${n.op}(${t})`}}function Oc(n,t){return n instanceof nt?function(e,r){return r instanceof nt&&e.op===r.op&&e.field.isEqual(r.field)&&Lt(e.value,r.value)}(n,t):n instanceof ae?function(e,r){return r instanceof ae&&e.op===r.op&&e.filters.length===r.filters.length?e.filters.reduce((i,o,c)=>i&&Oc(o,r.filters[c]),!0):!1}(n,t):void U(19439)}function Pc(n){return n instanceof nt?function(t){return`${t.field.canonicalString()} ${t.op} ${ze(t.value)}`}(n):n instanceof ae?function(t){return t.op.toString()+" {"+t.getFilters().map(Pc).join(" ,")+"}"}(n):"Filter"}class Kd extends nt{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class Wd extends nt{constructor(t,e){super(t,"in",e),this.keys=Lc("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Qd extends nt{constructor(t,e){super(t,"not-in",e),this.keys=Lc("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Lc(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>M.fromName(r.referenceValue))}class Xd extends nt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ds(e)&&Tn(e.arrayValue,this.value)}}class Jd extends nt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Tn(this.value.arrayValue,e)}}class Yd extends nt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Tn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Tn(this.value.arrayValue,e)}}class Zd extends nt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ds(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Tn(this.value.arrayValue,r))}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class tf{constructor(t,e=null,r=[],i=[],o=null,c=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=c,this.endAt=l,this.Ie=null}}function oa(n,t=null,e=[],r=[],i=null,o=null,c=null){return new tf(n,t,e,r,i,o,c)}function fs(n){const t=H(n);if(t.Ie===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Hi(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),us(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>ze(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>ze(r)).join(",")),t.Ie=e}return t.Ie}function ps(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!qd(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Oc(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!sa(n.startAt,t.startAt)&&sa(n.endAt,t.endAt)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class $r{constructor(t,e=null,r=[],i=[],o=null,c="F",l=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=c,this.startAt=l,this.endAt=d,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function ef(n,t,e,r,i,o,c,l){return new $r(n,t,e,r,i,o,c,l)}function nf(n){return new $r(n)}function aa(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function rf(n){return n.collectionGroup!==null}function yn(n){const t=H(n);if(t.Ee===null){t.Ee=[];const e=new Set;for(const i of t.explicitOrderBy)t.Ee.push(i),e.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(i){let o=new ct(at.comparator);return i.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(o=o.add(l.field))})}),o})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.Ee.push(new Cr(i,r))}),e.has(at.keyField().canonicalString())||t.Ee.push(new Cr(at.keyField(),r))}return t.Ee}function ve(n){const t=H(n);return t.de||(t.de=sf(t,yn(n))),t.de}function sf(n,t){if(n.limitType==="F")return oa(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Cr(i.field,o)});const e=n.endAt?new _r(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new _r(n.startAt.position,n.startAt.inclusive):null;return oa(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function qi(n,t,e){return new $r(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function xc(n,t){return ps(ve(n),ve(t))&&n.limitType===t.limitType}function Mc(n){return`${fs(ve(n))}|lt:${n.limitType}`}function fn(n){return`Query(target=${function(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(r=>Pc(r)).join(", ")}]`),us(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>ze(r)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>ze(r)).join(",")),`Target(${e})`}(ve(n))}; limitType=${n.limitType})`}function gs(n,t){return t.isFoundDocument()&&function(e,r){const i=r.key.path;return e.collectionGroup!==null?r.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(i):M.isDocumentKey(e.path)?e.path.isEqual(i):e.path.isImmediateParentOf(i)}(n,t)&&function(e,r){for(const i of yn(e))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,t)&&function(e,r){for(const i of e.filters)if(!i.matches(r))return!1;return!0}(n,t)&&function(e,r){return!(e.startAt&&!function(i,o,c){const l=ia(i,o,c);return i.inclusive?l<=0:l<0}(e.startAt,yn(e),r)||e.endAt&&!function(i,o,c){const l=ia(i,o,c);return i.inclusive?l>=0:l>0}(e.endAt,yn(e),r))}(n,t)}function of(n){return(t,e)=>{let r=!1;for(const i of yn(n)){const o=af(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function af(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):function(i,o,c){const l=o.data.field(i),d=c.data.field(i);return l!==null&&d!==null?$e(l,d):U(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return U(19790,{direction:n.dir})}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Se{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Ke(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return Ic(this.inner)}size(){return this.innerSize}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const cf=new bt(M.comparator);function Sr(){return cf}const Uc=new bt(M.comparator);function ar(...n){let t=Uc;for(const e of n)t=t.insert(e.key,e);return t}function Vc(n){let t=Uc;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function me(){return vn()}function Fc(){return vn()}function vn(){return new Se(n=>n.toString(),(n,t)=>n.isEqual(t))}const uf=new bt(M.comparator),lf=new ct(M.comparator);function pt(...n){let t=lf;for(const e of n)t=t.add(e);return t}const hf=new ct(j);function df(){return hf}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ms(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:br(t)?"-0":t}}function jc(n){return{integerValue:""+n}}function ff(n,t){return Md(t)?jc(t):ms(n,t)}/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class zr{constructor(){this._=void 0}}function pf(n,t,e){return n instanceof Ar?function(r,i){const o={fields:{[Tc]:{stringValue:Ec},[Cc]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&ls(i)&&(i=hs(i)),i&&(o.fields[_c]=i),{mapValue:o}}(e,t):n instanceof _n?$c(n,t):n instanceof Cn?zc(n,t):function(r,i){const o=Bc(r,i),c=ca(o)+ca(r.Re);return zi(o)&&zi(r.Re)?jc(c):ms(r.serializer,c)}(n,t)}function gf(n,t,e){return n instanceof _n?$c(n,t):n instanceof Cn?zc(n,t):e}function Bc(n,t){return n instanceof kr?function(e){return zi(e)||function(r){return!!r&&"doubleValue"in r}(e)}(t)?t:{integerValue:0}:null}class Ar extends zr{}class _n extends zr{constructor(t){super(),this.elements=t}}function $c(n,t){const e=Hc(t);for(const r of n.elements)e.some(i=>Lt(i,r))||e.push(r);return{arrayValue:{values:e}}}class Cn extends zr{constructor(t){super(),this.elements=t}}function zc(n,t){let e=Hc(t);for(const r of n.elements)e=e.filter(i=>!Lt(i,r));return{arrayValue:{values:e}}}class kr extends zr{constructor(t,e){super(),this.serializer=t,this.Re=e}}function ca(n){return ot(n.integerValue||n.doubleValue)}function Hc(n){return ds(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function mf(n,t){return n.field.isEqual(t.field)&&function(e,r){return e instanceof _n&&r instanceof _n||e instanceof Cn&&r instanceof Cn?je(e.elements,r.elements,Lt):e instanceof kr&&r instanceof kr?Lt(e.Re,r.Re):e instanceof Ar&&r instanceof Ar}(n.transform,t.transform)}class yf{constructor(t,e){this.version=t,this.transformResults=e}}class jt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new jt}static exists(t){return new jt(void 0,t)}static updateTime(t){return new jt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function fr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Hr{}function qc(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Kc(n.key,jt.none()):new On(n.key,n.data,jt.none());{const e=n.data,r=Ct.empty();let i=new ct(at.comparator);for(let o of t.fields)if(!i.has(o)){let c=e.field(o);c===null&&o.length>1&&(o=o.popLast(),c=e.field(o)),c===null?r.delete(o):r.set(o,c),i=i.add(o)}return new Ae(n.key,r,new St(i.toArray()),jt.none())}}function vf(n,t,e){n instanceof On?function(r,i,o){const c=r.value.clone(),l=la(r.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,t,e):n instanceof Ae?function(r,i,o){if(!fr(r.precondition,i))return void i.convertToUnknownDocument(o.version);const c=la(r.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Gc(r)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,t,e):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function wn(n,t,e,r){return n instanceof On?function(i,o,c,l){if(!fr(i.precondition,o))return c;const d=i.value.clone(),p=ha(i.fieldTransforms,l,o);return d.setAll(p),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof Ae?function(i,o,c,l){if(!fr(i.precondition,o))return c;const d=ha(i.fieldTransforms,l,o),p=o.data;return p.setAll(Gc(i)),p.setAll(d),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(y=>y.field))}(n,t,e,r):function(i,o,c){return fr(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,t,e)}function wf(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=Bc(r.transform,i||null);o!=null&&(e===null&&(e=Ct.empty()),e.set(r.field,o))}return e||null}function ua(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(e,r){return e===void 0&&r===void 0||!(!e||!r)&&je(e,r,(i,o)=>mf(i,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class On extends Hr{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ae extends Hr{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Gc(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function la(n,t,e){const r=new Map;J(n.length===e.length,32656,{Ve:e.length,me:n.length});for(let i=0;i<e.length;i++){const o=n[i],c=o.transform,l=t.data.field(o.field);r.set(o.field,gf(c,l,e[i]))}return r}function ha(n,t,e){const r=new Map;for(const i of n){const o=i.transform,c=e.data.field(i.field);r.set(i.field,pf(o,c,t))}return r}class Kc extends Hr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bf extends Hr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class If{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&vf(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=wn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=wn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Fc();return this.mutations.forEach(i=>{const o=t.get(i.key),c=o.overlayedDocument;let l=this.applyToLocalView(c,o.mutatedFields);l=e.has(i.key)?null:l;const d=qc(c,l);d!==null&&r.set(i.key,d),c.isValidDocument()||c.convertToNoDocument(K.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),pt())}isEqual(t){return this.batchId===t.batchId&&je(this.mutations,t.mutations,(e,r)=>ua(e,r))&&je(this.baseMutations,t.baseMutations,(e,r)=>ua(e,r))}}class ys{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){J(t.mutations.length===r.length,58842,{fe:t.mutations.length,ge:r.length});let i=function(){return uf}();const o=t.mutations;for(let c=0;c<o.length;c++)i=i.insert(o[c].key,r[c].version);return new ys(t,e,r,i)}}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ef{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y,F;function Tf(n){switch(n){case A.OK:return U(64938);case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0;default:return U(15467,{code:n})}}function _f(n){if(n===void 0)return Ee("GRPC error has no .code"),A.UNKNOWN;switch(n){case Y.OK:return A.OK;case Y.CANCELLED:return A.CANCELLED;case Y.UNKNOWN:return A.UNKNOWN;case Y.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case Y.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case Y.INTERNAL:return A.INTERNAL;case Y.UNAVAILABLE:return A.UNAVAILABLE;case Y.UNAUTHENTICATED:return A.UNAUTHENTICATED;case Y.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case Y.NOT_FOUND:return A.NOT_FOUND;case Y.ALREADY_EXISTS:return A.ALREADY_EXISTS;case Y.PERMISSION_DENIED:return A.PERMISSION_DENIED;case Y.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case Y.ABORTED:return A.ABORTED;case Y.OUT_OF_RANGE:return A.OUT_OF_RANGE;case Y.UNIMPLEMENTED:return A.UNIMPLEMENTED;case Y.DATA_LOSS:return A.DATA_LOSS;default:return U(39323,{code:n})}}(F=Y||(Y={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/new is([4294967295,4294967295],0);class Cf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Gi(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Sf(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Af(n,t){return Gi(n,t.toTimestamp())}function xe(n){return J(!!n,49232),K.fromTimestamp(function(t){const e=Te(t);return new rt(e.seconds,e.nanos)}(n))}function Wc(n,t){return Ki(n,t).canonicalString()}function Ki(n,t){const e=function(r){return new X(["projects",r.projectId,"databases",r.database])}(n).child("documents");return t===void 0?e:e.child(t)}function kf(n){const t=X.fromString(n);return J(Mf(t),10190,{key:t.toString()}),t}function Wi(n,t){return Wc(n.databaseId,t.path)}function Nf(n){const t=kf(n);return t.length===4?X.emptyPath():Df(t)}function Rf(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Df(n){return J(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function da(n,t,e){return{name:Wi(n,t),fields:e.value.mapValue.fields}}function Of(n,t){let e;if(t instanceof On)e={update:da(n,t.key,t.value)};else if(t instanceof Kc)e={delete:Wi(n,t.key)};else if(t instanceof Ae)e={update:da(n,t.key,t.data),updateMask:xf(t.fieldMask)};else{if(!(t instanceof bf))return U(16599,{ft:t.type});e={verify:Wi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Ar)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof _n)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Cn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof kr)return{fieldPath:o.field.canonicalString(),increment:c.Re};throw U(20930,{transform:o.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:Af(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:U(27497)}(n,t.precondition)),e}function Pf(n,t){return n&&n.length>0?(J(t!==void 0,14353),n.map(e=>function(r,i){let o=r.updateTime?xe(r.updateTime):xe(i);return o.isEqual(K.min())&&(o=xe(i)),new yf(o,r.transformResults||[])}(e,t))):[]}function Lf(n){let t=Nf(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){J(r===1,65062);const y=e.from[0];y.allDescendants?i=y.collectionId:t=t.child(y.collectionId)}let o=[];e.where&&(o=function(y){const E=Qc(y);return E instanceof ae&&Dc(E)?E.getFilters():[E]}(e.where));let c=[];e.orderBy&&(c=function(y){return y.map(E=>function(S){return new Cr(Pe(S.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(E))}(e.orderBy));let l=null;e.limit&&(l=function(y){let E;return E=typeof y=="object"?y.value:y,us(E)?null:E}(e.limit));let d=null;e.startAt&&(d=function(y){const E=!!y.before,S=y.values||[];return new _r(S,E)}(e.startAt));let p=null;return e.endAt&&(p=function(y){const E=!y.before,S=y.values||[];return new _r(S,E)}(e.endAt)),ef(t,i,c,o,l,"F",d,p)}function Qc(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Pe(t.unaryFilter.field);return nt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const r=Pe(t.unaryFilter.field);return nt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Pe(t.unaryFilter.field);return nt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Pe(t.unaryFilter.field);return nt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return U(61313);default:return U(60726)}}(n):n.fieldFilter!==void 0?function(t){return nt.create(Pe(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return U(58110);default:return U(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ae.create(t.compositeFilter.filters.map(e=>Qc(e)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return U(1026)}}(t.compositeFilter.op))}(n):U(30097,{filter:n})}function Pe(n){return at.fromServerFormat(n.fieldPath)}function xf(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Mf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Uf{constructor(t){this.wt=t}}function Vf(n){const t=Lf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?qi(t,t.limit,"L"):t}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ff{constructor(){this.Cn=new jf}addToCollectionParentIndex(t,e){return this.Cn.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(oe.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(oe.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class jf{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new ct(X.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new ct(X.comparator)).toArray()}}/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const fa={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Xc=41943040;class wt{static withCacheSize(t){return new wt(t,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/wt.DEFAULT_COLLECTION_PERCENTILE=10,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wt.DEFAULT=new wt(Xc,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wt.DISABLED=new wt(-1,0,0);/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class He{constructor(t){this.ur=t}next(){return this.ur+=2,this.ur}static cr(){return new He(0)}static lr(){return new He(-1)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const pa="LruGarbageCollector",Bf=1048576;function ga([n,t],[e,r]){const i=j(n,e);return i===0?j(t,r):i}class $f{constructor(t){this.Er=t,this.buffer=new ct(ga),this.dr=0}Ar(){return++this.dr}Rr(t){const e=[t,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();ga(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class zf{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(t){R(pa,`Garbage collection scheduled in ${t}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Dn(e)?R(pa,"Ignoring IndexedDB error during garbage collection: ",e):await os(e)}await this.mr(3e5)})}}class Hf{constructor(t,e){this.gr=t,this.params=e}calculateTargetCount(t,e){return this.gr.pr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return C.resolve(as.le);const r=new $f(e);return this.gr.forEachTarget(t,i=>r.Rr(i.sequenceNumber)).next(()=>this.gr.yr(t,i=>r.Rr(i))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.gr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.gr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(R("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(fa)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(R("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),fa):this.wr(t,e))}getCacheSize(t){return this.gr.getCacheSize(t)}wr(t,e){let r,i,o,c,l,d,p;const y=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(E=>(E>this.params.maximumSequenceNumbersToCollect?(R("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),i=this.params.maximumSequenceNumbersToCollect):i=E,c=Date.now(),this.nthSequenceNumber(t,i))).next(E=>(r=E,l=Date.now(),this.removeTargets(t,r,e))).next(E=>(o=E,d=Date.now(),this.removeOrphanedDocuments(t,r))).next(E=>(p=Date.now(),Oe()<=V.DEBUG&&R("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-y}ms
	Determined least recently used ${i} in `+(l-c)+`ms
	Removed ${o} targets in `+(d-l)+`ms
	Removed ${E} documents in `+(p-d)+`ms
Total Duration: ${p-y}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:E})))}}function qf(n,t){return new Hf(n,t)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Gf{constructor(){this.changes=new Se(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Tt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*//**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Kf{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Wf{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&wn(r.mutation,i,St.empty(),rt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,pt()).next(()=>r))}getLocalViewOfDocuments(t,e,r=pt()){const i=me();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let c=ar();return o.forEach((l,d)=>{c=c.insert(l,d.overlayedDocument)}),c}))}getOverlayedDocuments(t,e){const r=me();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,pt()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((c,l)=>{e.set(c,l)})})}computeViews(t,e,r,i){let o=Sr();const c=vn(),l=function(){return vn()}();return e.forEach((d,p)=>{const y=r.get(p.key);i.has(p.key)&&(y===void 0||y.mutation instanceof Ae)?o=o.insert(p.key,p):y!==void 0?(c.set(p.key,y.mutation.getFieldMask()),wn(y.mutation,p,y.mutation.getFieldMask(),rt.now())):c.set(p.key,St.empty())}),this.recalculateAndSaveOverlays(t,o).next(d=>(d.forEach((p,y)=>c.set(p,y)),e.forEach((p,y)=>{var E;return l.set(p,new Kf(y,(E=c.get(p))!==null&&E!==void 0?E:null))}),l))}recalculateAndSaveOverlays(t,e){const r=vn();let i=new bt((c,l)=>c-l),o=pt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(c=>{for(const l of c)l.keys().forEach(d=>{const p=e.get(d);if(p===null)return;let y=r.get(d)||St.empty();y=l.applyToLocalView(p,y),r.set(d,y);const E=(i.get(l.batchId)||pt()).add(d);i=i.insert(l.batchId,E)})}).next(()=>{const c=[],l=i.getReverseIterator();for(;l.hasNext();){const d=l.getNext(),p=d.key,y=d.value,E=Fc();y.forEach(S=>{if(!o.has(S)){const D=qc(e.get(S),r.get(S));D!==null&&E.set(S,D),o=o.add(S)}}),c.push(this.documentOverlayCache.saveOverlays(t,p,E))}return C.waitFor(c)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(o){return M.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):rf(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const c=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):C.resolve(me());let l=En,d=o;return c.next(p=>C.forEach(p,(y,E)=>(l<E.largestBatchId&&(l=E.largestBatchId),o.get(y)?C.resolve():this.remoteDocumentCache.getEntry(t,y).next(S=>{d=d.insert(y,S)}))).next(()=>this.populateOverlays(t,p,o)).next(()=>this.computeViews(t,d,p,pt())).next(y=>({batchId:l,changes:Vc(y)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(r=>{let i=ar();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let c=ar();return this.indexManager.getCollectionParents(t,o).next(l=>C.forEach(l,d=>{const p=function(y,E){return new $r(E,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,p,r,i).next(y=>{y.forEach((E,S)=>{c=c.insert(E,S)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(c=>(o=c,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(c=>{o.forEach((d,p)=>{const y=p.getKey();c.get(y)===null&&(c=c.insert(y,Tt.newInvalidDocument(y)))});let l=ar();return c.forEach((d,p)=>{const y=o.get(d);y!==void 0&&wn(y.mutation,p,St.empty(),rt.now()),gs(e,p)&&(l=l.insert(d,p))}),l})}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Qf{constructor(t){this.serializer=t,this.kr=new Map,this.qr=new Map}getBundleMetadata(t,e){return C.resolve(this.kr.get(e))}saveBundleMetadata(t,e){return this.kr.set(e.id,function(r){return{id:r.id,version:r.version,createTime:xe(r.createTime)}}(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.qr.get(e))}saveNamedQuery(t,e){return this.qr.set(e.name,function(r){return{name:r.name,query:Vf(r.bundledQuery),readTime:xe(r.readTime)}}(e)),C.resolve()}}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Xf{constructor(){this.overlays=new bt(M.comparator),this.Qr=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=me();return C.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.bt(t,e,o)}),C.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Qr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Qr.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const i=me(),o=e.length+1,c=new M(e.child("")),l=this.overlays.getIteratorFrom(c);for(;l.hasNext();){const d=l.getNext().value,p=d.getKey();if(!e.isPrefixOf(p.path))break;p.path.length===o&&d.largestBatchId>r&&i.set(d.getKey(),d)}return C.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new bt((p,y)=>p-y);const c=this.overlays.getIterator();for(;c.hasNext();){const p=c.getNext().value;if(p.getKey().getCollectionGroup()===e&&p.largestBatchId>r){let y=o.get(p.largestBatchId);y===null&&(y=me(),o=o.insert(p.largestBatchId,y)),y.set(p.getKey(),p)}}const l=me(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((p,y)=>l.set(p,y)),!(l.size()>=i)););return C.resolve(l)}bt(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const c=this.Qr.get(i.largestBatchId).delete(r.key);this.Qr.set(i.largestBatchId,c)}this.overlays=this.overlays.insert(r.key,new Ef(e,r));let o=this.Qr.get(e);o===void 0&&(o=pt(),this.Qr.set(e,o)),this.Qr.set(e,o.add(r.key))}}/**
* @license
* Copyright 2024 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Jf{constructor(){this.sessionToken=Pt.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class vs{constructor(){this.$r=new ct(et.Ur),this.Kr=new ct(et.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(t,e){const r=new et(t,e);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.zr(new et(t,e))}jr(t,e){t.forEach(r=>this.removeReference(r,e))}Hr(t){const e=new M(new X([])),r=new et(e,t),i=new et(e,t+1),o=[];return this.Kr.forEachInRange([r,i],c=>{this.zr(c),o.push(c.key)}),o}Jr(){this.$r.forEach(t=>this.zr(t))}zr(t){this.$r=this.$r.delete(t),this.Kr=this.Kr.delete(t)}Yr(t){const e=new M(new X([])),r=new et(e,t),i=new et(e,t+1);let o=pt();return this.Kr.forEachInRange([r,i],c=>{o=o.add(c.key)}),o}containsKey(t){const e=new et(t,0),r=this.$r.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class et{constructor(t,e){this.key=t,this.Zr=e}static Ur(t,e){return M.comparator(t.key,e.key)||j(t.Zr,e.Zr)}static Wr(t,e){return j(t.Zr,e.Zr)||M.comparator(t.key,e.key)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Yf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.nr=1,this.Xr=new ct(et.Ur)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new If(o,e,r,i);this.mutationQueue.push(c);for(const l of i)this.Xr=this.Xr.add(new et(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return C.resolve(c)}lookupMutationBatch(t,e){return C.resolve(this.ei(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.ti(r),o=i<0?0:i;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?cs:this.nr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new et(e,0),i=new et(e,Number.POSITIVE_INFINITY),o=[];return this.Xr.forEachInRange([r,i],c=>{const l=this.ei(c.Zr);o.push(l)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ct(j);return e.forEach(i=>{const o=new et(i,0),c=new et(i,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([o,c],l=>{r=r.add(l.Zr)})}),C.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const c=new et(new M(o),0);let l=new ct(j);return this.Xr.forEachWhile(d=>{const p=d.key.path;return!!r.isPrefixOf(p)&&(p.length===i&&(l=l.add(d.Zr)),!0)},c),C.resolve(this.ni(l))}ni(t){const e=[];return t.forEach(r=>{const i=this.ei(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){J(this.ri(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return C.forEach(e.mutations,i=>{const o=new et(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Xr=r})}sr(t){}containsKey(t,e){const r=new et(e,0),i=this.Xr.firstAfterOrEqual(r);return C.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}ri(t,e){return this.ti(t)}ti(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ei(t){const e=this.ti(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Zf{constructor(t){this.ii=t,this.docs=function(){return new bt(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,c=this.ii(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:c}),this.size+=c-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():Tt.newInvalidDocument(e))}getEntries(t,e){let r=Sr();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Tt.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=Sr();const c=e.path,l=new M(c.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(l);for(;d.hasNext();){const{key:p,value:{document:y}}=d.getNext();if(!c.isPrefixOf(p.path))break;p.path.length>c.length+1||Od(Dd(y),r)<=0||(i.has(y.key)||gs(e,y))&&(o=o.insert(y.key,y.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,i){U(9500)}si(t,e){return C.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new tp(this)}getSize(t){return C.resolve(this.size)}}class tp extends Gf{constructor(t){super(),this.Br=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.Br.addEntry(t,i)):this.Br.removeEntry(r)}),C.waitFor(e)}getFromCache(t,e){return this.Br.getEntry(t,e)}getAllFromCache(t,e){return this.Br.getEntries(t,e)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ep{constructor(t){this.persistence=t,this.oi=new Se(e=>fs(e),ps),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this._i=0,this.ai=new vs,this.targetCount=0,this.ui=He.cr()}forEachTarget(t,e){return this.oi.forEach((r,i)=>e(i)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this._i)}allocateTargetId(t){return this.highestTargetId=this.ui.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this._i&&(this._i=e),C.resolve()}Tr(t){this.oi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ui=new He(e),this.highestTargetId=e),t.sequenceNumber>this._i&&(this._i=t.sequenceNumber)}addTargetData(t,e){return this.Tr(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.Tr(e),C.resolve()}removeTargetData(t,e){return this.oi.delete(e.target),this.ai.Hr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.oi.forEach((c,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.oi.delete(c),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),i++)}),C.waitFor(o).next(()=>i)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.oi.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this.ai.Gr(e,r),C.resolve()}removeMatchingKeys(t,e,r){this.ai.jr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(c=>{o.push(i.markPotentiallyOrphaned(t,c))}),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.ai.Hr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this.ai.Yr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this.ai.containsKey(e))}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Jc{constructor(t,e){this.ci={},this.overlays={},this.li=new as(0),this.hi=!1,this.hi=!0,this.Pi=new Jf,this.referenceDelegate=t(this),this.Ti=new ep(this),this.indexManager=new Ff,this.remoteDocumentCache=function(r){return new Zf(r)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new Uf(e),this.Ei=new Qf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Xf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ci[t.toKey()];return r||(r=new Yf(e,this.referenceDelegate),this.ci[t.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(t,e,r){R("MemoryPersistence","Starting transaction:",t);const i=new np(this.li.next());return this.referenceDelegate.di(),r(i).next(o=>this.referenceDelegate.Ai(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ri(t,e){return C.or(Object.values(this.ci).map(r=>()=>r.containsKey(t,e)))}}class np extends Ld{constructor(t){super(),this.currentSequenceNumber=t}}class ws{constructor(t){this.persistence=t,this.Vi=new vs,this.mi=null}static fi(t){return new ws(t)}get gi(){if(this.mi)return this.mi;throw U(60996)}addReference(t,e,r){return this.Vi.addReference(r,e),this.gi.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.Vi.removeReference(r,e),this.gi.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.gi.add(e.toString()),C.resolve()}removeTarget(t,e){this.Vi.Hr(e.targetId).forEach(i=>this.gi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.gi.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}di(){this.mi=new Set}Ai(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.gi,r=>{const i=M.fromPath(r);return this.pi(t,i).next(o=>{o||e.removeEntry(i,K.min())})}).next(()=>(this.mi=null,e.apply(t)))}updateLimboDocument(t,e){return this.pi(t,e).next(r=>{r?this.gi.delete(e.toString()):this.gi.add(e.toString())})}Ii(t){return 0}pi(t,e){return C.or([()=>C.resolve(this.Vi.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ri(t,e)])}}class Nr{constructor(t,e){this.persistence=t,this.yi=new Se(r=>Ud(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=qf(this,e)}static fi(t,e){return new Nr(t,e)}di(){}Ai(t){return C.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}pr(t){const e=this.Sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(i=>r+i))}Sr(t){let e=0;return this.yr(t,r=>{e++}).next(()=>e)}yr(t,e){return C.forEach(this.yi,(r,i)=>this.Dr(t,r,i).next(o=>o?C.resolve():e(i)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.si(t,c=>this.Dr(t,c,e).next(l=>{l||(r++,o.removeEntry(c,K.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.yi.set(e,t.currentSequenceNumber),C.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.yi.set(r,t.currentSequenceNumber),C.resolve()}removeReference(t,e,r){return this.yi.set(r,t.currentSequenceNumber),C.resolve()}updateLimboDocument(t,e){return this.yi.set(e,t.currentSequenceNumber),C.resolve()}Ii(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=hr(t.data.value)),e}Dr(t,e,r){return C.or([()=>this.persistence.Ri(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.yi.get(e);return C.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class bs{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.ds=r,this.As=i}static Rs(t,e){let r=pt(),i=pt();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new bs(t,e.fromCache,r,i)}}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class rp{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ip{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return th()?8:xd(gt())>0?6:4}()}initialize(t,e){this.ys=t,this.indexManager=e,this.Vs=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.ws(t,e).next(c=>{o.result=c}).next(()=>{if(!o.result)return this.Ss(t,e,i,r).next(c=>{o.result=c})}).next(()=>{if(o.result)return;const c=new rp;return this.bs(t,e,c).next(l=>{if(o.result=l,this.fs)return this.Ds(t,e,c,l.size)})}).next(()=>o.result)}Ds(t,e,r,i){return r.documentReadCount<this.gs?(Oe()<=V.DEBUG&&R("QueryEngine","SDK will not create cache indexes for query:",fn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),C.resolve()):(Oe()<=V.DEBUG&&R("QueryEngine","Query:",fn(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ps*i?(Oe()<=V.DEBUG&&R("QueryEngine","The SDK decides to create cache indexes for query:",fn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ve(e))):C.resolve())}ws(t,e){if(aa(e))return C.resolve(null);let r=ve(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=qi(e,null,"F"),r=ve(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const c=pt(...o);return this.ys.getDocuments(t,c).next(l=>this.indexManager.getMinOffset(t,r).next(d=>{const p=this.vs(e,l);return this.Cs(e,p,c,d.readTime)?this.ws(t,qi(e,null,"F")):this.Fs(t,p,e,d)}))})))}Ss(t,e,r,i){return aa(e)||i.isEqual(K.min())?C.resolve(null):this.ys.getDocuments(t,r).next(o=>{const c=this.vs(e,o);return this.Cs(e,c,r,i)?C.resolve(null):(Oe()<=V.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),fn(e)),this.Fs(t,c,e,Rd(i,En)).next(l=>l))})}vs(t,e){let r=new ct(of(t));return e.forEach((i,o)=>{gs(t,o)&&(r=r.add(o))}),r}Cs(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}bs(t,e,r){return Oe()<=V.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",fn(e)),this.ys.getDocumentsMatchingQuery(t,e,oe.min(),r)}Fs(t,e,r,i){return this.ys.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(c=>{o=o.insert(c.key,c)}),o))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const sp="LocalStore";class op{constructor(t,e,r,i){this.persistence=t,this.Ms=e,this.serializer=i,this.xs=new bt(j),this.Os=new Se(o=>fs(o),ps),this.Ns=new Map,this.Bs=t.getRemoteDocumentCache(),this.Ti=t.getTargetCache(),this.Ei=t.getBundleCache(),this.Ls(r)}Ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Wf(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.xs))}}function ap(n,t,e,r){return new op(n,t,e,r)}async function Yc(n,t){const e=H(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e.Ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const c=[],l=[];let d=pt();for(const p of i){c.push(p.batchId);for(const y of p.mutations)d=d.add(y.key)}for(const p of o){l.push(p.batchId);for(const y of p.mutations)d=d.add(y.key)}return e.localDocuments.getDocuments(r,d).next(p=>({ks:p,removedBatchIds:c,addedBatchIds:l}))})})}function cp(n,t){const e=H(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),o=e.Bs.newChangeBuffer({trackRemovals:!0});return function(c,l,d,p){const y=d.batch,E=y.keys();let S=C.resolve();return E.forEach(D=>{S=S.next(()=>p.getEntry(l,D)).next(N=>{const x=d.docVersions.get(D);J(x!==null,48541),N.version.compareTo(x)<0&&(y.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),p.addEntry(N)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(l,y))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=pt();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(l=l.add(c.batch.mutations[d].key));return l}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function up(n){const t=H(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ti.getLastRemoteSnapshotVersion(e))}function lp(n,t){const e=H(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=cs),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}class ma{constructor(){this.activeTargetIds=df()}js(t){this.activeTargetIds=this.activeTargetIds.add(t)}Hs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}zs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class hp{constructor(){this.xo=new ma,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.xo.js(t),this.Oo[t]||"not-current"}updateQueryState(t,e,r){this.Oo[t]=e}removeLocalQueryTarget(t){this.xo.Hs(t)}isLocalQueryTarget(t){return this.xo.activeTargetIds.has(t)}clearQueryState(t){delete this.Oo[t]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(t){return this.xo.activeTargetIds.has(t)}start(){return this.xo=new ma,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class dp{No(t){}shutdown(){}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const ya="ConnectivityMonitor";class va{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(t){this.Qo.push(t)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){R(ya,"Network connectivity changed: AVAILABLE");for(const t of this.Qo)t(0)}qo(){R(ya,"Network connectivity changed: UNAVAILABLE");for(const t of this.Qo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let cr=null;function Qi(){return cr===null?cr=function(){return 268435456+Math.round(2147483648*Math.random())}():cr++,"0x"+cr.toString(16)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Ni="RestConnection",fp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class pp{get Uo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=e+"://"+t.host,this.Wo=`projects/${r}/databases/${i}`,this.Go=this.databaseId.database===Er?`project_id=${r}`:`project_id=${r}&database_id=${i}`}zo(t,e,r,i,o){const c=Qi(),l=this.jo(t,e.toUriEncodedString());R(Ni,`Sending RPC '${t}' ${c}:`,l,r);const d={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(d,i,o);const{host:p}=new URL(l),y=kn(p);return this.Jo(t,l,d,r,y).then(E=>(R(Ni,`Received RPC '${t}' ${c}: `,E),E),E=>{throw Br(Ni,`RPC '${t}' ${c} failed with error: `,E,"url: ",l,"request:",r),E})}Yo(t,e,r,i,o,c){return this.zo(t,e,r,i,o)}Ho(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ge}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),r&&r.headers.forEach((i,o)=>t[o]=i)}jo(t,e){const r=fp[t];return`${this.Ko}/v1/${e}:${r}`}terminate(){}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class gp{constructor(t){this.Zo=t.Zo,this.Xo=t.Xo}e_(t){this.t_=t}n_(t){this.r_=t}i_(t){this.s_=t}onMessage(t){this.o_=t}close(){this.Xo()}send(t){this.Zo(t)}__(){this.t_()}a_(){this.r_()}u_(t){this.s_(t)}c_(t){this.o_(t)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const dt="WebChannelConnection";class mp extends pp{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,i,o){const c=Qi();return new Promise((l,d)=>{const p=new dc;p.setWithCredentials(!0),p.listenOnce(fc.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case lr.NO_ERROR:const E=p.getResponseJson();R(dt,`XHR for RPC '${t}' ${c} received:`,JSON.stringify(E)),l(E);break;case lr.TIMEOUT:R(dt,`RPC '${t}' ${c} timed out`),d(new P(A.DEADLINE_EXCEEDED,"Request time out"));break;case lr.HTTP_ERROR:const S=p.getStatus();if(R(dt,`RPC '${t}' ${c} failed with status:`,S,"response text:",p.getResponseText()),S>0){let D=p.getResponseJson();Array.isArray(D)&&(D=D[0]);const N=D?.error;if(N&&N.status&&N.message){const x=function(O){const B=O.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(B)>=0?B:A.UNKNOWN}(N.status);d(new P(x,N.message))}else d(new P(A.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new P(A.UNAVAILABLE,"Connection failed."));break;default:U(9055,{l_:t,streamId:c,h_:p.getLastErrorCode(),P_:p.getLastError()})}}finally{R(dt,`RPC '${t}' ${c} completed.`)}});const y=JSON.stringify(i);R(dt,`RPC '${t}' ${c} sending request:`,i),p.send(e,"POST",y,r,15)})}T_(t,e,r){const i=Qi(),o=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],c=mc(),l=gc(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(d.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(d.useFetchStreams=!0),this.Ho(d.initMessageHeaders,e,r),d.encodeInitMessageHeaders=!0;const y=o.join("");R(dt,`Creating RPC '${t}' stream ${i}: ${y}`,d);const E=c.createWebChannel(y,d);let S=!1,D=!1;const N=new gp({Zo:O=>{D?R(dt,`Not sending because RPC '${t}' stream ${i} is closed:`,O):(S||(R(dt,`Opening RPC '${t}' stream ${i} transport.`),E.open(),S=!0),R(dt,`RPC '${t}' stream ${i} sending:`,O),E.send(O))},Xo:()=>E.close()}),x=(O,B,z)=>{O.listen(B,W=>{try{z(W)}catch(Z){setTimeout(()=>{throw Z},0)}})};return x(E,pn.EventType.OPEN,()=>{D||(R(dt,`RPC '${t}' stream ${i} transport opened.`),N.__())}),x(E,pn.EventType.CLOSE,()=>{D||(D=!0,R(dt,`RPC '${t}' stream ${i} transport closed`),N.u_())}),x(E,pn.EventType.ERROR,O=>{D||(D=!0,Br(dt,`RPC '${t}' stream ${i} transport errored. Name:`,O.name,"Message:",O.message),N.u_(new P(A.UNAVAILABLE,"The operation could not be completed")))}),x(E,pn.EventType.MESSAGE,O=>{var B;if(!D){const z=O.data[0];J(!!z,16349);const W=z,Z=W?.error||((B=W[0])===null||B===void 0?void 0:B.error);if(Z){R(dt,`RPC '${t}' stream ${i} received error:`,Z);const Nt=Z.status;let tt=function(f){const g=Y[f];if(g!==void 0)return _f(g)}(Nt),b=Z.message;tt===void 0&&(tt=A.INTERNAL,b="Unknown error status: "+Nt+" with message "+Z.message),D=!0,N.u_(new P(tt,b)),E.close()}else R(dt,`RPC '${t}' stream ${i} received:`,z),N.c_(z)}}),x(l,pc.STAT_EVENT,O=>{O.stat===Fi.PROXY?R(dt,`RPC '${t}' stream ${i} detected buffering proxy`):O.stat===Fi.NOPROXY&&R(dt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.a_()},0),N}}function Ri(){return typeof document<"u"?document:null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function qr(n){return new Cf(n,!0)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Zc{constructor(t,e,r=1e3,i=1.5,o=6e4){this.xi=t,this.timerId=e,this.I_=r,this.E_=i,this.d_=o,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(t){this.cancel();const e=Math.floor(this.A_+this.g_()),r=Math.max(0,Date.now()-this.V_),i=Math.max(0,e-r);i>0&&R("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.A_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,i,()=>(this.V_=Date.now(),t())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const wa="PersistentStream";class yp{constructor(t,e,r,i,o,c,l,d){this.xi=t,this.y_=r,this.w_=i,this.connection=o,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=l,this.listener=d,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new Zc(t,e)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(t){this.k_(),this.stream.send(t)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(t,e){this.k_(),this.q_(),this.C_.cancel(),this.S_++,t!==4?this.C_.reset():e&&e.code===A.RESOURCE_EXHAUSTED?(Ee(e.toString()),Ee("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):e&&e.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.i_(e)}Q_(){}auth(){this.state=1;const t=this.U_(this.S_),e=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.S_===e&&this.K_(r,i)},r=>{t(()=>{const i=new P(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.W_(i)})})}K_(t,e){const r=this.U_(this.S_);this.stream=this.G_(t,e),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(i=>{r(()=>this.W_(i))}),this.stream.onMessage(i=>{r(()=>++this.v_==1?this.z_(i):this.onNext(i))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(t){return R(wa,`close with error: ${t}`),this.stream=null,this.close(4,t)}U_(t){return e=>{this.xi.enqueueAndForget(()=>this.S_===t?e():(R(wa,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vp extends yp{constructor(t,e,r,i,o,c){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,c),this.serializer=o}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(t,e){return this.connection.T_("Write",t,e)}z_(t){return J(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,J(!t.writeResults||t.writeResults.length===0,55816),this.listener.X_()}onNext(t){J(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.C_.reset();const e=Pf(t.writeResults,t.commitTime),r=xe(t.commitTime);return this.listener.ea(r,e)}ta(){const t={};t.database=Rf(this.serializer),this.L_(t)}Z_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Of(this.serializer,r))};this.L_(e)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class wp{}class bp extends wp{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.na=!1}ra(){if(this.na)throw new P(A.FAILED_PRECONDITION,"The client has already been terminated.")}zo(t,e,r,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.zo(t,Ki(e,r),i,o,c)).catch(o=>{throw o.name==="FirebaseError"?(o.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new P(A.UNKNOWN,o.toString())})}Yo(t,e,r,i,o){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,l])=>this.connection.Yo(t,Ki(e,r),i,c,l,o)).catch(c=>{throw c.name==="FirebaseError"?(c.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new P(A.UNKNOWN,c.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class Ip{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(t){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.aa("Offline")))}set(t){this.la(),this.ia=0,t==="Online"&&(this.oa=!1),this.aa(t)}aa(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ua(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(Ee(e),this.oa=!1):R("OnlineStateTracker",e)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Pn="RemoteStore";class Ep{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=o,this.Ea.No(c=>{r.enqueueAndForget(async()=>{xn(this)&&(R(Pn,"Restarting streams for network reachability change."),await async function(l){const d=H(l);d.Ta.add(4),await Ln(d),d.da.set("Unknown"),d.Ta.delete(4),await Gr(d)}(this))})}),this.da=new Ip(r,i)}}async function Gr(n){if(xn(n))for(const t of n.Ia)await t(!0)}async function Ln(n){for(const t of n.Ia)await t(!1)}function xn(n){return H(n).Ta.size===0}async function tu(n,t,e){if(!Dn(t))throw t;n.Ta.add(1),await Ln(n),n.da.set("Offline"),e||(e=()=>up(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{R(Pn,"Retrying IndexedDB access"),await e(),n.Ta.delete(1),await Gr(n)})}function eu(n,t){return t().catch(e=>tu(n,e,t))}async function Kr(n){const t=H(n),e=ce(t);let r=t.ha.length>0?t.ha[t.ha.length-1].batchId:cs;for(;Tp(t);)try{const i=await lp(t.localStore,r);if(i===null){t.ha.length===0&&e.N_();break}r=i.batchId,_p(t,i)}catch(i){await tu(t,i)}nu(t)&&ru(t)}function Tp(n){return xn(n)&&n.ha.length<10}function _p(n,t){n.ha.push(t);const e=ce(n);e.M_()&&e.Y_&&e.Z_(t.mutations)}function nu(n){return xn(n)&&!ce(n).F_()&&n.ha.length>0}function ru(n){ce(n).start()}async function Cp(n){ce(n).ta()}async function Sp(n){const t=ce(n);for(const e of n.ha)t.Z_(e.mutations)}async function Ap(n,t,e){const r=n.ha.shift(),i=ys.from(r,t,e);await eu(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Kr(n)}async function kp(n,t){t&&ce(n).Y_&&await async function(e,r){if(function(i){return Tf(i)&&i!==A.ABORTED}(r.code)){const i=e.ha.shift();ce(e).O_(),await eu(e,()=>e.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Kr(e)}}(n,t),nu(n)&&ru(n)}async function ba(n,t){const e=H(n);e.asyncQueue.verifyOperationInProgress(),R(Pn,"RemoteStore received new credentials");const r=xn(e);e.Ta.add(3),await Ln(e),r&&e.da.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ta.delete(3),await Gr(e)}async function Np(n,t){const e=H(n);t?(e.Ta.delete(2),await Gr(e)):t||(e.Ta.add(2),await Ln(e),e.da.set("Unknown"))}function ce(n){return n.Va||(n.Va=function(t,e,r){const i=H(t);return i.ra(),new vp(e,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:Cp.bind(null,n),i_:kp.bind(null,n),X_:Sp.bind(null,n),ea:Ap.bind(null,n)}),n.Ia.push(async t=>{t?(n.Va.O_(),await Kr(n)):(await n.Va.stop(),n.ha.length>0&&(R(Pn,`Stopping write stream with ${n.ha.length} pending writes`),n.ha=[]))})),n.Va}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Is{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new ye,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const c=Date.now()+r,l=new Is(t,e,c,i,o);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(A.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function iu(n,t){if(Ee("AsyncQueue",`${t}: ${n}`),Dn(n))return new P(A.UNAVAILABLE,`${t}: ${n}`);throw n}class Rp{constructor(){this.queries=Ia(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(t,e){const r=H(t),i=r.queries;r.queries=Ia(),i.forEach((o,c)=>{for(const l of c.ya)l.onError(e)})})(this,new P(A.ABORTED,"Firestore shutting down"))}}function Ia(){return new Se(n=>Mc(n),xc)}function Dp(n){n.ba.forEach(t=>{t.next()})}var Ea,Ta;(Ta=Ea||(Ea={})).Ca="default",Ta.Cache="cache";const Op="SyncEngine";class Pp{constructor(t,e,r,i,o,c){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=c,this.au={},this.uu=new Se(l=>Mc(l),xc),this.cu=new Map,this.lu=new Set,this.hu=new bt(M.comparator),this.Pu=new Map,this.Tu=new vs,this.Iu={},this.Eu=new Map,this.du=He.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function Lp(n,t,e){const r=Vp(n);try{const i=await function(o,c){const l=H(o),d=rt.now(),p=c.reduce((S,D)=>S.add(D.key),pt());let y,E;return l.persistence.runTransaction("Locally write mutations","readwrite",S=>{let D=Sr(),N=pt();return l.Bs.getEntries(S,p).next(x=>{D=x,D.forEach((O,B)=>{B.isValidDocument()||(N=N.add(O))})}).next(()=>l.localDocuments.getOverlayedDocuments(S,D)).next(x=>{y=x;const O=[];for(const B of c){const z=wf(B,y.get(B.key).overlayedDocument);z!=null&&O.push(new Ae(B.key,z,kc(z.value.mapValue),jt.exists(!0)))}return l.mutationQueue.addMutationBatch(S,d,O,c)}).next(x=>{E=x;const O=x.applyToLocalDocumentSet(y,N);return l.documentOverlayCache.saveOverlays(S,x.batchId,O)})}).then(()=>({batchId:E.batchId,changes:Vc(y)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,c,l){let d=o.Iu[o.currentUser.toKey()];d||(d=new bt(j)),d=d.insert(c,l),o.Iu[o.currentUser.toKey()]=d}(r,i.batchId,e),await Wr(r,i.changes),await Kr(r.remoteStore)}catch(i){const o=iu(i,"Failed to persist write");e.reject(o)}}function _a(n,t,e){const r=H(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.uu.forEach((o,c)=>{const l=c.view.Da(t);l.snapshot&&i.push(l.snapshot)}),function(o,c){const l=H(o);l.onlineState=c;let d=!1;l.queries.forEach((p,y)=>{for(const E of y.ya)E.Da(c)&&(d=!0)}),d&&Dp(l)}(r.eventManager,t),i.length&&r.au.j_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function xp(n,t){const e=H(n),r=t.batch.batchId;try{const i=await cp(e.localStore,t);ou(e,r,null),su(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Wr(e,i)}catch(i){await os(i)}}async function Mp(n,t,e){const r=H(n);try{const i=await function(o,c){const l=H(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return l.mutationQueue.lookupMutationBatch(d,c).next(y=>(J(y!==null,37113),p=y.keys(),l.mutationQueue.removeMutationBatch(d,y))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,p,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>l.localDocuments.getDocuments(d,p))})}(r.localStore,t);ou(r,t,e),su(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Wr(r,i)}catch(i){await os(i)}}function su(n,t){(n.Eu.get(t)||[]).forEach(e=>{e.resolve()}),n.Eu.delete(t)}function ou(n,t,e){const r=H(n);let i=r.Iu[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.Iu[r.currentUser.toKey()]=i}}async function Wr(n,t,e){const r=H(n),i=[],o=[],c=[];r.uu.isEmpty()||(r.uu.forEach((l,d)=>{c.push(r.Ru(d,t,e).then(p=>{var y;if((p||e)&&r.isPrimaryClient){const E=p?!p.fromCache:(y=void 0)===null||y===void 0?void 0:y.current;r.sharedClientState.updateQueryState(d.targetId,E?"current":"not-current")}if(p){i.push(p);const E=bs.Rs(d.targetId,p);o.push(E)}}))}),await Promise.all(c),r.au.j_(i),await async function(l,d){const p=H(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>C.forEach(d,E=>C.forEach(E.ds,S=>p.persistence.referenceDelegate.addReference(y,E.targetId,S)).next(()=>C.forEach(E.As,S=>p.persistence.referenceDelegate.removeReference(y,E.targetId,S)))))}catch(y){if(!Dn(y))throw y;R(sp,"Failed to update sequence numbers: "+y)}for(const y of d){const E=y.targetId;if(!y.fromCache){const S=p.xs.get(E),D=S.snapshotVersion,N=S.withLastLimboFreeSnapshotVersion(D);p.xs=p.xs.insert(E,N)}}}(r.localStore,o))}async function Up(n,t){const e=H(n);if(!e.currentUser.isEqual(t)){R(Op,"User change. New user:",t.toKey());const r=await Yc(e.localStore,t);e.currentUser=t,function(i,o){i.Eu.forEach(c=>{c.forEach(l=>{l.reject(new P(A.CANCELLED,o))})}),i.Eu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Wr(e,r.ks)}}function Vp(n){const t=H(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=xp.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Mp.bind(null,t),t}class Rr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=qr(t.databaseInfo.databaseId),this.sharedClientState=this.pu(t),this.persistence=this.yu(t),await this.persistence.start(),this.localStore=this.wu(t),this.gcScheduler=this.Su(t,this.localStore),this.indexBackfillerScheduler=this.bu(t,this.localStore)}Su(t,e){return null}bu(t,e){return null}wu(t){return ap(this.persistence,new ip,t.initialUser,this.serializer)}yu(t){return new Jc(ws.fi,this.serializer)}pu(t){return new hp}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Rr.provider={build:()=>new Rr};class Fp extends Rr{constructor(t){super(),this.cacheSizeBytes=t}Su(t,e){J(this.persistence.referenceDelegate instanceof Nr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new zf(r,t.asyncQueue,e)}yu(t){const e=this.cacheSizeBytes!==void 0?wt.withCacheSize(this.cacheSizeBytes):wt.DEFAULT;return new Jc(r=>Nr.fi(r,e),this.serializer)}}class Xi{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>_a(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Up.bind(null,this.syncEngine),await Np(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Rp}()}createDatastore(t){const e=qr(t.databaseInfo.databaseId),r=function(i){return new mp(i)}(t.databaseInfo);return function(i,o,c,l){return new bp(i,o,c,l)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(e,r,i,o,c){return new Ep(e,r,i,o,c)}(this.localStore,this.datastore,t.asyncQueue,e=>_a(this.syncEngine,e,0),function(){return va.C()?new va:new dp}())}createSyncEngine(t,e){return function(r,i,o,c,l,d,p){const y=new Pp(r,i,o,c,l,d);return p&&(y.Au=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(r){const i=H(r);R(Pn,"RemoteStore shutting down."),i.Ta.add(5),await Ln(i),i.Ea.shutdown(),i.da.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Xi.provider={build:()=>new Xi};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const ue="FirestoreClient";class jp{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=ft.UNAUTHENTICATED,this.clientId=wc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async c=>{R(ue,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(r,c=>(R(ue,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ye;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=iu(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Di(n,t){n.asyncQueue.verifyOperationInProgress(),R(ue,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Yc(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Ca(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Bp(n);R(ue,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>ba(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>ba(t.remoteStore,i)),n._onlineComponents=t}async function Bp(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){R(ue,"Using user provided OfflineComponentProvider");try{await Di(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(r){return r.name==="FirebaseError"?r.code===A.FAILED_PRECONDITION||r.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(e))throw e;Br("Error using user provided cache. Falling back to memory cache: "+e),await Di(n,new Rr)}}else R(ue,"Using default OfflineComponentProvider"),await Di(n,new Fp(void 0));return n._offlineComponents}async function $p(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(R(ue,"Using user provided OnlineComponentProvider"),await Ca(n,n._uninitializedComponentsProvider._online)):(R(ue,"Using default OnlineComponentProvider"),await Ca(n,new Xi))),n._onlineComponents}function zp(n){return $p(n).then(t=>t.syncEngine)}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function au(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Sa=new Map;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function cu(n,t,e){if(!e)throw new P(A.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Hp(n,t,e,r){if(t===!0&&r===!0)throw new P(A.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Aa(n){if(!M.isDocumentKey(n))throw new P(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ka(n){if(M.isDocumentKey(n))throw new P(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Es(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":U(12329,{type:typeof n})}function uu(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new P(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Es(n);throw new P(A.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const lu="firestore.googleapis.com",Na=!0;class Ra{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new P(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=lu,this.ssl=Na}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Na;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Xc;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Bf)throw new P(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Hp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=au((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new P(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new P(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new P(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(e,r){return e.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Qr{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ra({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new P(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new P(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ra(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(e){if(!e)return new bd;switch(e.type){case"firstParty":return new _d(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new P(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Sa.get(t);e&&(R("ComponentProvider","Removing Datastore"),Sa.delete(t),e.terminate())}(this),Promise.resolve()}}function qp(n,t,e,r={}){var i;n=uu(n,Qr);const o=kn(t),c=n._getSettings(),l=Object.assign(Object.assign({},c),{emulatorOptions:n._getEmulatorOptions()}),d=`${t}:${e}`;o&&(ic(`https://${d}`),sc("Firestore",!0)),c.host!==lu&&c.host!==d&&Br("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p=Object.assign(Object.assign({},c),{host:d,ssl:o,emulatorOptions:r});if(!we(p,l)&&(n._setSettings(p),r.mockUserToken)){let y,E;if(typeof r.mockUserToken=="string")y=r.mockUserToken,E=ft.MOCK_USER;else{y=ql(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const S=r.mockUserToken.sub||r.mockUserToken.user_id;if(!S)throw new P(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new ft(S)}n._authCredentials=new Id(new vc(y,E))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ts{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ts(this.firestore,t,this._query)}}class Bt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ie(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Bt(this.firestore,t,this._key)}}class ie extends Ts{constructor(t,e,r){super(t,e,nf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Bt(this.firestore,null,new M(t))}withConverter(t){return new ie(this.firestore,t,this._path)}}function Gp(n,t,...e){if(n=kt(n),cu("collection","path",t),n instanceof Qr){const r=X.fromString(t,...e);return ka(r),new ie(n,null,r)}{if(!(n instanceof Bt||n instanceof ie))throw new P(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return ka(r),new ie(n.firestore,null,r)}}function Kp(n,t,...e){if(n=kt(n),arguments.length===1&&(t=wc.newId()),cu("doc","path",t),n instanceof Qr){const r=X.fromString(t,...e);return Aa(r),new Bt(n,null,new M(r))}{if(!(n instanceof Bt||n instanceof ie))throw new P(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return Aa(r),new Bt(n.firestore,n instanceof ie?n.converter:null,new M(r))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Da="AsyncQueue";class Oa{constructor(t=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new Zc(this,"async_queue_retry"),this.ec=()=>{const r=Ri();r&&R(Da,"Visibility state changed to "+r.visibilityState),this.C_.p_()},this.tc=t;const e=Ri();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.nc(),this.rc(t)}enterRestrictedMode(t){if(!this.ju){this.ju=!0,this.Zu=t||!1;const e=Ri();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.ec)}}enqueue(t){if(this.nc(),this.ju)return new Promise(()=>{});const e=new ye;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.zu.push(t),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(t){if(!Dn(t))throw t;R(Da,"Operation failed with retryable error: "+t)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(t){const e=this.tc.then(()=>(this.Yu=!0,t().catch(r=>{throw this.Ju=r,this.Yu=!1,Ee("INTERNAL UNHANDLED ERROR: ",Pa(r)),r}).then(r=>(this.Yu=!1,r))));return this.tc=e,e}enqueueAfterDelay(t,e,r){this.nc(),this.Xu.indexOf(t)>-1&&(e=0);const i=Is.createAndSchedule(this,t,e,r,o=>this.oc(o));return this.Hu.push(i),i}nc(){this.Ju&&U(47125,{_c:Pa(this.Ju)})}verifyOperationInProgress(){}async ac(){let t;do t=this.tc,await t;while(t!==this.tc)}uc(t){for(const e of this.Hu)if(e.timerId===t)return!0;return!1}cc(t){return this.ac().then(()=>{this.Hu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Hu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.ac()})}lc(t){this.Xu.push(t)}oc(t){const e=this.Hu.indexOf(t);this.Hu.splice(e,1)}}function Pa(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class hu extends Qr{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new Oa,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Oa(t),this._firestoreClient=void 0,await t}}}function Wp(n,t){const e=typeof n=="object"?n:uc(),r=typeof n=="string"?n:Er,i=rs(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=zl("firestore");o&&qp(i,...o)}return i}function Qp(n){if(n._terminated)throw new P(A.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Xp(n),n._firestoreClient}function Xp(n){var t,e,r;const i=n._freezeSettings(),o=function(c,l,d,p){return new Bd(c,l,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,au(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new jp(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const l=c?._online.build();return{_offline:c?._offline.build(l),_online:l}}(n._componentsProvider))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Sn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Sn(Pt.fromBase64String(t))}catch(e){throw new P(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Sn(Pt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class du{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new P(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class fu{constructor(t){this._methodName=t}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class pu{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new P(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new P(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}}/**
* @license
* Copyright 2024 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class gu{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(e,r){if(e.length!==r.length)return!1;for(let i=0;i<e.length;++i)if(e[i]!==r[i])return!1;return!0}(this._values,t._values)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Jp=/^__.*__$/;class Yp{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Ae(t,this.data,this.fieldMask,e,this.fieldTransforms):new On(t,this.data,e,this.fieldTransforms)}}function mu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U(40011,{hc:n})}}class _s{constructor(t,e,r,i,o,c){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Pc(),this.fieldTransforms=o||[],this.fieldMask=c||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(t){return new _s(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Tc({path:r,Ec:!1});return i.dc(t),i}Ac(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Tc({path:r,Ec:!1});return i.Pc(),i}Rc(t){return this.Tc({path:void 0,Ec:!0})}Vc(t){return Dr(t,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Pc(){if(this.path)for(let t=0;t<this.path.length;t++)this.dc(this.path.get(t))}dc(t){if(t.length===0)throw this.Vc("Document fields must not be empty");if(mu(this.hc)&&Jp.test(t))throw this.Vc('Document fields cannot begin and end with "__"')}}class Zp{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||qr(t)}gc(t,e,r,i=!1){return new _s({hc:t,methodName:e,fc:r,path:at.emptyPath(),Ec:!1,mc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function tg(n){const t=n._freezeSettings(),e=qr(n._databaseId);return new Zp(n._databaseId,!!t.ignoreUndefinedProperties,e)}function eg(n,t,e,r,i,o={}){const c=n.gc(o.merge||o.mergeFields?2:0,t,e,i);bu("Data must be an object, but it was:",c,r);const l=vu(r,c);let d,p;if(o.merge)d=new St(c.fieldMask),p=c.fieldTransforms;else if(o.mergeFields){const y=[];for(const E of o.mergeFields){const S=ng(t,E,e);if(!c.contains(S))throw new P(A.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);sg(y,S)||y.push(S)}d=new St(y),p=c.fieldTransforms.filter(E=>d.covers(E.field))}else d=null,p=c.fieldTransforms;return new Yp(new Ct(l),d,p)}function yu(n,t){if(wu(n=kt(n)))return bu("Unsupported field value:",t,n),vu(n,t);if(n instanceof fu)return function(e,r){if(!mu(r.hc))throw r.Vc(`${e._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Vc(`${e._methodName}() is not currently supported inside arrays`);const i=e._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Ec&&t.hc!==4)throw t.Vc("Nested arrays are not supported");return function(e,r){const i=[];let o=0;for(const c of e){let l=yu(c,r.Rc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(n,t)}return function(e,r){if((e=kt(e))===null)return{nullValue:"NULL_VALUE"};if(typeof e=="number")return ff(r.serializer,e);if(typeof e=="boolean")return{booleanValue:e};if(typeof e=="string")return{stringValue:e};if(e instanceof Date){const i=rt.fromDate(e);return{timestampValue:Gi(r.serializer,i)}}if(e instanceof rt){const i=new rt(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Gi(r.serializer,i)}}if(e instanceof pu)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Sn)return{bytesValue:Sf(r.serializer,e._byteString)};if(e instanceof Bt){const i=r.databaseId,o=e.firestore._databaseId;if(!o.isEqual(i))throw r.Vc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Wc(e.firestore._databaseId||r.databaseId,e._key.path)}}if(e instanceof gu)return function(i,o){return{mapValue:{fields:{[Sc]:{stringValue:Ac},[Bi]:{arrayValue:{values:i.toArray().map(c=>{if(typeof c!="number")throw o.Vc("VectorValues must only contain numeric values.");return ms(o.serializer,c)})}}}}}}(e,r);throw r.Vc(`Unsupported field value: ${Es(e)}`)}(n,t)}function vu(n,t){const e={};return Ic(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ke(n,(r,i)=>{const o=yu(i,t.Ic(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function wu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof rt||n instanceof pu||n instanceof Sn||n instanceof Bt||n instanceof fu||n instanceof gu)}function bu(n,t,e){if(!wu(e)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(e)){const r=Es(e);throw r==="an object"?t.Vc(n+" a custom object"):t.Vc(n+" "+r)}}function ng(n,t,e){if((t=kt(t))instanceof du)return t._internalPath;if(typeof t=="string")return ig(n,t);throw Dr("Field path arguments must be of type string or ",n,!1,void 0,e)}const rg=new RegExp("[~\\*/\\[\\]]");function ig(n,t,e){if(t.search(rg)>=0)throw Dr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new du(...t.split("."))._internalPath}catch{throw Dr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Dr(n,t,e,r,i){const o=r&&!r.isEmpty(),c=i!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let d="";return(o||c)&&(d+=" (found",o&&(d+=` in field ${r}`),c&&(d+=` in document ${i}`),d+=")"),new P(A.INVALID_ARGUMENT,l+n+d)}function sg(n,t){return n.some(e=>e.isEqual(t))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function og(n,t,e){let r;return r=n?n.toFirestore(t):t,r}function ag(n,t){const e=uu(n.firestore,hu),r=Kp(n),i=og(n.converter,t);return cg(e,[eg(tg(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,jt.exists(!1))]).then(()=>r)}function cg(n,t){return function(e,r){const i=new ye;return e.asyncQueue.enqueueAndForget(async()=>Lp(await zp(e),r,i)),i.promise}(Qp(n),t)}(function(n,t=!0){(function(e){Ge=e})(qe),Fe(new be("firestore",(e,{instanceIdentifier:r,options:i})=>{const o=e.getProvider("app").getImmediate(),c=new hu(new Ed(e.getProvider("auth-internal")),new Cd(o,e.getProvider("app-check-internal")),function(l,d){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new P(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Tr(l.options.projectId,d)}(o,r),o);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),re(Go,Ko,n),re(Go,Ko,"esm2017")})();function Cs(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(e[r[i]]=n[r[i]]);return e}function Iu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ug=Iu,Eu=new Nn("auth","Firebase",Iu());/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Or=new es("@firebase/auth");function lg(n,...t){Or.logLevel<=V.WARN&&Or.warn(`Auth (${qe}): ${n}`,...t)}function pr(n,...t){Or.logLevel<=V.ERROR&&Or.error(`Auth (${qe}): ${n}`,...t)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function zt(n,...t){throw Ss(n,...t)}function Dt(n,...t){return Ss(n,...t)}function Tu(n,t,e){const r=Object.assign(Object.assign({},ug()),{[t]:e});return new Nn("auth","Firebase",r).create(t,{appName:n.name})}function se(n){return Tu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ss(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return Eu.create(n,...t)}function L(n,t,...e){if(!n)throw Ss(t,...e)}function Vt(n){const t="INTERNAL ASSERTION FAILED: "+n;throw pr(t),new Error(t)}function Ht(n,t){n||Vt(t)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ji(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function hg(){return La()==="http:"||La()==="https:"}function La(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function dg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hg()||Jl()||"connection"in navigator)?navigator.onLine:!0}function fg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Mn{constructor(t,e){this.shortDelay=t,this.longDelay=e,Ht(e>t,"Short delay should be less than long delay!"),this.isMobile=Wl()||Yl()}get(){return dg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function As(n,t){Ht(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class _u{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const pg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const gg=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],mg=new Mn(3e4,6e4);function Xr(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function We(n,t,e,r,i={}){return Cu(n,i,async()=>{let o={},c={};r&&(t==="GET"?c=r:o={body:JSON.stringify(r)});const l=Rn(Object.assign({key:n.config.apiKey},c)).slice(1),d=await n._getAdditionalHeaders();d["Content-Type"]="application/json",n.languageCode&&(d["X-Firebase-Locale"]=n.languageCode);const p=Object.assign({method:t,headers:d},o);return Xl()||(p.referrerPolicy="no-referrer"),n.emulatorConfig&&kn(n.emulatorConfig.host)&&(p.credentials="include"),_u.fetch()(await Au(n,n.config.apiHost,e,l),p)})}async function Cu(n,t,e){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},pg),t);try{const i=new yg(n),o=await Promise.race([e(),i.promise]);i.clearNetworkTimeout();const c=await o.json();if("needConfirmation"in c)throw ur(n,"account-exists-with-different-credential",c);if(o.ok&&!("errorMessage"in c))return c;{const l=o.ok?c.errorMessage:c.error.message,[d,p]=l.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw ur(n,"credential-already-in-use",c);if(d==="EMAIL_EXISTS")throw ur(n,"email-already-in-use",c);if(d==="USER_DISABLED")throw ur(n,"user-disabled",c);const y=r[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw Tu(n,y,p);zt(n,y)}}catch(i){if(i instanceof qt)throw i;zt(n,"network-request-failed",{message:String(i)})}}async function Su(n,t,e,r,i={}){const o=await We(n,t,e,r,i);return"mfaPendingCredential"in o&&zt(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function Au(n,t,e,r){const i=`${t}${e}?${r}`,o=n,c=o.config.emulator?As(n.config,i):`${n.config.apiScheme}://${i}`;return gg.includes(e)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(c).toString():c}class yg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(Dt(this.auth,"network-request-failed")),mg.get())})}}function ur(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const i=Dt(n,t,r);return i.customData._tokenResponse=e,i}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function vg(n,t){return We(n,"POST","/v1/accounts:delete",t)}async function Pr(n,t){return We(n,"POST","/v1/accounts:lookup",t)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function bn(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function wg(n,t=!1){const e=kt(n),r=await e.getIdToken(t),i=ks(r);L(i&&i.exp&&i.auth_time&&i.iat,e.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,c=o?.sign_in_provider;return{claims:i,token:r,authTime:bn(Oi(i.auth_time)),issuedAtTime:bn(Oi(i.iat)),expirationTime:bn(Oi(i.exp)),signInProvider:c||null,signInSecondFactor:o?.sign_in_second_factor||null}}function Oi(n){return Number(n)*1e3}function ks(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return pr("JWT malformed, contained fewer than 3 sections"),null;try{const i=tc(e);return i?JSON.parse(i):(pr("Failed to decode base64 JWT payload"),null)}catch(i){return pr("Caught error parsing JWT payload as JSON",i?.toString()),null}}function xa(n){const t=ks(n);return L(t,"internal-error"),L(typeof t.exp<"u","internal-error"),L(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function An(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof qt&&bg(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function bg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ig{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const r=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Yi{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=bn(this.lastLoginAt),this.creationTime=bn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Lr(n){var t;const e=n.auth,r=await n.getIdToken(),i=await An(n,Pr(e,{idToken:r}));L(i?.users.length,e,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const c=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?ku(o.providerUserInfo):[],l=Tg(n.providerData,c),d=n.isAnonymous,p=!(n.email&&o.passwordHash)&&!l?.length,y=d?p:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Yi(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(n,E)}async function Eg(n){const t=kt(n);await Lr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Tg(n,t){return[...n.filter(e=>!t.some(r=>r.providerId===e.providerId)),...t]}function ku(n){return n.map(t=>{var{providerId:e}=t,r=Cs(t,["providerId"]);return{providerId:e,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function _g(n,t){const e=await Cu(n,{},async()=>{const r=Rn({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,c=await Au(n,i,"/v1/token",`key=${o}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",_u.fetch()(c,{method:"POST",headers:l,body:r})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function Cg(n,t){return We(n,"POST","/v2/accounts:revokeToken",Xr(n,t))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Me{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){L(t.idToken,"internal-error"),L(typeof t.idToken<"u","internal-error"),L(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):xa(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){L(t.length!==0,"internal-error");const e=xa(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:i,expiresIn:o}=await _g(t,e);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:i,expirationTime:o}=e,c=new Me;return r&&(L(typeof r=="string","internal-error",{appName:t}),c.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:t}),c.accessToken=i),o&&(L(typeof o=="number","internal-error",{appName:t}),c.expirationTime=o),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Me,this.toJSON())}_performRefresh(){return Vt("not implemented")}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Xt(n,t){L(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class At{constructor(t){var{uid:e,auth:r,stsTokenManager:i}=t,o=Cs(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ig(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Yi(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const e=await An(this,this.stsTokenManager.getToken(this.auth,t));return L(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return wg(this,t)}reload(){return Eg(this)}_assign(t){this!==t&&(L(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new At(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await Lr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_t(this.auth.app))return Promise.reject(se(this.auth));const t=await this.getIdToken();return await An(this,vg(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var r,i,o,c,l,d,p,y;const E=(r=e.displayName)!==null&&r!==void 0?r:void 0,S=(i=e.email)!==null&&i!==void 0?i:void 0,D=(o=e.phoneNumber)!==null&&o!==void 0?o:void 0,N=(c=e.photoURL)!==null&&c!==void 0?c:void 0,x=(l=e.tenantId)!==null&&l!==void 0?l:void 0,O=(d=e._redirectEventId)!==null&&d!==void 0?d:void 0,B=(p=e.createdAt)!==null&&p!==void 0?p:void 0,z=(y=e.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:W,emailVerified:Z,isAnonymous:Nt,providerData:tt,stsTokenManager:b}=e;L(W&&b,t,"internal-error");const f=Me.fromJSON(this.name,b);L(typeof W=="string",t,"internal-error"),Xt(E,t.name),Xt(S,t.name),L(typeof Z=="boolean",t,"internal-error"),L(typeof Nt=="boolean",t,"internal-error"),Xt(D,t.name),Xt(N,t.name),Xt(x,t.name),Xt(O,t.name),Xt(B,t.name),Xt(z,t.name);const g=new At({uid:W,auth:t,email:S,emailVerified:Z,displayName:E,isAnonymous:Nt,photoURL:N,phoneNumber:D,tenantId:x,stsTokenManager:f,createdAt:B,lastLoginAt:z});return tt&&Array.isArray(tt)&&(g.providerData=tt.map(v=>Object.assign({},v))),O&&(g._redirectEventId=O),g}static async _fromIdTokenResponse(t,e,r=!1){const i=new Me;i.updateFromServerResponse(e);const o=new At({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Lr(o),o}static async _fromGetAccountInfoResponse(t,e,r){const i=e.users[0];L(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?ku(i.providerUserInfo):[],c=!(i.email&&i.passwordHash)&&!o?.length,l=new Me;l.updateFromIdToken(r);const d=new At({uid:i.localId,auth:t,stsTokenManager:l,isAnonymous:c}),p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Yi(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!o?.length};return Object.assign(d,p),d}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Ma=new Map;function Ft(n){Ht(n instanceof Function,"Expected a class definition");let t=Ma.get(n);return t?(Ht(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,Ma.set(n,t),t)}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Nu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Nu.type="NONE";const Ua=Nu;/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function gr(n,t,e){return`firebase:${n}:${t}:${e}`}class Ue{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=gr(this.userKey,i.apiKey,o),this.fullPersistenceKey=gr("persistence",i.apiKey,o),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await Pr(this.auth,{idToken:t}).catch(()=>{});return e?At._fromGetAccountInfoResponse(this.auth,e,t):null}return At._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new Ue(Ft(Ua),t,r);const i=(await Promise.all(e.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let o=i[0]||Ft(Ua);const c=gr(r,t.config.apiKey,t.name);let l=null;for(const p of e)try{const y=await p._get(c);if(y){let E;if(typeof y=="string"){const S=await Pr(t,{idToken:y}).catch(()=>{});if(!S)break;E=await At._fromGetAccountInfoResponse(t,S,y)}else E=At._fromJSON(t,y);p!==o&&(l=E),o=p;break}}catch{}const d=i.filter(p=>p._shouldAllowMigration);return!o._shouldAllowMigration||!d.length?new Ue(o,t,r):(o=d[0],l&&await o._set(c,l.toJSON()),await Promise.all(e.map(async p=>{if(p!==o)try{await p._remove(c)}catch{}})),new Ue(o,t,r))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Va(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Pu(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ru(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(xu(t))return"Blackberry";if(Mu(t))return"Webos";if(Du(t))return"Safari";if((t.includes("chrome/")||Ou(t))&&!t.includes("edge/"))return"Chrome";if(Lu(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if(r?.length===2)return r[1]}return"Other"}function Ru(n=gt()){return/firefox\//i.test(n)}function Du(n=gt()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ou(n=gt()){return/crios\//i.test(n)}function Pu(n=gt()){return/iemobile/i.test(n)}function Lu(n=gt()){return/android/i.test(n)}function xu(n=gt()){return/blackberry/i.test(n)}function Mu(n=gt()){return/webos/i.test(n)}function Ns(n=gt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Sg(n=gt()){var t;return Ns(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Ag(){return Zl()&&document.documentMode===10}function Uu(n=gt()){return Ns(n)||Lu(n)||Mu(n)||xu(n)||/windows phone/i.test(n)||Pu(n)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Vu(n,t=[]){let e;switch(n){case"Browser":e=Va(gt());break;case"Worker":e=`${Va(gt())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${qe}/${r}`}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class kg{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=o=>new Promise((c,l)=>{try{const d=t(o);c(d)}catch(d){l(d)}});r.onAbort=e,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const i of e)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Ng(n,t={}){return We(n,"GET","/v2/passwordPolicy",Xr(n,t))}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Rg=6;class Dg{constructor(t){var e,r,i,o;const c=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=c.minPasswordLength)!==null&&e!==void 0?e:Rg,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,r,i,o,c,l;const d={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,d),this.validatePasswordCharacterOptions(t,d),d.isValid&&(d.isValid=(e=d.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),d.isValid&&(d.isValid=(r=d.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),d.isValid&&(d.isValid=(i=d.containsLowercaseLetter)!==null&&i!==void 0?i:!0),d.isValid&&(d.isValid=(o=d.containsUppercaseLetter)!==null&&o!==void 0?o:!0),d.isValid&&(d.isValid=(c=d.containsNumericCharacter)!==null&&c!==void 0?c:!0),d.isValid&&(d.isValid=(l=d.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),d}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),i&&(e.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Og{constructor(t,e,r,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fa(this),this.idTokenSubscription=new Fa(this),this.beforeStateQueue=new kg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Eu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Ft(e)),this._initializationPromise=this.queue(async()=>{var r,i,o;if(!this._deleted&&(this.persistenceManager=await Ue.create(this,t),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await Pr(this,{idToken:t}),r=await At._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(_t(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,l=i?._redirectEventId,d=await this.tryRedirectSignIn(t);(!c||c===l)&&d?.user&&(i=d.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(c){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Lr(t)}catch(e){if(e?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=fg()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(_t(this.app))return Promise.reject(se(this));const e=t?kt(t):null;return e&&L(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&L(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return _t(this.app)?Promise.reject(se(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return _t(this.app)?Promise.reject(se(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ft(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Ng(this),e=new Dg(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Nn("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await Cg(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Ft(t)||this._popupRedirectResolver;L(e,this,"argument-error"),this.redirectPersistenceManager=await Ue.create(this,[Ft(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,i){if(this._deleted)return()=>{};const o=typeof e=="function"?e:e.next.bind(e);let c=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(l,this,"internal-error"),l.then(()=>{c||o(this.currentUser)}),typeof e=="function"){const d=t.addObserver(e,r,i);return()=>{c=!0,d()}}else{const d=t.addObserver(e);return()=>{c=!0,d()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Vu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(e["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;if(_t(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e?.error&&lg(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Jr(n){return kt(n)}class Fa{constructor(t){this.auth=t,this.observer=null,this.addObserver=ah(e=>this.observer=e)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let Rs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Pg(n){Rs=n}function Lg(n){return Rs.loadJS(n)}function xg(){return Rs.gapiScript}function Mg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ug(n,t){const e=rs(n,"auth");if(e.isInitialized()){const r=e.getImmediate(),i=e.getOptions();if(we(i,t??{}))return r;zt(r,"already-initialized")}return e.initialize({options:t})}function Vg(n,t){const e=t?.persistence||[],r=(Array.isArray(e)?e:[e]).map(Ft);t?.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t?.popupRedirectResolver)}function Fg(n,t,e){const r=Jr(n);L(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,o=Fu(t),{host:c,port:l}=jg(t),d=l===null?"":`:${l}`,p={url:`${o}//${c}${d}/`},y=Object.freeze({host:c,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){L(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),L(we(p,r.config.emulator)&&we(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=p,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,kn(c)?(ic(`${o}//${c}${d}`),sc("Auth",!0)):Bg()}function Fu(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function jg(n){const t=Fu(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:ja(r.substr(o.length+1))}}else{const[o,c]=r.split(":");return{host:o,port:ja(c)}}}function ja(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function Bg(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ju{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return Vt("not implemented")}_getIdTokenResponse(t){return Vt("not implemented")}_linkToIdToken(t,e){return Vt("not implemented")}_getReauthenticationResolver(t){return Vt("not implemented")}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Ve(n,t){return Su(n,"POST","/v1/accounts:signInWithIdp",Xr(n,t))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const $g="http://localhost";class Ce extends ju{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Ce(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):zt("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=e,o=Cs(e,["providerId","signInMethod"]);if(!r||!i)return null;const c=new Ce(r,i);return c.idToken=o.idToken||void 0,c.accessToken=o.accessToken||void 0,c.secret=o.secret,c.nonce=o.nonce,c.pendingToken=o.pendingToken||null,c}_getIdTokenResponse(t){const e=this.buildRequest();return Ve(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,Ve(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Ve(t,e)}buildRequest(){const t={requestUri:$g,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Rn(e)}return t}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Bu{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Un extends Bu{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Jt extends Un{constructor(){super("facebook.com")}static credential(t){return Ce._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Jt.credentialFromTaggedObject(t)}static credentialFromError(t){return Jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Jt.credential(t.oauthAccessToken)}catch{return null}}}Jt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jt.PROVIDER_ID="facebook.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Yt extends Un{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Ce._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Yt.credentialFromTaggedObject(t)}static credentialFromError(t){return Yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return Yt.credential(e,r)}catch{return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com";Yt.PROVIDER_ID="google.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Zt extends Un{constructor(){super("github.com")}static credential(t){return Ce._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Zt.credentialFromTaggedObject(t)}static credentialFromError(t){return Zt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Zt.credential(t.oauthAccessToken)}catch{return null}}}Zt.GITHUB_SIGN_IN_METHOD="github.com";Zt.PROVIDER_ID="github.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class te extends Un{constructor(){super("twitter.com")}static credential(t,e){return Ce._fromParams({providerId:te.PROVIDER_ID,signInMethod:te.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return te.credentialFromTaggedObject(t)}static credentialFromError(t){return te.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return te.credential(e,r)}catch{return null}}}te.TWITTER_SIGN_IN_METHOD="twitter.com";te.PROVIDER_ID="twitter.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function zg(n,t){return Su(n,"POST","/v1/accounts:signUp",Xr(n,t))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class le{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,i=!1){const o=await At._fromIdTokenResponse(t,r,i),c=Ba(r);return new le({user:o,providerId:c,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const i=Ba(r);return new le({user:t,providerId:i,_tokenResponse:r,operationType:e})}}function Ba(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Hg(n){var t;if(_t(n.app))return Promise.reject(se(n));const e=Jr(n);if(await e._initializationPromise,!((t=e.currentUser)===null||t===void 0)&&t.isAnonymous)return new le({user:e.currentUser,providerId:null,operationType:"signIn"});const r=await zg(e,{returnSecureToken:!0}),i=await le._fromIdTokenResponse(e,"signIn",r,!0);return await e._updateCurrentUser(i.user),i}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class xr extends qt{constructor(t,e,r,i){var o;super(e.code,e.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,xr.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,i){return new xr(t,e,r,i)}}function $u(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?xr._fromErrorAndOperation(n,i,t,r):i})}async function qg(n,t,e=!1){const r=await An(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return le._forOperation(n,"link",r)}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Gg(n,t,e=!1){const{auth:r}=n;if(_t(r.app))return Promise.reject(se(r));const i="reauthenticate";try{const o=await An(n,$u(r,i,t,n),e);L(o.idToken,r,"internal-error");const c=ks(o.idToken);L(c,r,"internal-error");const{sub:l}=c;return L(n.uid===l,r,"user-mismatch"),le._forOperation(n,i,o)}catch(o){throw o?.code==="auth/user-not-found"&&zt(r,"user-mismatch"),o}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Kg(n,t,e=!1){if(_t(n.app))return Promise.reject(se(n));const r="signIn",i=await $u(n,r,t),o=await le._fromIdTokenResponse(n,r,i);return e||await n._updateCurrentUser(o.user),o}function Wg(n,t,e,r){return kt(n).onIdTokenChanged(t,e,r)}function Qg(n,t,e){return kt(n).beforeAuthStateChanged(t,e)}const Mr="__sak";/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class zu{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Mr,"1"),this.storage.removeItem(Mr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Xg=1e3,Jg=10;class Hu extends zu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Uu(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),i=this.localCache[e];r!==i&&t(e,i,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((c,l,d)=>{this.notifyListeners(c,d)});return}const r=t.key;e?this.detachListener():this.stopPolling();const i=()=>{const c=this.storage.getItem(r);!e&&this.localCache[r]===c||this.notifyListeners(r,c)},o=this.storage.getItem(r);Ag()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Jg):i()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},Xg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Hu.type="LOCAL";const Yg=Hu;/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class qu extends zu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}qu.type="SESSION";const Gu=qu;/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Zg(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Yr{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(i=>i.isListeningto(t));if(e)return e;const r=new Yr(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:i,data:o}=e.data,c=this.handlersMap[i];if(!c?.size)return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(c).map(async p=>p(e.origin,o)),d=await Zg(l);e.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:d})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yr.receivers=[];/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ds(n="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return n+e}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class tm{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,c;return new Promise((l,d)=>{const p=Ds("",20);i.port1.start();const y=setTimeout(()=>{d(new Error("unsupported_event"))},r);c={messageChannel:i,onMessage(E){const S=E;if(S.data.eventId===p)switch(S.data.status){case"ack":clearTimeout(y),o=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(S.data.response);break;default:clearTimeout(y),clearTimeout(o),d(new Error("invalid_response"));break}}},this.handlers.add(c),i.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:t,eventId:p,data:e},[i.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ot(){return window}function em(n){Ot().location.href=n}/**
* @license
* Copyright 2020 Google LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ku(){return typeof Ot().WorkerGlobalScope<"u"&&typeof Ot().importScripts=="function"}async function nm(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rm(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function im(){return Ku()?self:null}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Wu="firebaseLocalStorageDb",sm=1,Ur="firebaseLocalStorage",Qu="fbase_key";class Vn{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Zr(n,t){return n.transaction([Ur],t?"readwrite":"readonly").objectStore(Ur)}function om(){const n=indexedDB.deleteDatabase(Wu);return new Vn(n).toPromise()}function Zi(){const n=indexedDB.open(Wu,sm);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ur,{keyPath:Qu})}catch(i){e(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ur)?t(r):(r.close(),await om(),t(await Zi()))})})}async function $a(n,t,e){const r=Zr(n,!0).put({[Qu]:t,value:e});return new Vn(r).toPromise()}async function am(n,t){const e=Zr(n,!1).get(t),r=await new Vn(e).toPromise();return r===void 0?null:r.value}function za(n,t){const e=Zr(n,!0).delete(t);return new Vn(e).toPromise()}const cm=800,um=3;class Xu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zi(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>um)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ku()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yr._getInstance(im()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await nm(),!this.activeServiceWorker)return;this.sender=new tm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((e=r[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||rm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Zi();return await $a(t,Mr,"1"),await za(t,Mr),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>$a(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>am(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>za(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Zr(i,!1).getAll();return new Vn(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xu.type="LOCAL";const lm=Xu;new Mn(3e4,6e4);/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function hm(n,t){return t?Ft(t):(L(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Os extends ju{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ve(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Ve(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Ve(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function dm(n){return Kg(n.auth,new Os(n),n.bypassAuthState)}function fm(n){const{auth:t,user:e}=n;return L(e,t,"internal-error"),Gg(e,new Os(n),n.bypassAuthState)}async function pm(n){const{auth:t,user:e}=n;return L(e,t,"internal-error"),qg(e,new Os(n),n.bypassAuthState)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ju{constructor(t,e,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:i,tenantId:o,error:c,type:l}=t;if(c){this.reject(c);return}const d={auth:this.auth,requestUri:e,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(d))}catch(p){this.reject(p)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return dm;case"linkViaPopup":case"linkViaRedirect":return pm;case"reauthViaPopup":case"reauthViaRedirect":return fm;default:zt(this.auth,"internal-error")}}resolve(t){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const gm=new Mn(2e3,1e4);class Le extends Ju{constructor(t,e,r,i,o){super(t,e,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Le.currentPopupAction&&Le.currentPopupAction.cancel(),Le.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return L(t,this.auth,"internal-error"),t}async onExecution(){Ht(this.filter.length===1,"Popup operations only handle one event");const t=Ds();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(Dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Le.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if(!((r=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,gm.get())};t()}}Le.currentPopupAction=null;/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const mm="pendingRedirect",mr=new Map;class ym extends Ju{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=mr.get(this.auth._key());if(!t){try{const e=await vm(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}mr.set(this.auth._key(),t)}return this.bypassAuthState||mr.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vm(n,t){const e=Im(t),r=bm(n);if(!await r._isAvailable())return!1;const i=await r._get(e)==="true";return await r._remove(e),i}function wm(n,t){mr.set(n._key(),t)}function bm(n){return Ft(n._redirectPersistence)}function Im(n){return gr(mm,n.config.apiKey,n.name)}async function Em(n,t,e=!1){if(_t(n.app))return Promise.reject(se(n));const r=Jr(n),i=hm(r,t),o=await new ym(r,i,e).execute();return o&&!e&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Tm=10*60*1e3;class _m{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Cm(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!Yu(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";e.onError(Dt(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Tm&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ha(t))}saveEventToCache(t){this.cachedEventUids.add(Ha(t)),this.lastProcessedEventTime=Date.now()}}function Ha(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function Yu({type:n,error:t}){return n==="unknown"&&t?.code==="auth/no-auth-event"}function Cm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yu(n);default:return!1}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Sm(n,t={}){return We(n,"GET","/v1/projects",t)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Am=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,km=/^https?/;async function Nm(n){if(n.config.emulator)return;const{authorizedDomains:t}=await Sm(n);for(const e of t)try{if(Rm(e))return}catch{}zt(n,"unauthorized-domain")}function Rm(n){const t=Ji(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===r}if(!km.test(e))return!1;if(Am.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
* @license
* Copyright 2020 Google LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Dm=new Mn(3e4,6e4);function qa(){const n=Ot().___jsl;if(n?.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function Om(n){return new Promise((t,e)=>{var r,i,o;function c(){qa(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{qa(),e(Dt(n,"network-request-failed"))},timeout:Dm.get()})}if(!((i=(r=Ot().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Ot().gapi)===null||o===void 0)&&o.load)c();else{const l=Mg("iframefcb");return Ot()[l]=()=>{gapi.load?c():e(Dt(n,"network-request-failed"))},Lg(`${xg()}?onload=${l}`).catch(d=>e(d))}}).catch(t=>{throw yr=null,t})}let yr=null;function Pm(n){return yr=yr||Om(n),yr}/**
* @license
* Copyright 2020 Google LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Lm=new Mn(5e3,15e3),xm="__/auth/iframe",Mm="emulator/auth/iframe",Um={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fm(n){const t=n.config;L(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?As(t,Mm):`https://${n.config.authDomain}/${xm}`,r={apiKey:t.apiKey,appName:n.name,v:qe},i=Vm.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${e}?${Rn(r).slice(1)}`}async function jm(n){const t=await Pm(n),e=Ot().gapi;return L(e,n,"internal-error"),t.open({where:document.body,url:Fm(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Um,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const c=Dt(n,"network-request-failed"),l=Ot().setTimeout(()=>{o(c)},Lm.get());function d(){Ot().clearTimeout(l),i(r)}r.ping(d).then(d,()=>{o(c)})}))}/**
* @license
* Copyright 2020 Google LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Bm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$m=500,zm=600,Hm="_blank",qm="http://localhost";class Ga{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Gm(n,t,e,r=$m,i=zm){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),c=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const d=Object.assign(Object.assign({},Bm),{width:r.toString(),height:i.toString(),top:o,left:c}),p=gt().toLowerCase();e&&(l=Ou(p)?Hm:e),Ru(p)&&(t=t||qm,d.scrollbars="yes");const y=Object.entries(d).reduce((S,[D,N])=>`${S}${D}=${N},`,"");if(Sg(p)&&l!=="_self")return Km(t||"",l),new Ga(null);const E=window.open(t||"",l,y);L(E,n,"popup-blocked");try{E.focus()}catch{}return new Ga(E)}function Km(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Wm="__/auth/handler",Qm="emulator/auth/handler",Xm=encodeURIComponent("fac");async function Ka(n,t,e,r,i,o){L(n.config.authDomain,n,"auth-domain-config-required"),L(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:qe,eventId:i};if(t instanceof Bu){t.setDefaultLanguage(n.languageCode),c.providerId=t.providerId||"",oh(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[y,E]of Object.entries({}))c[y]=E}if(t instanceof Un){const y=t.getScopes().filter(E=>E!=="");y.length>0&&(c.scopes=y.join(","))}n.tenantId&&(c.tid=n.tenantId);const l=c;for(const y of Object.keys(l))l[y]===void 0&&delete l[y];const d=await n._getAppCheckToken(),p=d?`#${Xm}=${encodeURIComponent(d)}`:"";return`${Jm(n)}?${Rn(l).slice(1)}${p}`}function Jm({config:n}){return n.emulator?As(n,Qm):`https://${n.authDomain}/${Wm}`}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Pi="webStorageSupport";class Ym{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gu,this._completeRedirectFn=Em,this._overrideRedirectResult=wm}async _openPopup(t,e,r,i){var o;Ht((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const c=await Ka(t,e,r,Ji(),i);return Gm(t,c,Ds())}async _openRedirect(t,e,r,i){await this._originValidation(t);const o=await Ka(t,e,r,Ji(),i);return em(o),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:i,promise:o}=this.eventManagers[e];return i?Promise.resolve(i):(Ht(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await jm(t),r=new _m(t);return e.register("authEvent",i=>(L(i?.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Pi,{type:Pi},r=>{var i;const o=(i=r?.[0])===null||i===void 0?void 0:i[Pi];o!==void 0&&e(!!o),zt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Nm(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Uu()||Du()||Ns()}}const Zm=Ym;var Wa="@firebase/auth",Qa="1.10.6";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ty{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ey(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ny(n){Fe(new be("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:c,authDomain:l}=r.options;L(c&&!c.includes(":"),"invalid-api-key",{appName:r.name});const d={apiKey:c,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vu(n)},p=new Og(r,i,o,d);return Vg(p,e),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),Fe(new be("auth-internal",t=>{const e=Jr(t.getProvider("auth").getImmediate());return(r=>new ty(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),re(Wa,Qa,ey(n)),re(Wa,Qa,"esm2017")}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const ry=5*60,iy=rc("authIdTokenMaxAge")||ry;let Xa=null;const sy=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>iy)return;const i=e?.token;Xa!==i&&(Xa=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function oy(n=uc()){const t=rs(n,"auth");if(t.isInitialized())return t.getImmediate();const e=Ug(n,{popupRedirectResolver:Zm,persistence:[lm,Yg,Gu]}),r=rc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const c=sy(o.toString());Qg(e,c,()=>c(e.currentUser)),Wg(e,l=>c(l))}}const i=ec("auth");return i&&Fg(e,`http://${i}`),e}function ay(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}Pg({loadJS(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=i=>{const o=Dt("internal-error");o.customData=i,e(o)},r.type="text/javascript",r.charset="UTF-8",ay().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ny("Browser");const cy={apiKey:"AIzaSyB-ve_suzb3nULDHJE4G_gkHQcMx97asf8",authDomain:"quize-44349.firebaseapp.com",projectId:"quize-44349",storageBucket:"quize-44349.firebasestorage.app",messagingSenderId:"80986581205",appId:"1:80986581205:web:b44731bdefbf15a8959a5c",measurementId:"G-K3XP09NTJ1"},Zu=cc(cy),Vr=oy(Zu),uy=Wp(Zu);async function ly(){try{return(await(await fetch("input/questions.json")).json()).questions}catch(n){throw console.error("Error loading questions:",n),n}}function hy(n){const t=document.getElementById("quiz-form"),e=n.map((r,i)=>`
        <div class="question-group" data-question-id="${r.id}">
            <div class="question-text">${i+1}. ${r.text}</div>
            <div class="choices-group">
                ${r.options.map((o,c)=>`
                    <label class="choice-container">
                        <input type="radio" name="${r.id}" value="${c}" required>
                        ${o}
                    </label>
                `).join("")}
            </div>
            <div class="correct-answer-text"></div>
        </div>
    `).join("");document.getElementById("score-banner"),t.innerHTML=e+t.innerHTML.substring(t.innerHTML.indexOf('<div id="score-banner"'))}function dy(n,t){t.forEach(e=>{const r=document.querySelector(`[data-question-id="${e.id}"]`),i=n.get(e.id),o=e.correctAnswer.toString();if(r.querySelectorAll(".choice-container").forEach((c,l)=>{const d=c.querySelector('input[type="radio"]');d.value===i?i===o?c.classList.add("correct"):c.classList.add("incorrect"):d.value===o&&c.classList.add("correct"),d.disabled=!0}),i!==o){const c=r.querySelector(".correct-answer-text");c.textContent=`Correct answer: ${e.options[e.correctAnswer]}`,c.style.display="block"}})}function fy(n,t){let e=0;return t.forEach(r=>{n.get(r.id)===r.correctAnswer.toString()&&e++}),{score:e,totalQuestions:t.length,percentage:e/t.length*100}}let Fr=[],Ja=[];async function py(){try{return(await(await fetch("input/group.json")).json()).groups}catch(n){throw console.error("Error loading groups:",n),n}}function gy(n){const t=document.getElementById("group"),e='<option value="" disabled selected>Select Group *</option>';t.innerHTML=e,n.forEach(r=>{const i=document.createElement("option");i.value=r.value,i.textContent=r.label,t.appendChild(i)})}function my(n){const t=document.getElementById("auth-state");t.style.display="block",n?(t.textContent=`Authenticated (Anonymous User ID: ${n.uid})`,t.style.backgroundColor="#e6ffe6",t.style.color="#006600"):(t.textContent="Not authenticated",t.style.backgroundColor="#ffe6e6",t.style.color="#990000")}function ts(n,t){const e=document.getElementById("successMessage"),r=document.getElementById("error");n==="success"?(e.textContent=t,e.style.display="block",r.style.display="none",setTimeout(()=>{e.style.display="none"},3e3)):(r.textContent=t,r.style.display="block",e.style.display="none")}function yy(n){const t=`Quiz Score: ${n.score}/${n.totalQuestions} (${n.percentage.toFixed(2)}%)`,e=document.getElementById("top-score-banner");e.textContent=t,e.style.display="block";const r=document.getElementById("bottom-score-banner");r.textContent=t,r.style.display="block"}async function vy(n){n.preventDefault();const t=document.getElementById("submit-btn");t.disabled=!0;try{if(!Vr.currentUser)throw new Error("Please wait for authentication to complete");const e=document.getElementById("name").value.trim(),r=document.getElementById("group").value;if(!e)throw new Error("Please enter your name");if(!r)throw new Error("Please select your group");const i=new FormData(n.target),o=fy(i,Fr);document.getElementById("marks").value=o.score;const c=o.score,l={Name:e,Group:r,Marks:c,Percentage:parseFloat(o.percentage.toFixed(2)),Timestamp:new Date().toISOString(),UserId:Vr.currentUser.uid},d=Gp(uy,"quiz");await ag(d,l),yy(o),dy(i,Fr),ts("success","Quiz submitted and data saved successfully!"),document.getElementById("name").value="",document.getElementById("group").value="",document.getElementById("marks").value="",t.style.display="none"}catch(e){console.error("Error submitting data:",e),ts("error",e.message),t.disabled=!1}}async function wy(){try{[Fr,Ja]=await Promise.all([ly(),py()]),hy(Fr),gy(Ja),Vr.onAuthStateChanged(n=>{console.log("Auth state changed:",n?"authenticated":"not authenticated"),my(n)}),await Hg(Vr),console.log("Anonymous authentication initiated"),document.getElementById("quiz-form").addEventListener("submit",vy)}catch(n){console.error("Error initializing app:",n),ts("error",n.message)}}wy();
