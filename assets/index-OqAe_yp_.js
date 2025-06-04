(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const Mu=()=>{};var Oo={};/**
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
 */const Ya=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Lu=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],l=n[t++],u=n[t++],h=((i&7)<<18|(o&63)<<12|(l&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],l=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|l&63)}}return e.join("")},Za={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],l=i+1<n.length,u=l?n[i+1]:0,h=i+2<n.length,f=h?n[i+2]:0,y=o>>2,w=(o&3)<<4|u>>4;let R=(u&15)<<2|f>>6,C=f&63;h||(C=64,l||(R=64)),r.push(t[y],t[w],t[R],t[C])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ya(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Lu(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],u=i<n.length?t[n.charAt(i)]:0;++i;const f=i<n.length?t[n.charAt(i)]:64;++i;const w=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||u==null||f==null||w==null)throw new xu;const R=o<<2|u>>4;if(r.push(R),f!==64){const C=u<<4&240|f>>2;if(r.push(C),w!==64){const k=f<<6&192|w;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class xu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Uu=function(n){const e=Ya(n);return Za.encodeByteArray(e,!0)},yr=function(n){return Uu(n).replace(/\./g,"")},el=function(n){try{return Za.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Fu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Bu=()=>Fu().__FIREBASE_DEFAULTS__,ju=()=>{if(typeof process>"u"||typeof Oo>"u")return;const n=Oo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},$u=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&el(n[1]);return e&&JSON.parse(e)},Br=()=>{try{return Mu()||Bu()||ju()||$u()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},tl=n=>{var e,t;return(t=(e=Br())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},zu=n=>{const e=tl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},nl=()=>{var n;return(n=Br())===null||n===void 0?void 0:n.config},rl=n=>{var e;return(e=Br())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Hu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Pn(n){return n.endsWith(".cloudworkstations.dev")}async function il(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function qu(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[yr(JSON.stringify(t)),yr(JSON.stringify(l)),""].join(".")}const gn={};function Gu(){const n={prod:[],emulator:[]};for(const e of Object.keys(gn))gn[e]?n.emulator.push(e):n.prod.push(e);return n}function Wu(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Mo=!1;function sl(n,e){if(typeof window>"u"||typeof document>"u"||!Pn(window.location.host)||gn[n]===e||gn[n]||Mo)return;gn[n]=e;function t(R){return`__firebase__banner__${R}`}const r="__firebase__banner",o=Gu().prod.length>0;function l(){const R=document.getElementById(r);R&&R.remove()}function u(R){R.style.display="flex",R.style.background="#7faaf0",R.style.position="fixed",R.style.bottom="5px",R.style.left="5px",R.style.padding=".5em",R.style.borderRadius="5px",R.style.alignItems="center"}function h(R,C){R.setAttribute("width","24"),R.setAttribute("id",C),R.setAttribute("height","24"),R.setAttribute("viewBox","0 0 24 24"),R.setAttribute("fill","none"),R.style.marginLeft="-6px"}function f(){const R=document.createElement("span");return R.style.cursor="pointer",R.style.marginLeft="16px",R.style.fontSize="24px",R.innerHTML=" &times;",R.onclick=()=>{Mo=!0,l()},R}function y(R,C){R.setAttribute("id",C),R.innerText="Learn more",R.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",R.setAttribute("target","__blank"),R.style.paddingLeft="5px",R.style.textDecoration="underline"}function w(){const R=Wu(r),C=t("text"),k=document.getElementById(C)||document.createElement("span"),M=t("learnmore"),V=document.getElementById(M)||document.createElement("a"),H=t("preprendIcon"),F=document.getElementById(H)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(R.created){const z=R.element;u(z),y(V,M);const Y=f();h(F,H),z.append(F,k,V,Y),document.body.appendChild(z)}o?(k.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
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
 */function me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ku(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())}function Qu(){var n;const e=(n=Br())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Xu(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ju(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Yu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zu(){const n=me();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function eh(){return!Qu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function th(){try{return typeof indexedDB=="object"}catch{return!1}}function nh(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
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
 */const rh="FirebaseError";class qe extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=rh,Object.setPrototypeOf(this,qe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cn.prototype.create)}}class Cn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],l=o?ih(o,r):"Error",u=`${this.serviceName}: ${l} (${i}).`;return new qe(i,u,r)}}function ih(n,e){return n.replace(sh,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const sh=/\{\$([^}]+)}/g;function oh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function vt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],l=e[i];if(Lo(o)&&Lo(l)){if(!vt(o,l))return!1}else if(o!==l)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Lo(n){return n!==null&&typeof n=="object"}/**
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
 */function kn(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ah(n,e){const t=new lh(n,e);return t.subscribe.bind(t)}class lh{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");ch(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Ai),i.error===void 0&&(i.error=Ai),i.complete===void 0&&(i.complete=Ai);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ch(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ai(){}/**
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
 */function Pe(n){return n&&n._delegate?n._delegate:n}class Et{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const gt="[DEFAULT]";/**
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
 */class uh{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Hu;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dh(e))try{this.getOrInitializeService({instanceIdentifier:gt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=gt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gt){return this.instances.has(e)}getOptions(e=gt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&l.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&e(l,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hh(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=gt){return this.component?this.component.multipleInstances?e:gt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hh(n){return n===gt?void 0:n}function dh(n){return n.instantiationMode==="EAGER"}/**
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
 */class fh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new uh(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var U;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(U||(U={}));const ph={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},gh=U.INFO,mh={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},_h=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=mh[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ts{constructor(e){this.name=e,this._logLevel=gh,this._logHandler=_h,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in U))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ph[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...e),this._logHandler(this,U.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...e),this._logHandler(this,U.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,U.INFO,...e),this._logHandler(this,U.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,U.WARN,...e),this._logHandler(this,U.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...e),this._logHandler(this,U.ERROR,...e)}}const yh=(n,e)=>e.some(t=>n instanceof t);let xo,Uo;function vh(){return xo||(xo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Eh(){return Uo||(Uo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ol=new WeakMap,Oi=new WeakMap,al=new WeakMap,Ri=new WeakMap,ns=new WeakMap;function Th(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",l)},o=()=>{t(tt(n.result)),i()},l=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",l)});return e.then(t=>{t instanceof IDBCursor&&ol.set(t,n)}).catch(()=>{}),ns.set(e,n),e}function Ih(n){if(Oi.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",l),n.removeEventListener("abort",l)},o=()=>{t(),i()},l=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",l),n.addEventListener("abort",l)});Oi.set(n,e)}let Mi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Oi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||al.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return tt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function wh(n){Mi=n(Mi)}function Ah(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(bi(this),e,...t);return al.set(r,e.sort?e.sort():[e]),tt(r)}:Eh().includes(n)?function(...e){return n.apply(bi(this),e),tt(ol.get(this))}:function(...e){return tt(n.apply(bi(this),e))}}function Rh(n){return typeof n=="function"?Ah(n):(n instanceof IDBTransaction&&Ih(n),yh(n,vh())?new Proxy(n,Mi):n)}function tt(n){if(n instanceof IDBRequest)return Th(n);if(Ri.has(n))return Ri.get(n);const e=Rh(n);return e!==n&&(Ri.set(n,e),ns.set(e,n)),e}const bi=n=>ns.get(n);function bh(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const l=indexedDB.open(n,e),u=tt(l);return r&&l.addEventListener("upgradeneeded",h=>{r(tt(l.result),h.oldVersion,h.newVersion,tt(l.transaction),h)}),t&&l.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),u}const Sh=["get","getKey","getAll","getAllKeys","count"],Ph=["put","add","delete","clear"],Si=new Map;function Fo(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Si.get(e))return Si.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Ph.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Sh.includes(t)))return;const o=async function(l,...u){const h=this.transaction(l,i?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(u.shift())),(await Promise.all([f[t](...u),i&&h.done]))[0]};return Si.set(e,o),o}wh(n=>({...n,get:(e,t,r)=>Fo(e,t)||n.get(e,t,r),has:(e,t)=>!!Fo(e,t)||n.has(e,t)}));/**
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
 */class Ch{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(kh(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function kh(n){const e=n.getComponent();return e?.type==="VERSION"}const Li="@firebase/app",Bo="0.13.0";/**
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
 */const $e=new ts("@firebase/app"),Dh="@firebase/app-compat",Vh="@firebase/analytics-compat",Nh="@firebase/analytics",Oh="@firebase/app-check-compat",Mh="@firebase/app-check",Lh="@firebase/auth",xh="@firebase/auth-compat",Uh="@firebase/database",Fh="@firebase/data-connect",Bh="@firebase/database-compat",jh="@firebase/functions",$h="@firebase/functions-compat",zh="@firebase/installations",Hh="@firebase/installations-compat",qh="@firebase/messaging",Gh="@firebase/messaging-compat",Wh="@firebase/performance",Kh="@firebase/performance-compat",Qh="@firebase/remote-config",Xh="@firebase/remote-config-compat",Jh="@firebase/storage",Yh="@firebase/storage-compat",Zh="@firebase/firestore",ed="@firebase/ai",td="@firebase/firestore-compat",nd="firebase",rd="11.8.0";/**
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
 */const xi="[DEFAULT]",id={[Li]:"fire-core",[Dh]:"fire-core-compat",[Nh]:"fire-analytics",[Vh]:"fire-analytics-compat",[Mh]:"fire-app-check",[Oh]:"fire-app-check-compat",[Lh]:"fire-auth",[xh]:"fire-auth-compat",[Uh]:"fire-rtdb",[Fh]:"fire-data-connect",[Bh]:"fire-rtdb-compat",[jh]:"fire-fn",[$h]:"fire-fn-compat",[zh]:"fire-iid",[Hh]:"fire-iid-compat",[qh]:"fire-fcm",[Gh]:"fire-fcm-compat",[Wh]:"fire-perf",[Kh]:"fire-perf-compat",[Qh]:"fire-rc",[Xh]:"fire-rc-compat",[Jh]:"fire-gcs",[Yh]:"fire-gcs-compat",[Zh]:"fire-fst",[td]:"fire-fst-compat",[ed]:"fire-vertex","fire-js":"fire-js",[nd]:"fire-js-all"};/**
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
 */const vr=new Map,sd=new Map,Ui=new Map;function jo(n,e){try{n.container.addComponent(e)}catch(t){$e.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ft(n){const e=n.name;if(Ui.has(e))return $e.debug(`There were multiple attempts to register component ${e}.`),!1;Ui.set(e,n);for(const t of vr.values())jo(t,n);for(const t of sd.values())jo(t,n);return!0}function rs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ae(n){return n==null?!1:n.settings!==void 0}/**
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
 */const od={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},nt=new Cn("app","Firebase",od);/**
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
 */class ad{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Et("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nt.create("app-deleted",{appName:this._name})}}/**
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
 */const qt=rd;function ll(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:xi,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw nt.create("bad-app-name",{appName:String(i)});if(t||(t=nl()),!t)throw nt.create("no-options");const o=vr.get(i);if(o){if(vt(t,o.options)&&vt(r,o.config))return o;throw nt.create("duplicate-app",{appName:i})}const l=new fh(i);for(const h of Ui.values())l.addComponent(h);const u=new ad(t,r,l);return vr.set(i,u),u}function cl(n=xi){const e=vr.get(n);if(!e&&n===xi&&nl())return ll();if(!e)throw nt.create("no-app",{appName:n});return e}function rt(n,e,t){var r;let i=(r=id[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const u=[`Unable to register library "${i}" with version "${e}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&u.push("and"),l&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$e.warn(u.join(" "));return}Ft(new Et(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ld="firebase-heartbeat-database",cd=1,Tn="firebase-heartbeat-store";let Pi=null;function ul(){return Pi||(Pi=bh(ld,cd,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Tn)}catch(t){console.warn(t)}}}}).catch(n=>{throw nt.create("idb-open",{originalErrorMessage:n.message})})),Pi}async function ud(n){try{const t=(await ul()).transaction(Tn),r=await t.objectStore(Tn).get(hl(n));return await t.done,r}catch(e){if(e instanceof qe)$e.warn(e.message);else{const t=nt.create("idb-get",{originalErrorMessage:e?.message});$e.warn(t.message)}}}async function $o(n,e){try{const r=(await ul()).transaction(Tn,"readwrite");await r.objectStore(Tn).put(e,hl(n)),await r.done}catch(t){if(t instanceof qe)$e.warn(t.message);else{const r=nt.create("idb-set",{originalErrorMessage:t?.message});$e.warn(r.message)}}}function hl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const hd=1024,dd=30;class fd{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new gd(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=zo();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>dd){const l=md(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){$e.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=zo(),{heartbeatsToSend:r,unsentEntries:i}=pd(this._heartbeatsCache.heartbeats),o=yr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return $e.warn(t),""}}}function zo(){return new Date().toISOString().substring(0,10)}function pd(n,e=hd){const t=[];let r=n.slice();for(const i of n){const o=t.find(l=>l.agent===i.agent);if(o){if(o.dates.push(i.date),Ho(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ho(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class gd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return th()?nh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ud(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return $o(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return $o(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ho(n){return yr(JSON.stringify({version:2,heartbeats:n})).length}function md(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function _d(n){Ft(new Et("platform-logger",e=>new Ch(e),"PRIVATE")),Ft(new Et("heartbeat",e=>new fd(e),"PRIVATE")),rt(Li,Bo,n),rt(Li,Bo,"esm2017"),rt("fire-js","")}_d("");var yd="firebase",vd="11.8.1";/**
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
 */rt(yd,vd,"app");var qo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var is;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,p){function m(){}m.prototype=p.prototype,E.D=p.prototype,E.prototype=new m,E.prototype.constructor=E,E.C=function(_,v,I){for(var g=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)g[Me-2]=arguments[Me];return p.prototype[v].apply(_,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,p,m){m||(m=0);var _=Array(16);if(typeof p=="string")for(var v=0;16>v;++v)_[v]=p.charCodeAt(m++)|p.charCodeAt(m++)<<8|p.charCodeAt(m++)<<16|p.charCodeAt(m++)<<24;else for(v=0;16>v;++v)_[v]=p[m++]|p[m++]<<8|p[m++]<<16|p[m++]<<24;p=E.g[0],m=E.g[1],v=E.g[2];var I=E.g[3],g=p+(I^m&(v^I))+_[0]+3614090360&4294967295;p=m+(g<<7&4294967295|g>>>25),g=I+(v^p&(m^v))+_[1]+3905402710&4294967295,I=p+(g<<12&4294967295|g>>>20),g=v+(m^I&(p^m))+_[2]+606105819&4294967295,v=I+(g<<17&4294967295|g>>>15),g=m+(p^v&(I^p))+_[3]+3250441966&4294967295,m=v+(g<<22&4294967295|g>>>10),g=p+(I^m&(v^I))+_[4]+4118548399&4294967295,p=m+(g<<7&4294967295|g>>>25),g=I+(v^p&(m^v))+_[5]+1200080426&4294967295,I=p+(g<<12&4294967295|g>>>20),g=v+(m^I&(p^m))+_[6]+2821735955&4294967295,v=I+(g<<17&4294967295|g>>>15),g=m+(p^v&(I^p))+_[7]+4249261313&4294967295,m=v+(g<<22&4294967295|g>>>10),g=p+(I^m&(v^I))+_[8]+1770035416&4294967295,p=m+(g<<7&4294967295|g>>>25),g=I+(v^p&(m^v))+_[9]+2336552879&4294967295,I=p+(g<<12&4294967295|g>>>20),g=v+(m^I&(p^m))+_[10]+4294925233&4294967295,v=I+(g<<17&4294967295|g>>>15),g=m+(p^v&(I^p))+_[11]+2304563134&4294967295,m=v+(g<<22&4294967295|g>>>10),g=p+(I^m&(v^I))+_[12]+1804603682&4294967295,p=m+(g<<7&4294967295|g>>>25),g=I+(v^p&(m^v))+_[13]+4254626195&4294967295,I=p+(g<<12&4294967295|g>>>20),g=v+(m^I&(p^m))+_[14]+2792965006&4294967295,v=I+(g<<17&4294967295|g>>>15),g=m+(p^v&(I^p))+_[15]+1236535329&4294967295,m=v+(g<<22&4294967295|g>>>10),g=p+(v^I&(m^v))+_[1]+4129170786&4294967295,p=m+(g<<5&4294967295|g>>>27),g=I+(m^v&(p^m))+_[6]+3225465664&4294967295,I=p+(g<<9&4294967295|g>>>23),g=v+(p^m&(I^p))+_[11]+643717713&4294967295,v=I+(g<<14&4294967295|g>>>18),g=m+(I^p&(v^I))+_[0]+3921069994&4294967295,m=v+(g<<20&4294967295|g>>>12),g=p+(v^I&(m^v))+_[5]+3593408605&4294967295,p=m+(g<<5&4294967295|g>>>27),g=I+(m^v&(p^m))+_[10]+38016083&4294967295,I=p+(g<<9&4294967295|g>>>23),g=v+(p^m&(I^p))+_[15]+3634488961&4294967295,v=I+(g<<14&4294967295|g>>>18),g=m+(I^p&(v^I))+_[4]+3889429448&4294967295,m=v+(g<<20&4294967295|g>>>12),g=p+(v^I&(m^v))+_[9]+568446438&4294967295,p=m+(g<<5&4294967295|g>>>27),g=I+(m^v&(p^m))+_[14]+3275163606&4294967295,I=p+(g<<9&4294967295|g>>>23),g=v+(p^m&(I^p))+_[3]+4107603335&4294967295,v=I+(g<<14&4294967295|g>>>18),g=m+(I^p&(v^I))+_[8]+1163531501&4294967295,m=v+(g<<20&4294967295|g>>>12),g=p+(v^I&(m^v))+_[13]+2850285829&4294967295,p=m+(g<<5&4294967295|g>>>27),g=I+(m^v&(p^m))+_[2]+4243563512&4294967295,I=p+(g<<9&4294967295|g>>>23),g=v+(p^m&(I^p))+_[7]+1735328473&4294967295,v=I+(g<<14&4294967295|g>>>18),g=m+(I^p&(v^I))+_[12]+2368359562&4294967295,m=v+(g<<20&4294967295|g>>>12),g=p+(m^v^I)+_[5]+4294588738&4294967295,p=m+(g<<4&4294967295|g>>>28),g=I+(p^m^v)+_[8]+2272392833&4294967295,I=p+(g<<11&4294967295|g>>>21),g=v+(I^p^m)+_[11]+1839030562&4294967295,v=I+(g<<16&4294967295|g>>>16),g=m+(v^I^p)+_[14]+4259657740&4294967295,m=v+(g<<23&4294967295|g>>>9),g=p+(m^v^I)+_[1]+2763975236&4294967295,p=m+(g<<4&4294967295|g>>>28),g=I+(p^m^v)+_[4]+1272893353&4294967295,I=p+(g<<11&4294967295|g>>>21),g=v+(I^p^m)+_[7]+4139469664&4294967295,v=I+(g<<16&4294967295|g>>>16),g=m+(v^I^p)+_[10]+3200236656&4294967295,m=v+(g<<23&4294967295|g>>>9),g=p+(m^v^I)+_[13]+681279174&4294967295,p=m+(g<<4&4294967295|g>>>28),g=I+(p^m^v)+_[0]+3936430074&4294967295,I=p+(g<<11&4294967295|g>>>21),g=v+(I^p^m)+_[3]+3572445317&4294967295,v=I+(g<<16&4294967295|g>>>16),g=m+(v^I^p)+_[6]+76029189&4294967295,m=v+(g<<23&4294967295|g>>>9),g=p+(m^v^I)+_[9]+3654602809&4294967295,p=m+(g<<4&4294967295|g>>>28),g=I+(p^m^v)+_[12]+3873151461&4294967295,I=p+(g<<11&4294967295|g>>>21),g=v+(I^p^m)+_[15]+530742520&4294967295,v=I+(g<<16&4294967295|g>>>16),g=m+(v^I^p)+_[2]+3299628645&4294967295,m=v+(g<<23&4294967295|g>>>9),g=p+(v^(m|~I))+_[0]+4096336452&4294967295,p=m+(g<<6&4294967295|g>>>26),g=I+(m^(p|~v))+_[7]+1126891415&4294967295,I=p+(g<<10&4294967295|g>>>22),g=v+(p^(I|~m))+_[14]+2878612391&4294967295,v=I+(g<<15&4294967295|g>>>17),g=m+(I^(v|~p))+_[5]+4237533241&4294967295,m=v+(g<<21&4294967295|g>>>11),g=p+(v^(m|~I))+_[12]+1700485571&4294967295,p=m+(g<<6&4294967295|g>>>26),g=I+(m^(p|~v))+_[3]+2399980690&4294967295,I=p+(g<<10&4294967295|g>>>22),g=v+(p^(I|~m))+_[10]+4293915773&4294967295,v=I+(g<<15&4294967295|g>>>17),g=m+(I^(v|~p))+_[1]+2240044497&4294967295,m=v+(g<<21&4294967295|g>>>11),g=p+(v^(m|~I))+_[8]+1873313359&4294967295,p=m+(g<<6&4294967295|g>>>26),g=I+(m^(p|~v))+_[15]+4264355552&4294967295,I=p+(g<<10&4294967295|g>>>22),g=v+(p^(I|~m))+_[6]+2734768916&4294967295,v=I+(g<<15&4294967295|g>>>17),g=m+(I^(v|~p))+_[13]+1309151649&4294967295,m=v+(g<<21&4294967295|g>>>11),g=p+(v^(m|~I))+_[4]+4149444226&4294967295,p=m+(g<<6&4294967295|g>>>26),g=I+(m^(p|~v))+_[11]+3174756917&4294967295,I=p+(g<<10&4294967295|g>>>22),g=v+(p^(I|~m))+_[2]+718787259&4294967295,v=I+(g<<15&4294967295|g>>>17),g=m+(I^(v|~p))+_[9]+3951481745&4294967295,E.g[0]=E.g[0]+p&4294967295,E.g[1]=E.g[1]+(v+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+v&4294967295,E.g[3]=E.g[3]+I&4294967295}r.prototype.u=function(E,p){p===void 0&&(p=E.length);for(var m=p-this.blockSize,_=this.B,v=this.h,I=0;I<p;){if(v==0)for(;I<=m;)i(this,E,I),I+=this.blockSize;if(typeof E=="string"){for(;I<p;)if(_[v++]=E.charCodeAt(I++),v==this.blockSize){i(this,_),v=0;break}}else for(;I<p;)if(_[v++]=E[I++],v==this.blockSize){i(this,_),v=0;break}}this.h=v,this.o+=p},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var p=1;p<E.length-8;++p)E[p]=0;var m=8*this.o;for(p=E.length-8;p<E.length;++p)E[p]=m&255,m/=256;for(this.u(E),E=Array(16),p=m=0;4>p;++p)for(var _=0;32>_;_+=8)E[m++]=this.g[p]>>>_&255;return E};function o(E,p){var m=u;return Object.prototype.hasOwnProperty.call(m,E)?m[E]:m[E]=p(E)}function l(E,p){this.h=p;for(var m=[],_=!0,v=E.length-1;0<=v;v--){var I=E[v]|0;_&&I==p||(m[v]=I,_=!1)}this.g=m}var u={};function h(E){return-128<=E&&128>E?o(E,function(p){return new l([p|0],0>p?-1:0)}):new l([E|0],0>E?-1:0)}function f(E){if(isNaN(E)||!isFinite(E))return w;if(0>E)return V(f(-E));for(var p=[],m=1,_=0;E>=m;_++)p[_]=E/m|0,m*=4294967296;return new l(p,0)}function y(E,p){if(E.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(E.charAt(0)=="-")return V(y(E.substring(1),p));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=f(Math.pow(p,8)),_=w,v=0;v<E.length;v+=8){var I=Math.min(8,E.length-v),g=parseInt(E.substring(v,v+I),p);8>I?(I=f(Math.pow(p,I)),_=_.j(I).add(f(g))):(_=_.j(m),_=_.add(f(g)))}return _}var w=h(0),R=h(1),C=h(16777216);n=l.prototype,n.m=function(){if(M(this))return-V(this).m();for(var E=0,p=1,m=0;m<this.g.length;m++){var _=this.i(m);E+=(0<=_?_:4294967296+_)*p,p*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(k(this))return"0";if(M(this))return"-"+V(this).toString(E);for(var p=f(Math.pow(E,6)),m=this,_="";;){var v=Y(m,p).g;m=H(m,v.j(p));var I=((0<m.g.length?m.g[0]:m.h)>>>0).toString(E);if(m=v,k(m))return I+_;for(;6>I.length;)I="0"+I;_=I+_}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function k(E){if(E.h!=0)return!1;for(var p=0;p<E.g.length;p++)if(E.g[p]!=0)return!1;return!0}function M(E){return E.h==-1}n.l=function(E){return E=H(this,E),M(E)?-1:k(E)?0:1};function V(E){for(var p=E.g.length,m=[],_=0;_<p;_++)m[_]=~E.g[_];return new l(m,~E.h).add(R)}n.abs=function(){return M(this)?V(this):this},n.add=function(E){for(var p=Math.max(this.g.length,E.g.length),m=[],_=0,v=0;v<=p;v++){var I=_+(this.i(v)&65535)+(E.i(v)&65535),g=(I>>>16)+(this.i(v)>>>16)+(E.i(v)>>>16);_=g>>>16,I&=65535,g&=65535,m[v]=g<<16|I}return new l(m,m[m.length-1]&-2147483648?-1:0)};function H(E,p){return E.add(V(p))}n.j=function(E){if(k(this)||k(E))return w;if(M(this))return M(E)?V(this).j(V(E)):V(V(this).j(E));if(M(E))return V(this.j(V(E)));if(0>this.l(C)&&0>E.l(C))return f(this.m()*E.m());for(var p=this.g.length+E.g.length,m=[],_=0;_<2*p;_++)m[_]=0;for(_=0;_<this.g.length;_++)for(var v=0;v<E.g.length;v++){var I=this.i(_)>>>16,g=this.i(_)&65535,Me=E.i(v)>>>16,Qt=E.i(v)&65535;m[2*_+2*v]+=g*Qt,F(m,2*_+2*v),m[2*_+2*v+1]+=I*Qt,F(m,2*_+2*v+1),m[2*_+2*v+1]+=g*Me,F(m,2*_+2*v+1),m[2*_+2*v+2]+=I*Me,F(m,2*_+2*v+2)}for(_=0;_<p;_++)m[_]=m[2*_+1]<<16|m[2*_];for(_=p;_<2*p;_++)m[_]=0;return new l(m,0)};function F(E,p){for(;(E[p]&65535)!=E[p];)E[p+1]+=E[p]>>>16,E[p]&=65535,p++}function z(E,p){this.g=E,this.h=p}function Y(E,p){if(k(p))throw Error("division by zero");if(k(E))return new z(w,w);if(M(E))return p=Y(V(E),p),new z(V(p.g),V(p.h));if(M(p))return p=Y(E,V(p)),new z(V(p.g),p.h);if(30<E.g.length){if(M(E)||M(p))throw Error("slowDivide_ only works with positive integers.");for(var m=R,_=p;0>=_.l(E);)m=Ce(m),_=Ce(_);var v=ee(m,1),I=ee(_,1);for(_=ee(_,2),m=ee(m,2);!k(_);){var g=I.add(_);0>=g.l(E)&&(v=v.add(m),I=g),_=ee(_,1),m=ee(m,1)}return p=H(E,v.j(p)),new z(v,p)}for(v=w;0<=E.l(p);){for(m=Math.max(1,Math.floor(E.m()/p.m())),_=Math.ceil(Math.log(m)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),I=f(m),g=I.j(p);M(g)||0<g.l(E);)m-=_,I=f(m),g=I.j(p);k(I)&&(I=R),v=v.add(I),E=H(E,g)}return new z(v,E)}n.A=function(E){return Y(this,E).h},n.and=function(E){for(var p=Math.max(this.g.length,E.g.length),m=[],_=0;_<p;_++)m[_]=this.i(_)&E.i(_);return new l(m,this.h&E.h)},n.or=function(E){for(var p=Math.max(this.g.length,E.g.length),m=[],_=0;_<p;_++)m[_]=this.i(_)|E.i(_);return new l(m,this.h|E.h)},n.xor=function(E){for(var p=Math.max(this.g.length,E.g.length),m=[],_=0;_<p;_++)m[_]=this.i(_)^E.i(_);return new l(m,this.h^E.h)};function Ce(E){for(var p=E.g.length+1,m=[],_=0;_<p;_++)m[_]=E.i(_)<<1|E.i(_-1)>>>31;return new l(m,E.h)}function ee(E,p){var m=p>>5;p%=32;for(var _=E.g.length-m,v=[],I=0;I<_;I++)v[I]=0<p?E.i(I+m)>>>p|E.i(I+m+1)<<32-p:E.i(I+m);return new l(v,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=f,l.fromString=y,is=l}).apply(typeof qo<"u"?qo:typeof self<"u"?self:typeof window<"u"?window:{});var ir=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dl,pn,fl,ur,Fi,pl,gl,ml;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,c){return s==Array.prototype||s==Object.prototype||(s[a]=c.value),s};function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof ir=="object"&&ir];for(var a=0;a<s.length;++a){var c=s[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=t(this);function i(s,a){if(a)e:{var c=r;s=s.split(".");for(var d=0;d<s.length-1;d++){var T=s[d];if(!(T in c))break e;c=c[T]}s=s[s.length-1],d=c[s],a=a(d),a!=d&&a!=null&&e(c,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var c=0,d=!1,T={next:function(){if(!d&&c<s.length){var A=c++;return{value:a(A,s[A]),done:!1}}return d=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function h(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function f(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function y(s,a,c){return s.call.apply(s.bind,arguments)}function w(s,a,c){if(!s)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,d),s.apply(a,T)}}return function(){return s.apply(a,arguments)}}function R(s,a,c){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:w,R.apply(null,arguments)}function C(s,a){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function k(s,a){function c(){}c.prototype=a.prototype,s.aa=a.prototype,s.prototype=new c,s.prototype.constructor=s,s.Qb=function(d,T,A){for(var P=Array(arguments.length-2),q=2;q<arguments.length;q++)P[q-2]=arguments[q];return a.prototype[T].apply(d,P)}}function M(s){const a=s.length;if(0<a){const c=Array(a);for(let d=0;d<a;d++)c[d]=s[d];return c}return[]}function V(s,a){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(h(d)){const T=s.length||0,A=d.length||0;s.length=T+A;for(let P=0;P<A;P++)s[T+P]=d[P]}else s.push(d)}}class H{constructor(a,c){this.i=a,this.j=c,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function F(s){return/^[\s\xa0]*$/.test(s)}function z(){var s=u.navigator;return s&&(s=s.userAgent)?s:""}function Y(s){return Y[" "](s),s}Y[" "]=function(){};var Ce=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function ee(s,a,c){for(const d in s)a.call(c,s[d],d,s)}function E(s,a){for(const c in s)a.call(void 0,s[c],c,s)}function p(s){const a={};for(const c in s)a[c]=s[c];return a}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(s,a){let c,d;for(let T=1;T<arguments.length;T++){d=arguments[T];for(c in d)s[c]=d[c];for(let A=0;A<m.length;A++)c=m[A],Object.prototype.hasOwnProperty.call(d,c)&&(s[c]=d[c])}}function v(s){var a=1;s=s.split(":");const c=[];for(;0<a&&s.length;)c.push(s.shift()),a--;return s.length&&c.push(s.join(":")),c}function I(s){u.setTimeout(()=>{throw s},0)}function g(){var s=ei;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class Me{constructor(){this.h=this.g=null}add(a,c){const d=Qt.get();d.set(a,c),this.h?this.h.next=d:this.g=d,this.h=d}}var Qt=new H(()=>new eu,s=>s.reset());class eu{constructor(){this.next=this.g=this.h=null}set(a,c){this.h=a,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Xt,Jt=!1,ei=new Me,Ns=()=>{const s=u.Promise.resolve(void 0);Xt=()=>{s.then(tu)}};var tu=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(c){I(c)}var a=Qt;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}Jt=!1};function Ge(){this.s=this.s,this.C=this.C}Ge.prototype.s=!1,Ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ce(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ce.prototype.h=function(){this.defaultPrevented=!0};var nu=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};u.addEventListener("test",c,a),u.removeEventListener("test",c,a)}catch{}return s}();function Yt(s,a){if(ce.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var c=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(Ce){e:{try{Y(a.nodeName);var T=!0;break e}catch{}T=!1}T||(a=null)}}else c=="mouseover"?a=s.fromElement:c=="mouseout"&&(a=s.toElement);this.relatedTarget=a,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:ru[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Yt.aa.h.call(this)}}k(Yt,ce);var ru={2:"touch",3:"pen",4:"mouse"};Yt.prototype.h=function(){Yt.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Fn="closure_listenable_"+(1e6*Math.random()|0),iu=0;function su(s,a,c,d,T){this.listener=s,this.proxy=null,this.src=a,this.type=c,this.capture=!!d,this.ha=T,this.key=++iu,this.da=this.fa=!1}function Bn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function jn(s){this.src=s,this.g={},this.h=0}jn.prototype.add=function(s,a,c,d,T){var A=s.toString();s=this.g[A],s||(s=this.g[A]=[],this.h++);var P=ni(s,a,d,T);return-1<P?(a=s[P],c||(a.fa=!1)):(a=new su(a,this.src,A,!!d,T),a.fa=c,s.push(a)),a};function ti(s,a){var c=a.type;if(c in s.g){var d=s.g[c],T=Array.prototype.indexOf.call(d,a,void 0),A;(A=0<=T)&&Array.prototype.splice.call(d,T,1),A&&(Bn(a),s.g[c].length==0&&(delete s.g[c],s.h--))}}function ni(s,a,c,d){for(var T=0;T<s.length;++T){var A=s[T];if(!A.da&&A.listener==a&&A.capture==!!c&&A.ha==d)return T}return-1}var ri="closure_lm_"+(1e6*Math.random()|0),ii={};function Os(s,a,c,d,T){if(Array.isArray(a)){for(var A=0;A<a.length;A++)Os(s,a[A],c,d,T);return null}return c=xs(c),s&&s[Fn]?s.K(a,c,f(d)?!!d.capture:!1,T):ou(s,a,c,!1,d,T)}function ou(s,a,c,d,T,A){if(!a)throw Error("Invalid event type");var P=f(T)?!!T.capture:!!T,q=oi(s);if(q||(s[ri]=q=new jn(s)),c=q.add(a,c,d,P,A),c.proxy)return c;if(d=au(),c.proxy=d,d.src=s,d.listener=c,s.addEventListener)nu||(T=P),T===void 0&&(T=!1),s.addEventListener(a.toString(),d,T);else if(s.attachEvent)s.attachEvent(Ls(a.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function au(){function s(c){return a.call(s.src,s.listener,c)}const a=lu;return s}function Ms(s,a,c,d,T){if(Array.isArray(a))for(var A=0;A<a.length;A++)Ms(s,a[A],c,d,T);else d=f(d)?!!d.capture:!!d,c=xs(c),s&&s[Fn]?(s=s.i,a=String(a).toString(),a in s.g&&(A=s.g[a],c=ni(A,c,d,T),-1<c&&(Bn(A[c]),Array.prototype.splice.call(A,c,1),A.length==0&&(delete s.g[a],s.h--)))):s&&(s=oi(s))&&(a=s.g[a.toString()],s=-1,a&&(s=ni(a,c,d,T)),(c=-1<s?a[s]:null)&&si(c))}function si(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[Fn])ti(a.i,s);else{var c=s.type,d=s.proxy;a.removeEventListener?a.removeEventListener(c,d,s.capture):a.detachEvent?a.detachEvent(Ls(c),d):a.addListener&&a.removeListener&&a.removeListener(d),(c=oi(a))?(ti(c,s),c.h==0&&(c.src=null,a[ri]=null)):Bn(s)}}}function Ls(s){return s in ii?ii[s]:ii[s]="on"+s}function lu(s,a){if(s.da)s=!0;else{a=new Yt(a,this);var c=s.listener,d=s.ha||s.src;s.fa&&si(s),s=c.call(d,a)}return s}function oi(s){return s=s[ri],s instanceof jn?s:null}var ai="__closure_events_fn_"+(1e9*Math.random()>>>0);function xs(s){return typeof s=="function"?s:(s[ai]||(s[ai]=function(a){return s.handleEvent(a)}),s[ai])}function ue(){Ge.call(this),this.i=new jn(this),this.M=this,this.F=null}k(ue,Ge),ue.prototype[Fn]=!0,ue.prototype.removeEventListener=function(s,a,c,d){Ms(this,s,a,c,d)};function _e(s,a){var c,d=s.F;if(d)for(c=[];d;d=d.F)c.push(d);if(s=s.M,d=a.type||a,typeof a=="string")a=new ce(a,s);else if(a instanceof ce)a.target=a.target||s;else{var T=a;a=new ce(d,s),_(a,T)}if(T=!0,c)for(var A=c.length-1;0<=A;A--){var P=a.g=c[A];T=$n(P,d,!0,a)&&T}if(P=a.g=s,T=$n(P,d,!0,a)&&T,T=$n(P,d,!1,a)&&T,c)for(A=0;A<c.length;A++)P=a.g=c[A],T=$n(P,d,!1,a)&&T}ue.prototype.N=function(){if(ue.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var c=s.g[a],d=0;d<c.length;d++)Bn(c[d]);delete s.g[a],s.h--}}this.F=null},ue.prototype.K=function(s,a,c,d){return this.i.add(String(s),a,!1,c,d)},ue.prototype.L=function(s,a,c,d){return this.i.add(String(s),a,!0,c,d)};function $n(s,a,c,d){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var T=!0,A=0;A<a.length;++A){var P=a[A];if(P&&!P.da&&P.capture==c){var q=P.listener,ie=P.ha||P.src;P.fa&&ti(s.i,P),T=q.call(ie,d)!==!1&&T}}return T&&!d.defaultPrevented}function Us(s,a,c){if(typeof s=="function")c&&(s=R(s,c));else if(s&&typeof s.handleEvent=="function")s=R(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:u.setTimeout(s,a||0)}function Fs(s){s.g=Us(()=>{s.g=null,s.i&&(s.i=!1,Fs(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class cu extends Ge{constructor(a,c){super(),this.m=a,this.l=c,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Fs(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zt(s){Ge.call(this),this.h=s,this.g={}}k(Zt,Ge);var Bs=[];function js(s){ee(s.g,function(a,c){this.g.hasOwnProperty(c)&&si(a)},s),s.g={}}Zt.prototype.N=function(){Zt.aa.N.call(this),js(this)},Zt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var li=u.JSON.stringify,uu=u.JSON.parse,hu=class{stringify(s){return u.JSON.stringify(s,void 0)}parse(s){return u.JSON.parse(s,void 0)}};function ci(){}ci.prototype.h=null;function $s(s){return s.h||(s.h=s.i())}function zs(){}var en={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ui(){ce.call(this,"d")}k(ui,ce);function hi(){ce.call(this,"c")}k(hi,ce);var ht={},Hs=null;function zn(){return Hs=Hs||new ue}ht.La="serverreachability";function qs(s){ce.call(this,ht.La,s)}k(qs,ce);function tn(s){const a=zn();_e(a,new qs(a))}ht.STAT_EVENT="statevent";function Gs(s,a){ce.call(this,ht.STAT_EVENT,s),this.stat=a}k(Gs,ce);function ye(s){const a=zn();_e(a,new Gs(a,s))}ht.Ma="timingevent";function Ws(s,a){ce.call(this,ht.Ma,s),this.size=a}k(Ws,ce);function nn(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){s()},a)}function rn(){this.g=!0}rn.prototype.xa=function(){this.g=!1};function du(s,a,c,d,T,A){s.info(function(){if(s.g)if(A)for(var P="",q=A.split("&"),ie=0;ie<q.length;ie++){var $=q[ie].split("=");if(1<$.length){var he=$[0];$=$[1];var de=he.split("_");P=2<=de.length&&de[1]=="type"?P+(he+"="+$+"&"):P+(he+"=redacted&")}}else P=null;else P=A;return"XMLHTTP REQ ("+d+") [attempt "+T+"]: "+a+`
`+c+`
`+P})}function fu(s,a,c,d,T,A,P){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+T+"]: "+a+`
`+c+`
`+A+" "+P})}function Pt(s,a,c,d){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+gu(s,c)+(d?" "+d:"")})}function pu(s,a){s.info(function(){return"TIMEOUT: "+a})}rn.prototype.info=function(){};function gu(s,a){if(!s.g)return a;if(!a)return null;try{var c=JSON.parse(a);if(c){for(s=0;s<c.length;s++)if(Array.isArray(c[s])){var d=c[s];if(!(2>d.length)){var T=d[1];if(Array.isArray(T)&&!(1>T.length)){var A=T[0];if(A!="noop"&&A!="stop"&&A!="close")for(var P=1;P<T.length;P++)T[P]=""}}}}return li(c)}catch{return a}}var Hn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ks={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},di;function qn(){}k(qn,ci),qn.prototype.g=function(){return new XMLHttpRequest},qn.prototype.i=function(){return{}},di=new qn;function We(s,a,c,d){this.j=s,this.i=a,this.l=c,this.R=d||1,this.U=new Zt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Qs}function Qs(){this.i=null,this.g="",this.h=!1}var Xs={},fi={};function pi(s,a,c){s.L=1,s.v=Qn(Le(a)),s.m=c,s.P=!0,Js(s,null)}function Js(s,a){s.F=Date.now(),Gn(s),s.A=Le(s.v);var c=s.A,d=s.R;Array.isArray(d)||(d=[String(d)]),ho(c.i,"t",d),s.C=0,c=s.j.J,s.h=new Qs,s.g=ko(s.j,c?a:null,!s.m),0<s.O&&(s.M=new cu(R(s.Y,s,s.g),s.O)),a=s.U,c=s.g,d=s.ca;var T="readystatechange";Array.isArray(T)||(T&&(Bs[0]=T.toString()),T=Bs);for(var A=0;A<T.length;A++){var P=Os(c,T[A],d||a.handleEvent,!1,a.h||a);if(!P)break;a.g[P.key]=P}a=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),tn(),du(s.i,s.u,s.A,s.l,s.R,s.m)}We.prototype.ca=function(s){s=s.target;const a=this.M;a&&xe(s)==3?a.j():this.Y(s)},We.prototype.Y=function(s){try{if(s==this.g)e:{const de=xe(this.g);var a=this.g.Ba();const Dt=this.g.Z();if(!(3>de)&&(de!=3||this.g&&(this.h.h||this.g.oa()||vo(this.g)))){this.J||de!=4||a==7||(a==8||0>=Dt?tn(3):tn(2)),gi(this);var c=this.g.Z();this.X=c;t:if(Ys(this)){var d=vo(this.g);s="";var T=d.length,A=xe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){dt(this),sn(this);var P="";break t}this.h.i=new u.TextDecoder}for(a=0;a<T;a++)this.h.h=!0,s+=this.h.i.decode(d[a],{stream:!(A&&a==T-1)});d.length=0,this.h.g+=s,this.C=0,P=this.h.g}else P=this.g.oa();if(this.o=c==200,fu(this.i,this.u,this.A,this.l,this.R,de,c),this.o){if(this.T&&!this.K){t:{if(this.g){var q,ie=this.g;if((q=ie.g?ie.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(q)){var $=q;break t}}$=null}if(c=$)Pt(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,mi(this,c);else{this.o=!1,this.s=3,ye(12),dt(this),sn(this);break e}}if(this.P){c=!0;let Ie;for(;!this.J&&this.C<P.length;)if(Ie=mu(this,P),Ie==fi){de==4&&(this.s=4,ye(14),c=!1),Pt(this.i,this.l,null,"[Incomplete Response]");break}else if(Ie==Xs){this.s=4,ye(15),Pt(this.i,this.l,P,"[Invalid Chunk]"),c=!1;break}else Pt(this.i,this.l,Ie,null),mi(this,Ie);if(Ys(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),de!=4||P.length!=0||this.h.h||(this.s=1,ye(16),c=!1),this.o=this.o&&c,!c)Pt(this.i,this.l,P,"[Invalid Chunked Response]"),dt(this),sn(this);else if(0<P.length&&!this.W){this.W=!0;var he=this.j;he.g==this&&he.ba&&!he.M&&(he.j.info("Great, no buffering proxy detected. Bytes received: "+P.length),Ii(he),he.M=!0,ye(11))}}else Pt(this.i,this.l,P,null),mi(this,P);de==4&&dt(this),this.o&&!this.J&&(de==4?bo(this.j,this):(this.o=!1,Gn(this)))}else Nu(this.g),c==400&&0<P.indexOf("Unknown SID")?(this.s=3,ye(12)):(this.s=0,ye(13)),dt(this),sn(this)}}}catch{}finally{}};function Ys(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function mu(s,a){var c=s.C,d=a.indexOf(`
`,c);return d==-1?fi:(c=Number(a.substring(c,d)),isNaN(c)?Xs:(d+=1,d+c>a.length?fi:(a=a.slice(d,d+c),s.C=d+c,a)))}We.prototype.cancel=function(){this.J=!0,dt(this)};function Gn(s){s.S=Date.now()+s.I,Zs(s,s.I)}function Zs(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=nn(R(s.ba,s),a)}function gi(s){s.B&&(u.clearTimeout(s.B),s.B=null)}We.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(pu(this.i,this.A),this.L!=2&&(tn(),ye(17)),dt(this),this.s=2,sn(this)):Zs(this,this.S-s)};function sn(s){s.j.G==0||s.J||bo(s.j,s)}function dt(s){gi(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,js(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function mi(s,a){try{var c=s.j;if(c.G!=0&&(c.g==s||_i(c.h,s))){if(!s.K&&_i(c.h,s)&&c.G==3){try{var d=c.Da.g.parse(a)}catch{d=null}if(Array.isArray(d)&&d.length==3){var T=d;if(T[0]==0){e:if(!c.u){if(c.g)if(c.g.F+3e3<s.F)tr(c),Zn(c);else break e;Ti(c),ye(18)}}else c.za=T[1],0<c.za-c.T&&37500>T[2]&&c.F&&c.v==0&&!c.C&&(c.C=nn(R(c.Za,c),6e3));if(1>=no(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else pt(c,11)}else if((s.K||c.g==s)&&tr(c),!F(a))for(T=c.Da.g.parse(a),a=0;a<T.length;a++){let $=T[a];if(c.T=$[0],$=$[1],c.G==2)if($[0]=="c"){c.K=$[1],c.ia=$[2];const he=$[3];he!=null&&(c.la=he,c.j.info("VER="+c.la));const de=$[4];de!=null&&(c.Aa=de,c.j.info("SVER="+c.Aa));const Dt=$[5];Dt!=null&&typeof Dt=="number"&&0<Dt&&(d=1.5*Dt,c.L=d,c.j.info("backChannelRequestTimeoutMs_="+d)),d=c;const Ie=s.g;if(Ie){const rr=Ie.g?Ie.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(rr){var A=d.h;A.g||rr.indexOf("spdy")==-1&&rr.indexOf("quic")==-1&&rr.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(yi(A,A.h),A.h=null))}if(d.D){const wi=Ie.g?Ie.g.getResponseHeader("X-HTTP-Session-Id"):null;wi&&(d.ya=wi,W(d.I,d.D,wi))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-s.F,c.j.info("Handshake RTT: "+c.R+"ms")),d=c;var P=s;if(d.qa=Co(d,d.J?d.ia:null,d.W),P.K){ro(d.h,P);var q=P,ie=d.L;ie&&(q.I=ie),q.B&&(gi(q),Gn(q)),d.g=P}else Ao(d);0<c.i.length&&er(c)}else $[0]!="stop"&&$[0]!="close"||pt(c,7);else c.G==3&&($[0]=="stop"||$[0]=="close"?$[0]=="stop"?pt(c,7):Ei(c):$[0]!="noop"&&c.l&&c.l.ta($),c.v=0)}}tn(4)}catch{}}var _u=class{constructor(s,a){this.g=s,this.map=a}};function eo(s){this.l=s||10,u.PerformanceNavigationTiming?(s=u.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function to(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function no(s){return s.h?1:s.g?s.g.size:0}function _i(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function yi(s,a){s.g?s.g.add(a):s.h=a}function ro(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}eo.prototype.cancel=function(){if(this.i=io(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function io(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const c of s.g.values())a=a.concat(c.D);return a}return M(s.i)}function yu(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var a=[],c=s.length,d=0;d<c;d++)a.push(s[d]);return a}a=[],c=0;for(d in s)a[c++]=s[d];return a}function vu(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var a=[];s=s.length;for(var c=0;c<s;c++)a.push(c);return a}a=[],c=0;for(const d in s)a[c++]=d;return a}}}function so(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var c=vu(s),d=yu(s),T=d.length,A=0;A<T;A++)a.call(void 0,d[A],c&&c[A],s)}var oo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Eu(s,a){if(s){s=s.split("&");for(var c=0;c<s.length;c++){var d=s[c].indexOf("="),T=null;if(0<=d){var A=s[c].substring(0,d);T=s[c].substring(d+1)}else A=s[c];a(A,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function ft(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof ft){this.h=s.h,Wn(this,s.j),this.o=s.o,this.g=s.g,Kn(this,s.s),this.l=s.l;var a=s.i,c=new ln;c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),ao(this,c),this.m=s.m}else s&&(a=String(s).match(oo))?(this.h=!1,Wn(this,a[1]||"",!0),this.o=on(a[2]||""),this.g=on(a[3]||"",!0),Kn(this,a[4]),this.l=on(a[5]||"",!0),ao(this,a[6]||"",!0),this.m=on(a[7]||"")):(this.h=!1,this.i=new ln(null,this.h))}ft.prototype.toString=function(){var s=[],a=this.j;a&&s.push(an(a,lo,!0),":");var c=this.g;return(c||a=="file")&&(s.push("//"),(a=this.o)&&s.push(an(a,lo,!0),"@"),s.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&s.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(an(c,c.charAt(0)=="/"?wu:Iu,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",an(c,Ru)),s.join("")};function Le(s){return new ft(s)}function Wn(s,a,c){s.j=c?on(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function Kn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function ao(s,a,c){a instanceof ln?(s.i=a,bu(s.i,s.h)):(c||(a=an(a,Au)),s.i=new ln(a,s.h))}function W(s,a,c){s.i.set(a,c)}function Qn(s){return W(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function on(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function an(s,a,c){return typeof s=="string"?(s=encodeURI(s).replace(a,Tu),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Tu(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var lo=/[#\/\?@]/g,Iu=/[#\?:]/g,wu=/[#\?]/g,Au=/[#\?@]/g,Ru=/#/g;function ln(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Ke(s){s.g||(s.g=new Map,s.h=0,s.i&&Eu(s.i,function(a,c){s.add(decodeURIComponent(a.replace(/\+/g," ")),c)}))}n=ln.prototype,n.add=function(s,a){Ke(this),this.i=null,s=Ct(this,s);var c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(a),this.h+=1,this};function co(s,a){Ke(s),a=Ct(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function uo(s,a){return Ke(s),a=Ct(s,a),s.g.has(a)}n.forEach=function(s,a){Ke(this),this.g.forEach(function(c,d){c.forEach(function(T){s.call(a,T,d,this)},this)},this)},n.na=function(){Ke(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),c=[];for(let d=0;d<a.length;d++){const T=s[d];for(let A=0;A<T.length;A++)c.push(a[d])}return c},n.V=function(s){Ke(this);let a=[];if(typeof s=="string")uo(this,s)&&(a=a.concat(this.g.get(Ct(this,s))));else{s=Array.from(this.g.values());for(let c=0;c<s.length;c++)a=a.concat(s[c])}return a},n.set=function(s,a){return Ke(this),this.i=null,s=Ct(this,s),uo(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function ho(s,a,c){co(s,a),0<c.length&&(s.i=null,s.g.set(Ct(s,a),M(c)),s.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var c=0;c<a.length;c++){var d=a[c];const A=encodeURIComponent(String(d)),P=this.V(d);for(d=0;d<P.length;d++){var T=A;P[d]!==""&&(T+="="+encodeURIComponent(String(P[d]))),s.push(T)}}return this.i=s.join("&")};function Ct(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function bu(s,a){a&&!s.j&&(Ke(s),s.i=null,s.g.forEach(function(c,d){var T=d.toLowerCase();d!=T&&(co(this,d),ho(this,T,c))},s)),s.j=a}function Su(s,a){const c=new rn;if(u.Image){const d=new Image;d.onload=C(Qe,c,"TestLoadImage: loaded",!0,a,d),d.onerror=C(Qe,c,"TestLoadImage: error",!1,a,d),d.onabort=C(Qe,c,"TestLoadImage: abort",!1,a,d),d.ontimeout=C(Qe,c,"TestLoadImage: timeout",!1,a,d),u.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else a(!1)}function Pu(s,a){const c=new rn,d=new AbortController,T=setTimeout(()=>{d.abort(),Qe(c,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:d.signal}).then(A=>{clearTimeout(T),A.ok?Qe(c,"TestPingServer: ok",!0,a):Qe(c,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),Qe(c,"TestPingServer: error",!1,a)})}function Qe(s,a,c,d,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),d(c)}catch{}}function Cu(){this.g=new hu}function ku(s,a,c){const d=c||"";try{so(s,function(T,A){let P=T;f(T)&&(P=li(T)),a.push(d+A+"="+encodeURIComponent(P))})}catch(T){throw a.push(d+"type="+encodeURIComponent("_badmap")),T}}function Xn(s){this.l=s.Ub||null,this.j=s.eb||!1}k(Xn,ci),Xn.prototype.g=function(){return new Jn(this.l,this.j)},Xn.prototype.i=function(s){return function(){return s}}({});function Jn(s,a){ue.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Jn,ue),n=Jn.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,un(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||u).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,cn(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,un(this)),this.g&&(this.readyState=3,un(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;fo(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function fo(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?cn(this):un(this),this.readyState==3&&fo(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,cn(this))},n.Qa=function(s){this.g&&(this.response=s,cn(this))},n.ga=function(){this.g&&cn(this)};function cn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,un(s)}n.setRequestHeader=function(s,a){this.u.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var c=a.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=a.next();return s.join(`\r
`)};function un(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Jn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function po(s){let a="";return ee(s,function(c,d){a+=d,a+=":",a+=c,a+=`\r
`}),a}function vi(s,a,c){e:{for(d in c){var d=!1;break e}d=!0}d||(c=po(c),typeof s=="string"?c!=null&&encodeURIComponent(String(c)):W(s,a,c))}function Q(s){ue.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Q,ue);var Du=/^https?$/i,Vu=["POST","PUT"];n=Q.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,a,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():di.g(),this.v=this.o?$s(this.o):$s(di),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(A){go(this,A);return}if(s=c||"",c=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var T in d)c.set(T,d[T]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const A of d.keys())c.set(A,d.get(A));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(A=>A.toLowerCase()=="content-type"),T=u.FormData&&s instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Vu,a,void 0))||d||T||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,P]of c)this.g.setRequestHeader(A,P);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{yo(this),this.u=!0,this.g.send(s),this.u=!1}catch(A){go(this,A)}};function go(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,mo(s),Yn(s)}function mo(s){s.A||(s.A=!0,_e(s,"complete"),_e(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,_e(this,"complete"),_e(this,"abort"),Yn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Yn(this,!0)),Q.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?_o(this):this.bb())},n.bb=function(){_o(this)};function _o(s){if(s.h&&typeof l<"u"&&(!s.v[1]||xe(s)!=4||s.Z()!=2)){if(s.u&&xe(s)==4)Us(s.Ea,0,s);else if(_e(s,"readystatechange"),xe(s)==4){s.h=!1;try{const P=s.Z();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break e;default:a=!1}var c;if(!(c=a)){var d;if(d=P===0){var T=String(s.D).match(oo)[1]||null;!T&&u.self&&u.self.location&&(T=u.self.location.protocol.slice(0,-1)),d=!Du.test(T?T.toLowerCase():"")}c=d}if(c)_e(s,"complete"),_e(s,"success");else{s.m=6;try{var A=2<xe(s)?s.g.statusText:""}catch{A=""}s.l=A+" ["+s.Z()+"]",mo(s)}}finally{Yn(s)}}}}function Yn(s,a){if(s.g){yo(s);const c=s.g,d=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||_e(s,"ready");try{c.onreadystatechange=d}catch{}}}function yo(s){s.I&&(u.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function xe(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<xe(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),uu(a)}};function vo(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Nu(s){const a={};s=(s.g&&2<=xe(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if(F(s[d]))continue;var c=v(s[d]);const T=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const A=a[T]||[];a[T]=A,A.push(c)}E(a,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function hn(s,a,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||a}function Eo(s){this.Aa=0,this.i=[],this.j=new rn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=hn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=hn("baseRetryDelayMs",5e3,s),this.cb=hn("retryDelaySeedMs",1e4,s),this.Wa=hn("forwardChannelMaxRetries",2,s),this.wa=hn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new eo(s&&s.concurrentRequestLimit),this.Da=new Cu,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Eo.prototype,n.la=8,n.G=1,n.connect=function(s,a,c,d){ye(0),this.W=s,this.H=a||{},c&&d!==void 0&&(this.H.OSID=c,this.H.OAID=d),this.F=this.X,this.I=Co(this,null,this.W),er(this)};function Ei(s){if(To(s),s.G==3){var a=s.U++,c=Le(s.I);if(W(c,"SID",s.K),W(c,"RID",a),W(c,"TYPE","terminate"),dn(s,c),a=new We(s,s.j,a),a.L=2,a.v=Qn(Le(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(a.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=a.v,c=!0),c||(a.g=ko(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Gn(a)}Po(s)}function Zn(s){s.g&&(Ii(s),s.g.cancel(),s.g=null)}function To(s){Zn(s),s.u&&(u.clearTimeout(s.u),s.u=null),tr(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&u.clearTimeout(s.s),s.s=null)}function er(s){if(!to(s.h)&&!s.s){s.s=!0;var a=s.Ga;Xt||Ns(),Jt||(Xt(),Jt=!0),ei.add(a,s),s.B=0}}function Ou(s,a){return no(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=nn(R(s.Ga,s,a),So(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const T=new We(this,this.j,s);let A=this.o;if(this.S&&(A?(A=p(A),_(A,this.S)):A=this.S),this.m!==null||this.O||(T.H=A,A=null),this.P)e:{for(var a=0,c=0;c<this.i.length;c++){t:{var d=this.i[c];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break t}d=void 0}if(d===void 0)break;if(a+=d,4096<a){a=c;break e}if(a===4096||c===this.i.length-1){a=c+1;break e}}a=1e3}else a=1e3;a=wo(this,T,a),c=Le(this.I),W(c,"RID",s),W(c,"CVER",22),this.D&&W(c,"X-HTTP-Session-Id",this.D),dn(this,c),A&&(this.O?a="headers="+encodeURIComponent(String(po(A)))+"&"+a:this.m&&vi(c,this.m,A)),yi(this.h,T),this.Ua&&W(c,"TYPE","init"),this.P?(W(c,"$req",a),W(c,"SID","null"),T.T=!0,pi(T,c,null)):pi(T,c,a),this.G=2}}else this.G==3&&(s?Io(this,s):this.i.length==0||to(this.h)||Io(this))};function Io(s,a){var c;a?c=a.l:c=s.U++;const d=Le(s.I);W(d,"SID",s.K),W(d,"RID",c),W(d,"AID",s.T),dn(s,d),s.m&&s.o&&vi(d,s.m,s.o),c=new We(s,s.j,c,s.B+1),s.m===null&&(c.H=s.o),a&&(s.i=a.D.concat(s.i)),a=wo(s,c,1e3),c.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),yi(s.h,c),pi(c,d,a)}function dn(s,a){s.H&&ee(s.H,function(c,d){W(a,d,c)}),s.l&&so({},function(c,d){W(a,d,c)})}function wo(s,a,c){c=Math.min(s.i.length,c);var d=s.l?R(s.l.Na,s.l,s):null;e:{var T=s.i;let A=-1;for(;;){const P=["count="+c];A==-1?0<c?(A=T[0].g,P.push("ofs="+A)):A=0:P.push("ofs="+A);let q=!0;for(let ie=0;ie<c;ie++){let $=T[ie].g;const he=T[ie].map;if($-=A,0>$)A=Math.max(0,T[ie].g-100),q=!1;else try{ku(he,P,"req"+$+"_")}catch{d&&d(he)}}if(q){d=P.join("&");break e}}}return s=s.i.splice(0,c),a.D=s,d}function Ao(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;Xt||Ns(),Jt||(Xt(),Jt=!0),ei.add(a,s),s.v=0}}function Ti(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=nn(R(s.Fa,s),So(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Ro(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=nn(R(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ye(10),Zn(this),Ro(this))};function Ii(s){s.A!=null&&(u.clearTimeout(s.A),s.A=null)}function Ro(s){s.g=new We(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Le(s.qa);W(a,"RID","rpc"),W(a,"SID",s.K),W(a,"AID",s.T),W(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&W(a,"TO",s.ja),W(a,"TYPE","xmlhttp"),dn(s,a),s.m&&s.o&&vi(a,s.m,s.o),s.L&&(s.g.I=s.L);var c=s.g;s=s.ia,c.L=1,c.v=Qn(Le(a)),c.m=null,c.P=!0,Js(c,s)}n.Za=function(){this.C!=null&&(this.C=null,Zn(this),Ti(this),ye(19))};function tr(s){s.C!=null&&(u.clearTimeout(s.C),s.C=null)}function bo(s,a){var c=null;if(s.g==a){tr(s),Ii(s),s.g=null;var d=2}else if(_i(s.h,a))c=a.D,ro(s.h,a),d=1;else return;if(s.G!=0){if(a.o)if(d==1){c=a.m?a.m.length:0,a=Date.now()-a.F;var T=s.B;d=zn(),_e(d,new Ws(d,c)),er(s)}else Ao(s);else if(T=a.s,T==3||T==0&&0<a.X||!(d==1&&Ou(s,a)||d==2&&Ti(s)))switch(c&&0<c.length&&(a=s.h,a.i=a.i.concat(c)),T){case 1:pt(s,5);break;case 4:pt(s,10);break;case 3:pt(s,6);break;default:pt(s,2)}}}function So(s,a){let c=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(c*=2),c*a}function pt(s,a){if(s.j.info("Error code "+a),a==2){var c=R(s.fb,s),d=s.Xa;const T=!d;d=new ft(d||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Wn(d,"https"),Qn(d),T?Su(d.toString(),c):Pu(d.toString(),c)}else ye(2);s.G=0,s.l&&s.l.sa(a),Po(s),To(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),ye(2)):(this.j.info("Failed to ping google.com"),ye(1))};function Po(s){if(s.G=0,s.ka=[],s.l){const a=io(s.h);(a.length!=0||s.i.length!=0)&&(V(s.ka,a),V(s.ka,s.i),s.h.i.length=0,M(s.i),s.i.length=0),s.l.ra()}}function Co(s,a,c){var d=c instanceof ft?Le(c):new ft(c);if(d.g!="")a&&(d.g=a+"."+d.g),Kn(d,d.s);else{var T=u.location;d=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;var A=new ft(null);d&&Wn(A,d),a&&(A.g=a),T&&Kn(A,T),c&&(A.l=c),d=A}return c=s.D,a=s.ya,c&&a&&W(d,c,a),W(d,"VER",s.la),dn(s,d),d}function ko(s,a,c){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new Q(new Xn({eb:c})):new Q(s.pa),a.Ha(s.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Do(){}n=Do.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function nr(){}nr.prototype.g=function(s,a){return new Te(s,a)};function Te(s,a){ue.call(this),this.g=new Eo(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!F(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!F(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new kt(this)}k(Te,ue),Te.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Te.prototype.close=function(){Ei(this.g)},Te.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.u&&(c={},c.__data__=li(s),s=c);a.i.push(new _u(a.Ya++,s)),a.G==3&&er(a)},Te.prototype.N=function(){this.g.l=null,delete this.j,Ei(this.g),delete this.g,Te.aa.N.call(this)};function Vo(s){ui.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){e:{for(const c in a){s=c;break e}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}k(Vo,ui);function No(){hi.call(this),this.status=1}k(No,hi);function kt(s){this.g=s}k(kt,Do),kt.prototype.ua=function(){_e(this.g,"a")},kt.prototype.ta=function(s){_e(this.g,new Vo(s))},kt.prototype.sa=function(s){_e(this.g,new No)},kt.prototype.ra=function(){_e(this.g,"b")},nr.prototype.createWebChannel=nr.prototype.g,Te.prototype.send=Te.prototype.o,Te.prototype.open=Te.prototype.m,Te.prototype.close=Te.prototype.close,ml=function(){return new nr},gl=function(){return zn()},pl=ht,Fi={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Hn.NO_ERROR=0,Hn.TIMEOUT=8,Hn.HTTP_ERROR=6,ur=Hn,Ks.COMPLETE="complete",fl=Ks,zs.EventType=en,en.OPEN="a",en.CLOSE="b",en.ERROR="c",en.MESSAGE="d",ue.prototype.listen=ue.prototype.K,pn=zs,Q.prototype.listenOnce=Q.prototype.L,Q.prototype.getLastError=Q.prototype.Ka,Q.prototype.getLastErrorCode=Q.prototype.Ba,Q.prototype.getStatus=Q.prototype.Z,Q.prototype.getResponseJson=Q.prototype.Oa,Q.prototype.getResponseText=Q.prototype.oa,Q.prototype.send=Q.prototype.ea,Q.prototype.setWithCredentials=Q.prototype.Ha,dl=Q}).apply(typeof ir<"u"?ir:typeof self<"u"?self:typeof window<"u"?window:{});const Go="@firebase/firestore",Wo="4.7.16";/**
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
 */class pe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pe.UNAUTHENTICATED=new pe(null),pe.GOOGLE_CREDENTIALS=new pe("google-credentials-uid"),pe.FIRST_PARTY=new pe("first-party-uid"),pe.MOCK_USER=new pe("mock-user");/**
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
 */let Gt="11.8.1";/**
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
 */const Tt=new ts("@firebase/firestore");function Vt(){return Tt.logLevel}function D(n,...e){if(Tt.logLevel<=U.DEBUG){const t=e.map(ss);Tt.debug(`Firestore (${Gt}): ${n}`,...t)}}function It(n,...e){if(Tt.logLevel<=U.ERROR){const t=e.map(ss);Tt.error(`Firestore (${Gt}): ${n}`,...t)}}function jr(n,...e){if(Tt.logLevel<=U.WARN){const t=e.map(ss);Tt.warn(`Firestore (${Gt}): ${n}`,...t)}}function ss(n){if(typeof n=="string")return n;try{/**
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
 */function x(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,_l(n,r,t)}function _l(n,e,t){let r=`FIRESTORE (${Gt}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw It(r),new Error(r)}function J(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||_l(e,i,r)}function G(n,e){return n}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends qe{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class _t{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class yl{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ed{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(pe.UNAUTHENTICATED))}shutdown(){}}class Td{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Id{constructor(e){this.t=e,this.currentUser=pe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){J(this.o===void 0,42304);let r=this.i;const i=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let o=new _t;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new _t,e.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},u=h=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new _t)}},0),l()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string",31837,{l:r}),new yl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string",2055,{h:e}),new pe(e)}}class wd{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=pe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Ad{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new wd(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(pe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ko{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Rd{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ae(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){J(this.o===void 0,3512);const r=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.m;return this.m=o.token,D("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ko(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(J(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ko(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function bd(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function Sd(){return new TextEncoder}/**
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
 */class vl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=bd(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%62))}return r}}function j(n,e){return n<e?-1:n>e?1:0}function Bi(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return j(r,i);{const o=Sd(),l=Pd(o.encode(Qo(n,t)),o.encode(Qo(e,t)));return l!==0?l:j(r,i)}}t+=r>65535?2:1}return j(n.length,e.length)}function Qo(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function Pd(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return j(n[t],e[t]);return j(n.length,e.length)}function Bt(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */const Xo=-62135596800,Jo=1e6;class re{static now(){return re.fromMillis(Date.now())}static fromDate(e){return re.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Jo);return new re(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new N(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new N(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Xo)throw new N(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Jo}_compareTo(e){return this.seconds===e.seconds?j(this.nanoseconds,e.nanoseconds):j(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Xo;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class K{static fromTimestamp(e){return new K(e)}static min(){return new K(new re(0,0))}static max(){return new K(new re(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Yo="__name__";class ke{constructor(e,t,r){t===void 0?t=0:t>e.length&&x(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&x(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ke.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ke?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const o=ke.compareSegments(e.get(i),t.get(i));if(o!==0)return o}return j(e.length,t.length)}static compareSegments(e,t){const r=ke.isNumericId(e),i=ke.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?ke.extractNumericId(e).compare(ke.extractNumericId(t)):Bi(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return is.fromString(e.substring(4,e.length-2))}}class X extends ke{construct(e,t,r){return new X(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new N(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new X(t)}static emptyPath(){return new X([])}}const Cd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ae extends ke{construct(e,t,r){return new ae(e,t,r)}static isValidIdentifier(e){return Cd.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Yo}static keyField(){return new ae([Yo])}static fromServerFormat(e){const t=[];let r="",i=0;const o=()=>{if(r.length===0)throw new N(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let l=!1;for(;i<e.length;){const u=e[i];if(u==="\\"){if(i+1===e.length)throw new N(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,i+=2}else u==="`"?(l=!l,i++):u!=="."||l?(r+=u,i++):(o(),i++)}if(o(),l)throw new N(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ae(t)}static emptyPath(){return new ae([])}}/**
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
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(X.fromString(e))}static fromName(e){return new L(X.fromString(e).popFirst(5))}static empty(){return new L(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&X.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return X.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new X(e.slice()))}}/**
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
 */const In=-1;function kd(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=K.fromTimestamp(r===1e9?new re(t+1,0):new re(t,r));return new ot(i,L.empty(),e)}function Dd(n){return new ot(n.readTime,n.key,In)}class ot{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new ot(K.min(),L.empty(),In)}static max(){return new ot(K.max(),L.empty(),In)}}function Vd(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(n.documentKey,e.documentKey),t!==0?t:j(n.largestBatchId,e.largestBatchId))}/**
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
 */const Nd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Od{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function os(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==Nd)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&x(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof b?t:b.resolve(t)}catch(t){return b.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):b.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):b.reject(t)}static resolve(e){return new b((t,r)=>{t(e)})}static reject(e){return new b((t,r)=>{r(e)})}static waitFor(e){return new b((t,r)=>{let i=0,o=0,l=!1;e.forEach(u=>{++i,u.next(()=>{++o,l&&o===i&&t()},h=>r(h))}),l=!0,o===i&&t()})}static or(e){let t=b.resolve(!1);for(const r of e)t=t.next(i=>i?b.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new b((r,i)=>{const o=e.length,l=new Array(o);let u=0;for(let h=0;h<o;h++){const f=h;t(e[f]).next(y=>{l[f]=y,++u,u===o&&r(l)},y=>i(y))}})}static doWhile(e,t){return new b((r,i)=>{const o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}}function Md(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Dn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class as{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>t.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}as.le=-1;/**
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
 */const ls=-1;function cs(n){return n==null}function Er(n){return n===0&&1/n==-1/0}function Ld(n){return typeof n=="number"&&Number.isInteger(n)&&!Er(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const El="";function xd(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Zo(e)),e=Ud(n.get(t),e);return Zo(e)}function Ud(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":t+="";break;case El:t+="";break;default:t+=o}}return t}function Zo(n){return n+El+""}/**
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
 */function ea(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Wt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Tl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Ee{constructor(e,t){this.comparator=e,this.root=t||se.EMPTY}insert(e,t){return new Ee(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,se.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,se.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new sr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new sr(this.root,e,this.comparator,!1)}getReverseIterator(){return new sr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new sr(this.root,e,this.comparator,!0)}}class sr{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class se{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??se.RED,this.left=i??se.EMPTY,this.right=o??se.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new se(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return se.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return se.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw x(43730,{key:this.key,value:this.value});if(this.right.isRed())throw x(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw x(27949);return e+(this.isRed()?0:1)}}se.EMPTY=null,se.RED=!0,se.BLACK=!1;se.EMPTY=new class{constructor(){this.size=0}get key(){throw x(57766)}get value(){throw x(16141)}get color(){throw x(16727)}get left(){throw x(29726)}get right(){throw x(36894)}copy(e,t,r,i,o){return this}insert(e,t,r){return new se(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class le{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ta(this.data.getIterator())}getIteratorFrom(e){return new ta(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof le)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new le(this.comparator);return t.data=e,t}}class ta{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class be{constructor(e){this.fields=e,e.sort(ae.comparator)}static empty(){return new be([])}unionWith(e){let t=new le(ae.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new be(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Bt(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Ne{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Fd("Invalid base64 string: "+o):o}}(e);return new Ne(t)}static fromUint8Array(e){const t=function(i){let o="";for(let l=0;l<i.length;++l)o+=String.fromCharCode(i[l]);return o}(e);return new Ne(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return j(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ne.EMPTY_BYTE_STRING=new Ne("");const Bd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wt(n){if(J(!!n,39018),typeof n=="string"){let e=0;const t=Bd.exec(n);if(J(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:oe(n.seconds),nanos:oe(n.nanos)}}function oe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function jt(n){return typeof n=="string"?Ne.fromBase64String(n):Ne.fromUint8Array(n)}/**
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
 */const Il="server_timestamp",wl="__type__",Al="__previous_value__",Rl="__local_write_time__";function us(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[wl])===null||t===void 0?void 0:t.stringValue)===Il}function hs(n){const e=n.mapValue.fields[Al];return us(e)?hs(e):e}function Tr(n){const e=wt(n.mapValue.fields[Rl].timestampValue);return new re(e.seconds,e.nanos)}/**
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
 */class jd{constructor(e,t,r,i,o,l,u,h,f,y){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=f,this.isUsingEmulator=y}}const Ir="(default)";class wr{constructor(e,t){this.projectId=e,this.database=t||Ir}static empty(){return new wr("","")}get isDefaultDatabase(){return this.database===Ir}isEqual(e){return e instanceof wr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const bl="__type__",$d="__max__",or={mapValue:{}},Sl="__vector__",ji="value";function At(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?us(n)?4:Hd(n)?9007199254740991:zd(n)?10:11:x(28295,{value:n})}function Oe(n,e){if(n===e)return!0;const t=At(n);if(t!==At(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Tr(n).isEqual(Tr(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const l=wt(i.timestampValue),u=wt(o.timestampValue);return l.seconds===u.seconds&&l.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return jt(i.bytesValue).isEqual(jt(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return oe(i.geoPointValue.latitude)===oe(o.geoPointValue.latitude)&&oe(i.geoPointValue.longitude)===oe(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return oe(i.integerValue)===oe(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const l=oe(i.doubleValue),u=oe(o.doubleValue);return l===u?Er(l)===Er(u):isNaN(l)&&isNaN(u)}return!1}(n,e);case 9:return Bt(n.arrayValue.values||[],e.arrayValue.values||[],Oe);case 10:case 11:return function(i,o){const l=i.mapValue.fields||{},u=o.mapValue.fields||{};if(ea(l)!==ea(u))return!1;for(const h in l)if(l.hasOwnProperty(h)&&(u[h]===void 0||!Oe(l[h],u[h])))return!1;return!0}(n,e);default:return x(52216,{left:n})}}function wn(n,e){return(n.values||[]).find(t=>Oe(t,e))!==void 0}function $t(n,e){if(n===e)return 0;const t=At(n),r=At(e);if(t!==r)return j(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,e.booleanValue);case 2:return function(o,l){const u=oe(o.integerValue||o.doubleValue),h=oe(l.integerValue||l.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,e);case 3:return na(n.timestampValue,e.timestampValue);case 4:return na(Tr(n),Tr(e));case 5:return Bi(n.stringValue,e.stringValue);case 6:return function(o,l){const u=jt(o),h=jt(l);return u.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,l){const u=o.split("/"),h=l.split("/");for(let f=0;f<u.length&&f<h.length;f++){const y=j(u[f],h[f]);if(y!==0)return y}return j(u.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,l){const u=j(oe(o.latitude),oe(l.latitude));return u!==0?u:j(oe(o.longitude),oe(l.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return ra(n.arrayValue,e.arrayValue);case 10:return function(o,l){var u,h,f,y;const w=o.fields||{},R=l.fields||{},C=(u=w[ji])===null||u===void 0?void 0:u.arrayValue,k=(h=R[ji])===null||h===void 0?void 0:h.arrayValue,M=j(((f=C?.values)===null||f===void 0?void 0:f.length)||0,((y=k?.values)===null||y===void 0?void 0:y.length)||0);return M!==0?M:ra(C,k)}(n.mapValue,e.mapValue);case 11:return function(o,l){if(o===or.mapValue&&l===or.mapValue)return 0;if(o===or.mapValue)return 1;if(l===or.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),f=l.fields||{},y=Object.keys(f);h.sort(),y.sort();for(let w=0;w<h.length&&w<y.length;++w){const R=Bi(h[w],y[w]);if(R!==0)return R;const C=$t(u[h[w]],f[y[w]]);if(C!==0)return C}return j(h.length,y.length)}(n.mapValue,e.mapValue);default:throw x(23264,{Pe:t})}}function na(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return j(n,e);const t=wt(n),r=wt(e),i=j(t.seconds,r.seconds);return i!==0?i:j(t.nanos,r.nanos)}function ra(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const o=$t(t[i],r[i]);if(o)return o}return j(t.length,r.length)}function zt(n){return $i(n)}function $i(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=wt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return jt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return L.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const o of t.values||[])i?i=!1:r+=",",r+=$i(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const l of r)o?o=!1:i+=",",i+=`${l}:${$i(t.fields[l])}`;return i+"}"}(n.mapValue):x(61005,{value:n})}function hr(n){switch(At(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=hs(n);return e?16+hr(e):16;case 5:return 2*n.stringValue.length;case 6:return jt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+hr(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Wt(r.fields,(o,l)=>{i+=o.length+hr(l)}),i}(n.mapValue);default:throw x(13486,{value:n})}}function zi(n){return!!n&&"integerValue"in n}function ds(n){return!!n&&"arrayValue"in n}function dr(n){return!!n&&"mapValue"in n}function zd(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[bl])===null||t===void 0?void 0:t.stringValue)===Sl}function mn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Wt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=mn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=mn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Hd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===$d}/**
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
 */class Re{constructor(e){this.value=e}static empty(){return new Re({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!dr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=mn(t)}setAll(e){let t=ae.emptyPath(),r={},i=[];e.forEach((l,u)=>{if(!t.isImmediateParentOf(u)){const h=this.getFieldsMap(t);this.applyChanges(h,r,i),r={},i=[],t=u.popLast()}l?r[u.lastSegment()]=mn(l):i.push(u.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){const t=this.field(e.popLast());dr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Oe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];dr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Wt(t,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Re(mn(this.value))}}function Pl(n){const e=[];return Wt(n.fields,(t,r)=>{const i=new ae([t]);if(dr(r)){const o=Pl(r.mapValue).fields;if(o.length===0)e.push(i);else for(const l of o)e.push(i.child(l))}else e.push(i)}),new be(e)}/**
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
 */class we{constructor(e,t,r,i,o,l,u){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=l,this.documentState=u}static newInvalidDocument(e){return new we(e,0,K.min(),K.min(),K.min(),Re.empty(),0)}static newFoundDocument(e,t,r,i){return new we(e,1,t,K.min(),r,i,0)}static newNoDocument(e,t){return new we(e,2,t,K.min(),K.min(),Re.empty(),0)}static newUnknownDocument(e,t){return new we(e,3,t,K.min(),K.min(),Re.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Re.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Re.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof we&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new we(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ar{constructor(e,t){this.position=e,this.inclusive=t}}function ia(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const o=e[i],l=n.position[i];if(o.field.isKeyField()?r=L.comparator(L.fromName(l.referenceValue),t.key):r=$t(l,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function sa(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Oe(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Rr{constructor(e,t="asc"){this.field=e,this.dir=t}}function qd(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Cl{}class ne extends Cl{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Wd(e,t,r):t==="array-contains"?new Xd(e,r):t==="in"?new Jd(e,r):t==="not-in"?new Yd(e,r):t==="array-contains-any"?new Zd(e,r):new ne(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Kd(e,r):new Qd(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison($t(t,this.value)):t!==null&&At(this.value)===At(t)&&this.matchesComparison($t(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return x(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class at extends Cl{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new at(e,t)}matches(e){return kl(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function kl(n){return n.op==="and"}function Dl(n){return Gd(n)&&kl(n)}function Gd(n){for(const e of n.filters)if(e instanceof at)return!1;return!0}function Hi(n){if(n instanceof ne)return n.field.canonicalString()+n.op.toString()+zt(n.value);if(Dl(n))return n.filters.map(e=>Hi(e)).join(",");{const e=n.filters.map(t=>Hi(t)).join(",");return`${n.op}(${e})`}}function Vl(n,e){return n instanceof ne?function(r,i){return i instanceof ne&&r.op===i.op&&r.field.isEqual(i.field)&&Oe(r.value,i.value)}(n,e):n instanceof at?function(r,i){return i instanceof at&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,l,u)=>o&&Vl(l,i.filters[u]),!0):!1}(n,e):void x(19439)}function Nl(n){return n instanceof ne?function(t){return`${t.field.canonicalString()} ${t.op} ${zt(t.value)}`}(n):n instanceof at?function(t){return t.op.toString()+" {"+t.getFilters().map(Nl).join(" ,")+"}"}(n):"Filter"}class Wd extends ne{constructor(e,t,r){super(e,t,r),this.key=L.fromName(r.referenceValue)}matches(e){const t=L.comparator(e.key,this.key);return this.matchesComparison(t)}}class Kd extends ne{constructor(e,t){super(e,"in",t),this.keys=Ol("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Qd extends ne{constructor(e,t){super(e,"not-in",t),this.keys=Ol("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ol(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>L.fromName(r.referenceValue))}class Xd extends ne{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ds(t)&&wn(t.arrayValue,this.value)}}class Jd extends ne{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&wn(this.value.arrayValue,t)}}class Yd extends ne{constructor(e,t){super(e,"not-in",t)}matches(e){if(wn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!wn(this.value.arrayValue,t)}}class Zd extends ne{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ds(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>wn(this.value.arrayValue,r))}}/**
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
 */class ef{constructor(e,t=null,r=[],i=[],o=null,l=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=l,this.endAt=u,this.Ie=null}}function oa(n,e=null,t=[],r=[],i=null,o=null,l=null){return new ef(n,e,t,r,i,o,l)}function fs(n){const e=G(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Hi(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),cs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>zt(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>zt(r)).join(",")),e.Ie=t}return e.Ie}function ps(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!qd(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Vl(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!sa(n.startAt,e.startAt)&&sa(n.endAt,e.endAt)}/**
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
 */class $r{constructor(e,t=null,r=[],i=[],o=null,l="F",u=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=l,this.startAt=u,this.endAt=h,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function tf(n,e,t,r,i,o,l,u){return new $r(n,e,t,r,i,o,l,u)}function nf(n){return new $r(n)}function aa(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function rf(n){return n.collectionGroup!==null}function _n(n){const e=G(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ee.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(l){let u=new le(ae.comparator);return l.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(u=u.add(f.field))})}),u})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ee.push(new Rr(o,r))}),t.has(ae.keyField().canonicalString())||e.Ee.push(new Rr(ae.keyField(),r))}return e.Ee}function yt(n){const e=G(n);return e.de||(e.de=sf(e,_n(n))),e.de}function sf(n,e){if(n.limitType==="F")return oa(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Rr(i.field,o)});const t=n.endAt?new Ar(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ar(n.startAt.position,n.startAt.inclusive):null;return oa(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function qi(n,e,t){return new $r(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ml(n,e){return ps(yt(n),yt(e))&&n.limitType===e.limitType}function Ll(n){return`${fs(yt(n))}|lt:${n.limitType}`}function fn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Nl(i)).join(", ")}]`),cs(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>zt(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>zt(i)).join(",")),`Target(${r})`}(yt(n))}; limitType=${n.limitType})`}function gs(n,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):L.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(const o of _n(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(l,u,h){const f=ia(l,u,h);return l.inclusive?f<=0:f<0}(r.startAt,_n(r),i)||r.endAt&&!function(l,u,h){const f=ia(l,u,h);return l.inclusive?f>=0:f>0}(r.endAt,_n(r),i))}(n,e)}function of(n){return(e,t)=>{let r=!1;for(const i of _n(n)){const o=af(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function af(n,e,t){const r=n.field.isKeyField()?L.comparator(e.key,t.key):function(o,l,u){const h=l.data.field(o),f=u.data.field(o);return h!==null&&f!==null?$t(h,f):x(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x(19790,{direction:n.dir})}}/**
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
 */class bt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Wt(this.inner,(t,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return Tl(this.inner)}size(){return this.innerSize}}/**
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
 */const lf=new Ee(L.comparator);function br(){return lf}const xl=new Ee(L.comparator);function ar(...n){let e=xl;for(const t of n)e=e.insert(t.key,t);return e}function Ul(n){let e=xl;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function mt(){return yn()}function Fl(){return yn()}function yn(){return new bt(n=>n.toString(),(n,e)=>n.isEqual(e))}const cf=new Ee(L.comparator),uf=new le(L.comparator);function ge(...n){let e=uf;for(const t of n)e=e.add(t);return e}const hf=new le(j);function df(){return hf}/**
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
 */function ms(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Er(e)?"-0":e}}function Bl(n){return{integerValue:""+n}}function ff(n,e){return Ld(e)?Bl(e):ms(n,e)}/**
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
 */class zr{constructor(){this._=void 0}}function pf(n,e,t){return n instanceof Sr?function(i,o){const l={fields:{[wl]:{stringValue:Il},[Rl]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&us(o)&&(o=hs(o)),o&&(l.fields[Al]=o),{mapValue:l}}(t,e):n instanceof An?$l(n,e):n instanceof Rn?zl(n,e):function(i,o){const l=jl(i,o),u=la(l)+la(i.Re);return zi(l)&&zi(i.Re)?Bl(u):ms(i.serializer,u)}(n,e)}function gf(n,e,t){return n instanceof An?$l(n,e):n instanceof Rn?zl(n,e):t}function jl(n,e){return n instanceof Pr?function(r){return zi(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class Sr extends zr{}class An extends zr{constructor(e){super(),this.elements=e}}function $l(n,e){const t=Hl(e);for(const r of n.elements)t.some(i=>Oe(i,r))||t.push(r);return{arrayValue:{values:t}}}class Rn extends zr{constructor(e){super(),this.elements=e}}function zl(n,e){let t=Hl(e);for(const r of n.elements)t=t.filter(i=>!Oe(i,r));return{arrayValue:{values:t}}}class Pr extends zr{constructor(e,t){super(),this.serializer=e,this.Re=t}}function la(n){return oe(n.integerValue||n.doubleValue)}function Hl(n){return ds(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function mf(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof An&&i instanceof An||r instanceof Rn&&i instanceof Rn?Bt(r.elements,i.elements,Oe):r instanceof Pr&&i instanceof Pr?Oe(r.Re,i.Re):r instanceof Sr&&i instanceof Sr}(n.transform,e.transform)}class _f{constructor(e,t){this.version=e,this.transformResults=t}}class Be{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Be}static exists(e){return new Be(void 0,e)}static updateTime(e){return new Be(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Hr{}function ql(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Wl(n.key,Be.none()):new Vn(n.key,n.data,Be.none());{const t=n.data,r=Re.empty();let i=new le(ae.comparator);for(let o of e.fields)if(!i.has(o)){let l=t.field(o);l===null&&o.length>1&&(o=o.popLast(),l=t.field(o)),l===null?r.delete(o):r.set(o,l),i=i.add(o)}return new St(n.key,r,new be(i.toArray()),Be.none())}}function yf(n,e,t){n instanceof Vn?function(i,o,l){const u=i.value.clone(),h=ua(i.fieldTransforms,o,l.transformResults);u.setAll(h),o.convertToFoundDocument(l.version,u).setHasCommittedMutations()}(n,e,t):n instanceof St?function(i,o,l){if(!fr(i.precondition,o))return void o.convertToUnknownDocument(l.version);const u=ua(i.fieldTransforms,o,l.transformResults),h=o.data;h.setAll(Gl(i)),h.setAll(u),o.convertToFoundDocument(l.version,h).setHasCommittedMutations()}(n,e,t):function(i,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()}(0,e,t)}function vn(n,e,t,r){return n instanceof Vn?function(o,l,u,h){if(!fr(o.precondition,l))return u;const f=o.value.clone(),y=ha(o.fieldTransforms,h,l);return f.setAll(y),l.convertToFoundDocument(l.version,f).setHasLocalMutations(),null}(n,e,t,r):n instanceof St?function(o,l,u,h){if(!fr(o.precondition,l))return u;const f=ha(o.fieldTransforms,h,l),y=l.data;return y.setAll(Gl(o)),y.setAll(f),l.convertToFoundDocument(l.version,y).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(n,e,t,r):function(o,l,u){return fr(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):u}(n,e,t)}function vf(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),o=jl(r.transform,i||null);o!=null&&(t===null&&(t=Re.empty()),t.set(r.field,o))}return t||null}function ca(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Bt(r,i,(o,l)=>mf(o,l))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Vn extends Hr{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class St extends Hr{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Gl(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function ua(n,e,t){const r=new Map;J(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let i=0;i<t.length;i++){const o=n[i],l=o.transform,u=e.data.field(o.field);r.set(o.field,gf(l,u,t[i]))}return r}function ha(n,e,t){const r=new Map;for(const i of n){const o=i.transform,l=t.data.field(i.field);r.set(i.field,pf(o,l,e))}return r}class Wl extends Hr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ef extends Hr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Tf{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&yf(o,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=vn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=vn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Fl();return this.mutations.forEach(i=>{const o=e.get(i.key),l=o.overlayedDocument;let u=this.applyToLocalView(l,o.mutatedFields);u=t.has(i.key)?null:u;const h=ql(l,u);h!==null&&r.set(i.key,h),l.isValidDocument()||l.convertToNoDocument(K.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ge())}isEqual(e){return this.batchId===e.batchId&&Bt(this.mutations,e.mutations,(t,r)=>ca(t,r))&&Bt(this.baseMutations,e.baseMutations,(t,r)=>ca(t,r))}}class _s{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){J(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let i=function(){return cf}();const o=e.mutations;for(let l=0;l<o.length;l++)i=i.insert(o[l].key,r[l].version);return new _s(e,t,r,i)}}/**
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
 */class If{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var Z,B;function wf(n){switch(n){case S.OK:return x(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return x(15467,{code:n})}}function Af(n){if(n===void 0)return It("GRPC error has no .code"),S.UNKNOWN;switch(n){case Z.OK:return S.OK;case Z.CANCELLED:return S.CANCELLED;case Z.UNKNOWN:return S.UNKNOWN;case Z.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Z.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Z.INTERNAL:return S.INTERNAL;case Z.UNAVAILABLE:return S.UNAVAILABLE;case Z.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Z.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Z.NOT_FOUND:return S.NOT_FOUND;case Z.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Z.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Z.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Z.ABORTED:return S.ABORTED;case Z.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Z.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Z.DATA_LOSS:return S.DATA_LOSS;default:return x(39323,{code:n})}}(B=Z||(Z={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new is([4294967295,4294967295],0);class Rf{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Gi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Sf(n,e){return Gi(n,e.toTimestamp())}function Mt(n){return J(!!n,49232),K.fromTimestamp(function(t){const r=wt(t);return new re(r.seconds,r.nanos)}(n))}function Kl(n,e){return Wi(n,e).canonicalString()}function Wi(n,e){const t=function(i){return new X(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Pf(n){const e=X.fromString(n);return J(Lf(e),10190,{key:e.toString()}),e}function Ki(n,e){return Kl(n.databaseId,e.path)}function Cf(n){const e=Pf(n);return e.length===4?X.emptyPath():Df(e)}function kf(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Df(n){return J(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function da(n,e,t){return{name:Ki(n,e),fields:t.value.mapValue.fields}}function Vf(n,e){let t;if(e instanceof Vn)t={update:da(n,e.key,e.value)};else if(e instanceof Wl)t={delete:Ki(n,e.key)};else if(e instanceof St)t={update:da(n,e.key,e.data),updateMask:Mf(e.fieldMask)};else{if(!(e instanceof Ef))return x(16599,{ft:e.type});t={verify:Ki(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,l){const u=l.transform;if(u instanceof Sr)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof An)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Rn)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Pr)return{fieldPath:l.field.canonicalString(),increment:u.Re};throw x(20930,{transform:l.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Sf(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:x(27497)}(n,e.precondition)),t}function Nf(n,e){return n&&n.length>0?(J(e!==void 0,14353),n.map(t=>function(i,o){let l=i.updateTime?Mt(i.updateTime):Mt(o);return l.isEqual(K.min())&&(l=Mt(o)),new _f(l,i.transformResults||[])}(t,e))):[]}function Of(n){let e=Cf(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){J(r===1,65062);const y=t.from[0];y.allDescendants?i=y.collectionId:e=e.child(y.collectionId)}let o=[];t.where&&(o=function(w){const R=Ql(w);return R instanceof at&&Dl(R)?R.getFilters():[R]}(t.where));let l=[];t.orderBy&&(l=function(w){return w.map(R=>function(k){return new Rr(Nt(k.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(R))}(t.orderBy));let u=null;t.limit&&(u=function(w){let R;return R=typeof w=="object"?w.value:w,cs(R)?null:R}(t.limit));let h=null;t.startAt&&(h=function(w){const R=!!w.before,C=w.values||[];return new Ar(C,R)}(t.startAt));let f=null;return t.endAt&&(f=function(w){const R=!w.before,C=w.values||[];return new Ar(C,R)}(t.endAt)),tf(e,i,l,o,u,"F",h,f)}function Ql(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Nt(t.unaryFilter.field);return ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Nt(t.unaryFilter.field);return ne.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Nt(t.unaryFilter.field);return ne.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=Nt(t.unaryFilter.field);return ne.create(l,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return x(61313);default:return x(60726)}}(n):n.fieldFilter!==void 0?function(t){return ne.create(Nt(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return x(58110);default:return x(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return at.create(t.compositeFilter.filters.map(r=>Ql(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return x(1026)}}(t.compositeFilter.op))}(n):x(30097,{filter:n})}function Nt(n){return ae.fromServerFormat(n.fieldPath)}function Mf(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Lf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class xf{constructor(e){this.wt=e}}function Uf(n){const e=Of({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?qi(e,e.limit,"L"):e}/**
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
 */class Ff{constructor(){this.Cn=new Bf}addToCollectionParentIndex(e,t){return this.Cn.add(t),b.resolve()}getCollectionParents(e,t){return b.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return b.resolve()}deleteFieldIndex(e,t){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,t){return b.resolve()}getDocumentsMatchingTarget(e,t){return b.resolve(null)}getIndexType(e,t){return b.resolve(0)}getFieldIndexes(e,t){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,t){return b.resolve(ot.min())}getMinOffsetFromCollectionGroup(e,t){return b.resolve(ot.min())}updateCollectionGroup(e,t,r){return b.resolve()}updateIndexEntries(e,t){return b.resolve()}}class Bf{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new le(X.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new le(X.comparator)).toArray()}}/**
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
 */const fa={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Xl=41943040;class ve{static withCacheSize(e){return new ve(e,ve.DEFAULT_COLLECTION_PERCENTILE,ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ve.DEFAULT_COLLECTION_PERCENTILE=10,ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ve.DEFAULT=new ve(Xl,ve.DEFAULT_COLLECTION_PERCENTILE,ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ve.DISABLED=new ve(-1,0,0);/**
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
 */class Ht{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new Ht(0)}static lr(){return new Ht(-1)}}/**
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
 */const pa="LruGarbageCollector",jf=1048576;function ga([n,e],[t,r]){const i=j(n,t);return i===0?j(e,r):i}class $f{constructor(e){this.Er=e,this.buffer=new le(ga),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();ga(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class zf{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){D(pa,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Dn(t)?D(pa,"Ignoring IndexedDB error during garbage collection: ",t):await os(t)}await this.mr(3e5)})}}class Hf{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return b.resolve(as.le);const r=new $f(t);return this.gr.forEachTarget(e,i=>r.Rr(i.sequenceNumber)).next(()=>this.gr.yr(e,i=>r.Rr(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.gr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(fa)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),fa):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let r,i,o,l,u,h,f;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),i=this.params.maximumSequenceNumbersToCollect):i=w,l=Date.now(),this.nthSequenceNumber(e,i))).next(w=>(r=w,u=Date.now(),this.removeTargets(e,r,t))).next(w=>(o=w,h=Date.now(),this.removeOrphanedDocuments(e,r))).next(w=>(f=Date.now(),Vt()<=U.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-y}ms
	Determined least recently used ${i} in `+(u-l)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${w} documents in `+(f-h)+`ms
Total Duration: ${f-y}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:w})))}}function qf(n,e){return new Hf(n,e)}/**
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
 */class Gf{constructor(){this.changes=new bt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,we.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?b.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Wf{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Kf{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&vn(r.mutation,i,be.empty(),re.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ge()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ge()){const i=mt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let l=ar();return o.forEach((u,h)=>{l=l.insert(u,h.overlayedDocument)}),l}))}getOverlayedDocuments(e,t){const r=mt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ge()))}populateOverlays(e,t,r){const i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((l,u)=>{t.set(l,u)})})}computeViews(e,t,r,i){let o=br();const l=yn(),u=function(){return yn()}();return t.forEach((h,f)=>{const y=r.get(f.key);i.has(f.key)&&(y===void 0||y.mutation instanceof St)?o=o.insert(f.key,f):y!==void 0?(l.set(f.key,y.mutation.getFieldMask()),vn(y.mutation,f,y.mutation.getFieldMask(),re.now())):l.set(f.key,be.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((f,y)=>l.set(f,y)),t.forEach((f,y)=>{var w;return u.set(f,new Wf(y,(w=l.get(f))!==null&&w!==void 0?w:null))}),u))}recalculateAndSaveOverlays(e,t){const r=yn();let i=new Ee((l,u)=>l-u),o=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(l=>{for(const u of l)u.keys().forEach(h=>{const f=t.get(h);if(f===null)return;let y=r.get(h)||be.empty();y=u.applyToLocalView(f,y),r.set(h,y);const w=(i.get(u.batchId)||ge()).add(h);i=i.insert(u.batchId,w)})}).next(()=>{const l=[],u=i.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),f=h.key,y=h.value,w=Fl();y.forEach(R=>{if(!o.has(R)){const C=ql(t.get(R),r.get(R));C!==null&&w.set(R,C),o=o.add(R)}}),l.push(this.documentOverlayCache.saveOverlays(e,f,w))}return b.waitFor(l)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(l){return L.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):rf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{const l=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):b.resolve(mt());let u=In,h=o;return l.next(f=>b.forEach(f,(y,w)=>(u<w.largestBatchId&&(u=w.largestBatchId),o.get(y)?b.resolve():this.remoteDocumentCache.getEntry(e,y).next(R=>{h=h.insert(y,R)}))).next(()=>this.populateOverlays(e,f,o)).next(()=>this.computeViews(e,h,f,ge())).next(y=>({batchId:u,changes:Ul(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next(r=>{let i=ar();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const o=t.collectionGroup;let l=ar();return this.indexManager.getCollectionParents(e,o).next(u=>b.forEach(u,h=>{const f=function(w,R){return new $r(R,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,f,r,i).next(y=>{y.forEach((w,R)=>{l=l.insert(w,R)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(l=>{o.forEach((h,f)=>{const y=f.getKey();l.get(y)===null&&(l=l.insert(y,we.newInvalidDocument(y)))});let u=ar();return l.forEach((h,f)=>{const y=o.get(h);y!==void 0&&vn(y.mutation,f,be.empty(),re.now()),gs(t,f)&&(u=u.insert(h,f))}),u})}}/**
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
 */class Qf{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return b.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Mt(i.createTime)}}(t)),b.resolve()}getNamedQuery(e,t){return b.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(i){return{name:i.name,query:Uf(i.bundledQuery),readTime:Mt(i.readTime)}}(t)),b.resolve()}}/**
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
 */class Xf{constructor(){this.overlays=new Ee(L.comparator),this.Qr=new Map}getOverlay(e,t){return b.resolve(this.overlays.get(t))}getOverlays(e,t){const r=mt();return b.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.bt(e,t,o)}),b.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Qr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Qr.delete(r)),b.resolve()}getOverlaysForCollection(e,t,r){const i=mt(),o=t.length+1,l=new L(t.child("")),u=this.overlays.getIteratorFrom(l);for(;u.hasNext();){const h=u.getNext().value,f=h.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return b.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new Ee((f,y)=>f-y);const l=this.overlays.getIterator();for(;l.hasNext();){const f=l.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>r){let y=o.get(f.largestBatchId);y===null&&(y=mt(),o=o.insert(f.largestBatchId,y)),y.set(f.getKey(),f)}}const u=mt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,y)=>u.set(f,y)),!(u.size()>=i)););return b.resolve(u)}bt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const l=this.Qr.get(i.largestBatchId).delete(r.key);this.Qr.set(i.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new If(t,r));let o=this.Qr.get(t);o===void 0&&(o=ge(),this.Qr.set(t,o)),this.Qr.set(t,o.add(r.key))}}/**
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
 */class Jf{constructor(){this.sessionToken=Ne.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,b.resolve()}}/**
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
 */class ys{constructor(){this.$r=new le(te.Ur),this.Kr=new le(te.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const r=new te(e,t);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.zr(new te(e,t))}jr(e,t){e.forEach(r=>this.removeReference(r,t))}Hr(e){const t=new L(new X([])),r=new te(t,e),i=new te(t,e+1),o=[];return this.Kr.forEachInRange([r,i],l=>{this.zr(l),o.push(l.key)}),o}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new L(new X([])),r=new te(t,e),i=new te(t,e+1);let o=ge();return this.Kr.forEachInRange([r,i],l=>{o=o.add(l.key)}),o}containsKey(e){const t=new te(e,0),r=this.$r.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class te{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return L.comparator(e.key,t.key)||j(e.Zr,t.Zr)}static Wr(e,t){return j(e.Zr,t.Zr)||L.comparator(e.key,t.key)}}/**
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
 */class Yf{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new le(te.Ur)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const o=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new Tf(o,t,r,i);this.mutationQueue.push(l);for(const u of i)this.Xr=this.Xr.add(new te(u.key,o)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return b.resolve(l)}lookupMutationBatch(e,t){return b.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ti(r),o=i<0?0:i;return b.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?ls:this.nr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new te(t,0),i=new te(t,Number.POSITIVE_INFINITY),o=[];return this.Xr.forEachInRange([r,i],l=>{const u=this.ei(l.Zr);o.push(u)}),b.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new le(j);return t.forEach(i=>{const o=new te(i,0),l=new te(i,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([o,l],u=>{r=r.add(u.Zr)})}),b.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let o=r;L.isDocumentKey(o)||(o=o.child(""));const l=new te(new L(o),0);let u=new le(j);return this.Xr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(u=u.add(h.Zr)),!0)},l),b.resolve(this.ni(u))}ni(e){const t=[];return e.forEach(r=>{const i=this.ei(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){J(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return b.forEach(t.mutations,i=>{const o=new te(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,t){const r=new te(t,0),i=this.Xr.firstAfterOrEqual(r);return b.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Zf{constructor(e){this.ii=e,this.docs=function(){return new Ee(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),o=i?i.size:0,l=this.ii(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return b.resolve(r?r.document.mutableCopy():we.newInvalidDocument(t))}getEntries(e,t){let r=br();return t.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():we.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=br();const l=t.path,u=new L(l.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:f,value:{document:y}}=h.getNext();if(!l.isPrefixOf(f.path))break;f.path.length>l.length+1||Vd(Dd(y),r)<=0||(i.has(y.key)||gs(t,y))&&(o=o.insert(y.key,y.mutableCopy()))}return b.resolve(o)}getAllFromCollectionGroup(e,t,r,i){x(9500)}si(e,t){return b.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new ep(this)}getSize(e){return b.resolve(this.size)}}class ep extends Gf{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Br.addEntry(e,i)):this.Br.removeEntry(r)}),b.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
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
 */class tp{constructor(e){this.persistence=e,this.oi=new bt(t=>fs(t),ps),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this._i=0,this.ai=new ys,this.targetCount=0,this.ui=Ht.cr()}forEachTarget(e,t){return this.oi.forEach((r,i)=>t(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this._i&&(this._i=t),b.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new Ht(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,b.resolve()}updateTargetData(e,t){return this.Tr(t),b.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,t,r){let i=0;const o=[];return this.oi.forEach((l,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.oi.delete(l),o.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),b.waitFor(o).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,t){const r=this.oi.get(t)||null;return b.resolve(r)}addMatchingKeys(e,t,r){return this.ai.Gr(t,r),b.resolve()}removeMatchingKeys(e,t,r){this.ai.jr(t,r);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(l=>{o.push(i.markPotentiallyOrphaned(e,l))}),b.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),b.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ai.Yr(t);return b.resolve(r)}containsKey(e,t){return b.resolve(this.ai.containsKey(t))}}/**
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
 */class Jl{constructor(e,t){this.ci={},this.overlays={},this.li=new as(0),this.hi=!1,this.hi=!0,this.Pi=new Jf,this.referenceDelegate=e(this),this.Ti=new tp(this),this.indexManager=new Ff,this.remoteDocumentCache=function(i){return new Zf(i)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new xf(t),this.Ei=new Qf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Xf,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ci[e.toKey()];return r||(r=new Yf(t,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,r){D("MemoryPersistence","Starting transaction:",e);const i=new np(this.li.next());return this.referenceDelegate.di(),r(i).next(o=>this.referenceDelegate.Ai(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ri(e,t){return b.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,t)))}}class np extends Od{constructor(e){super(),this.currentSequenceNumber=e}}class vs{constructor(e){this.persistence=e,this.Vi=new ys,this.mi=null}static fi(e){return new vs(e)}get gi(){if(this.mi)return this.mi;throw x(60996)}addReference(e,t,r){return this.Vi.addReference(r,t),this.gi.delete(r.toString()),b.resolve()}removeReference(e,t,r){return this.Vi.removeReference(r,t),this.gi.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),b.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(i=>this.gi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.gi.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.gi,r=>{const i=L.fromPath(r);return this.pi(e,i).next(o=>{o||t.removeEntry(i,K.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(r=>{r?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return b.or([()=>b.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class Cr{constructor(e,t){this.persistence=e,this.yi=new bt(r=>xd(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=qf(this,t)}static fi(e,t){return new Cr(e,t)}di(){}Ai(e){return b.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Sr(e){let t=0;return this.yr(e,r=>{t++}).next(()=>t)}yr(e,t){return b.forEach(this.yi,(r,i)=>this.Dr(e,r,i).next(o=>o?b.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.si(e,l=>this.Dr(e,l,t).next(u=>{u||(r++,o.removeEntry(l,K.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),b.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),b.resolve()}removeReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),b.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),b.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=hr(e.data.value)),t}Dr(e,t,r){return b.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.yi.get(t);return b.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Es{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.ds=r,this.As=i}static Rs(e,t){let r=ge(),i=ge();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Es(e,t.fromCache,r,i)}}/**
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
 */class rp{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ip{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return eh()?8:Md(me())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,r,i){const o={result:null};return this.ws(e,t).next(l=>{o.result=l}).next(()=>{if(!o.result)return this.Ss(e,t,i,r).next(l=>{o.result=l})}).next(()=>{if(o.result)return;const l=new rp;return this.bs(e,t,l).next(u=>{if(o.result=u,this.fs)return this.Ds(e,t,l,u.size)})}).next(()=>o.result)}Ds(e,t,r,i){return r.documentReadCount<this.gs?(Vt()<=U.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",fn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),b.resolve()):(Vt()<=U.DEBUG&&D("QueryEngine","Query:",fn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ps*i?(Vt()<=U.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",fn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yt(t))):b.resolve())}ws(e,t){if(aa(t))return b.resolve(null);let r=yt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=qi(t,null,"F"),r=yt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const l=ge(...o);return this.ys.getDocuments(e,l).next(u=>this.indexManager.getMinOffset(e,r).next(h=>{const f=this.vs(t,u);return this.Cs(t,f,l,h.readTime)?this.ws(e,qi(t,null,"F")):this.Fs(e,f,t,h)}))})))}Ss(e,t,r,i){return aa(t)||i.isEqual(K.min())?b.resolve(null):this.ys.getDocuments(e,r).next(o=>{const l=this.vs(t,o);return this.Cs(t,l,r,i)?b.resolve(null):(Vt()<=U.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),fn(t)),this.Fs(e,l,t,kd(i,In)).next(u=>u))})}vs(e,t){let r=new le(of(e));return t.forEach((i,o)=>{gs(e,o)&&(r=r.add(o))}),r}Cs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}bs(e,t,r){return Vt()<=U.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",fn(t)),this.ys.getDocumentsMatchingQuery(e,t,ot.min(),r)}Fs(e,t,r,i){return this.ys.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(l=>{o=o.insert(l.key,l)}),o))}}/**
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
 */const sp="LocalStore";class op{constructor(e,t,r,i){this.persistence=e,this.Ms=t,this.serializer=i,this.xs=new Ee(j),this.Os=new bt(o=>fs(o),ps),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Kf(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function ap(n,e,t,r){return new op(n,e,t,r)}async function Yl(n,e){const t=G(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t.Ls(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const l=[],u=[];let h=ge();for(const f of i){l.push(f.batchId);for(const y of f.mutations)h=h.add(y.key)}for(const f of o){u.push(f.batchId);for(const y of f.mutations)h=h.add(y.key)}return t.localDocuments.getDocuments(r,h).next(f=>({ks:f,removedBatchIds:l,addedBatchIds:u}))})})}function lp(n,e){const t=G(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=t.Bs.newChangeBuffer({trackRemovals:!0});return function(u,h,f,y){const w=f.batch,R=w.keys();let C=b.resolve();return R.forEach(k=>{C=C.next(()=>y.getEntry(h,k)).next(M=>{const V=f.docVersions.get(k);J(V!==null,48541),M.version.compareTo(V)<0&&(w.applyToRemoteDocument(M,f),M.isValidDocument()&&(M.setReadTime(f.commitVersion),y.addEntry(M)))})}),C.next(()=>u.mutationQueue.removeMutationBatch(h,w))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=ge();for(let f=0;f<u.mutationResults.length;++f)u.mutationResults[f].transformResults.length>0&&(h=h.add(u.batch.mutations[f].key));return h}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function cp(n){const e=G(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function up(n,e){const t=G(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ls),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class ma{constructor(){this.activeTargetIds=df()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hp{constructor(){this.xo=new ma,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,r){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new ma,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class dp{No(e){}shutdown(){}}/**
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
 */const _a="ConnectivityMonitor";class ya{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){D(_a,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){D(_a,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let lr=null;function Qi(){return lr===null?lr=function(){return 268435456+Math.round(2147483648*Math.random())}():lr++,"0x"+lr.toString(16)}/**
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
 */const Ci="RestConnection",fp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class pp{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${r}/databases/${i}`,this.Go=this.databaseId.database===Ir?`project_id=${r}`:`project_id=${r}&database_id=${i}`}zo(e,t,r,i,o){const l=Qi(),u=this.jo(e,t.toUriEncodedString());D(Ci,`Sending RPC '${e}' ${l}:`,u,r);const h={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(h,i,o);const{host:f}=new URL(u),y=Pn(f);return this.Jo(e,u,h,r,y).then(w=>(D(Ci,`Received RPC '${e}' ${l}: `,w),w),w=>{throw jr(Ci,`RPC '${e}' ${l} failed with error: `,w,"url: ",u,"request:",r),w})}Yo(e,t,r,i,o,l){return this.zo(e,t,r,i,o)}Ho(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Gt}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,o)=>e[o]=i),r&&r.headers.forEach((i,o)=>e[o]=i)}jo(e,t){const r=fp[e];return`${this.Ko}/v1/${t}:${r}`}terminate(){}}/**
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
 */class gp{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const fe="WebChannelConnection";class mp extends pp{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,i,o){const l=Qi();return new Promise((u,h)=>{const f=new dl;f.setWithCredentials(!0),f.listenOnce(fl.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case ur.NO_ERROR:const w=f.getResponseJson();D(fe,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(w)),u(w);break;case ur.TIMEOUT:D(fe,`RPC '${e}' ${l} timed out`),h(new N(S.DEADLINE_EXCEEDED,"Request time out"));break;case ur.HTTP_ERROR:const R=f.getStatus();if(D(fe,`RPC '${e}' ${l} failed with status:`,R,"response text:",f.getResponseText()),R>0){let C=f.getResponseJson();Array.isArray(C)&&(C=C[0]);const k=C?.error;if(k&&k.status&&k.message){const M=function(H){const F=H.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(F)>=0?F:S.UNKNOWN}(k.status);h(new N(M,k.message))}else h(new N(S.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new N(S.UNAVAILABLE,"Connection failed."));break;default:x(9055,{l_:e,streamId:l,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{D(fe,`RPC '${e}' ${l} completed.`)}});const y=JSON.stringify(i);D(fe,`RPC '${e}' ${l} sending request:`,i),f.send(t,"POST",y,r,15)})}T_(e,t,r){const i=Qi(),o=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],l=ml(),u=gl(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Ho(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const y=o.join("");D(fe,`Creating RPC '${e}' stream ${i}: ${y}`,h);const w=l.createWebChannel(y,h);let R=!1,C=!1;const k=new gp({Zo:V=>{C?D(fe,`Not sending because RPC '${e}' stream ${i} is closed:`,V):(R||(D(fe,`Opening RPC '${e}' stream ${i} transport.`),w.open(),R=!0),D(fe,`RPC '${e}' stream ${i} sending:`,V),w.send(V))},Xo:()=>w.close()}),M=(V,H,F)=>{V.listen(H,z=>{try{F(z)}catch(Y){setTimeout(()=>{throw Y},0)}})};return M(w,pn.EventType.OPEN,()=>{C||(D(fe,`RPC '${e}' stream ${i} transport opened.`),k.__())}),M(w,pn.EventType.CLOSE,()=>{C||(C=!0,D(fe,`RPC '${e}' stream ${i} transport closed`),k.u_())}),M(w,pn.EventType.ERROR,V=>{C||(C=!0,jr(fe,`RPC '${e}' stream ${i} transport errored. Name:`,V.name,"Message:",V.message),k.u_(new N(S.UNAVAILABLE,"The operation could not be completed")))}),M(w,pn.EventType.MESSAGE,V=>{var H;if(!C){const F=V.data[0];J(!!F,16349);const z=F,Y=z?.error||((H=z[0])===null||H===void 0?void 0:H.error);if(Y){D(fe,`RPC '${e}' stream ${i} received error:`,Y);const Ce=Y.status;let ee=function(m){const _=Z[m];if(_!==void 0)return Af(_)}(Ce),E=Y.message;ee===void 0&&(ee=S.INTERNAL,E="Unknown error status: "+Ce+" with message "+Y.message),C=!0,k.u_(new N(ee,E)),w.close()}else D(fe,`RPC '${e}' stream ${i} received:`,F),k.c_(F)}}),M(u,pl.STAT_EVENT,V=>{V.stat===Fi.PROXY?D(fe,`RPC '${e}' stream ${i} detected buffering proxy`):V.stat===Fi.NOPROXY&&D(fe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.a_()},0),k}}function ki(){return typeof document<"u"?document:null}/**
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
 */function qr(n){return new Rf(n,!0)}/**
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
 */class Zl{constructor(e,t,r=1e3,i=1.5,o=6e4){this.xi=e,this.timerId=t,this.I_=r,this.E_=i,this.d_=o,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const t=Math.floor(this.A_+this.g_()),r=Math.max(0,Date.now()-this.V_),i=Math.max(0,t-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.A_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,i,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
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
 */const va="PersistentStream";class _p{constructor(e,t,r,i,o,l,u,h){this.xi=e,this.y_=r,this.w_=i,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new Zl(e,t)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,t){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(It(t.toString()),It("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):t&&t.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),t=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.S_===t&&this.K_(r,i)},r=>{e(()=>{const i=new N(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.W_(i)})})}K_(e,t){const r=this.U_(this.S_);this.stream=this.G_(e,t),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(i=>{r(()=>this.W_(i))}),this.stream.onMessage(i=>{r(()=>++this.v_==1?this.z_(i):this.onNext(i))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return D(va,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return t=>{this.xi.enqueueAndForget(()=>this.S_===e?t():(D(va,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yp extends _p{constructor(e,t,r,i,o,l){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,l),this.serializer=o}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,t){return this.connection.T_("Write",e,t)}z_(e){return J(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,J(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){J(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const t=Nf(e.writeResults,e.commitTime),r=Mt(e.commitTime);return this.listener.ea(r,t)}ta(){const e={};e.database=kf(this.serializer),this.L_(e)}Z_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Vf(this.serializer,r))};this.L_(t)}}/**
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
 */class vp{}class Ep extends vp{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.na=!1}ra(){if(this.na)throw new N(S.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,r,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.zo(e,Wi(t,r),i,o,l)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(S.UNKNOWN,o.toString())})}Yo(e,t,r,i,o){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,u])=>this.connection.Yo(e,Wi(t,r),i,l,u,o)).catch(l=>{throw l.name==="FirebaseError"?(l.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new N(S.UNKNOWN,l.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class Tp{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(It(t),this.oa=!1):D("OnlineStateTracker",t)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
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
 */const Nn="RemoteStore";class Ip{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=o,this.Ea.No(l=>{r.enqueueAndForget(async()=>{Mn(this)&&(D(Nn,"Restarting streams for network reachability change."),await async function(h){const f=G(h);f.Ta.add(4),await On(f),f.da.set("Unknown"),f.Ta.delete(4),await Gr(f)}(this))})}),this.da=new Tp(r,i)}}async function Gr(n){if(Mn(n))for(const e of n.Ia)await e(!0)}async function On(n){for(const e of n.Ia)await e(!1)}function Mn(n){return G(n).Ta.size===0}async function ec(n,e,t){if(!Dn(e))throw e;n.Ta.add(1),await On(n),n.da.set("Offline"),t||(t=()=>cp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D(Nn,"Retrying IndexedDB access"),await t(),n.Ta.delete(1),await Gr(n)})}function tc(n,e){return e().catch(t=>ec(n,t,e))}async function Wr(n){const e=G(n),t=lt(e);let r=e.ha.length>0?e.ha[e.ha.length-1].batchId:ls;for(;wp(e);)try{const i=await up(e.localStore,r);if(i===null){e.ha.length===0&&t.N_();break}r=i.batchId,Ap(e,i)}catch(i){await ec(e,i)}nc(e)&&rc(e)}function wp(n){return Mn(n)&&n.ha.length<10}function Ap(n,e){n.ha.push(e);const t=lt(n);t.M_()&&t.Y_&&t.Z_(e.mutations)}function nc(n){return Mn(n)&&!lt(n).F_()&&n.ha.length>0}function rc(n){lt(n).start()}async function Rp(n){lt(n).ta()}async function bp(n){const e=lt(n);for(const t of n.ha)e.Z_(t.mutations)}async function Sp(n,e,t){const r=n.ha.shift(),i=_s.from(r,e,t);await tc(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Wr(n)}async function Pp(n,e){e&&lt(n).Y_&&await async function(r,i){if(function(l){return wf(l)&&l!==S.ABORTED}(i.code)){const o=r.ha.shift();lt(r).O_(),await tc(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Wr(r)}}(n,e),nc(n)&&rc(n)}async function Ea(n,e){const t=G(n);t.asyncQueue.verifyOperationInProgress(),D(Nn,"RemoteStore received new credentials");const r=Mn(t);t.Ta.add(3),await On(t),r&&t.da.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ta.delete(3),await Gr(t)}async function Cp(n,e){const t=G(n);e?(t.Ta.delete(2),await Gr(t)):e||(t.Ta.add(2),await On(t),t.da.set("Unknown"))}function lt(n){return n.Va||(n.Va=function(t,r,i){const o=G(t);return o.ra(),new yp(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:Rp.bind(null,n),i_:Pp.bind(null,n),X_:bp.bind(null,n),ea:Sp.bind(null,n)}),n.Ia.push(async e=>{e?(n.Va.O_(),await Wr(n)):(await n.Va.stop(),n.ha.length>0&&(D(Nn,`Stopping write stream with ${n.ha.length} pending writes`),n.ha=[]))})),n.Va}/**
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
 */class Ts{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new _t,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){const l=Date.now()+r,u=new Ts(e,t,l,i,o);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ic(n,e){if(It("AsyncQueue",`${e}: ${n}`),Dn(n))return new N(S.UNAVAILABLE,`${e}: ${n}`);throw n}class kp{constructor(){this.queries=Ta(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(t,r){const i=G(t),o=i.queries;i.queries=Ta(),o.forEach((l,u)=>{for(const h of u.ya)h.onError(r)})})(this,new N(S.ABORTED,"Firestore shutting down"))}}function Ta(){return new bt(n=>Ll(n),Ml)}function Dp(n){n.ba.forEach(e=>{e.next()})}var Ia,wa;(wa=Ia||(Ia={})).Ca="default",wa.Cache="cache";const Vp="SyncEngine";class Np{constructor(e,t,r,i,o,l){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.au={},this.uu=new bt(u=>Ll(u),Ml),this.cu=new Map,this.lu=new Set,this.hu=new Ee(L.comparator),this.Pu=new Map,this.Tu=new ys,this.Iu={},this.Eu=new Map,this.du=Ht.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function Op(n,e,t){const r=Up(n);try{const i=await function(l,u){const h=G(l),f=re.now(),y=u.reduce((C,k)=>C.add(k.key),ge());let w,R;return h.persistence.runTransaction("Locally write mutations","readwrite",C=>{let k=br(),M=ge();return h.Bs.getEntries(C,y).next(V=>{k=V,k.forEach((H,F)=>{F.isValidDocument()||(M=M.add(H))})}).next(()=>h.localDocuments.getOverlayedDocuments(C,k)).next(V=>{w=V;const H=[];for(const F of u){const z=vf(F,w.get(F.key).overlayedDocument);z!=null&&H.push(new St(F.key,z,Pl(z.value.mapValue),Be.exists(!0)))}return h.mutationQueue.addMutationBatch(C,f,H,u)}).next(V=>{R=V;const H=V.applyToLocalDocumentSet(w,M);return h.documentOverlayCache.saveOverlays(C,V.batchId,H)})}).then(()=>({batchId:R.batchId,changes:Ul(w)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(l,u,h){let f=l.Iu[l.currentUser.toKey()];f||(f=new Ee(j)),f=f.insert(u,h),l.Iu[l.currentUser.toKey()]=f}(r,i.batchId,t),await Kr(r,i.changes),await Wr(r.remoteStore)}catch(i){const o=ic(i,"Failed to persist write");t.reject(o)}}function Aa(n,e,t){const r=G(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.uu.forEach((o,l)=>{const u=l.view.Da(e);u.snapshot&&i.push(u.snapshot)}),function(l,u){const h=G(l);h.onlineState=u;let f=!1;h.queries.forEach((y,w)=>{for(const R of w.ya)R.Da(u)&&(f=!0)}),f&&Dp(h)}(r.eventManager,e),i.length&&r.au.j_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Mp(n,e){const t=G(n),r=e.batch.batchId;try{const i=await lp(t.localStore,e);oc(t,r,null),sc(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Kr(t,i)}catch(i){await os(i)}}async function Lp(n,e,t){const r=G(n);try{const i=await function(l,u){const h=G(l);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let y;return h.mutationQueue.lookupMutationBatch(f,u).next(w=>(J(w!==null,37113),y=w.keys(),h.mutationQueue.removeMutationBatch(f,w))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,y,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,y)).next(()=>h.localDocuments.getDocuments(f,y))})}(r.localStore,e);oc(r,e,t),sc(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Kr(r,i)}catch(i){await os(i)}}function sc(n,e){(n.Eu.get(e)||[]).forEach(t=>{t.resolve()}),n.Eu.delete(e)}function oc(n,e,t){const r=G(n);let i=r.Iu[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),r.Iu[r.currentUser.toKey()]=i}}async function Kr(n,e,t){const r=G(n),i=[],o=[],l=[];r.uu.isEmpty()||(r.uu.forEach((u,h)=>{l.push(r.Ru(h,e,t).then(f=>{var y;if((f||t)&&r.isPrimaryClient){const w=f?!f.fromCache:(y=void 0)===null||y===void 0?void 0:y.current;r.sharedClientState.updateQueryState(h.targetId,w?"current":"not-current")}if(f){i.push(f);const w=Es.Rs(h.targetId,f);o.push(w)}}))}),await Promise.all(l),r.au.j_(i),await async function(h,f){const y=G(h);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>b.forEach(f,R=>b.forEach(R.ds,C=>y.persistence.referenceDelegate.addReference(w,R.targetId,C)).next(()=>b.forEach(R.As,C=>y.persistence.referenceDelegate.removeReference(w,R.targetId,C)))))}catch(w){if(!Dn(w))throw w;D(sp,"Failed to update sequence numbers: "+w)}for(const w of f){const R=w.targetId;if(!w.fromCache){const C=y.xs.get(R),k=C.snapshotVersion,M=C.withLastLimboFreeSnapshotVersion(k);y.xs=y.xs.insert(R,M)}}}(r.localStore,o))}async function xp(n,e){const t=G(n);if(!t.currentUser.isEqual(e)){D(Vp,"User change. New user:",e.toKey());const r=await Yl(t.localStore,e);t.currentUser=e,function(o,l){o.Eu.forEach(u=>{u.forEach(h=>{h.reject(new N(S.CANCELLED,l))})}),o.Eu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Kr(t,r.ks)}}function Up(n){const e=G(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Mp.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Lp.bind(null,e),e}class kr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=qr(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,t){return null}bu(e,t){return null}wu(e){return ap(this.persistence,new ip,e.initialUser,this.serializer)}yu(e){return new Jl(vs.fi,this.serializer)}pu(e){return new hp}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}kr.provider={build:()=>new kr};class Fp extends kr{constructor(e){super(),this.cacheSizeBytes=e}Su(e,t){J(this.persistence.referenceDelegate instanceof Cr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new zf(r,e.asyncQueue,t)}yu(e){const t=this.cacheSizeBytes!==void 0?ve.withCacheSize(this.cacheSizeBytes):ve.DEFAULT;return new Jl(r=>Cr.fi(r,t),this.serializer)}}class Xi{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Aa(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xp.bind(null,this.syncEngine),await Cp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new kp}()}createDatastore(e){const t=qr(e.databaseInfo.databaseId),r=function(o){return new mp(o)}(e.databaseInfo);return function(o,l,u,h){return new Ep(o,l,u,h)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,l,u){return new Ip(r,i,o,l,u)}(this.localStore,this.datastore,e.asyncQueue,t=>Aa(this.syncEngine,t,0),function(){return ya.C()?new ya:new dp}())}createSyncEngine(e,t){return function(i,o,l,u,h,f,y){const w=new Np(i,o,l,u,h,f);return y&&(w.Au=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const o=G(i);D(Nn,"RemoteStore shutting down."),o.Ta.add(5),await On(o),o.Ea.shutdown(),o.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Xi.provider={build:()=>new Xi};/**
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
 */const ct="FirestoreClient";class Bp{constructor(e,t,r,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=pe.UNAUTHENTICATED,this.clientId=vl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async l=>{D(ct,"Received user=",l.uid),await this.authCredentialListener(l),this.user=l}),this.appCheckCredentials.start(r,l=>(D(ct,"Received new app check token=",l),this.appCheckCredentialListener(l,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _t;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ic(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Di(n,e){n.asyncQueue.verifyOperationInProgress(),D(ct,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Yl(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Ra(n,e){n.asyncQueue.verifyOperationInProgress();const t=await jp(n);D(ct,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Ea(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Ea(e.remoteStore,i)),n._onlineComponents=e}async function jp(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D(ct,"Using user provided OfflineComponentProvider");try{await Di(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===S.FAILED_PRECONDITION||i.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;jr("Error using user provided cache. Falling back to memory cache: "+t),await Di(n,new kr)}}else D(ct,"Using default OfflineComponentProvider"),await Di(n,new Fp(void 0));return n._offlineComponents}async function $p(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D(ct,"Using user provided OnlineComponentProvider"),await Ra(n,n._uninitializedComponentsProvider._online)):(D(ct,"Using default OnlineComponentProvider"),await Ra(n,new Xi))),n._onlineComponents}function zp(n){return $p(n).then(e=>e.syncEngine)}/**
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
 */function ac(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const ba=new Map;/**
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
 */function lc(n,e,t){if(!t)throw new N(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Hp(n,e,t,r){if(e===!0&&r===!0)throw new N(S.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Sa(n){if(!L.isDocumentKey(n))throw new N(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Pa(n){if(L.isDocumentKey(n))throw new N(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Is(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":x(12329,{type:typeof n})}function cc(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new N(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Is(n);throw new N(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */const uc="firestore.googleapis.com",Ca=!0;class ka{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new N(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=uc,this.ssl=Ca}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Ca;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Xl;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<jf)throw new N(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Hp("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ac((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qr{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ka({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new N(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ka(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ed;switch(r.type){case"firstParty":return new Ad(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=ba.get(t);r&&(D("ComponentProvider","Removing Datastore"),ba.delete(t),r.terminate())}(this),Promise.resolve()}}function qp(n,e,t,r={}){var i;n=cc(n,Qr);const o=Pn(e),l=n._getSettings(),u=Object.assign(Object.assign({},l),{emulatorOptions:n._getEmulatorOptions()}),h=`${e}:${t}`;o&&(il(`https://${h}`),sl("Firestore",!0)),l.host!==uc&&l.host!==h&&jr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},l),{host:h,ssl:o,emulatorOptions:r});if(!vt(f,u)&&(n._setSettings(f),r.mockUserToken)){let y,w;if(typeof r.mockUserToken=="string")y=r.mockUserToken,w=pe.MOCK_USER;else{y=qu(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const R=r.mockUserToken.sub||r.mockUserToken.user_id;if(!R)throw new N(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new pe(R)}n._authCredentials=new Td(new yl(y,w))}}/**
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
 */class ws{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ws(this.firestore,e,this._query)}}class je{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new it(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new je(this.firestore,e,this._key)}}class it extends ws{constructor(e,t,r){super(e,t,nf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new je(this.firestore,null,new L(e))}withConverter(e){return new it(this.firestore,e,this._path)}}function Gp(n,e,...t){if(n=Pe(n),lc("collection","path",e),n instanceof Qr){const r=X.fromString(e,...t);return Pa(r),new it(n,null,r)}{if(!(n instanceof je||n instanceof it))throw new N(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(e,...t));return Pa(r),new it(n.firestore,null,r)}}function Wp(n,e,...t){if(n=Pe(n),arguments.length===1&&(e=vl.newId()),lc("doc","path",e),n instanceof Qr){const r=X.fromString(e,...t);return Sa(r),new je(n,null,new L(r))}{if(!(n instanceof je||n instanceof it))throw new N(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(e,...t));return Sa(r),new je(n.firestore,n instanceof it?n.converter:null,new L(r))}}/**
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
 */const Da="AsyncQueue";class Va{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new Zl(this,"async_queue_retry"),this.ec=()=>{const r=ki();r&&D(Da,"Visibility state changed to "+r.visibilityState),this.C_.p_()},this.tc=e;const t=ki();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const t=ki();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const t=new _t;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!Dn(e))throw e;D(Da,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const t=this.tc.then(()=>(this.Yu=!0,e().catch(r=>{throw this.Ju=r,this.Yu=!1,It("INTERNAL UNHANDLED ERROR: ",Na(r)),r}).then(r=>(this.Yu=!1,r))));return this.tc=t,t}enqueueAfterDelay(e,t,r){this.nc(),this.Xu.indexOf(e)>-1&&(t=0);const i=Ts.createAndSchedule(this,e,t,r,o=>this.oc(o));return this.Hu.push(i),i}nc(){this.Ju&&x(47125,{_c:Na(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const t of this.Hu)if(t.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Hu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const t=this.Hu.indexOf(e);this.Hu.splice(t,1)}}function Na(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class hc extends Qr{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Va,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Va(e),this._firestoreClient=void 0,await e}}}function Kp(n,e){const t=typeof n=="object"?n:cl(),r=typeof n=="string"?n:Ir,i=rs(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=zu("firestore");o&&qp(i,...o)}return i}function Qp(n){if(n._terminated)throw new N(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Xp(n),n._firestoreClient}function Xp(n){var e,t,r;const i=n._freezeSettings(),o=function(u,h,f,y){return new jd(u,h,f,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,ac(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Bp(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const h=u?._online.build();return{_offline:u?._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class bn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bn(Ne.fromBase64String(e))}catch(t){throw new N(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new bn(Ne.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class dc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new N(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class fc{constructor(e){this._methodName=e}}/**
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
 */class pc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new N(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new N(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return j(this._lat,e._lat)||j(this._long,e._long)}}/**
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
 */class gc{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
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
 */const Jp=/^__.*__$/;class Yp{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new St(e,this.data,this.fieldMask,t,this.fieldTransforms):new Vn(e,this.data,t,this.fieldTransforms)}}function mc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x(40011,{hc:n})}}class As{constructor(e,t,r,i,o,l){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Pc(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new As(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Tc({path:r,Ec:!1});return i.dc(e),i}Ac(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Tc({path:r,Ec:!1});return i.Pc(),i}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return Dr(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(mc(this.hc)&&Jp.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class Zp{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||qr(e)}gc(e,t,r,i=!1){return new As({hc:e,methodName:t,fc:r,path:ae.emptyPath(),Ec:!1,mc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function eg(n){const e=n._freezeSettings(),t=qr(n._databaseId);return new Zp(n._databaseId,!!e.ignoreUndefinedProperties,t)}function tg(n,e,t,r,i,o={}){const l=n.gc(o.merge||o.mergeFields?2:0,e,t,i);Ec("Data must be an object, but it was:",l,r);const u=yc(r,l);let h,f;if(o.merge)h=new be(l.fieldMask),f=l.fieldTransforms;else if(o.mergeFields){const y=[];for(const w of o.mergeFields){const R=ng(e,w,t);if(!l.contains(R))throw new N(S.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);sg(y,R)||y.push(R)}h=new be(y),f=l.fieldTransforms.filter(w=>h.covers(w.field))}else h=null,f=l.fieldTransforms;return new Yp(new Re(u),h,f)}function _c(n,e){if(vc(n=Pe(n)))return Ec("Unsupported field value:",e,n),yc(n,e);if(n instanceof fc)return function(r,i){if(!mc(i.hc))throw i.Vc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Vc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(r,i){const o=[];let l=0;for(const u of r){let h=_c(u,i.Rc(l));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),l++}return{arrayValue:{values:o}}}(n,e)}return function(r,i){if((r=Pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ff(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=re.fromDate(r);return{timestampValue:Gi(i.serializer,o)}}if(r instanceof re){const o=new re(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Gi(i.serializer,o)}}if(r instanceof pc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof bn)return{bytesValue:bf(i.serializer,r._byteString)};if(r instanceof je){const o=i.databaseId,l=r.firestore._databaseId;if(!l.isEqual(o))throw i.Vc(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Kl(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof gc)return function(l,u){return{mapValue:{fields:{[bl]:{stringValue:Sl},[ji]:{arrayValue:{values:l.toArray().map(f=>{if(typeof f!="number")throw u.Vc("VectorValues must only contain numeric values.");return ms(u.serializer,f)})}}}}}}(r,i);throw i.Vc(`Unsupported field value: ${Is(r)}`)}(n,e)}function yc(n,e){const t={};return Tl(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Wt(n,(r,i)=>{const o=_c(i,e.Ic(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function vc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof re||n instanceof pc||n instanceof bn||n instanceof je||n instanceof fc||n instanceof gc)}function Ec(n,e,t){if(!vc(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Is(t);throw r==="an object"?e.Vc(n+" a custom object"):e.Vc(n+" "+r)}}function ng(n,e,t){if((e=Pe(e))instanceof dc)return e._internalPath;if(typeof e=="string")return ig(n,e);throw Dr("Field path arguments must be of type string or ",n,!1,void 0,t)}const rg=new RegExp("[~\\*/\\[\\]]");function ig(n,e,t){if(e.search(rg)>=0)throw Dr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new dc(...e.split("."))._internalPath}catch{throw Dr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Dr(n,e,t,r,i){const o=r&&!r.isEmpty(),l=i!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||l)&&(h+=" (found",o&&(h+=` in field ${r}`),l&&(h+=` in document ${i}`),h+=")"),new N(S.INVALID_ARGUMENT,u+n+h)}function sg(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */function og(n,e,t){let r;return r=n?n.toFirestore(e):e,r}function ag(n,e){const t=cc(n.firestore,hc),r=Wp(n),i=og(n.converter,e);return lg(t,[tg(eg(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Be.exists(!1))]).then(()=>r)}function lg(n,e){return function(r,i){const o=new _t;return r.asyncQueue.enqueueAndForget(async()=>Op(await zp(r),i,o)),o.promise}(Qp(n),e)}(function(e,t=!0){(function(i){Gt=i})(qt),Ft(new Et("firestore",(r,{instanceIdentifier:i,options:o})=>{const l=r.getProvider("app").getImmediate(),u=new hc(new Id(r.getProvider("auth-internal")),new Rd(l,r.getProvider("app-check-internal")),function(f,y){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new N(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wr(f.options.projectId,y)}(l,i),l);return o=Object.assign({useFetchStreams:t},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),rt(Go,Wo,e),rt(Go,Wo,"esm2017")})();function Rs(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Tc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cg=Tc,Ic=new Cn("auth","Firebase",Tc());/**
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
 */const Vr=new ts("@firebase/auth");function ug(n,...e){Vr.logLevel<=U.WARN&&Vr.warn(`Auth (${qt}): ${n}`,...e)}function pr(n,...e){Vr.logLevel<=U.ERROR&&Vr.error(`Auth (${qt}): ${n}`,...e)}/**
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
 */function ze(n,...e){throw bs(n,...e)}function De(n,...e){return bs(n,...e)}function wc(n,e,t){const r=Object.assign(Object.assign({},cg()),{[e]:t});return new Cn("auth","Firebase",r).create(e,{appName:n.name})}function st(n){return wc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function bs(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Ic.create(n,...e)}function O(n,e,...t){if(!n)throw bs(e,...t)}function Ue(n){const e="INTERNAL ASSERTION FAILED: "+n;throw pr(e),new Error(e)}function He(n,e){n||Ue(e)}/**
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
 */function Ji(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function hg(){return Oa()==="http:"||Oa()==="https:"}function Oa(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function dg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hg()||Ju()||"connection"in navigator)?navigator.onLine:!0}function fg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ln{constructor(e,t){this.shortDelay=e,this.longDelay=t,He(t>e,"Short delay should be less than long delay!"),this.isMobile=Ku()||Yu()}get(){return dg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ss(n,e){He(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ac{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ue("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ue("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ue("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const gg=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],mg=new Ln(3e4,6e4);function Xr(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Kt(n,e,t,r,i={}){return Rc(n,i,async()=>{let o={},l={};r&&(e==="GET"?l=r:o={body:JSON.stringify(r)});const u=kn(Object.assign({key:n.config.apiKey},l)).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const f=Object.assign({method:e,headers:h},o);return Xu()||(f.referrerPolicy="no-referrer"),n.emulatorConfig&&Pn(n.emulatorConfig.host)&&(f.credentials="include"),Ac.fetch()(await Sc(n,n.config.apiHost,t,u),f)})}async function Rc(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},pg),e);try{const i=new _g(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const l=await o.json();if("needConfirmation"in l)throw cr(n,"account-exists-with-different-credential",l);if(o.ok&&!("errorMessage"in l))return l;{const u=o.ok?l.errorMessage:l.error.message,[h,f]=u.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw cr(n,"credential-already-in-use",l);if(h==="EMAIL_EXISTS")throw cr(n,"email-already-in-use",l);if(h==="USER_DISABLED")throw cr(n,"user-disabled",l);const y=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw wc(n,y,f);ze(n,y)}}catch(i){if(i instanceof qe)throw i;ze(n,"network-request-failed",{message:String(i)})}}async function bc(n,e,t,r,i={}){const o=await Kt(n,e,t,r,i);return"mfaPendingCredential"in o&&ze(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function Sc(n,e,t,r){const i=`${e}${t}?${r}`,o=n,l=o.config.emulator?Ss(n.config,i):`${n.config.apiScheme}://${i}`;return gg.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(l).toString():l}class _g{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(De(this.auth,"network-request-failed")),mg.get())})}}function cr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=De(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */async function yg(n,e){return Kt(n,"POST","/v1/accounts:delete",e)}async function Nr(n,e){return Kt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function En(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vg(n,e=!1){const t=Pe(n),r=await t.getIdToken(e),i=Ps(r);O(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,l=o?.sign_in_provider;return{claims:i,token:r,authTime:En(Vi(i.auth_time)),issuedAtTime:En(Vi(i.iat)),expirationTime:En(Vi(i.exp)),signInProvider:l||null,signInSecondFactor:o?.sign_in_second_factor||null}}function Vi(n){return Number(n)*1e3}function Ps(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return pr("JWT malformed, contained fewer than 3 sections"),null;try{const i=el(t);return i?JSON.parse(i):(pr("Failed to decode base64 JWT payload"),null)}catch(i){return pr("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Ma(n){const e=Ps(n);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Sn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof qe&&Eg(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Eg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Tg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Yi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=En(this.lastLoginAt),this.creationTime=En(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Or(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Sn(n,Nr(t,{idToken:r}));O(i?.users.length,t,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const l=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Pc(o.providerUserInfo):[],u=wg(n.providerData,l),h=n.isAnonymous,f=!(n.email&&o.passwordHash)&&!u?.length,y=h?f:!1,w={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Yi(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(n,w)}async function Ig(n){const e=Pe(n);await Or(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wg(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Pc(n){return n.map(e=>{var{providerId:t}=e,r=Rs(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Ag(n,e){const t=await Rc(n,{},async()=>{const r=kn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,l=await Sc(n,i,"/v1/token",`key=${o}`),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",Ac.fetch()(l,{method:"POST",headers:u,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Rg(n,e){return Kt(n,"POST","/v2/accounts:revokeToken",Xr(n,e))}/**
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
 */class Lt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ma(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){O(e.length!==0,"internal-error");const t=Ma(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:o}=await Ag(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:o}=t,l=new Lt;return r&&(O(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),l.accessToken=i),o&&(O(typeof o=="number","internal-error",{appName:e}),l.expirationTime=o),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Lt,this.toJSON())}_performRefresh(){return Ue("not implemented")}}/**
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
 */function Xe(n,e){O(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Se{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,o=Rs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Tg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Yi(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Sn(this,this.stsTokenManager.getToken(this.auth,e));return O(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return vg(this,e)}reload(){return Ig(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Se(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Or(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ae(this.auth.app))return Promise.reject(st(this.auth));const e=await this.getIdToken();return await Sn(this,yg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,o,l,u,h,f,y;const w=(r=t.displayName)!==null&&r!==void 0?r:void 0,R=(i=t.email)!==null&&i!==void 0?i:void 0,C=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,k=(l=t.photoURL)!==null&&l!==void 0?l:void 0,M=(u=t.tenantId)!==null&&u!==void 0?u:void 0,V=(h=t._redirectEventId)!==null&&h!==void 0?h:void 0,H=(f=t.createdAt)!==null&&f!==void 0?f:void 0,F=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:z,emailVerified:Y,isAnonymous:Ce,providerData:ee,stsTokenManager:E}=t;O(z&&E,e,"internal-error");const p=Lt.fromJSON(this.name,E);O(typeof z=="string",e,"internal-error"),Xe(w,e.name),Xe(R,e.name),O(typeof Y=="boolean",e,"internal-error"),O(typeof Ce=="boolean",e,"internal-error"),Xe(C,e.name),Xe(k,e.name),Xe(M,e.name),Xe(V,e.name),Xe(H,e.name),Xe(F,e.name);const m=new Se({uid:z,auth:e,email:R,emailVerified:Y,displayName:w,isAnonymous:Ce,photoURL:k,phoneNumber:C,tenantId:M,stsTokenManager:p,createdAt:H,lastLoginAt:F});return ee&&Array.isArray(ee)&&(m.providerData=ee.map(_=>Object.assign({},_))),V&&(m._redirectEventId=V),m}static async _fromIdTokenResponse(e,t,r=!1){const i=new Lt;i.updateFromServerResponse(t);const o=new Se({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Or(o),o}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];O(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Pc(i.providerUserInfo):[],l=!(i.email&&i.passwordHash)&&!o?.length,u=new Lt;u.updateFromIdToken(r);const h=new Se({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:l}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Yi(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!o?.length};return Object.assign(h,f),h}}/**
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
 */const La=new Map;function Fe(n){He(n instanceof Function,"Expected a class definition");let e=La.get(n);return e?(He(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,La.set(n,e),e)}/**
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
 */class Cc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Cc.type="NONE";const xa=Cc;/**
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
 */function gr(n,e,t){return`firebase:${n}:${e}:${t}`}class xt{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=gr(this.userKey,i.apiKey,o),this.fullPersistenceKey=gr("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Nr(this.auth,{idToken:e}).catch(()=>{});return t?Se._fromGetAccountInfoResponse(this.auth,t,e):null}return Se._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new xt(Fe(xa),e,r);const i=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=i[0]||Fe(xa);const l=gr(r,e.config.apiKey,e.name);let u=null;for(const f of t)try{const y=await f._get(l);if(y){let w;if(typeof y=="string"){const R=await Nr(e,{idToken:y}).catch(()=>{});if(!R)break;w=await Se._fromGetAccountInfoResponse(e,R,y)}else w=Se._fromJSON(e,y);f!==o&&(u=w),o=f;break}}catch{}const h=i.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new xt(o,e,r):(o=h[0],u&&await o._set(l,u.toJSON()),await Promise.all(t.map(async f=>{if(f!==o)try{await f._remove(l)}catch{}})),new xt(o,e,r))}}/**
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
 */function Ua(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Nc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Mc(e))return"Blackberry";if(Lc(e))return"Webos";if(Dc(e))return"Safari";if((e.includes("chrome/")||Vc(e))&&!e.includes("edge/"))return"Chrome";if(Oc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function kc(n=me()){return/firefox\//i.test(n)}function Dc(n=me()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vc(n=me()){return/crios\//i.test(n)}function Nc(n=me()){return/iemobile/i.test(n)}function Oc(n=me()){return/android/i.test(n)}function Mc(n=me()){return/blackberry/i.test(n)}function Lc(n=me()){return/webos/i.test(n)}function Cs(n=me()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function bg(n=me()){var e;return Cs(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Sg(){return Zu()&&document.documentMode===10}function xc(n=me()){return Cs(n)||Oc(n)||Lc(n)||Mc(n)||/windows phone/i.test(n)||Nc(n)}/**
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
 */function Uc(n,e=[]){let t;switch(n){case"Browser":t=Ua(me());break;case"Worker":t=`${Ua(me())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${qt}/${r}`}/**
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
 */class Pg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((l,u)=>{try{const h=e(o);l(h)}catch(h){u(h)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function Cg(n,e={}){return Kt(n,"GET","/v2/passwordPolicy",Xr(n,e))}/**
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
 */const kg=6;class Dg{constructor(e){var t,r,i,o;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=l.minPasswordLength)!==null&&t!==void 0?t:kg,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,o,l,u;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(t=h.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),h.isValid&&(h.isValid=(r=h.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(i=h.containsLowercaseLetter)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(l=h.containsNumericCharacter)!==null&&l!==void 0?l:!0),h.isValid&&(h.isValid=(u=h.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),h}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class Vg{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fa(this),this.idTokenSubscription=new Fa(this),this.beforeStateQueue=new Pg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ic,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Fe(t)),this._initializationPromise=this.queue(async()=>{var r,i,o;if(!this._deleted&&(this.persistenceManager=await xt.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Nr(this,{idToken:e}),r=await Se._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ae(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=i?._redirectEventId,h=await this.tryRedirectSignIn(e);(!l||l===u)&&h?.user&&(i=h.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Or(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ae(this.app))return Promise.reject(st(this));const t=e?Pe(e):null;return t&&O(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ae(this.app)?Promise.reject(st(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ae(this.app)?Promise.reject(st(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Cg(this),t=new Dg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Cn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Rg(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Fe(e)||this._popupRedirectResolver;O(t,this,"argument-error"),this.redirectPersistenceManager=await xt.create(this,[Fe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let l=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(u,this,"internal-error"),u.then(()=>{l||o(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,r,i);return()=>{l=!0,h()}}else{const h=e.addObserver(t);return()=>{l=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Uc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(Ae(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&ug(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Jr(n){return Pe(n)}class Fa{constructor(e){this.auth=e,this.observer=null,this.addObserver=ah(t=>this.observer=t)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ks={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ng(n){ks=n}function Og(n){return ks.loadJS(n)}function Mg(){return ks.gapiScript}function Lg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function xg(n,e){const t=rs(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(vt(o,e??{}))return i;ze(i,"already-initialized")}return t.initialize({options:e})}function Ug(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Fe);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Fg(n,e,t){const r=Jr(n);O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=Fc(e),{host:l,port:u}=Bg(e),h=u===null?"":`:${u}`,f={url:`${o}//${l}${h}/`},y=Object.freeze({host:l,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){O(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),O(vt(f,r.config.emulator)&&vt(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=f,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,Pn(l)?(il(`${o}//${l}${h}`),sl("Auth",!0)):jg()}function Fc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Bg(n){const e=Fc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Ba(r.substr(o.length+1))}}else{const[o,l]=r.split(":");return{host:o,port:Ba(l)}}}function Ba(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function jg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Bc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ue("not implemented")}_getIdTokenResponse(e){return Ue("not implemented")}_linkToIdToken(e,t){return Ue("not implemented")}_getReauthenticationResolver(e){return Ue("not implemented")}}/**
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
 */async function Ut(n,e){return bc(n,"POST","/v1/accounts:signInWithIdp",Xr(n,e))}/**
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
 */const $g="http://localhost";class Rt extends Bc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Rt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ze("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,o=Rs(t,["providerId","signInMethod"]);if(!r||!i)return null;const l=new Rt(r,i);return l.idToken=o.idToken||void 0,l.accessToken=o.accessToken||void 0,l.secret=o.secret,l.nonce=o.nonce,l.pendingToken=o.pendingToken||null,l}_getIdTokenResponse(e){const t=this.buildRequest();return Ut(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ut(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ut(e,t)}buildRequest(){const e={requestUri:$g,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=kn(t)}return e}}/**
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
 */class jc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class xn extends jc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Je extends xn{constructor(){super("facebook.com")}static credential(e){return Rt._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Je.credential(e.oauthAccessToken)}catch{return null}}}Je.FACEBOOK_SIGN_IN_METHOD="facebook.com";Je.PROVIDER_ID="facebook.com";/**
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
 */class Ye extends xn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Rt._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ye.credential(t,r)}catch{return null}}}Ye.GOOGLE_SIGN_IN_METHOD="google.com";Ye.PROVIDER_ID="google.com";/**
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
 */class Ze extends xn{constructor(){super("github.com")}static credential(e){return Rt._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ze.credentialFromTaggedObject(e)}static credentialFromError(e){return Ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ze.credential(e.oauthAccessToken)}catch{return null}}}Ze.GITHUB_SIGN_IN_METHOD="github.com";Ze.PROVIDER_ID="github.com";/**
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
 */class et extends xn{constructor(){super("twitter.com")}static credential(e,t){return Rt._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return et.credential(t,r)}catch{return null}}}et.TWITTER_SIGN_IN_METHOD="twitter.com";et.PROVIDER_ID="twitter.com";/**
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
 */async function zg(n,e){return bc(n,"POST","/v1/accounts:signUp",Xr(n,e))}/**
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
 */class ut{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const o=await Se._fromIdTokenResponse(e,r,i),l=ja(r);return new ut({user:o,providerId:l,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=ja(r);return new ut({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function ja(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function Hg(n){var e;if(Ae(n.app))return Promise.reject(st(n));const t=Jr(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new ut({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await zg(t,{returnSecureToken:!0}),i=await ut._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
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
 */class Mr extends qe{constructor(e,t,r,i){var o;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Mr.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Mr(e,t,r,i)}}function $c(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Mr._fromErrorAndOperation(n,o,e,r):o})}async function qg(n,e,t=!1){const r=await Sn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ut._forOperation(n,"link",r)}/**
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
 */async function Gg(n,e,t=!1){const{auth:r}=n;if(Ae(r.app))return Promise.reject(st(r));const i="reauthenticate";try{const o=await Sn(n,$c(r,i,e,n),t);O(o.idToken,r,"internal-error");const l=Ps(o.idToken);O(l,r,"internal-error");const{sub:u}=l;return O(n.uid===u,r,"user-mismatch"),ut._forOperation(n,i,o)}catch(o){throw o?.code==="auth/user-not-found"&&ze(r,"user-mismatch"),o}}/**
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
 */async function Wg(n,e,t=!1){if(Ae(n.app))return Promise.reject(st(n));const r="signIn",i=await $c(n,r,e),o=await ut._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}function Kg(n,e,t,r){return Pe(n).onIdTokenChanged(e,t,r)}function Qg(n,e,t){return Pe(n).beforeAuthStateChanged(e,t)}const Lr="__sak";/**
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
 */class zc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Lr,"1"),this.storage.removeItem(Lr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Xg=1e3,Jg=10;class Hc extends zc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((l,u,h)=>{this.notifyListeners(l,h)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const l=this.storage.getItem(r);!t&&this.localCache[r]===l||this.notifyListeners(r,l)},o=this.storage.getItem(r);Sg()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Jg):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Xg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hc.type="LOCAL";const Yg=Hc;/**
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
 */class qc extends zc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}qc.type="SESSION";const Gc=qc;/**
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
 */function Zg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Yr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Yr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:o}=t.data,l=this.handlersMap[i];if(!l?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const u=Array.from(l).map(async f=>f(t.origin,o)),h=await Zg(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yr.receivers=[];/**
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
 */function Ds(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class em{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,l;return new Promise((u,h)=>{const f=Ds("",20);i.port1.start();const y=setTimeout(()=>{h(new Error("unsupported_event"))},r);l={messageChannel:i,onMessage(w){const R=w;if(R.data.eventId===f)switch(R.data.status){case"ack":clearTimeout(y),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(R.data.response);break;default:clearTimeout(y),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(l),i.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[i.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
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
 */function Ve(){return window}function tm(n){Ve().location.href=n}/**
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
 */function Wc(){return typeof Ve().WorkerGlobalScope<"u"&&typeof Ve().importScripts=="function"}async function nm(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rm(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function im(){return Wc()?self:null}/**
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
 */const Kc="firebaseLocalStorageDb",sm=1,xr="firebaseLocalStorage",Qc="fbase_key";class Un{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Zr(n,e){return n.transaction([xr],e?"readwrite":"readonly").objectStore(xr)}function om(){const n=indexedDB.deleteDatabase(Kc);return new Un(n).toPromise()}function Zi(){const n=indexedDB.open(Kc,sm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(xr,{keyPath:Qc})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(xr)?e(r):(r.close(),await om(),e(await Zi()))})})}async function $a(n,e,t){const r=Zr(n,!0).put({[Qc]:e,value:t});return new Un(r).toPromise()}async function am(n,e){const t=Zr(n,!1).get(e),r=await new Un(t).toPromise();return r===void 0?null:r.value}function za(n,e){const t=Zr(n,!0).delete(e);return new Un(t).toPromise()}const lm=800,cm=3;class Xc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>cm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yr._getInstance(im()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await nm(),!this.activeServiceWorker)return;this.sender=new em(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zi();return await $a(e,Lr,"1"),await za(e,Lr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>$a(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>am(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>za(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Zr(i,!1).getAll();return new Un(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xc.type="LOCAL";const um=Xc;new Ln(3e4,6e4);/**
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
 */function hm(n,e){return e?Fe(e):(O(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Vs extends Bc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ut(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ut(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ut(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function dm(n){return Wg(n.auth,new Vs(n),n.bypassAuthState)}function fm(n){const{auth:e,user:t}=n;return O(t,e,"internal-error"),Gg(t,new Vs(n),n.bypassAuthState)}async function pm(n){const{auth:e,user:t}=n;return O(t,e,"internal-error"),qg(t,new Vs(n),n.bypassAuthState)}/**
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
 */class Jc{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:l,type:u}=e;if(l){this.reject(l);return}const h={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(h))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dm;case"linkViaPopup":case"linkViaRedirect":return pm;case"reauthViaPopup":case"reauthViaRedirect":return fm;default:ze(this.auth,"internal-error")}}resolve(e){He(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){He(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const gm=new Ln(2e3,1e4);class Ot extends Jc{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Ot.currentPopupAction&&Ot.currentPopupAction.cancel(),Ot.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){He(this.filter.length===1,"Popup operations only handle one event");const e=Ds();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(De(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(De(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ot.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(De(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gm.get())};e()}}Ot.currentPopupAction=null;/**
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
 */const mm="pendingRedirect",mr=new Map;class _m extends Jc{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=mr.get(this.auth._key());if(!e){try{const r=await ym(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}mr.set(this.auth._key(),e)}return this.bypassAuthState||mr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ym(n,e){const t=Tm(e),r=Em(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function vm(n,e){mr.set(n._key(),e)}function Em(n){return Fe(n._redirectPersistence)}function Tm(n){return gr(mm,n.config.apiKey,n.name)}async function Im(n,e,t=!1){if(Ae(n.app))return Promise.reject(st(n));const r=Jr(n),i=hm(r,e),l=await new _m(r,i,t).execute();return l&&!t&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,e)),l}/**
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
 */const wm=10*60*1e3;class Am{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Rm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Yc(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(De(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wm&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ha(e))}saveEventToCache(e){this.cachedEventUids.add(Ha(e)),this.lastProcessedEventTime=Date.now()}}function Ha(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Yc({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Rm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yc(n);default:return!1}}/**
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
 */async function bm(n,e={}){return Kt(n,"GET","/v1/projects",e)}/**
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
 */const Sm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Pm=/^https?/;async function Cm(n){if(n.config.emulator)return;const{authorizedDomains:e}=await bm(n);for(const t of e)try{if(km(t))return}catch{}ze(n,"unauthorized-domain")}function km(n){const e=Ji(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const l=new URL(n);return l.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&l.hostname===r}if(!Pm.test(t))return!1;if(Sm.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Dm=new Ln(3e4,6e4);function qa(){const n=Ve().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Vm(n){return new Promise((e,t)=>{var r,i,o;function l(){qa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qa(),t(De(n,"network-request-failed"))},timeout:Dm.get()})}if(!((i=(r=Ve().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Ve().gapi)===null||o===void 0)&&o.load)l();else{const u=Lg("iframefcb");return Ve()[u]=()=>{gapi.load?l():t(De(n,"network-request-failed"))},Og(`${Mg()}?onload=${u}`).catch(h=>t(h))}}).catch(e=>{throw _r=null,e})}let _r=null;function Nm(n){return _r=_r||Vm(n),_r}/**
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
 */const Om=new Ln(5e3,15e3),Mm="__/auth/iframe",Lm="emulator/auth/iframe",xm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Um=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fm(n){const e=n.config;O(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ss(e,Lm):`https://${n.config.authDomain}/${Mm}`,r={apiKey:e.apiKey,appName:n.name,v:qt},i=Um.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${kn(r).slice(1)}`}async function Bm(n){const e=await Nm(n),t=Ve().gapi;return O(t,n,"internal-error"),e.open({where:document.body,url:Fm(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xm,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const l=De(n,"network-request-failed"),u=Ve().setTimeout(()=>{o(l)},Om.get());function h(){Ve().clearTimeout(u),i(r)}r.ping(h).then(h,()=>{o(l)})}))}/**
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
 */const jm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$m=500,zm=600,Hm="_blank",qm="http://localhost";class Ga{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Gm(n,e,t,r=$m,i=zm){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const h=Object.assign(Object.assign({},jm),{width:r.toString(),height:i.toString(),top:o,left:l}),f=me().toLowerCase();t&&(u=Vc(f)?Hm:t),kc(f)&&(e=e||qm,h.scrollbars="yes");const y=Object.entries(h).reduce((R,[C,k])=>`${R}${C}=${k},`,"");if(bg(f)&&u!=="_self")return Wm(e||"",u),new Ga(null);const w=window.open(e||"",u,y);O(w,n,"popup-blocked");try{w.focus()}catch{}return new Ga(w)}function Wm(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Km="__/auth/handler",Qm="emulator/auth/handler",Xm=encodeURIComponent("fac");async function Wa(n,e,t,r,i,o){O(n.config.authDomain,n,"auth-domain-config-required"),O(n.config.apiKey,n,"invalid-api-key");const l={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:qt,eventId:i};if(e instanceof jc){e.setDefaultLanguage(n.languageCode),l.providerId=e.providerId||"",oh(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,w]of Object.entries({}))l[y]=w}if(e instanceof xn){const y=e.getScopes().filter(w=>w!=="");y.length>0&&(l.scopes=y.join(","))}n.tenantId&&(l.tid=n.tenantId);const u=l;for(const y of Object.keys(u))u[y]===void 0&&delete u[y];const h=await n._getAppCheckToken(),f=h?`#${Xm}=${encodeURIComponent(h)}`:"";return`${Jm(n)}?${kn(u).slice(1)}${f}`}function Jm({config:n}){return n.emulator?Ss(n,Qm):`https://${n.authDomain}/${Km}`}/**
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
 */const Ni="webStorageSupport";class Ym{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gc,this._completeRedirectFn=Im,this._overrideRedirectResult=vm}async _openPopup(e,t,r,i){var o;He((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const l=await Wa(e,t,r,Ji(),i);return Gm(e,l,Ds())}async _openRedirect(e,t,r,i){await this._originValidation(e);const o=await Wa(e,t,r,Ji(),i);return tm(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(He(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Bm(e),r=new Am(e);return t.register("authEvent",i=>(O(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ni,{type:Ni},i=>{var o;const l=(o=i?.[0])===null||o===void 0?void 0:o[Ni];l!==void 0&&t(!!l),ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Cm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return xc()||Dc()||Cs()}}const Zm=Ym;var Ka="@firebase/auth",Qa="1.10.6";/**
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
 */class e_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function t_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function n_(n){Ft(new Et("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:l,authDomain:u}=r.options;O(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:l,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uc(n)},f=new Vg(r,i,o,h);return Ug(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ft(new Et("auth-internal",e=>{const t=Jr(e.getProvider("auth").getImmediate());return(r=>new e_(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),rt(Ka,Qa,t_(n)),rt(Ka,Qa,"esm2017")}/**
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
 */const r_=5*60,i_=rl("authIdTokenMaxAge")||r_;let Xa=null;const s_=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>i_)return;const i=t?.token;Xa!==i&&(Xa=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function o_(n=cl()){const e=rs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=xg(n,{popupRedirectResolver:Zm,persistence:[um,Yg,Gc]}),r=rl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const l=s_(o.toString());Qg(t,l,()=>l(t.currentUser)),Kg(t,u=>l(u))}}const i=tl("auth");return i&&Fg(t,`http://${i}`),t}function a_(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Ng({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const o=De("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",a_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});n_("Browser");const l_={apiKey:"AIzaSyB-ve_suzb3nULDHJE4G_gkHQcMx97asf8",authDomain:"quize-44349.firebaseapp.com",projectId:"quize-44349",storageBucket:"quize-44349.firebasestorage.app",messagingSenderId:"80986581205",appId:"1:80986581205:web:b44731bdefbf15a8959a5c",measurementId:"G-K3XP09NTJ1"},Zc=ll(l_),Ur=o_(Zc),c_=Kp(Zc);async function u_(){try{return(await(await fetch("input/questions.json")).json()).questions}catch(n){throw console.error("Error loading questions:",n),n}}function h_(n){const e=document.getElementById("quiz-form"),t=n.map((r,i)=>`
        <div class="question-group" data-question-id="${r.id}">
            <div class="question-text">${i+1}. ${r.text}</div>
            <div class="choices-group">
                ${r.options.map((o,l)=>`
                    <label class="choice-container">
                        <input type="radio" name="${r.id}" value="${l}" required>
                        ${o}
                    </label>
                `).join("")}
            </div>
            <div class="correct-answer-text"></div>
        </div>
    `).join("");document.getElementById("score-banner"),e.innerHTML=t+e.innerHTML.substring(e.innerHTML.indexOf('<div id="score-banner"'))}function d_(n,e){e.forEach(t=>{const r=document.querySelector(`[data-question-id="${t.id}"]`),i=n.get(t.id),o=t.correctAnswer.toString();if(r.querySelectorAll(".choice-container").forEach((u,h)=>{const f=u.querySelector('input[type="radio"]');f.value===i?i===o?u.classList.add("correct"):u.classList.add("incorrect"):f.value===o&&u.classList.add("correct"),f.disabled=!0}),i!==o){const u=r.querySelector(".correct-answer-text");u.textContent=`Correct answer: ${t.options[t.correctAnswer]}`,u.style.display="block"}})}function f_(n,e){let t=0;return e.forEach(r=>{n.get(r.id)===r.correctAnswer.toString()&&t++}),{score:t,totalQuestions:e.length,percentage:t/e.length*100}}let Fr=[],Ja=[];async function p_(){try{return(await(await fetch("input/group.json")).json()).groups}catch(n){throw console.error("Error loading groups:",n),n}}function g_(n){const e=document.getElementById("group"),t='<option value="" disabled selected>Select Group *</option>';e.innerHTML=t,n.forEach(r=>{const i=document.createElement("option");i.value=r.value,i.textContent=r.label,e.appendChild(i)})}function m_(n){const e=document.getElementById("auth-state");e.style.display="block",n?(e.textContent=`Authenticated (Anonymous User ID: ${n.uid})`,e.style.backgroundColor="#e6ffe6",e.style.color="#006600"):(e.textContent="Not authenticated",e.style.backgroundColor="#ffe6e6",e.style.color="#990000")}function es(n,e){const t=document.getElementById("successMessage"),r=document.getElementById("error");n==="success"?(t.textContent=e,t.style.display="block",r.style.display="none",setTimeout(()=>{t.style.display="none"},3e3)):(r.textContent=e,r.style.display="block",t.style.display="none")}function __(n){const e=`Quiz Score: ${n.score}/${n.totalQuestions} (${n.percentage.toFixed(2)}%)`,t=document.getElementById("top-score-banner");t.textContent=e,t.style.display="block";const r=document.getElementById("bottom-score-banner");r.textContent=e,r.style.display="block"}async function y_(n){n.preventDefault();const e=document.getElementById("submit-btn");e.disabled=!0;try{if(!Ur.currentUser)throw new Error("Please wait for authentication to complete");const t=document.getElementById("name").value.trim(),r=document.getElementById("group").value;if(!t)throw new Error("Please enter your name");if(!r)throw new Error("Please select your group");const i=new FormData(n.target),o=f_(i,Fr);document.getElementById("marks").value=o.score;const l=o.score,u={Name:t,Group:r,Marks:l,Percentage:parseFloat(o.percentage.toFixed(2)),Timestamp:new Date().toISOString(),UserId:Ur.currentUser.uid},h=Gp(c_,"quiz");await ag(h,u),__(o),d_(i,Fr),es("success","Quiz submitted and data saved successfully!"),document.getElementById("name").value="",document.getElementById("group").value="",document.getElementById("marks").value="",e.style.display="none"}catch(t){console.error("Error submitting data:",t),es("error",t.message),e.disabled=!1}}async function v_(){try{[Fr,Ja]=await Promise.all([u_(),p_()]),h_(Fr),g_(Ja),Ur.onAuthStateChanged(e=>{console.log("Auth state changed:",e?"authenticated":"not authenticated"),m_(e)}),await Hg(Ur),console.log("Anonymous authentication initiated"),document.getElementById("quiz-form").addEventListener("submit",y_)}catch(n){console.error("Error initializing app:",n),es("error",n.message)}}v_();
