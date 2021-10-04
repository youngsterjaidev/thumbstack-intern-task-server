(this["webpackJsonpreact-typescript"]=this["webpackJsonpreact-typescript"]||[]).push([[0],{63:function(e,t,n){"use strict";n.r(t);var c,i,a,r,o,s,d,l,j,u,b,m=n(5),h=n(0),p=n(27),O=n(9),f=n(15),x=n(7),g=n.n(x),v=n(12),y=n(2),w=n(13),k=n.n(w),I=n(3),S=n(1),N={price:{fontSize:"2em"}},P=I.a.div(c||(c=Object(y.a)(["\n  padding: 1em;\n  background: #fff;\n"]))),q=I.a.div(i||(i=Object(y.a)(["\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: space-between;\n"]))),E=I.a.div(a||(a=Object(y.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n"]))),T=I.a.div(r||(r=Object(y.a)(["\n  padding: 0.5em;\n  color: #000;\n  cursor: pointer;\n\n  &:hover {\n    background: #000;\n    color: #fff;\n  }\n"]))),C=function(e){return Object(S.jsx)(P,{children:Object(S.jsxs)(q,{children:[Object(S.jsxs)(E,{children:[Object(S.jsx)(T,{onClick:function(){console.log(e.quantity+1),e.changeItem(e.itemName,e.quantity+1),e.setTotalPrice(e.totalPrice+e.price)},children:Object(S.jsx)("i",{className:"im im-plus"})}),Object(S.jsx)(T,{onClick:function(){if(!(e.quantity>=1))return null;e.changeItem(e.itemName,e.quantity-1),e.setTotalPrice(e.totalPrice-e.price)},children:Object(S.jsx)("i",{className:"im im-minus"})}),Object(S.jsx)("div",{children:e.itemName})]}),Object(S.jsx)("div",{children:Object(S.jsxs)("div",{style:N.price,children:["Rs.",e.price,"/-"]})})]})})},D=I.a.div(o||(o=Object(y.a)(["\n  width: 100%;\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n\n  @media (max-width: 500px) {\n    display: block;\n  }\n"]))),R=I.a.h2(s||(s=Object(y.a)(["\n  text-align: center;\n"]))),B=I.a.div(d||(d=Object(y.a)(["\n  position: sticky;\n  top: 3em;\n  background-color: #fff;\n  box-shadow: 0px 0px 14px 1px #9898989c;\n  padding: 1em;\n  height: max-content;\n  border-radius: 0.5em;\n\n  @media (max-width: 500px) {\n  }\n"]))),F=I.a.div(l||(l=Object(y.a)(["\n  height: 60vh;\n  width: 25em;\n  overflow-y: auto;\n  background: #fff;\n\n  @media (max-width: 500px) {\n    width: 100%;\n    height: auto;\n  }\n"]))),J=I.a.button(j||(j=Object(y.a)(['\n  width: 100%;\n  padding: 1em;\n  border: none;\n  background-color: #000;\n  color: #fff;\n  margin: 1em 0em;\n  border-radius: 5px;\n  font-family: "Noto Sans Display", sans-serif;\n']))),L=I.a.div(u||(u=Object(y.a)(["\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  padding: 0.5em 2em;\n  justify-content: space-between;\n"]))),z={heading:{fontWeight:600},pad:{padding:"1em"}};function A(e){var t,n=Object(h.useState)(null),c=Object(m.a)(n,2),i=c[0],a=c[1],r=Object(h.useState)("Anomoyous"),o=Object(m.a)(r,2),s=(o[0],o[1],Object(h.useState)(0)),d=Object(m.a)(s,2),l=d[0],j=d[1],u=function(e,t){if(i){var n=i.map((function(n){return n.itemName!==e?n:{itemName:n.itemName,quantity:t,price:n.price,id:n.id}}));a(n)}},b=function(){var e=Object(v.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("/");case 3:t=e.sent,n=t.data.data,a(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error Occured: ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();function p(){return(p=Object(v.a)(g.a.mark((function t(){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log({totalPrice:l,items:e.totalItem}),t.prev=1,t.next=4,k()({url:"/add",method:"POST",data:{user:e.detail,result:e.totalItem,totalPrice:l}});case 4:n=t.sent,console.log(n),200===n.status&&(console.log(n.data),Object(O.b)("/bill")),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error("Error Occured while sending the data : ",t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}return Object(h.useEffect)((function(){b()}),[]),Object(h.useEffect)((function(){i&&e.setTotalItem(i.filter((function(e){return e.quantity>0})))}),[i]),Object(h.useEffect)((function(){console.log("state Update")}),[e.totalItem]),i?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(R,{children:"Menu"}),Object(S.jsxs)(D,{children:[Object(S.jsx)("div",{style:z.pad,children:i.map((function(e){return Object(h.createElement)(C,Object(f.a)(Object(f.a)({},e),{},{key:e.id,totalPrice:l,changeItem:u,setTotalPrice:j}))}))}),Object(S.jsxs)(B,{children:[Object(S.jsxs)(F,{children:[Object(S.jsxs)(L,{children:[Object(S.jsx)("div",{style:z.heading,children:"Items"}),Object(S.jsx)("div",{style:z.heading,children:"Quantity"})]}),null===(t=e.totalItem)||void 0===t?void 0:t.map((function(e){return Object(S.jsxs)(L,{children:[Object(S.jsx)("div",{children:e.itemName}),Object(S.jsx)("div",{children:e.quantity})]},e.id)}))]}),Object(S.jsxs)(J,{type:"button",onClick:function(){return p.apply(this,arguments)},children:["Pay ",l]})]})]})]}):Object(S.jsx)("div",{children:"Loading"})}var M,Q,U,W,G,H=I.a.div(b||(b=Object(y.a)(["\n    text-align: center;\n"]))),K=function(e){var t=e.totalItem,n=e.detail;return Object(S.jsxs)("div",{children:[Object(S.jsx)(H,{children:n}),t.map((function(e){return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("div",{children:[e.itemName," - ",e.quantity]})})})),Object(S.jsx)("a",{href:"/user/".concat(n),children:"Print the Bill"})]})},V=I.a.form(M||(M=Object(y.a)(["\n    width: 50%;\n    margin: 0em auto;\n"]))),X=I.a.div(Q||(Q=Object(y.a)(["\n    width: 100%;\n    height: 100vh;\n    display: grid;\n    place-items: center;\n"]))),Y=I.a.div(U||(U=Object(y.a)(["\n    padding: 0.5em;\n"]))),Z=I.a.input(W||(W=Object(y.a)(["\n    padding: 1em;\n    width: 100%;\n    display: block;\n    border-radius: 5px;\n    border: 2p solid #ddd;\n"]))),$=I.a.button(G||(G=Object(y.a)(["\n    width: 100%;\n    display: block;\n    border: none;\n    padding: 1em;\n    background: black;\n    color: white;\n   \n   &:disabled {\n    cursor: not-allowed;\n    background: #ddd;\n   }\n"]))),_=function(e){var t=e.setDetail,n=Object(h.useState)(""),c=Object(m.a)(n,2),i=c[0],a=c[1],r=Object(h.useState)(!0),o=Object(m.a)(r,2),s=o[0],d=o[1];return Object(S.jsx)(X,{children:Object(S.jsxs)(V,{onSubmit:function(e){e.preventDefault(),t(i)},children:[Object(S.jsx)(Y,{children:Object(S.jsx)(Z,{type:"email",value:i,placeholder:"Enter the email",required:!0,onChange:function(e){d(!e.target.validity.valid),a(e.target.value)}})}),Object(S.jsx)(Y,{children:Object(S.jsx)($,{disabled:s,type:"submit",children:"Login"})})]})})};var ee=function(){var e=Object(h.useState)(function(){var e=window.sessionStorage.getItem("info");return console.log(e),e}()),t=Object(m.a)(e,2),n=t[0],c=t[1];return[n,function(e){console.log(e),window.sessionStorage.setItem("info",e),c(e)}]},te=function(){var e=ee(),t=Object(m.a)(e,2),n=t[0],c=t[1],i=Object(h.useState)(null),a=Object(m.a)(i,2),r=a[0],o=a[1];return Object(h.useEffect)((function(){console.log("Re Render")}),[r]),n?Object(S.jsxs)(O.a,{children:[Object(S.jsx)(A,{totalItem:r,setTotalItem:o,detail:n,path:"/"}),Object(S.jsx)(K,{totalItem:r,detail:n,path:"/bill"})]}):Object(S.jsx)(_,{setDetail:c,path:"/"})},ne=document.getElementById("root");Object(p.render)(Object(S.jsx)(te,{}),ne)}},[[63,1,2]]]);
//# sourceMappingURL=main.60580372.chunk.js.map