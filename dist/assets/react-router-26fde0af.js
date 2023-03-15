import{i as p,p as j,m as w,j as x,A as L,s as T,a as V,g as D,r as I}from"./@remix-run-e6e270e5.js";import{R as b,r as o}from"./react-04e5617c.js";/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function z(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const _=typeof Object.is=="function"?Object.is:z,{useState:$,useEffect:G,useLayoutEffect:W,useDebugValue:q}=b;function K(e,t,n){const r=t(),[{inst:a},s]=$({inst:{value:r,getSnapshot:t}});return W(()=>{a.value=r,a.getSnapshot=t,B(a)&&s({inst:a})},[e,r,t]),G(()=>(B(a)&&s({inst:a}),e(()=>{B(a)&&s({inst:a})})),[e]),q(r),r}function B(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!_(n,r)}catch{return!0}}function Q(e,t,n){return t()}const X=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Y=!X,Z=Y?Q:K;"useSyncExternalStore"in b&&(e=>e.useSyncExternalStore)(b);const J=o.createContext(null),k=o.createContext(null),R=o.createContext(null),P=o.createContext(null),v=o.createContext({outlet:null,matches:[]}),F=o.createContext(null);function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U.apply(this,arguments)}function de(e,t){let{relative:n}=t===void 0?{}:t;E()||p(!1);let{basename:r,navigator:a}=o.useContext(R),{hash:s,pathname:l,search:u}=A(e,{relative:n}),c=l;return r!=="/"&&(c=l==="/"?r:x([r,l])),a.createHref({pathname:c,search:u,hash:s})}function E(){return o.useContext(P)!=null}function S(){return E()||p(!1),o.useContext(P).location}function pe(){E()||p(!1);let{basename:e,navigator:t}=o.useContext(R),{matches:n}=o.useContext(v),{pathname:r}=S(),a=JSON.stringify(D(n).map(u=>u.pathnameBase)),s=o.useRef(!1);return o.useEffect(()=>{s.current=!0}),o.useCallback(function(u,c){if(c===void 0&&(c={}),!s.current)return;if(typeof u=="number"){t.go(u);return}let i=I(u,JSON.parse(a),r,c.relative==="path");e!=="/"&&(i.pathname=i.pathname==="/"?e:x([e,i.pathname])),(c.replace?t.replace:t.push)(i,c.state,c)},[e,t,a,r])}function fe(){let{matches:e}=o.useContext(v),t=e[e.length-1];return t?t.params:{}}function A(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=o.useContext(v),{pathname:a}=S(),s=JSON.stringify(D(r).map(l=>l.pathnameBase));return o.useMemo(()=>I(e,JSON.parse(s),a,n==="path"),[e,s,a,n])}function H(e,t){E()||p(!1);let{navigator:n}=o.useContext(R),r=o.useContext(k),{matches:a}=o.useContext(v),s=a[a.length-1],l=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let c=S(),i;if(t){var h;let d=typeof t=="string"?j(t):t;u==="/"||(h=d.pathname)!=null&&h.startsWith(u)||p(!1),i=d}else i=c;let m=i.pathname||"/",f=u==="/"?m:m.slice(u.length)||"/",g=w(e,{pathname:f}),C=ne(g&&g.map(d=>Object.assign({},d,{params:Object.assign({},l,d.params),pathname:x([u,n.encodeLocation?n.encodeLocation(d.pathname).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?u:x([u,n.encodeLocation?n.encodeLocation(d.pathnameBase).pathname:d.pathnameBase])})),a,r||void 0);return t&&C?o.createElement(P.Provider,{value:{location:U({pathname:"/",search:"",hash:"",state:null,key:"default"},i),navigationType:L.Pop}},C):C}function ee(){let e=le(),t=V(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return o.createElement(o.Fragment,null,o.createElement("h2",null,"Unexpected Application Error!"),o.createElement("h3",{style:{fontStyle:"italic"}},t),n?o.createElement("pre",{style:a},n):null,s)}class te extends o.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?o.createElement(v.Provider,{value:this.props.routeContext},o.createElement(F.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function re(e){let{routeContext:t,match:n,children:r}=e,a=o.useContext(J);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),o.createElement(v.Provider,{value:t},r)}function ne(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,a=n==null?void 0:n.errors;if(a!=null){let s=r.findIndex(l=>l.route.id&&(a==null?void 0:a[l.route.id]));s>=0||p(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,l,u)=>{let c=l.route.id?a==null?void 0:a[l.route.id]:null,i=null;n&&(l.route.ErrorBoundary?i=o.createElement(l.route.ErrorBoundary,null):l.route.errorElement?i=l.route.errorElement:i=o.createElement(ee,null));let h=t.concat(r.slice(0,u+1)),m=()=>{let f=s;return c?f=i:l.route.Component?f=o.createElement(l.route.Component,null):l.route.element&&(f=l.route.element),o.createElement(re,{match:l,routeContext:{outlet:s,matches:h},children:f})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?o.createElement(te,{location:n.location,component:i,error:c,children:m(),routeContext:{outlet:null,matches:h}}):m()},null)}var N;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(N||(N={}));var y;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(y||(y={}));function oe(e){let t=o.useContext(k);return t||p(!1),t}function ae(e){let t=o.useContext(v);return t||p(!1),t}function se(e){let t=ae(),n=t.matches[t.matches.length-1];return n.route.id||p(!1),n.route.id}function le(){var e;let t=o.useContext(F),n=oe(y.UseRouteError),r=se(y.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function ue(e){p(!1)}function he(e){let{basename:t="/",children:n=null,location:r,navigationType:a=L.Pop,navigator:s,static:l=!1}=e;E()&&p(!1);let u=t.replace(/^\/*/,"/"),c=o.useMemo(()=>({basename:u,navigator:s,static:l}),[u,s,l]);typeof r=="string"&&(r=j(r));let{pathname:i="/",search:h="",hash:m="",state:f=null,key:g="default"}=r,C=o.useMemo(()=>{let d=T(i,u);return d==null?null:{location:{pathname:d,search:h,hash:m,state:f,key:g},navigationType:a}},[u,i,h,m,f,g,a]);return C==null?null:o.createElement(R.Provider,{value:c},o.createElement(P.Provider,{children:n,value:C}))}function me(e){let{children:t,location:n}=e,r=o.useContext(J),a=r&&!t?r.router.routes:O(t);return H(a,n)}var M;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(M||(M={}));new Promise(()=>{});function O(e,t){t===void 0&&(t=[]);let n=[];return o.Children.forEach(e,(r,a)=>{if(!o.isValidElement(r))return;if(r.type===o.Fragment){n.push.apply(n,O(r.props.children,t));return}r.type!==ue&&p(!1),!r.props.index||!r.props.children||p(!1);let s=[...t,a],l={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=O(r.props.children,s)),n.push(l)}),n}export{R as N,he as R,pe as a,S as b,A as c,fe as d,me as e,ue as f,de as u};