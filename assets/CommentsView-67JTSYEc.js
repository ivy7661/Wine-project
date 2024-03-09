import{_ as h,o as i,c,a as t,y as r,M as _,e as u,t as a,g as b,F as C,i as g,b as f,r as M,p as w,d as I}from"./index-O1-0fp33.js";import{M as y}from"./bootstrap.esm-uhsrVe-H.js";import{h as D}from"./header_line-xclFtJG4.js";const V={props:["tempComment"],data(){return{modalComment:null,editComment:{}}},methods:{openModal(){this.modalComment.show()},closeModal(){this.modalComment.hide()}},mounted(){this.modalComment=new y(this.$refs.commentModal)},watch:{tempComment(){this.editComment=this.tempComment}}},L={id:"commentModal",ref:"commentModal",class:"modal fade",tabindex:"-1","aria-labelledby":"commentModalLabel","aria-hidden":"true"},k={class:"modal-dialog modal-xl"},E={class:"modal-content border-0"},S=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{id:"commentModalLabel",class:"modal-title"},[t("span",null,"用戶評論")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),U={class:"modal-body"},R={class:"row"},A={class:"row"},T={class:"mb-3 col-md-2"},B=t("label",{for:"commentId",class:"form-label"},"評論編號",-1),N={class:"mb-3 col-md-2"},P=t("label",{for:"userId",class:"form-label"},"會員編號",-1),O={class:"mb-3 col-md-2"},j=t("label",{for:"productId",class:"form-label"},"產品編號",-1),F={class:"mb-3"},W=t("label",{for:"comment",class:"form-label"},"評論內容",-1),q=t("div",{class:"modal-footer"},[t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 關閉 ")],-1);function z(s,e,d,p,o,m){return i(),c("div",L,[t("div",k,[t("div",E,[S,t("div",U,[t("div",R,[t("div",null,[t("div",A,[t("div",T,[B,r(t("input",{id:"commentId","onUpdate:modelValue":e[0]||(e[0]=n=>o.editComment.id=n),type:"text",class:"form-control",readonly:""},null,512),[[_,o.editComment.id]])]),t("div",N,[P,r(t("input",{id:"userId","onUpdate:modelValue":e[1]||(e[1]=n=>o.editComment.userId=n),type:"text",class:"form-control",readonly:""},null,512),[[_,o.editComment.userId]])]),t("div",O,[j,r(t("input",{id:"productId","onUpdate:modelValue":e[2]||(e[2]=n=>o.editComment.productId=n),type:"text",class:"form-control",readonly:""},null,512),[[_,o.editComment.productId]])])]),t("div",F,[W,r(t("textarea",{id:"comment","onUpdate:modelValue":e[3]||(e[3]=n=>o.editComment.comment=n),type:"text",class:"form-control",style:{height:"200px"},readonly:""},null,512),[[_,o.editComment.comment]])])])])]),q])])],512)}const G=h(V,[["render",z]]),H={props:["tempComment","delComment"],data(){return{ModalCommentDel:null}},methods:{openDelModal(){this.ModalCommentDel.show()},closeDelModal(){this.ModalCommentDel.hide()}},mounted(){this.ModalCommentDel=new y(this.$refs.delCommentModal)}},J={id:"delCommentModal",ref:"delCommentModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delCommentModalLabel","aria-hidden":"true"},K={class:"modal-dialog"},Q={class:"modal-content border-0"},X=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delCommentModalLabel",class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Y={class:"modal-body"},Z={class:"text-danger"},tt={class:"modal-footer"},et=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ot(s,e,d,p,o,m){return i(),c("div",J,[t("div",K,[t("div",Q,[X,t("div",Y,[u(" 是否刪除ID "),t("strong",Z,a(d.tempComment.id),1),u(" 評論(刪除後將無法恢復)。 ")]),t("div",tt,[et,t("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=(...n)=>d.delComment&&d.delComment(...n))},"確認刪除")])])])],512)}const st=h(H,[["render",ot]]);var nt={VITE_API_URL:"https://wine-project-tmiy.onrender.com",VITE_REPO_NAME:"Wine-project",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API_URL:v}=nt,lt={name:"AdminCommentsView",components:{CommentModal:G,DelCommentModal:st},data(){return{title:"評論管理",headerLine:D,comments:[],tempComment:{}}},mounted(){this.getComments()},methods:{getComments(){const s=`${v}/comments`;b.get(s).then(e=>{console.log(e),this.comments=e.data}).catch(()=>{alert("獲取評論失敗")})},openModal(s,e){s==="detail"?(this.tempComment={...e},this.$refs.commentModal.openModal()):s==="delete"&&(this.tempComment={...e},this.$refs.delCommentModal.openDelModal())},delComment(){const s=`${v}/comments/${this.tempComment.id}`;b.delete(s).then(e=>{alert("刪除成功"),this.$refs.delCommentModal.closeDelModal(),this.getComments()}).catch(()=>{alert("刪除失敗")})}}},dt=s=>(w("data-v-3a89c20d"),s=s(),I(),s),mt={class:"row"},at={class:"my-3"},it={class:"header-line"},ct=["src"],rt={class:"row"},_t={class:"table mt-4 mx-2"},ht=dt(()=>t("thead",{class:"table-light"},[t("tr",null,[t("th",{width:"70"},"評論編號"),t("th",{width:"70"},"會員編號"),t("th",{width:"120"},"評論內容"),t("th",{width:"120"},"詳細資訊"),t("th",{width:"120",class:"text-center"},"刪除評論")])],-1)),pt={class:"commentContent"},ut={class:"text-center"},bt=["onClick"],Ct={class:"btn-group"},ft=["onClick"];function Mt(s,e,d,p,o,m){const n=M("Comment-Modal"),$=M("Del-Comment-Modal");return i(),c(C,null,[t("div",mt,[t("h1",at,a(o.title),1),t("div",it,[t("img",{src:o.headerLine,alt:"header line"},null,8,ct)]),t("div",rt,[t("table",_t,[ht,t("tbody",null,[(i(!0),c(C,null,g(o.comments,l=>(i(),c("tr",{key:l.id},[t("td",null,a(l.id),1),t("td",null,a(l.userId),1),t("td",null,[t("p",pt,a(l.comment),1)]),t("td",ut,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:x=>m.openModal("detail",l)}," 查看 ",8,bt)]),t("td",null,[t("div",Ct,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:x=>m.openModal("delete",l)}," 刪除 ",8,ft)])])]))),128))])])])]),f(n,{"temp-comment":o.tempComment,ref:"commentModal"},null,8,["temp-comment"]),f($,{"temp-comment":o.tempComment,"del-comment":m.delComment,ref:"delCommentModal"},null,8,["temp-comment","del-comment"])],64)}const xt=h(lt,[["render",Mt],["__scopeId","data-v-3a89c20d"]]);export{xt as default};