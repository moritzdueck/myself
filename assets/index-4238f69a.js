(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function V6(c,a){const e=Object.create(null),r=c.split(",");for(let i=0;i<r.length;i++)e[r[i]]=!0;return a?i=>!!e[i.toLowerCase()]:i=>!!e[i]}const a1={},S2=[],k1=()=>{},Wn=()=>!1,Zn=/^on[^a-z]/,Q3=c=>Zn.test(c),M6=c=>c.startsWith("onUpdate:"),t1=Object.assign,C6=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},jn=Object.prototype.hasOwnProperty,W=(c,a)=>jn.call(c,a),D=Array.isArray,Z2=c=>c4(c)==="[object Map]",Xn=c=>c4(c)==="[object Set]",q=c=>typeof c=="function",z1=c=>typeof c=="string",d6=c=>typeof c=="symbol",i1=c=>c!==null&&typeof c=="object",l5=c=>i1(c)&&q(c.then)&&q(c.catch),$n=Object.prototype.toString,c4=c=>$n.call(c),Yn=c=>c4(c).slice(8,-1),Kn=c=>c4(c)==="[object Object]",L6=c=>z1(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,_3=V6(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),a4=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},Jn=/-(\w)/g,U1=a4(c=>c.replace(Jn,(a,e)=>e?e.toUpperCase():"")),Qn=/\B([A-Z])/g,R2=a4(c=>c.replace(Qn,"-$1").toLowerCase()),e4=a4(c=>c.charAt(0).toUpperCase()+c.slice(1)),T4=a4(c=>c?`on${e4(c)}`:""),J2=(c,a)=>!Object.is(c,a),P4=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},I3=(c,a,e)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,value:e})},cf=c=>{const a=parseFloat(c);return isNaN(a)?c:a};let a0;const W4=()=>a0||(a0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function g6(c){if(D(c)){const a={};for(let e=0;e<c.length;e++){const r=c[e],i=z1(r)?sf(r):g6(r);if(i)for(const s in i)a[s]=i[s]}return a}else{if(z1(c))return c;if(i1(c))return c}}const af=/;(?![^(]*\))/g,ef=/:([^]+)/,rf=/\/\*[^]*?\*\//g;function sf(c){const a={};return c.replace(rf,"").split(af).forEach(e=>{if(e){const r=e.split(ef);r.length>1&&(a[r[0].trim()]=r[1].trim())}}),a}function x6(c){let a="";if(z1(c))a=c;else if(D(c))for(let e=0;e<c.length;e++){const r=x6(c[e]);r&&(a+=r+" ")}else if(i1(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const nf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ff=V6(nf);function o5(c){return!!c||c===""}let N1;class lf{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=N1,!a&&N1&&(this.index=(N1.scopes||(N1.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const e=N1;try{return N1=this,a()}finally{N1=e}}}on(){N1=this}off(){N1=this.parent}stop(a){if(this._active){let e,r;for(e=0,r=this.effects.length;e<r;e++)this.effects[e].stop();for(e=0,r=this.cleanups.length;e<r;e++)this.cleanups[e]();if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function of(c,a=N1){a&&a.active&&a.effects.push(c)}function tf(){return N1}const b6=c=>{const a=new Set(c);return a.w=0,a.n=0,a},t5=c=>(c.w&i2)>0,m5=c=>(c.n&i2)>0,mf=({deps:c})=>{if(c.length)for(let a=0;a<c.length;a++)c[a].w|=i2},vf=c=>{const{deps:a}=c;if(a.length){let e=0;for(let r=0;r<a.length;r++){const i=a[r];t5(i)&&!m5(i)?i.delete(c):a[e++]=i,i.w&=~i2,i.n&=~i2}a.length=e}},Z4=new WeakMap;let O2=0,i2=1;const j4=30;let S1;const u2=Symbol(""),X4=Symbol("");class N6{constructor(a,e=null,r){this.fn=a,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,of(this,r)}run(){if(!this.active)return this.fn();let a=S1,e=e2;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=S1,S1=this,e2=!0,i2=1<<++O2,O2<=j4?mf(this):e0(this),this.fn()}finally{O2<=j4&&vf(this),i2=1<<--O2,S1=this.parent,e2=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){S1===this?this.deferStop=!0:this.active&&(e0(this),this.onStop&&this.onStop(),this.active=!1)}}function e0(c){const{deps:a}=c;if(a.length){for(let e=0;e<a.length;e++)a[e].delete(c);a.length=0}}let e2=!0;const v5=[];function _2(){v5.push(e2),e2=!1}function F2(){const c=v5.pop();e2=c===void 0?!0:c}function d1(c,a,e){if(e2&&S1){let r=Z4.get(c);r||Z4.set(c,r=new Map);let i=r.get(e);i||r.set(e,i=b6()),z5(i)}}function z5(c,a){let e=!1;O2<=j4?m5(c)||(c.n|=i2,e=!t5(c)):e=!c.has(S1),e&&(c.add(S1),S1.deps.push(c))}function j1(c,a,e,r,i,s){const n=Z4.get(c);if(!n)return;let f=[];if(a==="clear")f=[...n.values()];else if(e==="length"&&D(c)){const l=Number(r);n.forEach((o,m)=>{(m==="length"||m>=l)&&f.push(o)})}else switch(e!==void 0&&f.push(n.get(e)),a){case"add":D(c)?L6(e)&&f.push(n.get("length")):(f.push(n.get(u2)),Z2(c)&&f.push(n.get(X4)));break;case"delete":D(c)||(f.push(n.get(u2)),Z2(c)&&f.push(n.get(X4)));break;case"set":Z2(c)&&f.push(n.get(u2));break}if(f.length===1)f[0]&&$4(f[0]);else{const l=[];for(const o of f)o&&l.push(...o);$4(b6(l))}}function $4(c,a){const e=D(c)?c:[...c];for(const r of e)r.computed&&r0(r);for(const r of e)r.computed||r0(r)}function r0(c,a){(c!==S1||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}const zf=V6("__proto__,__v_isRef,__isVue"),h5=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(d6)),hf=S6(),Hf=S6(!1,!0),uf=S6(!0),i0=pf();function pf(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const r=Z(this);for(let s=0,n=this.length;s<n;s++)d1(r,"get",s+"");const i=r[a](...e);return i===-1||i===!1?r[a](...e.map(Z)):i}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){_2();const r=Z(this)[a].apply(this,e);return F2(),r}}),c}function Vf(c){const a=Z(this);return d1(a,"has",c),a.hasOwnProperty(c)}function S6(c=!1,a=!1){return function(r,i,s){if(i==="__v_isReactive")return!c;if(i==="__v_isReadonly")return c;if(i==="__v_isShallow")return a;if(i==="__v_raw"&&s===(c?a?Ef:M5:a?V5:p5).get(r))return r;const n=D(r);if(!c){if(n&&W(i0,i))return Reflect.get(i0,i,s);if(i==="hasOwnProperty")return Vf}const f=Reflect.get(r,i,s);return(d6(i)?h5.has(i):zf(i))||(c||d1(r,"get",i),a)?f:u1(f)?n&&L6(i)?f:f.value:i1(f)?c?C5(f):A6(f):f}}const Mf=H5(),Cf=H5(!0);function H5(c=!1){return function(e,r,i,s){let n=e[r];if(k2(n)&&u1(n)&&!u1(i))return!1;if(!c&&(!G3(i)&&!k2(i)&&(n=Z(n),i=Z(i)),!D(e)&&u1(n)&&!u1(i)))return n.value=i,!0;const f=D(e)&&L6(r)?Number(r)<e.length:W(e,r),l=Reflect.set(e,r,i,s);return e===Z(s)&&(f?J2(i,n)&&j1(e,"set",r,i):j1(e,"add",r,i)),l}}function df(c,a){const e=W(c,a);c[a];const r=Reflect.deleteProperty(c,a);return r&&e&&j1(c,"delete",a,void 0),r}function Lf(c,a){const e=Reflect.has(c,a);return(!d6(a)||!h5.has(a))&&d1(c,"has",a),e}function gf(c){return d1(c,"iterate",D(c)?"length":u2),Reflect.ownKeys(c)}const u5={get:hf,set:Mf,deleteProperty:df,has:Lf,ownKeys:gf},xf={get:uf,set(c,a){return!0},deleteProperty(c,a){return!0}},bf=t1({},u5,{get:Hf,set:Cf}),w6=c=>c,r4=c=>Reflect.getPrototypeOf(c);function d3(c,a,e=!1,r=!1){c=c.__v_raw;const i=Z(c),s=Z(a);e||(a!==s&&d1(i,"get",a),d1(i,"get",s));const{has:n}=r4(i),f=r?w6:e?T6:Q2;if(n.call(i,a))return f(c.get(a));if(n.call(i,s))return f(c.get(s));c!==i&&c.get(a)}function L3(c,a=!1){const e=this.__v_raw,r=Z(e),i=Z(c);return a||(c!==i&&d1(r,"has",c),d1(r,"has",i)),c===i?e.has(c):e.has(c)||e.has(i)}function g3(c,a=!1){return c=c.__v_raw,!a&&d1(Z(c),"iterate",u2),Reflect.get(c,"size",c)}function s0(c){c=Z(c);const a=Z(this);return r4(a).has.call(a,c)||(a.add(c),j1(a,"add",c,c)),this}function n0(c,a){a=Z(a);const e=Z(this),{has:r,get:i}=r4(e);let s=r.call(e,c);s||(c=Z(c),s=r.call(e,c));const n=i.call(e,c);return e.set(c,a),s?J2(a,n)&&j1(e,"set",c,a):j1(e,"add",c,a),this}function f0(c){const a=Z(this),{has:e,get:r}=r4(a);let i=e.call(a,c);i||(c=Z(c),i=e.call(a,c)),r&&r.call(a,c);const s=a.delete(c);return i&&j1(a,"delete",c,void 0),s}function l0(){const c=Z(this),a=c.size!==0,e=c.clear();return a&&j1(c,"clear",void 0,void 0),e}function x3(c,a){return function(r,i){const s=this,n=s.__v_raw,f=Z(n),l=a?w6:c?T6:Q2;return!c&&d1(f,"iterate",u2),n.forEach((o,m)=>r.call(i,l(o),l(m),s))}}function b3(c,a,e){return function(...r){const i=this.__v_raw,s=Z(i),n=Z2(s),f=c==="entries"||c===Symbol.iterator&&n,l=c==="keys"&&n,o=i[c](...r),m=e?w6:a?T6:Q2;return!a&&d1(s,"iterate",l?X4:u2),{next(){const{value:z,done:h}=o.next();return h?{value:z,done:h}:{value:f?[m(z[0]),m(z[1])]:m(z),done:h}},[Symbol.iterator](){return this}}}}function Q1(c){return function(...a){return c==="delete"?!1:this}}function Nf(){const c={get(s){return d3(this,s)},get size(){return g3(this)},has:L3,add:s0,set:n0,delete:f0,clear:l0,forEach:x3(!1,!1)},a={get(s){return d3(this,s,!1,!0)},get size(){return g3(this)},has:L3,add:s0,set:n0,delete:f0,clear:l0,forEach:x3(!1,!0)},e={get(s){return d3(this,s,!0)},get size(){return g3(this,!0)},has(s){return L3.call(this,s,!0)},add:Q1("add"),set:Q1("set"),delete:Q1("delete"),clear:Q1("clear"),forEach:x3(!0,!1)},r={get(s){return d3(this,s,!0,!0)},get size(){return g3(this,!0)},has(s){return L3.call(this,s,!0)},add:Q1("add"),set:Q1("set"),delete:Q1("delete"),clear:Q1("clear"),forEach:x3(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{c[s]=b3(s,!1,!1),e[s]=b3(s,!0,!1),a[s]=b3(s,!1,!0),r[s]=b3(s,!0,!0)}),[c,e,a,r]}const[Sf,wf,yf,Af]=Nf();function y6(c,a){const e=a?c?Af:yf:c?wf:Sf;return(r,i,s)=>i==="__v_isReactive"?!c:i==="__v_isReadonly"?c:i==="__v_raw"?r:Reflect.get(W(e,i)&&i in r?e:r,i,s)}const kf={get:y6(!1,!1)},Tf={get:y6(!1,!0)},Pf={get:y6(!0,!1)},p5=new WeakMap,V5=new WeakMap,M5=new WeakMap,Ef=new WeakMap;function Rf(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _f(c){return c.__v_skip||!Object.isExtensible(c)?0:Rf(Yn(c))}function A6(c){return k2(c)?c:k6(c,!1,u5,kf,p5)}function Ff(c){return k6(c,!1,bf,Tf,V5)}function C5(c){return k6(c,!0,xf,Pf,M5)}function k6(c,a,e,r,i){if(!i1(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const s=i.get(c);if(s)return s;const n=_f(c);if(n===0)return c;const f=new Proxy(c,n===2?r:e);return i.set(c,f),f}function w2(c){return k2(c)?w2(c.__v_raw):!!(c&&c.__v_isReactive)}function k2(c){return!!(c&&c.__v_isReadonly)}function G3(c){return!!(c&&c.__v_isShallow)}function d5(c){return w2(c)||k2(c)}function Z(c){const a=c&&c.__v_raw;return a?Z(a):c}function L5(c){return I3(c,"__v_skip",!0),c}const Q2=c=>i1(c)?A6(c):c,T6=c=>i1(c)?C5(c):c;function g5(c){e2&&S1&&(c=Z(c),z5(c.dep||(c.dep=b6())))}function x5(c,a){c=Z(c);const e=c.dep;e&&$4(e)}function u1(c){return!!(c&&c.__v_isRef===!0)}function b1(c){return Bf(c,!1)}function Bf(c,a){return u1(c)?c:new Df(c,a)}class Df{constructor(a,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?a:Z(a),this._value=e?a:Q2(a)}get value(){return g5(this),this._value}set value(a){const e=this.__v_isShallow||G3(a)||k2(a);a=e?a:Z(a),J2(a,this._rawValue)&&(this._rawValue=a,this._value=e?a:Q2(a),x5(this))}}function Uf(c){return u1(c)?c.value:c}const qf={get:(c,a,e)=>Uf(Reflect.get(c,a,e)),set:(c,a,e,r)=>{const i=c[a];return u1(i)&&!u1(e)?(i.value=e,!0):Reflect.set(c,a,e,r)}};function b5(c){return w2(c)?c:new Proxy(c,qf)}class Of{constructor(a,e,r,i){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new N6(a,()=>{this._dirty||(this._dirty=!0,x5(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const a=Z(this);return g5(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}function If(c,a,e=!1){let r,i;const s=q(c);return s?(r=c,i=k1):(r=c.get,i=c.set),new Of(r,i,s||!i,e)}function r2(c,a,e,r){let i;try{i=r?c(...r):c()}catch(s){i4(s,a,e)}return i}function T1(c,a,e,r){if(q(c)){const s=r2(c,a,e,r);return s&&l5(s)&&s.catch(n=>{i4(n,a,e)}),s}const i=[];for(let s=0;s<c.length;s++)i.push(T1(c[s],a,e,r));return i}function i4(c,a,e,r=!0){const i=a?a.vnode:null;if(a){let s=a.parent;const n=a.proxy,f=e;for(;s;){const o=s.ec;if(o){for(let m=0;m<o.length;m++)if(o[m](c,n,f)===!1)return}s=s.parent}const l=a.appContext.config.errorHandler;if(l){r2(l,null,10,[c,n,f]);return}}Gf(c,e,i,r)}function Gf(c,a,e,r=!0){console.error(c)}let c3=!1,Y4=!1;const H1=[];let B1=0;const y2=[];let G1=null,m2=0;const N5=Promise.resolve();let P6=null;function Wf(c){const a=P6||N5;return c?a.then(this?c.bind(this):c):a}function Zf(c){let a=B1+1,e=H1.length;for(;a<e;){const r=a+e>>>1;a3(H1[r])<c?a=r+1:e=r}return a}function E6(c){(!H1.length||!H1.includes(c,c3&&c.allowRecurse?B1+1:B1))&&(c.id==null?H1.push(c):H1.splice(Zf(c.id),0,c),S5())}function S5(){!c3&&!Y4&&(Y4=!0,P6=N5.then(y5))}function jf(c){const a=H1.indexOf(c);a>B1&&H1.splice(a,1)}function Xf(c){D(c)?y2.push(...c):(!G1||!G1.includes(c,c.allowRecurse?m2+1:m2))&&y2.push(c),S5()}function o0(c,a=c3?B1+1:0){for(;a<H1.length;a++){const e=H1[a];e&&e.pre&&(H1.splice(a,1),a--,e())}}function w5(c){if(y2.length){const a=[...new Set(y2)];if(y2.length=0,G1){G1.push(...a);return}for(G1=a,G1.sort((e,r)=>a3(e)-a3(r)),m2=0;m2<G1.length;m2++)G1[m2]();G1=null,m2=0}}const a3=c=>c.id==null?1/0:c.id,$f=(c,a)=>{const e=a3(c)-a3(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function y5(c){Y4=!1,c3=!0,H1.sort($f);const a=k1;try{for(B1=0;B1<H1.length;B1++){const e=H1[B1];e&&e.active!==!1&&r2(e,null,14)}}finally{B1=0,H1.length=0,w5(),c3=!1,P6=null,(H1.length||y2.length)&&y5()}}function Yf(c,a,...e){if(c.isUnmounted)return;const r=c.vnode.props||a1;let i=e;const s=a.startsWith("update:"),n=s&&a.slice(7);if(n&&n in r){const m=`${n==="modelValue"?"model":n}Modifiers`,{number:z,trim:h}=r[m]||a1;h&&(i=e.map(u=>z1(u)?u.trim():u)),z&&(i=e.map(cf))}let f,l=r[f=T4(a)]||r[f=T4(U1(a))];!l&&s&&(l=r[f=T4(R2(a))]),l&&T1(l,c,6,i);const o=r[f+"Once"];if(o){if(!c.emitted)c.emitted={};else if(c.emitted[f])return;c.emitted[f]=!0,T1(o,c,6,i)}}function A5(c,a,e=!1){const r=a.emitsCache,i=r.get(c);if(i!==void 0)return i;const s=c.emits;let n={},f=!1;if(!q(c)){const l=o=>{const m=A5(o,a,!0);m&&(f=!0,t1(n,m))};!e&&a.mixins.length&&a.mixins.forEach(l),c.extends&&l(c.extends),c.mixins&&c.mixins.forEach(l)}return!s&&!f?(i1(c)&&r.set(c,null),null):(D(s)?s.forEach(l=>n[l]=null):t1(n,s),i1(c)&&r.set(c,n),n)}function s4(c,a){return!c||!Q3(a)?!1:(a=a.slice(2).replace(/Once$/,""),W(c,a[0].toLowerCase()+a.slice(1))||W(c,R2(a))||W(c,a))}let w1=null,n4=null;function W3(c){const a=w1;return w1=c,n4=c&&c.type.__scopeId||null,a}function k5(c){n4=c}function T5(){n4=null}function Kf(c,a=w1,e){if(!a||c._n)return c;const r=(...i)=>{r._d&&C0(-1);const s=W3(a);let n;try{n=c(...i)}finally{W3(s),r._d&&C0(1)}return n};return r._n=!0,r._c=!0,r._d=!0,r}function E4(c){const{type:a,vnode:e,proxy:r,withProxy:i,props:s,propsOptions:[n],slots:f,attrs:l,emit:o,render:m,renderCache:z,data:h,setupState:u,ctx:P,inheritAttrs:N}=c;let E,L;const M=W3(c);try{if(e.shapeFlag&4){const w=i||r;E=F1(m.call(w,w,z,s,u,h,P)),L=l}else{const w=a;E=F1(w.length>1?w(s,{attrs:l,slots:f,emit:o}):w(s,null)),L=a.props?l:Jf(l)}}catch(w){X2.length=0,i4(w,c,1),E=J(e3)}let A=E;if(L&&N!==!1){const w=Object.keys(L),{shapeFlag:I}=A;w.length&&I&7&&(n&&w.some(M6)&&(L=Qf(L,n)),A=T2(A,L))}return e.dirs&&(A=T2(A),A.dirs=A.dirs?A.dirs.concat(e.dirs):e.dirs),e.transition&&(A.transition=e.transition),E=A,W3(M),E}const Jf=c=>{let a;for(const e in c)(e==="class"||e==="style"||Q3(e))&&((a||(a={}))[e]=c[e]);return a},Qf=(c,a)=>{const e={};for(const r in c)(!M6(r)||!(r.slice(9)in a))&&(e[r]=c[r]);return e};function cl(c,a,e){const{props:r,children:i,component:s}=c,{props:n,children:f,patchFlag:l}=a,o=s.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return r?t0(r,n,o):!!n;if(l&8){const m=a.dynamicProps;for(let z=0;z<m.length;z++){const h=m[z];if(n[h]!==r[h]&&!s4(o,h))return!0}}}else return(i||f)&&(!f||!f.$stable)?!0:r===n?!1:r?n?t0(r,n,o):!0:!!n;return!1}function t0(c,a,e){const r=Object.keys(a);if(r.length!==Object.keys(c).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(a[s]!==c[s]&&!s4(e,s))return!0}return!1}function al({vnode:c,parent:a},e){for(;a&&a.subTree===c;)(c=a.vnode).el=e,a=a.parent}const el=c=>c.__isSuspense;function rl(c,a){a&&a.pendingBranch?D(c)?a.effects.push(...c):a.effects.push(c):Xf(c)}const N3={};function F3(c,a,e){return P5(c,a,e)}function P5(c,a,{immediate:e,deep:r,flush:i,onTrack:s,onTrigger:n}=a1){var f;const l=tf()===((f=v1)==null?void 0:f.scope)?v1:null;let o,m=!1,z=!1;if(u1(c)?(o=()=>c.value,m=G3(c)):w2(c)?(o=()=>c,r=!0):D(c)?(z=!0,m=c.some(w=>w2(w)||G3(w)),o=()=>c.map(w=>{if(u1(w))return w.value;if(w2(w))return x2(w);if(q(w))return r2(w,l,2)})):q(c)?a?o=()=>r2(c,l,2):o=()=>{if(!(l&&l.isUnmounted))return h&&h(),T1(c,l,3,[u])}:o=k1,a&&r){const w=o;o=()=>x2(w())}let h,u=w=>{h=M.onStop=()=>{r2(w,l,4)}},P;if(i3)if(u=k1,a?e&&T1(a,l,3,[o(),z?[]:void 0,u]):o(),i==="sync"){const w=Ql();P=w.__watcherHandles||(w.__watcherHandles=[])}else return k1;let N=z?new Array(c.length).fill(N3):N3;const E=()=>{if(M.active)if(a){const w=M.run();(r||m||(z?w.some((I,r1)=>J2(I,N[r1])):J2(w,N)))&&(h&&h(),T1(a,l,3,[w,N===N3?void 0:z&&N[0]===N3?[]:N,u]),N=w)}else M.run()};E.allowRecurse=!!a;let L;i==="sync"?L=E:i==="post"?L=()=>C1(E,l&&l.suspense):(E.pre=!0,l&&(E.id=l.uid),L=()=>E6(E));const M=new N6(o,L);a?e?E():N=M.run():i==="post"?C1(M.run.bind(M),l&&l.suspense):M.run();const A=()=>{M.stop(),l&&l.scope&&C6(l.scope.effects,M)};return P&&P.push(A),A}function il(c,a,e){const r=this.proxy,i=z1(c)?c.includes(".")?E5(r,c):()=>r[c]:c.bind(r,r);let s;q(a)?s=a:(s=a.handler,e=a);const n=v1;P2(this);const f=P5(i,s.bind(r),e);return n?P2(n):p2(),f}function E5(c,a){const e=a.split(".");return()=>{let r=c;for(let i=0;i<e.length&&r;i++)r=r[e[i]];return r}}function x2(c,a){if(!i1(c)||c.__v_skip||(a=a||new Set,a.has(c)))return c;if(a.add(c),u1(c))x2(c.value,a);else if(D(c))for(let e=0;e<c.length;e++)x2(c[e],a);else if(Xn(c)||Z2(c))c.forEach(e=>{x2(e,a)});else if(Kn(c))for(const e in c)x2(c[e],a);return c}function l2(c,a,e,r){const i=c.dirs,s=a&&a.dirs;for(let n=0;n<i.length;n++){const f=i[n];s&&(f.oldValue=s[n].value);let l=f.dir[r];l&&(_2(),T1(l,e,8,[c.el,f,c,a]),F2())}}function R5(c,a){return q(c)?(()=>t1({name:c.name},a,{setup:c}))():c}const B3=c=>!!c.type.__asyncLoader,_5=c=>c.type.__isKeepAlive;function sl(c,a){F5(c,"a",a)}function nl(c,a){F5(c,"da",a)}function F5(c,a,e=v1){const r=c.__wdc||(c.__wdc=()=>{let i=e;for(;i;){if(i.isDeactivated)return;i=i.parent}return c()});if(f4(a,r,e),e){let i=e.parent;for(;i&&i.parent;)_5(i.parent.vnode)&&fl(r,a,e,i),i=i.parent}}function fl(c,a,e,r){const i=f4(a,c,r,!0);D5(()=>{C6(r[a],i)},e)}function f4(c,a,e=v1,r=!1){if(e){const i=e[c]||(e[c]=[]),s=a.__weh||(a.__weh=(...n)=>{if(e.isUnmounted)return;_2(),P2(e);const f=T1(a,e,c,n);return p2(),F2(),f});return r?i.unshift(s):i.push(s),s}}const K1=c=>(a,e=v1)=>(!i3||c==="sp")&&f4(c,(...r)=>a(...r),e),ll=K1("bm"),B5=K1("m"),ol=K1("bu"),tl=K1("u"),ml=K1("bum"),D5=K1("um"),vl=K1("sp"),zl=K1("rtg"),hl=K1("rtc");function Hl(c,a=v1){f4("ec",c,a)}const U5="components";function ul(c,a){return Vl(U5,c,!0,a)||c}const pl=Symbol.for("v-ndc");function Vl(c,a,e=!0,r=!1){const i=w1||v1;if(i){const s=i.type;if(c===U5){const f=$l(s,!1);if(f&&(f===a||f===U1(a)||f===e4(U1(a))))return s}const n=m0(i[c]||s[c],a)||m0(i.appContext[c],a);return!n&&r?s:n}}function m0(c,a){return c&&(c[a]||c[U1(a)]||c[e4(U1(a))])}const K4=c=>c?J5(c)?U6(c)||c.proxy:K4(c.parent):null,j2=t1(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>K4(c.parent),$root:c=>K4(c.root),$emit:c=>c.emit,$options:c=>R6(c),$forceUpdate:c=>c.f||(c.f=()=>E6(c.update)),$nextTick:c=>c.n||(c.n=Wf.bind(c.proxy)),$watch:c=>il.bind(c)}),R4=(c,a)=>c!==a1&&!c.__isScriptSetup&&W(c,a),Ml={get({_:c},a){const{ctx:e,setupState:r,data:i,props:s,accessCache:n,type:f,appContext:l}=c;let o;if(a[0]!=="$"){const u=n[a];if(u!==void 0)switch(u){case 1:return r[a];case 2:return i[a];case 4:return e[a];case 3:return s[a]}else{if(R4(r,a))return n[a]=1,r[a];if(i!==a1&&W(i,a))return n[a]=2,i[a];if((o=c.propsOptions[0])&&W(o,a))return n[a]=3,s[a];if(e!==a1&&W(e,a))return n[a]=4,e[a];J4&&(n[a]=0)}}const m=j2[a];let z,h;if(m)return a==="$attrs"&&d1(c,"get",a),m(c);if((z=f.__cssModules)&&(z=z[a]))return z;if(e!==a1&&W(e,a))return n[a]=4,e[a];if(h=l.config.globalProperties,W(h,a))return h[a]},set({_:c},a,e){const{data:r,setupState:i,ctx:s}=c;return R4(i,a)?(i[a]=e,!0):r!==a1&&W(r,a)?(r[a]=e,!0):W(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(s[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:r,appContext:i,propsOptions:s}},n){let f;return!!e[n]||c!==a1&&W(c,n)||R4(a,n)||(f=s[0])&&W(f,n)||W(r,n)||W(j2,n)||W(i.config.globalProperties,n)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:W(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};function v0(c){return D(c)?c.reduce((a,e)=>(a[e]=null,a),{}):c}let J4=!0;function Cl(c){const a=R6(c),e=c.proxy,r=c.ctx;J4=!1,a.beforeCreate&&z0(a.beforeCreate,c,"bc");const{data:i,computed:s,methods:n,watch:f,provide:l,inject:o,created:m,beforeMount:z,mounted:h,beforeUpdate:u,updated:P,activated:N,deactivated:E,beforeDestroy:L,beforeUnmount:M,destroyed:A,unmounted:w,render:I,renderTracked:r1,renderTriggered:l1,errorCaptured:h1,serverPrefetch:G,expose:U,inheritAttrs:B,components:$,directives:q1,filters:D2}=a;if(o&&dl(o,r,null),n)for(const K in n){const j=n[K];q(j)&&(r[K]=j.bind(e))}if(i){const K=i.call(e,e);i1(K)&&(c.data=A6(K))}if(J4=!0,s)for(const K in s){const j=s[K],V1=q(j)?j.bind(e,e):q(j.get)?j.get.bind(e,e):k1,O1=!q(j)&&q(j.set)?j.set.bind(e):k1,P1=t2({get:V1,set:O1});Object.defineProperty(r,K,{enumerable:!0,configurable:!0,get:()=>P1.value,set:m1=>P1.value=m1})}if(f)for(const K in f)q5(f[K],r,e,K);if(l){const K=q(l)?l.call(e):l;Reflect.ownKeys(K).forEach(j=>{Sl(j,K[j])})}m&&z0(m,c,"c");function o1(K,j){D(j)?j.forEach(V1=>K(V1.bind(e))):j&&K(j.bind(e))}if(o1(ll,z),o1(B5,h),o1(ol,u),o1(tl,P),o1(sl,N),o1(nl,E),o1(Hl,h1),o1(hl,r1),o1(zl,l1),o1(ml,M),o1(D5,w),o1(vl,G),D(U))if(U.length){const K=c.exposed||(c.exposed={});U.forEach(j=>{Object.defineProperty(K,j,{get:()=>e[j],set:V1=>e[j]=V1})})}else c.exposed||(c.exposed={});I&&c.render===k1&&(c.render=I),B!=null&&(c.inheritAttrs=B),$&&(c.components=$),q1&&(c.directives=q1)}function dl(c,a,e=k1){D(c)&&(c=Q4(c));for(const r in c){const i=c[r];let s;i1(i)?"default"in i?s=D3(i.from||r,i.default,!0):s=D3(i.from||r):s=D3(i),u1(s)?Object.defineProperty(a,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:n=>s.value=n}):a[r]=s}}function z0(c,a,e){T1(D(c)?c.map(r=>r.bind(a.proxy)):c.bind(a.proxy),a,e)}function q5(c,a,e,r){const i=r.includes(".")?E5(e,r):()=>e[r];if(z1(c)){const s=a[c];q(s)&&F3(i,s)}else if(q(c))F3(i,c.bind(e));else if(i1(c))if(D(c))c.forEach(s=>q5(s,a,e,r));else{const s=q(c.handler)?c.handler.bind(e):a[c.handler];q(s)&&F3(i,s,c)}}function R6(c){const a=c.type,{mixins:e,extends:r}=a,{mixins:i,optionsCache:s,config:{optionMergeStrategies:n}}=c.appContext,f=s.get(a);let l;return f?l=f:!i.length&&!e&&!r?l=a:(l={},i.length&&i.forEach(o=>Z3(l,o,n,!0)),Z3(l,a,n)),i1(a)&&s.set(a,l),l}function Z3(c,a,e,r=!1){const{mixins:i,extends:s}=a;s&&Z3(c,s,e,!0),i&&i.forEach(n=>Z3(c,n,e,!0));for(const n in a)if(!(r&&n==="expose")){const f=Ll[n]||e&&e[n];c[n]=f?f(c[n],a[n]):a[n]}return c}const Ll={data:h0,props:H0,emits:H0,methods:I2,computed:I2,beforeCreate:p1,created:p1,beforeMount:p1,mounted:p1,beforeUpdate:p1,updated:p1,beforeDestroy:p1,beforeUnmount:p1,destroyed:p1,unmounted:p1,activated:p1,deactivated:p1,errorCaptured:p1,serverPrefetch:p1,components:I2,directives:I2,watch:xl,provide:h0,inject:gl};function h0(c,a){return a?c?function(){return t1(q(c)?c.call(this,this):c,q(a)?a.call(this,this):a)}:a:c}function gl(c,a){return I2(Q4(c),Q4(a))}function Q4(c){if(D(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function p1(c,a){return c?[...new Set([].concat(c,a))]:a}function I2(c,a){return c?t1(Object.create(null),c,a):a}function H0(c,a){return c?D(c)&&D(a)?[...new Set([...c,...a])]:t1(Object.create(null),v0(c),v0(a??{})):a}function xl(c,a){if(!c)return a;if(!a)return c;const e=t1(Object.create(null),c);for(const r in a)e[r]=p1(c[r],a[r]);return e}function O5(){return{app:null,config:{isNativeTag:Wn,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bl=0;function Nl(c,a){return function(r,i=null){q(r)||(r=t1({},r)),i!=null&&!i1(i)&&(i=null);const s=O5(),n=new Set;let f=!1;const l=s.app={_uid:bl++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:co,get config(){return s.config},set config(o){},use(o,...m){return n.has(o)||(o&&q(o.install)?(n.add(o),o.install(l,...m)):q(o)&&(n.add(o),o(l,...m))),l},mixin(o){return s.mixins.includes(o)||s.mixins.push(o),l},component(o,m){return m?(s.components[o]=m,l):s.components[o]},directive(o,m){return m?(s.directives[o]=m,l):s.directives[o]},mount(o,m,z){if(!f){const h=J(r,i);return h.appContext=s,m&&a?a(h,o):c(h,o,z),f=!0,l._container=o,o.__vue_app__=l,U6(h.component)||h.component.proxy}},unmount(){f&&(c(null,l._container),delete l._container.__vue_app__)},provide(o,m){return s.provides[o]=m,l},runWithContext(o){j3=l;try{return o()}finally{j3=null}}};return l}}let j3=null;function Sl(c,a){if(v1){let e=v1.provides;const r=v1.parent&&v1.parent.provides;r===e&&(e=v1.provides=Object.create(r)),e[c]=a}}function D3(c,a,e=!1){const r=v1||w1;if(r||j3){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:j3._context.provides;if(i&&c in i)return i[c];if(arguments.length>1)return e&&q(a)?a.call(r&&r.proxy):a}}function wl(c,a,e,r=!1){const i={},s={};I3(s,o4,1),c.propsDefaults=Object.create(null),I5(c,a,i,s);for(const n in c.propsOptions[0])n in i||(i[n]=void 0);e?c.props=r?i:Ff(i):c.type.props?c.props=i:c.props=s,c.attrs=s}function yl(c,a,e,r){const{props:i,attrs:s,vnode:{patchFlag:n}}=c,f=Z(i),[l]=c.propsOptions;let o=!1;if((r||n>0)&&!(n&16)){if(n&8){const m=c.vnode.dynamicProps;for(let z=0;z<m.length;z++){let h=m[z];if(s4(c.emitsOptions,h))continue;const u=a[h];if(l)if(W(s,h))u!==s[h]&&(s[h]=u,o=!0);else{const P=U1(h);i[P]=c6(l,f,P,u,c,!1)}else u!==s[h]&&(s[h]=u,o=!0)}}}else{I5(c,a,i,s)&&(o=!0);let m;for(const z in f)(!a||!W(a,z)&&((m=R2(z))===z||!W(a,m)))&&(l?e&&(e[z]!==void 0||e[m]!==void 0)&&(i[z]=c6(l,f,z,void 0,c,!0)):delete i[z]);if(s!==f)for(const z in s)(!a||!W(a,z))&&(delete s[z],o=!0)}o&&j1(c,"set","$attrs")}function I5(c,a,e,r){const[i,s]=c.propsOptions;let n=!1,f;if(a)for(let l in a){if(_3(l))continue;const o=a[l];let m;i&&W(i,m=U1(l))?!s||!s.includes(m)?e[m]=o:(f||(f={}))[m]=o:s4(c.emitsOptions,l)||(!(l in r)||o!==r[l])&&(r[l]=o,n=!0)}if(s){const l=Z(e),o=f||a1;for(let m=0;m<s.length;m++){const z=s[m];e[z]=c6(i,l,z,o[z],c,!W(o,z))}}return n}function c6(c,a,e,r,i,s){const n=c[e];if(n!=null){const f=W(n,"default");if(f&&r===void 0){const l=n.default;if(n.type!==Function&&!n.skipFactory&&q(l)){const{propsDefaults:o}=i;e in o?r=o[e]:(P2(i),r=o[e]=l.call(null,a),p2())}else r=l}n[0]&&(s&&!f?r=!1:n[1]&&(r===""||r===R2(e))&&(r=!0))}return r}function G5(c,a,e=!1){const r=a.propsCache,i=r.get(c);if(i)return i;const s=c.props,n={},f=[];let l=!1;if(!q(c)){const m=z=>{l=!0;const[h,u]=G5(z,a,!0);t1(n,h),u&&f.push(...u)};!e&&a.mixins.length&&a.mixins.forEach(m),c.extends&&m(c.extends),c.mixins&&c.mixins.forEach(m)}if(!s&&!l)return i1(c)&&r.set(c,S2),S2;if(D(s))for(let m=0;m<s.length;m++){const z=U1(s[m]);u0(z)&&(n[z]=a1)}else if(s)for(const m in s){const z=U1(m);if(u0(z)){const h=s[m],u=n[z]=D(h)||q(h)?{type:h}:t1({},h);if(u){const P=M0(Boolean,u.type),N=M0(String,u.type);u[0]=P>-1,u[1]=N<0||P<N,(P>-1||W(u,"default"))&&f.push(z)}}}const o=[n,f];return i1(c)&&r.set(c,o),o}function u0(c){return c[0]!=="$"}function p0(c){const a=c&&c.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:c===null?"null":""}function V0(c,a){return p0(c)===p0(a)}function M0(c,a){return D(a)?a.findIndex(e=>V0(e,c)):q(a)&&V0(a,c)?0:-1}const W5=c=>c[0]==="_"||c==="$stable",_6=c=>D(c)?c.map(F1):[F1(c)],Al=(c,a,e)=>{if(a._n)return a;const r=Kf((...i)=>_6(a(...i)),e);return r._c=!1,r},Z5=(c,a,e)=>{const r=c._ctx;for(const i in c){if(W5(i))continue;const s=c[i];if(q(s))a[i]=Al(i,s,r);else if(s!=null){const n=_6(s);a[i]=()=>n}}},j5=(c,a)=>{const e=_6(a);c.slots.default=()=>e},kl=(c,a)=>{if(c.vnode.shapeFlag&32){const e=a._;e?(c.slots=Z(a),I3(a,"_",e)):Z5(a,c.slots={})}else c.slots={},a&&j5(c,a);I3(c.slots,o4,1)},Tl=(c,a,e)=>{const{vnode:r,slots:i}=c;let s=!0,n=a1;if(r.shapeFlag&32){const f=a._;f?e&&f===1?s=!1:(t1(i,a),!e&&f===1&&delete i._):(s=!a.$stable,Z5(a,i)),n=a}else a&&(j5(c,a),n={default:1});if(s)for(const f in i)!W5(f)&&!(f in n)&&delete i[f]};function a6(c,a,e,r,i=!1){if(D(c)){c.forEach((h,u)=>a6(h,a&&(D(a)?a[u]:a),e,r,i));return}if(B3(r)&&!i)return;const s=r.shapeFlag&4?U6(r.component)||r.component.proxy:r.el,n=i?null:s,{i:f,r:l}=c,o=a&&a.r,m=f.refs===a1?f.refs={}:f.refs,z=f.setupState;if(o!=null&&o!==l&&(z1(o)?(m[o]=null,W(z,o)&&(z[o]=null)):u1(o)&&(o.value=null)),q(l))r2(l,f,12,[n,m]);else{const h=z1(l),u=u1(l);if(h||u){const P=()=>{if(c.f){const N=h?W(z,l)?z[l]:m[l]:l.value;i?D(N)&&C6(N,s):D(N)?N.includes(s)||N.push(s):h?(m[l]=[s],W(z,l)&&(z[l]=m[l])):(l.value=[s],c.k&&(m[c.k]=l.value))}else h?(m[l]=n,W(z,l)&&(z[l]=n)):u&&(l.value=n,c.k&&(m[c.k]=n))};n?(P.id=-1,C1(P,e)):P()}}}const C1=rl;function Pl(c){return El(c)}function El(c,a){const e=W4();e.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:n,createText:f,createComment:l,setText:o,setElementText:m,parentNode:z,nextSibling:h,setScopeId:u=k1,insertStaticContent:P}=c,N=(t,v,H,V=null,p=null,x=null,S=!1,g=null,b=!!v.dynamicChildren)=>{if(t===v)return;t&&!q2(t,v)&&(V=C3(t),m1(t,p,x,!0),t=null),v.patchFlag===-2&&(b=!1,v.dynamicChildren=null);const{type:C,ref:R,shapeFlag:k}=v;switch(C){case l4:E(t,v,H,V);break;case e3:L(t,v,H,V);break;case _4:t==null&&M(v,H,V,S);break;case _1:$(t,v,H,V,p,x,S,g,b);break;default:k&1?I(t,v,H,V,p,x,S,g,b):k&6?q1(t,v,H,V,p,x,S,g,b):(k&64||k&128)&&C.process(t,v,H,V,p,x,S,g,b,C2)}R!=null&&p&&a6(R,t&&t.ref,x,v||t,!v)},E=(t,v,H,V)=>{if(t==null)r(v.el=f(v.children),H,V);else{const p=v.el=t.el;v.children!==t.children&&o(p,v.children)}},L=(t,v,H,V)=>{t==null?r(v.el=l(v.children||""),H,V):v.el=t.el},M=(t,v,H,V)=>{[t.el,t.anchor]=P(t.children,v,H,V,t.el,t.anchor)},A=({el:t,anchor:v},H,V)=>{let p;for(;t&&t!==v;)p=h(t),r(t,H,V),t=p;r(v,H,V)},w=({el:t,anchor:v})=>{let H;for(;t&&t!==v;)H=h(t),i(t),t=H;i(v)},I=(t,v,H,V,p,x,S,g,b)=>{S=S||v.type==="svg",t==null?r1(v,H,V,p,x,S,g,b):G(t,v,p,x,S,g,b)},r1=(t,v,H,V,p,x,S,g)=>{let b,C;const{type:R,props:k,shapeFlag:_,transition:F,dirs:O}=t;if(b=t.el=n(t.type,x,k&&k.is,k),_&8?m(b,t.children):_&16&&h1(t.children,b,null,V,p,x&&R!=="foreignObject",S,g),O&&l2(t,null,V,"created"),l1(b,t,t.scopeId,S,V),k){for(const X in k)X!=="value"&&!_3(X)&&s(b,X,null,k[X],x,t.children,V,p,I1);"value"in k&&s(b,"value",null,k.value),(C=k.onVnodeBeforeMount)&&R1(C,V,t)}O&&l2(t,null,V,"beforeMount");const Y=(!p||p&&!p.pendingBranch)&&F&&!F.persisted;Y&&F.beforeEnter(b),r(b,v,H),((C=k&&k.onVnodeMounted)||Y||O)&&C1(()=>{C&&R1(C,V,t),Y&&F.enter(b),O&&l2(t,null,V,"mounted")},p)},l1=(t,v,H,V,p)=>{if(H&&u(t,H),V)for(let x=0;x<V.length;x++)u(t,V[x]);if(p){let x=p.subTree;if(v===x){const S=p.vnode;l1(t,S,S.scopeId,S.slotScopeIds,p.parent)}}},h1=(t,v,H,V,p,x,S,g,b=0)=>{for(let C=b;C<t.length;C++){const R=t[C]=g?a2(t[C]):F1(t[C]);N(null,R,v,H,V,p,x,S,g)}},G=(t,v,H,V,p,x,S)=>{const g=v.el=t.el;let{patchFlag:b,dynamicChildren:C,dirs:R}=v;b|=t.patchFlag&16;const k=t.props||a1,_=v.props||a1;let F;H&&o2(H,!1),(F=_.onVnodeBeforeUpdate)&&R1(F,H,v,t),R&&l2(v,t,H,"beforeUpdate"),H&&o2(H,!0);const O=p&&v.type!=="foreignObject";if(C?U(t.dynamicChildren,C,g,H,V,O,x):S||j(t,v,g,null,H,V,O,x,!1),b>0){if(b&16)B(g,v,k,_,H,V,p);else if(b&2&&k.class!==_.class&&s(g,"class",null,_.class,p),b&4&&s(g,"style",k.style,_.style,p),b&8){const Y=v.dynamicProps;for(let X=0;X<Y.length;X++){const n1=Y[X],x1=k[n1],d2=_[n1];(d2!==x1||n1==="value")&&s(g,n1,x1,d2,p,t.children,H,V,I1)}}b&1&&t.children!==v.children&&m(g,v.children)}else!S&&C==null&&B(g,v,k,_,H,V,p);((F=_.onVnodeUpdated)||R)&&C1(()=>{F&&R1(F,H,v,t),R&&l2(v,t,H,"updated")},V)},U=(t,v,H,V,p,x,S)=>{for(let g=0;g<v.length;g++){const b=t[g],C=v[g],R=b.el&&(b.type===_1||!q2(b,C)||b.shapeFlag&70)?z(b.el):H;N(b,C,R,null,V,p,x,S,!0)}},B=(t,v,H,V,p,x,S)=>{if(H!==V){if(H!==a1)for(const g in H)!_3(g)&&!(g in V)&&s(t,g,H[g],null,S,v.children,p,x,I1);for(const g in V){if(_3(g))continue;const b=V[g],C=H[g];b!==C&&g!=="value"&&s(t,g,C,b,S,v.children,p,x,I1)}"value"in V&&s(t,"value",H.value,V.value)}},$=(t,v,H,V,p,x,S,g,b)=>{const C=v.el=t?t.el:f(""),R=v.anchor=t?t.anchor:f("");let{patchFlag:k,dynamicChildren:_,slotScopeIds:F}=v;F&&(g=g?g.concat(F):F),t==null?(r(C,H,V),r(R,H,V),h1(v.children,H,R,p,x,S,g,b)):k>0&&k&64&&_&&t.dynamicChildren?(U(t.dynamicChildren,_,H,p,x,S,g),(v.key!=null||p&&v===p.subTree)&&X5(t,v,!0)):j(t,v,H,R,p,x,S,g,b)},q1=(t,v,H,V,p,x,S,g,b)=>{v.slotScopeIds=g,t==null?v.shapeFlag&512?p.ctx.activate(v,H,V,S,b):D2(v,H,V,p,x,S,b):M3(t,v,b)},D2=(t,v,H,V,p,x,S)=>{const g=t.component=Gl(t,V,p);if(_5(t)&&(g.ctx.renderer=C2),Wl(g),g.asyncDep){if(p&&p.registerDep(g,o1),!t.el){const b=g.subTree=J(e3);L(null,b,v,H)}return}o1(g,t,v,H,p,x,S)},M3=(t,v,H)=>{const V=v.component=t.component;if(cl(t,v,H))if(V.asyncDep&&!V.asyncResolved){K(V,v,H);return}else V.next=v,jf(V.update),V.update();else v.el=t.el,V.vnode=v},o1=(t,v,H,V,p,x,S)=>{const g=()=>{if(t.isMounted){let{next:R,bu:k,u:_,parent:F,vnode:O}=t,Y=R,X;o2(t,!1),R?(R.el=O.el,K(t,R,S)):R=O,k&&P4(k),(X=R.props&&R.props.onVnodeBeforeUpdate)&&R1(X,F,R,O),o2(t,!0);const n1=E4(t),x1=t.subTree;t.subTree=n1,N(x1,n1,z(x1.el),C3(x1),t,p,x),R.el=n1.el,Y===null&&al(t,n1.el),_&&C1(_,p),(X=R.props&&R.props.onVnodeUpdated)&&C1(()=>R1(X,F,R,O),p)}else{let R;const{el:k,props:_}=v,{bm:F,m:O,parent:Y}=t,X=B3(v);if(o2(t,!1),F&&P4(F),!X&&(R=_&&_.onVnodeBeforeMount)&&R1(R,Y,v),o2(t,!0),k&&k4){const n1=()=>{t.subTree=E4(t),k4(k,t.subTree,t,p,null)};X?v.type.__asyncLoader().then(()=>!t.isUnmounted&&n1()):n1()}else{const n1=t.subTree=E4(t);N(null,n1,H,V,t,p,x),v.el=n1.el}if(O&&C1(O,p),!X&&(R=_&&_.onVnodeMounted)){const n1=v;C1(()=>R1(R,Y,n1),p)}(v.shapeFlag&256||Y&&B3(Y.vnode)&&Y.vnode.shapeFlag&256)&&t.a&&C1(t.a,p),t.isMounted=!0,v=H=V=null}},b=t.effect=new N6(g,()=>E6(C),t.scope),C=t.update=()=>b.run();C.id=t.uid,o2(t,!0),C()},K=(t,v,H)=>{v.component=t;const V=t.vnode.props;t.vnode=v,t.next=null,yl(t,v.props,V,H),Tl(t,v.children,H),_2(),o0(),F2()},j=(t,v,H,V,p,x,S,g,b=!1)=>{const C=t&&t.children,R=t?t.shapeFlag:0,k=v.children,{patchFlag:_,shapeFlag:F}=v;if(_>0){if(_&128){O1(C,k,H,V,p,x,S,g,b);return}else if(_&256){V1(C,k,H,V,p,x,S,g,b);return}}F&8?(R&16&&I1(C,p,x),k!==C&&m(H,k)):R&16?F&16?O1(C,k,H,V,p,x,S,g,b):I1(C,p,x,!0):(R&8&&m(H,""),F&16&&h1(k,H,V,p,x,S,g,b))},V1=(t,v,H,V,p,x,S,g,b)=>{t=t||S2,v=v||S2;const C=t.length,R=v.length,k=Math.min(C,R);let _;for(_=0;_<k;_++){const F=v[_]=b?a2(v[_]):F1(v[_]);N(t[_],F,H,null,p,x,S,g,b)}C>R?I1(t,p,x,!0,!1,k):h1(v,H,V,p,x,S,g,b,k)},O1=(t,v,H,V,p,x,S,g,b)=>{let C=0;const R=v.length;let k=t.length-1,_=R-1;for(;C<=k&&C<=_;){const F=t[C],O=v[C]=b?a2(v[C]):F1(v[C]);if(q2(F,O))N(F,O,H,null,p,x,S,g,b);else break;C++}for(;C<=k&&C<=_;){const F=t[k],O=v[_]=b?a2(v[_]):F1(v[_]);if(q2(F,O))N(F,O,H,null,p,x,S,g,b);else break;k--,_--}if(C>k){if(C<=_){const F=_+1,O=F<R?v[F].el:V;for(;C<=_;)N(null,v[C]=b?a2(v[C]):F1(v[C]),H,O,p,x,S,g,b),C++}}else if(C>_)for(;C<=k;)m1(t[C],p,x,!0),C++;else{const F=C,O=C,Y=new Map;for(C=O;C<=_;C++){const L1=v[C]=b?a2(v[C]):F1(v[C]);L1.key!=null&&Y.set(L1.key,C)}let X,n1=0;const x1=_-O+1;let d2=!1,J8=0;const U2=new Array(x1);for(C=0;C<x1;C++)U2[C]=0;for(C=F;C<=k;C++){const L1=t[C];if(n1>=x1){m1(L1,p,x,!0);continue}let E1;if(L1.key!=null)E1=Y.get(L1.key);else for(X=O;X<=_;X++)if(U2[X-O]===0&&q2(L1,v[X])){E1=X;break}E1===void 0?m1(L1,p,x,!0):(U2[E1-O]=C+1,E1>=J8?J8=E1:d2=!0,N(L1,v[E1],H,null,p,x,S,g,b),n1++)}const Q8=d2?Rl(U2):S2;for(X=Q8.length-1,C=x1-1;C>=0;C--){const L1=O+C,E1=v[L1],c0=L1+1<R?v[L1+1].el:V;U2[C]===0?N(null,E1,H,c0,p,x,S,g,b):d2&&(X<0||C!==Q8[X]?P1(E1,H,c0,2):X--)}}},P1=(t,v,H,V,p=null)=>{const{el:x,type:S,transition:g,children:b,shapeFlag:C}=t;if(C&6){P1(t.component.subTree,v,H,V);return}if(C&128){t.suspense.move(v,H,V);return}if(C&64){S.move(t,v,H,C2);return}if(S===_1){r(x,v,H);for(let k=0;k<b.length;k++)P1(b[k],v,H,V);r(t.anchor,v,H);return}if(S===_4){A(t,v,H);return}if(V!==2&&C&1&&g)if(V===0)g.beforeEnter(x),r(x,v,H),C1(()=>g.enter(x),p);else{const{leave:k,delayLeave:_,afterLeave:F}=g,O=()=>r(x,v,H),Y=()=>{k(x,()=>{O(),F&&F()})};_?_(x,O,Y):Y()}else r(x,v,H)},m1=(t,v,H,V=!1,p=!1)=>{const{type:x,props:S,ref:g,children:b,dynamicChildren:C,shapeFlag:R,patchFlag:k,dirs:_}=t;if(g!=null&&a6(g,null,H,t,!0),R&256){v.ctx.deactivate(t);return}const F=R&1&&_,O=!B3(t);let Y;if(O&&(Y=S&&S.onVnodeBeforeUnmount)&&R1(Y,v,t),R&6)Gn(t.component,H,V);else{if(R&128){t.suspense.unmount(H,V);return}F&&l2(t,null,v,"beforeUnmount"),R&64?t.type.remove(t,v,H,p,C2,V):C&&(x!==_1||k>0&&k&64)?I1(C,v,H,!1,!0):(x===_1&&k&384||!p&&R&16)&&I1(b,v,H),V&&Y8(t)}(O&&(Y=S&&S.onVnodeUnmounted)||F)&&C1(()=>{Y&&R1(Y,v,t),F&&l2(t,null,v,"unmounted")},H)},Y8=t=>{const{type:v,el:H,anchor:V,transition:p}=t;if(v===_1){In(H,V);return}if(v===_4){w(t);return}const x=()=>{i(H),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(t.shapeFlag&1&&p&&!p.persisted){const{leave:S,delayLeave:g}=p,b=()=>S(H,x);g?g(t.el,x,b):b()}else x()},In=(t,v)=>{let H;for(;t!==v;)H=h(t),i(t),t=H;i(v)},Gn=(t,v,H)=>{const{bum:V,scope:p,update:x,subTree:S,um:g}=t;V&&P4(V),p.stop(),x&&(x.active=!1,m1(S,t,v,H)),g&&C1(g,v),C1(()=>{t.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},I1=(t,v,H,V=!1,p=!1,x=0)=>{for(let S=x;S<t.length;S++)m1(t[S],v,H,V,p)},C3=t=>t.shapeFlag&6?C3(t.component.subTree):t.shapeFlag&128?t.suspense.next():h(t.anchor||t.el),K8=(t,v,H)=>{t==null?v._vnode&&m1(v._vnode,null,null,!0):N(v._vnode||null,t,v,null,null,null,H),o0(),w5(),v._vnode=t},C2={p:N,um:m1,m:P1,r:Y8,mt:D2,mc:h1,pc:j,pbc:U,n:C3,o:c};let A4,k4;return a&&([A4,k4]=a(C2)),{render:K8,hydrate:A4,createApp:Nl(K8,A4)}}function o2({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function X5(c,a,e=!1){const r=c.children,i=a.children;if(D(r)&&D(i))for(let s=0;s<r.length;s++){const n=r[s];let f=i[s];f.shapeFlag&1&&!f.dynamicChildren&&((f.patchFlag<=0||f.patchFlag===32)&&(f=i[s]=a2(i[s]),f.el=n.el),e||X5(n,f)),f.type===l4&&(f.el=n.el)}}function Rl(c){const a=c.slice(),e=[0];let r,i,s,n,f;const l=c.length;for(r=0;r<l;r++){const o=c[r];if(o!==0){if(i=e[e.length-1],c[i]<o){a[r]=i,e.push(r);continue}for(s=0,n=e.length-1;s<n;)f=s+n>>1,c[e[f]]<o?s=f+1:n=f;o<c[e[s]]&&(s>0&&(a[r]=e[s-1]),e[s]=r)}}for(s=e.length,n=e[s-1];s-- >0;)e[s]=n,n=a[n];return e}const _l=c=>c.__isTeleport,_1=Symbol.for("v-fgt"),l4=Symbol.for("v-txt"),e3=Symbol.for("v-cmt"),_4=Symbol.for("v-stc"),X2=[];let y1=null;function F6(c=!1){X2.push(y1=c?null:[])}function Fl(){X2.pop(),y1=X2[X2.length-1]||null}let r3=1;function C0(c){r3+=c}function $5(c){return c.dynamicChildren=r3>0?y1||S2:null,Fl(),r3>0&&y1&&y1.push(c),c}function Y5(c,a,e,r,i,s){return $5(d(c,a,e,r,i,s,!0))}function Bl(c,a,e,r,i){return $5(J(c,a,e,r,i,!0))}function e6(c){return c?c.__v_isVNode===!0:!1}function q2(c,a){return c.type===a.type&&c.key===a.key}const o4="__vInternal",K5=({key:c})=>c??null,U3=({ref:c,ref_key:a,ref_for:e})=>(typeof c=="number"&&(c=""+c),c!=null?z1(c)||u1(c)||q(c)?{i:w1,r:c,k:a,f:!!e}:c:null);function d(c,a=null,e=null,r=0,i=null,s=c===_1?0:1,n=!1,f=!1){const l={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&K5(a),ref:a&&U3(a),scopeId:n4,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:w1};return f?(B6(l,e),s&128&&c.normalize(l)):e&&(l.shapeFlag|=z1(e)?8:16),r3>0&&!n&&y1&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&y1.push(l),l}const J=Dl;function Dl(c,a=null,e=null,r=0,i=null,s=!1){if((!c||c===pl)&&(c=e3),e6(c)){const f=T2(c,a,!0);return e&&B6(f,e),r3>0&&!s&&y1&&(f.shapeFlag&6?y1[y1.indexOf(c)]=f:y1.push(f)),f.patchFlag|=-2,f}if(Yl(c)&&(c=c.__vccOpts),a){a=Ul(a);let{class:f,style:l}=a;f&&!z1(f)&&(a.class=x6(f)),i1(l)&&(d5(l)&&!D(l)&&(l=t1({},l)),a.style=g6(l))}const n=z1(c)?1:el(c)?128:_l(c)?64:i1(c)?4:q(c)?2:0;return d(c,a,e,r,i,n,s,!0)}function Ul(c){return c?d5(c)||o4 in c?t1({},c):c:null}function T2(c,a,e=!1){const{props:r,ref:i,patchFlag:s,children:n}=c,f=a?ql(r||{},a):r;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:f,key:f&&K5(f),ref:a&&a.ref?e&&i?D(i)?i.concat(U3(a)):[i,U3(a)]:U3(a):i,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:n,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==_1?s===-1?16:s|16:s,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&T2(c.ssContent),ssFallback:c.ssFallback&&T2(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce}}function v2(c=" ",a=0){return J(l4,null,c,a)}function F1(c){return c==null||typeof c=="boolean"?J(e3):D(c)?J(_1,null,c.slice()):typeof c=="object"?a2(c):J(l4,null,String(c))}function a2(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:T2(c)}function B6(c,a){let e=0;const{shapeFlag:r}=c;if(a==null)a=null;else if(D(a))e=16;else if(typeof a=="object")if(r&65){const i=a.default;i&&(i._c&&(i._d=!1),B6(c,i()),i._c&&(i._d=!0));return}else{e=32;const i=a._;!i&&!(o4 in a)?a._ctx=w1:i===3&&w1&&(w1.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else q(a)?(a={default:a,_ctx:w1},e=32):(a=String(a),r&64?(e=16,a=[v2(a)]):e=8);c.children=a,c.shapeFlag|=e}function ql(...c){const a={};for(let e=0;e<c.length;e++){const r=c[e];for(const i in r)if(i==="class")a.class!==r.class&&(a.class=x6([a.class,r.class]));else if(i==="style")a.style=g6([a.style,r.style]);else if(Q3(i)){const s=a[i],n=r[i];n&&s!==n&&!(D(s)&&s.includes(n))&&(a[i]=s?[].concat(s,n):n)}else i!==""&&(a[i]=r[i])}return a}function R1(c,a,e,r=null){T1(c,a,7,[e,r])}const Ol=O5();let Il=0;function Gl(c,a,e){const r=c.type,i=(a?a.appContext:c.appContext)||Ol,s={uid:Il++,vnode:c,type:r,parent:a,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new lf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:G5(r,i),emitsOptions:A5(r,i),emit:null,emitted:null,propsDefaults:a1,inheritAttrs:r.inheritAttrs,ctx:a1,data:a1,props:a1,attrs:a1,slots:a1,refs:a1,setupState:a1,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=a?a.root:s,s.emit=Yf.bind(null,s),c.ce&&c.ce(s),s}let v1=null,D6,L2,d0="__VUE_INSTANCE_SETTERS__";(L2=W4()[d0])||(L2=W4()[d0]=[]),L2.push(c=>v1=c),D6=c=>{L2.length>1?L2.forEach(a=>a(c)):L2[0](c)};const P2=c=>{D6(c),c.scope.on()},p2=()=>{v1&&v1.scope.off(),D6(null)};function J5(c){return c.vnode.shapeFlag&4}let i3=!1;function Wl(c,a=!1){i3=a;const{props:e,children:r}=c.vnode,i=J5(c);wl(c,e,i,a),kl(c,r);const s=i?Zl(c,a):void 0;return i3=!1,s}function Zl(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=L5(new Proxy(c.ctx,Ml));const{setup:r}=e;if(r){const i=c.setupContext=r.length>1?Xl(c):null;P2(c),_2();const s=r2(r,c,0,[c.props,i]);if(F2(),p2(),l5(s)){if(s.then(p2,p2),a)return s.then(n=>{L0(c,n,a)}).catch(n=>{i4(n,c,0)});c.asyncDep=s}else L0(c,s,a)}else Q5(c,a)}function L0(c,a,e){q(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:i1(a)&&(c.setupState=b5(a)),Q5(c,e)}let g0;function Q5(c,a,e){const r=c.type;if(!c.render){if(!a&&g0&&!r.render){const i=r.template||R6(c).template;if(i){const{isCustomElement:s,compilerOptions:n}=c.appContext.config,{delimiters:f,compilerOptions:l}=r,o=t1(t1({isCustomElement:s,delimiters:f},n),l);r.render=g0(i,o)}}c.render=r.render||k1}P2(c),_2(),Cl(c),F2(),p2()}function jl(c){return c.attrsProxy||(c.attrsProxy=new Proxy(c.attrs,{get(a,e){return d1(c,"get","$attrs"),a[e]}}))}function Xl(c){const a=e=>{c.exposed=e||{}};return{get attrs(){return jl(c)},slots:c.slots,emit:c.emit,expose:a}}function U6(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(b5(L5(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in j2)return j2[e](c)},has(a,e){return e in a||e in j2}}))}function $l(c,a=!0){return q(c)?c.displayName||c.name:c.name||a&&c.__name}function Yl(c){return q(c)&&"__vccOpts"in c}const t2=(c,a)=>If(c,a,i3);function Kl(c,a,e){const r=arguments.length;return r===2?i1(a)&&!D(a)?e6(a)?J(c,null,[a]):J(c,a):J(c,null,a):(r>3?e=Array.prototype.slice.call(arguments,2):r===3&&e6(e)&&(e=[e]),J(c,a,e))}const Jl=Symbol.for("v-scx"),Ql=()=>D3(Jl),co="3.3.4",ao="http://www.w3.org/2000/svg",z2=typeof document<"u"?document:null,x0=z2&&z2.createElement("template"),eo={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,r)=>{const i=a?z2.createElementNS(ao,c):z2.createElement(c,e?{is:e}:void 0);return c==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:c=>z2.createTextNode(c),createComment:c=>z2.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>z2.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,r,i,s){const n=e?e.previousSibling:a.lastChild;if(i&&(i===s||i.nextSibling))for(;a.insertBefore(i.cloneNode(!0),e),!(i===s||!(i=i.nextSibling)););else{x0.innerHTML=r?`<svg>${c}</svg>`:c;const f=x0.content;if(r){const l=f.firstChild;for(;l.firstChild;)f.appendChild(l.firstChild);f.removeChild(l)}a.insertBefore(f,e)}return[n?n.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}};function ro(c,a,e){const r=c._vtc;r&&(a=(a?[a,...r]:[...r]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}function io(c,a,e){const r=c.style,i=z1(e);if(e&&!i){if(a&&!z1(a))for(const s in a)e[s]==null&&r6(r,s,"");for(const s in e)r6(r,s,e[s])}else{const s=r.display;i?a!==e&&(r.cssText=e):a&&c.removeAttribute("style"),"_vod"in c&&(r.display=s)}}const b0=/\s*!important$/;function r6(c,a,e){if(D(e))e.forEach(r=>r6(c,a,r));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const r=so(c,a);b0.test(e)?c.setProperty(R2(r),e.replace(b0,""),"important"):c[r]=e}}const N0=["Webkit","Moz","ms"],F4={};function so(c,a){const e=F4[a];if(e)return e;let r=U1(a);if(r!=="filter"&&r in c)return F4[a]=r;r=e4(r);for(let i=0;i<N0.length;i++){const s=N0[i]+r;if(s in c)return F4[a]=s}return a}const S0="http://www.w3.org/1999/xlink";function no(c,a,e,r,i){if(r&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(S0,a.slice(6,a.length)):c.setAttributeNS(S0,a,e);else{const s=ff(a);e==null||s&&!o5(e)?c.removeAttribute(a):c.setAttribute(a,s?"":e)}}function fo(c,a,e,r,i,s,n){if(a==="innerHTML"||a==="textContent"){r&&n(r,i,s),c[a]=e??"";return}const f=c.tagName;if(a==="value"&&f!=="PROGRESS"&&!f.includes("-")){c._value=e;const o=f==="OPTION"?c.getAttribute("value"):c.value,m=e??"";o!==m&&(c.value=m),e==null&&c.removeAttribute(a);return}let l=!1;if(e===""||e==null){const o=typeof c[a];o==="boolean"?e=o5(e):e==null&&o==="string"?(e="",l=!0):o==="number"&&(e=0,l=!0)}try{c[a]=e}catch{}l&&c.removeAttribute(a)}function lo(c,a,e,r){c.addEventListener(a,e,r)}function oo(c,a,e,r){c.removeEventListener(a,e,r)}function to(c,a,e,r,i=null){const s=c._vei||(c._vei={}),n=s[a];if(r&&n)n.value=r;else{const[f,l]=mo(a);if(r){const o=s[a]=ho(r,i);lo(c,f,o,l)}else n&&(oo(c,f,n,l),s[a]=void 0)}}const w0=/(?:Once|Passive|Capture)$/;function mo(c){let a;if(w0.test(c)){a={};let r;for(;r=c.match(w0);)c=c.slice(0,c.length-r[0].length),a[r[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):R2(c.slice(2)),a]}let B4=0;const vo=Promise.resolve(),zo=()=>B4||(vo.then(()=>B4=0),B4=Date.now());function ho(c,a){const e=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=e.attached)return;T1(Ho(r,e.value),a,5,[r])};return e.value=c,e.attached=zo(),e}function Ho(c,a){if(D(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(r=>i=>!i._stopped&&r&&r(i))}else return a}const y0=/^on[a-z]/,uo=(c,a,e,r,i=!1,s,n,f,l)=>{a==="class"?ro(c,r,i):a==="style"?io(c,e,r):Q3(a)?M6(a)||to(c,a,e,r,n):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):po(c,a,r,i))?fo(c,a,r,s,n,f,l):(a==="true-value"?c._trueValue=r:a==="false-value"&&(c._falseValue=r),no(c,a,r,i))};function po(c,a,e,r){return r?!!(a==="innerHTML"||a==="textContent"||a in c&&y0.test(a)&&q(e)):a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA"||y0.test(a)&&z1(e)?!1:a in c}const Vo=t1({patchProp:uo},eo);let A0;function Mo(){return A0||(A0=Pl(Vo))}const Co=(...c)=>{const a=Mo().createApp(...c),{mount:e}=a;return a.mount=r=>{const i=Lo(r);if(!i)return;const s=a._component;!q(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const n=e(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),n},a};function Lo(c){return z1(c)?document.querySelector(c):c}function k0(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(c,i).enumerable})),e.push.apply(e,r)}return e}function y(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?k0(Object(e),!0).forEach(function(r){f1(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):k0(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function X3(c){"@babel/helpers - typeof";return X3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},X3(c)}function go(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function T0(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function xo(c,a,e){return a&&T0(c.prototype,a),e&&T0(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function f1(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function q6(c,a){return No(c)||wo(c,a)||c7(c,a)||Ao()}function t3(c){return bo(c)||So(c)||c7(c)||yo()}function bo(c){if(Array.isArray(c))return i6(c)}function No(c){if(Array.isArray(c))return c}function So(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function wo(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],i=!0,s=!1,n,f;try{for(e=e.call(c);!(i=(n=e.next()).done)&&(r.push(n.value),!(a&&r.length===a));i=!0);}catch(l){s=!0,f=l}finally{try{!i&&e.return!=null&&e.return()}finally{if(s)throw f}}return r}}function c7(c,a){if(c){if(typeof c=="string")return i6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i6(c,a)}}function i6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function yo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ao(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var P0=function(){},O6={},a7={},e7=null,r7={mark:P0,measure:P0};try{typeof window<"u"&&(O6=window),typeof document<"u"&&(a7=document),typeof MutationObserver<"u"&&(e7=MutationObserver),typeof performance<"u"&&(r7=performance)}catch{}var ko=O6.navigator||{},E0=ko.userAgent,R0=E0===void 0?"":E0,s2=O6,c1=a7,_0=e7,S3=r7;s2.document;var J1=!!c1.documentElement&&!!c1.head&&typeof c1.addEventListener=="function"&&typeof c1.createElement=="function",i7=~R0.indexOf("MSIE")||~R0.indexOf("Trident/"),w3,y3,A3,k3,T3,X1="___FONT_AWESOME___",s6=16,s7="fa",n7="svg-inline--fa",V2="data-fa-i2svg",n6="data-fa-pseudo-element",To="data-fa-pseudo-element-pending",I6="data-prefix",G6="data-icon",F0="fontawesome-i2svg",Po="async",Eo=["HTML","HEAD","STYLE","SCRIPT"],f7=function(){try{return!0}catch{return!1}}(),Q="classic",e1="sharp",W6=[Q,e1];function m3(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[Q]}})}var s3=m3((w3={},f1(w3,Q,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),f1(w3,e1,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),w3)),n3=m3((y3={},f1(y3,Q,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),f1(y3,e1,{solid:"fass",regular:"fasr",light:"fasl"}),y3)),f3=m3((A3={},f1(A3,Q,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),f1(A3,e1,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),A3)),Ro=m3((k3={},f1(k3,Q,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),f1(k3,e1,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),k3)),_o=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,l7="fa-layers-text",Fo=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Bo=m3((T3={},f1(T3,Q,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),f1(T3,e1,{900:"fass",400:"fasr",300:"fasl"}),T3)),o7=[1,2,3,4,5,6,7,8,9,10],Do=o7.concat([11,12,13,14,15,16,17,18,19,20]),Uo=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],h2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},l3=new Set;Object.keys(n3[Q]).map(l3.add.bind(l3));Object.keys(n3[e1]).map(l3.add.bind(l3));var qo=[].concat(W6,t3(l3),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",h2.GROUP,h2.SWAP_OPACITY,h2.PRIMARY,h2.SECONDARY]).concat(o7.map(function(c){return"".concat(c,"x")})).concat(Do.map(function(c){return"w-".concat(c)})),$2=s2.FontAwesomeConfig||{};function Oo(c){var a=c1.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function Io(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(c1&&typeof c1.querySelector=="function"){var Go=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Go.forEach(function(c){var a=q6(c,2),e=a[0],r=a[1],i=Io(Oo(e));i!=null&&($2[r]=i)})}var t7={styleDefault:"solid",familyDefault:"classic",cssPrefix:s7,replacementClass:n7,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};$2.familyPrefix&&($2.cssPrefix=$2.familyPrefix);var E2=y(y({},t7),$2);E2.autoReplaceSvg||(E2.observeMutations=!1);var T={};Object.keys(t7).forEach(function(c){Object.defineProperty(T,c,{enumerable:!0,set:function(e){E2[c]=e,Y2.forEach(function(r){return r(T)})},get:function(){return E2[c]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(a){E2.cssPrefix=a,Y2.forEach(function(e){return e(T)})},get:function(){return E2.cssPrefix}});s2.FontAwesomeConfig=T;var Y2=[];function Wo(c){return Y2.push(c),function(){Y2.splice(Y2.indexOf(c),1)}}var c2=s6,D1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Zo(c){if(!(!c||!J1)){var a=c1.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=c1.head.childNodes,r=null,i=e.length-1;i>-1;i--){var s=e[i],n=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(r=s)}return c1.head.insertBefore(a,r),c}}var jo="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function o3(){for(var c=12,a="";c-- >0;)a+=jo[Math.random()*62|0];return a}function B2(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function Z6(c){return c.classList?B2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function m7(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Xo(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(m7(c[e]),'" ')},"").trim()}function t4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function j6(c){return c.size!==D1.size||c.x!==D1.x||c.y!==D1.y||c.rotate!==D1.rotate||c.flipX||c.flipY}function $o(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,i={transform:"translate(".concat(e/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(s," ").concat(n," ").concat(f)},o={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:o}}function Yo(c){var a=c.transform,e=c.width,r=e===void 0?s6:e,i=c.height,s=i===void 0?s6:i,n=c.startCentered,f=n===void 0?!1:n,l="";return f&&i7?l+="translate(".concat(a.x/c2-r/2,"em, ").concat(a.y/c2-s/2,"em) "):f?l+="translate(calc(-50% + ".concat(a.x/c2,"em), calc(-50% + ").concat(a.y/c2,"em)) "):l+="translate(".concat(a.x/c2,"em, ").concat(a.y/c2,"em) "),l+="scale(".concat(a.size/c2*(a.flipX?-1:1),", ").concat(a.size/c2*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var Ko=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function v7(){var c=s7,a=n7,e=T.cssPrefix,r=T.replacementClass,i=Ko;if(e!==c||r!==a){var s=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");i=i.replace(s,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(f,".".concat(r))}return i}var B0=!1;function D4(){T.autoAddCss&&!B0&&(Zo(v7()),B0=!0)}var Jo={mixout:function(){return{dom:{css:v7,insertCss:D4}}},hooks:function(){return{beforeDOMElementCreation:function(){D4()},beforeI2svg:function(){D4()}}}},$1=s2||{};$1[X1]||($1[X1]={});$1[X1].styles||($1[X1].styles={});$1[X1].hooks||($1[X1].hooks={});$1[X1].shims||($1[X1].shims=[]);var A1=$1[X1],z7=[],Qo=function c(){c1.removeEventListener("DOMContentLoaded",c),$3=1,z7.map(function(a){return a()})},$3=!1;J1&&($3=(c1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(c1.readyState),$3||c1.addEventListener("DOMContentLoaded",Qo));function ct(c){J1&&($3?setTimeout(c,0):z7.push(c))}function v3(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,i=c.children,s=i===void 0?[]:i;return typeof c=="string"?m7(c):"<".concat(a," ").concat(Xo(r),">").concat(s.map(v3).join(""),"</").concat(a,">")}function D0(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var at=function(a,e){return function(r,i,s,n){return a.call(e,r,i,s,n)}},U4=function(a,e,r,i){var s=Object.keys(a),n=s.length,f=i!==void 0?at(e,i):e,l,o,m;for(r===void 0?(l=1,m=a[s[0]]):(l=0,m=r);l<n;l++)o=s[l],m=f(m,a[o],o,a);return m};function et(c){for(var a=[],e=0,r=c.length;e<r;){var i=c.charCodeAt(e++);if(i>=55296&&i<=56319&&e<r){var s=c.charCodeAt(e++);(s&64512)==56320?a.push(((i&1023)<<10)+(s&1023)+65536):(a.push(i),e--)}else a.push(i)}return a}function f6(c){var a=et(c);return a.length===1?a[0].toString(16):null}function rt(c,a){var e=c.length,r=c.charCodeAt(a),i;return r>=55296&&r<=56319&&e>a+1&&(i=c.charCodeAt(a+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function U0(c){return Object.keys(c).reduce(function(a,e){var r=c[e],i=!!r.icon;return i?a[r.iconName]=r.icon:a[e]=r,a},{})}function l6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,i=r===void 0?!1:r,s=U0(a);typeof A1.hooks.addPack=="function"&&!i?A1.hooks.addPack(c,U0(a)):A1.styles[c]=y(y({},A1.styles[c]||{}),s),c==="fas"&&l6("fa",a)}var P3,E3,R3,b2=A1.styles,it=A1.shims,st=(P3={},f1(P3,Q,Object.values(f3[Q])),f1(P3,e1,Object.values(f3[e1])),P3),X6=null,h7={},H7={},u7={},p7={},V7={},nt=(E3={},f1(E3,Q,Object.keys(s3[Q])),f1(E3,e1,Object.keys(s3[e1])),E3);function ft(c){return~qo.indexOf(c)}function lt(c,a){var e=a.split("-"),r=e[0],i=e.slice(1).join("-");return r===c&&i!==""&&!ft(i)?i:null}var M7=function(){var a=function(s){return U4(b2,function(n,f,l){return n[l]=U4(f,s,{}),n},{})};h7=a(function(i,s,n){if(s[3]&&(i[s[3]]=n),s[2]){var f=s[2].filter(function(l){return typeof l=="number"});f.forEach(function(l){i[l.toString(16)]=n})}return i}),H7=a(function(i,s,n){if(i[n]=n,s[2]){var f=s[2].filter(function(l){return typeof l=="string"});f.forEach(function(l){i[l]=n})}return i}),V7=a(function(i,s,n){var f=s[2];return i[n]=n,f.forEach(function(l){i[l]=n}),i});var e="far"in b2||T.autoFetchSvg,r=U4(it,function(i,s){var n=s[0],f=s[1],l=s[2];return f==="far"&&!e&&(f="fas"),typeof n=="string"&&(i.names[n]={prefix:f,iconName:l}),typeof n=="number"&&(i.unicodes[n.toString(16)]={prefix:f,iconName:l}),i},{names:{},unicodes:{}});u7=r.names,p7=r.unicodes,X6=m4(T.styleDefault,{family:T.familyDefault})};Wo(function(c){X6=m4(c.styleDefault,{family:T.familyDefault})});M7();function $6(c,a){return(h7[c]||{})[a]}function ot(c,a){return(H7[c]||{})[a]}function H2(c,a){return(V7[c]||{})[a]}function C7(c){return u7[c]||{prefix:null,iconName:null}}function tt(c){var a=p7[c],e=$6("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function n2(){return X6}var Y6=function(){return{prefix:null,iconName:null,rest:[]}};function m4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?Q:e,i=s3[r][c],s=n3[r][c]||n3[r][i],n=c in A1.styles?c:null;return s||n||null}var q0=(R3={},f1(R3,Q,Object.keys(f3[Q])),f1(R3,e1,Object.keys(f3[e1])),R3);function v4(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,i=r===void 0?!1:r,s=(a={},f1(a,Q,"".concat(T.cssPrefix,"-").concat(Q)),f1(a,e1,"".concat(T.cssPrefix,"-").concat(e1)),a),n=null,f=Q;(c.includes(s[Q])||c.some(function(o){return q0[Q].includes(o)}))&&(f=Q),(c.includes(s[e1])||c.some(function(o){return q0[e1].includes(o)}))&&(f=e1);var l=c.reduce(function(o,m){var z=lt(T.cssPrefix,m);if(b2[m]?(m=st[f].includes(m)?Ro[f][m]:m,n=m,o.prefix=m):nt[f].indexOf(m)>-1?(n=m,o.prefix=m4(m,{family:f})):z?o.iconName=z:m!==T.replacementClass&&m!==s[Q]&&m!==s[e1]&&o.rest.push(m),!i&&o.prefix&&o.iconName){var h=n==="fa"?C7(o.iconName):{},u=H2(o.prefix,o.iconName);h.prefix&&(n=null),o.iconName=h.iconName||u||o.iconName,o.prefix=h.prefix||o.prefix,o.prefix==="far"&&!b2.far&&b2.fas&&!T.autoFetchSvg&&(o.prefix="fas")}return o},Y6());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&f===e1&&(b2.fass||T.autoFetchSvg)&&(l.prefix="fass",l.iconName=H2(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||n==="fa")&&(l.prefix=n2()||"fas"),l}var mt=function(){function c(){go(this,c),this.definitions={}}return xo(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var n=i.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(f){e.definitions[f]=y(y({},e.definitions[f]||{}),n[f]),l6(f,n[f]);var l=f3[Q][f];l&&l6(l,n[f]),M7()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var n=i[s],f=n.prefix,l=n.iconName,o=n.icon,m=o[2];e[f]||(e[f]={}),m.length>0&&m.forEach(function(z){typeof z=="string"&&(e[f][z]=o)}),e[f][l]=o}),e}}]),c}(),O0=[],N2={},A2={},vt=Object.keys(A2);function zt(c,a){var e=a.mixoutsTo;return O0=c,N2={},Object.keys(A2).forEach(function(r){vt.indexOf(r)===-1&&delete A2[r]}),O0.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(n){typeof i[n]=="function"&&(e[n]=i[n]),X3(i[n])==="object"&&Object.keys(i[n]).forEach(function(f){e[n]||(e[n]={}),e[n][f]=i[n][f]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(n){N2[n]||(N2[n]=[]),N2[n].push(s[n])})}r.provides&&r.provides(A2)}),e}function o6(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),i=2;i<e;i++)r[i-2]=arguments[i];var s=N2[c]||[];return s.forEach(function(n){a=n.apply(null,[a].concat(r))}),a}function M2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var i=N2[c]||[];i.forEach(function(s){s.apply(null,e)})}function Y1(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return A2[c]?A2[c].apply(null,a):void 0}function t6(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||n2();if(a)return a=H2(e,a)||a,D0(d7.definitions,e,a)||D0(A1.styles,e,a)}var d7=new mt,ht=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,M2("noAuto")},Ht={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return J1?(M2("beforeI2svg",a),Y1("pseudoElements2svg",a),Y1("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,ct(function(){pt({autoReplaceSvgRoot:e}),M2("watch",a)})}},ut={icon:function(a){if(a===null)return null;if(X3(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:H2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=m4(a[0]);return{prefix:r,iconName:H2(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(T.cssPrefix,"-"))>-1||a.match(_o))){var i=v4(a.split(" "),{skipLookups:!0});return{prefix:i.prefix||n2(),iconName:H2(i.prefix,i.iconName)||i.iconName}}if(typeof a=="string"){var s=n2();return{prefix:s,iconName:H2(s,a)||a}}}},g1={noAuto:ht,config:T,dom:Ht,parse:ut,library:d7,findIconDefinition:t6,toHtml:v3},pt=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?c1:e;(Object.keys(A1.styles).length>0||T.autoFetchSvg)&&J1&&T.autoReplaceSvg&&g1.dom.i2svg({node:r})};function z4(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return v3(r)})}}),Object.defineProperty(c,"node",{get:function(){if(J1){var r=c1.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function Vt(c){var a=c.children,e=c.main,r=c.mask,i=c.attributes,s=c.styles,n=c.transform;if(j6(n)&&e.found&&!r.found){var f=e.width,l=e.height,o={x:f/l/2,y:.5};i.style=t4(y(y({},s),{},{"transform-origin":"".concat(o.x+n.x/16,"em ").concat(o.y+n.y/16,"em")}))}return[{tag:"svg",attributes:i,children:a}]}function Mt(c){var a=c.prefix,e=c.iconName,r=c.children,i=c.attributes,s=c.symbol,n=s===!0?"".concat(a,"-").concat(T.cssPrefix,"-").concat(e):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:y(y({},i),{},{id:n}),children:r}]}]}function K6(c){var a=c.icons,e=a.main,r=a.mask,i=c.prefix,s=c.iconName,n=c.transform,f=c.symbol,l=c.title,o=c.maskId,m=c.titleId,z=c.extra,h=c.watchable,u=h===void 0?!1:h,P=r.found?r:e,N=P.width,E=P.height,L=i==="fak",M=[T.replacementClass,s?"".concat(T.cssPrefix,"-").concat(s):""].filter(function(G){return z.classes.indexOf(G)===-1}).filter(function(G){return G!==""||!!G}).concat(z.classes).join(" "),A={children:[],attributes:y(y({},z.attributes),{},{"data-prefix":i,"data-icon":s,class:M,role:z.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(E)})},w=L&&!~z.classes.indexOf("fa-fw")?{width:"".concat(N/E*16*.0625,"em")}:{};u&&(A.attributes[V2]=""),l&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(m||o3())},children:[l]}),delete A.attributes.title);var I=y(y({},A),{},{prefix:i,iconName:s,main:e,mask:r,maskId:o,transform:n,symbol:f,styles:y(y({},w),z.styles)}),r1=r.found&&e.found?Y1("generateAbstractMask",I)||{children:[],attributes:{}}:Y1("generateAbstractIcon",I)||{children:[],attributes:{}},l1=r1.children,h1=r1.attributes;return I.children=l1,I.attributes=h1,f?Mt(I):Vt(I)}function I0(c){var a=c.content,e=c.width,r=c.height,i=c.transform,s=c.title,n=c.extra,f=c.watchable,l=f===void 0?!1:f,o=y(y(y({},n.attributes),s?{title:s}:{}),{},{class:n.classes.join(" ")});l&&(o[V2]="");var m=y({},n.styles);j6(i)&&(m.transform=Yo({transform:i,startCentered:!0,width:e,height:r}),m["-webkit-transform"]=m.transform);var z=t4(m);z.length>0&&(o.style=z);var h=[];return h.push({tag:"span",attributes:o,children:[a]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function Ct(c){var a=c.content,e=c.title,r=c.extra,i=y(y(y({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),s=t4(r.styles);s.length>0&&(i.style=s);var n=[];return n.push({tag:"span",attributes:i,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var q4=A1.styles;function m6(c){var a=c[0],e=c[1],r=c.slice(4),i=q6(r,1),s=i[0],n=null;return Array.isArray(s)?n={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(h2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(h2.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(h2.PRIMARY),fill:"currentColor",d:s[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:a,height:e,icon:n}}var dt={found:!1,width:512,height:512};function Lt(c,a){!f7&&!T.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function v6(c,a){var e=a;return a==="fa"&&T.styleDefault!==null&&(a=n2()),new Promise(function(r,i){if(Y1("missingIconAbstract"),e==="fa"){var s=C7(c)||{};c=s.iconName||c,a=s.prefix||a}if(c&&a&&q4[a]&&q4[a][c]){var n=q4[a][c];return r(m6(n))}Lt(c,a),r(y(y({},dt),{},{icon:T.showMissingIcons&&c?Y1("missingIconAbstract")||{}:{}}))})}var G0=function(){},z6=T.measurePerformance&&S3&&S3.mark&&S3.measure?S3:{mark:G0,measure:G0},G2='FA "6.4.2"',gt=function(a){return z6.mark("".concat(G2," ").concat(a," begins")),function(){return L7(a)}},L7=function(a){z6.mark("".concat(G2," ").concat(a," ends")),z6.measure("".concat(G2," ").concat(a),"".concat(G2," ").concat(a," begins"),"".concat(G2," ").concat(a," ends"))},J6={begin:gt,end:L7},q3=function(){};function W0(c){var a=c.getAttribute?c.getAttribute(V2):null;return typeof a=="string"}function xt(c){var a=c.getAttribute?c.getAttribute(I6):null,e=c.getAttribute?c.getAttribute(G6):null;return a&&e}function bt(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(T.replacementClass)}function Nt(){if(T.autoReplaceSvg===!0)return O3.replace;var c=O3[T.autoReplaceSvg];return c||O3.replace}function St(c){return c1.createElementNS("http://www.w3.org/2000/svg",c)}function wt(c){return c1.createElement(c)}function g7(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?St:wt:e;if(typeof c=="string")return c1.createTextNode(c);var i=r(c.tag);Object.keys(c.attributes||[]).forEach(function(n){i.setAttribute(n,c.attributes[n])});var s=c.children||[];return s.forEach(function(n){i.appendChild(g7(n,{ceFn:r}))}),i}function yt(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var O3={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(i){e.parentNode.insertBefore(g7(i),e)}),e.getAttribute(V2)===null&&T.keepOriginalSource){var r=c1.createComment(yt(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~Z6(e).indexOf(T.replacementClass))return O3.replace(a);var i=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(f,l){return l===T.replacementClass||l.match(i)?f.toSvg.push(l):f.toNode.push(l),f},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}var n=r.map(function(f){return v3(f)}).join(`
`);e.setAttribute(V2,""),e.innerHTML=n}};function Z0(c){c()}function x7(c,a){var e=typeof a=="function"?a:q3;if(c.length===0)e();else{var r=Z0;T.mutateApproach===Po&&(r=s2.requestAnimationFrame||Z0),r(function(){var i=Nt(),s=J6.begin("mutate");c.map(i),s(),e()})}}var Q6=!1;function b7(){Q6=!0}function h6(){Q6=!1}var Y3=null;function j0(c){if(_0&&T.observeMutations){var a=c.treeCallback,e=a===void 0?q3:a,r=c.nodeCallback,i=r===void 0?q3:r,s=c.pseudoElementsCallback,n=s===void 0?q3:s,f=c.observeMutationsRoot,l=f===void 0?c1:f;Y3=new _0(function(o){if(!Q6){var m=n2();B2(o).forEach(function(z){if(z.type==="childList"&&z.addedNodes.length>0&&!W0(z.addedNodes[0])&&(T.searchPseudoElements&&n(z.target),e(z.target)),z.type==="attributes"&&z.target.parentNode&&T.searchPseudoElements&&n(z.target.parentNode),z.type==="attributes"&&W0(z.target)&&~Uo.indexOf(z.attributeName))if(z.attributeName==="class"&&xt(z.target)){var h=v4(Z6(z.target)),u=h.prefix,P=h.iconName;z.target.setAttribute(I6,u||m),P&&z.target.setAttribute(G6,P)}else bt(z.target)&&i(z.target)})}}),J1&&Y3.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function At(){Y3&&Y3.disconnect()}function kt(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,i){var s=i.split(":"),n=s[0],f=s.slice(1);return n&&f.length>0&&(r[n]=f.join(":").trim()),r},{})),e}function Tt(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",i=v4(Z6(c));return i.prefix||(i.prefix=n2()),a&&e&&(i.prefix=a,i.iconName=e),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=ot(i.prefix,c.innerText)||$6(i.prefix,f6(c.innerText))),!i.iconName&&T.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=c.firstChild.data)),i}function Pt(c){var a=B2(c.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return T.autoA11y&&(e?a["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||o3()):(a["aria-hidden"]="true",a.focusable="false")),a}function Et(){return{iconName:null,title:null,titleId:null,prefix:null,transform:D1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function X0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Tt(c),r=e.iconName,i=e.prefix,s=e.rest,n=Pt(c),f=o6("parseNodeAttributes",{},c),l=a.styleParser?kt(c):[];return y({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:i,transform:D1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:n}},f)}var Rt=A1.styles;function N7(c){var a=T.autoReplaceSvg==="nest"?X0(c,{styleParser:!1}):X0(c);return~a.extra.classes.indexOf(l7)?Y1("generateLayersText",c,a):Y1("generateSvgReplacementMutation",c,a)}var f2=new Set;W6.map(function(c){f2.add("fa-".concat(c))});Object.keys(s3[Q]).map(f2.add.bind(f2));Object.keys(s3[e1]).map(f2.add.bind(f2));f2=t3(f2);function $0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!J1)return Promise.resolve();var e=c1.documentElement.classList,r=function(z){return e.add("".concat(F0,"-").concat(z))},i=function(z){return e.remove("".concat(F0,"-").concat(z))},s=T.autoFetchSvg?f2:W6.map(function(m){return"fa-".concat(m)}).concat(Object.keys(Rt));s.includes("fa")||s.push("fa");var n=[".".concat(l7,":not([").concat(V2,"])")].concat(s.map(function(m){return".".concat(m,":not([").concat(V2,"])")})).join(", ");if(n.length===0)return Promise.resolve();var f=[];try{f=B2(c.querySelectorAll(n))}catch{}if(f.length>0)r("pending"),i("complete");else return Promise.resolve();var l=J6.begin("onTree"),o=f.reduce(function(m,z){try{var h=N7(z);h&&m.push(h)}catch(u){f7||u.name==="MissingIcon"&&console.error(u)}return m},[]);return new Promise(function(m,z){Promise.all(o).then(function(h){x7(h,function(){r("active"),r("complete"),i("pending"),typeof a=="function"&&a(),l(),m()})}).catch(function(h){l(),z(h)})})}function _t(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;N7(c).then(function(e){e&&x7([e],a)})}function Ft(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:t6(a||{}),i=e.mask;return i&&(i=(i||{}).icon?i:t6(i||{})),c(r,y(y({},e),{},{mask:i}))}}var Bt=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?D1:r,s=e.symbol,n=s===void 0?!1:s,f=e.mask,l=f===void 0?null:f,o=e.maskId,m=o===void 0?null:o,z=e.title,h=z===void 0?null:z,u=e.titleId,P=u===void 0?null:u,N=e.classes,E=N===void 0?[]:N,L=e.attributes,M=L===void 0?{}:L,A=e.styles,w=A===void 0?{}:A;if(a){var I=a.prefix,r1=a.iconName,l1=a.icon;return z4(y({type:"icon"},a),function(){return M2("beforeDOMElementCreation",{iconDefinition:a,params:e}),T.autoA11y&&(h?M["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(P||o3()):(M["aria-hidden"]="true",M.focusable="false")),K6({icons:{main:m6(l1),mask:l?m6(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:I,iconName:r1,transform:y(y({},D1),i),symbol:n,title:h,maskId:m,titleId:P,extra:{attributes:M,styles:w,classes:E}})})}},Dt={mixout:function(){return{icon:Ft(Bt)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=$0,e.nodeCallback=_t,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,i=r===void 0?c1:r,s=e.callback,n=s===void 0?function(){}:s;return $0(i,n)},a.generateSvgReplacementMutation=function(e,r){var i=r.iconName,s=r.title,n=r.titleId,f=r.prefix,l=r.transform,o=r.symbol,m=r.mask,z=r.maskId,h=r.extra;return new Promise(function(u,P){Promise.all([v6(i,f),m.iconName?v6(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var E=q6(N,2),L=E[0],M=E[1];u([e,K6({icons:{main:L,mask:M},prefix:f,iconName:i,transform:l,symbol:o,maskId:z,title:s,titleId:n,extra:h,watchable:!0})])}).catch(P)})},a.generateAbstractIcon=function(e){var r=e.children,i=e.attributes,s=e.main,n=e.transform,f=e.styles,l=t4(f);l.length>0&&(i.style=l);var o;return j6(n)&&(o=Y1("generateAbstractTransformGrouping",{main:s,transform:n,containerWidth:s.width,iconWidth:s.width})),r.push(o||s.icon),{children:r,attributes:i}}}},Ut={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return z4({type:"layer"},function(){M2("beforeDOMElementCreation",{assembler:e,params:r});var n=[];return e(function(f){Array.isArray(f)?f.map(function(l){n=n.concat(l.abstract)}):n=n.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers")].concat(t3(s)).join(" ")},children:n}]})}}}},qt={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,n=r.classes,f=n===void 0?[]:n,l=r.attributes,o=l===void 0?{}:l,m=r.styles,z=m===void 0?{}:m;return z4({type:"counter",content:e},function(){return M2("beforeDOMElementCreation",{content:e,params:r}),Ct({content:e.toString(),title:s,extra:{attributes:o,styles:z,classes:["".concat(T.cssPrefix,"-layers-counter")].concat(t3(f))}})})}}}},Ot={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?D1:i,n=r.title,f=n===void 0?null:n,l=r.classes,o=l===void 0?[]:l,m=r.attributes,z=m===void 0?{}:m,h=r.styles,u=h===void 0?{}:h;return z4({type:"text",content:e},function(){return M2("beforeDOMElementCreation",{content:e,params:r}),I0({content:e,transform:y(y({},D1),s),title:f,extra:{attributes:z,styles:u,classes:["".concat(T.cssPrefix,"-layers-text")].concat(t3(o))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var i=r.title,s=r.transform,n=r.extra,f=null,l=null;if(i7){var o=parseInt(getComputedStyle(e).fontSize,10),m=e.getBoundingClientRect();f=m.width/o,l=m.height/o}return T.autoA11y&&!i&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,I0({content:e.innerHTML,width:f,height:l,transform:s,title:i,extra:n,watchable:!0})])}}},It=new RegExp('"',"ug"),Y0=[1105920,1112319];function Gt(c){var a=c.replace(It,""),e=rt(a,0),r=e>=Y0[0]&&e<=Y0[1],i=a.length===2?a[0]===a[1]:!1;return{value:f6(i?a[0]:a),isSecondary:r||i}}function K0(c,a){var e="".concat(To).concat(a.replace(":","-"));return new Promise(function(r,i){if(c.getAttribute(e)!==null)return r();var s=B2(c.children),n=s.filter(function(l1){return l1.getAttribute(n6)===a})[0],f=s2.getComputedStyle(c,a),l=f.getPropertyValue("font-family").match(Fo),o=f.getPropertyValue("font-weight"),m=f.getPropertyValue("content");if(n&&!l)return c.removeChild(n),r();if(l&&m!=="none"&&m!==""){var z=f.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?e1:Q,u=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?n3[h][l[2].toLowerCase()]:Bo[h][o],P=Gt(z),N=P.value,E=P.isSecondary,L=l[0].startsWith("FontAwesome"),M=$6(u,N),A=M;if(L){var w=tt(N);w.iconName&&w.prefix&&(M=w.iconName,u=w.prefix)}if(M&&!E&&(!n||n.getAttribute(I6)!==u||n.getAttribute(G6)!==A)){c.setAttribute(e,A),n&&c.removeChild(n);var I=Et(),r1=I.extra;r1.attributes[n6]=a,v6(M,u).then(function(l1){var h1=K6(y(y({},I),{},{icons:{main:l1,mask:Y6()},prefix:u,iconName:A,extra:r1,watchable:!0})),G=c1.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(G,c.firstChild):c.appendChild(G),G.outerHTML=h1.map(function(U){return v3(U)}).join(`
// Author: @patriciogv - 2015
// Title: Metaballs

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

uniform vec3 u_frontColor;
uniform float u_scale;
uniform float u_offsetFactor;
uniform float u_cutoff;
uniform float u_speed;

vec2 random2( vec2 p ) {
    return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(-0.670,0.390))))*0.31);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy - vec2(0.5, 0.5);
    st.x *= u_resolution.x/u_resolution.y;
    vec3 color = u_frontColor;

    // Scale
    st *= u_scale;

    // Tile the space
    vec2 i_st = floor(st);
    vec2 f_st = fract(st);
    
    //speed
    float time = u_time;

    float m_dist = 1.;  // minimum distance
    for (int j= -1; j <= 1; j++ ) {
        for (int i= -1; i <= 1; i++ ) {
            // Neighbor place in the grid
            vec2 neighbor = vec2(float(i),float(j));

            // Random position from current + neighbor place in the grid
            vec2 offset = random2(i_st + neighbor);

            // Animate the offset
            offset = 0.5 + 0.5*sin(time + u_offsetFactor*offset) * u_speed;

            // Position of the cell
            vec2 pos = neighbor + offset - f_st;

            // Cell distance
            float dist = length(pos);

            // Metaball it!
            m_dist = min(m_dist, m_dist*dist);
        }
    }

    // Draw cells
    color += step(u_cutoff, m_dist);

    gl_FragColor = vec4(color,1.0);
}`;var i5=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Sj(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var j8={exports:{}},W2;typeof window<"u"?W2=window:typeof i5<"u"?W2=i5:typeof self<"u"?W2=self:W2={};var wj=W2,yj=kj,Aj=Object.prototype.toString;function kj(c){if(!c)return!1;var a=Aj.call(c);return a==="[object Function]"||typeof c=="function"&&a!=="[object RegExp]"||typeof window<"u"&&(c===window.setTimeout||c===window.alert||c===window.confirm||c===window.prompt)}var G4=function(c){return c.replace(/^\s+|\s+$/g,"")},Tj=function(c){return Object.prototype.toString.call(c)==="[object Array]"},Pj=function(c){if(!c)return{};for(var a={},e=G4(c).split(`
`),r=0;r<e.length;r++){var i=e[r],s=i.indexOf(":"),n=G4(i.slice(0,s)).toLowerCase(),f=G4(i.slice(s+1));typeof a[n]>"u"?a[n]=f:Tj(a[n])?a[n].push(f):a[n]=[a[n],f]}return a},Ej=_j,Rj=Object.prototype.hasOwnProperty;function _j(){for(var c={},a=0;a<arguments.length;a++){var e=arguments[a];for(var r in e)Rj.call(e,r)&&(c[r]=e[r])}return c}var _n=wj,Fj=yj,Bj=Pj,Dj=Ej;j8.exports=Z1;j8.exports.default=Z1;Z1.XMLHttpRequest=_n.XMLHttpRequest||Ij;Z1.XDomainRequest="withCredentials"in new Z1.XMLHttpRequest?Z1.XMLHttpRequest:_n.XDomainRequest;Uj(["get","put","post","patch","head","delete"],function(c){Z1[c==="delete"?"del":c]=function(a,e,r){return e=Fn(a,e,r),e.method=c.toUpperCase(),Bn(e)}});function Uj(c,a){for(var e=0;e<c.length;e++)a(c[e])}function qj(c){for(var a in c)if(c.hasOwnProperty(a))return!1;return!0}function Fn(c,a,e){var r=c;return Fj(a)?(e=a,typeof c=="string"&&(r={uri:c})):r=Dj(a,{uri:c}),r.callback=e,r}function Z1(c,a,e){return a=Fn(c,a,e),Bn(a)}function Bn(c){if(typeof c.callback>"u")throw new Error("callback argument missing");var a=!1,e=function(A,w,I){a||(a=!0,c.callback(A,w,I))};function r(){f.readyState===4&&setTimeout(n,0)}function i(){var M=void 0;if(f.response?M=f.response:M=f.responseText||Oj(f),N)try{M=JSON.parse(M)}catch{}return M}function s(M){return clearTimeout(E),M instanceof Error||(M=new Error(""+(M||"Unknown XMLHttpRequest Error"))),M.statusCode=0,e(M,L)}function n(){if(!o){var M;clearTimeout(E),c.useXDR&&f.status===void 0?M=200:M=f.status===1223?204:f.status;var A=L,w=null;return M!==0?(A={body:i(),statusCode:M,method:z,headers:{},url:m,rawRequest:f},f.getAllResponseHeaders&&(A.headers=Bj(f.getAllResponseHeaders()))):w=new Error("Internal XMLHttpRequest Error"),e(w,A,A.body)}}var f=c.xhr||null;f||(c.cors||c.useXDR?f=new Z1.XDomainRequest:f=new Z1.XMLHttpRequest);var l,o,m=f.url=c.uri||c.url,z=f.method=c.method||"GET",h=c.body||c.data,u=f.headers=c.headers||{},P=!!c.sync,N=!1,E,L={body:void 0,headers:{},statusCode:0,method:z,url:m,rawRequest:f};if("json"in c&&c.json!==!1&&(N=!0,u.accept||u.Accept||(u.Accept="application/json"),z!=="GET"&&z!=="HEAD"&&(u["content-type"]||u["Content-Type"]||(u["Content-Type"]="application/json"),h=JSON.stringify(c.json===!0?h:c.json))),f.onreadystatechange=r,f.onload=n,f.onerror=s,f.onprogress=function(){},f.onabort=function(){o=!0},f.ontimeout=s,f.open(z,m,!P,c.username,c.password),P||(f.withCredentials=!!c.withCredentials),!P&&c.timeout>0&&(E=setTimeout(function(){if(!o){o=!0,f.abort("timeout");var M=new Error("XMLHttpRequest timeout");M.code="ETIMEDOUT",s(M)}},c.timeout)),f.setRequestHeader)for(l in u)u.hasOwnProperty(l)&&f.setRequestHeader(l,u[l]);else if(c.headers&&!qj(c.headers))throw new Error("Headers cannot be set on an XDomainRequest object");return"responseType"in c&&(f.responseType=c.responseType),"beforeSend"in c&&typeof c.beforeSend=="function"&&c.beforeSend(f),f.send(h||null),f}function Oj(c){try{if(c.responseType==="document")return c.responseXML;var a=c.responseXML&&c.responseXML.documentElement.nodeName==="parsererror";if(c.responseType===""&&!a)return c.responseXML}catch{}return null}function Ij(){}var Gj=j8.exports;const s5=Sj(Gj);var J3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},Dn=function(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")},Un=function(){function c(a,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(a,i.key,i)}}return function(a,e,r){return e&&c(a.prototype,e),r&&c(a,r),a}}(),u6=function(c){if(Array.isArray(c)){for(var a=0,e=Array(c.length);a<c.length;a++)e[a]=c[a];return e}else return Array.from(c)},K2="";function Wj(c){return`
<table style="background-color: #8CE; width: 100%; height: 100%;"><tr>
<td align="center">
<div style="display: table-cell; vertical-align: middle;">
<div style="">`+c+`</div>
</div>
</td></tr></table>
`}var Zj=`
	This page requires a browser that supports WebGL.<br/>
	<a href="http://get.webgl.org">Click here to upgrade your browser.</a>
