(this["webpackJsonpface-recognition"]=this["webpackJsonpface-recognition"]||[]).push([[0],{106:function(e,t,n){},374:function(e,t,n){},375:function(e,t,n){},376:function(e,t,n){},377:function(e,t,n){},379:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n(9),i=n.n(s),c=n(53),o=n.n(c),r=(n(106),n(25)),l=n(26),d=n(28),h=n(27),b=n(99),u=n.n(b),m=n(54),p=n.n(m),j=(n(374),function(e){var t=e.imageUrl,n=e.box;return Object(a.jsx)("div",{className:"center ma",children:Object(a.jsxs)("div",{className:"absolute mt2",children:[Object(a.jsx)("img",{id:"inputimage",alt:"",src:t,width:"500px",heigh:"auto"}),Object(a.jsx)("div",{className:"bounding-box",style:{top:n.topRow,right:n.rightCol,bottom:n.bottomRow,left:n.leftCol}})]})})}),g=function(e){var t=e.onRouteChange;return e.isSignedIn?Object(a.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(a.jsx)("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline pa3 pointer",children:"Sign Out"})}):Object(a.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(a.jsx)("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer",children:"Sign In"}),Object(a.jsx)("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer",children:"Register"})]})},f=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.onSubmitSignIn=function(){fetch("http://localhost:3000/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.signInEmail,password:a.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={signInEmail:"",signInPassword:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.onRouteChange;return Object(a.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(a.jsx)("main",{className:"pa4 black-80",children:Object(a.jsxs)("div",{className:"measure",children:[Object(a.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(a.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Sign In"}),Object(a.jsxs)("div",{className:"mt3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(a.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(a.jsxs)("div",{className:"mv3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})]})]}),Object(a.jsx)("div",{className:"",children:Object(a.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})}),Object(a.jsx)("div",{className:"lh-copy mt3",children:Object(a.jsx)("p",{onClick:function(){return e("register")},className:"f6 link dim black db pointer",children:"Register"})})]})})})}}]),n}(i.a.Component),x=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).onNameChange=function(e){a.setState({name:e.target.value})},a.onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onSubmitSignIn=function(){fetch("http://localhost:3000/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,password:a.state.password,name:a.state.name})}).then((function(e){return e.json()})).then((function(e){e&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={email:"",password:"",name:""},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(a.jsx)("main",{className:"pa4 black-60",children:Object(a.jsxs)("div",{className:"measure",children:[Object(a.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(a.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Register"}),Object(a.jsxs)("div",{className:"mt3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"name",children:"Name"}),Object(a.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange})]}),Object(a.jsxs)("div",{className:"mt3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(a.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(a.jsxs)("div",{className:"mv3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})]})]}),Object(a.jsx)("div",{className:"",children:Object(a.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})})]})})})}}]),n}(i.a.Component),O=n(100),v=n.n(O),w=n.p+"static/media/brain.0e10e660.png",N=(n(375),function(){return Object(a.jsx)("div",{className:"ma4 mt0",children:Object(a.jsx)(v.a,{className:"Tilt br2 shadow",options:{max:35},style:{height:200,width:200},children:Object(a.jsx)("div",{className:"Tilt-inner pa3",children:Object(a.jsx)("img",{style:{paddingTop:"5px"},alt:"logo",src:w})})})})}),C=(n(376),function(e){var t=e.onInputChange,n=e.onSubmit;return Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{className:"f3",children:"Detect faces in your pictures here"}),Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"form center pa4 br3 shadow-5",children:[Object(a.jsx)("input",{className:"f4 pa2 w-70 center",type:"text",onChange:t}),Object(a.jsx)("button",{className:"w-30 grow f4 link ph3 pv2 dib black bg-grey",onClick:n,children:"Detect"})]})})]})}),y=function(e){var t=e.name,n=e.entries;return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"white f3",children:"".concat(t,", your current entry count is...")}),Object(a.jsx)("div",{className:"white f2",children:n})]})},S=(n(377),new p.a.App({apiKey:"257d5c72eadd4fcbb7636e8d0da6e3ef"})),k={particles:{number:{value:40,density:{enable:!0,value_area:800}}}},I=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputimage"),a=Number(n.width),s=Number(n.height);return{leftCol:t.left_col*a,topRow:t.top_row*s,rightCol:a-t.right_col*a,bottomRow:s-t.bottom_row*s}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),S.models.predict(p.a.FACE_DETECT_MODEL,e.state.input).then((function(t){console.log("hi",t),t&&fetch("http://localhost:3000/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"home"===t?e.setState({isSignedIn:!1}):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,n=e.imageUrl,s=e.route,i=e.box;return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(u.a,{className:"particles",params:k}),Object(a.jsx)(g,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===s?Object(a.jsxs)("div",{children:[Object(a.jsx)(N,{}),Object(a.jsx)(y,{name:this.state.user.name,entries:this.state.user.entries}),Object(a.jsx)(C,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),Object(a.jsx)(j,{box:i,imageUrl:n})]}):"signin"===s?Object(a.jsx)(f,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):Object(a.jsx)(x,{loadUser:this.loadUser,onRouteChange:this.onRouteChange})]})}}]),n}(s.Component),R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,380)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))};n(378);o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(I,{})}),document.getElementById("root")),R()}},[[379,1,2]]]);
//# sourceMappingURL=main.81da4ace.chunk.js.map