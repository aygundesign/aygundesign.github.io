(function(){
  const a=document.createElement("link").relList;
  if(a&&a.supports&&a.supports("modulepreload"))return;
  for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);
    new MutationObserver(c=>{
    for(const d of c)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)
  }
    ).observe(document,{
    childList:!0,subtree:!0
  }
  );
    function s(c){
      const d={
    }
    ;
    return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",
    d
  }
    function o(c){
    if(c.ep)return;
    c.ep=!0;
    const d=s(c);
    fetch(c.href,d)
  }
}
)();
  var Iu={
    exports:{
  }
}
  ,El={
}
;
var Vp;
  function Rb(){
  if(Vp)return El;
  Vp=1;
  var i=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");
    function s(o,c,d){
    var f=null;
      if(d!==void 0&&(f=""+d),c.key!==void 0&&(f=""+c.key),"key"in c){
        d={
      }
      ;
      for(var m in c)m!=="key"&&(d[m]=c[m])
    }
    else d=c;
      return c=d.ref,{
      $$typeof:i,type:o,key:f,ref:c!==void 0?c:null,props:d
    }
  }
  return El.Fragment=a,El.jsx=s,El.jsxs=s,El
}
var Op;
  function Vb(){
  return Op||(Op=1,Iu.exports=Rb()),Iu.exports
}
  var S=Vb(),tc={
    exports:{
  }
}
  ,ut={
}
;
var _p;
  function Ob(){
  if(_p)return ut;
  _p=1;
  var i=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),
  c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),
  y=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),x=Symbol.iterator;
    function w(A){
    return A===null||typeof A!="object"?null:(A=x&&A[x]||A["@@iterator"],typeof A=="function"?A:null)
  }
    var N={
      isMounted:function(){
      return!1
    }
      ,enqueueForceUpdate:function(){
    }
      ,enqueueReplaceState:function(){
    }
      ,enqueueSetState:function(){
    }
  }
    ,D=Object.assign,B={
  }
  ;
    function H(A,U,Q){
    this.props=A,this.context=U,this.refs=B,this.updater=Q||N
  }
    H.prototype.isReactComponent={
  }
    ,H.prototype.setState=function(A,U){
    if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this,A,U,"setState")
  }
    ,H.prototype.forceUpdate=function(A){
    this.updater.enqueueForceUpdate(this,A,"forceUpdate")
  }
  ;
    function Y(){
  }
  Y.prototype=H.prototype;
    function G(A,U,Q){
    this.props=A,this.context=U,this.refs=B,this.updater=Q||N
  }
  var q=G.prototype=new Y;
  q.constructor=G,D(q,H.prototype),q.isPureReactComponent=!0;
  var et=Array.isArray;
    function it(){
  }
    var J={
    H:null,A:null,T:null,S:null
  }
  ,P=Object.prototype.hasOwnProperty;
    function lt(A,U,Q){
    var Z=Q.ref;
      return{
      $$typeof:i,type:A,key:U,ref:Z!==void 0?Z:null,props:Q
    }
  }
    function tt(A,U){
    return lt(A.type,U,A.props)
  }
    function mt(A){
    return typeof A=="object"&&A!==null&&A.$$typeof===i
  }
    function xt(A){
      var U={
      "=":"=0",":":"=2"
    }
    ;
      return"$"+A.replace(/[=:]/g,function(Q){
      return U[Q]
    }
    )
  }
  var Ft=/\/+/g;
    function kt(A,U){
    return typeof A=="object"&&A!==null&&A.key!=null?xt(""+A.key):U.toString(36)
  }
    function Ut(A){
      switch(A.status){
      case"fulfilled":return A.value;
      case"rejected":throw A.reason;
        default:switch(typeof A.status=="string"?A.then(it,it):(A.status="pending",A.then(function(U){
        A.status==="pending"&&(A.status="fulfilled",A.value=U)
      }
        ,function(U){
        A.status==="pending"&&(A.status="rejected",A.reason=U)
      }
        )),A.status){
        case"fulfilled":return A.value;
        case"rejected":throw A.reason
      }
    }
    throw A
  }
    function R(A,U,Q,Z,rt){
    var ht=typeof A;
    (ht==="undefined"||ht==="boolean")&&(A=null);
    var Tt=!1;
    if(A===null)Tt=!0;
      else switch(ht){
      case"bigint":case"string":case"number":Tt=!0;
      break;
        case"object":switch(A.$$typeof){
        case i:case a:Tt=!0;
        break;
        case v:return Tt=A._init,R(Tt(A._payload),U,Q,Z,rt)
      }
    }
      if(Tt)return rt=rt(A),Tt=Z===""?"."+kt(A,0):Z,et(rt)?(Q="",Tt!=null&&(Q=Tt.replace(Ft,"$&/")+"/"),R(rt,U,Q,"",function(X){
      return X
    }
    )):rt!=null&&(mt(rt)&&(rt=tt(rt,Q+(rt.key==null||A&&A.key===rt.key?"":(""+rt.key).replace(Ft,"$&/")+"/")+Tt)),U.push(rt)),
    1;
    Tt=0;
    var le=Z===""?".":Z+":";
    if(et(A))for(var Lt=0;
    Lt<A.length;
    Lt++)Z=A[Lt],ht=le+kt(Z,Lt),Tt+=R(Z,U,Q,ht,rt);
    else if(Lt=w(A),typeof Lt=="function")for(A=Lt.call(A),Lt=0;
    !(Z=A.next()).done;
    )Z=Z.value,ht=le+kt(Z,Lt++),Tt+=R(Z,U,Q,ht,rt);
      else if(ht==="object"){
      if(typeof A.then=="function")return R(Ut(A),U,Q,Z,rt);
      throw U=String(A),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")
    }
    return Tt
  }
    function K(A,U,Q){
    if(A==null)return A;
    var Z=[],rt=0;
      return R(A,Z,"","",function(ht){
      return U.call(Q,ht,rt++)
    }
    ),Z
  }
    function F(A){
      if(A._status===-1){
      var U=A._result;
        U=U(),U.then(function(Q){
        (A._status===0||A._status===-1)&&(A._status=1,A._result=Q)
      }
        ,function(Q){
        (A._status===0||A._status===-1)&&(A._status=2,A._result=Q)
      }
      ),A._status===-1&&(A._status=0,A._result=U)
    }
    if(A._status===1)return A._result.default;
    throw A._result
  }
    var st=typeof reportError=="function"?reportError:function(A){
      if(typeof window=="object"&&typeof window.ErrorEvent=="function"){
        var U=new window.ErrorEvent("error",{
        bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A
      }
      );
      if(!window.dispatchEvent(U))return
    }
      else if(typeof process=="object"&&typeof process.emit=="function"){
      process.emit("uncaughtException",A);
      return
    }
    console.error(A)
  }
    ,ft={
      map:K,forEach:function(A,U,Q){
        K(A,function(){
        U.apply(this,arguments)
      }
      ,Q)
    }
      ,count:function(A){
      var U=0;
        return K(A,function(){
        U++
      }
      ),U
    }
      ,toArray:function(A){
        return K(A,function(U){
        return U
      }
      )||[]
    }
      ,only:function(A){
      if(!mt(A))throw Error("React.Children.only expected to receive a single React element child.");
      return A
    }
  }
  ;
  return ut.Activity=b,ut.Children=ft,ut.Component=H,ut.Fragment=s,ut.Profiler=c,ut.PureComponent=G,ut.StrictMode=o,ut.Suspense=y,
    ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,ut.__COMPILER_RUNTIME={
      __proto__:null,c:function(A){
      return J.H.useMemoCache(A)
    }
  }
    ,ut.cache=function(A){
      return function(){
      return A.apply(null,arguments)
    }
  }
    ,ut.cacheSignal=function(){
    return null
  }
    ,ut.cloneElement=function(A,U,Q){
    if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");
      var Z=D({
    }
    ,A.props),rt=A.key;
    if(U!=null)for(ht in U.key!==void 0&&(rt=""+U.key),U)!P.call(U,ht)||ht==="key"||ht==="__self"||ht==="__source"||ht==="ref"&&U.ref===void 0||(Z[ht]=U[ht]);
    var ht=arguments.length-2;
    if(ht===1)Z.children=Q;
      else if(1<ht){
      for(var Tt=Array(ht),le=0;
      le<ht;
      le++)Tt[le]=arguments[le+2];
      Z.children=Tt
    }
    return lt(A.type,rt,Z)
  }
    ,ut.createContext=function(A){
      return A={
      $$typeof:f,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null
    }
      ,A.Provider=A,A.Consumer={
      $$typeof:d,_context:A
    }
    ,A
  }
    ,ut.createElement=function(A,U,Q){
      var Z,rt={
    }
    ,ht=null;
    if(U!=null)for(Z in U.key!==void 0&&(ht=""+U.key),U)P.call(U,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(rt[Z]=U[Z]);
    var Tt=arguments.length-2;
    if(Tt===1)rt.children=Q;
      else if(1<Tt){
      for(var le=Array(Tt),Lt=0;
      Lt<Tt;
      Lt++)le[Lt]=arguments[Lt+2];
      rt.children=le
    }
    if(A&&A.defaultProps)for(Z in Tt=A.defaultProps,Tt)rt[Z]===void 0&&(rt[Z]=Tt[Z]);
    return lt(A,ht,rt)
  }
    ,ut.createRef=function(){
      return{
      current:null
    }
  }
    ,ut.forwardRef=function(A){
      return{
      $$typeof:m,render:A
    }
  }
    ,ut.isValidElement=mt,ut.lazy=function(A){
      return{
        $$typeof:v,_payload:{
        _status:-1,_result:A
      }
      ,_init:F
    }
  }
    ,ut.memo=function(A,U){
      return{
      $$typeof:p,type:A,compare:U===void 0?null:U
    }
  }
    ,ut.startTransition=function(A){
      var U=J.T,Q={
    }
    ;
    J.T=Q;
      try{
      var Z=A(),rt=J.S;
      rt!==null&&rt(Q,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(it,st)
    }
      catch(ht){
      st(ht)
    }
      finally{
      U!==null&&Q.types!==null&&(U.types=Q.types),J.T=U
    }
  }
    ,ut.unstable_useCacheRefresh=function(){
    return J.H.useCacheRefresh()
  }
    ,ut.use=function(A){
    return J.H.use(A)
  }
    ,ut.useActionState=function(A,U,Q){
    return J.H.useActionState(A,U,Q)
  }
    ,ut.useCallback=function(A,U){
    return J.H.useCallback(A,U)
  }
    ,ut.useContext=function(A){
    return J.H.useContext(A)
  }
    ,ut.useDebugValue=function(){
  }
    ,ut.useDeferredValue=function(A,U){
    return J.H.useDeferredValue(A,U)
  }
    ,ut.useEffect=function(A,U){
    return J.H.useEffect(A,U)
  }
    ,ut.useEffectEvent=function(A){
    return J.H.useEffectEvent(A)
  }
    ,ut.useId=function(){
    return J.H.useId()
  }
    ,ut.useImperativeHandle=function(A,U,Q){
    return J.H.useImperativeHandle(A,U,Q)
  }
    ,ut.useInsertionEffect=function(A,U){
    return J.H.useInsertionEffect(A,U)
  }
    ,ut.useLayoutEffect=function(A,U){
    return J.H.useLayoutEffect(A,U)
  }
    ,ut.useMemo=function(A,U){
    return J.H.useMemo(A,U)
  }
    ,ut.useOptimistic=function(A,U){
    return J.H.useOptimistic(A,U)
  }
    ,ut.useReducer=function(A,U,Q){
    return J.H.useReducer(A,U,Q)
  }
    ,ut.useRef=function(A){
    return J.H.useRef(A)
  }
    ,ut.useState=function(A){
    return J.H.useState(A)
  }
    ,ut.useSyncExternalStore=function(A,U,Q){
    return J.H.useSyncExternalStore(A,U,Q)
  }
    ,ut.useTransition=function(){
    return J.H.useTransition()
  }
  ,ut.version="19.2.6",ut
}
var Bp;
  function ef(){
  return Bp||(Bp=1,tc.exports=Ob()),tc.exports
}
  var k=ef(),ec={
    exports:{
  }
}
  ,Ml={
}
  ,nc={
    exports:{
  }
}
  ,ic={
}
;
var Up;
  function _b(){
    return Up||(Up=1,(function(i){
      function a(R,K){
      var F=R.length;
      R.push(K);
      t:for(;
      0<F;
        ){
        var st=F-1>>>1,ft=R[st];
        if(0<c(ft,K))R[st]=K,R[F]=ft,F=st;
        else break t
      }
    }
      function s(R){
      return R.length===0?null:R[0]
    }
      function o(R){
      if(R.length===0)return null;
      var K=R[0],F=R.pop();
        if(F!==K){
        R[0]=F;
        t:for(var st=0,ft=R.length,A=ft>>>1;
        st<A;
          ){
          var U=2*(st+1)-1,Q=R[U],Z=U+1,rt=R[Z];
          if(0>c(Q,F))Z<ft&&0>c(rt,Q)?(R[st]=rt,R[Z]=F,st=Z):(R[st]=Q,R[U]=F,st=U);
          else if(Z<ft&&0>c(rt,F))R[st]=rt,R[Z]=F,st=Z;
          else break t
        }
      }
      return K
    }
      function c(R,K){
      var F=R.sortIndex-K.sortIndex;
      return F!==0?F:R.id-K.id
    }
      if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){
      var d=performance;
        i.unstable_now=function(){
        return d.now()
      }
    }
      else{
      var f=Date,m=f.now();
        i.unstable_now=function(){
        return f.now()-m
      }
    }
    var y=[],p=[],v=1,b=null,x=3,w=!1,N=!1,D=!1,B=!1,H=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,
    G=typeof setImmediate<"u"?setImmediate:null;
      function q(R){
      for(var K=s(p);
      K!==null;
        ){
        if(K.callback===null)o(p);
        else if(K.startTime<=R)o(p),K.sortIndex=K.expirationTime,a(y,K);
        else break;
        K=s(p)
      }
    }
      function et(R){
      if(D=!1,q(R),!N)if(s(y)!==null)N=!0,it||(it=!0,xt());
        else{
        var K=s(p);
        K!==null&&Ut(et,K.startTime-R)
      }
    }
    var it=!1,J=-1,P=5,lt=-1;
      function tt(){
      return B?!0:!(i.unstable_now()-lt<P)
    }
      function mt(){
        if(B=!1,it){
        var R=i.unstable_now();
        lt=R;
        var K=!0;
          try{
            t:{
            N=!1,D&&(D=!1,Y(J),J=-1),w=!0;
            var F=x;
              try{
                e:{
                for(q(R),b=s(y);
                b!==null&&!(b.expirationTime>R&&tt());
                  ){
                  var st=b.callback;
                    if(typeof st=="function"){
                    b.callback=null,x=b.priorityLevel;
                    var ft=st(b.expirationTime<=R);
                      if(R=i.unstable_now(),typeof ft=="function"){
                      b.callback=ft,q(R),K=!0;
                      break e
                    }
                    b===s(y)&&o(y),q(R)
                  }
                  else o(y);
                  b=s(y)
                }
                if(b!==null)K=!0;
                  else{
                  var A=s(p);
                  A!==null&&Ut(et,A.startTime-R),K=!1
                }
              }
              break t
            }
              finally{
              b=null,x=F,w=!1
            }
            K=void 0
          }
        }
          finally{
          K?xt():it=!1
        }
      }
    }
    var xt;
      if(typeof G=="function")xt=function(){
      G(mt)
    }
    ;
      else if(typeof MessageChannel<"u"){
      var Ft=new MessageChannel,kt=Ft.port2;
        Ft.port1.onmessage=mt,xt=function(){
        kt.postMessage(null)
      }
    }
      else xt=function(){
      H(mt,0)
    }
    ;
      function Ut(R,K){
        J=H(function(){
        R(i.unstable_now())
      }
      ,K)
    }
    i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,
      i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(R){
      R.callback=null
    }
      ,i.unstable_forceFrameRate=function(R){
      0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<R?Math.floor(1e3/R):5
    }
      ,i.unstable_getCurrentPriorityLevel=function(){
      return x
    }
      ,i.unstable_next=function(R){
        switch(x){
        case 1:case 2:case 3:var K=3;
        break;
        default:K=x
      }
      var F=x;
      x=K;
        try{
        return R()
      }
        finally{
        x=F
      }
    }
      ,i.unstable_requestPaint=function(){
      B=!0
    }
      ,i.unstable_runWithPriority=function(R,K){
        switch(R){
        case 1:case 2:case 3:case 4:case 5:break;
        default:R=3
      }
      var F=x;
      x=R;
        try{
        return K()
      }
        finally{
        x=F
      }
    }
      ,i.unstable_scheduleCallback=function(R,K,F){
      var st=i.unstable_now();
        switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?st+F:st):F=st,R){
        case 1:var ft=-1;
        break;
        case 2:ft=250;
        break;
        case 5:ft=1073741823;
        break;
        case 4:ft=1e4;
        break;
        default:ft=5e3
      }
        return ft=F+ft,R={
        id:v++,callback:K,priorityLevel:R,startTime:F,expirationTime:ft,sortIndex:-1
      }
      ,F>st?(R.sortIndex=F,a(p,R),s(y)===null&&R===s(p)&&(D?(Y(J),J=-1):D=!0,Ut(et,F-st))):(R.sortIndex=ft,a(y,R),N||w||(N=!0,it||(it=!0,
      xt()))),R
    }
      ,i.unstable_shouldYield=tt,i.unstable_wrapCallback=function(R){
      var K=x;
        return function(){
        var F=x;
        x=K;
          try{
          return R.apply(this,arguments)
        }
          finally{
          x=F
        }
      }
    }
  }
  )(ic)),ic
}
var Lp;
  function Bb(){
  return Lp||(Lp=1,nc.exports=_b()),nc.exports
}
  var ac={
    exports:{
  }
}
  ,ye={
}
;
var Hp;
  function Ub(){
  if(Hp)return ye;
  Hp=1;
  var i=ef();
    function a(y){
    var p="https://react.dev/errors/"+y;
      if(1<arguments.length){
      p+="?args[]="+encodeURIComponent(arguments[1]);
      for(var v=2;
      v<arguments.length;
      v++)p+="&args[]="+encodeURIComponent(arguments[v])
    }
    return"Minified React error #"+y+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  }
    function s(){
  }
    var o={
      d:{
        f:s,r:function(){
        throw Error(a(522))
      }
      ,D:s,C:s,L:s,m:s,X:s,S:s,M:s
    }
    ,p:0,findDOMNode:null
  }
  ,c=Symbol.for("react.portal");
    function d(y,p,v){
    var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;
      return{
      $$typeof:c,key:b==null?null:""+b,children:y,containerInfo:p,implementation:v
    }
  }
  var f=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function m(y,p){
    if(y==="font")return"";
    if(typeof p=="string")return p==="use-credentials"?p:""
  }
    return ye.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ye.createPortal=function(y,p){
    var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;
    if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(a(299));
    return d(y,p,null,v)
  }
    ,ye.flushSync=function(y){
    var p=f.T,v=o.p;
      try{
      if(f.T=null,o.p=2,y)return y()
    }
      finally{
      f.T=p,o.p=v,o.d.f()
    }
  }
    ,ye.preconnect=function(y,p){
    typeof y=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(y,p))
  }
    ,ye.prefetchDNS=function(y){
    typeof y=="string"&&o.d.D(y)
  }
    ,ye.preinit=function(y,p){
      if(typeof y=="string"&&p&&typeof p.as=="string"){
      var v=p.as,b=m(v,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,w=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;
        v==="style"?o.d.S(y,typeof p.precedence=="string"?p.precedence:void 0,{
        crossOrigin:b,integrity:x,fetchPriority:w
      }
        ):v==="script"&&o.d.X(y,{
        crossOrigin:b,integrity:x,fetchPriority:w,nonce:typeof p.nonce=="string"?p.nonce:void 0
      }
      )
    }
  }
    ,ye.preinitModule=function(y,p){
      if(typeof y=="string")if(typeof p=="object"&&p!==null){
        if(p.as==null||p.as==="script"){
        var v=m(p.as,p.crossOrigin);
          o.d.M(y,{
          crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0
        }
        )
      }
    }
    else p==null&&o.d.M(y)
  }
    ,ye.preload=function(y,p){
      if(typeof y=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){
      var v=p.as,b=m(v,p.crossOrigin);
        o.d.L(y,v,{
        crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,
        fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,
        imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,
        media:typeof p.media=="string"?p.media:void 0
      }
      )
    }
  }
    ,ye.preloadModule=function(y,p){
      if(typeof y=="string")if(p){
      var v=m(p.as,p.crossOrigin);
        o.d.m(y,{
        as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0
      }
      )
    }
    else o.d.m(y)
  }
    ,ye.requestFormReset=function(y){
    o.d.r(y)
  }
    ,ye.unstable_batchedUpdates=function(y,p){
    return y(p)
  }
    ,ye.useFormState=function(y,p,v){
    return f.H.useFormState(y,p,v)
  }
    ,ye.useFormStatus=function(){
    return f.H.useHostTransitionStatus()
  }
  ,ye.version="19.2.6",ye
}
var kp;
  function Lb(){
  if(kp)return ac.exports;
  kp=1;
    function i(){
      if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
    }
      catch(a){
      console.error(a)
    }
  }
  return i(),ac.exports=Ub(),ac.exports
}
var Gp;
  function Hb(){
  if(Gp)return Ml;
  Gp=1;
  var i=Bb(),a=ef(),s=Lb();
    function o(t){
    var e="https://react.dev/errors/"+t;
      if(1<arguments.length){
      e+="?args[]="+encodeURIComponent(arguments[1]);
      for(var n=2;
      n<arguments.length;
      n++)e+="&args[]="+encodeURIComponent(arguments[n])
    }
    return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  }
    function c(t){
    return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)
  }
    function d(t){
    var e=t,n=t;
    if(t.alternate)for(;
    e.return;
    )e=e.return;
      else{
      t=e;
      do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;
      while(t)
    }
    return e.tag===3?n:null
  }
    function f(t){
      if(t.tag===13){
      var e=t.memoizedState;
      if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated
    }
    return null
  }
    function m(t){
      if(t.tag===31){
      var e=t.memoizedState;
      if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated
    }
    return null
  }
    function y(t){
    if(d(t)!==t)throw Error(o(188))
  }
    function p(t){
    var e=t.alternate;
      if(!e){
      if(e=d(t),e===null)throw Error(o(188));
      return e!==t?null:t
    }
    for(var n=t,l=e;
    ;
      ){
      var r=n.return;
      if(r===null)break;
      var u=r.alternate;
        if(u===null){
          if(l=r.return,l!==null){
          n=l;
          continue
        }
        break
      }
        if(r.child===u.child){
        for(u=r.child;
        u;
          ){
          if(u===n)return y(r),t;
          if(u===l)return y(r),e;
          u=u.sibling
        }
        throw Error(o(188))
      }
      if(n.return!==l.return)n=r,l=u;
        else{
        for(var h=!1,g=r.child;
        g;
          ){
            if(g===n){
            h=!0,n=r,l=u;
            break
          }
            if(g===l){
            h=!0,l=r,n=u;
            break
          }
          g=g.sibling
        }
          if(!h){
          for(g=u.child;
          g;
            ){
              if(g===n){
              h=!0,n=u,l=r;
              break
            }
              if(g===l){
              h=!0,l=u,n=r;
              break
            }
            g=g.sibling
          }
          if(!h)throw Error(o(189))
        }
      }
      if(n.alternate!==l)throw Error(o(190))
    }
    if(n.tag!==3)throw Error(o(188));
    return n.stateNode.current===n?t:e
  }
    function v(t){
    var e=t.tag;
    if(e===5||e===26||e===27||e===6)return t;
    for(t=t.child;
    t!==null;
      ){
      if(e=v(t),e!==null)return e;
      t=t.sibling
    }
    return null
  }
  var b=Object.assign,x=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),N=Symbol.for("react.portal"),
  D=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),Y=Symbol.for("react.consumer"),
  G=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),et=Symbol.for("react.suspense"),it=Symbol.for("react.suspense_list"),
  J=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),lt=Symbol.for("react.activity"),tt=Symbol.for("react.memo_cache_sentinel"),
  mt=Symbol.iterator;
    function xt(t){
    return t===null||typeof t!="object"?null:(t=mt&&t[mt]||t["@@iterator"],typeof t=="function"?t:null)
  }
  var Ft=Symbol.for("react.client.reference");
    function kt(t){
    if(t==null)return null;
    if(typeof t=="function")return t.$$typeof===Ft?null:t.displayName||t.name||null;
    if(typeof t=="string")return t;
      switch(t){
      case D:return"Fragment";
      case H:return"Profiler";
      case B:return"StrictMode";
      case et:return"Suspense";
      case it:return"SuspenseList";
      case lt:return"Activity"
    }
      if(typeof t=="object")switch(t.$$typeof){
      case N:return"Portal";
      case G:return t.displayName||"Context";
      case Y:return(t._context.displayName||"Context")+".Consumer";
      case q:var e=t.render;
      return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;
      case J:return e=t.displayName||null,e!==null?e:kt(t.type)||"Memo";
      case P:e=t._payload,t=t._init;
        try{
        return kt(t(e))
      }
        catch{
      }
    }
    return null
  }
  var Ut=Array.isArray,R=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    F={
    pending:!1,data:null,method:null,action:null
  }
  ,st=[],ft=-1;
    function A(t){
      return{
      current:t
    }
  }
    function U(t){
    0>ft||(t.current=st[ft],st[ft]=null,ft--)
  }
    function Q(t,e){
    ft++,st[ft]=t.current,t.current=e
  }
  var Z=A(null),rt=A(null),ht=A(null),Tt=A(null);
    function le(t,e){
      switch(Q(ht,e),Q(rt,t),Q(Z,null),e.nodeType){
      case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?np(t):0;
      break;
      default:if(t=e.tagName,e=e.namespaceURI)e=np(e),t=ip(e,t);
        else switch(t){
        case"svg":t=1;
        break;
        case"math":t=2;
        break;
        default:t=0
      }
    }
    U(Z),Q(Z,t)
  }
    function Lt(){
    U(Z),U(rt),U(ht)
  }
    function X(t){
    t.memoizedState!==null&&Q(Tt,t);
    var e=Z.current,n=ip(e,t.type);
    e!==n&&(Q(rt,t),Q(Z,n))
  }
    function At(t){
    rt.current===t&&(U(Z),U(rt)),Tt.current===t&&(U(Tt),xl._currentValue=F)
  }
  var Kt,Gt;
    function Ot(t){
      if(Kt===void 0)try{
      throw Error()
    }
      catch(n){
      var e=n.stack.trim().match(/\n( *(at )?)/);
      Kt=e&&e[1]||"",Gt=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""
    }
    return`
`+Kt+t+Gt
  }
  var ee=!1;
    function je(t,e){
    if(!t||ee)return"";
    ee=!0;
    var n=Error.prepareStackTrace;
    Error.prepareStackTrace=void 0;
      try{
        var l={
          DetermineComponentFrameRoot:function(){
            try{
              if(e){
                var L=function(){
                throw Error()
              }
              ;
                if(Object.defineProperty(L.prototype,"props",{
                  set:function(){
                  throw Error()
                }
              }
                ),typeof Reflect=="object"&&Reflect.construct){
                  try{
                  Reflect.construct(L,[])
                }
                  catch(V){
                  var j=V
                }
                Reflect.construct(t,[],L)
              }
                else{
                  try{
                  L.call()
                }
                  catch(V){
                  j=V
                }
                t.call(L.prototype)
              }
            }
              else{
                try{
                throw Error()
              }
                catch(V){
                j=V
                }(L=t())&&typeof L.catch=="function"&&L.catch(function(){
              }
              )
            }
          }
            catch(V){
            if(V&&j&&typeof V.stack=="string")return[V.stack,j.stack]
          }
          return[null,null]
        }
      }
      ;
      l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";
      var r=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");
        r&&r.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{
        value:"DetermineComponentFrameRoot"
      }
      );
      var u=l.DetermineComponentFrameRoot(),h=u[0],g=u[1];
        if(h&&g){
        var T=h.split(`
`),C=g.split(`
`);
        for(r=l=0;
        l<T.length&&!T[l].includes("DetermineComponentFrameRoot");
        )l++;
        for(;
        r<C.length&&!C[r].includes("DetermineComponentFrameRoot");
        )r++;
        if(l===T.length||r===C.length)for(l=T.length-1,r=C.length-1;
        1<=l&&0<=r&&T[l]!==C[r];
        )r--;
        for(;
        1<=l&&0<=r;
          l--,r--)if(T[l]!==C[r]){
            if(l!==1||r!==1)do if(l--,r--,0>r||T[l]!==C[r]){
            var O=`
`+T[l].replace(" at new "," at ");
            return t.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",t.displayName)),O
          }
          while(1<=l&&0<=r);
          break
        }
      }
    }
      finally{
      ee=!1,Error.prepareStackTrace=n
    }
    return(n=t?t.displayName||t.name:"")?Ot(n):""
  }
    function pe(t,e){
      switch(t.tag){
      case 26:case 27:case 5:return Ot(t.type);
      case 16:return Ot("Lazy");
      case 13:return t.child!==e&&e!==null?Ot("Suspense Fallback"):Ot("Suspense");
      case 19:return Ot("SuspenseList");
      case 0:case 15:return je(t.type,!1);
      case 11:return je(t.type.render,!1);
      case 1:return je(t.type,!0);
      case 31:return Ot("Activity");
      default:return""
    }
  }
    function ue(t){
      try{
      var e="",n=null;
      do e+=pe(t,n),n=t,t=t.return;
      while(t);
      return e
    }
      catch(l){
      return`
Error generating stack: `+l.message+`
`+l.stack
    }
  }
  var ci=Object.prototype.hasOwnProperty,ge=i.unstable_scheduleCallback,Na=i.unstable_cancelCallback,Ho=i.unstable_shouldYield,
  ko=i.unstable_requestPaint,Ne=i.unstable_now,d1=i.unstable_getCurrentPriorityLevel,Of=i.unstable_ImmediatePriority,_f=i.unstable_UserBlockingPriority,
  Xl=i.unstable_NormalPriority,h1=i.unstable_LowPriority,Bf=i.unstable_IdlePriority,m1=i.log,p1=i.unstable_setDisableYieldValue,
  Ra=null,Re=null;
    function _n(t){
      if(typeof m1=="function"&&p1(t),Re&&typeof Re.setStrictMode=="function")try{
      Re.setStrictMode(Ra,t)
    }
      catch{
    }
  }
  var Ve=Math.clz32?Math.clz32:v1,y1=Math.log,g1=Math.LN2;
    function v1(t){
    return t>>>=0,t===0?32:31-(y1(t)/g1|0)|0
  }
  var Kl=256,Zl=262144,Ql=4194304;
    function fi(t){
    var e=t&42;
    if(e!==0)return e;
      switch(t&-t){
      case 1:return 1;
      case 2:return 2;
      case 4:return 4;
      case 8:return 8;
      case 16:return 16;
      case 32:return 32;
      case 64:return 64;
      case 128:return 128;
      case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;
      case 262144:case 524288:case 1048576:case 2097152:return t&3932160;
      case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;
      case 67108864:return 67108864;
      case 134217728:return 134217728;
      case 268435456:return 268435456;
      case 536870912:return 536870912;
      case 1073741824:return 0;
      default:return t
    }
  }
    function Jl(t,e,n){
    var l=t.pendingLanes;
    if(l===0)return 0;
    var r=0,u=t.suspendedLanes,h=t.pingedLanes;
    t=t.warmLanes;
    var g=l&134217727;
    return g!==0?(l=g&~u,l!==0?r=fi(l):(h&=g,h!==0?r=fi(h):n||(n=g&~t,n!==0&&(r=fi(n))))):(g=l&~u,g!==0?r=fi(g):h!==0?r=fi(h):n||(n=l&~t,
    n!==0&&(r=fi(n)))),r===0?0:e!==0&&e!==r&&(e&u)===0&&(u=r&-r,n=e&-e,u>=n||u===32&&(n&4194048)!==0)?e:r
  }
    function Va(t,e){
    return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0
  }
    function b1(t,e){
      switch(t){
      case 1:case 2:case 4:case 8:case 64:return e+250;
      case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;
      case 4194304:case 8388608:case 16777216:case 33554432:return-1;
      case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;
      default:return-1
    }
  }
    function Uf(){
    var t=Ql;
    return Ql<<=1,(Ql&62914560)===0&&(Ql=4194304),t
  }
    function Go(t){
    for(var e=[],n=0;
    31>n;
    n++)e.push(t);
    return e
  }
    function Oa(t,e){
    t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)
  }
    function x1(t,e,n,l,r,u){
    var h=t.pendingLanes;
    t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,
    t.shellSuspendCounter=0;
    var g=t.entanglements,T=t.expirationTimes,C=t.hiddenUpdates;
    for(n=h&~n;
    0<n;
      ){
      var O=31-Ve(n),L=1<<O;
      g[O]=0,T[O]=-1;
      var j=C[O];
      if(j!==null)for(C[O]=null,O=0;
      O<j.length;
        O++){
        var V=j[O];
        V!==null&&(V.lane&=-536870913)
      }
      n&=~L
    }
    l!==0&&Lf(t,l,0),u!==0&&r===0&&t.tag!==0&&(t.suspendedLanes|=u&~(h&~e))
  }
    function Lf(t,e,n){
    t.pendingLanes|=e,t.suspendedLanes&=~e;
    var l=31-Ve(e);
    t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|n&261930
  }
    function Hf(t,e){
    var n=t.entangledLanes|=e;
    for(t=t.entanglements;
    n;
      ){
      var l=31-Ve(n),r=1<<l;
      r&e|t[l]&e&&(t[l]|=e),n&=~r
    }
  }
    function kf(t,e){
    var n=e&-e;
    return n=(n&42)!==0?1:qo(n),(n&(t.suspendedLanes|e))!==0?0:n
  }
    function qo(t){
      switch(t){
      case 2:t=1;
      break;
      case 8:t=4;
      break;
      case 32:t=16;
      break;
      case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;
      break;
      case 268435456:t=134217728;
      break;
      default:t=0
    }
    return t
  }
    function Yo(t){
    return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2
  }
    function Gf(){
    var t=K.p;
    return t!==0?t:(t=window.event,t===void 0?32:Dp(t.type))
  }
    function qf(t,e){
    var n=K.p;
      try{
      return K.p=t,e()
    }
      finally{
      K.p=n
    }
  }
  var Bn=Math.random().toString(36).slice(2),ce="__reactFiber$"+Bn,Se="__reactProps$"+Bn,_i="__reactContainer$"+Bn,Xo="__reactEvents$"+Bn,
  S1="__reactListeners$"+Bn,T1="__reactHandles$"+Bn,Yf="__reactResources$"+Bn,_a="__reactMarker$"+Bn;
    function Ko(t){
    delete t[ce],delete t[Se],delete t[Xo],delete t[S1],delete t[T1]
  }
    function Bi(t){
    var e=t[ce];
    if(e)return e;
    for(var n=t.parentNode;
    n;
      ){
        if(e=n[_i]||n[ce]){
        if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=cp(t);
        t!==null;
          ){
          if(n=t[ce])return n;
          t=cp(t)
        }
        return e
      }
      t=n,n=t.parentNode
    }
    return null
  }
    function Ui(t){
      if(t=t[ce]||t[_i]){
      var e=t.tag;
      if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t
    }
    return null
  }
    function Ba(t){
    var e=t.tag;
    if(e===5||e===26||e===27||e===6)return t.stateNode;
    throw Error(o(33))
  }
    function Li(t){
    var e=t[Yf];
      return e||(e=t[Yf]={
      hoistableStyles:new Map,hoistableScripts:new Map
    }
    ),e
  }
    function se(t){
    t[_a]=!0
  }
    var Xf=new Set,Kf={
  }
  ;
    function di(t,e){
    Hi(t,e),Hi(t+"Capture",e)
  }
    function Hi(t,e){
    for(Kf[t]=e,t=0;
    t<e.length;
    t++)Xf.add(e[t])
  }
  var A1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
    Zf={
  }
    ,Qf={
  }
  ;
    function E1(t){
    return ci.call(Qf,t)?!0:ci.call(Zf,t)?!1:A1.test(t)?Qf[t]=!0:(Zf[t]=!0,!1)
  }
    function Fl(t,e,n){
    if(E1(e))if(n===null)t.removeAttribute(e);
      else{
        switch(typeof n){
        case"undefined":case"function":case"symbol":t.removeAttribute(e);
        return;
        case"boolean":var l=e.toLowerCase().slice(0,5);
          if(l!=="data-"&&l!=="aria-"){
          t.removeAttribute(e);
          return
        }
      }
      t.setAttribute(e,""+n)
    }
  }
    function Pl(t,e,n){
    if(n===null)t.removeAttribute(e);
      else{
        switch(typeof n){
        case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);
        return
      }
      t.setAttribute(e,""+n)
    }
  }
    function yn(t,e,n,l){
    if(l===null)t.removeAttribute(n);
      else{
        switch(typeof l){
        case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);
        return
      }
      t.setAttributeNS(e,n,""+l)
    }
  }
    function qe(t){
      switch(typeof t){
      case"bigint":case"boolean":case"number":case"string":case"undefined":return t;
      case"object":return t;
      default:return""
    }
  }
    function Jf(t){
    var e=t.type;
    return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")
  }
    function M1(t,e,n){
    var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);
      if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){
      var r=l.get,u=l.set;
        return Object.defineProperty(t,e,{
          configurable:!0,get:function(){
          return r.call(this)
        }
          ,set:function(h){
          n=""+h,u.call(this,h)
        }
      }
        ),Object.defineProperty(t,e,{
        enumerable:l.enumerable
      }
        ),{
          getValue:function(){
          return n
        }
          ,setValue:function(h){
          n=""+h
        }
          ,stopTracking:function(){
          t._valueTracker=null,delete t[e]
        }
      }
    }
  }
    function Zo(t){
      if(!t._valueTracker){
      var e=Jf(t)?"checked":"value";
      t._valueTracker=M1(t,e,""+t[e])
    }
  }
    function Ff(t){
    if(!t)return!1;
    var e=t._valueTracker;
    if(!e)return!0;
    var n=e.getValue(),l="";
    return t&&(l=Jf(t)?t.checked?"true":"false":t.value),t=l,t!==n?(e.setValue(t),!0):!1
  }
    function Wl(t){
    if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;
      try{
      return t.activeElement||t.body
    }
      catch{
      return t.body
    }
  }
  var D1=/[\n"\\]/g;
    function Ye(t){
      return t.replace(D1,function(e){
      return"\\"+e.charCodeAt(0).toString(16)+" "
    }
    )
  }
    function Qo(t,e,n,l,r,u,h,g){
    t.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?t.type=h:t.removeAttribute("type"),e!=null?h==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+qe(e)):t.value!==""+qe(e)&&(t.value=""+qe(e)):h!=="submit"&&h!=="reset"||t.removeAttribute("value"),
    e!=null?Jo(t,h,qe(e)):n!=null?Jo(t,h,qe(n)):l!=null&&t.removeAttribute("value"),r==null&&u!=null&&(t.defaultChecked=!!u),
    r!=null&&(t.checked=r&&typeof r!="function"&&typeof r!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.name=""+qe(g):t.removeAttribute("name")
  }
    function Pf(t,e,n,l,r,u,h,g){
      if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||n!=null){
        if(!(u!=="submit"&&u!=="reset"||e!=null)){
        Zo(t);
        return
      }
      n=n!=null?""+qe(n):"",e=e!=null?""+qe(e):n,g||e===t.value||(t.value=e),t.defaultValue=e
    }
    l=l??r,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=g?t.checked:!!l,t.defaultChecked=!!l,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.name=h),
    Zo(t)
  }
    function Jo(t,e,n){
    e==="number"&&Wl(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)
  }
    function ki(t,e,n,l){
      if(t=t.options,e){
        e={
      }
      ;
      for(var r=0;
      r<n.length;
      r++)e["$"+n[r]]=!0;
      for(n=0;
      n<t.length;
      n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&l&&(t[n].defaultSelected=!0)
    }
      else{
      for(n=""+qe(n),e=null,r=0;
      r<t.length;
        r++){
          if(t[r].value===n){
          t[r].selected=!0,l&&(t[r].defaultSelected=!0);
          return
        }
        e!==null||t[r].disabled||(e=t[r])
      }
      e!==null&&(e.selected=!0)
    }
  }
    function Wf(t,e,n){
      if(e!=null&&(e=""+qe(e),e!==t.value&&(t.value=e),n==null)){
      t.defaultValue!==e&&(t.defaultValue=e);
      return
    }
    t.defaultValue=n!=null?""+qe(n):""
  }
    function $f(t,e,n,l){
      if(e==null){
        if(l!=null){
        if(n!=null)throw Error(o(92));
          if(Ut(l)){
          if(1<l.length)throw Error(o(93));
          l=l[0]
        }
        n=l
      }
      n==null&&(n=""),e=n
    }
    n=qe(e),t.defaultValue=n,l=t.textContent,l===n&&l!==""&&l!==null&&(t.value=l),Zo(t)
  }
    function Gi(t,e){
      if(e){
      var n=t.firstChild;
        if(n&&n===t.lastChild&&n.nodeType===3){
        n.nodeValue=e;
        return
      }
    }
    t.textContent=e
  }
  var w1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function If(t,e,n){
    var l=e.indexOf("--")===0;
    n==null||typeof n=="boolean"||n===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,n):typeof n!="number"||n===0||w1.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"
  }
    function td(t,e,n){
    if(e!=null&&typeof e!="object")throw Error(o(62));
      if(t=t.style,n!=null){
      for(var l in n)!n.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");
      for(var r in e)l=e[r],e.hasOwnProperty(r)&&n[r]!==l&&If(t,r,l)
    }
    else for(var u in e)e.hasOwnProperty(u)&&If(t,u,e[u])
  }
    function Fo(t){
    if(t.indexOf("-")===-1)return!1;
      switch(t){
      case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;
      default:return!0
    }
  }
  var z1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],
  ["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift",
  "baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],
  ["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],
  ["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule",
  "fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],
  ["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],
  ["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical",
  "glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],
  ["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],
  ["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder",
  "paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering",
  "shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],
  ["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],
  ["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity",
  "stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering",
  "text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness",
  "underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic",
  "v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect",
  "vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing",
  "word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),C1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function $l(t){
    return C1.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t
  }
    function gn(){
  }
  var Po=null;
    function Wo(t){
    return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t
  }
  var qi=null,Yi=null;
    function ed(t){
    var e=Ui(t);
      if(e&&(t=e.stateNode)){
      var n=t[Se]||null;
        t:switch(t=e.stateNode,e.type){
          case"input":if(Qo(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){
          for(n=t;
          n.parentNode;
          )n=n.parentNode;
          for(n=n.querySelectorAll('input[name="'+Ye(""+e)+'"][type="radio"]'),e=0;
          e<n.length;
            e++){
            var l=n[e];
              if(l!==t&&l.form===t.form){
              var r=l[Se]||null;
              if(!r)throw Error(o(90));
              Qo(l,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)
            }
          }
          for(e=0;
          e<n.length;
          e++)l=n[e],l.form===t.form&&Ff(l)
        }
        break t;
        case"textarea":Wf(t,n.value,n.defaultValue);
        break t;
        case"select":e=n.value,e!=null&&ki(t,!!n.multiple,e,!1)
      }
    }
  }
  var $o=!1;
    function nd(t,e,n){
    if($o)return t(e,n);
    $o=!0;
      try{
      var l=t(e);
      return l
    }
      finally{
      if($o=!1,(qi!==null||Yi!==null)&&(Hs(),qi&&(e=qi,t=Yi,Yi=qi=null,ed(e),t)))for(e=0;
      e<t.length;
      e++)ed(t[e])
    }
  }
    function Ua(t,e){
    var n=t.stateNode;
    if(n===null)return null;
    var l=n[Se]||null;
    if(l===null)return null;
    n=l[e];
      t:switch(e){
      case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,
      l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;
      break t;
      default:t=!1
    }
    if(t)return null;
    if(n&&typeof n!="function")throw Error(o(231,e,typeof n));
    return n
  }
  var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Io=!1;
    if(vn)try{
      var La={
    }
    ;
      Object.defineProperty(La,"passive",{
        get:function(){
        Io=!0
      }
    }
    ),window.addEventListener("test",La,La),window.removeEventListener("test",La,La)
  }
    catch{
    Io=!1
  }
  var Un=null,tr=null,Il=null;
    function id(){
    if(Il)return Il;
    var t,e=tr,n=e.length,l,r="value"in Un?Un.value:Un.textContent,u=r.length;
    for(t=0;
    t<n&&e[t]===r[t];
    t++);
    var h=n-t;
    for(l=1;
    l<=h&&e[n-l]===r[u-l];
    l++);
    return Il=r.slice(t,1<l?1-l:void 0)
  }
    function ts(t){
    var e=t.keyCode;
    return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0
  }
    function es(){
    return!0
  }
    function ad(){
    return!1
  }
    function Te(t){
      function e(n,l,r,u,h){
      this._reactName=n,this._targetInst=r,this.type=l,this.nativeEvent=u,this.target=h,this.currentTarget=null;
      for(var g in t)t.hasOwnProperty(g)&&(n=t[g],this[g]=n?n(u):u[g]);
      return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?es:ad,this.isPropagationStopped=ad,
      this
    }
      return b(e.prototype,{
        preventDefault:function(){
        this.defaultPrevented=!0;
        var n=this.nativeEvent;
        n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=es)
      }
        ,stopPropagation:function(){
        var n=this.nativeEvent;
        n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=es)
      }
        ,persist:function(){
      }
      ,isPersistent:es
    }
    ),e
  }
    var hi={
      eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){
      return t.timeStamp||Date.now()
    }
    ,defaultPrevented:0,isTrusted:0
  }
    ,ns=Te(hi),Ha=b({
  }
    ,hi,{
    view:0,detail:0
  }
    ),j1=Te(Ha),er,nr,ka,is=b({
  }
    ,Ha,{
    screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ar,button:0,
      buttons:0,relatedTarget:function(t){
      return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget
    }
      ,movementX:function(t){
      return"movementX"in t?t.movementX:(t!==ka&&(ka&&t.type==="mousemove"?(er=t.screenX-ka.screenX,nr=t.screenY-ka.screenY):nr=er=0,
      ka=t),er)
    }
      ,movementY:function(t){
      return"movementY"in t?t.movementY:nr
    }
  }
    ),ld=Te(is),N1=b({
  }
    ,is,{
    dataTransfer:0
  }
    ),R1=Te(N1),V1=b({
  }
    ,Ha,{
    relatedTarget:0
  }
    ),ir=Te(V1),O1=b({
  }
    ,hi,{
    animationName:0,elapsedTime:0,pseudoElement:0
  }
    ),_1=Te(O1),B1=b({
  }
    ,hi,{
      clipboardData:function(t){
      return"clipboardData"in t?t.clipboardData:window.clipboardData
    }
  }
    ),U1=Te(B1),L1=b({
  }
    ,hi,{
    data:0
  }
    ),sd=Te(L1),H1={
    Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",
    Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"
  }
    ,k1={
    8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",
    33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",
    112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",
    145:"ScrollLock",224:"Meta"
  }
    ,G1={
    Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"
  }
  ;
    function q1(t){
    var e=this.nativeEvent;
    return e.getModifierState?e.getModifierState(t):(t=G1[t])?!!e[t]:!1
  }
    function ar(){
    return q1
  }
    var Y1=b({
  }
    ,Ha,{
      key:function(t){
        if(t.key){
        var e=H1[t.key]||t.key;
        if(e!=="Unidentified")return e
      }
      return t.type==="keypress"?(t=ts(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?k1[t.keyCode]||"Unidentified":""
    }
      ,code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ar,charCode:function(t){
      return t.type==="keypress"?ts(t):0
    }
      ,keyCode:function(t){
      return t.type==="keydown"||t.type==="keyup"?t.keyCode:0
    }
      ,which:function(t){
      return t.type==="keypress"?ts(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0
    }
  }
    ),X1=Te(Y1),K1=b({
  }
    ,is,{
    pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0
  }
    ),od=Te(K1),Z1=b({
  }
    ,Ha,{
    touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ar
  }
    ),Q1=Te(Z1),J1=b({
  }
    ,hi,{
    propertyName:0,elapsedTime:0,pseudoElement:0
  }
    ),F1=Te(J1),P1=b({
  }
    ,is,{
      deltaX:function(t){
      return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0
    }
      ,deltaY:function(t){
      return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0
    }
    ,deltaZ:0,deltaMode:0
  }
    ),W1=Te(P1),$1=b({
  }
    ,hi,{
    newState:0,oldState:0
  }
  ),I1=Te($1),tv=[9,13,27,32],lr=vn&&"CompositionEvent"in window,Ga=null;
  vn&&"documentMode"in document&&(Ga=document.documentMode);
  var ev=vn&&"TextEvent"in window&&!Ga,rd=vn&&(!lr||Ga&&8<Ga&&11>=Ga),ud=" ",cd=!1;
    function fd(t,e){
      switch(t){
      case"keyup":return tv.indexOf(e.keyCode)!==-1;
      case"keydown":return e.keyCode!==229;
      case"keypress":case"mousedown":case"focusout":return!0;
      default:return!1
    }
  }
    function dd(t){
    return t=t.detail,typeof t=="object"&&"data"in t?t.data:null
  }
  var Xi=!1;
    function nv(t,e){
      switch(t){
      case"compositionend":return dd(e);
      case"keypress":return e.which!==32?null:(cd=!0,ud);
      case"textInput":return t=e.data,t===ud&&cd?null:t;
      default:return null
    }
  }
    function iv(t,e){
    if(Xi)return t==="compositionend"||!lr&&fd(t,e)?(t=id(),Il=tr=Un=null,Xi=!1,t):null;
      switch(t){
      case"paste":return null;
        case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){
        if(e.char&&1<e.char.length)return e.char;
        if(e.which)return String.fromCharCode(e.which)
      }
      return null;
      case"compositionend":return rd&&e.locale!=="ko"?null:e.data;
      default:return null
    }
  }
    var av={
    color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,
    time:!0,url:!0,week:!0
  }
  ;
    function hd(t){
    var e=t&&t.nodeName&&t.nodeName.toLowerCase();
    return e==="input"?!!av[t.type]:e==="textarea"
  }
    function md(t,e,n,l){
      qi?Yi?Yi.push(l):Yi=[l]:qi=l,e=Zs(e,"onChange"),0<e.length&&(n=new ns("onChange","change",null,n,l),t.push({
      event:n,listeners:e
    }
    ))
  }
  var qa=null,Ya=null;
    function lv(t){
    Pm(t,0)
  }
    function as(t){
    var e=Ba(t);
    if(Ff(e))return t
  }
    function pd(t,e){
    if(t==="change")return e
  }
  var yd=!1;
    if(vn){
    var sr;
      if(vn){
      var or="oninput"in document;
        if(!or){
        var gd=document.createElement("div");
        gd.setAttribute("oninput","return;"),or=typeof gd.oninput=="function"
      }
      sr=or
    }
    else sr=!1;
    yd=sr&&(!document.documentMode||9<document.documentMode)
  }
    function vd(){
    qa&&(qa.detachEvent("onpropertychange",bd),Ya=qa=null)
  }
    function bd(t){
      if(t.propertyName==="value"&&as(Ya)){
      var e=[];
      md(e,Ya,t,Wo(t)),nd(lv,e)
    }
  }
    function sv(t,e,n){
    t==="focusin"?(vd(),qa=e,Ya=n,qa.attachEvent("onpropertychange",bd)):t==="focusout"&&vd()
  }
    function ov(t){
    if(t==="selectionchange"||t==="keyup"||t==="keydown")return as(Ya)
  }
    function rv(t,e){
    if(t==="click")return as(e)
  }
    function uv(t,e){
    if(t==="input"||t==="change")return as(e)
  }
    function cv(t,e){
    return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e
  }
  var Oe=typeof Object.is=="function"?Object.is:cv;
    function Xa(t,e){
    if(Oe(t,e))return!0;
    if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;
    var n=Object.keys(t),l=Object.keys(e);
    if(n.length!==l.length)return!1;
    for(l=0;
    l<n.length;
      l++){
      var r=n[l];
      if(!ci.call(e,r)||!Oe(t[r],e[r]))return!1
    }
    return!0
  }
    function xd(t){
    for(;
    t&&t.firstChild;
    )t=t.firstChild;
    return t
  }
    function Sd(t,e){
    var n=xd(t);
    t=0;
    for(var l;
    n;
      ){
        if(n.nodeType===3){
          if(l=t+n.textContent.length,t<=e&&l>=e)return{
          node:n,offset:e-t
        }
        ;
        t=l
      }
        t:{
        for(;
        n;
          ){
            if(n.nextSibling){
            n=n.nextSibling;
            break t
          }
          n=n.parentNode
        }
        n=void 0
      }
      n=xd(n)
    }
  }
    function Td(t,e){
    return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Td(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1
  }
    function Ad(t){
    t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;
    for(var e=Wl(t.document);
    e instanceof t.HTMLIFrameElement;
      ){
        try{
        var n=typeof e.contentWindow.location.href=="string"
      }
        catch{
        n=!1
      }
      if(n)t=e.contentWindow;
      else break;
      e=Wl(t.document)
    }
    return e
  }
    function rr(t){
    var e=t&&t.nodeName&&t.nodeName.toLowerCase();
    return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")
  }
  var fv=vn&&"documentMode"in document&&11>=document.documentMode,Ki=null,ur=null,Ka=null,cr=!1;
    function Ed(t,e,n){
    var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;
      cr||Ki==null||Ki!==Wl(l)||(l=Ki,"selectionStart"in l&&rr(l)?l={
      start:l.selectionStart,end:l.selectionEnd
    }
      :(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={
      anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset
    }
      ),Ka&&Xa(Ka,l)||(Ka=l,l=Zs(ur,"onSelect"),0<l.length&&(e=new ns("onSelect","select",null,e,n),t.push({
      event:e,listeners:l
    }
    ),e.target=Ki)))
  }
    function mi(t,e){
      var n={
    }
    ;
    return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n
  }
    var Zi={
    animationend:mi("Animation","AnimationEnd"),animationiteration:mi("Animation","AnimationIteration"),animationstart:mi("Animation",
    "AnimationStart"),transitionrun:mi("Transition","TransitionRun"),transitionstart:mi("Transition","TransitionStart"),transitioncancel:mi("Transition",
    "TransitionCancel"),transitionend:mi("Transition","TransitionEnd")
  }
    ,fr={
  }
    ,Md={
  }
  ;
  vn&&(Md=document.createElement("div").style,"AnimationEvent"in window||(delete Zi.animationend.animation,delete Zi.animationiteration.animation,
  delete Zi.animationstart.animation),"TransitionEvent"in window||delete Zi.transitionend.transition);
    function pi(t){
    if(fr[t])return fr[t];
    if(!Zi[t])return t;
    var e=Zi[t],n;
    for(n in e)if(e.hasOwnProperty(n)&&n in Md)return fr[t]=e[n];
    return t
  }
  var Dd=pi("animationend"),wd=pi("animationiteration"),zd=pi("animationstart"),dv=pi("transitionrun"),hv=pi("transitionstart"),
  mv=pi("transitioncancel"),Cd=pi("transitionend"),jd=new Map,dr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  dr.push("scrollEnd");
    function tn(t,e){
    jd.set(t,e),di(e,[t])
  }
    var ls=typeof reportError=="function"?reportError:function(t){
      if(typeof window=="object"&&typeof window.ErrorEvent=="function"){
        var e=new window.ErrorEvent("error",{
        bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t
      }
      );
      if(!window.dispatchEvent(e))return
    }
      else if(typeof process=="object"&&typeof process.emit=="function"){
      process.emit("uncaughtException",t);
      return
    }
    console.error(t)
  }
  ,Xe=[],Qi=0,hr=0;
    function ss(){
    for(var t=Qi,e=hr=Qi=0;
    e<t;
      ){
      var n=Xe[e];
      Xe[e++]=null;
      var l=Xe[e];
      Xe[e++]=null;
      var r=Xe[e];
      Xe[e++]=null;
      var u=Xe[e];
        if(Xe[e++]=null,l!==null&&r!==null){
        var h=l.pending;
        h===null?r.next=r:(r.next=h.next,h.next=r),l.pending=r
      }
      u!==0&&Nd(n,r,u)
    }
  }
    function os(t,e,n,l){
    Xe[Qi++]=t,Xe[Qi++]=e,Xe[Qi++]=n,Xe[Qi++]=l,hr|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)
  }
    function mr(t,e,n,l){
    return os(t,e,n,l),rs(t)
  }
    function yi(t,e){
    return os(t,null,null,e),rs(t)
  }
    function Nd(t,e,n){
    t.lanes|=n;
    var l=t.alternate;
    l!==null&&(l.lanes|=n);
    for(var r=!1,u=t.return;
    u!==null;
    )u.childLanes|=n,l=u.alternate,l!==null&&(l.childLanes|=n),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(r=!0)),
    t=u,u=u.return;
    return t.tag===3?(u=t.stateNode,r&&e!==null&&(r=31-Ve(n),t=u.hiddenUpdates,l=t[r],l===null?t[r]=[e]:l.push(e),e.lane=n|536870912),
    u):null
  }
    function rs(t){
    if(50<hl)throw hl=0,Au=null,Error(o(185));
    for(var e=t.return;
    e!==null;
    )t=e,e=t.return;
    return t.tag===3?t.stateNode:null
  }
    var Ji={
  }
  ;
    function pv(t,e,n,l){
    this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,
    this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,
    this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null
  }
    function _e(t,e,n,l){
    return new pv(t,e,n,l)
  }
    function pr(t){
    return t=t.prototype,!(!t||!t.isReactComponent)
  }
    function bn(t,e){
    var n=t.alternate;
    return n===null?(n=_e(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,
    t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,
    n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,
      e=t.dependencies,n.dependencies=e===null?null:{
      lanes:e.lanes,firstContext:e.firstContext
    }
    ,n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n
  }
    function Rd(t,e){
    t.flags&=65011714;
    var n=t.alternate;
    return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,
    t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,
    t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,
      t.dependencies=e===null?null:{
      lanes:e.lanes,firstContext:e.firstContext
    }
    ),t
  }
    function us(t,e,n,l,r,u){
    var h=0;
    if(l=t,typeof t=="function")pr(t)&&(h=1);
    else if(typeof t=="string")h=xb(t,n,Z.current)?26:t==="html"||t==="head"||t==="body"?27:5;
      else t:switch(t){
      case lt:return t=_e(31,n,e,r),t.elementType=lt,t.lanes=u,t;
      case D:return gi(n.children,r,u,e);
      case B:h=8,r|=24;
      break;
      case H:return t=_e(12,n,e,r|2),t.elementType=H,t.lanes=u,t;
      case et:return t=_e(13,n,e,r),t.elementType=et,t.lanes=u,t;
      case it:return t=_e(19,n,e,r),t.elementType=it,t.lanes=u,t;
        default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){
        case G:h=10;
        break t;
        case Y:h=9;
        break t;
        case q:h=11;
        break t;
        case J:h=14;
        break t;
        case P:h=16,l=null;
        break t
      }
      h=29,n=Error(o(130,t===null?"null":typeof t,"")),l=null
    }
    return e=_e(h,n,e,r),e.elementType=t,e.type=l,e.lanes=u,e
  }
    function gi(t,e,n,l){
    return t=_e(7,t,l,e),t.lanes=n,t
  }
    function yr(t,e,n){
    return t=_e(6,t,null,e),t.lanes=n,t
  }
    function Vd(t){
    var e=_e(18,null,null,0);
    return e.stateNode=t,e
  }
    function gr(t,e,n){
      return e=_e(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={
      containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation
    }
    ,e
  }
  var Od=new WeakMap;
    function Ke(t,e){
      if(typeof t=="object"&&t!==null){
      var n=Od.get(t);
        return n!==void 0?n:(e={
        value:t,source:e,stack:ue(e)
      }
      ,Od.set(t,e),e)
    }
      return{
      value:t,source:e,stack:ue(e)
    }
  }
  var Fi=[],Pi=0,cs=null,Za=0,Ze=[],Qe=0,Ln=null,un=1,cn="";
    function xn(t,e){
    Fi[Pi++]=Za,Fi[Pi++]=cs,cs=t,Za=e
  }
    function _d(t,e,n){
    Ze[Qe++]=un,Ze[Qe++]=cn,Ze[Qe++]=Ln,Ln=t;
    var l=un;
    t=cn;
    var r=32-Ve(l)-1;
    l&=~(1<<r),n+=1;
    var u=32-Ve(e)+r;
      if(30<u){
      var h=r-r%5;
      u=(l&(1<<h)-1).toString(32),l>>=h,r-=h,un=1<<32-Ve(e)+r|n<<r|l,cn=u+t
    }
    else un=1<<u|n<<r|l,cn=t
  }
    function vr(t){
    t.return!==null&&(xn(t,1),_d(t,1,0))
  }
    function br(t){
    for(;
    t===cs;
    )cs=Fi[--Pi],Fi[Pi]=null,Za=Fi[--Pi],Fi[Pi]=null;
    for(;
    t===Ln;
    )Ln=Ze[--Qe],Ze[Qe]=null,cn=Ze[--Qe],Ze[Qe]=null,un=Ze[--Qe],Ze[Qe]=null
  }
    function Bd(t,e){
    Ze[Qe++]=un,Ze[Qe++]=cn,Ze[Qe++]=Ln,un=e.id,cn=e.overflow,Ln=t
  }
  var fe=null,_t=null,bt=!1,Hn=null,Je=!1,xr=Error(o(519));
    function kn(t){
    var e=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));
    throw Qa(Ke(e,t)),xr
  }
    function Ud(t){
    var e=t.stateNode,n=t.type,l=t.memoizedProps;
      switch(e[ce]=t,e[Se]=l,n){
      case"dialog":yt("cancel",e),yt("close",e);
      break;
      case"iframe":case"object":case"embed":yt("load",e);
      break;
      case"video":case"audio":for(n=0;
      n<pl.length;
      n++)yt(pl[n],e);
      break;
      case"source":yt("error",e);
      break;
      case"img":case"image":case"link":yt("error",e),yt("load",e);
      break;
      case"details":yt("toggle",e);
      break;
      case"input":yt("invalid",e),Pf(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);
      break;
      case"select":yt("invalid",e);
      break;
      case"textarea":yt("invalid",e),$f(e,l.value,l.defaultValue,l.children)
    }
    n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||l.suppressHydrationWarning===!0||tp(e.textContent,
    n)?(l.popover!=null&&(yt("beforetoggle",e),yt("toggle",e)),l.onScroll!=null&&yt("scroll",e),l.onScrollEnd!=null&&yt("scrollend",
    e),l.onClick!=null&&(e.onclick=gn),e=!0):e=!1,e||kn(t,!0)
  }
    function Ld(t){
    for(fe=t.return;
    fe;
      )switch(fe.tag){
      case 5:case 31:case 13:Je=!1;
      return;
      case 27:case 3:Je=!0;
      return;
      default:fe=fe.return
    }
  }
    function Wi(t){
    if(t!==fe)return!1;
    if(!bt)return Ld(t),bt=!0,!1;
    var e=t.tag,n;
    if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Lu(t.type,t.memoizedProps)),n=!n),n&&_t&&kn(t),
      Ld(t),e===13){
      if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));
      _t=up(t)
    }
      else if(e===31){
      if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));
      _t=up(t)
    }
    else e===27?(e=_t,ti(t.type)?(t=Yu,Yu=null,_t=t):_t=e):_t=fe?Pe(t.stateNode.nextSibling):null;
    return!0
  }
    function vi(){
    _t=fe=null,bt=!1
  }
    function Sr(){
    var t=Hn;
    return t!==null&&(De===null?De=t:De.push.apply(De,t),Hn=null),t
  }
    function Qa(t){
    Hn===null?Hn=[t]:Hn.push(t)
  }
  var Tr=A(null),bi=null,Sn=null;
    function Gn(t,e,n){
    Q(Tr,e._currentValue),e._currentValue=n
  }
    function Tn(t){
    t._currentValue=Tr.current,U(Tr)
  }
    function Ar(t,e,n){
    for(;
    t!==null;
      ){
      var l=t.alternate;
      if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===n)break;
      t=t.return
    }
  }
    function Er(t,e,n,l){
    var r=t.child;
    for(r!==null&&(r.return=t);
    r!==null;
      ){
      var u=r.dependencies;
        if(u!==null){
        var h=r.child;
        u=u.firstContext;
        t:for(;
        u!==null;
          ){
          var g=u;
          u=r;
          for(var T=0;
          T<e.length;
            T++)if(g.context===e[T]){
            u.lanes|=n,g=u.alternate,g!==null&&(g.lanes|=n),Ar(u.return,n,t),l||(h=null);
            break t
          }
          u=g.next
        }
      }
        else if(r.tag===18){
        if(h=r.return,h===null)throw Error(o(341));
        h.lanes|=n,u=h.alternate,u!==null&&(u.lanes|=n),Ar(h,n,t),h=null
      }
      else h=r.child;
      if(h!==null)h.return=r;
      else for(h=r;
      h!==null;
        ){
          if(h===t){
          h=null;
          break
        }
          if(r=h.sibling,r!==null){
          r.return=h.return,h=r;
          break
        }
        h=h.return
      }
      r=h
    }
  }
    function $i(t,e,n,l){
    t=null;
    for(var r=e,u=!1;
    r!==null;
      ){
        if(!u){
        if((r.flags&524288)!==0)u=!0;
        else if((r.flags&262144)!==0)break
      }
        if(r.tag===10){
        var h=r.alternate;
        if(h===null)throw Error(o(387));
          if(h=h.memoizedProps,h!==null){
          var g=r.type;
          Oe(r.pendingProps.value,h.value)||(t!==null?t.push(g):t=[g])
        }
      }
        else if(r===Tt.current){
        if(h=r.alternate,h===null)throw Error(o(387));
        h.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(t!==null?t.push(xl):t=[xl])
      }
      r=r.return
    }
    t!==null&&Er(e,t,n,l),e.flags|=262144
  }
    function fs(t){
    for(t=t.firstContext;
    t!==null;
      ){
      if(!Oe(t.context._currentValue,t.memoizedValue))return!0;
      t=t.next
    }
    return!1
  }
    function xi(t){
    bi=t,Sn=null,t=t.dependencies,t!==null&&(t.firstContext=null)
  }
    function de(t){
    return Hd(bi,t)
  }
    function ds(t,e){
    return bi===null&&xi(t),Hd(t,e)
  }
    function Hd(t,e){
    var n=e._currentValue;
      if(e={
      context:e,memoizedValue:n,next:null
    }
      ,Sn===null){
      if(t===null)throw Error(o(308));
        Sn=e,t.dependencies={
        lanes:0,firstContext:e
      }
      ,t.flags|=524288
    }
    else Sn=Sn.next=e;
    return n
  }
    var yv=typeof AbortController<"u"?AbortController:function(){
      var t=[],e=this.signal={
        aborted:!1,addEventListener:function(n,l){
        t.push(l)
      }
    }
    ;
      this.abort=function(){
        e.aborted=!0,t.forEach(function(n){
        return n()
      }
      )
    }
  }
    ,gv=i.unstable_scheduleCallback,vv=i.unstable_NormalPriority,Pt={
    $$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0
  }
  ;
    function Mr(){
      return{
      controller:new yv,data:new Map,refCount:0
    }
  }
    function Ja(t){
      t.refCount--,t.refCount===0&&gv(vv,function(){
      t.controller.abort()
    }
    )
  }
  var Fa=null,Dr=0,Ii=0,ta=null;
    function bv(t,e){
      if(Fa===null){
      var n=Fa=[];
        Dr=0,Ii=Cu(),ta={
          status:"pending",value:void 0,then:function(l){
          n.push(l)
        }
      }
    }
    return Dr++,e.then(kd,kd),e
  }
    function kd(){
      if(--Dr===0&&Fa!==null){
      ta!==null&&(ta.status="fulfilled");
      var t=Fa;
      Fa=null,Ii=0,ta=null;
      for(var e=0;
      e<t.length;
      e++)(0,t[e])()
    }
  }
    function xv(t,e){
      var n=[],l={
        status:"pending",value:null,reason:null,then:function(r){
        n.push(r)
      }
    }
    ;
      return t.then(function(){
      l.status="fulfilled",l.value=e;
      for(var r=0;
      r<n.length;
      r++)(0,n[r])(e)
    }
      ,function(r){
      for(l.status="rejected",l.reason=r,r=0;
      r<n.length;
      r++)(0,n[r])(void 0)
    }
    ),l
  }
  var Gd=R.S;
    R.S=function(t,e){
    Em=Ne(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&bv(t,e),Gd!==null&&Gd(t,e)
  }
  ;
  var Si=A(null);
    function wr(){
    var t=Si.current;
    return t!==null?t:Rt.pooledCache
  }
    function hs(t,e){
    e===null?Q(Si,Si.current):Q(Si,e.pool)
  }
    function qd(){
    var t=wr();
      return t===null?null:{
      parent:Pt._currentValue,pool:t
    }
  }
    var ea=Error(o(460)),zr=Error(o(474)),ms=Error(o(542)),ps={
      then:function(){
    }
  }
  ;
    function Yd(t){
    return t=t.status,t==="fulfilled"||t==="rejected"
  }
    function Xd(t,e,n){
      switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(gn,gn),e=n),e.status){
      case"fulfilled":return e.value;
      case"rejected":throw t=e.reason,Zd(t),t;
      default:if(typeof e.status=="string")e.then(gn,gn);
        else{
        if(t=Rt,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));
          t=e,t.status="pending",t.then(function(l){
            if(e.status==="pending"){
            var r=e;
            r.status="fulfilled",r.value=l
          }
        }
          ,function(l){
            if(e.status==="pending"){
            var r=e;
            r.status="rejected",r.reason=l
          }
        }
        )
      }
        switch(e.status){
        case"fulfilled":return e.value;
        case"rejected":throw t=e.reason,Zd(t),t
      }
      throw Ai=e,ea
    }
  }
    function Ti(t){
      try{
      var e=t._init;
      return e(t._payload)
    }
      catch(n){
      throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ai=n,ea):n
    }
  }
  var Ai=null;
    function Kd(){
    if(Ai===null)throw Error(o(459));
    var t=Ai;
    return Ai=null,t
  }
    function Zd(t){
    if(t===ea||t===ms)throw Error(o(483))
  }
  var na=null,Pa=0;
    function ys(t){
    var e=Pa;
    return Pa+=1,na===null&&(na=[]),Xd(na,t,e)
  }
    function Wa(t,e){
    e=e.props.ref,t.ref=e!==void 0?e:null
  }
    function gs(t,e){
    throw e.$$typeof===x?Error(o(525)):(t=Object.prototype.toString.call(e),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))
  }
    function Qd(t){
      function e(M,E){
        if(t){
        var z=M.deletions;
        z===null?(M.deletions=[E],M.flags|=16):z.push(E)
      }
    }
      function n(M,E){
      if(!t)return null;
      for(;
      E!==null;
      )e(M,E),E=E.sibling;
      return null
    }
      function l(M){
      for(var E=new Map;
      M!==null;
      )M.key!==null?E.set(M.key,M):E.set(M.index,M),M=M.sibling;
      return E
    }
      function r(M,E){
      return M=bn(M,E),M.index=0,M.sibling=null,M
    }
      function u(M,E,z){
      return M.index=z,t?(z=M.alternate,z!==null?(z=z.index,z<E?(M.flags|=67108866,E):z):(M.flags|=67108866,E)):(M.flags|=1048576,
      E)
    }
      function h(M){
      return t&&M.alternate===null&&(M.flags|=67108866),M
    }
      function g(M,E,z,_){
      return E===null||E.tag!==6?(E=yr(z,M.mode,_),E.return=M,E):(E=r(E,z),E.return=M,E)
    }
      function T(M,E,z,_){
      var nt=z.type;
      return nt===D?O(M,E,z.props.children,_,z.key):E!==null&&(E.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===P&&Ti(nt)===E.type)?(E=r(E,
      z.props),Wa(E,z),E.return=M,E):(E=us(z.type,z.key,z.props,null,M.mode,_),Wa(E,z),E.return=M,E)
    }
      function C(M,E,z,_){
      return E===null||E.tag!==4||E.stateNode.containerInfo!==z.containerInfo||E.stateNode.implementation!==z.implementation?(E=gr(z,
      M.mode,_),E.return=M,E):(E=r(E,z.children||[]),E.return=M,E)
    }
      function O(M,E,z,_,nt){
      return E===null||E.tag!==7?(E=gi(z,M.mode,_,nt),E.return=M,E):(E=r(E,z),E.return=M,E)
    }
      function L(M,E,z){
      if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=yr(""+E,M.mode,z),E.return=M,E;
        if(typeof E=="object"&&E!==null){
          switch(E.$$typeof){
          case w:return z=us(E.type,E.key,E.props,null,M.mode,z),Wa(z,E),z.return=M,z;
          case N:return E=gr(E,M.mode,z),E.return=M,E;
          case P:return E=Ti(E),L(M,E,z)
        }
        if(Ut(E)||xt(E))return E=gi(E,M.mode,z,null),E.return=M,E;
        if(typeof E.then=="function")return L(M,ys(E),z);
        if(E.$$typeof===G)return L(M,ds(M,E),z);
        gs(M,E)
      }
      return null
    }
      function j(M,E,z,_){
      var nt=E!==null?E.key:null;
      if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return nt!==null?null:g(M,E,""+z,_);
        if(typeof z=="object"&&z!==null){
          switch(z.$$typeof){
          case w:return z.key===nt?T(M,E,z,_):null;
          case N:return z.key===nt?C(M,E,z,_):null;
          case P:return z=Ti(z),j(M,E,z,_)
        }
        if(Ut(z)||xt(z))return nt!==null?null:O(M,E,z,_,null);
        if(typeof z.then=="function")return j(M,E,ys(z),_);
        if(z.$$typeof===G)return j(M,E,ds(M,z),_);
        gs(M,z)
      }
      return null
    }
      function V(M,E,z,_,nt){
      if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return M=M.get(z)||null,g(E,M,""+_,nt);
        if(typeof _=="object"&&_!==null){
          switch(_.$$typeof){
          case w:return M=M.get(_.key===null?z:_.key)||null,T(E,M,_,nt);
          case N:return M=M.get(_.key===null?z:_.key)||null,C(E,M,_,nt);
          case P:return _=Ti(_),V(M,E,z,_,nt)
        }
        if(Ut(_)||xt(_))return M=M.get(z)||null,O(E,M,_,nt,null);
        if(typeof _.then=="function")return V(M,E,z,ys(_),nt);
        if(_.$$typeof===G)return V(M,E,z,ds(E,_),nt);
        gs(E,_)
      }
      return null
    }
      function W(M,E,z,_){
      for(var nt=null,Et=null,I=E,dt=E=0,vt=null;
      I!==null&&dt<z.length;
        dt++){
        I.index>dt?(vt=I,I=null):vt=I.sibling;
        var Mt=j(M,I,z[dt],_);
          if(Mt===null){
          I===null&&(I=vt);
          break
        }
        t&&I&&Mt.alternate===null&&e(M,I),E=u(Mt,E,dt),Et===null?nt=Mt:Et.sibling=Mt,Et=Mt,I=vt
      }
      if(dt===z.length)return n(M,I),bt&&xn(M,dt),nt;
        if(I===null){
        for(;
        dt<z.length;
        dt++)I=L(M,z[dt],_),I!==null&&(E=u(I,E,dt),Et===null?nt=I:Et.sibling=I,Et=I);
        return bt&&xn(M,dt),nt
      }
      for(I=l(I);
      dt<z.length;
      dt++)vt=V(I,M,dt,z[dt],_),vt!==null&&(t&&vt.alternate!==null&&I.delete(vt.key===null?dt:vt.key),E=u(vt,E,dt),Et===null?nt=vt:Et.sibling=vt,
      Et=vt);
        return t&&I.forEach(function(li){
        return e(M,li)
      }
      ),bt&&xn(M,dt),nt
    }
      function at(M,E,z,_){
      if(z==null)throw Error(o(151));
      for(var nt=null,Et=null,I=E,dt=E=0,vt=null,Mt=z.next();
      I!==null&&!Mt.done;
        dt++,Mt=z.next()){
        I.index>dt?(vt=I,I=null):vt=I.sibling;
        var li=j(M,I,Mt.value,_);
          if(li===null){
          I===null&&(I=vt);
          break
        }
        t&&I&&li.alternate===null&&e(M,I),E=u(li,E,dt),Et===null?nt=li:Et.sibling=li,Et=li,I=vt
      }
      if(Mt.done)return n(M,I),bt&&xn(M,dt),nt;
        if(I===null){
        for(;
        !Mt.done;
        dt++,Mt=z.next())Mt=L(M,Mt.value,_),Mt!==null&&(E=u(Mt,E,dt),Et===null?nt=Mt:Et.sibling=Mt,Et=Mt);
        return bt&&xn(M,dt),nt
      }
      for(I=l(I);
      !Mt.done;
      dt++,Mt=z.next())Mt=V(I,M,dt,Mt.value,_),Mt!==null&&(t&&Mt.alternate!==null&&I.delete(Mt.key===null?dt:Mt.key),E=u(Mt,E,dt),
      Et===null?nt=Mt:Et.sibling=Mt,Et=Mt);
        return t&&I.forEach(function(Nb){
        return e(M,Nb)
      }
      ),bt&&xn(M,dt),nt
    }
      function Nt(M,E,z,_){
        if(typeof z=="object"&&z!==null&&z.type===D&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){
          switch(z.$$typeof){
            case w:t:{
            for(var nt=z.key;
            E!==null;
              ){
                if(E.key===nt){
                  if(nt=z.type,nt===D){
                    if(E.tag===7){
                    n(M,E.sibling),_=r(E,z.props.children),_.return=M,M=_;
                    break t
                  }
                }
                  else if(E.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===P&&Ti(nt)===E.type){
                  n(M,E.sibling),_=r(E,z.props),Wa(_,z),_.return=M,M=_;
                  break t
                }
                n(M,E);
                break
              }
              else e(M,E);
              E=E.sibling
            }
            z.type===D?(_=gi(z.props.children,M.mode,_,z.key),_.return=M,M=_):(_=us(z.type,z.key,z.props,null,M.mode,_),Wa(_,z),_.return=M,
            M=_)
          }
          return h(M);
            case N:t:{
            for(nt=z.key;
            E!==null;
              ){
                if(E.key===nt)if(E.tag===4&&E.stateNode.containerInfo===z.containerInfo&&E.stateNode.implementation===z.implementation){
                n(M,E.sibling),_=r(E,z.children||[]),_.return=M,M=_;
                break t
              }
                else{
                n(M,E);
                break
              }
              else e(M,E);
              E=E.sibling
            }
            _=gr(z,M.mode,_),_.return=M,M=_
          }
          return h(M);
          case P:return z=Ti(z),Nt(M,E,z,_)
        }
        if(Ut(z))return W(M,E,z,_);
          if(xt(z)){
          if(nt=xt(z),typeof nt!="function")throw Error(o(150));
          return z=nt.call(z),at(M,E,z,_)
        }
        if(typeof z.then=="function")return Nt(M,E,ys(z),_);
        if(z.$$typeof===G)return Nt(M,E,ds(M,z),_);
        gs(M,z)
      }
      return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,E!==null&&E.tag===6?(n(M,E.sibling),_=r(E,
      z),_.return=M,M=_):(n(M,E),_=yr(z,M.mode,_),_.return=M,M=_),h(M)):n(M,E)
    }
      return function(M,E,z,_){
        try{
        Pa=0;
        var nt=Nt(M,E,z,_);
        return na=null,nt
      }
        catch(I){
        if(I===ea||I===ms)throw I;
        var Et=_e(29,I,null,M.mode);
        return Et.lanes=_,Et.return=M,Et
      }
    }
  }
  var Ei=Qd(!0),Jd=Qd(!1),qn=!1;
    function Cr(t){
      t.updateQueue={
        baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{
        pending:null,lanes:0,hiddenCallbacks:null
      }
      ,callbacks:null
    }
  }
    function jr(t,e){
      t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={
      baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null
    }
    )
  }
    function Yn(t){
      return{
      lane:t,tag:0,payload:null,callback:null,next:null
    }
  }
    function Xn(t,e,n){
    var l=t.updateQueue;
    if(l===null)return null;
      if(l=l.shared,(Dt&2)!==0){
      var r=l.pending;
      return r===null?e.next=e:(e.next=r.next,r.next=e),l.pending=e,e=rs(t),Nd(t,null,n),e
    }
    return os(t,l,e,n),rs(t)
  }
    function $a(t,e,n){
      if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){
      var l=e.lanes;
      l&=t.pendingLanes,n|=l,e.lanes=n,Hf(t,n)
    }
  }
    function Nr(t,e){
    var n=t.updateQueue,l=t.alternate;
      if(l!==null&&(l=l.updateQueue,n===l)){
      var r=null,u=null;
        if(n=n.firstBaseUpdate,n!==null){
          do{
            var h={
            lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null
          }
          ;
          u===null?r=u=h:u=u.next=h,n=n.next
        }
        while(n!==null);
        u===null?r=u=e:u=u.next=e
      }
      else r=u=e;
        n={
        baseState:l.baseState,firstBaseUpdate:r,lastBaseUpdate:u,shared:l.shared,callbacks:l.callbacks
      }
      ,t.updateQueue=n;
      return
    }
    t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e
  }
  var Rr=!1;
    function Ia(){
      if(Rr){
      var t=ta;
      if(t!==null)throw t
    }
  }
    function tl(t,e,n,l){
    Rr=!1;
    var r=t.updateQueue;
    qn=!1;
    var u=r.firstBaseUpdate,h=r.lastBaseUpdate,g=r.shared.pending;
      if(g!==null){
      r.shared.pending=null;
      var T=g,C=T.next;
      T.next=null,h===null?u=C:h.next=C,h=T;
      var O=t.alternate;
      O!==null&&(O=O.updateQueue,g=O.lastBaseUpdate,g!==h&&(g===null?O.firstBaseUpdate=C:g.next=C,O.lastBaseUpdate=T))
    }
      if(u!==null){
      var L=r.baseState;
      h=0,O=C=T=null,g=u;
        do{
        var j=g.lane&-536870913,V=j!==g.lane;
          if(V?(gt&j)===j:(l&j)===j){
            j!==0&&j===Ii&&(Rr=!0),O!==null&&(O=O.next={
            lane:0,tag:g.tag,payload:g.payload,callback:null,next:null
          }
          );
            t:{
            var W=t,at=g;
            j=e;
            var Nt=n;
              switch(at.tag){
                case 1:if(W=at.payload,typeof W=="function"){
                L=W.call(Nt,L,j);
                break t
              }
              L=W;
              break t;
              case 3:W.flags=W.flags&-65537|128;
              case 0:if(W=at.payload,j=typeof W=="function"?W.call(Nt,L,j):W,j==null)break t;
                L=b({
              }
              ,L,j);
              break t;
              case 2:qn=!0
            }
          }
          j=g.callback,j!==null&&(t.flags|=64,V&&(t.flags|=8192),V=r.callbacks,V===null?r.callbacks=[j]:V.push(j))
        }
          else V={
          lane:j,tag:g.tag,payload:g.payload,callback:g.callback,next:null
        }
        ,O===null?(C=O=V,T=L):O=O.next=V,h|=j;
          if(g=g.next,g===null){
          if(g=r.shared.pending,g===null)break;
          V=g,g=V.next,V.next=null,r.lastBaseUpdate=V,r.shared.pending=null
        }
      }
      while(!0);
      O===null&&(T=L),r.baseState=T,r.firstBaseUpdate=C,r.lastBaseUpdate=O,u===null&&(r.shared.lanes=0),Fn|=h,t.lanes=h,t.memoizedState=L
    }
  }
    function Fd(t,e){
    if(typeof t!="function")throw Error(o(191,t));
    t.call(e)
  }
    function Pd(t,e){
    var n=t.callbacks;
    if(n!==null)for(t.callbacks=null,t=0;
    t<n.length;
    t++)Fd(n[t],e)
  }
  var ia=A(null),vs=A(0);
    function Wd(t,e){
    t=Nn,Q(vs,t),Q(ia,e),Nn=t|e.baseLanes
  }
    function Vr(){
    Q(vs,Nn),Q(ia,ia.current)
  }
    function Or(){
    Nn=vs.current,U(ia),U(vs)
  }
  var Be=A(null),Fe=null;
    function Kn(t){
    var e=t.alternate;
    Q(Zt,Zt.current&1),Q(Be,t),Fe===null&&(e===null||ia.current!==null||e.memoizedState!==null)&&(Fe=t)
  }
    function _r(t){
    Q(Zt,Zt.current),Q(Be,t),Fe===null&&(Fe=t)
  }
    function $d(t){
    t.tag===22?(Q(Zt,Zt.current),Q(Be,t),Fe===null&&(Fe=t)):Zn()
  }
    function Zn(){
    Q(Zt,Zt.current),Q(Be,Be.current)
  }
    function Ue(t){
    U(Be),Fe===t&&(Fe=null),U(Zt)
  }
  var Zt=A(0);
    function bs(t){
    for(var e=t;
    e!==null;
      ){
        if(e.tag===13){
        var n=e.memoizedState;
        if(n!==null&&(n=n.dehydrated,n===null||Gu(n)||qu(n)))return e
      }
        else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){
        if((e.flags&128)!==0)return e
      }
        else if(e.child!==null){
        e.child.return=e,e=e.child;
        continue
      }
      if(e===t)break;
      for(;
      e.sibling===null;
        ){
        if(e.return===null||e.return===t)return null;
        e=e.return
      }
      e.sibling.return=e.return,e=e.sibling
    }
    return null
  }
  var An=0,ct=null,Ct=null,Wt=null,xs=!1,aa=!1,Mi=!1,Ss=0,el=0,la=null,Sv=0;
    function qt(){
    throw Error(o(321))
  }
    function Br(t,e){
    if(e===null)return!1;
    for(var n=0;
    n<e.length&&n<t.length;
    n++)if(!Oe(t[n],e[n]))return!1;
    return!0
  }
    function Ur(t,e,n,l,r,u){
    return An=u,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,R.H=t===null||t.memoizedState===null?_h:$r,Mi=!1,u=n(l,
    r),Mi=!1,aa&&(u=th(e,n,l,r)),Id(t),u
  }
    function Id(t){
    R.H=al;
    var e=Ct!==null&&Ct.next!==null;
    if(An=0,Wt=Ct=ct=null,xs=!1,el=0,la=null,e)throw Error(o(300));
    t===null||$t||(t=t.dependencies,t!==null&&fs(t)&&($t=!0))
  }
    function th(t,e,n,l){
    ct=t;
    var r=0;
      do{
      if(aa&&(la=null),el=0,aa=!1,25<=r)throw Error(o(301));
        if(r+=1,Wt=Ct=null,t.updateQueue!=null){
        var u=t.updateQueue;
        u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)
      }
      R.H=Bh,u=e(n,l)
    }
    while(aa);
    return u
  }
    function Tv(){
    var t=R.H,e=t.useState()[0];
    return e=typeof e.then=="function"?nl(e):e,t=t.useState()[0],(Ct!==null?Ct.memoizedState:null)!==t&&(ct.flags|=1024),e
  }
    function Lr(){
    var t=Ss!==0;
    return Ss=0,t
  }
    function Hr(t,e,n){
    e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n
  }
    function kr(t){
      if(xs){
      for(t=t.memoizedState;
      t!==null;
        ){
        var e=t.queue;
        e!==null&&(e.pending=null),t=t.next
      }
      xs=!1
    }
    An=0,Wt=Ct=ct=null,aa=!1,el=Ss=0,la=null
  }
    function ve(){
      var t={
      memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null
    }
    ;
    return Wt===null?ct.memoizedState=Wt=t:Wt=Wt.next=t,Wt
  }
    function Qt(){
      if(Ct===null){
      var t=ct.alternate;
      t=t!==null?t.memoizedState:null
    }
    else t=Ct.next;
    var e=Wt===null?ct.memoizedState:Wt.next;
    if(e!==null)Wt=e,Ct=t;
      else{
      if(t===null)throw ct.alternate===null?Error(o(467)):Error(o(310));
        Ct=t,t={
        memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null
      }
      ,Wt===null?ct.memoizedState=Wt=t:Wt=Wt.next=t
    }
    return Wt
  }
    function Ts(){
      return{
      lastEffect:null,events:null,stores:null,memoCache:null
    }
  }
    function nl(t){
    var e=el;
    return el+=1,la===null&&(la=[]),t=Xd(la,t,e),e=ct,(Wt===null?e.memoizedState:Wt.next)===null&&(e=e.alternate,R.H=e===null||e.memoizedState===null?_h:$r),
    t
  }
    function As(t){
      if(t!==null&&typeof t=="object"){
      if(typeof t.then=="function")return nl(t);
      if(t.$$typeof===G)return de(t)
    }
    throw Error(o(438,String(t)))
  }
    function Gr(t){
    var e=null,n=ct.updateQueue;
      if(n!==null&&(e=n.memoCache),e==null){
      var l=ct.alternate;
        l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={
          data:l.data.map(function(r){
          return r.slice()
        }
        ),index:0
      }
      )))
    }
      if(e==null&&(e={
      data:[],index:0
    }
    ),n===null&&(n=Ts(),ct.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),l=0;
    l<t;
    l++)n[l]=tt;
    return e.index++,n
  }
    function En(t,e){
    return typeof e=="function"?e(t):e
  }
    function Es(t){
    var e=Qt();
    return qr(e,Ct,t)
  }
    function qr(t,e,n){
    var l=t.queue;
    if(l===null)throw Error(o(311));
    l.lastRenderedReducer=n;
    var r=t.baseQueue,u=l.pending;
      if(u!==null){
        if(r!==null){
        var h=r.next;
        r.next=u.next,u.next=h
      }
      e.baseQueue=r=u,l.pending=null
    }
    if(u=t.baseState,r===null)t.memoizedState=u;
      else{
      e=r.next;
      var g=h=null,T=null,C=e,O=!1;
        do{
        var L=C.lane&-536870913;
          if(L!==C.lane?(gt&L)===L:(An&L)===L){
          var j=C.revertLane;
            if(j===0)T!==null&&(T=T.next={
            lane:0,revertLane:0,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null
          }
          ),L===Ii&&(O=!0);
            else if((An&j)===j){
            C=C.next,j===Ii&&(O=!0);
            continue
          }
            else L={
            lane:0,revertLane:C.revertLane,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null
          }
          ,T===null?(g=T=L,h=u):T=T.next=L,ct.lanes|=j,Fn|=j;
          L=C.action,Mi&&n(u,L),u=C.hasEagerState?C.eagerState:n(u,L)
        }
          else j={
          lane:L,revertLane:C.revertLane,gesture:C.gesture,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null
        }
        ,T===null?(g=T=j,h=u):T=T.next=j,ct.lanes|=L,Fn|=L;
        C=C.next
      }
      while(C!==null&&C!==e);
      if(T===null?h=u:T.next=g,!Oe(u,t.memoizedState)&&($t=!0,O&&(n=ta,n!==null)))throw n;
      t.memoizedState=u,t.baseState=h,t.baseQueue=T,l.lastRenderedState=u
    }
    return r===null&&(l.lanes=0),[t.memoizedState,l.dispatch]
  }
    function Yr(t){
    var e=Qt(),n=e.queue;
    if(n===null)throw Error(o(311));
    n.lastRenderedReducer=t;
    var l=n.dispatch,r=n.pending,u=e.memoizedState;
      if(r!==null){
      n.pending=null;
      var h=r=r.next;
      do u=t(u,h.action),h=h.next;
      while(h!==r);
      Oe(u,e.memoizedState)||($t=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),n.lastRenderedState=u
    }
    return[u,l]
  }
    function eh(t,e,n){
    var l=ct,r=Qt(),u=bt;
      if(u){
      if(n===void 0)throw Error(o(407));
      n=n()
    }
    else n=e();
    var h=!Oe((Ct||r).memoizedState,n);
      if(h&&(r.memoizedState=n,$t=!0),r=r.queue,Zr(ah.bind(null,l,r,t),[t]),r.getSnapshot!==e||h||Wt!==null&&Wt.memoizedState.tag&1){
        if(l.flags|=2048,sa(9,{
        destroy:void 0
      }
      ,ih.bind(null,l,r,n,e),null),Rt===null)throw Error(o(349));
      u||(An&127)!==0||nh(l,e,n)
    }
    return n
  }
    function nh(t,e,n){
      t.flags|=16384,t={
      getSnapshot:e,value:n
    }
    ,e=ct.updateQueue,e===null?(e=Ts(),ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))
  }
    function ih(t,e,n,l){
    e.value=n,e.getSnapshot=l,lh(e)&&sh(t)
  }
    function ah(t,e,n){
      return n(function(){
      lh(e)&&sh(t)
    }
    )
  }
    function lh(t){
    var e=t.getSnapshot;
    t=t.value;
      try{
      var n=e();
      return!Oe(t,n)
    }
      catch{
      return!0
    }
  }
    function sh(t){
    var e=yi(t,2);
    e!==null&&we(e,t,2)
  }
    function Xr(t){
    var e=ve();
      if(typeof t=="function"){
      var n=t;
        if(t=n(),Mi){
        _n(!0);
          try{
          n()
        }
          finally{
          _n(!1)
        }
      }
    }
      return e.memoizedState=e.baseState=t,e.queue={
      pending:null,lanes:0,dispatch:null,lastRenderedReducer:En,lastRenderedState:t
    }
    ,e
  }
    function oh(t,e,n,l){
    return t.baseState=n,qr(t,Ct,typeof l=="function"?l:En)
  }
    function Av(t,e,n,l,r){
    if(ws(t))throw Error(o(485));
      if(t=e.action,t!==null){
        var u={
          payload:r,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){
          u.listeners.push(h)
        }
      }
      ;
      R.T!==null?n(!0):u.isTransition=!1,l(u),n=e.pending,n===null?(u.next=e.pending=u,rh(e,u)):(u.next=n.next,e.pending=n.next=u)
    }
  }
    function rh(t,e){
    var n=e.action,l=e.payload,r=t.state;
      if(e.isTransition){
        var u=R.T,h={
      }
      ;
      R.T=h;
        try{
        var g=n(r,l),T=R.S;
        T!==null&&T(h,g),uh(t,e,g)
      }
        catch(C){
        Kr(t,e,C)
      }
        finally{
        u!==null&&h.types!==null&&(u.types=h.types),R.T=u
      }
    }
      else try{
      u=n(r,l),uh(t,e,u)
    }
      catch(C){
      Kr(t,e,C)
    }
  }
    function uh(t,e,n){
      n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){
      ch(t,e,l)
    }
      ,function(l){
      return Kr(t,e,l)
    }
    ):ch(t,e,n)
  }
    function ch(t,e,n){
    e.status="fulfilled",e.value=n,fh(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,rh(t,
    n)))
  }
    function Kr(t,e,n){
    var l=t.pending;
      if(t.pending=null,l!==null){
      l=l.next;
      do e.status="rejected",e.reason=n,fh(e),e=e.next;
      while(e!==l)
    }
    t.action=null
  }
    function fh(t){
    t=t.listeners;
    for(var e=0;
    e<t.length;
    e++)(0,t[e])()
  }
    function dh(t,e){
    return e
  }
    function hh(t,e){
      if(bt){
      var n=Rt.formState;
        if(n!==null){
          t:{
          var l=ct;
            if(bt){
              if(_t){
                e:{
                for(var r=_t,u=Je;
                r.nodeType!==8;
                  ){
                    if(!u){
                    r=null;
                    break e
                  }
                    if(r=Pe(r.nextSibling),r===null){
                    r=null;
                    break e
                  }
                }
                u=r.data,r=u==="F!"||u==="F"?r:null
              }
                if(r){
                _t=Pe(r.nextSibling),l=r.data==="F!";
                break t
              }
            }
            kn(l)
          }
          l=!1
        }
        l&&(e=n[0])
      }
    }
      return n=ve(),n.memoizedState=n.baseState=e,l={
      pending:null,lanes:0,dispatch:null,lastRenderedReducer:dh,lastRenderedState:e
    }
      ,n.queue=l,n=Rh.bind(null,ct,l),l.dispatch=n,l=Xr(!1),u=Wr.bind(null,ct,!1,l.queue),l=ve(),r={
      state:e,dispatch:null,action:t,pending:null
    }
    ,l.queue=r,n=Av.bind(null,ct,r,u,n),r.dispatch=n,l.memoizedState=t,[e,n,!1]
  }
    function mh(t){
    var e=Qt();
    return ph(e,Ct,t)
  }
    function ph(t,e,n){
      if(e=qr(t,e,dh)[0],t=Es(En)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{
      var l=nl(e)
    }
      catch(h){
      throw h===ea?ms:h
    }
    else l=e;
    e=Qt();
    var r=e.queue,u=r.dispatch;
      return n!==e.memoizedState&&(ct.flags|=2048,sa(9,{
      destroy:void 0
    }
    ,Ev.bind(null,r,n),null)),[l,u,t]
  }
    function Ev(t,e){
    t.action=e
  }
    function yh(t){
    var e=Qt(),n=Ct;
    if(n!==null)return ph(e,n,t);
    Qt(),e=e.memoizedState,n=Qt();
    var l=n.queue.dispatch;
    return n.memoizedState=t,[e,l,!1]
  }
    function sa(t,e,n,l){
      return t={
      tag:t,create:n,deps:l,inst:e,next:null
    }
    ,e=ct.updateQueue,e===null&&(e=Ts(),ct.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(l=n.next,n.next=t,t.next=l,
    e.lastEffect=t),t
  }
    function gh(){
    return Qt().memoizedState
  }
    function Ms(t,e,n,l){
    var r=ve();
      ct.flags|=t,r.memoizedState=sa(1|e,{
      destroy:void 0
    }
    ,n,l===void 0?null:l)
  }
    function Ds(t,e,n,l){
    var r=Qt();
    l=l===void 0?null:l;
    var u=r.memoizedState.inst;
    Ct!==null&&l!==null&&Br(l,Ct.memoizedState.deps)?r.memoizedState=sa(e,u,n,l):(ct.flags|=t,r.memoizedState=sa(1|e,u,n,l))
  }
    function vh(t,e){
    Ms(8390656,8,t,e)
  }
    function Zr(t,e){
    Ds(2048,8,t,e)
  }
    function Mv(t){
    ct.flags|=4;
    var e=ct.updateQueue;
    if(e===null)e=Ts(),ct.updateQueue=e,e.events=[t];
      else{
      var n=e.events;
      n===null?e.events=[t]:n.push(t)
    }
  }
    function bh(t){
    var e=Qt().memoizedState;
      return Mv({
      ref:e,nextImpl:t
    }
      ),function(){
      if((Dt&2)!==0)throw Error(o(440));
      return e.impl.apply(void 0,arguments)
    }
  }
    function xh(t,e){
    return Ds(4,2,t,e)
  }
    function Sh(t,e){
    return Ds(4,4,t,e)
  }
    function Th(t,e){
      if(typeof e=="function"){
      t=t();
      var n=e(t);
        return function(){
        typeof n=="function"?n():e(null)
      }
    }
      if(e!=null)return t=t(),e.current=t,function(){
      e.current=null
    }
  }
    function Ah(t,e,n){
    n=n!=null?n.concat([t]):null,Ds(4,4,Th.bind(null,e,t),n)
  }
    function Qr(){
  }
    function Eh(t,e){
    var n=Qt();
    e=e===void 0?null:e;
    var l=n.memoizedState;
    return e!==null&&Br(e,l[1])?l[0]:(n.memoizedState=[t,e],t)
  }
    function Mh(t,e){
    var n=Qt();
    e=e===void 0?null:e;
    var l=n.memoizedState;
    if(e!==null&&Br(e,l[1]))return l[0];
      if(l=t(),Mi){
      _n(!0);
        try{
        t()
      }
        finally{
        _n(!1)
      }
    }
    return n.memoizedState=[l,e],l
  }
    function Jr(t,e,n){
    return n===void 0||(An&1073741824)!==0&&(gt&261930)===0?t.memoizedState=e:(t.memoizedState=n,t=Dm(),ct.lanes|=t,Fn|=t,n)
  }
    function Dh(t,e,n,l){
    return Oe(n,e)?n:ia.current!==null?(t=Jr(t,n,l),Oe(t,e)||($t=!0),t):(An&42)===0||(An&1073741824)!==0&&(gt&261930)===0?($t=!0,
    t.memoizedState=n):(t=Dm(),ct.lanes|=t,Fn|=t,e)
  }
    function wh(t,e,n,l,r){
    var u=K.p;
    K.p=u!==0&&8>u?u:8;
      var h=R.T,g={
    }
    ;
    R.T=g,Wr(t,!1,e,n);
      try{
      var T=r(),C=R.S;
        if(C!==null&&C(g,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){
        var O=xv(T,l);
        il(t,e,O,ke(t))
      }
      else il(t,e,l,ke(t))
    }
      catch(L){
        il(t,e,{
          then:function(){
        }
        ,status:"rejected",reason:L
      }
      ,ke())
    }
      finally{
      K.p=u,h!==null&&g.types!==null&&(h.types=g.types),R.T=h
    }
  }
    function Dv(){
  }
    function Fr(t,e,n,l){
    if(t.tag!==5)throw Error(o(476));
    var r=zh(t).queue;
      wh(t,r,e,F,n===null?Dv:function(){
      return Ch(t),n(l)
    }
    )
  }
    function zh(t){
    var e=t.memoizedState;
    if(e!==null)return e;
      e={
        memoizedState:F,baseState:F,baseQueue:null,queue:{
        pending:null,lanes:0,dispatch:null,lastRenderedReducer:En,lastRenderedState:F
      }
      ,next:null
    }
    ;
      var n={
    }
    ;
      return e.next={
        memoizedState:n,baseState:n,baseQueue:null,queue:{
        pending:null,lanes:0,dispatch:null,lastRenderedReducer:En,lastRenderedState:n
      }
      ,next:null
    }
    ,t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e
  }
    function Ch(t){
    var e=zh(t);
      e.next===null&&(e=t.alternate.memoizedState),il(t,e.next.queue,{
    }
    ,ke())
  }
    function Pr(){
    return de(xl)
  }
    function jh(){
    return Qt().memoizedState
  }
    function Nh(){
    return Qt().memoizedState
  }
    function wv(t){
    for(var e=t.return;
    e!==null;
      ){
        switch(e.tag){
        case 24:case 3:var n=ke();
        t=Yn(n);
        var l=Xn(e,t,n);
          l!==null&&(we(l,e,n),$a(l,e,n)),e={
          cache:Mr()
        }
        ,t.payload=e;
        return
      }
      e=e.return
    }
  }
    function zv(t,e,n){
    var l=ke();
      n={
      lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null
    }
    ,ws(t)?Vh(e,n):(n=mr(t,e,n,l),n!==null&&(we(n,t,l),Oh(n,e,l)))
  }
    function Rh(t,e,n){
    var l=ke();
    il(t,e,n,l)
  }
    function il(t,e,n,l){
      var r={
      lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null
    }
    ;
    if(ws(t))Vh(e,r);
      else{
      var u=t.alternate;
        if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{
        var h=e.lastRenderedState,g=u(h,n);
        if(r.hasEagerState=!0,r.eagerState=g,Oe(g,h))return os(t,e,r,0),Rt===null&&ss(),!1
      }
        catch{
      }
      if(n=mr(t,e,r,l),n!==null)return we(n,t,l),Oh(n,e,l),!0
    }
    return!1
  }
    function Wr(t,e,n,l){
      if(l={
      lane:2,revertLane:Cu(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null
    }
      ,ws(t)){
      if(e)throw Error(o(479))
    }
    else e=mr(t,n,l,2),e!==null&&we(e,t,2)
  }
    function ws(t){
    var e=t.alternate;
    return t===ct||e!==null&&e===ct
  }
    function Vh(t,e){
    aa=xs=!0;
    var n=t.pending;
    n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e
  }
    function Oh(t,e,n){
      if((n&4194048)!==0){
      var l=e.lanes;
      l&=t.pendingLanes,n|=l,e.lanes=n,Hf(t,n)
    }
  }
    var al={
    readContext:de,use:As,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useLayoutEffect:qt,useInsertionEffect:qt,
    useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useSyncExternalStore:qt,
    useId:qt,useHostTransitionStatus:qt,useFormState:qt,useActionState:qt,useOptimistic:qt,useMemoCache:qt,useCacheRefresh:qt
  }
  ;
  al.useEffectEvent=qt;
    var _h={
      readContext:de,use:As,useCallback:function(t,e){
      return ve().memoizedState=[t,e===void 0?null:e],t
    }
      ,useContext:de,useEffect:vh,useImperativeHandle:function(t,e,n){
      n=n!=null?n.concat([t]):null,Ms(4194308,4,Th.bind(null,e,t),n)
    }
      ,useLayoutEffect:function(t,e){
      return Ms(4194308,4,t,e)
    }
      ,useInsertionEffect:function(t,e){
      Ms(4,2,t,e)
    }
      ,useMemo:function(t,e){
      var n=ve();
      e=e===void 0?null:e;
      var l=t();
        if(Mi){
        _n(!0);
          try{
          t()
        }
          finally{
          _n(!1)
        }
      }
      return n.memoizedState=[l,e],l
    }
      ,useReducer:function(t,e,n){
      var l=ve();
        if(n!==void 0){
        var r=n(e);
          if(Mi){
          _n(!0);
            try{
            n(e)
          }
            finally{
            _n(!1)
          }
        }
      }
      else r=e;
        return l.memoizedState=l.baseState=r,t={
        pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r
      }
      ,l.queue=t,t=t.dispatch=zv.bind(null,ct,t),[l.memoizedState,t]
    }
      ,useRef:function(t){
      var e=ve();
        return t={
        current:t
      }
      ,e.memoizedState=t
    }
      ,useState:function(t){
      t=Xr(t);
      var e=t.queue,n=Rh.bind(null,ct,e);
      return e.dispatch=n,[t.memoizedState,n]
    }
      ,useDebugValue:Qr,useDeferredValue:function(t,e){
      var n=ve();
      return Jr(n,t,e)
    }
      ,useTransition:function(){
      var t=Xr(!1);
      return t=wh.bind(null,ct,t.queue,!0,!1),ve().memoizedState=t,[!1,t]
    }
      ,useSyncExternalStore:function(t,e,n){
      var l=ct,r=ve();
        if(bt){
        if(n===void 0)throw Error(o(407));
        n=n()
      }
        else{
        if(n=e(),Rt===null)throw Error(o(349));
        (gt&127)!==0||nh(l,e,n)
      }
      r.memoizedState=n;
        var u={
        value:n,getSnapshot:e
      }
      ;
        return r.queue=u,vh(ah.bind(null,l,u,t),[t]),l.flags|=2048,sa(9,{
        destroy:void 0
      }
      ,ih.bind(null,l,u,n,e),null),n
    }
      ,useId:function(){
      var t=ve(),e=Rt.identifierPrefix;
        if(bt){
        var n=cn,l=un;
        n=(l&~(1<<32-Ve(l)-1)).toString(32)+n,e="_"+e+"R_"+n,n=Ss++,0<n&&(e+="H"+n.toString(32)),e+="_"
      }
      else n=Sv++,e="_"+e+"r_"+n.toString(32)+"_";
      return t.memoizedState=e
    }
      ,useHostTransitionStatus:Pr,useFormState:hh,useActionState:hh,useOptimistic:function(t){
      var e=ve();
      e.memoizedState=e.baseState=t;
        var n={
        pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null
      }
      ;
      return e.queue=n,e=Wr.bind(null,ct,!0,n),n.dispatch=e,[t,e]
    }
      ,useMemoCache:Gr,useCacheRefresh:function(){
      return ve().memoizedState=wv.bind(null,ct)
    }
      ,useEffectEvent:function(t){
        var e=ve(),n={
        impl:t
      }
      ;
        return e.memoizedState=n,function(){
        if((Dt&2)!==0)throw Error(o(440));
        return n.impl.apply(void 0,arguments)
      }
    }
  }
    ,$r={
    readContext:de,use:As,useCallback:Eh,useContext:de,useEffect:Zr,useImperativeHandle:Ah,useInsertionEffect:xh,useLayoutEffect:Sh,
      useMemo:Mh,useReducer:Es,useRef:gh,useState:function(){
      return Es(En)
    }
      ,useDebugValue:Qr,useDeferredValue:function(t,e){
      var n=Qt();
      return Dh(n,Ct.memoizedState,t,e)
    }
      ,useTransition:function(){
      var t=Es(En)[0],e=Qt().memoizedState;
      return[typeof t=="boolean"?t:nl(t),e]
    }
      ,useSyncExternalStore:eh,useId:jh,useHostTransitionStatus:Pr,useFormState:mh,useActionState:mh,useOptimistic:function(t,e){
      var n=Qt();
      return oh(n,Ct,t,e)
    }
    ,useMemoCache:Gr,useCacheRefresh:Nh
  }
  ;
  $r.useEffectEvent=bh;
    var Bh={
    readContext:de,use:As,useCallback:Eh,useContext:de,useEffect:Zr,useImperativeHandle:Ah,useInsertionEffect:xh,useLayoutEffect:Sh,
      useMemo:Mh,useReducer:Yr,useRef:gh,useState:function(){
      return Yr(En)
    }
      ,useDebugValue:Qr,useDeferredValue:function(t,e){
      var n=Qt();
      return Ct===null?Jr(n,t,e):Dh(n,Ct.memoizedState,t,e)
    }
      ,useTransition:function(){
      var t=Yr(En)[0],e=Qt().memoizedState;
      return[typeof t=="boolean"?t:nl(t),e]
    }
      ,useSyncExternalStore:eh,useId:jh,useHostTransitionStatus:Pr,useFormState:yh,useActionState:yh,useOptimistic:function(t,e){
      var n=Qt();
      return Ct!==null?oh(n,Ct,t,e):(n.baseState=t,[t,n.queue.dispatch])
    }
    ,useMemoCache:Gr,useCacheRefresh:Nh
  }
  ;
  Bh.useEffectEvent=bh;
    function Ir(t,e,n,l){
      e=t.memoizedState,n=n(l,e),n=n==null?e:b({
    }
    ,e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)
  }
    var tu={
      enqueueSetState:function(t,e,n){
      t=t._reactInternals;
      var l=ke(),r=Yn(l);
      r.payload=e,n!=null&&(r.callback=n),e=Xn(t,r,l),e!==null&&(we(e,t,l),$a(e,t,l))
    }
      ,enqueueReplaceState:function(t,e,n){
      t=t._reactInternals;
      var l=ke(),r=Yn(l);
      r.tag=1,r.payload=e,n!=null&&(r.callback=n),e=Xn(t,r,l),e!==null&&(we(e,t,l),$a(e,t,l))
    }
      ,enqueueForceUpdate:function(t,e){
      t=t._reactInternals;
      var n=ke(),l=Yn(n);
      l.tag=2,e!=null&&(l.callback=e),e=Xn(t,l,n),e!==null&&(we(e,t,n),$a(e,t,n))
    }
  }
  ;
    function Uh(t,e,n,l,r,u,h){
    return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,u,h):e.prototype&&e.prototype.isPureReactComponent?!Xa(n,
    l)||!Xa(r,u):!0
  }
    function Lh(t,e,n,l){
    t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,
    l),e.state!==t&&tu.enqueueReplaceState(e,e.state,null)
  }
    function Di(t,e){
    var n=e;
      if("ref"in e){
        n={
      }
      ;
      for(var l in e)l!=="ref"&&(n[l]=e[l])
    }
      if(t=t.defaultProps){
        n===e&&(n=b({
      }
      ,n));
      for(var r in t)n[r]===void 0&&(n[r]=t[r])
    }
    return n
  }
    function Hh(t){
    ls(t)
  }
    function kh(t){
    console.error(t)
  }
    function Gh(t){
    ls(t)
  }
    function zs(t,e){
      try{
      var n=t.onUncaughtError;
        n(e.value,{
        componentStack:e.stack
      }
      )
    }
      catch(l){
        setTimeout(function(){
        throw l
      }
      )
    }
  }
    function qh(t,e,n){
      try{
      var l=t.onCaughtError;
        l(n.value,{
        componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null
      }
      )
    }
      catch(r){
        setTimeout(function(){
        throw r
      }
      )
    }
  }
    function eu(t,e,n){
      return n=Yn(n),n.tag=3,n.payload={
      element:null
    }
      ,n.callback=function(){
      zs(t,e)
    }
    ,n
  }
    function Yh(t){
    return t=Yn(t),t.tag=3,t
  }
    function Xh(t,e,n,l){
    var r=n.type.getDerivedStateFromError;
      if(typeof r=="function"){
      var u=l.value;
        t.payload=function(){
        return r(u)
      }
        ,t.callback=function(){
        qh(e,n,l)
      }
    }
    var h=n.stateNode;
      h!==null&&typeof h.componentDidCatch=="function"&&(t.callback=function(){
      qh(e,n,l),typeof r!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this));
      var g=l.stack;
        this.componentDidCatch(l.value,{
        componentStack:g!==null?g:""
      }
      )
    }
    )
  }
    function Cv(t,e,n,l,r){
      if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){
        if(e=n.alternate,e!==null&&$i(e,n,r,!0),n=Be.current,n!==null){
          switch(n.tag){
          case 31:case 13:return Fe===null?ks():n.alternate===null&&Yt===0&&(Yt=3),n.flags&=-257,n.flags|=65536,n.lanes=r,l===ps?n.flags|=16384:(e=n.updateQueue,
          e===null?n.updateQueue=new Set([l]):e.add(l),Du(t,l,r)),!1;
            case 22:return n.flags|=65536,l===ps?n.flags|=16384:(e=n.updateQueue,e===null?(e={
            transitions:null,markerInstances:null,retryQueue:new Set([l])
          }
          ,n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([l]):n.add(l)),Du(t,l,r)),!1
        }
        throw Error(o(435,n.tag))
      }
      return Du(t,l,r),ks(),!1
    }
    if(bt)return e=Be.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=r,l!==xr&&(t=Error(o(422),
      {
      cause:l
    }
      ),Qa(Ke(t,n)))):(l!==xr&&(e=Error(o(423),{
      cause:l
    }
    ),Qa(Ke(e,n))),t=t.current.alternate,t.flags|=65536,r&=-r,t.lanes|=r,l=Ke(l,n),r=eu(t.stateNode,l,r),Nr(t,r),Yt!==4&&(Yt=2)),
    !1;
      var u=Error(o(520),{
      cause:l
    }
    );
    if(u=Ke(u,n),dl===null?dl=[u]:dl.push(u),Yt!==4&&(Yt=2),e===null)return!0;
    l=Ke(l,n),n=e;
      do{
        switch(n.tag){
        case 3:return n.flags|=65536,t=r&-r,n.lanes|=t,t=eu(n.stateNode,l,t),Nr(n,t),!1;
        case 1:if(e=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Pn===null||!Pn.has(u))))return n.flags|=65536,
        r&=-r,n.lanes|=r,r=Yh(r),Xh(r,t,n,l),Nr(n,r),!1
      }
      n=n.return
    }
    while(n!==null);
    return!1
  }
  var nu=Error(o(461)),$t=!1;
    function he(t,e,n,l){
    e.child=t===null?Jd(e,null,n,l):Ei(e,t.child,n,l)
  }
    function Kh(t,e,n,l,r){
    n=n.render;
    var u=e.ref;
      if("ref"in l){
        var h={
      }
      ;
      for(var g in l)g!=="ref"&&(h[g]=l[g])
    }
    else h=l;
    return xi(e),l=Ur(t,e,n,h,u,r),g=Lr(),t!==null&&!$t?(Hr(t,e,r),Mn(t,e,r)):(bt&&g&&vr(e),e.flags|=1,he(t,e,l,r),e.child)
  }
    function Zh(t,e,n,l,r){
      if(t===null){
      var u=n.type;
      return typeof u=="function"&&!pr(u)&&u.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=u,Qh(t,e,u,l,r)):(t=us(n.type,
      null,l,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)
    }
      if(u=t.child,!cu(t,r)){
      var h=u.memoizedProps;
      if(n=n.compare,n=n!==null?n:Xa,n(h,l)&&t.ref===e.ref)return Mn(t,e,r)
    }
    return e.flags|=1,t=bn(u,l),t.ref=e.ref,t.return=e,e.child=t
  }
    function Qh(t,e,n,l,r){
      if(t!==null){
      var u=t.memoizedProps;
      if(Xa(u,l)&&t.ref===e.ref)if($t=!1,e.pendingProps=l=u,cu(t,r))(t.flags&131072)!==0&&($t=!0);
      else return e.lanes=t.lanes,Mn(t,e,r)
    }
    return iu(t,e,n,l,r)
  }
    function Jh(t,e,n,l){
    var r=l.children,u=t!==null?t.memoizedState:null;
      if(t===null&&e.stateNode===null&&(e.stateNode={
      _visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null
    }
      ),l.mode==="hidden"){
        if((e.flags&128)!==0){
          if(u=u!==null?u.baseLanes|n:n,t!==null){
          for(l=e.child=t.child,r=0;
          l!==null;
          )r=r|l.lanes|l.childLanes,l=l.sibling;
          l=r&~u
        }
        else l=0,e.child=null;
        return Fh(t,e,u,n,l)
      }
        if((n&536870912)!==0)e.memoizedState={
        baseLanes:0,cachePool:null
      }
      ,t!==null&&hs(e,u!==null?u.cachePool:null),u!==null?Wd(e,u):Vr(),$d(e);
      else return l=e.lanes=536870912,Fh(t,e,u!==null?u.baseLanes|n:n,n,l)
    }
    else u!==null?(hs(e,u.cachePool),Wd(e,u),Zn(),e.memoizedState=null):(t!==null&&hs(e,null),Vr(),Zn());
    return he(t,e,r,n),e.child
  }
    function ll(t,e){
      return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={
      _visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null
    }
    ),e.sibling
  }
    function Fh(t,e,n,l,r){
    var u=wr();
      return u=u===null?null:{
      parent:Pt._currentValue,pool:u
    }
      ,e.memoizedState={
      baseLanes:n,cachePool:u
    }
    ,t!==null&&hs(e,null),Vr(),$d(e),t!==null&&$i(t,e,l,!0),e.childLanes=r,null
  }
    function Cs(t,e){
      return e=Ns({
      mode:e.mode,children:e.children
    }
    ,t.mode),e.ref=t.ref,t.child=e,e.return=t,e
  }
    function Ph(t,e,n){
    return Ei(e,t.child,null,n),t=Cs(e,e.pendingProps),t.flags|=2,Ue(e),e.memoizedState=null,t
  }
    function jv(t,e,n){
    var l=e.pendingProps,r=(e.flags&128)!==0;
      if(e.flags&=-129,t===null){
        if(bt){
        if(l.mode==="hidden")return t=Cs(e,l),e.lanes=536870912,ll(null,t);
          if(_r(e),(t=_t)?(t=rp(t,Je),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={
            dehydrated:t,treeContext:Ln!==null?{
            id:un,overflow:cn
          }
          :null,retryLane:536870912,hydrationErrors:null
        }
        ,n=Vd(t),n.return=e,e.child=n,fe=e,_t=null)):t=null,t===null)throw kn(e);
        return e.lanes=536870912,null
      }
      return Cs(e,l)
    }
    var u=t.memoizedState;
      if(u!==null){
      var h=u.dehydrated;
      if(_r(e),r)if(e.flags&256)e.flags&=-257,e=Ph(t,e,n);
      else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;
      else throw Error(o(558));
        else if($t||$i(t,e,n,!1),r=(n&t.childLanes)!==0,$t||r){
        if(l=Rt,l!==null&&(h=kf(l,n),h!==0&&h!==u.retryLane))throw u.retryLane=h,yi(t,h),we(l,t,h),nu;
        ks(),e=Ph(t,e,n)
      }
      else t=u.treeContext,_t=Pe(h.nextSibling),fe=e,bt=!0,Hn=null,Je=!1,t!==null&&Bd(e,t),e=Cs(e,l),e.flags|=4096;
      return e
    }
      return t=bn(t.child,{
      mode:l.mode,children:l.children
    }
    ),t.ref=e.ref,e.child=t,t.return=e,t
  }
    function js(t,e){
    var n=e.ref;
    if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);
      else{
      if(typeof n!="function"&&typeof n!="object")throw Error(o(284));
      (t===null||t.ref!==n)&&(e.flags|=4194816)
    }
  }
    function iu(t,e,n,l,r){
    return xi(e),n=Ur(t,e,n,l,void 0,r),l=Lr(),t!==null&&!$t?(Hr(t,e,r),Mn(t,e,r)):(bt&&l&&vr(e),e.flags|=1,he(t,e,n,r),e.child)
  }
    function Wh(t,e,n,l,r,u){
    return xi(e),e.updateQueue=null,n=th(e,l,n,r),Id(t),l=Lr(),t!==null&&!$t?(Hr(t,e,u),Mn(t,e,u)):(bt&&l&&vr(e),e.flags|=1,he(t,
    e,n,u),e.child)
  }
    function $h(t,e,n,l,r){
      if(xi(e),e.stateNode===null){
      var u=Ji,h=n.contextType;
      typeof h=="object"&&h!==null&&(u=de(h)),u=new n(l,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=tu,
        e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=l,u.state=e.memoizedState,u.refs={
      }
      ,Cr(e),h=n.contextType,u.context=typeof h=="object"&&h!==null?de(h):Ji,u.state=e.memoizedState,h=n.getDerivedStateFromProps,
      typeof h=="function"&&(Ir(e,n,h,l),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(h=u.state,
      typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),
      h!==u.state&&tu.enqueueReplaceState(u,u.state,null),tl(e,l,u,r),Ia(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),
      l=!0
    }
      else if(t===null){
      u=e.stateNode;
      var g=e.memoizedProps,T=Di(n,g);
      u.props=T;
      var C=u.context,O=n.contextType;
      h=Ji,typeof O=="object"&&O!==null&&(h=de(O));
      var L=n.getDerivedStateFromProps;
      O=typeof L=="function"||typeof u.getSnapshotBeforeUpdate=="function",g=e.pendingProps!==g,O||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(g||C!==h)&&Lh(e,
      u,l,h),qn=!1;
      var j=e.memoizedState;
      u.state=j,tl(e,l,u,r),Ia(),C=e.memoizedState,g||j!==C||qn?(typeof L=="function"&&(Ir(e,n,L,l),C=e.memoizedState),(T=qn||Uh(e,
      n,T,l,j,C,h))?(O||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),
      typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),
      e.memoizedProps=l,e.memoizedState=C),u.props=l,u.state=C,u.context=h,l=T):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),
      l=!1)
    }
      else{
      u=e.stateNode,jr(t,e),h=e.memoizedProps,O=Di(n,h),u.props=O,L=e.pendingProps,j=u.context,C=n.contextType,T=Ji,typeof C=="object"&&C!==null&&(T=de(C)),
      g=n.getDerivedStateFromProps,(C=typeof g=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h!==L||j!==T)&&Lh(e,
      u,l,T),qn=!1,j=e.memoizedState,u.state=j,tl(e,l,u,r),Ia();
      var V=e.memoizedState;
      h!==L||j!==V||qn||t!==null&&t.dependencies!==null&&fs(t.dependencies)?(typeof g=="function"&&(Ir(e,n,g,l),V=e.memoizedState),
      (O=qn||Uh(e,n,O,l,j,V,T)||t!==null&&t.dependencies!==null&&fs(t.dependencies))?(C||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(l,
      V,T),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(l,V,T)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),
      typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||h===t.memoizedProps&&j===t.memoizedState||(e.flags|=4),
      typeof u.getSnapshotBeforeUpdate!="function"||h===t.memoizedProps&&j===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,
      e.memoizedState=V),u.props=l,u.state=V,u.context=T,l=O):(typeof u.componentDidUpdate!="function"||h===t.memoizedProps&&j===t.memoizedState||(e.flags|=4),
      typeof u.getSnapshotBeforeUpdate!="function"||h===t.memoizedProps&&j===t.memoizedState||(e.flags|=1024),l=!1)
    }
    return u=l,js(t,e),l=(e.flags&128)!==0,u||l?(u=e.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:u.render(),
    e.flags|=1,t!==null&&l?(e.child=Ei(e,t.child,null,r),e.child=Ei(e,null,n,r)):he(t,e,n,r),e.memoizedState=u.state,t=e.child):t=Mn(t,
    e,r),t
  }
    function Ih(t,e,n,l){
    return vi(),e.flags|=256,he(t,e,n,l),e.child
  }
    var au={
    dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null
  }
  ;
    function lu(t){
      return{
      baseLanes:t,cachePool:qd()
    }
  }
    function su(t,e,n){
    return t=t!==null?t.childLanes&~n:0,e&&(t|=He),t
  }
    function tm(t,e,n){
    var l=e.pendingProps,r=!1,u=(e.flags&128)!==0,h;
    if((h=u)||(h=t!==null&&t.memoizedState===null?!1:(Zt.current&2)!==0),h&&(r=!0,e.flags&=-129),h=(e.flags&32)!==0,e.flags&=-33,
      t===null){
        if(bt){
          if(r?Kn(e):Zn(),(t=_t)?(t=rp(t,Je),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={
            dehydrated:t,treeContext:Ln!==null?{
            id:un,overflow:cn
          }
          :null,retryLane:536870912,hydrationErrors:null
        }
        ,n=Vd(t),n.return=e,e.child=n,fe=e,_t=null)):t=null,t===null)throw kn(e);
        return qu(t)?e.lanes=32:e.lanes=536870912,null
      }
      var g=l.children;
        return l=l.fallback,r?(Zn(),r=e.mode,g=Ns({
        mode:"hidden",children:g
      }
      ,r),l=gi(l,r,n,null),g.return=e,l.return=e,g.sibling=l,e.child=g,l=e.child,l.memoizedState=lu(n),l.childLanes=su(t,h,n),e.memoizedState=au,
      ll(null,l)):(Kn(e),ou(e,g))
    }
    var T=t.memoizedState;
      if(T!==null&&(g=T.dehydrated,g!==null)){
      if(u)e.flags&256?(Kn(e),e.flags&=-257,e=ru(t,e,n)):e.memoizedState!==null?(Zn(),e.child=t.child,e.flags|=128,e=null):(Zn(),
        g=l.fallback,r=e.mode,l=Ns({
        mode:"visible",children:l.children
      }
      ,r),g=gi(g,r,n,null),g.flags|=2,l.return=e,g.return=e,l.sibling=g,e.child=l,Ei(e,t.child,null,n),l=e.child,l.memoizedState=lu(n),
      l.childLanes=su(t,h,n),e.memoizedState=au,e=ll(null,l));
        else if(Kn(e),qu(g)){
        if(h=g.nextSibling&&g.nextSibling.dataset,h)var C=h.dgst;
          h=C,l=Error(o(419)),l.stack="",l.digest=h,Qa({
          value:l,source:null,stack:null
        }
        ),e=ru(t,e,n)
      }
        else if($t||$i(t,e,n,!1),h=(n&t.childLanes)!==0,$t||h){
        if(h=Rt,h!==null&&(l=kf(h,n),l!==0&&l!==T.retryLane))throw T.retryLane=l,yi(t,l),we(h,t,l),nu;
        Gu(g)||ks(),e=ru(t,e,n)
      }
      else Gu(g)?(e.flags|=192,e.child=t.child,e=null):(t=T.treeContext,_t=Pe(g.nextSibling),fe=e,bt=!0,Hn=null,Je=!1,t!==null&&Bd(e,
      t),e=ou(e,l.children),e.flags|=4096);
      return e
    }
      return r?(Zn(),g=l.fallback,r=e.mode,T=t.child,C=T.sibling,l=bn(T,{
      mode:"hidden",children:l.children
    }
    ),l.subtreeFlags=T.subtreeFlags&65011712,C!==null?g=bn(C,g):(g=gi(g,r,n,null),g.flags|=2),g.return=e,l.return=e,l.sibling=g,
      e.child=l,ll(null,l),l=e.child,g=t.child.memoizedState,g===null?g=lu(n):(r=g.cachePool,r!==null?(T=Pt._currentValue,r=r.parent!==T?{
      parent:T,pool:T
    }
      :r):r=qd(),g={
      baseLanes:g.baseLanes|n,cachePool:r
    }
      ),l.memoizedState=g,l.childLanes=su(t,h,n),e.memoizedState=au,ll(t.child,l)):(Kn(e),n=t.child,t=n.sibling,n=bn(n,{
      mode:"visible",children:l.children
    }
    ),n.return=e,n.sibling=null,t!==null&&(h=e.deletions,h===null?(e.deletions=[t],e.flags|=16):h.push(t)),e.child=n,e.memoizedState=null,
    n)
  }
    function ou(t,e){
      return e=Ns({
      mode:"visible",children:e
    }
    ,t.mode),e.return=t,t.child=e
  }
    function Ns(t,e){
    return t=_e(22,t,null,e),t.lanes=0,t
  }
    function ru(t,e,n){
    return Ei(e,t.child,null,n),t=ou(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t
  }
    function em(t,e,n){
    t.lanes|=e;
    var l=t.alternate;
    l!==null&&(l.lanes|=e),Ar(t.return,e,n)
  }
    function uu(t,e,n,l,r,u){
    var h=t.memoizedState;
      h===null?t.memoizedState={
      isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:r,treeForkCount:u
    }
    :(h.isBackwards=e,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=n,h.tailMode=r,h.treeForkCount=u)
  }
    function nm(t,e,n){
    var l=e.pendingProps,r=l.revealOrder,u=l.tail;
    l=l.children;
    var h=Zt.current,g=(h&2)!==0;
    if(g?(h=h&1|2,e.flags|=128):h&=1,Q(Zt,h),he(t,e,l,n),l=bt?Za:0,!g&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;
    t!==null;
      ){
      if(t.tag===13)t.memoizedState!==null&&em(t,n,e);
      else if(t.tag===19)em(t,n,e);
        else if(t.child!==null){
        t.child.return=t,t=t.child;
        continue
      }
      if(t===e)break t;
      for(;
      t.sibling===null;
        ){
        if(t.return===null||t.return===e)break t;
        t=t.return
      }
      t.sibling.return=t.return,t=t.sibling
    }
      switch(r){
      case"forwards":for(n=e.child,r=null;
      n!==null;
      )t=n.alternate,t!==null&&bs(t)===null&&(r=n),n=n.sibling;
      n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),uu(e,!1,r,n,u,l);
      break;
      case"backwards":case"unstable_legacy-backwards":for(n=null,r=e.child,e.child=null;
      r!==null;
        ){
          if(t=r.alternate,t!==null&&bs(t)===null){
          e.child=r;
          break
        }
        t=r.sibling,r.sibling=n,n=r,r=t
      }
      uu(e,!0,n,null,u,l);
      break;
      case"together":uu(e,!1,null,null,void 0,l);
      break;
      default:e.memoizedState=null
    }
    return e.child
  }
    function Mn(t,e,n){
      if(t!==null&&(e.dependencies=t.dependencies),Fn|=e.lanes,(n&e.childLanes)===0)if(t!==null){
      if($i(t,e,n,!1),(n&e.childLanes)===0)return null
    }
    else return null;
    if(t!==null&&e.child!==t.child)throw Error(o(153));
      if(e.child!==null){
      for(t=e.child,n=bn(t,t.pendingProps),e.child=n,n.return=e;
      t.sibling!==null;
      )t=t.sibling,n=n.sibling=bn(t,t.pendingProps),n.return=e;
      n.sibling=null
    }
    return e.child
  }
    function cu(t,e){
    return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&fs(t)))
  }
    function Nv(t,e,n){
      switch(e.tag){
      case 3:le(e,e.stateNode.containerInfo),Gn(e,Pt,t.memoizedState.cache),vi();
      break;
      case 27:case 5:X(e);
      break;
      case 4:le(e,e.stateNode.containerInfo);
      break;
      case 10:Gn(e,e.type,e.memoizedProps.value);
      break;
      case 31:if(e.memoizedState!==null)return e.flags|=128,_r(e),null;
      break;
      case 13:var l=e.memoizedState;
      if(l!==null)return l.dehydrated!==null?(Kn(e),e.flags|=128,null):(n&e.child.childLanes)!==0?tm(t,e,n):(Kn(e),t=Mn(t,e,n),
      t!==null?t.sibling:null);
      Kn(e);
      break;
      case 19:var r=(t.flags&128)!==0;
        if(l=(n&e.childLanes)!==0,l||($i(t,e,n,!1),l=(n&e.childLanes)!==0),r){
        if(l)return nm(t,e,n);
        e.flags|=128
      }
      if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Q(Zt,Zt.current),l)break;
      return null;
      case 22:return e.lanes=0,Jh(t,e,n,e.pendingProps);
      case 24:Gn(e,Pt,t.memoizedState.cache)
    }
    return Mn(t,e,n)
  }
    function im(t,e,n){
    if(t!==null)if(t.memoizedProps!==e.pendingProps)$t=!0;
      else{
      if(!cu(t,n)&&(e.flags&128)===0)return $t=!1,Nv(t,e,n);
      $t=(t.flags&131072)!==0
    }
    else $t=!1,bt&&(e.flags&1048576)!==0&&_d(e,Za,e.index);
      switch(e.lanes=0,e.tag){
        case 16:t:{
        var l=e.pendingProps;
        if(t=Ti(e.elementType),e.type=t,typeof t=="function")pr(t)?(l=Di(t,l),e.tag=1,e=$h(null,e,t,l,n)):(e.tag=0,e=iu(null,e,t,
        l,n));
          else{
            if(t!=null){
            var r=t.$$typeof;
              if(r===q){
              e.tag=11,e=Kh(null,e,t,l,n);
              break t
            }
              else if(r===J){
              e.tag=14,e=Zh(null,e,t,l,n);
              break t
            }
          }
          throw e=kt(t)||t,Error(o(306,e,""))
        }
      }
      return e;
      case 0:return iu(t,e,e.type,e.pendingProps,n);
      case 1:return l=e.type,r=Di(l,e.pendingProps),$h(t,e,l,r,n);
        case 3:t:{
        if(le(e,e.stateNode.containerInfo),t===null)throw Error(o(387));
        l=e.pendingProps;
        var u=e.memoizedState;
        r=u.element,jr(t,e),tl(e,l,null,n);
        var h=e.memoizedState;
          if(l=h.cache,Gn(e,Pt,l),l!==u.cache&&Er(e,[Pt],n,!0),Ia(),l=h.element,u.isDehydrated)if(u={
          element:l,isDehydrated:!1,cache:h.cache
        }
          ,e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){
          e=Ih(t,e,l,n);
          break t
        }
          else if(l!==r){
          r=Ke(Error(o(424)),e),Qa(r),e=Ih(t,e,l,n);
          break t
        }
        else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,_t=Pe(t.firstChild),
        fe=e,bt=!0,Hn=null,Je=!0,n=Jd(e,null,l,n),e.child=n;
        n;
        )n.flags=n.flags&-3|4096,n=n.sibling;
          else{
            if(vi(),l===r){
            e=Mn(t,e,n);
            break t
          }
          he(t,e,l,n)
        }
        e=e.child
      }
      return e;
      case 26:return js(t,e),t===null?(n=mp(e.type,null,e.pendingProps,null))?e.memoizedState=n:bt||(n=e.type,t=e.pendingProps,
      l=Qs(ht.current).createElement(n),l[ce]=e,l[Se]=t,me(l,n,t),se(l),e.stateNode=l):e.memoizedState=mp(e.type,t.memoizedProps,
      e.pendingProps,t.memoizedState),null;
      case 27:return X(e),t===null&&bt&&(l=e.stateNode=fp(e.type,e.pendingProps,ht.current),fe=e,Je=!0,r=_t,ti(e.type)?(Yu=r,_t=Pe(l.firstChild)):_t=r),
      he(t,e,e.pendingProps.children,n),js(t,e),t===null&&(e.flags|=4194304),e.child;
      case 5:return t===null&&bt&&((r=l=_t)&&(l=ob(l,e.type,e.pendingProps,Je),l!==null?(e.stateNode=l,fe=e,_t=Pe(l.firstChild),
      Je=!1,r=!0):r=!1),r||kn(e)),X(e),r=e.type,u=e.pendingProps,h=t!==null?t.memoizedProps:null,l=u.children,Lu(r,u)?l=null:h!==null&&Lu(r,
      h)&&(e.flags|=32),e.memoizedState!==null&&(r=Ur(t,e,Tv,null,null,n),xl._currentValue=r),js(t,e),he(t,e,l,n),e.child;
      case 6:return t===null&&bt&&((t=n=_t)&&(n=rb(n,e.pendingProps,Je),n!==null?(e.stateNode=n,fe=e,_t=null,t=!0):t=!1),t||kn(e)),
      null;
      case 13:return tm(t,e,n);
      case 4:return le(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=Ei(e,null,l,n):he(t,e,l,n),e.child;
      case 11:return Kh(t,e,e.type,e.pendingProps,n);
      case 7:return he(t,e,e.pendingProps,n),e.child;
      case 8:return he(t,e,e.pendingProps.children,n),e.child;
      case 12:return he(t,e,e.pendingProps.children,n),e.child;
      case 10:return l=e.pendingProps,Gn(e,e.type,l.value),he(t,e,l.children,n),e.child;
      case 9:return r=e.type._context,l=e.pendingProps.children,xi(e),r=de(r),l=l(r),e.flags|=1,he(t,e,l,n),e.child;
      case 14:return Zh(t,e,e.type,e.pendingProps,n);
      case 15:return Qh(t,e,e.type,e.pendingProps,n);
      case 19:return nm(t,e,n);
      case 31:return jv(t,e,n);
      case 22:return Jh(t,e,n,e.pendingProps);
      case 24:return xi(e),l=de(Pt),t===null?(r=wr(),r===null&&(r=Rt,u=Mr(),r.pooledCache=u,u.refCount++,u!==null&&(r.pooledCacheLanes|=n),
        r=u),e.memoizedState={
        parent:l,cache:r
      }
        ,Cr(e),Gn(e,Pt,r)):((t.lanes&n)!==0&&(jr(t,e),tl(e,null,null,n),Ia()),r=t.memoizedState,u=e.memoizedState,r.parent!==l?(r={
        parent:l,cache:l
      }
      ,e.memoizedState=r,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=r),Gn(e,Pt,l)):(l=u.cache,Gn(e,Pt,l),l!==r.cache&&Er(e,
      [Pt],n,!0))),he(t,e,e.pendingProps.children,n),e.child;
      case 29:throw e.pendingProps
    }
    throw Error(o(156,e.tag))
  }
    function Dn(t){
    t.flags|=4
  }
    function fu(t,e,n,l,r){
      if((e=(t.mode&32)!==0)&&(e=!1),e){
      if(t.flags|=16777216,(r&335544128)===r)if(t.stateNode.complete)t.flags|=8192;
      else if(jm())t.flags|=8192;
      else throw Ai=ps,zr
    }
    else t.flags&=-16777217
  }
    function am(t,e){
    if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;
    else if(t.flags|=16777216,!bp(e))if(jm())t.flags|=8192;
    else throw Ai=ps,zr
  }
    function Rs(t,e){
    e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Uf():536870912,t.lanes|=e,ca|=e)
  }
    function sl(t,e){
      if(!bt)switch(t.tailMode){
      case"hidden":e=t.tail;
      for(var n=null;
      e!==null;
      )e.alternate!==null&&(n=e),e=e.sibling;
      n===null?t.tail=null:n.sibling=null;
      break;
      case"collapsed":n=t.tail;
      for(var l=null;
      n!==null;
      )n.alternate!==null&&(l=n),n=n.sibling;
      l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null
    }
  }
    function Bt(t){
    var e=t.alternate!==null&&t.alternate.child===t.child,n=0,l=0;
    if(e)for(var r=t.child;
    r!==null;
    )n|=r.lanes|r.childLanes,l|=r.subtreeFlags&65011712,l|=r.flags&65011712,r.return=t,r=r.sibling;
    else for(r=t.child;
    r!==null;
    )n|=r.lanes|r.childLanes,l|=r.subtreeFlags,l|=r.flags,r.return=t,r=r.sibling;
    return t.subtreeFlags|=l,t.childLanes=n,e
  }
    function Rv(t,e,n){
    var l=e.pendingProps;
      switch(br(e),e.tag){
      case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;
      case 1:return Bt(e),null;
      case 3:return n=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Tn(Pt),
      Lt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Wi(e)?Dn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,
      Sr())),Bt(e),null;
      case 26:var r=e.type,u=e.memoizedState;
      return t===null?(Dn(e),u!==null?(Bt(e),am(e,u)):(Bt(e),fu(e,r,null,l,n))):u?u!==t.memoizedState?(Dn(e),Bt(e),am(e,u)):(Bt(e),
      e.flags&=-16777217):(t=t.memoizedProps,t!==l&&Dn(e),Bt(e),fu(e,r,t,l,n)),null;
      case 27:if(At(e),n=ht.current,r=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Dn(e);
        else{
          if(!l){
          if(e.stateNode===null)throw Error(o(166));
          return Bt(e),null
        }
        t=Z.current,Wi(e)?Ud(e):(t=fp(r,l,n),e.stateNode=t,Dn(e))
      }
      return Bt(e),null;
      case 5:if(At(e),r=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Dn(e);
        else{
          if(!l){
          if(e.stateNode===null)throw Error(o(166));
          return Bt(e),null
        }
        if(u=Z.current,Wi(e))Ud(e);
          else{
          var h=Qs(ht.current);
            switch(u){
            case 1:u=h.createElementNS("http://www.w3.org/2000/svg",r);
            break;
            case 2:u=h.createElementNS("http://www.w3.org/1998/Math/MathML",r);
            break;
              default:switch(r){
              case"svg":u=h.createElementNS("http://www.w3.org/2000/svg",r);
              break;
              case"math":u=h.createElementNS("http://www.w3.org/1998/Math/MathML",r);
              break;
              case"script":u=h.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);
              break;
                case"select":u=typeof l.is=="string"?h.createElement("select",{
                is:l.is
              }
              ):h.createElement("select"),l.multiple?u.multiple=!0:l.size&&(u.size=l.size);
              break;
                default:u=typeof l.is=="string"?h.createElement(r,{
                is:l.is
              }
              ):h.createElement(r)
            }
          }
          u[ce]=e,u[Se]=l;
          t:for(h=e.child;
          h!==null;
            ){
            if(h.tag===5||h.tag===6)u.appendChild(h.stateNode);
              else if(h.tag!==4&&h.tag!==27&&h.child!==null){
              h.child.return=h,h=h.child;
              continue
            }
            if(h===e)break t;
            for(;
            h.sibling===null;
              ){
              if(h.return===null||h.return===e)break t;
              h=h.return
            }
            h.sibling.return=h.return,h=h.sibling
          }
          e.stateNode=u;
            t:switch(me(u,r,l),r){
            case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;
            break t;
            case"img":l=!0;
            break t;
            default:l=!1
          }
          l&&Dn(e)
        }
      }
      return Bt(e),fu(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;
      case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&Dn(e);
        else{
        if(typeof l!="string"&&e.stateNode===null)throw Error(o(166));
          if(t=ht.current,Wi(e)){
            if(t=e.stateNode,n=e.memoizedProps,l=null,r=fe,r!==null)switch(r.tag){
            case 27:case 5:l=r.memoizedProps
          }
          t[ce]=e,t=!!(t.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||tp(t.nodeValue,n)),t||kn(e,!0)
        }
        else t=Qs(t).createTextNode(l),t[ce]=e,e.stateNode=t
      }
      return Bt(e),null;
        case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){
          if(l=Wi(e),n!==null){
            if(t===null){
            if(!l)throw Error(o(318));
            if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(557));
            t[ce]=e
          }
          else vi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;
          Bt(e),t=!1
        }
        else n=Sr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;
        if(!t)return e.flags&256?(Ue(e),e):(Ue(e),null);
        if((e.flags&128)!==0)throw Error(o(558))
      }
      return Bt(e),null;
        case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){
          if(r=Wi(e),l!==null&&l.dehydrated!==null){
            if(t===null){
            if(!r)throw Error(o(318));
            if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(o(317));
            r[ce]=e
          }
          else vi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;
          Bt(e),r=!1
        }
        else r=Sr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),r=!0;
        if(!r)return e.flags&256?(Ue(e),e):(Ue(e),null)
      }
      return Ue(e),(e.flags&128)!==0?(e.lanes=n,e):(n=l!==null,t=t!==null&&t.memoizedState!==null,n&&(l=e.child,r=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(r=l.alternate.memoizedState.cachePool.pool),
      u=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(u=l.memoizedState.cachePool.pool),u!==r&&(l.flags|=2048)),
      n!==t&&n&&(e.child.flags|=8192),Rs(e,e.updateQueue),Bt(e),null);
      case 4:return Lt(),t===null&&Vu(e.stateNode.containerInfo),Bt(e),null;
      case 10:return Tn(e.type),Bt(e),null;
      case 19:if(U(Zt),l=e.memoizedState,l===null)return Bt(e),null;
      if(r=(e.flags&128)!==0,u=l.rendering,u===null)if(r)sl(l,!1);
        else{
        if(Yt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;
        t!==null;
          ){
            if(u=bs(t),u!==null){
            for(e.flags|=128,sl(l,!1),t=u.updateQueue,e.updateQueue=t,Rs(e,t),e.subtreeFlags=0,t=n,n=e.child;
            n!==null;
            )Rd(n,t),n=n.sibling;
            return Q(Zt,Zt.current&1|2),bt&&xn(e,l.treeForkCount),e.child
          }
          t=t.sibling
        }
        l.tail!==null&&Ne()>Us&&(e.flags|=128,r=!0,sl(l,!1),e.lanes=4194304)
      }
        else{
          if(!r)if(t=bs(u),t!==null){
          if(e.flags|=128,r=!0,t=t.updateQueue,e.updateQueue=t,Rs(e,t),sl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!bt)return Bt(e),
          null
        }
        else 2*Ne()-l.renderingStartTime>Us&&n!==536870912&&(e.flags|=128,r=!0,sl(l,!1),e.lanes=4194304);
        l.isBackwards?(u.sibling=e.child,e.child=u):(t=l.last,t!==null?t.sibling=u:e.child=u,l.last=u)
      }
      return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ne(),t.sibling=null,n=Zt.current,Q(Zt,
      r?n&1|2:n&1),bt&&xn(e,l.treeForkCount),t):(Bt(e),null);
      case 22:case 23:return Ue(e),Or(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),
      l?(n&536870912)!==0&&(e.flags&128)===0&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),n=e.updateQueue,n!==null&&Rs(e,n.retryQueue),
      n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),
      l!==n&&(e.flags|=2048),t!==null&&U(Si),null;
      case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Tn(Pt),Bt(e),null;
      case 25:return null;
      case 30:return null
    }
    throw Error(o(156,e.tag))
  }
    function Vv(t,e){
      switch(br(e),e.tag){
      case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;
      case 3:return Tn(Pt),Lt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;
      case 26:case 27:case 5:return At(e),null;
        case 31:if(e.memoizedState!==null){
        if(Ue(e),e.alternate===null)throw Error(o(340));
        vi()
      }
      return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;
        case 13:if(Ue(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){
        if(e.alternate===null)throw Error(o(340));
        vi()
      }
      return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;
      case 19:return U(Zt),null;
      case 4:return Lt(),null;
      case 10:return Tn(e.type),null;
      case 22:case 23:return Ue(e),Or(),t!==null&&U(Si),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;
      case 24:return Tn(Pt),null;
      case 25:return null;
      default:return null
    }
  }
    function lm(t,e){
      switch(br(e),e.tag){
      case 3:Tn(Pt),Lt();
      break;
      case 26:case 27:case 5:At(e);
      break;
      case 4:Lt();
      break;
      case 31:e.memoizedState!==null&&Ue(e);
      break;
      case 13:Ue(e);
      break;
      case 19:U(Zt);
      break;
      case 10:Tn(e.type);
      break;
      case 22:case 23:Ue(e),Or(),t!==null&&U(Si);
      break;
      case 24:Tn(Pt)
    }
  }
    function ol(t,e){
      try{
      var n=e.updateQueue,l=n!==null?n.lastEffect:null;
        if(l!==null){
        var r=l.next;
        n=r;
          do{
            if((n.tag&t)===t){
            l=void 0;
            var u=n.create,h=n.inst;
            l=u(),h.destroy=l
          }
          n=n.next
        }
        while(n!==r)
      }
    }
      catch(g){
      zt(e,e.return,g)
    }
  }
    function Qn(t,e,n){
      try{
      var l=e.updateQueue,r=l!==null?l.lastEffect:null;
        if(r!==null){
        var u=r.next;
        l=u;
          do{
            if((l.tag&t)===t){
            var h=l.inst,g=h.destroy;
              if(g!==void 0){
              h.destroy=void 0,r=e;
              var T=n,C=g;
                try{
                C()
              }
                catch(O){
                zt(r,T,O)
              }
            }
          }
          l=l.next
        }
        while(l!==u)
      }
    }
      catch(O){
      zt(e,e.return,O)
    }
  }
    function sm(t){
    var e=t.updateQueue;
      if(e!==null){
      var n=t.stateNode;
        try{
        Pd(e,n)
      }
        catch(l){
        zt(t,t.return,l)
      }
    }
  }
    function om(t,e,n){
    n.props=Di(t.type,t.memoizedProps),n.state=t.memoizedState;
      try{
      n.componentWillUnmount()
    }
      catch(l){
      zt(t,e,l)
    }
  }
    function rl(t,e){
      try{
      var n=t.ref;
        if(n!==null){
          switch(t.tag){
          case 26:case 27:case 5:var l=t.stateNode;
          break;
          case 30:l=t.stateNode;
          break;
          default:l=t.stateNode
        }
        typeof n=="function"?t.refCleanup=n(l):n.current=l
      }
    }
      catch(r){
      zt(t,e,r)
    }
  }
    function fn(t,e){
    var n=t.ref,l=t.refCleanup;
      if(n!==null)if(typeof l=="function")try{
      l()
    }
      catch(r){
      zt(t,e,r)
    }
      finally{
      t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)
    }
      else if(typeof n=="function")try{
      n(null)
    }
      catch(r){
      zt(t,e,r)
    }
    else n.current=null
  }
    function rm(t){
    var e=t.type,n=t.memoizedProps,l=t.stateNode;
      try{
        t:switch(e){
        case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();
        break t;
        case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)
      }
    }
      catch(r){
      zt(t,t.return,r)
    }
  }
    function du(t,e,n){
      try{
      var l=t.stateNode;
      eb(l,t.type,n,e),l[Se]=e
    }
      catch(r){
      zt(t,t.return,r)
    }
  }
    function um(t){
    return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ti(t.type)||t.tag===4
  }
    function hu(t){
    t:for(;
    ;
      ){
      for(;
      t.sibling===null;
        ){
        if(t.return===null||um(t.return))return null;
        t=t.return
      }
      for(t.sibling.return=t.return,t=t.sibling;
      t.tag!==5&&t.tag!==6&&t.tag!==18;
        ){
        if(t.tag===27&&ti(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;
        t.child.return=t,t=t.child
      }
      if(!(t.flags&2))return t.stateNode
    }
  }
    function mu(t,e,n){
    var l=t.tag;
    if(l===5||l===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,
    e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=gn));
    else if(l!==4&&(l===27&&ti(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(mu(t,e,n),t=t.sibling;
    t!==null;
    )mu(t,e,n),t=t.sibling
  }
    function Vs(t,e,n){
    var l=t.tag;
    if(l===5||l===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);
    else if(l!==4&&(l===27&&ti(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Vs(t,e,n),t=t.sibling;
    t!==null;
    )Vs(t,e,n),t=t.sibling
  }
    function cm(t){
    var e=t.stateNode,n=t.memoizedProps;
      try{
      for(var l=t.type,r=e.attributes;
      r.length;
      )e.removeAttributeNode(r[0]);
      me(e,l,n),e[ce]=t,e[Se]=n
    }
      catch(u){
      zt(t,t.return,u)
    }
  }
  var wn=!1,It=!1,pu=!1,fm=typeof WeakSet=="function"?WeakSet:Set,oe=null;
    function Ov(t,e){
      if(t=t.containerInfo,Bu=to,t=Ad(t),rr(t)){
        if("selectionStart"in t)var n={
        start:t.selectionStart,end:t.selectionEnd
      }
      ;
        else t:{
        n=(n=t.ownerDocument)&&n.defaultView||window;
        var l=n.getSelection&&n.getSelection();
          if(l&&l.rangeCount!==0){
          n=l.anchorNode;
          var r=l.anchorOffset,u=l.focusNode;
          l=l.focusOffset;
            try{
            n.nodeType,u.nodeType
          }
            catch{
            n=null;
            break t
          }
          var h=0,g=-1,T=-1,C=0,O=0,L=t,j=null;
          e:for(;
          ;
            ){
            for(var V;
            L!==n||r!==0&&L.nodeType!==3||(g=h+r),L!==u||l!==0&&L.nodeType!==3||(T=h+l),L.nodeType===3&&(h+=L.nodeValue.length),(V=L.firstChild)!==null;
            )j=L,L=V;
            for(;
            ;
              ){
              if(L===t)break e;
              if(j===n&&++C===r&&(g=h),j===u&&++O===l&&(T=h),(V=L.nextSibling)!==null)break;
              L=j,j=L.parentNode
            }
            L=V
          }
            n=g===-1||T===-1?null:{
            start:g,end:T
          }
        }
        else n=null
      }
        n=n||{
        start:0,end:0
      }
    }
    else n=null;
      for(Uu={
      focusedElem:t,selectionRange:n
    }
    ,to=!1,oe=e;
    oe!==null;
    )if(e=oe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,oe=t;
    else for(;
    oe!==null;
      ){
        switch(e=oe,u=e.alternate,t=e.flags,e.tag){
        case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;
        n<t.length;
        n++)r=t[n],r.ref.impl=r.nextImpl;
        break;
        case 11:case 15:break;
          case 1:if((t&1024)!==0&&u!==null){
          t=void 0,n=e,r=u.memoizedProps,u=u.memoizedState,l=n.stateNode;
            try{
            var W=Di(n.type,r);
            t=l.getSnapshotBeforeUpdate(W,u),l.__reactInternalSnapshotBeforeUpdate=t
          }
            catch(at){
            zt(n,n.return,at)
          }
        }
        break;
          case 3:if((t&1024)!==0){
          if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)ku(t);
            else if(n===1)switch(t.nodeName){
            case"HEAD":case"HTML":case"BODY":ku(t);
            break;
            default:t.textContent=""
          }
        }
        break;
        case 5:case 26:case 27:case 6:case 4:case 17:break;
        default:if((t&1024)!==0)throw Error(o(163))
      }
        if(t=e.sibling,t!==null){
        t.return=e.return,oe=t;
        break
      }
      oe=e.return
    }
  }
    function dm(t,e,n){
    var l=n.flags;
      switch(n.tag){
      case 0:case 11:case 15:Cn(t,n),l&4&&ol(5,n);
      break;
        case 1:if(Cn(t,n),l&4)if(t=n.stateNode,e===null)try{
        t.componentDidMount()
      }
        catch(h){
        zt(n,n.return,h)
      }
        else{
        var r=Di(n.type,e.memoizedProps);
        e=e.memoizedState;
          try{
          t.componentDidUpdate(r,e,t.__reactInternalSnapshotBeforeUpdate)
        }
          catch(h){
          zt(n,n.return,h)
        }
      }
      l&64&&sm(n),l&512&&rl(n,n.return);
      break;
        case 3:if(Cn(t,n),l&64&&(t=n.updateQueue,t!==null)){
          if(e=null,n.child!==null)switch(n.child.tag){
          case 27:case 5:e=n.child.stateNode;
          break;
          case 1:e=n.child.stateNode
        }
          try{
          Pd(t,e)
        }
          catch(h){
          zt(n,n.return,h)
        }
      }
      break;
      case 27:e===null&&l&4&&cm(n);
      case 26:case 5:Cn(t,n),e===null&&l&4&&rm(n),l&512&&rl(n,n.return);
      break;
      case 12:Cn(t,n);
      break;
      case 31:Cn(t,n),l&4&&pm(t,n);
      break;
      case 13:Cn(t,n),l&4&&ym(t,n),l&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=Yv.bind(null,n),ub(t,n))));
      break;
        case 22:if(l=n.memoizedState!==null||wn,!l){
        e=e!==null&&e.memoizedState!==null||It,r=wn;
        var u=It;
        wn=l,(It=e)&&!u?jn(t,n,(n.subtreeFlags&8772)!==0):Cn(t,n),wn=r,It=u
      }
      break;
      case 30:break;
      default:Cn(t,n)
    }
  }
    function hm(t){
    var e=t.alternate;
    e!==null&&(t.alternate=null,hm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Ko(e)),
    t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,
    t.updateQueue=null
  }
  var Ht=null,Ae=!1;
    function zn(t,e,n){
    for(n=n.child;
    n!==null;
    )mm(t,e,n),n=n.sibling
  }
    function mm(t,e,n){
      if(Re&&typeof Re.onCommitFiberUnmount=="function")try{
      Re.onCommitFiberUnmount(Ra,n)
    }
      catch{
    }
      switch(n.tag){
      case 26:It||fn(n,e),zn(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));
      break;
      case 27:It||fn(n,e);
      var l=Ht,r=Ae;
      ti(n.type)&&(Ht=n.stateNode,Ae=!1),zn(t,e,n),gl(n.stateNode),Ht=l,Ae=r;
      break;
      case 5:It||fn(n,e);
        case 6:if(l=Ht,r=Ae,Ht=null,zn(t,e,n),Ht=l,Ae=r,Ht!==null)if(Ae)try{
        (Ht.nodeType===9?Ht.body:Ht.nodeName==="HTML"?Ht.ownerDocument.body:Ht).removeChild(n.stateNode)
      }
        catch(u){
        zt(n,e,u)
      }
        else try{
        Ht.removeChild(n.stateNode)
      }
        catch(u){
        zt(n,e,u)
      }
      break;
      case 18:Ht!==null&&(Ae?(t=Ht,sp(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),va(t)):sp(Ht,
      n.stateNode));
      break;
      case 4:l=Ht,r=Ae,Ht=n.stateNode.containerInfo,Ae=!0,zn(t,e,n),Ht=l,Ae=r;
      break;
      case 0:case 11:case 14:case 15:Qn(2,n,e),It||Qn(4,n,e),zn(t,e,n);
      break;
      case 1:It||(fn(n,e),l=n.stateNode,typeof l.componentWillUnmount=="function"&&om(n,e,l)),zn(t,e,n);
      break;
      case 21:zn(t,e,n);
      break;
      case 22:It=(l=It)||n.memoizedState!==null,zn(t,e,n),It=l;
      break;
      default:zn(t,e,n)
    }
  }
    function pm(t,e){
      if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){
      t=t.dehydrated;
        try{
        va(t)
      }
        catch(n){
        zt(e,e.return,n)
      }
    }
  }
    function ym(t,e){
      if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{
      va(t)
    }
      catch(n){
      zt(e,e.return,n)
    }
  }
    function _v(t){
      switch(t.tag){
      case 31:case 13:case 19:var e=t.stateNode;
      return e===null&&(e=t.stateNode=new fm),e;
      case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new fm),e;
      default:throw Error(o(435,t.tag))
    }
  }
    function Os(t,e){
    var n=_v(t);
      e.forEach(function(l){
        if(!n.has(l)){
        n.add(l);
        var r=Xv.bind(null,t,l);
        l.then(r,r)
      }
    }
    )
  }
    function Ee(t,e){
    var n=e.deletions;
    if(n!==null)for(var l=0;
    l<n.length;
      l++){
      var r=n[l],u=t,h=e,g=h;
      t:for(;
      g!==null;
        ){
          switch(g.tag){
            case 27:if(ti(g.type)){
            Ht=g.stateNode,Ae=!1;
            break t
          }
          break;
          case 5:Ht=g.stateNode,Ae=!1;
          break t;
          case 3:case 4:Ht=g.stateNode.containerInfo,Ae=!0;
          break t
        }
        g=g.return
      }
      if(Ht===null)throw Error(o(160));
      mm(u,h,r),Ht=null,Ae=!1,u=r.alternate,u!==null&&(u.return=null),r.return=null
    }
    if(e.subtreeFlags&13886)for(e=e.child;
    e!==null;
    )gm(e,t),e=e.sibling
  }
  var en=null;
    function gm(t,e){
    var n=t.alternate,l=t.flags;
      switch(t.tag){
      case 0:case 11:case 14:case 15:Ee(e,t),Me(t),l&4&&(Qn(3,t,t.return),ol(3,t),Qn(5,t,t.return));
      break;
      case 1:Ee(e,t),Me(t),l&512&&(It||n===null||fn(n,n.return)),l&64&&wn&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(n=t.shared.hiddenCallbacks,
      t.shared.hiddenCallbacks=n===null?l:n.concat(l))));
      break;
      case 26:var r=en;
        if(Ee(e,t),Me(t),l&512&&(It||n===null||fn(n,n.return)),l&4){
        var u=n!==null?n.memoizedState:null;
          if(l=t.memoizedState,n===null)if(l===null)if(t.stateNode===null){
            t:{
            l=t.type,n=t.memoizedProps,r=r.ownerDocument||r;
              e:switch(l){
              case"title":u=r.getElementsByTagName("title")[0],(!u||u[_a]||u[ce]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=r.createElement(l),
              r.head.insertBefore(u,r.querySelector("head > title"))),me(u,l,n),u[ce]=t,se(u),l=u;
              break t;
              case"link":var h=gp("link","href",r).get(l+(n.href||""));
                if(h){
                for(var g=0;
                g<h.length;
                  g++)if(u=h[g],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){
                  h.splice(g,1);
                  break e
                }
              }
              u=r.createElement(l),me(u,l,n),r.head.appendChild(u);
              break;
                case"meta":if(h=gp("meta","content",r).get(l+(n.content||""))){
                for(g=0;
                g<h.length;
                  g++)if(u=h[g],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){
                  h.splice(g,1);
                  break e
                }
              }
              u=r.createElement(l),me(u,l,n),r.head.appendChild(u);
              break;
              default:throw Error(o(468,l))
            }
            u[ce]=t,se(u),l=u
          }
          t.stateNode=l
        }
        else vp(r,t.type,t.stateNode);
        else t.stateNode=yp(r,l,t.memoizedProps);
        else u!==l?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,l===null?vp(r,t.type,t.stateNode):yp(r,
        l,t.memoizedProps)):l===null&&t.stateNode!==null&&du(t,t.memoizedProps,n.memoizedProps)
      }
      break;
      case 27:Ee(e,t),Me(t),l&512&&(It||n===null||fn(n,n.return)),n!==null&&l&4&&du(t,t.memoizedProps,n.memoizedProps);
      break;
        case 5:if(Ee(e,t),Me(t),l&512&&(It||n===null||fn(n,n.return)),t.flags&32){
        r=t.stateNode;
          try{
          Gi(r,"")
        }
          catch(W){
          zt(t,t.return,W)
        }
      }
      l&4&&t.stateNode!=null&&(r=t.memoizedProps,du(t,r,n!==null?n.memoizedProps:r)),l&1024&&(pu=!0);
      break;
        case 6:if(Ee(e,t),Me(t),l&4){
        if(t.stateNode===null)throw Error(o(162));
        l=t.memoizedProps,n=t.stateNode;
          try{
          n.nodeValue=l
        }
          catch(W){
          zt(t,t.return,W)
        }
      }
      break;
        case 3:if(Ps=null,r=en,en=Js(e.containerInfo),Ee(e,t),en=r,Me(t),l&4&&n!==null&&n.memoizedState.isDehydrated)try{
        va(e.containerInfo)
      }
        catch(W){
        zt(t,t.return,W)
      }
      pu&&(pu=!1,vm(t));
      break;
      case 4:l=en,en=Js(t.stateNode.containerInfo),Ee(e,t),Me(t),en=l;
      break;
      case 12:Ee(e,t),Me(t);
      break;
      case 31:Ee(e,t),Me(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Os(t,l)));
      break;
      case 13:Ee(e,t),Me(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Bs=Ne()),l&4&&(l=t.updateQueue,
      l!==null&&(t.updateQueue=null,Os(t,l)));
      break;
      case 22:r=t.memoizedState!==null;
      var T=n!==null&&n.memoizedState!==null,C=wn,O=It;
      if(wn=C||r,It=O||T,Ee(e,t),It=O,wn=C,Me(t),l&8192)t:for(e=t.stateNode,e._visibility=r?e._visibility&-2:e._visibility|1,r&&(n===null||T||wn||It||wi(t)),
      n=null,e=t;
      ;
        ){
          if(e.tag===5||e.tag===26){
            if(n===null){
            T=n=e;
              try{
              if(u=T.stateNode,r)h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";
                else{
                g=T.stateNode;
                var L=T.memoizedProps.style,j=L!=null&&L.hasOwnProperty("display")?L.display:null;
                g.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()
              }
            }
              catch(W){
              zt(T,T.return,W)
            }
          }
        }
          else if(e.tag===6){
            if(n===null){
            T=e;
              try{
              T.stateNode.nodeValue=r?"":T.memoizedProps
            }
              catch(W){
              zt(T,T.return,W)
            }
          }
        }
          else if(e.tag===18){
            if(n===null){
            T=e;
              try{
              var V=T.stateNode;
              r?op(V,!0):op(T.stateNode,!1)
            }
              catch(W){
              zt(T,T.return,W)
            }
          }
        }
          else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){
          e.child.return=e,e=e.child;
          continue
        }
        if(e===t)break t;
        for(;
        e.sibling===null;
          ){
          if(e.return===null||e.return===t)break t;
          n===e&&(n=null),e=e.return
        }
        n===e&&(n=null),e.sibling.return=e.return,e=e.sibling
      }
      l&4&&(l=t.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,Os(t,n))));
      break;
      case 19:Ee(e,t),Me(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Os(t,l)));
      break;
      case 30:break;
      case 21:break;
      default:Ee(e,t),Me(t)
    }
  }
    function Me(t){
    var e=t.flags;
      if(e&2){
        try{
        for(var n,l=t.return;
        l!==null;
          ){
            if(um(l)){
            n=l;
            break
          }
          l=l.return
        }
        if(n==null)throw Error(o(160));
          switch(n.tag){
          case 27:var r=n.stateNode,u=hu(t);
          Vs(t,u,r);
          break;
          case 5:var h=n.stateNode;
          n.flags&32&&(Gi(h,""),n.flags&=-33);
          var g=hu(t);
          Vs(t,g,h);
          break;
          case 3:case 4:var T=n.stateNode.containerInfo,C=hu(t);
          mu(t,C,T);
          break;
          default:throw Error(o(161))
        }
      }
        catch(O){
        zt(t,t.return,O)
      }
      t.flags&=-3
    }
    e&4096&&(t.flags&=-4097)
  }
    function vm(t){
    if(t.subtreeFlags&1024)for(t=t.child;
    t!==null;
      ){
      var e=t;
      vm(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling
    }
  }
    function Cn(t,e){
    if(e.subtreeFlags&8772)for(e=e.child;
    e!==null;
    )dm(t,e.alternate,e),e=e.sibling
  }
    function wi(t){
    for(t=t.child;
    t!==null;
      ){
      var e=t;
        switch(e.tag){
        case 0:case 11:case 14:case 15:Qn(4,e,e.return),wi(e);
        break;
        case 1:fn(e,e.return);
        var n=e.stateNode;
        typeof n.componentWillUnmount=="function"&&om(e,e.return,n),wi(e);
        break;
        case 27:gl(e.stateNode);
        case 26:case 5:fn(e,e.return),wi(e);
        break;
        case 22:e.memoizedState===null&&wi(e);
        break;
        case 30:wi(e);
        break;
        default:wi(e)
      }
      t=t.sibling
    }
  }
    function jn(t,e,n){
    for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;
    e!==null;
      ){
      var l=e.alternate,r=t,u=e,h=u.flags;
        switch(u.tag){
        case 0:case 11:case 15:jn(r,u,n),ol(4,u);
        break;
          case 1:if(jn(r,u,n),l=u,r=l.stateNode,typeof r.componentDidMount=="function")try{
          r.componentDidMount()
        }
          catch(C){
          zt(l,l.return,C)
        }
          if(l=u,r=l.updateQueue,r!==null){
          var g=l.stateNode;
            try{
            var T=r.shared.hiddenCallbacks;
            if(T!==null)for(r.shared.hiddenCallbacks=null,r=0;
            r<T.length;
            r++)Fd(T[r],g)
          }
            catch(C){
            zt(l,l.return,C)
          }
        }
        n&&h&64&&sm(u),rl(u,u.return);
        break;
        case 27:cm(u);
        case 26:case 5:jn(r,u,n),n&&l===null&&h&4&&rm(u),rl(u,u.return);
        break;
        case 12:jn(r,u,n);
        break;
        case 31:jn(r,u,n),n&&h&4&&pm(r,u);
        break;
        case 13:jn(r,u,n),n&&h&4&&ym(r,u);
        break;
        case 22:u.memoizedState===null&&jn(r,u,n),rl(u,u.return);
        break;
        case 30:break;
        default:jn(r,u,n)
      }
      e=e.sibling
    }
  }
    function yu(t,e){
    var n=null;
    t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),
    t!==n&&(t!=null&&t.refCount++,n!=null&&Ja(n))
  }
    function gu(t,e){
    t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ja(t))
  }
    function nn(t,e,n,l){
    if(e.subtreeFlags&10256)for(e=e.child;
    e!==null;
    )bm(t,e,n,l),e=e.sibling
  }
    function bm(t,e,n,l){
    var r=e.flags;
      switch(e.tag){
      case 0:case 11:case 15:nn(t,e,n,l),r&2048&&ol(9,e);
      break;
      case 1:nn(t,e,n,l);
      break;
      case 3:nn(t,e,n,l),r&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,
      t!=null&&Ja(t)));
      break;
        case 12:if(r&2048){
        nn(t,e,n,l),t=e.stateNode;
          try{
          var u=e.memoizedProps,h=u.id,g=u.onPostCommit;
          typeof g=="function"&&g(h,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)
        }
          catch(T){
          zt(e,e.return,T)
        }
      }
      else nn(t,e,n,l);
      break;
      case 31:nn(t,e,n,l);
      break;
      case 13:nn(t,e,n,l);
      break;
      case 23:break;
      case 22:u=e.stateNode,h=e.alternate,e.memoizedState!==null?u._visibility&2?nn(t,e,n,l):ul(t,e):u._visibility&2?nn(t,e,n,l):(u._visibility|=2,
      oa(t,e,n,l,(e.subtreeFlags&10256)!==0||!1)),r&2048&&yu(h,e);
      break;
      case 24:nn(t,e,n,l),r&2048&&gu(e.alternate,e);
      break;
      default:nn(t,e,n,l)
    }
  }
    function oa(t,e,n,l,r){
    for(r=r&&((e.subtreeFlags&10256)!==0||!1),e=e.child;
    e!==null;
      ){
      var u=t,h=e,g=n,T=l,C=h.flags;
        switch(h.tag){
        case 0:case 11:case 15:oa(u,h,g,T,r),ol(8,h);
        break;
        case 23:break;
        case 22:var O=h.stateNode;
        h.memoizedState!==null?O._visibility&2?oa(u,h,g,T,r):ul(u,h):(O._visibility|=2,oa(u,h,g,T,r)),r&&C&2048&&yu(h.alternate,h);
        break;
        case 24:oa(u,h,g,T,r),r&&C&2048&&gu(h.alternate,h);
        break;
        default:oa(u,h,g,T,r)
      }
      e=e.sibling
    }
  }
    function ul(t,e){
    if(e.subtreeFlags&10256)for(e=e.child;
    e!==null;
      ){
      var n=t,l=e,r=l.flags;
        switch(l.tag){
        case 22:ul(n,l),r&2048&&yu(l.alternate,l);
        break;
        case 24:ul(n,l),r&2048&&gu(l.alternate,l);
        break;
        default:ul(n,l)
      }
      e=e.sibling
    }
  }
  var cl=8192;
    function ra(t,e,n){
    if(t.subtreeFlags&cl)for(t=t.child;
    t!==null;
    )xm(t,e,n),t=t.sibling
  }
    function xm(t,e,n){
      switch(t.tag){
      case 26:ra(t,e,n),t.flags&cl&&t.memoizedState!==null&&Sb(n,en,t.memoizedState,t.memoizedProps);
      break;
      case 5:ra(t,e,n);
      break;
      case 3:case 4:var l=en;
      en=Js(t.stateNode.containerInfo),ra(t,e,n),en=l;
      break;
      case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=cl,cl=16777216,ra(t,e,n),cl=l):ra(t,e,
      n));
      break;
      default:ra(t,e,n)
    }
  }
    function Sm(t){
    var e=t.alternate;
      if(e!==null&&(t=e.child,t!==null)){
      e.child=null;
      do e=t.sibling,t.sibling=null,t=e;
      while(t!==null)
    }
  }
    function fl(t){
    var e=t.deletions;
      if((t.flags&16)!==0){
      if(e!==null)for(var n=0;
      n<e.length;
        n++){
        var l=e[n];
        oe=l,Am(l,t)
      }
      Sm(t)
    }
    if(t.subtreeFlags&10256)for(t=t.child;
    t!==null;
    )Tm(t),t=t.sibling
  }
    function Tm(t){
      switch(t.tag){
      case 0:case 11:case 15:fl(t),t.flags&2048&&Qn(9,t,t.return);
      break;
      case 3:fl(t);
      break;
      case 12:fl(t);
      break;
      case 22:var e=t.stateNode;
      t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,_s(t)):fl(t);
      break;
      default:fl(t)
    }
  }
    function _s(t){
    var e=t.deletions;
      if((t.flags&16)!==0){
      if(e!==null)for(var n=0;
      n<e.length;
        n++){
        var l=e[n];
        oe=l,Am(l,t)
      }
      Sm(t)
    }
    for(t=t.child;
    t!==null;
      ){
        switch(e=t,e.tag){
        case 0:case 11:case 15:Qn(8,e,e.return),_s(e);
        break;
        case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,_s(e));
        break;
        default:_s(e)
      }
      t=t.sibling
    }
  }
    function Am(t,e){
    for(;
    oe!==null;
      ){
      var n=oe;
        switch(n.tag){
        case 0:case 11:case 15:Qn(8,n,e);
        break;
          case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){
          var l=n.memoizedState.cachePool.pool;
          l!=null&&l.refCount++
        }
        break;
        case 24:Ja(n.memoizedState.cache)
      }
      if(l=n.child,l!==null)l.return=n,oe=l;
      else t:for(n=t;
      oe!==null;
        ){
        l=oe;
        var r=l.sibling,u=l.return;
          if(hm(l),l===n){
          oe=null;
          break t
        }
          if(r!==null){
          r.return=u,oe=r;
          break t
        }
        oe=u
      }
    }
  }
    var Bv={
      getCacheForType:function(t){
      var e=de(Pt),n=e.data.get(t);
      return n===void 0&&(n=t(),e.data.set(t,n)),n
    }
      ,cacheSignal:function(){
      return de(Pt).controller.signal
    }
  }
  ,Uv=typeof WeakMap=="function"?WeakMap:Map,Dt=0,Rt=null,pt=null,gt=0,wt=0,Le=null,Jn=!1,ua=!1,vu=!1,Nn=0,Yt=0,Fn=0,zi=0,bu=0,
  He=0,ca=0,dl=null,De=null,xu=!1,Bs=0,Em=0,Us=1/0,Ls=null,Pn=null,ne=0,Wn=null,fa=null,Rn=0,Su=0,Tu=null,Mm=null,hl=0,Au=null;
    function ke(){
    return(Dt&2)!==0&&gt!==0?gt&-gt:R.T!==null?Cu():Gf()
  }
    function Dm(){
      if(He===0)if((gt&536870912)===0||bt){
      var t=Zl;
      Zl<<=1,(Zl&3932160)===0&&(Zl=262144),He=t
    }
    else He=536870912;
    return t=Be.current,t!==null&&(t.flags|=32),He
  }
    function we(t,e,n){
    (t===Rt&&(wt===2||wt===9)||t.cancelPendingCommit!==null)&&(da(t,0),$n(t,gt,He,!1)),Oa(t,n),((Dt&2)===0||t!==Rt)&&(t===Rt&&((Dt&2)===0&&(zi|=n),
    Yt===4&&$n(t,gt,He,!1)),dn(t))
  }
    function wm(t,e,n){
    if((Dt&6)!==0)throw Error(o(327));
    var l=!n&&(e&127)===0&&(e&t.expiredLanes)===0||Va(t,e),r=l?kv(t,e):Mu(t,e,!0),u=l;
      do{
        if(r===0){
        ua&&!l&&$n(t,e,0,!1);
        break
      }
        else{
          if(n=t.current.alternate,u&&!Lv(n)){
          r=Mu(t,e,!1),u=!1;
          continue
        }
          if(r===2){
          if(u=e,t.errorRecoveryDisabledLanes&u)var h=0;
          else h=t.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;
            if(h!==0){
            e=h;
              t:{
              var g=t;
              r=dl;
              var T=g.current.memoizedState.isDehydrated;
                if(T&&(da(g,h).flags|=256),h=Mu(g,h,!1),h!==2){
                  if(vu&&!T){
                  g.errorRecoveryDisabledLanes|=u,zi|=u,r=4;
                  break t
                }
                u=De,De=r,u!==null&&(De===null?De=u:De.push.apply(De,u))
              }
              r=h
            }
            if(u=!1,r!==2)continue
          }
        }
          if(r===1){
          da(t,0),$n(t,e,0,!0);
          break
        }
          t:{
            switch(l=t,u=r,u){
            case 0:case 1:throw Error(o(345));
            case 4:if((e&4194048)!==e)break;
            case 6:$n(l,e,He,!Jn);
            break t;
            case 2:De=null;
            break;
            case 3:case 5:break;
            default:throw Error(o(329))
          }
            if((e&62914560)===e&&(r=Bs+300-Ne(),10<r)){
            if($n(l,e,He,!Jn),Jl(l,0,!0)!==0)break t;
            Rn=e,l.timeoutHandle=ap(zm.bind(null,l,n,De,Ls,xu,e,He,zi,ca,Jn,u,"Throttled",-0,0),r);
            break t
          }
          zm(l,n,De,Ls,xu,e,He,zi,ca,Jn,u,null,-0,0)
        }
      }
      break
    }
    while(!0);
    dn(t)
  }
    function zm(t,e,n,l,r,u,h,g,T,C,O,L,j,V){
      if(t.timeoutHandle=-1,L=e.subtreeFlags,L&8192||(L&16785408)===16785408){
        L={
        stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:gn
      }
      ,xm(e,u,L);
      var W=(u&62914560)===u?Bs-Ne():(u&4194048)===u?Em-Ne():0;
        if(W=Tb(L,W),W!==null){
        Rn=u,t.cancelPendingCommit=W(Bm.bind(null,t,e,u,n,l,r,h,g,T,O,L,null,j,V)),$n(t,u,h,!C);
        return
      }
    }
    Bm(t,e,u,n,l,r,h,g,T)
  }
    function Lv(t){
    for(var e=t;
    ;
      ){
      var n=e.tag;
      if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;
      l<n.length;
        l++){
        var r=n[l],u=r.getSnapshot;
        r=r.value;
          try{
          if(!Oe(u(),r))return!1
        }
          catch{
          return!1
        }
      }
      if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;
        else{
        if(e===t)break;
        for(;
        e.sibling===null;
          ){
          if(e.return===null||e.return===t)return!0;
          e=e.return
        }
        e.sibling.return=e.return,e=e.sibling
      }
    }
    return!0
  }
    function $n(t,e,n,l){
    e&=~bu,e&=~zi,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;
    for(var r=e;
    0<r;
      ){
      var u=31-Ve(r),h=1<<u;
      l[u]=-1,r&=~h
    }
    n!==0&&Lf(t,n,e)
  }
    function Hs(){
    return(Dt&6)===0?(ml(0),!1):!0
  }
    function Eu(){
      if(pt!==null){
      if(wt===0)var t=pt.return;
      else t=pt,Sn=bi=null,kr(t),na=null,Pa=0,t=pt;
      for(;
      t!==null;
      )lm(t.alternate,t),t=t.return;
      pt=null
    }
  }
    function da(t,e){
    var n=t.timeoutHandle;
    n!==-1&&(t.timeoutHandle=-1,ab(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Rn=0,Eu(),Rt=t,pt=n=bn(t.current,
    null),gt=e,wt=0,Le=null,Jn=!1,ua=Va(t,e),vu=!1,ca=He=bu=zi=Fn=Yt=0,De=dl=null,xu=!1,(e&8)!==0&&(e|=e&32);
    var l=t.entangledLanes;
    if(l!==0)for(t=t.entanglements,l&=e;
    0<l;
      ){
      var r=31-Ve(l),u=1<<r;
      e|=t[r],l&=~u
    }
    return Nn=e,ss(),n
  }
    function Cm(t,e){
    ct=null,R.H=al,e===ea||e===ms?(e=Kd(),wt=3):e===zr?(e=Kd(),wt=4):wt=e===nu?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,
    Le=e,pt===null&&(Yt=1,zs(t,Ke(e,t.current)))
  }
    function jm(){
    var t=Be.current;
    return t===null?!0:(gt&4194048)===gt?Fe===null:(gt&62914560)===gt||(gt&536870912)!==0?t===Fe:!1
  }
    function Nm(){
    var t=R.H;
    return R.H=al,t===null?al:t
  }
    function Rm(){
    var t=R.A;
    return R.A=Bv,t
  }
    function ks(){
    Yt=4,Jn||(gt&4194048)!==gt&&Be.current!==null||(ua=!0),(Fn&134217727)===0&&(zi&134217727)===0||Rt===null||$n(Rt,gt,He,!1)
  }
    function Mu(t,e,n){
    var l=Dt;
    Dt|=2;
    var r=Nm(),u=Rm();
    (Rt!==t||gt!==e)&&(Ls=null,da(t,e)),e=!1;
    var h=Yt;
      t:do try{
        if(wt!==0&&pt!==null){
        var g=pt,T=Le;
          switch(wt){
          case 8:Eu(),h=6;
          break t;
          case 3:case 2:case 9:case 6:Be.current===null&&(e=!0);
          var C=wt;
            if(wt=0,Le=null,ha(t,g,T,C),n&&ua){
            h=0;
            break t
          }
          break;
          default:C=wt,wt=0,Le=null,ha(t,g,T,C)
        }
      }
      Hv(),h=Yt;
      break
    }
      catch(O){
      Cm(t,O)
    }
    while(!0);
    return e&&t.shellSuspendCounter++,Sn=bi=null,Dt=l,R.H=r,R.A=u,pt===null&&(Rt=null,gt=0,ss()),h
  }
    function Hv(){
    for(;
    pt!==null;
    )Vm(pt)
  }
    function kv(t,e){
    var n=Dt;
    Dt|=2;
    var l=Nm(),r=Rm();
    Rt!==t||gt!==e?(Ls=null,Us=Ne()+500,da(t,e)):ua=Va(t,e);
      t:do try{
        if(wt!==0&&pt!==null){
        e=pt;
        var u=Le;
          e:switch(wt){
          case 1:wt=0,Le=null,ha(t,e,u,1);
          break;
            case 2:case 9:if(Yd(u)){
            wt=0,Le=null,Om(e);
            break
          }
            e=function(){
            wt!==2&&wt!==9||Rt!==t||(wt=7),dn(t)
          }
          ,u.then(e,e);
          break t;
          case 3:wt=7;
          break t;
          case 4:wt=5;
          break t;
          case 7:Yd(u)?(wt=0,Le=null,Om(e)):(wt=0,Le=null,ha(t,e,u,7));
          break;
          case 5:var h=null;
            switch(pt.tag){
            case 26:h=pt.memoizedState;
            case 5:case 27:var g=pt;
              if(h?bp(h):g.stateNode.complete){
              wt=0,Le=null;
              var T=g.sibling;
              if(T!==null)pt=T;
                else{
                var C=g.return;
                C!==null?(pt=C,Gs(C)):pt=null
              }
              break e
            }
          }
          wt=0,Le=null,ha(t,e,u,5);
          break;
          case 6:wt=0,Le=null,ha(t,e,u,6);
          break;
          case 8:Eu(),Yt=6;
          break t;
          default:throw Error(o(462))
        }
      }
      Gv();
      break
    }
      catch(O){
      Cm(t,O)
    }
    while(!0);
    return Sn=bi=null,R.H=l,R.A=r,Dt=n,pt!==null?0:(Rt=null,gt=0,ss(),Yt)
  }
    function Gv(){
    for(;
    pt!==null&&!Ho();
    )Vm(pt)
  }
    function Vm(t){
    var e=im(t.alternate,t,Nn);
    t.memoizedProps=t.pendingProps,e===null?Gs(t):pt=e
  }
    function Om(t){
    var e=t,n=e.alternate;
      switch(e.tag){
      case 15:case 0:e=Wh(n,e,e.pendingProps,e.type,void 0,gt);
      break;
      case 11:e=Wh(n,e,e.pendingProps,e.type.render,e.ref,gt);
      break;
      case 5:kr(e);
      default:lm(n,e),e=pt=Rd(e,Nn),e=im(n,e,Nn)
    }
    t.memoizedProps=t.pendingProps,e===null?Gs(t):pt=e
  }
    function ha(t,e,n,l){
    Sn=bi=null,kr(e),na=null,Pa=0;
    var r=e.return;
      try{
        if(Cv(t,r,e,n,gt)){
        Yt=1,zs(t,Ke(n,t.current)),pt=null;
        return
      }
    }
      catch(u){
      if(r!==null)throw pt=r,u;
      Yt=1,zs(t,Ke(n,t.current)),pt=null;
      return
    }
    e.flags&32768?(bt||l===1?t=!0:ua||(gt&536870912)!==0?t=!1:(Jn=t=!0,(l===2||l===9||l===3||l===6)&&(l=Be.current,l!==null&&l.tag===13&&(l.flags|=16384))),
    _m(e,t)):Gs(e)
  }
    function Gs(t){
    var e=t;
      do{
        if((e.flags&32768)!==0){
        _m(e,Jn);
        return
      }
      t=e.return;
      var n=Rv(e.alternate,e,Nn);
        if(n!==null){
        pt=n;
        return
      }
        if(e=e.sibling,e!==null){
        pt=e;
        return
      }
      pt=e=t
    }
    while(e!==null);
    Yt===0&&(Yt=5)
  }
    function _m(t,e){
      do{
      var n=Vv(t.alternate,t);
        if(n!==null){
        n.flags&=32767,pt=n;
        return
      }
        if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){
        pt=t;
        return
      }
      pt=t=n
    }
    while(t!==null);
    Yt=6,pt=null
  }
    function Bm(t,e,n,l,r,u,h,g,T){
    t.cancelPendingCommit=null;
    do qs();
    while(ne!==0);
    if((Dt&6)!==0)throw Error(o(327));
      if(e!==null){
      if(e===t.current)throw Error(o(177));
      if(u=e.lanes|e.childLanes,u|=hr,x1(t,n,u,h,g,T),t===Rt&&(pt=Rt=null,gt=0),fa=e,Wn=t,Rn=n,Su=u,Tu=r,Mm=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,
        t.callbackPriority=0,Kv(Xl,function(){
        return Gm(),null
      }
        )):(t.callbackNode=null,t.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){
        l=R.T,R.T=null,r=K.p,K.p=2,h=Dt,Dt|=4;
          try{
          Ov(t,e,n)
        }
          finally{
          Dt=h,K.p=r,R.T=l
        }
      }
      ne=1,Um(),Lm(),Hm()
    }
  }
    function Um(){
      if(ne===1){
      ne=0;
      var t=Wn,e=fa,n=(e.flags&13878)!==0;
        if((e.subtreeFlags&13878)!==0||n){
        n=R.T,R.T=null;
        var l=K.p;
        K.p=2;
        var r=Dt;
        Dt|=4;
          try{
          gm(e,t);
          var u=Uu,h=Ad(t.containerInfo),g=u.focusedElem,T=u.selectionRange;
            if(h!==g&&g&&g.ownerDocument&&Td(g.ownerDocument.documentElement,g)){
              if(T!==null&&rr(g)){
              var C=T.start,O=T.end;
              if(O===void 0&&(O=C),"selectionStart"in g)g.selectionStart=C,g.selectionEnd=Math.min(O,g.value.length);
                else{
                var L=g.ownerDocument||document,j=L&&L.defaultView||window;
                  if(j.getSelection){
                  var V=j.getSelection(),W=g.textContent.length,at=Math.min(T.start,W),Nt=T.end===void 0?at:Math.min(T.end,W);
                  !V.extend&&at>Nt&&(h=Nt,Nt=at,at=h);
                  var M=Sd(g,at),E=Sd(g,Nt);
                    if(M&&E&&(V.rangeCount!==1||V.anchorNode!==M.node||V.anchorOffset!==M.offset||V.focusNode!==E.node||V.focusOffset!==E.offset)){
                    var z=L.createRange();
                    z.setStart(M.node,M.offset),V.removeAllRanges(),at>Nt?(V.addRange(z),V.extend(E.node,E.offset)):(z.setEnd(E.node,E.offset),
                    V.addRange(z))
                  }
                }
              }
            }
            for(L=[],V=g;
            V=V.parentNode;
              )V.nodeType===1&&L.push({
              element:V,left:V.scrollLeft,top:V.scrollTop
            }
            );
            for(typeof g.focus=="function"&&g.focus(),g=0;
            g<L.length;
              g++){
              var _=L[g];
              _.element.scrollLeft=_.left,_.element.scrollTop=_.top
            }
          }
          to=!!Bu,Uu=Bu=null
        }
          finally{
          Dt=r,K.p=l,R.T=n
        }
      }
      t.current=e,ne=2
    }
  }
    function Lm(){
      if(ne===2){
      ne=0;
      var t=Wn,e=fa,n=(e.flags&8772)!==0;
        if((e.subtreeFlags&8772)!==0||n){
        n=R.T,R.T=null;
        var l=K.p;
        K.p=2;
        var r=Dt;
        Dt|=4;
          try{
          dm(t,e.alternate,e)
        }
          finally{
          Dt=r,K.p=l,R.T=n
        }
      }
      ne=3
    }
  }
    function Hm(){
      if(ne===4||ne===3){
      ne=0,ko();
      var t=Wn,e=fa,n=Rn,l=Mm;
      (e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?ne=5:(ne=0,fa=Wn=null,km(t,t.pendingLanes));
      var r=t.pendingLanes;
        if(r===0&&(Pn=null),Yo(n),e=e.stateNode,Re&&typeof Re.onCommitFiberRoot=="function")try{
        Re.onCommitFiberRoot(Ra,e,void 0,(e.current.flags&128)===128)
      }
        catch{
      }
        if(l!==null){
        e=R.T,r=K.p,K.p=2,R.T=null;
          try{
          for(var u=t.onRecoverableError,h=0;
          h<l.length;
            h++){
            var g=l[h];
              u(g.value,{
              componentStack:g.stack
            }
            )
          }
        }
          finally{
          R.T=e,K.p=r
        }
      }(Rn&3)!==0&&qs(),dn(t),r=t.pendingLanes,(n&261930)!==0&&(r&42)!==0?t===Au?hl++:(hl=0,Au=t):hl=0,ml(0)
    }
  }
    function km(t,e){
    (t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Ja(e)))
  }
    function qs(){
    return Um(),Lm(),Hm(),Gm()
  }
    function Gm(){
    if(ne!==5)return!1;
    var t=Wn,e=Su;
    Su=0;
    var n=Yo(Rn),l=R.T,r=K.p;
      try{
      K.p=32>n?32:n,R.T=null,n=Tu,Tu=null;
      var u=Wn,h=Rn;
      if(ne=0,fa=Wn=null,Rn=0,(Dt&6)!==0)throw Error(o(331));
      var g=Dt;
        if(Dt|=4,Tm(u.current),bm(u,u.current,h,n),Dt=g,ml(0,!1),Re&&typeof Re.onPostCommitFiberRoot=="function")try{
        Re.onPostCommitFiberRoot(Ra,u)
      }
        catch{
      }
      return!0
    }
      finally{
      K.p=r,R.T=l,km(t,e)
    }
  }
    function qm(t,e,n){
    e=Ke(n,e),e=eu(t.stateNode,e,2),t=Xn(t,e,2),t!==null&&(Oa(t,2),dn(t))
  }
    function zt(t,e,n){
    if(t.tag===3)qm(t,t,n);
    else for(;
    e!==null;
      ){
        if(e.tag===3){
        qm(e,t,n);
        break
      }
        else if(e.tag===1){
        var l=e.stateNode;
          if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Pn===null||!Pn.has(l))){
          t=Ke(n,t),n=Yh(2),l=Xn(e,n,2),l!==null&&(Xh(n,l,e,t),Oa(l,2),dn(l));
          break
        }
      }
      e=e.return
    }
  }
    function Du(t,e,n){
    var l=t.pingCache;
      if(l===null){
      l=t.pingCache=new Uv;
      var r=new Set;
      l.set(e,r)
    }
    else r=l.get(e),r===void 0&&(r=new Set,l.set(e,r));
    r.has(n)||(vu=!0,r.add(n),t=qv.bind(null,t,e,n),e.then(t,t))
  }
    function qv(t,e,n){
    var l=t.pingCache;
    l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Rt===t&&(gt&n)===n&&(Yt===4||Yt===3&&(gt&62914560)===gt&&300>Ne()-Bs?(Dt&2)===0&&da(t,
    0):bu|=n,ca===gt&&(ca=0)),dn(t)
  }
    function Ym(t,e){
    e===0&&(e=Uf()),t=yi(t,e),t!==null&&(Oa(t,e),dn(t))
  }
    function Yv(t){
    var e=t.memoizedState,n=0;
    e!==null&&(n=e.retryLane),Ym(t,n)
  }
    function Xv(t,e){
    var n=0;
      switch(t.tag){
      case 31:case 13:var l=t.stateNode,r=t.memoizedState;
      r!==null&&(n=r.retryLane);
      break;
      case 19:l=t.stateNode;
      break;
      case 22:l=t.stateNode._retryCache;
      break;
      default:throw Error(o(314))
    }
    l!==null&&l.delete(e),Ym(t,n)
  }
    function Kv(t,e){
    return ge(t,e)
  }
  var Ys=null,ma=null,wu=!1,Xs=!1,zu=!1,In=0;
    function dn(t){
    t!==ma&&t.next===null&&(ma===null?Ys=ma=t:ma=ma.next=t),Xs=!0,wu||(wu=!0,Qv())
  }
    function ml(t,e){
      if(!zu&&Xs){
      zu=!0;
      do for(var n=!1,l=Ys;
      l!==null;
        ){
          if(t!==0){
          var r=l.pendingLanes;
          if(r===0)var u=0;
            else{
            var h=l.suspendedLanes,g=l.pingedLanes;
            u=(1<<31-Ve(42|t)+1)-1,u&=r&~(h&~g),u=u&201326741?u&201326741|1:u?u|2:0
          }
          u!==0&&(n=!0,Qm(l,u))
        }
        else u=gt,u=Jl(l,l===Rt?u:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(u&3)===0||Va(l,u)||(n=!0,Qm(l,u));
        l=l.next
      }
      while(n);
      zu=!1
    }
  }
    function Zv(){
    Xm()
  }
    function Xm(){
    Xs=wu=!1;
    var t=0;
    In!==0&&ib()&&(t=In);
    for(var e=Ne(),n=null,l=Ys;
    l!==null;
      ){
      var r=l.next,u=Km(l,e);
      u===0?(l.next=null,n===null?Ys=r:n.next=r,r===null&&(ma=n)):(n=l,(t!==0||(u&3)!==0)&&(Xs=!0)),l=r
    }
    ne!==0&&ne!==5||ml(t),In!==0&&(In=0)
  }
    function Km(t,e){
    for(var n=t.suspendedLanes,l=t.pingedLanes,r=t.expirationTimes,u=t.pendingLanes&-62914561;
    0<u;
      ){
      var h=31-Ve(u),g=1<<h,T=r[h];
      T===-1?((g&n)===0||(g&l)!==0)&&(r[h]=b1(g,e)):T<=e&&(t.expiredLanes|=g),u&=~g
    }
    if(e=Rt,n=gt,n=Jl(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,n===0||t===e&&(wt===2||wt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Na(l),
    t.callbackNode=null,t.callbackPriority=0;
      if((n&3)===0||Va(t,n)){
      if(e=n&-n,e===t.callbackPriority)return e;
        switch(l!==null&&Na(l),Yo(n)){
        case 2:case 8:n=_f;
        break;
        case 32:n=Xl;
        break;
        case 268435456:n=Bf;
        break;
        default:n=Xl
      }
      return l=Zm.bind(null,t),n=ge(n,l),t.callbackPriority=e,t.callbackNode=n,e
    }
    return l!==null&&l!==null&&Na(l),t.callbackPriority=2,t.callbackNode=null,2
  }
    function Zm(t,e){
    if(ne!==0&&ne!==5)return t.callbackNode=null,t.callbackPriority=0,null;
    var n=t.callbackNode;
    if(qs()&&t.callbackNode!==n)return null;
    var l=gt;
    return l=Jl(t,t===Rt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(wm(t,l,e),Km(t,Ne()),t.callbackNode!=null&&t.callbackNode===n?Zm.bind(null,
    t):null)
  }
    function Qm(t,e){
    if(qs())return null;
    wm(t,e,!0)
  }
    function Qv(){
      lb(function(){
      (Dt&6)!==0?ge(Of,Zv):Xm()
    }
    )
  }
    function Cu(){
      if(In===0){
      var t=Ii;
      t===0&&(t=Kl,Kl<<=1,(Kl&261888)===0&&(Kl=256)),In=t
    }
    return In
  }
    function Jm(t){
    return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:$l(""+t)
  }
    function Fm(t,e){
    var n=e.ownerDocument.createElement("input");
    return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),
    t
  }
    function Jv(t,e,n,l,r){
      if(e==="submit"&&n&&n.stateNode===r){
      var u=Jm((r[Se]||null).action),h=l.submitter;
      h&&(e=(e=h[Se]||null)?Jm(e.formAction):h.getAttribute("formAction"),e!==null&&(u=e,h=null));
      var g=new ns("action","action",null,l,r);
        t.push({
          event:g,listeners:[{
            instance:null,listener:function(){
              if(l.defaultPrevented){
                if(In!==0){
                var T=h?Fm(r,h):new FormData(r);
                  Fr(n,{
                  pending:!0,data:T,method:r.method,action:u
                }
                ,null,T)
              }
            }
              else typeof u=="function"&&(g.preventDefault(),T=h?Fm(r,h):new FormData(r),Fr(n,{
              pending:!0,data:T,method:r.method,action:u
            }
            ,u,T))
          }
          ,currentTarget:r
        }
        ]
      }
      )
    }
  }
  for(var ju=0;
  ju<dr.length;
    ju++){
    var Nu=dr[ju],Fv=Nu.toLowerCase(),Pv=Nu[0].toUpperCase()+Nu.slice(1);
    tn(Fv,"on"+Pv)
  }
  tn(Dd,"onAnimationEnd"),tn(wd,"onAnimationIteration"),tn(zd,"onAnimationStart"),tn("dblclick","onDoubleClick"),tn("focusin",
  "onFocus"),tn("focusout","onBlur"),tn(dv,"onTransitionRun"),tn(hv,"onTransitionStart"),tn(mv,"onTransitionCancel"),tn(Cd,
  "onTransitionEnd"),Hi("onMouseEnter",["mouseout","mouseover"]),Hi("onMouseLeave",["mouseout","mouseover"]),Hi("onPointerEnter",
  ["pointerout","pointerover"]),Hi("onPointerLeave",["pointerout","pointerover"]),di("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),
  di("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),di("onBeforeInput",
  ["compositionend","keypress","textInput","paste"]),di("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),
  di("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),di("onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var pl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
  Wv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pl));
    function Pm(t,e){
    e=(e&4)!==0;
    for(var n=0;
    n<t.length;
      n++){
      var l=t[n],r=l.event;
      l=l.listeners;
        t:{
        var u=void 0;
        if(e)for(var h=l.length-1;
        0<=h;
          h--){
          var g=l[h],T=g.instance,C=g.currentTarget;
          if(g=g.listener,T!==u&&r.isPropagationStopped())break t;
          u=g,r.currentTarget=C;
            try{
            u(r)
          }
            catch(O){
            ls(O)
          }
          r.currentTarget=null,u=T
        }
        else for(h=0;
        h<l.length;
          h++){
          if(g=l[h],T=g.instance,C=g.currentTarget,g=g.listener,T!==u&&r.isPropagationStopped())break t;
          u=g,r.currentTarget=C;
            try{
            u(r)
          }
            catch(O){
            ls(O)
          }
          r.currentTarget=null,u=T
        }
      }
    }
  }
    function yt(t,e){
    var n=e[Xo];
    n===void 0&&(n=e[Xo]=new Set);
    var l=t+"__bubble";
    n.has(l)||(Wm(e,t,2,!1),n.add(l))
  }
    function Ru(t,e,n){
    var l=0;
    e&&(l|=4),Wm(n,t,l,e)
  }
  var Ks="_reactListening"+Math.random().toString(36).slice(2);
    function Vu(t){
      if(!t[Ks]){
        t[Ks]=!0,Xf.forEach(function(n){
        n!=="selectionchange"&&(Wv.has(n)||Ru(n,!1,t),Ru(n,!0,t))
      }
      );
      var e=t.nodeType===9?t:t.ownerDocument;
      e===null||e[Ks]||(e[Ks]=!0,Ru("selectionchange",!1,e))
    }
  }
    function Wm(t,e,n,l){
      switch(Dp(e)){
      case 2:var r=Mb;
      break;
      case 8:r=Db;
      break;
      default:r=Ju
    }
    n=r.bind(null,e,n,t),r=void 0,!Io||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),l?r!==void 0?t.addEventListener(e,
      n,{
      capture:!0,passive:r
    }
      ):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{
      passive:r
    }
    ):t.addEventListener(e,n,!1)
  }
    function Ou(t,e,n,l,r){
    var u=l;
    if((e&1)===0&&(e&2)===0&&l!==null)t:for(;
    ;
      ){
      if(l===null)return;
      var h=l.tag;
        if(h===3||h===4){
        var g=l.stateNode.containerInfo;
        if(g===r)break;
        if(h===4)for(h=l.return;
        h!==null;
          ){
          var T=h.tag;
          if((T===3||T===4)&&h.stateNode.containerInfo===r)return;
          h=h.return
        }
        for(;
        g!==null;
          ){
          if(h=Bi(g),h===null)return;
            if(T=h.tag,T===5||T===6||T===26||T===27){
            l=u=h;
            continue t
          }
          g=g.parentNode
        }
      }
      l=l.return
    }
      nd(function(){
      var C=u,O=Wo(n),L=[];
        t:{
        var j=jd.get(t);
          if(j!==void 0){
          var V=ns,W=t;
            switch(t){
            case"keypress":if(ts(n)===0)break t;
            case"keydown":case"keyup":V=X1;
            break;
            case"focusin":W="focus",V=ir;
            break;
            case"focusout":W="blur",V=ir;
            break;
            case"beforeblur":case"afterblur":V=ir;
            break;
            case"click":if(n.button===2)break t;
            case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=ld;
            break;
            case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=R1;
            break;
            case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=Q1;
            break;
            case Dd:case wd:case zd:V=_1;
            break;
            case Cd:V=F1;
            break;
            case"scroll":case"scrollend":V=j1;
            break;
            case"wheel":V=W1;
            break;
            case"copy":case"cut":case"paste":V=U1;
            break;
            case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=od;
            break;
            case"toggle":case"beforetoggle":V=I1
          }
          var at=(e&4)!==0,Nt=!at&&(t==="scroll"||t==="scrollend"),M=at?j!==null?j+"Capture":null:j;
          at=[];
          for(var E=C,z;
          E!==null;
            ){
            var _=E;
            if(z=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||z===null||M===null||(_=Ua(E,M),_!=null&&at.push(yl(E,_,z))),Nt)break;
            E=E.return
          }
            0<at.length&&(j=new V(j,W,null,n,O),L.push({
            event:j,listeners:at
          }
          ))
        }
      }
        if((e&7)===0){
          t:{
          if(j=t==="mouseover"||t==="pointerover",V=t==="mouseout"||t==="pointerout",j&&n!==Po&&(W=n.relatedTarget||n.fromElement)&&(Bi(W)||W[_i]))break t;
          if((V||j)&&(j=O.window===O?O:(j=O.ownerDocument)?j.defaultView||j.parentWindow:window,V?(W=n.relatedTarget||n.toElement,V=C,
            W=W?Bi(W):null,W!==null&&(Nt=d(W),at=W.tag,W!==Nt||at!==5&&at!==27&&at!==6)&&(W=null)):(V=null,W=C),V!==W)){
            if(at=ld,_="onMouseLeave",M="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(at=od,_="onPointerLeave",M="onPointerEnter",
            E="pointer"),Nt=V==null?j:Ba(V),z=W==null?j:Ba(W),j=new at(_,E+"leave",V,n,O),j.target=Nt,j.relatedTarget=z,_=null,Bi(O)===C&&(at=new at(M,
              E+"enter",W,n,O),at.target=z,at.relatedTarget=Nt,_=at),Nt=_,V&&W)e:{
              for(at=$v,M=V,E=W,z=0,_=M;
              _;
              _=at(_))z++;
              _=0;
              for(var nt=E;
              nt;
              nt=at(nt))_++;
              for(;
              0<z-_;
              )M=at(M),z--;
              for(;
              0<_-z;
              )E=at(E),_--;
              for(;
              z--;
                ){
                  if(M===E||E!==null&&M===E.alternate){
                  at=M;
                  break e
                }
                M=at(M),E=at(E)
              }
              at=null
            }
            else at=null;
            V!==null&&$m(L,j,V,at,!1),W!==null&&Nt!==null&&$m(L,Nt,W,at,!0)
          }
        }
          t:{
          if(j=C?Ba(C):window,V=j.nodeName&&j.nodeName.toLowerCase(),V==="select"||V==="input"&&j.type==="file")var Et=pd;
          else if(hd(j))if(yd)Et=uv;
            else{
            Et=ov;
            var I=sv
          }
          else V=j.nodeName,!V||V.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?C&&Fo(C.elementType)&&(Et=pd):Et=rv;
            if(Et&&(Et=Et(t,C))){
            md(L,Et,n,O);
            break t
          }
          I&&I(t,j,C),t==="focusout"&&C&&j.type==="number"&&C.memoizedProps.value!=null&&Jo(j,"number",j.value)
        }
          switch(I=C?Ba(C):window,t){
          case"focusin":(hd(I)||I.contentEditable==="true")&&(Ki=I,ur=C,Ka=null);
          break;
          case"focusout":Ka=ur=Ki=null;
          break;
          case"mousedown":cr=!0;
          break;
          case"contextmenu":case"mouseup":case"dragend":cr=!1,Ed(L,n,O);
          break;
          case"selectionchange":if(fv)break;
          case"keydown":case"keyup":Ed(L,n,O)
        }
        var dt;
          if(lr)t:{
            switch(t){
            case"compositionstart":var vt="onCompositionStart";
            break t;
            case"compositionend":vt="onCompositionEnd";
            break t;
            case"compositionupdate":vt="onCompositionUpdate";
            break t
          }
          vt=void 0
        }
        else Xi?fd(t,n)&&(vt="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(vt="onCompositionStart");
        vt&&(rd&&n.locale!=="ko"&&(Xi||vt!=="onCompositionStart"?vt==="onCompositionEnd"&&Xi&&(dt=id()):(Un=O,tr="value"in Un?Un.value:Un.textContent,
          Xi=!0)),I=Zs(C,vt),0<I.length&&(vt=new sd(vt,t,null,n,O),L.push({
          event:vt,listeners:I
        }
        ),dt?vt.data=dt:(dt=dd(n),dt!==null&&(vt.data=dt)))),(dt=ev?nv(t,n):iv(t,n))&&(vt=Zs(C,"onBeforeInput"),0<vt.length&&(I=new sd("onBeforeInput",
          "beforeinput",null,n,O),L.push({
          event:I,listeners:vt
        }
        ),I.data=dt)),Jv(L,t,C,n,O)
      }
      Pm(L,e)
    }
    )
  }
    function yl(t,e,n){
      return{
      instance:t,listener:e,currentTarget:n
    }
  }
    function Zs(t,e){
    for(var n=e+"Capture",l=[];
    t!==null;
      ){
      var r=t,u=r.stateNode;
      if(r=r.tag,r!==5&&r!==26&&r!==27||u===null||(r=Ua(t,n),r!=null&&l.unshift(yl(t,r,u)),r=Ua(t,e),r!=null&&l.push(yl(t,r,u))),
      t.tag===3)return l;
      t=t.return
    }
    return[]
  }
    function $v(t){
    if(t===null)return null;
    do t=t.return;
    while(t&&t.tag!==5&&t.tag!==27);
    return t||null
  }
    function $m(t,e,n,l,r){
    for(var u=e._reactName,h=[];
    n!==null&&n!==l;
      ){
      var g=n,T=g.alternate,C=g.stateNode;
      if(g=g.tag,T!==null&&T===l)break;
      g!==5&&g!==26&&g!==27||C===null||(T=C,r?(C=Ua(n,u),C!=null&&h.unshift(yl(n,C,T))):r||(C=Ua(n,u),C!=null&&h.push(yl(n,C,T)))),
      n=n.return
    }
      h.length!==0&&t.push({
      event:e,listeners:h
    }
    )
  }
  var Iv=/\r\n?/g,tb=/\u0000|\uFFFD/g;
    function Im(t){
    return(typeof t=="string"?t:""+t).replace(Iv,`
`).replace(tb,"")
  }
    function tp(t,e){
    return e=Im(e),Im(t)===e
  }
    function jt(t,e,n,l,r,u){
      switch(n){
      case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||Gi(t,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&Gi(t,
      ""+l);
      break;
      case"className":Pl(t,"class",l);
      break;
      case"tabIndex":Pl(t,"tabindex",l);
      break;
      case"dir":case"role":case"viewBox":case"width":case"height":Pl(t,n,l);
      break;
      case"style":td(t,l,u);
      break;
        case"data":if(e!=="object"){
        Pl(t,"data",l);
        break
      }
        case"src":case"href":if(l===""&&(e!=="a"||n!=="href")){
        t.removeAttribute(n);
        break
      }
        if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){
        t.removeAttribute(n);
        break
      }
      l=$l(""+l),t.setAttribute(n,l);
      break;
        case"action":case"formAction":if(typeof l=="function"){
        t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
        break
      }
      else typeof u=="function"&&(n==="formAction"?(e!=="input"&&jt(t,e,"name",r.name,r,null),jt(t,e,"formEncType",r.formEncType,
      r,null),jt(t,e,"formMethod",r.formMethod,r,null),jt(t,e,"formTarget",r.formTarget,r,null)):(jt(t,e,"encType",r.encType,r,
      null),jt(t,e,"method",r.method,r,null),jt(t,e,"target",r.target,r,null)));
        if(l==null||typeof l=="symbol"||typeof l=="boolean"){
        t.removeAttribute(n);
        break
      }
      l=$l(""+l),t.setAttribute(n,l);
      break;
      case"onClick":l!=null&&(t.onclick=gn);
      break;
      case"onScroll":l!=null&&yt("scroll",t);
      break;
      case"onScrollEnd":l!=null&&yt("scrollend",t);
      break;
        case"dangerouslySetInnerHTML":if(l!=null){
        if(typeof l!="object"||!("__html"in l))throw Error(o(61));
          if(n=l.__html,n!=null){
          if(r.children!=null)throw Error(o(60));
          t.innerHTML=n
        }
      }
      break;
      case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";
      break;
      case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";
      break;
      case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;
      case"autoFocus":break;
        case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){
        t.removeAttribute("xlink:href");
        break
      }
      n=$l(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);
      break;
      case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(n,
      ""+l):t.removeAttribute(n);
      break;
      case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(n,
      ""):t.removeAttribute(n);
      break;
      case"capture":case"download":l===!0?t.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(n,
      l):t.removeAttribute(n);
      break;
      case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(n,
      l):t.removeAttribute(n);
      break;
      case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(n):t.setAttribute(n,
      l);
      break;
      case"popover":yt("beforetoggle",t),yt("toggle",t),Fl(t,"popover",l);
      break;
      case"xlinkActuate":yn(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);
      break;
      case"xlinkArcrole":yn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);
      break;
      case"xlinkRole":yn(t,"http://www.w3.org/1999/xlink","xlink:role",l);
      break;
      case"xlinkShow":yn(t,"http://www.w3.org/1999/xlink","xlink:show",l);
      break;
      case"xlinkTitle":yn(t,"http://www.w3.org/1999/xlink","xlink:title",l);
      break;
      case"xlinkType":yn(t,"http://www.w3.org/1999/xlink","xlink:type",l);
      break;
      case"xmlBase":yn(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);
      break;
      case"xmlLang":yn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);
      break;
      case"xmlSpace":yn(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);
      break;
      case"is":Fl(t,"is",l);
      break;
      case"innerText":case"textContent":break;
      default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=z1.get(n)||n,Fl(t,n,l))
    }
  }
    function _u(t,e,n,l,r,u){
      switch(n){
      case"style":td(t,l,u);
      break;
        case"dangerouslySetInnerHTML":if(l!=null){
        if(typeof l!="object"||!("__html"in l))throw Error(o(61));
          if(n=l.__html,n!=null){
          if(r.children!=null)throw Error(o(60));
          t.innerHTML=n
        }
      }
      break;
      case"children":typeof l=="string"?Gi(t,l):(typeof l=="number"||typeof l=="bigint")&&Gi(t,""+l);
      break;
      case"onScroll":l!=null&&yt("scroll",t);
      break;
      case"onScrollEnd":l!=null&&yt("scrollend",t);
      break;
      case"onClick":l!=null&&(t.onclick=gn);
      break;
      case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;
      case"innerText":case"textContent":break;
        default:if(!Kf.hasOwnProperty(n))t:{
        if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),e=n.slice(2,r?n.length-7:void 0),u=t[Se]||null,u=u!=null?u[n]:null,typeof u=="function"&&t.removeEventListener(e,
          u,r),typeof l=="function")){
          typeof u!="function"&&u!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,l,r);
          break t
        }
        n in t?t[n]=l:l===!0?t.setAttribute(n,""):Fl(t,n,l)
      }
    }
  }
    function me(t,e,n){
      switch(e){
      case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;
      case"img":yt("error",t),yt("load",t);
      var l=!1,r=!1,u;
        for(u in n)if(n.hasOwnProperty(u)){
        var h=n[u];
          if(h!=null)switch(u){
          case"src":l=!0;
          break;
          case"srcSet":r=!0;
          break;
          case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));
          default:jt(t,e,u,h,n,null)
        }
      }
      r&&jt(t,e,"srcSet",n.srcSet,n,null),l&&jt(t,e,"src",n.src,n,null);
      return;
      case"input":yt("invalid",t);
      var g=u=h=r=null,T=null,C=null;
        for(l in n)if(n.hasOwnProperty(l)){
        var O=n[l];
          if(O!=null)switch(l){
          case"name":r=O;
          break;
          case"type":h=O;
          break;
          case"checked":T=O;
          break;
          case"defaultChecked":C=O;
          break;
          case"value":u=O;
          break;
          case"defaultValue":g=O;
          break;
          case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(o(137,e));
          break;
          default:jt(t,e,l,O,n,null)
        }
      }
      Pf(t,u,g,T,C,h,r,!1);
      return;
      case"select":yt("invalid",t),l=h=u=null;
        for(r in n)if(n.hasOwnProperty(r)&&(g=n[r],g!=null))switch(r){
        case"value":u=g;
        break;
        case"defaultValue":h=g;
        break;
        case"multiple":l=g;
        default:jt(t,e,r,g,n,null)
      }
      e=u,n=h,t.multiple=!!l,e!=null?ki(t,!!l,e,!1):n!=null&&ki(t,!!l,n,!0);
      return;
      case"textarea":yt("invalid",t),u=r=l=null;
        for(h in n)if(n.hasOwnProperty(h)&&(g=n[h],g!=null))switch(h){
        case"value":l=g;
        break;
        case"defaultValue":r=g;
        break;
        case"children":u=g;
        break;
        case"dangerouslySetInnerHTML":if(g!=null)throw Error(o(91));
        break;
        default:jt(t,e,h,g,n,null)
      }
      $f(t,l,r,u);
      return;
      case"option":for(T in n)n.hasOwnProperty(T)&&(l=n[T],l!=null)&&(T==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":jt(t,
      e,T,l,n,null));
      return;
      case"dialog":yt("beforetoggle",t),yt("toggle",t),yt("cancel",t),yt("close",t);
      break;
      case"iframe":case"object":yt("load",t);
      break;
      case"video":case"audio":for(l=0;
      l<pl.length;
      l++)yt(pl[l],t);
      break;
      case"image":yt("error",t),yt("load",t);
      break;
      case"details":yt("toggle",t);
      break;
      case"embed":case"source":case"link":yt("error",t),yt("load",t);
      case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in n)if(n.hasOwnProperty(C)&&(l=n[C],
        l!=null))switch(C){
        case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));
        default:jt(t,e,C,l,n,null)
      }
      return;
        default:if(Fo(e)){
        for(O in n)n.hasOwnProperty(O)&&(l=n[O],l!==void 0&&_u(t,e,O,l,n,void 0));
        return
      }
    }
    for(g in n)n.hasOwnProperty(g)&&(l=n[g],l!=null&&jt(t,e,g,l,n,null))
  }
    function eb(t,e,n,l){
      switch(e){
      case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;
      case"input":var r=null,u=null,h=null,g=null,T=null,C=null,O=null;
        for(V in n){
        var L=n[V];
          if(n.hasOwnProperty(V)&&L!=null)switch(V){
          case"checked":break;
          case"value":break;
          case"defaultValue":T=L;
          default:l.hasOwnProperty(V)||jt(t,e,V,null,l,L)
        }
      }
        for(var j in l){
        var V=l[j];
          if(L=n[j],l.hasOwnProperty(j)&&(V!=null||L!=null))switch(j){
          case"type":u=V;
          break;
          case"name":r=V;
          break;
          case"checked":C=V;
          break;
          case"defaultChecked":O=V;
          break;
          case"value":h=V;
          break;
          case"defaultValue":g=V;
          break;
          case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(o(137,e));
          break;
          default:V!==L&&jt(t,e,j,V,l,L)
        }
      }
      Qo(t,h,g,T,C,O,u,r);
      return;
      case"select":V=h=g=j=null;
        for(u in n)if(T=n[u],n.hasOwnProperty(u)&&T!=null)switch(u){
        case"value":break;
        case"multiple":V=T;
        default:l.hasOwnProperty(u)||jt(t,e,u,null,l,T)
      }
        for(r in l)if(u=l[r],T=n[r],l.hasOwnProperty(r)&&(u!=null||T!=null))switch(r){
        case"value":j=u;
        break;
        case"defaultValue":g=u;
        break;
        case"multiple":h=u;
        default:u!==T&&jt(t,e,r,u,l,T)
      }
      e=g,n=h,l=V,j!=null?ki(t,!!n,j,!1):!!l!=!!n&&(e!=null?ki(t,!!n,e,!0):ki(t,!!n,n?[]:"",!1));
      return;
      case"textarea":V=j=null;
        for(g in n)if(r=n[g],n.hasOwnProperty(g)&&r!=null&&!l.hasOwnProperty(g))switch(g){
        case"value":break;
        case"children":break;
        default:jt(t,e,g,null,l,r)
      }
        for(h in l)if(r=l[h],u=n[h],l.hasOwnProperty(h)&&(r!=null||u!=null))switch(h){
        case"value":j=r;
        break;
        case"defaultValue":V=r;
        break;
        case"children":break;
        case"dangerouslySetInnerHTML":if(r!=null)throw Error(o(91));
        break;
        default:r!==u&&jt(t,e,h,r,l,u)
      }
      Wf(t,j,V);
      return;
      case"option":for(var W in n)j=n[W],n.hasOwnProperty(W)&&j!=null&&!l.hasOwnProperty(W)&&(W==="selected"?t.selected=!1:jt(t,
      e,W,null,l,j));
      for(T in l)j=l[T],V=n[T],l.hasOwnProperty(T)&&j!==V&&(j!=null||V!=null)&&(T==="selected"?t.selected=j&&typeof j!="function"&&typeof j!="symbol":jt(t,
      e,T,j,l,V));
      return;
      case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in n)j=n[at],
      n.hasOwnProperty(at)&&j!=null&&!l.hasOwnProperty(at)&&jt(t,e,at,null,l,j);
        for(C in l)if(j=l[C],V=n[C],l.hasOwnProperty(C)&&j!==V&&(j!=null||V!=null))switch(C){
        case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(o(137,e));
        break;
        default:jt(t,e,C,j,l,V)
      }
      return;
        default:if(Fo(e)){
        for(var Nt in n)j=n[Nt],n.hasOwnProperty(Nt)&&j!==void 0&&!l.hasOwnProperty(Nt)&&_u(t,e,Nt,void 0,l,j);
        for(O in l)j=l[O],V=n[O],!l.hasOwnProperty(O)||j===V||j===void 0&&V===void 0||_u(t,e,O,j,l,V);
        return
      }
    }
    for(var M in n)j=n[M],n.hasOwnProperty(M)&&j!=null&&!l.hasOwnProperty(M)&&jt(t,e,M,null,l,j);
    for(L in l)j=l[L],V=n[L],!l.hasOwnProperty(L)||j===V||j==null&&V==null||jt(t,e,L,j,l,V)
  }
    function ep(t){
      switch(t){
      case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;
      default:return!1
    }
  }
    function nb(){
      if(typeof performance.getEntriesByType=="function"){
      for(var t=0,e=0,n=performance.getEntriesByType("resource"),l=0;
      l<n.length;
        l++){
        var r=n[l],u=r.transferSize,h=r.initiatorType,g=r.duration;
          if(u&&g&&ep(h)){
          for(h=0,g=r.responseEnd,l+=1;
          l<n.length;
            l++){
            var T=n[l],C=T.startTime;
            if(C>g)break;
            var O=T.transferSize,L=T.initiatorType;
            O&&ep(L)&&(T=T.responseEnd,h+=O*(T<g?1:(g-C)/(T-C)))
          }
          if(--l,e+=8*(u+h)/(r.duration/1e3),t++,10<t)break
        }
      }
      if(0<t)return e/t/1e6
    }
    return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5
  }
  var Bu=null,Uu=null;
    function Qs(t){
    return t.nodeType===9?t:t.ownerDocument
  }
    function np(t){
      switch(t){
      case"http://www.w3.org/2000/svg":return 1;
      case"http://www.w3.org/1998/Math/MathML":return 2;
      default:return 0
    }
  }
    function ip(t,e){
      if(t===0)switch(e){
      case"svg":return 1;
      case"math":return 2;
      default:return 0
    }
    return t===1&&e==="foreignObject"?0:t
  }
    function Lu(t,e){
    return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null
  }
  var Hu=null;
    function ib(){
    var t=window.event;
    return t&&t.type==="popstate"?t===Hu?!1:(Hu=t,!0):(Hu=null,!1)
  }
  var ap=typeof setTimeout=="function"?setTimeout:void 0,ab=typeof clearTimeout=="function"?clearTimeout:void 0,lp=typeof Promise=="function"?Promise:void 0,
    lb=typeof queueMicrotask=="function"?queueMicrotask:typeof lp<"u"?function(t){
    return lp.resolve(null).then(t).catch(sb)
  }
  :ap;
    function sb(t){
      setTimeout(function(){
      throw t
    }
    )
  }
    function ti(t){
    return t==="head"
  }
    function sp(t,e){
    var n=e,l=0;
      do{
      var r=n.nextSibling;
        if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){
          if(l===0){
          t.removeChild(r),va(e);
          return
        }
        l--
      }
      else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;
      else if(n==="html")gl(t.ownerDocument.documentElement);
        else if(n==="head"){
        n=t.ownerDocument.head,gl(n);
        for(var u=n.firstChild;
        u;
          ){
          var h=u.nextSibling,g=u.nodeName;
          u[_a]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=h
        }
      }
      else n==="body"&&gl(t.ownerDocument.body);
      n=r
    }
    while(n);
    va(e)
  }
    function op(t,e){
    var n=t;
    t=0;
      do{
      var l=n.nextSibling;
      if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,
        n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){
        if(t===0)break;
        t--
      }
      else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;
      n=l
    }
    while(n)
  }
    function ku(t){
    var e=t.firstChild;
    for(e&&e.nodeType===10&&(e=e.nextSibling);
    e;
      ){
      var n=e;
        switch(e=e.nextSibling,n.nodeName){
        case"HTML":case"HEAD":case"BODY":ku(n),Ko(n);
        continue;
        case"SCRIPT":case"STYLE":continue;
        case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue
      }
      t.removeChild(n)
    }
  }
    function ob(t,e,n,l){
    for(;
    t.nodeType===1;
      ){
      var r=n;
        if(t.nodeName.toLowerCase()!==e.toLowerCase()){
        if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break
      }
        else if(l){
          if(!t[_a])switch(e){
          case"meta":if(!t.hasAttribute("itemprop"))break;
          return t;
          case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;
          if(u!==r.rel||t.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||t.getAttribute("title")!==(r.title==null?null:r.title))break;
          return t;
          case"style":if(t.hasAttribute("data-precedence"))break;
          return t;
          case"script":if(u=t.getAttribute("src"),(u!==(r.src==null?null:r.src)||t.getAttribute("type")!==(r.type==null?null:r.type)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;
          return t;
          default:return t
        }
      }
        else if(e==="input"&&t.type==="hidden"){
        var u=r.name==null?null:""+r.name;
        if(r.type==="hidden"&&t.getAttribute("name")===u)return t
      }
      else return t;
      if(t=Pe(t.nextSibling),t===null)break
    }
    return null
  }
    function rb(t,e,n){
    if(e==="")return null;
    for(;
    t.nodeType!==3;
    )if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Pe(t.nextSibling),t===null))return null;
    return t
  }
    function rp(t,e){
    for(;
    t.nodeType!==8;
    )if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Pe(t.nextSibling),t===null))return null;
    return t
  }
    function Gu(t){
    return t.data==="$?"||t.data==="$~"
  }
    function qu(t){
    return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"
  }
    function ub(t,e){
    var n=t.ownerDocument;
    if(t.data==="$~")t._reactRetry=e;
    else if(t.data!=="$?"||n.readyState!=="loading")e();
      else{
        var l=function(){
        e(),n.removeEventListener("DOMContentLoaded",l)
      }
      ;
      n.addEventListener("DOMContentLoaded",l),t._reactRetry=l
    }
  }
    function Pe(t){
    for(;
    t!=null;
      t=t.nextSibling){
      var e=t.nodeType;
      if(e===1||e===3)break;
        if(e===8){
        if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;
        if(e==="/$"||e==="/&")return null
      }
    }
    return t
  }
  var Yu=null;
    function up(t){
    t=t.nextSibling;
    for(var e=0;
    t;
      ){
        if(t.nodeType===8){
        var n=t.data;
          if(n==="/$"||n==="/&"){
          if(e===0)return Pe(t.nextSibling);
          e--
        }
        else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++
      }
      t=t.nextSibling
    }
    return null
  }
    function cp(t){
    t=t.previousSibling;
    for(var e=0;
    t;
      ){
        if(t.nodeType===8){
        var n=t.data;
          if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){
          if(e===0)return t;
          e--
        }
        else n!=="/$"&&n!=="/&"||e++
      }
      t=t.previousSibling
    }
    return null
  }
    function fp(t,e,n){
      switch(e=Qs(n),t){
      case"html":if(t=e.documentElement,!t)throw Error(o(452));
      return t;
      case"head":if(t=e.head,!t)throw Error(o(453));
      return t;
      case"body":if(t=e.body,!t)throw Error(o(454));
      return t;
      default:throw Error(o(451))
    }
  }
    function gl(t){
    for(var e=t.attributes;
    e.length;
    )t.removeAttributeNode(e[0]);
    Ko(t)
  }
  var We=new Map,dp=new Set;
    function Js(t){
    return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument
  }
  var Vn=K.d;
    K.d={
    f:cb,r:fb,D:db,C:hb,L:mb,m:pb,X:gb,S:yb,M:vb
  }
  ;
    function cb(){
    var t=Vn.f(),e=Hs();
    return t||e
  }
    function fb(t){
    var e=Ui(t);
    e!==null&&e.tag===5&&e.type==="form"?Ch(e):Vn.r(t)
  }
  var pa=typeof document>"u"?null:document;
    function hp(t,e,n){
    var l=pa;
      if(l&&typeof e=="string"&&e){
      var r=Ye(e);
        r='link[rel="'+t+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),dp.has(r)||(dp.add(r),t={
        rel:t,crossOrigin:n,href:e
      }
      ,l.querySelector(r)===null&&(e=l.createElement("link"),me(e,"link",t),se(e),l.head.appendChild(e)))
    }
  }
    function db(t){
    Vn.D(t),hp("dns-prefetch",t,null)
  }
    function hb(t,e){
    Vn.C(t,e),hp("preconnect",t,e)
  }
    function mb(t,e,n){
    Vn.L(t,e,n);
    var l=pa;
      if(l&&t&&e){
      var r='link[rel="preload"][as="'+Ye(e)+'"]';
      e==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Ye(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Ye(n.imageSizes)+'"]')):r+='[href="'+Ye(t)+'"]';
      var u=r;
        switch(e){
        case"style":u=ya(t);
        break;
        case"script":u=ga(t)
      }
        We.has(u)||(t=b({
        rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e
      }
      ,n),We.set(u,t),l.querySelector(r)!==null||e==="style"&&l.querySelector(vl(u))||e==="script"&&l.querySelector(bl(u))||(e=l.createElement("link"),
      me(e,"link",t),se(e),l.head.appendChild(e)))
    }
  }
    function pb(t,e){
    Vn.m(t,e);
    var n=pa;
      if(n&&t){
      var l=e&&typeof e.as=="string"?e.as:"script",r='link[rel="modulepreload"][as="'+Ye(l)+'"][href="'+Ye(t)+'"]',u=r;
        switch(l){
        case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=ga(t)
      }
        if(!We.has(u)&&(t=b({
        rel:"modulepreload",href:t
      }
        ,e),We.set(u,t),n.querySelector(r)===null)){
          switch(l){
          case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(bl(u)))return
        }
        l=n.createElement("link"),me(l,"link",t),se(l),n.head.appendChild(l)
      }
    }
  }
    function yb(t,e,n){
    Vn.S(t,e,n);
    var l=pa;
      if(l&&t){
      var r=Li(l).hoistableStyles,u=ya(t);
      e=e||"default";
      var h=r.get(u);
        if(!h){
          var g={
          loading:0,preload:null
        }
        ;
        if(h=l.querySelector(vl(u)))g.loading=5;
          else{
            t=b({
            rel:"stylesheet",href:t,"data-precedence":e
          }
          ,n),(n=We.get(u))&&Xu(t,n);
          var T=h=l.createElement("link");
            se(T),me(T,"link",t),T._p=new Promise(function(C,O){
            T.onload=C,T.onerror=O
          }
            ),T.addEventListener("load",function(){
            g.loading|=1
          }
            ),T.addEventListener("error",function(){
            g.loading|=2
          }
          ),g.loading|=4,Fs(h,e,l)
        }
          h={
          type:"stylesheet",instance:h,count:1,state:g
        }
        ,r.set(u,h)
      }
    }
  }
    function gb(t,e){
    Vn.X(t,e);
    var n=pa;
      if(n&&t){
      var l=Li(n).hoistableScripts,r=ga(t),u=l.get(r);
        u||(u=n.querySelector(bl(r)),u||(t=b({
        src:t,async:!0
      }
        ,e),(e=We.get(r))&&Ku(t,e),u=n.createElement("script"),se(u),me(u,"link",t),n.head.appendChild(u)),u={
        type:"script",instance:u,count:1,state:null
      }
      ,l.set(r,u))
    }
  }
    function vb(t,e){
    Vn.M(t,e);
    var n=pa;
      if(n&&t){
      var l=Li(n).hoistableScripts,r=ga(t),u=l.get(r);
        u||(u=n.querySelector(bl(r)),u||(t=b({
        src:t,async:!0,type:"module"
      }
        ,e),(e=We.get(r))&&Ku(t,e),u=n.createElement("script"),se(u),me(u,"link",t),n.head.appendChild(u)),u={
        type:"script",instance:u,count:1,state:null
      }
      ,l.set(r,u))
    }
  }
    function mp(t,e,n,l){
    var r=(r=ht.current)?Js(r):null;
    if(!r)throw Error(o(446));
      switch(t){
      case"meta":case"title":return null;
      case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=ya(n.href),n=Li(r).hoistableStyles,l=n.get(e),
        l||(l={
        type:"style",instance:null,count:0,state:null
      }
        ,n.set(e,l)),l):{
        type:"void",instance:null,count:0,state:null
      }
      ;
        case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){
        t=ya(n.href);
        var u=Li(r).hoistableStyles,h=u.get(t);
          if(h||(r=r.ownerDocument||r,h={
            type:"stylesheet",instance:null,count:0,state:{
            loading:0,preload:null
          }
        }
          ,u.set(t,h),(u=r.querySelector(vl(t)))&&!u._p&&(h.instance=u,h.state.loading=5),We.has(t)||(n={
          rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy
        }
        ,We.set(t,n),u||bb(r,t,n,h.state))),e&&l===null)throw Error(o(528,""));
        return h
      }
      if(e&&l!==null)throw Error(o(529,""));
      return null;
      case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=ga(n),n=Li(r).hoistableScripts,
        l=n.get(e),l||(l={
        type:"script",instance:null,count:0,state:null
      }
        ,n.set(e,l)),l):{
        type:"void",instance:null,count:0,state:null
      }
      ;
      default:throw Error(o(444,t))
    }
  }
    function ya(t){
    return'href="'+Ye(t)+'"'
  }
    function vl(t){
    return'link[rel="stylesheet"]['+t+"]"
  }
    function pp(t){
      return b({
    }
      ,t,{
      "data-precedence":t.precedence,precedence:null
    }
    )
  }
    function bb(t,e,n,l){
    t.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=t.createElement("link"),l.preload=e,e.addEventListener("load",
      function(){
      return l.loading|=1
    }
      ),e.addEventListener("error",function(){
      return l.loading|=2
    }
    ),me(e,"link",n),se(e),t.head.appendChild(e))
  }
    function ga(t){
    return'[src="'+Ye(t)+'"]'
  }
    function bl(t){
    return"script[async]"+t
  }
    function yp(t,e,n){
      if(e.count++,e.instance===null)switch(e.type){
      case"style":var l=t.querySelector('style[data-href~="'+Ye(n.href)+'"]');
      if(l)return e.instance=l,se(l),l;
        var r=b({
      }
        ,n,{
        "data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null
      }
      );
      return l=(t.ownerDocument||t).createElement("style"),se(l),me(l,"style",r),Fs(l,n.precedence,t),e.instance=l;
      case"stylesheet":r=ya(n.href);
      var u=t.querySelector(vl(r));
      if(u)return e.state.loading|=4,e.instance=u,se(u),u;
      l=pp(n),(r=We.get(r))&&Xu(l,r),u=(t.ownerDocument||t).createElement("link"),se(u);
      var h=u;
        return h._p=new Promise(function(g,T){
        h.onload=g,h.onerror=T
      }
      ),me(u,"link",l),e.state.loading|=4,Fs(u,n.precedence,t),e.instance=u;
        case"script":return u=ga(n.src),(r=t.querySelector(bl(u)))?(e.instance=r,se(r),r):(l=n,(r=We.get(u))&&(l=b({
      }
      ,n),Ku(l,r)),t=t.ownerDocument||t,r=t.createElement("script"),se(r),me(r,"link",l),t.head.appendChild(r),e.instance=r);
      case"void":return null;
      default:throw Error(o(443,e.type))
    }
    else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,Fs(l,n.precedence,t));
    return e.instance
  }
    function Fs(t,e,n){
    for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=l.length?l[l.length-1]:null,
    u=r,h=0;
    h<l.length;
      h++){
      var g=l[h];
      if(g.dataset.precedence===e)u=g;
      else if(u!==r)break
    }
    u?u.parentNode.insertBefore(t,u.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))
  }
    function Xu(t,e){
    t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)
  }
    function Ku(t,e){
    t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)
  }
  var Ps=null;
    function gp(t,e,n){
      if(Ps===null){
      var l=new Map,r=Ps=new Map;
      r.set(n,l)
    }
    else r=Ps,l=r.get(n),l||(l=new Map,r.set(n,l));
    if(l.has(t))return l;
    for(l.set(t,null),n=n.getElementsByTagName(t),r=0;
    r<n.length;
      r++){
      var u=n[r];
        if(!(u[_a]||u[ce]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){
        var h=u.getAttribute(e)||"";
        h=t+h;
        var g=l.get(h);
        g?g.push(u):l.set(h,[u])
      }
    }
    return l
  }
    function vp(t,e,n){
    t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)
  }
    function xb(t,e,n){
    if(n===1||e.itemProp!=null)return!1;
      switch(t){
      case"meta":case"title":return!0;
      case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;
      return!0;
      case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;
      return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;
      case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0
    }
    return!1
  }
    function bp(t){
    return!(t.type==="stylesheet"&&(t.state.loading&3)===0)
  }
    function Sb(t,e,n,l){
      if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){
        if(n.instance===null){
        var r=ya(l.href),u=e.querySelector(vl(r));
          if(u){
          e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Ws.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=u,
          se(u);
          return
        }
        u=e.ownerDocument||e,l=pp(l),(r=We.get(r))&&Xu(l,r),u=u.createElement("link"),se(u);
        var h=u;
          h._p=new Promise(function(g,T){
          h.onload=g,h.onerror=T
        }
        ),me(u,"link",l),n.instance=u
      }
      t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,
      n=Ws.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))
    }
  }
  var Zu=0;
    function Tb(t,e){
      return t.stylesheets&&t.count===0&&Is(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){
        var l=setTimeout(function(){
          if(t.stylesheets&&Is(t,t.stylesheets),t.unsuspend){
          var u=t.unsuspend;
          t.unsuspend=null,u()
        }
      }
      ,6e4+e);
      0<t.imgBytes&&Zu===0&&(Zu=62500*nb());
        var r=setTimeout(function(){
          if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Is(t,t.stylesheets),t.unsuspend)){
          var u=t.unsuspend;
          t.unsuspend=null,u()
        }
      }
      ,(t.imgBytes>Zu?50:800)+e);
        return t.unsuspend=n,function(){
        t.unsuspend=null,clearTimeout(l),clearTimeout(r)
      }
    }
    :null
  }
    function Ws(){
      if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){
      if(this.stylesheets)Is(this,this.stylesheets);
        else if(this.unsuspend){
        var t=this.unsuspend;
        this.unsuspend=null,t()
      }
    }
  }
  var $s=null;
    function Is(t,e){
    t.stylesheets=null,t.unsuspend!==null&&(t.count++,$s=new Map,e.forEach(Ab,t),$s=null,Ws.call(t))
  }
    function Ab(t,e){
      if(!(e.state.loading&4)){
      var n=$s.get(t);
      if(n)var l=n.get(null);
        else{
        n=new Map,$s.set(t,n);
        for(var r=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;
        u<r.length;
          u++){
          var h=r[u];
          (h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(n.set(h.dataset.precedence,h),l=h)
        }
        l&&n.set(null,l)
      }
      r=e.instance,h=r.getAttribute("data-precedence"),u=n.get(h)||l,u===l&&n.set(null,r),n.set(h,r),this.count++,l=Ws.bind(this),
      r.addEventListener("load",l),r.addEventListener("error",l),u?u.parentNode.insertBefore(r,u.nextSibling):(t=t.nodeType===9?t.head:t,
      t.insertBefore(r,t.firstChild)),e.state.loading|=4
    }
  }
    var xl={
    $$typeof:G,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0
  }
  ;
    function Eb(t,e,n,l,r,u,h,g,T){
    this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,
    this.callbackPriority=0,this.expirationTimes=Go(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,
    this.entanglements=Go(0),this.hiddenUpdates=Go(null),this.identifierPrefix=l,this.onUncaughtError=r,this.onCaughtError=u,
    this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map
  }
    function xp(t,e,n,l,r,u,h,g,T,C,O,L){
    return t=new Eb(t,e,n,h,T,C,O,L,g),e=1,u===!0&&(e|=24),u=_e(3,null,null,e),t.current=u,u.stateNode=t,e=Mr(),e.refCount++,
      t.pooledCache=e,e.refCount++,u.memoizedState={
      element:l,isDehydrated:n,cache:e
    }
    ,Cr(u),t
  }
    function Sp(t){
    return t?(t=Ji,t):Ji
  }
    function Tp(t,e,n,l,r,u){
      r=Sp(r),l.context===null?l.context=r:l.pendingContext=r,l=Yn(e),l.payload={
      element:n
    }
    ,u=u===void 0?null:u,u!==null&&(l.callback=u),n=Xn(t,l,e),n!==null&&(we(n,t,e),$a(n,t,e))
  }
    function Ap(t,e){
      if(t=t.memoizedState,t!==null&&t.dehydrated!==null){
      var n=t.retryLane;
      t.retryLane=n!==0&&n<e?n:e
    }
  }
    function Qu(t,e){
    Ap(t,e),(t=t.alternate)&&Ap(t,e)
  }
    function Ep(t){
      if(t.tag===13||t.tag===31){
      var e=yi(t,67108864);
      e!==null&&we(e,t,67108864),Qu(t,67108864)
    }
  }
    function Mp(t){
      if(t.tag===13||t.tag===31){
      var e=ke();
      e=qo(e);
      var n=yi(t,e);
      n!==null&&we(n,t,e),Qu(t,e)
    }
  }
  var to=!0;
    function Mb(t,e,n,l){
    var r=R.T;
    R.T=null;
    var u=K.p;
      try{
      K.p=2,Ju(t,e,n,l)
    }
      finally{
      K.p=u,R.T=r
    }
  }
    function Db(t,e,n,l){
    var r=R.T;
    R.T=null;
    var u=K.p;
      try{
      K.p=8,Ju(t,e,n,l)
    }
      finally{
      K.p=u,R.T=r
    }
  }
    function Ju(t,e,n,l){
      if(to){
      var r=Fu(l);
      if(r===null)Ou(t,e,l,eo,n),wp(t,l);
      else if(zb(r,t,e,n,l))l.stopPropagation();
        else if(wp(t,l),e&4&&-1<wb.indexOf(t)){
        for(;
        r!==null;
          ){
          var u=Ui(r);
            if(u!==null)switch(u.tag){
              case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){
              var h=fi(u.pendingLanes);
                if(h!==0){
                var g=u;
                for(g.pendingLanes|=2,g.entangledLanes|=2;
                h;
                  ){
                  var T=1<<31-Ve(h);
                  g.entanglements[1]|=T,h&=~T
                }
                dn(u),(Dt&6)===0&&(Us=Ne()+500,ml(0))
              }
            }
            break;
            case 31:case 13:g=yi(u,2),g!==null&&we(g,u,2),Hs(),Qu(u,2)
          }
          if(u=Fu(l),u===null&&Ou(t,e,l,eo,n),u===r)break;
          r=u
        }
        r!==null&&l.stopPropagation()
      }
      else Ou(t,e,l,null,n)
    }
  }
    function Fu(t){
    return t=Wo(t),Pu(t)
  }
  var eo=null;
    function Pu(t){
      if(eo=null,t=Bi(t),t!==null){
      var e=d(t);
      if(e===null)t=null;
        else{
        var n=e.tag;
          if(n===13){
          if(t=f(e),t!==null)return t;
          t=null
        }
          else if(n===31){
          if(t=m(e),t!==null)return t;
          t=null
        }
          else if(n===3){
          if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;
          t=null
        }
        else e!==t&&(t=null)
      }
    }
    return eo=t,null
  }
    function Dp(t){
      switch(t){
      case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;
      case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;
        case"message":switch(d1()){
        case Of:return 2;
        case _f:return 8;
        case Xl:case h1:return 32;
        case Bf:return 268435456;
        default:return 32
      }
      default:return 32
    }
  }
  var Wu=!1,ei=null,ni=null,ii=null,Sl=new Map,Tl=new Map,ai=[],wb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function wp(t,e){
      switch(t){
      case"focusin":case"focusout":ei=null;
      break;
      case"dragenter":case"dragleave":ni=null;
      break;
      case"mouseover":case"mouseout":ii=null;
      break;
      case"pointerover":case"pointerout":Sl.delete(e.pointerId);
      break;
      case"gotpointercapture":case"lostpointercapture":Tl.delete(e.pointerId)
    }
  }
    function Al(t,e,n,l,r,u){
      return t===null||t.nativeEvent!==u?(t={
      blockedOn:e,domEventName:n,eventSystemFlags:l,nativeEvent:u,targetContainers:[r]
    }
    ,e!==null&&(e=Ui(e),e!==null&&Ep(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),
    t)
  }
    function zb(t,e,n,l,r){
      switch(e){
      case"focusin":return ei=Al(ei,t,e,n,l,r),!0;
      case"dragenter":return ni=Al(ni,t,e,n,l,r),!0;
      case"mouseover":return ii=Al(ii,t,e,n,l,r),!0;
      case"pointerover":var u=r.pointerId;
      return Sl.set(u,Al(Sl.get(u)||null,t,e,n,l,r)),!0;
      case"gotpointercapture":return u=r.pointerId,Tl.set(u,Al(Tl.get(u)||null,t,e,n,l,r)),!0
    }
    return!1
  }
    function zp(t){
    var e=Bi(t.target);
      if(e!==null){
      var n=d(e);
        if(n!==null){
          if(e=n.tag,e===13){
            if(e=f(n),e!==null){
              t.blockedOn=e,qf(t.priority,function(){
              Mp(n)
            }
            );
            return
          }
        }
          else if(e===31){
            if(e=m(n),e!==null){
              t.blockedOn=e,qf(t.priority,function(){
              Mp(n)
            }
            );
            return
          }
        }
          else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){
          t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;
          return
        }
      }
    }
    t.blockedOn=null
  }
    function no(t){
    if(t.blockedOn!==null)return!1;
    for(var e=t.targetContainers;
    0<e.length;
      ){
      var n=Fu(t.nativeEvent);
        if(n===null){
        n=t.nativeEvent;
        var l=new n.constructor(n.type,n);
        Po=l,n.target.dispatchEvent(l),Po=null
      }
      else return e=Ui(n),e!==null&&Ep(e),t.blockedOn=n,!1;
      e.shift()
    }
    return!0
  }
    function Cp(t,e,n){
    no(t)&&n.delete(e)
  }
    function Cb(){
    Wu=!1,ei!==null&&no(ei)&&(ei=null),ni!==null&&no(ni)&&(ni=null),ii!==null&&no(ii)&&(ii=null),Sl.forEach(Cp),Tl.forEach(Cp)
  }
    function io(t,e){
    t.blockedOn===e&&(t.blockedOn=null,Wu||(Wu=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Cb)))
  }
  var ao=null;
    function jp(t){
      ao!==t&&(ao=t,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){
      ao===t&&(ao=null);
      for(var e=0;
      e<t.length;
        e+=3){
        var n=t[e],l=t[e+1],r=t[e+2];
          if(typeof l!="function"){
          if(Pu(l||n)===null)continue;
          break
        }
        var u=Ui(n);
          u!==null&&(t.splice(e,3),e-=3,Fr(u,{
          pending:!0,data:r,method:n.method,action:l
        }
        ,l,r))
      }
    }
    ))
  }
    function va(t){
      function e(T){
      return io(T,t)
    }
    ei!==null&&io(ei,t),ni!==null&&io(ni,t),ii!==null&&io(ii,t),Sl.forEach(e),Tl.forEach(e);
    for(var n=0;
    n<ai.length;
      n++){
      var l=ai[n];
      l.blockedOn===t&&(l.blockedOn=null)
    }
    for(;
    0<ai.length&&(n=ai[0],n.blockedOn===null);
    )zp(n),n.blockedOn===null&&ai.shift();
    if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(l=0;
    l<n.length;
      l+=3){
      var r=n[l],u=n[l+1],h=r[Se]||null;
      if(typeof u=="function")h||jp(n);
        else if(h){
        var g=null;
          if(u&&u.hasAttribute("formAction")){
          if(r=u,h=u[Se]||null)g=h.formAction;
          else if(Pu(r)!==null)continue
        }
        else g=h.action;
        typeof g=="function"?n[l+1]=g:(n.splice(l,3),l-=3),jp(n)
      }
    }
  }
    function Np(){
      function t(u){
        u.canIntercept&&u.info==="react-transition"&&u.intercept({
          handler:function(){
            return new Promise(function(h){
            return r=h
          }
          )
        }
        ,focusReset:"manual",scroll:"manual"
      }
      )
    }
      function e(){
      r!==null&&(r(),r=null),l||setTimeout(n,20)
    }
      function n(){
        if(!l&&!navigation.transition){
        var u=navigation.currentEntry;
          u&&u.url!=null&&navigation.navigate(u.url,{
          state:u.getState(),info:"react-transition",history:"replace"
        }
        )
      }
    }
      if(typeof navigation=="object"){
      var l=!1,r=null;
      return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",
        e),setTimeout(n,100),function(){
        l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",
        e),r!==null&&(r(),r=null)
      }
    }
  }
    function $u(t){
    this._internalRoot=t
  }
    lo.prototype.render=$u.prototype.render=function(t){
    var e=this._internalRoot;
    if(e===null)throw Error(o(409));
    var n=e.current,l=ke();
    Tp(n,l,t,e,null,null)
  }
    ,lo.prototype.unmount=$u.prototype.unmount=function(){
    var t=this._internalRoot;
      if(t!==null){
      this._internalRoot=null;
      var e=t.containerInfo;
      Tp(t.current,2,null,t,null,null),Hs(),e[_i]=null
    }
  }
  ;
    function lo(t){
    this._internalRoot=t
  }
    lo.prototype.unstable_scheduleHydration=function(t){
      if(t){
      var e=Gf();
        t={
        blockedOn:null,target:t,priority:e
      }
      ;
      for(var n=0;
      n<ai.length&&e!==0&&e<ai[n].priority;
      n++);
      ai.splice(n,0,t),n===0&&zp(t)
    }
  }
  ;
  var Rp=a.version;
  if(Rp!=="19.2.6")throw Error(o(527,Rp,"19.2.6"));
    K.findDOMNode=function(t){
    var e=t._reactInternals;
    if(e===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));
    return t=p(e),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t
  }
  ;
    var jb={
    bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.6"
  }
  ;
    if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){
    var so=__REACT_DEVTOOLS_GLOBAL_HOOK__;
      if(!so.isDisabled&&so.supportsFiber)try{
      Ra=so.inject(jb),Re=so
    }
      catch{
    }
  }
    return Ml.createRoot=function(t,e){
    if(!c(t))throw Error(o(299));
    var n=!1,l="",r=Hh,u=kh,h=Gh;
    return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(r=e.onUncaughtError),
    e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(h=e.onRecoverableError)),e=xp(t,1,!1,null,null,
    n,l,null,r,u,h,Np),t[_i]=e.current,Vu(t),new $u(e)
  }
    ,Ml.hydrateRoot=function(t,e,n){
    if(!c(t))throw Error(o(299));
    var l=!1,r="",u=Hh,h=kh,g=Gh,T=null;
    return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),
    n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.formState!==void 0&&(T=n.formState)),
    e=xp(t,1,!0,e,n??null,l,r,T,u,h,g,Np),e.context=Sp(null),n=e.current,l=ke(),l=qo(l),r=Yn(l),r.callback=null,Xn(n,r,l),n=l,
    e.current.lanes=n,Oa(e,n),dn(e),t[_i]=e.current,Vu(t),new lo(e)
  }
  ,Ml.version="19.2.6",Ml
}
var qp;
  function kb(){
  if(qp)return ec.exports;
  qp=1;
    function i(){
      if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
    }
      catch(a){
      console.error(a)
    }
  }
  return i(),ec.exports=Hb(),ec.exports
}
var Gb=kb();
  const nf=k.createContext({
}
);
  function oi(i){
  const a=k.useRef(null);
  return a.current===null&&(a.current=i()),a.current
}
const qb=typeof window<"u",Vo=qb?k.useLayoutEffect:k.useEffect,Oo=k.createContext(null);
  function af(i,a){
  i.indexOf(a)===-1&&i.push(a)
}
  function To(i,a){
  const s=i.indexOf(a);
  s>-1&&i.splice(s,1)
}
const rn=(i,a,s)=>s>a?a:s<i?i:s;
  let lf=()=>{
}
;
  const ri={
}
,xy=i=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i),Sy=i=>typeof i=="object"&&i!==null,Ty=i=>/^0[^.\s]+$/u.test(i);
  function Ay(i){
  let a;
  return()=>(a===void 0&&(a=i()),a)
}
  const Ce=i=>i,Hl=(...i)=>i.reduce((a,s)=>o=>s(a(o))),Ma=(i,a,s)=>{
  const o=a-i;
  return o?(s-i)/o:1
}
;
  class sf{
    constructor(){
    this.subscriptions=[]
  }
    add(a){
    return af(this.subscriptions,a),()=>To(this.subscriptions,a)
  }
    notify(a,s,o){
    const c=this.subscriptions.length;
    if(c)if(c===1)this.subscriptions[0](a,s,o);
    else for(let d=0;
    d<c;
      d++){
      const f=this.subscriptions[d];
      f&&f(a,s,o)
    }
  }
    getSize(){
    return this.subscriptions.length
  }
    clear(){
    this.subscriptions.length=0
  }
}
const Ge=i=>i*1e3,$e=i=>i/1e3,of=(i,a)=>a?i*(1e3/a):0,Ey=(i,a,s)=>(((1-3*s+3*a)*i+(3*s-6*a))*i+3*a)*i,Yb=1e-7,Xb=12;
  function Kb(i,a,s,o,c){
  let d,f,m=0;
  do f=a+(s-a)/2,d=Ey(f,o,c)-i,d>0?s=f:a=f;
  while(Math.abs(d)>Yb&&++m<Xb);
  return f
}
  function kl(i,a,s,o){
  if(i===a&&s===o)return Ce;
  const c=d=>Kb(d,0,1,i,s);
  return d=>d===0||d===1?d:Ey(c(d),a,o)
}
const My=i=>a=>a<=.5?i(2*a)/2:(2-i(2*(1-a)))/2,Dy=i=>a=>1-i(1-a),wy=kl(.33,1.53,.69,.99),rf=Dy(wy),zy=My(rf),Cy=i=>i>=1?1:(i*=2)<1?.5*rf(i):.5*(2-Math.pow(2,
-10*(i-1))),uf=i=>1-Math.sin(Math.acos(i)),jy=Dy(uf),Ny=My(uf),Zb=kl(.42,0,1,1),Qb=kl(0,0,.58,1),Ry=kl(.42,0,.58,1),Jb=i=>Array.isArray(i)&&typeof i[0]!="number",
  Vy=i=>Array.isArray(i)&&typeof i[0]=="number",Fb={
  linear:Ce,easeIn:Zb,easeInOut:Ry,easeOut:Qb,circIn:uf,circInOut:Ny,circOut:jy,backIn:rf,backInOut:zy,backOut:wy,anticipate:Cy
}
  ,Pb=i=>typeof i=="string",Yp=i=>{
    if(Vy(i)){
    lf(i.length===4);
    const[a,s,o,c]=i;
    return kl(a,s,o,c)
  }
  else if(Pb(i))return Fb[i];
  return i
}
,oo=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];
  function Wb(i,a){
  let s=new Set,o=new Set,c=!1,d=!1;
  const f=new WeakSet;
    let m={
    delta:0,timestamp:0,isProcessing:!1
  }
  ;
    function y(v){
    f.has(v)&&(p.schedule(v),i()),v(m)
  }
    const p={
      schedule:(v,b=!1,x=!1)=>{
      const N=x&&c?s:o;
      return b&&f.add(v),N.add(v),v
    }
      ,cancel:v=>{
      o.delete(v),f.delete(v)
    }
      ,process:v=>{
        if(m=v,c){
        d=!0;
        return
      }
      c=!0;
      const b=s;
      s=o,o=b,s.forEach(y),s.clear(),c=!1,d&&(d=!1,p.process(v))
    }
  }
  ;
  return p
}
const $b=40;
  function Oy(i,a){
  let s=!1,o=!0;
    const c={
    delta:0,timestamp:0,isProcessing:!1
  }
    ,d=()=>s=!0,f=oo.reduce((G,q)=>(G[q]=Wb(d),G),{
  }
    ),{
    setup:m,read:y,resolveKeyframes:p,preUpdate:v,update:b,preRender:x,render:w,postRender:N
  }
    =f,D=()=>{
    const G=ri.useManualTiming,q=G?c.timestamp:performance.now();
    s=!1,G||(c.delta=o?1e3/60:Math.max(Math.min(q-c.timestamp,$b),1)),c.timestamp=q,c.isProcessing=!0,m.process(c),y.process(c),
    p.process(c),v.process(c),b.process(c),x.process(c),w.process(c),N.process(c),c.isProcessing=!1,s&&a&&(o=!1,i(D))
  }
    ,B=()=>{
    s=!0,o=!0,c.isProcessing||i(D)
  }
  ;
    return{
      schedule:oo.reduce((G,q)=>{
      const et=f[q];
      return G[q]=(it,J=!1,P=!1)=>(s||B(),et.schedule(it,J,P)),G
    }
      ,{
    }
      ),cancel:G=>{
      for(let q=0;
      q<oo.length;
      q++)f[oo[q]].cancel(G)
    }
    ,state:c,steps:f
  }
}
  const{
  schedule:St,cancel:Ie,state:re,steps:lc
}
=Oy(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ce,!0);
let mo;
  function Ib(){
  mo=void 0
}
  const be={
    now:()=>(mo===void 0&&be.set(re.isProcessing||ri.useManualTiming?re.timestamp:performance.now()),mo),set:i=>{
    mo=i,queueMicrotask(Ib)
  }
}
,_y=i=>a=>typeof a=="string"&&a.startsWith(i),By=_y("--"),tx=_y("var(--"),cf=i=>tx(i)?ex.test(i.split("/*")[0].trim()):!1,
ex=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
  function Xp(i){
  return typeof i!="string"?!1:i.split("/*")[0].includes("var(--")
}
  const za={
  test:i=>typeof i=="number",parse:parseFloat,transform:i=>i
}
  ,_l={
  ...za,transform:i=>rn(0,1,i)
}
  ,ro={
  ...za,default:1
}
,Cl=i=>Math.round(i*1e5)/1e5,ff=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
  function nx(i){
  return i==null
}
const ix=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
df=(i,a)=>s=>!!(typeof s=="string"&&ix.test(s)&&s.startsWith(i)||a&&!nx(s)&&Object.prototype.hasOwnProperty.call(s,a)),Uy=(i,
  a,s)=>o=>{
  if(typeof o!="string")return o;
  const[c,d,f,m]=o.match(ff);
    return{
    [i]:parseFloat(c),[a]:parseFloat(d),[s]:parseFloat(f),alpha:m!==void 0?parseFloat(m):1
  }
}
  ,ax=i=>rn(0,255,i),sc={
  ...za,transform:i=>Math.round(ax(i))
}
  ,Ni={
    test:df("rgb","red"),parse:Uy("red","green","blue"),transform:({
    red:i,green:a,blue:s,alpha:o=1
  }
  )=>"rgba("+sc.transform(i)+", "+sc.transform(a)+", "+sc.transform(s)+", "+Cl(_l.transform(o))+")"
}
;
  function lx(i){
  let a="",s="",o="",c="";
  return i.length>5?(a=i.substring(1,3),s=i.substring(3,5),o=i.substring(5,7),c=i.substring(7,9)):(a=i.substring(1,2),s=i.substring(2,
    3),o=i.substring(3,4),c=i.substring(4,5),a+=a,s+=s,o+=o,c+=c),{
    red:parseInt(a,16),green:parseInt(s,16),blue:parseInt(o,16),alpha:c?parseInt(c,16)/255:1
  }
}
  const Dc={
  test:df("#"),parse:lx,transform:Ni.transform
}
  ,Gl=i=>({
  test:a=>typeof a=="string"&&a.endsWith(i)&&a.split(" ").length===1,parse:parseFloat,transform:a=>`${a}${i}`
}
  ),On=Gl("deg"),pn=Gl("%"),$=Gl("px"),sx=Gl("vh"),ox=Gl("vw"),Kp={
  ...pn,parse:i=>pn.parse(i)/100,transform:i=>pn.transform(i*100)
}
  ,Sa={
    test:df("hsl","hue"),parse:Uy("hue","saturation","lightness"),transform:({
    hue:i,saturation:a,lightness:s,alpha:o=1
  }
  )=>"hsla("+Math.round(i)+", "+pn.transform(Cl(a))+", "+pn.transform(Cl(s))+", "+Cl(_l.transform(o))+")"
}
  ,te={
  test:i=>Ni.test(i)||Dc.test(i)||Sa.test(i),parse:i=>Ni.test(i)?Ni.parse(i):Sa.test(i)?Sa.parse(i):Dc.parse(i),transform:i=>typeof i=="string"?i:i.hasOwnProperty("red")?Ni.transform(i):Sa.transform(i),
    getAnimatableNone:i=>{
    const a=te.parse(i);
    return a.alpha=0,te.transform(a)
  }
}
,rx=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
  function ux(i){
  return isNaN(i)&&typeof i=="string"&&(i.match(ff)?.length||0)+(i.match(rx)?.length||0)>0
}
const Ly="number",Hy="color",cx="var",fx="var(",Zp="${}",dx=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
  function Da(i){
    const a=i.toString(),s=[],o={
    color:[],number:[],var:[]
  }
  ,c=[];
  let d=0;
  const m=a.replace(dx,y=>(te.test(y)?(o.color.push(d),c.push(Hy),s.push(te.parse(y))):y.startsWith(fx)?(o.var.push(d),c.push(cx),
  s.push(y)):(o.number.push(d),c.push(Ly),s.push(parseFloat(y))),++d,Zp)).split(Zp);
    return{
    values:s,split:m,indexes:o,types:c
  }
}
  function hx(i){
  return Da(i).values
}
  function ky({
  split:i,types:a
}
  ){
  const s=i.length;
    return o=>{
    let c="";
    for(let d=0;
    d<s;
      d++)if(c+=i[d],o[d]!==void 0){
      const f=a[d];
      f===Ly?c+=Cl(o[d]):f===Hy?c+=te.transform(o[d]):c+=o[d]
    }
    return c
  }
}
  function mx(i){
  return ky(Da(i))
}
const px=i=>typeof i=="number"?0:te.test(i)?te.getAnimatableNone(i):i,yx=(i,a)=>typeof i=="number"?a?.trim().endsWith("/")?i:0:px(i);
  function gx(i){
  const a=Da(i);
  return ky(a)(a.values.map((o,c)=>yx(o,a.split[c])))
}
  const on={
  test:ux,parse:hx,createTransformer:mx,getAnimatableNone:gx
}
;
  function oc(i,a,s){
  return s<0&&(s+=1),s>1&&(s-=1),s<1/6?i+(a-i)*6*s:s<1/2?a:s<2/3?i+(a-i)*(2/3-s)*6:i
}
  function vx({
  hue:i,saturation:a,lightness:s,alpha:o
}
  ){
  i/=360,a/=100,s/=100;
  let c=0,d=0,f=0;
  if(!a)c=d=f=s;
    else{
    const m=s<.5?s*(1+a):s+a-s*a,y=2*s-m;
    c=oc(y,m,i+1/3),d=oc(y,m,i),f=oc(y,m,i-1/3)
  }
    return{
    red:Math.round(c*255),green:Math.round(d*255),blue:Math.round(f*255),alpha:o
  }
}
  function Ao(i,a){
  return s=>s>0?a:i
}
  const Vt=(i,a,s)=>i+(a-i)*s,rc=(i,a,s)=>{
  const o=i*i,c=s*(a*a-o)+o;
  return c<0?0:Math.sqrt(c)
}
,bx=[Dc,Ni,Sa],xx=i=>bx.find(a=>a.test(i));
  function Qp(i){
  const a=xx(i);
  if(!a)return!1;
  let s=a.parse(i);
  return a===Sa&&(s=vx(s)),s
}
  const Jp=(i,a)=>{
  const s=Qp(i),o=Qp(a);
  if(!s||!o)return Ao(i,a);
    const c={
    ...s
  }
  ;
  return d=>(c.red=rc(s.red,o.red,d),c.green=rc(s.green,o.green,d),c.blue=rc(s.blue,o.blue,d),c.alpha=Vt(s.alpha,o.alpha,d),
  Ni.transform(c))
}
,wc=new Set(["none","hidden"]);
  function Sx(i,a){
  return wc.has(i)?s=>s<=0?i:a:s=>s>=1?a:i
}
  function Tx(i,a){
  return s=>Vt(i,a,s)
}
  function hf(i){
  return typeof i=="number"?Tx:typeof i=="string"?cf(i)?Ao:te.test(i)?Jp:Mx:Array.isArray(i)?Gy:typeof i=="object"?te.test(i)?Jp:Ax:Ao
}
  function Gy(i,a){
  const s=[...i],o=s.length,c=i.map((d,f)=>hf(d)(d,a[f]));
    return d=>{
    for(let f=0;
    f<o;
    f++)s[f]=c[f](d);
    return s
  }
}
  function Ax(i,a){
    const s={
    ...i,...a
  }
    ,o={
  }
  ;
  for(const c in s)i[c]!==void 0&&a[c]!==void 0&&(o[c]=hf(i[c])(i[c],a[c]));
    return c=>{
    for(const d in o)s[d]=o[d](c);
    return s
  }
}
  function Ex(i,a){
    const s=[],o={
    color:0,var:0,number:0
  }
  ;
  for(let c=0;
  c<a.values.length;
    c++){
    const d=a.types[c],f=i.indexes[d][o[d]],m=i.values[f]??0;
    s[c]=m,o[d]++
  }
  return s
}
  const Mx=(i,a)=>{
  const s=on.createTransformer(a),o=Da(i),c=Da(a);
  return o.indexes.var.length===c.indexes.var.length&&o.indexes.color.length===c.indexes.color.length&&o.indexes.number.length>=c.indexes.number.length?wc.has(i)&&!c.values.length||wc.has(a)&&!o.values.length?Sx(i,
  a):Hl(Gy(Ex(o,c),c.values),s):Ao(i,a)
}
;
  function qy(i,a,s){
  return typeof i=="number"&&typeof a=="number"&&typeof s=="number"?Vt(i,a,s):hf(i)(i,a)
}
  const Dx=i=>{
    const a=({
    timestamp:s
  }
  )=>i(s);
    return{
    start:(s=!0)=>St.update(a,s),stop:()=>Ie(a),now:()=>re.isProcessing?re.timestamp:be.now()
  }
}
  ,Yy=(i,a,s=10)=>{
  let o="";
  const c=Math.max(Math.round(a/s),2);
  for(let d=0;
  d<c;
  d++)o+=Math.round(i(d/(c-1))*1e4)/1e4+", ";
  return`linear(${o.substring(0,o.length-2)})`
}
,Eo=2e4;
  function mf(i){
  let a=0;
  const s=50;
  let o=i.next(a);
  for(;
  !o.done&&a<Eo;
  )a+=s,o=i.next(a);
  return a>=Eo?1/0:a
}
  function wx(i,a=100,s){
    const o=s({
    ...i,keyframes:[0,a]
  }
  ),c=Math.min(mf(o),Eo);
    return{
    type:"keyframes",ease:d=>o.next(c*d).value/a,duration:$e(c)
  }
}
  const Xt={
    stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{
    granular:.01,default:2
  }
    ,restDelta:{
    granular:.005,default:.5
  }
  ,minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1
}
;
  function zc(i,a){
  return i*Math.sqrt(1-a*a)
}
const zx=12;
  function Cx(i,a,s){
  let o=s;
  for(let c=1;
  c<zx;
  c++)o=o-i(o)/a(o);
  return o
}
const uc=.001;
  function jx({
  duration:i=Xt.duration,bounce:a=Xt.bounce,velocity:s=Xt.velocity,mass:o=Xt.mass
}
  ){
  let c,d,f=1-a;
    f=rn(Xt.minDamping,Xt.maxDamping,f),i=rn(Xt.minDuration,Xt.maxDuration,$e(i)),f<1?(c=p=>{
    const v=p*f,b=v*i,x=v-s,w=zc(p,f),N=Math.exp(-b);
    return uc-x/w*N
  }
    ,d=p=>{
    const b=p*f*i,x=b*s+s,w=Math.pow(f,2)*Math.pow(p,2)*i,N=Math.exp(-b),D=zc(Math.pow(p,2),f);
    return(-c(p)+uc>0?-1:1)*((x-w)*N)/D
  }
    ):(c=p=>{
    const v=Math.exp(-p*i),b=(p-s)*i+1;
    return-uc+v*b
  }
    ,d=p=>{
    const v=Math.exp(-p*i),b=(s-p)*(i*i);
    return v*b
  }
  );
  const m=5/i,y=Cx(c,d,m);
    if(i=Ge(i),isNaN(y))return{
    stiffness:Xt.stiffness,damping:Xt.damping,duration:i
  }
  ;
    {
    const p=Math.pow(y,2)*o;
      return{
      stiffness:p,damping:f*2*Math.sqrt(o*p),duration:i
    }
  }
}
const Nx=["duration","bounce"],Rx=["stiffness","damping","mass"];
  function Fp(i,a){
  return a.some(s=>i[s]!==void 0)
}
  function Vx(i){
    let a={
    velocity:Xt.velocity,stiffness:Xt.stiffness,damping:Xt.damping,mass:Xt.mass,isResolvedFromDuration:!1,...i
  }
  ;
    if(!Fp(i,Rx)&&Fp(i,Nx))if(a.velocity=0,i.visualDuration){
    const s=i.visualDuration,o=2*Math.PI/(s*1.2),c=o*o,d=2*rn(.05,1,1-(i.bounce||0))*Math.sqrt(c);
      a={
      ...a,mass:Xt.mass,stiffness:c,damping:d
    }
  }
    else{
      const s=jx({
      ...i,velocity:0
    }
    );
      a={
      ...a,...s,mass:Xt.mass
    }
    ,a.isResolvedFromDuration=!0
  }
  return a
}
  function Mo(i=Xt.visualDuration,a=Xt.bounce){
    const s=typeof i!="object"?{
    visualDuration:i,keyframes:[0,1],bounce:a
  }
  :i;
    let{
    restSpeed:o,restDelta:c
  }
  =s;
    const d=s.keyframes[0],f=s.keyframes[s.keyframes.length-1],m={
    done:!1,value:d
  }
    ,{
    stiffness:y,damping:p,mass:v,duration:b,velocity:x,isResolvedFromDuration:w
  }
    =Vx({
    ...s,velocity:-$e(s.velocity||0)
  }
  ),N=x||0,D=p/(2*Math.sqrt(y*v)),B=f-d,H=$e(Math.sqrt(y/v)),Y=Math.abs(B)<5;
  o||(o=Y?Xt.restSpeed.granular:Xt.restSpeed.default),c||(c=Y?Xt.restDelta.granular:Xt.restDelta.default);
  let G,q,et,it,J,P;
    if(D<1)et=zc(H,D),it=(N+D*H*B)/et,G=tt=>{
    const mt=Math.exp(-D*H*tt);
    return f-mt*(it*Math.sin(et*tt)+B*Math.cos(et*tt))
  }
  ,J=D*H*it+B*et,P=D*H*B-it*et,q=tt=>Math.exp(-D*H*tt)*(J*Math.sin(et*tt)+P*Math.cos(et*tt));
    else if(D===1){
    G=mt=>f-Math.exp(-H*mt)*(B+(N+H*B)*mt);
    const tt=N+H*B;
    q=mt=>Math.exp(-H*mt)*(H*tt*mt-N)
  }
    else{
    const tt=H*Math.sqrt(D*D-1);
      G=kt=>{
      const Ut=Math.exp(-D*H*kt),R=Math.min(tt*kt,300);
      return f-Ut*((N+D*H*B)*Math.sinh(R)+tt*B*Math.cosh(R))/tt
    }
    ;
    const mt=(N+D*H*B)/tt,xt=D*H*mt-B*tt,Ft=D*H*B-mt*tt;
      q=kt=>{
      const Ut=Math.exp(-D*H*kt),R=Math.min(tt*kt,300);
      return Ut*(xt*Math.sinh(R)+Ft*Math.cosh(R))
    }
  }
    const lt={
      calculatedDuration:w&&b||null,velocity:tt=>Ge(q(tt)),next:tt=>{
        if(!w&&D<1){
        const xt=Math.exp(-D*H*tt),Ft=Math.sin(et*tt),kt=Math.cos(et*tt),Ut=f-xt*(it*Ft+B*kt),R=Ge(xt*(J*Ft+P*kt));
        return m.done=Math.abs(R)<=o&&Math.abs(f-Ut)<=c,m.value=m.done?f:Ut,m
      }
      const mt=G(tt);
      if(w)m.done=tt>=b;
        else{
        const xt=Ge(q(tt));
        m.done=Math.abs(xt)<=o&&Math.abs(f-mt)<=c
      }
      return m.value=m.done?f:mt,m
    }
      ,toString:()=>{
      const tt=Math.min(mf(lt),Eo),mt=Yy(xt=>lt.next(tt*xt).value,tt,30);
      return tt+"ms "+mt
    }
      ,toTransition:()=>{
    }
  }
  ;
  return lt
}
  Mo.applyToOptions=i=>{
  const a=wx(i,100,Mo);
  return i.ease=a.ease,i.duration=Ge(a.duration),i.type="keyframes",i
}
;
const Ox=5;
  function Xy(i,a,s){
  const o=Math.max(a-Ox,0);
  return of(s-i(o),a-o)
}
  function Cc({
  keyframes:i,velocity:a=0,power:s=.8,timeConstant:o=325,bounceDamping:c=10,bounceStiffness:d=500,modifyTarget:f,min:m,max:y,
  restDelta:p=.5,restSpeed:v
}
  ){
    const b=i[0],x={
    done:!1,value:b
  }
  ,w=P=>m!==void 0&&P<m||y!==void 0&&P>y,N=P=>m===void 0?y:y===void 0||Math.abs(m-P)<Math.abs(y-P)?m:y;
  let D=s*a;
  const B=b+D,H=f===void 0?B:f(B);
  H!==B&&(D=H-b);
    const Y=P=>-D*Math.exp(-P/o),G=P=>H+Y(P),q=P=>{
    const lt=Y(P),tt=G(P);
    x.done=Math.abs(lt)<=p,x.value=x.done?H:tt
  }
  ;
  let et,it;
    const J=P=>{
      w(x.value)&&(et=P,it=Mo({
      keyframes:[x.value,N(x.value)],velocity:Xy(G,P,x.value),damping:c,stiffness:d,restDelta:p,restSpeed:v
    }
    ))
  }
  ;
    return J(0),{
      calculatedDuration:null,next:P=>{
      let lt=!1;
      return!it&&et===void 0&&(lt=!0,q(P),J(P)),et!==void 0&&P>=et?it.next(P-et):(!lt&&q(P),x)
    }
  }
}
  function _x(i,a,s){
  const o=[],c=s||ri.mix||qy,d=i.length-1;
  for(let f=0;
  f<d;
    f++){
    let m=c(i[f],i[f+1]);
      if(a){
      const y=Array.isArray(a)?a[f]||Ce:a;
      m=Hl(y,m)
    }
    o.push(m)
  }
  return o
}
  function pf(i,a,{
  clamp:s=!0,ease:o,mixer:c
}
  ={
}
  ){
  const d=i.length;
  if(lf(d===a.length),d===1)return()=>a[0];
  if(d===2&&a[0]===a[1])return()=>a[1];
  const f=i[0]===i[1];
  i[0]>i[d-1]&&(i=[...i].reverse(),a=[...a].reverse());
    const m=_x(a,o,c),y=m.length,p=v=>{
    if(f&&v<i[0])return a[0];
    let b=0;
    if(y>1)for(;
    b<i.length-2&&!(v<i[b+1]);
    b++);
    const x=Ma(i[b],i[b+1],v);
    return m[b](x)
  }
  ;
  return s?v=>p(rn(i[0],i[d-1],v)):p
}
  function Bx(i,a){
  const s=i[i.length-1];
  for(let o=1;
  o<=a;
    o++){
    const c=Ma(0,a,o);
    i.push(Vt(s,1,c))
  }
}
  function Ky(i){
  const a=[0];
  return Bx(a,i.length-1),a
}
  function Ux(i,a){
  return i.map(s=>s*a)
}
  function Lx(i,a){
  return i.map(()=>a||Ry).splice(0,i.length-1)
}
  function jl({
  duration:i=300,keyframes:a,times:s,ease:o="easeInOut"
}
  ){
    const c=Jb(o)?o.map(Yp):Yp(o),d={
    done:!1,value:a[0]
  }
    ,f=Ux(s&&s.length===a.length?s:Ky(a),i),m=pf(f,a,{
    ease:Array.isArray(c)?c:Lx(a,c)
  }
  );
    return{
    calculatedDuration:i,next:y=>(d.value=m(y),d.done=y>=i,d)
  }
}
const Hx=i=>i!==null;
  function _o(i,{
  repeat:a,repeatType:s="loop"
}
  ,o,c=1){
  const d=i.filter(Hx),m=c<0||a&&s!=="loop"&&a%2===1?0:d.length-1;
  return!m||o===void 0?d[m]:o
}
  const kx={
  decay:Cc,inertia:Cc,tween:jl,keyframes:jl,spring:Mo
}
;
  function Zy(i){
  typeof i.type=="string"&&(i.type=kx[i.type])
}
  class yf{
    constructor(){
    this.updateFinished()
  }
    get finished(){
    return this._finished
  }
    updateFinished(){
      this._finished=new Promise(a=>{
      this.resolve=a
    }
    )
  }
    notifyFinished(){
    this.resolve()
  }
    then(a,s){
    return this.finished.then(a,s)
  }
}
const Gx=i=>i/100;
  class Bl extends yf{
    constructor(a){
    super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,
      this.delayState={
      done:!1,value:void 0
    }
      ,this.stop=()=>{
        const{
        motionValue:s
      }
      =this.options;
      s&&s.updatedAt!==be.now()&&this.tick(be.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())
    }
    ,this.options=a,this.initAnimation(),this.play(),a.autoplay===!1&&this.pause()
  }
    initAnimation(){
      const{
      options:a
    }
    =this;
    Zy(a);
      const{
      type:s=jl,repeat:o=0,repeatDelay:c=0,repeatType:d,velocity:f=0
    }
    =a;
      let{
      keyframes:m
    }
    =a;
    const y=s||jl;
    y!==jl&&typeof m[0]!="number"&&(this.mixKeyframes=Hl(Gx,qy(m[0],m[1])),m=[0,100]);
      const p=y({
      ...a,keyframes:m
    }
    );
      d==="mirror"&&(this.mirroredGenerator=y({
      ...a,keyframes:[...m].reverse(),velocity:-f
    }
    )),p.calculatedDuration===null&&(p.calculatedDuration=mf(p));
      const{
      calculatedDuration:v
    }
    =p;
    this.calculatedDuration=v,this.resolvedDuration=v+c,this.totalDuration=this.resolvedDuration*(o+1)-c,this.generator=p
  }
    updateTime(a){
    const s=Math.round(a-this.startTime)*this.playbackSpeed;
    this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=s
  }
    tick(a,s=!1){
      const{
      generator:o,totalDuration:c,mixKeyframes:d,mirroredGenerator:f,resolvedDuration:m,calculatedDuration:y
    }
    =this;
    if(this.startTime===null)return o.next(0);
      const{
      delay:p=0,keyframes:v,repeat:b,repeatType:x,repeatDelay:w,type:N,onUpdate:D,finalKeyframe:B
    }
    =this.options;
    this.speed>0?this.startTime=Math.min(this.startTime,a):this.speed<0&&(this.startTime=Math.min(a-c/this.speed,this.startTime)),
    s?this.currentTime=a:this.updateTime(a);
    const H=this.currentTime-p*(this.playbackSpeed>=0?1:-1),Y=this.playbackSpeed>=0?H<0:H>c;
    this.currentTime=Math.max(H,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);
    let G=this.currentTime,q=o;
      if(b){
      const P=Math.min(this.currentTime,c)/m;
      let lt=Math.floor(P),tt=P%1;
      !tt&&P>=1&&(tt=1),tt===1&&lt--,lt=Math.min(lt,b+1),lt%2&&(x==="reverse"?(tt=1-tt,w&&(tt-=w/m)):x==="mirror"&&(q=f)),G=rn(0,
      1,tt)*m
    }
    let et;
    Y?(this.delayState.value=v[0],et=this.delayState):et=q.next(G),d&&!Y&&(et.value=d(et.value));
      let{
      done:it
    }
    =et;
    !Y&&y!==null&&(it=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);
    const J=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&it);
    return J&&N!==Cc&&(et.value=_o(v,this.options,B,this.speed)),D&&D(et.value),J&&this.finish(),et
  }
    then(a,s){
    return this.finished.then(a,s)
  }
    get duration(){
    return $e(this.calculatedDuration)
  }
    get iterationDuration(){
      const{
      delay:a=0
    }
      =this.options||{
    }
    ;
    return this.duration+$e(a)
  }
    get time(){
    return $e(this.currentTime)
  }
    set time(a){
    a=Ge(a),this.currentTime=a,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=a:this.driver&&(this.startTime=this.driver.now()-a/this.playbackSpeed),
    this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=a,this.tick(a))
  }
    getGeneratorVelocity(){
    const a=this.currentTime;
    if(a<=0)return this.options.velocity||0;
    if(this.generator.velocity)return this.generator.velocity(a);
    const s=this.generator.next(a).value;
    return Xy(o=>this.generator.next(o).value,a,s)
  }
    get speed(){
    return this.playbackSpeed
  }
    set speed(a){
    const s=this.playbackSpeed!==a;
    s&&this.driver&&this.updateTime(be.now()),this.playbackSpeed=a,s&&this.driver&&(this.time=$e(this.currentTime))
  }
    play(){
    if(this.isStopped)return;
      const{
      driver:a=Dx,startTime:s
    }
    =this.options;
    this.driver||(this.driver=a(c=>this.tick(c))),this.options.onPlay?.();
    const o=this.driver.now();
    this.state==="finished"?(this.updateFinished(),this.startTime=o):this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime||(this.startTime=s??o),
    this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",
    this.driver.start()
  }
    pause(){
    this.state="paused",this.updateTime(be.now()),this.holdTime=this.currentTime
  }
    complete(){
    this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null
  }
    finish(){
    this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()
  }
    cancel(){
    this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()
  }
    teardown(){
    this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null
  }
    stopDriver(){
    this.driver&&(this.driver.stop(),this.driver=void 0)
  }
    sample(a){
    return this.startTime=0,this.tick(a,!0)
  }
    attachTimeline(a){
    return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),
    a.observe(this)
  }
}
  function qx(i){
  for(let a=1;
  a<i.length;
  a++)i[a]??(i[a]=i[a-1])
}
  const Ri=i=>i*180/Math.PI,jc=i=>{
  const a=Ri(Math.atan2(i[1],i[0]));
  return Nc(a)
}
  ,Yx={
  x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:i=>(Math.abs(i[0])+Math.abs(i[3]))/2,rotate:jc,rotateZ:jc,skewX:i=>Ri(Math.atan(i[1])),
  skewY:i=>Ri(Math.atan(i[2])),skew:i=>(Math.abs(i[1])+Math.abs(i[2]))/2
}
  ,Nc=i=>(i=i%360,i<0&&(i+=360),i),Pp=jc,Wp=i=>Math.sqrt(i[0]*i[0]+i[1]*i[1]),$p=i=>Math.sqrt(i[4]*i[4]+i[5]*i[5]),Xx={
  x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Wp,scaleY:$p,scale:i=>(Wp(i)+$p(i))/2,rotateX:i=>Nc(Ri(Math.atan2(i[6],
  i[5]))),rotateY:i=>Nc(Ri(Math.atan2(-i[2],i[0]))),rotateZ:Pp,rotate:Pp,skewX:i=>Ri(Math.atan(i[4])),skewY:i=>Ri(Math.atan(i[1])),
  skew:i=>(Math.abs(i[1])+Math.abs(i[4]))/2
}
;
  function Rc(i){
  return i.includes("scale")?1:0
}
  function Vc(i,a){
  if(!i||i==="none")return Rc(a);
  const s=i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let o,c;
  if(s)o=Xx,c=s;
    else{
    const m=i.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    o=Yx,c=m
  }
  if(!c)return Rc(a);
  const d=o[a],f=c[1].split(",").map(Zx);
  return typeof d=="function"?d(f):f[d]
}
  const Kx=(i,a)=>{
    const{
    transform:s="none"
  }
  =getComputedStyle(i);
  return Vc(s,a)
}
;
  function Zx(i){
  return parseFloat(i.trim())
}
const Ca=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX",
"rotateY","rotateZ","skew","skewX","skewY"],ja=new Set([...Ca,"pathRotation"]),Ip=i=>i===za||i===$,Qx=new Set(["x","y","z"]),
Jx=Ca.filter(i=>!Qx.has(i));
  function Fx(i){
  const a=[];
    return Jx.forEach(s=>{
    const o=i.getValue(s);
    o!==void 0&&(a.push([s,o.get()]),o.set(s.startsWith("scale")?1:0))
  }
  ),a
}
  const si={
    width:({
    x:i
  }
    ,{
    paddingLeft:a="0",paddingRight:s="0",boxSizing:o
  }
    )=>{
    const c=i.max-i.min;
    return o==="border-box"?c:c-parseFloat(a)-parseFloat(s)
  }
    ,height:({
    y:i
  }
    ,{
    paddingTop:a="0",paddingBottom:s="0",boxSizing:o
  }
    )=>{
    const c=i.max-i.min;
    return o==="border-box"?c:c-parseFloat(a)-parseFloat(s)
  }
    ,top:(i,{
    top:a
  }
    )=>parseFloat(a),left:(i,{
    left:a
  }
    )=>parseFloat(a),bottom:({
    y:i
  }
    ,{
    top:a
  }
    )=>parseFloat(a)+(i.max-i.min),right:({
    x:i
  }
    ,{
    left:a
  }
    )=>parseFloat(a)+(i.max-i.min),x:(i,{
    transform:a
  }
    )=>Vc(a,"x"),y:(i,{
    transform:a
  }
  )=>Vc(a,"y")
}
;
si.translateX=si.x;
si.translateY=si.y;
const Vi=new Set;
let Oc=!1,_c=!1,Bc=!1;
  function Qy(){
    if(_c){
    const i=Array.from(Vi).filter(o=>o.needsMeasurement),a=new Set(i.map(o=>o.element)),s=new Map;
      a.forEach(o=>{
      const c=Fx(o);
      c.length&&(s.set(o,c),o.render())
    }
      ),i.forEach(o=>o.measureInitialState()),a.forEach(o=>{
      o.render();
      const c=s.get(o);
        c&&c.forEach(([d,f])=>{
        o.getValue(d)?.set(f)
      }
      )
    }
      ),i.forEach(o=>o.measureEndState()),i.forEach(o=>{
      o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)
    }
    )
  }
  _c=!1,Oc=!1,Vi.forEach(i=>i.complete(Bc)),Vi.clear()
}
  function Jy(){
    Vi.forEach(i=>{
    i.readKeyframes(),i.needsMeasurement&&(_c=!0)
  }
  )
}
  function Px(){
  Bc=!0,Jy(),Qy(),Bc=!1
}
  class gf{
    constructor(a,s,o,c,d,f=!1){
    this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...a],this.onComplete=s,this.name=o,
    this.motionValue=c,this.element=d,this.isAsync=f
  }
    scheduleResolve(){
    this.state="scheduled",this.isAsync?(Vi.add(this),Oc||(Oc=!0,St.read(Jy),St.resolveKeyframes(Qy))):(this.readKeyframes(),
    this.complete())
  }
    readKeyframes(){
      const{
      unresolvedKeyframes:a,name:s,element:o,motionValue:c
    }
    =this;
      if(a[0]===null){
      const d=c?.get(),f=a[a.length-1];
      if(d!==void 0)a[0]=d;
        else if(o&&s){
        const m=o.readValue(s,f);
        m!=null&&(a[0]=m)
      }
      a[0]===void 0&&(a[0]=f),c&&d===void 0&&c.set(a[0])
    }
    qx(a)
  }
    setFinalKeyframe(){
  }
    measureInitialState(){
  }
    renderEndStyles(){
  }
    measureEndState(){
  }
    complete(a=!1){
    this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,a),Vi.delete(this)
  }
    cancel(){
    this.state==="scheduled"&&(Vi.delete(this),this.state="pending")
  }
    resume(){
    this.state==="pending"&&this.scheduleResolve()
  }
}
const Wx=i=>i.startsWith("--");
  function Fy(i,a,s){
  Wx(a)?i.style.setProperty(a,s):i.style[a]=s
}
  const $x={
}
;
  function vf(i,a){
  const s=Ay(i);
  return()=>$x[a]??s()
}
  const bf=vf(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Py=vf(()=>window.ViewTimeline!==void 0,"viewTimeline"),Wy=vf(()=>{
    try{
      document.createElement("div").animate({
      opacity:0
    }
      ,{
      easing:"linear(0, 1)"
    }
    )
  }
    catch{
    return!1
  }
  return!0
}
  ,"linearEasing"),wl=([i,a,s,o])=>`cubic-bezier(${i}, ${a}, ${s}, ${o})`,t0={
  linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:wl([0,.65,.55,1]),circOut:wl([.55,
  0,1,.45]),backIn:wl([.31,.01,.66,-.59]),backOut:wl([.33,1.53,.69,.99])
}
;
  function $y(i,a){
  if(i)return typeof i=="function"?Wy()?Yy(i,a):"ease-out":Vy(i)?wl(i):Array.isArray(i)?i.map(s=>$y(s,a)||t0.easeOut):t0[i]
}
  function Ix(i,a,s,{
  delay:o=0,duration:c=300,repeat:d=0,repeatType:f="loop",ease:m="easeOut",times:y
}
  ={
}
  ,p=void 0){
    const v={
    [a]:s
  }
  ;
  y&&(v.offset=y);
  const b=$y(m,c);
  Array.isArray(b)&&(v.easing=b);
    const x={
    delay:o,duration:c,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:d+1,direction:f==="reverse"?"alternate":"normal"
  }
  ;
  return p&&(x.pseudoElement=p),i.animate(v,x)
}
  function Iy(i){
  return typeof i=="function"&&"applyToOptions"in i
}
  function t2({
  type:i,...a
}
  ){
  return Iy(i)&&Wy()?i.applyToOptions(a):(a.duration??(a.duration=300),a.ease??(a.ease="easeOut"),a)
}
  class tg extends yf{
    constructor(a){
    if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!a)return;
      const{
      element:s,name:o,keyframes:c,pseudoElement:d,allowFlatten:f=!1,finalKeyframe:m,onComplete:y
    }
    =a;
    this.isPseudoElement=!!d,this.allowFlatten=f,this.options=a,lf(typeof a.type!="string");
    const p=t2(a);
      this.animation=Ix(s,o,c,p,d),p.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{
        if(this.finishedTime=this.time,!d){
        const v=_o(c,this.options,m,this.speed);
        this.updateMotionValue&&this.updateMotionValue(v),Fy(s,o,v),this.animation.cancel()
      }
      y?.(),this.notifyFinished()
    }
  }
    play(){
    this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())
  }
    pause(){
    this.animation.pause()
  }
    complete(){
    this.animation.finish?.()
  }
    cancel(){
      try{
      this.animation.cancel()
    }
      catch{
    }
  }
    stop(){
    if(this.isStopped)return;
    this.isStopped=!0;
      const{
      state:a
    }
    =this;
    a==="idle"||a==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())
  }
    commitStyles(){
    const a=this.options?.element;
    !this.isPseudoElement&&a?.isConnected&&this.animation.commitStyles?.()
  }
    get duration(){
    const a=this.animation.effect?.getComputedTiming?.().duration||0;
    return $e(Number(a))
  }
    get iterationDuration(){
      const{
      delay:a=0
    }
      =this.options||{
    }
    ;
    return this.duration+$e(a)
  }
    get time(){
    return $e(Number(this.animation.currentTime)||0)
  }
    set time(a){
    const s=this.finishedTime!==null;
    this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Ge(a),s&&this.animation.pause()
  }
    get speed(){
    return this.animation.playbackRate
  }
    set speed(a){
    a<0&&(this.finishedTime=null),this.animation.playbackRate=a
  }
    get state(){
    return this.finishedTime!==null?"finished":this.animation.playState
  }
    get startTime(){
    return this.manualStartTime??Number(this.animation.startTime)
  }
    set startTime(a){
    this.manualStartTime=this.animation.startTime=a
  }
    attachTimeline({
    timeline:a,rangeStart:s,rangeEnd:o,observe:c
  }
    ){
      return this.allowFlatten&&this.animation.effect?.updateTiming({
      easing:"linear"
    }
    ),this.animation.onfinish=null,a&&bf()?(this.animation.timeline=a,s&&(this.animation.rangeStart=s),o&&(this.animation.rangeEnd=o),
    Ce):c(this)
  }
}
  const eg={
  anticipate:Cy,backInOut:zy,circInOut:Ny
}
;
  function e2(i){
  return i in eg
}
  function n2(i){
  typeof i.ease=="string"&&e2(i.ease)&&(i.ease=eg[i.ease])
}
const cc=10;
  class i2 extends tg{
    constructor(a){
    n2(a),Zy(a),super(a),a.startTime!==void 0&&a.autoplay!==!1&&(this.startTime=a.startTime),this.options=a
  }
    updateMotionValue(a){
      const{
      motionValue:s,onUpdate:o,onComplete:c,element:d,...f
    }
    =this.options;
    if(!s)return;
      if(a!==void 0){
      s.set(a);
      return
    }
      const m=new Bl({
      ...f,autoplay:!1
    }
      ),y=Math.max(cc,be.now()-this.startTime),p=rn(0,cc,y-cc),v=m.sample(y).value,{
      name:b
    }
    =this.options;
    d&&b&&Fy(d,b,v),s.setWithVelocity(m.sample(Math.max(0,y-p)).value,v,p),m.stop()
  }
}
const e0=(i,a)=>a==="zIndex"?!1:!!(typeof i=="number"||Array.isArray(i)||typeof i=="string"&&(on.test(i)||i==="0")&&!i.startsWith("url("));
  function a2(i){
  const a=i[0];
  if(i.length===1)return!0;
  for(let s=0;
  s<i.length;
  s++)if(i[s]!==a)return!0
}
  function l2(i,a,s,o){
  const c=i[0];
  if(c===null)return!1;
  if(a==="display"||a==="visibility")return!0;
  const d=i[i.length-1],f=e0(c,a),m=e0(d,a);
  return!f||!m?!1:a2(i)||(s==="spring"||Iy(s))&&o
}
  function Uc(i){
  i.duration=0,i.type="keyframes"
}
const ng=new Set(["opacity","clipPath","filter","transform"]),s2=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
  function o2(i){
  for(let a=0;
  a<i.length;
  a++)if(typeof i[a]=="string"&&s2.test(i[a]))return!0;
  return!1
}
const r2=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor",
"borderBottomColor","borderLeftColor"]),u2=Ay(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));
  function c2(i){
    const{
    motionValue:a,name:s,repeatDelay:o,repeatType:c,damping:d,type:f,keyframes:m
  }
  =i;
  if(!(a?.owner?.current instanceof HTMLElement))return!1;
    const{
    onUpdate:p,transformTemplate:v
  }
  =a.owner.getProps();
  return u2()&&s&&(ng.has(s)||r2.has(s)&&o2(m))&&(s!=="transform"||!v)&&!p&&!o&&c!=="mirror"&&d!==0&&f!=="inertia"
}
const f2=40;
  class d2 extends yf{
    constructor({
    autoplay:a=!0,delay:s=0,type:o="keyframes",repeat:c=0,repeatDelay:d=0,repeatType:f="loop",keyframes:m,name:y,motionValue:p,
    element:v,...b
  }
    ){
      super(),this.stop=()=>{
      this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()
    }
    ,this.createdAt=be.now();
      const x={
      autoplay:a,delay:s,type:o,repeat:c,repeatDelay:d,repeatType:f,name:y,motionValue:p,element:v,...b
    }
    ,w=v?.KeyframeResolver||gf;
    this.keyframeResolver=new w(m,(N,D,B)=>this.onKeyframesResolved(N,D,x,!B),y,p,v),this.keyframeResolver?.scheduleResolve()
  }
    onKeyframesResolved(a,s,o,c){
    this.keyframeResolver=void 0;
      const{
      name:d,type:f,velocity:m,delay:y,isHandoff:p,onUpdate:v
    }
    =o;
    this.resolvedAt=be.now();
    let b=!0;
    l2(a,d,f,m)||(b=!1,(ri.instantAnimations||!y)&&v?.(_o(a,o,s)),a[0]=a[a.length-1],Uc(o),o.repeat=0);
      const w={
      startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>f2?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:s,
      ...o,keyframes:a
    }
    ,N=b&&!p&&c2(w),D=w.motionValue?.owner?.current;
    let B;
      if(N)try{
        B=new i2({
        ...w,element:D
      }
      )
    }
      catch{
      B=new Bl(w)
    }
    else B=new Bl(w);
      B.finished.then(()=>{
      this.notifyFinished()
    }
    ).catch(Ce),this.pendingTimeline&&(this.stopTimeline=B.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),
    this._animation=B
  }
    get finished(){
    return this._animation?this.animation.finished:this._finished
  }
    then(a,s){
      return this.finished.finally(a).then(()=>{
    }
    )
  }
    get animation(){
    return this._animation||(this.keyframeResolver?.resume(),Px()),this._animation
  }
    get duration(){
    return this.animation.duration
  }
    get iterationDuration(){
    return this.animation.iterationDuration
  }
    get time(){
    return this.animation.time
  }
    set time(a){
    this.animation.time=a
  }
    get speed(){
    return this.animation.speed
  }
    get state(){
    return this.animation.state
  }
    set speed(a){
    this.animation.speed=a
  }
    get startTime(){
    return this.animation.startTime
  }
    attachTimeline(a){
    return this._animation?this.stopTimeline=this.animation.attachTimeline(a):this.pendingTimeline=a,()=>this.stop()
  }
    play(){
    this.animation.play()
  }
    pause(){
    this.animation.pause()
  }
    complete(){
    this.animation.complete()
  }
    cancel(){
    this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()
  }
}
  function ig(i,a,s,o=0,c=1){
  const d=Array.from(i).sort((p,v)=>p.sortNodePosition(v)).indexOf(a),f=i.size,m=(f-1)*o;
  return typeof s=="function"?s(d,f):c===1?d*o:m-d*o
}
  const n0=30,h2=i=>!isNaN(parseFloat(i)),Nl={
  current:void 0
}
;
  class m2{
    constructor(a,s={
  }
    ){
      this.canTrackVelocity=null,this.events={
    }
      ,this.updateAndNotify=o=>{
      const c=be.now();
      if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&(this.events.change?.notify(this.current),
      this.dependents))for(const d of this.dependents)d.dirty()
    }
    ,this.hasAnimated=!1,this.setCurrent(a),this.owner=s.owner
  }
    setCurrent(a){
    this.current=a,this.updatedAt=be.now(),this.canTrackVelocity===null&&a!==void 0&&(this.canTrackVelocity=h2(this.current))
  }
    setPrevFrameValue(a=this.current){
    this.prevFrameValue=a,this.prevUpdatedAt=this.updatedAt
  }
    onChange(a){
    return this.on("change",a)
  }
    on(a,s){
    this.events[a]||(this.events[a]=new sf);
    const o=this.events[a].add(s);
      return a==="change"?()=>{
        o(),St.read(()=>{
        this.events.change.getSize()||this.stop()
      }
      )
    }
    :o
  }
    clearListeners(){
    for(const a in this.events)this.events[a].clear()
  }
    attach(a,s){
    this.passiveEffect=a,this.stopPassiveEffect=s
  }
    set(a){
    this.passiveEffect?this.passiveEffect(a,this.updateAndNotify):this.updateAndNotify(a)
  }
    setWithVelocity(a,s,o){
    this.set(s),this.prev=void 0,this.prevFrameValue=a,this.prevUpdatedAt=this.updatedAt-o
  }
    jump(a,s=!0){
    this.updateAndNotify(a),this.prev=a,this.prevUpdatedAt=this.prevFrameValue=void 0,s&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()
  }
    dirty(){
    this.events.change?.notify(this.current)
  }
    addDependent(a){
    this.dependents||(this.dependents=new Set),this.dependents.add(a)
  }
    removeDependent(a){
    this.dependents&&this.dependents.delete(a)
  }
    get(){
    return Nl.current&&Nl.current.push(this),this.current
  }
    getPrevious(){
    return this.prev
  }
    getVelocity(){
    const a=be.now();
    if(!this.canTrackVelocity||this.prevFrameValue===void 0||a-this.updatedAt>n0)return 0;
    const s=Math.min(this.updatedAt-this.prevUpdatedAt,n0);
    return of(parseFloat(this.current)-parseFloat(this.prevFrameValue),s)
  }
    start(a){
      return this.stop(),new Promise(s=>{
      this.hasAnimated=!0,this.animation=a(s),this.events.animationStart&&this.events.animationStart.notify()
    }
      ).then(()=>{
      this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()
    }
    )
  }
    stop(){
    this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()
  }
    isAnimating(){
    return!!this.animation
  }
    clearAnimation(){
    delete this.animation
  }
    destroy(){
    this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()
  }
}
  function sn(i,a){
  return new m2(i,a)
}
  function ag(i,a){
    if(i?.inherit&&a){
      const{
      inherit:s,...o
    }
    =i;
      return{
      ...a,...o
    }
  }
  return i
}
  function xf(i,a){
  const s=i?.[a]??i?.default??i;
  return s!==i?ag(s,i):s
}
  const p2={
  type:"spring",stiffness:500,damping:25,restSpeed:10
}
  ,y2=i=>({
  type:"spring",stiffness:550,damping:i===0?2*Math.sqrt(550):30,restSpeed:10
}
  ),g2={
  type:"keyframes",duration:.8
}
  ,v2={
  type:"keyframes",ease:[.25,.1,.35,1],duration:.3
}
  ,b2=(i,{
  keyframes:a
}
)=>a.length>2?g2:ja.has(i)?i.startsWith("scale")?y2(a[1]):p2:v2,x2=new Set(["when","delay","delayChildren","staggerChildren",
"staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);
  function S2(i){
  for(const a in i)if(!x2.has(a))return!0;
  return!1
}
  const Sf=(i,a,s,o={
}
  ,c,d)=>f=>{
    const m=xf(o,i)||{
  }
  ,y=m.delay||o.delay||0;
    let{
    elapsed:p=0
  }
  =o;
  p=p-Ge(y);
    const v={
      keyframes:Array.isArray(s)?s:[null,s],ease:"easeOut",velocity:a.getVelocity(),...m,delay:-p,onUpdate:x=>{
      a.set(x),m.onUpdate&&m.onUpdate(x)
    }
      ,onComplete:()=>{
      f(),m.onComplete&&m.onComplete()
    }
    ,name:i,motionValue:a,element:d?void 0:c
  }
  ;
  S2(m)||Object.assign(v,b2(i,v)),v.duration&&(v.duration=Ge(v.duration)),v.repeatDelay&&(v.repeatDelay=Ge(v.repeatDelay)),
  v.from!==void 0&&(v.keyframes[0]=v.from);
  let b=!1;
  if((v.type===!1||v.duration===0&&!v.repeatDelay)&&(Uc(v),v.delay===0&&(b=!0)),(ri.instantAnimations||ri.skipAnimations||c?.shouldSkipAnimations||m.skipAnimations)&&(b=!0,
    Uc(v),v.delay=0),v.allowFlatten=!m.type&&!m.ease,b&&!d&&a.get()!==void 0){
    const x=_o(v.keyframes,m);
      if(x!==void 0){
        St.update(()=>{
        v.onUpdate(x),v.onComplete()
      }
      );
      return
    }
  }
  return m.isSync?new Bl(v):new d2(v)
}
,T2=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
  function A2(i){
  const a=T2.exec(i);
  if(!a)return[,];
  const[,s,o,c]=a;
  return[`--${s??o}`,c]
}
  function lg(i,a,s=1){
  const[o,c]=A2(i);
  if(!o)return;
  const d=window.getComputedStyle(a).getPropertyValue(o);
    if(d){
    const f=d.trim();
    return xy(f)?parseFloat(f):f
  }
  return cf(c)?lg(c,a,s+1):c
}
  function i0(i){
    const a=[{
  }
    ,{
  }
  ];
    return i?.values.forEach((s,o)=>{
    a[0][o]=s.get(),a[1][o]=s.getVelocity()
  }
  ),a
}
  function Tf(i,a,s,o){
    if(typeof a=="function"){
    const[c,d]=i0(o);
    a=a(s!==void 0?s:i.custom,c,d)
  }
    if(typeof a=="string"&&(a=i.variants&&i.variants[a]),typeof a=="function"){
    const[c,d]=i0(o);
    a=a(s!==void 0?s:i.custom,c,d)
  }
  return a
}
  function Oi(i,a,s){
  const o=i.getProps();
  return Tf(o,a,s!==void 0?s:o.custom,i)
}
const sg=new Set(["width","height","top","left","right","bottom",...Ca]),Lc=i=>Array.isArray(i);
  function E2(i,a,s){
  i.hasValue(a)?i.getValue(a).set(s):i.addValue(a,sn(s))
}
  function M2(i){
  return Lc(i)?i[i.length-1]||0:i
}
  function D2(i,a){
  const s=Oi(i,a);
    let{
      transitionEnd:o={
    }
      ,transition:c={
    }
    ,...d
  }
    =s||{
  }
  ;
    d={
    ...d,...o
  }
  ;
    for(const f in d){
    const m=M2(d[f]);
    E2(i,f,m)
  }
}
const ae=i=>!!(i&&i.getVelocity);
  function w2(i){
  return!!(ae(i)&&i.add)
}
  function Hc(i,a){
  const s=i.getValue("willChange");
  if(w2(s))return s.add(a);
    if(!s&&ri.WillChange){
    const o=new ri.WillChange("auto");
    i.addValue("willChange",o),o.add(a)
  }
}
  function Af(i){
  return i.replace(/([A-Z])/g,a=>`-${a.toLowerCase()}`)
}
const z2="framerAppearId",og="data-"+Af(z2);
  function rg(i){
  return i.props[og]
}
  function C2({
  protectedKeys:i,needsAnimating:a
}
  ,s){
  const o=i.hasOwnProperty(s)&&a[s]!==!0;
  return a[s]=!1,o
}
  function ug(i,a,{
  delay:s=0,transitionOverride:o,type:c
}
  ={
}
  ){
    let{
    transition:d,transitionEnd:f,...m
  }
  =a;
  const y=i.getDefaultTransition();
  d=d?ag(d,y):y;
  const p=d?.reduceMotion,v=d?.skipAnimations;
  o&&(d=o);
  const b=[],x=c&&i.animationState&&i.animationState.getState()[c],w=d?.path;
  w&&w.animateVisualElement(i,m,d,s,b);
    for(const N in m){
    const D=i.getValue(N,i.latestValues[N]??null),B=m[N];
    if(B===void 0||x&&C2(x,N))continue;
      const H={
        delay:s,...xf(d||{
      }
      ,N)
    }
    ;
    v&&(H.skipAnimations=!0);
    const Y=D.get();
      if(Y!==void 0&&!D.isAnimating()&&!Array.isArray(B)&&B===Y&&!H.velocity){
      St.update(()=>D.set(B));
      continue
    }
    let G=!1;
      if(window.MotionHandoffAnimation){
      const it=rg(i);
        if(it){
        const J=window.MotionHandoffAnimation(it,N,St);
        J!==null&&(H.startTime=J,G=!0)
      }
    }
    Hc(i,N);
    const q=p??i.shouldReduceMotion;
      D.start(Sf(N,D,B,q&&sg.has(N)?{
      type:!1
    }
    :H,i,G));
    const et=D.animation;
    et&&b.push(et)
  }
    if(f){
      const N=()=>St.update(()=>{
      f&&D2(i,f)
    }
    );
    b.length?Promise.all(b).then(N):N()
  }
  return b
}
  function kc(i,a,s={
}
  ){
  const o=Oi(i,a,s.type==="exit"?i.presenceContext?.custom:void 0);
    let{
      transition:c=i.getDefaultTransition()||{
    }
  }
    =o||{
  }
  ;
  s.transitionOverride&&(c=s.transitionOverride);
    const d=o?()=>Promise.all(ug(i,o,s)):()=>Promise.resolve(),f=i.variantChildren&&i.variantChildren.size?(y=0)=>{
      const{
      delayChildren:p=0,staggerChildren:v,staggerDirection:b
    }
    =c;
    return j2(i,a,y,p,v,b,s)
  }
    :()=>Promise.resolve(),{
    when:m
  }
  =c;
    if(m){
    const[y,p]=m==="beforeChildren"?[d,f]:[f,d];
    return y().then(()=>p())
  }
  else return Promise.all([d(),f(s.delay)])
}
  function j2(i,a,s=0,o=0,c=0,d=1,f){
  const m=[];
    for(const y of i.variantChildren)y.notify("AnimationStart",a),m.push(kc(y,a,{
    ...f,delay:s+(typeof o=="function"?0:o)+ig(i.variantChildren,y,o,c,d)
  }
  ).then(()=>y.notify("AnimationComplete",a)));
  return Promise.all(m)
}
  function N2(i,a,s={
}
  ){
  i.notify("AnimationStart",a);
  let o;
    if(Array.isArray(a)){
    const c=a.map(d=>kc(i,d,s));
    o=Promise.all(c)
  }
  else if(typeof a=="string")o=kc(i,a,s);
    else{
    const c=typeof a=="function"?Oi(i,a,s.custom):a;
    o=Promise.all(ug(i,c,s))
  }
    return o.then(()=>{
    i.notify("AnimationComplete",a)
  }
  )
}
  const R2={
  test:i=>i==="auto",parse:i=>i
}
,cg=i=>a=>a.test(i),fg=[za,$,pn,On,ox,sx,R2],a0=i=>fg.find(cg(i));
  function V2(i){
  return typeof i=="number"?i===0:i!==null?i==="none"||i==="0"||Ty(i):!0
}
const O2=new Set(["brightness","contrast","saturate","opacity"]);
  function _2(i){
  const[a,s]=i.slice(0,-1).split("(");
  if(a==="drop-shadow")return i;
  const[o]=s.match(ff)||[];
  if(!o)return i;
  const c=s.replace(o,"");
  let d=O2.has(a)?1:0;
  return o!==s&&(d*=100),a+"("+d+c+")"
}
  const B2=/\b([a-z-]*)\(.*?\)/gu,Gc={
    ...on,getAnimatableNone:i=>{
    const a=i.match(B2);
    return a?a.map(_2).join(" "):i
  }
}
  ,qc={
    ...on,getAnimatableNone:i=>{
    const a=on.parse(i);
      return on.createTransformer(i)(a.map(o=>typeof o=="number"?0:typeof o=="object"?{
      ...o,alpha:1
    }
    :o))
  }
}
  ,l0={
  ...za,transform:Math.round
}
  ,U2={
  rotate:On,pathRotation:On,rotateX:On,rotateY:On,rotateZ:On,scale:ro,scaleX:ro,scaleY:ro,scaleZ:ro,skew:On,skewX:On,skewY:On,
  distance:$,translateX:$,translateY:$,translateZ:$,x:$,y:$,z:$,perspective:$,transformPerspective:$,opacity:_l,originX:Kp,
  originY:Kp,originZ:$
}
  ,Do={
  borderWidth:$,borderTopWidth:$,borderRightWidth:$,borderBottomWidth:$,borderLeftWidth:$,borderRadius:$,borderTopLeftRadius:$,
  borderTopRightRadius:$,borderBottomRightRadius:$,borderBottomLeftRadius:$,width:$,maxWidth:$,height:$,maxHeight:$,top:$,right:$,
  bottom:$,left:$,inset:$,insetBlock:$,insetBlockStart:$,insetBlockEnd:$,insetInline:$,insetInlineStart:$,insetInlineEnd:$,
  padding:$,paddingTop:$,paddingRight:$,paddingBottom:$,paddingLeft:$,paddingBlock:$,paddingBlockStart:$,paddingBlockEnd:$,
  paddingInline:$,paddingInlineStart:$,paddingInlineEnd:$,margin:$,marginTop:$,marginRight:$,marginBottom:$,marginLeft:$,marginBlock:$,
  marginBlockStart:$,marginBlockEnd:$,marginInline:$,marginInlineStart:$,marginInlineEnd:$,fontSize:$,backgroundPositionX:$,
  backgroundPositionY:$,...U2,zIndex:l0,fillOpacity:_l,strokeOpacity:_l,numOctaves:l0
}
  ,L2={
  ...Do,color:te,backgroundColor:te,outlineColor:te,fill:te,stroke:te,borderColor:te,borderTopColor:te,borderRightColor:te,
  borderBottomColor:te,borderLeftColor:te,filter:Gc,WebkitFilter:Gc,mask:qc,WebkitMask:qc
}
,dg=i=>L2[i],H2=new Set([Gc,qc]);
  function hg(i,a){
  let s=dg(i);
  return H2.has(s)||(s=on),s.getAnimatableNone?s.getAnimatableNone(a):void 0
}
const k2=new Set(["auto","none","0"]);
  function G2(i,a,s){
  let o=0,c;
  for(;
  o<i.length&&!c;
    ){
    const d=i[o];
    typeof d=="string"&&!k2.has(d)&&Da(d).values.length&&(c=i[o]),o++
  }
  if(c&&s)for(const d of a)i[d]=hg(s,c)
}
  class q2 extends gf{
    constructor(a,s,o,c,d){
    super(a,s,o,c,d,!0)
  }
    readKeyframes(){
      const{
      unresolvedKeyframes:a,element:s,name:o
    }
    =this;
    if(!s||!s.current)return;
    super.readKeyframes();
    for(let v=0;
    v<a.length;
      v++){
      let b=a[v];
        if(typeof b=="string"&&(b=b.trim(),cf(b))){
        const x=lg(b,s.current);
        x!==void 0&&(a[v]=x),v===a.length-1&&(this.finalKeyframe=b)
      }
    }
    if(this.resolveNoneKeyframes(),!sg.has(o)||a.length!==2)return;
    const[c,d]=a,f=a0(c),m=a0(d),y=Xp(c),p=Xp(d);
      if(y!==p&&si[o]){
      this.needsMeasurement=!0;
      return
    }
    if(f!==m)if(Ip(f)&&Ip(m))for(let v=0;
    v<a.length;
      v++){
      const b=a[v];
      typeof b=="string"&&(a[v]=parseFloat(b))
    }
    else si[o]&&(this.needsMeasurement=!0)
  }
    resolveNoneKeyframes(){
      const{
      unresolvedKeyframes:a,name:s
    }
    =this,o=[];
    for(let c=0;
    c<a.length;
    c++)(a[c]===null||V2(a[c]))&&o.push(c);
    o.length&&G2(a,o,s)
  }
    measureInitialState(){
      const{
      element:a,unresolvedKeyframes:s,name:o
    }
    =this;
    if(!a||!a.current)return;
    o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=si[o](a.measureViewportBox(),window.getComputedStyle(a.current)),
    s[0]=this.measuredOrigin;
    const c=s[s.length-1];
    c!==void 0&&a.getValue(o,c).jump(c,!1)
  }
    measureEndState(){
      const{
      element:a,name:s,unresolvedKeyframes:o
    }
    =this;
    if(!a||!a.current)return;
    const c=a.getValue(s);
    c&&c.jump(this.measuredOrigin,!1);
    const d=o.length-1,f=o[d];
    o[d]=si[s](a.measureViewportBox(),window.getComputedStyle(a.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),
      this.removedTransforms?.length&&this.removedTransforms.forEach(([m,y])=>{
      a.getValue(m).set(y)
    }
    ),this.resolveNoneKeyframes()
  }
}
  function Ef(i,a,s){
  if(i==null)return[];
  if(i instanceof EventTarget)return[i];
    if(typeof i=="string"){
    const c=document.querySelectorAll(i);
    return c?Array.from(c):[]
  }
  return Array.from(i).filter(o=>o!=null)
}
const Yc=(i,a)=>a&&typeof i=="number"?a.transform(i):i;
  function Rl(i){
  return Sy(i)&&"offsetHeight"in i&&!("ownerSVGElement"in i)
}
  const{
  schedule:wa,cancel:mg
}
  =Oy(queueMicrotask,!1),ln={
  x:!1,y:!1
}
;
  function pg(){
  return ln.x||ln.y
}
  function Y2(i){
    return i==="x"||i==="y"?ln[i]?null:(ln[i]=!0,()=>{
    ln[i]=!1
  }
    ):ln.x||ln.y?null:(ln.x=ln.y=!0,()=>{
    ln.x=ln.y=!1
  }
  )
}
  function yg(i,a){
    const s=Ef(i),o=new AbortController,c={
    passive:!0,...a,signal:o.signal
  }
  ;
  return[s,c,()=>o.abort()]
}
  function X2(i){
  return!(i.pointerType==="touch"||pg())
}
  function K2(i,a,s={
}
  ){
  const[o,c,d]=yg(i,s);
    return o.forEach(f=>{
    let m=!1,y=!1,p;
      const v=()=>{
      f.removeEventListener("pointerleave",N)
    }
      ,b=B=>{
      p&&(p(B),p=void 0),v()
    }
      ,x=B=>{
      m=!1,window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",x),y&&(y=!1,b(B))
    }
      ,w=()=>{
      m=!0,window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",x,c)
    }
      ,N=B=>{
        if(B.pointerType!=="touch"){
          if(m){
          y=!0;
          return
        }
        b(B)
      }
    }
      ,D=B=>{
      if(!X2(B))return;
      y=!1;
      const H=a(f,B);
      typeof H=="function"&&(p=H,f.addEventListener("pointerleave",N,c))
    }
    ;
    f.addEventListener("pointerenter",D,c),f.addEventListener("pointerdown",w,c)
  }
  ),d
}
const gg=(i,a)=>a?i===a?!0:gg(i,a.parentElement):!1,Mf=i=>i.pointerType==="mouse"?typeof i.button!="number"||i.button<=0:i.isPrimary!==!1,
Z2=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);
  function Q2(i){
  return Z2.has(i.tagName)||i.isContentEditable===!0
}
const J2=new Set(["INPUT","SELECT","TEXTAREA"]);
  function F2(i){
  return J2.has(i.tagName)||i.isContentEditable===!0
}
const po=new WeakSet;
  function s0(i){
    return a=>{
    a.key==="Enter"&&i(a)
  }
}
  function fc(i,a){
    i.dispatchEvent(new PointerEvent("pointer"+a,{
    isPrimary:!0,bubbles:!0
  }
  ))
}
  const P2=(i,a)=>{
  const s=i.currentTarget;
  if(!s)return;
    const o=s0(()=>{
    if(po.has(s))return;
    fc(s,"down");
      const c=s0(()=>{
      fc(s,"up")
    }
    ),d=()=>fc(s,"cancel");
    s.addEventListener("keyup",c,a),s.addEventListener("blur",d,a)
  }
  );
  s.addEventListener("keydown",o,a),s.addEventListener("blur",()=>s.removeEventListener("keydown",o),a)
}
;
  function o0(i){
  return Mf(i)&&!pg()
}
const r0=new WeakSet;
  function W2(i,a,s={
}
  ){
    const[o,c,d]=yg(i,s),f=m=>{
    const y=m.currentTarget;
    if(!o0(m)||r0.has(m))return;
    po.add(y),s.stopPropagation&&r0.add(m);
      const p=a(y,m),v=(w,N)=>{
      window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",x),po.has(y)&&po.delete(y),o0(w)&&typeof p=="function"&&p(w,
        {
        success:N
      }
      )
    }
      ,b=w=>{
      v(w,y===window||y===document||s.useGlobalTarget||gg(y,w.target))
    }
      ,x=w=>{
      v(w,!1)
    }
    ;
    window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",x,c)
  }
  ;
    return o.forEach(m=>{
    (s.useGlobalTarget?window:m).addEventListener("pointerdown",f,c),Rl(m)&&(m.addEventListener("focus",p=>P2(p,c)),!Q2(m)&&!m.hasAttribute("tabindex")&&(m.tabIndex=0))
  }
  ),d
}
  function Df(i){
  return Sy(i)&&"ownerSVGElement"in i
}
const yo=new WeakMap;
let go;
const vg=(i,a,s)=>(o,c)=>c&&c[0]?c[0][i+"Size"]:Df(o)&&"getBBox"in o?o.getBBox()[a]:o[s],$2=vg("inline","width","offsetWidth"),
I2=vg("block","height","offsetHeight");
  function tS({
  target:i,borderBoxSize:a
}
  ){
    yo.get(i)?.forEach(s=>{
      s(i,{
        get width(){
        return $2(i,a)
      }
        ,get height(){
        return I2(i,a)
      }
    }
    )
  }
  )
}
  function eS(i){
  i.forEach(tS)
}
  function nS(){
  typeof ResizeObserver>"u"||(go=new ResizeObserver(eS))
}
  function iS(i,a){
  go||nS();
  const s=Ef(i);
    return s.forEach(o=>{
    let c=yo.get(o);
    c||(c=new Set,yo.set(o,c)),c.add(a),go?.observe(o)
  }
    ),()=>{
      s.forEach(o=>{
      const c=yo.get(o);
      c?.delete(a),c?.size||go?.unobserve(o)
    }
    )
  }
}
const vo=new Set;
let Ta;
  function aS(){
    Ta=()=>{
      const i={
        get width(){
        return window.innerWidth
      }
        ,get height(){
        return window.innerHeight
      }
    }
    ;
    vo.forEach(a=>a(i))
  }
  ,window.addEventListener("resize",Ta)
}
  function lS(i){
    return vo.add(i),Ta||aS(),()=>{
    vo.delete(i),!vo.size&&typeof Ta=="function"&&(window.removeEventListener("resize",Ta),Ta=void 0)
  }
}
  function Xc(i,a){
  return typeof i=="function"?lS(i):iS(i,a)
}
  function bg(i,a){
  let s;
    const o=()=>{
      const{
      currentTime:c
    }
    =a,f=(c===null?0:c.value)/100;
    s!==f&&i(f),s=f
  }
  ;
  return St.preUpdate(o,!0),()=>Ie(o)
}
  function sS(i){
  return Df(i)&&i.tagName==="svg"
}
  function oS(...i){
  const a=!Array.isArray(i[0]),s=a?0:-1,o=i[0+s],c=i[1+s],d=i[2+s],f=i[3+s],m=pf(c,d,f);
  return a?m(o):m
}
  function rS(i,a,s={
}
  ){
  const o=i.get();
  let c=null,d=o,f;
    const m=typeof o=="string"?o.replace(/[\d.-]/g,""):void 0,y=()=>{
    c&&(c.stop(),c=null),i.animation=void 0
  }
    ,p=()=>{
    const b=u0(i.get()),x=u0(d);
      if(b===x){
      y();
      return
    }
    const w=c?c.getGeneratorVelocity():i.getVelocity();
      y(),c=new Bl({
      keyframes:[b,x],velocity:w,type:"spring",restDelta:.001,restSpeed:.01,...s,onUpdate:f
    }
    )
  }
    ,v=()=>{
      p(),i.animation=c??void 0,i.events.animationStart?.notify(),c?.then(()=>{
      i.animation=void 0,i.events.animationComplete?.notify()
    }
    )
  }
  ;
    if(i.attach((b,x)=>{
    d=b,f=w=>x(dc(w,m)),St.postRender(v)
  }
    ,y),ae(a)){
    let b=s.skipInitialAnimation===!0;
      const x=a.on("change",N=>{
      b?(b=!1,i.jump(dc(N,m),!1)):i.set(dc(N,m))
    }
    ),w=i.on("destroy",x);
      return()=>{
      x(),w()
    }
  }
  return y
}
  function dc(i,a){
  return a?i+a:i
}
  function u0(i){
  return typeof i=="number"?i:parseFloat(i)
}
  const uS=[...fg,te,on],cS=i=>uS.find(cg(i)),c0=()=>({
  translate:0,scale:1,origin:0,originPoint:0
}
  ),Aa=()=>({
  x:c0(),y:c0()
}
  ),f0=()=>({
  min:0,max:0
}
  ),ie=()=>({
  x:f0(),y:f0()
}
),fS=new WeakMap;
  function Bo(i){
  return i!==null&&typeof i=="object"&&typeof i.start=="function"
}
  function Ul(i){
  return typeof i=="string"||Array.isArray(i)
}
const wf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],zf=["initial",...wf];
  function Uo(i){
  return Bo(i.animate)||zf.some(a=>Ul(i[a]))
}
  function xg(i){
  return!!(Uo(i)||i.variants)
}
  function dS(i,a,s){
    for(const o in a){
    const c=a[o],d=s[o];
    if(ae(c))i.addValue(o,c);
      else if(ae(d))i.addValue(o,sn(c,{
      owner:i
    }
    ));
      else if(d!==c)if(i.hasValue(o)){
      const f=i.getValue(o);
      f.liveStyle===!0?f.jump(c):f.hasAnimated||f.set(c)
    }
      else{
      const f=i.getStaticValue(o);
        i.addValue(o,sn(f!==void 0?f:c,{
        owner:i
      }
      ))
    }
  }
  for(const o in s)a[o]===void 0&&i.removeValue(o);
  return a
}
  const Kc={
  current:null
}
  ,Sg={
  current:!1
}
,hS=typeof window<"u";
  function mS(){
    if(Sg.current=!0,!!hS)if(window.matchMedia){
    const i=window.matchMedia("(prefers-reduced-motion)"),a=()=>Kc.current=i.matches;
    i.addEventListener("change",a),a()
  }
  else Kc.current=!1
}
const d0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];
  let wo={
}
;
  function Tg(i){
  wo=i
}
  function pS(){
  return wo
}
  class yS{
    scrapeMotionValuesFromProps(a,s,o){
      return{
    }
  }
    constructor({
    parent:a,props:s,presenceContext:o,reducedMotionConfig:c,skipAnimations:d,blockInitialAnimation:f,visualState:m
  }
    ,y={
  }
    ){
    this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,
      this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=gf,this.features={
    }
      ,this.valueSubscriptions=new Map,this.prevMotionValues={
    }
      ,this.hasBeenMounted=!1,this.events={
    }
      ,this.propEventSubscriptions={
    }
      ,this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{
      this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))
    }
      ,this.renderScheduledAt=0,this.scheduleRender=()=>{
      const w=be.now();
      this.renderScheduledAt<w&&(this.renderScheduledAt=w,St.render(this.render,!1,!0))
    }
    ;
      const{
      latestValues:p,renderState:v
    }
    =m;
      this.latestValues=p,this.baseTarget={
      ...p
    }
      ,this.initialValues=s.initial?{
      ...p
    }
      :{
    }
    ,this.renderState=v,this.parent=a,this.props=s,this.presenceContext=o,this.depth=a?a.depth+1:0,this.reducedMotionConfig=c,
    this.skipAnimationsConfig=d,this.options=y,this.blockInitialAnimation=!!f,this.isControllingVariants=Uo(s),this.isVariantNode=xg(s),
    this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(a&&a.current);
      const{
      willChange:b,...x
    }
      =this.scrapeMotionValuesFromProps(s,{
    }
    ,this);
      for(const w in x){
      const N=x[w];
      p[w]!==void 0&&ae(N)&&N.set(p[w])
    }
  }
    mount(a){
    if(this.hasBeenMounted)for(const s in this.initialValues)this.values.get(s)?.jump(this.initialValues[s]),this.latestValues[s]=this.initialValues[s];
    this.current=a,fS.set(a,this),this.projection&&!this.projection.instance&&this.projection.mount(a),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),
    this.values.forEach((s,o)=>this.bindToMotionValue(o,s)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Sg.current||mS(),
    this.shouldReduceMotion=Kc.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,
    this.presenceContext),this.hasBeenMounted=!0
  }
    unmount(){
    this.projection&&this.projection.unmount(),Ie(this.notifyUpdate),Ie(this.render),this.valueSubscriptions.forEach(a=>a()),
    this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);
    for(const a in this.events)this.events[a].clear();
      for(const a in this.features){
      const s=this.features[a];
      s&&(s.unmount(),s.isMounted=!1)
    }
    this.current=null
  }
    addChild(a){
    this.children.add(a),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(a)
  }
    removeChild(a){
    this.children.delete(a),this.enteringChildren&&this.enteringChildren.delete(a)
  }
    bindToMotionValue(a,s){
      if(this.valueSubscriptions.has(a)&&this.valueSubscriptions.get(a)(),s.accelerate&&ng.has(a)&&this.current instanceof HTMLElement){
        const{
        factory:f,keyframes:m,times:y,ease:p,duration:v
      }
        =s.accelerate,b=new tg({
        element:this.current,name:a,keyframes:m,times:y,ease:p,duration:Ge(v)
      }
      ),x=f(b);
        this.valueSubscriptions.set(a,()=>{
        x(),b.cancel()
      }
      );
      return
    }
    const o=ja.has(a);
    o&&this.onBindTransform&&this.onBindTransform();
      const c=s.on("change",f=>{
      this.latestValues[a]=f,this.props.onUpdate&&St.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0),
      this.scheduleRender()
    }
    );
    let d;
    typeof window<"u"&&window.MotionCheckAppearSync&&(d=window.MotionCheckAppearSync(this,a,s)),this.valueSubscriptions.set(a,
      ()=>{
      c(),d&&d()
    }
    )
  }
    sortNodePosition(a){
    return!this.current||!this.sortInstanceNodePosition||this.type!==a.type?0:this.sortInstanceNodePosition(this.current,a.current)
  }
    updateFeatures(){
    let a="animation";
      for(a in wo){
      const s=wo[a];
      if(!s)continue;
        const{
        isEnabled:o,Feature:c
      }
      =s;
        if(!this.features[a]&&c&&o(this.props)&&(this.features[a]=new c(this)),this.features[a]){
        const d=this.features[a];
        d.isMounted?d.update():(d.mount(),d.isMounted=!0)
      }
    }
  }
    triggerBuild(){
    this.build(this.renderState,this.latestValues,this.props)
  }
    measureViewportBox(){
    return this.current?this.measureInstanceViewportBox(this.current,this.props):ie()
  }
    getStaticValue(a){
    return this.latestValues[a]
  }
    setStaticValue(a,s){
    this.latestValues[a]=s
  }
    update(a,s){
    (a.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=a,this.prevPresenceContext=this.presenceContext,
    this.presenceContext=s;
    for(let o=0;
    o<d0.length;
      o++){
      const c=d0[o];
      this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);
      const d="on"+c,f=a[d];
      f&&(this.propEventSubscriptions[c]=this.on(c,f))
    }
      this.prevMotionValues=dS(this,this.scrapeMotionValuesFromProps(a,this.prevProps||{
    }
    ,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()
  }
    getProps(){
    return this.props
  }
    getVariant(a){
    return this.props.variants?this.props.variants[a]:void 0
  }
    getDefaultTransition(){
    return this.props.transition
  }
    getTransformPagePoint(){
    return this.props.transformPagePoint
  }
    getClosestVariantNode(){
    return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0
  }
    addVariantChild(a){
    const s=this.getClosestVariantNode();
    if(s)return s.variantChildren&&s.variantChildren.add(a),()=>s.variantChildren.delete(a)
  }
    addValue(a,s){
    const o=this.values.get(a);
    s!==o&&(o&&this.removeValue(a),this.bindToMotionValue(a,s),this.values.set(a,s),this.latestValues[a]=s.get())
  }
    removeValue(a){
    this.values.delete(a);
    const s=this.valueSubscriptions.get(a);
    s&&(s(),this.valueSubscriptions.delete(a)),delete this.latestValues[a],this.removeValueFromRenderState(a,this.renderState)
  }
    hasValue(a){
    return this.values.has(a)
  }
    getValue(a,s){
    if(this.props.values&&this.props.values[a])return this.props.values[a];
    let o=this.values.get(a);
      return o===void 0&&s!==void 0&&(o=sn(s===null?void 0:s,{
      owner:this
    }
    ),this.addValue(a,o)),o
  }
    readValue(a,s){
    let o=this.latestValues[a]!==void 0||!this.current?this.latestValues[a]:this.getBaseTargetFromProps(this.props,a)??this.readValueFromInstance(this.current,
    a,this.options);
    return o!=null&&(typeof o=="string"&&(xy(o)||Ty(o))?o=parseFloat(o):!cS(o)&&on.test(s)&&(o=hg(a,s)),this.setBaseTarget(a,
    ae(o)?o.get():o)),ae(o)?o.get():o
  }
    setBaseTarget(a,s){
    this.baseTarget[a]=s
  }
    getBaseTarget(a){
      const{
      initial:s
    }
    =this.props;
    let o;
      if(typeof s=="string"||typeof s=="object"){
      const d=Tf(this.props,s,this.presenceContext?.custom);
      d&&(o=d[a])
    }
    if(s&&o!==void 0)return o;
    const c=this.getBaseTargetFromProps(this.props,a);
    return c!==void 0&&!ae(c)?c:this.initialValues[a]!==void 0&&o===void 0?void 0:this.baseTarget[a]
  }
    on(a,s){
    return this.events[a]||(this.events[a]=new sf),this.events[a].add(s)
  }
    notify(a,...s){
    this.events[a]&&this.events[a].notify(...s)
  }
    scheduleRenderMicrotask(){
    wa.render(this.render)
  }
}
  class Ag extends yS{
    constructor(){
    super(...arguments),this.KeyframeResolver=q2
  }
    sortInstanceNodePosition(a,s){
    return a.compareDocumentPosition(s)&2?1:-1
  }
    getBaseTargetFromProps(a,s){
    const o=a.style;
    return o?o[s]:void 0
  }
    removeValueFromRenderState(a,{
    vars:s,style:o
  }
    ){
    delete s[a],delete o[a]
  }
    handleChildMotionValue(){
    this.childSubscription&&(this.childSubscription(),delete this.childSubscription);
      const{
      children:a
    }
    =this.props;
      ae(a)&&(this.childSubscription=a.on("change",s=>{
      this.current&&(this.current.textContent=`${s}`)
    }
    ))
  }
}
  class ui{
    constructor(a){
    this.isMounted=!1,this.node=a
  }
    update(){
  }
}
  function Eg({
  top:i,left:a,right:s,bottom:o
}
  ){
    return{
      x:{
      min:a,max:s
    }
      ,y:{
      min:i,max:o
    }
  }
}
  function gS({
  x:i,y:a
}
  ){
    return{
    top:a.min,right:i.max,bottom:a.max,left:i.min
  }
}
  function vS(i,a){
  if(!a)return i;
    const s=a({
    x:i.left,y:i.top
  }
    ),o=a({
    x:i.right,y:i.bottom
  }
  );
    return{
    top:s.y,left:s.x,bottom:o.y,right:o.x
  }
}
  function hc(i){
  return i===void 0||i===1
}
  function Zc({
  scale:i,scaleX:a,scaleY:s
}
  ){
  return!hc(i)||!hc(a)||!hc(s)
}
  function ji(i){
  return Zc(i)||Mg(i)||i.z||i.rotate||i.rotateX||i.rotateY||i.skewX||i.skewY
}
  function Mg(i){
  return h0(i.x)||h0(i.y)
}
  function h0(i){
  return i&&i!=="0%"
}
  function zo(i,a,s){
  const o=i-s,c=a*o;
  return s+c
}
  function m0(i,a,s,o,c){
  return c!==void 0&&(i=zo(i,c,o)),zo(i,s,o)+a
}
  function Qc(i,a=0,s=1,o,c){
  i.min=m0(i.min,a,s,o,c),i.max=m0(i.max,a,s,o,c)
}
  function Dg(i,{
  x:a,y:s
}
  ){
  Qc(i.x,a.translate,a.scale,a.originPoint),Qc(i.y,s.translate,s.scale,s.originPoint)
}
const p0=.999999999999,y0=1.0000000000001;
  function bS(i,a,s,o=!1){
  const c=s.length;
  if(!c)return;
  a.x=a.y=1;
  let d,f;
  for(let m=0;
  m<c;
    m++){
    d=s[m],f=d.projectionDelta;
      const{
      visualElement:y
    }
    =d.options;
    y&&y.props.style&&y.props.style.display==="contents"||(o&&d.options.layoutScroll&&d.scroll&&d!==d.root&&(mn(i.x,-d.scroll.offset.x),
    mn(i.y,-d.scroll.offset.y)),f&&(a.x*=f.x.scale,a.y*=f.y.scale,Dg(i,f)),o&&ji(d.latestValues)&&bo(i,d.latestValues,d.layout?.layoutBox))
  }
  a.x<y0&&a.x>p0&&(a.x=1),a.y<y0&&a.y>p0&&(a.y=1)
}
  function mn(i,a){
  i.min+=a,i.max+=a
}
  function g0(i,a,s,o,c=.5){
  const d=Vt(i.min,i.max,c);
  Qc(i,a,s,d,o)
}
  function v0(i,a){
  return typeof i=="string"?parseFloat(i)/100*(a.max-a.min):i
}
  function bo(i,a,s){
  const o=s??i;
  g0(i.x,v0(a.x,o.x),a.scaleX,a.scale,a.originX),g0(i.y,v0(a.y,o.y),a.scaleY,a.scale,a.originY)
}
  function wg(i,a){
  return Eg(vS(i.getBoundingClientRect(),a))
}
  function xS(i,a,s){
    const o=wg(i,s),{
    scroll:c
  }
  =a;
  return c&&(mn(o.x,c.offset.x),mn(o.y,c.offset.y)),o
}
  const SS={
  x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"
}
,TS=Ca.length;
  function AS(i,a,s){
  let o="",c=!0;
  for(let f=0;
  f<TS;
    f++){
    const m=Ca[f],y=i[m];
    if(y===void 0)continue;
    let p=!0;
    if(typeof y=="number")p=y===(m.startsWith("scale")?1:0);
      else{
      const v=parseFloat(y);
      p=m.startsWith("scale")?v===1:v===0
    }
      if(!p||s){
      const v=Yc(y,Do[m]);
        if(!p){
        c=!1;
        const b=SS[m]||m;
        o+=`${b}(${v}) `
      }
      s&&(a[m]=v)
    }
  }
  const d=i.pathRotation;
  return d&&(c=!1,o+=`rotate(${Yc(d,Do.pathRotation)}) `),o=o.trim(),s?o=s(a,c?"":o):c&&(o="none"),o
}
  function Cf(i,a,s){
    const{
    style:o,vars:c,transformOrigin:d
  }
  =i;
  let f=!1,m=!1;
    for(const y in a){
    const p=a[y];
      if(ja.has(y)){
      f=!0;
      continue
    }
      else if(By(y)){
      c[y]=p;
      continue
    }
      else{
      const v=Yc(p,Do[y]);
      y.startsWith("origin")?(m=!0,d[y]=v):o[y]=v
    }
  }
    if(a.transform||(f||s?o.transform=AS(a,i.transform,s):o.transform&&(o.transform="none")),m){
      const{
      originX:y="50%",originY:p="50%",originZ:v=0
    }
    =d;
    o.transformOrigin=`${y} ${p} ${v}`
  }
}
  function zg(i,{
  style:a,vars:s
}
  ,o,c){
  const d=i.style;
  let f;
  for(f in a)d[f]=a[f];
  c?.applyProjectionStyles(d,o);
  for(f in s)d.setProperty(f,s[f])
}
  function b0(i,a){
  return a.max===a.min?0:i/(a.max-a.min)*100
}
  const Dl={
    correct:(i,a)=>{
    if(!a.target)return i;
    if(typeof i=="string")if($.test(i))i=parseFloat(i);
    else return i;
    const s=b0(i,a.target.x),o=b0(i,a.target.y);
    return`${s}% ${o}%`
  }
}
  ,ES={
    correct:(i,{
    treeScale:a,projectionDelta:s
  }
    )=>{
    const o=i,c=on.parse(i);
    if(c.length>5)return o;
    const d=on.createTransformer(i),f=typeof c[0]!="number"?1:0,m=s.x.scale*a.x,y=s.y.scale*a.y;
    c[0+f]/=m,c[1+f]/=y;
    const p=Vt(m,y,.5);
    return typeof c[2+f]=="number"&&(c[2+f]/=p),typeof c[3+f]=="number"&&(c[3+f]/=p),d(c)
  }
}
  ,Jc={
    borderRadius:{
    ...Dl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]
  }
  ,borderTopLeftRadius:Dl,borderTopRightRadius:Dl,borderBottomLeftRadius:Dl,borderBottomRightRadius:Dl,boxShadow:ES
}
;
  function Cg(i,{
  layout:a,layoutId:s
}
  ){
  return ja.has(i)||i.startsWith("origin")||(a||s!==void 0)&&(!!Jc[i]||i==="opacity")
}
  function jf(i,a,s){
    const o=i.style,c=a?.style,d={
  }
  ;
  if(!o)return d;
  for(const f in o)(ae(o[f])||c&&ae(c[f])||Cg(f,i)||s?.getValue(f)?.liveStyle!==void 0)&&(d[f]=o[f]);
  return d
}
  function MS(i){
  return window.getComputedStyle(i)
}
  class DS extends Ag{
    constructor(){
    super(...arguments),this.type="html",this.renderInstance=zg
  }
    readValueFromInstance(a,s){
    if(ja.has(s))return this.projection?.isProjecting?Rc(s):Kx(a,s);
      {
      const o=MS(a),c=(By(s)?o.getPropertyValue(s):o[s])||0;
      return typeof c=="string"?c.trim():c
    }
  }
    measureInstanceViewportBox(a,{
    transformPagePoint:s
  }
    ){
    return wg(a,s)
  }
    build(a,s,o){
    Cf(a,s,o.transformTemplate)
  }
    scrapeMotionValuesFromProps(a,s,o){
    return jf(a,s,o)
  }
}
  const wS={
  offset:"stroke-dashoffset",array:"stroke-dasharray"
}
  ,zS={
  offset:"strokeDashoffset",array:"strokeDasharray"
}
;
  function CS(i,a,s=1,o=0,c=!0){
  i.pathLength=1;
  const d=c?wS:zS;
  i[d.offset]=`${-o}`,i[d.array]=`${a} ${s}`
}
const jS=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];
  function jg(i,{
  attrX:a,attrY:s,attrScale:o,pathLength:c,pathSpacing:d=1,pathOffset:f=0,...m
}
  ,y,p,v){
    if(Cf(i,m,p),y){
    i.style.viewBox&&(i.attrs.viewBox=i.style.viewBox);
    return
  }
    i.attrs=i.style,i.style={
  }
  ;
    const{
    attrs:b,style:x
  }
  =i;
  b.transform&&(x.transform=b.transform,delete b.transform),(x.transform||b.transformOrigin)&&(x.transformOrigin=b.transformOrigin??"50% 50%",
  delete b.transformOrigin),x.transform&&(x.transformBox=v?.transformBox??"fill-box",delete b.transformBox);
  for(const w of jS)b[w]!==void 0&&(x[w]=b[w],delete b[w]);
  a!==void 0&&(b.x=a),s!==void 0&&(b.y=s),o!==void 0&&(b.scale=o),c!==void 0&&CS(b,c,d,f,!1)
}
const Ng=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle",
"markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation",
"tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Rg=i=>typeof i=="string"&&i.toLowerCase()==="svg";
  function NS(i,a,s,o){
  zg(i,a,void 0,o);
  for(const c in a.attrs)i.setAttribute(Ng.has(c)?c:Af(c),a.attrs[c])
}
  function Vg(i,a,s){
  const o=jf(i,a,s);
    for(const c in i)if(ae(i[c])||ae(a[c])){
    const d=Ca.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;
    o[d]=i[c]
  }
  return o
}
  class RS extends Ag{
    constructor(){
    super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ie
  }
    getBaseTargetFromProps(a,s){
    return a[s]
  }
    readValueFromInstance(a,s){
      if(ja.has(s)){
      const o=dg(s);
      return o&&o.default||0
    }
    return s=Ng.has(s)?s:Af(s),a.getAttribute(s)
  }
    scrapeMotionValuesFromProps(a,s,o){
    return Vg(a,s,o)
  }
    build(a,s,o){
    jg(a,s,this.isSVGTag,o.transformTemplate,o.style)
  }
    renderInstance(a,s,o,c){
    NS(a,s,o,c)
  }
    mount(a){
    this.isSVGTag=Rg(a.tagName),super.mount(a)
  }
}
const VS=zf.length;
  function Og(i){
  if(!i)return;
    if(!i.isControllingVariants){
      const s=i.parent?Og(i.parent)||{
    }
      :{
    }
    ;
    return i.props.initial!==void 0&&(s.initial=i.props.initial),s
  }
    const a={
  }
  ;
  for(let s=0;
  s<VS;
    s++){
    const o=zf[s],c=i.props[o];
    (Ul(c)||c===!1)&&(a[o]=c)
  }
  return a
}
  function _g(i,a){
  if(!Array.isArray(a))return!1;
  const s=a.length;
  if(s!==i.length)return!1;
  for(let o=0;
  o<s;
  o++)if(a[o]!==i[o])return!1;
  return!0
}
const OS=[...wf].reverse(),_S=wf.length;
  function BS(i){
    return a=>Promise.all(a.map(({
    animation:s,options:o
  }
  )=>N2(i,s,o)))
}
  function US(i){
  let a=BS(i),s=x0(),o=!0,c=!1;
    const d=p=>(v,b)=>{
    const x=Oi(i,b,p==="exit"?i.presenceContext?.custom:void 0);
      if(x){
        const{
        transition:w,transitionEnd:N,...D
      }
      =x;
        v={
        ...v,...D,...N
      }
    }
    return v
  }
  ;
    function f(p){
    a=p(i)
  }
    function m(p){
      const{
      props:v
    }
      =i,b=Og(i.parent)||{
    }
    ,x=[],w=new Set;
      let N={
    }
    ,D=1/0;
    for(let H=0;
    H<_S;
      H++){
      const Y=OS[H],G=s[Y],q=v[Y]!==void 0?v[Y]:b[Y],et=Ul(q),it=Y===p?G.isActive:null;
      it===!1&&(D=H);
      let J=q===b[Y]&&q!==v[Y]&&et;
        if(J&&(o||c)&&i.manuallyAnimateOnMount&&(J=!1),G.protectedKeys={
        ...N
      }
      ,!G.isActive&&it===null||!q&&!G.prevProp||Bo(q)||typeof q=="boolean")continue;
        if(Y==="exit"&&G.isActive&&it!==!0){
          G.prevResolvedValues&&(N={
          ...N,...G.prevResolvedValues
        }
        );
        continue
      }
      const P=LS(G.prevProp,q);
      let lt=P||Y===p&&G.isActive&&!J&&et||H>D&&et,tt=!1;
      const mt=Array.isArray(q)?q:[q];
        let xt=mt.reduce(d(Y),{
      }
      );
        it===!1&&(xt={
      }
      );
        const{
          prevResolvedValues:Ft={
        }
      }
        =G,kt={
        ...Ft,...xt
      }
        ,Ut=F=>{
        lt=!0,w.has(F)&&(tt=!0,w.delete(F)),G.needsAnimating[F]=!0;
        const st=i.getValue(F);
        st&&(st.liveStyle=!1)
      }
      ;
        for(const F in kt){
        const st=xt[F],ft=Ft[F];
        if(N.hasOwnProperty(F))continue;
        let A=!1;
        Lc(st)&&Lc(ft)?A=!_g(st,ft)||P:A=st!==ft,A?st!=null?Ut(F):w.add(F):st!==void 0&&w.has(F)?Ut(F):G.protectedKeys[F]=!0
      }
        G.prevProp=q,G.prevResolvedValues=xt,G.isActive&&(N={
        ...N,...xt
      }
      ),(o||c)&&i.blockInitialAnimation&&(lt=!1);
      const R=J&&P;
        lt&&(!R||tt)&&x.push(...mt.map(F=>{
          const st={
          type:Y
        }
        ;
          if(typeof F=="string"&&(o||c)&&!R&&i.manuallyAnimateOnMount&&i.parent){
            const{
            parent:ft
          }
          =i,A=Oi(ft,F);
            if(ft.enteringChildren&&A){
              const{
              delayChildren:U
            }
              =A.transition||{
            }
            ;
            st.delay=ig(ft.enteringChildren,i,U)
          }
        }
          return{
          animation:F,options:st
        }
      }
      ))
    }
      if(w.size){
        const H={
      }
      ;
        if(typeof v.initial!="boolean"){
        const Y=Oi(i,Array.isArray(v.initial)?v.initial[0]:v.initial);
        Y&&Y.transition&&(H.transition=Y.transition)
      }
        w.forEach(Y=>{
        const G=i.getBaseTarget(Y),q=i.getValue(Y);
        q&&(q.liveStyle=!0),H[Y]=G??null
      }
        ),x.push({
        animation:H
      }
      )
    }
    let B=!!x.length;
    return o&&(v.initial===!1||v.initial===v.animate)&&!i.manuallyAnimateOnMount&&(B=!1),o=!1,c=!1,B?a(x):Promise.resolve()
  }
    function y(p,v){
    if(s[p].isActive===v)return Promise.resolve();
    i.variantChildren?.forEach(x=>x.animationState?.setActive(p,v)),s[p].isActive=v;
    const b=m(p);
      for(const x in s)s[x].protectedKeys={
    }
    ;
    return b
  }
    return{
      animateChanges:m,setActive:y,setAnimateFunction:f,getState:()=>s,reset:()=>{
      s=x0(),c=!0
    }
  }
}
  function LS(i,a){
  return typeof a=="string"?a!==i:Array.isArray(a)?!_g(a,i):!1
}
  function Ci(i=!1){
    return{
      isActive:i,protectedKeys:{
    }
      ,needsAnimating:{
    }
      ,prevResolvedValues:{
    }
  }
}
  function x0(){
    return{
    animate:Ci(!0),whileInView:Ci(),whileHover:Ci(),whileTap:Ci(),whileDrag:Ci(),whileFocus:Ci(),exit:Ci()
  }
}
  function Fc(i,a){
  i.min=a.min,i.max=a.max
}
  function an(i,a){
  Fc(i.x,a.x),Fc(i.y,a.y)
}
  function S0(i,a){
  i.translate=a.translate,i.scale=a.scale,i.originPoint=a.originPoint,i.origin=a.origin
}
const Bg=1e-4,HS=1-Bg,kS=1+Bg,Ug=.01,GS=0-Ug,qS=0+Ug;
  function xe(i){
  return i.max-i.min
}
  function YS(i,a,s){
  return Math.abs(i-a)<=s
}
  function T0(i,a,s,o=.5){
  i.origin=o,i.originPoint=Vt(a.min,a.max,i.origin),i.scale=xe(s)/xe(a),i.translate=Vt(s.min,s.max,i.origin)-i.originPoint,
  (i.scale>=HS&&i.scale<=kS||isNaN(i.scale))&&(i.scale=1),(i.translate>=GS&&i.translate<=qS||isNaN(i.translate))&&(i.translate=0)
}
  function Vl(i,a,s,o){
  T0(i.x,a.x,s.x,o?o.originX:void 0),T0(i.y,a.y,s.y,o?o.originY:void 0)
}
  function A0(i,a,s,o=0){
  const c=o?Vt(s.min,s.max,o):s.min;
  i.min=c+a.min,i.max=i.min+xe(a)
}
  function XS(i,a,s,o){
  A0(i.x,a.x,s.x,o?.x),A0(i.y,a.y,s.y,o?.y)
}
  function E0(i,a,s,o=0){
  const c=o?Vt(s.min,s.max,o):s.min;
  i.min=a.min-c,i.max=i.min+xe(a)
}
  function Co(i,a,s,o){
  E0(i.x,a.x,s.x,o?.x),E0(i.y,a.y,s.y,o?.y)
}
  function M0(i,a,s,o,c){
  return i-=a,i=zo(i,1/s,o),c!==void 0&&(i=zo(i,1/c,o)),i
}
  function KS(i,a=0,s=1,o=.5,c,d=i,f=i){
  if(pn.test(a)&&(a=parseFloat(a),a=Vt(f.min,f.max,a/100)-f.min),typeof a!="number")return;
  let m=Vt(d.min,d.max,o);
  i===d&&(m-=a),i.min=M0(i.min,a,s,m,c),i.max=M0(i.max,a,s,m,c)
}
  function D0(i,a,[s,o,c],d,f){
  KS(i,a[s],a[o],a[c],a.scale,d,f)
}
const ZS=["x","scaleX","originX"],QS=["y","scaleY","originY"];
  function w0(i,a,s,o){
  D0(i.x,a,ZS,s?s.x:void 0,o?o.x:void 0),D0(i.y,a,QS,s?s.y:void 0,o?o.y:void 0)
}
  function z0(i){
  return i.translate===0&&i.scale===1
}
  function Lg(i){
  return z0(i.x)&&z0(i.y)
}
  function C0(i,a){
  return i.min===a.min&&i.max===a.max
}
  function JS(i,a){
  return C0(i.x,a.x)&&C0(i.y,a.y)
}
  function j0(i,a){
  return Math.round(i.min)===Math.round(a.min)&&Math.round(i.max)===Math.round(a.max)
}
  function Hg(i,a){
  return j0(i.x,a.x)&&j0(i.y,a.y)
}
  function N0(i){
  return xe(i.x)/xe(i.y)
}
  function R0(i,a){
  return i.translate===a.translate&&i.scale===a.scale&&i.originPoint===a.originPoint
}
  function hn(i){
  return[i("x"),i("y")]
}
  function FS(i,a,s){
  let o="";
  const c=i.x.translate/a.x,d=i.y.translate/a.y,f=s?.z||0;
    if((c||d||f)&&(o=`translate3d(${c}px, ${d}px, ${f}px) `),(a.x!==1||a.y!==1)&&(o+=`scale(${1/a.x}, ${1/a.y}) `),s){
      const{
      transformPerspective:p,rotate:v,pathRotation:b,rotateX:x,rotateY:w,skewX:N,skewY:D
    }
    =s;
    p&&(o=`perspective(${p}px) ${o}`),v&&(o+=`rotate(${v}deg) `),b&&(o+=`rotate(${b}deg) `),x&&(o+=`rotateX(${x}deg) `),w&&(o+=`rotateY(${w}deg) `),
    N&&(o+=`skewX(${N}deg) `),D&&(o+=`skewY(${D}deg) `)
  }
  const m=i.x.scale*a.x,y=i.y.scale*a.y;
  return(m!==1||y!==1)&&(o+=`scale(${m}, ${y})`),o||"none"
}
const kg=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],PS=kg.length,V0=i=>typeof i=="string"?parseFloat(i):i,
O0=i=>typeof i=="number"||$.test(i);
  function WS(i,a,s,o,c,d){
  c?(i.opacity=Vt(0,s.opacity??1,$S(o)),i.opacityExit=Vt(a.opacity??1,0,IS(o))):d&&(i.opacity=Vt(a.opacity??1,s.opacity??1,
  o));
  for(let f=0;
  f<PS;
    f++){
    const m=kg[f];
    let y=_0(a,m),p=_0(s,m);
    if(y===void 0&&p===void 0)continue;
    y||(y=0),p||(p=0),y===0||p===0||O0(y)===O0(p)?(i[m]=Math.max(Vt(V0(y),V0(p),o),0),(pn.test(p)||pn.test(y))&&(i[m]+="%")):i[m]=p
  }(a.rotate||s.rotate)&&(i.rotate=Vt(a.rotate||0,s.rotate||0,o))
}
  function _0(i,a){
  return i[a]!==void 0?i[a]:i.borderRadius
}
const $S=Gg(0,.5,jy),IS=Gg(.5,.95,Ce);
  function Gg(i,a,s){
  return o=>o<i?0:o>a?1:s(Ma(i,a,o))
}
  function tT(i,a,s){
  const o=ae(i)?i:sn(i);
  return o.start(Sf("",o,a,s)),o.animation
}
  function Ll(i,a,s,o={
  passive:!0
}
  ){
  return i.addEventListener(a,s,o),()=>i.removeEventListener(a,s)
}
const eT=(i,a)=>i.depth-a.depth;
  class nT{
    constructor(){
    this.children=[],this.isDirty=!1
  }
    add(a){
    af(this.children,a),this.isDirty=!0
  }
    remove(a){
    To(this.children,a),this.isDirty=!0
  }
    forEach(a){
    this.isDirty&&this.children.sort(eT),this.isDirty=!1,this.children.forEach(a)
  }
}
  function iT(i,a){
    const s=be.now(),o=({
    timestamp:c
  }
    )=>{
    const d=c-s;
    d>=a&&(Ie(o),i(d-a))
  }
  ;
  return St.setup(o,!0),()=>Ie(o)
}
  function xo(i){
  return ae(i)?i.get():i
}
  class aT{
    constructor(){
    this.members=[]
  }
    add(a){
    af(this.members,a);
    for(let s=this.members.length-1;
    s>=0;
      s--){
      const o=this.members[s];
      if(o===a||o===this.lead||o===this.prevLead)continue;
      const c=o.instance;
      (!c||c.isConnected===!1)&&!o.snapshot&&(To(this.members,o),o.unmount())
    }
    a.scheduleRender()
  }
    remove(a){
      if(To(this.members,a),a===this.prevLead&&(this.prevLead=void 0),a===this.lead){
      const s=this.members[this.members.length-1];
      s&&this.promote(s)
    }
  }
    relegate(a){
    for(let s=this.members.indexOf(a)-1;
    s>=0;
      s--){
      const o=this.members[s];
      if(o.isPresent!==!1&&o.instance?.isConnected!==!1)return this.promote(o),!0
    }
    return!1
  }
    promote(a,s){
    const o=this.lead;
      if(a!==o&&(this.prevLead=o,this.lead=a,a.show(),o)){
      o.updateSnapshot(),a.scheduleRender();
        const{
        layoutDependency:c
      }
        =o.options,{
        layoutDependency:d
      }
      =a.options;
      (c===void 0||c!==d)&&(a.resumeFrom=o,s&&(o.preserveOpacity=!0),o.snapshot&&(a.snapshot=o.snapshot,a.snapshot.latestValues=o.animationValues||o.latestValues),
      a.root?.isUpdating&&(a.isLayoutDirty=!0)),a.options.crossfade===!1&&o.hide()
    }
  }
    exitAnimationComplete(){
      this.members.forEach(a=>{
      a.options.onExitComplete?.(),a.resumingFrom?.options.onExitComplete?.()
    }
    )
  }
    scheduleRender(){
    this.members.forEach(a=>a.instance&&a.scheduleRender(!1))
  }
    removeLeadSnapshot(){
    this.lead?.snapshot&&(this.lead.snapshot=void 0)
  }
}
  const So={
  hasAnimatedSinceResize:!0,hasEverUpdated:!1
}
,mc=["","X","Y","Z"],lT=1e3;
let sT=0;
  function pc(i,a,s,o){
    const{
    latestValues:c
  }
  =a;
  c[i]&&(s[i]=c[i],a.setStaticValue(i,0),o&&(o[i]=0))
}
  function qg(i){
  if(i.hasCheckedOptimisedAppear=!0,i.root===i)return;
    const{
    visualElement:a
  }
  =i.options;
  if(!a)return;
  const s=rg(a);
    if(window.MotionHasOptimisedAnimation(s,"transform")){
      const{
      layout:c,layoutId:d
    }
    =i.options;
    window.MotionCancelOptimisedAnimation(s,"transform",St,!(c||d))
  }
    const{
    parent:o
  }
  =i;
  o&&!o.hasCheckedOptimisedAppear&&qg(o)
}
  function Yg({
  attachResizeListener:i,defaultParent:a,measureScroll:s,checkIsScrollRoot:o,resetTransform:c
}
  ){
    return class{
      constructor(f={
    }
      ,m=a?.()){
        this.id=sT++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={
      }
      ,this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,
      this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,
        this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={
        x:1,y:1
      }
      ,this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),
        this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{
        this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())
      }
        ,this.updateProjection=()=>{
        this.projectionUpdateScheduled=!1,this.nodes.forEach(uT),this.nodes.forEach(pT),this.nodes.forEach(yT),this.nodes.forEach(cT)
      }
      ,this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,
      this.sharedNodes=new Map,this.latestValues=f,this.root=m?m.root||m:this,this.path=m?[...m.path,m]:[],this.parent=m,this.depth=m?m.depth+1:0;
      for(let y=0;
      y<this.path.length;
      y++)this.path[y].shouldResetTransform=!0;
      this.root===this&&(this.nodes=new nT)
    }
      addEventListener(f,m){
      return this.eventHandlers.has(f)||this.eventHandlers.set(f,new sf),this.eventHandlers.get(f).add(m)
    }
      notifyListeners(f,...m){
      const y=this.eventHandlers.get(f);
      y&&y.notify(...m)
    }
      hasListeners(f){
      return this.eventHandlers.has(f)
    }
      mount(f){
      if(this.instance)return;
      this.isSVG=Df(f)&&!sS(f),this.instance=f;
        const{
        layoutId:m,layout:y,visualElement:p
      }
      =this.options;
      if(p&&!p.current&&p.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(y||m)&&(this.isLayoutDirty=!0),
        i){
        let v,b=0;
        const x=()=>this.root.updateBlockedByResize=!1;
          St.read(()=>{
          b=window.innerWidth
        }
          ),i(f,()=>{
          const w=window.innerWidth;
          w!==b&&(b=w,this.root.updateBlockedByResize=!0,v&&v(),v=iT(x,250),So.hasAnimatedSinceResize&&(So.hasAnimatedSinceResize=!1,
          this.nodes.forEach(L0)))
        }
        )
      }
        m&&this.root.registerSharedNode(m,this),this.options.animate!==!1&&p&&(m||y)&&this.addEventListener("didUpdate",({
        delta:v,hasLayoutChanged:b,hasRelativeLayoutChanged:x,layout:w
      }
        )=>{
          if(this.isTreeAnimationBlocked()){
          this.target=void 0,this.relativeTarget=void 0;
          return
        }
          const N=this.options.transition||p.getDefaultTransition()||ST,{
          onLayoutAnimationStart:D,onLayoutAnimationComplete:B
        }
        =p.getProps(),H=!this.targetLayout||!Hg(this.targetLayout,w),Y=!b&&x;
          if(this.options.layoutRoot||this.resumeFrom||Y||b&&(H||!this.currentAnimation)){
          this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);
            const G={
            ...xf(N,"layout"),onPlay:D,onComplete:B
          }
          ;
          (p.shouldReduceMotion||this.options.layoutRoot)&&(G.delay=0,G.type=!1),this.startAnimation(G),this.setAnimationOrigin(v,Y,
          G.path)
        }
        else b||L0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();
        this.targetLayout=w
      }
      )
    }
      unmount(){
      this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);
      const f=this.getStack();
      f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ie(this.updateProjection)
    }
      blockUpdate(){
      this.updateManuallyBlocked=!0
    }
      unblockUpdate(){
      this.updateManuallyBlocked=!1
    }
      isUpdateBlocked(){
      return this.updateManuallyBlocked||this.updateBlockedByResize
    }
      isTreeAnimationBlocked(){
      return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1
    }
      startUpdate(){
      this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(gT),this.animationId++)
    }
      getTransformTemplate(){
        const{
        visualElement:f
      }
      =this.options;
      return f&&f.getProps().transformTemplate
    }
      willUpdate(f=!0){
        if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){
        this.options.onExitComplete&&this.options.onExitComplete();
        return
      }
      if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&qg(this),!this.root.isUpdating&&this.root.startUpdate(),
      this.isLayoutDirty)return;
      this.isLayoutDirty=!0;
      for(let v=0;
      v<this.path.length;
        v++){
        const b=this.path[v];
        b.shouldResetTransform=!0,(typeof b.latestValues.x=="string"||typeof b.latestValues.y=="string")&&(b.isLayoutDirty=!0),b.updateScroll("snapshot"),
        b.options.layoutRoot&&b.willUpdate(!1)
      }
        const{
        layoutId:m,layout:y
      }
      =this.options;
      if(m===void 0&&!y)return;
      const p=this.getTransformTemplate();
      this.prevTransformTemplateValue=p?p(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")
    }
      update(){
        if(this.updateScheduled=!1,this.isUpdateBlocked()){
        const y=this.updateBlockedByResize;
        this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),y&&this.nodes.forEach(dT),this.nodes.forEach(B0);
        return
      }
        if(this.animationId<=this.animationCommitId){
        this.nodes.forEach(U0);
        return
      }
      this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(hT),this.nodes.forEach(mT),
      this.nodes.forEach(oT),this.nodes.forEach(rT)):this.nodes.forEach(U0),this.clearAllSnapshots();
      const m=be.now();
      re.delta=rn(0,1e3/60,m-re.timestamp),re.timestamp=m,re.isProcessing=!0,lc.update.process(re),lc.preRender.process(re),lc.render.process(re),
      re.isProcessing=!1
    }
      didUpdate(){
      this.updateScheduled||(this.updateScheduled=!0,wa.read(this.scheduleUpdate))
    }
      clearAllSnapshots(){
      this.nodes.forEach(fT),this.sharedNodes.forEach(vT)
    }
      scheduleUpdateProjection(){
      this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,St.preRender(this.updateProjection,!1,!0))
    }
      scheduleCheckAfterUnmount(){
        St.postRender(()=>{
        this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()
      }
      )
    }
      updateSnapshot(){
      this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!xe(this.snapshot.measuredBox.x)&&!xe(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))
    }
      updateLayout(){
      if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;
      if(this.resumeFrom&&!this.resumeFrom.instance)for(let y=0;
      y<this.path.length;
      y++)this.path[y].updateScroll();
      const f=this.layout;
      this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=ie()),this.isLayoutDirty=!1,
      this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);
        const{
        visualElement:m
      }
      =this.options;
      m&&m.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)
    }
      updateScroll(f="measure"){
      let m=!!(this.options.layoutScroll&&this.instance);
        if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(m=!1),m&&this.instance){
        const y=o(this.instance);
          this.scroll={
          animationId:this.root.animationId,phase:f,isRoot:y,offset:s(this.instance),wasRoot:this.scroll?this.scroll.isRoot:y
        }
      }
    }
      resetTransform(){
      if(!c)return;
      const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,m=this.projectionDelta&&!Lg(this.projectionDelta),
      y=this.getTransformTemplate(),p=y?y(this.latestValues,""):void 0,v=p!==this.prevTransformTemplateValue;
      f&&this.instance&&(m||ji(this.latestValues)||v)&&(c(this.instance,p),this.shouldResetTransform=!1,this.scheduleRender())
    }
      measure(f=!0){
      const m=this.measurePageBox();
      let y=this.removeElementScroll(m);
        return f&&(y=this.removeTransform(y)),TT(y),{
          animationId:this.root.animationId,measuredBox:m,layoutBox:y,latestValues:{
        }
        ,source:this.id
      }
    }
      measurePageBox(){
        const{
        visualElement:f
      }
      =this.options;
      if(!f)return ie();
      const m=f.measureViewportBox();
        if(!(this.scroll?.wasRoot||this.path.some(AT))){
          const{
          scroll:p
        }
        =this.root;
        p&&(mn(m.x,p.offset.x),mn(m.y,p.offset.y))
      }
      return m
    }
      removeElementScroll(f){
      const m=ie();
      if(an(m,f),this.scroll?.wasRoot)return m;
      for(let y=0;
      y<this.path.length;
        y++){
          const p=this.path[y],{
          scroll:v,options:b
        }
        =p;
        p!==this.root&&v&&b.layoutScroll&&(v.wasRoot&&an(m,f),mn(m.x,v.offset.x),mn(m.y,v.offset.y))
      }
      return m
    }
      applyTransform(f,m=!1,y){
      const p=y||ie();
      an(p,f);
      for(let v=0;
      v<this.path.length;
        v++){
        const b=this.path[v];
        !m&&b.options.layoutScroll&&b.scroll&&b!==b.root&&(mn(p.x,-b.scroll.offset.x),mn(p.y,-b.scroll.offset.y)),ji(b.latestValues)&&bo(p,
        b.latestValues,b.layout?.layoutBox)
      }
      return ji(this.latestValues)&&bo(p,this.latestValues,this.layout?.layoutBox),p
    }
      removeTransform(f){
      const m=ie();
      an(m,f);
      for(let y=0;
      y<this.path.length;
        y++){
        const p=this.path[y];
        if(!ji(p.latestValues))continue;
        let v;
        p.instance&&(Zc(p.latestValues)&&p.updateSnapshot(),v=ie(),an(v,p.measurePageBox())),w0(m,p.latestValues,p.snapshot?.layoutBox,
        v)
      }
      return ji(this.latestValues)&&w0(m,this.latestValues),m
    }
      setTargetDelta(f){
      this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0
    }
      setOptions(f){
        this.options={
        ...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0
      }
    }
      clearMeasurements(){
      this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,
      this.target=void 0,this.isLayoutDirty=!1
    }
      forceRelativeParentToResolveTarget(){
      this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==re.timestamp&&this.relativeParent.resolveTargetDelta(!0)
    }
      resolveTargetDelta(f=!1){
      const m=this.getLead();
      this.isProjectionDirty||(this.isProjectionDirty=m.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=m.isTransformDirty),
      this.isSharedProjectionDirty||(this.isSharedProjectionDirty=m.isSharedProjectionDirty);
      const y=!!this.resumingFrom||this!==m;
      if(!(f||y&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;
        const{
        layout:v,layoutId:b
      }
      =this.options;
      if(!this.layout||!(v||b))return;
      this.resolvedRelativeTargetAt=re.timestamp;
      const x=this.getClosestProjectingParent();
      x&&this.linkedParentVersion!==x.layoutVersion&&!x.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&x&&x.layout?this.createRelativeTarget(x,
      this.layout.layoutBox,x.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ie(),
      this.targetWithTransforms=ie()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),
      XS(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,
      !1,this.target):an(this.target,this.layout.layoutBox),Dg(this.target,this.targetDelta)):an(this.target,this.layout.layoutBox),
      this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?this.createRelativeTarget(x,
      this.target,x.target):this.relativeParent=this.relativeTarget=void 0))
    }
      getClosestProjectingParent(){
      if(!(!this.parent||Zc(this.parent.latestValues)||Mg(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()
    }
      isProjecting(){
      return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)
    }
      createRelativeTarget(f,m,y){
      this.relativeParent=f,this.linkedParentVersion=f.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ie(),
      this.relativeTargetOrigin=ie(),Co(this.relativeTargetOrigin,m,y,this.options.layoutAnchor||void 0),an(this.relativeTarget,
      this.relativeTargetOrigin)
    }
      removeRelativeTarget(){
      this.relativeParent=this.relativeTarget=void 0
    }
      calcProjection(){
      const f=this.getLead(),m=!!this.resumingFrom||this!==f;
      let y=!0;
      if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(y=!1),m&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(y=!1),
      this.resolvedRelativeTargetAt===re.timestamp&&(y=!1),y)return;
        const{
        layout:p,layoutId:v
      }
      =this.options;
      if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),
      !this.layout||!(p||v))return;
      an(this.layoutCorrected,this.layout.layoutBox);
      const b=this.treeScale.x,x=this.treeScale.y;
      bS(this.layoutCorrected,this.treeScale,this.path,m),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,
      f.targetWithTransforms=ie());
        const{
        target:w
      }
      =f;
        if(!w){
        this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());
        return
      }
      !this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(S0(this.prevProjectionDelta.x,this.projectionDelta.x),
      S0(this.prevProjectionDelta.y,this.projectionDelta.y)),Vl(this.projectionDelta,this.layoutCorrected,w,this.latestValues),
      (this.treeScale.x!==b||this.treeScale.y!==x||!R0(this.projectionDelta.x,this.prevProjectionDelta.x)||!R0(this.projectionDelta.y,
      this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))
    }
      hide(){
      this.isVisible=!1
    }
      show(){
      this.isVisible=!0
    }
      scheduleRender(f=!0){
        if(this.options.visualElement?.scheduleRender(),f){
        const m=this.getStack();
        m&&m.scheduleRender()
      }
      this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)
    }
      createProjectionDeltas(){
      this.prevProjectionDelta=Aa(),this.projectionDelta=Aa(),this.projectionDeltaWithTransform=Aa()
    }
      setAnimationOrigin(f,m=!1,y){
        const p=this.snapshot,v=p?p.latestValues:{
      }
        ,b={
        ...this.latestValues
      }
      ,x=Aa();
      (!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!m;
      const w=ie(),N=p?p.source:void 0,D=this.layout?this.layout.source:void 0,B=N!==D,H=this.getStack(),Y=!H||H.members.length<=1,
      G=!!(B&&!Y&&this.options.crossfade===!0&&!this.path.some(xT));
      this.animationProgress=0;
      let q;
      const et=y?.interpolateProjection(f);
        this.mixTargetDelta=it=>{
        const J=it/1e3,P=et?.(J);
        P?(x.x.translate=P.x,x.x.scale=Vt(f.x.scale,1,J),x.x.origin=f.x.origin,x.x.originPoint=f.x.originPoint,x.y.translate=P.y,
        x.y.scale=Vt(f.y.scale,1,J),x.y.origin=f.y.origin,x.y.originPoint=f.y.originPoint):(H0(x.x,f.x,J),H0(x.y,f.y,J)),this.setTargetDelta(x),
        this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Co(w,this.layout.layoutBox,
        this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),bT(this.relativeTarget,this.relativeTargetOrigin,
        w,J),q&&JS(this.relativeTarget,q)&&(this.isProjectionDirty=!1),q||(q=ie()),an(q,this.relativeTarget)),B&&(this.animationValues=b,
        WS(b,v,this.latestValues,J,G,Y)),P&&P.rotate!==void 0&&(this.animationValues||(this.animationValues=b),this.animationValues.pathRotation=P.rotate),
        this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=J
      }
      ,this.mixTargetDelta(this.options.layoutRoot?1e3:0)
    }
      startAnimation(f){
      this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Ie(this.pendingAnimation),
        this.pendingAnimation=void 0),this.pendingAnimation=St.update(()=>{
        So.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=sn(0)),this.motionValue.jump(0,!1),this.currentAnimation=tT(this.motionValue,
          [0,1e3],{
            ...f,velocity:0,isSync:!0,onUpdate:m=>{
            this.mixTargetDelta(m),f.onUpdate&&f.onUpdate(m)
          }
            ,onStop:()=>{
          }
            ,onComplete:()=>{
            f.onComplete&&f.onComplete(),this.completeAnimation()
          }
        }
        ),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0
      }
      )
    }
      completeAnimation(){
      this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);
      const f=this.getStack();
      f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")
    }
      finishAnimation(){
      this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(lT),this.currentAnimation.stop()),this.completeAnimation()
    }
      applyTransformsToTarget(){
      const f=this.getLead();
        let{
        targetWithTransforms:m,target:y,layout:p,latestValues:v
      }
      =f;
        if(!(!m||!y||!p)){
          if(this!==f&&this.layout&&p&&Xg(this.options.animationType,this.layout.layoutBox,p.layoutBox)){
          y=this.target||ie();
          const b=xe(this.layout.layoutBox.x);
          y.x.min=f.target.x.min,y.x.max=y.x.min+b;
          const x=xe(this.layout.layoutBox.y);
          y.y.min=f.target.y.min,y.y.max=y.y.min+x
        }
        an(m,y),bo(m,v),Vl(this.projectionDeltaWithTransform,this.layoutCorrected,m,v)
      }
    }
      registerSharedNode(f,m){
      this.sharedNodes.has(f)||this.sharedNodes.set(f,new aT),this.sharedNodes.get(f).add(m);
      const p=m.options.initialPromotionConfig;
        m.promote({
        transition:p?p.transition:void 0,preserveFollowOpacity:p&&p.shouldPreserveFollowOpacity?p.shouldPreserveFollowOpacity(m):void 0
      }
      )
    }
      isLead(){
      const f=this.getStack();
      return f?f.lead===this:!0
    }
      getLead(){
        const{
        layoutId:f
      }
      =this.options;
      return f?this.getStack()?.lead||this:this
    }
      getPrevLead(){
        const{
        layoutId:f
      }
      =this.options;
      return f?this.getStack()?.prevLead:void 0
    }
      getStack(){
        const{
        layoutId:f
      }
      =this.options;
      if(f)return this.root.sharedNodes.get(f)
    }
      promote({
      needsReset:f,transition:m,preserveFollowOpacity:y
    }
      ={
    }
      ){
      const p=this.getStack();
        p&&p.promote(this,y),f&&(this.projectionDelta=void 0,this.needsReset=!0),m&&this.setOptions({
        transition:m
      }
      )
    }
      relegate(){
      const f=this.getStack();
      return f?f.relegate(this):!1
    }
      resetSkewAndRotation(){
        const{
        visualElement:f
      }
      =this.options;
      if(!f)return;
      let m=!1;
        const{
        latestValues:y
      }
      =f;
      if((y.z||y.rotate||y.rotateX||y.rotateY||y.rotateZ||y.skewX||y.skewY)&&(m=!0),!m)return;
        const p={
      }
      ;
      y.z&&pc("z",f,p,this.animationValues);
      for(let v=0;
      v<mc.length;
      v++)pc(`rotate${mc[v]}`,f,p,this.animationValues),pc(`skew${mc[v]}`,f,p,this.animationValues);
      f.render();
      for(const v in p)f.setStaticValue(v,p[v]),this.animationValues&&(this.animationValues[v]=p[v]);
      f.scheduleRender()
    }
      applyProjectionStyles(f,m){
      if(!this.instance||this.isSVG)return;
        if(!this.isVisible){
        f.visibility="hidden";
        return
      }
      const y=this.getTransformTemplate();
        if(this.needsReset){
        this.needsReset=!1,f.visibility="",f.opacity="",f.pointerEvents=xo(m?.pointerEvents)||"",f.transform=y?y(this.latestValues,
        ""):"none";
        return
      }
      const p=this.getLead();
        if(!this.projectionDelta||!this.layout||!p.target){
        this.options.layoutId&&(f.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,f.pointerEvents=xo(m?.pointerEvents)||""),
          this.hasProjected&&!ji(this.latestValues)&&(f.transform=y?y({
        }
        ,""):"none",this.hasProjected=!1);
        return
      }
      f.visibility="";
      const v=p.animationValues||p.latestValues;
      this.applyTransformsToTarget();
      let b=FS(this.projectionDeltaWithTransform,this.treeScale,v);
      y&&(b=y(v,b)),f.transform=b;
        const{
        x,y:w
      }
      =this.projectionDelta;
      f.transformOrigin=`${x.origin*100}% ${w.origin*100}% 0`,p.animationValues?f.opacity=p===this?v.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:f.opacity=p===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;
        for(const N in Jc){
        if(v[N]===void 0)continue;
          const{
          correct:D,applyTo:B,isCSSVariable:H
        }
        =Jc[N],Y=b==="none"?v[N]:D(v[N],p);
          if(B){
          const G=B.length;
          for(let q=0;
          q<G;
          q++)f[B[q]]=Y
        }
        else H?this.options.visualElement.renderState.vars[N]=Y:f[N]=Y
      }
      this.options.layoutId&&(f.pointerEvents=p===this?xo(m?.pointerEvents)||"":"none")
    }
      clearSnapshot(){
      this.resumeFrom=this.snapshot=void 0
    }
      resetTree(){
      this.root.nodes.forEach(f=>f.currentAnimation?.stop()),this.root.nodes.forEach(B0),this.root.sharedNodes.clear()
    }
  }
}
  function oT(i){
  i.updateLayout()
}
  function rT(i){
  const a=i.resumeFrom?.snapshot||i.snapshot;
    if(i.isLead()&&i.layout&&a&&i.hasListeners("didUpdate")){
      const{
      layoutBox:s,measuredBox:o
    }
      =i.layout,{
      animationType:c
    }
    =i.options,d=a.source!==i.layout.source;
      if(c==="size")hn(v=>{
      const b=d?a.measuredBox[v]:a.layoutBox[v],x=xe(b);
      b.min=s[v].min,b.max=b.min+x
    }
    );
      else if(c==="x"||c==="y"){
      const v=c==="x"?"y":"x";
      Fc(d?a.measuredBox[v]:a.layoutBox[v],s[v])
    }
      else Xg(c,a.layoutBox,s)&&hn(v=>{
      const b=d?a.measuredBox[v]:a.layoutBox[v],x=xe(s[v]);
      b.max=b.min+x,i.relativeTarget&&!i.currentAnimation&&(i.isProjectionDirty=!0,i.relativeTarget[v].max=i.relativeTarget[v].min+x)
    }
    );
    const f=Aa();
    Vl(f,s,a.layoutBox);
    const m=Aa();
    d?Vl(m,i.applyTransform(o,!0),a.measuredBox):Vl(m,s,a.layoutBox);
    const y=!Lg(f);
    let p=!1;
      if(!i.resumeFrom){
      const v=i.getClosestProjectingParent();
        if(v&&!v.resumeFrom){
          const{
          snapshot:b,layout:x
        }
        =v;
          if(b&&x){
          const w=i.options.layoutAnchor||void 0,N=ie();
          Co(N,a.layoutBox,b.layoutBox,w);
          const D=ie();
          Co(D,s,x.layoutBox,w),Hg(N,D)||(p=!0),v.options.layoutRoot&&(i.relativeTarget=D,i.relativeTargetOrigin=N,i.relativeParent=v)
        }
      }
    }
      i.notifyListeners("didUpdate",{
      layout:s,snapshot:a,delta:m,layoutDelta:f,hasLayoutChanged:y,hasRelativeLayoutChanged:p
    }
    )
  }
    else if(i.isLead()){
      const{
      onExitComplete:s
    }
    =i.options;
    s&&s()
  }
  i.options.transition=void 0
}
  function uT(i){
  i.parent&&(i.isProjecting()||(i.isProjectionDirty=i.parent.isProjectionDirty),i.isSharedProjectionDirty||(i.isSharedProjectionDirty=!!(i.isProjectionDirty||i.parent.isProjectionDirty||i.parent.isSharedProjectionDirty)),
  i.isTransformDirty||(i.isTransformDirty=i.parent.isTransformDirty))
}
  function cT(i){
  i.isProjectionDirty=i.isSharedProjectionDirty=i.isTransformDirty=!1
}
  function fT(i){
  i.clearSnapshot()
}
  function B0(i){
  i.clearMeasurements()
}
  function dT(i){
  i.isLayoutDirty=!0,i.updateLayout()
}
  function U0(i){
  i.isLayoutDirty=!1
}
  function hT(i){
  i.isAnimationBlocked&&i.layout&&!i.isLayoutDirty&&(i.snapshot=i.layout,i.isLayoutDirty=!0)
}
  function mT(i){
    const{
    visualElement:a
  }
  =i.options;
  a&&a.getProps().onBeforeLayoutMeasure&&a.notify("BeforeLayoutMeasure"),i.resetTransform()
}
  function L0(i){
  i.finishAnimation(),i.targetDelta=i.relativeTarget=i.target=void 0,i.isProjectionDirty=!0
}
  function pT(i){
  i.resolveTargetDelta()
}
  function yT(i){
  i.calcProjection()
}
  function gT(i){
  i.resetSkewAndRotation()
}
  function vT(i){
  i.removeLeadSnapshot()
}
  function H0(i,a,s){
  i.translate=Vt(a.translate,0,s),i.scale=Vt(a.scale,1,s),i.origin=a.origin,i.originPoint=a.originPoint
}
  function k0(i,a,s,o){
  i.min=Vt(a.min,s.min,o),i.max=Vt(a.max,s.max,o)
}
  function bT(i,a,s,o){
  k0(i.x,a.x,s.x,o),k0(i.y,a.y,s.y,o)
}
  function xT(i){
  return i.animationValues&&i.animationValues.opacityExit!==void 0
}
  const ST={
  duration:.45,ease:[.4,0,.1,1]
}
,G0=i=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(i),q0=G0("applewebkit/")&&!G0("chrome/")?Math.round:Ce;
  function Y0(i){
  i.min=q0(i.min),i.max=q0(i.max)
}
  function TT(i){
  Y0(i.x),Y0(i.y)
}
  function Xg(i,a,s){
  return i==="position"||i==="preserve-aspect"&&!YS(N0(a),N0(s),.2)
}
  function AT(i){
  return i!==i.root&&i.scroll?.wasRoot
}
  const ET=Yg({
    attachResizeListener:(i,a)=>Ll(i,"resize",a),measureScroll:()=>({
    x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0
  }
  ),checkIsScrollRoot:()=>!0
}
  ),yc={
  current:void 0
}
  ,Kg=Yg({
    measureScroll:i=>({
    x:i.scrollLeft,y:i.scrollTop
  }
    ),defaultParent:()=>{
      if(!yc.current){
        const i=new ET({
      }
      );
        i.mount(window),i.setOptions({
        layoutScroll:!0
      }
      ),yc.current=i
    }
    return yc.current
  }
    ,resetTransform:(i,a)=>{
    i.style.transform=a!==void 0?a:"none"
  }
  ,checkIsScrollRoot:i=>window.getComputedStyle(i).position==="fixed"
}
  ),ql=k.createContext({
  transformPagePoint:i=>i,isStatic:!1,reducedMotion:"never"
}
);
  function X0(i,a){
  if(typeof i=="function")return i(a);
  i!=null&&(i.current=a)
}
  function MT(...i){
    return a=>{
    let s=!1;
      const o=i.map(c=>{
      const d=X0(c,a);
      return!s&&typeof d=="function"&&(s=!0),d
    }
    );
      if(s)return()=>{
      for(let c=0;
      c<o.length;
        c++){
        const d=o[c];
        typeof d=="function"?d():X0(i[c],null)
      }
    }
  }
}
  function DT(...i){
  return k.useCallback(MT(...i),i)
}
  class wT extends k.Component{
    getSnapshotBeforeUpdate(a){
    const s=this.props.childRef.current;
      if(Rl(s)&&a.isPresent&&!this.props.isPresent&&this.props.pop!==!1){
      const o=s.offsetParent,c=Rl(o)&&o.offsetWidth||0,d=Rl(o)&&o.offsetHeight||0,f=getComputedStyle(s),m=this.props.sizeRef.current;
      m.height=parseFloat(f.height),m.width=parseFloat(f.width),m.top=s.offsetTop,m.left=s.offsetLeft,m.right=c-m.width-m.left,
      m.bottom=d-m.height-m.top,m.direction=f.direction
    }
    return null
  }
    componentDidUpdate(){
  }
    render(){
    return this.props.children
  }
}
  function zT({
  children:i,isPresent:a,anchorX:s,anchorY:o,root:c,pop:d
}
  ){
    const f=k.useId(),m=k.useRef(null),y=k.useRef({
    width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"
  }
    ),{
    nonce:p
  }
  =k.useContext(ql),v=i.props?.ref??i?.ref,b=DT(m,v);
    return k.useInsertionEffect(()=>{
      const{
      width:x,height:w,top:N,left:D,right:B,bottom:H,direction:Y
    }
    =y.current;
    if(a||d===!1||!m.current||!x||!w)return;
    const G=Y==="rtl",q=s==="left"?G?`right: ${B}`:`left: ${D}`:G?`left: ${D}`:`right: ${B}`,et=o==="bottom"?`bottom: ${H}`:`top: ${N}`;
    m.current.dataset.motionPopId=f;
    const it=document.createElement("style");
    p&&(it.nonce=p);
    const J=c??document.head;
    return J.appendChild(it),it.sheet&&it.sheet.insertRule(`
          [data-motion-pop-id="${f}"] {
            position: absolute !important;
            width: ${x}px !important;
            height: ${w}px !important;
            ${q}px !important;
            ${et}px !important;
          }
        `),
      ()=>{
      m.current?.removeAttribute("data-motion-pop-id"),J.contains(it)&&J.removeChild(it)
    }
  }
    ,[a]),S.jsx(wT,{
      isPresent:a,childRef:m,sizeRef:y,pop:d,children:d===!1?i:k.cloneElement(i,{
      ref:b
    }
    )
  }
  )
}
  const CT=({
  children:i,initial:a,isPresent:s,onExitComplete:o,custom:c,presenceAffectsLayout:d,mode:f,anchorX:m,anchorY:y,root:p
}
  )=>{
  const v=oi(jT),b=k.useId();
    let x=!0,w=k.useMemo(()=>(x=!1,{
      id:b,initial:a,isPresent:s,custom:c,onExitComplete:N=>{
      v.set(N,!0);
      for(const D of v.values())if(!D)return;
      o&&o()
    }
    ,register:N=>(v.set(N,!1),()=>v.delete(N))
  }
  ),[s,v,o]);
    return d&&x&&(w={
    ...w
  }
    ),k.useMemo(()=>{
    v.forEach((N,D)=>v.set(D,!1))
  }
    ,[s]),k.useEffect(()=>{
    !s&&!v.size&&o&&o()
  }
    ,[s]),i=S.jsx(zT,{
    pop:f==="popLayout",isPresent:s,anchorX:m,anchorY:y,root:p,children:i
  }
    ),S.jsx(Oo.Provider,{
    value:w,children:i
  }
  )
}
;
  function jT(){
  return new Map
}
  function Zg(i=!0){
  const a=k.useContext(Oo);
  if(a===null)return[!0,null];
    const{
    isPresent:s,onExitComplete:o,register:c
  }
  =a,d=k.useId();
    k.useEffect(()=>{
    if(i)return c(d)
  }
  ,[i]);
  const f=k.useCallback(()=>i&&o&&o(d),[d,o,i]);
  return!s&&o?[!1,f]:[!0]
}
const uo=i=>i.key||"";
  function K0(i){
  const a=[];
    return k.Children.forEach(i,s=>{
    k.isValidElement(s)&&a.push(s)
  }
  ),a
}
  const Pc=({
  children:i,custom:a,initial:s=!0,onExitComplete:o,presenceAffectsLayout:c=!0,mode:d="sync",propagate:f=!1,anchorX:m="left",
  anchorY:y="top",root:p
}
  )=>{
  const[v,b]=Zg(f),x=k.useMemo(()=>K0(i),[i]),w=f&&!v?[]:x.map(uo),N=k.useRef(!0),D=k.useRef(x),B=oi(()=>new Map),H=k.useRef(new Set),
  [Y,G]=k.useState(x),[q,et]=k.useState(x);
    Vo(()=>{
    N.current=!1,D.current=x;
    for(let P=0;
    P<q.length;
      P++){
      const lt=uo(q[P]);
      w.includes(lt)?(B.delete(lt),H.current.delete(lt)):B.get(lt)!==!0&&B.set(lt,!1)
    }
  }
  ,[q,w.length,w.join("-")]);
  const it=[];
    if(x!==Y){
    let P=[...x];
    for(let lt=0;
    lt<q.length;
      lt++){
      const tt=q[lt],mt=uo(tt);
      w.includes(mt)||(P.splice(lt,0,tt),it.push(tt))
    }
    return d==="wait"&&it.length&&(P=it),et(K0(P)),G(x),null
  }
    const{
    forceRender:J
  }
  =k.useContext(nf);
    return S.jsx(S.Fragment,{
      children:q.map(P=>{
        const lt=uo(P),tt=f&&!v?!1:x===q||w.includes(lt),mt=()=>{
        if(H.current.has(lt))return;
        if(B.has(lt))H.current.add(lt),B.set(lt,!0);
        else return;
        let xt=!0;
          B.forEach(Ft=>{
          Ft||(xt=!1)
        }
        ),xt&&(J?.(),et(D.current),f&&b?.(),o&&o())
      }
      ;
        return S.jsx(CT,{
        isPresent:tt,initial:!N.current||s?void 0:!1,custom:a,presenceAffectsLayout:c,mode:d,root:p,onExitComplete:tt?void 0:mt,anchorX:m,
        anchorY:y,children:P
      }
      ,lt)
    }
    )
  }
  )
}
  ,Qg=k.createContext({
  strict:!1
}
  ),Z0={
  animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag",
  "dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart",
  "onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],
  layout:["layout","layoutId"]
}
;
let Q0=!1;
  function NT(){
  if(Q0)return;
    const i={
  }
  ;
    for(const a in Z0)i[a]={
    isEnabled:s=>Z0[a].some(o=>!!s[o])
  }
  ;
  Tg(i),Q0=!0
}
  function Jg(){
  return NT(),pS()
}
  function RT(i){
  const a=Jg();
    for(const s in i)a[s]={
    ...a[s],...i[s]
  }
  ;
  Tg(a)
}
const VT=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom",
"inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd",
"onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter",
"onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);
  function jo(i){
  return i.startsWith("while")||i.startsWith("drag")&&i!=="draggable"||i.startsWith("layout")||i.startsWith("onTap")||i.startsWith("onPan")||i.startsWith("onLayout")||VT.has(i)
}
let Fg=i=>!jo(i);
  function OT(i){
  typeof i=="function"&&(Fg=a=>a.startsWith("on")?!jo(a):i(a))
}
  try{
  OT(require("@emotion/is-prop-valid").default)
}
  catch{
}
  function _T(i,a,s){
    const o={
  }
  ;
  for(const c in i)c==="values"&&typeof i.values=="object"||ae(i[c])||(Fg(c)||s===!0&&jo(c)||!a&&!jo(c)||i.draggable&&c.startsWith("onDrag"))&&(o[c]=i[c]);
  return o
}
  const Lo=k.createContext({
}
);
  function BT(i,a){
    if(Uo(i)){
      const{
      initial:s,animate:o
    }
    =i;
      return{
      initial:s===!1||Ul(s)?s:void 0,animate:Ul(o)?o:void 0
    }
  }
    return i.inherit!==!1?a:{
  }
}
  function UT(i){
    const{
    initial:a,animate:s
  }
  =BT(i,k.useContext(Lo));
    return k.useMemo(()=>({
    initial:a,animate:s
  }
  ),[J0(a),J0(s)])
}
  function J0(i){
  return Array.isArray(i)?i.join(" "):i
}
  const Nf=()=>({
    style:{
  }
    ,transform:{
  }
    ,transformOrigin:{
  }
    ,vars:{
  }
}
);
  function Pg(i,a,s){
  for(const o in a)!ae(a[o])&&!Cg(o,s)&&(i[o]=a[o])
}
  function LT({
  transformTemplate:i
}
  ,a){
    return k.useMemo(()=>{
    const s=Nf();
      return Cf(s,a,i),Object.assign({
    }
    ,s.vars,s.style)
  }
  ,[a])
}
  function HT(i,a){
    const s=i.style||{
  }
    ,o={
  }
  ;
  return Pg(o,s,i),Object.assign(o,LT(i,a)),o
}
  function kT(i,a){
    const s={
  }
  ,o=HT(i,a);
  return i.drag&&i.dragListener!==!1&&(s.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=i.drag===!0?"none":`pan-${i.drag==="x"?"y":"x"}`),
  i.tabIndex===void 0&&(i.onTap||i.onTapStart||i.whileTap)&&(s.tabIndex=0),s.style=o,s
}
  const Wg=()=>({
    ...Nf(),attrs:{
  }
}
);
  function GT(i,a,s,o){
    const c=k.useMemo(()=>{
    const d=Wg();
      return jg(d,a,Rg(o),i.transformTemplate,i.style),{
        ...d.attrs,style:{
        ...d.style
      }
    }
  }
  ,[a]);
    if(i.style){
      const d={
    }
    ;
      Pg(d,i.style,i),c.style={
      ...d,...c.style
    }
  }
  return c
}
const qT=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern",
"polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];
  function Rf(i){
  return typeof i!="string"||i.includes("-")?!1:!!(qT.indexOf(i)>-1||/[A-Z]/u.test(i))
}
  function YT(i,a,s,{
  latestValues:o
}
  ,c,d=!1,f){
    const y=(f??Rf(i)?GT:kT)(a,o,c,i),p=_T(a,typeof i=="string",d),v=i!==k.Fragment?{
    ...p,...y,ref:s
  }
    :{
  }
    ,{
    children:b
  }
  =a,x=k.useMemo(()=>ae(b)?b.get():b,[b]);
    return k.createElement(i,{
    ...v,children:x
  }
  )
}
  function XT({
  scrapeMotionValuesFromProps:i,createRenderState:a
}
  ,s,o,c){
    return{
    latestValues:KT(s,o,c,i),renderState:a()
  }
}
  function KT(i,a,s,o){
    const c={
  }
    ,d=o(i,{
  }
  );
  for(const x in d)c[x]=xo(d[x]);
    let{
    initial:f,animate:m
  }
  =i;
  const y=Uo(i),p=xg(i);
  a&&p&&!y&&i.inherit!==!1&&(f===void 0&&(f=a.initial),m===void 0&&(m=a.animate));
  let v=s?s.initial===!1:!1;
  v=v||f===!1;
  const b=v?m:f;
    if(b&&typeof b!="boolean"&&!Bo(b)){
    const x=Array.isArray(b)?b:[b];
    for(let w=0;
    w<x.length;
      w++){
      const N=Tf(i,x[w]);
        if(N){
          const{
          transitionEnd:D,transition:B,...H
        }
        =N;
          for(const Y in H){
          let G=H[Y];
            if(Array.isArray(G)){
            const q=v?G.length-1:0;
            G=G[q]
          }
          G!==null&&(c[Y]=G)
        }
        for(const Y in D)c[Y]=D[Y]
      }
    }
  }
  return c
}
  const $g=i=>(a,s)=>{
  const o=k.useContext(Lo),c=k.useContext(Oo),d=()=>XT(i,a,o,c);
  return s?d():oi(d)
}
  ,ZT=$g({
  scrapeMotionValuesFromProps:jf,createRenderState:Nf
}
  ),QT=$g({
  scrapeMotionValuesFromProps:Vg,createRenderState:Wg
}
),JT=Symbol.for("motionComponentSymbol");
  function FT(i,a,s){
  const o=k.useRef(s);
    k.useInsertionEffect(()=>{
    o.current=s
  }
  );
  const c=k.useRef(null);
    return k.useCallback(d=>{
    d&&i.onMount?.(d),a&&(d?a.mount(d):a.unmount());
    const f=o.current;
      if(typeof f=="function")if(d){
      const m=f(d);
      typeof m=="function"&&(c.current=m)
    }
    else c.current?(c.current(),c.current=null):f(d);
    else f&&(f.current=d)
  }
  ,[a])
}
  const Ig=k.createContext({
}
);
  function xa(i){
  return i&&typeof i=="object"&&Object.prototype.hasOwnProperty.call(i,"current")
}
  function PT(i,a,s,o,c,d){
    const{
    visualElement:f
  }
  =k.useContext(Lo),m=k.useContext(Qg),y=k.useContext(Oo),p=k.useContext(ql),v=p.reducedMotion,b=p.skipAnimations,x=k.useRef(null),
  w=k.useRef(!1);
    o=o||m.renderer,!x.current&&o&&(x.current=o(i,{
    visualState:a,parent:f,props:s,presenceContext:y,blockInitialAnimation:y?y.initial===!1:!1,reducedMotionConfig:v,skipAnimations:b,
    isSVG:d
  }
  ),w.current&&x.current&&(x.current.manuallyAnimateOnMount=!0));
  const N=x.current,D=k.useContext(Ig);
  N&&!N.projection&&c&&(N.type==="html"||N.type==="svg")&&WT(x.current,s,c,D);
  const B=k.useRef(!1);
    k.useInsertionEffect(()=>{
    N&&B.current&&N.update(s,y)
  }
  );
  const H=s[og],Y=k.useRef(!!H&&typeof window<"u"&&!window.MotionHandoffIsComplete?.(H)&&window.MotionHasOptimisedAnimation?.(H));
    return Vo(()=>{
    w.current=!0,N&&(B.current=!0,window.MotionIsMounted=!0,N.updateFeatures(),N.scheduleRenderMicrotask(),Y.current&&N.animationState&&N.animationState.animateChanges())
  }
    ),k.useEffect(()=>{
      N&&(!Y.current&&N.animationState&&N.animationState.animateChanges(),Y.current&&(queueMicrotask(()=>{
      window.MotionHandoffMarkAsComplete?.(H)
    }
    ),Y.current=!1),N.enteringChildren=void 0)
  }
  ),N
}
  function WT(i,a,s,o){
    const{
    layoutId:c,layout:d,drag:f,dragConstraints:m,layoutScroll:y,layoutRoot:p,layoutAnchor:v,layoutCrossfade:b
  }
  =a;
    i.projection=new s(i.latestValues,a["data-framer-portal-id"]?void 0:t1(i.parent)),i.projection.setOptions({
    layoutId:c,layout:d,alwaysMeasureLayout:!!f||m&&xa(m),visualElement:i,animationType:typeof d=="string"?d:"both",initialPromotionConfig:o,
    crossfade:b,layoutScroll:y,layoutRoot:p,layoutAnchor:v
  }
  )
}
  function t1(i){
  if(i)return i.options.allowProjection!==!1?i.projection:t1(i.parent)
}
  function gc(i,{
  forwardMotionProps:a=!1,type:s
}
  ={
}
  ,o,c){
  o&&RT(o);
  const d=s?s==="svg":Rf(i),f=d?QT:ZT;
    function m(p,v){
    let b;
      const x={
      ...k.useContext(ql),...p,layoutId:$T(p)
    }
      ,{
      isStatic:w
    }
    =x,N=UT(p),D=f(p,w);
      if(!w&&typeof window<"u"){
      IT();
      const B=tA(x);
      b=B.MeasureLayout,N.visualElement=PT(i,D,x,c,B.ProjectionNode,d)
    }
      return S.jsxs(Lo.Provider,{
        value:N,children:[b&&N.visualElement?S.jsx(b,{
        visualElement:N.visualElement,...x
      }
      ):null,YT(i,p,FT(D,N.visualElement,v),D,w,a,d)]
    }
    )
  }
    m.displayName=`motion.${typeof i=="string"?i:`create(${
    i.displayName??i.name??""
  }
  )`}`;
  const y=k.forwardRef(m);
  return y[JT]=i,y
}
  function $T({
  layoutId:i
}
  ){
  const a=k.useContext(nf).id;
  return a&&i!==void 0?a+"-"+i:i
}
  function IT(i,a){
  k.useContext(Qg).strict
}
  function tA(i){
    const a=Jg(),{
    drag:s,layout:o
  }
  =a;
    if(!s&&!o)return{
  }
  ;
    const c={
    ...s,...o
  }
  ;
    return{
    MeasureLayout:s?.isEnabled(i)||o?.isEnabled(i)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode
  }
}
  function eA(i,a){
  if(typeof Proxy>"u")return gc;
  const s=new Map,o=(d,f)=>gc(d,f,i,a),c=(d,f)=>o(d,f);
    return new Proxy(c,{
    get:(d,f)=>f==="create"?o:(s.has(f)||s.set(f,gc(f,void 0,i,a)),s.get(f))
  }
  )
}
  const nA=(i,a)=>a.isSVG??Rf(i)?new RS(a):new DS(a,{
  allowProjection:i!==k.Fragment
}
);
  class iA extends ui{
    constructor(a){
    super(a),a.animationState||(a.animationState=US(a))
  }
    updateAnimationControlsSubscription(){
      const{
      animate:a
    }
    =this.node.getProps();
    Bo(a)&&(this.unmountControls=a.subscribe(this.node))
  }
    mount(){
    this.updateAnimationControlsSubscription()
  }
    update(){
      const{
      animate:a
    }
      =this.node.getProps(),{
      animate:s
    }
      =this.node.prevProps||{
    }
    ;
    a!==s&&this.updateAnimationControlsSubscription()
  }
    unmount(){
    this.node.animationState.reset(),this.unmountControls?.()
  }
}
let aA=0;
  class lA extends ui{
    constructor(){
    super(...arguments),this.id=aA++,this.isExitComplete=!1
  }
    update(){
    if(!this.node.presenceContext)return;
      const{
      isPresent:a,onExitComplete:s
    }
      =this.node.presenceContext,{
      isPresent:o
    }
      =this.node.prevPresenceContext||{
    }
    ;
    if(!this.node.animationState||a===o)return;
      if(a&&o===!1){
        if(this.isExitComplete){
          const{
          initial:d,custom:f
        }
        =this.node.getProps();
          if(typeof d=="string"||typeof d=="object"&&d!==null&&!Array.isArray(d)){
          const m=Oi(this.node,d,f);
            if(m){
              const{
              transition:y,transitionEnd:p,...v
            }
            =m;
            for(const b in v)this.node.getValue(b)?.jump(v[b])
          }
        }
        this.node.animationState.reset(),this.node.animationState.animateChanges()
      }
      else this.node.animationState.setActive("exit",!1);
      this.isExitComplete=!1;
      return
    }
    const c=this.node.animationState.setActive("exit",!a);
      s&&!a&&c.then(()=>{
      this.isExitComplete=!0,s(this.id)
    }
    )
  }
    mount(){
      const{
      register:a,onExitComplete:s
    }
      =this.node.presenceContext||{
    }
    ;
    s&&s(this.id),a&&(this.unmount=a(this.id))
  }
    unmount(){
  }
}
  const sA={
    animation:{
    Feature:iA
  }
    ,exit:{
    Feature:lA
  }
}
;
  function Yl(i){
    return{
      point:{
      x:i.pageX,y:i.pageY
    }
  }
}
const oA=i=>a=>Mf(a)&&i(a,Yl(a));
  function Ol(i,a,s,o){
  return Ll(i,a,oA(s),o)
}
  const e1=({
  current:i
}
)=>i?i.ownerDocument.defaultView:null,F0=(i,a)=>Math.abs(i-a);
  function rA(i,a){
  const s=F0(i.x,a.x),o=F0(i.y,a.y);
  return Math.sqrt(s**2+o**2)
}
const P0=new Set(["auto","scroll"]);
  class n1{
    constructor(a,s,{
    transformPagePoint:o,contextWindow:c=window,dragSnapToOrigin:d=!1,distanceThreshold:f=3,element:m
  }
    ={
  }
    ){
      if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={
    }
      ,this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=w=>{
      this.handleScroll(w.target)
    }
      ,this.onWindowScroll=()=>{
      this.handleScroll(window)
    }
      ,this.updatePoint=()=>{
      if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;
      this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=co(this.lastRawMoveEventInfo,this.transformPagePoint));
        const w=vc(this.lastMoveEventInfo,this.history),N=this.startEvent!==null,D=rA(w.offset,{
        x:0,y:0
      }
      )>=this.distanceThreshold;
      if(!N&&!D)return;
        const{
        point:B
      }
        =w,{
        timestamp:H
      }
      =re;
        this.history.push({
        ...B,timestamp:H
      }
      );
        const{
        onStart:Y,onMove:G
      }
      =this.handlers;
      N||(Y&&Y(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),G&&G(this.lastMoveEvent,w)
    }
      ,this.handlePointerMove=(w,N)=>{
      this.lastMoveEvent=w,this.lastRawMoveEventInfo=N,this.lastMoveEventInfo=co(N,this.transformPagePoint),St.update(this.updatePoint,
      !0)
    }
      ,this.handlePointerUp=(w,N)=>{
      this.end();
        const{
        onEnd:D,onSessionEnd:B,resumeAnimation:H
      }
      =this.handlers;
      if((this.dragSnapToOrigin||!this.startEvent)&&H&&H(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;
      const Y=vc(w.type==="pointercancel"?this.lastMoveEventInfo:co(N,this.transformPagePoint),this.history);
      this.startEvent&&D&&D(w,Y),B&&B(w,Y)
    }
    ,!Mf(a))return;
    this.dragSnapToOrigin=d,this.handlers=s,this.transformPagePoint=o,this.distanceThreshold=f,this.contextWindow=c||window;
      const y=Yl(a),p=co(y,this.transformPagePoint),{
      point:v
    }
      =p,{
      timestamp:b
    }
    =re;
      this.history=[{
      ...v,timestamp:b
    }
    ];
      const{
      onSessionStart:x
    }
    =s;
    x&&x(a,vc(p,this.history)),this.removeListeners=Hl(Ol(this.contextWindow,"pointermove",this.handlePointerMove),Ol(this.contextWindow,
    "pointerup",this.handlePointerUp),Ol(this.contextWindow,"pointercancel",this.handlePointerUp)),m&&this.startScrollTracking(m)
  }
    startScrollTracking(a){
    let s=a.parentElement;
    for(;
    s;
      ){
      const o=getComputedStyle(s);
        (P0.has(o.overflowX)||P0.has(o.overflowY))&&this.scrollPositions.set(s,{
        x:s.scrollLeft,y:s.scrollTop
      }
      ),s=s.parentElement
    }
      this.scrollPositions.set(window,{
      x:window.scrollX,y:window.scrollY
    }
      ),window.addEventListener("scroll",this.onElementScroll,{
      capture:!0
    }
      ),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{
        window.removeEventListener("scroll",this.onElementScroll,{
        capture:!0
      }
      ),window.removeEventListener("scroll",this.onWindowScroll)
    }
  }
    handleScroll(a){
    const s=this.scrollPositions.get(a);
    if(!s)return;
      const o=a===window,c=o?{
      x:window.scrollX,y:window.scrollY
    }
      :{
      x:a.scrollLeft,y:a.scrollTop
    }
      ,d={
      x:c.x-s.x,y:c.y-s.y
    }
    ;
    d.x===0&&d.y===0||(o?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=d.x,this.lastMoveEventInfo.point.y+=d.y):this.history.length>0&&(this.history[0].x-=d.x,
    this.history[0].y-=d.y),this.scrollPositions.set(a,c),St.update(this.updatePoint,!0))
  }
    updateHandlers(a){
    this.handlers=a
  }
    end(){
    this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),
    Ie(this.updatePoint)
  }
}
  function co(i,a){
    return a?{
    point:a(i.point)
  }
  :i
}
  function W0(i,a){
    return{
    x:i.x-a.x,y:i.y-a.y
  }
}
  function vc({
  point:i
}
  ,a){
    return{
    point:i,delta:W0(i,i1(a)),offset:W0(i,uA(a)),velocity:cA(a,.1)
  }
}
  function uA(i){
  return i[0]
}
  function i1(i){
  return i[i.length-1]
}
  function cA(i,a){
    if(i.length<2)return{
    x:0,y:0
  }
  ;
  let s=i.length-1,o=null;
  const c=i1(i);
  for(;
  s>=0&&(o=i[s],!(c.timestamp-o.timestamp>Ge(a)));
  )s--;
    if(!o)return{
    x:0,y:0
  }
  ;
  o===i[0]&&i.length>2&&c.timestamp-o.timestamp>Ge(a)*2&&(o=i[1]);
  const d=$e(c.timestamp-o.timestamp);
    if(d===0)return{
    x:0,y:0
  }
  ;
    const f={
    x:(c.x-o.x)/d,y:(c.y-o.y)/d
  }
  ;
  return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f
}
  function fA(i,{
  min:a,max:s
}
  ,o){
  return a!==void 0&&i<a?i=o?Vt(a,i,o.min):Math.max(i,a):s!==void 0&&i>s&&(i=o?Vt(s,i,o.max):Math.min(i,s)),i
}
  function $0(i,a,s){
    return{
    min:a!==void 0?i.min+a:void 0,max:s!==void 0?i.max+s-(i.max-i.min):void 0
  }
}
  function dA(i,{
  top:a,left:s,bottom:o,right:c
}
  ){
    return{
    x:$0(i.x,s,c),y:$0(i.y,a,o)
  }
}
  function I0(i,a){
  let s=a.min-i.min,o=a.max-i.max;
    return a.max-a.min<i.max-i.min&&([s,o]=[o,s]),{
    min:s,max:o
  }
}
  function hA(i,a){
    return{
    x:I0(i.x,a.x),y:I0(i.y,a.y)
  }
}
  function mA(i,a){
  let s=.5;
  const o=xe(i),c=xe(a);
  return c>o?s=Ma(a.min,a.max-o,i.min):o>c&&(s=Ma(i.min,i.max-c,a.min)),rn(0,1,s)
}
  function pA(i,a){
    const s={
  }
  ;
  return a.min!==void 0&&(s.min=a.min-i.min),a.max!==void 0&&(s.max=a.max-i.min),s
}
const Wc=.35;
  function yA(i=Wc){
    return i===!1?i=0:i===!0&&(i=Wc),{
    x:ty(i,"left","right"),y:ty(i,"top","bottom")
  }
}
  function ty(i,a,s){
    return{
    min:ey(i,a),max:ey(i,s)
  }
}
  function ey(i,a){
  return typeof i=="number"?i:i[a]||0
}
const gA=new WeakMap;
  class vA{
    constructor(a){
      this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={
      x:0,y:0
    }
    ,this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ie(),this.latestPointerEvent=null,this.latestPanInfo=null,
    this.visualElement=a
  }
    start(a,{
    snapToCursor:s=!1,distanceThreshold:o
  }
    ={
  }
    ){
      const{
      presenceContext:c
    }
    =this.visualElement;
    if(c&&c.isPresent===!1)return;
      const d=b=>{
      s&&this.snapToCursor(Yl(b).point),this.stopAnimation()
    }
      ,f=(b,x)=>{
        const{
        drag:w,dragPropagation:N,onDragStart:D
      }
      =this.getProps();
      if(w&&!N&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Y2(w),!this.openDragLock))return;
      this.latestPointerEvent=b,this.latestPanInfo=x,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,
        this.visualElement.projection.target=void 0),hn(H=>{
        let Y=this.getAxisMotionValue(H).get()||0;
          if(pn.test(Y)){
            const{
            projection:G
          }
          =this.visualElement;
            if(G&&G.layout){
            const q=G.layout.layoutBox[H];
            q&&(Y=xe(q)*(parseFloat(Y)/100))
          }
        }
        this.originPoint[H]=Y
      }
      ),D&&St.update(()=>D(b,x),!1,!0),Hc(this.visualElement,"transform");
        const{
        animationState:B
      }
      =this.visualElement;
      B&&B.setActive("whileDrag",!0)
    }
      ,m=(b,x)=>{
      this.latestPointerEvent=b,this.latestPanInfo=x;
        const{
        dragPropagation:w,dragDirectionLock:N,onDirectionLock:D,onDrag:B
      }
      =this.getProps();
      if(!w&&!this.openDragLock)return;
        const{
        offset:H
      }
      =x;
        if(N&&this.currentDirection===null){
        this.currentDirection=xA(H),this.currentDirection!==null&&D&&D(this.currentDirection);
        return
      }
      this.updateAxis("x",x.point,H),this.updateAxis("y",x.point,H),this.visualElement.render(),B&&St.update(()=>B(b,x),!1,!0)
    }
      ,y=(b,x)=>{
      this.latestPointerEvent=b,this.latestPanInfo=x,this.stop(b,x),this.latestPointerEvent=null,this.latestPanInfo=null
    }
      ,p=()=>{
        const{
        dragSnapToOrigin:b
      }
      =this.getProps();
        (b||this.constraints)&&this.startAnimation({
        x:0,y:0
      }
      )
    }
      ,{
      dragSnapToOrigin:v
    }
    =this.getProps();
      this.panSession=new n1(a,{
      onSessionStart:d,onStart:f,onMove:m,onSessionEnd:y,resumeAnimation:p
    }
      ,{
      transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:v,distanceThreshold:o,contextWindow:e1(this.visualElement),
      element:this.visualElement.current
    }
    )
  }
    stop(a,s){
    const o=a||this.latestPointerEvent,c=s||this.latestPanInfo,d=this.isDragging;
    if(this.cancel(),!d||!c||!o)return;
      const{
      velocity:f
    }
    =c;
    this.startAnimation(f);
      const{
      onDragEnd:m
    }
    =this.getProps();
    m&&St.postRender(()=>m(o,c))
  }
    cancel(){
    this.isDragging=!1;
      const{
      projection:a,animationState:s
    }
    =this.visualElement;
    a&&(a.isAnimationBlocked=!1),this.endPanSession();
      const{
      dragPropagation:o
    }
    =this.getProps();
    !o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),s&&s.setActive("whileDrag",!1)
  }
    endPanSession(){
    this.panSession&&this.panSession.end(),this.panSession=void 0
  }
    updateAxis(a,s,o){
      const{
      drag:c
    }
    =this.getProps();
    if(!o||!fo(a,c,this.currentDirection))return;
    const d=this.getAxisMotionValue(a);
    let f=this.originPoint[a]+o[a];
    this.constraints&&this.constraints[a]&&(f=fA(f,this.constraints[a],this.elastic[a])),d.set(f)
  }
    resolveConstraints(){
      const{
      dragConstraints:a,dragElastic:s
    }
    =this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,
    c=this.constraints;
    a&&xa(a)?this.constraints||(this.constraints=this.resolveRefConstraints()):a&&o?this.constraints=dA(o.layoutBox,a):this.constraints=!1,
      this.elastic=yA(s),c!==this.constraints&&!xa(a)&&o&&this.constraints&&!this.hasMutatedConstraints&&hn(d=>{
      this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=pA(o.layoutBox[d],this.constraints[d]))
    }
    )
  }
    resolveRefConstraints(){
      const{
      dragConstraints:a,onMeasureDragConstraints:s
    }
    =this.getProps();
    if(!a||!xa(a))return!1;
      const o=a.current,{
      projection:c
    }
    =this.visualElement;
    if(!c||!c.layout)return!1;
    c.root&&(c.root.scroll=void 0,c.root.updateScroll());
    const d=xS(o,c.root,this.visualElement.getTransformPagePoint());
    let f=hA(c.layout.layoutBox,d);
      if(s){
      const m=s(gS(f));
      this.hasMutatedConstraints=!!m,m&&(f=Eg(m))
    }
    return f
  }
    startAnimation(a){
      const{
      drag:s,dragMomentum:o,dragElastic:c,dragTransition:d,dragSnapToOrigin:f,onDragTransitionEnd:m
    }
      =this.getProps(),y=this.constraints||{
    }
      ,p=hn(v=>{
      if(!fo(v,s,this.currentDirection))return;
        let b=y&&y[v]||{
      }
      ;
        (f===!0||f===v)&&(b={
        min:0,max:0
      }
      );
        const x=c?200:1e6,w=c?40:1e7,N={
        type:"inertia",velocity:o?a[v]:0,bounceStiffness:x,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...d,...b
      }
      ;
      return this.startAxisValueAnimation(v,N)
    }
    );
    return Promise.all(p).then(m)
  }
    startAxisValueAnimation(a,s){
    const o=this.getAxisMotionValue(a);
    return Hc(this.visualElement,a),o.start(Sf(a,o,0,s,this.visualElement,!1))
  }
    stopAnimation(){
    hn(a=>this.getAxisMotionValue(a).stop())
  }
    getAxisMotionValue(a){
    const s=`_drag${a.toUpperCase()}`,c=this.visualElement.getProps()[s];
    return c||this.visualElement.getValue(a,this.visualElement.latestValues[a]??0)
  }
    snapToCursor(a){
      hn(s=>{
        const{
        drag:o
      }
      =this.getProps();
      if(!fo(s,o,this.currentDirection))return;
        const{
        projection:c
      }
      =this.visualElement,d=this.getAxisMotionValue(s);
        if(c&&c.layout){
          const{
          min:f,max:m
        }
        =c.layout.layoutBox[s],y=d.get()||0;
        d.set(a[s]-Vt(f,m,.5)+y)
      }
    }
    )
  }
    scalePositionWithinConstraints(){
    if(!this.visualElement.current)return;
      const{
      drag:a,dragConstraints:s
    }
      =this.getProps(),{
      projection:o
    }
    =this.visualElement;
    if(!xa(s)||!o||!this.constraints)return;
    this.stopAnimation();
      const c={
      x:0,y:0
    }
    ;
      hn(f=>{
      const m=this.getAxisMotionValue(f);
        if(m&&this.constraints!==!1){
        const y=m.get();
          c[f]=mA({
          min:y,max:y
        }
        ,this.constraints[f])
      }
    }
    );
      const{
      transformTemplate:d
    }
    =this.visualElement.getProps();
      this.visualElement.current.style.transform=d?d({
    }
      ,""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.constraints=!1,this.resolveConstraints(),hn(f=>{
      if(!fo(f,a,null))return;
        const m=this.getAxisMotionValue(f),{
        min:y,max:p
      }
      =this.constraints[f];
      m.set(Vt(y,p,c[f]))
    }
    ),this.visualElement.render()
  }
    addListeners(){
    if(!this.visualElement.current)return;
    gA.set(this.visualElement,this);
      const a=this.visualElement.current,s=Ol(a,"pointerdown",p=>{
        const{
        drag:v,dragListener:b=!0
      }
      =this.getProps(),x=p.target,w=x!==a&&F2(x);
      v&&b&&!w&&this.start(p)
    }
    );
    let o;
      const c=()=>{
        const{
        dragConstraints:p
      }
      =this.getProps();
      xa(p)&&p.current&&(this.constraints=this.resolveRefConstraints(),o||(o=bA(a,p.current,()=>this.scalePositionWithinConstraints())))
    }
      ,{
      projection:d
    }
    =this.visualElement,f=d.addEventListener("measure",c);
    d&&!d.layout&&(d.root&&d.root.updateScroll(),d.updateLayout()),St.read(c);
      const m=Ll(window,"resize",()=>this.scalePositionWithinConstraints()),y=d.addEventListener("didUpdate",(({
      delta:p,hasLayoutChanged:v
    }
      )=>{
        this.isDragging&&v&&(hn(b=>{
        const x=this.getAxisMotionValue(b);
        x&&(this.originPoint[b]+=p[b].translate,x.set(x.get()+p[b].translate))
      }
      ),this.visualElement.render())
    }
    ));
      return()=>{
      m(),s(),f(),y&&y(),o&&o()
    }
  }
    getProps(){
      const a=this.visualElement.getProps(),{
      drag:s=!1,dragDirectionLock:o=!1,dragPropagation:c=!1,dragConstraints:d=!1,dragElastic:f=Wc,dragMomentum:m=!0
    }
    =a;
      return{
      ...a,drag:s,dragDirectionLock:o,dragPropagation:c,dragConstraints:d,dragElastic:f,dragMomentum:m
    }
  }
}
  function ny(i){
  let a=!0;
    return()=>{
      if(a){
      a=!1;
      return
    }
    i()
  }
}
  function bA(i,a,s){
  const o=Xc(i,ny(s)),c=Xc(a,ny(s));
    return()=>{
    o(),c()
  }
}
  function fo(i,a,s){
  return(a===!0||a===i)&&(s===null||s===i)
}
  function xA(i,a=10){
  let s=null;
  return Math.abs(i.y)>a?s="y":Math.abs(i.x)>a&&(s="x"),s
}
  class SA extends ui{
    constructor(a){
    super(a),this.removeGroupControls=Ce,this.removeListeners=Ce,this.controls=new vA(a)
  }
    mount(){
      const{
      dragControls:a
    }
    =this.node.getProps();
    a&&(this.removeGroupControls=a.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ce
  }
    update(){
      const{
      dragControls:a
    }
      =this.node.getProps(),{
      dragControls:s
    }
      =this.node.prevProps||{
    }
    ;
    a!==s&&(this.removeGroupControls(),a&&(this.removeGroupControls=a.subscribe(this.controls)))
  }
    unmount(){
    this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()
  }
}
  const bc=i=>(a,s)=>{
  i&&St.update(()=>i(a,s),!1,!0)
}
;
  class TA extends ui{
    constructor(){
    super(...arguments),this.removePointerDownListener=Ce
  }
    onPointerDown(a){
      this.session=new n1(a,this.createPanHandlers(),{
      transformPagePoint:this.node.getTransformPagePoint(),contextWindow:e1(this.node)
    }
    )
  }
    createPanHandlers(){
      const{
      onPanSessionStart:a,onPanStart:s,onPan:o,onPanEnd:c
    }
    =this.node.getProps();
      return{
        onSessionStart:bc(a),onStart:bc(s),onMove:bc(o),onEnd:(d,f)=>{
        delete this.session,c&&St.postRender(()=>c(d,f))
      }
    }
  }
    mount(){
    this.removePointerDownListener=Ol(this.node.current,"pointerdown",a=>this.onPointerDown(a))
  }
    update(){
    this.session&&this.session.updateHandlers(this.createPanHandlers())
  }
    unmount(){
    this.removePointerDownListener(),this.session&&this.session.end()
  }
}
let xc=!1;
  class AA extends k.Component{
    componentDidMount(){
      const{
      visualElement:a,layoutGroup:s,switchLayoutGroup:o,layoutId:c
    }
      =this.props,{
      projection:d
    }
    =a;
    d&&(s.group&&s.group.add(d),o&&o.register&&c&&o.register(d),xc&&d.root.didUpdate(),d.addEventListener("animationComplete",
      ()=>{
      this.safeToRemove()
    }
      ),d.setOptions({
      ...d.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()
    }
    )),So.hasEverUpdated=!0
  }
    getSnapshotBeforeUpdate(a){
      const{
      layoutDependency:s,visualElement:o,drag:c,isPresent:d
    }
      =this.props,{
      projection:f
    }
    =o;
      return f&&(f.isPresent=d,a.layoutDependency!==s&&f.setOptions({
      ...f.options,layoutDependency:s
    }
      ),xc=!0,c||a.layoutDependency!==s||s===void 0||a.isPresent!==d?f.willUpdate():this.safeToRemove(),a.isPresent!==d&&(d?f.promote():f.relegate()||St.postRender(()=>{
      const m=f.getStack();
      (!m||!m.members.length)&&this.safeToRemove()
    }
    ))),null
  }
    componentDidUpdate(){
      const{
      visualElement:a,layoutAnchor:s
    }
      =this.props,{
      projection:o
    }
    =a;
      o&&(o.options.layoutAnchor=s,o.root.didUpdate(),wa.postRender(()=>{
      !o.currentAnimation&&o.isLead()&&this.safeToRemove()
    }
    ))
  }
    componentWillUnmount(){
      const{
      visualElement:a,layoutGroup:s,switchLayoutGroup:o
    }
      =this.props,{
      projection:c
    }
    =a;
    xc=!0,c&&(c.scheduleCheckAfterUnmount(),s&&s.group&&s.group.remove(c),o&&o.deregister&&o.deregister(c))
  }
    safeToRemove(){
      const{
      safeToRemove:a
    }
    =this.props;
    a&&a()
  }
    render(){
    return null
  }
}
  function a1(i){
  const[a,s]=Zg(),o=k.useContext(nf);
    return S.jsx(AA,{
    ...i,layoutGroup:o,switchLayoutGroup:k.useContext(Ig),isPresent:a,safeToRemove:s
  }
  )
}
  const EA={
    pan:{
    Feature:TA
  }
    ,drag:{
    Feature:SA,ProjectionNode:Kg,MeasureLayout:a1
  }
}
;
  function iy(i,a,s){
    const{
    props:o
  }
  =i;
  i.animationState&&o.whileHover&&i.animationState.setActive("whileHover",s==="Start");
  const c="onHover"+s,d=o[c];
  d&&St.postRender(()=>d(a,Yl(a)))
}
  class MA extends ui{
    mount(){
      const{
      current:a
    }
    =this.node;
    a&&(this.unmount=K2(a,(s,o)=>(iy(this.node,o,"Start"),c=>iy(this.node,c,"End"))))
  }
    unmount(){
  }
}
  class DA extends ui{
    constructor(){
    super(...arguments),this.isActive=!1
  }
    onFocus(){
    let a=!1;
      try{
      a=this.node.current.matches(":focus-visible")
    }
      catch{
      a=!0
    }
    !a||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)
  }
    onBlur(){
    !this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)
  }
    mount(){
    this.unmount=Hl(Ll(this.node.current,"focus",()=>this.onFocus()),Ll(this.node.current,"blur",()=>this.onBlur()))
  }
    unmount(){
  }
}
  function ay(i,a,s){
    const{
    props:o
  }
  =i;
  if(i.current instanceof HTMLButtonElement&&i.current.disabled)return;
  i.animationState&&o.whileTap&&i.animationState.setActive("whileTap",s==="Start");
  const c="onTap"+(s==="End"?"":s),d=o[c];
  d&&St.postRender(()=>d(a,Yl(a)))
}
  class wA extends ui{
    mount(){
      const{
      current:a
    }
    =this.node;
    if(!a)return;
      const{
      globalTapTarget:s,propagate:o
    }
    =this.node.props;
      this.unmount=W2(a,(c,d)=>(ay(this.node,d,"Start"),(f,{
      success:m
    }
      )=>ay(this.node,f,m?"End":"Cancel")),{
      useGlobalTarget:s,stopPropagation:o?.tap===!1
    }
    )
  }
    unmount(){
  }
}
  const $c=new WeakMap,Sc=new WeakMap,zA=i=>{
  const a=$c.get(i.target);
  a&&a(i)
}
  ,CA=i=>{
  i.forEach(zA)
}
;
  function jA({
  root:i,...a
}
  ){
  const s=i||document;
    Sc.has(s)||Sc.set(s,{
  }
  );
  const o=Sc.get(s),c=JSON.stringify(a);
    return o[c]||(o[c]=new IntersectionObserver(CA,{
    root:i,...a
  }
  )),o[c]
}
  function NA(i,a,s){
  const o=jA(a);
    return $c.set(i,s),o.observe(i),()=>{
    $c.delete(i),o.unobserve(i)
  }
}
  const RA={
  some:0,all:1
}
;
  class VA extends ui{
    constructor(){
    super(...arguments),this.hasEnteredView=!1,this.isInView=!1
  }
    startObserver(){
    this.stopObserver?.();
      const{
        viewport:a={
      }
    }
      =this.node.getProps(),{
      root:s,margin:o,amount:c="some",once:d
    }
      =a,f={
      root:s?s.current:void 0,rootMargin:o,threshold:typeof c=="number"?c:RA[c]
    }
      ,m=y=>{
        const{
        isIntersecting:p
      }
      =y;
      if(this.isInView===p||(this.isInView=p,d&&!p&&this.hasEnteredView))return;
      p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);
        const{
        onViewportEnter:v,onViewportLeave:b
      }
      =this.node.getProps(),x=p?v:b;
      x&&x(y)
    }
    ;
    this.stopObserver=NA(this.node.current,f,m)
  }
    mount(){
    this.startObserver()
  }
    update(){
    if(typeof IntersectionObserver>"u")return;
      const{
      props:a,prevProps:s
    }
    =this.node;
    ["amount","margin","root"].some(OA(a,s))&&this.startObserver()
  }
    unmount(){
    this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1
  }
}
  function OA({
    viewport:i={
  }
}
  ,{
    viewport:a={
  }
}
  ={
}
  ){
  return s=>i[s]!==a[s]
}
  const _A={
    inView:{
    Feature:VA
  }
    ,tap:{
    Feature:wA
  }
    ,focus:{
    Feature:DA
  }
    ,hover:{
    Feature:MA
  }
}
  ,BA={
    layout:{
    ProjectionNode:Kg,MeasureLayout:a1
  }
}
  ,UA={
  ...sA,..._A,...EA,...BA
}
,ot=eA(UA,nA);
  function No(i){
  return typeof window>"u"?!1:i?Py():bf()
}
  const LA=50,ly=()=>({
  current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0
}
  ),HA=()=>({
  time:0,x:ly(),y:ly()
}
  ),kA={
    x:{
    length:"Width",position:"Left"
  }
    ,y:{
    length:"Height",position:"Top"
  }
}
;
  function sy(i,a,s,o){
    const c=s[a],{
    length:d,position:f
  }
  =kA[a],m=c.current,y=s.time;
  c.current=Math.abs(i[`scroll${f}`]),c.scrollLength=i[`scroll${d}`]-i[`client${d}`],c.offset.length=0,c.offset[0]=0,c.offset[1]=c.scrollLength,
  c.progress=Ma(0,c.scrollLength,c.current);
  const p=o-y;
  c.velocity=p>LA?0:of(c.current-m,p)
}
  function GA(i,a,s){
  sy(i,"x",a,s),sy(i,"y",a,s),a.time=s
}
  function qA(i,a){
    const s={
    x:0,y:0
  }
  ;
  let o=i;
  for(;
  o&&o!==a;
  )if(Rl(o))s.x+=o.offsetLeft,s.y+=o.offsetTop,o=o.offsetParent;
    else if(o.tagName==="svg"){
    const c=o.getBoundingClientRect();
    o=o.parentElement;
    const d=o.getBoundingClientRect();
    s.x+=c.left-d.left,s.y+=c.top-d.top
  }
    else if(o instanceof SVGGraphicsElement){
      const{
      x:c,y:d
    }
    =o.getBBox();
    s.x+=c,s.y+=d;
    let f=null,m=o.parentNode;
    for(;
    !f;
    )m.tagName==="svg"&&(f=m),m=o.parentNode;
    o=f
  }
  else break;
  return s
}
  const Ic={
  start:0,center:.5,end:1
}
;
  function oy(i,a,s=0){
  let o=0;
    if(i in Ic&&(i=Ic[i]),typeof i=="string"){
    const c=parseFloat(i);
    i.endsWith("px")?o=c:i.endsWith("%")?i=c/100:i.endsWith("vw")?o=c/100*document.documentElement.clientWidth:i.endsWith("vh")?o=c/100*document.documentElement.clientHeight:i=c
  }
  return typeof i=="number"&&(o=a*i),s+o
}
const YA=[0,0];
  function XA(i,a,s,o){
  let c=Array.isArray(i)?i:YA,d=0,f=0;
  return typeof i=="number"?c=[i,i]:typeof i=="string"&&(i=i.trim(),i.includes(" ")?c=i.split(" "):c=[i,Ic[i]?i:"0"]),d=oy(c[0],
  s,o),f=oy(c[1],a),d-f
}
  const zl={
  Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]
}
  ,KA={
  x:0,y:0
}
;
  function ZA(i){
    return"getBBox"in i&&i.tagName!=="svg"?i.getBBox():{
    width:i.clientWidth,height:i.clientHeight
  }
}
  function QA(i,a,s){
    const{
    offset:o=zl.All
  }
    =s,{
    target:c=i,axis:d="y"
  }
    =s,f=d==="y"?"height":"width",m=c!==i?qA(c,i):KA,y=c===i?{
    width:i.scrollWidth,height:i.scrollHeight
  }
    :ZA(c),p={
    width:i.clientWidth,height:i.clientHeight
  }
  ;
  a[d].offset.length=0;
  let v=!a[d].interpolate;
  const b=o.length;
  for(let x=0;
  x<b;
    x++){
    const w=XA(o[x],p[f],y[f],m[d]);
    !v&&w!==a[d].interpolatorOffsets[x]&&(v=!0),a[d].offset[x]=w
  }
    v&&(a[d].interpolate=pf(a[d].offset,Ky(o),{
    clamp:!1
  }
  ),a[d].interpolatorOffsets=[...a[d].offset]),a[d].progress=rn(0,1,a[d].interpolate(a[d].current))
}
  function JA(i,a=i,s){
    if(s.x.targetOffset=0,s.y.targetOffset=0,a!==i){
    let o=a;
    for(;
    o&&o!==i;
    )s.x.targetOffset+=o.offsetLeft,s.y.targetOffset+=o.offsetTop,o=o.offsetParent
  }
  s.x.targetLength=a===i?a.scrollWidth:a.clientWidth,s.y.targetLength=a===i?a.scrollHeight:a.clientHeight,s.x.containerLength=i.clientWidth,
  s.y.containerLength=i.clientHeight
}
  function FA(i,a,s,o={
}
  ){
    return{
      measure:c=>{
      JA(i,o.target,s),GA(i,s,c),(o.offset||o.target)&&QA(i,s,o)
    }
    ,notify:()=>a(s)
  }
}
const ba=new WeakMap,ry=new WeakMap,Tc=new WeakMap,uy=new WeakMap,ho=new WeakMap,cy=i=>i===document.scrollingElement?window:i;
  function l1(i,{
  container:a=document.scrollingElement,trackContentSize:s=!1,...o
}
  ={
}
  ){
  if(!a)return Ce;
  let c=Tc.get(a);
  c||(c=new Set,Tc.set(a,c));
  const d=HA(),f=FA(a,i,d,o);
    if(c.add(f),!ba.has(a)){
      const y=()=>{
      for(const x of c)x.measure(re.timestamp);
      St.preUpdate(p)
    }
      ,p=()=>{
      for(const x of c)x.notify()
    }
    ,v=()=>St.read(y);
    ba.set(a,v);
    const b=cy(a);
    window.addEventListener("resize",v),a!==document.documentElement&&ry.set(a,Xc(a,v)),b.addEventListener("scroll",v),v()
  }
    if(s&&!ho.has(a)){
      const y=ba.get(a),p={
      width:a.scrollWidth,height:a.scrollHeight
    }
    ;
    uy.set(a,p);
      const v=()=>{
      const x=a.scrollWidth,w=a.scrollHeight;
      (p.width!==x||p.height!==w)&&(y(),p.width=x,p.height=w)
    }
    ,b=St.read(v,!0);
    ho.set(a,b)
  }
  const m=ba.get(a);
    return St.read(m,!1,!0),()=>{
    Ie(m);
    const y=Tc.get(a);
    if(!y||(y.delete(f),y.size))return;
    const p=ba.get(a);
    ba.delete(a),p&&(cy(a).removeEventListener("scroll",p),ry.get(a)?.(),window.removeEventListener("resize",p));
    const v=ho.get(a);
    v&&(Ie(v),ho.delete(a)),uy.delete(a)
  }
}
  const PA=[[zl.Enter,"entry"],[zl.Exit,"exit"],[zl.Any,"cover"],[zl.All,"contain"]],fy={
  start:0,end:1
}
;
  function WA(i){
  const a=i.trim().split(/\s+/);
  if(a.length!==2)return;
  const s=fy[a[0]],o=fy[a[1]];
  if(!(s===void 0||o===void 0))return[s,o]
}
  function $A(i){
  if(i.length!==2)return;
  const a=[];
  for(const s of i)if(Array.isArray(s))a.push(s);
    else if(typeof s=="string"){
    const o=WA(s);
    if(!o)return;
    a.push(o)
  }
  else return;
  return a
}
  function IA(i,a){
  const s=$A(i);
  if(!s)return!1;
  for(let o=0;
  o<2;
    o++){
    const c=s[o],d=a[o];
    if(c[0]!==d[0]||c[1]!==d[1])return!1
  }
  return!0
}
  function Vf(i){
    if(!i)return{
    rangeStart:"contain 0%",rangeEnd:"contain 100%"
  }
  ;
    for(const[a,s]of PA)if(IA(i,a))return{
    rangeStart:`${s} 0%`,rangeEnd:`${s} 100%`
  }
}
const dy=new Map;
  function hy(i){
    const a={
    value:0
  }
    ,s=l1(o=>{
    a.value=o[i.axis].progress*100
  }
  ,i);
    return{
    currentTime:a,cancel:s
  }
}
  function s1({
  source:i,container:a,...s
}
  ){
    const{
    axis:o
  }
  =s;
  i&&(a=i);
  let c=dy.get(a);
  c||(c=new Map,dy.set(a,c));
  const d=s.target??"self";
  let f=c.get(d);
    f||(f={
  }
  ,c.set(d,f));
  const m=o+(s.offset??[]).join(",");
    return f[m]||(s.target&&No(s.target)?Vf(s.offset)?f[m]=new ViewTimeline({
    subject:s.target,axis:o
  }
    ):f[m]=hy({
    container:a,...s
  }
    ):No()?f[m]=new ScrollTimeline({
    source:a,axis:o
  }
    ):f[m]=hy({
    container:a,...s
  }
  )),f[m]
}
  function t3(i,a){
  const s=s1(a),o=a.target?Vf(a.offset):void 0,c=a.target?No(a.target)&&!!o:No();
    return i.attachTimeline({
      timeline:c?s:void 0,...o&&c&&{
      rangeStart:o.rangeStart,rangeEnd:o.rangeEnd
    }
      ,observe:d=>(d.pause(),bg(f=>{
      d.time=d.iterationDuration*f
    }
    ,s))
  }
  )
}
  function e3(i){
  return i&&(i.target||i.offset)
}
  function n3(i){
  return i.length===2
}
  function i3(i,a){
    return n3(i)||e3(a)?l1(s=>{
    i(s[a.axis].progress,s)
  }
  ,a):bg(i,s1(a))
}
  function o1(i,{
  axis:a="y",container:s=document.scrollingElement,...o
}
  ={
}
  ){
  if(!s)return Ce;
    const c={
    axis:a,container:s,...o
  }
  ;
  return typeof i=="function"?i3(i,c):t3(i,c)
}
  const a3=()=>({
  scrollX:sn(0),scrollY:sn(0),scrollXProgress:sn(0),scrollYProgress:sn(0)
}
),Ea=i=>i?!i.current:!1;
  function my(i,a,s,o){
    return{
      factory:c=>{
      let d;
        const f=()=>{
          if(Ea(s)||Ea(o)){
          wa.read(f);
          return
        }
          d=o1(c,{
          ...a,axis:i,container:s?.current||void 0,target:o?.current||void 0
        }
        )
      }
      ;
        return wa.read(f),()=>{
        mg(f),d?.()
      }
    }
    ,times:[0,1],keyframes:[0,1],ease:c=>c,duration:1
  }
}
  function l3(i,a){
  return typeof window>"u"?!1:i?Py()&&!!Vf(a):bf()
}
  function s3({
  container:i,target:a,...s
}
  ={
}
  ){
  const o=oi(a3);
  l3(a,s.offset)&&(o.scrollXProgress.accelerate=my("x",s,i,a),o.scrollYProgress.accelerate=my("y",s,i,a));
    const c=k.useRef(null),d=k.useRef(!1),f=k.useCallback(()=>(c.current=o1((m,{
    x:y,y:p
  }
    )=>{
    o.scrollX.set(y.current),o.scrollXProgress.set(y.progress),o.scrollY.set(p.current),o.scrollYProgress.set(p.progress)
  }
    ,{
    ...s,container:i?.current||void 0,target:a?.current||void 0
  }
    ),()=>{
    c.current?.()
  }
  ),[i,a,JSON.stringify(s.offset)]);
    return Vo(()=>{
      if(d.current=!1,Ea(i)||Ea(a)){
      d.current=!0;
      return
    }
    else return f()
  }
    ,[f]),k.useEffect(()=>{
    if(!d.current)return;
    let m;
      const y=()=>{
      const p=Ea(i),v=Ea(a);
      !p&&!v&&(m=f())
    }
    ;
      return wa.read(y),()=>{
      mg(y),m?.()
    }
  }
  ,[f]),o
}
  function r1(i){
    const a=oi(()=>sn(i)),{
    isStatic:s
  }
  =k.useContext(ql);
    if(s){
    const[,o]=k.useState(i);
    k.useEffect(()=>a.on("change",o),[])
  }
  return a
}
  function u1(i,a){
  const s=r1(a()),o=()=>s.set(a());
    return o(),Vo(()=>{
    const c=()=>St.preRender(o,!1,!0),d=i.map(f=>f.on("change",c));
      return()=>{
      d.forEach(f=>f()),Ie(o)
    }
  }
  ),s
}
  function o3(i){
  Nl.current=[],i();
  const a=u1(Nl.current,i);
  return Nl.current=void 0,a
}
  function Ro(i,a,s,o){
  if(typeof i=="function")return o3(i);
  if(s!==void 0&&!Array.isArray(s)&&typeof a!="function")return r3(i,a,s,o);
  const f=typeof a=="function"?a:oS(a,s,o),m=Array.isArray(i)?py(i,f):py([i],([p])=>f(p)),y=Array.isArray(i)?void 0:i.accelerate;
    return y&&!y.isTransformed&&typeof a!="function"&&Array.isArray(s)&&o?.clamp!==!1&&(m.accelerate={
    ...y,times:a,keyframes:s,isTransformed:!0
  }
  ),m
}
  function py(i,a){
  const s=oi(()=>[]);
    return u1(i,()=>{
    s.length=0;
    const o=i.length;
    for(let c=0;
    c<o;
    c++)s[c]=i[c].get();
    return a(s)
  }
  )
}
  function r3(i,a,s,o){
    const c=oi(()=>Object.keys(s)),d=oi(()=>({
  }
  ));
  for(const f of c)d[f]=Ro(i,a,s[f],o);
  return d
}
  function u3(i,a={
}
  ){
    const{
    isStatic:s
  }
  =k.useContext(ql),o=()=>ae(i)?i.get():i;
  if(s)return Ro(o);
  const c=r1(o());
  return k.useInsertionEffect(()=>rS(c,i,a),[c,JSON.stringify(a)]),c
}
  function c1(i,a={
}
  ){
    return u3(i,{
    type:"spring",...a
  }
  )
}
  const c3={
  some:0,all:1
}
;
  function f3(i,a,{
  root:s,margin:o,amount:c="some"
}
  ={
}
  ){
    const d=Ef(i),f=new WeakMap,m=p=>{
      p.forEach(v=>{
      const b=f.get(v.target);
        if(v.isIntersecting!==!!b)if(v.isIntersecting){
        const x=a(v.target,v);
        typeof x=="function"?f.set(v.target,x):y.unobserve(v.target)
      }
      else typeof b=="function"&&(b(v),f.delete(v.target))
    }
    )
  }
    ,y=new IntersectionObserver(m,{
    root:s,rootMargin:o,threshold:typeof c=="number"?c:c3[c]
  }
  );
  return d.forEach(p=>y.observe(p)),()=>y.disconnect()
}
  function d3(i,{
  root:a,margin:s,amount:o,once:c=!1,initial:d=!1
}
  ={
}
  ){
  const[f,m]=k.useState(d);
    return k.useEffect(()=>{
    if(!i.current||c&&f)return;
      const y=()=>(m(!0),c?void 0:()=>m(!1)),p={
      root:a&&a.current||void 0,margin:s,amount:o
    }
    ;
    return f3(i.current,y,p)
  }
  ,[a,i,s,c,o]),f
}
const f1=(...i)=>i.filter((a,s,o)=>!!a&&a.trim()!==""&&o.indexOf(a)===s).join(" ").trim();
const h3=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();
const m3=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,s,o)=>o?o.toUpperCase():s.toLowerCase());
  const yy=i=>{
  const a=m3(i);
  return a.charAt(0).toUpperCase()+a.slice(1)
}
;
  var Ac={
  xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,
  strokeLinecap:"round",strokeLinejoin:"round"
}
;
  const p3=i=>{
  for(const a in i)if(a.startsWith("aria-")||a==="role"||a==="title")return!0;
  return!1
}
  ,y3=k.createContext({
}
  ),g3=()=>k.useContext(y3),v3=k.forwardRef(({
  color:i,size:a,strokeWidth:s,absoluteStrokeWidth:o,className:c="",children:d,iconNode:f,...m
}
  ,y)=>{
    const{
    size:p=24,strokeWidth:v=2,absoluteStrokeWidth:b=!1,color:x="currentColor",className:w=""
  }
    =g3()??{
  }
  ,N=o??b?Number(s??v)*24/Number(a??p):s??v;
    return k.createElement("svg",{
      ref:y,...Ac,width:a??p??Ac.width,height:a??p??Ac.height,stroke:i??x,strokeWidth:N,className:f1("lucide",w,c),...!d&&!p3(m)&&{
      "aria-hidden":"true"
    }
    ,...m
  }
  ,[...f.map(([D,B])=>k.createElement(D,B)),...Array.isArray(d)?d:[d]])
}
);
  const Jt=(i,a)=>{
    const s=k.forwardRef(({
    className:o,...c
  }
    ,d)=>k.createElement(v3,{
    ref:d,iconNode:a,className:f1(`lucide-${h3(yy(i))}`,`lucide-${i}`,o),...c
  }
  ));
  return s.displayName=yy(i),s
}
;
  const b3=[["path",{
  d:"M5 12h14",key:"1ays0h"
}
  ],["path",{
  d:"m12 5 7 7-7 7",key:"xquz4c"
}
]],x3=Jt("arrow-right",b3);
  const S3=[["path",{
  d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
  key:"1yiouv"
}
  ],["circle",{
  cx:"12",cy:"8",r:"6",key:"1vp47v"
}
]],T3=Jt("award",S3);
  const A3=[["path",{
  d:"m11 10 3 3",key:"fzmg1i"
}
  ],["path",{
  d:"M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z",key:"p4q2r7"
}
  ],["path",{
  d:"M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031",key:"wy6l02"
}
]],E3=Jt("brush",A3);
  const M3=[["path",{
  d:"m6 9 6 6 6-6",key:"qrunsl"
}
]],D3=Jt("chevron-down",M3);
  const w3=[["path",{
  d:"m12.296 3.464 3.02 3.956",key:"qash78"
}
  ],["path",{
  d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z",key:"1h7j8b"
}
  ],["path",{
  d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"4lm6w1"
}
  ],["path",{
  d:"m6.18 5.276 3.1 3.899",key:"zjj9t3"
}
]],z3=Jt("clapperboard",w3);
  const C3=[["path",{
  d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"
}
  ],["circle",{
  cx:"12",cy:"12",r:"3",key:"1v7zrd"
}
]],j3=Jt("eye",C3);
  const N3=[["circle",{
  cx:"12",cy:"12",r:"10",key:"1mglay"
}
  ],["path",{
  d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"
}
  ],["path",{
  d:"M2 12h20",key:"9i4pu4"
}
]],gy=Jt("globe",N3);
  const R3=[["path",{
  d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"
}
  ],["path",{
  d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"
}
  ],["path",{
  d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"
}
]],V3=Jt("layers",R3);
  const O3=[["rect",{
  width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"
}
  ],["rect",{
  width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"
}
  ],["rect",{
  width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"
}
]],_3=Jt("layout-template",O3);
  const B3=[["path",{
  d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"
}
  ],["rect",{
  x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"
}
]],U3=Jt("mail",B3);
  const L3=[["path",{
  d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"
}
  ],["circle",{
  cx:"12",cy:"10",r:"3",key:"ilqhr7"
}
]],H3=Jt("map-pin",L3);
  const k3=[["path",{
  d:"M4 5h16",key:"1tepv9"
}
  ],["path",{
  d:"M4 12h16",key:"1lakjw"
}
  ],["path",{
  d:"M4 19h16",key:"1djgab"
}
]],G3=Jt("menu",k3);
  const q3=[["rect",{
  width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"
}
  ],["line",{
  x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"
}
  ],["line",{
  x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"
}
]],Y3=Jt("monitor",q3);
  const X3=[["path",{
  d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"
}
  ],["circle",{
  cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"
}
  ],["circle",{
  cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"
}
  ],["circle",{
  cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"
}
  ],["circle",{
  cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"
}
]],K3=Jt("palette",X3);
  const Z3=[["path",{
  d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
  key:"1ffxy3"
}
  ],["path",{
  d:"m21.854 2.147-10.94 10.939",key:"12cjpa"
}
]],Q3=Jt("send",Z3);
  const J3=[["rect",{
  width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"
}
  ],["path",{
  d:"M12 18h.01",key:"mhygvu"
}
]],F3=Jt("smartphone",J3);
  const P3=[["path",{
  d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
  key:"1s2grr"
}
  ],["path",{
  d:"M20 2v4",key:"1rf3ol"
}
  ],["path",{
  d:"M22 4h-4",key:"gwowj6"
}
  ],["circle",{
  cx:"4",cy:"20",r:"2",key:"6kqj1y"
}
]],tf=Jt("sparkles",P3);
  const W3=[["path",{
  d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
  key:"r04s7s"
}
]],$3=Jt("star",W3);
  const I3=[["circle",{
  cx:"12",cy:"12",r:"10",key:"1mglay"
}
  ],["circle",{
  cx:"12",cy:"12",r:"6",key:"1vlfrh"
}
  ],["circle",{
  cx:"12",cy:"12",r:"2",key:"1c9p78"
}
]],t5=Jt("target",I3);
  const e5=[["path",{
  d:"M18 6 6 18",key:"1bl5f8"
}
  ],["path",{
  d:"m6 6 12 12",key:"d8bk6v"
}
]],n5=Jt("x",e5);
  const i5=[["path",{
  d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
  key:"1xq2db"
}
  ]],a5=Jt("zap",i5),ze={
  shortBrand:"Aygun Design",website:"https://aygundesign.github.io/",email:"hello@aygundesign.com",location:"Türkiye / Online",
    logoPath:"/logo.png.png",heroLogoPath:"/yenilogo.png",socialLinks:{
    instagram:"#",linkedin:"#",behance:"#"
  }
}
;
  function l5(){
  const i=k.useRef(null);
    return k.useEffect(()=>{
    const a=window.THREE,s=i.current;
    if(!a||!s)return;
    const o=new a.Scene;
    o.fog=new a.Fog(0,24,62);
    const c=new a.PerspectiveCamera(40,window.innerWidth/window.innerHeight,.1,1e3);
    c.position.set(0,0,26);
      const d=new a.WebGLRenderer({
      alpha:!0,antialias:!0
    }
    );
    d.setSize(window.innerWidth,window.innerHeight),d.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.setClearColor(0,0),
    d.domElement.className="aygun-webgl-canvas",s.appendChild(d.domElement);
    const f=new a.AmbientLight(16777215,.9);
    o.add(f);
    const m=new a.PointLight(16766282,2.2,120);
    m.position.set(7,5,16),o.add(m);
    const y=new a.PointLight(16777215,1.2,120);
    y.position.set(-7,-2,14),o.add(y);
    const p=new a.PointLight(16761856,1.3,120);
    p.position.set(0,9,14),o.add(p);
    const v=new a.Group;
    v.position.set(0,.4,-2),o.add(v);
      const b=(X=512,At="rgba(255,210,80,1)",Kt="rgba(255,180,0,0)")=>{
      const Gt=document.createElement("canvas");
      Gt.width=X,Gt.height=X;
      const Ot=Gt.getContext("2d");
      if(!Ot)return null;
      const ee=Ot.createRadialGradient(X/2,X/2,10,X/2,X/2,X/2);
      return ee.addColorStop(0,At),ee.addColorStop(.25,"rgba(255,210,80,0.25)"),ee.addColorStop(.55,"rgba(255,180,0,0.08)"),ee.addColorStop(1,
      Kt),Ot.fillStyle=ee,Ot.fillRect(0,0,X,X),new a.CanvasTexture(Gt)
    }
      ,x=b(),w=b(512,"rgba(255,255,255,0.9)","rgba(255,255,255,0)"),N=new a.Mesh(new a.PlaneGeometry(15,15),new a.MeshBasicMaterial({
      map:x,transparent:!0,opacity:.34,blending:a.AdditiveBlending,depthWrite:!1
    }
    ));
    N.position.set(0,0,-4),v.add(N);
      const D=new a.Mesh(new a.PlaneGeometry(11,11),new a.MeshBasicMaterial({
      map:w,transparent:!0,opacity:.08,blending:a.AdditiveBlending,depthWrite:!1
    }
    ));
    D.position.set(.7,.2,-3.7),v.add(D);
      const B=(X,At,Kt,Gt,Ot,ee,je,pe)=>{
        const ue=new a.Mesh(new a.PlaneGeometry(X,At),new a.MeshBasicMaterial({
        color:Kt,transparent:!0,opacity:Gt,blending:a.AdditiveBlending,depthWrite:!1,side:a.DoubleSide
      }
      ));
      return ue.position.set(Ot,ee,je),ue.rotation.z=pe,v.add(ue),ue
    }
    ,H=B(.8,14,16766282,.07,-2.5,.3,-3,-.55),Y=B(.5,12,16777215,.05,3,-.2,-3.2,.42),G=B(.35,11,16761856,.045,.4,.5,-2.8,-.08),
      q=(X,At,Kt,Gt,Ot,ee,je,pe)=>{
        const ue=new a.Mesh(new a.PlaneGeometry(X,At),new a.MeshBasicMaterial({
        color:Kt,transparent:!0,opacity:Gt,blending:a.AdditiveBlending,depthWrite:!1
      }
      ));
      return ue.position.set(Ot,ee,je),ue.rotation.z=pe,v.add(ue),ue
    }
    ,et=q(.12,8.5,16766282,.24,-3.8,.1,-1.8,-.78),it=q(.08,6.8,16777215,.12,4.2,-.5,-1.6,.82),J=q(.07,5.7,16761856,.1,2.4,2.1,
      -1.9,1.1),P=q(.05,5,16777215,.08,-2,-2,-1.9,-1.1),lt=(X,At,Kt,Gt,Ot,ee,je,pe,ue,ci)=>{
        const ge=new a.Group,Na=new a.LineBasicMaterial({
        color:Kt,transparent:!0,opacity:Gt
      }
      ),Ho=[new a.Vector3(-X/2,-At/2,0),new a.Vector3(X/2,-At/2,0),new a.Vector3(X/2,At/2,0),new a.Vector3(-X/2,At/2,0),new a.Vector3(-X/2,
      -At/2,0)],ko=new a.BufferGeometry().setFromPoints(Ho);
      return ge.add(new a.Line(ko,Na)),ge.position.set(Ot,ee,je),ge.rotation.set(pe,ue,ci),v.add(ge),ge
    }
    ,tt=lt(10,6.2,16766282,.16,0,.2,-2.6,.12,-.28,.08),mt=lt(8.4,5,16777215,.1,.2,-.1,-2.1,-.08,.22,-.06),xt=lt(6.9,4.3,16766282,
      .08,-.2,.1,-1.6,.1,-.16,.03),Ft=(X,At,Kt,Gt,Ot)=>{
        const ee=new a.BufferGeometry().setFromPoints([new a.Vector3(-X/2,0,0),new a.Vector3(X/2,0,0)]),je=new a.LineBasicMaterial({
        color:At,transparent:!0,opacity:Kt
      }
      ),pe=new a.Line(ee,je);
      return pe.position.set(0,Gt,Ot),v.add(pe),pe
    }
    ,kt=Ft(12,16766282,.12,.7,-2.3),Ut=Ft(9.8,16777215,.06,-.6,-2),R=new a.Group;
    v.add(R);
    const K=new a.TextureLoader;
    let F,st,ft;
      K.load(ze.heroLogoPath,X=>{
      X.colorSpace=a.SRGBColorSpace,X.anisotropy=d.capabilities.getMaxAnisotropy();
        const At=X.image.width/X.image.height,Kt=8.5,Gt=Kt/At,Ot=new a.Mesh(new a.PlaneGeometry(Kt*1.02,Gt*1.02),new a.MeshBasicMaterial({
        map:X,color:0,transparent:!0,opacity:.22
      }
      ));
        Ot.position.set(.35,-.25,-.55),Ot.rotation.y=-.18,R.add(Ot),st=new a.Mesh(new a.PlaneGeometry(Kt*1.07,Gt*1.07),new a.MeshBasicMaterial({
        map:X,color:16761856,transparent:!0,opacity:.18,blending:a.AdditiveBlending,depthWrite:!1
      }
        )),st.position.set(0,0,-.15),R.add(st),ft=new a.Mesh(new a.PlaneGeometry(Kt*1.03,Gt*1.03),new a.MeshBasicMaterial({
        map:X,color:16777215,transparent:!0,opacity:.08,blending:a.AdditiveBlending,depthWrite:!1
      }
        )),ft.position.set(-.05,.03,-.06),R.add(ft),F=new a.Mesh(new a.PlaneGeometry(Kt,Gt),new a.MeshBasicMaterial({
        map:X,transparent:!0
      }
      )),F.position.set(0,0,.15),R.add(F)
    }
    ,void 0,()=>console.warn(`Logo yüklenemedi: ${ze.heroLogoPath}`));
      const A=(X,At,Kt,Gt,Ot,ee,je)=>{
      const pe=new Float32Array(X*3);
      for(let ge=0;
      ge<X;
      ge+=1)pe[ge*3]=(Math.random()-.5)*At,pe[ge*3+1]=(Math.random()-.5)*Kt,pe[ge*3+2]=-10-Math.random()*Gt;
      const ue=new a.BufferGeometry;
      ue.setAttribute("position",new a.BufferAttribute(pe,3));
        const ci=new a.PointsMaterial({
        color:Ot,size:ee,transparent:!0,opacity:je,blending:a.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0
      }
      );
      return new a.Points(ue,ci)
    }
    ,U=A(130,70,40,24,16766282,.05,.11),Q=A(70,60,32,24,16777215,.03,.08);
    o.add(U,Q);
      const Z={
      x:0,y:0,targetX:0,targetY:0
    }
      ,rt=X=>{
      Z.targetX=(X.clientX/window.innerWidth-.5)*2,Z.targetY=(X.clientY/window.innerHeight-.5)*2
    }
    ;
      window.addEventListener("mousemove",rt,{
      passive:!0
    }
    );
    const ht=new a.Clock;
    let Tt=0;
      const le=()=>{
      Tt=window.requestAnimationFrame(le);
      const X=ht.getElapsedTime();
      if(Z.x+=(Z.targetX-Z.x)*.04,Z.y+=(Z.targetY-Z.y)*.04,v.rotation.x=Z.y*.05,v.rotation.y=Z.x*.1+Math.sin(X*.45)*.025,v.position.x=Z.x*.7,
      v.position.y=.4-Z.y*.35,R.rotation.y=Math.sin(X*.85)*.14,R.rotation.x=Math.cos(X*.65)*.025,R.position.y=Math.sin(X*1.4)*.08,
        F&&(F.rotation.z=Math.sin(X*.9)*.01),st){
        const At=1+Math.sin(X*2.2)*.012;
        st.scale.set(At,At,At),st.material.opacity=.13+(Math.sin(X*1.8)+1)*.03
      }
        if(ft){
        const At=1+Math.cos(X*1.6)*.01;
        ft.scale.set(At,At,At)
      }
      H.material.opacity=.04+(Math.sin(X*1.2)+1)*.02,Y.material.opacity=.03+(Math.cos(X*1.35)+1)*.015,G.material.opacity=.02+(Math.sin(X*1.8)+1)*.012,
      H.position.x=-2.5+Math.sin(X*.8)*.3,Y.position.x=3+Math.cos(X*.6)*.25,G.position.y=.5+Math.sin(X*1.1)*.25,et.position.y=.1+Math.sin(X)*.22,
      it.position.y=-.5+Math.cos(X*1.15)*.18,J.position.x=2.4+Math.sin(X*.9)*.2,P.position.x=-2+Math.cos(X)*.16,et.material.opacity=.16+(Math.sin(X*1.7)+1)*.04,
      it.material.opacity=.08+(Math.cos(X*1.9)+1)*.02,tt.rotation.y+=.0014,tt.rotation.x+=6e-4,mt.rotation.y-=.0011,mt.rotation.x-=5e-4,
      xt.rotation.y+=8e-4,kt.position.x=Math.sin(X*.7)*.4,Ut.position.x=Math.cos(X*.8)*.35,kt.material.opacity=.08+(Math.sin(X*1.4)+1)*.025,
      Ut.material.opacity=.04+(Math.cos(X*1.3)+1)*.015,N.rotation.z+=8e-4,N.scale.setScalar(1+Math.sin(X*1.3)*.015),D.scale.setScalar(1+Math.cos(X*1.5)*.012),
      D.position.x=.7+Math.sin(X*.9)*.2,U.rotation.y=X*.01,Q.rotation.y=-X*.007,c.position.x+=(Z.x*.28-c.position.x)*.03,c.position.y+=(-Z.y*.12-c.position.y)*.03,
      c.lookAt(0,0,0),d.render(o,c)
    }
    ;
    le();
      const Lt=()=>{
      c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),d.setSize(window.innerWidth,window.innerHeight),
      d.setPixelRatio(Math.min(window.devicePixelRatio,2))
    }
    ;
      return window.addEventListener("resize",Lt),()=>{
        window.cancelAnimationFrame(Tt),window.removeEventListener("mousemove",rt),window.removeEventListener("resize",Lt),o.traverse(X=>{
        X.geometry?.dispose?.(),Array.isArray(X.material)?X.material.forEach(At=>At.dispose?.()):X.material?.dispose?.()
      }
      ),d.dispose(),s.removeChild(d.domElement)
    }
  }
    ,[]),S.jsxs("div",{
      className:"aygun-background","aria-hidden":"true",children:[S.jsx("div",{
      className:"aygun-background-radials"
    }
      ),S.jsx("div",{
      ref:i,className:"aygun-background-webgl"
    }
      ),S.jsx("div",{
      className:"aygun-background-shade"
    }
    )]
  }
  )
}
  function s5(){
  const i=k.useRef(null);
    return k.useEffect(()=>{
    const a=i.current;
    if(!a)return;
      const s=o=>{
      a.style.left=`${o.clientX}px`,a.style.top=`${o.clientY}px`
    }
    ;
      return window.addEventListener("mousemove",s,{
      passive:!0
    }
    ),()=>window.removeEventListener("mousemove",s)
  }
    ,[]),S.jsx("div",{
    ref:i,className:"aygun-cursor","aria-hidden":"true"
  }
  )
}
  function o5(){
    return S.jsxs("svg",{
    viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-5 w-5",
      "aria-hidden":"true",children:[S.jsx("rect",{
      x:"2",y:"2",width:"20",height:"20",rx:"5"
    }
      ),S.jsx("circle",{
      cx:"12",cy:"12",r:"4"
    }
      ),S.jsx("circle",{
      cx:"17.5",cy:"6.5",r:"1",fill:"currentColor",stroke:"none"
    }
    )]
  }
  )
}
  function r5(){
    return S.jsxs("svg",{
    viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-5 w-5",
      "aria-hidden":"true",children:[S.jsx("rect",{
      x:"2",y:"9",width:"4",height:"12"
    }
      ),S.jsx("circle",{
      cx:"4",cy:"4",r:"2"
    }
      ),S.jsx("path",{
      d:"M10 21v-7a5 5 0 0 1 10 0v7"
    }
      ),S.jsx("path",{
      d:"M10 9v12"
    }
    )]
  }
  )
}
  const Ec=[{
  id:1,title:"The Roof 134",category:"Gayrimenkul",description:"Premium konut projesi için dijital iletişim ve kampanya tasarımları.",
  image:"https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1000&h=750&fit=crop"
}
  ,{
  id:2,title:"EMAIR Aviation",category:"Havacılık",description:"Kurumsal sosyal medya dili ve özel havacılık odaklı görsel içerikler.",
  image:"https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1000&h=750&fit=crop"
}
  ,{
  id:3,title:"Türk Telekom Basketbol",category:"Spor",description:"Maç günü, altyapı ve kulüp iletişimi için dinamik spor tasarımları.",
  image:"https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1000&h=750&fit=crop"
}
  ,{
  id:4,title:"Kodsan",category:"Endüstri",description:"Endüstriyel ürün ve marka iletişimini güçlendiren kurumsal tasarım sistemi.",
  image:"https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1000&h=750&fit=crop"
}
  ,{
  id:5,title:"medi Türkiye",category:"Medikal",description:"Ürün faydasını net anlatan, güven odaklı medikal iletişim tasarımları.",
  image:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1000&h=750&fit=crop"
}
  ,{
  id:6,title:"1on1 Personal Training",category:"Fitness",description:"Markanın enerjisini yansıtan sosyal medya, kampanya ve etkinlik içerikleri.",
  image:"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1000&h=750&fit=crop"
}
  ],u5=[{
  icon:K3,title:"Grafik Tasarım",description:"Sosyal medya, kampanya, sunum ve basılı materyaller için güçlü görsel çözümler."
}
  ,{
  icon:V3,title:"Marka Kimliği",description:"Logodan renk sistemine kadar markanızın tüm temas noktalarında tutarlı bir dil."
}
  ,{
  icon:Y3,title:"Web Tasarım",description:"Modern, hızlı, responsive ve markanızın karakterine uygun web arayüzleri."
}
  ,{
  icon:F3,title:"UI / UX",description:"Web ve mobil ürünler için sade, işlevsel ve kullanıcı odaklı deneyimler."
}
  ,{
  icon:z3,title:"Video & Motion",description:"Reels, tanıtım filmi, motion graphic ve dijital kampanya içerikleri."
}
  ,{
  icon:E3,title:"Sosyal Medya",description:"Markanıza özel içerik sistemi, kreatif kampanyalar ve sürdürülebilir tasarım dili."
}
  ],c5=[{
  value:"360°",label:"Yaratıcı Yaklaşım",icon:T3
}
  ,{
  value:"6",label:"Hizmet Alanı",icon:a5
}
  ,{
  value:"100%",label:"Markaya Özel",icon:$3
}
  ,{
  value:"1",label:"Bütünleşik Tasarım Dili",icon:tf
}
  ],f5=["Adobe Photoshop","Adobe Illustrator","After Effects","Premiere Pro","Figma","React","TypeScript","Vite"],d5=[{
  number:"01",icon:t5,title:"Analiz & Strateji",description:"Markayı, hedef kitleyi ve iletişim ihtiyacını netleştirerek doğru yaratıcı yönü belirliyoruz."
}
  ,{
  number:"02",icon:_3,title:"Tasarım & Üretim",description:"Belirlenen stratejiyi güçlü tipografi, görsel dil ve işlevsel arayüzlerle tasarıma dönüştürüyoruz."
}
  ,{
  number:"03",icon:Q3,title:"Uygulama & Teslim",description:"Tüm çıktıları kullanılacağı mecraya uygun, düzenli ve yayına hazır biçimde teslim ediyoruz."
}
  ],vy=[{
  label:"Portföy",id:"portfoy"
}
  ,{
  label:"Hizmetler",id:"hizmetler"
}
  ,{
  label:"Hakkımızda",id:"hakkimizda"
}
  ,{
  label:"İletişim",id:"iletisim"
}
],by=["Grafik Tasarım","Web Tasarım","UI / UX","Marka Kimliği","Motion Design","Sosyal Medya","React","Adobe Creative Cloud"],
Mc=["Güçlü Markalar","Dijital Deneyimler","Etkili Arayüzler","Akılda Kalan Hikâyeler"];
  function h5({
  value:i
}
  ){
    const a=k.useRef(null),s=d3(a,{
    once:!0
  }
    ),o=Number.parseInt(i.replace(/\D/g,""),10),c=i.replace(/[0-9]/g,""),d=c1(0,{
    stiffness:60,damping:15
  }
  ),[f,m]=k.useState(0);
    return k.useEffect(()=>{
    s&&d.set(o)
  }
    ,[s,o,d]),k.useEffect(()=>d.on("change",y=>m(Math.round(y))),[d]),S.jsxs("span",{
    ref:a,children:[f,c]
  }
  )
}
  function m5(){
  const[i,a]=k.useState(0);
    return k.useEffect(()=>{
    const s=window.setInterval(()=>a(o=>(o+1)%Mc.length),2800);
    return()=>window.clearInterval(s)
  }
    ,[]),S.jsx("span",{
      className:"relative block h-[1.15em] overflow-hidden",children:S.jsx(Pc,{
        mode:"wait",children:S.jsx(ot.span,{
          initial:{
          y:"100%",opacity:0
        }
          ,animate:{
          y:0,opacity:1
        }
          ,exit:{
          y:"-100%",opacity:0
        }
          ,transition:{
          duration:.5,ease:[.22,1,.36,1]
        }
        ,className:"block gold-text",children:Mc[i]
      }
      ,Mc[i])
    }
    )
  }
  )
}
  function p5(){
  const i=[...by,...by];
    return S.jsxs("div",{
    className:"relative overflow-hidden border-y border-[#D4AF37]/20 py-6 bg-black/30 backdrop-blur-md",children:[S.jsx("div",
      {
      className:"marquee-fade marquee-fade-left"
    }
      ),S.jsx("div",{
      className:"marquee-fade marquee-fade-right"
    }
      ),S.jsx(ot.div,{
        className:"flex w-max gap-12 whitespace-nowrap",animate:{
        x:["0%","-50%"]
      }
        ,transition:{
        duration:22,repeat:1/0,ease:"linear"
      }
        ,children:i.map((a,s)=>S.jsxs("span",{
          className:"flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.2em]",style:{
          color:s%2===0?"#D4AF37":"#7f6b28"
        }
          ,children:[S.jsx("span",{
          className:"inline-block h-1.5 w-1.5 rounded-full bg-[#D4AF37]"
        }
        ),a]
      }
      ,`${a}-${s}`))
    }
    )]
  }
  )
}
  function y5(){
    const[i,a]=k.useState("Tümü"),[s,o]=k.useState(!1),[c,d]=k.useState(null),{
    scrollY:f,scrollYProgress:m
  }
    =s3(),y=Ro(f,[0,650],[0,130]),p=Ro(f,[0,500],[1,0]),v=c1(m,{
    stiffness:400,damping:40
  }
    ),b=k.useMemo(()=>["Tümü",...new Set(Ec.map(D=>D.category))],[]),x=i==="Tümü"?Ec:Ec.filter(D=>D.category===i),w=D=>{
      document.getElementById(D)?.scrollIntoView({
      behavior:"smooth"
    }
    ),o(!1)
  }
    ,N=D=>{
    D.preventDefault();
    const B=new FormData(D.currentTarget),H=String(B.get("name")??""),Y=String(B.get("email")??""),G=String(B.get("subject")??"Yeni proje talebi"),
    q=String(B.get("message")??""),et=`Ad Soyad: ${H}
E-posta: ${Y}

${q}`;
    window.location.href=`mailto:${ze.email}?subject=${encodeURIComponent(G)}&body=${encodeURIComponent(et)}`
  }
  ;
    return S.jsxs("div",{
      className:"relative min-h-screen overflow-x-hidden text-white",children:[S.jsx(l5,{
    }
      ),S.jsx(s5,{
    }
      ),S.jsx(ot.div,{
        className:"fixed left-0 top-0 z-[100] h-[3px] w-full origin-left",style:{
        scaleX:v,background:"linear-gradient(to right, #B8860B, #D4AF37, #F5E27D)"
      }
    }
      ),S.jsxs(ot.header,{
        initial:{
        y:-90,opacity:0
      }
        ,animate:{
        y:0,opacity:1
      }
        ,transition:{
        duration:.9,ease:[.22,1,.36,1]
      }
        ,className:"fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-12",children:[S.jsxs("nav",{
        className:"mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-[#D4AF37]/20 bg-black/50 px-5 py-3 backdrop-blur-xl lg:px-7",
          children:[S.jsx("button",{
            type:"button",onClick:()=>window.scrollTo({
            top:0,behavior:"smooth"
          }
            ),className:"flex items-center","aria-label":"Ana sayfaya dön",children:S.jsx("img",{
            src:ze.logoPath,alt:`${ze.shortBrand} logo`,className:"h-11 w-auto object-contain sm:h-14"
          }
          )
        }
          ),S.jsxs("div",{
            className:"hidden items-center gap-8 md:flex",children:[vy.map(D=>S.jsxs(ot.button,{
              type:"button",onClick:()=>w(D.id),whileHover:{
              y:-2
            }
              ,className:"group relative text-sm text-zinc-400 transition-colors hover:text-white",children:[D.label,S.jsx("span",{
              className:"absolute -bottom-2 left-0 h-px w-0 bg-gradient-to-r from-[#D4AF37] to-[#F5E27D] transition-all duration-300 group-hover:w-full"
            }
            )]
          }
            ,D.id)),S.jsx(ot.button,{
              type:"button",whileHover:{
              scale:1.05
            }
              ,whileTap:{
              scale:.95
            }
            ,onClick:()=>w("iletisim"),className:"rounded-full px-6 py-2.5 text-sm font-semibold text-black gold-button",children:"Teklif Al"
          }
          )]
        }
          ),S.jsx(ot.button,{
            type:"button",whileTap:{
            scale:.9
          }
            ,onClick:()=>o(D=>!D),className:"text-[#D4AF37] md:hidden","aria-label":"Menüyü aç veya kapat",children:s?S.jsx(n5,{
            size:24
          }
            ):S.jsx(G3,{
            size:24
          }
          )
        }
        )]
      }
        ),S.jsx(Pc,{
          children:s&&S.jsxs(ot.div,{
            initial:{
            opacity:0,y:-20
          }
            ,animate:{
            opacity:1,y:0
          }
            ,exit:{
            opacity:0,y:-20
          }
          ,className:"mx-auto mt-3 flex max-w-7xl flex-col gap-3 rounded-2xl border border-[#D4AF37]/20 bg-black/90 p-6 backdrop-blur-xl md:hidden",
            children:[vy.map(D=>S.jsx("button",{
            type:"button",onClick:()=>w(D.id),className:"py-2 text-left text-lg font-medium text-zinc-300 transition-colors hover:text-[#D4AF37]",
            children:D.label
          }
            ,D.id)),S.jsx("button",{
            type:"button",onClick:()=>w("iletisim"),className:"mt-2 rounded-full py-3 font-bold text-black gold-button",children:"Teklif Al"
          }
          )]
        }
        )
      }
      )]
    }
      ),S.jsxs("main",{
        className:"relative z-10",children:[S.jsx("section",{
          className:"relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-32 lg:px-14",children:S.jsxs("div",{
          className:"mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(340px,1.05fr)]",children:[S.jsxs(ot.div,
            {
              style:{
              y,opacity:p
            }
            ,className:"hero-copy relative z-10 rounded-[2rem] border border-white/5 bg-black/25 p-6 backdrop-blur-[3px] sm:p-9 lg:bg-transparent lg:p-0 lg:backdrop-blur-none",
              children:[S.jsxs(ot.div,{
                initial:{
                opacity:0,scale:.85
              }
                ,animate:{
                opacity:1,scale:1
              }
                ,transition:{
                duration:.7,delay:.2
              }
              ,className:"mb-8 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/5 px-5 py-2.5 backdrop-blur",
                children:[S.jsx(ot.span,{
                  className:"h-2 w-2 rounded-full bg-[#D4AF37]",animate:{
                  scale:[1,1.5,1],opacity:[1,.5,1]
                }
                  ,transition:{
                  duration:1.5,repeat:1/0
                }
              }
                ),S.jsx("span",{
                className:"text-sm font-medium tracking-wide text-[#D4AF37]",children:"Grafik • Dijital • Teknoloji"
              }
              )]
            }
              ),S.jsxs(ot.h1,{
                initial:{
                opacity:0,y:60
              }
                ,animate:{
                opacity:1,y:0
              }
                ,transition:{
                duration:1,delay:.35,ease:[.22,1,.36,1]
              }
                ,className:"mb-7 text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl",children:[S.jsx("span",{
                className:"block text-white",children:"Markanız için"
              }
                ),S.jsx(m5,{
              }
                ),S.jsx("span",{
                className:"block text-white",children:"Tasarlıyoruz"
              }
              )]
            }
              ),S.jsx(ot.p,{
                initial:{
                opacity:0,y:30
              }
                ,animate:{
                opacity:1,y:0
              }
                ,transition:{
                duration:.9,delay:.65
              }
              ,className:"mb-10 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg",children:"Aygun Design; grafik tasarım, marka kimliği, web, UI/UX ve hareketli içerik çözümlerini tek bir yaratıcı sistemde buluşturur."
            }
              ),S.jsxs(ot.div,{
                initial:{
                opacity:0,y:30
              }
                ,animate:{
                opacity:1,y:0
              }
                ,transition:{
                duration:.9,delay:.85
              }
                ,className:"flex flex-col gap-4 sm:flex-row",children:[S.jsxs(ot.button,{
                  type:"button",whileHover:{
                  scale:1.05,boxShadow:"0 0 40px rgba(212,175,55,0.45)"
                }
                  ,whileTap:{
                  scale:.96
                }
                ,onClick:()=>w("portfoy"),className:"group flex items-center justify-center gap-3 rounded-full px-9 py-4 font-bold text-black gold-button",
                  children:["Çalışmaları İncele",S.jsx(x3,{
                  className:"h-5 w-5 transition-transform group-hover:translate-x-1"
                }
                )]
              }
                ),S.jsx(ot.button,{
                  type:"button",whileHover:{
                  scale:1.05,borderColor:"#D4AF37"
                }
                  ,whileTap:{
                  scale:.96
                }
                ,onClick:()=>w("hizmetler"),className:"rounded-full border border-[#D4AF37]/40 px-9 py-4 font-semibold text-[#D4AF37] transition-colors hover:bg-[#D4AF37]/5",
                children:"Hizmetleri Gör"
              }
              )]
            }
              ),S.jsxs(ot.button,{
                type:"button",initial:{
                opacity:0
              }
                ,animate:{
                opacity:1
              }
                ,transition:{
                delay:1.5
              }
                ,onClick:()=>w("portfoy"),className:"mt-16 flex flex-col items-start gap-2 text-left",children:[S.jsx("span",{
                className:"text-xs uppercase tracking-[0.25em] text-zinc-600",children:"Keşfet"
              }
                ),S.jsx(ot.span,{
                  animate:{
                  y:[0,8,0]
                }
                  ,transition:{
                  duration:1.6,repeat:1/0
                }
                  ,children:S.jsx(D3,{
                  className:"h-5 w-5 text-[#D4AF37]"
                }
                )
              }
              )]
            }
            )]
          }
            ),S.jsx("div",{
              className:"relative hidden min-h-[620px] lg:block","aria-hidden":"true",children:S.jsxs(ot.div,{
                initial:{
                opacity:0,x:30
              }
                ,animate:{
                opacity:1,x:0
              }
                ,transition:{
                delay:1,duration:.9
              }
              ,className:"absolute bottom-16 right-0 rounded-2xl border border-[#D4AF37]/20 bg-black/35 px-5 py-4 backdrop-blur-lg",children:[S.jsx("div",
                {
                className:"mb-1 text-xs uppercase tracking-[0.24em] text-[#D4AF37]",children:"Aygun Design"
              }
                ),S.jsx("div",{
                className:"text-sm text-zinc-400",children:"Premium Digital Experience"
              }
              )]
            }
            )
          }
          )]
        }
        )
      }
        ),S.jsx(p5,{
      }
        ),S.jsx("section",{
          className:"section-shell py-24 px-6 lg:px-14",children:S.jsx("div",{
            className:"mx-auto grid max-w-6xl grid-cols-2 gap-5 md:grid-cols-4",children:c5.map((D,B)=>S.jsxs(ot.div,{
              initial:{
              opacity:0,y:40
            }
              ,whileInView:{
              opacity:1,y:0
            }
              ,viewport:{
              once:!0
            }
              ,transition:{
              delay:B*.12,duration:.7
            }
              ,whileHover:{
              y:-8,scale:1.03
            }
              ,className:"glass-card group relative overflow-hidden rounded-3xl p-6 text-center sm:p-8",children:[S.jsx("div",{
                className:"mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10",children:S.jsx(D.icon,{
                className:"h-6 w-6 text-[#D4AF37]"
              }
              )
            }
              ),S.jsx("div",{
                className:"gold-text mb-1 text-3xl font-black sm:text-4xl",children:S.jsx(h5,{
                value:D.value
              }
              )
            }
              ),S.jsx("div",{
              className:"text-xs text-zinc-500 sm:text-sm",children:D.label
            }
            )]
          }
          ,D.label))
        }
        )
      }
        ),S.jsx("section",{
          id:"portfoy",className:"section-shell scroll-mt-24 px-6 py-24 lg:px-14",children:S.jsxs("div",{
            className:"mx-auto max-w-7xl",children:[S.jsxs(ot.div,{
              initial:{
              opacity:0,y:40
            }
              ,whileInView:{
              opacity:1,y:0
            }
              ,viewport:{
              once:!0
            }
              ,className:"mb-14 text-center",children:[S.jsx("span",{
              className:"section-label",children:"Portföy"
            }
              ),S.jsxs("h2",{
                className:"section-title",children:["Seçilmiş ",S.jsx("span",{
                className:"gold-text",children:"Çalışmalar"
              }
              )]
            }
              ),S.jsx("p",{
              className:"section-description",children:"Farklı sektörlerde marka dilini güçlendiren dijital ve görsel iletişim projeleri."
            }
            )]
          }
            ),S.jsx(ot.div,{
              initial:{
              opacity:0,y:20
            }
              ,whileInView:{
              opacity:1,y:0
            }
              ,viewport:{
              once:!0
            }
              ,className:"mb-12 flex flex-wrap justify-center gap-3",children:b.map(D=>S.jsx(ot.button,{
                type:"button",onClick:()=>a(D),whileHover:{
                scale:1.05
              }
                ,whileTap:{
                scale:.95
              }
                ,className:"rounded-full px-5 py-2.5 text-sm font-semibold transition-all",style:i===D?{
                background:"linear-gradient(135deg,#B8860B,#D4AF37)",color:"#0d0d0d"
              }
                :{
                background:"rgba(0,0,0,0.35)",color:"#a1a1aa",border:"1px solid rgba(212,175,55,0.18)"
              }
              ,children:D
            }
            ,D))
          }
            ),S.jsx(ot.div,{
              layout:!0,className:"grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",children:S.jsx(Pc,{
                mode:"popLayout",children:x.map(D=>S.jsxs(ot.article,{
                  layout:!0,initial:{
                  opacity:0,scale:.86
                }
                  ,animate:{
                  opacity:1,scale:1
                }
                  ,exit:{
                  opacity:0,scale:.86
                }
                  ,transition:{
                  duration:.4
                }
                  ,whileHover:{
                  y:-10
                }
                ,onHoverStart:()=>d(D.id),onHoverEnd:()=>d(null),className:"group relative cursor-pointer overflow-hidden rounded-3xl border border-[#D4AF37]/10 bg-black/50",
                  children:[S.jsx("div",{
                    className:"aspect-[4/3] overflow-hidden",children:S.jsx(ot.img,{
                      src:D.image,alt:D.title,loading:"lazy",className:"h-full w-full object-cover",animate:{
                      scale:c===D.id?1.12:1
                    }
                      ,transition:{
                      duration:.7,ease:[.22,1,.36,1]
                    }
                  }
                  )
                }
                  ),S.jsx("div",{
                  className:"absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"
                }
                  ),S.jsx(ot.div,{
                    className:"absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.17),transparent_60%)]",animate:{
                    opacity:c===D.id?1:0
                  }
                }
                  ),S.jsxs("div",{
                    className:"absolute inset-0 flex flex-col justify-end p-6",children:[S.jsx("span",{
                    className:"mb-3 w-fit rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#D4AF37]",
                    children:D.category
                  }
                    ),S.jsx("h3",{
                    className:"mb-2 text-2xl font-black text-white",children:D.title
                  }
                    ),S.jsx("p",{
                    className:"text-sm leading-relaxed text-zinc-300",children:D.description
                  }
                    ),S.jsxs(ot.div,{
                      className:"mt-4 flex items-center gap-2 text-[#D4AF37]",animate:{
                      opacity:c===D.id?1:0,x:c===D.id?0:-10
                    }
                      ,children:[S.jsx(j3,{
                      className:"h-4 w-4"
                    }
                      ),S.jsx("span",{
                      className:"text-sm font-medium",children:"Proje Detayı"
                    }
                    )]
                  }
                  )]
                }
                )]
              }
              ,D.id))
            }
            )
          }
          )]
        }
        )
      }
        ),S.jsxs("section",{
        id:"hizmetler",className:"section-shell relative scroll-mt-24 overflow-hidden px-6 py-24 lg:px-14",children:[S.jsx("div",
          {
          className:"dot-pattern absolute inset-0 opacity-40"
        }
          ),S.jsxs("div",{
            className:"relative z-10 mx-auto max-w-7xl",children:[S.jsxs(ot.div,{
              initial:{
              opacity:0,y:40
            }
              ,whileInView:{
              opacity:1,y:0
            }
              ,viewport:{
              once:!0
            }
              ,className:"mb-14 text-center",children:[S.jsx("span",{
              className:"section-label",children:"Hizmetler"
            }
              ),S.jsxs("h2",{
                className:"section-title",children:["Neler ",S.jsx("span",{
                className:"gold-text",children:"Yapıyoruz?"
              }
              )]
            }
              ),S.jsx("p",{
              className:"section-description",children:"Markanızın ihtiyaç duyduğu yaratıcı ve dijital çözümleri tek merkezden sunuyoruz."
            }
            )]
          }
            ),S.jsx("div",{
              className:"grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3",children:u5.map((D,B)=>S.jsxs(ot.article,{
                initial:{
                opacity:0,y:50
              }
                ,whileInView:{
                opacity:1,y:0
              }
                ,viewport:{
                once:!0
              }
                ,transition:{
                delay:B*.08,duration:.65
              }
                ,whileHover:{
                y:-10,scale:1.02
              }
                ,className:"glass-card group relative overflow-hidden rounded-3xl p-8",children:[S.jsx("div",{
                className:"absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-[#D4AF37] to-[#F5E27D] transition-all duration-700 group-hover:w-full"
              }
                ),S.jsx("div",{
                className:"mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 transition-transform duration-500 group-hover:scale-110",
                  children:S.jsx(D.icon,{
                  className:"h-7 w-7 text-[#D4AF37]"
                }
                )
              }
                ),S.jsx("h3",{
                className:"mb-3 text-xl font-bold text-white",children:D.title
              }
                ),S.jsx("p",{
                className:"text-sm leading-relaxed text-zinc-400",children:D.description
              }
              )]
            }
            ,D.title))
          }
          )]
        }
        )]
      }
        ),S.jsx("section",{
          id:"hakkimizda",className:"section-shell scroll-mt-24 px-6 py-24 lg:px-14",children:S.jsxs("div",{
            className:"mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2",children:[S.jsxs(ot.div,{
              initial:{
              opacity:0,x:-60
            }
              ,whileInView:{
              opacity:1,x:0
            }
              ,viewport:{
              once:!0
            }
              ,transition:{
              duration:.9
            }
              ,className:"relative",children:[S.jsxs("div",{
                className:"relative overflow-hidden rounded-3xl border border-[#D4AF37]/20",children:[S.jsx("img",{
                src:"https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1000&h=1200&fit=crop",alt:"Aygun Design yaratıcı çalışma alanı",
                loading:"lazy",className:"h-[560px] w-full object-cover"
              }
                ),S.jsx("div",{
                className:"absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"
              }
              ),["left-0 top-0","right-0 top-0 rotate-90","bottom-0 left-0 -rotate-90","bottom-0 right-0 rotate-180"].map(D=>S.jsxs("div",
                {
                  className:`absolute ${D} h-9 w-9`,children:[S.jsx("div",{
                  className:"h-[2px] w-full bg-[#D4AF37]"
                }
                  ),S.jsx("div",{
                  className:"h-full w-[2px] bg-[#D4AF37]"
                }
                )]
              }
              ,D))]
            }
              ),S.jsx(ot.div,{
                initial:{
                opacity:0,scale:.8,y:20
              }
                ,whileInView:{
                opacity:1,scale:1,y:0
              }
                ,viewport:{
                once:!0
              }
                ,transition:{
                delay:.35
              }
                ,whileHover:{
                scale:1.04
              }
                ,className:"absolute -bottom-8 right-4 rounded-2xl p-5 gold-button sm:right-8",children:S.jsxs("div",{
                  className:"flex items-center gap-3",children:[S.jsx(tf,{
                  className:"h-7 w-7 text-black"
                }
                  ),S.jsxs("div",{
                    children:[S.jsx("div",{
                    className:"text-xl font-black text-black",children:"Tasarım + Teknoloji"
                  }
                    ),S.jsx("div",{
                    className:"text-xs font-medium text-black/70",children:"Aynı yaratıcı sistemde"
                  }
                  )]
                }
                )]
              }
              )
            }
            )]
          }
            ),S.jsxs(ot.div,{
              initial:{
              opacity:0,x:60
            }
              ,whileInView:{
              opacity:1,x:0
            }
              ,viewport:{
              once:!0
            }
              ,transition:{
              duration:.9
            }
              ,children:[S.jsx("span",{
              className:"section-label",children:"Hakkımızda"
            }
              ),S.jsxs("h2",{
                className:"mb-6 text-4xl font-black leading-tight md:text-5xl",children:["Merhaba, biz ",S.jsx("span",{
                className:"gold-text",children:"Aygun Design"
              }
              )]
            }
              ),S.jsxs("div",{
                className:"mb-8 space-y-4 text-[15px] leading-relaxed text-zinc-400",children:[S.jsx("p",{
                children:"Markaların daha güçlü, daha modern ve daha tutarlı görünmesini sağlayan yaratıcı çözümler üretiyoruz. Görsel tasarım ile teknolojiyi aynı proje disiplininde buluşturuyoruz."
              }
                ),S.jsx("p",{
                children:"Sosyal medya içeriklerinden web arayüzlerine, marka kimliğinden hareketli tasarımlara kadar her işi markanın ihtiyacına göre planlıyor ve uygulanabilir çıktılara dönüştürüyoruz."
              }
              )]
            }
              ),S.jsx("div",{
                className:"mb-10 flex flex-wrap gap-2",children:f5.map((D,B)=>S.jsx(ot.span,{
                  initial:{
                  opacity:0,scale:.8
                }
                  ,whileInView:{
                  opacity:1,scale:1
                }
                  ,viewport:{
                  once:!0
                }
                  ,transition:{
                  delay:B*.05
                }
                  ,whileHover:{
                  scale:1.06,borderColor:"#D4AF37",color:"#D4AF37"
                }
                ,className:"cursor-default rounded-full border border-[#D4AF37]/15 bg-black/30 px-4 py-2 text-sm text-zinc-400",children:D
              }
              ,D))
            }
              ),S.jsx(ot.button,{
                type:"button",whileHover:{
                scale:1.05,boxShadow:"0 0 30px rgba(212,175,55,0.35)"
              }
                ,whileTap:{
                scale:.96
              }
              ,onClick:()=>w("iletisim"),className:"rounded-full px-10 py-4 font-bold text-black gold-button",children:"Projenizi Konuşalım"
            }
            )]
          }
          )]
        }
        )
      }
        ),S.jsx("section",{
          className:"section-shell px-6 py-24 lg:px-14",children:S.jsxs("div",{
            className:"mx-auto max-w-7xl",children:[S.jsxs(ot.div,{
              initial:{
              opacity:0,y:40
            }
              ,whileInView:{
              opacity:1,y:0
            }
              ,viewport:{
              once:!0
            }
              ,className:"mb-14 text-center",children:[S.jsx("span",{
              className:"section-label",children:"Çalışma Süreci"
            }
              ),S.jsxs("h2",{
                className:"section-title",children:["Fikirden ",S.jsx("span",{
                className:"gold-text",children:"Yayına"
              }
              )]
            }
              ),S.jsx("p",{
              className:"section-description",children:"Her projeyi net, takip edilebilir ve markaya özel üç aşamalı bir süreçle yönetiyoruz."
            }
            )]
          }
            ),S.jsx("div",{
              className:"grid grid-cols-1 gap-6 md:grid-cols-3",children:d5.map((D,B)=>S.jsxs(ot.article,{
                initial:{
                opacity:0,y:50
              }
                ,whileInView:{
                opacity:1,y:0
              }
                ,viewport:{
                once:!0
              }
                ,transition:{
                delay:B*.14
              }
                ,whileHover:{
                y:-10,scale:1.02
              }
                ,className:"glass-card relative overflow-hidden rounded-3xl p-8",children:[S.jsx("div",{
                className:"absolute right-6 top-4 text-6xl font-black text-[#D4AF37]/10",children:D.number
              }
                ),S.jsx("div",{
                className:"mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10",children:S.jsx(D.icon,
                  {
                  className:"h-7 w-7 text-[#D4AF37]"
                }
                )
              }
                ),S.jsx("h3",{
                className:"mb-3 text-xl font-bold",children:D.title
              }
                ),S.jsx("p",{
                className:"text-sm leading-relaxed text-zinc-400",children:D.description
              }
              )]
            }
            ,D.number))
          }
          )]
        }
        )
      }
        ),S.jsx("section",{
          className:"section-shell px-6 py-10 lg:px-14",children:S.jsxs(ot.div,{
            initial:{
            opacity:0,scale:.95
          }
            ,whileInView:{
            opacity:1,scale:1
          }
            ,viewport:{
            once:!0
          }
          ,className:"relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#1a1200]/95 via-[#2a1f00]/95 to-[#1a1200]/95 p-10 text-center sm:p-14",
            children:[S.jsx(ot.div,{
              className:"absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,175,55,0.25),transparent_60%)]",animate:{
              opacity:[.3,.65,.3]
            }
              ,transition:{
              duration:4,repeat:1/0
            }
          }
            ),S.jsxs("div",{
              className:"relative z-10",children:[S.jsx(tf,{
              className:"mx-auto mb-6 h-10 w-10 text-[#D4AF37]"
            }
              ),S.jsxs("h2",{
                className:"mb-4 text-3xl font-black text-white md:text-5xl",children:["Projenizi Birlikte ",S.jsx("span",{
                className:"gold-text",children:"Güçlendirelim"
              }
              )]
            }
              ),S.jsx("p",{
              className:"mx-auto mb-9 max-w-xl text-zinc-400",children:"İhtiyacınızı anlatın; markanıza uygun yaratıcı ve uygulanabilir çözümü birlikte planlayalım."
            }
              ),S.jsx(ot.button,{
                type:"button",whileHover:{
                scale:1.06,boxShadow:"0 0 50px rgba(212,175,55,0.5)"
              }
                ,whileTap:{
                scale:.96
              }
              ,onClick:()=>w("iletisim"),className:"rounded-full px-11 py-4 text-lg font-black text-black gold-button",children:"Hemen Başlayalım →"
            }
            )]
          }
          )]
        }
        )
      }
        ),S.jsx("section",{
          id:"iletisim",className:"section-shell scroll-mt-24 px-6 py-24 lg:px-14",children:S.jsxs("div",{
            className:"mx-auto grid max-w-7xl gap-14 lg:grid-cols-2",children:[S.jsxs(ot.div,{
              initial:{
              opacity:0,x:-60
            }
              ,whileInView:{
              opacity:1,x:0
            }
              ,viewport:{
              once:!0
            }
              ,transition:{
              duration:.9
            }
              ,children:[S.jsx("span",{
              className:"section-label",children:"İletişim"
            }
              ),S.jsxs("h2",{
                className:"mb-6 text-4xl font-black md:text-5xl",children:["Birlikte ",S.jsx("span",{
                className:"gold-text",children:"Çalışalım"
              }
              )]
            }
              ),S.jsx("p",{
              className:"mb-10 max-w-xl text-[15px] leading-relaxed text-zinc-400",children:"Projenizi, hedefinizi ve ihtiyaç duyduğunuz teslimleri paylaşın. Size uygun çalışma kapsamını birlikte oluşturalım."
            }
              ),S.jsxs("div",{
                className:"space-y-5",children:[S.jsxs("a",{
                  href:`mailto:${ze.email}`,className:"contact-row group",children:[S.jsx("span",{
                    className:"contact-icon",children:S.jsx(U3,{
                    className:"h-5 w-5"
                  }
                  )
                }
                  ),S.jsxs("span",{
                    children:[S.jsx("span",{
                    className:"block text-xs text-zinc-600",children:"E-posta"
                  }
                    ),S.jsx("span",{
                    className:"font-medium text-white",children:ze.email
                  }
                  )]
                }
                )]
              }
                ),S.jsxs("div",{
                  className:"contact-row",children:[S.jsx("span",{
                    className:"contact-icon",children:S.jsx(H3,{
                    className:"h-5 w-5"
                  }
                  )
                }
                  ),S.jsxs("span",{
                    children:[S.jsx("span",{
                    className:"block text-xs text-zinc-600",children:"Konum"
                  }
                    ),S.jsx("span",{
                    className:"font-medium text-white",children:ze.location
                  }
                  )]
                }
                )]
              }
                ),S.jsxs("a",{
                  href:ze.website,target:"_blank",rel:"noreferrer",className:"contact-row group",children:[S.jsx("span",{
                    className:"contact-icon",children:S.jsx(gy,{
                    className:"h-5 w-5"
                  }
                  )
                }
                  ),S.jsxs("span",{
                    children:[S.jsx("span",{
                    className:"block text-xs text-zinc-600",children:"Web"
                  }
                    ),S.jsx("span",{
                    className:"font-medium text-white",children:"aygundesign.github.io"
                  }
                  )]
                }
                )]
              }
              )]
            }
              ),S.jsxs("div",{
                className:"mt-10 flex gap-4",children:[S.jsx(ot.a,{
                  href:ze.socialLinks.instagram,"aria-label":"Instagram",whileHover:{
                  scale:1.15,y:-4,color:"#D4AF37"
                }
                  ,className:"social-button",children:S.jsx(o5,{
                }
                )
              }
                ),S.jsx(ot.a,{
                  href:ze.socialLinks.linkedin,"aria-label":"LinkedIn",whileHover:{
                  scale:1.15,y:-4,color:"#D4AF37"
                }
                  ,className:"social-button",children:S.jsx(r5,{
                }
                )
              }
                ),S.jsx(ot.a,{
                  href:ze.socialLinks.behance,"aria-label":"Portföy",whileHover:{
                  scale:1.15,y:-4,color:"#D4AF37"
                }
                  ,className:"social-button",children:S.jsx(gy,{
                  className:"h-5 w-5"
                }
                )
              }
              )]
            }
            )]
          }
            ),S.jsx(ot.div,{
              initial:{
              opacity:0,x:60
            }
              ,whileInView:{
              opacity:1,x:0
            }
              ,viewport:{
              once:!0
            }
              ,transition:{
              duration:.9
            }
              ,children:S.jsxs("form",{
                onSubmit:N,className:"glass-card rounded-3xl p-7 sm:p-8",children:[S.jsxs("div",{
                  className:"mb-5 grid grid-cols-1 gap-5 md:grid-cols-2",children:[S.jsxs("label",{
                    className:"form-field",children:[S.jsx("span",{
                    children:"Adınız"
                  }
                    ),S.jsx("input",{
                    name:"name",type:"text",placeholder:"Ad Soyad",required:!0
                  }
                  )]
                }
                  ),S.jsxs("label",{
                    className:"form-field",children:[S.jsx("span",{
                    children:"E-posta"
                  }
                    ),S.jsx("input",{
                    name:"email",type:"email",placeholder:"ornek@email.com",required:!0
                  }
                  )]
                }
                )]
              }
                ),S.jsxs("label",{
                  className:"form-field mb-5",children:[S.jsx("span",{
                  children:"Konu"
                }
                  ),S.jsx("input",{
                  name:"subject",type:"text",placeholder:"Proje başlığı",required:!0
                }
                )]
              }
                ),S.jsxs("label",{
                  className:"form-field mb-7",children:[S.jsx("span",{
                  children:"Mesajınız"
                }
                  ),S.jsx("textarea",{
                  name:"message",rows:6,placeholder:"Projeniz ve ihtiyaçlarınız hakkında bilgi verin...",required:!0
                }
                )]
              }
                ),S.jsx(ot.button,{
                  type:"submit",whileHover:{
                  scale:1.02,boxShadow:"0 0 30px rgba(212,175,55,0.4)"
                }
                  ,whileTap:{
                  scale:.98
                }
                ,className:"w-full rounded-xl py-4 text-base font-bold text-black gold-button",children:"Mesaj Gönder ✦"
              }
              )]
            }
            )
          }
          )]
        }
        )
      }
      )]
    }
      ),S.jsx("footer",{
      className:"relative z-10 border-t border-[#D4AF37]/10 bg-black/45 px-6 py-10 backdrop-blur-md lg:px-14",children:S.jsxs("div",
        {
          className:"mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row",children:[S.jsx("img",{
          src:ze.logoPath,alt:`${ze.shortBrand} logo`,className:"h-14 w-auto object-contain"
        }
          ),S.jsx("p",{
          className:"text-sm text-zinc-600",children:"© 2026 AYGUN DESIGN. Tüm hakları saklıdır."
        }
          ),S.jsxs("div",{
            className:"flex gap-6 text-sm text-zinc-600",children:[S.jsx("button",{
            type:"button",className:"transition-colors hover:text-[#D4AF37]",children:"Gizlilik"
          }
            ),S.jsx("button",{
            type:"button",className:"transition-colors hover:text-[#D4AF37]",children:"Kullanım Koşulları"
          }
          )]
        }
        )]
      }
      )
    }
    )]
  }
  )
}
  Gb.createRoot(document.getElementById("root")).render(S.jsx(k.StrictMode,{
    children:S.jsx(y5,{
  }
  )
}
));