`,jj=`
	It does not appear your computer can support WebGL.<br/>
	<a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>
`,Xj=1,$j=2;function Yj(c,a,e){function r(n){var f=c.parentNode;f&&(f.innerHTML=Wj(n))}function i(n,f){typeof e=="function"?e(n):r(f)}if(!window.WebGLRenderingContext)return i(Xj,Zj),null;var s=Kj(c,a);return s?s.getExtension("OES_standard_derivatives"):i($j,jj),s}function Kj(c,a){for(var e=["webgl","experimental-webgl"],r=null,i=0;i<e.length;++i)try{r=c.getContext(e[i],a)}catch{if(r)break}return r}function g2(c,a,e,r){var i=c.gl,s=i.createShader(e);i.shaderSource(s,a),i.compileShader(s);var n=i.getShaderParameter(s,i.COMPILE_STATUS);return n?s:(K2=i.getShaderInfoLog(s),console.error("*** Error compiling shader "+s+":"+K2),c.trigger("error",{shader:s,source:a,type:e,error:K2,offset:r||0}),i.deleteShader(s),null)}function n5(c,a,e,r){for(var i=c.gl,s=i.createProgram(),n=0;n<a.length;++n)i.attachShader(s,a[n]);if(e)for(var f=0;f<e.length;++f)i.bindAttribLocation(s,r?r[f]:f,e[f]);i.linkProgram(s);var l=i.getProgramParameter(s,i.LINK_STATUS);return l?s:(K2=i.getProgramInfoLog(s),console.log("Error in program linking:"+K2),i.deleteProgram(s),null)}function p6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,e=[];for(var r in c){var i=c[r],s=void 0;if(a&&(r=a+"."+r),typeof i=="number")e.push({type:"float",method:"1f",name:r,value:i});else if(Array.isArray(i)){if(typeof i[0]=="number")i.length===1?e.push({type:"float",method:"1f",name:r,value:i}):i.length>=2&&i.length<=4?e.push({type:"vec"+i.length,method:i.length+"fv",name:r,value:i}):i.length>4&&e.push({type:"float[]",method:"1fv",name:r+"[0]",value:i});else if(typeof i[0]=="string")e.push({type:"sampler2D",method:"1i",name:r,value:i});else if(Array.isArray(i[0])&&typeof i[0][0]=="number"){if(i[0].length>=2&&i[0].length<=4)for(s=0;s<i.length;s++)e.push({type:"vec"+i[0].length,method:i[s].length+"fv",name:r+"["+s+"]",value:i[s]})}else if(J3(i[0])==="object")for(s=0;s<i.length;s++)e.push.apply(e,u6(p6(i[s],r+"["+s+"]")))}else typeof i=="boolean"?e.push({type:"bool",method:"1i",name:r,value:i}):typeof i=="string"?e.push({type:"sampler2D",method:"1i",name:r,value:i}):(typeof i>"u"?"undefined":J3(i))==="object"&&e.push.apply(e,u6(p6(i,r)))}return e}function Jj(c){var a=c.getBoundingClientRect();return a.top+a.height>0&&a.top<(window.innerHeight||document.documentElement.clientHeight)}function f5(c){return(c&c-1)===0}function Qj(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}function cX(c,a){return c&&a?c.toString()!==a.toString():!1}function aX(c){var a=new XMLHttpRequest;return a.open("GET",c,!1),a.send(),a.status==200?a.responseText:""}function qn(c){var a=new Set;return Object.assign(c,{on:function(r,i){var s={};s[r]=i,a.add(s)},off:function(r,i){if(i){var s={};s[r]=i,a.delete(s)}else{var n=!0,f=!1,l=void 0;try{for(var o=a[Symbol.iterator](),m;!(n=(m=o.next()).done);n=!0){var z=m.value,h=!0,u=!1,P=void 0;try{for(var N=Object.keys(z)[Symbol.iterator](),E;!(h=(E=N.next()).done);h=!0){var L=E.value;if(L===r){a.delete(z);return}}}catch(M){u=!0,P=M}finally{try{!h&&N.return&&N.return()}finally{if(u)throw P}}}}catch(M){f=!0,l=M}finally{try{!n&&o.return&&o.return()}finally{if(f)throw l}}}},listSubscriptions:function(){var r=!0,i=!1,s=void 0;try{for(var n=a[Symbol.iterator](),f;!(r=(f=n.next()).done);r=!0){var l=f.value;console.log(l)}}catch(o){i=!0,s=o}finally{try{!r&&n.return&&n.return()}finally{if(i)throw s}}},subscribe:function(r){a.add(r)},unsubscribe:function(r){a.delete(r)},unsubscribeAll:function(){a.clear()},trigger:function(r){for(var i=arguments.length,s=Array(i>1?i-1:0),n=1;n<i;n++)s[n-1]=arguments[n];var f=!0,l=!1,o=void 0;try{for(var m=a[Symbol.iterator](),z;!(f=(z=m.next()).done);f=!0){var h=z.value;typeof h[r]=="function"&&h[r].apply(h,u6(s))}}catch(u){l=!0,o=u}finally{try{!f&&m.return&&m.return()}finally{if(l)throw o}}}})}var X8=function(){function c(a,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};Dn(this,c),qn(this),this.gl=a,this.texture=a.createTexture(),this.texture&&(this.valid=!0),this.bind(),this.name=e,this.source=null,this.sourceType=null,this.loading=null,this.setData(1,1,new Uint8Array([0,0,0,255]),{filtering:"linear"}),this.setFiltering(r.filtering),this.load(r)}return Un(c,[{key:"destroy",value:function(){this.valid&&(this.gl.deleteTexture(this.texture),this.texture=null,delete this.data,this.data=null,this.valid=!1)}},{key:"bind",value:function(e){this.valid&&(typeof e=="number"&&c.activeUnit!==e&&(this.gl.activeTexture(this.gl.TEXTURE0+e),c.activeUnit=e),c.activeTexture!==this.texture&&(this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),c.activeTexture=this.texture))}},{key:"load",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.loading=null,typeof e.url=="string"?(this.url===void 0||e.url!==this.url)&&this.setUrl(e.url,e):e.element?this.setElement(e.element,e):e.data&&e.width&&e.height&&this.setData(e.width,e.height,e.data,e)}},{key:"setUrl",value:function(e){var r=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.valid)return this.url=e,this.source=this.url,this.sourceType="url",this.loading=new Promise(function(s,n){var f=e.split(".").pop().toLowerCase(),l=f==="ogv"||f==="webm"||f==="mp4",o=void 0;l?(o=document.createElement("video"),o.autoplay=!0,o.muted=!0,setTimeout(function(){o.play()},1),i.filtering="nearest"):o=new Image,o.onload=function(){try{r.setElement(o,i)}catch(m){console.log("Texture '"+r.name+"': failed to load url: '"+r.source+"'",m,i)}s(r)},o.onerror=function(m){console.log("Texture '"+r.name+"': failed to load url: '"+r.source+"'",m,i),s(r)},Qj()&&r.source.slice(0,5)==="data:"||(o.crossOrigin="anonymous"),o.src=r.source,l&&r.setElement(o,i)}),this.loading}},{key:"setData",value:function(e,r,i){var s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.width=e,this.height=r,this.source=i,this.sourceType="data",this.update(s),this.setFiltering(s),this.loading=Promise.resolve(this),this.loading}},{key:"setElement",value:function(e,r){var i=this,s=e;if(typeof e=="string"&&(e=document.querySelector(e)),e instanceof HTMLCanvasElement||e instanceof HTMLImageElement||e instanceof HTMLVideoElement)this.source=e,this.sourceType="element",e instanceof HTMLVideoElement?(this.width=this.source.videoWidth,this.height=this.source.videoHeight,e.addEventListener("canplaythrough",function(){i.intervalID=setInterval(function(){i.update(r)},15)},!0),e.addEventListener("ended",function(){e.currentTime=0,e.play()},!0)):this.update(r),this.setFiltering(r);else{var n="the 'element' parameter (`element: "+JSON.stringify(s)+"`) must be a CSS ";n+="selector string, or a <canvas>, <image> or <video> object",console.log("Texture '"+this.name+"': "+n,r)}return this.loading=Promise.resolve(this),this.loading}},{key:"update",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.valid&&(this.bind(),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,e.UNPACK_FLIP_Y_WEBGL!==!1),this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,e.UNPACK_PREMULTIPLY_ALPHA_WEBGL||!1),this.sourceType==="element"&&(this.source instanceof HTMLCanvasElement||this.source instanceof HTMLVideoElement||this.source instanceof HTMLImageElement&&this.source.complete)?(this.source instanceof HTMLVideoElement?(this.width=this.source.videoWidth,this.height=this.source.videoHeight):(this.width=this.source.width,this.height=this.source.height),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,this.source)):this.sourceType==="data"&&this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.width,this.height,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,this.source),this.trigger("loaded",this))}},{key:"setFiltering",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(this.valid){this.powerOf2=f5(this.width)&&f5(this.height),this.filtering=e.filtering||"linear";var r=this.gl;this.bind(),this.powerOf2?(r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,e.TEXTURE_WRAP_S||r.REPEAT),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,e.TEXTURE_WRAP_T||r.REPEAT),this.filtering==="mipmap"?(r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR_MIPMAP_LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.generateMipmap(r.TEXTURE_2D)):this.filtering==="linear"?(r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR)):this.filtering==="nearest"&&(r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST))):(r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),this.filtering==="mipmap"&&(this.filtering="linear"),this.filtering==="nearest"?(r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST)):(r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR)))}}}]),c}();X8.getMaxTextureSize=function(c){return c.getParameter(c.MAX_TEXTURE_SIZE)};X8.activeUnit=-1;var On=function(){function c(a,e,r){var i=this;Dn(this,c),qn(this),e=e||{},r=r||{},a.hasAttribute("data-fullscreen")&&(a.getAttribute("data-fullscreen")=="1"||a.getAttribute("data-fullscreen")=="true")?(this.width=window.innerWidth,this.height=window.innerHeight,a.width=window.innerWidth,a.height=window.innerHeight):(this.width=a.clientWidth,this.height=a.clientHeight),this.canvas=a,this.gl=void 0,this.deps={},this.program=void 0,this.textures={},this.buffers={},this.uniforms={},this.vbo={},this.isValid=!1,this.animationFrameRequest=void 0,this.BUFFER_COUNT=0,this.vertexString=e.vertexString||`
#ifdef GL_ES
precision mediump float;
#endif

