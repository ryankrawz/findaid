(this.webpackJsonpfindaid=this.webpackJsonpfindaid||[]).push([[0],{11:function(e,t,n){e.exports={photo:"CreatePost_photo__2JIOI",dropArea:"CreatePost_dropArea__wie4-",dragging:"CreatePost_dragging__3_ktR",message:"CreatePost_message__1sxlU",image:"CreatePost_image__30jAs",desc:"CreatePost_desc__1cxex",actions:"CreatePost_actions__1HabL",error:"CreatePost_error__1UcZU",addDesc:"CreatePost_addDesc__3kK-l"}},12:function(e,t,n){e.exports={postContainer:"Post_postContainer__2H-c_",postInfo:"Post_postInfo__3ZlBi",postImage:"Post_postImage__1hEu_",infoContainer:"Post_infoContainer__16b0I",bookmark:"Post_bookmark__3JMXx",linkContainer:"Post_linkContainer__1m1so",commentContainer:"Post_commentContainer__28hdX"}},16:function(e,t,n){e.exports={header:"Header_header__3mObx",headerItem:"Header_headerItem__3qR-F"}},19:function(e,t,n){e.exports={square:"PostThumbnail_square__1mMZc",content:"PostThumbnail_content__23flp",image:"PostThumbnail_image__3J_3H"}},22:function(e,t,n){e.exports={container:"App_container__6j1zw",content:"App_content__1dlDM"}},36:function(e,t,n){},4:function(e,t,n){e.exports={search:"Home_search__286En",checkboxContainer:"Home_checkboxContainer__2eSgt",checkboxItem:"Home_checkboxItem__2BUyE",checkboxLabel:"Home_checkboxLabel__1LGtd",postContainer:"Home_postContainer__2Zymp",itemHeader:"Home_itemHeader__eSmwm",bookmark:"Home_bookmark__1qwaN",itemTitle:"Home_itemTitle__J_58V",learnMore:"Home_learnMore__ByxcY",infoContainer:"Home_infoContainer__2WNWI",postImage:"Home_postImage__dM9dT",description:"Home_description__2PYZi"}},43:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(26),r=n.n(i),o=(n(36),n(10)),c=n(2),l=n(22),d=n.n(l),j=n(13),h=n(8);function m(e){var t=(new Date).valueOf().toString(36);return function(e){for(var t=(new Date).getTime(),n=0;n<1e7&&!((new Date).getTime()-t>e);n++);}(1),e+t}var b={currentUser:"bernie.sanders@gmail.com",users:[{email:"bernie.sanders@gmail.com",password:"vermontmaplesyrup",name:"Bernie Sanders",bio:"I am once again asking for your financial support.",photo:"/assets/berniesanders.jpg",isSuperUser:!0},{email:"isabelle.smyth@gmail.com",password:"bceagles",name:"Isabelle Smyth",bio:"Looking to help my community BC 21",photo:"/assets/isabelle.jpg",isSuperUser:!0}],posts:[{id:"357458",poster:"bernie.sanders@gmail.com",title:"Landfill in Underprivileged Area",location:"Atlanta, GA",description:"A new landfill site has been marked in an impoverished neighborhood without the community members' consent.",images:["/assets/landfill.jpg","/assets/atlantaneighborhood.jpg"],resourcesInfo:[{name:"Landfill Zoning Laws",link:"//www.atlantaga.gov/government/departments/city-planning/office-of-zoning-development/zoning"}],fundsPetitions:[{name:"Stop the Landfill Fund",link:"//www.stopthelandfill.com/donate.html"}],events:[{name:"Town Hall Meeting",link:"//www.atlantadowntown.com/cap/about/town-hall-meetings"}],comments:[{user:"bernie.sanders@gmail.com",text:"This is outrageous! We must rally for change."}]},{id:"357459",poster:"bernie.sanders@gmail.com",title:"RISKY BYHALIA CONNECTION PIPELINE THREATENS TENNESSEE & MISSISSIPPI HEALTH, WATER SUPPLY",location:"Memphis, TN",description:"In December 2019, Plains All-American and Valero pipeline companies announced plans to build the 49-mile Byhalia Pipeline through southwestern Tennessee and northwestern Mississippi. ",images:["/assets/landfill.jpg","/assets/atlantaneighborhood.jpg"],resourcesInfo:[{name:"FracTracker",link:"//www.fractracker.org/2021/03/risky-byhalia-pipeline-threatens-tennessee-mississippi-health-and-water-supply/"}],fundsPetitions:[{name:"No Oil In Our Soil",link:"//www.ipetitions.com/petition/no-oil-in-our-soil"}],events:[{name:"Town Hall Meeting",link:"//www.memphis.org"}],comments:[{user:"bernie.sanders@gmail.com",text:"This is outrageous! We must rally for change."}]}],likes:[{datetime:"2020-02-09T22:53:40Z",postId:"357458",userEmail:"bernie.sanders@gmail.com"}]},u=n(0),p=Object(a.createContext)();var O=function(e){var t=Object(a.useState)(b),n=Object(h.a)(t,2),s=n[0],i=n[1],r=Object(a.useState)("bernie.sanders@gmail.com")[0];return Object(u.jsx)(p.Provider,{value:Object(j.a)(Object(j.a)({},s),{},{addPost:function(e,t,n,a){var o={id:m("post"),poster:r,title:n,location:a,description:t,images:e,datetime:(new Date).toISOString()};i(Object(j.a)(Object(j.a)({},s),{},{posts:s.posts.concat(o)}))}}),children:e.children})},f=n(11),g=n.n(f),x=n(27),_=n(28),v=n(14),k=n(31),P=n(30),C=function(e){Object(k.a)(n,e);var t=Object(P.a)(n);function n(e){var a;return Object(x.a)(this,n),(a=t.call(this,e)).handleDragEnter=a.handleDragEnter.bind(Object(v.a)(a)),a.handleDrop=a.handleDrop.bind(Object(v.a)(a)),a.handleDragOver=a.handleDragOver.bind(Object(v.a)(a)),a.handleDragLeave=a.handleDragLeave.bind(Object(v.a)(a)),a}return Object(_.a)(n,[{key:"handleDrop",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onDrop&&this.props.onDrop(e)}},{key:"handleDragEnter",value:function(e){e.preventDefault(),e.stopPropagation(),this.dragTargetSaved=e.target,this.props.onDragEnter&&this.props.onDragEnter(e)}},{key:"handleDragOver",value:function(e){!1!==e.dataTransfer.types.includes("Files")&&(e.preventDefault(),e.stopPropagation(),this.props.onDragOver&&this.props.onDragOver(e))}},{key:"handleDragLeave",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onDragLeave&&this.dragTargetSaved===e.target&&this.props.onDragLeave(e)}},{key:"render",value:function(){var e=s.a.Children.only(this.props.children);return s.a.cloneElement(e,{onDragEnter:this.handleDragEnter,onDragOver:this.handleDragOver,onDragLeave:this.handleDragLeave,onDrop:this.handleDrop})}}]),n}(a.PureComponent);var I=function(e){var t=Object(a.useState)(!1),n=Object(h.a)(t,2),s=n[0],i=n[1],r=Object(a.useState)(""),o=Object(h.a)(r,2),l=o[0],d=o[1],j=Object(a.useState)(""),m=Object(h.a)(j,2),b=m[0],O=m[1],f=Object(a.useState)(""),x=Object(h.a)(f,2),_=x[0],v=x[1],k=Object(a.useState)(null),P=Object(h.a)(k,2),I=P[0],N=P[1],w=Object(a.useState)(""),D=Object(h.a)(w,2),S=D[0],T=D[1],y=Object(c.f)(),H=Object(a.useContext)(p).addPost;return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:g.a.photo,children:[I?Object(u.jsx)("img",{src:I,alt:"New Post"}):Object(u.jsx)("div",{className:g.a.message,children:"Drop your image"}),Object(u.jsx)(C,{onDragEnter:function(e){i(!0)},onDragLeave:function(e){i(!1)},onDrop:function(e){if(!1!==e.dataTransfer.types.includes("Files")){if(e.dataTransfer.files.length>=1){var t=e.dataTransfer.files[0];if(t.size>1e6)return;if(t.type.match(/image.*/)){var n=new FileReader;n.onloadend=function(e){N(e.target.result)},n.readAsDataURL(t)}}i(!1)}},children:Object(u.jsx)("div",{className:[g.a.dropArea,s?g.a.dragging:null].join(" ")})})]}),Object(u.jsx)("div",{className:g.a.desc,children:Object(u.jsx)("textarea",{placeholder:"Provide Title...",rows:"2",value:b,onChange:function(e){console.log(e.target.value),console.log(e),console.log(e),O(e.target.value)}})}),Object(u.jsx)("div",{className:g.a.desc,children:Object(u.jsx)("textarea",{placeholder:"Location...",rows:"2",value:_,onChange:function(e){console.log(e.target.value),v(e.target.value)}})}),Object(u.jsx)("div",{className:g.a.desc,children:Object(u.jsx)("textarea",{placeholder:"Describe...",rows:"2",value:l,onChange:function(e){console.log(e.target.value),d(e.target.value)}})}),Object(u.jsx)("div",{className:g.a.error,children:S}),Object(u.jsxs)("div",{className:g.a.actions,children:[Object(u.jsx)("button",{onClick:function(){e.onPostCancel(),y.push("/")},children:"Cancel"}),Object(u.jsx)("button",{onClick:function(e){e.preventDefault(),null!==I?(H(I,b,_,l),y.push("/"),T("")):T("You need to add a photo!")},children:"Share"})]})]})},N=n(16),w=n.n(N);function D(e){return e.startsWith("/")?"/findaid"+e:e}var S=function(e){return Object(u.jsxs)("div",{className:w.a.header,children:[Object(u.jsx)("div",{className:w.a.headerItem,children:Object(u.jsx)(o.b,{to:"/",children:Object(u.jsx)("img",{src:D("/assets/home.svg"),alt:"Home"})})}),Object(u.jsxs)("div",{className:w.a.headerItem,children:[Object(u.jsx)("strong",{children:"FindAid"}),"\xa0",Object(u.jsx)("img",{className:w.a.logo,src:D("/findaidlogo.png"),alt:"FindAid logo",width:"35px",height:"35px"})]}),Object(u.jsx)("div",{className:w.a.headerItem,children:Object(u.jsx)(o.b,{to:"createpost",children:Object(u.jsx)("img",{src:D("/assets/createpost.svg"),alt:"CreatePost"})})}),Object(u.jsx)("div",{className:w.a.headerItem,children:Object(u.jsx)(o.b,{to:"profile",children:Object(u.jsx)("img",{src:D("/assets/profile.svg"),alt:"Profile"})})})]})},T=n(18),y=n(4),H=n.n(y);var L=function(){var e=Object(a.useContext)(p).posts,t=Object(a.useState)(e),n=Object(h.a)(t,2),s=n[0],i=n[1],r=Object(a.useState)({resourcesInfo:!1,fundsPetitions:!1,events:!1}),c=Object(h.a)(r,2),l=c[0],d=c[1];function m(t){var n=t.target.value,a=Object(j.a)(Object(j.a)({},l),{},Object(T.a)({},n,t.target.checked));d(a);var s=e.filter((function(e){return(!a.resourcesInfo||e.resourcesInfo.length>0)&&(!a.fundsPetitions||e.fundsPetitions.length>0)&&(!a.events||e.events.length>0)}));i(s)}return Object(u.jsxs)("div",{children:[Object(u.jsxs)("section",{id:"filter-container",children:[Object(u.jsx)("input",{className:H.a.search,type:"search",placeholder:"Search title, location, description...",onInput:function(t){return function(t){var n=RegExp("".concat(t.target.value),"i"),a=e.filter((function(e){return n.test(e.title)||n.test(e.location)||n.test(e.description)}));i(a)}(t)}}),Object(u.jsxs)("div",{className:H.a.checkboxContainer,children:[Object(u.jsxs)("div",{className:H.a.checkboxItem,children:[Object(u.jsx)("input",{type:"checkbox",name:"resources-info",value:"resourcesInfo",onInput:function(e){return m(e)}}),Object(u.jsx)("label",{className:H.a.checkboxLabel,htmlFor:"resources-info",children:"has resources or information"})]}),Object(u.jsxs)("div",{className:H.a.checkboxItem,children:[Object(u.jsx)("input",{type:"checkbox",name:"funds-petitions",value:"fundsPetitions",onInput:function(e){return m(e)}}),Object(u.jsx)("label",{className:H.a.checkboxLabel,htmlFor:"funds-petitions",children:"has funds or petitions"})]}),Object(u.jsxs)("div",{className:H.a.checkboxItem,children:[Object(u.jsx)("input",{type:"checkbox",name:"events",value:"events",onInput:function(e){return m(e)}}),Object(u.jsx)("label",{className:H.a.checkboxLabel,htmlFor:"events",children:"has events"})]})]})]}),Object(u.jsx)("section",{id:"post-container",children:s.map((function(e){return Object(u.jsxs)("div",{className:H.a.postContainer,children:[Object(u.jsxs)("div",{className:H.a.itemHeader,children:[Object(u.jsx)("i",{class:"far fa-bookmark ".concat(H.a.bookmark)}),Object(u.jsxs)("div",{className:H.a.itemTitle,children:[Object(u.jsx)("h2",{children:e.title}),Object(u.jsx)("h3",{children:e.location})]})]}),Object(u.jsxs)("div",{className:H.a.infoContainer,children:[Object(u.jsx)("img",{class:H.a.postImage,src:D(e.images[0]),alt:e.title}),Object(u.jsx)("p",{className:H.a.description,children:e.description})]}),Object(u.jsx)(o.b,{className:H.a.learnMore,to:"/".concat(e.id),children:Object(u.jsx)("button",{children:"Learn More"})})]},e.id)}))})]})};var E=function(){return Object(u.jsx)("div",{children:"LogIn"})},A=n(12),M=n.n(A);var F=function(){var e=Object(a.useContext)(p),t=e.posts,n=e.users,s=Object(c.g)().postId,i=t.find((function(e){return e.id===s})),r=n.find((function(e){return e.email===i.poster}));return Object(u.jsxs)("div",{className:M.a.postContainer,children:[Object(u.jsxs)("aside",{class:M.a.postInfo,children:[Object(u.jsx)("img",{className:M.a.postImage,src:D(i.images[0]),alt:i.images[0]}),Object(u.jsx)("h3",{children:i.title}),Object(u.jsx)("h4",{children:i.location}),i.description,Object(u.jsx)("i",{class:"far fa-bookmark ".concat(M.a.bookmark)})]}),Object(u.jsxs)("div",{className:M.a.infoContainer,children:[Object(u.jsxs)("section",{children:[Object(u.jsx)("h4",{children:"Resources & Information"}),Object(u.jsx)("div",{className:M.a.linkContainer,children:i.resourcesInfo.map((function(e){return Object(u.jsx)("a",{href:e.link,children:e.name},e.link)}))}),Object(u.jsx)("h4",{children:"Funds & Petitions"}),Object(u.jsx)("div",{className:M.a.linkContainer,children:i.fundsPetitions.map((function(e){return Object(u.jsx)("a",{href:e.link,children:e.name},e.link)}))}),Object(u.jsx)("h4",{children:"Events"}),Object(u.jsx)("div",{className:M.a.linkContainer,children:i.events.map((function(e){return Object(u.jsx)("a",{href:e.link,children:e.name},e.link)}))})]}),Object(u.jsxs)("section",{children:[Object(u.jsx)("h4",{children:"Comments"}),Object(u.jsx)("div",{children:i.comments.map((function(e){return Object(u.jsxs)("div",{className:M.a.commentContainer,children:[Object(u.jsxs)("h5",{children:[r.isSuperUser&&Object(u.jsxs)("span",{children:[Object(u.jsx)("i",{class:"fas fa-star"}),"\xa0"]}),e.user]}),Object(u.jsx)("p",{children:e.text})]},e.text)}))})]})]})]})};n(19);var U=n(5),R=n.n(U);var B=function(){var e=Object(a.useContext)(p),t=e.currentUser,n=e.posts,s=e.users,i=e.likes,r=function(e,t){return t.find((function(t){return e===t.email}))}(t,s),o=function(e,t){return t.filter((function(t){return t.poster===e}))}(t,n),c=function(e,t,n){var a=n.filter((function(t){return t.userEmail===e}));console.log(a);var s=[];for(var i in a)console.log(a[i]),console.log(a[i].postId),s.push(a[i].postId);return console.log(s),t.filter((function(e){var t=e.id;return s.includes(t)}))}(t,n,i);return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{class:"Row",children:[Object(u.jsx)("div",{align:"center",className:R.a.photo,children:Object(u.jsx)("img",{src:D(r.photo),alt:"Profile"})}),Object(u.jsxs)("div",{align:"center",class:"float-left",className:R.a.user,children:[Object(u.jsxs)("div",{className:R.a.name,children:[r.isSuperUser,Object(u.jsxs)("h1",{children:[" ",Object(u.jsx)("img",{src:"assets/superuser.png",width:"30",alt:"superuser"}),r.name]})]}),Object(u.jsx)("div",{className:R.a.bio,children:r.bio})]})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("h2",{align:"center",children:"BookMarked Posts"}),Object(u.jsx)("div",{className:R.a.posts,children:Object(u.jsx)("div",{class:"grid-container",children:Object(u.jsx)("div",{className:R.a.infoContainer,class:"grid-row",children:Object(u.jsx)("div",{children:c.map((function(e){return Object(u.jsx)("div",{className:R.a.postContainer,children:Object(u.jsx)("a",{href:"/".concat(e.id),children:Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:R.a.itemheader,id:"post-header",children:e.title}),Object(u.jsx)("img",{class:R.a.postImage,src:D(e.images[0]),alt:e.title})]},e.id)})})}))})})})}),Object(u.jsx)("hr",{}),Object(u.jsx)("h2",{align:"center",children:"My Posts"}),Object(u.jsx)("div",{className:R.a.posts,children:Object(u.jsx)("div",{class:"grid-container",children:Object(u.jsx)("div",{className:R.a.infoContainer,class:"grid-row",children:Object(u.jsx)("div",{children:o.map((function(e){return Object(u.jsx)("div",{className:R.a.postContainer,children:Object(u.jsx)("a",{href:"/".concat(e.id),children:Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:R.a.itemheader,id:"post-header",children:e.title}),Object(u.jsx)("img",{class:R.a.postImage,src:D(e.images[0]),alt:e.title})]},e.id)})})}))})})})})]})};var J=function(){return Object(u.jsx)("div",{children:"SignUp"})};var Y=function(){return Object(u.jsx)(o.a,{basename:"/findaid",children:Object(u.jsx)(O,{children:Object(u.jsxs)("div",{className:d.a.container,children:[Object(u.jsx)(S,{}),Object(u.jsx)("main",{className:d.a.content,children:Object(u.jsxs)(c.c,{children:[Object(u.jsx)(c.a,{path:"/login",children:Object(u.jsx)(E,{})}),Object(u.jsx)(c.a,{path:"/signup",children:Object(u.jsx)(J,{})}),Object(u.jsx)(c.a,{path:"/createpost",children:Object(u.jsx)(I,{})}),Object(u.jsx)(c.a,{path:"/profile/:userId?",children:Object(u.jsx)(B,{})}),Object(u.jsx)(c.a,{path:"/:postId",children:Object(u.jsx)(F,{})}),Object(u.jsx)(c.a,{path:"/",children:Object(u.jsx)(L,{})})]})})]})})})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),i(e),r(e)}))};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(Y,{})}),document.getElementById("root")),W()},5:function(e,t,n){e.exports={infoContainer:"Profile_infoContainer__10EjW",header:"Profile_header__2ChJJ",posts:"Profile_posts__rwx78","float-left":"Profile_float-left__1UAoY",itemHeader:"Profile_itemHeader__3uIfp",Row:"Profile_Row__3mo0H",Column:"Profile_Column__1g42-",itemTitle:"Profile_itemTitle__30AtC",postContainer:"Profile_postContainer__3m_xT",photo:"Profile_photo__1MpMV",postImage:"Profile_postImage__RRAIi",id:"Profile_id__1rPxo","grid-container":"Profile_grid-container__21YuG",user:"Profile_user__2YOKO",name:"Profile_name__fJMw_"}}},[[43,1,2]]]);
//# sourceMappingURL=main.c50e48d3.chunk.js.map