import{a as c,t as g}from"../chunks/disclose-version.CzQY0kcY.js";import"../chunks/legacy.CtYM5vDw.js";import{p as z,A as p,t as N,a as D,B as O,$ as L,f as P,h as b,c as d,s as a,r as f}from"../chunks/runtime.s4LxpMgD.js";import{s as B}from"../chunks/render.Cx1vX2M6.js";import{p as k,i as E}from"../chunks/props.Bqh0rTSG.js";import{s as n,h}from"../chunks/attributes.CLe6I5cX.js";import{h as F}from"../chunks/svelte-head.BL-8Fur5.js";import{i as G}from"../chunks/lifecycle.DyIOpnj9.js";import{h as H,l as R,m as T}from"../chunks/seal_copyright.DnnDHDMe.js";var V=g('<meta name="description" content="imprint in german from erecht24 API v2 test project">'),q=g("<!> Letzte Änderung: <!>",1),C=g('<!> Letzte Änderung: <!> <br class="inline-breack"> Daten konnten nicht aktuallisiert werden. <br class="inline-breack"> <hgl class="highlight_error"> </hgl> <br class="inline-breack"> Für weitere Informationen siehe: <a href="https://api-docs.e-recht24.de/">API Doku</a>',1),K=g('<section class="content"><p><!> <br class="inline-breack"> <a href="https://www.digistore24.com/redir/174027/ecmin_gbr/" class="nolink"><img alt="Vertreten durch die eRecht24 GmbH"></a></p></section>');function re(S,i){z(i,!1);let s=k(i,"data",8),w=k(i,"target",8,"_blank"),j=k(i,"rel",8,"noopener noreferrer"),o=O("false"),_=O(null);if(s().error==null){let e=JSON.stringify(s().apidata.html_de,null,4);e=e.replace(/\r?\n|\r/g,""),e=e.replace(/mustermann@musterfirma.de/gm,"<a href=mailto:mustermann@musterfirma.de>mustermann@musterfirma.de</a>"),p(o,JSON.parse(e)),p(_,!0)}else{let e=JSON.stringify(H,null,4);e=e.replace(/\r?\n|\r/g,""),p(o,JSON.parse(e)),p(_,!1)}G();var u=K();F(e=>{var r=V();L.title="erecht24 API v2 Test Project",c(e,r)});var A=d(u),I=d(A);E(I,()=>b(_),e=>{var r=q(),t=P(r);h(t,()=>b(o));var m=a(t,2);h(m,()=>s().apidata.modified),c(e,r)},e=>{var r=C(),t=P(r);h(t,()=>b(o));var m=a(t,2);h(m,()=>T);var v=a(m,6),y=d(v);f(v);var J=a(v,4);N(()=>{B(y,`Error: ${s().error??""}`),n(J,"target",w()),n(J,"rel",j())}),c(e,r)});var l=a(I,4),x=d(l);n(x,"src",R),f(l),f(A),f(u),N(()=>{n(l,"target",w()),n(l,"rel",j())}),c(S,u),D()}export{re as component};
