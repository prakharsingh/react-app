(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5519:function(e,t,a){e.exports=a(5691)},5524:function(e,t,a){},5691:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"SUBMIT_FORM",function(){return y}),a.d(n,"SUBMIT_FORM_SUCCESS",function(){return S}),a.d(n,"SUBMIT_FORM_FAIL",function(){return v}),a.d(n,"SHOW_TOAST",function(){return _}),a.d(n,"HIDE_TOAST",function(){return U});var r={};a.r(r),a.d(r,"UPLOAD_FILE",function(){return C}),a.d(r,"UPLOAD_FILE_PROGRESS",function(){return L}),a.d(r,"UPLOAD_FILE_SUCCESS",function(){return w}),a.d(r,"UPLOAD_FILE_FAIL",function(){return I});var l={};a.r(l),a.d(l,"showToast",function(){return V}),a.d(l,"hideToast",function(){return Z}),a.d(l,"submitForm",function(){return q});var o={};a.r(o),a.d(o,"initiateUpload",function(){return ee});var c,i=a(0),u=a.n(i),m=a(17),s=a.n(m),p=(a(5524),a(30)),d=a(58),E=a(5693),b=a(204),g=a(24),O=a(32),f=a(201),h=a(37),y="app/SUBMIT_FORM",S="app/SUBMIT_FORM_SUCCESS",v="app/SUBMIT_FORM_FAIL",_="app/SHOW_TOAST",U="app/HIDE_TOAST",C="storage/UPLOAD_FILE",L="storage/UPLOAD_FILE_PROGRESS",w="storage/UPLOAD_FILE_SUCCESS",I="storage/UPLOAD_FILE_FAIL",T={isLoading:!1,showToast:!1,toastMessage:""},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload,l=void 0===r?null:r;switch(a){case n.SHOW_TOAST:return Object(h.a)({},e,{showToast:!0,toastMessage:l.message||""});case n.HIDE_TOAST:return Object(h.a)({},e,{showToast:!1,toastMessage:""});case n.SUBMIT_FORM:return Object(h.a)({},e,{isLoading:!0});case n.SUBMIT_FORM_SUCCESS:case n.SUBMIT_FORM_FAIL:return Object(h.a)({},e,{isLoading:!1});default:return e}},F={isLoading:!1,progress:0},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload,l=void 0===n?null:n;switch(a){case r.UPLOAD_FILE:return Object(h.a)({},e,{isLoading:!0});case r.UPLOAD_FILE_SUCCESS:return Object(h.a)({},e,{isLoading:!1,progress:0});case r.UPLOAD_FILE_PROGRESS:return Object(h.a)({},e,{progress:l&&l.progress});default:return e}},j=Object(O.a)(),x=[Object(d.routerMiddleware)(j),b.a],M=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||g.d)(g.a.apply(void 0,x)),P=Object(g.e)((c=j,Object(g.c)({router:Object(d.connectRouter)(c),form:f.a,app:A,storage:R})),{},M),D=a(18),N=a(21),B=a(22),k=a(207),H=a(83),W=a.n(H),G=Object({NODE_ENV:"production",PUBLIC_URL:"/react-app"}).API_URL||"",V=function(e){var t=e.message;return function(e){return e({type:n.SHOW_TOAST,payload:{message:t}})}},Z=function(){return function(e){return e({type:n.HIDE_TOAST})}},q=function(e){return function(t){W.a.post("".concat(G,"/api/submit")).send(e).end(function(e){if(t({type:n.SUBMIT_FORM}),e)return t({type:n.SHOW_TOAST,payload:{message:"Error in submitting..."}}),t({type:n.SUBMIT_FORM_FAIL});t({type:n.SHOW_TOAST,payload:{message:"Submitted Successfully"}}),t({type:n.SUBMIT_FORM_SUCCESS})})}},z=a(159),J=a.n(z),K=a(206),X=a(103),$=Object({NODE_ENV:"production",PUBLIC_URL:"/react-app"}).API_URL||"",Q=function(e){return W.a.get("".concat($,"/api/storage/s3/signed-url/public-read")).query(e)},Y=function(e,t,a){return W.a.post(e).field(t).attach("file",a,a.name)},ee=function(e){var t=e.file,a=e.key;return function(){var e=Object(K.a)(J.a.mark(function e(l){var o,c,i,u,m,s;return J.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l({type:r.UPLOAD_FILE}),e.next=4,Q({key:a});case 4:if(o=e.sent,c=o.body,200!==o.statusCode){e.next=20;break}return i={key:c.key,AWSAccessKeyId:c.awsKey,policy:c.policy,signature:c.signature,acl:"public-read","content-type":t.type},e.next=11,Y(c.host,i,t).on("progress",function(e){return l({type:r.UPLOAD_FILE_PROGRESS,payload:{progress:Math.round(e.percent)}})});case 11:if(u=e.sent,m=u.error,s=u.statusCode,!m){e.next=16;break}throw new Error(m);case 16:return s>=200&&s<301&&(l(Object(X.a)("userForm","profilePicUrl","".concat("https://s3.amazonaws.com/assets-prakhar/").concat(decodeURIComponent(a)),"")),l({type:r.UPLOAD_FILE_SUCCESS})),e.abrupt("return",l({type:n.SHOW_TOAST,payload:{message:"Upload Successful"}}));case 20:throw new Error("Upload Failed");case 21:e.next=27;break;case 23:e.prev=23,e.t0=e.catch(0),l({type:r.UPLOAD_FILE_FAIL}),l({type:n.SHOW_TOAST,payload:{message:"Upload failed"}});case 27:case"end":return e.stop()}},e,this,[[0,23]])}));return function(t){return e.apply(this,arguments)}}()},te=Object(p.connect)(function(e){return{app:e.app}},function(e){return Object(g.b)({hideToast:l.hideToast},e)})(Object(D.withStyles)(function(e){return{close:{padding:e.spacing.unit/2}}})(function(e){var t=e.app,a=t.showToast,n=t.toastMessage,r=e.hideToast,l=e.classes,o=function(e,t){"clickaway"!==t&&r()};return u.a.createElement(B.l,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:a,onClose:o,message:u.a.createElement("span",null,n),action:[u.a.createElement(B.f,{key:"close","aria-label":"Close",color:"inherit",className:l.close,onClick:o},u.a.createElement(k.a,null))]})})),ae=Object(D.createMuiTheme)({typography:{useNextVariants:!0}}),ne=function(e){var t=e.component;return u.a.createElement(D.MuiThemeProvider,{theme:ae},u.a.createElement(N.Grid,{fluid:!0},u.a.createElement(t,null),u.a.createElement(te,null)))},re=a(112),le=a(113),oe=a(116),ce=a(114),ie=a(118),ue=a(199),me=a(198),se=a(122),pe=function(e){var t=e.input,a=e.meta,n=a.touched,r=a.error,l=Object(se.a)(e,["input","meta"]);return u.a.createElement(B.c,{error:n&&!!r,fullWidth:!0},u.a.createElement(B.m,Object.assign({},t,l,{error:n&&!!r})),n&&r&&u.a.createElement(B.e,null,r))},de=function(e){var t=e.input,a=e.children,n=Object(se.a)(e,["input","children"]);return u.a.createElement(B.c,null,u.a.createElement(B.j,Object.assign({},t,n,{value:t.value,onChange:function(e,a){return t.onChange(a)}}),a))},Ee=function(e){var t=e.input,a=e.label,n=e.meta,r=n.touched,l=n.error,o=e.children,c=Object(se.a)(e,["input","label","meta","children"]);return u.a.createElement(B.c,{error:r&&!!l,fullWidth:!0},u.a.createElement(B.g,null,a),u.a.createElement(B.k,Object.assign({},t,{onChange:function(e){return t.onChange(e.target.value)}},c),o))},be=a(104),ge=a.n(be),Oe=function(e){function t(){return Object(re.a)(this,t),Object(oe.a)(this,Object(ce.a)(t).apply(this,arguments))}return Object(ie.a)(t,e),Object(le.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.storage,r=n.isLoading,l=n.progress;return u.a.createElement(u.a.Fragment,null,u.a.createElement("input",{type:"file",accept:"image/*",ref:function(t){return e.input=t},onChange:this.props.handleFile,hidden:!0}),u.a.createElement("div",{className:a.container},u.a.createElement(B.a,{color:"primary",variant:"contained",className:a.button,onClick:function(){return e.input.click()},disabled:r},u.a.createElement(ge.a,{className:a.leftIcon}),"Upload"),r&&u.a.createElement(B.b,{className:a.progress,variant:"indeterminate"},l),u.a.createElement("span",null,this.input&&this.input.value)))}}]),t}(u.a.Component),fe=Object(p.connect)(function(e){return{storage:e.storage}},null)(Object(D.withStyles)(function(e){return{button:{margin:e.spacing.unit},leftIcon:{marginRight:e.spacing.unit},progress:{margin:e.spacing.unit},container:{display:"flex",alignItems:"center"}}})(Oe)),he=["location","city","country","membership"],ye=Object(me.a)({form:"userForm",validate:function(e){var t={};return he.forEach(function(a){e[a]||(t[a]="Required")}),e.email&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)&&(t.email="Email not valid"),t}})(function(e){var t=e.isSubmitDisabled,a=e.submitting,n=e.handleSubmit,r=e.onFileUpload;return u.a.createElement("form",{onSubmit:n},u.a.createElement(N.Row,null,u.a.createElement(N.Col,{md:6},u.a.createElement(N.Row,null,u.a.createElement(N.Col,{md:12},u.a.createElement(ue.a,{name:"category",label:"Category",component:Ee},u.a.createElement(B.h,{value:"1"},"Category 1"),u.a.createElement(B.h,{value:"2"},"Category 2"),u.a.createElement(B.h,{value:"3"},"Category 3")))),u.a.createElement("br",null),u.a.createElement(N.Row,null,u.a.createElement(N.Col,{md:12},u.a.createElement(B.n,{variant:"body1",gutterBottom:!0},"Do you want to create a branch in existing or new category?"))),u.a.createElement("br",null),u.a.createElement(N.Row,null,u.a.createElement(N.Col,{md:12},u.a.createElement(ue.a,{name:"categoryType",component:de},u.a.createElement(B.d,{value:"new",control:u.a.createElement(B.i,null),label:"New"}),u.a.createElement(B.d,{value:"existing",control:u.a.createElement(B.i,null),label:"Existing"})))),u.a.createElement(N.Row,null,u.a.createElement(N.Col,{md:6},u.a.createElement(ue.a,{name:"busNameEng",label:"Business Name(English)",variant:"outlined",component:pe})),u.a.createElement(N.Col,{md:6},u.a.createElement(ue.a,{name:"busNameArab",label:"Business Name(Arabic)",variant:"outlined",component:pe}))),u.a.createElement("br",null),u.a.createElement(N.Row,null,u.a.createElement(N.Col,{md:6},u.a.createElement(ue.a,{name:"branchNameEng",label:"Branch Name(English)",variant:"outlined",component:pe})),u.a.createElement(N.Col,{md:6},u.a.createElement(ue.a,{name:"branchNameArab",label:"Branch Name(Arabic)",variant:"outlined",component:pe}))),u.a.createElement("br",null),u.a.createElement(N.Row,null,u.a.createElement(N.Col,{md:12},u.a.createElement(ue.a,{name:"location",label:"Location*",variant:"outlined",component:pe}))),u.a.createElement("br",null),u.a.createElement(N.Row,null,u.a.createElement(N.Col,{md:12},u.a.createElement(ue.a,{name:"city",label:"City*",variant:"outlined",component:pe})))),u.a.createElement(N.Col,{md:6},u.a.createElement(N.Row,null,u.a.createElement(N.Col,{md:12},u.a.createElement(ue.a,{name:"country",label:"Country*",variant:"outlined",component:pe}))),u.a.createElement("br",null),u.a.createElement(N.Row,null,u.a.createElement(N.Col,{md:6},u.a.createElement(ue.a,{name:"instaUrl",label:"Instagram Url (optional)",variant:"outlined",component:pe})),u.a.createElement(N.Col,{md:6},u.a.createElement(ue.a,{name:"fbUrl",label:"Facebook Url (optional)",variant:"outlined",component:pe}))),u.a.createElement("br",null),u.a.createElement(N.Row,null,u.a.createElement(N.Col,{md:12},u.a.createElement(ue.a,{name:"about",label:"About",variant:"outlined",multiline:!0,rows:2,component:pe}))),u.a.createElement("br",null),u.a.createElement(N.Row,null,u.a.createElement(N.Col,{md:6},u.a.createElement(ue.a,{name:"email",label:"Email (optional)",variant:"outlined",component:pe})),u.a.createElement(N.Col,{md:6},u.a.createElement(ue.a,{name:"phone",label:"Phone Number (optional)",variant:"outlined",component:pe}))),u.a.createElement("br",null),u.a.createElement(N.Row,null,u.a.createElement(N.Col,{md:12},u.a.createElement(ue.a,{name:"membership",label:"Membership Type*",component:Ee},u.a.createElement(B.h,{value:"1"},"Monthly"),u.a.createElement(B.h,{value:"2"},"Annual")))),u.a.createElement("br",null),u.a.createElement(N.Row,null,u.a.createElement(N.Col,{md:12},u.a.createElement(B.n,{variant:"body1",gutterBottom:!0},"Profile Pic (optional)",u.a.createElement(B.n,{variant:"caption",gutterBottom:!0},"Appropriate image ratio should be 16:9")),u.a.createElement(ue.a,{name:"profilePicUrl",type:"text",component:"input",hidden:!0}),u.a.createElement(fe,{handleFile:r}))))),u.a.createElement("br",null),u.a.createElement(N.Row,null,u.a.createElement(B.a,{type:"submit",color:"secondary",variant:"contained",disabled:a||t},"Submit")))}),Se=function(){return"xxxyxxxxxxyxxxxxxxxxyyyyxxxxxyyyyyxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})},ve=function(e){function t(){var e,a;Object(re.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(oe.a)(this,(e=Object(ce.a)(t)).call.apply(e,[this].concat(r)))).getNewFileName=function(e){var t=e.split("."),a=t.length-1;return Se()+"-"+Date.now()+"."+t[a]},a.handleUpload=function(e){var t=e.target.files[0],n=encodeURIComponent("public-read/"+a.getNewFileName(t.name));a.props.initiateUpload({file:t,key:n})},a}return Object(ie.a)(t,e),Object(le.a)(t,[{key:"render",value:function(){var e=this.props,t=e.submit,a=e.storage.isLoading;return u.a.createElement(u.a.Fragment,null,u.a.createElement(N.Row,{center:"md"},u.a.createElement(B.n,{variant:"h5",gutterBottom:!0},"Business Details")),u.a.createElement("hr",null),u.a.createElement(ye,{onSubmit:function(e){return t(e)},onFileUpload:this.handleUpload,isSubmitDisabled:a}))}}]),t}(u.a.Component);ve.defaultProps={};var _e=Object(p.connect)(function(e){return{storage:e.storage}},function(e){return Object(g.b)({submit:l.submitForm,initiateUpload:o.initiateUpload},e)})(ve);s.a.render(u.a.createElement(function(){return u.a.createElement(p.Provider,{store:P},u.a.createElement(d.ConnectedRouter,{history:j},u.a.createElement(E.a,null,u.a.createElement(ne,{exact:!0,path:"/",component:_e}))))},null),document.getElementById("root"))}},[[5519,2,1]]]);
//# sourceMappingURL=main.1919f1a0.chunk.js.map