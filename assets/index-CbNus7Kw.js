(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ll(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const ae={},sr=[],yn=()=>{},ud=()=>!1,lo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Dl=n=>n.startsWith("onUpdate:"),Ee=Object.assign,Il=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},fd=Object.prototype.hasOwnProperty,te=(n,t)=>fd.call(n,t),Bt=Array.isArray,or=n=>co(n)==="[object Map]",lf=n=>co(n)==="[object Set]",Wt=n=>typeof n=="function",ve=n=>typeof n=="string",ui=n=>typeof n=="symbol",he=n=>n!==null&&typeof n=="object",cf=n=>(he(n)||Wt(n))&&Wt(n.then)&&Wt(n.catch),uf=Object.prototype.toString,co=n=>uf.call(n),hd=n=>co(n).slice(8,-1),ff=n=>co(n)==="[object Object]",Ul=n=>ve(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ir=Ll(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),uo=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},dd=/-(\w)/g,oi=uo(n=>n.replace(dd,(t,e)=>e?e.toUpperCase():"")),pd=/\B([A-Z])/g,Oi=uo(n=>n.replace(pd,"-$1").toLowerCase()),hf=uo(n=>n.charAt(0).toUpperCase()+n.slice(1)),To=uo(n=>n?`on${hf(n)}`:""),ii=(n,t)=>!Object.is(n,t),bo=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Sa=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},md=n=>{const t=parseFloat(n);return isNaN(t)?n:t},gd=n=>{const t=ve(n)?Number(n):NaN;return isNaN(t)?n:t};let Mc;const fo=()=>Mc||(Mc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Nl(n){if(Bt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],r=ve(i)?Sd(i):Nl(i);if(r)for(const s in r)t[s]=r[s]}return t}else if(ve(n)||he(n))return n}const _d=/;(?![^(]*\))/g,vd=/:([^]+)/,xd=/\/\*[^]*?\*\//g;function Sd(n){const t={};return n.replace(xd,"").split(_d).forEach(e=>{if(e){const i=e.split(vd);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Fl(n){let t="";if(ve(n))t=n;else if(Bt(n))for(let e=0;e<n.length;e++){const i=Fl(n[e]);i&&(t+=i+" ")}else if(he(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Md="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yd=Ll(Md);function df(n){return!!n||n===""}const pf=n=>!!(n&&n.__v_isRef===!0),Ma=n=>ve(n)?n:n==null?"":Bt(n)||he(n)&&(n.toString===uf||!Wt(n.toString))?pf(n)?Ma(n.value):JSON.stringify(n,mf,2):String(n),mf=(n,t)=>pf(t)?mf(n,t.value):or(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,r],s)=>(e[Ao(i,s)+" =>"]=r,e),{})}:lf(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Ao(e))}:ui(t)?Ao(t):he(t)&&!Bt(t)&&!ff(t)?String(t):t,Ao=(n,t="")=>{var e;return ui(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ve;class Ed{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ve,!t&&Ve&&(this.index=(Ve.scopes||(Ve.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Ve;try{return Ve=this,t()}finally{Ve=e}}}on(){++this._on===1&&(this.prevScope=Ve,Ve=this)}off(){this._on>0&&--this._on===0&&(Ve=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Td(){return Ve}let oe;const wo=new WeakSet;class gf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ve&&Ve.active&&Ve.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wo.has(this)&&(wo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||vf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,yc(this),xf(this);const t=oe,e=hn;oe=this,hn=!0;try{return this.fn()}finally{Sf(this),oe=t,hn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)zl(t);this.deps=this.depsTail=void 0,yc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ya(this)&&this.run()}get dirty(){return ya(this)}}let _f=0,Ur,Nr;function vf(n,t=!1){if(n.flags|=8,t){n.next=Nr,Nr=n;return}n.next=Ur,Ur=n}function Ol(){_f++}function Bl(){if(--_f>0)return;if(Nr){let t=Nr;for(Nr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Ur;){let t=Ur;for(Ur=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function xf(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Sf(n){let t,e=n.depsTail,i=e;for(;i;){const r=i.prevDep;i.version===-1?(i===e&&(e=r),zl(i),bd(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=t,n.depsTail=e}function ya(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Mf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Mf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===kr)||(n.globalVersion=kr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ya(n))))return;n.flags|=2;const t=n.dep,e=oe,i=hn;oe=n,hn=!0;try{xf(n);const r=n.fn(n._value);(t.version===0||ii(r,n._value))&&(n.flags|=128,n._value=r,t.version++)}catch(r){throw t.version++,r}finally{oe=e,hn=i,Sf(n),n.flags&=-3}}function zl(n,t=!1){const{dep:e,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)zl(s,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function bd(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let hn=!0;const yf=[];function Gn(){yf.push(hn),hn=!1}function kn(){const n=yf.pop();hn=n===void 0?!0:n}function yc(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=oe;oe=void 0;try{t()}finally{oe=e}}}let kr=0;class Ad{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Hl{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!oe||!hn||oe===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==oe)e=this.activeLink=new Ad(oe,this),oe.deps?(e.prevDep=oe.depsTail,oe.depsTail.nextDep=e,oe.depsTail=e):oe.deps=oe.depsTail=e,Ef(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=oe.depsTail,e.nextDep=void 0,oe.depsTail.nextDep=e,oe.depsTail=e,oe.deps===e&&(oe.deps=i)}return e}trigger(t){this.version++,kr++,this.notify(t)}notify(t){Ol();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Bl()}}}function Ef(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Ef(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Ea=new WeakMap,Di=Symbol(""),Ta=Symbol(""),Wr=Symbol("");function Ae(n,t,e){if(hn&&oe){let i=Ea.get(n);i||Ea.set(n,i=new Map);let r=i.get(e);r||(i.set(e,r=new Hl),r.map=i,r.key=e),r.track()}}function On(n,t,e,i,r,s){const o=Ea.get(n);if(!o){kr++;return}const a=l=>{l&&l.trigger()};if(Ol(),t==="clear")o.forEach(a);else{const l=Bt(n),c=l&&Ul(e);if(l&&e==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===Wr||!ui(h)&&h>=u)&&a(f)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(Wr)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Di)),or(n)&&a(o.get(Ta)));break;case"delete":l||(a(o.get(Di)),or(n)&&a(o.get(Ta)));break;case"set":or(n)&&a(o.get(Di));break}}Bl()}function zi(n){const t=Qt(n);return t===n?t:(Ae(t,"iterate",Wr),dn(n)?t:t.map(Ne))}function Vl(n){return Ae(n=Qt(n),"iterate",Wr),n}const wd={__proto__:null,[Symbol.iterator](){return Ro(this,Symbol.iterator,Ne)},concat(...n){return zi(this).concat(...n.map(t=>Bt(t)?zi(t):t))},entries(){return Ro(this,"entries",n=>(n[1]=Ne(n[1]),n))},every(n,t){return Rn(this,"every",n,t,void 0,arguments)},filter(n,t){return Rn(this,"filter",n,t,e=>e.map(Ne),arguments)},find(n,t){return Rn(this,"find",n,t,Ne,arguments)},findIndex(n,t){return Rn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Rn(this,"findLast",n,t,Ne,arguments)},findLastIndex(n,t){return Rn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Rn(this,"forEach",n,t,void 0,arguments)},includes(...n){return Co(this,"includes",n)},indexOf(...n){return Co(this,"indexOf",n)},join(n){return zi(this).join(n)},lastIndexOf(...n){return Co(this,"lastIndexOf",n)},map(n,t){return Rn(this,"map",n,t,void 0,arguments)},pop(){return Er(this,"pop")},push(...n){return Er(this,"push",n)},reduce(n,...t){return Ec(this,"reduce",n,t)},reduceRight(n,...t){return Ec(this,"reduceRight",n,t)},shift(){return Er(this,"shift")},some(n,t){return Rn(this,"some",n,t,void 0,arguments)},splice(...n){return Er(this,"splice",n)},toReversed(){return zi(this).toReversed()},toSorted(n){return zi(this).toSorted(n)},toSpliced(...n){return zi(this).toSpliced(...n)},unshift(...n){return Er(this,"unshift",n)},values(){return Ro(this,"values",Ne)}};function Ro(n,t,e){const i=Vl(n),r=i[t]();return i!==n&&!dn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=e(s.value)),s}),r}const Rd=Array.prototype;function Rn(n,t,e,i,r,s){const o=Vl(n),a=o!==n&&!dn(n),l=o[t];if(l!==Rd[t]){const f=l.apply(n,s);return a?Ne(f):f}let c=e;o!==n&&(a?c=function(f,h){return e.call(this,Ne(f),h,n)}:e.length>2&&(c=function(f,h){return e.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Ec(n,t,e,i){const r=Vl(n);let s=e;return r!==n&&(dn(n)?e.length>3&&(s=function(o,a,l){return e.call(this,o,a,l,n)}):s=function(o,a,l){return e.call(this,o,Ne(a),l,n)}),r[t](s,...i)}function Co(n,t,e){const i=Qt(n);Ae(i,"iterate",Wr);const r=i[t](...e);return(r===-1||r===!1)&&Xl(e[0])?(e[0]=Qt(e[0]),i[t](...e)):r}function Er(n,t,e=[]){Gn(),Ol();const i=Qt(n)[t].apply(n,e);return Bl(),kn(),i}const Cd=Ll("__proto__,__v_isRef,__isVue"),Tf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ui));function Pd(n){ui(n)||(n=String(n));const t=Qt(this);return Ae(t,"has",n),t.hasOwnProperty(n)}class bf{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const r=this._isReadonly,s=this._isShallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return s;if(e==="__v_raw")return i===(r?s?Hd:Cf:s?Rf:wf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Bt(t);if(!r){let l;if(o&&(l=wd[e]))return l;if(e==="hasOwnProperty")return Pd}const a=Reflect.get(t,e,Ce(t)?t:i);return(ui(e)?Tf.has(e):Cd(e))||(r||Ae(t,"get",e),s)?a:Ce(a)?o&&Ul(e)?a:a.value:he(a)?r?Pf(a):kl(a):a}}class Af extends bf{constructor(t=!1){super(!1,t)}set(t,e,i,r){let s=t[e];if(!this._isShallow){const l=Ii(s);if(!dn(i)&&!Ii(i)&&(s=Qt(s),i=Qt(i)),!Bt(t)&&Ce(s)&&!Ce(i))return l?!1:(s.value=i,!0)}const o=Bt(t)&&Ul(e)?Number(e)<t.length:te(t,e),a=Reflect.set(t,e,i,Ce(t)?t:r);return t===Qt(r)&&(o?ii(i,s)&&On(t,"set",e,i):On(t,"add",e,i)),a}deleteProperty(t,e){const i=te(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&i&&On(t,"delete",e,void 0),r}has(t,e){const i=Reflect.has(t,e);return(!ui(e)||!Tf.has(e))&&Ae(t,"has",e),i}ownKeys(t){return Ae(t,"iterate",Bt(t)?"length":Di),Reflect.ownKeys(t)}}class Ld extends bf{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Dd=new Af,Id=new Ld,Ud=new Af(!0);const ba=n=>n,ds=n=>Reflect.getPrototypeOf(n);function Nd(n,t,e){return function(...i){const r=this.__v_raw,s=Qt(r),o=or(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=e?ba:t?Aa:Ne;return!t&&Ae(s,"iterate",l?Ta:Di),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function ps(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Fd(n,t){const e={get(r){const s=this.__v_raw,o=Qt(s),a=Qt(r);n||(ii(r,a)&&Ae(o,"get",r),Ae(o,"get",a));const{has:l}=ds(o),c=t?ba:n?Aa:Ne;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Ae(Qt(r),"iterate",Di),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=Qt(s),a=Qt(r);return n||(ii(r,a)&&Ae(o,"has",r),Ae(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Qt(a),c=t?ba:n?Aa:Ne;return!n&&Ae(l,"iterate",Di),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Ee(e,n?{add:ps("add"),set:ps("set"),delete:ps("delete"),clear:ps("clear")}:{add(r){!t&&!dn(r)&&!Ii(r)&&(r=Qt(r));const s=Qt(this);return ds(s).has.call(s,r)||(s.add(r),On(s,"add",r,r)),this},set(r,s){!t&&!dn(s)&&!Ii(s)&&(s=Qt(s));const o=Qt(this),{has:a,get:l}=ds(o);let c=a.call(o,r);c||(r=Qt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?ii(s,u)&&On(o,"set",r,s):On(o,"add",r,s),this},delete(r){const s=Qt(this),{has:o,get:a}=ds(s);let l=o.call(s,r);l||(r=Qt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&On(s,"delete",r,void 0),c},clear(){const r=Qt(this),s=r.size!==0,o=r.clear();return s&&On(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=Nd(r,n,t)}),e}function Gl(n,t){const e=Fd(n,t);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(te(e,r)&&r in i?e:i,r,s)}const Od={get:Gl(!1,!1)},Bd={get:Gl(!1,!0)},zd={get:Gl(!0,!1)};const wf=new WeakMap,Rf=new WeakMap,Cf=new WeakMap,Hd=new WeakMap;function Vd(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gd(n){return n.__v_skip||!Object.isExtensible(n)?0:Vd(hd(n))}function kl(n){return Ii(n)?n:Wl(n,!1,Dd,Od,wf)}function kd(n){return Wl(n,!1,Ud,Bd,Rf)}function Pf(n){return Wl(n,!0,Id,zd,Cf)}function Wl(n,t,e,i,r){if(!he(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const s=Gd(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:e);return r.set(n,a),a}function Fr(n){return Ii(n)?Fr(n.__v_raw):!!(n&&n.__v_isReactive)}function Ii(n){return!!(n&&n.__v_isReadonly)}function dn(n){return!!(n&&n.__v_isShallow)}function Xl(n){return n?!!n.__v_raw:!1}function Qt(n){const t=n&&n.__v_raw;return t?Qt(t):n}function Wd(n){return!te(n,"__v_skip")&&Object.isExtensible(n)&&Sa(n,"__v_skip",!0),n}const Ne=n=>he(n)?kl(n):n,Aa=n=>he(n)?Pf(n):n;function Ce(n){return n?n.__v_isRef===!0:!1}function Po(n){return Xd(n,!1)}function Xd(n,t){return Ce(n)?n:new qd(n,t)}class qd{constructor(t,e){this.dep=new Hl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:Qt(t),this._value=e?t:Ne(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||dn(t)||Ii(t);t=i?t:Qt(t),ii(t,e)&&(this._rawValue=t,this._value=i?t:Ne(t),this.dep.trigger())}}function Lf(n){return Ce(n)?n.value:n}const Yd={get:(n,t,e)=>t==="__v_raw"?n:Lf(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const r=n[t];return Ce(r)&&!Ce(e)?(r.value=e,!0):Reflect.set(n,t,e,i)}};function Df(n){return Fr(n)?n:new Proxy(n,Yd)}class $d{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Hl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=kr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&oe!==this)return vf(this,!0),!0}get value(){const t=this.dep.track();return Mf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Kd(n,t,e=!1){let i,r;return Wt(n)?i=n:(i=n.get,r=n.set),new $d(i,r,e)}const ms={},Qs=new WeakMap;let Ei;function Jd(n,t=!1,e=Ei){if(e){let i=Qs.get(e);i||Qs.set(e,i=[]),i.push(n)}}function Zd(n,t,e=ae){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=e,c=x=>r?x:dn(x)||r===!1||r===0?ei(x,1):ei(x);let u,f,h,d,_=!1,S=!1;if(Ce(n)?(f=()=>n.value,_=dn(n)):Fr(n)?(f=()=>c(n),_=!0):Bt(n)?(S=!0,_=n.some(x=>Fr(x)||dn(x)),f=()=>n.map(x=>{if(Ce(x))return x.value;if(Fr(x))return c(x);if(Wt(x))return l?l(x,2):x()})):Wt(n)?t?f=l?()=>l(n,2):n:f=()=>{if(h){Gn();try{h()}finally{kn()}}const x=Ei;Ei=u;try{return l?l(n,3,[d]):n(d)}finally{Ei=x}}:f=yn,t&&r){const x=f,I=r===!0?1/0:r;f=()=>ei(x(),I)}const m=Td(),p=()=>{u.stop(),m&&m.active&&Il(m.effects,u)};if(s&&t){const x=t;t=(...I)=>{x(...I),p()}}let A=S?new Array(n.length).fill(ms):ms;const b=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(t){const I=u.run();if(r||_||(S?I.some((L,P)=>ii(L,A[P])):ii(I,A))){h&&h();const L=Ei;Ei=u;try{const P=[I,A===ms?void 0:S&&A[0]===ms?[]:A,d];A=I,l?l(t,3,P):t(...P)}finally{Ei=L}}}else u.run()};return a&&a(b),u=new gf(f),u.scheduler=o?()=>o(b,!1):b,d=x=>Jd(x,!1,u),h=u.onStop=()=>{const x=Qs.get(u);if(x){if(l)l(x,4);else for(const I of x)I();Qs.delete(u)}},t?i?b(!0):A=u.run():o?o(b.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function ei(n,t=1/0,e){if(t<=0||!he(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,Ce(n))ei(n.value,t,e);else if(Bt(n))for(let i=0;i<n.length;i++)ei(n[i],t,e);else if(lf(n)||or(n))n.forEach(i=>{ei(i,t,e)});else if(ff(n)){for(const i in n)ei(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ei(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ss(n,t,e,i){try{return i?n(...i):n()}catch(r){ho(r,t,e)}}function mn(n,t,e,i){if(Wt(n)){const r=ss(n,t,e,i);return r&&cf(r)&&r.catch(s=>{ho(s,t,e)}),r}if(Bt(n)){const r=[];for(let s=0;s<n.length;s++)r.push(mn(n[s],t,e,i));return r}}function ho(n,t,e,i=!0){const r=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ae;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){Gn(),ss(s,null,10,[n,l,c]),kn();return}}jd(n,e,r,i,o)}function jd(n,t,e,i=!0,r=!1){if(r)throw n;console.error(n)}const Fe=[];let _n=-1;const ar=[];let jn=null,er=0;const If=Promise.resolve();let to=null;function wa(n){const t=to||If;return n?t.then(this?n.bind(this):n):t}function Qd(n){let t=_n+1,e=Fe.length;for(;t<e;){const i=t+e>>>1,r=Fe[i],s=Xr(r);s<n||s===n&&r.flags&2?t=i+1:e=i}return t}function ql(n){if(!(n.flags&1)){const t=Xr(n),e=Fe[Fe.length-1];!e||!(n.flags&2)&&t>=Xr(e)?Fe.push(n):Fe.splice(Qd(t),0,n),n.flags|=1,Uf()}}function Uf(){to||(to=If.then(Ff))}function tp(n){Bt(n)?ar.push(...n):jn&&n.id===-1?jn.splice(er+1,0,n):n.flags&1||(ar.push(n),n.flags|=1),Uf()}function Tc(n,t,e=_n+1){for(;e<Fe.length;e++){const i=Fe[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Fe.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Nf(n){if(ar.length){const t=[...new Set(ar)].sort((e,i)=>Xr(e)-Xr(i));if(ar.length=0,jn){jn.push(...t);return}for(jn=t,er=0;er<jn.length;er++){const e=jn[er];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}jn=null,er=0}}const Xr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Ff(n){try{for(_n=0;_n<Fe.length;_n++){const t=Fe[_n];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ss(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;_n<Fe.length;_n++){const t=Fe[_n];t&&(t.flags&=-2)}_n=-1,Fe.length=0,Nf(),to=null,(Fe.length||ar.length)&&Ff()}}let un=null,Of=null;function eo(n){const t=un;return un=n,Of=n&&n.type.__scopeId||null,t}function Ra(n,t=un,e){if(!t||n._n)return n;const i=(...r)=>{i._d&&Uc(-1);const s=eo(t);let o;try{o=n(...r)}finally{eo(s),i._d&&Uc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function di(n,t,e,i){const r=n.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Gn(),mn(l,e,8,[n.el,a,n,t]),kn())}}const ep=Symbol("_vte"),Bf=n=>n.__isTeleport,Qn=Symbol("_leaveCb"),gs=Symbol("_enterCb");function np(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Yl(()=>{n.isMounted=!0}),Yf(()=>{n.isUnmounting=!0}),n}const je=[Function,Array],zf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:je,onEnter:je,onAfterEnter:je,onEnterCancelled:je,onBeforeLeave:je,onLeave:je,onAfterLeave:je,onLeaveCancelled:je,onBeforeAppear:je,onAppear:je,onAfterAppear:je,onAppearCancelled:je},Hf=n=>{const t=n.subTree;return t.component?Hf(t.component):t},ip={name:"BaseTransition",props:zf,setup(n,{slots:t}){const e=tm(),i=np();return()=>{const r=t.default&&kf(t.default(),!0);if(!r||!r.length)return;const s=Vf(r),o=Qt(n),{mode:a}=o;if(i.isLeaving)return Lo(s);const l=bc(s);if(!l)return Lo(s);let c=Ca(l,o,i,e,f=>c=f);l.type!==Oe&&qr(l,c);let u=e.subTree&&bc(e.subTree);if(u&&u.type!==Oe&&!wi(l,u)&&Hf(e).type!==Oe){let f=Ca(u,o,i,e);if(qr(u,f),a==="out-in"&&l.type!==Oe)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,e.job.flags&8||e.update(),delete f.afterLeave,u=void 0},Lo(s);a==="in-out"&&l.type!==Oe?f.delayLeave=(h,d,_)=>{const S=Gf(i,u);S[String(u.key)]=u,h[Qn]=()=>{d(),h[Qn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{_(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function Vf(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==Oe){t=e;break}}return t}const rp=ip;function Gf(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function Ca(n,t,e,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:d,onAfterLeave:_,onLeaveCancelled:S,onBeforeAppear:m,onAppear:p,onAfterAppear:A,onAppearCancelled:b}=t,x=String(n.key),I=Gf(e,n),L=(T,y)=>{T&&mn(T,i,9,y)},P=(T,y)=>{const C=y[1];L(T,y),Bt(T)?T.every(G=>G.length<=1)&&C():T.length<=1&&C()},O={mode:o,persisted:a,beforeEnter(T){let y=l;if(!e.isMounted)if(s)y=m||l;else return;T[Qn]&&T[Qn](!0);const C=I[x];C&&wi(n,C)&&C.el[Qn]&&C.el[Qn](),L(y,[T])},enter(T){let y=c,C=u,G=f;if(!e.isMounted)if(s)y=p||c,C=A||u,G=b||f;else return;let Y=!1;const nt=T[gs]=it=>{Y||(Y=!0,it?L(G,[T]):L(C,[T]),O.delayedLeave&&O.delayedLeave(),T[gs]=void 0)};y?P(y,[T,nt]):nt()},leave(T,y){const C=String(n.key);if(T[gs]&&T[gs](!0),e.isUnmounting)return y();L(h,[T]);let G=!1;const Y=T[Qn]=nt=>{G||(G=!0,y(),nt?L(S,[T]):L(_,[T]),T[Qn]=void 0,I[C]===n&&delete I[C])};I[C]=n,d?P(d,[T,Y]):Y()},clone(T){const y=Ca(T,t,e,i,r);return r&&r(y),y}};return O}function Lo(n){if(po(n))return n=ai(n),n.children=null,n}function bc(n){if(!po(n))return Bf(n.type)&&n.children?Vf(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Wt(e.default))return e.default()}}function qr(n,t){n.shapeFlag&6&&n.component?(n.transition=t,qr(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function kf(n,t=!1,e){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=e==null?o.key:String(e)+String(o.key!=null?o.key:s);o.type===ln?(o.patchFlag&128&&r++,i=i.concat(kf(o.children,t,a))):(t||o.type!==Oe)&&i.push(a!=null?ai(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Wf(n,t){return Wt(n)?Ee({name:n.name},t,{setup:n}):n}function Xf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Or(n,t,e,i,r=!1){if(Bt(n)){n.forEach((_,S)=>Or(_,t&&(Bt(t)?t[S]:t),e,i,r));return}if(Br(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Or(n,t,e,i.component.subTree);return}const s=i.shapeFlag&4?Zl(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=t&&t.r,u=a.refs===ae?a.refs={}:a.refs,f=a.setupState,h=Qt(f),d=f===ae?()=>!1:_=>te(h,_);if(c!=null&&c!==l&&(ve(c)?(u[c]=null,d(c)&&(f[c]=null)):Ce(c)&&(c.value=null)),Wt(l))ss(l,a,12,[o,u]);else{const _=ve(l),S=Ce(l);if(_||S){const m=()=>{if(n.f){const p=_?d(l)?f[l]:u[l]:l.value;r?Bt(p)&&Il(p,s):Bt(p)?p.includes(s)||p.push(s):_?(u[l]=[s],d(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else _?(u[l]=o,d(l)&&(f[l]=o)):S&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,Ye(m,e)):m()}}}fo().requestIdleCallback;fo().cancelIdleCallback;const Br=n=>!!n.type.__asyncLoader,po=n=>n.type.__isKeepAlive;function sp(n,t){qf(n,"a",t)}function op(n,t){qf(n,"da",t)}function qf(n,t,e=we){const i=n.__wdc||(n.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(mo(t,i,e),e){let r=e.parent;for(;r&&r.parent;)po(r.parent.vnode)&&ap(i,t,e,r),r=r.parent}}function ap(n,t,e,i){const r=mo(t,n,i,!0);$f(()=>{Il(i[t],r)},e)}function mo(n,t,e=we,i=!1){if(e){const r=e[n]||(e[n]=[]),s=t.__weh||(t.__weh=(...o)=>{Gn();const a=os(e),l=mn(t,e,n,o);return a(),kn(),l});return i?r.unshift(s):r.push(s),s}}const Wn=n=>(t,e=we)=>{(!$r||n==="sp")&&mo(n,(...i)=>t(...i),e)},lp=Wn("bm"),Yl=Wn("m"),cp=Wn("bu"),up=Wn("u"),Yf=Wn("bum"),$f=Wn("um"),fp=Wn("sp"),hp=Wn("rtg"),dp=Wn("rtc");function pp(n,t=we){mo("ec",n,t)}const mp=Symbol.for("v-ndc"),Pa=n=>n?ph(n)?Zl(n):Pa(n.parent):null,zr=Ee(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Pa(n.parent),$root:n=>Pa(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Jf(n),$forceUpdate:n=>n.f||(n.f=()=>{ql(n.update)}),$nextTick:n=>n.n||(n.n=wa.bind(n.proxy)),$watch:n=>Op.bind(n)}),Do=(n,t)=>n!==ae&&!n.__isScriptSetup&&te(n,t),gp={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(t[0]!=="$"){const d=o[t];if(d!==void 0)switch(d){case 1:return i[t];case 2:return r[t];case 4:return e[t];case 3:return s[t]}else{if(Do(i,t))return o[t]=1,i[t];if(r!==ae&&te(r,t))return o[t]=2,r[t];if((c=n.propsOptions[0])&&te(c,t))return o[t]=3,s[t];if(e!==ae&&te(e,t))return o[t]=4,e[t];La&&(o[t]=0)}}const u=zr[t];let f,h;if(u)return t==="$attrs"&&Ae(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[t]))return f;if(e!==ae&&te(e,t))return o[t]=4,e[t];if(h=l.config.globalProperties,te(h,t))return h[t]},set({_:n},t,e){const{data:i,setupState:r,ctx:s}=n;return Do(r,t)?(r[t]=e,!0):i!==ae&&te(i,t)?(i[t]=e,!0):te(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(s[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!e[o]||n!==ae&&te(n,o)||Do(t,o)||(a=s[0])&&te(a,o)||te(i,o)||te(zr,o)||te(r.config.globalProperties,o)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:te(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Ac(n){return Bt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let La=!0;function _p(n){const t=Jf(n),e=n.proxy,i=n.ctx;La=!1,t.beforeCreate&&wc(t.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:_,activated:S,deactivated:m,beforeDestroy:p,beforeUnmount:A,destroyed:b,unmounted:x,render:I,renderTracked:L,renderTriggered:P,errorCaptured:O,serverPrefetch:T,expose:y,inheritAttrs:C,components:G,directives:Y,filters:nt}=t;if(c&&vp(c,i,null),o)for(const et in o){const $=o[et];Wt($)&&(i[et]=$.bind(e))}if(r){const et=r.call(e,e);he(et)&&(n.data=kl(et))}if(La=!0,s)for(const et in s){const $=s[et],ht=Wt($)?$.bind(e,e):Wt($.get)?$.get.bind(e,e):yn,vt=!Wt($)&&Wt($.set)?$.set.bind(e):yn,Et=om({get:ht,set:vt});Object.defineProperty(i,et,{enumerable:!0,configurable:!0,get:()=>Et.value,set:Nt=>Et.value=Nt})}if(a)for(const et in a)Kf(a[et],i,e,et);if(l){const et=Wt(l)?l.call(e):l;Reflect.ownKeys(et).forEach($=>{Tp($,et[$])})}u&&wc(u,n,"c");function Q(et,$){Bt($)?$.forEach(ht=>et(ht.bind(e))):$&&et($.bind(e))}if(Q(lp,f),Q(Yl,h),Q(cp,d),Q(up,_),Q(sp,S),Q(op,m),Q(pp,O),Q(dp,L),Q(hp,P),Q(Yf,A),Q($f,x),Q(fp,T),Bt(y))if(y.length){const et=n.exposed||(n.exposed={});y.forEach($=>{Object.defineProperty(et,$,{get:()=>e[$],set:ht=>e[$]=ht})})}else n.exposed||(n.exposed={});I&&n.render===yn&&(n.render=I),C!=null&&(n.inheritAttrs=C),G&&(n.components=G),Y&&(n.directives=Y),T&&Xf(n)}function vp(n,t,e=yn){Bt(n)&&(n=Da(n));for(const i in n){const r=n[i];let s;he(r)?"default"in r?s=ks(r.from||i,r.default,!0):s=ks(r.from||i):s=ks(r),Ce(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[i]=s}}function wc(n,t,e){mn(Bt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Kf(n,t,e,i){let r=i.includes(".")?ch(e,i):()=>e[i];if(ve(n)){const s=t[n];Wt(s)&&Uo(r,s)}else if(Wt(n))Uo(r,n.bind(e));else if(he(n))if(Bt(n))n.forEach(s=>Kf(s,t,e,i));else{const s=Wt(n.handler)?n.handler.bind(e):t[n.handler];Wt(s)&&Uo(r,s,n)}}function Jf(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!e&&!i?l=t:(l={},r.length&&r.forEach(c=>no(l,c,o,!0)),no(l,t,o)),he(t)&&s.set(t,l),l}function no(n,t,e,i=!1){const{mixins:r,extends:s}=t;s&&no(n,s,e,!0),r&&r.forEach(o=>no(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=xp[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const xp={data:Rc,props:Cc,emits:Cc,methods:Pr,computed:Pr,beforeCreate:De,created:De,beforeMount:De,mounted:De,beforeUpdate:De,updated:De,beforeDestroy:De,beforeUnmount:De,destroyed:De,unmounted:De,activated:De,deactivated:De,errorCaptured:De,serverPrefetch:De,components:Pr,directives:Pr,watch:Mp,provide:Rc,inject:Sp};function Rc(n,t){return t?n?function(){return Ee(Wt(n)?n.call(this,this):n,Wt(t)?t.call(this,this):t)}:t:n}function Sp(n,t){return Pr(Da(n),Da(t))}function Da(n){if(Bt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function De(n,t){return n?[...new Set([].concat(n,t))]:t}function Pr(n,t){return n?Ee(Object.create(null),n,t):t}function Cc(n,t){return n?Bt(n)&&Bt(t)?[...new Set([...n,...t])]:Ee(Object.create(null),Ac(n),Ac(t??{})):t}function Mp(n,t){if(!n)return t;if(!t)return n;const e=Ee(Object.create(null),n);for(const i in t)e[i]=De(n[i],t[i]);return e}function Zf(){return{app:null,config:{isNativeTag:ud,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yp=0;function Ep(n,t){return function(i,r=null){Wt(i)||(i=Ee({},i)),r!=null&&!he(r)&&(r=null);const s=Zf(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:yp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:lm,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Wt(u.install)?(o.add(u),u.install(c,...f)):Wt(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Re(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,Zl(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(mn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=lr;lr=c;try{return u()}finally{lr=f}}};return c}}let lr=null;function Tp(n,t){if(we){let e=we.provides;const i=we.parent&&we.parent.provides;i===e&&(e=we.provides=Object.create(i)),e[n]=t}}function ks(n,t,e=!1){const i=we||un;if(i||lr){let r=lr?lr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return e&&Wt(t)?t.call(i&&i.proxy):t}}const jf={},Qf=()=>Object.create(jf),th=n=>Object.getPrototypeOf(n)===jf;function bp(n,t,e,i=!1){const r={},s=Qf();n.propsDefaults=Object.create(null),eh(n,t,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);e?n.props=i?r:kd(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Ap(n,t,e,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Qt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(go(n.emitsOptions,h))continue;const d=t[h];if(l)if(te(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const _=oi(h);r[_]=Ia(l,a,_,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{eh(n,t,r,s)&&(c=!0);let u;for(const f in a)(!t||!te(t,f)&&((u=Oi(f))===f||!te(t,u)))&&(l?e&&(e[f]!==void 0||e[u]!==void 0)&&(r[f]=Ia(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!t||!te(t,f))&&(delete s[f],c=!0)}c&&On(n.attrs,"set","")}function eh(n,t,e,i){const[r,s]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Ir(l))continue;const c=t[l];let u;r&&te(r,u=oi(l))?!s||!s.includes(u)?e[u]=c:(a||(a={}))[u]=c:go(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Qt(e),c=a||ae;for(let u=0;u<s.length;u++){const f=s[u];e[f]=Ia(r,l,f,c[f],n,!te(c,f))}}return o}function Ia(n,t,e,i,r,s){const o=n[e];if(o!=null){const a=te(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Wt(l)){const{propsDefaults:c}=r;if(e in c)i=c[e];else{const u=os(r);i=c[e]=l.call(null,t),u()}}else i=l;r.ce&&r.ce._setProp(e,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Oi(e))&&(i=!0))}return i}const wp=new WeakMap;function nh(n,t,e=!1){const i=e?wp:t.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Wt(n)){const u=f=>{l=!0;const[h,d]=nh(f,t,!0);Ee(o,h),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return he(n)&&i.set(n,sr),sr;if(Bt(s))for(let u=0;u<s.length;u++){const f=oi(s[u]);Pc(f)&&(o[f]=ae)}else if(s)for(const u in s){const f=oi(u);if(Pc(f)){const h=s[u],d=o[f]=Bt(h)||Wt(h)?{type:h}:Ee({},h),_=d.type;let S=!1,m=!0;if(Bt(_))for(let p=0;p<_.length;++p){const A=_[p],b=Wt(A)&&A.name;if(b==="Boolean"){S=!0;break}else b==="String"&&(m=!1)}else S=Wt(_)&&_.name==="Boolean";d[0]=S,d[1]=m,(S||te(d,"default"))&&a.push(f)}}const c=[o,a];return he(n)&&i.set(n,c),c}function Pc(n){return n[0]!=="$"&&!Ir(n)}const $l=n=>n[0]==="_"||n==="$stable",Kl=n=>Bt(n)?n.map(vn):[vn(n)],Rp=(n,t,e)=>{if(t._n)return t;const i=Ra((...r)=>Kl(t(...r)),e);return i._c=!1,i},ih=(n,t,e)=>{const i=n._ctx;for(const r in n){if($l(r))continue;const s=n[r];if(Wt(s))t[r]=Rp(r,s,i);else if(s!=null){const o=Kl(s);t[r]=()=>o}}},rh=(n,t)=>{const e=Kl(t);n.slots.default=()=>e},sh=(n,t,e)=>{for(const i in t)(e||!$l(i))&&(n[i]=t[i])},Cp=(n,t,e)=>{const i=n.slots=Qf();if(n.vnode.shapeFlag&32){const r=t.__;r&&Sa(i,"__",r,!0);const s=t._;s?(sh(i,t,e),e&&Sa(i,"_",s,!0)):ih(t,i)}else t&&rh(n,t)},Pp=(n,t,e)=>{const{vnode:i,slots:r}=n;let s=!0,o=ae;if(i.shapeFlag&32){const a=t._;a?e&&a===1?s=!1:sh(r,t,e):(s=!t.$stable,ih(t,r)),o=t}else t&&(rh(n,t),o={default:1});if(s)for(const a in r)!$l(a)&&o[a]==null&&delete r[a]},Ye=Wp;function Lp(n){return Dp(n)}function Dp(n,t){const e=fo();e.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=yn,insertStaticContent:_}=n,S=(w,R,v,z=null,U=null,B=null,F=void 0,J=null,k=!!R.dynamicChildren)=>{if(w===R)return;w&&!wi(w,R)&&(z=mt(w),Nt(w,U,B,!0),w=null),R.patchFlag===-2&&(k=!1,R.dynamicChildren=null);const{type:q,ref:at,shapeFlag:M}=R;switch(q){case _o:m(w,R,v,z);break;case Oe:p(w,R,v,z);break;case Ws:w==null&&A(R,v,z,F);break;case ln:G(w,R,v,z,U,B,F,J,k);break;default:M&1?I(w,R,v,z,U,B,F,J,k):M&6?Y(w,R,v,z,U,B,F,J,k):(M&64||M&128)&&q.process(w,R,v,z,U,B,F,J,k,Ut)}at!=null&&U?Or(at,w&&w.ref,B,R||w,!R):at==null&&w&&w.ref!=null&&Or(w.ref,null,B,w,!0)},m=(w,R,v,z)=>{if(w==null)i(R.el=a(R.children),v,z);else{const U=R.el=w.el;R.children!==w.children&&c(U,R.children)}},p=(w,R,v,z)=>{w==null?i(R.el=l(R.children||""),v,z):R.el=w.el},A=(w,R,v,z)=>{[w.el,w.anchor]=_(w.children,R,v,z,w.el,w.anchor)},b=({el:w,anchor:R},v,z)=>{let U;for(;w&&w!==R;)U=h(w),i(w,v,z),w=U;i(R,v,z)},x=({el:w,anchor:R})=>{let v;for(;w&&w!==R;)v=h(w),r(w),w=v;r(R)},I=(w,R,v,z,U,B,F,J,k)=>{R.type==="svg"?F="svg":R.type==="math"&&(F="mathml"),w==null?L(R,v,z,U,B,F,J,k):T(w,R,U,B,F,J,k)},L=(w,R,v,z,U,B,F,J)=>{let k,q;const{props:at,shapeFlag:M,transition:g,dirs:D}=w;if(k=w.el=o(w.type,B,at&&at.is,at),M&8?u(k,w.children):M&16&&O(w.children,k,null,z,U,Io(w,B),F,J),D&&di(w,null,z,"created"),P(k,w,w.scopeId,F,z),at){for(const tt in at)tt!=="value"&&!Ir(tt)&&s(k,tt,null,at[tt],B,z);"value"in at&&s(k,"value",null,at.value,B),(q=at.onVnodeBeforeMount)&&gn(q,z,w)}D&&di(w,null,z,"beforeMount");const X=Ip(U,g);X&&g.beforeEnter(k),i(k,R,v),((q=at&&at.onVnodeMounted)||X||D)&&Ye(()=>{q&&gn(q,z,w),X&&g.enter(k),D&&di(w,null,z,"mounted")},U)},P=(w,R,v,z,U)=>{if(v&&d(w,v),z)for(let B=0;B<z.length;B++)d(w,z[B]);if(U){let B=U.subTree;if(R===B||fh(B.type)&&(B.ssContent===R||B.ssFallback===R)){const F=U.vnode;P(w,F,F.scopeId,F.slotScopeIds,U.parent)}}},O=(w,R,v,z,U,B,F,J,k=0)=>{for(let q=k;q<w.length;q++){const at=w[q]=J?ti(w[q]):vn(w[q]);S(null,at,R,v,z,U,B,F,J)}},T=(w,R,v,z,U,B,F)=>{const J=R.el=w.el;let{patchFlag:k,dynamicChildren:q,dirs:at}=R;k|=w.patchFlag&16;const M=w.props||ae,g=R.props||ae;let D;if(v&&pi(v,!1),(D=g.onVnodeBeforeUpdate)&&gn(D,v,R,w),at&&di(R,w,v,"beforeUpdate"),v&&pi(v,!0),(M.innerHTML&&g.innerHTML==null||M.textContent&&g.textContent==null)&&u(J,""),q?y(w.dynamicChildren,q,J,v,z,Io(R,U),B):F||$(w,R,J,null,v,z,Io(R,U),B,!1),k>0){if(k&16)C(J,M,g,v,U);else if(k&2&&M.class!==g.class&&s(J,"class",null,g.class,U),k&4&&s(J,"style",M.style,g.style,U),k&8){const X=R.dynamicProps;for(let tt=0;tt<X.length;tt++){const K=X[tt],_t=M[K],ct=g[K];(ct!==_t||K==="value")&&s(J,K,_t,ct,U,v)}}k&1&&w.children!==R.children&&u(J,R.children)}else!F&&q==null&&C(J,M,g,v,U);((D=g.onVnodeUpdated)||at)&&Ye(()=>{D&&gn(D,v,R,w),at&&di(R,w,v,"updated")},z)},y=(w,R,v,z,U,B,F)=>{for(let J=0;J<R.length;J++){const k=w[J],q=R[J],at=k.el&&(k.type===ln||!wi(k,q)||k.shapeFlag&198)?f(k.el):v;S(k,q,at,null,z,U,B,F,!0)}},C=(w,R,v,z,U)=>{if(R!==v){if(R!==ae)for(const B in R)!Ir(B)&&!(B in v)&&s(w,B,R[B],null,U,z);for(const B in v){if(Ir(B))continue;const F=v[B],J=R[B];F!==J&&B!=="value"&&s(w,B,J,F,U,z)}"value"in v&&s(w,"value",R.value,v.value,U)}},G=(w,R,v,z,U,B,F,J,k)=>{const q=R.el=w?w.el:a(""),at=R.anchor=w?w.anchor:a("");let{patchFlag:M,dynamicChildren:g,slotScopeIds:D}=R;D&&(J=J?J.concat(D):D),w==null?(i(q,v,z),i(at,v,z),O(R.children||[],v,at,U,B,F,J,k)):M>0&&M&64&&g&&w.dynamicChildren?(y(w.dynamicChildren,g,v,U,B,F,J),(R.key!=null||U&&R===U.subTree)&&oh(w,R,!0)):$(w,R,v,at,U,B,F,J,k)},Y=(w,R,v,z,U,B,F,J,k)=>{R.slotScopeIds=J,w==null?R.shapeFlag&512?U.ctx.activate(R,v,z,F,k):nt(R,v,z,U,B,F,k):it(w,R,k)},nt=(w,R,v,z,U,B,F)=>{const J=w.component=Qp(w,z,U);if(po(w)&&(J.ctx.renderer=Ut),em(J,!1,F),J.asyncDep){if(U&&U.registerDep(J,Q,F),!w.el){const k=J.subTree=Re(Oe);p(null,k,R,v)}}else Q(J,w,R,v,U,B,F)},it=(w,R,v)=>{const z=R.component=w.component;if(Gp(w,R,v))if(z.asyncDep&&!z.asyncResolved){et(z,R,v);return}else z.next=R,z.update();else R.el=w.el,z.vnode=R},Q=(w,R,v,z,U,B,F)=>{const J=()=>{if(w.isMounted){let{next:M,bu:g,u:D,parent:X,vnode:tt}=w;{const Tt=ah(w);if(Tt){M&&(M.el=tt.el,et(w,M,F)),Tt.asyncDep.then(()=>{w.isUnmounted||J()});return}}let K=M,_t;pi(w,!1),M?(M.el=tt.el,et(w,M,F)):M=tt,g&&bo(g),(_t=M.props&&M.props.onVnodeBeforeUpdate)&&gn(_t,X,M,tt),pi(w,!0);const ct=Dc(w),St=w.subTree;w.subTree=ct,S(St,ct,f(St.el),mt(St),w,U,B),M.el=ct.el,K===null&&kp(w,ct.el),D&&Ye(D,U),(_t=M.props&&M.props.onVnodeUpdated)&&Ye(()=>gn(_t,X,M,tt),U)}else{let M;const{el:g,props:D}=R,{bm:X,m:tt,parent:K,root:_t,type:ct}=w,St=Br(R);pi(w,!1),X&&bo(X),!St&&(M=D&&D.onVnodeBeforeMount)&&gn(M,K,R),pi(w,!0);{_t.ce&&_t.ce._def.shadowRoot!==!1&&_t.ce._injectChildStyle(ct);const Tt=w.subTree=Dc(w);S(null,Tt,v,z,w,U,B),R.el=Tt.el}if(tt&&Ye(tt,U),!St&&(M=D&&D.onVnodeMounted)){const Tt=R;Ye(()=>gn(M,K,Tt),U)}(R.shapeFlag&256||K&&Br(K.vnode)&&K.vnode.shapeFlag&256)&&w.a&&Ye(w.a,U),w.isMounted=!0,R=v=z=null}};w.scope.on();const k=w.effect=new gf(J);w.scope.off();const q=w.update=k.run.bind(k),at=w.job=k.runIfDirty.bind(k);at.i=w,at.id=w.uid,k.scheduler=()=>ql(at),pi(w,!0),q()},et=(w,R,v)=>{R.component=w;const z=w.vnode.props;w.vnode=R,w.next=null,Ap(w,R.props,z,v),Pp(w,R.children,v),Gn(),Tc(w),kn()},$=(w,R,v,z,U,B,F,J,k=!1)=>{const q=w&&w.children,at=w?w.shapeFlag:0,M=R.children,{patchFlag:g,shapeFlag:D}=R;if(g>0){if(g&128){vt(q,M,v,z,U,B,F,J,k);return}else if(g&256){ht(q,M,v,z,U,B,F,J,k);return}}D&8?(at&16&&wt(q,U,B),M!==q&&u(v,M)):at&16?D&16?vt(q,M,v,z,U,B,F,J,k):wt(q,U,B,!0):(at&8&&u(v,""),D&16&&O(M,v,z,U,B,F,J,k))},ht=(w,R,v,z,U,B,F,J,k)=>{w=w||sr,R=R||sr;const q=w.length,at=R.length,M=Math.min(q,at);let g;for(g=0;g<M;g++){const D=R[g]=k?ti(R[g]):vn(R[g]);S(w[g],D,v,null,U,B,F,J,k)}q>at?wt(w,U,B,!0,!1,M):O(R,v,z,U,B,F,J,k,M)},vt=(w,R,v,z,U,B,F,J,k)=>{let q=0;const at=R.length;let M=w.length-1,g=at-1;for(;q<=M&&q<=g;){const D=w[q],X=R[q]=k?ti(R[q]):vn(R[q]);if(wi(D,X))S(D,X,v,null,U,B,F,J,k);else break;q++}for(;q<=M&&q<=g;){const D=w[M],X=R[g]=k?ti(R[g]):vn(R[g]);if(wi(D,X))S(D,X,v,null,U,B,F,J,k);else break;M--,g--}if(q>M){if(q<=g){const D=g+1,X=D<at?R[D].el:z;for(;q<=g;)S(null,R[q]=k?ti(R[q]):vn(R[q]),v,X,U,B,F,J,k),q++}}else if(q>g)for(;q<=M;)Nt(w[q],U,B,!0),q++;else{const D=q,X=q,tt=new Map;for(q=X;q<=g;q++){const Ct=R[q]=k?ti(R[q]):vn(R[q]);Ct.key!=null&&tt.set(Ct.key,q)}let K,_t=0;const ct=g-X+1;let St=!1,Tt=0;const ot=new Array(ct);for(q=0;q<ct;q++)ot[q]=0;for(q=D;q<=M;q++){const Ct=w[q];if(_t>=ct){Nt(Ct,U,B,!0);continue}let Lt;if(Ct.key!=null)Lt=tt.get(Ct.key);else for(K=X;K<=g;K++)if(ot[K-X]===0&&wi(Ct,R[K])){Lt=K;break}Lt===void 0?Nt(Ct,U,B,!0):(ot[Lt-X]=q+1,Lt>=Tt?Tt=Lt:St=!0,S(Ct,R[Lt],v,null,U,B,F,J,k),_t++)}const bt=St?Up(ot):sr;for(K=bt.length-1,q=ct-1;q>=0;q--){const Ct=X+q,Lt=R[Ct],pt=Ct+1<at?R[Ct+1].el:z;ot[q]===0?S(null,Lt,v,pt,U,B,F,J,k):St&&(K<0||q!==bt[K]?Et(Lt,v,pt,2):K--)}}},Et=(w,R,v,z,U=null)=>{const{el:B,type:F,transition:J,children:k,shapeFlag:q}=w;if(q&6){Et(w.component.subTree,R,v,z);return}if(q&128){w.suspense.move(R,v,z);return}if(q&64){F.move(w,R,v,Ut);return}if(F===ln){i(B,R,v);for(let M=0;M<k.length;M++)Et(k[M],R,v,z);i(w.anchor,R,v);return}if(F===Ws){b(w,R,v);return}if(z!==2&&q&1&&J)if(z===0)J.beforeEnter(B),i(B,R,v),Ye(()=>J.enter(B),U);else{const{leave:M,delayLeave:g,afterLeave:D}=J,X=()=>{w.ctx.isUnmounted?r(B):i(B,R,v)},tt=()=>{M(B,()=>{X(),D&&D()})};g?g(B,X,tt):tt()}else i(B,R,v)},Nt=(w,R,v,z=!1,U=!1)=>{const{type:B,props:F,ref:J,children:k,dynamicChildren:q,shapeFlag:at,patchFlag:M,dirs:g,cacheIndex:D}=w;if(M===-2&&(U=!1),J!=null&&(Gn(),Or(J,null,v,w,!0),kn()),D!=null&&(R.renderCache[D]=void 0),at&256){R.ctx.deactivate(w);return}const X=at&1&&g,tt=!Br(w);let K;if(tt&&(K=F&&F.onVnodeBeforeUnmount)&&gn(K,R,w),at&6)dt(w.component,v,z);else{if(at&128){w.suspense.unmount(v,z);return}X&&di(w,null,R,"beforeUnmount"),at&64?w.type.remove(w,R,v,Ut,z):q&&!q.hasOnce&&(B!==ln||M>0&&M&64)?wt(q,R,v,!1,!0):(B===ln&&M&384||!U&&at&16)&&wt(k,R,v),z&&Yt(w)}(tt&&(K=F&&F.onVnodeUnmounted)||X)&&Ye(()=>{K&&gn(K,R,w),X&&di(w,null,R,"unmounted")},v)},Yt=w=>{const{type:R,el:v,anchor:z,transition:U}=w;if(R===ln){rt(v,z);return}if(R===Ws){x(w);return}const B=()=>{r(v),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(w.shapeFlag&1&&U&&!U.persisted){const{leave:F,delayLeave:J}=U,k=()=>F(v,B);J?J(w.el,B,k):k()}else B()},rt=(w,R)=>{let v;for(;w!==R;)v=h(w),r(w),w=v;r(R)},dt=(w,R,v)=>{const{bum:z,scope:U,job:B,subTree:F,um:J,m:k,a:q,parent:at,slots:{__:M}}=w;Lc(k),Lc(q),z&&bo(z),at&&Bt(M)&&M.forEach(g=>{at.renderCache[g]=void 0}),U.stop(),B&&(B.flags|=8,Nt(F,w,R,v)),J&&Ye(J,R),Ye(()=>{w.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},wt=(w,R,v,z=!1,U=!1,B=0)=>{for(let F=B;F<w.length;F++)Nt(w[F],R,v,z,U)},mt=w=>{if(w.shapeFlag&6)return mt(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const R=h(w.anchor||w.el),v=R&&R[ep];return v?h(v):R};let Pt=!1;const Vt=(w,R,v)=>{w==null?R._vnode&&Nt(R._vnode,null,null,!0):S(R._vnode||null,w,R,null,null,null,v),R._vnode=w,Pt||(Pt=!0,Tc(),Nf(),Pt=!1)},Ut={p:S,um:Nt,m:Et,r:Yt,mt:nt,mc:O,pc:$,pbc:y,n:mt,o:n};return{render:Vt,hydrate:void 0,createApp:Ep(Vt)}}function Io({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function pi({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Ip(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function oh(n,t,e=!1){const i=n.children,r=t.children;if(Bt(i)&&Bt(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=ti(r[s]),a.el=o.el),!e&&a.patchFlag!==-2&&oh(o,a)),a.type===_o&&(a.el=o.el),a.type===Oe&&!a.el&&(a.el=o.el)}}function Up(n){const t=n.slice(),e=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=e[e.length-1],n[r]<c){t[i]=r,e.push(i);continue}for(s=0,o=e.length-1;s<o;)a=s+o>>1,n[e[a]]<c?s=a+1:o=a;c<n[e[s]]&&(s>0&&(t[i]=e[s-1]),e[s]=i)}}for(s=e.length,o=e[s-1];s-- >0;)e[s]=o,o=t[o];return e}function ah(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ah(t)}function Lc(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const Np=Symbol.for("v-scx"),Fp=()=>ks(Np);function Uo(n,t,e){return lh(n,t,e)}function lh(n,t,e=ae){const{immediate:i,deep:r,flush:s,once:o}=e,a=Ee({},e),l=t&&i||!t&&s!=="post";let c;if($r){if(s==="sync"){const d=Fp();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=yn,d.resume=yn,d.pause=yn,d}}const u=we;a.call=(d,_,S)=>mn(d,u,_,S);let f=!1;s==="post"?a.scheduler=d=>{Ye(d,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,_)=>{_?d():ql(d)}),a.augmentJob=d=>{t&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=Zd(n,t,a);return $r&&(c?c.push(h):l&&h()),h}function Op(n,t,e){const i=this.proxy,r=ve(n)?n.includes(".")?ch(i,n):()=>i[n]:n.bind(i,i);let s;Wt(t)?s=t:(s=t.handler,e=t);const o=os(this),a=lh(r,s.bind(i),e);return o(),a}function ch(n,t){const e=t.split(".");return()=>{let i=n;for(let r=0;r<e.length&&i;r++)i=i[e[r]];return i}}const Bp=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${oi(t)}Modifiers`]||n[`${Oi(t)}Modifiers`];function zp(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||ae;let r=e;const s=t.startsWith("update:"),o=s&&Bp(i,t.slice(7));o&&(o.trim&&(r=e.map(u=>ve(u)?u.trim():u)),o.number&&(r=e.map(md)));let a,l=i[a=To(t)]||i[a=To(oi(t))];!l&&s&&(l=i[a=To(Oi(t))]),l&&mn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,mn(c,n,6,r)}}function uh(n,t,e=!1){const i=t.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Wt(n)){const l=c=>{const u=uh(c,t,!0);u&&(a=!0,Ee(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(he(n)&&i.set(n,null),null):(Bt(s)?s.forEach(l=>o[l]=null):Ee(o,s),he(n)&&i.set(n,o),o)}function go(n,t){return!n||!lo(t)?!1:(t=t.slice(2).replace(/Once$/,""),te(n,t[0].toLowerCase()+t.slice(1))||te(n,Oi(t))||te(n,t))}function Dc(n){const{type:t,vnode:e,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:_,inheritAttrs:S}=n,m=eo(n);let p,A;try{if(e.shapeFlag&4){const x=r||i,I=x;p=vn(c.call(I,x,u,f,d,h,_)),A=a}else{const x=t;p=vn(x.length>1?x(f,{attrs:a,slots:o,emit:l}):x(f,null)),A=t.props?a:Hp(a)}}catch(x){Hr.length=0,ho(x,n,1),p=Re(Oe)}let b=p;if(A&&S!==!1){const x=Object.keys(A),{shapeFlag:I}=b;x.length&&I&7&&(s&&x.some(Dl)&&(A=Vp(A,s)),b=ai(b,A,!1,!0))}return e.dirs&&(b=ai(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(e.dirs):e.dirs),e.transition&&qr(b,e.transition),p=b,eo(m),p}const Hp=n=>{let t;for(const e in n)(e==="class"||e==="style"||lo(e))&&((t||(t={}))[e]=n[e]);return t},Vp=(n,t)=>{const e={};for(const i in n)(!Dl(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Gp(n,t,e){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Ic(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!go(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Ic(i,o,c):!0:!!o;return!1}function Ic(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==n[s]&&!go(e,s))return!0}return!1}function kp({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const fh=n=>n.__isSuspense;function Wp(n,t){t&&t.pendingBranch?Bt(n)?t.effects.push(...n):t.effects.push(n):tp(n)}const ln=Symbol.for("v-fgt"),_o=Symbol.for("v-txt"),Oe=Symbol.for("v-cmt"),Ws=Symbol.for("v-stc"),Hr=[];let $e=null;function Sn(n=!1){Hr.push($e=n?null:[])}function Xp(){Hr.pop(),$e=Hr[Hr.length-1]||null}let Yr=1;function Uc(n,t=!1){Yr+=n,n<0&&$e&&t&&($e.hasOnce=!0)}function hh(n){return n.dynamicChildren=Yr>0?$e||sr:null,Xp(),Yr>0&&$e&&$e.push(n),n}function Ai(n,t,e,i,r,s){return hh(Ue(n,t,e,i,r,s,!0))}function Ua(n,t,e,i,r){return hh(Re(n,t,e,i,r,!0))}function io(n){return n?n.__v_isVNode===!0:!1}function wi(n,t){return n.type===t.type&&n.key===t.key}const dh=({key:n})=>n??null,Xs=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?ve(n)||Ce(n)||Wt(n)?{i:un,r:n,k:t,f:!!e}:n:null);function Ue(n,t=null,e=null,i=0,r=null,s=n===ln?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&dh(t),ref:t&&Xs(t),scopeId:Of,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:un};return a?(Jl(l,e),s&128&&n.normalize(l)):e&&(l.shapeFlag|=ve(e)?8:16),Yr>0&&!o&&$e&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&$e.push(l),l}const Re=qp;function qp(n,t=null,e=null,i=0,r=null,s=!1){if((!n||n===mp)&&(n=Oe),io(n)){const a=ai(n,t,!0);return e&&Jl(a,e),Yr>0&&!s&&$e&&(a.shapeFlag&6?$e[$e.indexOf(n)]=a:$e.push(a)),a.patchFlag=-2,a}if(sm(n)&&(n=n.__vccOpts),t){t=Yp(t);let{class:a,style:l}=t;a&&!ve(a)&&(t.class=Fl(a)),he(l)&&(Xl(l)&&!Bt(l)&&(l=Ee({},l)),t.style=Nl(l))}const o=ve(n)?1:fh(n)?128:Bf(n)?64:he(n)?4:Wt(n)?2:0;return Ue(n,t,e,i,r,o,s,!0)}function Yp(n){return n?Xl(n)||th(n)?Ee({},n):n:null}function ai(n,t,e=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=t?Jp(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&dh(c),ref:t&&t.ref?e&&s?Bt(s)?s.concat(Xs(t)):[s,Xs(t)]:Xs(t):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==ln?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ai(n.ssContent),ssFallback:n.ssFallback&&ai(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&qr(u,l.clone(u)),u}function $p(n=" ",t=0){return Re(_o,null,n,t)}function Kp(n,t){const e=Re(Ws,null,n);return e.staticCount=t,e}function Na(n="",t=!1){return t?(Sn(),Ua(Oe,null,n)):Re(Oe,null,n)}function vn(n){return n==null||typeof n=="boolean"?Re(Oe):Bt(n)?Re(ln,null,n.slice()):io(n)?ti(n):Re(_o,null,String(n))}function ti(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ai(n)}function Jl(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Bt(t))e=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),Jl(n,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!th(t)?t._ctx=un:r===3&&un&&(un.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Wt(t)?(t={default:t,_ctx:un},e=32):(t=String(t),i&64?(e=16,t=[$p(t)]):e=8);n.children=t,n.shapeFlag|=e}function Jp(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=Fl([t.class,i.class]));else if(r==="style")t.style=Nl([t.style,i.style]);else if(lo(r)){const s=t[r],o=i[r];o&&s!==o&&!(Bt(s)&&s.includes(o))&&(t[r]=s?[].concat(s,o):o)}else r!==""&&(t[r]=i[r])}return t}function gn(n,t,e,i=null){mn(n,t,7,[e,i])}const Zp=Zf();let jp=0;function Qp(n,t,e){const i=n.type,r=(t?t.appContext:n.appContext)||Zp,s={uid:jp++,vnode:n,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ed(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:nh(i,r),emitsOptions:uh(i,r),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:i.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=zp.bind(null,s),n.ce&&n.ce(s),s}let we=null;const tm=()=>we||un;let ro,Fa;{const n=fo(),t=(e,i)=>{let r;return(r=n[e])||(r=n[e]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};ro=t("__VUE_INSTANCE_SETTERS__",e=>we=e),Fa=t("__VUE_SSR_SETTERS__",e=>$r=e)}const os=n=>{const t=we;return ro(n),n.scope.on(),()=>{n.scope.off(),ro(t)}},Nc=()=>{we&&we.scope.off(),ro(null)};function ph(n){return n.vnode.shapeFlag&4}let $r=!1;function em(n,t=!1,e=!1){t&&Fa(t);const{props:i,children:r}=n.vnode,s=ph(n);bp(n,i,s,t),Cp(n,r,e||t);const o=s?nm(n,t):void 0;return t&&Fa(!1),o}function nm(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,gp);const{setup:i}=e;if(i){Gn();const r=n.setupContext=i.length>1?rm(n):null,s=os(n),o=ss(i,n,0,[n.props,r]),a=cf(o);if(kn(),s(),(a||n.sp)&&!Br(n)&&Xf(n),a){if(o.then(Nc,Nc),t)return o.then(l=>{Fc(n,l)}).catch(l=>{ho(l,n,0)});n.asyncDep=o}else Fc(n,o)}else mh(n)}function Fc(n,t,e){Wt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:he(t)&&(n.setupState=Df(t)),mh(n)}function mh(n,t,e){const i=n.type;n.render||(n.render=i.render||yn);{const r=os(n);Gn();try{_p(n)}finally{kn(),r()}}}const im={get(n,t){return Ae(n,"get",""),n[t]}};function rm(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,im),slots:n.slots,emit:n.emit,expose:t}}function Zl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Df(Wd(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in zr)return zr[e](n)},has(t,e){return e in t||e in zr}})):n.proxy}function sm(n){return Wt(n)&&"__vccOpts"in n}const om=(n,t)=>Kd(n,t,$r);function am(n,t,e){const i=arguments.length;return i===2?he(t)&&!Bt(t)?io(t)?Re(n,null,[t]):Re(n,t):Re(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&io(e)&&(e=[e]),Re(n,t,e))}const lm="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Oa;const Oc=typeof window<"u"&&window.trustedTypes;if(Oc)try{Oa=Oc.createPolicy("vue",{createHTML:n=>n})}catch{}const gh=Oa?n=>Oa.createHTML(n):n=>n,cm="http://www.w3.org/2000/svg",um="http://www.w3.org/1998/Math/MathML",Fn=typeof document<"u"?document:null,Bc=Fn&&Fn.createElement("template"),fm={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const r=t==="svg"?Fn.createElementNS(cm,n):t==="mathml"?Fn.createElementNS(um,n):e?Fn.createElement(n,{is:e}):Fn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Fn.createTextNode(n),createComment:n=>Fn.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Fn.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,r,s){const o=e?e.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===s||!(r=r.nextSibling)););else{Bc.innerHTML=gh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Bc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Xn="transition",Tr="animation",Kr=Symbol("_vtc"),_h={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},hm=Ee({},zf,_h),dm=n=>(n.displayName="Transition",n.props=hm,n),zc=dm((n,{slots:t})=>am(rp,pm(n),t)),mi=(n,t=[])=>{Bt(n)?n.forEach(e=>e(...t)):n&&n(...t)},Hc=n=>n?Bt(n)?n.some(t=>t.length>1):n.length>1:!1;function pm(n){const t={};for(const G in n)G in _h||(t[G]=n[G]);if(n.css===!1)return t;const{name:e="v",type:i,duration:r,enterFromClass:s=`${e}-enter-from`,enterActiveClass:o=`${e}-enter-active`,enterToClass:a=`${e}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${e}-leave-from`,leaveActiveClass:h=`${e}-leave-active`,leaveToClass:d=`${e}-leave-to`}=n,_=mm(r),S=_&&_[0],m=_&&_[1],{onBeforeEnter:p,onEnter:A,onEnterCancelled:b,onLeave:x,onLeaveCancelled:I,onBeforeAppear:L=p,onAppear:P=A,onAppearCancelled:O=b}=t,T=(G,Y,nt,it)=>{G._enterCancelled=it,gi(G,Y?u:a),gi(G,Y?c:o),nt&&nt()},y=(G,Y)=>{G._isLeaving=!1,gi(G,f),gi(G,d),gi(G,h),Y&&Y()},C=G=>(Y,nt)=>{const it=G?P:A,Q=()=>T(Y,G,nt);mi(it,[Y,Q]),Vc(()=>{gi(Y,G?l:s),Cn(Y,G?u:a),Hc(it)||Gc(Y,i,S,Q)})};return Ee(t,{onBeforeEnter(G){mi(p,[G]),Cn(G,s),Cn(G,o)},onBeforeAppear(G){mi(L,[G]),Cn(G,l),Cn(G,c)},onEnter:C(!1),onAppear:C(!0),onLeave(G,Y){G._isLeaving=!0;const nt=()=>y(G,Y);Cn(G,f),G._enterCancelled?(Cn(G,h),Xc()):(Xc(),Cn(G,h)),Vc(()=>{G._isLeaving&&(gi(G,f),Cn(G,d),Hc(x)||Gc(G,i,m,nt))}),mi(x,[G,nt])},onEnterCancelled(G){T(G,!1,void 0,!0),mi(b,[G])},onAppearCancelled(G){T(G,!0,void 0,!0),mi(O,[G])},onLeaveCancelled(G){y(G),mi(I,[G])}})}function mm(n){if(n==null)return null;if(he(n))return[No(n.enter),No(n.leave)];{const t=No(n);return[t,t]}}function No(n){return gd(n)}function Cn(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[Kr]||(n[Kr]=new Set)).add(t)}function gi(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[Kr];e&&(e.delete(t),e.size||(n[Kr]=void 0))}function Vc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let gm=0;function Gc(n,t,e,i){const r=n._endId=++gm,s=()=>{r===n._endId&&i()};if(e!=null)return setTimeout(s,e);const{type:o,timeout:a,propCount:l}=_m(n,t);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,h),s()},h=d=>{d.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,h)}function _m(n,t){const e=window.getComputedStyle(n),i=_=>(e[_]||"").split(", "),r=i(`${Xn}Delay`),s=i(`${Xn}Duration`),o=kc(r,s),a=i(`${Tr}Delay`),l=i(`${Tr}Duration`),c=kc(a,l);let u=null,f=0,h=0;t===Xn?o>0&&(u=Xn,f=o,h=s.length):t===Tr?c>0&&(u=Tr,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?Xn:Tr:null,h=u?u===Xn?s.length:l.length:0);const d=u===Xn&&/\b(transform|all)(,|$)/.test(i(`${Xn}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:d}}function kc(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>Wc(e)+Wc(n[i])))}function Wc(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Xc(){return document.body.offsetHeight}function vm(n,t,e){const i=n[Kr];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const qc=Symbol("_vod"),xm=Symbol("_vsh"),Sm=Symbol(""),Mm=/(^|;)\s*display\s*:/;function ym(n,t,e){const i=n.style,r=ve(e);let s=!1;if(e&&!r){if(t)if(ve(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&qs(i,a,"")}else for(const o in t)e[o]==null&&qs(i,o,"");for(const o in e)o==="display"&&(s=!0),qs(i,o,e[o])}else if(r){if(t!==e){const o=i[Sm];o&&(e+=";"+o),i.cssText=e,s=Mm.test(e)}}else t&&n.removeAttribute("style");qc in n&&(n[qc]=s?i.display:"",n[xm]&&(i.display="none"))}const Yc=/\s*!important$/;function qs(n,t,e){if(Bt(e))e.forEach(i=>qs(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=Em(n,t);Yc.test(e)?n.setProperty(Oi(i),e.replace(Yc,""),"important"):n[i]=e}}const $c=["Webkit","Moz","ms"],Fo={};function Em(n,t){const e=Fo[t];if(e)return e;let i=oi(t);if(i!=="filter"&&i in n)return Fo[t]=i;i=hf(i);for(let r=0;r<$c.length;r++){const s=$c[r]+i;if(s in n)return Fo[t]=s}return t}const Kc="http://www.w3.org/1999/xlink";function Jc(n,t,e,i,r,s=yd(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Kc,t.slice(6,t.length)):n.setAttributeNS(Kc,t,e):e==null||s&&!df(e)?n.removeAttribute(t):n.setAttribute(t,s?"":ui(e)?String(e):e)}function Zc(n,t,e,i,r){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?gh(e):e);return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=df(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(r||t)}function Tm(n,t,e,i){n.addEventListener(t,e,i)}function bm(n,t,e,i){n.removeEventListener(t,e,i)}const jc=Symbol("_vei");function Am(n,t,e,i,r=null){const s=n[jc]||(n[jc]={}),o=s[t];if(i&&o)o.value=i;else{const[a,l]=wm(t);if(i){const c=s[t]=Pm(i,r);Tm(n,a,c,l)}else o&&(bm(n,a,o,l),s[t]=void 0)}}const Qc=/(?:Once|Passive|Capture)$/;function wm(n){let t;if(Qc.test(n)){t={};let i;for(;i=n.match(Qc);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Oi(n.slice(2)),t]}let Oo=0;const Rm=Promise.resolve(),Cm=()=>Oo||(Rm.then(()=>Oo=0),Oo=Date.now());function Pm(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;mn(Lm(i,e.value),t,5,[i])};return e.value=n,e.attached=Cm(),e}function Lm(n,t){if(Bt(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const tu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Dm=(n,t,e,i,r,s)=>{const o=r==="svg";t==="class"?vm(n,i,o):t==="style"?ym(n,e,i):lo(t)?Dl(t)||Am(n,t,e,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Im(n,t,i,o))?(Zc(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Jc(n,t,i,o,s,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!ve(i))?Zc(n,oi(t),i,s,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Jc(n,t,i,o))};function Im(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&tu(t)&&Wt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return tu(t)&&ve(e)?!1:t in n}const Um=Ee({patchProp:Dm},fm);let eu;function Nm(){return eu||(eu=Lp(Um))}const Fm=(...n)=>{const t=Nm().createApp(...n),{mount:e}=t;return t.mount=i=>{const r=Bm(i);if(!r)return;const s=t._component;!Wt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=e(r,!1,Om(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function Om(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Bm(n){return ve(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jl="178",zm=0,nu=1,Hm=2,vh=1,Vm=2,Nn=3,li=0,Ge=1,Bn=2,ri=0,cr=1,iu=2,ru=3,su=4,Gm=5,Ri=100,km=101,Wm=102,Xm=103,qm=104,Ym=200,$m=201,Km=202,Jm=203,Ba=204,za=205,Zm=206,jm=207,Qm=208,tg=209,eg=210,ng=211,ig=212,rg=213,sg=214,Ha=0,Va=1,Ga=2,hr=3,ka=4,Wa=5,Xa=6,qa=7,xh=0,og=1,ag=2,si=0,lg=1,cg=2,ug=3,fg=4,hg=5,dg=6,pg=7,Sh=300,dr=301,pr=302,Ya=303,$a=304,vo=306,Ka=1e3,Pi=1001,Ja=1002,pn=1003,mg=1004,_s=1005,Mn=1006,Bo=1007,Li=1008,Tn=1009,Mh=1010,yh=1011,Jr=1012,Ql=1013,Ui=1014,zn=1015,as=1016,tc=1017,ec=1018,Zr=1020,Eh=35902,Th=1021,bh=1022,fn=1023,jr=1026,Qr=1027,Ah=1028,nc=1029,wh=1030,ic=1031,rc=1033,Ys=33776,$s=33777,Ks=33778,Js=33779,Za=35840,ja=35841,Qa=35842,tl=35843,el=36196,nl=37492,il=37496,rl=37808,sl=37809,ol=37810,al=37811,ll=37812,cl=37813,ul=37814,fl=37815,hl=37816,dl=37817,pl=37818,ml=37819,gl=37820,_l=37821,Zs=36492,vl=36494,xl=36495,Rh=36283,Sl=36284,Ml=36285,yl=36286,gg=3200,_g=3201,Ch=0,vg=1,ni="",tn="srgb",mr="srgb-linear",so="linear",ie="srgb",Hi=7680,ou=519,xg=512,Sg=513,Mg=514,Ph=515,yg=516,Eg=517,Tg=518,bg=519,au=35044,lu="300 es",Hn=2e3,oo=2001;class vr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zo=Math.PI/180,El=180/Math.PI;function xr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]).toLowerCase()}function $t(n,t,e){return Math.max(t,Math.min(e,n))}function Ag(n,t){return(n%t+t)%t}function Ho(n,t,e){return(1-e)*n+e*t}function br(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function He(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class xt{constructor(t=0,e=0){xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ls{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],_=s[o+2],S=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=_,t[e+3]=S;return}if(f!==S||l!==h||c!==d||u!==_){let m=1-a;const p=l*h+c*d+u*_+f*S,A=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const I=Math.sqrt(b),L=Math.atan2(I,p*A);m=Math.sin(m*L)/I,a=Math.sin(a*L)/I}const x=a*A;if(l=l*m+h*x,c=c*m+d*x,u=u*m+_*x,f=f*m+S*x,m===1-a){const I=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=I,c*=I,u*=I,f*=I}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],_=s[o+3];return t[e]=a*_+u*f+l*d-c*h,t[e+1]=l*_+u*h+c*f-a*d,t[e+2]=c*_+u*d+a*h-l*f,t[e+3]=u*_-a*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,e=0,i=0){V.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*i),u=2*(a*e-s*r),f=2*(s*i-o*e);return this.x=e+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Vo.copy(this).projectOnVector(t),this.sub(Vo)}reflect(t){return this.sub(Vo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vo=new V,cu=new ls;class Xt{constructor(t,e,i,r,s,o,a,l,c){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c)}set(t,e,i,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],_=i[8],S=r[0],m=r[3],p=r[6],A=r[1],b=r[4],x=r[7],I=r[2],L=r[5],P=r[8];return s[0]=o*S+a*A+l*I,s[3]=o*m+a*b+l*L,s[6]=o*p+a*x+l*P,s[1]=c*S+u*A+f*I,s[4]=c*m+u*b+f*L,s[7]=c*p+u*x+f*P,s[2]=h*S+d*A+_*I,s[5]=h*m+d*b+_*L,s[8]=h*p+d*x+_*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,_=e*f+i*h+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return t[0]=f*S,t[1]=(r*c-u*i)*S,t[2]=(a*i-r*o)*S,t[3]=h*S,t[4]=(u*e-r*l)*S,t[5]=(r*s-a*e)*S,t[6]=d*S,t[7]=(i*l-c*e)*S,t[8]=(o*e-i*s)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Go.makeScale(t,e)),this}rotate(t){return this.premultiply(Go.makeRotation(-t)),this}translate(t,e){return this.premultiply(Go.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Go=new Xt;function Lh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ts(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wg(){const n=ts("canvas");return n.style.display="block",n}const uu={};function ur(n){n in uu||(uu[n]=!0,console.warn(n))}function Rg(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function Cg(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Pg(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const fu=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hu=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lg(){const n={enabled:!0,workingColorSpace:mr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ie&&(r.r=Vn(r.r),r.g=Vn(r.g),r.b=Vn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ie&&(r.r=fr(r.r),r.g=fr(r.g),r.b=fr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ni?so:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ur("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ur("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[mr]:{primaries:t,whitePoint:i,transfer:so,toXYZ:fu,fromXYZ:hu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:t,whitePoint:i,transfer:ie,toXYZ:fu,fromXYZ:hu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),n}const jt=Lg();function Vn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function fr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Vi;class Dg{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Vi===void 0&&(Vi=ts("canvas")),Vi.width=t.width,Vi.height=t.height;const r=Vi.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Vi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ts("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Vn(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Vn(e[i]/255)*255):e[i]=Vn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ig=0;class sc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=xr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ko(r[o].image)):s.push(ko(r[o]))}else s=ko(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function ko(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Dg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ug=0;const Wo=new V;class Be extends vr{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,i=Pi,r=Pi,s=Mn,o=Li,a=fn,l=Tn,c=Be.DEFAULT_ANISOTROPY,u=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=xr(),this.name="",this.source=new sc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wo).x}get height(){return this.source.getSize(Wo).y}get depth(){return this.source.getSize(Wo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ka:t.x=t.x-Math.floor(t.x);break;case Pi:t.x=t.x<0?0:1;break;case Ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ka:t.y=t.y-Math.floor(t.y);break;case Pi:t.y=t.y<0?0:1;break;case Ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=Sh;Be.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,i=0,r=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],S=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+S)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,x=(d+1)/2,I=(p+1)/2,L=(u+h)/4,P=(f+S)/4,O=(_+m)/4;return b>x&&b>I?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=L/i,s=P/i):x>I?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=L/r,s=O/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=P/s,r=O/s),this.set(i,r,s,e),this}let A=Math.sqrt((m-_)*(m-_)+(f-S)*(f-S)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(f-S)/A,this.z=(h-u)/A,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ng extends vr{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const r={width:t,height:e,depth:i.depth},s=new Be(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new sc(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends Ng{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Dh extends Be{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fg extends Be{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cs{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,sn):sn.fromBufferAttribute(s,o),sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vs.copy(i.boundingBox)),vs.applyMatrix4(t.matrixWorld),this.union(vs)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ar),xs.subVectors(this.max,Ar),Gi.subVectors(t.a,Ar),ki.subVectors(t.b,Ar),Wi.subVectors(t.c,Ar),qn.subVectors(ki,Gi),Yn.subVectors(Wi,ki),_i.subVectors(Gi,Wi);let e=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-_i.z,_i.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,_i.z,0,-_i.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-_i.y,_i.x,0];return!Xo(e,Gi,ki,Wi,xs)||(e=[1,0,0,0,1,0,0,0,1],!Xo(e,Gi,ki,Wi,xs))?!1:(Ss.crossVectors(qn,Yn),e=[Ss.x,Ss.y,Ss.z],Xo(e,Gi,ki,Wi,xs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Pn=[new V,new V,new V,new V,new V,new V,new V,new V],sn=new V,vs=new cs,Gi=new V,ki=new V,Wi=new V,qn=new V,Yn=new V,_i=new V,Ar=new V,xs=new V,Ss=new V,vi=new V;function Xo(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){vi.fromArray(n,s);const a=r.x*Math.abs(vi.x)+r.y*Math.abs(vi.y)+r.z*Math.abs(vi.z),l=t.dot(vi),c=e.dot(vi),u=i.dot(vi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Og=new cs,wr=new V,qo=new V;class xo{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Og.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wr.subVectors(t,this.center);const e=wr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(wr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wr.copy(t.center).add(qo)),this.expandByPoint(wr.copy(t.center).sub(qo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ln=new V,Yo=new V,Ms=new V,$n=new V,$o=new V,ys=new V,Ko=new V;class Ih{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Yo.copy(t).add(e).multiplyScalar(.5),Ms.copy(e).sub(t).normalize(),$n.copy(this.origin).sub(Yo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Ms),a=$n.dot(this.direction),l=-$n.dot(Ms),c=$n.lengthSq(),u=Math.abs(1-o*o);let f,h,d,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const S=1/u;f*=S,h*=S,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Yo).addScaledVector(Ms,h),d}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);const i=Ln.dot(this.direction),r=Ln.dot(Ln)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,i,r,s){$o.subVectors(e,t),ys.subVectors(i,t),Ko.crossVectors($o,ys);let o=this.direction.dot(Ko),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$n.subVectors(this.origin,t);const l=a*this.direction.dot(ys.crossVectors($n,ys));if(l<0)return null;const c=a*this.direction.dot($o.cross($n));if(c<0||l+c>o)return null;const u=-a*$n.dot(Ko);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,i,r,s,o,a,l,c,u,f,h,d,_,S,m){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c,u,f,h,d,_,S,m)}set(t,e,i,r,s,o,a,l,c,u,f,h,d,_,S,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Xi.setFromMatrixColumn(t,0).length(),s=1/Xi.setFromMatrixColumn(t,1).length(),o=1/Xi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=o*u,d=o*f,_=a*u,S=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+_*c,e[5]=h-S*c,e[9]=-a*l,e[2]=S-h*c,e[6]=_+d*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,_=c*u,S=c*f;e[0]=h+S*a,e[4]=_*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-_,e[6]=S+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,_=c*u,S=c*f;e[0]=h-S*a,e[4]=-o*f,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*u,e[9]=S-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,d=o*f,_=a*u,S=a*f;e[0]=l*u,e[4]=_*c-d,e[8]=h*c+S,e[1]=l*f,e[5]=S*c+h,e[9]=d*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,d=o*c,_=a*l,S=a*c;e[0]=l*u,e[4]=S-h*f,e[8]=_*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*f+_,e[10]=h-S*f}else if(t.order==="XZY"){const h=o*l,d=o*c,_=a*l,S=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+S,e[5]=o*u,e[9]=d*f-_,e[2]=_*f-d,e[6]=a*u,e[10]=S*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bg,t,zg)}lookAt(t,e,i){const r=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),Kn.crossVectors(i,Xe),Kn.lengthSq()===0&&(Math.abs(i.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),Kn.crossVectors(i,Xe)),Kn.normalize(),Es.crossVectors(Xe,Kn),r[0]=Kn.x,r[4]=Es.x,r[8]=Xe.x,r[1]=Kn.y,r[5]=Es.y,r[9]=Xe.y,r[2]=Kn.z,r[6]=Es.z,r[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],_=i[2],S=i[6],m=i[10],p=i[14],A=i[3],b=i[7],x=i[11],I=i[15],L=r[0],P=r[4],O=r[8],T=r[12],y=r[1],C=r[5],G=r[9],Y=r[13],nt=r[2],it=r[6],Q=r[10],et=r[14],$=r[3],ht=r[7],vt=r[11],Et=r[15];return s[0]=o*L+a*y+l*nt+c*$,s[4]=o*P+a*C+l*it+c*ht,s[8]=o*O+a*G+l*Q+c*vt,s[12]=o*T+a*Y+l*et+c*Et,s[1]=u*L+f*y+h*nt+d*$,s[5]=u*P+f*C+h*it+d*ht,s[9]=u*O+f*G+h*Q+d*vt,s[13]=u*T+f*Y+h*et+d*Et,s[2]=_*L+S*y+m*nt+p*$,s[6]=_*P+S*C+m*it+p*ht,s[10]=_*O+S*G+m*Q+p*vt,s[14]=_*T+S*Y+m*et+p*Et,s[3]=A*L+b*y+x*nt+I*$,s[7]=A*P+b*C+x*it+I*ht,s[11]=A*O+b*G+x*Q+I*vt,s[15]=A*T+b*Y+x*et+I*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],_=t[3],S=t[7],m=t[11],p=t[15];return _*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*d-i*l*d)+S*(+e*l*d-e*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+m*(+e*c*f-e*a*d-s*o*f+i*o*d+s*a*u-i*c*u)+p*(-r*a*u-e*l*f+e*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],_=t[12],S=t[13],m=t[14],p=t[15],A=f*m*c-S*h*c+S*l*d-a*m*d-f*l*p+a*h*p,b=_*h*c-u*m*c-_*l*d+o*m*d+u*l*p-o*h*p,x=u*S*c-_*f*c+_*a*d-o*S*d-u*a*p+o*f*p,I=_*f*l-u*S*l-_*a*h+o*S*h+u*a*m-o*f*m,L=e*A+i*b+r*x+s*I;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return t[0]=A*P,t[1]=(S*h*s-f*m*s-S*r*d+i*m*d+f*r*p-i*h*p)*P,t[2]=(a*m*s-S*l*s+S*r*c-i*m*c-a*r*p+i*l*p)*P,t[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*d-i*l*d)*P,t[4]=b*P,t[5]=(u*m*s-_*h*s+_*r*d-e*m*d-u*r*p+e*h*p)*P,t[6]=(_*l*s-o*m*s-_*r*c+e*m*c+o*r*p-e*l*p)*P,t[7]=(o*h*s-u*l*s+u*r*c-e*h*c-o*r*d+e*l*d)*P,t[8]=x*P,t[9]=(_*f*s-u*S*s-_*i*d+e*S*d+u*i*p-e*f*p)*P,t[10]=(o*S*s-_*a*s+_*i*c-e*S*c-o*i*p+e*a*p)*P,t[11]=(u*a*s-o*f*s-u*i*c+e*f*c+o*i*d-e*a*d)*P,t[12]=I*P,t[13]=(u*S*r-_*f*r+_*i*h-e*S*h-u*i*m+e*f*m)*P,t[14]=(_*a*r-o*S*r-_*i*l+e*S*l+o*i*m-e*a*m)*P,t[15]=(o*f*r-u*a*r+u*i*l-e*f*l-o*i*h+e*a*h)*P,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,_=s*f,S=o*u,m=o*f,p=a*f,A=l*c,b=l*u,x=l*f,I=i.x,L=i.y,P=i.z;return r[0]=(1-(S+p))*I,r[1]=(d+x)*I,r[2]=(_-b)*I,r[3]=0,r[4]=(d-x)*L,r[5]=(1-(h+p))*L,r[6]=(m+A)*L,r[7]=0,r[8]=(_+b)*P,r[9]=(m-A)*P,r[10]=(1-(h+S))*P,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Xi.set(r[0],r[1],r[2]).length();const o=Xi.set(r[4],r[5],r[6]).length(),a=Xi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],on.copy(this);const c=1/s,u=1/o,f=1/a;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=f,on.elements[9]*=f,on.elements[10]*=f,e.setFromRotationMatrix(on),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=Hn){const l=this.elements,c=2*s/(e-t),u=2*s/(i-r),f=(e+t)/(e-t),h=(i+r)/(i-r);let d,_;if(a===Hn)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===oo)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=Hn){const l=this.elements,c=1/(e-t),u=1/(i-r),f=1/(o-s),h=(e+t)*c,d=(i+r)*u;let _,S;if(a===Hn)_=(o+s)*f,S=-2*f;else if(a===oo)_=s*f,S=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=S,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Xi=new V,on=new fe,Bg=new V(0,0,0),zg=new V(1,1,1),Kn=new V,Es=new V,Xe=new V,du=new fe,pu=new ls;class bn{constructor(t=0,e=0,i=0,r=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return du.makeRotationFromQuaternion(t),this.setFromRotationMatrix(du,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pu.setFromEuler(this),this.setFromQuaternion(pu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class Uh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Hg=0;const mu=new V,qi=new ls,Dn=new fe,Ts=new V,Rr=new V,Vg=new V,Gg=new ls,gu=new V(1,0,0),_u=new V(0,1,0),vu=new V(0,0,1),xu={type:"added"},kg={type:"removed"},Yi={type:"childadded",child:null},Jo={type:"childremoved",child:null};class ye extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new V,e=new bn,i=new ls,r=new V(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new fe},normalMatrix:{value:new Xt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.multiply(qi),this}rotateOnWorldAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.premultiply(qi),this}rotateX(t){return this.rotateOnAxis(gu,t)}rotateY(t){return this.rotateOnAxis(_u,t)}rotateZ(t){return this.rotateOnAxis(vu,t)}translateOnAxis(t,e){return mu.copy(t).applyQuaternion(this.quaternion),this.position.add(mu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gu,t)}translateY(t){return this.translateOnAxis(_u,t)}translateZ(t){return this.translateOnAxis(vu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ts.copy(t):Ts.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Rr,Ts,this.up):Dn.lookAt(Ts,Rr,this.up),this.quaternion.setFromRotationMatrix(Dn),r&&(Dn.extractRotation(r.matrixWorld),qi.setFromRotationMatrix(Dn),this.quaternion.premultiply(qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xu),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kg),Jo.child=t,this.dispatchEvent(Jo),Jo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xu),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,t,Vg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,Gg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}ye.DEFAULT_UP=new V(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new V,In=new V,Zo=new V,Un=new V,$i=new V,Ki=new V,Su=new V,jo=new V,Qo=new V,ta=new V,ea=new ge,na=new ge,ia=new ge;class cn{constructor(t=new V,e=new V,i=new V){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),an.subVectors(t,e),r.cross(an);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){an.subVectors(r,e),In.subVectors(i,e),Zo.subVectors(t,e);const o=an.dot(an),a=an.dot(In),l=an.dot(Zo),c=In.dot(In),u=In.dot(Zo),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-d-_,_,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Un.x),l.addScaledVector(o,Un.y),l.addScaledVector(a,Un.z),l)}static getInterpolatedAttribute(t,e,i,r,s,o){return ea.setScalar(0),na.setScalar(0),ia.setScalar(0),ea.fromBufferAttribute(t,e),na.fromBufferAttribute(t,i),ia.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(ea,s.x),o.addScaledVector(na,s.y),o.addScaledVector(ia,s.z),o}static isFrontFacing(t,e,i,r){return an.subVectors(i,e),In.subVectors(t,e),an.cross(In).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),In.subVectors(this.a,this.b),an.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return cn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;$i.subVectors(r,i),Ki.subVectors(s,i),jo.subVectors(t,i);const l=$i.dot(jo),c=Ki.dot(jo);if(l<=0&&c<=0)return e.copy(i);Qo.subVectors(t,r);const u=$i.dot(Qo),f=Ki.dot(Qo);if(u>=0&&f<=u)return e.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector($i,o);ta.subVectors(t,s);const d=$i.dot(ta),_=Ki.dot(ta);if(_>=0&&d<=_)return e.copy(s);const S=d*c-l*_;if(S<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(i).addScaledVector(Ki,a);const m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return Su.subVectors(s,r),a=(f-u)/(f-u+(d-_)),e.copy(r).addScaledVector(Su,a);const p=1/(m+S+h);return o=S*p,a=h*p,e.copy(i).addScaledVector($i,o).addScaledVector(Ki,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},bs={h:0,s:0,l:0};function ra(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Jt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,jt.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=jt.workingColorSpace){if(t=Ag(t,1),e=$t(e,0,1),i=$t(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=ra(o,s,t+1/3),this.g=ra(o,s,t),this.b=ra(o,s,t-1/3)}return jt.colorSpaceToWorking(this,r),this}setStyle(t,e=tn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){const i=Nh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vn(t.r),this.g=Vn(t.g),this.b=Vn(t.b),this}copyLinearToSRGB(t){return this.r=fr(t.r),this.g=fr(t.g),this.b=fr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return jt.workingToColorSpace(be.copy(this),t),Math.round($t(be.r*255,0,255))*65536+Math.round($t(be.g*255,0,255))*256+Math.round($t(be.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(be.copy(this),e);const i=be.r,r=be.g,s=be.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=tn){jt.workingToColorSpace(be.copy(this),t);const e=be.r,i=be.g,r=be.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(bs);const i=Ho(Jn.h,bs.h,e),r=Ho(Jn.s,bs.s,e),s=Ho(Jn.l,bs.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new Jt;Jt.NAMES=Nh;let Wg=0;class Sr extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wg++}),this.uuid=xr(),this.name="",this.type="Material",this.blending=cr,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ba,this.blendDst=za,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ou,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cr&&(i.blending=this.blending),this.side!==li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ba&&(i.blendSrc=this.blendSrc),this.blendDst!==za&&(i.blendDst=this.blendDst),this.blendEquation!==Ri&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==hr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ou&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class oc extends Sr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new V,As=new xt;let Xg=0;class En{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=au,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)As.fromBufferAttribute(this,e),As.applyMatrix3(t),this.setXY(e,As.x,As.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=br(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=He(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=br(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=br(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=br(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=br(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),i=He(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),i=He(i,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),i=He(i,this.array),r=He(r,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==au&&(t.usage=this.usage),t}}class Fh extends En{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Oh extends En{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Pe extends En{constructor(t,e,i){super(new Float32Array(t),e,i)}}let qg=0;const Qe=new fe,sa=new ye,Ji=new V,qe=new cs,Cr=new cs,Me=new V;class nn extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=xr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lh(t)?Oh:Fh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,i){return Qe.makeTranslation(t,e,i),this.applyMatrix4(Qe),this}scale(t,e,i){return Qe.makeScale(t,e,i),this.applyMatrix4(Qe),this}lookAt(t){return sa.lookAt(t),sa.updateMatrix(),this.applyMatrix4(sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Pe(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];qe.setFromBufferAttribute(s),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const i=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Cr.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors(qe.min,Cr.min),qe.expandByPoint(Me),Me.addVectors(qe.max,Cr.max),qe.expandByPoint(Me)):(qe.expandByPoint(Cr.min),qe.expandByPoint(Cr.max))}qe.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Me.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Me));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Me.fromBufferAttribute(a,c),l&&(Ji.fromBufferAttribute(t,c),Me.add(Ji)),r=Math.max(r,i.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<i.count;O++)a[O]=new V,l[O]=new V;const c=new V,u=new V,f=new V,h=new xt,d=new xt,_=new xt,S=new V,m=new V;function p(O,T,y){c.fromBufferAttribute(i,O),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,y),h.fromBufferAttribute(s,O),d.fromBufferAttribute(s,T),_.fromBufferAttribute(s,y),u.sub(c),f.sub(c),d.sub(h),_.sub(h);const C=1/(d.x*_.y-_.x*d.y);isFinite(C)&&(S.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(C),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(C),a[O].add(S),a[T].add(S),a[y].add(S),l[O].add(m),l[T].add(m),l[y].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let O=0,T=A.length;O<T;++O){const y=A[O],C=y.start,G=y.count;for(let Y=C,nt=C+G;Y<nt;Y+=3)p(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const b=new V,x=new V,I=new V,L=new V;function P(O){I.fromBufferAttribute(r,O),L.copy(I);const T=a[O];b.copy(T),b.sub(I.multiplyScalar(I.dot(T))).normalize(),x.crossVectors(L,T);const C=x.dot(l[O])<0?-1:1;o.setXYZW(O,b.x,b.y,b.z,C)}for(let O=0,T=A.length;O<T;++O){const y=A[O],C=y.start,G=y.count;for(let Y=C,nt=C+G;Y<nt;Y+=3)P(t.getX(Y+0)),P(t.getX(Y+1)),P(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new En(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new V,s=new V,o=new V,a=new V,l=new V,c=new V,u=new V,f=new V;if(t)for(let h=0,d=t.count;h<d;h+=3){const _=t.getX(h+0),S=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,S),o.fromBufferAttribute(e,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?d=l[S]*a.data.stride+a.offset:d=l[S]*u;for(let p=0;p<u;p++)h[_++]=c[d++]}return new En(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new nn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,i);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mu=new fe,xi=new Ih,ws=new xo,yu=new V,Rs=new V,Cs=new V,Ps=new V,oa=new V,Ls=new V,Eu=new V,Ds=new V;class Ke extends ye{constructor(t=new nn,e=new oc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Ls.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(oa.fromBufferAttribute(f,t),o?Ls.addScaledVector(oa,u):Ls.addScaledVector(oa.sub(e),u))}e.add(Ls)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ws.copy(i.boundingSphere),ws.applyMatrix4(s),xi.copy(t.ray).recast(t.near),!(ws.containsPoint(xi.origin)===!1&&(xi.intersectSphere(ws,yu)===null||xi.origin.distanceToSquared(yu)>(t.far-t.near)**2))&&(Mu.copy(s).invert(),xi.copy(t.ray).applyMatrix4(Mu),!(i.boundingBox!==null&&xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,xi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,S=h.length;_<S;_++){const m=h[_],p=o[m.materialIndex],A=Math.max(m.start,d.start),b=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=A,I=b;x<I;x+=3){const L=a.getX(x),P=a.getX(x+1),O=a.getX(x+2);r=Is(this,p,t,i,c,u,f,L,P,O),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,d.start),S=Math.min(a.count,d.start+d.count);for(let m=_,p=S;m<p;m+=3){const A=a.getX(m),b=a.getX(m+1),x=a.getX(m+2);r=Is(this,o,t,i,c,u,f,A,b,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,S=h.length;_<S;_++){const m=h[_],p=o[m.materialIndex],A=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=A,I=b;x<I;x+=3){const L=x,P=x+1,O=x+2;r=Is(this,p,t,i,c,u,f,L,P,O),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,d.start),S=Math.min(l.count,d.start+d.count);for(let m=_,p=S;m<p;m+=3){const A=m,b=m+1,x=m+2;r=Is(this,o,t,i,c,u,f,A,b,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Yg(n,t,e,i,r,s,o,a){let l;if(t.side===Ge?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===li,a),l===null)return null;Ds.copy(a),Ds.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Ds);return c<e.near||c>e.far?null:{distance:c,point:Ds.clone(),object:n}}function Is(n,t,e,i,r,s,o,a,l,c){n.getVertexPosition(a,Rs),n.getVertexPosition(l,Cs),n.getVertexPosition(c,Ps);const u=Yg(n,t,e,i,Rs,Cs,Ps,Eu);if(u){const f=new V;cn.getBarycoord(Eu,Rs,Cs,Ps,f),r&&(u.uv=cn.getInterpolatedAttribute(r,a,l,c,f,new xt)),s&&(u.uv1=cn.getInterpolatedAttribute(s,a,l,c,f,new xt)),o&&(u.normal=cn.getInterpolatedAttribute(o,a,l,c,f,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new V,materialIndex:0};cn.getNormal(Rs,Cs,Ps,h.normal),u.face=h,u.barycoord=f}return u}class us extends nn{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,i,e,t,o,s,0),_("z","y","x",1,-1,i,e,-t,o,s,1),_("x","z","y",1,1,t,i,e,r,o,2),_("x","z","y",1,-1,t,i,-e,r,o,3),_("x","y","z",1,-1,t,e,i,r,s,4),_("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(u,3)),this.setAttribute("uv",new Pe(f,2));function _(S,m,p,A,b,x,I,L,P,O,T){const y=x/P,C=I/O,G=x/2,Y=I/2,nt=L/2,it=P+1,Q=O+1;let et=0,$=0;const ht=new V;for(let vt=0;vt<Q;vt++){const Et=vt*C-Y;for(let Nt=0;Nt<it;Nt++){const Yt=Nt*y-G;ht[S]=Yt*A,ht[m]=Et*b,ht[p]=nt,c.push(ht.x,ht.y,ht.z),ht[S]=0,ht[m]=0,ht[p]=L>0?1:-1,u.push(ht.x,ht.y,ht.z),f.push(Nt/P),f.push(1-vt/O),et+=1}}for(let vt=0;vt<O;vt++)for(let Et=0;Et<P;Et++){const Nt=h+Et+it*vt,Yt=h+Et+it*(vt+1),rt=h+(Et+1)+it*(vt+1),dt=h+(Et+1)+it*vt;l.push(Nt,Yt,dt),l.push(Yt,rt,dt),$+=6}a.addGroup(d,$,T),d+=$,h+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new us(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function gr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Ie(n){const t={};for(let e=0;e<n.length;e++){const i=gr(n[e]);for(const r in i)t[r]=i[r]}return t}function $g(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Bh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const Kg={clone:gr,merge:Ie};var Jg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends Sr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jg,this.fragmentShader=Zg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gr(t.uniforms),this.uniformsGroups=$g(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class zh extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=Hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new V,Tu=new xt,bu=new xt;class en extends zh{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=El*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return El*2*Math.atan(Math.tan(zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z)}getViewSize(t,e){return this.getViewBounds(t,Tu,bu),e.subVectors(bu,Tu)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(zo*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zi=-90,ji=1;class jg extends ye{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new en(Zi,ji,t,e);r.layers=this.layers,this.add(r);const s=new en(Zi,ji,t,e);s.layers=this.layers,this.add(s);const o=new en(Zi,ji,t,e);o.layers=this.layers,this.add(o);const a=new en(Zi,ji,t,e);a.layers=this.layers,this.add(a);const l=new en(Zi,ji,t,e);l.layers=this.layers,this.add(l);const c=new en(Zi,ji,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Hn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===oo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Hh extends Be{constructor(t=[],e=dr,i,r,s,o,a,l,c,u){super(t,e,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qg extends Ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Hh(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new us(5,5,5),s=new ci({name:"CubemapFromEquirect",uniforms:gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ge,blending:ri});s.uniforms.tEquirect.value=e;const o=new Ke(r,s),a=e.minFilter;return e.minFilter===Li&&(e.minFilter=Mn),new jg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}class nr extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const t_={type:"move"};class aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const S of t.hand.values()){const m=e.getJointPose(S,i),p=this._getHandJoint(c,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(t_)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new nr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class e_ extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const la=new V,n_=new V,i_=new Xt;class Ti{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=la.subVectors(i,e).cross(n_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(la),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||i_.getNormalMatrix(t),r=this.coplanarPoint(la).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new xo,r_=new xt(.5,.5),Us=new V;class ac{constructor(t=new Ti,e=new Ti,i=new Ti,r=new Ti,s=new Ti,o=new Ti){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Hn){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],_=r[9],S=r[10],m=r[11],p=r[12],A=r[13],b=r[14],x=r[15];if(i[0].setComponents(l-s,h-c,m-d,x-p).normalize(),i[1].setComponents(l+s,h+c,m+d,x+p).normalize(),i[2].setComponents(l+o,h+u,m+_,x+A).normalize(),i[3].setComponents(l-o,h-u,m-_,x-A).normalize(),i[4].setComponents(l-a,h-f,m-S,x-b).normalize(),e===Hn)i[5].setComponents(l+a,h+f,m+S,x+b).normalize();else if(e===oo)i[5].setComponents(a,f,S,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){Si.center.set(0,0,0);const e=r_.distanceTo(t.center);return Si.radius=.7071067811865476+e,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Us.x=r.normal.x>0?t.max.x:t.min.x,Us.y=r.normal.y>0?t.max.y:t.min.y,Us.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Us)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vh extends Sr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Au=new fe,Tl=new Ih,Ns=new xo,Fs=new V;class s_ extends ye{constructor(t=new nn,e=new Vh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ns.copy(i.boundingSphere),Ns.applyMatrix4(r),Ns.radius+=s,t.ray.intersectsSphere(Ns)===!1)return;Au.copy(r).invert(),Tl.copy(t.ray).applyMatrix4(Au);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=h,S=d;_<S;_++){const m=c.getX(_);Fs.fromBufferAttribute(f,m),wu(Fs,m,l,r,t,e,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let _=h,S=d;_<S;_++)Fs.fromBufferAttribute(f,_),wu(Fs,_,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function wu(n,t,e,i,r,s,o){const a=Tl.distanceSqToPoint(n);if(a<e){const l=new V;Tl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Gh extends Be{constructor(t,e,i=Ui,r,s,o,a=pn,l=pn,c,u=jr,f=1){if(u!==jr&&u!==Qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new sc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class An{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let r=0;const s=i.length;let o;e?o=e:o=t*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,d=(o-u)/h;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new xt:new V);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new V,r=[],s=[],o=[],a=new V,l=new fe;for(let d=0;d<=t;d++){const _=d/t;r[d]=this.getTangentAt(_,new V)}s[0]=new V,o[0]=new V;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos($t(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,_))}o[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos($t(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],d*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class es extends An{constructor(t=0,e=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new xt){const i=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class o_ extends es{constructor(t,e,i,r,s,o){super(t,e,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function lc(){let n=0,t=0,e=0,i=0;function r(s,o,a,l){n=s,t=a,e=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,d*=u,r(o,a,h,d)},calc:function(s){const o=s*s,a=o*s;return n+t*s+e*o+i*a}}}const Os=new V,ca=new lc,ua=new lc,fa=new lc;class a_ extends An{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new V){const i=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Os.subVectors(r[0],r[1]).add(r[0]),c=Os);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Os.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Os),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),d),S=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);S<1e-4&&(S=1),_<1e-4&&(_=S),m<1e-4&&(m=S),ca.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,_,S,m),ua.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,_,S,m),fa.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,_,S,m)}else this.curveType==="catmullrom"&&(ca.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),ua.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),fa.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(ca.calc(l),ua.calc(l),fa.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new V().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ru(n,t,e,i,r){const s=(i-t)*.5,o=(r-e)*.5,a=n*n,l=n*a;return(2*e-2*i+s+o)*l+(-3*e+3*i-2*s-o)*a+s*n+e}function l_(n,t){const e=1-n;return e*e*t}function c_(n,t){return 2*(1-n)*n*t}function u_(n,t){return n*n*t}function Vr(n,t,e,i){return l_(n,t)+c_(n,e)+u_(n,i)}function f_(n,t){const e=1-n;return e*e*e*t}function h_(n,t){const e=1-n;return 3*e*e*n*t}function d_(n,t){return 3*(1-n)*n*n*t}function p_(n,t){return n*n*n*t}function Gr(n,t,e,i,r){return f_(n,t)+h_(n,e)+d_(n,i)+p_(n,r)}class kh extends An{constructor(t=new xt,e=new xt,i=new xt,r=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new xt){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Gr(t,r.x,s.x,o.x,a.x),Gr(t,r.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class m_ extends An{constructor(t=new V,e=new V,i=new V,r=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new V){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Gr(t,r.x,s.x,o.x,a.x),Gr(t,r.y,s.y,o.y,a.y),Gr(t,r.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Wh extends An{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class g_ extends An{constructor(t=new V,e=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new V){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new V){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xh extends An{constructor(t=new xt,e=new xt,i=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new xt){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(Vr(t,r.x,s.x,o.x),Vr(t,r.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class __ extends An{constructor(t=new V,e=new V,i=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new V){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(Vr(t,r.x,s.x,o.x),Vr(t,r.y,s.y,o.y),Vr(t,r.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qh extends An{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){const i=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(Ru(a,l.x,c.x,u.x,f.x),Ru(a,l.y,c.y,u.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new xt().fromArray(r))}return this}}var bl=Object.freeze({__proto__:null,ArcCurve:o_,CatmullRomCurve3:a_,CubicBezierCurve:kh,CubicBezierCurve3:m_,EllipseCurve:es,LineCurve:Wh,LineCurve3:g_,QuadraticBezierCurve:Xh,QuadraticBezierCurve3:__,SplineCurve:qh});class v_ extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bl[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,r=this.curves.length;i<r;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(new bl[r.type]().fromJSON(r))}return this}}class Cu extends v_{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Wh(this.currentPoint.clone(),new xt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,r){const s=new Xh(this.currentPoint.clone(),new xt(t,e),new xt(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(t,e,i,r,s,o){const a=new kh(this.currentPoint.clone(),new xt(t,e),new xt(i,r),new xt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new qh(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,r,s,o),this}absarc(t,e,i,r,s,o){return this.absellipse(t,e,i,i,r,s,o),this}ellipse(t,e,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,r,s,o,a,l),this}absellipse(t,e,i,r,s,o,a,l){const c=new es(t,e,i,r,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Al extends Cu{constructor(t){super(t),this.uuid=xr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,r=this.holes.length;i<r;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(new Cu().fromJSON(r))}return this}}function x_(n,t,e=2){const i=t&&t.length,r=i?t[0]*e:n.length;let s=Yh(n,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=T_(n,t,s,e)),n.length>80*e){a=1/0,l=1/0;let u=-1/0,f=-1/0;for(let h=e;h<r;h+=e){const d=n[h],_=n[h+1];d<a&&(a=d),_<l&&(l=_),d>u&&(u=d),_>f&&(f=_)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return ns(s,o,e,a,l,c,0),o}function Yh(n,t,e,i,r){let s;if(r===N_(n,t,e,i)>0)for(let o=t;o<e;o+=i)s=Pu(o/i|0,n[o],n[o+1],s);else for(let o=e-i;o>=t;o-=i)s=Pu(o/i|0,n[o],n[o+1],s);return s&&_r(s,s.next)&&(rs(s),s=s.next),s}function Fi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(_r(e,e.next)||pe(e.prev,e,e.next)===0)){if(rs(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function ns(n,t,e,i,r,s,o){if(!n)return;!o&&s&&C_(n,i,r,s);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(s?M_(n,i,r,s):S_(n)){t.push(l.i,n.i,c.i),rs(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=y_(Fi(n),t),ns(n,t,e,i,r,s,2)):o===2&&E_(n,t,e,i,r,s):ns(Fi(n),t,e,i,r,s,1);break}}}function S_(n){const t=n.prev,e=n,i=n.next;if(pe(t,e,i)>=0)return!1;const r=t.x,s=e.x,o=i.x,a=t.y,l=e.y,c=i.y,u=Math.min(r,s,o),f=Math.min(a,l,c),h=Math.max(r,s,o),d=Math.max(a,l,c);let _=i.next;for(;_!==t;){if(_.x>=u&&_.x<=h&&_.y>=f&&_.y<=d&&Lr(r,a,s,l,o,c,_.x,_.y)&&pe(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function M_(n,t,e,i){const r=n.prev,s=n,o=n.next;if(pe(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,h=o.y,d=Math.min(a,l,c),_=Math.min(u,f,h),S=Math.max(a,l,c),m=Math.max(u,f,h),p=wl(d,_,t,e,i),A=wl(S,m,t,e,i);let b=n.prevZ,x=n.nextZ;for(;b&&b.z>=p&&x&&x.z<=A;){if(b.x>=d&&b.x<=S&&b.y>=_&&b.y<=m&&b!==r&&b!==o&&Lr(a,u,l,f,c,h,b.x,b.y)&&pe(b.prev,b,b.next)>=0||(b=b.prevZ,x.x>=d&&x.x<=S&&x.y>=_&&x.y<=m&&x!==r&&x!==o&&Lr(a,u,l,f,c,h,x.x,x.y)&&pe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;b&&b.z>=p;){if(b.x>=d&&b.x<=S&&b.y>=_&&b.y<=m&&b!==r&&b!==o&&Lr(a,u,l,f,c,h,b.x,b.y)&&pe(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;x&&x.z<=A;){if(x.x>=d&&x.x<=S&&x.y>=_&&x.y<=m&&x!==r&&x!==o&&Lr(a,u,l,f,c,h,x.x,x.y)&&pe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function y_(n,t){let e=n;do{const i=e.prev,r=e.next.next;!_r(i,r)&&Kh(i,e,e.next,r)&&is(i,r)&&is(r,i)&&(t.push(i.i,e.i,r.i),rs(e),rs(e.next),e=n=r),e=e.next}while(e!==n);return Fi(e)}function E_(n,t,e,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&D_(o,a)){let l=Jh(o,a);o=Fi(o,o.next),l=Fi(l,l.next),ns(o,t,e,i,r,s,0),ns(l,t,e,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function T_(n,t,e,i){const r=[];for(let s=0,o=t.length;s<o;s++){const a=t[s]*i,l=s<o-1?t[s+1]*i:n.length,c=Yh(n,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(L_(c))}r.sort(b_);for(let s=0;s<r.length;s++)e=A_(r[s],e);return e}function b_(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=i-r}return e}function A_(n,t){const e=w_(n,t);if(!e)return t;const i=Jh(e,n);return Fi(i,i.next),Fi(e,e.next)}function w_(n,t){let e=t;const i=n.x,r=n.y;let s=-1/0,o;if(_r(n,e))return e;do{if(_r(n,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=i&&f>s&&(s=f,o=e.x<e.next.x?e:e.next,f===i))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&$h(r<c?i:s,r,l,c,r<c?s:i,r,e.x,e.y)){const f=Math.abs(r-e.y)/(i-e.x);is(e,n)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&R_(o,e)))&&(o=e,u=f)}e=e.next}while(e!==a);return o}function R_(n,t){return pe(n.prev,n,t.prev)<0&&pe(t.next,n,n.next)<0}function C_(n,t,e,i){let r=n;do r.z===0&&(r.z=wl(r.x,r.y,t,e,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,P_(r)}function P_(n){let t,e=1;do{let i=n,r;n=null;let s=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,e*=2}while(t>1);return n}function wl(n,t,e,i,r){return n=(n-e)*r|0,t=(t-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function L_(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function $h(n,t,e,i,r,s,o,a){return(r-o)*(t-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(i-a)}function Lr(n,t,e,i,r,s,o,a){return!(n===o&&t===a)&&$h(n,t,e,i,r,s,o,a)}function D_(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!I_(n,t)&&(is(n,t)&&is(t,n)&&U_(n,t)&&(pe(n.prev,n,t.prev)||pe(n,t.prev,t))||_r(n,t)&&pe(n.prev,n,n.next)>0&&pe(t.prev,t,t.next)>0)}function pe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function _r(n,t){return n.x===t.x&&n.y===t.y}function Kh(n,t,e,i){const r=zs(pe(n,t,e)),s=zs(pe(n,t,i)),o=zs(pe(e,i,n)),a=zs(pe(e,i,t));return!!(r!==s&&o!==a||r===0&&Bs(n,e,t)||s===0&&Bs(n,i,t)||o===0&&Bs(e,n,i)||a===0&&Bs(e,t,i))}function Bs(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function zs(n){return n>0?1:n<0?-1:0}function I_(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Kh(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function is(n,t){return pe(n.prev,n,n.next)<0?pe(n,t,n.next)>=0&&pe(n,n.prev,t)>=0:pe(n,t,n.prev)<0||pe(n,n.next,t)<0}function U_(n,t){let e=n,i=!1;const r=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Jh(n,t){const e=Rl(n.i,n.x,n.y),i=Rl(t.i,t.x,t.y),r=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=r,r.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function Pu(n,t,e,i){const r=Rl(n,t,e);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function rs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Rl(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function N_(n,t,e,i){let r=0;for(let s=t,o=e-i;s<e;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class F_{static triangulate(t,e,i=2){return x_(t,e,i)}}class ir{static area(t){const e=t.length;let i=0;for(let r=e-1,s=0;s<e;r=s++)i+=t[r].x*t[s].y-t[s].x*t[r].y;return i*.5}static isClockWise(t){return ir.area(t)<0}static triangulateShape(t,e){const i=[],r=[],s=[];Lu(t),Du(i,t);let o=t.length;e.forEach(Lu);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,Du(i,e[l]);const a=F_.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Lu(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Du(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class ao extends nn{constructor(t=new Al([new xt(.5,.5),new xt(-.5,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,r=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Pe(r,3)),this.setAttribute("uv",new Pe(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:d-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,A=e.UVGenerator!==void 0?e.UVGenerator:O_;let b,x=!1,I,L,P,O;p&&(b=p.getSpacedPoints(u),x=!0,h=!1,I=p.computeFrenetFrames(u,!1),L=new V,P=new V,O=new V),h||(m=0,d=0,_=0,S=0);const T=a.extractPoints(c);let y=T.shape;const C=T.holes;if(!ir.isClockWise(y)){y=y.reverse();for(let v=0,z=C.length;v<z;v++){const U=C[v];ir.isClockWise(U)&&(C[v]=U.reverse())}}function Y(v){const U=10000000000000001e-36;let B=v[0];for(let F=1;F<=v.length;F++){const J=F%v.length,k=v[J],q=k.x-B.x,at=k.y-B.y,M=q*q+at*at,g=Math.max(Math.abs(k.x),Math.abs(k.y),Math.abs(B.x),Math.abs(B.y)),D=U*g*g;if(M<=D){v.splice(J,1),F--;continue}B=k}}Y(y),C.forEach(Y);const nt=C.length,it=y;for(let v=0;v<nt;v++){const z=C[v];y=y.concat(z)}function Q(v,z,U){return z||console.error("THREE.ExtrudeGeometry: vec does not exist"),v.clone().addScaledVector(z,U)}const et=y.length;function $(v,z,U){let B,F,J;const k=v.x-z.x,q=v.y-z.y,at=U.x-v.x,M=U.y-v.y,g=k*k+q*q,D=k*M-q*at;if(Math.abs(D)>Number.EPSILON){const X=Math.sqrt(g),tt=Math.sqrt(at*at+M*M),K=z.x-q/X,_t=z.y+k/X,ct=U.x-M/tt,St=U.y+at/tt,Tt=((ct-K)*M-(St-_t)*at)/(k*M-q*at);B=K+k*Tt-v.x,F=_t+q*Tt-v.y;const ot=B*B+F*F;if(ot<=2)return new xt(B,F);J=Math.sqrt(ot/2)}else{let X=!1;k>Number.EPSILON?at>Number.EPSILON&&(X=!0):k<-Number.EPSILON?at<-Number.EPSILON&&(X=!0):Math.sign(q)===Math.sign(M)&&(X=!0),X?(B=-q,F=k,J=Math.sqrt(g)):(B=k,F=q,J=Math.sqrt(g/2))}return new xt(B/J,F/J)}const ht=[];for(let v=0,z=it.length,U=z-1,B=v+1;v<z;v++,U++,B++)U===z&&(U=0),B===z&&(B=0),ht[v]=$(it[v],it[U],it[B]);const vt=[];let Et,Nt=ht.concat();for(let v=0,z=nt;v<z;v++){const U=C[v];Et=[];for(let B=0,F=U.length,J=F-1,k=B+1;B<F;B++,J++,k++)J===F&&(J=0),k===F&&(k=0),Et[B]=$(U[B],U[J],U[k]);vt.push(Et),Nt=Nt.concat(Et)}let Yt;if(m===0)Yt=ir.triangulateShape(it,C);else{const v=[],z=[];for(let U=0;U<m;U++){const B=U/m,F=d*Math.cos(B*Math.PI/2),J=_*Math.sin(B*Math.PI/2)+S;for(let k=0,q=it.length;k<q;k++){const at=Q(it[k],ht[k],J);Vt(at.x,at.y,-F),B===0&&v.push(at)}for(let k=0,q=nt;k<q;k++){const at=C[k];Et=vt[k];const M=[];for(let g=0,D=at.length;g<D;g++){const X=Q(at[g],Et[g],J);Vt(X.x,X.y,-F),B===0&&M.push(X)}B===0&&z.push(M)}}Yt=ir.triangulateShape(v,z)}const rt=Yt.length,dt=_+S;for(let v=0;v<et;v++){const z=h?Q(y[v],Nt[v],dt):y[v];x?(P.copy(I.normals[0]).multiplyScalar(z.x),L.copy(I.binormals[0]).multiplyScalar(z.y),O.copy(b[0]).add(P).add(L),Vt(O.x,O.y,O.z)):Vt(z.x,z.y,0)}for(let v=1;v<=u;v++)for(let z=0;z<et;z++){const U=h?Q(y[z],Nt[z],dt):y[z];x?(P.copy(I.normals[v]).multiplyScalar(U.x),L.copy(I.binormals[v]).multiplyScalar(U.y),O.copy(b[v]).add(P).add(L),Vt(O.x,O.y,O.z)):Vt(U.x,U.y,f/u*v)}for(let v=m-1;v>=0;v--){const z=v/m,U=d*Math.cos(z*Math.PI/2),B=_*Math.sin(z*Math.PI/2)+S;for(let F=0,J=it.length;F<J;F++){const k=Q(it[F],ht[F],B);Vt(k.x,k.y,f+U)}for(let F=0,J=C.length;F<J;F++){const k=C[F];Et=vt[F];for(let q=0,at=k.length;q<at;q++){const M=Q(k[q],Et[q],B);x?Vt(M.x,M.y+b[u-1].y,b[u-1].x+U):Vt(M.x,M.y,f+U)}}}wt(),mt();function wt(){const v=r.length/3;if(h){let z=0,U=et*z;for(let B=0;B<rt;B++){const F=Yt[B];Ut(F[2]+U,F[1]+U,F[0]+U)}z=u+m*2,U=et*z;for(let B=0;B<rt;B++){const F=Yt[B];Ut(F[0]+U,F[1]+U,F[2]+U)}}else{for(let z=0;z<rt;z++){const U=Yt[z];Ut(U[2],U[1],U[0])}for(let z=0;z<rt;z++){const U=Yt[z];Ut(U[0]+et*u,U[1]+et*u,U[2]+et*u)}}i.addGroup(v,r.length/3-v,0)}function mt(){const v=r.length/3;let z=0;Pt(it,z),z+=it.length;for(let U=0,B=C.length;U<B;U++){const F=C[U];Pt(F,z),z+=F.length}i.addGroup(v,r.length/3-v,1)}function Pt(v,z){let U=v.length;for(;--U>=0;){const B=U;let F=U-1;F<0&&(F=v.length-1);for(let J=0,k=u+m*2;J<k;J++){const q=et*J,at=et*(J+1),M=z+B+q,g=z+F+q,D=z+F+at,X=z+B+at;se(M,g,D,X)}}}function Vt(v,z,U){l.push(v),l.push(z),l.push(U)}function Ut(v,z,U){w(v),w(z),w(U);const B=r.length/3,F=A.generateTopUV(i,r,B-3,B-2,B-1);R(F[0]),R(F[1]),R(F[2])}function se(v,z,U,B){w(v),w(z),w(B),w(z),w(U),w(B);const F=r.length/3,J=A.generateSideWallUV(i,r,F-6,F-3,F-2,F-1);R(J[0]),R(J[1]),R(J[3]),R(J[1]),R(J[2]),R(J[3])}function w(v){r.push(l[v*3+0]),r.push(l[v*3+1]),r.push(l[v*3+2])}function R(v){s.push(v.x),s.push(v.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return B_(e,i,t)}static fromJSON(t,e){const i=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];i.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new bl[r.type]().fromJSON(r)),new ao(i,t.options)}}const O_={generateTopUV:function(n,t,e,i,r){const s=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[r*3],u=t[r*3+1];return[new xt(s,o),new xt(a,l),new xt(c,u)]},generateSideWallUV:function(n,t,e,i,r,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],u=t[i*3+1],f=t[i*3+2],h=t[r*3],d=t[r*3+1],_=t[r*3+2],S=t[s*3],m=t[s*3+1],p=t[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new xt(o,1-l),new xt(c,1-f),new xt(h,1-_),new xt(S,1-p)]:[new xt(a,1-l),new xt(u,1-f),new xt(d,1-_),new xt(m,1-p)]}};function B_(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class So extends nn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=t/a,h=e/l,d=[],_=[],S=[],m=[];for(let p=0;p<u;p++){const A=p*h-o;for(let b=0;b<c;b++){const x=b*f-s;_.push(x,-A,0),S.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){const b=A+c*p,x=A+c*(p+1),I=A+1+c*(p+1),L=A+1+c*p;d.push(b,x,L),d.push(x,I,L)}this.setIndex(d),this.setAttribute("position",new Pe(_,3)),this.setAttribute("normal",new Pe(S,3)),this.setAttribute("uv",new Pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new So(t.width,t.height,t.widthSegments,t.heightSegments)}}class cc extends nn{constructor(t=.5,e=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let f=t;const h=(e-t)/r,d=new V,_=new xt;for(let S=0;S<=r;S++){for(let m=0;m<=i;m++){const p=s+m/i*o;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),_.x=(d.x/e+1)/2,_.y=(d.y/e+1)/2,u.push(_.x,_.y)}f+=h}for(let S=0;S<r;S++){const m=S*(i+1);for(let p=0;p<i;p++){const A=p+m,b=A,x=A+i+1,I=A+i+2,L=A+1;a.push(b,x,L),a.push(x,I,L)}}this.setIndex(a),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(c,3)),this.setAttribute("uv",new Pe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class uc extends nn{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new V,h=new V,d=[],_=[],S=[],m=[];for(let p=0;p<=i;p++){const A=[],b=p/i;let x=0;p===0&&o===0?x=.5/e:p===i&&l===Math.PI&&(x=-.5/e);for(let I=0;I<=e;I++){const L=I/e;f.x=-t*Math.cos(r+L*s)*Math.sin(o+b*a),f.y=t*Math.cos(o+b*a),f.z=t*Math.sin(r+L*s)*Math.sin(o+b*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),S.push(h.x,h.y,h.z),m.push(L+x,1-b),A.push(c++)}u.push(A)}for(let p=0;p<i;p++)for(let A=0;A<e;A++){const b=u[p][A+1],x=u[p][A],I=u[p+1][A],L=u[p+1][A+1];(p!==0||o>0)&&d.push(b,x,L),(p!==i-1||l<Math.PI)&&d.push(x,I,L)}this.setIndex(d),this.setAttribute("position",new Pe(_,3)),this.setAttribute("normal",new Pe(S,3)),this.setAttribute("uv",new Pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Cl extends Sr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ch,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class z_ extends Sr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class H_ extends Sr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ha={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class V_{constructor(t,e,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],_=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const G_=new V_;class fc{constructor(t){this.manager=t!==void 0?t:G_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}fc.DEFAULT_MATERIAL_NAME="__DEFAULT";const Qi=new WeakMap;class k_ extends fc{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=ha.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let f=Qi.get(o);f===void 0&&(f=[],Qi.set(o,f)),f.push({onLoad:e,onError:r})}return o}const a=ts("img");function l(){u(),e&&e(this);const f=Qi.get(this)||[];for(let h=0;h<f.length;h++){const d=f[h];d.onLoad&&d.onLoad(this)}Qi.delete(this),s.manager.itemEnd(t)}function c(f){u(),r&&r(f),ha.remove(`image:${t}`);const h=Qi.get(this)||[];for(let d=0;d<h.length;d++){const _=h[d];_.onError&&_.onError(f)}Qi.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ha.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}}class W_ extends fc{constructor(t){super(t)}load(t,e,i,r){const s=new Be,o=new k_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},i,r),s}}class Zh extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class X_ extends Zh{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const da=new fe,Iu=new V,Uu=new V;class q_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ac,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Iu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Iu),Uu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Uu),e.updateMatrixWorld(),da.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(da),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(da)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class jh extends zh{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Y_ extends q_{constructor(){super(new jh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nu extends Zh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new Y_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class $_ extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Fu(n,t,e,i){const r=K_(i);switch(e){case Th:return n*t;case Ah:return n*t/r.components*r.byteLength;case nc:return n*t/r.components*r.byteLength;case wh:return n*t*2/r.components*r.byteLength;case ic:return n*t*2/r.components*r.byteLength;case bh:return n*t*3/r.components*r.byteLength;case fn:return n*t*4/r.components*r.byteLength;case rc:return n*t*4/r.components*r.byteLength;case Ys:case $s:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ks:case Js:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ja:case tl:return Math.max(n,16)*Math.max(t,8)/4;case Za:case Qa:return Math.max(n,8)*Math.max(t,8)/2;case el:case nl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case il:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case rl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case sl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ol:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case al:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ll:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case cl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ul:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case fl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case hl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case dl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case pl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ml:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case gl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case _l:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Zs:case vl:case xl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Rh:case Sl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ml:case yl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function K_(n){switch(n){case Tn:case Mh:return{byteLength:1,components:1};case Jr:case yh:case as:return{byteLength:2,components:1};case tc:case ec:return{byteLength:2,components:4};case Ui:case Ql:case zn:return{byteLength:4,components:1};case Eh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qh(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function J_(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){const _=f[h],S=f[d];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++h,f[h]=S)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){const S=f[d];n.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Z_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Q_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ev=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ov=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,av=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_v=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Sv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ev=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Av=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Dv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Iv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Uv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ov=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$v=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ex=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ix=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ox=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ax=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ux=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,px=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ex=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ax=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Px=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ix=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ux=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Nx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ox=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Kx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,i0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,r0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,s0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,o0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,c0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,f0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,m0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,v0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,M0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,b0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,A0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,R0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,C0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:Z_,alphahash_pars_fragment:j_,alphamap_fragment:Q_,alphamap_pars_fragment:tv,alphatest_fragment:ev,alphatest_pars_fragment:nv,aomap_fragment:iv,aomap_pars_fragment:rv,batching_pars_vertex:sv,batching_vertex:ov,begin_vertex:av,beginnormal_vertex:lv,bsdfs:cv,iridescence_fragment:uv,bumpmap_pars_fragment:fv,clipping_planes_fragment:hv,clipping_planes_pars_fragment:dv,clipping_planes_pars_vertex:pv,clipping_planes_vertex:mv,color_fragment:gv,color_pars_fragment:_v,color_pars_vertex:vv,color_vertex:xv,common:Sv,cube_uv_reflection_fragment:Mv,defaultnormal_vertex:yv,displacementmap_pars_vertex:Ev,displacementmap_vertex:Tv,emissivemap_fragment:bv,emissivemap_pars_fragment:Av,colorspace_fragment:wv,colorspace_pars_fragment:Rv,envmap_fragment:Cv,envmap_common_pars_fragment:Pv,envmap_pars_fragment:Lv,envmap_pars_vertex:Dv,envmap_physical_pars_fragment:kv,envmap_vertex:Iv,fog_vertex:Uv,fog_pars_vertex:Nv,fog_fragment:Fv,fog_pars_fragment:Ov,gradientmap_pars_fragment:Bv,lightmap_pars_fragment:zv,lights_lambert_fragment:Hv,lights_lambert_pars_fragment:Vv,lights_pars_begin:Gv,lights_toon_fragment:Wv,lights_toon_pars_fragment:Xv,lights_phong_fragment:qv,lights_phong_pars_fragment:Yv,lights_physical_fragment:$v,lights_physical_pars_fragment:Kv,lights_fragment_begin:Jv,lights_fragment_maps:Zv,lights_fragment_end:jv,logdepthbuf_fragment:Qv,logdepthbuf_pars_fragment:tx,logdepthbuf_pars_vertex:ex,logdepthbuf_vertex:nx,map_fragment:ix,map_pars_fragment:rx,map_particle_fragment:sx,map_particle_pars_fragment:ox,metalnessmap_fragment:ax,metalnessmap_pars_fragment:lx,morphinstance_vertex:cx,morphcolor_vertex:ux,morphnormal_vertex:fx,morphtarget_pars_vertex:hx,morphtarget_vertex:dx,normal_fragment_begin:px,normal_fragment_maps:mx,normal_pars_fragment:gx,normal_pars_vertex:_x,normal_vertex:vx,normalmap_pars_fragment:xx,clearcoat_normal_fragment_begin:Sx,clearcoat_normal_fragment_maps:Mx,clearcoat_pars_fragment:yx,iridescence_pars_fragment:Ex,opaque_fragment:Tx,packing:bx,premultiplied_alpha_fragment:Ax,project_vertex:wx,dithering_fragment:Rx,dithering_pars_fragment:Cx,roughnessmap_fragment:Px,roughnessmap_pars_fragment:Lx,shadowmap_pars_fragment:Dx,shadowmap_pars_vertex:Ix,shadowmap_vertex:Ux,shadowmask_pars_fragment:Nx,skinbase_vertex:Fx,skinning_pars_vertex:Ox,skinning_vertex:Bx,skinnormal_vertex:zx,specularmap_fragment:Hx,specularmap_pars_fragment:Vx,tonemapping_fragment:Gx,tonemapping_pars_fragment:kx,transmission_fragment:Wx,transmission_pars_fragment:Xx,uv_pars_fragment:qx,uv_pars_vertex:Yx,uv_vertex:$x,worldpos_vertex:Kx,background_vert:Jx,background_frag:Zx,backgroundCube_vert:jx,backgroundCube_frag:Qx,cube_vert:t0,cube_frag:e0,depth_vert:n0,depth_frag:i0,distanceRGBA_vert:r0,distanceRGBA_frag:s0,equirect_vert:o0,equirect_frag:a0,linedashed_vert:l0,linedashed_frag:c0,meshbasic_vert:u0,meshbasic_frag:f0,meshlambert_vert:h0,meshlambert_frag:d0,meshmatcap_vert:p0,meshmatcap_frag:m0,meshnormal_vert:g0,meshnormal_frag:_0,meshphong_vert:v0,meshphong_frag:x0,meshphysical_vert:S0,meshphysical_frag:M0,meshtoon_vert:y0,meshtoon_frag:E0,points_vert:T0,points_frag:b0,shadow_vert:A0,shadow_frag:w0,sprite_vert:R0,sprite_frag:C0},gt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},xn={basic:{uniforms:Ie([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Ie([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Ie([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Ie([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Ie([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Ie([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Ie([gt.points,gt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Ie([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Ie([gt.common,gt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Ie([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Ie([gt.sprite,gt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Ie([gt.common,gt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Ie([gt.lights,gt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};xn.physical={uniforms:Ie([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const Hs={r:0,b:0,g:0},Mi=new bn,P0=new fe;function L0(n,t,e,i,r,s,o){const a=new Jt(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function _(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?e:t).get(x)),x}function S(b){let x=!1;const I=_(b);I===null?p(a,l):I&&I.isColor&&(p(I,1),x=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,x){const I=_(x);I&&(I.isCubeTexture||I.mapping===vo)?(u===void 0&&(u=new Ke(new us(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:gr(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,P,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Mi.copy(x.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(P0.makeRotationFromEuler(Mi)),u.material.toneMapped=jt.getTransfer(I.colorSpace)!==ie,(f!==I||h!==I.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=I,h=I.version,d=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new Ke(new So(2,2),new ci({name:"BackgroundMaterial",uniforms:gr(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=jt.getTransfer(I.colorSpace)!==ie,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(f!==I||h!==I.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=I,h=I.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,x){b.getRGB(Hs,Bh(n)),i.buffers.color.setClear(Hs.r,Hs.g,Hs.b,x,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,x=1){a.set(b),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:S,addToRenderList:m,dispose:A}}function D0(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,C,G,Y,nt){let it=!1;const Q=f(Y,G,C);s!==Q&&(s=Q,c(s.object)),it=d(y,Y,G,nt),it&&_(y,Y,G,nt),nt!==null&&t.update(nt,n.ELEMENT_ARRAY_BUFFER),(it||o)&&(o=!1,x(y,C,G,Y),nt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(nt).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function f(y,C,G){const Y=G.wireframe===!0;let nt=i[y.id];nt===void 0&&(nt={},i[y.id]=nt);let it=nt[C.id];it===void 0&&(it={},nt[C.id]=it);let Q=it[Y];return Q===void 0&&(Q=h(l()),it[Y]=Q),Q}function h(y){const C=[],G=[],Y=[];for(let nt=0;nt<e;nt++)C[nt]=0,G[nt]=0,Y[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:G,attributeDivisors:Y,object:y,attributes:{},index:null}}function d(y,C,G,Y){const nt=s.attributes,it=C.attributes;let Q=0;const et=G.getAttributes();for(const $ in et)if(et[$].location>=0){const vt=nt[$];let Et=it[$];if(Et===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(Et=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(Et=y.instanceColor)),vt===void 0||vt.attribute!==Et||Et&&vt.data!==Et.data)return!0;Q++}return s.attributesNum!==Q||s.index!==Y}function _(y,C,G,Y){const nt={},it=C.attributes;let Q=0;const et=G.getAttributes();for(const $ in et)if(et[$].location>=0){let vt=it[$];vt===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(vt=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(vt=y.instanceColor));const Et={};Et.attribute=vt,vt&&vt.data&&(Et.data=vt.data),nt[$]=Et,Q++}s.attributes=nt,s.attributesNum=Q,s.index=Y}function S(){const y=s.newAttributes;for(let C=0,G=y.length;C<G;C++)y[C]=0}function m(y){p(y,0)}function p(y,C){const G=s.newAttributes,Y=s.enabledAttributes,nt=s.attributeDivisors;G[y]=1,Y[y]===0&&(n.enableVertexAttribArray(y),Y[y]=1),nt[y]!==C&&(n.vertexAttribDivisor(y,C),nt[y]=C)}function A(){const y=s.newAttributes,C=s.enabledAttributes;for(let G=0,Y=C.length;G<Y;G++)C[G]!==y[G]&&(n.disableVertexAttribArray(G),C[G]=0)}function b(y,C,G,Y,nt,it,Q){Q===!0?n.vertexAttribIPointer(y,C,G,nt,it):n.vertexAttribPointer(y,C,G,Y,nt,it)}function x(y,C,G,Y){S();const nt=Y.attributes,it=G.getAttributes(),Q=C.defaultAttributeValues;for(const et in it){const $=it[et];if($.location>=0){let ht=nt[et];if(ht===void 0&&(et==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),et==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor)),ht!==void 0){const vt=ht.normalized,Et=ht.itemSize,Nt=t.get(ht);if(Nt===void 0)continue;const Yt=Nt.buffer,rt=Nt.type,dt=Nt.bytesPerElement,wt=rt===n.INT||rt===n.UNSIGNED_INT||ht.gpuType===Ql;if(ht.isInterleavedBufferAttribute){const mt=ht.data,Pt=mt.stride,Vt=ht.offset;if(mt.isInstancedInterleavedBuffer){for(let Ut=0;Ut<$.locationSize;Ut++)p($.location+Ut,mt.meshPerAttribute);y.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Ut=0;Ut<$.locationSize;Ut++)m($.location+Ut);n.bindBuffer(n.ARRAY_BUFFER,Yt);for(let Ut=0;Ut<$.locationSize;Ut++)b($.location+Ut,Et/$.locationSize,rt,vt,Pt*dt,(Vt+Et/$.locationSize*Ut)*dt,wt)}else{if(ht.isInstancedBufferAttribute){for(let mt=0;mt<$.locationSize;mt++)p($.location+mt,ht.meshPerAttribute);y.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let mt=0;mt<$.locationSize;mt++)m($.location+mt);n.bindBuffer(n.ARRAY_BUFFER,Yt);for(let mt=0;mt<$.locationSize;mt++)b($.location+mt,Et/$.locationSize,rt,vt,Et*dt,Et/$.locationSize*mt*dt,wt)}}else if(Q!==void 0){const vt=Q[et];if(vt!==void 0)switch(vt.length){case 2:n.vertexAttrib2fv($.location,vt);break;case 3:n.vertexAttrib3fv($.location,vt);break;case 4:n.vertexAttrib4fv($.location,vt);break;default:n.vertexAttrib1fv($.location,vt)}}}}A()}function I(){O();for(const y in i){const C=i[y];for(const G in C){const Y=C[G];for(const nt in Y)u(Y[nt].object),delete Y[nt];delete C[G]}delete i[y]}}function L(y){if(i[y.id]===void 0)return;const C=i[y.id];for(const G in C){const Y=C[G];for(const nt in Y)u(Y[nt].object),delete Y[nt];delete C[G]}delete i[y.id]}function P(y){for(const C in i){const G=i[C];if(G[y.id]===void 0)continue;const Y=G[y.id];for(const nt in Y)u(Y[nt].object),delete Y[nt];delete G[y.id]}}function O(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:T,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfProgram:P,initAttributes:S,enableAttribute:m,disableUnusedAttributes:A}}function I0(n,t,e){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),e.update(u,i,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let _=0;_<f;_++)d+=u[_];e.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let S=0;S<f;S++)_+=u[S]*h[S];e.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function U0(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==fn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const O=P===as&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Tn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==zn&&!O)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=_>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:I,maxSamples:L}}function N0(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new Ti,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const A=s?0:i,b=A*4;let x=p.clippingState||null;l.value=x,x=u(_,h,b,d);for(let I=0;I!==b;++I)x[I]=e[I];p.clippingState=x,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,d,_){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=l.value,_!==!0||m===null){const p=d+S*4,A=h.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,x=d;b!==S;++b,x+=4)o.copy(f[b]).applyMatrix4(A,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}function F0(n){let t=new WeakMap;function e(o,a){return a===Ya?o.mapping=dr:a===$a&&(o.mapping=pr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ya||a===$a)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Qg(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const rr=4,Ou=[.125,.215,.35,.446,.526,.582],Ci=20,pa=new jh,Bu=new Jt;let ma=null,ga=0,_a=0,va=!1;const bi=(1+Math.sqrt(5))/2,tr=1/bi,zu=[new V(-bi,tr,0),new V(bi,tr,0),new V(-tr,0,bi),new V(tr,0,bi),new V(0,bi,-tr),new V(0,bi,tr),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],O0=new V;class Hu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100,s={}){const{size:o=256,position:a=O0}=s;ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ma,ga,_a),this._renderer.xr.enabled=va,t.scissorTest=!1,Vs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===dr||t.mapping===pr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:as,format:fn,colorSpace:mr,depthBuffer:!1},r=Vu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vu(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=B0(s)),this._blurMaterial=z0(s,t,e)}return r}_compileMaterial(t){const e=new Ke(this._lodPlanes[0],t);this._renderer.compile(e,pa)}_sceneToCubeUV(t,e,i,r,s){const l=new en(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Bu),f.toneMapping=si,f.autoClear=!1;const _=new oc({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),S=new Ke(new us,_);let m=!1;const p=t.background;p?p.isColor&&(_.color.copy(p),t.background=null,m=!0):(_.color.copy(Bu),m=!0);for(let A=0;A<6;A++){const b=A%3;b===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[A],s.y,s.z)):b===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[A]));const x=this._cubeSize;Vs(r,b*x,A>2?x:0,x,x),f.setRenderTarget(r),m&&f.render(S,l),f.render(t,l)}S.geometry.dispose(),S.material.dispose(),f.toneMapping=d,f.autoClear=h,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===dr||t.mapping===pr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ku()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ke(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Vs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,pa)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=zu[(r-s-1)%zu.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ke(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ci-1),S=s/_,m=isFinite(s)?1+Math.floor(u*S):Ci;m>Ci&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ci}`);const p=[];let A=0;for(let P=0;P<Ci;++P){const O=P/S,T=Math.exp(-O*O/2);p.push(T),P===0?A+=T:P<m&&(A+=2*T)}for(let P=0;P<p.length;P++)p[P]=p[P]/A;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:b}=this;h.dTheta.value=_,h.mipInt.value=b-i;const x=this._sizeLods[r],I=3*x*(r>b-rr?r-b+rr:0),L=4*(this._cubeSize-x);Vs(e,I,L,3*x,2*x),l.setRenderTarget(e),l.render(f,pa)}}function B0(n){const t=[],e=[],i=[];let r=n;const s=n-rr+1+Ou.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-rr?l=Ou[o-n+rr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,S=3,m=2,p=1,A=new Float32Array(S*_*d),b=new Float32Array(m*_*d),x=new Float32Array(p*_*d);for(let L=0;L<d;L++){const P=L%3*2/3-1,O=L>2?0:-1,T=[P,O,0,P+2/3,O,0,P+2/3,O+1,0,P,O,0,P+2/3,O+1,0,P,O+1,0];A.set(T,S*_*L),b.set(h,m*_*L);const y=[L,L,L,L,L,L];x.set(y,p*_*L)}const I=new nn;I.setAttribute("position",new En(A,S)),I.setAttribute("uv",new En(b,m)),I.setAttribute("faceIndex",new En(x,p)),t.push(I),r>rr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Vu(n,t,e){const i=new Ni(n,t,e);return i.texture.mapping=vo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vs(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function z0(n,t,e){const i=new Float32Array(Ci),r=new V(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Gu(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function ku(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function hc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function H0(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ya||l===$a,u=l===dr||l===pr;if(c||u){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new Hu(n)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(e===null&&(e=new Hu(n)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function V0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&ur("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function G0(n,t,e,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(t.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)t.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,_=f.attributes.position;let S=0;if(d!==null){const A=d.array;S=d.version;for(let b=0,x=A.length;b<x;b+=3){const I=A[b+0],L=A[b+1],P=A[b+2];h.push(I,L,L,P,P,I)}}else if(_!==void 0){const A=_.array;S=_.version;for(let b=0,x=A.length/3-1;b<x;b+=3){const I=b+0,L=b+1,P=b+2;h.push(I,L,L,P,P,I)}}else return;const m=new(Lh(h)?Oh:Fh)(h,1);m.version=S;const p=s.get(f);p&&t.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function k0(n,t,e){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*o),e.update(d,i,1)}function c(h,d,_){_!==0&&(n.drawElementsInstanced(i,d,s,h*o,_),e.update(d,i,_))}function u(h,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];e.update(m,i,1)}function f(h,d,_,S){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],S[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,S,0,_);let p=0;for(let A=0;A<_;A++)p+=d[A]*S[A];e.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function W0(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function X0(n,t,e){const i=new WeakMap,r=new ge;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let y=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var d=y;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),S===!0&&(x=2),m===!0&&(x=3);let I=a.attributes.position.count*x,L=1;I>t.maxTextureSize&&(L=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const P=new Float32Array(I*L*4*f),O=new Dh(P,I,L,f);O.type=zn,O.needsUpdate=!0;const T=x*4;for(let C=0;C<f;C++){const G=p[C],Y=A[C],nt=b[C],it=I*L*4*C;for(let Q=0;Q<G.count;Q++){const et=Q*T;_===!0&&(r.fromBufferAttribute(G,Q),P[it+et+0]=r.x,P[it+et+1]=r.y,P[it+et+2]=r.z,P[it+et+3]=0),S===!0&&(r.fromBufferAttribute(Y,Q),P[it+et+4]=r.x,P[it+et+5]=r.y,P[it+et+6]=r.z,P[it+et+7]=0),m===!0&&(r.fromBufferAttribute(nt,Q),P[it+et+8]=r.x,P[it+et+9]=r.y,P[it+et+10]=r.z,P[it+et+11]=nt.itemSize===4?r.w:1)}}h={count:f,texture:O,size:new xt(I,L)},i.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const S=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",S),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function q0(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const td=new Be,Wu=new Gh(1,1),ed=new Dh,nd=new Fg,id=new Hh,Xu=[],qu=[],Yu=new Float32Array(16),$u=new Float32Array(9),Ku=new Float32Array(4);function Mr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Xu[r];if(s===void 0&&(s=new Float32Array(r),Xu[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function xe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Se(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Mo(n,t){let e=qu[t];e===void 0&&(e=new Int32Array(t),qu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Y0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function $0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;n.uniform2fv(this.addr,t),Se(e,t)}}function K0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;n.uniform3fv(this.addr,t),Se(e,t)}}function J0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;n.uniform4fv(this.addr,t),Se(e,t)}}function Z0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(xe(e,i))return;Ku.set(i),n.uniformMatrix2fv(this.addr,!1,Ku),Se(e,i)}}function j0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(xe(e,i))return;$u.set(i),n.uniformMatrix3fv(this.addr,!1,$u),Se(e,i)}}function Q0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(xe(e,i))return;Yu.set(i),n.uniformMatrix4fv(this.addr,!1,Yu),Se(e,i)}}function tS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function eS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;n.uniform2iv(this.addr,t),Se(e,t)}}function nS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;n.uniform3iv(this.addr,t),Se(e,t)}}function iS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;n.uniform4iv(this.addr,t),Se(e,t)}}function rS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function sS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;n.uniform2uiv(this.addr,t),Se(e,t)}}function oS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;n.uniform3uiv(this.addr,t),Se(e,t)}}function aS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;n.uniform4uiv(this.addr,t),Se(e,t)}}function lS(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Wu.compareFunction=Ph,s=Wu):s=td,e.setTexture2D(t||s,r)}function cS(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||nd,r)}function uS(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||id,r)}function fS(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||ed,r)}function hS(n){switch(n){case 5126:return Y0;case 35664:return $0;case 35665:return K0;case 35666:return J0;case 35674:return Z0;case 35675:return j0;case 35676:return Q0;case 5124:case 35670:return tS;case 35667:case 35671:return eS;case 35668:case 35672:return nS;case 35669:case 35673:return iS;case 5125:return rS;case 36294:return sS;case 36295:return oS;case 36296:return aS;case 35678:case 36198:case 36298:case 36306:case 35682:return lS;case 35679:case 36299:case 36307:return cS;case 35680:case 36300:case 36308:case 36293:return uS;case 36289:case 36303:case 36311:case 36292:return fS}}function dS(n,t){n.uniform1fv(this.addr,t)}function pS(n,t){const e=Mr(t,this.size,2);n.uniform2fv(this.addr,e)}function mS(n,t){const e=Mr(t,this.size,3);n.uniform3fv(this.addr,e)}function gS(n,t){const e=Mr(t,this.size,4);n.uniform4fv(this.addr,e)}function _S(n,t){const e=Mr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function vS(n,t){const e=Mr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function xS(n,t){const e=Mr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function SS(n,t){n.uniform1iv(this.addr,t)}function MS(n,t){n.uniform2iv(this.addr,t)}function yS(n,t){n.uniform3iv(this.addr,t)}function ES(n,t){n.uniform4iv(this.addr,t)}function TS(n,t){n.uniform1uiv(this.addr,t)}function bS(n,t){n.uniform2uiv(this.addr,t)}function AS(n,t){n.uniform3uiv(this.addr,t)}function wS(n,t){n.uniform4uiv(this.addr,t)}function RS(n,t,e){const i=this.cache,r=t.length,s=Mo(e,r);xe(i,s)||(n.uniform1iv(this.addr,s),Se(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||td,s[o])}function CS(n,t,e){const i=this.cache,r=t.length,s=Mo(e,r);xe(i,s)||(n.uniform1iv(this.addr,s),Se(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||nd,s[o])}function PS(n,t,e){const i=this.cache,r=t.length,s=Mo(e,r);xe(i,s)||(n.uniform1iv(this.addr,s),Se(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||id,s[o])}function LS(n,t,e){const i=this.cache,r=t.length,s=Mo(e,r);xe(i,s)||(n.uniform1iv(this.addr,s),Se(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||ed,s[o])}function DS(n){switch(n){case 5126:return dS;case 35664:return pS;case 35665:return mS;case 35666:return gS;case 35674:return _S;case 35675:return vS;case 35676:return xS;case 5124:case 35670:return SS;case 35667:case 35671:return MS;case 35668:case 35672:return yS;case 35669:case 35673:return ES;case 5125:return TS;case 36294:return bS;case 36295:return AS;case 36296:return wS;case 35678:case 36198:case 36298:case 36306:case 35682:return RS;case 35679:case 36299:case 36307:return CS;case 35680:case 36300:case 36308:case 36293:return PS;case 36289:case 36303:case 36311:case 36292:return LS}}class IS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=hS(e.type)}}class US{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=DS(e.type)}}class NS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const xa=/(\w+)(\])?(\[|\.)?/g;function Ju(n,t){n.seq.push(t),n.map[t.id]=t}function FS(n,t,e){const i=n.name,r=i.length;for(xa.lastIndex=0;;){const s=xa.exec(i),o=xa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ju(e,c===void 0?new IS(a,n,t):new US(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new NS(a),Ju(e,f)),e=f}}}class js{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);FS(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function Zu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const OS=37297;let BS=0;function zS(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const ju=new Xt;function HS(n){jt._getMatrix(ju,jt.workingColorSpace,n);const t=`mat3( ${ju.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(n)){case so:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Qu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+zS(n.getShaderSource(t),o)}else return r}function VS(n,t){const e=HS(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function GS(n,t){let e;switch(t){case lg:e="Linear";break;case cg:e="Reinhard";break;case ug:e="Cineon";break;case fg:e="ACESFilmic";break;case dg:e="AgX";break;case pg:e="Neutral";break;case hg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Gs=new V;function kS(){jt.getLuminanceCoefficients(Gs);const n=Gs.x.toFixed(4),t=Gs.y.toFixed(4),e=Gs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dr).join(`
`)}function XS(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function qS(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Dr(n){return n!==""}function tf(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ef(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const YS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pl(n){return n.replace(YS,KS)}const $S=new Map;function KS(n,t){let e=qt[t];if(e===void 0){const i=$S.get(t);if(i!==void 0)e=qt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Pl(e)}const JS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nf(n){return n.replace(JS,ZS)}function ZS(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function rf(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function jS(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Vm?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Nn&&(t="SHADOWMAP_TYPE_VSM"),t}function QS(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case dr:case pr:t="ENVMAP_TYPE_CUBE";break;case vo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function tM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case pr:t="ENVMAP_MODE_REFRACTION";break}return t}function eM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case xh:t="ENVMAP_BLENDING_MULTIPLY";break;case og:t="ENVMAP_BLENDING_MIX";break;case ag:t="ENVMAP_BLENDING_ADD";break}return t}function nM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function iM(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=jS(e),c=QS(e),u=tM(e),f=eM(e),h=nM(e),d=WS(e),_=XS(s),S=r.createProgram();let m,p,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Dr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Dr).join(`
`),p.length>0&&(p+=`
`)):(m=[rf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),p=[rf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?qt.tonemapping_pars_fragment:"",e.toneMapping!==si?GS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,VS("linearToOutputTexel",e.outputColorSpace),kS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Dr).join(`
`)),o=Pl(o),o=tf(o,e),o=ef(o,e),a=Pl(a),a=tf(a,e),a=ef(a,e),o=nf(o),a=nf(a),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=A+m+o,x=A+p+a,I=Zu(r,r.VERTEX_SHADER,b),L=Zu(r,r.FRAGMENT_SHADER,x);r.attachShader(S,I),r.attachShader(S,L),e.index0AttributeName!==void 0?r.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function P(C){if(n.debug.checkShaderErrors){const G=r.getProgramInfoLog(S).trim(),Y=r.getShaderInfoLog(I).trim(),nt=r.getShaderInfoLog(L).trim();let it=!0,Q=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(it=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,I,L);else{const et=Qu(r,I,"vertex"),$=Qu(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+G+`
`+et+`
`+$)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(Y===""||nt==="")&&(Q=!1);Q&&(C.diagnostics={runnable:it,programLog:G,vertexShader:{log:Y,prefix:m},fragmentShader:{log:nt,prefix:p}})}r.deleteShader(I),r.deleteShader(L),O=new js(r,S),T=qS(r,S)}let O;this.getUniforms=function(){return O===void 0&&P(this),O};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(S,OS)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=BS++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=I,this.fragmentShader=L,this}let rM=0;class sM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new oM(t),e.set(t,i)),i}}class oM{constructor(t){this.id=rM++,this.code=t,this.usedTimes=0}}function aM(n,t,e,i,r,s,o){const a=new Uh,l=new sM,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,y,C,G,Y){const nt=G.fog,it=Y.geometry,Q=T.isMeshStandardMaterial?G.environment:null,et=(T.isMeshStandardMaterial?e:t).get(T.envMap||Q),$=et&&et.mapping===vo?et.image.height:null,ht=_[T.type];T.precision!==null&&(d=r.getMaxPrecision(T.precision),d!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));const vt=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,Et=vt!==void 0?vt.length:0;let Nt=0;it.morphAttributes.position!==void 0&&(Nt=1),it.morphAttributes.normal!==void 0&&(Nt=2),it.morphAttributes.color!==void 0&&(Nt=3);let Yt,rt,dt,wt;if(ht){const ee=xn[ht];Yt=ee.vertexShader,rt=ee.fragmentShader}else Yt=T.vertexShader,rt=T.fragmentShader,l.update(T),dt=l.getVertexShaderID(T),wt=l.getFragmentShaderID(T);const mt=n.getRenderTarget(),Pt=n.state.buffers.depth.getReversed(),Vt=Y.isInstancedMesh===!0,Ut=Y.isBatchedMesh===!0,se=!!T.map,w=!!T.matcap,R=!!et,v=!!T.aoMap,z=!!T.lightMap,U=!!T.bumpMap,B=!!T.normalMap,F=!!T.displacementMap,J=!!T.emissiveMap,k=!!T.metalnessMap,q=!!T.roughnessMap,at=T.anisotropy>0,M=T.clearcoat>0,g=T.dispersion>0,D=T.iridescence>0,X=T.sheen>0,tt=T.transmission>0,K=at&&!!T.anisotropyMap,_t=M&&!!T.clearcoatMap,ct=M&&!!T.clearcoatNormalMap,St=M&&!!T.clearcoatRoughnessMap,Tt=D&&!!T.iridescenceMap,ot=D&&!!T.iridescenceThicknessMap,bt=X&&!!T.sheenColorMap,Ct=X&&!!T.sheenRoughnessMap,Lt=!!T.specularMap,pt=!!T.specularColorMap,Gt=!!T.specularIntensityMap,N=tt&&!!T.transmissionMap,Mt=tt&&!!T.thicknessMap,lt=!!T.gradientMap,Rt=!!T.alphaMap,ut=T.alphaTest>0,st=!!T.alphaHash,Dt=!!T.extensions;let kt=si;T.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(kt=n.toneMapping);const le={shaderID:ht,shaderType:T.type,shaderName:T.name,vertexShader:Yt,fragmentShader:rt,defines:T.defines,customVertexShaderID:dt,customFragmentShaderID:wt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,batching:Ut,batchingColor:Ut&&Y._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&Y.instanceColor!==null,instancingMorph:Vt&&Y.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:mt===null?n.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:mr,alphaToCoverage:!!T.alphaToCoverage,map:se,matcap:w,envMap:R,envMapMode:R&&et.mapping,envMapCubeUVHeight:$,aoMap:v,lightMap:z,bumpMap:U,normalMap:B,displacementMap:h&&F,emissiveMap:J,normalMapObjectSpace:B&&T.normalMapType===vg,normalMapTangentSpace:B&&T.normalMapType===Ch,metalnessMap:k,roughnessMap:q,anisotropy:at,anisotropyMap:K,clearcoat:M,clearcoatMap:_t,clearcoatNormalMap:ct,clearcoatRoughnessMap:St,dispersion:g,iridescence:D,iridescenceMap:Tt,iridescenceThicknessMap:ot,sheen:X,sheenColorMap:bt,sheenRoughnessMap:Ct,specularMap:Lt,specularColorMap:pt,specularIntensityMap:Gt,transmission:tt,transmissionMap:N,thicknessMap:Mt,gradientMap:lt,opaque:T.transparent===!1&&T.blending===cr&&T.alphaToCoverage===!1,alphaMap:Rt,alphaTest:ut,alphaHash:st,combine:T.combine,mapUv:se&&S(T.map.channel),aoMapUv:v&&S(T.aoMap.channel),lightMapUv:z&&S(T.lightMap.channel),bumpMapUv:U&&S(T.bumpMap.channel),normalMapUv:B&&S(T.normalMap.channel),displacementMapUv:F&&S(T.displacementMap.channel),emissiveMapUv:J&&S(T.emissiveMap.channel),metalnessMapUv:k&&S(T.metalnessMap.channel),roughnessMapUv:q&&S(T.roughnessMap.channel),anisotropyMapUv:K&&S(T.anisotropyMap.channel),clearcoatMapUv:_t&&S(T.clearcoatMap.channel),clearcoatNormalMapUv:ct&&S(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&S(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&S(T.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&S(T.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&S(T.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&S(T.sheenRoughnessMap.channel),specularMapUv:Lt&&S(T.specularMap.channel),specularColorMapUv:pt&&S(T.specularColorMap.channel),specularIntensityMapUv:Gt&&S(T.specularIntensityMap.channel),transmissionMapUv:N&&S(T.transmissionMap.channel),thicknessMapUv:Mt&&S(T.thicknessMap.channel),alphaMapUv:Rt&&S(T.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&(B||at),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!it.attributes.uv&&(se||Rt),fog:!!nt,useFog:T.fog===!0,fogExp2:!!nt&&nt.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Pt,skinning:Y.isSkinnedMesh===!0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Nt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:kt,decodeVideoTexture:se&&T.map.isVideoTexture===!0&&jt.getTransfer(T.map.colorSpace)===ie,decodeVideoTextureEmissive:J&&T.emissiveMap.isVideoTexture===!0&&jt.getTransfer(T.emissiveMap.colorSpace)===ie,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Bn,flipSided:T.side===Ge,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Dt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&T.extensions.multiDraw===!0||Ut)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return le.vertexUv1s=c.has(1),le.vertexUv2s=c.has(2),le.vertexUv3s=c.has(3),c.clear(),le}function p(T){const y=[];if(T.shaderID?y.push(T.shaderID):(y.push(T.customVertexShaderID),y.push(T.customFragmentShaderID)),T.defines!==void 0)for(const C in T.defines)y.push(C),y.push(T.defines[C]);return T.isRawShaderMaterial===!1&&(A(y,T),b(y,T),y.push(n.outputColorSpace)),y.push(T.customProgramCacheKey),y.join()}function A(T,y){T.push(y.precision),T.push(y.outputColorSpace),T.push(y.envMapMode),T.push(y.envMapCubeUVHeight),T.push(y.mapUv),T.push(y.alphaMapUv),T.push(y.lightMapUv),T.push(y.aoMapUv),T.push(y.bumpMapUv),T.push(y.normalMapUv),T.push(y.displacementMapUv),T.push(y.emissiveMapUv),T.push(y.metalnessMapUv),T.push(y.roughnessMapUv),T.push(y.anisotropyMapUv),T.push(y.clearcoatMapUv),T.push(y.clearcoatNormalMapUv),T.push(y.clearcoatRoughnessMapUv),T.push(y.iridescenceMapUv),T.push(y.iridescenceThicknessMapUv),T.push(y.sheenColorMapUv),T.push(y.sheenRoughnessMapUv),T.push(y.specularMapUv),T.push(y.specularColorMapUv),T.push(y.specularIntensityMapUv),T.push(y.transmissionMapUv),T.push(y.thicknessMapUv),T.push(y.combine),T.push(y.fogExp2),T.push(y.sizeAttenuation),T.push(y.morphTargetsCount),T.push(y.morphAttributeCount),T.push(y.numDirLights),T.push(y.numPointLights),T.push(y.numSpotLights),T.push(y.numSpotLightMaps),T.push(y.numHemiLights),T.push(y.numRectAreaLights),T.push(y.numDirLightShadows),T.push(y.numPointLightShadows),T.push(y.numSpotLightShadows),T.push(y.numSpotLightShadowsWithMaps),T.push(y.numLightProbes),T.push(y.shadowMapType),T.push(y.toneMapping),T.push(y.numClippingPlanes),T.push(y.numClipIntersection),T.push(y.depthPacking)}function b(T,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),T.push(a.mask)}function x(T){const y=_[T.type];let C;if(y){const G=xn[y];C=Kg.clone(G.uniforms)}else C=T.uniforms;return C}function I(T,y){let C;for(let G=0,Y=u.length;G<Y;G++){const nt=u[G];if(nt.cacheKey===y){C=nt,++C.usedTimes;break}}return C===void 0&&(C=new iM(n,y,T,s),u.push(C)),C}function L(T){if(--T.usedTimes===0){const y=u.indexOf(T);u[y]=u[u.length-1],u.pop(),T.destroy()}}function P(T){l.remove(T)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:I,releaseProgram:L,releaseShaderCache:P,programs:u,dispose:O}}function lM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function cM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function sf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function of(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(f,h,d,_,S,m){let p=n[t];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:S,group:m},n[t]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=S,p.group=m),t++,p}function a(f,h,d,_,S,m){const p=o(f,h,d,_,S,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):e.push(p)}function l(f,h,d,_,S,m){const p=o(f,h,d,_,S,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function c(f,h){e.length>1&&e.sort(f||cM),i.length>1&&i.sort(h||sf),r.length>1&&r.sort(h||sf)}function u(){for(let f=t,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function uM(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new of,n.set(i,[o])):r>=s.length?(o=new of,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function fM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new Jt};break;case"SpotLight":e={position:new V,direction:new V,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new V,halfWidth:new V,halfHeight:new V};break}return n[t.id]=e,e}}}function hM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let dM=0;function pM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function mM(n){const t=new fM,e=hM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const r=new V,s=new fe,o=new fe;function a(c){let u=0,f=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let d=0,_=0,S=0,m=0,p=0,A=0,b=0,x=0,I=0,L=0,P=0;c.sort(pM);for(let T=0,y=c.length;T<y;T++){const C=c[T],G=C.color,Y=C.intensity,nt=C.distance,it=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=G.r*Y,f+=G.g*Y,h+=G.b*Y;else if(C.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(C.sh.coefficients[Q],Y);P++}else if(C.isDirectionalLight){const Q=t.get(C);if(Q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const et=C.shadow,$=e.get(C);$.shadowIntensity=et.intensity,$.shadowBias=et.bias,$.shadowNormalBias=et.normalBias,$.shadowRadius=et.radius,$.shadowMapSize=et.mapSize,i.directionalShadow[d]=$,i.directionalShadowMap[d]=it,i.directionalShadowMatrix[d]=C.shadow.matrix,A++}i.directional[d]=Q,d++}else if(C.isSpotLight){const Q=t.get(C);Q.position.setFromMatrixPosition(C.matrixWorld),Q.color.copy(G).multiplyScalar(Y),Q.distance=nt,Q.coneCos=Math.cos(C.angle),Q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Q.decay=C.decay,i.spot[S]=Q;const et=C.shadow;if(C.map&&(i.spotLightMap[I]=C.map,I++,et.updateMatrices(C),C.castShadow&&L++),i.spotLightMatrix[S]=et.matrix,C.castShadow){const $=e.get(C);$.shadowIntensity=et.intensity,$.shadowBias=et.bias,$.shadowNormalBias=et.normalBias,$.shadowRadius=et.radius,$.shadowMapSize=et.mapSize,i.spotShadow[S]=$,i.spotShadowMap[S]=it,x++}S++}else if(C.isRectAreaLight){const Q=t.get(C);Q.color.copy(G).multiplyScalar(Y),Q.halfWidth.set(C.width*.5,0,0),Q.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=Q,m++}else if(C.isPointLight){const Q=t.get(C);if(Q.color.copy(C.color).multiplyScalar(C.intensity),Q.distance=C.distance,Q.decay=C.decay,C.castShadow){const et=C.shadow,$=e.get(C);$.shadowIntensity=et.intensity,$.shadowBias=et.bias,$.shadowNormalBias=et.normalBias,$.shadowRadius=et.radius,$.shadowMapSize=et.mapSize,$.shadowCameraNear=et.camera.near,$.shadowCameraFar=et.camera.far,i.pointShadow[_]=$,i.pointShadowMap[_]=it,i.pointShadowMatrix[_]=C.shadow.matrix,b++}i.point[_]=Q,_++}else if(C.isHemisphereLight){const Q=t.get(C);Q.skyColor.copy(C.color).multiplyScalar(Y),Q.groundColor.copy(C.groundColor).multiplyScalar(Y),i.hemi[p]=Q,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const O=i.hash;(O.directionalLength!==d||O.pointLength!==_||O.spotLength!==S||O.rectAreaLength!==m||O.hemiLength!==p||O.numDirectionalShadows!==A||O.numPointShadows!==b||O.numSpotShadows!==x||O.numSpotMaps!==I||O.numLightProbes!==P)&&(i.directional.length=d,i.spot.length=S,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=x+I-L,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=P,O.directionalLength=d,O.pointLength=_,O.spotLength=S,O.rectAreaLength=m,O.hemiLength=p,O.numDirectionalShadows=A,O.numPointShadows=b,O.numSpotShadows=x,O.numSpotMaps=I,O.numLightProbes=P,i.version=dM++)}function l(c,u){let f=0,h=0,d=0,_=0,S=0;const m=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const b=c[p];if(b.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(b.isSpotLight){const x=i.spot[d];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(b.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){const x=i.hemi[S];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),S++}}}return{setup:a,setupView:l,state:i}}function af(n){const t=new mM(n),e=[],i=[];function r(u){c.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function gM(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new af(n),t.set(r,[a])):s>=o.length?(a=new af(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const _M=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xM(n,t,e){let i=new ac;const r=new xt,s=new xt,o=new ge,a=new z_({depthPacking:_g}),l=new H_,c={},u=e.maxTextureSize,f={[li]:Ge,[Ge]:li,[Bn]:Bn},h=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:_M,fragmentShader:vM}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new nn;_.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Ke(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vh;let p=this.type;this.render=function(L,P,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const T=n.getRenderTarget(),y=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),G=n.state;G.setBlending(ri),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const Y=p!==Nn&&this.type===Nn,nt=p===Nn&&this.type!==Nn;for(let it=0,Q=L.length;it<Q;it++){const et=L[it],$=et.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const ht=$.getFrameExtents();if(r.multiply(ht),s.copy($.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ht.x),r.x=s.x*ht.x,$.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ht.y),r.y=s.y*ht.y,$.mapSize.y=s.y)),$.map===null||Y===!0||nt===!0){const Et=this.type!==Nn?{minFilter:pn,magFilter:pn}:{};$.map!==null&&$.map.dispose(),$.map=new Ni(r.x,r.y,Et),$.map.texture.name=et.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const vt=$.getViewportCount();for(let Et=0;Et<vt;Et++){const Nt=$.getViewport(Et);o.set(s.x*Nt.x,s.y*Nt.y,s.x*Nt.z,s.y*Nt.w),G.viewport(o),$.updateMatrices(et,Et),i=$.getFrustum(),x(P,O,$.camera,et,this.type)}$.isPointLightShadow!==!0&&this.type===Nn&&A($,O),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,y,C)};function A(L,P){const O=t.update(S);h.defines.VSM_SAMPLES!==L.blurSamples&&(h.defines.VSM_SAMPLES=L.blurSamples,d.defines.VSM_SAMPLES=L.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Ni(r.x,r.y)),h.uniforms.shadow_pass.value=L.map.texture,h.uniforms.resolution.value=L.mapSize,h.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(P,null,O,h,S,null),d.uniforms.shadow_pass.value=L.mapPass.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(P,null,O,d,S,null)}function b(L,P,O,T){let y=null;const C=O.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(C!==void 0)y=C;else if(y=O.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const G=y.uuid,Y=P.uuid;let nt=c[G];nt===void 0&&(nt={},c[G]=nt);let it=nt[Y];it===void 0&&(it=y.clone(),nt[Y]=it,P.addEventListener("dispose",I)),y=it}if(y.visible=P.visible,y.wireframe=P.wireframe,T===Nn?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:f[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,O.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const G=n.properties.get(y);G.light=O}return y}function x(L,P,O,T,y){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&y===Nn)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,L.matrixWorld);const Y=t.update(L),nt=L.material;if(Array.isArray(nt)){const it=Y.groups;for(let Q=0,et=it.length;Q<et;Q++){const $=it[Q],ht=nt[$.materialIndex];if(ht&&ht.visible){const vt=b(L,ht,T,y);L.onBeforeShadow(n,L,P,O,Y,vt,$),n.renderBufferDirect(O,null,Y,vt,L,$),L.onAfterShadow(n,L,P,O,Y,vt,$)}}}else if(nt.visible){const it=b(L,nt,T,y);L.onBeforeShadow(n,L,P,O,Y,it,null),n.renderBufferDirect(O,null,Y,it,L,null),L.onAfterShadow(n,L,P,O,Y,it,null)}}const G=L.children;for(let Y=0,nt=G.length;Y<nt;Y++)x(G[Y],P,O,T,y)}function I(L){L.target.removeEventListener("dispose",I);for(const O in c){const T=c[O],y=L.target.uuid;y in T&&(T[y].dispose(),delete T[y])}}}const SM={[Ha]:Va,[Ga]:Xa,[ka]:qa,[hr]:Wa,[Va]:Ha,[Xa]:Ga,[qa]:ka,[Wa]:hr};function MM(n,t){function e(){let N=!1;const Mt=new ge;let lt=null;const Rt=new ge(0,0,0,0);return{setMask:function(ut){lt!==ut&&!N&&(n.colorMask(ut,ut,ut,ut),lt=ut)},setLocked:function(ut){N=ut},setClear:function(ut,st,Dt,kt,le){le===!0&&(ut*=kt,st*=kt,Dt*=kt),Mt.set(ut,st,Dt,kt),Rt.equals(Mt)===!1&&(n.clearColor(ut,st,Dt,kt),Rt.copy(Mt))},reset:function(){N=!1,lt=null,Rt.set(-1,0,0,0)}}}function i(){let N=!1,Mt=!1,lt=null,Rt=null,ut=null;return{setReversed:function(st){if(Mt!==st){const Dt=t.get("EXT_clip_control");st?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),Mt=st;const kt=ut;ut=null,this.setClear(kt)}},getReversed:function(){return Mt},setTest:function(st){st?mt(n.DEPTH_TEST):Pt(n.DEPTH_TEST)},setMask:function(st){lt!==st&&!N&&(n.depthMask(st),lt=st)},setFunc:function(st){if(Mt&&(st=SM[st]),Rt!==st){switch(st){case Ha:n.depthFunc(n.NEVER);break;case Va:n.depthFunc(n.ALWAYS);break;case Ga:n.depthFunc(n.LESS);break;case hr:n.depthFunc(n.LEQUAL);break;case ka:n.depthFunc(n.EQUAL);break;case Wa:n.depthFunc(n.GEQUAL);break;case Xa:n.depthFunc(n.GREATER);break;case qa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Rt=st}},setLocked:function(st){N=st},setClear:function(st){ut!==st&&(Mt&&(st=1-st),n.clearDepth(st),ut=st)},reset:function(){N=!1,lt=null,Rt=null,ut=null,Mt=!1}}}function r(){let N=!1,Mt=null,lt=null,Rt=null,ut=null,st=null,Dt=null,kt=null,le=null;return{setTest:function(ee){N||(ee?mt(n.STENCIL_TEST):Pt(n.STENCIL_TEST))},setMask:function(ee){Mt!==ee&&!N&&(n.stencilMask(ee),Mt=ee)},setFunc:function(ee,rn,wn){(lt!==ee||Rt!==rn||ut!==wn)&&(n.stencilFunc(ee,rn,wn),lt=ee,Rt=rn,ut=wn)},setOp:function(ee,rn,wn){(st!==ee||Dt!==rn||kt!==wn)&&(n.stencilOp(ee,rn,wn),st=ee,Dt=rn,kt=wn)},setLocked:function(ee){N=ee},setClear:function(ee){le!==ee&&(n.clearStencil(ee),le=ee)},reset:function(){N=!1,Mt=null,lt=null,Rt=null,ut=null,st=null,Dt=null,kt=null,le=null}}}const s=new e,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],_=null,S=!1,m=null,p=null,A=null,b=null,x=null,I=null,L=null,P=new Jt(0,0,0),O=0,T=!1,y=null,C=null,G=null,Y=null,nt=null;const it=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,et=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec($)[1]),Q=et>=1):$.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Q=et>=2);let ht=null,vt={};const Et=n.getParameter(n.SCISSOR_BOX),Nt=n.getParameter(n.VIEWPORT),Yt=new ge().fromArray(Et),rt=new ge().fromArray(Nt);function dt(N,Mt,lt,Rt){const ut=new Uint8Array(4),st=n.createTexture();n.bindTexture(N,st),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Dt=0;Dt<lt;Dt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(Mt,0,n.RGBA,1,1,Rt,0,n.RGBA,n.UNSIGNED_BYTE,ut):n.texImage2D(Mt+Dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ut);return st}const wt={};wt[n.TEXTURE_2D]=dt(n.TEXTURE_2D,n.TEXTURE_2D,1),wt[n.TEXTURE_CUBE_MAP]=dt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[n.TEXTURE_2D_ARRAY]=dt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),wt[n.TEXTURE_3D]=dt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),mt(n.DEPTH_TEST),o.setFunc(hr),U(!1),B(nu),mt(n.CULL_FACE),v(ri);function mt(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function Pt(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function Vt(N,Mt){return f[N]!==Mt?(n.bindFramebuffer(N,Mt),f[N]=Mt,N===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Mt),N===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Ut(N,Mt){let lt=d,Rt=!1;if(N){lt=h.get(Mt),lt===void 0&&(lt=[],h.set(Mt,lt));const ut=N.textures;if(lt.length!==ut.length||lt[0]!==n.COLOR_ATTACHMENT0){for(let st=0,Dt=ut.length;st<Dt;st++)lt[st]=n.COLOR_ATTACHMENT0+st;lt.length=ut.length,Rt=!0}}else lt[0]!==n.BACK&&(lt[0]=n.BACK,Rt=!0);Rt&&n.drawBuffers(lt)}function se(N){return _!==N?(n.useProgram(N),_=N,!0):!1}const w={[Ri]:n.FUNC_ADD,[km]:n.FUNC_SUBTRACT,[Wm]:n.FUNC_REVERSE_SUBTRACT};w[Xm]=n.MIN,w[qm]=n.MAX;const R={[Ym]:n.ZERO,[$m]:n.ONE,[Km]:n.SRC_COLOR,[Ba]:n.SRC_ALPHA,[eg]:n.SRC_ALPHA_SATURATE,[Qm]:n.DST_COLOR,[Zm]:n.DST_ALPHA,[Jm]:n.ONE_MINUS_SRC_COLOR,[za]:n.ONE_MINUS_SRC_ALPHA,[tg]:n.ONE_MINUS_DST_COLOR,[jm]:n.ONE_MINUS_DST_ALPHA,[ng]:n.CONSTANT_COLOR,[ig]:n.ONE_MINUS_CONSTANT_COLOR,[rg]:n.CONSTANT_ALPHA,[sg]:n.ONE_MINUS_CONSTANT_ALPHA};function v(N,Mt,lt,Rt,ut,st,Dt,kt,le,ee){if(N===ri){S===!0&&(Pt(n.BLEND),S=!1);return}if(S===!1&&(mt(n.BLEND),S=!0),N!==Gm){if(N!==m||ee!==T){if((p!==Ri||x!==Ri)&&(n.blendEquation(n.FUNC_ADD),p=Ri,x=Ri),ee)switch(N){case cr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case iu:n.blendFunc(n.ONE,n.ONE);break;case ru:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case su:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case cr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case iu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ru:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case su:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}A=null,b=null,I=null,L=null,P.set(0,0,0),O=0,m=N,T=ee}return}ut=ut||Mt,st=st||lt,Dt=Dt||Rt,(Mt!==p||ut!==x)&&(n.blendEquationSeparate(w[Mt],w[ut]),p=Mt,x=ut),(lt!==A||Rt!==b||st!==I||Dt!==L)&&(n.blendFuncSeparate(R[lt],R[Rt],R[st],R[Dt]),A=lt,b=Rt,I=st,L=Dt),(kt.equals(P)===!1||le!==O)&&(n.blendColor(kt.r,kt.g,kt.b,le),P.copy(kt),O=le),m=N,T=!1}function z(N,Mt){N.side===Bn?Pt(n.CULL_FACE):mt(n.CULL_FACE);let lt=N.side===Ge;Mt&&(lt=!lt),U(lt),N.blending===cr&&N.transparent===!1?v(ri):v(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const Rt=N.stencilWrite;a.setTest(Rt),Rt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),J(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?mt(n.SAMPLE_ALPHA_TO_COVERAGE):Pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function U(N){y!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),y=N)}function B(N){N!==zm?(mt(n.CULL_FACE),N!==C&&(N===nu?n.cullFace(n.BACK):N===Hm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pt(n.CULL_FACE),C=N}function F(N){N!==G&&(Q&&n.lineWidth(N),G=N)}function J(N,Mt,lt){N?(mt(n.POLYGON_OFFSET_FILL),(Y!==Mt||nt!==lt)&&(n.polygonOffset(Mt,lt),Y=Mt,nt=lt)):Pt(n.POLYGON_OFFSET_FILL)}function k(N){N?mt(n.SCISSOR_TEST):Pt(n.SCISSOR_TEST)}function q(N){N===void 0&&(N=n.TEXTURE0+it-1),ht!==N&&(n.activeTexture(N),ht=N)}function at(N,Mt,lt){lt===void 0&&(ht===null?lt=n.TEXTURE0+it-1:lt=ht);let Rt=vt[lt];Rt===void 0&&(Rt={type:void 0,texture:void 0},vt[lt]=Rt),(Rt.type!==N||Rt.texture!==Mt)&&(ht!==lt&&(n.activeTexture(lt),ht=lt),n.bindTexture(N,Mt||wt[N]),Rt.type=N,Rt.texture=Mt)}function M(){const N=vt[ht];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function X(){try{n.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function tt(){try{n.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _t(){try{n.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ct(){try{n.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function St(){try{n.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(){try{n.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{n.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function bt(N){Yt.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Yt.copy(N))}function Ct(N){rt.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),rt.copy(N))}function Lt(N,Mt){let lt=c.get(Mt);lt===void 0&&(lt=new WeakMap,c.set(Mt,lt));let Rt=lt.get(N);Rt===void 0&&(Rt=n.getUniformBlockIndex(Mt,N.name),lt.set(N,Rt))}function pt(N,Mt){const Rt=c.get(Mt).get(N);l.get(Mt)!==Rt&&(n.uniformBlockBinding(Mt,Rt,N.__bindingPointIndex),l.set(Mt,Rt))}function Gt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ht=null,vt={},f={},h=new WeakMap,d=[],_=null,S=!1,m=null,p=null,A=null,b=null,x=null,I=null,L=null,P=new Jt(0,0,0),O=0,T=!1,y=null,C=null,G=null,Y=null,nt=null,Yt.set(0,0,n.canvas.width,n.canvas.height),rt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:mt,disable:Pt,bindFramebuffer:Vt,drawBuffers:Ut,useProgram:se,setBlending:v,setMaterial:z,setFlipSided:U,setCullFace:B,setLineWidth:F,setPolygonOffset:J,setScissorTest:k,activeTexture:q,bindTexture:at,unbindTexture:M,compressedTexImage2D:g,compressedTexImage3D:D,texImage2D:Tt,texImage3D:ot,updateUBOMapping:Lt,uniformBlockBinding:pt,texStorage2D:ct,texStorage3D:St,texSubImage2D:X,texSubImage3D:tt,compressedTexSubImage2D:K,compressedTexSubImage3D:_t,scissor:bt,viewport:Ct,reset:Gt}}function yM(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xt,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,g){return d?new OffscreenCanvas(M,g):ts("canvas")}function S(M,g,D){let X=1;const tt=at(M);if((tt.width>D||tt.height>D)&&(X=D/Math.max(tt.width,tt.height)),X<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const K=Math.floor(X*tt.width),_t=Math.floor(X*tt.height);f===void 0&&(f=_(K,_t));const ct=g?_(K,_t):f;return ct.width=K,ct.height=_t,ct.getContext("2d").drawImage(M,0,0,K,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+K+"x"+_t+")."),ct}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),M;return M}function m(M){return M.generateMipmaps}function p(M){n.generateMipmap(M)}function A(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(M,g,D,X,tt=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let K=g;if(g===n.RED&&(D===n.FLOAT&&(K=n.R32F),D===n.HALF_FLOAT&&(K=n.R16F),D===n.UNSIGNED_BYTE&&(K=n.R8)),g===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(K=n.R8UI),D===n.UNSIGNED_SHORT&&(K=n.R16UI),D===n.UNSIGNED_INT&&(K=n.R32UI),D===n.BYTE&&(K=n.R8I),D===n.SHORT&&(K=n.R16I),D===n.INT&&(K=n.R32I)),g===n.RG&&(D===n.FLOAT&&(K=n.RG32F),D===n.HALF_FLOAT&&(K=n.RG16F),D===n.UNSIGNED_BYTE&&(K=n.RG8)),g===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(K=n.RG8UI),D===n.UNSIGNED_SHORT&&(K=n.RG16UI),D===n.UNSIGNED_INT&&(K=n.RG32UI),D===n.BYTE&&(K=n.RG8I),D===n.SHORT&&(K=n.RG16I),D===n.INT&&(K=n.RG32I)),g===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(K=n.RGB8UI),D===n.UNSIGNED_SHORT&&(K=n.RGB16UI),D===n.UNSIGNED_INT&&(K=n.RGB32UI),D===n.BYTE&&(K=n.RGB8I),D===n.SHORT&&(K=n.RGB16I),D===n.INT&&(K=n.RGB32I)),g===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),D===n.UNSIGNED_INT&&(K=n.RGBA32UI),D===n.BYTE&&(K=n.RGBA8I),D===n.SHORT&&(K=n.RGBA16I),D===n.INT&&(K=n.RGBA32I)),g===n.RGB&&D===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),g===n.RGBA){const _t=tt?so:jt.getTransfer(X);D===n.FLOAT&&(K=n.RGBA32F),D===n.HALF_FLOAT&&(K=n.RGBA16F),D===n.UNSIGNED_BYTE&&(K=_t===ie?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function x(M,g){let D;return M?g===null||g===Ui||g===Zr?D=n.DEPTH24_STENCIL8:g===zn?D=n.DEPTH32F_STENCIL8:g===Jr&&(D=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ui||g===Zr?D=n.DEPTH_COMPONENT24:g===zn?D=n.DEPTH_COMPONENT32F:g===Jr&&(D=n.DEPTH_COMPONENT16),D}function I(M,g){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==pn&&M.minFilter!==Mn?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function L(M){const g=M.target;g.removeEventListener("dispose",L),O(g),g.isVideoTexture&&u.delete(g)}function P(M){const g=M.target;g.removeEventListener("dispose",P),y(g)}function O(M){const g=i.get(M);if(g.__webglInit===void 0)return;const D=M.source,X=h.get(D);if(X){const tt=X[g.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&T(M),Object.keys(X).length===0&&h.delete(D)}i.remove(M)}function T(M){const g=i.get(M);n.deleteTexture(g.__webglTexture);const D=M.source,X=h.get(D);delete X[g.__cacheKey],o.memory.textures--}function y(M){const g=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(g.__webglFramebuffer[X]))for(let tt=0;tt<g.__webglFramebuffer[X].length;tt++)n.deleteFramebuffer(g.__webglFramebuffer[X][tt]);else n.deleteFramebuffer(g.__webglFramebuffer[X]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[X])}else{if(Array.isArray(g.__webglFramebuffer))for(let X=0;X<g.__webglFramebuffer.length;X++)n.deleteFramebuffer(g.__webglFramebuffer[X]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let X=0;X<g.__webglColorRenderbuffer.length;X++)g.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[X]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const D=M.textures;for(let X=0,tt=D.length;X<tt;X++){const K=i.get(D[X]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(D[X])}i.remove(M)}let C=0;function G(){C=0}function Y(){const M=C;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),C+=1,M}function nt(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function it(M,g){const D=i.get(M);if(M.isVideoTexture&&k(M),M.isRenderTargetTexture===!1&&M.version>0&&D.__version!==M.version){const X=M.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{wt(D,M,g);return}}e.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+g)}function Q(M,g){const D=i.get(M);if(M.version>0&&D.__version!==M.version){wt(D,M,g);return}e.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+g)}function et(M,g){const D=i.get(M);if(M.version>0&&D.__version!==M.version){wt(D,M,g);return}e.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+g)}function $(M,g){const D=i.get(M);if(M.version>0&&D.__version!==M.version){mt(D,M,g);return}e.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+g)}const ht={[Ka]:n.REPEAT,[Pi]:n.CLAMP_TO_EDGE,[Ja]:n.MIRRORED_REPEAT},vt={[pn]:n.NEAREST,[mg]:n.NEAREST_MIPMAP_NEAREST,[_s]:n.NEAREST_MIPMAP_LINEAR,[Mn]:n.LINEAR,[Bo]:n.LINEAR_MIPMAP_NEAREST,[Li]:n.LINEAR_MIPMAP_LINEAR},Et={[xg]:n.NEVER,[bg]:n.ALWAYS,[Sg]:n.LESS,[Ph]:n.LEQUAL,[Mg]:n.EQUAL,[Tg]:n.GEQUAL,[yg]:n.GREATER,[Eg]:n.NOTEQUAL};function Nt(M,g){if(g.type===zn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Mn||g.magFilter===Bo||g.magFilter===_s||g.magFilter===Li||g.minFilter===Mn||g.minFilter===Bo||g.minFilter===_s||g.minFilter===Li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,ht[g.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,ht[g.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,ht[g.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,vt[g.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,vt[g.minFilter]),g.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,Et[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===pn||g.minFilter!==_s&&g.minFilter!==Li||g.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const D=t.get("EXT_texture_filter_anisotropic");n.texParameterf(M,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Yt(M,g){let D=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",L));const X=g.source;let tt=h.get(X);tt===void 0&&(tt={},h.set(X,tt));const K=nt(g);if(K!==M.__cacheKey){tt[K]===void 0&&(tt[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),tt[K].usedTimes++;const _t=tt[M.__cacheKey];_t!==void 0&&(tt[M.__cacheKey].usedTimes--,_t.usedTimes===0&&T(g)),M.__cacheKey=K,M.__webglTexture=tt[K].texture}return D}function rt(M,g,D){return Math.floor(Math.floor(M/D)/g)}function dt(M,g,D,X){const K=M.updateRanges;if(K.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,D,X,g.data);else{K.sort((ot,bt)=>ot.start-bt.start);let _t=0;for(let ot=1;ot<K.length;ot++){const bt=K[_t],Ct=K[ot],Lt=bt.start+bt.count,pt=rt(Ct.start,g.width,4),Gt=rt(bt.start,g.width,4);Ct.start<=Lt+1&&pt===Gt&&rt(Ct.start+Ct.count-1,g.width,4)===pt?bt.count=Math.max(bt.count,Ct.start+Ct.count-bt.start):(++_t,K[_t]=Ct)}K.length=_t+1;const ct=n.getParameter(n.UNPACK_ROW_LENGTH),St=n.getParameter(n.UNPACK_SKIP_PIXELS),Tt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let ot=0,bt=K.length;ot<bt;ot++){const Ct=K[ot],Lt=Math.floor(Ct.start/4),pt=Math.ceil(Ct.count/4),Gt=Lt%g.width,N=Math.floor(Lt/g.width),Mt=pt,lt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Gt),n.pixelStorei(n.UNPACK_SKIP_ROWS,N),e.texSubImage2D(n.TEXTURE_2D,0,Gt,N,Mt,lt,D,X,g.data)}M.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ct),n.pixelStorei(n.UNPACK_SKIP_PIXELS,St),n.pixelStorei(n.UNPACK_SKIP_ROWS,Tt)}}function wt(M,g,D){let X=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(X=n.TEXTURE_3D);const tt=Yt(M,g),K=g.source;e.bindTexture(X,M.__webglTexture,n.TEXTURE0+D);const _t=i.get(K);if(K.version!==_t.__version||tt===!0){e.activeTexture(n.TEXTURE0+D);const ct=jt.getPrimaries(jt.workingColorSpace),St=g.colorSpace===ni?null:jt.getPrimaries(g.colorSpace),Tt=g.colorSpace===ni||ct===St?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let ot=S(g.image,!1,r.maxTextureSize);ot=q(g,ot);const bt=s.convert(g.format,g.colorSpace),Ct=s.convert(g.type);let Lt=b(g.internalFormat,bt,Ct,g.colorSpace,g.isVideoTexture);Nt(X,g);let pt;const Gt=g.mipmaps,N=g.isVideoTexture!==!0,Mt=_t.__version===void 0||tt===!0,lt=K.dataReady,Rt=I(g,ot);if(g.isDepthTexture)Lt=x(g.format===Qr,g.type),Mt&&(N?e.texStorage2D(n.TEXTURE_2D,1,Lt,ot.width,ot.height):e.texImage2D(n.TEXTURE_2D,0,Lt,ot.width,ot.height,0,bt,Ct,null));else if(g.isDataTexture)if(Gt.length>0){N&&Mt&&e.texStorage2D(n.TEXTURE_2D,Rt,Lt,Gt[0].width,Gt[0].height);for(let ut=0,st=Gt.length;ut<st;ut++)pt=Gt[ut],N?lt&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,pt.width,pt.height,bt,Ct,pt.data):e.texImage2D(n.TEXTURE_2D,ut,Lt,pt.width,pt.height,0,bt,Ct,pt.data);g.generateMipmaps=!1}else N?(Mt&&e.texStorage2D(n.TEXTURE_2D,Rt,Lt,ot.width,ot.height),lt&&dt(g,ot,bt,Ct)):e.texImage2D(n.TEXTURE_2D,0,Lt,ot.width,ot.height,0,bt,Ct,ot.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){N&&Mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,Lt,Gt[0].width,Gt[0].height,ot.depth);for(let ut=0,st=Gt.length;ut<st;ut++)if(pt=Gt[ut],g.format!==fn)if(bt!==null)if(N){if(lt)if(g.layerUpdates.size>0){const Dt=Fu(pt.width,pt.height,g.format,g.type);for(const kt of g.layerUpdates){const le=pt.data.subarray(kt*Dt/pt.data.BYTES_PER_ELEMENT,(kt+1)*Dt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,kt,pt.width,pt.height,1,bt,le)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,pt.width,pt.height,ot.depth,bt,pt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ut,Lt,pt.width,pt.height,ot.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?lt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,pt.width,pt.height,ot.depth,bt,Ct,pt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ut,Lt,pt.width,pt.height,ot.depth,0,bt,Ct,pt.data)}else{N&&Mt&&e.texStorage2D(n.TEXTURE_2D,Rt,Lt,Gt[0].width,Gt[0].height);for(let ut=0,st=Gt.length;ut<st;ut++)pt=Gt[ut],g.format!==fn?bt!==null?N?lt&&e.compressedTexSubImage2D(n.TEXTURE_2D,ut,0,0,pt.width,pt.height,bt,pt.data):e.compressedTexImage2D(n.TEXTURE_2D,ut,Lt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?lt&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,pt.width,pt.height,bt,Ct,pt.data):e.texImage2D(n.TEXTURE_2D,ut,Lt,pt.width,pt.height,0,bt,Ct,pt.data)}else if(g.isDataArrayTexture)if(N){if(Mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,Lt,ot.width,ot.height,ot.depth),lt)if(g.layerUpdates.size>0){const ut=Fu(ot.width,ot.height,g.format,g.type);for(const st of g.layerUpdates){const Dt=ot.data.subarray(st*ut/ot.data.BYTES_PER_ELEMENT,(st+1)*ut/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,st,ot.width,ot.height,1,bt,Ct,Dt)}g.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,bt,Ct,ot.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Lt,ot.width,ot.height,ot.depth,0,bt,Ct,ot.data);else if(g.isData3DTexture)N?(Mt&&e.texStorage3D(n.TEXTURE_3D,Rt,Lt,ot.width,ot.height,ot.depth),lt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,bt,Ct,ot.data)):e.texImage3D(n.TEXTURE_3D,0,Lt,ot.width,ot.height,ot.depth,0,bt,Ct,ot.data);else if(g.isFramebufferTexture){if(Mt)if(N)e.texStorage2D(n.TEXTURE_2D,Rt,Lt,ot.width,ot.height);else{let ut=ot.width,st=ot.height;for(let Dt=0;Dt<Rt;Dt++)e.texImage2D(n.TEXTURE_2D,Dt,Lt,ut,st,0,bt,Ct,null),ut>>=1,st>>=1}}else if(Gt.length>0){if(N&&Mt){const ut=at(Gt[0]);e.texStorage2D(n.TEXTURE_2D,Rt,Lt,ut.width,ut.height)}for(let ut=0,st=Gt.length;ut<st;ut++)pt=Gt[ut],N?lt&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,bt,Ct,pt):e.texImage2D(n.TEXTURE_2D,ut,Lt,bt,Ct,pt);g.generateMipmaps=!1}else if(N){if(Mt){const ut=at(ot);e.texStorage2D(n.TEXTURE_2D,Rt,Lt,ut.width,ut.height)}lt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,bt,Ct,ot)}else e.texImage2D(n.TEXTURE_2D,0,Lt,bt,Ct,ot);m(g)&&p(X),_t.__version=K.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function mt(M,g,D){if(g.image.length!==6)return;const X=Yt(M,g),tt=g.source;e.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+D);const K=i.get(tt);if(tt.version!==K.__version||X===!0){e.activeTexture(n.TEXTURE0+D);const _t=jt.getPrimaries(jt.workingColorSpace),ct=g.colorSpace===ni?null:jt.getPrimaries(g.colorSpace),St=g.colorSpace===ni||_t===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Tt=g.isCompressedTexture||g.image[0].isCompressedTexture,ot=g.image[0]&&g.image[0].isDataTexture,bt=[];for(let st=0;st<6;st++)!Tt&&!ot?bt[st]=S(g.image[st],!0,r.maxCubemapSize):bt[st]=ot?g.image[st].image:g.image[st],bt[st]=q(g,bt[st]);const Ct=bt[0],Lt=s.convert(g.format,g.colorSpace),pt=s.convert(g.type),Gt=b(g.internalFormat,Lt,pt,g.colorSpace),N=g.isVideoTexture!==!0,Mt=K.__version===void 0||X===!0,lt=tt.dataReady;let Rt=I(g,Ct);Nt(n.TEXTURE_CUBE_MAP,g);let ut;if(Tt){N&&Mt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,Gt,Ct.width,Ct.height);for(let st=0;st<6;st++){ut=bt[st].mipmaps;for(let Dt=0;Dt<ut.length;Dt++){const kt=ut[Dt];g.format!==fn?Lt!==null?N?lt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt,0,0,kt.width,kt.height,Lt,kt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt,Gt,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt,0,0,kt.width,kt.height,Lt,pt,kt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt,Gt,kt.width,kt.height,0,Lt,pt,kt.data)}}}else{if(ut=g.mipmaps,N&&Mt){ut.length>0&&Rt++;const st=at(bt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,Gt,st.width,st.height)}for(let st=0;st<6;st++)if(ot){N?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,bt[st].width,bt[st].height,Lt,pt,bt[st].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Gt,bt[st].width,bt[st].height,0,Lt,pt,bt[st].data);for(let Dt=0;Dt<ut.length;Dt++){const le=ut[Dt].image[st].image;N?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt+1,0,0,le.width,le.height,Lt,pt,le.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt+1,Gt,le.width,le.height,0,Lt,pt,le.data)}}else{N?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Lt,pt,bt[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Gt,Lt,pt,bt[st]);for(let Dt=0;Dt<ut.length;Dt++){const kt=ut[Dt];N?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt+1,0,0,Lt,pt,kt.image[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt+1,Gt,Lt,pt,kt.image[st])}}}m(g)&&p(n.TEXTURE_CUBE_MAP),K.__version=tt.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function Pt(M,g,D,X,tt,K){const _t=s.convert(D.format,D.colorSpace),ct=s.convert(D.type),St=b(D.internalFormat,_t,ct,D.colorSpace),Tt=i.get(g),ot=i.get(D);if(ot.__renderTarget=g,!Tt.__hasExternalTextures){const bt=Math.max(1,g.width>>K),Ct=Math.max(1,g.height>>K);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,K,St,bt,Ct,g.depth,0,_t,ct,null):e.texImage2D(tt,K,St,bt,Ct,0,_t,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,M),J(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,tt,ot.__webglTexture,0,F(g)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,tt,ot.__webglTexture,K),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Vt(M,g,D){if(n.bindRenderbuffer(n.RENDERBUFFER,M),g.depthBuffer){const X=g.depthTexture,tt=X&&X.isDepthTexture?X.type:null,K=x(g.stencilBuffer,tt),_t=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=F(g);J(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,K,g.width,g.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,K,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,K,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_t,n.RENDERBUFFER,M)}else{const X=g.textures;for(let tt=0;tt<X.length;tt++){const K=X[tt],_t=s.convert(K.format,K.colorSpace),ct=s.convert(K.type),St=b(K.internalFormat,_t,ct,K.colorSpace),Tt=F(g);D&&J(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt,St,g.width,g.height):J(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Tt,St,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,St,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ut(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=i.get(g.depthTexture);X.__renderTarget=g,(!X.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),it(g.depthTexture,0);const tt=X.__webglTexture,K=F(g);if(g.depthTexture.format===jr)J(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0);else if(g.depthTexture.format===Qr)J(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function se(M){const g=i.get(M),D=M.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==M.depthTexture){const X=M.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),X){const tt=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,X.removeEventListener("dispose",tt)};X.addEventListener("dispose",tt),g.__depthDisposeCallback=tt}g.__boundDepthTexture=X}if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");const X=M.texture.mipmaps;X&&X.length>0?Ut(g.__webglFramebuffer[0],M):Ut(g.__webglFramebuffer,M)}else if(D){g.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[X]),g.__webglDepthbuffer[X]===void 0)g.__webglDepthbuffer[X]=n.createRenderbuffer(),Vt(g.__webglDepthbuffer[X],M,!1);else{const tt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=g.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,K)}}else{const X=M.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Vt(g.__webglDepthbuffer,M,!1);else{const tt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,K)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function w(M,g,D){const X=i.get(M);g!==void 0&&Pt(X.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&se(M)}function R(M){const g=M.texture,D=i.get(M),X=i.get(g);M.addEventListener("dispose",P);const tt=M.textures,K=M.isWebGLCubeRenderTarget===!0,_t=tt.length>1;if(_t||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=g.version,o.memory.textures++),K){D.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer[ct]=[];for(let St=0;St<g.mipmaps.length;St++)D.__webglFramebuffer[ct][St]=n.createFramebuffer()}else D.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer=[];for(let ct=0;ct<g.mipmaps.length;ct++)D.__webglFramebuffer[ct]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(_t)for(let ct=0,St=tt.length;ct<St;ct++){const Tt=i.get(tt[ct]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=n.createTexture(),o.memory.textures++)}if(M.samples>0&&J(M)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ct=0;ct<tt.length;ct++){const St=tt[ct];D.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[ct]);const Tt=s.convert(St.format,St.colorSpace),ot=s.convert(St.type),bt=b(St.internalFormat,Tt,ot,St.colorSpace,M.isXRRenderTarget===!0),Ct=F(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct,bt,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,D.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),Vt(D.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Nt(n.TEXTURE_CUBE_MAP,g);for(let ct=0;ct<6;ct++)if(g.mipmaps&&g.mipmaps.length>0)for(let St=0;St<g.mipmaps.length;St++)Pt(D.__webglFramebuffer[ct][St],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,St);else Pt(D.__webglFramebuffer[ct],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(g)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let ct=0,St=tt.length;ct<St;ct++){const Tt=tt[ct],ot=i.get(Tt);e.bindTexture(n.TEXTURE_2D,ot.__webglTexture),Nt(n.TEXTURE_2D,Tt),Pt(D.__webglFramebuffer,M,Tt,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,0),m(Tt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ct=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,X.__webglTexture),Nt(ct,g),g.mipmaps&&g.mipmaps.length>0)for(let St=0;St<g.mipmaps.length;St++)Pt(D.__webglFramebuffer[St],M,g,n.COLOR_ATTACHMENT0,ct,St);else Pt(D.__webglFramebuffer,M,g,n.COLOR_ATTACHMENT0,ct,0);m(g)&&p(ct),e.unbindTexture()}M.depthBuffer&&se(M)}function v(M){const g=M.textures;for(let D=0,X=g.length;D<X;D++){const tt=g[D];if(m(tt)){const K=A(M),_t=i.get(tt).__webglTexture;e.bindTexture(K,_t),p(K),e.unbindTexture()}}}const z=[],U=[];function B(M){if(M.samples>0){if(J(M)===!1){const g=M.textures,D=M.width,X=M.height;let tt=n.COLOR_BUFFER_BIT;const K=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=i.get(M),ct=g.length>1;if(ct)for(let Tt=0;Tt<g.length;Tt++)e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer);const St=M.texture.mipmaps;St&&St.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Tt=0;Tt<g.length;Tt++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_t.__webglColorRenderbuffer[Tt]);const ot=i.get(g[Tt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ot,0)}n.blitFramebuffer(0,0,D,X,0,0,D,X,tt,n.NEAREST),l===!0&&(z.length=0,U.length=0,z.push(n.COLOR_ATTACHMENT0+Tt),M.depthBuffer&&M.resolveDepthBuffer===!1&&(z.push(K),U.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,U)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,z))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let Tt=0;Tt<g.length;Tt++){e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,_t.__webglColorRenderbuffer[Tt]);const ot=i.get(g[Tt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,ot,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const g=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function F(M){return Math.min(r.maxSamples,M.samples)}function J(M){const g=i.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function k(M){const g=o.render.frame;u.get(M)!==g&&(u.set(M,g),M.update())}function q(M,g){const D=M.colorSpace,X=M.format,tt=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||D!==mr&&D!==ni&&(jt.getTransfer(D)===ie?(X!==fn||tt!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),g}function at(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=G,this.setTexture2D=it,this.setTexture2DArray=Q,this.setTexture3D=et,this.setTextureCube=$,this.rebindTextures=w,this.setupRenderTarget=R,this.updateRenderTargetMipmap=v,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=J}function EM(n,t){function e(i,r=ni){let s;const o=jt.getTransfer(r);if(i===Tn)return n.UNSIGNED_BYTE;if(i===tc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ec)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Eh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Mh)return n.BYTE;if(i===yh)return n.SHORT;if(i===Jr)return n.UNSIGNED_SHORT;if(i===Ql)return n.INT;if(i===Ui)return n.UNSIGNED_INT;if(i===zn)return n.FLOAT;if(i===as)return n.HALF_FLOAT;if(i===Th)return n.ALPHA;if(i===bh)return n.RGB;if(i===fn)return n.RGBA;if(i===jr)return n.DEPTH_COMPONENT;if(i===Qr)return n.DEPTH_STENCIL;if(i===Ah)return n.RED;if(i===nc)return n.RED_INTEGER;if(i===wh)return n.RG;if(i===ic)return n.RG_INTEGER;if(i===rc)return n.RGBA_INTEGER;if(i===Ys||i===$s||i===Ks||i===Js)if(o===ie)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ys)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ys)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$s)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ks)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Js)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Za||i===ja||i===Qa||i===tl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Za)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ja)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===el||i===nl||i===il)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===el||i===nl)return o===ie?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===il)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===rl||i===sl||i===ol||i===al||i===ll||i===cl||i===ul||i===fl||i===hl||i===dl||i===pl||i===ml||i===gl||i===_l)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===rl)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sl)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ol)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===al)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ll)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cl)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ul)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fl)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===hl)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dl)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pl)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ml)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gl)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_l)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zs||i===vl||i===xl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Zs)return o===ie?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rh||i===Sl||i===Ml||i===yl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Zs)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Sl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ml)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const TM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class AM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Be,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ci({vertexShader:TM,fragmentShader:bM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ke(new So(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wM extends vr{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const S=new AM,m=e.getContextAttributes();let p=null,A=null;const b=[],x=[],I=new xt;let L=null;const P=new en;P.viewport=new ge;const O=new en;O.viewport=new ge;const T=[P,O],y=new $_;let C=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let dt=b[rt];return dt===void 0&&(dt=new aa,b[rt]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(rt){let dt=b[rt];return dt===void 0&&(dt=new aa,b[rt]=dt),dt.getGripSpace()},this.getHand=function(rt){let dt=b[rt];return dt===void 0&&(dt=new aa,b[rt]=dt),dt.getHandSpace()};function Y(rt){const dt=x.indexOf(rt.inputSource);if(dt===-1)return;const wt=b[dt];wt!==void 0&&(wt.update(rt.inputSource,rt.frame,c||o),wt.dispatchEvent({type:rt.type,data:rt.inputSource}))}function nt(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",nt),r.removeEventListener("inputsourceschange",it);for(let rt=0;rt<b.length;rt++){const dt=x[rt];dt!==null&&(x[rt]=null,b[rt].disconnect(dt))}C=null,G=null,S.reset(),t.setRenderTarget(p),d=null,h=null,f=null,r=null,A=null,Yt.stop(),i.isPresenting=!1,t.setPixelRatio(L),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){s=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){a=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(rt){c=rt},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(rt){if(r=rt,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",nt),r.addEventListener("inputsourceschange",it),m.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,mt=null,Pt=null;m.depth&&(Pt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=m.stencil?Qr:jr,mt=m.stencil?Zr:Ui);const Vt={colorFormat:e.RGBA8,depthFormat:Pt,scaleFactor:s};f=new XRWebGLBinding(r,e),h=f.createProjectionLayer(Vt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),A=new Ni(h.textureWidth,h.textureHeight,{format:fn,type:Tn,depthTexture:new Gh(h.textureWidth,h.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const wt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,wt),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),A=new Ni(d.framebufferWidth,d.framebufferHeight,{format:fn,type:Tn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Yt.setContext(r),Yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function it(rt){for(let dt=0;dt<rt.removed.length;dt++){const wt=rt.removed[dt],mt=x.indexOf(wt);mt>=0&&(x[mt]=null,b[mt].disconnect(wt))}for(let dt=0;dt<rt.added.length;dt++){const wt=rt.added[dt];let mt=x.indexOf(wt);if(mt===-1){for(let Vt=0;Vt<b.length;Vt++)if(Vt>=x.length){x.push(wt),mt=Vt;break}else if(x[Vt]===null){x[Vt]=wt,mt=Vt;break}if(mt===-1)break}const Pt=b[mt];Pt&&Pt.connect(wt)}}const Q=new V,et=new V;function $(rt,dt,wt){Q.setFromMatrixPosition(dt.matrixWorld),et.setFromMatrixPosition(wt.matrixWorld);const mt=Q.distanceTo(et),Pt=dt.projectionMatrix.elements,Vt=wt.projectionMatrix.elements,Ut=Pt[14]/(Pt[10]-1),se=Pt[14]/(Pt[10]+1),w=(Pt[9]+1)/Pt[5],R=(Pt[9]-1)/Pt[5],v=(Pt[8]-1)/Pt[0],z=(Vt[8]+1)/Vt[0],U=Ut*v,B=Ut*z,F=mt/(-v+z),J=F*-v;if(dt.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(J),rt.translateZ(F),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),Pt[10]===-1)rt.projectionMatrix.copy(dt.projectionMatrix),rt.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const k=Ut+F,q=se+F,at=U-J,M=B+(mt-J),g=w*se/q*k,D=R*se/q*k;rt.projectionMatrix.makePerspective(at,M,g,D,k,q),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function ht(rt,dt){dt===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(dt.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(r===null)return;let dt=rt.near,wt=rt.far;S.texture!==null&&(S.depthNear>0&&(dt=S.depthNear),S.depthFar>0&&(wt=S.depthFar)),y.near=O.near=P.near=dt,y.far=O.far=P.far=wt,(C!==y.near||G!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,G=y.far),P.layers.mask=rt.layers.mask|2,O.layers.mask=rt.layers.mask|4,y.layers.mask=P.layers.mask|O.layers.mask;const mt=rt.parent,Pt=y.cameras;ht(y,mt);for(let Vt=0;Vt<Pt.length;Vt++)ht(Pt[Vt],mt);Pt.length===2?$(y,P,O):y.projectionMatrix.copy(P.projectionMatrix),vt(rt,y,mt)};function vt(rt,dt,wt){wt===null?rt.matrix.copy(dt.matrixWorld):(rt.matrix.copy(wt.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(dt.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(dt.projectionMatrix),rt.projectionMatrixInverse.copy(dt.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=El*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(rt){l=rt,h!==null&&(h.fixedFoveation=rt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=rt)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(y)};let Et=null;function Nt(rt,dt){if(u=dt.getViewerPose(c||o),_=dt,u!==null){const wt=u.views;d!==null&&(t.setRenderTargetFramebuffer(A,d.framebuffer),t.setRenderTarget(A));let mt=!1;wt.length!==y.cameras.length&&(y.cameras.length=0,mt=!0);for(let Ut=0;Ut<wt.length;Ut++){const se=wt[Ut];let w=null;if(d!==null)w=d.getViewport(se);else{const v=f.getViewSubImage(h,se);w=v.viewport,Ut===0&&(t.setRenderTargetTextures(A,v.colorTexture,v.depthStencilTexture),t.setRenderTarget(A))}let R=T[Ut];R===void 0&&(R=new en,R.layers.enable(Ut),R.viewport=new ge,T[Ut]=R),R.matrix.fromArray(se.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(se.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(w.x,w.y,w.width,w.height),Ut===0&&(y.matrix.copy(R.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),mt===!0&&y.cameras.push(R)}const Pt=r.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const Ut=f.getDepthInformation(wt[0]);Ut&&Ut.isValid&&Ut.texture&&S.init(t,Ut,r.renderState)}}for(let wt=0;wt<b.length;wt++){const mt=x[wt],Pt=b[wt];mt!==null&&Pt!==void 0&&Pt.update(mt,dt,c||o)}Et&&Et(rt,dt),dt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:dt}),_=null}const Yt=new Qh;Yt.setAnimationLoop(Nt),this.setAnimationLoop=function(rt){Et=rt},this.dispose=function(){}}}const yi=new bn,RM=new fe;function CM(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Bh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,A,b,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),S(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,A,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ge&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ge&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=t.get(p),b=A.envMap,x=A.envMapRotation;b&&(m.envMap.value=b,yi.copy(x),yi.x*=-1,yi.y*=-1,yi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),m.envMapRotation.value.setFromMatrix4(RM.makeRotationFromEuler(yi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ge&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){const A=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function PM(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,b){const x=b.program;i.uniformBlockBinding(A,x)}function c(A,b){let x=r[A.id];x===void 0&&(_(A),x=u(A),r[A.id]=x,A.addEventListener("dispose",m));const I=b.program;i.updateUBOMapping(A,I);const L=t.render.frame;s[A.id]!==L&&(h(A),s[A.id]=L)}function u(A){const b=f();A.__bindingPointIndex=b;const x=n.createBuffer(),I=A.__size,L=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,I,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,x),x}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const b=r[A.id],x=A.uniforms,I=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let L=0,P=x.length;L<P;L++){const O=Array.isArray(x[L])?x[L]:[x[L]];for(let T=0,y=O.length;T<y;T++){const C=O[T];if(d(C,L,T,I)===!0){const G=C.__offset,Y=Array.isArray(C.value)?C.value:[C.value];let nt=0;for(let it=0;it<Y.length;it++){const Q=Y[it],et=S(Q);typeof Q=="number"||typeof Q=="boolean"?(C.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,G+nt,C.__data)):Q.isMatrix3?(C.__data[0]=Q.elements[0],C.__data[1]=Q.elements[1],C.__data[2]=Q.elements[2],C.__data[3]=0,C.__data[4]=Q.elements[3],C.__data[5]=Q.elements[4],C.__data[6]=Q.elements[5],C.__data[7]=0,C.__data[8]=Q.elements[6],C.__data[9]=Q.elements[7],C.__data[10]=Q.elements[8],C.__data[11]=0):(Q.toArray(C.__data,nt),nt+=et.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(A,b,x,I){const L=A.value,P=b+"_"+x;if(I[P]===void 0)return typeof L=="number"||typeof L=="boolean"?I[P]=L:I[P]=L.clone(),!0;{const O=I[P];if(typeof L=="number"||typeof L=="boolean"){if(O!==L)return I[P]=L,!0}else if(O.equals(L)===!1)return O.copy(L),!0}return!1}function _(A){const b=A.uniforms;let x=0;const I=16;for(let P=0,O=b.length;P<O;P++){const T=Array.isArray(b[P])?b[P]:[b[P]];for(let y=0,C=T.length;y<C;y++){const G=T[y],Y=Array.isArray(G.value)?G.value:[G.value];for(let nt=0,it=Y.length;nt<it;nt++){const Q=Y[nt],et=S(Q),$=x%I,ht=$%et.boundary,vt=$+ht;x+=ht,vt!==0&&I-vt<et.storage&&(x+=I-vt),G.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=x,x+=et.storage}}}const L=x%I;return L>0&&(x+=I-L),A.__size=x,A.__cache={},this}function S(A){const b={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=48,b.storage=48):A.isMatrix4?(b.boundary=64,b.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),b}function m(A){const b=A.target;b.removeEventListener("dispose",m);const x=o.indexOf(b.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(const A in r)n.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class LM{constructor(t={}){const{canvas:e=wg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const _=new Uint32Array(4),S=new Int32Array(4);let m=null,p=null;const A=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let I=!1;this._outputColorSpace=tn;let L=0,P=0,O=null,T=-1,y=null;const C=new ge,G=new ge;let Y=null;const nt=new Jt(0);let it=0,Q=e.width,et=e.height,$=1,ht=null,vt=null;const Et=new ge(0,0,Q,et),Nt=new ge(0,0,Q,et);let Yt=!1;const rt=new ac;let dt=!1,wt=!1;const mt=new fe,Pt=new fe,Vt=new V,Ut=new ge,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let w=!1;function R(){return O===null?$:1}let v=i;function z(E,H){return e.getContext(E,H)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${jl}`),e.addEventListener("webglcontextlost",Rt,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",st,!1),v===null){const H="webgl2";if(v=z(H,E),v===null)throw z(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let U,B,F,J,k,q,at,M,g,D,X,tt,K,_t,ct,St,Tt,ot,bt,Ct,Lt,pt,Gt,N;function Mt(){U=new V0(v),U.init(),pt=new EM(v,U),B=new U0(v,U,t,pt),F=new MM(v,U),B.reverseDepthBuffer&&h&&F.buffers.depth.setReversed(!0),J=new W0(v),k=new lM,q=new yM(v,U,F,k,B,pt,J),at=new F0(x),M=new H0(x),g=new J_(v),Gt=new D0(v,g),D=new G0(v,g,J,Gt),X=new q0(v,D,g,J),bt=new X0(v,B,q),St=new N0(k),tt=new aM(x,at,M,U,B,Gt,St),K=new CM(x,k),_t=new uM,ct=new gM(U),ot=new L0(x,at,M,F,X,d,l),Tt=new xM(x,X,B),N=new PM(v,J,B,F),Ct=new I0(v,U,J),Lt=new k0(v,U,J),J.programs=tt.programs,x.capabilities=B,x.extensions=U,x.properties=k,x.renderLists=_t,x.shadowMap=Tt,x.state=F,x.info=J}Mt();const lt=new wM(x,v);this.xr=lt,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const E=U.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=U.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(Q,et,!1))},this.getSize=function(E){return E.set(Q,et)},this.setSize=function(E,H,Z=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=E,et=H,e.width=Math.floor(E*$),e.height=Math.floor(H*$),Z===!0&&(e.style.width=E+"px",e.style.height=H+"px"),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(Q*$,et*$).floor()},this.setDrawingBufferSize=function(E,H,Z){Q=E,et=H,$=Z,e.width=Math.floor(E*Z),e.height=Math.floor(H*Z),this.setViewport(0,0,E,H)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(Et)},this.setViewport=function(E,H,Z,j){E.isVector4?Et.set(E.x,E.y,E.z,E.w):Et.set(E,H,Z,j),F.viewport(C.copy(Et).multiplyScalar($).round())},this.getScissor=function(E){return E.copy(Nt)},this.setScissor=function(E,H,Z,j){E.isVector4?Nt.set(E.x,E.y,E.z,E.w):Nt.set(E,H,Z,j),F.scissor(G.copy(Nt).multiplyScalar($).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(E){F.setScissorTest(Yt=E)},this.setOpaqueSort=function(E){ht=E},this.setTransparentSort=function(E){vt=E},this.getClearColor=function(E){return E.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(E=!0,H=!0,Z=!0){let j=0;if(E){let W=!1;if(O!==null){const ft=O.texture.format;W=ft===rc||ft===ic||ft===nc}if(W){const ft=O.texture.type,yt=ft===Tn||ft===Ui||ft===Jr||ft===Zr||ft===tc||ft===ec,It=ot.getClearColor(),At=ot.getClearAlpha(),zt=It.r,Ht=It.g,Ft=It.b;yt?(_[0]=zt,_[1]=Ht,_[2]=Ft,_[3]=At,v.clearBufferuiv(v.COLOR,0,_)):(S[0]=zt,S[1]=Ht,S[2]=Ft,S[3]=At,v.clearBufferiv(v.COLOR,0,S))}else j|=v.COLOR_BUFFER_BIT}H&&(j|=v.DEPTH_BUFFER_BIT),Z&&(j|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Rt,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",st,!1),ot.dispose(),_t.dispose(),ct.dispose(),k.dispose(),at.dispose(),M.dispose(),X.dispose(),Gt.dispose(),N.dispose(),tt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",pc),lt.removeEventListener("sessionend",mc),fi.stop()};function Rt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const E=J.autoReset,H=Tt.enabled,Z=Tt.autoUpdate,j=Tt.needsUpdate,W=Tt.type;Mt(),J.autoReset=E,Tt.enabled=H,Tt.autoUpdate=Z,Tt.needsUpdate=j,Tt.type=W}function st(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Dt(E){const H=E.target;H.removeEventListener("dispose",Dt),kt(H)}function kt(E){le(E),k.remove(E)}function le(E){const H=k.get(E).programs;H!==void 0&&(H.forEach(function(Z){tt.releaseProgram(Z)}),E.isShaderMaterial&&tt.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,Z,j,W,ft){H===null&&(H=se);const yt=W.isMesh&&W.matrixWorld.determinant()<0,It=rd(E,H,Z,j,W);F.setMaterial(j,yt);let At=Z.index,zt=1;if(j.wireframe===!0){if(At=D.getWireframeAttribute(Z),At===void 0)return;zt=2}const Ht=Z.drawRange,Ft=Z.attributes.position;let Kt=Ht.start*zt,ne=(Ht.start+Ht.count)*zt;ft!==null&&(Kt=Math.max(Kt,ft.start*zt),ne=Math.min(ne,(ft.start+ft.count)*zt)),At!==null?(Kt=Math.max(Kt,0),ne=Math.min(ne,At.count)):Ft!=null&&(Kt=Math.max(Kt,0),ne=Math.min(ne,Ft.count));const me=ne-Kt;if(me<0||me===1/0)return;Gt.setup(W,j,It,Z,At);let ce,re=Ct;if(At!==null&&(ce=g.get(At),re=Lt,re.setIndex(ce)),W.isMesh)j.wireframe===!0?(F.setLineWidth(j.wireframeLinewidth*R()),re.setMode(v.LINES)):re.setMode(v.TRIANGLES);else if(W.isLine){let Ot=j.linewidth;Ot===void 0&&(Ot=1),F.setLineWidth(Ot*R()),W.isLineSegments?re.setMode(v.LINES):W.isLineLoop?re.setMode(v.LINE_LOOP):re.setMode(v.LINE_STRIP)}else W.isPoints?re.setMode(v.POINTS):W.isSprite&&re.setMode(v.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)ur("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),re.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(U.get("WEBGL_multi_draw"))re.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ot=W._multiDrawStarts,de=W._multiDrawCounts,Zt=W._multiDrawCount,ke=At?g.get(At).bytesPerElement:1,Bi=k.get(j).currentProgram.getUniforms();for(let We=0;We<Zt;We++)Bi.setValue(v,"_gl_DrawID",We),re.render(Ot[We]/ke,de[We])}else if(W.isInstancedMesh)re.renderInstances(Kt,me,W.count);else if(Z.isInstancedBufferGeometry){const Ot=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,de=Math.min(Z.instanceCount,Ot);re.renderInstances(Kt,me,de)}else re.render(Kt,me)};function ee(E,H,Z){E.transparent===!0&&E.side===Bn&&E.forceSinglePass===!1?(E.side=Ge,E.needsUpdate=!0,hs(E,H,Z),E.side=li,E.needsUpdate=!0,hs(E,H,Z),E.side=Bn):hs(E,H,Z)}this.compile=function(E,H,Z=null){Z===null&&(Z=E),p=ct.get(Z),p.init(H),b.push(p),Z.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),E!==Z&&E.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();const j=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ft=W.material;if(ft)if(Array.isArray(ft))for(let yt=0;yt<ft.length;yt++){const It=ft[yt];ee(It,Z,W),j.add(It)}else ee(ft,Z,W),j.add(ft)}),p=b.pop(),j},this.compileAsync=function(E,H,Z=null){const j=this.compile(E,H,Z);return new Promise(W=>{function ft(){if(j.forEach(function(yt){k.get(yt).currentProgram.isReady()&&j.delete(yt)}),j.size===0){W(E);return}setTimeout(ft,10)}U.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let rn=null;function wn(E){rn&&rn(E)}function pc(){fi.stop()}function mc(){fi.start()}const fi=new Qh;fi.setAnimationLoop(wn),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(E){rn=E,lt.setAnimationLoop(E),E===null?fi.stop():fi.start()},lt.addEventListener("sessionstart",pc),lt.addEventListener("sessionend",mc),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(H),H=lt.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,H,O),p=ct.get(E,b.length),p.init(H),b.push(p),Pt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),rt.setFromProjectionMatrix(Pt),wt=this.localClippingEnabled,dt=St.init(this.clippingPlanes,wt),m=_t.get(E,A.length),m.init(),A.push(m),lt.enabled===!0&&lt.isPresenting===!0){const ft=x.xr.getDepthSensingMesh();ft!==null&&yo(ft,H,-1/0,x.sortObjects)}yo(E,H,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ht,vt),w=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,w&&ot.addToRenderList(m,E),this.info.render.frame++,dt===!0&&St.beginShadows();const Z=p.state.shadowsArray;Tt.render(Z,E,H),dt===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,W=m.transmissive;if(p.setupLights(),H.isArrayCamera){const ft=H.cameras;if(W.length>0)for(let yt=0,It=ft.length;yt<It;yt++){const At=ft[yt];_c(j,W,E,At)}w&&ot.render(E);for(let yt=0,It=ft.length;yt<It;yt++){const At=ft[yt];gc(m,E,At,At.viewport)}}else W.length>0&&_c(j,W,E,H),w&&ot.render(E),gc(m,E,H);O!==null&&P===0&&(q.updateMultisampleRenderTarget(O),q.updateRenderTargetMipmap(O)),E.isScene===!0&&E.onAfterRender(x,E,H),Gt.resetDefaultState(),T=-1,y=null,b.pop(),b.length>0?(p=b[b.length-1],dt===!0&&St.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function yo(E,H,Z,j){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||rt.intersectsSprite(E)){j&&Ut.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Pt);const yt=X.update(E),It=E.material;It.visible&&m.push(E,yt,It,Z,Ut.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||rt.intersectsObject(E))){const yt=X.update(E),It=E.material;if(j&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ut.copy(E.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Ut.copy(yt.boundingSphere.center)),Ut.applyMatrix4(E.matrixWorld).applyMatrix4(Pt)),Array.isArray(It)){const At=yt.groups;for(let zt=0,Ht=At.length;zt<Ht;zt++){const Ft=At[zt],Kt=It[Ft.materialIndex];Kt&&Kt.visible&&m.push(E,yt,Kt,Z,Ut.z,Ft)}}else It.visible&&m.push(E,yt,It,Z,Ut.z,null)}}const ft=E.children;for(let yt=0,It=ft.length;yt<It;yt++)yo(ft[yt],H,Z,j)}function gc(E,H,Z,j){const W=E.opaque,ft=E.transmissive,yt=E.transparent;p.setupLightsView(Z),dt===!0&&St.setGlobalState(x.clippingPlanes,Z),j&&F.viewport(C.copy(j)),W.length>0&&fs(W,H,Z),ft.length>0&&fs(ft,H,Z),yt.length>0&&fs(yt,H,Z),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function _c(E,H,Z,j){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new Ni(1,1,{generateMipmaps:!0,type:U.has("EXT_color_buffer_half_float")||U.has("EXT_color_buffer_float")?as:Tn,minFilter:Li,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const ft=p.state.transmissionRenderTarget[j.id],yt=j.viewport||C;ft.setSize(yt.z*x.transmissionResolutionScale,yt.w*x.transmissionResolutionScale);const It=x.getRenderTarget(),At=x.getActiveCubeFace(),zt=x.getActiveMipmapLevel();x.setRenderTarget(ft),x.getClearColor(nt),it=x.getClearAlpha(),it<1&&x.setClearColor(16777215,.5),x.clear(),w&&ot.render(Z);const Ht=x.toneMapping;x.toneMapping=si;const Ft=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),dt===!0&&St.setGlobalState(x.clippingPlanes,j),fs(E,Z,j),q.updateMultisampleRenderTarget(ft),q.updateRenderTargetMipmap(ft),U.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let ne=0,me=H.length;ne<me;ne++){const ce=H[ne],re=ce.object,Ot=ce.geometry,de=ce.material,Zt=ce.group;if(de.side===Bn&&re.layers.test(j.layers)){const ke=de.side;de.side=Ge,de.needsUpdate=!0,vc(re,Z,j,Ot,de,Zt),de.side=ke,de.needsUpdate=!0,Kt=!0}}Kt===!0&&(q.updateMultisampleRenderTarget(ft),q.updateRenderTargetMipmap(ft))}x.setRenderTarget(It,At,zt),x.setClearColor(nt,it),Ft!==void 0&&(j.viewport=Ft),x.toneMapping=Ht}function fs(E,H,Z){const j=H.isScene===!0?H.overrideMaterial:null;for(let W=0,ft=E.length;W<ft;W++){const yt=E[W],It=yt.object,At=yt.geometry,zt=yt.group;let Ht=yt.material;Ht.allowOverride===!0&&j!==null&&(Ht=j),It.layers.test(Z.layers)&&vc(It,H,Z,At,Ht,zt)}}function vc(E,H,Z,j,W,ft){E.onBeforeRender(x,H,Z,j,W,ft),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(x,H,Z,j,E,ft),W.transparent===!0&&W.side===Bn&&W.forceSinglePass===!1?(W.side=Ge,W.needsUpdate=!0,x.renderBufferDirect(Z,H,j,W,E,ft),W.side=li,W.needsUpdate=!0,x.renderBufferDirect(Z,H,j,W,E,ft),W.side=Bn):x.renderBufferDirect(Z,H,j,W,E,ft),E.onAfterRender(x,H,Z,j,W,ft)}function hs(E,H,Z){H.isScene!==!0&&(H=se);const j=k.get(E),W=p.state.lights,ft=p.state.shadowsArray,yt=W.state.version,It=tt.getParameters(E,W.state,ft,H,Z),At=tt.getProgramCacheKey(It);let zt=j.programs;j.environment=E.isMeshStandardMaterial?H.environment:null,j.fog=H.fog,j.envMap=(E.isMeshStandardMaterial?M:at).get(E.envMap||j.environment),j.envMapRotation=j.environment!==null&&E.envMap===null?H.environmentRotation:E.envMapRotation,zt===void 0&&(E.addEventListener("dispose",Dt),zt=new Map,j.programs=zt);let Ht=zt.get(At);if(Ht!==void 0){if(j.currentProgram===Ht&&j.lightsStateVersion===yt)return Sc(E,It),Ht}else It.uniforms=tt.getUniforms(E),E.onBeforeCompile(It,x),Ht=tt.acquireProgram(It,At),zt.set(At,Ht),j.uniforms=It.uniforms;const Ft=j.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ft.clippingPlanes=St.uniform),Sc(E,It),j.needsLights=od(E),j.lightsStateVersion=yt,j.needsLights&&(Ft.ambientLightColor.value=W.state.ambient,Ft.lightProbe.value=W.state.probe,Ft.directionalLights.value=W.state.directional,Ft.directionalLightShadows.value=W.state.directionalShadow,Ft.spotLights.value=W.state.spot,Ft.spotLightShadows.value=W.state.spotShadow,Ft.rectAreaLights.value=W.state.rectArea,Ft.ltc_1.value=W.state.rectAreaLTC1,Ft.ltc_2.value=W.state.rectAreaLTC2,Ft.pointLights.value=W.state.point,Ft.pointLightShadows.value=W.state.pointShadow,Ft.hemisphereLights.value=W.state.hemi,Ft.directionalShadowMap.value=W.state.directionalShadowMap,Ft.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ft.spotShadowMap.value=W.state.spotShadowMap,Ft.spotLightMatrix.value=W.state.spotLightMatrix,Ft.spotLightMap.value=W.state.spotLightMap,Ft.pointShadowMap.value=W.state.pointShadowMap,Ft.pointShadowMatrix.value=W.state.pointShadowMatrix),j.currentProgram=Ht,j.uniformsList=null,Ht}function xc(E){if(E.uniformsList===null){const H=E.currentProgram.getUniforms();E.uniformsList=js.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function Sc(E,H){const Z=k.get(E);Z.outputColorSpace=H.outputColorSpace,Z.batching=H.batching,Z.batchingColor=H.batchingColor,Z.instancing=H.instancing,Z.instancingColor=H.instancingColor,Z.instancingMorph=H.instancingMorph,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function rd(E,H,Z,j,W){H.isScene!==!0&&(H=se),q.resetTextureUnits();const ft=H.fog,yt=j.isMeshStandardMaterial?H.environment:null,It=O===null?x.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:mr,At=(j.isMeshStandardMaterial?M:at).get(j.envMap||yt),zt=j.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ht=!!Z.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ft=!!Z.morphAttributes.position,Kt=!!Z.morphAttributes.normal,ne=!!Z.morphAttributes.color;let me=si;j.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(me=x.toneMapping);const ce=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,re=ce!==void 0?ce.length:0,Ot=k.get(j),de=p.state.lights;if(dt===!0&&(wt===!0||E!==y)){const Le=E===y&&j.id===T;St.setState(j,E,Le)}let Zt=!1;j.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==de.state.version||Ot.outputColorSpace!==It||W.isBatchedMesh&&Ot.batching===!1||!W.isBatchedMesh&&Ot.batching===!0||W.isBatchedMesh&&Ot.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ot.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ot.instancing===!1||!W.isInstancedMesh&&Ot.instancing===!0||W.isSkinnedMesh&&Ot.skinning===!1||!W.isSkinnedMesh&&Ot.skinning===!0||W.isInstancedMesh&&Ot.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ot.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ot.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ot.instancingMorph===!1&&W.morphTexture!==null||Ot.envMap!==At||j.fog===!0&&Ot.fog!==ft||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==St.numPlanes||Ot.numIntersection!==St.numIntersection)||Ot.vertexAlphas!==zt||Ot.vertexTangents!==Ht||Ot.morphTargets!==Ft||Ot.morphNormals!==Kt||Ot.morphColors!==ne||Ot.toneMapping!==me||Ot.morphTargetsCount!==re)&&(Zt=!0):(Zt=!0,Ot.__version=j.version);let ke=Ot.currentProgram;Zt===!0&&(ke=hs(j,H,W));let Bi=!1,We=!1,yr=!1;const ue=ke.getUniforms(),Je=Ot.uniforms;if(F.useProgram(ke.program)&&(Bi=!0,We=!0,yr=!0),j.id!==T&&(T=j.id,We=!0),Bi||y!==E){F.buffers.depth.getReversed()?(mt.copy(E.projectionMatrix),Cg(mt),Pg(mt),ue.setValue(v,"projectionMatrix",mt)):ue.setValue(v,"projectionMatrix",E.projectionMatrix),ue.setValue(v,"viewMatrix",E.matrixWorldInverse);const ze=ue.map.cameraPosition;ze!==void 0&&ze.setValue(v,Vt.setFromMatrixPosition(E.matrixWorld)),B.logarithmicDepthBuffer&&ue.setValue(v,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ue.setValue(v,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,We=!0,yr=!0)}if(W.isSkinnedMesh){ue.setOptional(v,W,"bindMatrix"),ue.setOptional(v,W,"bindMatrixInverse");const Le=W.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),ue.setValue(v,"boneTexture",Le.boneTexture,q))}W.isBatchedMesh&&(ue.setOptional(v,W,"batchingTexture"),ue.setValue(v,"batchingTexture",W._matricesTexture,q),ue.setOptional(v,W,"batchingIdTexture"),ue.setValue(v,"batchingIdTexture",W._indirectTexture,q),ue.setOptional(v,W,"batchingColorTexture"),W._colorsTexture!==null&&ue.setValue(v,"batchingColorTexture",W._colorsTexture,q));const Ze=Z.morphAttributes;if((Ze.position!==void 0||Ze.normal!==void 0||Ze.color!==void 0)&&bt.update(W,Z,ke),(We||Ot.receiveShadow!==W.receiveShadow)&&(Ot.receiveShadow=W.receiveShadow,ue.setValue(v,"receiveShadow",W.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Je.envMap.value=At,Je.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&H.environment!==null&&(Je.envMapIntensity.value=H.environmentIntensity),We&&(ue.setValue(v,"toneMappingExposure",x.toneMappingExposure),Ot.needsLights&&sd(Je,yr),ft&&j.fog===!0&&K.refreshFogUniforms(Je,ft),K.refreshMaterialUniforms(Je,j,$,et,p.state.transmissionRenderTarget[E.id]),js.upload(v,xc(Ot),Je,q)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(js.upload(v,xc(Ot),Je,q),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ue.setValue(v,"center",W.center),ue.setValue(v,"modelViewMatrix",W.modelViewMatrix),ue.setValue(v,"normalMatrix",W.normalMatrix),ue.setValue(v,"modelMatrix",W.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Le=j.uniformsGroups;for(let ze=0,Eo=Le.length;ze<Eo;ze++){const hi=Le[ze];N.update(hi,ke),N.bind(hi,ke)}}return ke}function sd(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function od(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(E,H,Z){const j=k.get(E);j.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),k.get(E.texture).__webglTexture=H,k.get(E.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:Z,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,H){const Z=k.get(E);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0};const ad=v.createFramebuffer();this.setRenderTarget=function(E,H=0,Z=0){O=E,L=H,P=Z;let j=!0,W=null,ft=!1,yt=!1;if(E){const At=k.get(E);if(At.__useDefaultFramebuffer!==void 0)F.bindFramebuffer(v.FRAMEBUFFER,null),j=!1;else if(At.__webglFramebuffer===void 0)q.setupRenderTarget(E);else if(At.__hasExternalTextures)q.rebindTextures(E,k.get(E.texture).__webglTexture,k.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ft=E.depthTexture;if(At.__boundDepthTexture!==Ft){if(Ft!==null&&k.has(Ft)&&(E.width!==Ft.image.width||E.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(E)}}const zt=E.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(yt=!0);const Ht=k.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ht[H])?W=Ht[H][Z]:W=Ht[H],ft=!0):E.samples>0&&q.useMultisampledRTT(E)===!1?W=k.get(E).__webglMultisampledFramebuffer:Array.isArray(Ht)?W=Ht[Z]:W=Ht,C.copy(E.viewport),G.copy(E.scissor),Y=E.scissorTest}else C.copy(Et).multiplyScalar($).floor(),G.copy(Nt).multiplyScalar($).floor(),Y=Yt;if(Z!==0&&(W=ad),F.bindFramebuffer(v.FRAMEBUFFER,W)&&j&&F.drawBuffers(E,W),F.viewport(C),F.scissor(G),F.setScissorTest(Y),ft){const At=k.get(E.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+H,At.__webglTexture,Z)}else if(yt){const At=k.get(E.texture),zt=H;v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,At.__webglTexture,Z,zt)}else if(E!==null&&Z!==0){const At=k.get(E.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,At.__webglTexture,Z)}T=-1},this.readRenderTargetPixels=function(E,H,Z,j,W,ft,yt,It=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=k.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&yt!==void 0&&(At=At[yt]),At){F.bindFramebuffer(v.FRAMEBUFFER,At);try{const zt=E.textures[It],Ht=zt.format,Ft=zt.type;if(!B.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!B.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-j&&Z>=0&&Z<=E.height-W&&(E.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+It),v.readPixels(H,Z,j,W,pt.convert(Ht),pt.convert(Ft),ft))}finally{const zt=O!==null?k.get(O).__webglFramebuffer:null;F.bindFramebuffer(v.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(E,H,Z,j,W,ft,yt,It=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=k.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&yt!==void 0&&(At=At[yt]),At)if(H>=0&&H<=E.width-j&&Z>=0&&Z<=E.height-W){F.bindFramebuffer(v.FRAMEBUFFER,At);const zt=E.textures[It],Ht=zt.format,Ft=zt.type;if(!B.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!B.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Kt=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,Kt),v.bufferData(v.PIXEL_PACK_BUFFER,ft.byteLength,v.STREAM_READ),E.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+It),v.readPixels(H,Z,j,W,pt.convert(Ht),pt.convert(Ft),0);const ne=O!==null?k.get(O).__webglFramebuffer:null;F.bindFramebuffer(v.FRAMEBUFFER,ne);const me=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await Rg(v,me,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,Kt),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,ft),v.deleteBuffer(Kt),v.deleteSync(me),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,H=null,Z=0){const j=Math.pow(2,-Z),W=Math.floor(E.image.width*j),ft=Math.floor(E.image.height*j),yt=H!==null?H.x:0,It=H!==null?H.y:0;q.setTexture2D(E,0),v.copyTexSubImage2D(v.TEXTURE_2D,Z,0,0,yt,It,W,ft),F.unbindTexture()};const ld=v.createFramebuffer(),cd=v.createFramebuffer();this.copyTextureToTexture=function(E,H,Z=null,j=null,W=0,ft=null){ft===null&&(W!==0?(ur("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ft=W,W=0):ft=0);let yt,It,At,zt,Ht,Ft,Kt,ne,me;const ce=E.isCompressedTexture?E.mipmaps[ft]:E.image;if(Z!==null)yt=Z.max.x-Z.min.x,It=Z.max.y-Z.min.y,At=Z.isBox3?Z.max.z-Z.min.z:1,zt=Z.min.x,Ht=Z.min.y,Ft=Z.isBox3?Z.min.z:0;else{const Ze=Math.pow(2,-W);yt=Math.floor(ce.width*Ze),It=Math.floor(ce.height*Ze),E.isDataArrayTexture?At=ce.depth:E.isData3DTexture?At=Math.floor(ce.depth*Ze):At=1,zt=0,Ht=0,Ft=0}j!==null?(Kt=j.x,ne=j.y,me=j.z):(Kt=0,ne=0,me=0);const re=pt.convert(H.format),Ot=pt.convert(H.type);let de;H.isData3DTexture?(q.setTexture3D(H,0),de=v.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(q.setTexture2DArray(H,0),de=v.TEXTURE_2D_ARRAY):(q.setTexture2D(H,0),de=v.TEXTURE_2D),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,H.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,H.unpackAlignment);const Zt=v.getParameter(v.UNPACK_ROW_LENGTH),ke=v.getParameter(v.UNPACK_IMAGE_HEIGHT),Bi=v.getParameter(v.UNPACK_SKIP_PIXELS),We=v.getParameter(v.UNPACK_SKIP_ROWS),yr=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,ce.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,ce.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,zt),v.pixelStorei(v.UNPACK_SKIP_ROWS,Ht),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Ft);const ue=E.isDataArrayTexture||E.isData3DTexture,Je=H.isDataArrayTexture||H.isData3DTexture;if(E.isDepthTexture){const Ze=k.get(E),Le=k.get(H),ze=k.get(Ze.__renderTarget),Eo=k.get(Le.__renderTarget);F.bindFramebuffer(v.READ_FRAMEBUFFER,ze.__webglFramebuffer),F.bindFramebuffer(v.DRAW_FRAMEBUFFER,Eo.__webglFramebuffer);for(let hi=0;hi<At;hi++)ue&&(v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,k.get(E).__webglTexture,W,Ft+hi),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,k.get(H).__webglTexture,ft,me+hi)),v.blitFramebuffer(zt,Ht,yt,It,Kt,ne,yt,It,v.DEPTH_BUFFER_BIT,v.NEAREST);F.bindFramebuffer(v.READ_FRAMEBUFFER,null),F.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||k.has(E)){const Ze=k.get(E),Le=k.get(H);F.bindFramebuffer(v.READ_FRAMEBUFFER,ld),F.bindFramebuffer(v.DRAW_FRAMEBUFFER,cd);for(let ze=0;ze<At;ze++)ue?v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,Ze.__webglTexture,W,Ft+ze):v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Ze.__webglTexture,W),Je?v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,Le.__webglTexture,ft,me+ze):v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Le.__webglTexture,ft),W!==0?v.blitFramebuffer(zt,Ht,yt,It,Kt,ne,yt,It,v.COLOR_BUFFER_BIT,v.NEAREST):Je?v.copyTexSubImage3D(de,ft,Kt,ne,me+ze,zt,Ht,yt,It):v.copyTexSubImage2D(de,ft,Kt,ne,zt,Ht,yt,It);F.bindFramebuffer(v.READ_FRAMEBUFFER,null),F.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else Je?E.isDataTexture||E.isData3DTexture?v.texSubImage3D(de,ft,Kt,ne,me,yt,It,At,re,Ot,ce.data):H.isCompressedArrayTexture?v.compressedTexSubImage3D(de,ft,Kt,ne,me,yt,It,At,re,ce.data):v.texSubImage3D(de,ft,Kt,ne,me,yt,It,At,re,Ot,ce):E.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,ft,Kt,ne,yt,It,re,Ot,ce.data):E.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,ft,Kt,ne,ce.width,ce.height,re,ce.data):v.texSubImage2D(v.TEXTURE_2D,ft,Kt,ne,yt,It,re,Ot,ce);v.pixelStorei(v.UNPACK_ROW_LENGTH,Zt),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,ke),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Bi),v.pixelStorei(v.UNPACK_SKIP_ROWS,We),v.pixelStorei(v.UNPACK_SKIP_IMAGES,yr),ft===0&&H.generateMipmaps&&v.generateMipmap(de),F.unbindTexture()},this.copyTextureToTexture3D=function(E,H,Z=null,j=null,W=0){return ur('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,H,Z,j,W)},this.initRenderTarget=function(E){k.get(E).__webglFramebuffer===void 0&&q.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?q.setTextureCube(E,0):E.isData3DTexture?q.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?q.setTexture2DArray(E,0):q.setTexture2D(E,0),F.unbindTexture()},this.resetState=function(){L=0,P=0,O=null,F.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}const DM="/showcase/assets/mars-BX2JGd6W.jpg",IM="/showcase/assets/jupiter-CEiO5JSj.jpg",UM="/showcase/assets/neptune-CRPHsRry.jpg";function NM(n){var _;const t=window.innerWidth,e=window.innerHeight,i=new e_,r=new en(75,t/e,.1,1e3);r.position.z=7,r.position.y=3;const s=new LM({antialias:!0});s.setSize(t,e),(_=document.getElementById("spaceScene"))==null||_.appendChild(s.domElement);const o=FM(),a=zM();i.add(a),i.add(BM());const{ufoGroup:l,ufoMesh:c}=OM(),u={};document.addEventListener("keydown",S=>{u[S.code]=!0}),document.addEventListener("keyup",S=>{u[S.code]=!1});function f(S,m,p){const A=document.createElement("button");return A.innerText=S,A.style.position="fixed",A.style.zIndex="1000",A.style.opacity="0.65",A.style.borderRadius="8px",A.style.border="none",A.style.fontSize="18px",A.style.width="48px",A.style.height="48px",A.style.background="#333",A.style.color="#fff",A.style.touchAction="none",Object.assign(A.style,p),A.addEventListener("touchstart",b=>{b.preventDefault(),u[m]=!0}),A.addEventListener("touchend",b=>{b.preventDefault(),u[m]=!1}),A.addEventListener("mousedown",b=>{b.preventDefault(),u[m]=!0}),A.addEventListener("mouseup",b=>{b.preventDefault(),u[m]=!1}),A.addEventListener("mouseleave",()=>{u[m]=!1}),document.body.appendChild(A),A}window.innerWidth<800&&(f("▲","ArrowUp",{left:"60px",bottom:"105px"}),f("◀","ArrowLeft",{left:"10px",bottom:"55px"}),f("▼","ArrowDown",{left:"60px",bottom:"55px"}),f("▶","ArrowRight",{left:"110px",bottom:"55px"}),f("+","Space",{right:"30px",bottom:"105px",width:"64px"}),f("-","ShiftLeft",{right:"30px",bottom:"55px",width:"64px"}));const h=.4;i.add(l),o.forEach(S=>{i.add(S)});function d(S=0){requestAnimationFrame(d);const m=.4,p=.1;let A=null;o.forEach(x=>{const I=l.position.distanceTo(x.position),L=x!=null&&x.radius?x.radius+5:0,P=x!=null&&x.radius?x.radius+10:0;if(I<L){const O=l.position.clone().sub(x.position).normalize();l.position.copy(x.position.clone().add(O.multiplyScalar(L+.5)))}I<P&&(A=x.name)}),n&&n(A),u.ArrowUp&&(l.position.x-=Math.sin(l.rotation.y)*h,l.position.z-=Math.cos(l.rotation.y)*h),u.ArrowDown&&(l.position.x+=Math.sin(l.rotation.y)*h,l.position.z+=Math.cos(l.rotation.y)*h),u.ArrowLeft&&(l.rotation.y+=.03),u.ArrowRight&&(l.rotation.y-=.03),u.Space&&(l.position.y+=h),(u.ShiftLeft||u.ShiftRight)&&(l.position.y-=h);let b=0;u.ArrowLeft?b=-m:u.ArrowRight&&(b=m),c.rotation.y+=(b-c.rotation.y)*p,r.position.x=l.position.x+Math.sin(l.rotation.y)*10,r.position.y=l.position.y+3,r.position.z=l.position.z+Math.cos(l.rotation.y)*10,r.lookAt(l.position),c.rotation.z=S*8e-4,s.render(i,r)}d()}const FM=()=>{const n=i=>new W_().load(i),t=[];return[{name:"About Me",position:new V(30,0,-30),texture:DM,radius:10},{name:"Portfolio",position:new V(-65,5,-70),texture:IM,radius:25},{name:"Resume",position:new V(80,-20,-40),texture:UM,radius:8}].forEach(i=>{const r=new uc(i.radius,32,32),s=new Cl({map:i.texture?n(i.texture):void 0,color:i.texture?16777215:10066329}),o=new Ke(r,s);o.position.copy(i.position),o.name=i.name,o.radius=i.radius,t.push(o)}),t},OM=()=>{const n=new nr,t=new es(0,0,1.5,1.5,0,2*Math.PI,!1,1),e=new es(0,0,.1,.1,0,1.9*Math.PI,!1,1),i=t.getPoints(50),r=e.getPoints(100),s=new Al(i),o=new Al(r),a={depth:.2,bevelEnabled:!0,bevelThickness:.5,bevelSize:1.75,bevelSegments:20},l=new ao(s,a),c=new Cl({color:4521796,metalness:1,roughness:.6}),u=new ao(o,a),f=new Cl({color:6710886,metalness:1,roughness:.6}),h=new Ke(l,c),d=new Ke(u,f);return d.position.z=.4,h.add(d),h.rotation.x=-Math.PI/2,n.add(h),{ufoGroup:n,ufoMesh:h}},BM=()=>{const n=new nr,t=new nn,e=new Vh({color:16777215,size:.1}),i=[];for(let l=0;l<9e3;l++)i.push((Math.random()-.5)*400,(Math.random()-.5)*400,(Math.random()-.5)*400);t.setAttribute("position",new Pe(i,3));const r=new s_(t,e);n.add(r);const s=new Nu(16777215,1);n.add(s);const o=new X_(16777215,6710886,2);n.add(o);const a=new Nu(16777215,.5);return a.position.set(0,-10,10),n.add(a),n},zM=()=>{const n=new cc(1,1.5,32),t=new oc({color:65535,opacity:.5,transparent:!0}),e=new Ke(n,t);return e.rotation.x=Math.PI/2,e},HM="/showcase/assets/family-CKMa-WDJ.jpg",VM={key:0,class:"planet-info"},GM={class:"planet-body"},kM={style:{"text-align":"center"}},WM={key:0},XM={key:1},qM=["src"],YM={key:2},$M={key:3},KM=Wf({__name:"PlanetInfo",props:{planetName:String,visible:Boolean},emits:["close"],setup(n,{emit:t}){return(e,i)=>n.visible?(Sn(),Ai("div",VM,[Ue("div",GM,[Ue("h1",kM,Ma(n.planetName),1),n.planetName==="Portfolio"?(Sn(),Ai("div",WM,i[0]||(i[0]=[Kp('<a href="https://github.com/paulthepen" data-v-3ff30d52>View coding projects/samples</a><h3 style="text-align:center;" data-v-3ff30d52>Website Examples</h3><hr data-v-3ff30d52><div style="display:flex;flex-direction:column;justify-content:space-evenly;align-items:center;" data-v-3ff30d52><div style="display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;" data-v-3ff30d52><img src="https://image.thum.io/get/https://colonialproperties.com" alt="Colonial Properties Screenshot" style="width:50%;max-width:400px;max-height:300px;margin:6px;" data-v-3ff30d52><h4 style="width:50%;" data-v-3ff30d52><a href="https://colonialproperties.com" data-v-3ff30d52>Colonial Properties</a></h4></div><div style="display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;" data-v-3ff30d52><img src="https://image.thum.io/get/https://bearcampcabins.com/" alt="Bear Camp Cabins" style="width:50%;max-width:400px;max-height:300px;margin:6px;" data-v-3ff30d52><h4 style="width:50%;" data-v-3ff30d52><a href="https://bearcampcabins.com/" data-v-3ff30d52>Bear Camp Cabins</a></h4></div><div style="display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;" data-v-3ff30d52><img src="https://image.thum.io/get/https://www.compassvacationproperties.com/" alt="Compass Properties" style="width:50%;max-width:400px;max-height:300px;margin:6px;" data-v-3ff30d52><h4 style="width:50%;" data-v-3ff30d52><a href="https://www.compassvacationproperties.com/" data-v-3ff30d52>Compass Properties</a></h4></div><div style="display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;" data-v-3ff30d52><img src="https://image.thum.io/get/https://erasmokies.com/" alt="ERA" style="width:50%;max-width:400px;max-height:300px;margin:6px;" data-v-3ff30d52><h4 style="width:50%;" data-v-3ff30d52><a href="https://erasmokies.com/" data-v-3ff30d52>ERA In The Smokies</a></h4></div><div style="display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;" data-v-3ff30d52><img src="https://image.thum.io/get/https://www.smcrentals.com/" alt="SMCR" style="width:50%;max-width:400px;max-height:300px;margin:6px;" data-v-3ff30d52><h4 style="width:50%;" data-v-3ff30d52><a href="https://www.smcrentals.com/" data-v-3ff30d52>Smoky Mountain Chalet Rentals</a></h4></div><div style="display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;" data-v-3ff30d52><img src="https://image.thum.io/get/https://www.destinrvresort.com" alt="Destin RV Beach Resort" style="width:50%;max-width:400px;max-height:300px;margin:6px;" data-v-3ff30d52><h4 style="width:50%;" data-v-3ff30d52><a href="https://www.destinrvresort.com" data-v-3ff30d52>Destin RV Beach Resort</a></h4></div><div style="display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;" data-v-3ff30d52><img src="https://image.thum.io/get/https://totaltruck.parts/" alt="Total Truck" style="width:50%;max-width:400px;max-height:300px;margin:6px;" data-v-3ff30d52><h4 style="width:50%;" data-v-3ff30d52><a href="https://totaltruck.parts/" data-v-3ff30d52>Total Truck Outfitter</a></h4></div></div>',4)]))):n.planetName==="About Me"?(Sn(),Ai("div",XM,[Ue("img",{src:Lf(HM),alt:"Family",style:{width:"100%","max-width":"400px",margin:"0 auto",display:"block"}},null,8,qM),i[1]||(i[1]=Ue("p",null,"Hi, there! I'm Paul, and I’m a tech generalist with a soft spot for clean code, problem-solving, and helping people figure things out. I’ve worked as a full-stack developer, IT support lead, and general-purpose tech guy, and sometimes all of them at once. I love getting my hands into systems and making them work better, and I'm always looking for different ways to do that, whether it's spinning up a Docker stack, fixing a stubborn printer, or building my own tools from scratch. I enjoy learning, teaching, and taking complex things and making them feel simple. I’ve supported hundreds of devices, built web apps from scratch, and helped small businesses feel a little less overwhelmed by their tech. When I’m not solving problems, you’ll usually find me playing guitar, working in the garden, or trying to make my kids laugh. If you’re looking for someone who loves both people and technology, you’re in the right place!",-1))])):n.planetName==="Resume"?(Sn(),Ai("div",YM,i[2]||(i[2]=[Ue("iframe",{src:"https://registry.jsonresume.org/paulthepen",width:"100%",height:"600px"},null,-1)]))):(Sn(),Ai("p",$M,Ma(n.planetName)+" is currently under construction...",1))])])):Na("",!0)}}),dc=(n,t)=>{const e=n.__vccOpts||n;for(const[i,r]of t)e[i]=r;return e},JM=dc(KM,[["__scopeId","data-v-3ff30d52"]]),ZM={},jM={class:"info"};function QM(n,t){return Sn(),Ai("div",jM,t[0]||(t[0]=[Ue("div",{class:"body"},[Ue("h1",{style:{"text-align":"center"}},"Welcome to Paul Charpie's Web Space"),Ue("h3",{style:{"text-align":"center"}},"Directions"),Ue("ul",null,[Ue("li",null,"Use arrow keys to move forward, back, left, and right"),Ue("li",null,"Use space to go up, and shift to go down"),Ue("li",null,"Navigate to each planet for more information")])],-1)]))}const ty=dc(ZM,[["render",QM],["__scopeId","data-v-bba933f5"]]),ey=Wf({__name:"App",setup(n){const t=Po(null),e=Po(!0),i=Po(!1),r=()=>{e.value=!1,setTimeout(()=>{i.value=t.value!==null},500)},s=l=>{a(l),setTimeout(()=>{e.value=!0},500)},o=l=>{wa(()=>{l.classList.add("expanded")})},a=l=>{wa(()=>{l.classList.remove("expanded")})};return Yl(()=>{NM(l=>{t.value=l})}),(l,c)=>(Sn(),Ai(ln,null,[c[1]||(c[1]=Ue("div",{id:"spaceScene"},null,-1)),Re(zc,{name:"slide-down",onEnter:r,onAfterEnter:o,onLeave:s},{default:Ra(()=>[t.value?(Sn(),Ua(JM,{key:0,visible:!0,planetName:t.value,onClose:c[0]||(c[0]=u=>t.value=null)},null,8,["planetName"])):Na("",!0)]),_:1}),Re(zc,{name:"slide-down2",onAfterEnter:o,onLeave:a},{default:Ra(()=>[e.value?(Sn(),Ua(ty,{key:0,visible:!0})):Na("",!0)]),_:1})],64))}}),ny=dc(ey,[["__scopeId","data-v-54fde9c3"]]);Fm(ny).mount("#app");
