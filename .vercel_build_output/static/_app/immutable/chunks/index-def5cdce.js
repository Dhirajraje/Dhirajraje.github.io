function $(){}const G=t=>t;function yt(t,e){for(const n in e)t[n]=e[n];return t}function it(t){return t()}function tt(){return Object.create(null)}function C(t){t.forEach(it)}function J(t){return typeof t=="function"}function Wt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let B;function Gt(t,e){return B||(B=document.createElement("a")),B.href=e,t===B.href}function gt(t){return Object.keys(t).length===0}function xt(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Jt(t,e,n){t.$$.on_destroy.push(xt(e,n))}function Kt(t,e,n,i){if(t){const s=st(t,e,n,i);return t[0](s)}}function st(t,e,n,i){return t[1]&&i?yt(n.ctx.slice(),t[1](i(e))):n.ctx}function Qt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)c[l]=e.dirty[l]|s[l];return c}return e.dirty|s}return e.dirty}function Ut(t,e,n,i,s,c){if(s){const r=st(e,n,i,c);t.p(r,s)}}function Vt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Xt(t){return t==null?"":t}const rt=typeof window!="undefined";let K=rt?()=>window.performance.now():()=>Date.now(),Q=rt?t=>requestAnimationFrame(t):$;const E=new Set;function ot(t){E.forEach(e=>{e.c(t)||(E.delete(e),e.f())}),E.size!==0&&Q(ot)}function U(t){let e;return E.size===0&&Q(ot),{promise:new Promise(n=>{E.add(e={c:t,f:n})}),abort(){E.delete(e)}}}let F=!1;function wt(){F=!0}function bt(){F=!1}function $t(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function vt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const u=e[o].claim_order,f=(s>0&&e[n[s]].claim_order<=u?s+1:$t(1,s,_=>e[n[_]].claim_order,u))-1;i[o]=n[f]+1;const a=f+1;n[a]=o,s=Math.max(a,s)}const c=[],r=[];let l=e.length-1;for(let o=n[s]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);l>=o;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);c.reverse(),r.sort((o,u)=>o.claim_order-u.claim_order);for(let o=0,u=0;o<r.length;o++){for(;u<c.length&&r[o].claim_order>=c[u].claim_order;)u++;const f=u<c.length?c[u]:null;t.insertBefore(r[o],f)}}function kt(t,e){t.appendChild(e)}function ct(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Et(t){const e=lt("style");return Ct(ct(t),e),e.sheet}function Ct(t,e){kt(t.head||t,e)}function St(t,e){if(F){for(vt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Yt(t,e,n){F&&!n?St(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Nt(t){t.parentNode.removeChild(t)}function lt(t){return document.createElement(t)}function jt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function V(t){return document.createTextNode(t)}function Zt(){return V(" ")}function te(){return V("")}function ee(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ne(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function At(t){return Array.from(t.childNodes)}function Mt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ut(t,e,n,i,s=!1){Mt(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function at(t,e,n,i){return ut(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||c.push(l.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ie(t,e,n){return at(t,e,n,lt)}function se(t,e,n){return at(t,e,n,jt)}function Rt(t,e){return ut(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>V(e),!0)}function re(t){return Rt(t," ")}function oe(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ce(t,e){t.value=e==null?"":e}function le(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Bt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}const D=new Map;let T=0;function Ot(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Pt(t,e){const n={stylesheet:Et(e),rules:{}};return D.set(t,n),n}function X(t,e,n,i,s,c,r,l=0){const o=16.666/i;let u=`{
`;for(let m=0;m<=1;m+=o){const g=e+(n-e)*c(m);u+=m*100+`%{${r(g,1-g)}}
`}const f=u+`100% {${r(n,1-n)}}
}`,a=`__svelte_${Ot(f)}_${l}`,_=ct(t),{stylesheet:d,rules:h}=D.get(_)||Pt(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${a} ${i}ms linear ${s}ms 1 both`,T+=1,a}function z(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),T-=s,T||qt())}function qt(){Q(()=>{T||(D.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),D.clear())})}function ue(t,e,n,i){if(!e)return $;const s=t.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return $;const{delay:c=0,duration:r=300,easing:l=G,start:o=K()+c,end:u=o+r,tick:f=$,css:a}=n(t,{from:e,to:s},i);let _=!0,d=!1,h;function y(){a&&(h=X(t,0,1,r,c,l,a)),c||(d=!0)}function m(){a&&z(t,h),_=!1}return U(g=>{if(!d&&g>=o&&(d=!0),d&&g>=u&&(f(1,0),m()),!_)return!1;if(d){const b=g-o,v=0+1*l(b/r);f(v,1-v)}return!0}),y(),f(0,1),m}function ae(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,Dt(t,s)}}function Dt(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),s=i.transform==="none"?"":i.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let A;function j(t){A=t}function Y(){if(!A)throw new Error("Function called outside component initialization");return A}function fe(t){Y().$$.on_mount.push(t)}function _e(t){Y().$$.after_update.push(t)}function de(t,e){return Y().$$.context.set(t,e),e}const N=[],et=[],P=[],nt=[],ft=Promise.resolve();let W=!1;function _t(){W||(W=!0,ft.then(dt))}function he(){return _t(),ft}function M(t){P.push(t)}const I=new Set;let O=0;function dt(){const t=A;do{for(;O<N.length;){const e=N[O];O++,j(e),Tt(e.$$)}for(j(null),N.length=0,O=0;et.length;)et.pop()();for(let e=0;e<P.length;e+=1){const n=P[e];I.has(n)||(I.add(n),n())}P.length=0}while(N.length);for(;nt.length;)nt.pop()();W=!1,I.clear(),j(t)}function Tt(t){if(t.fragment!==null){t.update(),C(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}let S;function ht(){return S||(S=Promise.resolve(),S.then(()=>{S=null})),S}function L(t,e,n){t.dispatchEvent(Bt(`${e?"intro":"outro"}${n}`))}const q=new Set;let k;function me(){k={r:0,c:[],p:k}}function pe(){k.r||C(k.c),k=k.p}function mt(t,e){t&&t.i&&(q.delete(t),t.i(e))}function zt(t,e,n,i){if(t&&t.o){if(q.has(t))return;q.add(t),k.c.push(()=>{q.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const pt={duration:0};function ye(t,e,n){let i=e(t,n),s=!1,c,r,l=0;function o(){c&&z(t,c)}function u(){const{delay:a=0,duration:_=300,easing:d=G,tick:h=$,css:y}=i||pt;y&&(c=X(t,0,1,_,a,d,y,l++)),h(0,1);const m=K()+a,g=m+_;r&&r.abort(),s=!0,M(()=>L(t,!0,"start")),r=U(b=>{if(s){if(b>=g)return h(1,0),L(t,!0,"end"),o(),s=!1;if(b>=m){const v=d((b-m)/_);h(v,1-v)}}return s})}let f=!1;return{start(){f||(f=!0,z(t),J(i)?(i=i(),ht().then(u)):u())},invalidate(){f=!1},end(){s&&(o(),s=!1)}}}function ge(t,e,n){let i=e(t,n),s=!0,c;const r=k;r.r+=1;function l(){const{delay:o=0,duration:u=300,easing:f=G,tick:a=$,css:_}=i||pt;_&&(c=X(t,1,0,u,o,f,_));const d=K()+o,h=d+u;M(()=>L(t,!1,"start")),U(y=>{if(s){if(y>=h)return a(0,1),L(t,!1,"end"),--r.r||C(r.c),!1;if(y>=d){const m=f((y-d)/u);a(1-m,m)}}return s})}return J(i)?ht().then(()=>{i=i(),l()}):l(),{end(o){o&&i.tick&&i.tick(1,0),s&&(c&&z(t,c),s=!1)}}}function Lt(t,e){zt(t,1,1,()=>{e.delete(t.key)})}function xe(t,e){t.f(),Lt(t,e)}function we(t,e,n,i,s,c,r,l,o,u,f,a){let _=t.length,d=c.length,h=_;const y={};for(;h--;)y[t[h].key]=h;const m=[],g=new Map,b=new Map;for(h=d;h--;){const p=a(s,c,h),x=n(p);let w=r.get(x);w?i&&w.p(p,e):(w=u(x,p),w.c()),g.set(x,m[h]=w),x in y&&b.set(x,Math.abs(h-y[x]))}const v=new Set,Z=new Set;function H(p){mt(p,1),p.m(l,f),r.set(p.key,p),f=p.first,d--}for(;_&&d;){const p=m[d-1],x=t[_-1],w=p.key,R=x.key;p===x?(f=p.first,_--,d--):g.has(R)?!r.has(w)||v.has(w)?H(p):Z.has(R)?_--:b.get(w)>b.get(R)?(Z.add(w),H(p)):(v.add(R),_--):(o(x,r),_--)}for(;_--;){const p=t[_];g.has(p.key)||o(p,r)}for(;d;)H(m[d-1]);return m}function be(t,e){const n={},i={},s={$$scope:1};let c=t.length;for(;c--;){const r=t[c],l=e[c];if(l){for(const o in r)o in l||(i[o]=1);for(const o in l)s[o]||(n[o]=l[o],s[o]=1);t[c]=l}else for(const o in r)s[o]=1}for(const r in i)r in n||(n[r]=void 0);return n}function $e(t){return typeof t=="object"&&t!==null?t:{}}function ve(t){t&&t.c()}function ke(t,e){t&&t.l(e)}function Ft(t,e,n,i){const{fragment:s,on_mount:c,on_destroy:r,after_update:l}=t.$$;s&&s.m(e,n),i||M(()=>{const o=c.map(it).filter(J);r?r.push(...o):C(o),t.$$.on_mount=[]}),l.forEach(M)}function Ht(t,e){const n=t.$$;n.fragment!==null&&(C(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function It(t,e){t.$$.dirty[0]===-1&&(N.push(t),_t(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ee(t,e,n,i,s,c,r,l=[-1]){const o=A;j(t);const u=t.$$={fragment:null,ctx:null,props:c,update:$,not_equal:s,bound:tt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:tt(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};r&&r(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return u.ctx&&s(u.ctx[a],u.ctx[a]=h)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](h),f&&It(t,a)),_}):[],u.update(),f=!0,C(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){wt();const a=At(e.target);u.fragment&&u.fragment.l(a),a.forEach(Nt)}else u.fragment&&u.fragment.c();e.intro&&mt(t.$$.fragment),Ft(t,e.target,e.anchor,e.customElement),bt(),dt()}j(o)}class Ce{$destroy(){Ht(this,1),this.$destroy=$}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!gt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{C as $,$e as A,Ht as B,yt as C,he as D,$ as E,J as F,jt as G,se as H,St as I,G as J,Xt as K,ee as L,M,ye as N,ge as O,we as P,Jt as Q,ae as R,Ce as S,ue as T,xe as U,Kt as V,Ut as W,Vt as X,Qt as Y,Gt as Z,ce as _,At as a,ne as b,ie as c,Nt as d,lt as e,le as f,Yt as g,Rt as h,Ee as i,oe as j,Zt as k,te as l,re as m,me as n,zt as o,pe as p,mt as q,de as r,Wt as s,V as t,_e as u,fe as v,ve as w,ke as x,Ft as y,be as z};