_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{GznO:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var r=n("cpVT"),a=n("q1tI"),o=n.n(a),i=n("R/WZ"),c=n("tRbT"),u=n("Z3vd"),l=n("NKCw"),s=n("owib"),d=n.n(s),p=n("l3FC"),m=n.n(p),b=n("iae6"),f=n("5YBi"),g=n("5AJ6"),v=Object(g.a)(a.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline"),h=o.a.createElement,j=Object(i.a)((function(e){return{}})),y=function(e){var t=e.onEdit,n=e.onCancel,r=e.onDelete,a=e.onSave,i=e.editing,c=e.submitting,l=j();return h(o.a.Fragment,null,c&&h(b.a,{size:30}),!i&&!c&&h("div",{className:l.blockButton},h(u.a,{color:"primary",variant:"outlined",onClick:t},h(d.a,null))),i&&!c&&h(o.a.Fragment,null,n&&h("div",{className:l.blockButton},h(u.a,{variant:"outlined",onClick:function(e){e.preventDefault(),n&&n()}},h(m.a,null))),a&&h("div",{className:l.blockButton},h(u.a,{type:"submit",variant:"outlined",onClick:function(e){e.preventDefault(),a&&a()}},h(f.a,null))),r&&h("div",{className:l.blockButton},h(u.a,{type:"submit",variant:"outlined",onClick:function(e){e.preventDefault(),r&&r()}},h(v,null)))))},O=n("wTA8"),k=n("dbPz"),w=o.a.createElement,P=Object(i.a)((function(e){return{stickyickyicky:Object(r.a)({position:"sticky",top:"75px"},e.breakpoints.up("md"),{top:"75px"}),submitButton:{marginTop:e.spacing(3),marginBottom:e.spacing(3),textTransform:"none",textDecoration:"none",padding:"14px 29px",borderRadius:13,background:"linear-gradient(45deg, #009fe0 5%, #009fe0 90%)"}}}));function x(e){var t=e.sections,n=e.title,r=e.subtitle,i=e.onEdit,s=e.onSubmit,d=e.onCancel,p=e.onDelete,m=e.submitting,b=e.forceEdit,f=e.initializeSave,g=e.hideControls,v=e.submitText,h=P(),j=Object(l.b)(),x=j.handleSubmit,N=j.register,S=j.control,E=j.errors,T=j.unregister,C=j.watch,_=j.setValue,z=Object(a.useState)(!1),D=z[0],B=z[1];b&&!D&&B(!0);var H=x((function(e){console.log(e),s&&s(e)}));return Object(a.useEffect)((function(){f&&x(s)()}),[f]),w("form",null,t&&w(o.a.Fragment,null,n&&w(k.b,{variant:"h1",className:h.sectionHeader},n),r&&w(k.b,{variant:"h6",className:h.headerComment},r),w(c.a,{container:!0,spacing:0},w(c.a,{item:!0,container:!0,xs:12},Object.keys(t).map((function(e){var n=t[e];return w(O.a,{key:e,title:n.name||e,editing:D,errors:E,register:N,unregister:T,watch:C,setValue:_,control:S,fields:n.fields})}))),!g&&w(c.a,{item:!0,xs:1,className:h.stickyickyicky,style:{height:"1em"}},w(y,{onEdit:b?null:function(){i&&i(),B(!0)},onCancel:b?null:function(){d&&d(),B(!1)},onDelete:p,editing:D,submitting:m,onSave:H})),v&&w(u.a,{onClick:H,color:"secondary",variant:"contained",disableElevation:!0,size:"large",className:h.submitButton},v||"Submit"))))}},KzJc:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n("HALo"),a=n("dhJC"),o=n("q1tI"),i=n.n(o),c=n("R/WZ"),u=n("iae6"),l=n("iuhU"),s=n("dbPz"),d=i.a.createElement,p=Object(c.a)((function(e){return{main:{padding:"5rem 0",flex:1,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",background:e.palette.background.paper,height:"100vh"}}}));function m(e){var t=e.className,n=e.message,o=Object(a.a)(e,["className","message"]),c=p();return d(i.a.Fragment,null,d("div",Object(r.a)({className:Object(l.a)(c.main,t)},o),d(s.b,{variant:"h3"},n),d(u.a,null)))}},l3FC:function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}),"ClearOutlined");t.default=i},owib:function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}),"EditOutlined");t.default=i},wojJ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/new",function(){return n("yixt")}])},yixt:function(e,t,n){"use strict";n.r(t);var r=n("xvhg"),a=n("q1tI"),o=n.n(a),i=n("20a2"),c=n("fLll"),u=n("mxRu"),l=n("R/WZ"),s=n("Ji2X"),d=n("tRbT"),p=n("kKAo"),m=n("TFBr"),b=n("dbPz"),f=n("vJKn"),g=n.n(f),v=n("cpVT"),h=n("rg98"),j=n("gYMh"),y=n("Z3vd"),O=(n("T1Xd"),n("6WZQ")),k=n("+ZAq"),w=n("cVG5");function P(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){Object(v.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E={response:!1,inProgress:!1,error:!1,currentProject:{},ready:!1};var T=n("GznO"),C=(n("KzJc"),n("7kcO"),o.a.createElement),_=Object(l.a)((function(e){return{submitButton:{marginTop:e.spacing(3),marginBottom:e.spacing(3),width:"100%",textTransform:"none",textDecoration:"none",padding:"14px 29px",borderRadius:13,background:"linear-gradient(45deg, #009fe0 5%, #009fe0 90%)"}}}));function z(e){var t;Object(j.a)(e);var n=function(){var e=Object(a.useState)(E),t=e[0],n=e[1],o=Object(O.e)(),i=Object(r.a)(o,3),c=i[0];return i[1],i[2],Object(a.useEffect)((function(){!c||!t.ready||t.response&&t.response._id===projectId||t.error||t.inProgress||function(){var e=Object(h.a)(g.a.mark((function e(){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(S(S({},t),{},{inProgress:!0})),e.next=4,Object(k.d)(c,t.currentProject);case 4:if((r=e.sent)._id){e.next=7;break}throw Error("response didn't contain identifier");case 7:n({currentProject:t.currentProject,response:r,inProgress:!1,ready:!1}),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("useProject error"),console.error(e.t0),n({currentProject:t.currentProject,error:e.t0,inProgress:!1,ready:!1});case 15:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()()}),[c,t]),[t.currentProject,function(e){console.info("submitting new proj"),console.log(e);var r=Object(w.a)(e,{image:!0});console.log(r);var a,o=P(r.entries());try{for(o.s();!(a=o.n()).done;){var i=a.value;console.log(i[0]+", "+i[1])}}catch(c){o.e(c)}finally{o.f()}n(S(S({},t),{},{currentProject:r,ready:!0}))},t.response,t.inProgress,t.error,function(){n(E)}]}(),c=Object(r.a)(n,5),u=c[0],l=c[1],s=c[2],d=c[3],p=c[4],m=o.a.useState(!1),b=Object(r.a)(m,2),f=b[0],x=b[1],N=Object(i.useRouter)();if(s){var z="/projects/"+s._id;console.log("routing to: "+z),N.push(z)}var D=_();function B(){return(B=Object(h.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{console.log(t),l(t),s&&(n="/projects/"+s._id,console.log("routing to: "+n),N.push(n))}catch(r){console.error(r)}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return C(o.a.Fragment,null,p&&""+p,C(T.a,(t={forceEdit:!0,onSubmit:l,submitting:d,hideControls:!0},Object(v.a)(t,"onSubmit",(function(e){return B.apply(this,arguments)})),Object(v.a)(t,"initializeSave",f),Object(v.a)(t,"sections",{"":{fields:{projectNumber:{name:"Project Number",value:u.projectNumber,description:"Unique alphanumeric project number",required:!0,paragraph:!0},projectName:{name:"Project Name",value:u.projectName,description:"The human readable moniker for this project.",editOnly:!0,required:!0,paragraph:!0},projectDescriptionShort:{name:"One Line Description",value:u.projectDescriptionShort,editOnly:!0,required:!1,description:"Tell us a little bit about this project.",paragraph:!0},studioLocation:{name:"Studio Location",value:u.studioLocation,description:"The DIALOG studio that this project is based out of (can be found in BST).",required:!0,paragraph:!0,select:[{value:"",key:"Select Studio"},{value:"Vancouver",key:"Vancouver"},{value:"Calgary",key:"Calgary"},{value:"Edmonton",key:"Edmonton"},{value:"Toronto",key:"Toronto"},{value:"San Francisco",key:"San Francisco"}]},image:{name:"Hero Image",image:!0,value:u.image,descrption:"The Hero Image for your project that will be displayed in the background."}}}}),t)),C(y.a,{onClick:function(){x(!0)},color:"secondary",variant:"contained",disableElevation:!0,size:"large",className:D.submitButton},"Submit"))}var D=n("YtEb"),B=n("qyHh"),H=n("tr08"),I=n("lopY"),L=o.a.createElement,R=Object(l.a)((function(e){return{loader:{maxHeight:"50vh"},hero:function(t){var n=t.imgUrl,r=t.darkThemeActive,a={backgroundColor:e.palette.background.default};return n&&!r&&(a.background="url("+n+") 50%/cover repeat fixed"),a.padding=e.spacing(4),a},headerPlus:{fontWeight:700,fontSize:"4.125rem",marginBottom:0,marginTop:e.spacing(1),lineHeight:1.05},headerLead:{lineHeight:1.5,color:e.palette.dlg.green},cardRoot:{backgroundColor:e.palette.background.paper,padding:e.spacing(4),borderRadius:9},imageWrapper:{display:"block",width:"100%",paddingTop:75},containerRoot:{minHeight:"70vh"},container:{padding:e.spacing(4)},formHeader:{marginBottom:0,marginTop:40}}}));t.default=function(){var e=Object(m.a)(!0),t=Object(r.a)(e,4),n=t[0],a=t[1],i=(t[2],t[3],Object(B.c)()),l=Object(r.a)(i,2),f=l[0],g=(l[1],Object(H.a)()),v=Object(I.a)(g.breakpoints.up("md")),h=R({darkThemeActive:f});return L(o.a.Fragment,null,L(c.a,{title:"New Project - Green Toolkit 2"}),L(u.a,{hideSidebar:!0,disableHover:!0,title:L(D.a,{projectList:n,projectListInProgress:a,value:"new"})},L("section",{className:h.hero},L(s.a,{maxWidth:!1},L(d.a,{container:!0,direction:"row",alignItems:"flex-start",justify:"flex-start",className:h.header},L(d.a,{item:!0,container:!0,md:5,xs:12},L(d.a,{item:!0,container:!0,xs:12},L(b.b,{variant:"overline",className:h.headerLead},"Better Insights into Building Performance")),L(d.a,{item:!0,container:!0,xs:12},L(b.b,{variant:"h1",className:v?h.headerPlus:h.headerMiddle},"Start a New Project")),L(d.a,{item:!0,container:!0,xs:12},L(b.b,{variant:"h4",className:h.subHeader},"Let's start by telling us a little bit about this project."))),L(d.a,{item:!0,container:!0,md:1,xs:12}),L(d.a,{item:!0,container:!0,md:4,xs:12},L(p.a,{variant:"outlined",className:h.cardRoot},L(z,null))))))))}}},[["wojJ",0,1,6,4,12,3,2,7,5,8,9,10]]]);