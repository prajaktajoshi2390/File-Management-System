(this.webpackJsonpfileuploadapp=this.webpackJsonpfileuploadapp||[]).push([[0],{124:function(e,a,t){e.exports=t(161)},129:function(e,a,t){},160:function(e,a,t){},161:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),i=t.n(l),o=(t(129),t(37)),c=t(7),s=t(74),u=t(14),m=t(78),d=t(3),p=t(165),f=t(17),h=t(230),g=t(220),w=t(224),E=t(111),v=t(104),b=t.n(v),O=t(105),S=t.n(O),j=t(217),k=t(225),y=t(226),D=t(107),N=t.n(D),T=t(106),x=t.n(T),U=t(211),z=t(214),C=t(97),P=t.n(C),F=t(69),B=function(e){return n.createElement(U.a,{position:"fixed",className:Object(d.a)(e.classes.appBar,Object(o.a)({},e.classes.appBarShift,e.open))},n.createElement(z.a,null,e.isAuthed?n.createElement(E.a,{color:"inherit","aria-label":"open drawer",onClick:e.handleDrawerOpen,edge:"start",className:Object(d.a)(e.classes.menuButton,e.open&&e.classes.hide)},n.createElement(P.a,null)):null,n.createElement(F.a,{variant:"h6",noWrap:!0},"My File Manager"),""!==e.username?n.createElement("div",null,"Welcome ",e.username):null))},I=t(20),W=t(98),q=t(33),A=t.n(q),M=function(e){var a=r.a.useState([]),t=Object(c.a)(a,2),l=t[0],i=t[1],o=[{field:"fileDescription",headerName:"File Name",width:150}].concat(Object(I.a)("admin"===e.username?[{field:"username",headerName:"Username",width:100}]:[]),[{field:"fileUpdatedTime",headerName:"Last Modified",width:250},{field:"fileUploadedTime",headerName:"Last Modified",width:250},{field:"download",headerName:"Download",width:150,renderCell:function(e){return r.a.createElement("strong",null,r.a.createElement("span",null,"Download"))}},{field:"delete",headerName:"Delete",width:150,renderCell:function(e){return r.a.createElement("strong",null,r.a.createElement("span",null,"Delete"))}}]);Object(n.useEffect)((function(){"admin"===e.username?A()({method:"Get",url:"ec2-18-219-55-194.us-east-2.compute.amazonaws.com"}).then((function(e){console.log(e),e.data?i(e.data):i([])})).catch((function(e){i([]),console.log(e)})):""!==e.username&&A()({method:"POST",url:"ec2-18-219-55-194.us-east-2.compute.amazonaws.com",data:{username:e.username}}).then((function(e){console.log(e),e.data?i(e.data):i([])})).catch((function(e){i([]),console.log(e)}))}),[e.username]);return r.a.createElement("div",{style:{height:400,width:"90%"}},r.a.createElement(W.a,{rows:l,columns:o,pageSize:5,onCellClick:function(a){return function(a,t){var n=a.getValue("fileDescription");"delete"===a.field?A.a.put("https://h1wipggwz9.execute-api.us-east-2.amazonaws.com/Dev",{filename:n},{headers:{Authorization:t}}).then((function(a){A()({method:"POST",url:"ec2-18-219-55-194.us-east-2.compute.amazonaws.com",data:{username:e.username,filename:n}}).then((function(e){console.log(e),alert("File Deleted successfully");var a=l.filter((function(e){return e.fileDescription!==n}));i(a)})).catch((function(e){console.log(e)}))})):"download"===a.field&&A.a.put("https://ug1bk5i0i1.execute-api.us-east-2.amazonaws.com/Dev",{filename:n},{headers:{Authorization:t}}).then((function(e){alert("File Downloaded successfully");var a=document.createElement("a");a.href=e.data,a.download=n,a.target="_blank",a.download=n,a.click()}))}(a,e.accessToken)}}))},L=t(108),R=function(e){var a=Object(L.a)({onDrop:function(a){a[0].size>1e7&&alert("File size > 10MB is not allowed");var t=a[0].name,n="https://zf1jtpxmd0.execute-api.us-east-2.amazonaws.com/Dev?fileName="+a[0].name+"&fileType="+a[0].type+"&fileKey="+t;A.a.get(n,{headers:{Authorization:e.accessToken}}).then((function(t){var n=t.data.fileUploadURL;A()({method:"PUT",url:n,data:a[0],headers:{"Content-Type":"multipart/form-data"}}).then((function(t){A()({method:"POST",url:"ec2-18-219-55-194.us-east-2.compute.amazonaws.com",data:{username:e.username,fileUploadedTime:(new Date).toString(),fileUpdatedTime:(new Date).toString(),fileDescription:a[0].name}}).then((function(e){console.log(e),alert("File Uploadeded successfully")})).catch((function(e){console.log(e),alert("File Uploadeded successfully but entry is not added to database")}))})).catch((function(e){alert("Error")}))}))}}),t=a.getRootProps,n=a.getInputProps,l=a.isDragActive;return r.a.createElement("div",null,r.a.createElement("div",t(),r.a.createElement("input",n()),l?r.a.createElement("p",null,"Drop the files here ..."):r.a.createElement("p",null,"Drag 'n' drop some files here, or click to select files")))},H=t(223),G=t(68),J=t(231),K=t(222),V=t(228),X=t(103),_=t.n(X),$=t(221),Q=function(e){var a=r.a.useState(""),t=Object(c.a)(a,2),n=t[0],l=t[1],i=r.a.useState(""),o=Object(c.a)(i,2),s=o[0],u=o[1],m=r.a.useState(""),d=Object(c.a)(m,2)[1],f=r.a.useState(!1),h=Object(c.a)(f,2),g=h[0],w=h[1],E=Object(p.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),v=function(a){d(a.idToken.jwtToken),w(!1),e.onSuccess(a.idToken.jwtToken,n)},b=function(e){w(!0)},O=new G.c({UserPoolId:"us-east-2_kXxKhhmfs",ClientId:"1e67eu8mqp1c51rvgb7qaoq5j9"}),S=E();return r.a.createElement("div",null,r.a.createElement($.a,{component:"main",maxWidth:"xs"},r.a.createElement(K.a,null),r.a.createElement("div",{className:S.paper},r.a.createElement(J.a,{className:S.avatar},r.a.createElement(_.a,null)),r.a.createElement(F.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:S.form,noValidate:!0},r.a.createElement(V.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Username",autoFocus:!0,onChange:function(e){return l(e.target.value)}}),r.a.createElement(V.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Password",type:"password",onChange:function(e){return u(e.target.value)}}),r.a.createElement(H.a,{fullWidth:!0,variant:"contained",color:"primary",className:S.submit,onClick:function(){var e=new G.b({Username:n,Pool:O}),a=new G.a({Username:n,Password:s});e.authenticateUser(a,{onSuccess:v,onFailure:b,newPasswordRequired:function(a,t){console.log("newPasswordRequired"),console.log(a),a.email="test@abc.com",e.completeNewPasswordChallenge(s+"X",a,void 0)}})}},"Sign In"))),g?r.a.createElement("p",null,"Invalid Credentials"):null))},Y=t(22),Z=Object(Y.a)({}),ee=Object(p.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(s.a)(Object(s.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}})),ae=function(){var e=ee(),a=Object(f.a)(),t=r.a.useState(!1),l=Object(c.a)(t,2),i=l[0],s=l[1],p=r.a.useState(!1),v=Object(c.a)(p,2),O=v[0],D=v[1],T=r.a.useState(""),U=Object(c.a)(T,2),z=U[0],C=U[1],P=r.a.useState(""),F=Object(c.a)(P,2),I=F[0],W=F[1];Object(n.useEffect)((function(){""!==z&&(D(!0),Z.push("list"),s(!0))}),[z]);return r.a.createElement(u.b,{history:Z},r.a.createElement("div",{className:e.root},r.a.createElement(B,{open:i,classes:e,handleDrawerOpen:function(){s(!0)},isAuthed:O,username:I}),r.a.createElement(h.a,{className:e.drawer,variant:"persistent",anchor:"left",open:i,classes:{paper:e.drawerPaper}},r.a.createElement("div",{className:e.drawerHeader},r.a.createElement(E.a,{onClick:function(){s(!1)}},"ltr"===a.direction?r.a.createElement(b.a,null):r.a.createElement(S.a,null))),r.a.createElement(w.a,null),r.a.createElement(g.a,null,r.a.createElement(j.a,{button:!0,component:m.a,to:"/list"},r.a.createElement(k.a,null,r.a.createElement(x.a,null)),r.a.createElement(y.a,null,"My Files")),"admin"!==I?r.a.createElement(j.a,{button:!0,component:m.a,to:"/upload"},r.a.createElement(k.a,null,r.a.createElement(N.a,null)),r.a.createElement(y.a,null,"Upload File")):null),r.a.createElement(w.a,null)),r.a.createElement("div",{className:Object(d.a)(e.content,Object(o.a)({},e.contentShift,i))},r.a.createElement("div",{className:e.drawerHeader}),r.a.createElement(u.a,{exact:!0,path:"/",component:function(){return r.a.createElement(Q,{onSuccess:function(e,a){return function(e,a){C(e),W(a)}(e,a)}})}}),r.a.createElement(u.a,{path:"/list",component:function(){return r.a.createElement(M,{accessToken:z,username:I})}}),r.a.createElement(u.a,{path:"/upload",component:function(){return r.a.createElement(R,{accessToken:z,username:I})}}))))};t(159),t(160);var te=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(ae,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[124,1,2]]]);
//# sourceMappingURL=main.e3c1276c.chunk.js.map