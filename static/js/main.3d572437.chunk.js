(this.webpackJsonpfindaid=this.webpackJsonpfindaid||[]).push([[0],{11:function(e,t,n){e.exports={header:"Profile_header__2ChJJ",itemHeader:"Profile_itemHeader__3uIfp",Row:"Profile_Row__3mo0H",itemTitle:"Profile_itemTitle__30AtC",infoContainer:"Profile_infoContainer__10EjW",postContainer:"Profile_postContainer__3m_xT",postLink:"Profile_postLink__2Z9u7",photo:"Profile_photo__1MpMV",postImage:"Profile_postImage__RRAIi",user:"Profile_user__2YOKO",name:"Profile_name__fJMw_"}},16:function(e,t,n){e.exports={header:"Header_header__3mObx",headerItem:"Header_headerItem__3qR-F"}},21:function(e,t,n){e.exports={container:"App_container__6j1zw",content:"App_content__1dlDM"}},35:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(25),o=n.n(i),r=(n(35),n(8)),c=n(2),l=n(21),d=n.n(l),j=n(12),h=n(3);function m(e){var t=(new Date).valueOf().toString(36);return function(e){for(var t=(new Date).getTime(),n=0;n<1e7&&!((new Date).getTime()-t>e);n++);}(1),e+t}var u={currentUser:"bernie.sanders@gmail.com",users:[{email:"bernie.sanders@gmail.com",password:"vermontmaplesyrup",name:"Bernie Sanders",bio:"I am once again asking for your financial support.",photo:"/assets/berniesanders.jpg",isSuperUser:!0},{email:"isabelle.smyth@gmail.com",password:"bceagles",name:"Isabelle Smyth",bio:"Looking to help my community BC 21",photo:"/assets/isabelle.jpg",isSuperUser:!1},{email:"magicjohnson@lakers.com",password:"dunksonly",name:"Magic Johnson",bio:"I like dunks and a good party.",photo:"/assets/magic.jpg",isSuperUser:!1},{email:"joysonnn@gmail.com",password:"ilovedogs",name:"Joy Son",bio:"I am a sophomore at BC who wants to stay informed on environmental racism in the US",photo:"/assets/joy.jpg"}],posts:[{id:"357458",poster:"bernie.sanders@gmail.com",title:"Landfill in Underprivileged Area",location:"Atlanta, GA",description:"A new landfill site has been marked in an impoverished neighborhood without the community members' consent.",images:["/assets/landfill.jpg","/assets/atlantaneighborhood.jpg"],resourcesInfo:[{name:"Landfill Zoning Laws",link:"//www.atlantaga.gov/government/departments/city-planning/office-of-zoning-development/zoning"}],fundsPetitions:[{name:"Stop the Landfill Fund",link:"//www.stopthelandfill.com/donate.html"}],events:[{name:"Town Hall Meeting",link:"//www.atlantadowntown.com/cap/about/town-hall-meetings"}],comments:[{user:"bernie.sanders@gmail.com",text:"This is outrageous! We must rally for change."},{user:"isabelle.smyth@gmail.com",text:"I agree. This is not okay. I am planning to attend the town hall meeting."}]},{id:"357459",poster:"bernie.sanders@gmail.com",title:"Risky Byhalia Connection Pipeline Threatens TN & MS Health, Water Supply",location:"Memphis, TN",description:"In December 2019, Plains All-American and Valero pipeline companies announced plans to build the 49-mile Byhalia Pipeline through southwestern Tennessee and northwestern Mississippi. ",images:["/assets/pipeline.jpg","/assets/coalpollution.jpg","/assets/tennesseestreet.jpg"],resourcesInfo:[{name:"FracTracker",link:"//www.fractracker.org/2021/03/risky-byhalia-pipeline-threatens-tennessee-mississippi-health-and-water-supply/"}],fundsPetitions:[{name:"No Oil In Our Soil",link:"//www.ipetitions.com/petition/no-oil-in-our-soil"}],events:[],comments:[{user:"isabelle.smyth@gmail.com",text:"As a resident of Tennessee, I've been very frustrated with the government's slow response."},{user:"joysonnn@gmail.com",text:"Will definitely be signing the petition!"}]},{id:"902102",poster:"magic@lakers.com",title:"Silverback Gorillas escape from the zoo.. again",location:"Gardena, CA",description:"The mountain silverback encloser at the Gardena zoo has seen another escape. The gorillas went on to rampge the town and cause havok.",images:["/assets/escape.jpg","/assets/monke.jpg","/assets/gorilla.jpg"],resourcesInfo:[{name:"Animal Control",link:"https://www.boston.gov/departments/animal-care-and-control"}],fundsPetitions:[{name:"Increase funding for the zoo",link:"https://www.change.org/p/cincinnati-zoo-justice-for-harambe"}],events:[],comments:[{user:"bernie.sanders@gmail.com",text:"This is an outrage. We demand additional funding for the zoo"}]},{id:"357460",poster:"bernie.sanders@gmail.com",title:"Sugar Burning Causes Pollution and Respiratory Distress",location:"Pahokee, FL",description:"Every October, Florida's sugarcane farmers legally burn all but the sugarcanes in their fields before harvest.",images:["/assets/preharvestburning.jpg","/assets/smokepollution.jpg"],resourcesInfo:[{name:"Black Snow During the Pandemic",link:"//www.wlrn.org/news/2020-12-28/belle-glades-falling-black-snow-is-an-even-greater-concern-as-the-covid-19-pandemic-continues"}],fundsPetitions:[],events:[{name:"Class Action Lawsuit",link:"//www.hbsslaw.com/cases/florida-sugar-cane-burning"}],comments:[{user:"joysonnn@gmail.com",text:"The health issues resulting from the pollution are too evident. Legal action must be taken."}]}],likes:[{datetime:"2020-02-09T22:53:40Z",postId:"357458",userEmail:"bernie.sanders@gmail.com"}]},b=n(0),p=Object(a.createContext)();var O=function(e){var t=Object(a.useState)(u),n=Object(h.a)(t,2),s=n[0],i=n[1],o=Object(a.useState)("bernie.sanders@gmail.com")[0];return Object(b.jsx)(p.Provider,{value:Object(j.a)(Object(j.a)({},s),{},{addComment:function(e,t){for(var n=0;n<s.posts.length;){if(s.posts[n].id===t){s.posts[n].comments=s.posts[n].comments.concat({user:o,text:e});break}n++}i(s)},addPost:function(e,t,n,a,r,c,l,d,h,u){var b={id:m(""),poster:o,title:n,location:a,description:t,images:[e],resourcesInfo:[{name:r,link:c}],fundsPetitions:[{name:l,link:d}],events:[{name:h,link:u}],comments:[]};i(Object(j.a)(Object(j.a)({},s),{},{posts:s.posts.concat(b)}))},addLike:function(e){var t={datetime:(new Date).toISOString(),postId:e,userEmail:o};i(Object(j.a)(Object(j.a)({},s),{},{likes:s.likes.concat(t)}))},removeLike:function(e){i(Object(j.a)(Object(j.a)({},s),{},{likes:s.likes.filter((function(t){return!(t.postId===e&&t.userEmail===o)}))}))}}),children:e.children})},f=n(6),g=n.n(f),x=n(26),v=n(27),_=n(14),k=n(30),C=n(29),w=function(e){Object(k.a)(n,e);var t=Object(C.a)(n);function n(e){var a;return Object(x.a)(this,n),(a=t.call(this,e)).handleDragEnter=a.handleDragEnter.bind(Object(_.a)(a)),a.handleDrop=a.handleDrop.bind(Object(_.a)(a)),a.handleDragOver=a.handleDragOver.bind(Object(_.a)(a)),a.handleDragLeave=a.handleDragLeave.bind(Object(_.a)(a)),a}return Object(v.a)(n,[{key:"handleDrop",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onDrop&&this.props.onDrop(e)}},{key:"handleDragEnter",value:function(e){e.preventDefault(),e.stopPropagation(),this.dragTargetSaved=e.target,this.props.onDragEnter&&this.props.onDragEnter(e)}},{key:"handleDragOver",value:function(e){!1!==e.dataTransfer.types.includes("Files")&&(e.preventDefault(),e.stopPropagation(),this.props.onDragOver&&this.props.onDragOver(e))}},{key:"handleDragLeave",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onDragLeave&&this.dragTargetSaved===e.target&&this.props.onDragLeave(e)}},{key:"render",value:function(){var e=s.a.Children.only(this.props.children);return s.a.cloneElement(e,{onDragEnter:this.handleDragEnter,onDragOver:this.handleDragOver,onDragLeave:this.handleDragLeave,onDrop:this.handleDrop})}}]),n}(a.PureComponent);var P=function(e){var t=Object(a.useState)(!1),n=Object(h.a)(t,2),s=n[0],i=n[1],o=Object(a.useState)(""),r=Object(h.a)(o,2),l=r[0],d=r[1],j=Object(a.useState)(""),m=Object(h.a)(j,2),u=m[0],O=m[1],f=Object(a.useState)(""),x=Object(h.a)(f,2),v=x[0],_=x[1],k=Object(a.useState)(""),C=Object(h.a)(k,2),P=C[0],N=C[1],I=Object(a.useState)(""),y=Object(h.a)(I,2),D=y[0],S=y[1],L=Object(a.useState)(""),T=Object(h.a)(L,2),H=T[0],E=T[1],A=Object(a.useState)(""),F=Object(h.a)(A,2),M=F[0],U=F[1],R=Object(a.useState)(""),B=Object(h.a)(R,2),z=B[0],J=B[1],W=Object(a.useState)(""),Z=Object(h.a)(W,2),Y=Z[0],G=Z[1],q=Object(a.useState)(null),V=Object(h.a)(q,2),K=V[0],X=V[1],Q=Object(a.useState)(""),$=Object(h.a)(Q,2),ee=$[0],te=$[1],ne=Object(c.f)(),ae=Object(a.useContext)(p).addPost;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:g.a.photo,children:[K?Object(b.jsx)("img",{src:K,alt:"New Post"}):Object(b.jsx)("div",{className:g.a.message,children:"Drop your image"}),Object(b.jsx)(w,{onDragEnter:function(e){i(!0)},onDragLeave:function(e){i(!1)},onDrop:function(e){if(!1!==e.dataTransfer.types.includes("Files")){if(e.dataTransfer.files.length>=1){var t=e.dataTransfer.files[0];if(t.size>1e6)return;if(t.type.match(/image.*/)){var n=new FileReader;n.onloadend=function(e){X(e.target.result)},n.readAsDataURL(t)}}i(!1)}},children:Object(b.jsx)("div",{className:[g.a.dropArea,s?g.a.dragging:null].join(" ")})})]}),Object(b.jsxs)("div",{className:g.a.desc,children:[Object(b.jsx)("h5",{children:"Title:"}),Object(b.jsx)("textarea",{placeholder:"...",rows:"2",value:u,onChange:function(e){O(e.target.value)}})]}),Object(b.jsxs)("div",{className:g.a.desc,children:[Object(b.jsx)("h5",{children:"Location:"}),Object(b.jsx)("textarea",{placeholder:"...",rows:"2",value:v,onChange:function(e){_(e.target.value)}})]}),Object(b.jsxs)("div",{className:g.a.desc,children:[Object(b.jsx)("h5",{children:"Description:"}),Object(b.jsx)("textarea",{placeholder:"...",rows:"2",value:l,onChange:function(e){d(e.target.value)}})]}),Object(b.jsxs)("div",{className:g.a.desc,children:[Object(b.jsx)("h5",{children:"Resources & Information name (optional):"}),Object(b.jsx)("textarea",{placeholder:"...",rows:"2",value:D,onChange:function(e){S(e.target.value)}})]}),Object(b.jsxs)("div",{className:g.a.desc,children:[Object(b.jsx)("h5",{children:"Resources & Information link:"}),Object(b.jsx)("textarea",{placeholder:"...",rows:"2",value:P,onChange:function(e){N(e.target.value)}})]}),Object(b.jsxs)("div",{className:g.a.desc,children:[Object(b.jsx)("h5",{children:"Funds & Petitions name (optional):"}),Object(b.jsx)("textarea",{placeholder:"...",rows:"2",value:M,onChange:function(e){U(e.target.value)}})]}),Object(b.jsxs)("div",{className:g.a.desc,children:[Object(b.jsx)("h5",{children:"Funds & Petitions link:"}),Object(b.jsx)("textarea",{placeholder:"...",rows:"2",value:H,onChange:function(e){E(e.target.value)}})]}),Object(b.jsxs)("div",{className:g.a.desc,children:[Object(b.jsx)("h5",{children:"Event name (optional):"}),Object(b.jsx)("textarea",{placeholder:"...",rows:"2",value:Y,onChange:function(e){G(e.target.value)}})]}),Object(b.jsxs)("div",{className:g.a.desc,children:[Object(b.jsx)("h5",{children:"Event link:"}),Object(b.jsx)("textarea",{placeholder:"...",rows:"2",value:z,onChange:function(e){J(e.target.value)}})]}),Object(b.jsx)("div",{className:g.a.error,children:ee}),Object(b.jsxs)("div",{className:g.a.actions,children:[Object(b.jsx)("button",{onClick:function(){ne.push("/")},children:"Cancel"}),Object(b.jsx)("button",{onClick:function(e){e.preventDefault(),K?u?v?l?(ae(K,l,u,v,D,P,M,H,Y,z),ne.push("/"),te("")):te("You need to add a description!"):te("You need to add a location!"):te("You need to add a title!"):te("You need to add a photo!")},children:"Share"})]})]})},N=n(16),I=n.n(N);function y(e){return e.startsWith("/")?"/findaid"+e:e}var D=function(){return Object(b.jsxs)("div",{className:I.a.header,children:[Object(b.jsx)("div",{className:I.a.headerItem,children:Object(b.jsx)(r.b,{to:"/",children:Object(b.jsx)("img",{src:y("/assets/home.svg"),alt:"Home"})})}),Object(b.jsx)("div",{className:I.a.headerItem,children:Object(b.jsxs)(r.b,{to:"/",style:{color:"inherit",textDecoration:"inherit"},children:[Object(b.jsx)("strong",{children:"FindAid"}),"\xa0",Object(b.jsx)("img",{className:I.a.logo,src:y("/findaidlogo.png"),alt:"FindAid logo",width:"35px",height:"35px"})]})}),Object(b.jsx)("div",{className:I.a.headerItem,children:Object(b.jsx)(r.b,{to:"createpost",children:Object(b.jsx)("img",{src:y("/assets/createpost.svg"),alt:"CreatePost"})})}),Object(b.jsx)("div",{className:I.a.headerItem,children:Object(b.jsx)(r.b,{to:"profile",children:Object(b.jsx)("img",{src:y("/assets/profile.svg"),alt:"Profile"})})})]})},S=n(18),L=n(5),T=n.n(L);var H=function(){var e=Object(a.useContext)(p),t=e.posts,n=e.likes,s=e.currentUser,i=e.addLike,o=e.removeLike,c=Object(a.useState)(t),l=Object(h.a)(c,2),d=l[0],m=l[1],u=Object(a.useState)({resourcesInfo:!1,fundsPetitions:!1,events:!1}),O=Object(h.a)(u,2),f=O[0],g=O[1];function x(e){var n=e.target.value,a=Object(j.a)(Object(j.a)({},f),{},Object(S.a)({},n,e.target.checked));g(a);var s=t.filter((function(e){return(!a.resourcesInfo||e.resourcesInfo.length>0)&&(!a.fundsPetitions||e.fundsPetitions.length>0)&&(!a.events||e.events.length>0)}));m(s)}return Object(b.jsxs)("div",{children:[Object(b.jsxs)("section",{id:"filter-container",children:[Object(b.jsx)("input",{className:T.a.search,type:"search",placeholder:"Search title, location, description...",onInput:function(e){return function(e){var n=RegExp("".concat(e.target.value),"i"),a=t.filter((function(e){return n.test(e.title)||n.test(e.location)||n.test(e.description)}));m(a)}(e)}}),Object(b.jsxs)("div",{className:T.a.checkboxContainer,children:[Object(b.jsxs)("div",{className:T.a.checkboxItem,children:[Object(b.jsx)("input",{type:"checkbox",name:"resources-info",value:"resourcesInfo",onInput:function(e){return x(e)}}),Object(b.jsx)("label",{className:T.a.checkboxLabel,htmlFor:"resources-info",children:"has resources or information"})]}),Object(b.jsxs)("div",{className:T.a.checkboxItem,children:[Object(b.jsx)("input",{type:"checkbox",name:"funds-petitions",value:"fundsPetitions",onInput:function(e){return x(e)}}),Object(b.jsx)("label",{className:T.a.checkboxLabel,htmlFor:"funds-petitions",children:"has funds or petitions"})]}),Object(b.jsxs)("div",{className:T.a.checkboxItem,children:[Object(b.jsx)("input",{type:"checkbox",name:"events",value:"events",onInput:function(e){return x(e)}}),Object(b.jsx)("label",{className:T.a.checkboxLabel,htmlFor:"events",children:"has events"})]})]})]}),Object(b.jsx)("section",{id:"post-container",children:d.map((function(e){return Object(b.jsxs)("div",{className:T.a.postContainer,children:[Object(b.jsxs)("div",{className:T.a.itemHeader,children:[n.find((function(t){return t.postId===e.id&&t.userEmail===s}))?Object(b.jsx)("i",{className:"fas fa-bookmark ".concat(T.a.bookmark),onClick:function(t){return n=e.id,void o(n);var n}}):Object(b.jsx)("i",{className:"far fa-bookmark ".concat(T.a.bookmark),onClick:function(t){return n=e.id,void i(n);var n}}),Object(b.jsxs)("div",{className:T.a.itemTitle,children:[Object(b.jsx)("h2",{children:e.title}),Object(b.jsx)("h3",{children:e.location})]})]}),Object(b.jsxs)("div",{className:T.a.infoContainer,children:[Object(b.jsx)("img",{className:T.a.postImage,src:y(e.images[0]),alt:e.title}),Object(b.jsx)("p",{className:T.a.description,children:e.description})]}),Object(b.jsx)(r.b,{className:T.a.learnMore,to:"/".concat(e.id),children:Object(b.jsx)("button",{children:"Learn More"})})]},e.id)}))})]})};var E=function(){return Object(b.jsx)("div",{children:"LogIn"})},A=n(7),F=n.n(A);var M=function(){var e=Object(a.useContext)(p),t=e.posts,n=e.users,s=e.likes,i=e.addComment,o=e.addLike,r=e.removeLike,l=Object(a.useState)(0),d=Object(h.a)(l,2),j=d[0],m=d[1],u=Object(a.useState)(""),O=Object(h.a)(u,2),f=O[0],g=O[1],x=Object(c.g)().postId,v=t.find((function(e){return e.id===x})),_=n.find((function(e){return e.email===v.poster}));return Object(b.jsxs)("div",{className:F.a.postContainer,children:[Object(b.jsxs)("aside",{className:F.a.postInfo,children:[Object(b.jsx)("img",{className:F.a.postImage,src:y(v.images[j]),alt:v.images[j]}),Object(b.jsxs)("div",{className:F.a.scrollContainer,children:[Object(b.jsx)("i",{className:"fas fa-chevron-left ".concat(F.a.scrollPhoto),onClick:function(){var e=j>0?j-1:v.images.length-1;m(e)}}),"\xa0\xa0",Object(b.jsx)("i",{className:"fas fa-chevron-right ".concat(F.a.scrollPhoto),onClick:function(){var e=j<v.images.length-1?j+1:0;m(e)}})]}),Object(b.jsx)("h3",{className:F.a.postTitle,children:v.title}),Object(b.jsx)("h4",{children:v.location}),v.description,s.find((function(e){return e.postId===x&&e.userEmail===_.email}))?Object(b.jsx)("i",{className:"fas fa-bookmark ".concat(F.a.bookmark),onClick:function(){r(x)}}):Object(b.jsx)("i",{className:"far fa-bookmark ".concat(F.a.bookmark),onClick:function(){o(x)}})]}),Object(b.jsxs)("div",{className:F.a.infoContainer,children:[Object(b.jsxs)("section",{children:[Object(b.jsx)("h4",{children:"Resources & Information"}),Object(b.jsx)("div",{className:F.a.linkContainer,children:v.resourcesInfo.map((function(e){return Object(b.jsx)("a",{href:e.link,children:e.name},e.link)}))}),Object(b.jsx)("h4",{children:"Funds & Petitions"}),Object(b.jsx)("div",{className:F.a.linkContainer,children:v.fundsPetitions.map((function(e){return Object(b.jsx)("a",{href:e.link,children:e.name},e.link)}))}),Object(b.jsx)("h4",{children:"Events"}),Object(b.jsx)("div",{className:F.a.linkContainer,children:v.events.map((function(e){return Object(b.jsx)("a",{href:e.link,children:e.name},e.link)}))})]}),Object(b.jsxs)("section",{children:[Object(b.jsx)("h4",{children:"Comments"}),Object(b.jsxs)("div",{children:[v.comments.map((function(e){return Object(b.jsxs)("div",{className:F.a.commentContainer,children:[Object(b.jsxs)("h5",{children:[n.find((function(t){return t.email===e.user})).isSuperUser&&Object(b.jsxs)("span",{children:[Object(b.jsx)("i",{className:"fas fa-star"}),"\xa0"]}),e.user]}),Object(b.jsx)("p",{children:e.text})]},e.text)})),Object(b.jsxs)("form",{className:F.a.addComment,onSubmit:function(e){i(f,v.id),g(""),e.preventDefault()},children:[Object(b.jsx)("input",{type:"text",placeholder:"Add a comment\u2026",value:f,onChange:function(e){return g(e.target.value)}}),f?Object(b.jsx)("button",{type:"submit",children:"Post"}):Object(b.jsx)("button",{type:"submit",disabled:!0,children:"Post"})]})]})]})]})]})};var U=n(11),R=n.n(U);var B=function(){var e=Object(a.useContext)(p),t=e.currentUser,n=e.posts,s=e.users,i=e.likes,o=function(e,t){return t.find((function(t){return e===t.email}))}(t,s),c=function(e,t){return t.filter((function(t){return t.poster===e}))}(t,n),l=function(e,t,n){var a=n.filter((function(t){return t.userEmail===e})),s=[];for(var i in a)s.push(a[i].postId);return t.filter((function(e){var t=e.id;return s.includes(t)}))}(t,n,i);return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{align:"center",className:R.a.photo,children:Object(b.jsx)("img",{src:y(o.photo),alt:"Profile"})}),Object(b.jsxs)("div",{align:"center",className:R.a.user,children:[Object(b.jsx)("div",{className:R.a.name,children:Object(b.jsxs)("h1",{children:[o.isSuperUser&&Object(b.jsxs)("span",{children:[Object(b.jsx)("img",{src:"assets/superuser.png",width:"30",alt:"superuser"}),"\xa0"]}),o.name]})}),Object(b.jsx)("div",{className:R.a.bio,children:o.bio})]})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("h2",{align:"center",children:"Bookmarked Posts"}),Object(b.jsx)("div",{className:R.a.infoContainer,children:l.map((function(e){return Object(b.jsx)("div",{className:R.a.postContainer,children:Object(b.jsx)(r.b,{to:"/".concat(e.id),className:R.a.postLink,children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:e.title}),Object(b.jsx)("img",{className:R.a.postImage,src:y(e.images[0]),alt:e.title})]},e.id)})},e.id)}))}),Object(b.jsx)("hr",{}),Object(b.jsx)("h2",{align:"center",children:"My Posts"}),Object(b.jsx)("div",{className:R.a.infoContainer,children:c.map((function(e){return Object(b.jsx)("div",{className:R.a.postContainer,children:Object(b.jsx)(r.b,{to:"/".concat(e.id),className:R.a.postLink,children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:e.title}),Object(b.jsx)("img",{className:R.a.postImage,src:y(e.images[0]),alt:e.title})]},e.id)})},e.id)}))})]})};var z=function(){return Object(b.jsx)("div",{children:"SignUp"})};var J=function(){return Object(b.jsx)(r.a,{basename:"/findaid",children:Object(b.jsx)(O,{children:Object(b.jsxs)("div",{className:d.a.container,children:[Object(b.jsx)(D,{}),Object(b.jsx)("main",{className:d.a.content,children:Object(b.jsxs)(c.c,{children:[Object(b.jsx)(c.a,{path:"/login",children:Object(b.jsx)(E,{})}),Object(b.jsx)(c.a,{path:"/signup",children:Object(b.jsx)(z,{})}),Object(b.jsx)(c.a,{path:"/createpost",children:Object(b.jsx)(P,{})}),Object(b.jsx)(c.a,{path:"/profile",children:Object(b.jsx)(B,{})}),Object(b.jsx)(c.a,{path:"/:postId",children:Object(b.jsx)(M,{})}),Object(b.jsx)(c.a,{path:"/",children:Object(b.jsx)(H,{})})]})})]})})})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),i(e),o(e)}))};o.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(J,{})}),document.getElementById("root")),W()},5:function(e,t,n){e.exports={search:"Home_search__286En",checkboxContainer:"Home_checkboxContainer__2eSgt",checkboxItem:"Home_checkboxItem__2BUyE",checkboxLabel:"Home_checkboxLabel__1LGtd",postContainer:"Home_postContainer__2Zymp",itemHeader:"Home_itemHeader__eSmwm",bookmark:"Home_bookmark__1qwaN",itemTitle:"Home_itemTitle__J_58V",learnMore:"Home_learnMore__ByxcY",infoContainer:"Home_infoContainer__2WNWI",postImage:"Home_postImage__dM9dT",description:"Home_description__2PYZi"}},6:function(e,t,n){e.exports={photo:"CreatePost_photo__2JIOI",dropArea:"CreatePost_dropArea__wie4-",dragging:"CreatePost_dragging__3_ktR",message:"CreatePost_message__1sxlU",image:"CreatePost_image__30jAs",desc:"CreatePost_desc__1cxex",actions:"CreatePost_actions__1HabL",error:"CreatePost_error__1UcZU",addDesc:"CreatePost_addDesc__3kK-l"}},7:function(e,t,n){e.exports={postContainer:"Post_postContainer__2H-c_",postInfo:"Post_postInfo__3ZlBi",postImage:"Post_postImage__1hEu_",scrollContainer:"Post_scrollContainer__cTZs3",scrollPhoto:"Post_scrollPhoto__gHPzW",postTitle:"Post_postTitle__SFPlh",infoContainer:"Post_infoContainer__16b0I",bookmark:"Post_bookmark__3JMXx",linkContainer:"Post_linkContainer__1m1so",commentContainer:"Post_commentContainer__28hdX",addComment:"Post_addComment__aGSqH"}}},[[42,1,2]]]);
//# sourceMappingURL=main.3d572437.chunk.js.map