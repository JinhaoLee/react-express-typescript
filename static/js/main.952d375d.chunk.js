(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,a,t){e.exports={button:"Navigation_button__3yFli"}},249:function(e,a,t){},257:function(e,a,t){e.exports=t(521)},518:function(e,a,t){},520:function(e,a,t){},521:function(e,a,t){"use strict";t.r(a);t(258);var n=t(0),r=t.n(n),c=t(27),o=t.n(c),l=t(255),i=t(53),s=t(42),u=t(23),m=t.n(u),d=t(21),p=t(54),f=t(52),b=t(17),E=t(531),h=t(526),g=t(527),v=t(248),w=t(522),j=t(528),O=t(532),y=t(530),k=t(523),S=t(112),x=t.n(S),C=function(e){e.onFetch;var a=Object(n.useState)(!1),t=Object(b.a)(a,2),c=t[0],o=t[1],l=Object(n.useState)(!1),i=Object(b.a)(l,2),s=i[0],u=i[1],m=Object(n.useState)(null!==sessionStorage.getItem("token")),d=Object(b.a)(m,2),p=d[0],f=d[1],h=function(){o(!1),u(!1)},g=function(){f(!0)},v=function(){sessionStorage.removeItem("token"),f(!1),alert("Hope you go back")};return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{bg:"dark",variant:"dark"},r.a.createElement(O.a.Brand,{href:"#home"},"CAB230"),r.a.createElement(y.a,{className:"mr-auto"},r.a.createElement(y.a.Link,{href:""},"Home"),r.a.createElement(y.a.Link,{href:""},"Contact"),r.a.createElement(y.a.Link,{href:""},"About")),r.a.createElement(E.a,{inline:!0},r.a.createElement(k.a,null,p?r.a.createElement(w.a,{variant:"outline-info",className:x.a.button,onClick:v},"Logout"):r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{variant:"outline-info",className:x.a.button,onClick:function(){return o(!0)}},"Sign up"),r.a.createElement(w.a,{variant:"outline-info",className:x.a.button,onClick:function(){return u(!0)}},"Sign in"),r.a.createElement(A,{onHide:h,show:c,type:"Sign up",login:g}),r.a.createElement(A,{onHide:h,show:s,type:"Sign in",login:g}))))))},I=t(524),B=t(249),L=t.n(B),G=function(e){var a=e.data;return r.a.createElement("div",{style:{height:"400px",overflow:"overlay"}},r.a.createElement(I.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",responsive:!0,className:L.a.table},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"LGA"),r.a.createElement("th",null,"Total"))),r.a.createElement("tbody",null,function(){if(a)return a.map(function(e){return{LGA:e.LGA,total:e.total}}).map(function(e,a){return r.a.createElement("tr",{key:a},Object.values(e).map(function(e,a){return r.a.createElement("td",{key:a},e)}))})}())))},P=t(529),A=function(e){return r.a.createElement(P.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(P.a.Header,{closeButton:!0},r.a.createElement(P.a.Title,{id:"contained-modal-title-vcenter"},e.type)),r.a.createElement(P.a.Body,null,"Sign in"===e.type?r.a.createElement(_,{onHide:e.onHide,login:e.login}):r.a.createElement(T,{onHide:e.onHide})))};var F="https://cab230.hackhouse.sh";function H(e){for(var a="",t=0,n=Object.entries(e);t<n.length;t++){var r=n[t],c=Object(b.a)(r,2),o=c[0],l=c[1];""!==l&&"all"!==l&&(a+="".concat(o,"=").concat(l,"&"))}return fetch("".concat(F,"/search?").concat(a),{method:"GET",headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("token"))}}).then(function(e){return e.json()}).catch(function(e){return console.error(e)})}function N(e){return fetch("".concat(F,"/").concat(e),{method:"GET"}).then(function(e){return e.json()}).catch(function(e){return console.log(e)})}var T=function(e){var a=e.onHide,t=Object(n.useState)({email:"",emailValid:!1,password:"",passwordValid:!1,touched:{email:!1,password:!1}}),c=Object(b.a)(t,2),o=c[0],l=c[1],i=function(){var e=Object(f.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),t.stopPropagation(),(n=o.email,r=o.password,fetch("".concat(F,"/register"),{method:"POST",body:"email=".concat(n,"&password=").concat(r),headers:{"Content-type":"application/x-www-form-urlencoded"}}).then(function(e){return e.json()}).catch(function(e){return console.log(e)})).then(function(e){"0"===e.message[0]&&a(),alert(e.message)}).catch(function(e){return alert(e)});case 3:case"end":return e.stop()}var n,r},e)}));return function(a){return e.apply(this,arguments)}}(),u=function(e){return function(a){l(Object(p.a)({},o,{touched:Object(p.a)({},o.touched,Object(s.a)({},e,!0))}))}},d=Object(n.useCallback)(function(e){var a,t=e.target,n=t.name,r=t.value;l(Object(p.a)({},o,(a={},Object(s.a)(a,n,r),Object(s.a)(a,n+"Valid","email"===n?/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(r).toLowerCase()):r.length>6),a)))},[o]);return r.a.createElement(E.a,{onSubmit:i},r.a.createElement(E.a.Group,{controlId:"formBasicEmail"},r.a.createElement(E.a.Label,null,"Email address"),r.a.createElement(E.a.Control,{required:!0,name:"email",type:"email",placeholder:"Enter email",value:o.email,onChange:d,isInvalid:!o.emailValid&&o.touched.email,onBlur:u("email")}),r.a.createElement(E.a.Control.Feedback,{type:"invalid"},"Please provide a valid email.")),r.a.createElement(E.a.Group,{controlId:"formBasicPassword"},r.a.createElement(E.a.Label,null,"Password"),r.a.createElement(E.a.Control,{required:!0,name:"password",type:"password",placeholder:"Password",value:o.password,onChange:d,isInvalid:!o.passwordValid&&o.touched.password,onBlur:u("password")}),r.a.createElement(E.a.Control.Feedback,{type:"invalid"},"Please provide a valid password, which length should be greater than 6.")),r.a.createElement(w.a,{variant:"primary",type:"submit",disabled:!o.emailValid||!o.passwordValid},"Submit"))},V=t(55),M=t(245),q=t(247),z=t(246),R=t(115),Z=R.object().shape({email:R.string().email("Invalid email address"),password:R.string().min(6,"Too Short!").max(12,"Too Long!").required("Required")}),_=function(e){var a=e.onHide,t=e.login;return r.a.createElement("div",null,r.a.createElement(V.d,{initialValues:{email:"",password:""},validationSchema:Z,onSubmit:function(){var e=Object(f.a)(m.a.mark(function e(n,r){var c;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o=n.email,l=n.password,fetch("".concat(F,"/login"),{method:"POST",body:"email=".concat(o,"&password=").concat(l),headers:{"Content-type":"application/x-www-form-urlencoded"}}).then(function(e){return e.json()}).catch(function(e){return console.log(e)});case 3:(c=e.sent).token?(sessionStorage.setItem("token",c.token),a(),t()):(alert(c.message),r.setSubmitting(!1)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert("email or username is not correct!");case 10:case"end":return e.stop()}var o,l},e,null,[[0,7]])}));return function(a,t){return e.apply(this,arguments)}}(),render:function(e){return r.a.createElement(V.c,null,r.a.createElement(V.b,{name:"email",type:"email",render:function(e){var a=e.field,t=e.form;return r.a.createElement(M.a,{controlId:"formBasicEmail"},r.a.createElement(q.a,null,"Email address"),r.a.createElement(z.a,Object.assign({placeholder:"Enter email",isInvalid:!!t.errors.email},a)),r.a.createElement(z.a.Feedback,{type:"invalid"},r.a.createElement(V.a,{name:"email"})))}}),r.a.createElement(V.b,{name:"password",render:function(e){var a=e.field,t=e.form;return r.a.createElement(M.a,{controlId:"formBasicPassword"},r.a.createElement(q.a,null,"Password"),r.a.createElement(z.a,Object.assign({type:"password",placeholder:"Password",isInvalid:!!t.errors.password},a)),r.a.createElement(z.a.Feedback,{type:"invalid"},r.a.createElement(V.a,{name:"password"})))}}),r.a.createElement(w.a,{variant:"primary",type:"submit",disabled:e.isSubmitting},"Submit"))}}))},J=t(525),K=function(){return r.a.createElement(J.a,null,r.a.createElement("h1",null,"Queensland Government"),r.a.createElement("p",null,"Reported offender numbers by local government area and crime type"))},Q=t(79),W=Object(Q.withScriptjs)(Object(Q.withGoogleMap)(function(e){return r.a.createElement(Q.GoogleMap,{defaultZoom:4,defaultCenter:{lat:-23.116667,lng:132.133333}},e.isMarkerShown&&e.data&&e.data.map(function(e,a){return r.a.createElement(Q.Marker,{key:a,position:{lat:e.lat,lng:e.lng}})}))})),X=function(){var e=Object(n.useState)(!1),a=Object(b.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)(!1),l=Object(b.a)(o,2),i=l[0],u=l[1],O=Object(n.useState)([]),y=Object(b.a)(O,2),k=y[0],S=y[1],x=Object(n.useState)({offence:[],area:[],age:[],gender:[],year:[]}),I=Object(b.a)(x,2),B=I[0],L=I[1],P=Object(n.useState)({offence:"Advertising Prostitution",area:"all",age:"all",gender:"all",year:"all"}),A=Object(b.a)(P,2),F=A[0],T=A[1];Object(n.useEffect)(function(){!function(){var e=Object(f.a)(m.a.mark(function e(){var a,t,n,r,c;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N("offences");case 2:return a=e.sent,e.next=5,N("areas");case 5:return t=e.sent,e.next=8,N("ages");case 8:return n=e.sent,e.next=11,N("genders");case 11:return r=e.sent,e.next=14,N("years");case 14:c=e.sent,L(Object(p.a)({},B,{offence:[].concat(Object(d.a)(B.offence),Object(d.a)(a.offences)),area:[].concat(Object(d.a)(B.area),Object(d.a)(t.areas)),age:[].concat(Object(d.a)(B.age),Object(d.a)(n.ages)),gender:[].concat(Object(d.a)(B.gender),Object(d.a)(r.genders)),year:[].concat(Object(d.a)(B.year),Object(d.a)(c.years))}));case 16:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]);var V=Object(n.useCallback)(function(e){return S([].concat(Object(d.a)(k),[e]))},[k]),M=function(e){var a=e.target,t=a.name,n=a.value;T(Object(p.a)({},F,Object(s.a)({},t,n)))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{onFetch:V}),r.a.createElement(K,null),r.a.createElement(h.a,{className:"mb-5"},r.a.createElement(g.a,null,r.a.createElement(v.a,{md:4}),r.a.createElement(v.a,null,r.a.createElement(E.a,null,function(){for(var e=[],a=0,t=Object.entries(B);a<t.length;a++){var n=t[a],c=Object(b.a)(n,2),o=c[0],l=c[1];"offence"!==o&&(l=["all"].concat(Object(d.a)(l))),e.push(r.a.createElement(E.a.Group,{controlId:"Form.".concat(o,"Select"),key:o},r.a.createElement(E.a.Label,null,o),r.a.createElement(E.a.Control,{as:"select",onChange:M,name:o},l.map(function(e,a){return r.a.createElement("option",{key:a},e)}))))}return e}(),r.a.createElement(E.a.Row,null,r.a.createElement(E.a.Group,{as:v.a,controlId:"formGridZip"},r.a.createElement(w.a,{variant:"primary",onClick:function(){var e=Object(f.a)(m.a.mark(function e(a){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(sessionStorage.getItem("token")){e.next=3;break}return alert("Please log in"),e.abrupt("return");case 3:return u(!0),c(!0),e.next=7,H(F);case 7:t=e.sent,S([t.result]),c(!1);case 10:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()},"submit"))))),r.a.createElement(v.a,{md:4})),i?t?r.a.createElement(j.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement(g.a,null,r.a.createElement(v.a,null,r.a.createElement(G,{data:k[0]})),r.a.createElement(v.a,null,r.a.createElement(W,{isMarkerShown:!0,googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyBl_4TBv8ssKrKew8ewisQ3oidXouSyXq8&v=3.exp&libraries=geometry,drawing,places",loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"400px"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}}),data:k[0]}))):null))},$=(t(518),function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:X}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(520);o.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[257,1,2]]]);
//# sourceMappingURL=main.952d375d.chunk.js.map