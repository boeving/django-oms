webpackJsonp([7],{"/pPl":function(t,e,a){"use strict";function i(t){a("b+pV")}Object.defineProperty(e,"__esModule",{value:!0});var s=a("Dd8w"),n=a.n(s),o=a("ZTLr"),c=a("nSkA"),r=a("QmSG"),l=a("Xoog"),u=a.n(l),d=a("vMJZ"),p=a("1n3Z"),m=a("NYxO"),_=a("0xDb"),h={components:{VueMarkdown:u.a,BackToTop:p.a},data:function(){return{route_path:this.$route.path.split("/"),ticketid:this.$route.params.ticketid,ticket_id:"",ticketData:{},commentData:{},enclosureData:{},apiurl:r.apiUrl,commentForm:{ticket:"",create_user:localStorage.getItem("username"),content:"【问题处理】"},enclosureForm:{ticket:"",create_user:localStorage.getItem("username"),file:""},rowdata:{ticket_status:1,action_user:"",edit_user:""},count:0,toolbars:{preview:!0,bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,ol:!0,help:!0},users:[],BackToTopStyle:{right:"50px",bottom:"50px",width:"40px",height:"40px","border-radius":"4px","line-height":"45px",background:"#a2fdff"},workticketlist_btn_edit:!1,uploadurl:r.uploadurl,TICKET_STATUS_TEXT:{0:"未接收",1:"正在处理",2:"已解决"},TICKET_STATUS_TYPE:{0:"danger",1:"success",2:"info"},showinput:!1,radio_status:"0",mailcontent:"",sendnotice:!1}},computed:n()({},Object(m.b)(["role","elements"])),created:function(){this.workticketlist_btn_edit=this.elements["编辑工单-编辑工单按钮"],this.fetchData(),this.CommentData(),this.EnclosureData(),this.getTicketUsers()},methods:{fetchData:function(){var t=this,e={ticketid:this.ticketid};Object(o.f)(e).then(function(e){t.ticketData=e.data[0],t.ticket_id=t.ticketData.id,t.rowdata.action_user=t.ticketData.action_user,t.rowdata.edit_user=t.ticketData.edit_user})},CommentData:function(){var t=this,e={ticket__ticketid:this.ticketid};Object(o.c)(e).then(function(e){t.commentData=e.data}),this.commentForm.content=""},EnclosureData:function(){var t=this,e={ticket__ticketid:this.ticketid};Object(o.d)(e).then(function(e){t.enclosureData=e.data,t.count=e.data.length})},deleteEnclosure:function(t){Object(o.a)(t),setTimeout(this.EnclosureData,1e3)},submitForm:function(t){var e=this;this.$confirm("你的操作即将提交，提交完成后会立即跳转到工单列表页面!","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(t){if(e.commentForm.ticket=e.ticket_id,e.rowdata.edit_user=e.commentForm.create_user,"1"===e.radio_status){e.commentForm.content="【工单状态变化】工单被"+e.commentForm.create_user+"重新指派给"+e.rowdata.action_user+","+e.mailcontent;var a={action_user:e.rowdata.action_user,title:"【工单更换指派人】"+e.ticketData.title,message:"回复人: "+e.commentForm.create_user+"\n指派人: "+e.rowdata.action_user+"\n工单地址: "+window.location.href};Object(c.h)(a)}else if("2"===e.radio_status){e.rowdata.ticket_status=e.ticketData.ticket_status=e.radio_status,e.commentForm.content="【工单状态变化】工单被"+e.commentForm.create_user+"关闭！"+e.mailcontent;var i={action_user:e.ticketData.create_user,title:"【工单处理完成】"+e.ticketData.title,message:"回复人: "+e.commentForm.create_user+"\n指派人: "+e.ticketData.action_user+"\n工单地址: "+window.location.href};Object(c.h)(i)}else if(e.commentForm.content="【问题处理】"+e.mailcontent,e.sendnotice){var s={action_user:e.ticketData.create_user,title:"【工单有新回复】"+e.ticketData.title,message:"回复人: "+e.commentForm.create_user+"\n指派人: "+e.ticketData.action_user+"\n工单地址: "+window.location.href};Object(c.h)(s)}Object(o.h)(e.commentForm).then(function(t){e.patchForm(e.rowdata),e.$router.push("/worktickets/workticket")})}).catch(function(){e.$message({type:"error",message:"已取消本次操作"})})},patchForm:function(t){Object(o.g)(this.ticket_id,t)},handleSuccess:function(t,e){var a=this,i=new FormData;i.append("username",this.enclosureForm.create_user),i.append("file",e.raw),i.append("create_time",Object(_.a)(e.uid)),i.append("type",e.raw.type),i.append("archive",this.route_path[1]),Object(c.i)(i).then(function(t){a.enclosureForm.file=t.data.filepath,a.enclosureForm.ticket=a.ticket_id,Object(o.i)(a.enclosureForm),setTimeout(a.EnclosureData,1e3),"Created"===t.statusText&&a.$message({type:"success",message:"恭喜你，上传成功"})}).catch(function(t){a.$message.error("上传失败"),a.$refs.upload.clearFiles(),console.log(t)})},imgAdd:function(t,e){var a=this.$refs.md,i=new FormData;i.append("username",this.username),i.append("file",e),i.append("create_time",Object(_.a)(e.lastModified)),i.append("type",e.type),i.append("archive",this.route_path[1]),Object(c.i)(i).then(function(e){a.$imglst2Url([[t,e.data.file]])})},getTicketUsers:function(){var t=this;Object(d.f)().then(function(e){t.users=e.data})}}},v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[a("el-card",[a("div",{staticClass:"workticket"},[a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("a",{staticClass:"title"},[t._v(t._s(t.ticketData.title))]),t._v(" "),a("hr",{staticClass:"heng"}),t._v(" "),a("div",{staticClass:"appendInfo"},[a("a",{staticClass:"ticketinfo create_user"},[a("span",{staticClass:"han"},[t._v("\n                              工单创建时间：")]),t._v(t._s(t._f("parseDate")(t.ticketData.create_time)))]),t._v(" "),a("a",{staticClass:"ticketinfo create_user"},[a("span",{staticClass:"han"},[a("a",{staticClass:"shu"}),t._v("\n                              工单发起人：")]),t._v(t._s(t.ticketData.create_user))]),t._v(" "),a("a",{staticClass:"ticketinfo action_user"},[a("span",{staticClass:"han"},[a("a",{staticClass:"shu"}),t._v("\n                             工单指派者：")]),t._v(t._s(t.ticketData.action_user))]),t._v(" "),0!=t.ticketData.ticket_status?a("a",{staticClass:"ticketinfo action_user"},[a("a",{staticClass:"shu"}),t._v(" "),a("span",{staticClass:"han"},[t._v("最新回复人：")]),t._v(t._s(t.ticketData.edit_user))]):t._e(),t._v(" "),a("a",{staticClass:"shu"}),t._v(" "),a("span",{staticClass:"han"},[t._v("工单类型：")]),t._v(" "),a("a",[t._v(t._s(t.ticketData.type))]),t._v(" "),a("a",{staticClass:"shu"}),t._v(" "),a("span",{staticClass:"han"},[t._v("工单当前状态：")]),t._v(" "),a("el-tag",{attrs:{type:t.TICKET_STATUS_TYPE[t.ticketData.ticket_status]}},[t._v("\n              "+t._s(t.TICKET_STATUS_TEXT[t.ticketData.ticket_status])+"\n            ")])],1),t._v(" "),!t.workticketlist_btn_edit&&"super"!==t.role||2==t.ticketData.ticket_status?t._e():a("div",{staticClass:"appendInfo"},[a("span",{staticClass:"han"},[t._v("工单操作：")]),t._v(" "),t.showinput?t._e():a("el-button",{attrs:{type:"success",size:"small"},on:{click:function(e){t.showinput=!0}}},[t._v("编辑")]),t._v(" "),t.showinput?a("el-button",{attrs:{type:"warning",size:"small"},on:{click:function(e){t.showinput=!1}}},[t._v("收起")]):t._e(),t._v(" "),t.showinput?a("div",{staticClass:"action"},[a("el-radio-group",{model:{value:t.radio_status,callback:function(e){t.radio_status=e},expression:"radio_status"}},[a("el-radio",{attrs:{label:"0"}},[t._v("不操作")]),t._v(" "),a("el-radio",{attrs:{label:"2"}},[t._v("关闭工单")]),t._v(" "),a("el-radio",{attrs:{label:"1"}},[t._v("更改指派人")])],1),t._v(" "),1==t.radio_status?a("div",{staticClass:"action"},[a("el-select",{attrs:{filterable:"",placeholder:"请选择指派人"},model:{value:t.rowdata.action_user,callback:function(e){t.$set(t.rowdata,"action_user",e)},expression:"rowdata.action_user"}},t._l(t.users,function(t){return a("el-option",{key:t.id,attrs:{value:t.username}})}))],1):t._e(),t._v(" "),a("a",{staticClass:"tips",staticStyle:{display:"block",margin:"5px 160px -20px"}},[t._v(" Tip：请在下方回复内容并提交")])],1):t._e()],1)]),t._v(" "),a("vue-markdown",{attrs:{source:t.ticketData.content}}),t._v(" "),a("hr",{staticClass:"heng"}),t._v(" "),t.showinput?a("div",[a("el-upload",{ref:"upload",attrs:{action:t.uploadurl,"on-success":t.handleSuccess,"show-file-list":!1,disabled:t.count>2}},[a("el-button",{attrs:{slot:"trigger",size:"mini",type:"danger",plain:"",icon:"upload2",disabled:t.count>2},slot:"trigger"},[t._v("\n              上传附件\n            ")]),t._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[a("p",[t._v("上传文件不超过10m，"),a("a",{staticStyle:{color:"red"}},[t._v("最多只能上传3个文件")])])])],1),t._v(" "),a("hr",{staticClass:"heng"})],1):t._e(),t._v(" "),t.enclosureData.length>0?a("div",{staticClass:"ticketenclosure"},[a("ul",t._l(t.enclosureData,function(e){return e.file?a("li",{key:e.id,staticStyle:{"list-style":"none"}},[a("i",{staticClass:"fa fa-paperclip"}),t._v(" "),a("a",{attrs:{href:t.apiurl+"/upload/"+e.file,download:e.file}},[t._v(t._s(e.file.split("/")[1]))]),t._v(" "),t.showinput?a("el-button",{attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){t.deleteEnclosure(e.id)}}}):t._e()],1):t._e()}))]):t._e()],1)],1),t._v(" "),2!=t.ticketData.ticket_status&&t.showinput?a("div",[a("el-form",{ref:"mailcontent",staticClass:"demo-ruleForm",attrs:{model:t.commentForm,"label-width":"80px"}},[a("hr",{staticClass:"heng"}),t._v(" "),a("el-form-item",{attrs:{label:"问题处理",prop:"content"}},[a("mavon-editor",{ref:"md",staticStyle:{"z-index":"1"},attrs:{code_style:"monokai",toolbars:t.toolbars},on:{imgAdd:t.imgAdd},model:{value:t.mailcontent,callback:function(e){t.mailcontent=e},expression:"mailcontent"}}),t._v(" "),a("a",{staticClass:"tips"},[t._v(" Tip：截图可以直接 Ctrl + v 粘贴到问题处理里面")])],1),t._v(" "),"0"===t.radio_status?a("el-form-item",{attrs:{label:"通知人",prop:"action_user"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择通知人"},model:{value:t.ticketData.create_user,callback:function(e){t.$set(t.ticketData,"create_user",e)},expression:"ticketData.create_user"}},t._l(t.users,function(t){return a("el-option",{key:t.id,attrs:{value:t.username}})})),t._v(" "),a("el-checkbox",{model:{value:t.sendnotice,callback:function(e){t.sendnotice=e},expression:"sendnotice"}},[t._v("发送通知")])],1):t._e(),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("ruleForm")}}},[t._v("提交")])],1)],1)],1):t._e(),t._v(" "),t.commentData.length>0?a("el-card",{staticClass:"ticketcomment"},[t._v("\n      处理历史记录\n      "),t._l(t.commentData,function(e){return a("div",{key:e.id},[a("hr",{staticClass:"heng"}),t._v(" "),a("el-row",[a("el-col",{attrs:{span:1}},[a("el-button",{staticClass:"commentuser",attrs:{type:"primary",plain:""}},[t._v(t._s(e.create_user))])],1),t._v(" "),a("el-col",{attrs:{span:21}},[a("div",{staticClass:"dialog-box"},[a("span",{staticClass:"bot"}),t._v(" "),a("span",{staticClass:"top"}),t._v(" "),a("div",{staticClass:"comment"},[a("vue-markdown",{attrs:{source:e.content}}),t._v(" "),a("p",{staticClass:"commenttime"},[t._v("处理时间："+t._s(t._f("parseDate")(e.create_time)))])],1)])])],1)],1)})],2):t._e()],1),t._v(" "),a("el-tooltip",{attrs:{placement:"top",content:"一路向西"}},[a("back-to-top",{attrs:{transitionName:"fade",customStyle:t.BackToTopStyle,visibilityHeight:300,backPosition:50}})],1)],1)},f=[],k={render:v,staticRenderFns:f},b=k,g=a("VU/8"),w=i,x=g(h,b,!1,w,null,null);e.default=x.exports},"1n3Z":function(t,e,a){"use strict";function i(t){a("3ILi")}var s={name:"BackToTop",props:{visibilityHeight:{type:Number,default:400},backPosition:{type:Number,default:0},customStyle:{type:Object,default:{right:"50px",bottom:"50px",width:"40px",height:"40px","border-radius":"4px","line-height":"45px",background:"#e7eaf1"}},transitionName:{type:String,default:"fade"}},data:function(){return{visible:!1,interval:null}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll),this.interval&&clearInterval(this.interval)},methods:{handleScroll:function(){this.visible=window.pageYOffset>this.visibilityHeight},backToTop:function(){var t=this,e=window.pageYOffset,a=0;this.interval=setInterval(function(){var i=Math.floor(t.easeInOutQuad(10*a,e,-e,500));i<=t.backPosition?(window.scrollTo(0,t.backPosition),clearInterval(t.interval)):window.scrollTo(0,i),a++},16.7)},easeInOutQuad:function(t,e,a,i){return(t/=i/2)<1?a/2*t*t+e:-a/2*(--t*(t-2)-1)+e}}},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:t.transitionName}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"back-to-ceiling",style:t.customStyle,on:{click:t.backToTop}},[a("svg",{staticClass:"Icon Icon--backToTopArrow",staticStyle:{height:"16px",width:"16px"},attrs:{width:"16",height:"16",viewBox:"0 0 17 17",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"}},[a("title",[t._v("回到顶部")]),t._v(" "),a("g",[a("path",{attrs:{d:"M12.036 15.59c0 .55-.453.995-.997.995H5.032c-.55 0-.997-.445-.997-.996V8.584H1.03c-1.1 0-1.36-.633-.578-1.416L7.33.29c.39-.39 1.026-.385 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.004z","fill-rule":"evenodd"}})])])])])},o=[],c={render:n,staticRenderFns:o},r=c,l=a("VU/8"),u=i,d=l(s,r,!1,u,"data-v-3531eed5",null);e.a=d.exports},"3ILi":function(t,e,a){var i=a("nMwr");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("321a9d91",i,!0)},"4mnU":function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".editticket{margin:50px;width:80%}.title{font-size:28px;font-weight:700;padding-left:10px}.appendInfo{padding:5px;margin:5px}.action{display:inline;margin-left:20px}.han{margin-left:5px}.content{margin:20px 5px}.ticketcomment{margin-top:20px;background-color:rgba(48,250,81,.17)}.ticketcomment .dialog-box{position:relative;left:100px;margin-left:-30px}.ticketcomment .dialog-box span{width:0;height:0;font-size:0;overflow:hidden;position:absolute}.ticketcomment .dialog-box span.bot{border-width:16px;border-style:solid dashed dashed;border-color:transparent rgba(48,250,81,.38) transparent transparent;top:10px;left:-30px}.ticketcomment .dialog-box .comment{border:1px solid rgba(255,164,186,.62);padding:6px;margin-bottom:10px;min-height:50px}.ticketcomment .dialog-box .comment .commenttime{float:right}",""])},"b+pV":function(t,e,a){var i=a("4mnU");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("ce7060d0",i,!0)},nMwr:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".back-to-ceiling[data-v-3531eed5]{position:fixed;display:inline-block;text-align:center;cursor:pointer}.back-to-ceiling[data-v-3531eed5]:hover{background:#d5dbe7}.back-to-ceiling .Icon[data-v-3531eed5]{fill:#9aaabf;background:none}",""])}});