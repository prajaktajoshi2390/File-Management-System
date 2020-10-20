(this.webpackJsonpfileuploadapp=this.webpackJsonpfileuploadapp||[]).push([[0],{124:function(e,a,t){e.exports=t(161)},129:function(e,a,t){},160:function(e,a,t){},161:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(11),i=t.n(r),o=(t(129),t(37)),c=t(7),s=t(74),u=t(14),d=t(78),m=t(3),p=t(165),f=t(17),h=t(230),g=t(220),E=t(224),w=t(111),v=t(104),b=t.n(v),O=t(105),S=t.n(O),j=t(217),k=t(225),y=t(226),D=t(107),N=t.n(D),T=t(106),x=t.n(T),U=t(211),C=t(214),F=t(97),P=t.n(F),z=t(69),B=function(e){return n.createElement(U.a,{position:"fixed",className:Object(m.a)(e.classes.appBar,Object(o.a)({},e.classes.appBarShift,e.open))},n.createElement(C.a,null,e.isAuthed?n.createElement(w.a,{color:"inherit","aria-label":"open drawer",onClick:e.handleDrawerOpen,edge:"start",className:Object(m.a)(e.classes.menuButton,e.open&&e.classes.hide)},n.createElement(P.a,null)):null,n.createElement(z.a,{variant:"h6",noWrap:!0},"My File Manager"),""!==e.username?n.createElement("div",null,"Welcome ",e.username):null))},I=t(20),L=t(98),W=t(33),q=t.n(W),A=function(e){var a=l.a.useState([]),t=Object(c.a)(a,2),r=t[0],i=t[1],o=[{field:"fileDescription",headerName:"File Name",width:150}].concat(Object(I.a)("admin"===e.username?[{field:"username",headerName:"Username",width:100}]:[]),[{field:"fileUpdatedTime",headerName:"Last Modified",width:250},{field:"fileUploadedTime",headerName:"Last Modified",width:250},{field:"download",headerName:"Download",width:150,renderCell:function(e){return l.a.createElement("strong",null,l.a.createElement("span",null,"Download"))}},{field:"delete",headerName:"Delete",width:150,renderCell:function(e){return l.a.createElement("strong",null,l.a.createElement("span",null,"Delete"))}}]);Object(n.useEffect)((function(){"admin"===e.username?q()({method:"Get",url:"http://localhost:8000/getFullFileList"}).then((function(e){console.log(e),e.data?i(e.data):i([])})).catch((function(e){i([]),console.log(e)})):""!==e.username&&q()({method:"POST",url:"http://localhost:8000/getFileList",data:{username:e.username}}).then((function(e){console.log(e),e.data?i(e.data):i([])})).catch((function(e){i([]),console.log(e)}))}),[e.username]);return l.a.createElement("div",{style:{height:400,width:"90%"}},l.a.createElement(L.a,{rows:r,columns:o,pageSize:5,onCellClick:function(a){return function(a,t){var n=a.getValue("fileDescription");"delete"===a.field?q.a.put("https://h1wipggwz9.execute-api.us-east-2.amazonaws.com/Dev",{filename:n},{headers:{Authorization:t}}).then((function(a){q()({method:"POST",url:"http://localhost:8000/deleteFile",data:{username:e.username,filename:n}}).then((function(e){console.log(e),alert("File Deleted successfully");var a=r.filter((function(e){return e.fileDescription!==n}));i(a)})).catch((function(e){console.log(e)}))})):"download"===a.field&&q.a.put("https://ug1bk5i0i1.execute-api.us-east-2.amazonaws.com/Dev",{filename:n},{headers:{Authorization:t}}).then((function(e){alert("File Downloaded successfully");var a=document.createElement("a");a.href=e.data,a.download=n,a.target="_blank",a.download=n,a.click()}))}(a,e.accessToken)}}))},M=t(108),R=function(e){var a=Object(M.a)({onDrop:function(a){a[0].size>1e7&&alert("File size > 10MB is not allowed");var t=a[0].name,n="https://zf1jtpxmd0.execute-api.us-east-2.amazonaws.com/Dev?fileName="+a[0].name+"&fileType="+a[0].type+"&fileKey="+t;q.a.get(n,{headers:{Authorization:e.accessToken}}).then((function(t){var n=t.data.fileUploadURL;q()({method:"PUT",url:n,data:a[0],headers:{"Content-Type":"multipart/form-data"}}).then((function(t){q()({method:"POST",url:"http://localhost:8000/fileUpload",data:{username:e.username,fileUploadedTime:(new Date).toString(),fileUpdatedTime:(new Date).toString(),fileDescription:a[0].name}}).then((function(e){console.log(e),alert("File Uploadeded successfully")})).catch((function(e){console.log(e),alert("File Uploadeded successfully but entry is not added to database")}))})).catch((function(e){alert("Error")}))}))}}),t=a.getRootProps,n=a.getInputProps,r=a.isDragActive;return l.a.createElement("div",null,l.a.createElement("div",t(),l.a.createElement("input",n()),r?l.a.createElement("p",null,"Drop the files here ..."):l.a.createElement("p",null,"Drag 'n' drop some files here, or click to select files")))},H=t(223),G=t(68),J=t(231),K=t(222),V=t(228),X=t(103),_=t.n(X),$=t(221),Q=function(e){var a=l.a.useState(""),t=Object(c.a)(a,2),n=t[0],r=t[1],i=l.a.useState(""),o=Object(c.a)(i,2),s=o[0],u=o[1],d=l.a.useState(""),m=Object(c.a)(d,2)[1],f=l.a.useState(!1),h=Object(c.a)(f,2),g=h[0],E=h[1],w=Object(p.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),v=function(a){m(a.idToken.jwtToken),E(!1),e.onSuccess(a.idToken.jwtToken,n)},b=function(e){E(!0)},O=new G.c({UserPoolId:"us-east-2_kXxKhhmfs",ClientId:"1e67eu8mqp1c51rvgb7qaoq5j9"}),S=w();return l.a.createElement("div",null,l.a.createElement($.a,{component:"main",maxWidth:"xs"},l.a.createElement(K.a,null),l.a.createElement("div",{className:S.paper},l.a.createElement(J.a,{className:S.avatar},l.a.createElement(_.a,null)),l.a.createElement(z.a,{component:"h1",variant:"h5"},"Sign in"),l.a.createElement("form",{className:S.form,noValidate:!0},l.a.createElement(V.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Username",autoFocus:!0,onChange:function(e){return r(e.target.value)}}),l.a.createElement(V.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Password",type:"password",onChange:function(e){return u(e.target.value)}}),l.a.createElement(H.a,{fullWidth:!0,variant:"contained",color:"primary",className:S.submit,onClick:function(){var e=new G.b({Username:n,Pool:O}),a=new G.a({Username:n,Password:s});e.authenticateUser(a,{onSuccess:v,onFailure:b,newPasswordRequired:function(a,t){console.log("newPasswordRequired"),console.log(a),a.email="test@abc.com",e.completeNewPasswordChallenge(s+"X",a,void 0)}})}},"Sign In"))),g?l.a.createElement("p",null,"Invalid Credentials"):null))},Y=t(22),Z=Object(Y.a)({}),ee=Object(p.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(s.a)(Object(s.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}})),ae=function(){var e=ee(),a=Object(f.a)(),t=l.a.useState(!1),r=Object(c.a)(t,2),i=r[0],s=r[1],p=l.a.useState(!1),v=Object(c.a)(p,2),O=v[0],D=v[1],T=l.a.useState(""),U=Object(c.a)(T,2),C=U[0],F=U[1],P=l.a.useState(""),z=Object(c.a)(P,2),I=z[0],L=z[1];Object(n.useEffect)((function(){""!==C&&(D(!0),Z.push("list"),s(!0))}),[C]);return l.a.createElement(u.b,{history:Z},l.a.createElement("div",{className:e.root},l.a.createElement(B,{open:i,classes:e,handleDrawerOpen:function(){s(!0)},isAuthed:O,username:I}),l.a.createElement(h.a,{className:e.drawer,variant:"persistent",anchor:"left",open:i,classes:{paper:e.drawerPaper}},l.a.createElement("div",{className:e.drawerHeader},l.a.createElement(w.a,{onClick:function(){s(!1)}},"ltr"===a.direction?l.a.createElement(b.a,null):l.a.createElement(S.a,null))),l.a.createElement(E.a,null),l.a.createElement(g.a,null,l.a.createElement(j.a,{button:!0,component:d.a,to:"/list"},l.a.createElement(k.a,null,l.a.createElement(x.a,null)),l.a.createElement(y.a,null,"My Files")),"admin"!==I?l.a.createElement(j.a,{button:!0,component:d.a,to:"/upload"},l.a.createElement(k.a,null,l.a.createElement(N.a,null)),l.a.createElement(y.a,null,"Upload File")):null),l.a.createElement(E.a,null)),l.a.createElement("div",{className:Object(m.a)(e.content,Object(o.a)({},e.contentShift,i))},l.a.createElement("div",{className:e.drawerHeader}),l.a.createElement(u.a,{exact:!0,path:"/",component:function(){return l.a.createElement(Q,{onSuccess:function(e,a){return function(e,a){F(e),L(a)}(e,a)}})}}),l.a.createElement(u.a,{path:"/list",component:function(){return l.a.createElement(A,{accessToken:C,username:I})}}),l.a.createElement(u.a,{path:"/upload",component:function(){return l.a.createElement(R,{accessToken:C,username:I})}}))))};t(159),t(160);var te=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(ae,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[124,1,2]]]);
//# sourceMappingURL=main.6ca2a666.chunk.js.map