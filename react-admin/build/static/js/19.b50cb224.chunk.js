(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[19],{463:function(e,t,a){"use strict";var n=a(470),r=a.n(n),c=a(19),s=a(472).a(),l=a(31),i=a(274),u=r.a.create({baseURL:c.a,timeout:6e4}),o="/auth/login";u.interceptors.request.use((function(e){var t=localStorage.getItem(l.b);return t&&(e.headers.Authorization="bearer "+t),t||e.headers["public-request"]||(s.push(o),window.location.reload()),e}),(function(e){i.a.error({message:"Error"}),Promise.reject(e)})),u.interceptors.response.use((function(e){return e.data}),(function(e){var t={message:""};return 400!==e.response.status&&403!==e.response.status||(t.message="Authentication Fail",t.description="Please login again",localStorage.removeItem(l.b),s.push(o),window.location.reload()),404===e.response.status&&(t.message="Not Found"),500===e.response.status&&(t.message="Internal Server Error"),508===e.response.status&&(t.message="Time Out"),i.a.error(t),Promise.reject(e)}));t.a=u},467:function(e,t,a){},510:function(e,t,a){"use strict";var n=a(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},c=a(11),s=function(e,t){return n.createElement(c.a,Object.assign({},e,{ref:t,icon:r}))};s.displayName="DeleteOutlined";t.a=n.forwardRef(s)},589:function(e,t,a){"use strict";var n=a(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},c=a(11),s=function(e,t){return n.createElement(c.a,Object.assign({},e,{ref:t,icon:r}))};s.displayName="EditOutlined";t.a=n.forwardRef(s)},726:function(e,t,a){"use strict";a.r(t);var n=a(72),r=a(0),c=a.n(r),s=a(102),l=a(718),i=a(717),u=a(438),o=a(141),j=a(16),d=a(713),b=a(589),O=a(510),m=a(463),h=a(2);function f(e){var t=l.a.confirm,a=Object(r.useState)(!1),c=Object(n.a)(a,2),s=c[0],f=c[1],g=Object(r.useState)({}),v=Object(n.a)(g,2),p=v[0],x=v[1],y=Object(r.useRef)(p),S=Object(r.useState)(),k=Object(n.a)(S,2),C=k[0],I=k[1],q=Object(r.useState)(""),w=Object(n.a)(q,2),_=w[0],z=w[1],M=Object(r.useState)(""),A=Object(n.a)(M,2),T=A[0],E=A[1],R=Object(r.useState)(""),D=Object(n.a)(R,2),F=D[0],H=D[1],L=Object(r.useState)(""),N=Object(n.a)(L,2),B=N[0],P=N[1],Y=Object(r.useState)(""),J=Object(n.a)(Y,2),K=J[0],U=J[1],W=Object(r.useState)(""),G=Object(n.a)(W,2),Q=G[0],V=G[1],X=Object(r.useState)(""),Z=Object(n.a)(X,2),$=Z[0],ee=Z[1],te=Object(r.useState)(!1),ae=Object(n.a)(te,2),ne=ae[0],re=ae[1],ce=Object(r.useState)(!0),se=Object(n.a)(ce,2),le=se[0],ie=se[1],ue=[{title:"Year",dataIndex:"year",key:"year"},{title:"Make",dataIndex:"make",key:"make"},{title:"Model",dataIndex:"model",key:"model"},{title:"Transmission",dataIndex:"transmission",key:"transmission"},{title:"Trim",dataIndex:"trim",key:"trim"},{title:"Style",dataIndex:"style",key:"style"},{title:"Action",key:"action",render:function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{style:{display:"flex"},children:[Object(h.jsx)("div",{style:{padding:"10px"},children:Object(h.jsx)(b.a,{onClick:oe(e)})}),Object(h.jsx)("div",{style:{padding:"10px"},children:Object(h.jsx)(O.a,{onClick:je(e)})})]})})}}],oe=function(e){return function(){console.log(e),z(e.year),E(e.make),H(e.model),U(e.trim),V(e.style),P(e.transmission),ee(e.id),re(!0)}},je=function(e){return function(){t({title:"Do you want to delete these items?",content:"When clicked the OK button, this dialog will be closed after 1 second",onOk:function(){Object(m.a)({url:"/car_data_delete/"+e.id,method:"post",headers:{"public-request":"true"}}).then((function(e){ie((function(e){return!e}))}))},onCancel:function(){}})}},de=function(e){f(!0),Object(m.a)({url:"/car_data",method:"get",headers:{"public-request":"true"},params:e}).then((function(e){var t=[],a={};f(!1),console.log(p,"++++");var n=Object(j.a)(Object(j.a)({},y.current),{},{total:e.total});y.current=n,x(n),e.data.map((function(e){a={key:e.id,id:e.id,year:e.model_year,make:e.model_make_id,model:e.model_name,transmission:e.model_transmission_type,trim:e.model_trim,style:e.model_body},t.push(a)})),I(t)}))};Object(r.useEffect)((function(){de({page:y.current.current})}),[e.reloadState,le]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d.a,{columns:ue,dataSource:C,loading:s,pagination:p,onChange:function(e,t,a){console.log(e),y.current=e,x(Object(j.a)(Object(j.a)({},y.current),{},{current:e.current,pageSize:e.pageSize})),de({page:e.current,results:e.pageSize})}}),Object(h.jsx)(l.a,{title:"Add Car",visible:ne,onOk:function(){var e={year:_,make:T,model:F,transmission:B,trim:K,style:Q,id:$};console.log(e),Object(m.a)({url:"/car_data_update",method:"post",headers:{"public-request":"true"},params:e}).then((function(e){re(!1),ie((function(e){return!e}))}))},onCancel:function(){re(!1)},children:Object(h.jsxs)(i.a,{labelCol:{span:6},wrapperCol:{span:15},layout:"horizontal",children:[Object(h.jsx)(i.a.Item,{label:"Year",rules:[{required:!0}],children:Object(h.jsx)(u.a,{onChange:function(e){z(e.target.value)},value:_})}),Object(h.jsx)(i.a.Item,{label:"Make",rules:[{required:!0}],children:Object(h.jsx)(u.a,{onChange:function(e){E(e.target.value)},value:T})}),Object(h.jsx)(i.a.Item,{label:"Model",rules:[{required:!0}],children:Object(h.jsx)(u.a,{onChange:function(e){H(e.target.value)},value:F})}),Object(h.jsx)(i.a.Item,{label:"Transmission",rules:[{required:!0}],children:Object(h.jsxs)(o.a,{value:B,onChange:function(e){P(e)},children:[Object(h.jsx)(o.a.Option,{value:"manual",children:"manual"}),Object(h.jsx)(o.a.Option,{value:"automatic",children:"automatic"})]})}),Object(h.jsx)(i.a.Item,{label:"Trim",rules:[{required:!0}],children:Object(h.jsx)(u.a,{onChange:function(e){U(e.target.value)},value:K})}),Object(h.jsx)(i.a.Item,{label:"Style",rules:[{required:!0}],children:Object(h.jsx)(u.a,{onChange:function(e){V(e.target.value)},value:Q})})]})})]})}a(467),t.default=function(){var e=Object(r.useState)(!1),t=Object(n.a)(e,2),a=t[0],j=t[1],d=Object(r.useState)(""),b=Object(n.a)(d,2),O=b[0],g=b[1],v=Object(r.useState)(""),p=Object(n.a)(v,2),x=p[0],y=p[1],S=Object(r.useState)(""),k=Object(n.a)(S,2),C=k[0],I=k[1],q=Object(r.useState)(""),w=Object(n.a)(q,2),_=w[0],z=w[1],M=Object(r.useState)(""),A=Object(n.a)(M,2),T=A[0],E=A[1],R=Object(r.useState)(""),D=Object(n.a)(R,2),F=D[0],H=D[1],L=Object(r.useState)(!0),N=Object(n.a)(L,2),B=N[0],P=N[1];return Object(h.jsxs)(c.a.Fragment,{children:[Object(h.jsxs)("div",{className:"RoleBtn",children:[Object(h.jsx)("h1",{children:"Cars Database"}),Object(h.jsx)(s.a,{type:"primary",onClick:function(){g(""),y(""),I(""),E(""),H(""),j(!0)},children:"ADD CAR"})]}),Object(h.jsx)("div",{children:Object(h.jsx)(f,{reloadState:B})}),Object(h.jsx)(l.a,{title:"Add Car",visible:a,onOk:function(){var e={year:O,make:x,model:C,transmission:_,trim:T,style:F};console.log(e),Object(m.a)({url:"/car_data",method:"post",headers:{"public-request":"true"},params:e}).then((function(e){g(""),y(""),I(""),E(""),H(""),P((function(e){return!e})),z("")}))},onCancel:function(){j(!1)},children:Object(h.jsxs)(i.a,{labelCol:{span:6},wrapperCol:{span:15},layout:"horizontal",children:[Object(h.jsx)(i.a.Item,{label:"Year",rules:[{required:!0}],children:Object(h.jsx)(u.a,{onChange:function(e){g(e.target.value)},value:O})}),Object(h.jsx)(i.a.Item,{label:"Make",rules:[{required:!0}],children:Object(h.jsx)(u.a,{onChange:function(e){y(e.target.value)},value:x})}),Object(h.jsx)(i.a.Item,{label:"Model",rules:[{required:!0}],children:Object(h.jsx)(u.a,{onChange:function(e){I(e.target.value)},value:C})}),Object(h.jsx)(i.a.Item,{label:"Transmission",rules:[{required:!0}],children:Object(h.jsxs)(o.a,{value:_,onChange:function(e){z(e)},children:[Object(h.jsx)(o.a.Option,{value:"manual",children:"manual"}),Object(h.jsx)(o.a.Option,{value:"automatic",children:"automatic"})]})}),Object(h.jsx)(i.a.Item,{label:"Trim",rules:[{required:!0}],children:Object(h.jsx)(u.a,{onChange:function(e){E(e.target.value)},value:T})}),Object(h.jsx)(i.a.Item,{label:"Style",rules:[{required:!0}],children:Object(h.jsx)(u.a,{onChange:function(e){H(e.target.value)},value:F})})]})})]})}}}]);
//# sourceMappingURL=19.b50cb224.chunk.js.map