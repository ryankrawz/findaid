(this.webpackJsonpfindaid=this.webpackJsonpfindaid||[]).push([[0],{11:function(e,t,n){e.exports={header:"Profile_header__2ChJJ",itemHeader:"Profile_itemHeader__3uIfp",Row:"Profile_Row__3mo0H",itemTitle:"Profile_itemTitle__30AtC",infoContainer:"Profile_infoContainer__10EjW",postContainer:"Profile_postContainer__3m_xT",postLink:"Profile_postLink__2Z9u7",photo:"Profile_photo__1MpMV",postImage:"Profile_postImage__RRAIi",user:"Profile_user__2YOKO",name:"Profile_name__fJMw_"}},16:function(e,t,n){e.exports={header:"Header_header__3mObx",headerItem:"Header_headerItem__3qR-F"}},21:function(e,t,n){e.exports={container:"App_container__6j1zw",content:"App_content__1dlDM"}},35:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(25),r=n.n(i),c=(n(35),n(8)),o=n(2),l=n(21),d=n.n(l),j=n(12),h=n(3);function b(e){var t=(new Date).valueOf().toString(36);return function(e){for(var t=(new Date).getTime(),n=0;n<1e7&&!((new Date).getTime()-t>e);n++);}(1),e+t}var m={currentUser:"bernie.sanders@gmail.com",users:[{email:"bernie.sanders@gmail.com",password:"vermontmaplesyrup",name:"Bernie Sanders",bio:"I am once again asking for your financial support.",photo:"/assets/berniesanders.jpg",isSuperUser:!0},{email:"isabelle.smyth@gmail.com",password:"bceagles",name:"Isabelle Smyth",bio:"Looking to help my community BC 21",photo:"/assets/isabelle.jpg",isSuperUser:!1}],posts:[{id:"357458",poster:"bernie.sanders@gmail.com",title:"Landfill in Underprivileged Area",location:"Atlanta, GA",description:"A new landfill site has been marked in an impoverished neighborhood without the community members' consent.",images:["/assets/landfill.jpg","/assets/atlantaneighborhood.jpg"],resourcesInfo:[{name:"Landfill Zoning Laws",link:"//www.atlantaga.gov/government/departments/city-planning/office-of-zoning-development/zoning"}],fundsPetitions:[{name:"Stop the Landfill Fund",link:"//www.stopthelandfill.com/donate.html"}],events:[{name:"Town Hall Meeting",link:"//www.atlantadowntown.com/cap/about/town-hall-meetings"}],comments:[{user:"bernie.sanders@gmail.com",text:"This is outrageous! We must rally for change."}]},{id:"357459",poster:"bernie.sanders@gmail.com",title:"Risky Byhalia Connection Pipeline Threatens TN & MS Health, Water Supply",location:"Memphis, TN",description:"In December 2019, Plains All-American and Valero pipeline companies announced plans to build the 49-mile Byhalia Pipeline through southwestern Tennessee and northwestern Mississippi. ",images:["/assets/pipeline.jpg","/assets/coalpollution.jpg","/assets/tennesseestreet.jpg"],resourcesInfo:[{name:"FracTracker",link:"//www.fractracker.org/2021/03/risky-byhalia-pipeline-threatens-tennessee-mississippi-health-and-water-supply/"}],fundsPetitions:[{name:"No Oil In Our Soil",link:"//www.ipetitions.com/petition/no-oil-in-our-soil"}],events:[],comments:[{user:"isabelle.smyth@gmail.com",text:"As a resident of Tennessee, I've been very frustrated with the government's slow response."}]}],likes:[{datetime:"2020-02-09T22:53:40Z",postId:"357458",userEmail:"bernie.sanders@gmail.com"}]},u=n(0),p=Object(a.createContext)();var O=function(e){var t=Object(a.useState)(m),n=Object(h.a)(t,2),s=n[0],i=n[1],r=Object(a.useState)("bernie.sanders@gmail.com")[0];return Object(u.jsx)(p.Provider,{value:Object(j.a)(Object(j.a)({},s),{},{addComment:function(e,t){for(var n=0;n<s.posts.length;){if(s.posts[n].id===t){s.posts[n].comments=s.posts[n].comments.concat({user:r,text:e});break}n++}i(s)},addPost:function(e,t,n,a,c,o,l,d,h,m){var u={id:b(""),poster:r,title:n,location:a,description:t,images:[e],resourcesInfo:[{name:c,link:o}],fundsPetitions:[{name:l,link:d}],events:[{name:h,link:m}],comments:[]};i(Object(j.a)(Object(j.a)({},s),{},{posts:s.posts.concat(u)}))},addLike:function(e){var t={datetime:(new Date).toISOString(),postId:e,userEmail:r};i(Object(j.a)(Object(j.a)({},s),{},{likes:s.likes.concat(t)}))},removeLike:function(e){i(Object(j.a)(Object(j.a)({},s),{},{likes:s.likes.filter((function(t){return!(t.postId===e&&t.userEmail===r)}))}))}}),children:e.children})},f=n(6),x=n.n(f),g=n(26),v=n(27),_=n(14),k=n(30),C=n(29),N=function(e){Object(k.a)(n,e);var t=Object(C.a)(n);function n(e){var a;return Object(g.a)(this,n),(a=t.call(this,e)).handleDragEnter=a.handleDragEnter.bind(Object(_.a)(a)),a.handleDrop=a.handleDrop.bind(Object(_.a)(a)),a.handleDragOver=a.handleDragOver.bind(Object(_.a)(a)),a.handleDragLeave=a.handleDragLeave.bind(Object(_.a)(a)),a}return Object(v.a)(n,[{key:"handleDrop",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onDrop&&this.props.onDrop(e)}},{key:"handleDragEnter",value:function(e){e.preventDefault(),e.stopPropagation(),this.dragTargetSaved=e.target,this.props.onDragEnter&&this.props.onDragEnter(e)}},{key:"handleDragOver",value:function(e){!1!==e.dataTransfer.types.includes("Files")&&(e.preventDefault(),e.stopPropagation(),this.props.onDragOver&&this.props.onDragOver(e))}},{key:"handleDragLeave",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onDragLeave&&this.dragTargetSaved===e.target&&this.props.onDragLeave(e)}},{key:"render",value:function(){var e=s.a.Children.only(this.props.children);return s.a.cloneElement(e,{onDragEnter:this.handleDragEnter,onDragOver:this.handleDragOver,onDragLeave:this.handleDragLeave,onDrop:this.handleDrop})}}]),n}(a.PureComponent);var P=function(e){var t=Object(a.useState)(!1),n=Object(h.a)(t,2),s=n[0],i=n[1],r=Object(a.useState)(""),c=Object(h.a)(r,2),l=c[0],d=c[1],j=Object(a.useState)(""),b=Object(h.a)(j,2),m=b[0],O=b[1],f=Object(a.useState)(""),g=Object(h.a)(f,2),v=g[0],_=g[1],k=Object(a.useState)(""),C=Object(h.a)(k,2),P=C[0],I=C[1],w=Object(a.useState)(""),D=Object(h.a)(w,2),S=D[0],y=D[1],L=Object(a.useState)(""),T=Object(h.a)(L,2),H=T[0],E=T[1],A=Object(a.useState)(""),F=Object(h.a)(A,2),M=F[0],U=F[1],R=Object(a.useState)(""),B=Object(h.a)(R,2),J=B[0],Z=B[1],W=Object(a.useState)(""),Y=Object(h.a)(W,2),z=Y[0],q=Y[1],G=Object(a.useState)(null),V=Object(h.a)(G,2),K=V[0],X=V[1],Q=Object(a.useState)(""),$=Object(h.a)(Q,2),ee=$[0],te=$[1],ne=Object(o.f)(),ae=Object(a.useContext)(p).addPost;return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:x.a.photo,children:[K?Object(u.jsx)("img",{src:K,alt:"New Post"}):Object(u.jsx)("div",{className:x.a.message,children:"Drop your image"}),Object(u.jsx)(N,{onDragEnter:function(e){i(!0)},onDragLeave:function(e){i(!1)},onDrop:function(e){if(!1!==e.dataTransfer.types.includes("Files")){if(e.dataTransfer.files.length>=1){var t=e.dataTransfer.files[0];if(t.size>1e6)return;if(t.type.match(/image.*/)){var n=new FileReader;n.onloadend=function(e){X(e.target.result)},n.readAsDataURL(t)}}i(!1)}},children:Object(u.jsx)("div",{className:[x.a.dropArea,s?x.a.dragging:null].join(" ")})})]}),Object(u.jsxs)("div",{className:x.a.desc,children:[Object(u.jsx)("h5",{children:"Title:"}),Object(u.jsx)("textarea",{placeholder:"...",rows:"2",value:m,onChange:function(e){O(e.target.value)}})]}),Object(u.jsxs)("div",{className:x.a.desc,children:[Object(u.jsx)("h5",{children:"Location:"}),Object(u.jsx)("textarea",{placeholder:"...",rows:"2",value:v,onChange:function(e){_(e.target.value)}})]}),Object(u.jsxs)("div",{className:x.a.desc,children:[Object(u.jsx)("h5",{children:"Description:"}),Object(u.jsx)("textarea",{placeholder:"...",rows:"2",value:l,onChange:function(e){d(e.target.value)}})]}),Object(u.jsxs)("div",{className:x.a.desc,children:[Object(u.jsx)("h5",{children:"Resources & Information name (optional):"}),Object(u.jsx)("textarea",{placeholder:"...",rows:"2",value:S,onChange:function(e){y(e.target.value)}})]}),Object(u.jsxs)("div",{className:x.a.desc,children:[Object(u.jsx)("h5",{children:"Resources & Information link:"}),Object(u.jsx)("textarea",{placeholder:"...",rows:"2",value:P,onChange:function(e){I(e.target.value)}})]}),Object(u.jsxs)("div",{className:x.a.desc,children:[Object(u.jsx)("h5",{children:"Funds & Petitions name (optional):"}),Object(u.jsx)("textarea",{placeholder:"...",rows:"2",value:M,onChange:function(e){U(e.target.value)}})]}),Object(u.jsxs)("div",{className:x.a.desc,children:[Object(u.jsx)("h5",{children:"Funds & Petitions link:"}),Object(u.jsx)("textarea",{placeholder:"...",rows:"2",value:H,onChange:function(e){E(e.target.value)}})]}),Object(u.jsxs)("div",{className:x.a.desc,children:[Object(u.jsx)("h5",{children:"Event name (optional):"}),Object(u.jsx)("textarea",{placeholder:"...",rows:"2",value:z,onChange:function(e){q(e.target.value)}})]}),Object(u.jsxs)("div",{className:x.a.desc,children:[Object(u.jsx)("h5",{children:"Event link:"}),Object(u.jsx)("textarea",{placeholder:"...",rows:"2",value:J,onChange:function(e){Z(e.target.value)}})]}),Object(u.jsx)("div",{className:x.a.error,children:ee}),Object(u.jsxs)("div",{className:x.a.actions,children:[Object(u.jsx)("button",{onClick:function(){ne.push("/")},children:"Cancel"}),Object(u.jsx)("button",{onClick:function(e){e.preventDefault(),K?m?v?l?(ae(K,l,m,v,S,P,M,H,z,J),ne.push("/"),te("")):te("You need to add a description!"):te("You need to add a location!"):te("You need to add a title!"):te("You need to add a photo!")},children:"Share"})]})]})},I=n(16),w=n.n(I);function D(e){return e.startsWith("/")?"/findaid"+e:e}var S=function(){return Object(u.jsxs)("div",{className:w.a.header,children:[Object(u.jsx)("div",{className:w.a.headerItem,children:Object(u.jsx)(c.b,{to:"/",children:Object(u.jsx)("img",{src:D("/assets/home.svg"),alt:"Home"})})}),Object(u.jsx)("div",{className:w.a.headerItem,children:Object(u.jsxs)(c.b,{to:"/",style:{color:"inherit",textDecoration:"inherit"},children:[Object(u.jsx)("strong",{children:"FindAid"}),"\xa0",Object(u.jsx)("img",{className:w.a.logo,src:D("/findaidlogo.png"),alt:"FindAid logo",width:"35px",height:"35px"})]})}),Object(u.jsx)("div",{className:w.a.headerItem,children:Object(u.jsx)(c.b,{to:"createpost",children:Object(u.jsx)("img",{src:D("/assets/createpost.svg"),alt:"CreatePost"})})}),Object(u.jsx)("div",{className:w.a.headerItem,children:Object(u.jsx)(c.b,{to:"profile",children:Object(u.jsx)("img",{src:D("/assets/profile.svg"),alt:"Profile"})})})]})},y=n(18),L=n(5),T=n.n(L);var H=function(){var e=Object(a.useContext)(p),t=e.posts,n=e.likes,s=e.currentUser,i=e.addLike,r=e.removeLike,o=Object(a.useState)(t),l=Object(h.a)(o,2),d=l[0],b=l[1],m=Object(a.useState)({resourcesInfo:!1,fundsPetitions:!1,events:!1}),O=Object(h.a)(m,2),f=O[0],x=O[1];function g(e){var n=e.target.value,a=Object(j.a)(Object(j.a)({},f),{},Object(y.a)({},n,e.target.checked));x(a);var s=t.filter((function(e){return(!a.resourcesInfo||e.resourcesInfo.length>0)&&(!a.fundsPetitions||e.fundsPetitions.length>0)&&(!a.events||e.events.length>0)}));b(s)}return Object(u.jsxs)("div",{children:[Object(u.jsxs)("section",{id:"filter-container",children:[Object(u.jsx)("input",{className:T.a.search,type:"search",placeholder:"Search title, location, description...",onInput:function(e){return function(e){var n=RegExp("".concat(e.target.value),"i"),a=t.filter((function(e){return n.test(e.title)||n.test(e.location)||n.test(e.description)}));b(a)}(e)}}),Object(u.jsxs)("div",{className:T.a.checkboxContainer,children:[Object(u.jsxs)("div",{className:T.a.checkboxItem,children:[Object(u.jsx)("input",{type:"checkbox",name:"resources-info",value:"resourcesInfo",onInput:function(e){return g(e)}}),Object(u.jsx)("label",{className:T.a.checkboxLabel,htmlFor:"resources-info",children:"has resources or information"})]}),Object(u.jsxs)("div",{className:T.a.checkboxItem,children:[Object(u.jsx)("input",{type:"checkbox",name:"funds-petitions",value:"fundsPetitions",onInput:function(e){return g(e)}}),Object(u.jsx)("label",{className:T.a.checkboxLabel,htmlFor:"funds-petitions",children:"has funds or petitions"})]}),Object(u.jsxs)("div",{className:T.a.checkboxItem,children:[Object(u.jsx)("input",{type:"checkbox",name:"events",value:"events",onInput:function(e){return g(e)}}),Object(u.jsx)("label",{className:T.a.checkboxLabel,htmlFor:"events",children:"has events"})]})]})]}),Object(u.jsx)("section",{id:"post-container",children:d.map((function(e){return Object(u.jsxs)("div",{className:T.a.postContainer,children:[Object(u.jsxs)("div",{className:T.a.itemHeader,children:[n.find((function(t){return t.postId===e.id&&t.userEmail===s}))?Object(u.jsx)("i",{className:"fas fa-bookmark ".concat(T.a.bookmark),onClick:function(t){return n=e.id,void r(n);var n}}):Object(u.jsx)("i",{className:"far fa-bookmark ".concat(T.a.bookmark),onClick:function(t){return n=e.id,void i(n);var n}}),Object(u.jsxs)("div",{className:T.a.itemTitle,children:[Object(u.jsx)("h2",{children:e.title}),Object(u.jsx)("h3",{children:e.location})]})]}),Object(u.jsxs)("div",{className:T.a.infoContainer,children:[Object(u.jsx)("img",{className:T.a.postImage,src:D(e.images[0]),alt:e.title}),Object(u.jsx)("p",{className:T.a.description,children:e.description})]}),Object(u.jsx)(c.b,{className:T.a.learnMore,to:"/".concat(e.id),children:Object(u.jsx)("button",{children:"Learn More"})})]},e.id)}))})]})};var E=function(){return Object(u.jsx)("div",{children:"LogIn"})},A=n(7),F=n.n(A);var M=function(){var e=Object(a.useContext)(p),t=e.posts,n=e.users,s=e.likes,i=e.addComment,r=e.addLike,c=e.removeLike,l=Object(a.useState)(0),d=Object(h.a)(l,2),j=d[0],b=d[1],m=Object(a.useState)(""),O=Object(h.a)(m,2),f=O[0],x=O[1],g=Object(o.g)().postId,v=t.find((function(e){return e.id===g})),_=n.find((function(e){return e.email===v.poster}));return Object(u.jsxs)("div",{className:F.a.postContainer,children:[Object(u.jsxs)("aside",{className:F.a.postInfo,children:[Object(u.jsx)("img",{className:F.a.postImage,src:D(v.images[j]),alt:v.images[j]}),Object(u.jsxs)("div",{className:F.a.scrollContainer,children:[Object(u.jsx)("i",{className:"fas fa-chevron-left ".concat(F.a.scrollPhoto),onClick:function(){var e=j>0?j-1:v.images.length-1;b(e)}}),"\xa0\xa0",Object(u.jsx)("i",{className:"fas fa-chevron-right ".concat(F.a.scrollPhoto),onClick:function(){var e=j<v.images.length-1?j+1:0;b(e)}})]}),Object(u.jsx)("h3",{className:F.a.postTitle,children:v.title}),Object(u.jsx)("h4",{children:v.location}),v.description,s.find((function(e){return e.postId===g&&e.userEmail===_.email}))?Object(u.jsx)("i",{className:"fas fa-bookmark ".concat(F.a.bookmark),onClick:function(){c(g)}}):Object(u.jsx)("i",{className:"far fa-bookmark ".concat(F.a.bookmark),onClick:function(){r(g)}})]}),Object(u.jsxs)("div",{className:F.a.infoContainer,children:[Object(u.jsxs)("section",{children:[Object(u.jsx)("h4",{children:"Resources & Information"}),Object(u.jsx)("div",{className:F.a.linkContainer,children:v.resourcesInfo.map((function(e){return Object(u.jsx)("a",{href:e.link,children:e.name},e.link)}))}),Object(u.jsx)("h4",{children:"Funds & Petitions"}),Object(u.jsx)("div",{className:F.a.linkContainer,children:v.fundsPetitions.map((function(e){return Object(u.jsx)("a",{href:e.link,children:e.name},e.link)}))}),Object(u.jsx)("h4",{children:"Events"}),Object(u.jsx)("div",{className:F.a.linkContainer,children:v.events.map((function(e){return Object(u.jsx)("a",{href:e.link,children:e.name},e.link)}))})]}),Object(u.jsxs)("section",{children:[Object(u.jsx)("h4",{children:"Comments"}),Object(u.jsxs)("div",{children:[v.comments.map((function(e){return Object(u.jsxs)("div",{className:F.a.commentContainer,children:[Object(u.jsxs)("h5",{children:[n.find((function(t){return t.email===e.user})).isSuperUser&&Object(u.jsxs)("span",{children:[Object(u.jsx)("i",{className:"fas fa-star"}),"\xa0"]}),e.user]}),Object(u.jsx)("p",{children:e.text})]},e.text)})),Object(u.jsxs)("form",{className:F.a.addComment,onSubmit:function(e){i(f,v.id),x(""),e.preventDefault()},children:[Object(u.jsx)("input",{type:"text",placeholder:"Add a comment\u2026",value:f,onChange:function(e){return x(e.target.value)}}),f?Object(u.jsx)("button",{type:"submit",children:"Post"}):Object(u.jsx)("button",{type:"submit",disabled:!0,children:"Post"})]})]})]})]})]})};var U=n(11),R=n.n(U);var B=function(){var e=Object(a.useContext)(p),t=e.currentUser,n=e.posts,s=e.users,i=e.likes,r=function(e,t){return t.find((function(t){return e===t.email}))}(t,s),o=function(e,t){return t.filter((function(t){return t.poster===e}))}(t,n),l=function(e,t,n){var a=n.filter((function(t){return t.userEmail===e})),s=[];for(var i in a)s.push(a[i].postId);return t.filter((function(e){var t=e.id;return s.includes(t)}))}(t,n,i);return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{align:"center",className:R.a.photo,children:Object(u.jsx)("img",{src:D(r.photo),alt:"Profile"})}),Object(u.jsxs)("div",{align:"center",className:R.a.user,children:[Object(u.jsx)("div",{className:R.a.name,children:Object(u.jsxs)("h1",{children:[r.isSuperUser&&Object(u.jsxs)("span",{children:[Object(u.jsx)("img",{src:"assets/superuser.png",width:"30",alt:"superuser"}),"\xa0"]}),r.name]})}),Object(u.jsx)("div",{className:R.a.bio,children:r.bio})]})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("h2",{align:"center",children:"Bookmarked Posts"}),Object(u.jsx)("div",{className:R.a.infoContainer,children:l.map((function(e){return Object(u.jsx)("div",{className:R.a.postContainer,children:Object(u.jsx)(c.b,{to:"/".concat(e.id),className:R.a.postLink,children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:e.title}),Object(u.jsx)("img",{className:R.a.postImage,src:D(e.images[0]),alt:e.title})]},e.id)})},e.id)}))}),Object(u.jsx)("hr",{}),Object(u.jsx)("h2",{align:"center",children:"My Posts"}),Object(u.jsx)("div",{className:R.a.infoContainer,children:o.map((function(e){return Object(u.jsx)("div",{className:R.a.postContainer,children:Object(u.jsx)(c.b,{to:"/".concat(e.id),className:R.a.postLink,children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:e.title}),Object(u.jsx)("img",{className:R.a.postImage,src:D(e.images[0]),alt:e.title})]},e.id)})},e.id)}))})]})};var J=function(){return Object(u.jsx)("div",{children:"SignUp"})};var Z=function(){return Object(u.jsx)(c.a,{basename:"/findaid",children:Object(u.jsx)(O,{children:Object(u.jsxs)("div",{className:d.a.container,children:[Object(u.jsx)(S,{}),Object(u.jsx)("main",{className:d.a.content,children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/login",children:Object(u.jsx)(E,{})}),Object(u.jsx)(o.a,{path:"/signup",children:Object(u.jsx)(J,{})}),Object(u.jsx)(o.a,{path:"/createpost",children:Object(u.jsx)(P,{})}),Object(u.jsx)(o.a,{path:"/profile",children:Object(u.jsx)(B,{})}),Object(u.jsx)(o.a,{path:"/:postId",children:Object(u.jsx)(M,{})}),Object(u.jsx)(o.a,{path:"/",children:Object(u.jsx)(H,{})})]})})]})})})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),i(e),r(e)}))};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(Z,{})}),document.getElementById("root")),W()},5:function(e,t,n){e.exports={search:"Home_search__286En",checkboxContainer:"Home_checkboxContainer__2eSgt",checkboxItem:"Home_checkboxItem__2BUyE",checkboxLabel:"Home_checkboxLabel__1LGtd",postContainer:"Home_postContainer__2Zymp",itemHeader:"Home_itemHeader__eSmwm",bookmark:"Home_bookmark__1qwaN",itemTitle:"Home_itemTitle__J_58V",learnMore:"Home_learnMore__ByxcY",infoContainer:"Home_infoContainer__2WNWI",postImage:"Home_postImage__dM9dT",description:"Home_description__2PYZi"}},6:function(e,t,n){e.exports={photo:"CreatePost_photo__2JIOI",dropArea:"CreatePost_dropArea__wie4-",dragging:"CreatePost_dragging__3_ktR",message:"CreatePost_message__1sxlU",image:"CreatePost_image__30jAs",desc:"CreatePost_desc__1cxex",actions:"CreatePost_actions__1HabL",error:"CreatePost_error__1UcZU",addDesc:"CreatePost_addDesc__3kK-l"}},7:function(e,t,n){e.exports={postContainer:"Post_postContainer__2H-c_",postInfo:"Post_postInfo__3ZlBi",postImage:"Post_postImage__1hEu_",scrollContainer:"Post_scrollContainer__cTZs3",scrollPhoto:"Post_scrollPhoto__gHPzW",postTitle:"Post_postTitle__SFPlh",infoContainer:"Post_infoContainer__16b0I",bookmark:"Post_bookmark__3JMXx",linkContainer:"Post_linkContainer__1m1so",commentContainer:"Post_commentContainer__28hdX",addComment:"Post_addComment__aGSqH"}}},[[42,1,2]]]);
//# sourceMappingURL=main.cc5277fe.chunk.js.map