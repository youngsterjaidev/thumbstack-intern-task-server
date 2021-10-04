(this["webpackJsonpreact-typescript"]=this["webpackJsonpreact-typescript"]||[]).push([[0],{63:function(e,t,n){"use strict";n.r(t);var a,c,i,r,s,o,d,l,u,b,j,h,m=n(5),p=n(0),f=n(27),O=n(9),x=n(15),g=n(7),v=n.n(g),y=n(12),w=n(2),k=n(13),I=n.n(k),S=n(3),N=n(1),P={price:{fontSize:"2em"}},q=S.a.div(a||(a=Object(w.a)(["\n  padding: 1em;\n  background: #fff;\n"]))),E=S.a.div(c||(c=Object(w.a)(["\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: space-between;\n"]))),D=S.a.div(i||(i=Object(w.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n"]))),T=S.a.div(r||(r=Object(w.a)(["\n  padding: 0.5em;\n  color: #000;\n  cursor: pointer;\n\n  &:hover {\n    background: #000;\n    color: #fff;\n  }\n"]))),C=function(e){return Object(N.jsx)(q,{children:Object(N.jsxs)(E,{children:[Object(N.jsxs)(D,{children:[Object(N.jsx)(T,{onClick:function(){console.log(e.quantity+1),e.changeItem(e.itemName,e.quantity+1),e.setTotalPrice(e.totalPrice+e.price),e.setDisabled(!1)},children:Object(N.jsx)("i",{className:"im im-plus"})}),Object(N.jsx)(T,{onClick:function(){if(0===e.quantity&&e.setDisabled(!0),!(e.quantity>=1))return e.setDisabled(!0),null;e.changeItem(e.itemName,e.quantity-1),e.setTotalPrice(e.totalPrice-e.price)},children:Object(N.jsx)("i",{className:"im im-minus"})}),Object(N.jsx)("div",{children:e.itemName})]}),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{style:P.price,children:["Rs.",e.price,"/-"]})})]})})},R=S.a.div(s||(s=Object(w.a)(["\n  width: 100%;\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n\n  @media (max-width: 500px) {\n    display: block;\n  }\n"]))),B=S.a.h2(o||(o=Object(w.a)(["\n  text-align: center;\n"]))),F=S.a.div(d||(d=Object(w.a)(["\n  position: sticky;\n  top: 3em;\n  background-color: #fff;\n  box-shadow: 0px 0px 14px 1px #9898989c;\n  padding: 1em;\n  height: max-content;\n  border-radius: 0.5em;\n\n  @media (max-width: 500px) {\n  }\n"]))),J=S.a.div(l||(l=Object(w.a)(["\n  height: 60vh;\n  width: 25em;\n  overflow-y: auto;\n  background: #fff;\n\n  @media (max-width: 500px) {\n    width: 100%;\n    height: auto;\n  }\n"]))),L=S.a.button(u||(u=Object(w.a)(['\n  width: 100%;\n  padding: 1em;\n  border: none;\n  background-color: #000;\n  color: #fff;\n  margin: 1em 0em;\n  border-radius: 5px;\n  font-family: "Noto Sans Display", sans-serif;\n\n    &:disabled {\n        background: #ddd;\n        color: black;\n        cursor: not-allowed;\n    }\n']))),z=S.a.div(b||(b=Object(w.a)(["\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  padding: 0.5em 2em;\n  justify-content: space-between;\n"]))),A={heading:{fontWeight:600},pad:{padding:"1em"}};function M(e){var t,n=Object(p.useState)(null),a=Object(m.a)(n,2),c=a[0],i=a[1],r=Object(p.useState)("Anomoyous"),s=Object(m.a)(r,2),o=(s[0],s[1],Object(p.useState)(!0)),d=Object(m.a)(o,2),l=d[0],u=d[1],b=Object(p.useState)(0),j=Object(m.a)(b,2),h=j[0],f=j[1],g=function(e,t){if(c){var n=c.map((function(n){return n.itemName!==e?n:{itemName:n.itemName,quantity:t,price:n.price,id:n.id}}));i(n)}},w=function(){var e=Object(y.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("/all");case 3:t=e.sent,n=t.data.data,i(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error Occured: ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();function k(){return(k=Object(y.a)(v.a.mark((function t(){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==h){t.next=3;break}return alert("Please choose anything !"),t.abrupt("return",null);case 3:return t.prev=3,t.next=6,I()({url:"/add",method:"POST",data:{user:e.detail,result:e.totalItem,totalPrice:h}});case 6:n=t.sent,console.log(n),200===n.status&&(console.log(n.data),Object(O.b)("/bill")),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(3),console.error("Error Occured while sending the data : ",t.t0);case 14:case"end":return t.stop()}}),t,null,[[3,11]])})))).apply(this,arguments)}return Object(p.useEffect)((function(){w()}),[]),Object(p.useEffect)((function(){c&&e.setTotalItem(c.filter((function(e){return e.quantity>0})))}),[c]),Object(p.useEffect)((function(){console.log("state Update")}),[e.totalItem]),c?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(B,{children:"Menu"}),Object(N.jsxs)(R,{children:[Object(N.jsx)("div",{style:A.pad,children:c.map((function(e){return Object(p.createElement)(C,Object(x.a)(Object(x.a)({},e),{},{key:e.id,totalPrice:h,changeItem:g,setTotalPrice:f,setDisabled:u}))}))}),Object(N.jsxs)(F,{children:[Object(N.jsxs)(J,{children:[Object(N.jsxs)(z,{children:[Object(N.jsx)("div",{style:A.heading,children:"Items"}),Object(N.jsx)("div",{style:A.heading,children:"Quantity"})]}),null===(t=e.totalItem)||void 0===t?void 0:t.map((function(e){return Object(N.jsxs)(z,{children:[Object(N.jsx)("div",{children:e.itemName}),Object(N.jsx)("div",{children:e.quantity})]},e.id)}))]}),Object(N.jsxs)(L,{type:"button",onClick:function(){return k.apply(this,arguments)},disabled:l,children:["Pay ",h]})]})]})]}):Object(N.jsx)("div",{children:"Loading"})}var Q,U,W,G,H,K=S.a.div(j||(j=Object(w.a)(["\n    padding: 1em 2em;\n    height: 50vh;\n    background: #fff;\n"]))),V=S.a.div(h||(h=Object(w.a)(["\n    text-align: center;\n"]))),X=function(e){var t=e.totalItem,n=e.detail;return Object(N.jsxs)(K,{children:[Object(N.jsx)(V,{children:n}),t.map((function(e){return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{children:[e.itemName," - ",e.quantity]})})})),Object(N.jsx)("a",{href:"/user/".concat(n),children:"Print the Bill"})]})},Y=S.a.form(Q||(Q=Object(w.a)(["\n    width: 50%;\n    margin: 0em auto;\n"]))),Z=S.a.div(U||(U=Object(w.a)(["\n    width: 100%;\n    height: 100vh;\n    display: grid;\n    place-items: center;\n"]))),$=S.a.div(W||(W=Object(w.a)(["\n    padding: 0.5em;\n"]))),_=S.a.input(G||(G=Object(w.a)(["\n    padding: 1em;\n    width: 100%;\n    display: block;\n    border-radius: 5px;\n    border: 2p solid #ddd;\n"]))),ee=S.a.button(H||(H=Object(w.a)(["\n    width: 100%;\n    display: block;\n    border: none;\n    padding: 1em;\n    background: black;\n    color: white;\n   \n   &:disabled {\n    cursor: not-allowed;\n    background: #ddd;\n   }\n"]))),te=function(e){var t=e.setDetail,n=Object(p.useState)(""),a=Object(m.a)(n,2),c=a[0],i=a[1],r=Object(p.useState)(!0),s=Object(m.a)(r,2),o=s[0],d=s[1];return Object(N.jsx)(Z,{children:Object(N.jsxs)(Y,{onSubmit:function(e){e.preventDefault(),t(c)},children:[Object(N.jsx)($,{children:Object(N.jsx)(_,{type:"email",value:c,placeholder:"Enter the email",required:!0,onChange:function(e){d(!e.target.validity.valid),i(e.target.value)}})}),Object(N.jsx)($,{children:Object(N.jsx)(ee,{disabled:o,type:"submit",children:"Login"})})]})})};var ne=function(){var e=Object(p.useState)(function(){var e=window.sessionStorage.getItem("info");return console.log(e),e}()),t=Object(m.a)(e,2),n=t[0],a=t[1];return[n,function(e){console.log(e),window.sessionStorage.setItem("info",e),a(e)}]},ae=function(){var e=ne(),t=Object(m.a)(e,2),n=t[0],a=t[1],c=Object(p.useState)(null),i=Object(m.a)(c,2),r=i[0],s=i[1];return Object(p.useEffect)((function(){console.log("Re Render")}),[r]),n?Object(N.jsxs)(O.a,{children:[Object(N.jsx)(M,{totalItem:r,setTotalItem:s,detail:n,path:"/"}),Object(N.jsx)(X,{totalItem:r,detail:n,path:"/bill"})]}):Object(N.jsx)(te,{setDetail:a,path:"/"})},ce=document.getElementById("root");Object(f.render)(Object(N.jsx)(ae,{}),ce)}},[[63,1,2]]]);
//# sourceMappingURL=main.2c07dfa5.chunk.js.map