import{F as Tt,S as tt,i as et,s as rt,G as ht,H as ft,a as z,d as b,b as c,g as T,I as w,E as ut,J as St,e as u,k as y,w as F,c as v,m as k,x as vt,K as zt,y as R,L as At,n as ot,o as A,B as Z,p as at,q as S,M as Yt,N as Dt,O as Lt,P as Nt,l as $t,Q as Xt,R as Bt,T as Ht,U as Pt,V as Ut,t as Q,h as W,f as bt,W as Vt,X as qt,Y as Ot}from"../chunks/index-def5cdce.js";import{r as Ft,t as Rt}from"../chunks/Toasts.svelte_svelte_type_style_lang-60ef6f6d.js";import"../chunks/index-6c61b173.js";function Ct(l){const t=l-1;return t*t*t+1}function Zt(l,{from:t,to:e},r={}){const o=getComputedStyle(l),n=o.transform==="none"?"":o.transform,[a,i]=o.transformOrigin.split(" ").map(parseFloat),s=t.left+t.width*a/e.width-(e.left+a),d=t.top+t.height*i/e.height-(e.top+i),{delay:m=0,duration:f=x=>Math.sqrt(x)*120,easing:$=Ct}=r;return{delay:m,duration:Tt(f)?f(Math.sqrt(s*s+d*d)):f,easing:$,css:(x,C)=>{const h=C*s,_=C*d,E=x+C*t.width/e.width,M=x+C*t.height/e.height;return`transform: ${n} translate(${h}px, ${_}px) scale(${E}, ${M});`}}}function Gt(l){let t,e,r,o,n;return{c(){t=ht("svg"),e=ht("path"),o=ht("path"),this.h()},l(a){t=ft(a,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var i=z(t);e=ft(i,"path",{d:!0,fill:!0}),z(e).forEach(b),o=ft(i,"path",{d:!0,fill:!0}),z(o).forEach(b),i.forEach(b),this.h()},h(){c(e,"d","M0.571429 0.571436C0.255838 0.887027 0.255838 1.3987 0.571429 1.71429L6.28571 7.42858C6.6013 7.74417 7.11298 7.74417 7.42857 7.42858C7.74416 7.11299 7.74416 6.60131 7.42857 6.28572L1.71429 0.571437C1.3987 0.255845 0.887021 0.255845 0.571429 0.571436Z"),c(e,"fill",r=`var(${l[0]}, var(--as-toast-color, black))`),c(o,"d","M7.42857 0.57141C7.11298 0.255819 6.60131 0.255819 6.28571 0.57141L0.571431 6.28569C0.25584 6.60128 0.255839 7.11296 0.57143 7.42855C0.887021 7.74414 1.3987 7.74414 1.71429 7.42855L7.42857 1.71427C7.74416 1.39868 7.74416 0.887002 7.42857 0.57141Z"),c(o,"fill",n=`var(${l[0]}, var(--as-toast-color, black))`),c(t,"width","8"),c(t,"height","8"),c(t,"viewBox","0 0 8 8"),c(t,"fill","none"),c(t,"xmlns","http://www.w3.org/2000/svg")},m(a,i){T(a,t,i),w(t,e),w(t,o)},p(a,[i]){i&1&&r!==(r=`var(${a[0]}, var(--as-toast-color, black))`)&&c(e,"fill",r),i&1&&n!==(n=`var(${a[0]}, var(--as-toast-color, black))`)&&c(o,"fill",n)},i:ut,o:ut,d(a){a&&b(t)}}}function Jt(l,t,e){let r,{type:o="info"}=t;return l.$$set=n=>{"type"in n&&e(1,o=n.type)},l.$$.update=()=>{l.$$.dirty&2&&e(0,r=`--as-toast-${o}-color`)},[r,o]}class Kt extends tt{constructor(t){super(),et(this,t,Jt,Gt,rt,{type:1})}}function Qt(l,{delay:t=0,duration:e=400,easing:r=St}={}){const o=+getComputedStyle(l).opacity;return{delay:t,duration:e,easing:r,css:n=>`opacity: ${n*o}`}}function Wt(l,{delay:t=0,duration:e=400,easing:r=Ct,x:o=0,y:n=0,opacity:a=0}={}){const i=getComputedStyle(l),s=+i.opacity,d=i.transform==="none"?"":i.transform,m=s*(1-a);return{delay:t,duration:e,easing:r,css:(f,$)=>`
			transform: ${d} translate(${(1-f)*o}px, ${(1-f)*n}px);
			opacity: ${s-m*$}`}}function te(l){let t,e,r=l[0].msg+"",o,n,a,i,s,d,m,f,$;var x=l[1];function C(h){return{props:{type:h[0].type}}}return x&&(a=new x(C(l))),{c(){t=u("div"),e=u("span"),o=y(),n=u("button"),a&&F(a.$$.fragment),this.h()},l(h){t=v(h,"DIV",{class:!0});var _=z(t);e=v(_,"SPAN",{role:!0});var E=z(e);E.forEach(b),o=k(_),n=v(_,"BUTTON",{"aria-label":!0,class:!0});var M=z(n);a&&vt(a.$$.fragment,M),M.forEach(b),_.forEach(b),this.h()},h(){c(e,"role","status"),c(n,"aria-label","Cancel Button"),c(n,"class","svelte-1tfgvzt"),c(t,"class",i=zt(l[0].type)+" svelte-1tfgvzt")},m(h,_){T(h,t,_),w(t,e),e.innerHTML=r,w(t,o),w(t,n),a&&R(a,n,null),m=!0,f||($=At(n,"click",l[2]),f=!0)},p(h,[_]){(!m||_&1)&&r!==(r=h[0].msg+"")&&(e.innerHTML=r);const E={};if(_&1&&(E.type=h[0].type),x!==(x=h[1])){if(a){ot();const M=a;A(M.$$.fragment,1,0,()=>{Z(M,1)}),at()}x?(a=new x(C(h)),F(a.$$.fragment),S(a.$$.fragment,1),R(a,n,null)):a=null}else x&&a.$set(E);(!m||_&1&&i!==(i=zt(h[0].type)+" svelte-1tfgvzt"))&&c(t,"class",i)},i(h){m||(a&&S(a.$$.fragment,h),Yt(()=>{d&&d.end(1),s=Dt(t,Wt,{y:-600,duration:400}),s.start()}),m=!0)},o(h){a&&A(a.$$.fragment,h),s&&s.invalidate(),d=Lt(t,Qt,{}),m=!1},d(h){h&&b(t),a&&Z(a),h&&d&&d.end(),f=!1,$()}}}function ee(l,t,e){let{toast:r}=t,{cancelIcon:o}=t;function n(){Ft(r.id)}return l.$$set=a=>{"toast"in a&&e(0,r=a.toast),"cancelIcon"in a&&e(1,o=a.cancelIcon)},[r,o,n]}class re extends tt{constructor(t){super(),et(this,t,ee,te,rt,{toast:0,cancelIcon:1})}}function jt(l,t,e){const r=l.slice();return r[3]=t[e],r}function Et(l){let t,e=[],r=new Map,o,n=l[2];const a=i=>i[3].id;for(let i=0;i<n.length;i+=1){let s=jt(l,n,i),d=a(s);r.set(d,e[i]=It(d,s))}return{c(){t=u("ul");for(let i=0;i<e.length;i+=1)e[i].c();this.h()},l(i){t=v(i,"UL",{class:!0});var s=z(t);for(let d=0;d<e.length;d+=1)e[d].l(s);s.forEach(b),this.h()},h(){c(t,"class","svelte-3cs69q")},m(i,s){T(i,t,s);for(let d=0;d<e.length;d+=1)e[d].m(t,null);o=!0},p(i,s){if(s&7){n=i[2],ot();for(let d=0;d<e.length;d+=1)e[d].r();e=Nt(e,s,a,1,i,n,r,t,Pt,It,null,jt);for(let d=0;d<e.length;d+=1)e[d].a();at()}},i(i){if(!o){for(let s=0;s<n.length;s+=1)S(e[s]);o=!0}},o(i){for(let s=0;s<e.length;s+=1)A(e[s]);o=!1},d(i){i&&b(t);for(let s=0;s<e.length;s+=1)e[s].d()}}}function It(l,t){let e,r,o,n,a=ut,i;var s=t[0];function d(m){return{props:{toast:m[3],cancelIcon:m[1]}}}return s&&(r=new s(d(t))),{key:l,first:null,c(){e=u("li"),r&&F(r.$$.fragment),o=y(),this.h()},l(m){e=v(m,"LI",{});var f=z(e);r&&vt(r.$$.fragment,f),o=k(f),f.forEach(b),this.h()},h(){this.first=e},m(m,f){T(m,e,f),r&&R(r,e,null),w(e,o),i=!0},p(m,f){t=m;const $={};if(f&4&&($.toast=t[3]),f&2&&($.cancelIcon=t[1]),s!==(s=t[0])){if(r){ot();const x=r;A(x.$$.fragment,1,0,()=>{Z(x,1)}),at()}s?(r=new s(d(t)),F(r.$$.fragment),S(r.$$.fragment,1),R(r,e,o)):r=null}else s&&r.$set($)},r(){n=e.getBoundingClientRect()},f(){Bt(e),a()},a(){a(),a=Ht(e,n,Zt,{})},i(m){i||(r&&S(r.$$.fragment,m),i=!0)},o(m){r&&A(r.$$.fragment,m),i=!1},d(m){m&&b(e),r&&Z(r)}}}function oe(l){let t,e,r=l[2].length&&Et(l);return{c(){r&&r.c(),t=$t()},l(o){r&&r.l(o),t=$t()},m(o,n){r&&r.m(o,n),T(o,t,n),e=!0},p(o,[n]){o[2].length?r?(r.p(o,n),n&4&&S(r,1)):(r=Et(o),r.c(),S(r,1),r.m(t.parentNode,t)):r&&(ot(),A(r,1,1,()=>{r=null}),at())},i(o){e||(S(r),e=!0)},o(o){A(r),e=!1},d(o){r&&r.d(o),o&&b(t)}}}function ae(l,t,e){let r;Xt(l,Rt,a=>e(2,r=a));let{toastComponent:o=re}=t,{cancelIcon:n=Kt}=t;return l.$$set=a=>{"toastComponent"in a&&e(0,o=a.toastComponent),"cancelIcon"in a&&e(1,n=a.cancelIcon)},[o,n,r]}class ie extends tt{constructor(t){super(),et(this,t,ae,oe,rt,{toastComponent:0,cancelIcon:1})}}function ne(l){let t,e,r,o,n,a,i,s,d,m,f,$,x,C,h,_,E,M,U,it,V,nt,q,st,O,G,Y,I,N,lt,ct,X,wt,dt,B,pt,gt,J,L,D,H;const mt=l[1].default,j=Ut(mt,l,l[0],null);return L=new ie({}),{c(){t=u("head"),e=u("title"),r=Q("Dhiraj Salunke | Portfolio"),o=y(),n=u("meta"),a=y(),i=u("meta"),s=y(),d=u("meta"),m=y(),f=u("meta"),$=y(),x=u("meta"),C=y(),h=u("meta"),_=y(),E=u("meta"),M=y(),U=u("meta"),it=y(),V=u("meta"),nt=y(),q=u("meta"),st=y(),O=u("meta"),G=y(),Y=u("div"),I=u("a"),N=u("div"),lt=Q("Hi!"),ct=y(),X=u("div"),wt=Q("I'm open to interviews"),dt=y(),B=u("div"),pt=Q("Click to get in touch"),gt=y(),j&&j.c(),J=y(),D=u("div"),F(L.$$.fragment),this.h()},l(g){t=v(g,"HEAD",{});var p=z(t);e=v(p,"TITLE",{});var xt=z(e);r=W(xt,"Dhiraj Salunke | Portfolio"),xt.forEach(b),o=k(p),n=v(p,"META",{name:!0,content:!0}),a=k(p),i=v(p,"META",{property:!0,content:!0}),s=k(p),d=v(p,"META",{property:!0,content:!0}),m=k(p),f=v(p,"META",{property:!0,content:!0}),$=k(p),x=v(p,"META",{property:!0,content:!0}),C=k(p),h=v(p,"META",{property:!0,content:!0}),_=k(p),E=v(p,"META",{name:!0,content:!0}),M=k(p),U=v(p,"META",{property:!0,content:!0}),it=k(p),V=v(p,"META",{name:!0,content:!0}),nt=k(p),q=v(p,"META",{name:!0,content:!0}),st=k(p),O=v(p,"META",{name:!0,content:!0}),p.forEach(b),G=k(g),Y=v(g,"DIV",{});var K=z(Y);I=v(K,"A",{href:!0,class:!0,style:!0});var P=z(I);N=v(P,"DIV",{class:!0});var yt=z(N);lt=W(yt,"Hi!"),yt.forEach(b),ct=k(P),X=v(P,"DIV",{class:!0});var kt=z(X);wt=W(kt,"I'm open to interviews"),kt.forEach(b),dt=k(P),B=v(P,"DIV",{class:!0});var _t=z(B);pt=W(_t,"Click to get in touch"),_t.forEach(b),P.forEach(b),gt=k(K),j&&j.l(K),K.forEach(b),J=k(g),D=v(g,"DIV",{style:!0});var Mt=z(D);vt(L.$$.fragment,Mt),this.h()},h(){c(n,"name","description"),c(n,"content","I am a full-stack web developer and flutter developer. Trying to contribute my share to make the world better place"),c(i,"property","og:url"),c(i,"content","https://dhiraj.homonovus.in/"),c(d,"property","og:type"),c(d,"content","website"),c(f,"property","og:title"),c(f,"content","Dhiraj Salunke | Portfolio"),c(x,"property","og:description"),c(x,"content","I am a full-stack web developer and flutter developer. Trying to contribute my share to make the world better place"),c(h,"property","og:image"),c(h,"content","https://dhiraj.homonovus.in/developer.gif"),c(E,"name","twitter:card"),c(E,"content","summary_large_image"),c(U,"property","twitter:url"),c(U,"content","https://dhiraj.homonovus.in/"),c(V,"name","twitter:title"),c(V,"content","Dhiraj Salunke | Portfolio"),c(q,"name","twitter:description"),c(q,"content","I am a full-stack web developer and flutter developer. Trying to contribute my share to make the world better place"),c(O,"name","twitter:image"),c(O,"content","https://dhiraj.homonovus.in/developer.gif"),c(N,"class",""),c(X,"class",""),c(B,"class",""),c(I,"href","#contact"),c(I,"class","cursor-pointer z-10 hover:shadow-xl hover:bg-indigo-700 shadow-indigo-300 transition-all duration-300 fixed font-bold text-white bg-indigo-900 origin-top float-right mt-9 ml-9 w-72 text-center"),bt(I,"transform","translateX(-50%) rotate(-45deg)"),bt(D,"display","contents"),bt(D,"--as-toast-border","none")},m(g,p){T(g,t,p),w(t,e),w(e,r),w(t,o),w(t,n),w(t,a),w(t,i),w(t,s),w(t,d),w(t,m),w(t,f),w(t,$),w(t,x),w(t,C),w(t,h),w(t,_),w(t,E),w(t,M),w(t,U),w(t,it),w(t,V),w(t,nt),w(t,q),w(t,st),w(t,O),T(g,G,p),T(g,Y,p),w(Y,I),w(I,N),w(N,lt),w(I,ct),w(I,X),w(X,wt),w(I,dt),w(I,B),w(B,pt),w(Y,gt),j&&j.m(Y,null),T(g,J,p),T(g,D,p),R(L,D,null),H=!0},p(g,[p]){j&&j.p&&(!H||p&1)&&Vt(j,mt,g,g[0],H?Ot(mt,g[0],p,null):qt(g[0]),null)},i(g){H||(S(j,g),S(L.$$.fragment,g),H=!0)},o(g){A(j,g),A(L.$$.fragment,g),H=!1},d(g){g&&b(t),g&&b(G),g&&b(Y),j&&j.d(g),g&&b(J),g&&b(D),Z(L,g)}}}function se(l,t,e){let{$$slots:r={},$$scope:o}=t;return l.$$set=n=>{"$$scope"in n&&e(0,o=n.$$scope)},[o,r]}class de extends tt{constructor(t){super(),et(this,t,se,ne,rt,{})}}export{de as default};