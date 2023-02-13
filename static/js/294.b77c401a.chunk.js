"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[294],{395:function(n,e,t){t.d(e,{Z:function(){return a}});var i=t(5206),r=(t(5462),t(3329));function a(){return(0,r.jsx)(i.Ix,{position:"top-right",autoClose:4500,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!1,draggable:!0,pauseOnHover:!1,theme:"light"})}},6294:function(n,e,t){t.r(e),t.d(e,{default:function(){return xn}});var i,r,a,o,s=t(2791),l=t(9434),d=t(2286),c=t(208),x=t(9439),h=t(5206),u=t(168),p=t(1588),f=t(4281),m=t(225),g=m.Z.form(i||(i=(0,u.Z)(["\n    padding: 30px 20px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    row-gap: 15px;\n    border-radius: 10px;\n    background-color: #fff;\n    width: 450px;\n    box-shadow: 0 0 0 1px rgba(3, 102, 214, 0.3) inset;\n"]))),Z=m.Z.h1(r||(r=(0,u.Z)(["\n    padding: 0 0 15px 0;\n    font-size: 20px;\n    font-weight: 600;\n    line-height: 1;\n    color: #1976d2;\n"]))),j=(0,m.Z)(p.Z)(a||(a=(0,u.Z)(["\n    width: 100%;\n"]))),b=(0,m.Z)(f.Z)(o||(o=(0,u.Z)(["\n    display: block;\n"]))),v=t(3329),w=function(n,e){return Boolean(n.find((function(n){return n.name.toLowerCase()===e.toLowerCase()})))};function y(){var n=(0,s.useState)(""),e=(0,x.Z)(n,2),t=e[0],i=e[1],r=(0,s.useState)(""),a=(0,x.Z)(r,2),o=a[0],u=a[1],p=(0,l.v9)(d.Af),f=(0,l.I0)();return(0,v.jsxs)(g,{onSubmit:function(n){n.preventDefault();var e=n.target,t=e.elements.name.value,r=e.elements.number.value;if(""!==t){if(w(p,t))return h.Am.info("".concat(t," is already in contacts"));f((0,c.je)({name:t,number:r})).unwrap().then((function(){return h.Am.success("The contact was successfully added")})).catch((function(){return h.Am.error("Something went wrong. Please try again")})),i(""),u("")}},children:[(0,v.jsx)(Z,{children:"Add contact to your phonebook"}),(0,v.jsx)(j,{name:"name",type:"text",label:"enter new contact name",size:"small",value:t,onChange:function(n){return i(n.target.value)},inputProps:{pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}}),(0,v.jsx)(j,{name:"number",type:"tel",label:"enter phone number",size:"small",value:o,onChange:function(n){return u(n.target.value)},inputProps:{pattern:"^[+]?[(]?[0-9]{1,5}[)]?[-s.]?[0-9]{1,3}[-s.]?[0-9]{4,6}$",title:'Enter the number in the following formats: +xxxxxxxxxxxx, +xxxxx-xxx-xxxx or without "+", the maximum amount of digits in a number is 14'}}),(0,v.jsx)(b,{type:"submit",variant:"outlined",size:"small",disabled:!Boolean(t&&o),children:"Add contact"})]})}var z,k,C,A=t(6895),_=m.Z.form(z||(z=(0,u.Z)(["\n    padding: 30px 20px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    row-gap: 15px;\n    border-radius: 10px;\n    background-color: #fff;\n    width: 450px;\n    box-shadow: 0 0 0 1px rgba(3, 102, 214, 0.3) inset;\n"]))),I=m.Z.h2(k||(k=(0,u.Z)(["\n    padding: 0 0 15px 0;\n    font-size: 20px;\n    font-weight: 600;\n    line-height: 1;\n    color: #1976d2;\n"]))),D=(0,m.Z)(p.Z)(C||(C=(0,u.Z)(["\n    width: 100%;\n"])));function F(){var n=(0,l.I0)(),e=(0,l.v9)(d.Gd);return(0,v.jsxs)(_,{children:[(0,v.jsx)(I,{children:"Find contacts by name"}),(0,v.jsx)(D,{name:"filter",type:"text",label:"enter name to find",size:"small",value:e,onChange:function(e){var t=e.target.value;n((0,A.h)(t))}})]})}var O,P,S,B,L,N,E,T,Y,$=t(395),G=m.Z.div(O||(O=(0,u.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    min-width: 600px;\n    padding: 30px 20px;\n\n    border-radius: 10px;\n    background-color: #fff;\n\n    box-shadow: 0 0 0 1px rgba(3, 102, 214, 0.3) inset;\n"]))),H=m.Z.h3(P||(P=(0,u.Z)(["\n    padding: 0 0 24px 0;\n    font-size: 20px;\n    font-weight: 600;\n    line-height: 1;\n    color: #1976d2;\n"]))),J=m.Z.table(S||(S=(0,u.Z)(["\n    width: 100%;\n"]))),M=m.Z.tr(B||(B=(0,u.Z)(["\n    //for screen readers\n    color: transparent;\n    overflow: hidden;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    height: 1px;\n    font-size: 1px;\n"]))),V=m.Z.tr(L||(L=(0,u.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 30px;\n    display: flex;\n    font-size: 17px;\n    border-bottom: 1px dashed grey;\n"]))),X=m.Z.td(N||(N=(0,u.Z)(["\n    font-size: 16px;\n    min-width: 250px;\n"]))),q=m.Z.td(E||(E=(0,u.Z)(["\n    font-size: 16px;\n    min-width: 150px;\n"]))),K=m.Z.td(T||(T=(0,u.Z)([""]))),Q=(0,m.Z)(f.Z)(Y||(Y=(0,u.Z)(["\n    font-size: 13px;\n    padding: 0;\n    text-transform: capitalize;\n"])));function R(){var n=(0,l.I0)(),e=(0,l.v9)(d.DI);return(0,v.jsxs)(G,{children:[(0,v.jsx)(H,{children:"Your saved contacts"}),(0,v.jsxs)(J,{children:[(0,v.jsx)("thead",{children:(0,v.jsxs)(M,{children:[(0,v.jsx)("th",{children:"Name"}),(0,v.jsx)("th",{children:"Number"}),(0,v.jsx)("th",{children:"Delete"})]})}),(0,v.jsx)("tbody",{children:e.map((function(e){var t=e.name,i=e.number,r=e.id;return(0,v.jsxs)(V,{children:[(0,v.jsxs)(X,{children:[t,":"]}),(0,v.jsx)(q,{children:i}),(0,v.jsx)(K,{children:(0,v.jsx)(Q,{type:"button",variant:"outlined",size:"small",onClick:function(){!function(e){n((0,c.xX)(e))}(r)},children:"Delete"})})]},r)}))})]})]})}var U,W,nn,en,tn,rn,an=t(7603),on=m.Z.main(U||(U=(0,u.Z)(["\n    width: 100%;\n    overflow: hidden;\n    height: calc(100vh - 69px);\n    background-color: #e7ebf0;\n"]))),sn=(0,m.Z)(an.Z)(W||(W=(0,u.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),ln=(m.Z.h1(nn||(nn=(0,u.Z)(["\n    margin-bottom: 10px;\n\n    font-size: 30px;\n    font-weight: bold;\n"]))),m.Z.div(en||(en=(0,u.Z)(["\n    padding: 30px 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 10px;\n    background-color: #1976d2;\n    width: 450px;\n"])))),dn=m.Z.h2(tn||(tn=(0,u.Z)(["\n    font-size: 20px;\n    font-weight: 600;\n    line-height: 1;\n    color: #f7f710;\n"]))),cn=m.Z.section(rn||(rn=(0,u.Z)(["\n    padding: 10px 0 0 0;\n"])));function xn(){var n=(0,l.v9)(d.tP),e=n.items,t=n.status,i=n.error,r=(0,l.I0)();return(0,s.useEffect)((function(){r((0,c.VC)())}),[r]),"loading"===t?(0,v.jsx)(on,{children:(0,v.jsx)(cn,{children:(0,v.jsxs)(sn,{children:[(0,v.jsx)(y,{}),(0,v.jsx)("h1",{children:"\u041e\u041d\u041e\u0412\u041b\u0415\u041d\u041d\u042f \u0414\u0410\u041d\u0418\u0425"})]})})}):i?(0,v.jsx)(on,{children:(0,v.jsx)(cn,{children:(0,v.jsx)(sn,{children:(0,v.jsx)("h1",{children:i})})})}):(0,v.jsxs)(on,{children:[(0,v.jsx)(cn,{children:(0,v.jsx)(sn,{children:(0,v.jsx)(y,{})})}),e.length>0&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(cn,{children:(0,v.jsx)(sn,{children:(0,v.jsx)(F,{})})}),(0,v.jsx)(cn,{children:(0,v.jsx)(sn,{children:(0,v.jsx)(R,{})})})]}),0===e.length&&(0,v.jsx)(cn,{children:(0,v.jsx)(sn,{children:(0,v.jsx)(ln,{children:(0,v.jsx)(dn,{children:"You have no saved contacts, add them"})})})}),(0,v.jsx)($.Z,{})]})}}}]);
//# sourceMappingURL=294.b77c401a.chunk.js.map