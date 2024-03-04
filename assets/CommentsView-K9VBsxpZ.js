import{_ as h,o as i,c,a as t,y as r,L as _,e as p,t as a,g as b,F as C,i as w,b as f,r as M,p as x,d as I}from"./index-3GCOjAQq.js";import{M as y}from"./bootstrap.esm-TTjMTX3M.js";const D={props:["tempComment"],data(){return{modalComment:null,editComment:{}}},methods:{openModal(){this.modalComment.show()},closeModal(){this.modalComment.hide()}},mounted(){this.modalComment=new y(this.$refs.commentModal)},watch:{tempComment(){this.editComment=this.tempComment}}},V={id:"commentModal",ref:"commentModal",class:"modal fade",tabindex:"-1","aria-labelledby":"commentModalLabel","aria-hidden":"true"},k={class:"modal-dialog modal-xl"},L={class:"modal-content border-0"},S=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{id:"commentModalLabel",class:"modal-title"},[t("span",null,"用戶評論")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),U={class:"modal-body"},E={class:"row"},R={class:"row"},A={class:"mb-3 col-md-2"},B=t("label",{for:"commentId",class:"form-label"},"評論編號",-1),T={class:"mb-3 col-md-2"},N=t("label",{for:"userId",class:"form-label"},"會員編號",-1),P={class:"mb-3 col-md-2"},j=t("label",{for:"productId",class:"form-label"},"產品編號",-1),F={class:"mb-3"},O=t("label",{for:"comment",class:"form-label"},"評論內容",-1),W=t("div",{class:"modal-footer"},[t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 關閉 ")],-1);function q(s,e,d,u,o,m){return i(),c("div",V,[t("div",k,[t("div",L,[S,t("div",U,[t("div",E,[t("div",null,[t("div",R,[t("div",A,[B,r(t("input",{id:"commentId","onUpdate:modelValue":e[0]||(e[0]=n=>o.editComment.id=n),type:"text",class:"form-control",readonly:""},null,512),[[_,o.editComment.id]])]),t("div",T,[N,r(t("input",{id:"userId","onUpdate:modelValue":e[1]||(e[1]=n=>o.editComment.userId=n),type:"text",class:"form-control",readonly:""},null,512),[[_,o.editComment.userId]])]),t("div",P,[j,r(t("input",{id:"productId","onUpdate:modelValue":e[2]||(e[2]=n=>o.editComment.productId=n),type:"text",class:"form-control",readonly:""},null,512),[[_,o.editComment.productId]])])]),t("div",F,[O,r(t("textarea",{id:"comment","onUpdate:modelValue":e[3]||(e[3]=n=>o.editComment.comment=n),type:"text",class:"form-control",style:{height:"200px"},readonly:""},null,512),[[_,o.editComment.comment]])])])])]),W])])],512)}const z=h(D,[["render",q]]),G={props:["tempComment","delComment"],data(){return{ModalCommentDel:null}},methods:{openDelModal(){this.ModalCommentDel.show()},closeDelModal(){this.ModalCommentDel.hide()}},mounted(){this.ModalCommentDel=new y(this.$refs.delCommentModal)}},H={id:"delCommentModal",ref:"delCommentModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delCommentModalLabel","aria-hidden":"true"},J={class:"modal-dialog"},K={class:"modal-content border-0"},Q=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delCommentModalLabel",class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),X={class:"modal-body"},Y={class:"text-danger"},Z={class:"modal-footer"},tt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function et(s,e,d,u,o,m){return i(),c("div",H,[t("div",J,[t("div",K,[Q,t("div",X,[p(" 是否刪除ID "),t("strong",Y,a(d.tempComment.id),1),p(" 評論(刪除後將無法恢復)。 ")]),t("div",Z,[tt,t("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=(...n)=>d.delComment&&d.delComment(...n))},"確認刪除")])])])],512)}const ot=h(G,[["render",et]]);var st={VITE_API_URL:"https://wine-project-tmiy.onrender.com",BASE_URL:"/Wine-project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API_URL:v}=st,nt={name:"AdminCommentsView",components:{CommentModal:z,DelCommentModal:ot},data(){return{title:"評論管理",comments:[],tempComment:{}}},mounted(){this.getComments()},methods:{getComments(){const s=`${v}/comments`;b.get(s).then(e=>{console.log(e),this.comments=e.data}).catch(()=>{alert("獲取評論失敗")})},openModal(s,e){s==="detail"?(this.tempComment={...e},this.$refs.commentModal.openModal()):s==="delete"&&(this.tempComment={...e},this.$refs.delCommentModal.openDelModal())},delComment(){const s=`${v}/comments/${this.tempComment.id}`;b.delete(s).then(e=>{alert("刪除成功"),this.$refs.delCommentModal.closeDelModal(),this.getComments()}).catch(()=>{alert("刪除失敗")})}}},lt=s=>(x("data-v-a8a278a3"),s=s(),I(),s),dt={class:"row"},mt={class:"mt-3"},at={class:"table mt-4"},it=lt(()=>t("thead",null,[t("tr",null,[t("th",{width:"70"},"評論編號"),t("th",{width:"70"},"會員編號"),t("th",{width:"120"},"評論內容"),t("th",{width:"120"},"詳細資訊"),t("th",{width:"120"},"刪除評論")])],-1)),ct={class:"commentContent"},rt={class:"btn-group"},_t=["onClick"],ht={class:"btn-group"},ut=["onClick"];function pt(s,e,d,u,o,m){const n=M("Comment-Modal"),$=M("Del-Comment-Modal");return i(),c(C,null,[t("div",dt,[t("h1",mt,a(o.title),1),t("table",at,[it,t("tbody",null,[(i(!0),c(C,null,w(o.comments,l=>(i(),c("tr",{key:l.id},[t("td",null,a(l.id),1),t("td",null,a(l.userId),1),t("td",null,[t("p",ct,a(l.comment),1)]),t("td",null,[t("div",rt,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:g=>m.openModal("detail",l)}," 查看 ",8,_t)])]),t("td",null,[t("div",ht,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:g=>m.openModal("delete",l)}," 刪除 ",8,ut)])])]))),128))])])]),f(n,{"temp-comment":o.tempComment,ref:"commentModal"},null,8,["temp-comment"]),f($,{"temp-comment":o.tempComment,"del-comment":m.delComment,ref:"delCommentModal"},null,8,["temp-comment","del-comment"])],64)}const ft=h(nt,[["render",pt],["__scopeId","data-v-a8a278a3"]]);export{ft as default};
