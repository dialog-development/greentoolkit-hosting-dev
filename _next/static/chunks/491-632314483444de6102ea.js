(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[491],{7229:function(e,n,t){"use strict";t.d(n,{Z:function(){return w}});var a=t(1229),r=t(7294),i=t(1120),o=t(2318),s=t(770),c=t(2236),l=t(8121),u=t(6445),m=t(6209),p=t(5639),d=t(3901),g=t(5517),f=t(5477),h=r.createElement,Z=(0,i.Z)((function(e){return{link:{display:"flex"},icon:{width:20,height:20,marginRight:e.spacing(1)},separator:{marginRight:e.spacing(0),marginLeft:e.spacing(0)},small:{width:e.spacing(3),height:e.spacing(3),fontSize:12},smallImageText:{marginBottom:e.spacing(2)},listItemIcon:{minWidth:35,alignSelf:"center"},item:{paddingTop:e.spacing(1),paddingBottom:e.spacing(1)},createItem:{marginTop:e.spacing(1)},divider:{marginTop:e.spacing(.5),marginBottom:e.spacing(.5)},flexContainer:{display:"flex"}}}));function v(e){var n=e.options,t=e.value,i=e.onValueChange,s=e.valueField,l=e.textField,v=e.imgField,w=e.getHref,b=e.loading,k=Z(),y=(0,r.useState)(!1),x=(y[0],y[1]);return h(u.Z,{className:k.formControl},b&&h(f.Z,{size:"1rem"}),!b&&h(m.Z,{value:t,disableUnderline:!0,onOpen:function(){return x(!0)},onClose:function(){return x(!1)},onChange:function(e){i&&i(e.target.value)}},function(e,n,t,r,i,s,l){for(var u=[],m=function(l){var m=e[l];Object.keys(m).forEach((function(e,f){var Z=m[e],v=t?Z[t]:Z.text,w=v&&v.length>35?v.substring(0,32)+"...":v,b=r?function(e,n){for(var t=n.split(".");t.length&&(e=e[t.shift()]););return e}(Z,r):Z.img,k=Z.href?Z.href:i?i(Z):"",y=k?{component:c.Z,href:k,underline:"none",color:"inherit"}:{};Z.showDivider&&u.push(h(g.Z,{key:"groupDivider"+l,className:s.divider})),u.push(h(p.Z,(0,a.Z)({value:n?Z[n]:e,key:e,className:s.item},y),h("div",{className:s.flexContainer},!b&&r&&h("div",{className:s.listItemIcon},h(d.Z,{alt:v,variant:"rounded",className:s.small},Z.avatarText||"P")),b&&h("div",{className:s.listItemIcon},h(d.Z,{alt:v,variant:"rounded",src:b,className:s.small})),h(o.Z,{variant:"inherit",noWrap:!0,className:s.listItemIcon},w))))}))},f=0;f<e.length;f++)m(f);return u}(n,s,l,v,w,k)))}function w(e){var n=Z(),t=e.levels;return h(s.Z,{separator:h(l.Z,{fontSize:"small",className:n.separator}),"aria-label":"breadcrumb"},t&&Object.keys(t).map((function(e){var n=t[e];return h(v,(0,a.Z)({key:e},n))})))}},4321:function(e,n,t){"use strict";t.d(n,{Z:function(){return q}});var a=t(4121),r=t(6265),i=t(7294),o=t(5258),s=t(2112),c=t(1543),l=t(7812),u=t(8884),m=t(8358),p=t(1120),d=t(8920),g=t(1749),f=t(9681),h=t(2236),Z=t(4179),v=t(1665),w=t(868),b=t(664),k=i.createElement,y=(0,p.Z)((function(e){return{logo:{height:"1.5em",marginLeft:0},footer:{borderTop:e.palette.divider,background:e.palette.background.paper,margin:"0px"},footerRow:{width:"100%",paddingTop:"0px",paddingBottom:"0px",marginTop:"0px",marginBottom:"0px"},link:{display:"flex",alignItems:"center",textDecoration:"none",color:e.palette.text.primary},twitter:{color:"#00aced"},instagram:{color:"#8a3ab9"},youtube:{color:"#ff0000"},powered:{fontWeight:300}}})),x=function(e){var n=y(e),t=(0,f.v$)(),r=(0,a.Z)(t,1)[0],o=((0,d.Z)(),e.desktopOpen);return k(g.Z,{item:!0,container:!0,component:"footer",className:n.footer,xs:12,spacing:4,alignItems:"flex-end",justifyContent:"space-around"},k(g.Z,{item:!0,xs:12},!o&&k(w.ZP,{title:"DIALOG - Powered by DevHub",placement:"right",arrow:!0},k(v.Z,null)),o&&k(i.Fragment,null,k(h.Z,{href:"https://dialogdesign.ca/",className:n.link},k(b.Z,{src:r?"/img/dialog-logo-white.webp":"/img/dialog-logo-black.webp",alt:"DIALOG Logo",className:n.logo})),k(Z.Z,{variant:"overline",className:n.powered},"Powered by DevHub"))))},N=t(7668),C=t(1810),B=t(3437),I=t(3457),P=i.createElement,T=(0,p.Z)((function(e){return{logo:{height:"1.5em",marginLeft:"0.5rem"},footer:{borderTop:e.palette.divider,background:e.palette.background.paper,minHeight:"150px",margin:"0px"},footerRow:{width:"100%",paddingTop:"0px",paddingBottom:"0px",marginTop:"0px",marginBottom:"0px"},link:{display:"flex",alignItems:"center",textDecoration:"none",color:e.palette.text.primary},twitter:{color:"#00aced"},instagram:{color:"#8a3ab9"},youtube:{color:"#ff0000"}}}));var S=function(e){var n=T(e),t=(0,f.v$)(),r=(0,a.Z)(t,1)[0],i=(0,d.Z)(),o=(0,I.Z)(i.breakpoints.up("md"));return P(g.Z,{item:!0,container:!0,component:"footer",className:n.footer,xs:12,spacing:2,alignItems:"center",justify:"space-around"},P(g.Z,{item:!0,container:!0,md:2,sm:11,spacing:3,justify:o?"flex-start":"center",alignItems:"center",className:n.footerRow},P(g.Z,{item:!0},P(h.Z,{href:"https://dialogdesign.ca/",className:n.link},P(b.Z,{src:r?"/img/dialog-logo-white.webp":"/img/dialog-logo-black.webp",alt:"DIALOG Logo",className:n.logo})))),P(g.Z,{item:!0,container:!0,md:8,sm:11,spacing:3,justify:"center",alignItems:"center",className:n.footerRow},P(g.Z,{item:!0},P(Z.Z,{variant:"overline"},"Powered by DevHub"))),P(g.Z,{item:!0,container:!0,md:2,sm:11,spacing:3,justify:"center",alignItems:"center",className:n.footerRow},P(g.Z,{item:!0},P(h.Z,{href:"https://twitter.com/DIALOG",className:n.twitter},P(N.Z,null))),P(g.Z,{item:!0},P(h.Z,{href:"https://www.instagram.com/dialogdesign/",className:n.instagram},P(C.Z,null))),P(g.Z,{item:!0},P(h.Z,{href:"https://www.youtube.com/channel/UC_b6LCJrMsZnAdDCsn9jtwg",className:n.youtube},P(B.Z,null)))))},E=t(7655),L=t(5639),O=t(5517),R=t(282),A=t(2067),D=t(8364),j=t(2696),F=i.createElement,z=(0,p.Z)((function(e){return{root:{color:e.palette.action.active},name:{paddingBottom:e.spacing(0)},role:{paddingTop:e.spacing(0)}}}));function M(e){var n=e.loginButtonVariant,t=z(),r=(0,i.useState)(null),o=r[0],s=r[1],c=Boolean(o),u=function(){s(null)},m=(0,j.q)(),p=(0,a.Z)(m,3),d=p[0],g=p[1],f=(p[2],(0,D.f0)()),v=(0,D.aU)();return F("div",{className:t.root},d&&!g&&F(i.Fragment,null,F(l.Z,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},color:"inherit"},F(A.Z,null)),F(E.Z,{id:"menu-appbar",anchorEl:o,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:c,onClose:u},F(L.Z,{component:"div",dense:!0,disabled:!0,className:t.name},F(Z.Z,{variant:"subtitle2"},d.name)),F(L.Z,{component:"div",dense:!0,disabled:!0,className:t.role},F(Z.Z,{variant:"caption"},d.role)),F(O.Z,null),F(L.Z,{component:h.Z,href:"/account",color:"textPrimary"}," My Account"),F(L.Z,{onClick:function(){v&&(u(),v())}},"Logout"))),g&&F(Z.Z,{variant:n},"..."),!d&&!g&&F(R.Z,{onClick:function(){f&&f()}},F(Z.Z,{variant:n},"Login")))}var H=t(9570),G=t(2087),U=i.createElement;var V=function(e){return U(G.Z,e,U("path",{d:"m 14.617809,12.819792 c 0,0 -0.470785,1.231766 -0.725609,2.594086 2.796316,-1.051877 5.595425,-3.428374 6.424826,-3.977351 -0.537575,0.58947 -2.211036,2.647145 -5.33013,4.976867 0.181053,-0.01025 0.364434,-0.02699 0.548745,-0.05376 7.406189,-0.262736 8.219532,-7.3733771 8.219532,-7.3733771 -5.349445,-1.0023077 -7.544889,0.6199557 -9.137364,3.8335351 z"}),U("path",{d:"m 4.7415703,9.6078438 c 1.0556002,1.7220992 3.0336869,5.7364512 7.2318847,7.5730472 0.184079,-1.334395 0.06679,-2.563833 0.06679,-2.563833 C 11.252733,4.2546756 1.1214386,3.3936259 1.1214386,3.3936259 -1.131253,11.403714 2.8314366,16.437828 9.0714859,18.592314 c 0,0 0.6862797,0.180355 1.6769521,0.242956 C 6.4725125,15.210018 4.9826642,10.922923 4.7415703,9.6078438 Z"}))},_=t(6010),W=t(9237),K=i.createElement,X=240,$=(0,p.Z)((function(e){return{root:{display:"flex",backgroundColor:e.palette.background.default},drawer:{},drawerPermanent:(0,r.Z)({},e.breakpoints.up("md"),{width:X,flexShrink:0,whiteSpace:"nowrap"}),appBar:{backgroundColor:e.palette.background.paper,zIndex:e.zIndex.drawer+1},rootToolbar:{paddingLeft:e.spacing(2)},appBarPermanent:(0,r.Z)({},e.breakpoints.up("md"),{marginLeft:e.spacing(1),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})}),appBarBelow:(0,r.Z)({},e.breakpoints.up("md"),{width:"calc(100% - ".concat(e.spacing(7),"px)")}),appBarShift:(0,r.Z)({},e.breakpoints.up("md"),{marginLeft:X,width:"calc(100% - ".concat(X,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})}),menuButton:{marginRight:e.spacing(2)},menuButtonPermanent:(0,r.Z)({},e.breakpoints.up("md"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:X},drawerOpen:(0,r.Z)({},e.breakpoints.up("md"),{width:X,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})}),drawerClose:(0,r.Z)({},e.breakpoints.up("md"),{transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)}),content:{minHeight:"100vh"},mainContent:{minHeight:"100vh"},pinButton:{marginLeft:e.spacing(2)},icon:{width:20,height:20,marginRight:e.spacing(1)},drawerToggle:{marginRight:e.spacing(2)},sideBarDrawerToggle:{marginRight:"3.5px",marginTop:"3.5px",marginBottom:"3.5px",alignSelf:"center"},drawerToggleParent:{alignSelf:"flex-end"},homeLink:{marginRight:e.spacing(2)}}}));var q=function(e){var n,t,p,Z,v=e.window,w=e.disableHover,b=e.renderMenuItems,k=e.breadcrumbs,y=(e.title,e.children),N=e.forceTemporary,C=e.hideSidebar,B=e.appBarOnTop,P=$(),T=(0,d.Z)(),E=(0,f.v$)(),L=(0,a.Z)(E,2),R=L[0],A=L[1],D=(0,i.useState)(!1),j=D[0],F=D[1],z=function(){var e=(0,W.ZP)("desktopOpen",!0),n=(0,a.Z)(e,2);return[n[0],n[1]]}(),G=(0,a.Z)(z,2),U=G[0],X=G[1],q=(0,i.useState)(!1),J=q[0],Q=q[1],Y=(0,i.useState)(!1),ee=Y[0],ne=Y[1],te=N||C,ae=function(){F(!j)},re=function(e){X(!U)},ie=b,oe=(0,I.Z)(T.breakpoints.up("md"))&&!te,se=oe&&(U||J),ce=K(g.Z,{container:!0,item:!0,className:P.content,justifyContent:"space-between"},K(g.Z,{item:!0,container:!0,component:"main",direction:"column"},K(g.Z,{container:!0,className:P.toolbar,direction:"column",justifyContent:"center"},oe&&K(g.Z,{item:!0,className:P.pinButton},K(h.Z,{color:"inherit",href:"/",className:P.link,underline:"none"},K(V,{className:P.icon,color:"primary"})))),ie&&K(i.Fragment,null,B&&oe&&K(i.Fragment,null,K(O.Z,null),K("div",{className:P.drawerToggleParent},K(l.Z,{"aria-label":"Active",onClick:re,size:"medium",className:P.sideBarDrawerToggle},K(u.Z,null)))),K(ie,{menuItemProps:{desktopClosed:oe&&!U,hovering:J}}))),K(g.Z,{container:!0,justifyContent:"center",direction:"column",style:{flex:1}},K(x,{desktopOpen:U}))),le=function(){return K(s.ZP,{container:me,variant:"temporary",anchor:"rtl"===T.direction?"right":"left",open:j,onClose:ae,classes:{paper:P.drawerPaper},ModalProps:{keepMounted:!0}},ce)},ue=function(){return K(g.Z,{item:!0},K(l.Z,{color:"default","aria-label":"open drawer",edge:"start",onClick:ae,className:(0,_.Z)(P.menuButton,(0,r.Z)({},P.menuButtonPermanent,!te))},K(u.Z,null)))},me=void 0!==v?function(){return v().document.body}:void 0;return K("div",{className:P.root},K(o.Z,{position:"fixed",className:(0,_.Z)(P.appBar,(n={},(0,r.Z)(n,P.appBarBelow,se&&!B),(0,r.Z)(n,P.appBarPermanent,!te),(0,r.Z)(n,P.appBarShift,se&&!B),n)),color:"transparent",elevation:0},K(m.Z,{className:(0,_.Z)((0,r.Z)({},P.rootToolbar,!C))},K(g.Z,{container:!0,justifyContent:"space-between",alignItems:"center"},K(g.Z,{xs:7,item:!0,container:!0,alignItems:"center"},te&&!C&&K(ue,null),!te&&!C&&K(c.Z,{mdUp:!0},K(ue,null)),K(g.Z,{item:!0},oe&&!B&&K(l.Z,{"aria-label":"Active",onClick:re,className:P.drawerToggle},K(u.Z,{fontSize:"small"}))),B&&K(g.Z,{item:!0},K(h.Z,{color:"inherit",href:"/",className:P.homeLink,underline:"none"},K(V,{className:P.icon,color:"primary"}))),K(g.Z,{item:!0},!k&&K(h.Z,{color:"inherit",href:"/",className:P.link,underline:"none"},K(V,{className:P.icon,color:"primary"})),k&&oe&&k)),K(g.Z,{xs:5,item:!0,container:!0,direction:"row-reverse",alignItems:"center"},K(g.Z,{item:!0},K(M,{loginButtonVariant:"button"})),K(g.Z,{item:!0},K(H.Z,{checked:!R,onChange:function(){A(!R)},color:"primary",name:"checkedA",inputProps:{"aria-label":"secondary checkbox"}})))))),K("nav",{className:(0,_.Z)(P.drawer,(t={},(0,r.Z)(t,P.drawerPermanent,!te),(0,r.Z)(t,P.drawerOpen,se&&!te),(0,r.Z)(t,P.drawerClose,!se&&!te),t)),"aria-label":"mailbox folders"},te&&K(le,null),!te&&K(c.Z,{mdUp:!0,implementation:"css"},K(le,null)),!te&&K(c.Z,{smDown:!0,implementation:"css"},K(s.ZP,{className:(0,_.Z)(P.drawer,(p={},(0,r.Z)(p,P.drawerPermanent,!te),(0,r.Z)(p,P.drawerOpen,se&&!te),(0,r.Z)(p,P.drawerClose,!se&&!te),p)),classes:{paper:(0,_.Z)((Z={},(0,r.Z)(Z,P.drawerOpen,se&&!te),(0,r.Z)(Z,P.drawerClose,!se&&!te),Z))},variant:"permanent",onMouseEnter:w?null:function(){ne(!1),setTimeout((function(){!oe||U||J||ee||Q(!0)}),1e3)},onMouseLeave:w?null:function(){J&&(ee||ne(!0),Q(!1))}},ce))),K(g.Z,{container:!0,item:!0,className:P.content,justifyContent:"space-between"},K(g.Z,{item:!0,container:!0,component:"main",className:P.mainContent,direction:"column"},K("div",{className:P.toolbar}),y),C&&K(S,{desktopOpen:U})))}},664:function(e,n,t){"use strict";var a=t(1229),r=t(8347),i=t(7294),o=t(8946),s=i.createElement;n.Z=function(e){var n=e.src,t=e.alt,i=e.className,c=e.children,l=(0,r.Z)(e,["src","alt","className","children"]),u=(0,o.useBasePath)(),m="/"===(null===u||void 0===u?void 0:u.charAt(0))?u+n:n;return s("img",(0,a.Z)({src:m,alt:t,className:i},l),c)}},2236:function(e,n,t){"use strict";var a=t(6265),r=t(1229),i=t(8347),o=t(7294),s=t(6010),c=t(1163),l=t(1664),u=t(9659),m=o.createElement,p=o.forwardRef((function(e,n){var t=e.as,a=e.href,o=(0,i.Z)(e,["as","href"]);return m(l.default,{href:a,as:t},m("a",(0,r.Z)({ref:n},o)))}));function d(e){var n=e.href,t=e.activeClassName,o=void 0===t?"active":t,l=e.className,d=e.innerRef,g=e.naked,f=(0,i.Z)(e,["href","activeClassName","className","innerRef","naked"]),h=(0,c.useRouter)(),Z="string"===typeof n?n:n.pathname,v=(0,s.Z)(l,(0,a.Z)({},o,h.pathname===Z&&o));return g?m(p,(0,r.Z)({className:v,ref:d,href:n},f)):m(u.Z,(0,r.Z)({component:p,className:v,ref:d,href:n},f))}n.Z=o.forwardRef((function(e,n){return m(d,(0,r.Z)({},e,{innerRef:n}))}))},1630:function(e,n,t){"use strict";t.d(n,{y:function(){return s}});var a=t(7294),r=t(9008),i=t(8946),o=a.createElement;function s(e){var n=e.title,t=(0,i.useBasePath)();return o(r.default,null,o("title",null,n||"DLG Data"),o("link",{rel:"icon",href:"".concat(t,"/favicon.ico")}),o("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"}),o("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"}),o("link",{href:"https://fonts.googleapis.com/css2?family=Inter&display=swap",rel:"stylesheet"}),o("link",{href:"https://fonts.googleapis.com/css2?family=Work+Sans&display=swap",rel:"stylesheet"}),o("link",{href:"https://fonts.googleapis.com/css2?family=Mulish&display=swap",rel:"stylesheet"}),o("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"}))}},4179:function(e,n,t){"use strict";t.d(n,{x:function(){return c}});var a=t(1229),r=t(8347),i=t(7294),o=t(2318),s=i.createElement;function c(e){var n=e.children,t=(0,r.Z)(e,["children"]);return s(o.Z,(0,a.Z)({color:"textPrimary"},t),n)}n.Z=c},9742:function(e,n,t){"use strict";t.d(n,{K:function(){return s}});var a=t(809),r=t.n(a),i=t(2447);function o(){return(o=(0,i.Z)(r().mark((function e(n,t,a,i){var o;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n||(n="GET"),(o={}).method=n,"application/json"===t&&null!==a&&"object"===typeof a&&(a=JSON.stringify(a)),a&&(o.body=a),o.headers={},o.headers["X-FP-API-KEY"]="iphone",t&&(o.headers["content-type"]=t),i&&(o.headers["X-DLG-AUTHORIZATION"]="Bearer "+i),e.abrupt("return",o);case 13:throw e.prev=13,e.t0=e.catch(0),console.log("error getting fetch options"),e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}n.Z=function(e,n,t,a){return o.apply(this,arguments)};var s="/api"},2696:function(e,n,t){"use strict";t.d(n,{q:function(){return h}});var a=t(809),r=t.n(a),i=t(2447),o=t(4121),s=t(7294),c=t(2804),l=t(8364),u=t(9742);function m(e){return p.apply(this,arguments)}function p(){return(p=(0,i.Z)(r().mark((function e(n){var t,a,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("get","application/json",null,n);case 2:return t=e.sent,e.next=5,fetch("".concat(u.K,"/user/login"),t);case 5:if((a=e.sent).ok){e.next=8;break}throw Error("Server Side error, check network response: "+a.status+" "+a.statusText);case 8:return e.next=10,a.json();case 10:return i=e.sent,e.abrupt("return",i);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var d=(0,c.cn)({key:"userAccountInProgress",default:!1}),g=(0,c.cn)({key:"userAccount",default:null}),f=(0,c.cn)({key:"userAccountError",default:null});function h(){var e=(0,l.dQ)(),n=(0,o.Z)(e,3),t=n[0],a=n[1],u=n[2],p=(0,c.FV)(d),h=(0,o.Z)(p,2),Z=h[0],v=h[1],w=(0,c.FV)(g),b=(0,o.Z)(w,2),k=b[0],y=b[1],x=(0,c.FV)(f),N=(0,o.Z)(x,2),C=N[0],B=N[1];return(0,s.useEffect)((function(){!t||k||Z||C||function(){var e=(0,i.Z)(r().mark((function e(){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),e.next=4,m(t);case 4:n=e.sent,v(!1),y(n),e.next=15;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("useUserAccountError"),console.error(e.t0),v(!1),B(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}()()}),[t]),[k,!(!Z&&!a),C||(u||null)]}}}]);