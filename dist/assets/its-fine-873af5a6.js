import{r as u}from"./react-04e5617c.js";var P=Object.defineProperty,h=Object.defineProperties,w=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,i=(e,r,t)=>r in e?P(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,_=(e,r)=>{for(var t in r||(r={}))E.call(r,t)&&i(e,t,r[t]);if(c)for(var t of c(r))x.call(r,t)&&i(e,t,r[t]);return e},y=(e,r)=>h(e,w(r)),p;function v(e,r,t){if(!e)return;if(t(e)===!0)return e;let n=r?e.return:e.child;for(;n;){const a=v(n,r,t);if(a)return a;n=r?null:n.sibling}}function m(e){try{return Object.defineProperties(e,{_currentRenderer:{get(){return null},set(){}},_currentRenderer2:{get(){return null},set(){}}})}catch{return e}}const l=m(u.createContext(null));class b extends u.Component{render(){return u.createElement(l.Provider,{value:this._reactInternals},this.props.children)}}const{ReactCurrentOwner:d,ReactCurrentDispatcher:f}=(p=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)!=null?p:{};function C(){const e=u.useContext(l),r=u.useId();return u.useMemo(()=>{var n;return(n=d==null?void 0:d.current)!=null?n:v(e,!1,a=>{let o=a.memoizedState;for(;o;){if(o.memoizedState===r)return!0;o=o.next}})},[e,r])}function R(){var e,r;const t=C(),[n]=u.useState(()=>new Map);n.clear();let a=t;for(;a;){const o=(e=a.type)==null?void 0:e._context;o&&o!==l&&!n.has(o)&&n.set(o,(r=f==null?void 0:f.current)==null?void 0:r.readContext(m(o))),a=a.return}return u.useMemo(()=>Array.from(n.keys()).reduce((o,s)=>O=>u.createElement(o,null,u.createElement(s.Provider,y(_({},O),{value:n.get(s)}))),o=>u.createElement(b,_({},o))),[n])}export{b as F,R as u};