attribute vec2 a_position;
attribute vec2 a_texcoord;

varying vec2 v_texcoord;

void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
    v_texcoord = a_texcoord;
}
`,this.fragmentString=e.fragmentString||`
#ifdef GL_ES
precision mediump float;
#endif

varying vec2 v_texcoord;

void main(){
    gl_FragColor = vec4(0.0);
}
`;var s=Yj(a,e,r.onError);if(!s)return;if(this.gl=s,this.timeLoad=this.timePrev=performance.now(),this.timeDelta=0,this.forceRender=!0,this.paused=!1,this.realToCSSPixels=window.devicePixelRatio||1,a.style.backgroundColor=e.backgroundColor||"rgba(1,1,1,0)",a.hasAttribute("data-fragment"))this.fragmentString=a.getAttribute("data-fragment");else if(a.hasAttribute("data-fragment-url")){var n=a.getAttribute("data-fragment-url");s5.get(n,function(N,E,L){i.load(L,i.vertexString)})}if(a.hasAttribute("data-vertex"))this.vertexString=a.getAttribute("data-vertex");else if(a.hasAttribute("data-vertex-url")){var f=a.getAttribute("data-vertex-url");s5.get(f,function(N,E,L){i.load(i.fragmentString,L)})}if(this.load(),!this.program)return;var l=s.getAttribLocation(this.program,"a_texcoord");this.vbo.texCoords=s.createBuffer(),this.gl.bindBuffer(s.ARRAY_BUFFER,this.vbo.texCoords),this.gl.bufferData(s.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]),s.STATIC_DRAW),this.gl.enableVertexAttribArray(l),this.gl.vertexAttribPointer(l,2,s.FLOAT,!1,0,0);var o=s.getAttribLocation(this.program,"a_position");if(this.vbo.vertices=s.createBuffer(),this.gl.bindBuffer(s.ARRAY_BUFFER,this.vbo.vertices),this.gl.bufferData(s.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),s.STATIC_DRAW),this.gl.enableVertexAttribArray(o),this.gl.vertexAttribPointer(o,2,s.FLOAT,!1,0,0),a.hasAttribute("data-textures")){var m=a.getAttribute("data-textures").split(",");for(var z in m)this.setUniform("u_tex"+z,m[z])}var h={x:0,y:0};document.addEventListener("mousemove",function(N){h.x=N.clientX||N.pageX,h.y=N.clientY||N.pageY},!1);var u=this;function P(){u.nMouse>1&&u.setMouse(h),u.resize()&&(u.forceRender=!0),u.render(),u.animationFrameRequest=window.requestAnimationFrame(P)}return this.setMouse({x:0,y:0}),P(),this}return Un(c,[{key:"destroy",value:function(){cancelAnimationFrame(this.animationFrameRequest),this.animated=!1,this.isValid=!1;for(var e in this.textures)e.destroy&&e.destroy();this.textures={};for(var r in this.attribs)this.gl.deleteBuffer(this.attribs[r]);this.gl.useProgram(null),this.gl.deleteProgram(this.program);for(var i in this.buffers){var s=this.buffers[i];this.gl.deleteProgram(s.program)}this.program=null,this.gl=null}},{key:"load",value:function(e,r){var i=this;r&&(this.vertexString=r),e&&(this.fragmentString=e);var s=this.fragmentString.split(/\r?\n/);this.fragmentString=`#define PLATFORM_WEBGL
#line 0
`,s.forEach(function(E,L){var M=E.trim();if(M.startsWith('#include "lygia')){var A=M.substring(15).replace(/\'|\"|\;|\s/g,"");if(A.endsWith("glsl")){if(i.deps[A]===void 0){var w="https://lygia.xyz"+A;i.deps[A]=aX(w)}i.fragmentString+=i.deps[A]+`
#line `+(L+1)+`
`}}else i.fragmentString+=E+`
`}),this.animated=!1,this.nDelta=(this.fragmentString.match(/u_delta/g)||[]).length,this.nTime=(this.fragmentString.match(/u_time/g)||[]).length,this.nDate=(this.fragmentString.match(/u_date/g)||[]).length,this.nMouse=(this.fragmentString.match(/u_mouse/g)||[]).length,this.animated=this.nDate>1||this.nTime>1||this.nMouse>1;var n=this.fragmentString.search(/sampler2D/g);if(n)for(var f=this.fragmentString.split(`
`),l=0;l<f.length;l++){var o=f[l].match(/uniform\s*sampler2D\s*([\w]*);\s*\/\/\s*([\w|\:\/\/|\.|\-|\_]*)/i);if(o){var m=o[2].split(".").pop().toLowerCase();o[1]&&o[2]&&(m==="jpg"||m==="jpeg"||m==="png"||m==="ogv"||m==="webm"||m==="mp4")&&this.setUniform(o[1],o[2])}var z=f[l].match(/\s*void\s*main\s*/g);if(z)break}var h=g2(this,this.vertexString,this.gl.VERTEX_SHADER),u=g2(this,this.fragmentString,this.gl.FRAGMENT_SHADER);u?this.isValid=!0:(u=g2(this,`void main(){
	gl_FragColor = vec4(1.0);
}`,this.gl.FRAGMENT_SHADER),this.isValid=!1);var P=n5(this,[h,u]);this.gl.useProgram(P),this.gl.deleteShader(h),this.gl.deleteShader(u),this.program=P,this.change=!0,this.BUFFER_COUNT=0;var N=this.getBuffers(this.fragmentString);Object.keys(N).length&&this.loadPrograms(N),this.buffers=N,this.texureIndex=this.BUFFER_COUNT,this.trigger("load",{}),this.forceRender=!0,this.render()}},{key:"test",value:function(e,r,i){var s=this.vertexString,n=this.fragmentString,f=this.paused,l=this.gl.getExtension("EXT_disjoint_timer_query"),o=l.createQueryEXT(),m=this.isValid;(r||i)&&(this.load(r,i),m=this.isValid,this.forceRender=!0,this.render()),this.paused=!0,l.beginQueryEXT(l.TIME_ELAPSED_EXT,o),this.forceRender=!0,this.render(),l.endQueryEXT(l.TIME_ELAPSED_EXT);var z=this;function h(){z.paused=f,(r||i)&&z.load(n,s)}function u(){z.forceRender=!0,z.render();var P=l.getQueryObjectEXT(o,l.QUERY_RESULT_AVAILABLE_EXT),N=z.gl.getParameter(l.GPU_DISJOINT_EXT);if(P&&!N){var E={wasValid:m,frag:r||z.fragmentString,vert:i||z.vertexString,timeElapsedMs:l.getQueryObjectEXT(o,l.QUERY_RESULT_EXT)/1e6};h(),e(E)}else window.requestAnimationFrame(u)}u()}},{key:"loadTexture",value:function(e,r,i){var s=this;i||(i={}),typeof r=="string"?i.url=r:(typeof r>"u"?"undefined":J3(r))==="object"&&r.data&&r.width&&r.height?(i.data=r.data,i.width=r.width,i.height=r.height):(typeof r>"u"?"undefined":J3(r))==="object"&&(i.element=r),this.textures[e]?this.textures[e]&&(this.textures[e].load(i),this.textures[e].on("loaded",function(n){s.forceRender=!0})):(this.textures[e]=new X8(this.gl,e,i),this.textures[e].on("loaded",function(n){s.forceRender=!0}))}},{key:"refreshUniforms",value:function(){this.uniforms={}}},{key:"setUniform",value:function(e){for(var r={},i=arguments.length,s=Array(i>1?i-1:0),n=1;n<i;n++)s[n-1]=arguments[n];r[e]=s,this.setUniforms(r)}},{key:"setUniforms",value:function(e){var r=p6(e);for(var i in r)r[i].type==="sampler2D"?this.loadTexture(r[i].name,r[i].value[0]):this.uniform(r[i].method,r[i].type,r[i].name,r[i].value);this.forceRender=!0}},{key:"setMouse",value:function(e){var r=this.canvas.getBoundingClientRect();if(e&&e.x&&e.x>=r.left&&e.x<=r.right&&e.y&&e.y>=r.top&&e.y<=r.bottom){var i=(e.x-r.left)*this.realToCSSPixels,s=this.canvas.height-(e.y-r.top)*this.realToCSSPixels;this.uniform("2f","vec2","u_mouse",i,s)}}},{key:"uniform",value:function(e,r,i){this.uniforms[i]=this.uniforms[i]||{};for(var s=this.uniforms[i],n=arguments.length,f=Array(n>3?n-3:0),l=3;l<n;l++)f[l-3]=arguments[l];var o=cX(s.value,f);if(o||this.change||!s.location||!s.value){s.name=i,s.type=r,s.value=f,s.method="uniform"+e,this.gl.useProgram(this.program),s.location=this.gl.getUniformLocation(this.program,i),this.gl[s.method].apply(this.gl,[s.location].concat(s.value));for(var m in this.buffers){var z=this.buffers[m];this.gl.useProgram(z.program);var h=this.gl.getUniformLocation(z.program,i);this.gl[s.method].apply(this.gl,[h].concat(s.value))}}}},{key:"uniformTexture",value:function(e,r,i){if(this.textures[e]===void 0)this.loadTexture(e,r,i);else{this.uniform("1i","sampler2D",e,this.texureIndex);for(var s in this.buffers){var n=this.buffers[s];this.gl.useProgram(n.program),this.gl.activeTexture(this.gl.TEXTURE0+this.texureIndex),this.gl.bindTexture(this.gl.TEXTURE_2D,this.textures[e].texture)}this.gl.useProgram(this.program),this.gl.activeTexture(this.gl.TEXTURE0+this.texureIndex),this.gl.bindTexture(this.gl.TEXTURE_2D,this.textures[e].texture),this.uniform("2f","vec2",e+"Resolution",this.textures[e].width,this.textures[e].height)}}},{key:"resize",value:function(){if(this.width!==this.canvas.clientWidth||this.height!==this.canvas.clientHeight){this.realToCSSPixels=window.devicePixelRatio||1;var e=Math.floor(this.gl.canvas.clientWidth*this.realToCSSPixels),r=Math.floor(this.gl.canvas.clientHeight*this.realToCSSPixels);return(this.gl.canvas.width!==e||this.gl.canvas.height!==r)&&(this.gl.canvas.width=e,this.gl.canvas.height=r,this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)),this.width=this.canvas.clientWidth,this.height=this.canvas.clientHeight,this.resizeSwappableBuffers(),!0}else return!1}},{key:"render",value:function(){if(this.visible=Jj(this.canvas),this.forceRender||this.change||this.animated&&this.visible&&!this.paused){var e=new Date,r=performance.now();this.timeDelta=(r-this.timePrev)/1e3,this.timePrev=r,this.nDelta>1&&this.uniform("1f","float","u_delta",this.timeDelta),this.nTime>1&&this.uniform("1f","float","u_time",(r-this.timeLoad)/1e3),this.nDate&&this.uniform("4f","float","u_date",e.getFullYear(),e.getMonth(),e.getDate(),e.getHours()*3600+e.getMinutes()*60+e.getSeconds()+e.getMilliseconds()*.001),this.uniform("2f","vec2","u_resolution",this.canvas.width,this.canvas.height);for(var i in this.buffers){var s=this.buffers[i];this.uniform("1i","sampler2D",s.name,s.bundle.input.index)}this.texureIndex=this.BUFFER_COUNT;for(var n in this.textures)this.uniformTexture(n),this.texureIndex++;this.renderPrograms(),this.trigger("render",{}),this.change=!1,this.forceRender=!1}}},{key:"pause",value:function(){this.paused=!0}},{key:"play",value:function(){this.paused=!1}},{key:"renderPrograms",value:function(){var e=this.gl,r=e.canvas.width,i=e.canvas.height;e.viewport(0,0,r,i);for(var s in this.buffers){var n=this.buffers[s];n.bundle.render(r,i,n.program,n.name),e.bindFramebuffer(e.FRAMEBUFFER,null)}e.useProgram(this.program),e.drawArrays(e.TRIANGLES,0,6)}},{key:"getBuffers",value:function(e){var r={};return e&&e.replace(/(?:^\s*)((?:#if|#elif)(?:\s*)(defined\s*\(\s*BUFFER_)(\d+)(?:\s*\))|(?:#ifdef)(?:\s*BUFFER_)(\d+)(?:\s*))/gm,function(){var i=arguments[3]||arguments[4];r["u_buffer"+i]={fragment:"#define BUFFER_"+i+`
`+e}}),r}},{key:"loadPrograms",value:function(e){var r=this,i=this.gl,s=g2(r,r.vertexString,i.VERTEX_SHADER);for(var n in e){var f=e[n],l=g2(r,f.fragment,i.FRAGMENT_SHADER,1);l?r.isValid=!0:(l=g2(r,`void main(){
	gl_FragColor = vec4(1.0);
}`,i.FRAGMENT_SHADER),r.isValid=!1);var o=n5(r,[s,l]);f.name=n,f.program=o,f.bundle=r.createSwappableBuffer(r.canvas.width,r.canvas.height,o),i.deleteShader(l)}i.deleteShader(s)}},{key:"createSwappableBuffer",value:function(e,r,i){var s=this.createBuffer(e,r,i),n=this.createBuffer(e,r,i),f=this.gl;return{input:s,output:n,swap:function(){var o=s;s=n,n=o,this.input=s,this.output=n},render:function(o,m,z,h){f.useProgram(z),f.viewport(0,0,o,m),f.bindFramebuffer(f.FRAMEBUFFER,this.input.buffer),f.framebufferTexture2D(f.FRAMEBUFFER,f.COLOR_ATTACHMENT0,f.TEXTURE_2D,this.output.texture,0),f.drawArrays(f.TRIANGLES,0,6),this.swap()},resize:function(o,m,z,h){f.useProgram(z),f.viewport(0,0,o,m),this.input.resize(o,m),this.output.resize(o,m)}}}},{key:"createBuffer",value:function(e,r,i){var s=this.gl,n=this.BUFFER_COUNT;this.BUFFER_COUNT+=2,s.getExtension("OES_texture_float");var f=s.createTexture();s.activeTexture(s.TEXTURE0+n),s.bindTexture(s.TEXTURE_2D,f),s.texImage2D(s.TEXTURE_2D,0,s.RGBA,e,r,0,s.RGBA,s.FLOAT,null),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE);var l=s.createFramebuffer();return{index:n,texture:f,buffer:l,W:e,H:r,resize:function(m,z){s.bindFramebuffer(s.FRAMEBUFFER,l);var h=Math.min(m,this.W),u=Math.min(z,this.H),P=new Float32Array(h*u*4);s.readPixels(0,0,h,u,s.RGBA,s.FLOAT,P),s.bindFramebuffer(s.FRAMEBUFFER,null);var N=n+1,E=s.createTexture();s.activeTexture(s.TEXTURE0+N),s.bindTexture(s.TEXTURE_2D,E),s.texImage2D(s.TEXTURE_2D,0,s.RGBA,m,z,0,s.RGBA,s.FLOAT,null),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texSubImage2D(s.TEXTURE_2D,0,0,0,h,u,s.RGBA,s.FLOAT,P);var L=s.createFramebuffer();s.bindFramebuffer(s.FRAMEBUFFER,null),s.deleteTexture(f),s.activeTexture(s.TEXTURE0+n),s.bindTexture(s.TEXTURE_2D,E),n=this.index=n,f=this.texture=E,l=this.buffer=L,this.W=m,this.H=z}}}},{key:"resizeSwappableBuffers",value:function(){var e=this.gl,r=e.canvas.width,i=e.canvas.height;e.viewport(0,0,r,i);for(var s in this.buffers){var n=this.buffers[s];n.bundle.resize(r,i,n.program,n.name)}e.useProgram(this.program)}},{key:"version",value:function(){return"0.1.7"}}]),c}();function eX(){var c=document.getElementsByClassName("glslCanvas");if(c.length>0){window.glslCanvases=[];for(var a=0;a<c.length;a++){var e=new On(c[a]);e.isValid&&window.glslCanvases.push(e)}}}window.addEventListener("load",function(){eX()});const $8=(c,a)=>{const e=c.__vccOpts||c;for(const[r,i]of a)e[r]=i;return e},V3=c=>(k5("data-v-23a195a2"),c=c(),T5(),c),rX=V3(()=>d("div",{id:"container"},[d("canvas",{id:"canvas",class:"glslCanvas",width:"1000",height:"1000"})],-1)),iX=V3(()=>d("p",null,"Scale",-1)),sX=V3(()=>d("p",null,"offsetFactor",-1)),nX=V3(()=>d("p",null,"Cutoff",-1)),fX=V3(()=>d("p",null,"Color",-1)),lX={class:"main-menu"},oX="#ff8c8c",tX="#8b88ff",mX="#82e897",vX={__name:"Shader",setup(c){const a=U=>-.5*Math.cos(Math.PI*U)+.5,e=U=>-.5*Math.cos(.5*Math.PI*U)+.5,r=U=>U<=.5?Math.pow(U*2,10)/2:1-Math.pow(2-U*2,10)/2;b1(2);let i,s,n=3e3,f=b1([10]),l=b1([0,0,0]),o=b1([.116]),m=b1([6.2831]),z=b1([1]),h=b1("none"),u=b1([]),P=b1([]);b1(100),b1(100),B5(()=>{s=document.getElementById("canvas"),i=new On(s),s.getContext("webgl")&&(i.load(Nj),i.setUniform("u_frontColor",...l.value),i.setUniform("u_scale",...f.value),i.setUniform("u_offsetFactor",m.value),i.setUniform("u_cutoff",...o.value),i.setUniform("u_speed",...z.value))});function N(U){const B=U.target.value;i&&i.setUniform("u_offsetFactor",B*1)}function E(U){const B=U.target.value;i&&i.setUniform("u_scale",B*1)}function L(U){const B=U.target.value,$=h1(B);i&&i.setUniform("u_frontColor",$.r,$.g,$.b)}function M(){h.value!=="design"&&(r1(),h.value="design",G(f,"u_scale",n,[23],a),G(l,"u_frontColor",n,Object.values(h1(tX)),a),G(o,"u_cutoff",n,[.116],a),G(m,"u_offsetFactor",n,[6.2831],a),G(z,"u_speed",n,[1],a))}function A(){h.value!=="coding"&&(r1(),h.value="coding",G(f,"u_scale",n,[100],a),G(l,"u_frontColor",n,Object.values(h1(mX)),a),G(o,"u_cutoff",n,[.25],r),G(m,"u_offsetFactor",n,[2e8],r),G(z,"u_speed",n,[3],e))}function w(){h.value!=="ml"&&(r1(),h.value="ml",G(f,"u_scale",n,[2.4],a),G(l,"u_frontColor",n,Object.values(h1(oX)),a),G(o,"u_cutoff",n,[.23],a),G(m,"u_offsetFactor",n,[3],a),G(z,"u_speed",n,[.2],a))}function I(){h.value!=="none"&&(r1(),h.value="none",G(f,"u_scale",n,[10],a),G(l,"u_frontColor",n,[0,0,0],a),G(o,"u_cutoff",n,[.1],a),G(m,"u_offsetFactor",n,[.1],a),G(z,"u_speed",n,[1],a))}function r1(){u.value.forEach(U=>clearInterval(U)),P.value.forEach(U=>clearInterval(U))}function l1(U){const B=U.target.value;i&&i.setUniform("u_cutoff",B*1)}function h1(U){var B=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(U);return B?{r:parseInt(B[1],16)/255,g:parseInt(B[2],16)/255,b:parseInt(B[3],16)/255}:null}function G(U,B,$,q1,D2){q1.map((V1,O1)=>(V1-U[O1])/$*10);const M3=V1=>{const O1=U.value,P1=[...U.value];for(let m1=0;m1<U.value.length;m1++)P1[m1]=O1[m1]+V1*(q1[m1]-O1[m1]);return P1};let o1=0;const K=10;let j=setInterval(()=>{for(let V1=0;V1<U.value.length;V1++)i.setUniform(B,...M3(D2(o1)));o1+=K/$},K);u.value.push(j),P.value.push(setTimeout(()=>{clearInterval(j),i.setUniform(B,...q1),U.value=q1},$))}return(U,B)=>(F6(),Y5(_1,null,[rX,d("div",null,[iX,d("input",{type:"number",onInput:B[0]||(B[0]=$=>E($))},null,32)]),d("div",null,[sX,d("input",{type:"number",onInput:B[1]||(B[1]=$=>N($))},null,32)]),d("div",null,[nX,d("input",{type:"number",onInput:B[2]||(B[2]=$=>l1($))},null,32)]),d("div",null,[fX,d("input",{type:"color",onInput:B[3]||(B[3]=$=>L($))},null,32)]),d("div",lX,[d("h2",{onMouseover:B[4]||(B[4]=$=>M()),onMouseleave:B[5]||(B[5]=$=>I())},"Design",32),d("h2",{onMouseover:B[6]||(B[6]=$=>A()),onMouseleave:B[7]||(B[7]=$=>I())},"Coding",32),d("h2",{onMouseover:B[8]||(B[8]=$=>w()),onMouseleave:B[9]||(B[9]=$=>I())},"Machine Learning",32)])],64))}},zX=$8(vX,[["__scopeId","data-v-23a195a2"]]),hX="/self.jpg";const HX={name:"Main",components:{Shader:zX}},s1=c=>(k5("data-v-b9099713"),c=c(),T5(),c),uX={class:"main-container"},pX={class:"hello-container"},VX=s1(()=>d("div",{class:"neg-margin"},[d("img",{style:{width:"120px","border-radius":"100px"},src:hX})],-1)),MX={class:"hello-text"},CX=s1(()=>d("h1",null,[v2("Hi, I'm "),d("span",{style:{display:"inline-block"}},"Moritz 👋")],-1)),dX=s1(()=>d("h3",null,"I work at the intersection of software engineering, machine learning and UX",-1)),LX={class:"hello-links"},gX={href:"https://www.linkedin.com/in/moritzdueck/",target:"_blank"},xX={href:"https://github.com/moritzdueck",target:"_blank"},bX={href:"mailto:mdueck@student.ethz.ch"},NX={class:"with-text"},SX={href:"/Professional.pdf"},wX=s1(()=>d("span",{style:{"margin-left":"10px"}},"CV",-1)),yX=s1(()=>d("div",{class:"about"},[d("p",null,[v2(" In my studies at ETH Zurich, I do research on Interactive Visualisations and Intelligence Augmentation under the supervision of "),d("a",{href:"https://el-assady.com/"},"Menna El-Assady"),v2(" at the "),d("a",{href:"https://ivia.ethz.ch/"},"IVIA chair"),v2(". ")]),d("p",null,[v2("At "),d("a",{href:"https://www.simunto.com/"},"Simunto"),v2(", I design and develop web-applications for editing, running and analysing traffic simulations with millions of Agents.")])],-1)),AX={class:"selected-work"},kX=s1(()=>d("h3",null,"Selected Work",-1)),TX={class:"overview-grid"},PX=s1(()=>d("span",null,"Neighborhood Traces is an interactive article explaining convolutional neural networks",-1)),EX=s1(()=>d("span",{class:"tech-stack"},"Typescript, D3.js, Python, Django, Pytorch, Pandas",-1)),RX={class:"project-links"},_X={href:"https://clownfish-app-4x5p6.ondigitalocean.app/"},FX={href:"https://github.com/moritzdueck/collaiborate"},BX=s1(()=>d("span",null,"Mobility impact analyzer is a tool used by Volkswagen to visually inspect MATSim simulation outputs",-1)),DX=s1(()=>d("span",{class:"tech-stack"},"Angular, deck.gl, Mapibre GL, Java, AWS",-1)),UX={class:"project-links"},qX={href:"https://www.moia.io/en/blog/mia-mobility-impact-analyzer"},OX=s1(()=>d("span",null,"Tramola chart editor allows you to create customizable charts for tabular data",-1)),IX=s1(()=>d("span",{class:"tech-stack"},"Vue.js, Java, Postgres",-1)),GX={class:"project-links"},WX={href:"https://www.simunto.com/tramola/features"},ZX=s1(()=>d("span",null,"Tramola Network Editor can edit transportation networks with up to 10.000.000 links",-1)),jX=s1(()=>d("span",{class:"tech-stack"},"Vue.js, deck.gl, Java",-1)),XX={class:"project-links"},$X={href:"https://www.simunto.com/tramola/ "},YX=s1(()=>d("span",null,"Latent space interpolation for automatic generation of SVG animations",-1)),KX=s1(()=>d("span",{class:"tech-stack"},"Python, Pytorch",-1)),JX={class:"project-links"},QX={href:"/svg-interpolation.pdf"},c$=s1(()=>d("span",null,"Guitar score following application allows guitar players to focus on the essentials while playing",-1)),a$=s1(()=>d("span",{class:"tech-stack"},"React, Node.js, MongoDB",-1)),e$={class:"project-links"},r$={href:"/Bachelorarbeit.pdf"},i$={href:"https://github.com/moritzdueck/chordcompanion"},s$=s1(()=>d("span",null,"Mixed-Initiative System for Contextualized Fairness Assessment is a machine learning model fairness evaluation framework",-1)),n$=s1(()=>d("span",{class:"tech-stack"},"React, D3.js, Pytorch",-1)),f$={class:"project-links"},l$={href:"https://ieeexplore.ieee.org/document/9974353"},o$=s1(()=>d("div",{class:"footer"},[d("p",null,"© Moritz Dück 2023")],-1));function t$(c,a,e,r,i,s){const n=ul("font-awesome-icon");return F6(),Y5("div",uX,[d("div",pX,[VX,d("div",MX,[CX,dX,d("div",LX,[d("span",null,[d("a",gX,[J(n,{icon:"fa-brands fa-linkedin-in"})])]),d("span",null,[d("a",xX,[J(n,{icon:"fa-brands fa-github"})])]),d("span",null,[d("a",bX,[J(n,{icon:"fa fa-envelope"})])]),d("span",NX,[d("a",SX,[J(n,{icon:"fa fa-file"}),wX])])])])]),yX,d("div",AX,[kX,d("div",TX,[d("div",null,[PX,d("div",null,[EX,d("div",RX,[d("a",_X,[J(n,{icon:"fa fa-globe"})]),d("a",FX,[J(n,{icon:"fab fa-github"})])])])]),d("div",null,[BX,d("div",null,[DX,d("div",UX,[d("a",qX,[J(n,{icon:"fa fa-globe"})])])])]),d("div",null,[OX,d("div",null,[IX,d("div",GX,[d("a",WX,[J(n,{icon:"fa fa-globe"})])])])]),d("div",null,[ZX,d("div",null,[jX,d("div",XX,[d("a",$X,[J(n,{icon:"fa fa-globe"})])])])]),d("div",null,[YX,d("div",null,[KX,d("div",JX,[d("a",QX,[J(n,{icon:"fa fa-file-pdf"})])])])]),d("div",null,[c$,d("div",null,[a$,d("div",e$,[d("a",r$,[J(n,{icon:"fa fa-file-pdf"})]),d("a",i$,[J(n,{icon:"fab fa-github"})])])])]),d("div",null,[s$,d("div",null,[n$,d("div",f$,[d("a",l$,[J(n,{icon:"fa fa-file-pdf"})])])])])])]),o$])}const m$=$8(HX,[["render",t$],["__scopeId","data-v-b9099713"]]),v$=R5({__name:"App",setup(c){return(a,e)=>(F6(),Bl(m$))}});const z$=$8(v$,[["__scopeId","data-v-113441e9"]]);S7.add(FB);S7.add(bj);Co(z$).component("font-awesome-icon",mm).mount("#app");