(this.webpackJsonpfindaid=this.webpackJsonpfindaid||[]).push([[0],{14:function(e,t,n){e.exports={square:"PostThumbnail_square__1mMZc",content:"PostThumbnail_content__23flp",image:"PostThumbnail_image__3J_3H"}},17:function(e,t,n){},27:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s),r=n(21),c=n.n(r),a=(n(27),n(9)),o=n(2),l=n(17),d=n.n(l),j=n(11),u=n(12),b={currentUser:"bernie.sanders@gmail.com",users:[{email:"bernie.sanders@gmail.com",password:"vermontmaplesyrup",name:"Bernie Sanders",bio:"I am once again asking for your financial support.",photo:"/assets/berniesanders.jpg",isSuperUser:!0}],posts:[{id:"357458",poster:"bernie.sanders@gmail.com",title:"Landfill in Underprivileged Area",location:"Atlanta, GA",description:"A new landfill site has been marked in an impoverished neighborhood without the community members' consent.",images:["/assets/landfill.jpg","/assets/atlantaneighborhood.jpg"],resourcesInfo:[{name:"Landfill Zoning Laws",link:"landfillagency.org"}],fundsPetitions:[{name:"Stop the Landfill Fund",link:"stopthelandfill.com"}],events:[{name:"Town Hall Meeting",link:"atlanta.org"}],comments:[{user:"bernie.sanders@gmail.com",text:"This outrageous! We must rally for change."}]}],likes:[{datetime:"2020-02-09T22:53:40Z",postId:"357458",userEmail:"bernie.sanders@gmail.com"}]},h=n(0),p=Object(s.createContext)();var f=function(e){var t=Object(s.useState)(b),n=Object(u.a)(t,2),i=n[0];return n[1],Object(h.jsx)(p.Provider,{value:Object(j.a)({},i),children:e.children})};var m=function(){return Object(h.jsx)("div",{children:"CreatePost"})};var O=function(){return Object(h.jsx)("div",{children:"Header"})},x=n(13);function v(e){return e.startsWith("/")?"/findaid"+e:e}var g=function(){var e=Object(s.useContext)(p).posts,t=Object(s.useState)(e),n=Object(u.a)(t,2),i=n[0],r=n[1],c=Object(s.useState)({resourcesInfo:!1,fundsPetitions:!1,events:!1}),a=Object(u.a)(c,2),o=a[0],l=a[1];function d(t){var n=t.target.value,s=Object(j.a)(Object(j.a)({},o),{},Object(x.a)({},n,t.target.checked));l(s);var i=e.filter((function(e){return(!s.resourcesInfo||e.resourcesInfo.length>0)&&(!s.fundsPetitions||e.fundsPetitions.length>0)&&(!s.events||e.events.length>0)}));r(i)}return Object(h.jsxs)("div",{children:[Object(h.jsxs)("section",{id:"filter-container",children:[Object(h.jsx)("input",{type:"search",placeholder:"Search title, location, description...",onInput:function(t){return function(t){var n=RegExp("".concat(t.target.value),"i"),s=e.filter((function(e){return n.test(e.title)||n.test(e.location)||n.test(e.description)}));r(s)}(t)}}),Object(h.jsxs)("div",{id:"checkbox-container",children:[Object(h.jsx)("input",{type:"checkbox",name:"resources-info",value:"resourcesInfo",onInput:function(e){return d(e)}}),Object(h.jsx)("label",{htmlFor:"resources-info",children:"has resources or information"}),Object(h.jsx)("input",{type:"checkbox",name:"funds-petitions",value:"fundsPetitions",onInput:function(e){return d(e)}}),Object(h.jsx)("label",{htmlFor:"funds-petitions",children:"has funds or petitions"}),Object(h.jsx)("input",{type:"checkbox",name:"events",value:"events",onInput:function(e){return d(e)}}),Object(h.jsx)("label",{htmlFor:"events",children:"has events"})]})]}),Object(h.jsx)("section",{id:"post-container",children:i.map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{children:"Like"}),Object(h.jsxs)("div",{id:"post-header",children:[e.title,e.location]}),Object(h.jsx)("button",{children:"Learn More"}),Object(h.jsx)("img",{src:v(e.images[0])}),e.description]},e.id)}))})]})};var _=function(){return Object(h.jsx)("div",{children:"LogIn"})};var P=function(){return Object(h.jsx)("div",{children:"Post"})};var I=n(14),k=n.n(I);var N=function(e){return Object(h.jsx)("div",{className:k.a.square,children:Object(h.jsx)("div",{className:k.a.content,children:Object(h.jsx)("img",{className:k.a.image,src:v(e.post.photo),alt:"Post Thumbnail"})})})},S=n(7),y=n.n(S);var L=function(e){var t=Object(o.f)(),n=Object(s.useContext)(p),i=(n.store,n.posts),r=(n.users,n.currentUser),c="bernie.sanders@gmail.com";Object(s.useContext)(p).posts,t.email&&t.email,console.log(c);var l=i.filter((function(e){return e.userEmail==r})),d=i.filter((function(e){return e.poster==r}));return Object(h.jsxs)("div",{children:[Object(h.jsx)("header",{className:y.a.header,children:Object(h.jsx)("div",{className:y.a.photo})}),Object(h.jsxs)("div",{className:y.a.user,children:[Object(h.jsx)("div",{className:y.a.name,children:c.name}),Object(h.jsx)("div",{className:y.a.bio,children:c.bio})]}),Object(h.jsxs)("div",{className:y.a.posts,children:["Events Started",d.map((function(e){return Object(h.jsx)(a.b,{to:"/".concat(e.id),children:Object(h.jsx)(N,{post:e})},e.id)}))]}),Object(h.jsxs)("div",{className:y.a.posts,children:["Liked Events",l.map((function(e){return Object(h.jsx)(a.b,{to:"/".concat(e.id),children:Object(h.jsx)(N,{post:e})},e.id)}))]})]})};var w=function(){return Object(h.jsx)("div",{children:"SignUp"})};var C=function(){return Object(h.jsx)(a.a,{basename:"/findaid",children:Object(h.jsx)(f,{children:Object(h.jsxs)("div",{className:d.a.container,children:[Object(h.jsx)(O,{}),Object(h.jsx)("main",{className:d.a.content,children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{path:"/login",children:Object(h.jsx)(_,{})}),Object(h.jsx)(o.a,{path:"/signup",children:Object(h.jsx)(w,{})}),Object(h.jsx)(o.a,{path:"/createpost",children:Object(h.jsx)(m,{})}),Object(h.jsx)(o.a,{path:"/profile/:userId?",children:Object(h.jsx)(L,{})}),Object(h.jsx)(o.a,{path:"/:postId",children:Object(h.jsx)(P,{})}),Object(h.jsx)(o.a,{path:"/",children:Object(h.jsx)(g,{})})]})})]})})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),s(e),i(e),r(e),c(e)}))};c.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root")),T()},7:function(e,t,n){e.exports={header:"Profile_header__2ChJJ",posts:"Profile_posts__rwx78",photo:"Profile_photo__1MpMV",id:"Profile_id__1rPxo",user:"Profile_user__2YOKO",name:"Profile_name__fJMw_"}}},[[34,1,2]]]);
//# sourceMappingURL=main.7a6c7b9b.chunk.js.map