_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{GznO:function(e,t,a){"use strict";a.d(t,"a",(function(){return N}));var n=a("cpVT"),i=a("q1tI"),r=a.n(i),o=a("R/WZ"),l=a("tRbT"),c=a("Z3vd"),s=a("NKCw"),u=a("owib"),d=a.n(u),m=a("l3FC"),p=a.n(m),g=a("iae6"),b=a("5YBi"),f=a("5AJ6"),h=Object(f.a)(i.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline"),v=r.a.createElement,k=Object(o.a)((function(e){return{}})),y=function(e){var t=e.onEdit,a=e.onCancel,n=e.onDelete,i=e.onSave,o=e.editing,l=e.submitting,s=k();return v(r.a.Fragment,null,l&&v(g.a,{size:30}),!o&&!l&&v("div",{className:s.blockButton},v(c.a,{color:"primary",variant:"outlined",onClick:t},v(d.a,null))),o&&!l&&v(r.a.Fragment,null,a&&v("div",{className:s.blockButton},v(c.a,{variant:"outlined",onClick:function(e){e.preventDefault(),a&&a()}},v(p.a,null))),i&&v("div",{className:s.blockButton},v(c.a,{type:"submit",variant:"outlined",onClick:function(e){e.preventDefault(),i&&i()}},v(b.a,null))),n&&v("div",{className:s.blockButton},v(c.a,{type:"submit",variant:"outlined",onClick:function(e){e.preventDefault(),n&&n()}},v(h,null)))))},x=a("wTA8"),j=a("dbPz"),w=r.a.createElement,O=Object(o.a)((function(e){return{stickyickyicky:Object(n.a)({position:"sticky",top:"75px"},e.breakpoints.up("md"),{top:"75px"}),submitButton:{marginTop:e.spacing(3),marginBottom:e.spacing(3),textTransform:"none",textDecoration:"none",padding:"14px 29px",borderRadius:13,background:"linear-gradient(45deg, #009fe0 5%, #009fe0 90%)"}}}));function N(e){var t=e.sections,a=e.title,n=e.subtitle,o=e.onEdit,u=e.onSubmit,d=e.onCancel,m=e.onDelete,p=e.submitting,g=e.forceEdit,b=e.initializeSave,f=e.hideControls,h=e.submitText,v=O(),k=Object(s.b)(),N=k.handleSubmit,E=k.register,T=k.control,C=k.errors,B=k.unregister,R=k.watch,z=k.setValue,D=Object(i.useState)(!1),_=D[0],H=D[1];g&&!_&&H(!0);var S=N((function(e){console.log(e),u&&u(e)}));return Object(i.useEffect)((function(){b&&N(u)()}),[b]),w("form",null,t&&w(r.a.Fragment,null,a&&w(j.b,{variant:"h1",className:v.sectionHeader},a),n&&w(j.b,{variant:"h6",className:v.headerComment},n),w(l.a,{container:!0,spacing:0},w(l.a,{item:!0,container:!0,xs:12},Object.keys(t).map((function(e){var a=t[e];return w(x.a,{key:e,title:a.name||e,editing:_,errors:C,register:E,unregister:B,watch:R,setValue:z,control:T,fields:a.fields})}))),!f&&w(l.a,{item:!0,xs:1,className:v.stickyickyicky,style:{height:"1em"}},w(y,{onEdit:g?null:function(){o&&o(),H(!0)},onCancel:g?null:function(){d&&d(),H(!1)},onDelete:m,editing:_,submitting:p,onSave:S})),h&&w(c.a,{onClick:S,color:"secondary",variant:"contained",disableElevation:!0,size:"large",className:v.submitButton},h||"Submit"))))}},KesK:function(e,t,a){"use strict";a.r(t);var n=a("xvhg"),i=a("q1tI"),r=a.n(i),o=a("20a2"),l=a("fLll"),c=a("mxRu"),s=a("R/WZ"),u=a("Ji2X"),d=a("tRbT"),m=a("kKAo"),p=a("Z3vd"),g=a("iae6"),b=a("30+C"),f=a("50B7"),h=a("oa/T"),v=a("TFBr"),k=a("dbPz"),y=a("YtEb"),x=a("qyHh"),j=a("tr08"),w=a("lopY");a("GznO"),r.a.createElement,Object(s.a)((function(e){return{cardRoot:{backgroundColor:e.palette.background.paper,paddingLeft:e.spacing(4),paddingRight:e.spacing(0),paddingBottom:e.spacing(3)}}}));var O=a("8mIR"),N=a("NKCw"),E=a("wTA8"),T=r.a.createElement,C=Object(s.a)((function(e){return{loader:{maxHeight:"50vh"},hero:function(t){var a=t.imgUrl,n=t.darkThemeActive,i={backgroundColor:e.palette.background.default};return a&&!n&&(i.background="url("+a+") 50%/cover repeat fixed"),i.padding=e.spacing(4),i},headerPlus:{fontWeight:700,fontSize:"4.125rem",marginBottom:0,marginTop:e.spacing(1),lineHeight:1.05},headerLead:{lineHeight:1.5,color:e.palette.dlg.green},cardRoot:{backgroundColor:e.palette.background.paper,padding:e.spacing(4),borderRadius:9},imageWrapper:{display:"block",width:"100%",paddingTop:75},containerRoot:{minHeight:"70vh"},container:{padding:e.spacing(4)},formHeader:{marginBottom:0,marginTop:40},submitButton:{marginTop:e.spacing(3),marginBottom:e.spacing(3),textTransform:"none",textDecoration:"none",padding:"14px 29px",borderRadius:13,color:e.palette.common.white}}}));t.default=function(){var e=Object(v.a)(!0),t=Object(n.a)(e,4),a=t[0],i=t[1],s=(t[2],t[3],Object(x.c)()),B=Object(n.a)(s,2),R=B[0],z=(B[1],Object(j.a)()),D=Object(w.a)(z.breakpoints.up("md")),_=Object(o.useRouter)().query.projectId,H=C({imgUrl:"/img/Valley-10s-1404px.svg",darkThemeActive:R}),S=Object(O.b)(),I=Object(n.a)(S,10),P=I[0],q=(I[1],I[2]),L=I[3],V=I[4],F=I[5],K=I[6],M=I[7],A=(I[8],I[9]),U=Object(N.b)(),W=U.handleSubmit,J=U.register,Z=U.control,G=U.errors,X=U.unregister,Y=U.watch,Q=U.setValue;return T(r.a.Fragment,null,T(l.a,{title:"Dataset Upload - Green Toolkit 2"}),T(c.a,{hideSidebar:!0,disableHover:!0,title:T(y.a,{projectList:a,projectListInProgress:i,value:a?_:""})},T("section",{className:H.hero},T(u.a,{maxWidth:!1},T(d.a,{container:!0,direction:"row",alignItems:"flex-start",justify:"center",spacing:4},T(d.a,{item:!0,container:!0,direction:"row",alignItems:"flex-start",justify:"flex-start",className:H.header},T(d.a,{item:!0,container:!0,md:5,xs:12},T(d.a,{item:!0,container:!0,xs:12},T(k.b,{variant:"overline",className:H.headerLead},"Better Insights into Building Performance")),T(d.a,{item:!0,container:!0,xs:12},T(k.b,{variant:"h1",className:D?H.headerPlus:H.headerMiddle},"Upload Data")),T(d.a,{item:!0,container:!0,xs:12},T(k.b,{variant:"h4",className:H.subHeader},"Upload a custom data set. For more info on how to generate a compatible dataset click here."))),T(d.a,{item:!0,container:!0,md:1,xs:12}),T(d.a,{item:!0,container:!0,md:6,xs:12},T(m.a,{variant:"outlined",className:H.cardRoot},T(E.a,{editing:!0,register:J,control:Z,errors:G,unregister:X,setValue:Q,watch:Y,fields:{name:{name:"Dataset Name",value:P.projectName,description:"The human readable moniker for this dataset.",editOnly:!0,paragraph:!0,required:!0},descriptionShort:{name:"One Line Description",value:P.projectDescriptionShort,editOnly:!0,required:!1,paragraph:!0},dataset:{name:"Dataset",file:{multiple:!0,userPrompt:"Drag and drop your dataset files here (or click to use the system file browser)."},value:P.files,descrption:"Please select the dataset files (xlsx & images) that will be used with this dataset."}}}),T(d.a,{container:!0,justify:"center",alignItems:"center",direction:"column"},F&&T(d.a,{item:!0},T(k.b,{variant:"overline"},F+"")),T(d.a,{item:!0},T(p.a,{onClick:W(q),color:"secondary",variant:"contained",disableElevation:!0,size:"large",className:H.submitButton},L?T(g.a,null):"Analyze")))))),V&&T(d.a,{item:!0,xs:12,md:10},T(b.a,null,T(f.a,{title:"Field Specification",subheader:"Define how each column in your dataset should be treated."}),T(h.a,null,V.fields&&T(E.a,{editing:!0,register:J,control:Z,errors:G,unregister:X,setValue:Q,watch:Y,fields:V.fields.map((function(e){return{key:O.a+e.name,name:e.name,required:!0,paragraph:!0,value:e.type,select:[{key:"Number",value:"number"},{key:"Text",value:"text"},{key:"File Reference",value:"fileReference"}]}}))}),T(d.a,{container:!0,justify:"center",alignItems:"center",direction:"column"},A&&T(d.a,{item:!0},T(k.b,{variant:"overline"},A+"")),T(d.a,{item:!0},T(p.a,{onClick:W((function(e){return K(e,_)})),color:"primary",variant:"contained",disableElevation:!0,size:"large",className:H.submitButton},M?T(g.a,null):"Upload!")))))),V&&T(d.a,{item:!0,xs:12})))),T("section",null)))}},ctEK:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/datasets/new",function(){return a("KesK")}])},l3FC:function(e,t,a){"use strict";var n=a("TqRt"),i=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a("q1tI")),o=(0,n(a("8/g6")).default)(r.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}),"ClearOutlined");t.default=o},owib:function(e,t,a){"use strict";var n=a("TqRt"),i=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a("q1tI")),o=(0,n(a("8/g6")).default)(r.createElement("path",{d:"M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}),"EditOutlined");t.default=o}},[["ctEK",0,1,6,4,12,3,2,7,5,8,9,10,11,13]]]);