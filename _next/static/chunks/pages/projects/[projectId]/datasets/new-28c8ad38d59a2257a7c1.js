(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[936],{46869:function(e,t,r){"use strict";var n=r(22122),o=r(2949),i=r(67294),a=(r(45697),r(86010)),s=r(14670),c=r(66987),u=i.forwardRef((function(e,t){var r=e.classes,s=e.className,u=(0,o.Z)(e,["classes","className"]),l=i.useContext(c.Z);return i.createElement("div",(0,n.Z)({className:(0,a.Z)(r.root,s,"flex-start"===l.alignItems&&r.alignItemsFlexStart),ref:t},u))}));t.Z=(0,s.Z)((function(e){return{root:{minWidth:56,color:e.palette.action.active,flexShrink:0,display:"inline-flex"},alignItemsFlexStart:{marginTop:8}}}),{name:"MuiListItemIcon"})(u)},95757:function(e,t,r){"use strict";var n=r(22122),o=r(2949),i=r(67294),a=(r(45697),r(86010)),s=r(14670),c=r(22318),u=r(66987),l=i.forwardRef((function(e,t){var r=e.children,s=e.classes,l=e.className,p=e.disableTypography,d=void 0!==p&&p,f=e.inset,m=void 0!==f&&f,g=e.primary,C=e.primaryTypographyProps,y=e.secondary,Z=e.secondaryTypographyProps,h=(0,o.Z)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),v=i.useContext(u.Z).dense,b=null!=g?g:r;null==b||b.type===c.Z||d||(b=i.createElement(c.Z,(0,n.Z)({variant:v?"body2":"body1",className:s.primary,component:"span",display:"block"},C),b));var L=y;return null==L||L.type===c.Z||d||(L=i.createElement(c.Z,(0,n.Z)({variant:"body2",className:s.secondary,color:"textSecondary",display:"block"},Z),L)),i.createElement("div",(0,n.Z)({className:(0,a.Z)(s.root,l,v&&s.dense,m&&s.inset,b&&L&&s.multiline),ref:t},h),b,L)}));t.Z=(0,s.Z)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(l)},31125:function(e,t,r){"use strict";var n=r(67294),o=r(63786);t.Z=(0,o.Z)(n.createElement("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess")},73099:function(e,t,r){"use strict";var n=r(67294),o=r(63786);t.Z=(0,o.Z)(n.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore")},83556:function(e,t,r){"use strict";r.d(t,{v:function(){return y},s:function(){return Z}});var n=r(26265),o=r(67294),i=r(41120),a=r(50998),s=r(95757),c=r(46869),u=r(66037),l=r(62822),p=r(31125),d=r(73099),f=r(86010),m=r(41664),g=o.createElement,C=(0,i.Z)((function(e){return{nested:{paddingLeft:e.spacing(2),whiteSpace:"initial"},just:{justifyContent:"center"},root:{width:"100%",maxWidth:"36ch"},current:{fontWeight:400}}}));function y(e){e.icon;var t=e.text,r=e.id,o=(e.count,e.children,e.expandedSideBar,e.isCurrent),i=e.href,c=void 0===i?"/":i,u=C(),l=r||t;return g(m.default,{href:c},g(a.Z,{button:!0,key:l,className:u.nested,alignItems:"center"},g(s.Z,{primary:g("span",{className:(0,f.Z)((0,n.Z)({},u.current,o))},t),inset:!0})))}function Z(e){var t=e.icon,r=e.text,n=e.id,i=e.children,m=e.desktopClosed,y=e.hovering,Z=C(),h=n||r,v=(0,o.useState)(!1),b=v[0],L=v[1],O=function(){L(!b)},V=i&&i.length>0&&(!m||y);return g("div",{className:(0,f.Z)(Z.root,Z.leftside,Z.rightside)},g(a.Z,{button:!0,key:h},g(c.Z,null,t),g(s.Z,{primary:r}),V&&g(o.Fragment,null,g(b?p.Z:d.Z,{onClick:O}))),V&&g(u.Z,{key:h+"subMenu",in:b,timeout:"auto"},g(l.Z,{component:"div",disablePadding:!0},i)))}},98719:function(e,t,r){"use strict";var n=r(91229),o=r(26265),i=r(64121),a=r(38347),s=r(67294),c=r(11163),u=(r(1630),r(44321)),l=r(67095),p=r(85426),d=r(83027),f=r(89612),m=r(83556),g=r(41120),C=r(9450),y=r(16782),Z=r(47250),h=r(75377),v=r(44689),b=s.createElement;function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.Z=function(e){var t=e.children,r=e.appBarOnTop,O=void 0===r||r,V=((0,a.Z)(e,["children","appBarOnTop"]),(0,c.useRouter)().query),x=V.datasetId,M=V.projectId,H=(0,d.L)(!0),P=(0,i.Z)(H,4),j=P[0],k=P[1],w=(P[2],P[3],(0,l.P)(M)),E=(0,i.Z)(w,6),T=E[0],_=(E[1],E[2],E[3],E[4],E[5],(0,f.L)(M)),N=(0,i.Z)(_,4),I=N[0],S=(N[1],N[2],N[3]);(0,s.useEffect)((function(){S()}),[x]);(0,g.Z)((function(e){return{loader:{maxHeight:"50vh"},cardRoot:{backgroundColor:e.palette.background.paper,paddingLeft:e.spacing(4),paddingRight:e.spacing(0),paddingBottom:e.spacing(3)},dialogActions:{padding:e.spacing(3)},containerRoot:function(t){t.imgUrl;var r={backgroundColor:e.palette.background.default,padding:e.spacing(3)},n="-200px";return r.transform="translate3d(0px,-200px,0px)",r.paddingTop="calc("+e.spacing(3)+"px + "+"200px)",r.marginBottom=n,r},paperRoot:{padding:e.spacing(3)},root:{marginTop:40},flexContainer:{display:"flex",alignItems:"flex-start",minHeight:"100vh"},stickyContainer:{top:0,right:0,position:"absolute"},stickyItem:{top:0,position:"sticky"},contentBody:{width:"50%"},gridRoot:{flexGrow:1}}}))();var D=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},j);return b(s.Fragment,null,b(u.Z,{disableHover:!0,appBarOnTop:O,breadcrumbs:b(p.Z,{projectList:D,projectListInProgress:k,value:T?T._id:""}),renderMenuItems:function(e){var t=e.menuItemProps,r=function(e,t){return e?e.filter((function(e){return e.typeId===t})):[]};return b(s.Fragment,null,b(m.s,(0,n.Z)({},t,{icon:b(C.Z,null),text:"Pre-Design  ("+r(I,v.qW.predesign).length+")"}),r(I,v.qW.predesign).map((function(e){return b(m.v,{text:e.name,id:e._id,key:e._id,isCurrent:e._id===x,href:"/projects/".concat(M,"/datasets/").concat(e._id)})}))),b(m.s,(0,n.Z)({},t,{icon:b(y.Z,null),text:"Early-Stage  ("+r(I,v.qW.earlyStage).length+")"}),r(I,v.qW.earlyStage).map((function(e){return b(m.v,{text:e.name,id:e._id,key:e._id,isCurrent:e._id===x,href:"/projects/".concat(M,"/datasets/").concat(e._id)})}))),b(m.s,(0,n.Z)({},t,{icon:b(Z.Z,null),text:"Detailed"})),b(m.s,(0,n.Z)({},t,{icon:b(h.Z,null),text:"Compliance"})))}},t))}},75377:function(e,t,r){"use strict";var n=r(67294),o=r(62087),i=n.createElement;t.Z=function(e){return i(o.Z,e,i("path",{fill:"currentColor",d:"M22,21H2V3H4V19H6V17H10V19H12V16H16V19H18V17H22V21M18,14H22V16H18V14M12,6H16V9H12V6M16,15H12V10H16V15M6,10H10V12H6V10M10,16H6V13H10V16Z"}))}},47250:function(e,t,r){"use strict";var n=r(67294),o=r(62087),i=n.createElement;t.Z=function(e){return i(o.Z,e,i("path",{fill:"currentColor",d:"M17,22V20H20V17H22V20.5C22,20.89 21.84,21.24 21.54,21.54C21.24,21.84 20.89,22 20.5,22H17M7,22H3.5C3.11,22 2.76,21.84 2.46,21.54C2.16,21.24 2,20.89 2,20.5V17H4V20H7V22M17,2H20.5C20.89,2 21.24,2.16 21.54,2.46C21.84,2.76 22,3.11 22,3.5V7H20V4H17V2M7,2V4H4V7H2V3.5C2,3.11 2.16,2.76 2.46,2.46C2.76,2.16 3.11,2 3.5,2H7M13,17.25L17,14.95V10.36L13,12.66V17.25M12,10.92L16,8.63L12,6.28L8,8.63L12,10.92M7,14.95L11,17.25V12.66L7,10.36V14.95M18.23,7.59C18.73,7.91 19,8.34 19,8.91V15.23C19,15.8 18.73,16.23 18.23,16.55L12.75,19.73C12.25,20.05 11.75,20.05 11.25,19.73L5.77,16.55C5.27,16.23 5,15.8 5,15.23V8.91C5,8.34 5.27,7.91 5.77,7.59L11.25,4.41C11.5,4.28 11.75,4.22 12,4.22C12.25,4.22 12.5,4.28 12.75,4.41L18.23,7.59Z"}))}},9450:function(e,t,r){"use strict";var n=r(67294),o=r(62087),i=n.createElement;t.Z=function(e){return i(o.Z,e,i("path",{fill:"currentColor",d:"M12,11A1,1 0 0,1 13,12A1,1 0 0,1 12,13A1,1 0 0,1 11,12A1,1 0 0,1 12,11M4.22,4.22C5.65,2.79 8.75,3.43 12,5.56C15.25,3.43 18.35,2.79 19.78,4.22C21.21,5.65 20.57,8.75 18.44,12C20.57,15.25 21.21,18.35 19.78,19.78C18.35,21.21 15.25,20.57 12,18.44C8.75,20.57 5.65,21.21 4.22,19.78C2.79,18.35 3.43,15.25 5.56,12C3.43,8.75 2.79,5.65 4.22,4.22M15.54,8.46C16.15,9.08 16.71,9.71 17.23,10.34C18.61,8.21 19.11,6.38 18.36,5.64C17.62,4.89 15.79,5.39 13.66,6.77C14.29,7.29 14.92,7.85 15.54,8.46M8.46,15.54C7.85,14.92 7.29,14.29 6.77,13.66C5.39,15.79 4.89,17.62 5.64,18.36C6.38,19.11 8.21,18.61 10.34,17.23C9.71,16.71 9.08,16.15 8.46,15.54M5.64,5.64C4.89,6.38 5.39,8.21 6.77,10.34C7.29,9.71 7.85,9.08 8.46,8.46C9.08,7.85 9.71,7.29 10.34,6.77C8.21,5.39 6.38,4.89 5.64,5.64M9.88,14.12C10.58,14.82 11.3,15.46 12,16.03C12.7,15.46 13.42,14.82 14.12,14.12C14.82,13.42 15.46,12.7 16.03,12C15.46,11.3 14.82,10.58 14.12,9.88C13.42,9.18 12.7,8.54 12,7.97C11.3,8.54 10.58,9.18 9.88,9.88C9.18,10.58 8.54,11.3 7.97,12C8.54,12.7 9.18,13.42 9.88,14.12M18.36,18.36C19.11,17.62 18.61,15.79 17.23,13.66C16.71,14.29 16.15,14.92 15.54,15.54C14.92,16.15 14.29,16.71 13.66,17.23C15.79,18.61 17.62,19.11 18.36,18.36Z"}),"   ")}},16782:function(e,t,r){"use strict";var n=r(67294),o=r(62087),i=n.createElement;t.Z=function(e){return i(o.Z,e,i("path",{fill:"currentColor",d:"M13.13 22.19L11.5 18.36C13.07 17.78 14.54 17 15.9 16.09L13.13 22.19M5.64 12.5L1.81 10.87L7.91 8.1C7 9.46 6.22 10.93 5.64 12.5M19.22 4C19.5 4 19.75 4 19.96 4.05C20.13 5.44 19.94 8.3 16.66 11.58C14.96 13.29 12.93 14.6 10.65 15.47L8.5 13.37C9.42 11.06 10.73 9.03 12.42 7.34C15.18 4.58 17.64 4 19.22 4M19.22 2C17.24 2 14.24 2.69 11 5.93C8.81 8.12 7.5 10.53 6.65 12.64C6.37 13.39 6.56 14.21 7.11 14.77L9.24 16.89C9.62 17.27 10.13 17.5 10.66 17.5C10.89 17.5 11.13 17.44 11.36 17.35C13.5 16.53 15.88 15.19 18.07 13C23.73 7.34 21.61 2.39 21.61 2.39S20.7 2 19.22 2M14.54 9.46C13.76 8.68 13.76 7.41 14.54 6.63S16.59 5.85 17.37 6.63C18.14 7.41 18.15 8.68 17.37 9.46C16.59 10.24 15.32 10.24 14.54 9.46M8.88 16.53L7.47 15.12L8.88 16.53M6.24 22L9.88 18.36C9.54 18.27 9.21 18.12 8.91 17.91L4.83 22H6.24M2 22H3.41L8.18 17.24L6.76 15.83L2 20.59V22M2 19.17L6.09 15.09C5.88 14.79 5.73 14.47 5.64 14.12L2 17.76V19.17Z"}))}},89612:function(e,t,r){"use strict";r.d(t,{L:function(){return C}});var n=r(809),o=r.n(n),i=r(26265),a=r(92447),s=r(64121),c=r(67294),u=r(2804),l=r(58364),p=r(15894);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={response:null,inProgress:!1,error:!1},g=(0,u.cn)({key:"datasetDefinitionsAtom",default:m});function C(e){var t=(0,u.FV)(g),r=(0,s.Z)(t,2),n=r[0],i=r[1],d=(0,l.dQ)(),C=(0,s.Z)(d,3),y=C[0];C[1],C[2];return(0,c.useEffect)((function(){i(m)}),[e]),(0,c.useEffect)((function(){!y||!e||n.response||n.error||n.inProgress||function(){var t=(0,a.Z)(o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,i(f(f({},n),{},{inProgress:!0})),t.next=4,(0,p.v3)(e,y);case 4:r=t.sent,i({response:r,inProgress:!1,error:!1}),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(0),console.error("useDefinition error"),console.error(t.t0),i({error:t.t0,inProgress:!1});case 13:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}()()}),[y,n,e]),[n.response,n.inProgress,n.error,function(){i({response:null,error:!1,inProgress:!1})}]}},58746:function(e,t,r){"use strict";r.r(t);var n=r(67294),o=r(1630),i=r(98719),a=r(48671),s=r(41120),c=r(43832),u=r(41749),l=r(94179),p=n.createElement,d=(0,s.Z)((function(e){return{containerRoot:{backgroundColor:e.palette.background.default,padding:e.spacing(4)}}}));t.default=function(){var e=d();return p(n.Fragment,null,p(o.y,{title:"Project Data Upload - Green Toolkit 2"}),p(i.Z,null,p(c.Z,{className:e.containerRoot},p(u.Z,{container:!0,spacing:3,style:{marginBottom:50}},p(u.Z,{item:!0,xs:12},p(l.Z,{variant:"h3",style:{marginBottom:0,marginTop:0}},"Dataset Upload"),p(l.Z,{variant:"body1",style:{marginBottom:24}},"This process is designed to work best with the standardized analysis template found here.")),p(u.Z,{item:!0,xs:12,lg:6},p(a.r,{title:"Dataset Upload",subtitle:"This process is designed to work best with the standardized analysis template found here."}))))))}},52869:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/[projectId]/datasets/new",function(){return r(58746)}])}},function(e){e.O(0,[774,158,19,967,177,679,491,27,444,894,888,179],(function(){return t=52869,e(e.s=t);var t}));var t=e.O();_N_E=t}]);