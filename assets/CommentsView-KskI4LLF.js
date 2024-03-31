import{_ as p,o as i,c,a as t,z as r,M as _,d as b,t as a,g as C,F as f,j as I,b as M,r as v,p as g,e as D}from"./index-KDcbRjT1.js";import{M as $}from"./bootstrap.esm-TTjMTX3M.js";import{h as V}from"./header_line-t2L8Dpyx.js";import{A as h}from"./swal-Sa9wWyFz.js";import"./sweetalert2.all-edPz5k6j.js";const L={props:["tempComment"],data(){return{modalComment:null,editComment:{}}},methods:{openModal(){this.modalComment.show()},closeModal(){this.modalComment.hide()}},mounted(){this.modalComment=new $(this.$refs.commentModal)},watch:{tempComment(){this.editComment=this.tempComment}}},k={id:"commentModal",ref:"commentModal",class:"modal fade",tabindex:"-1","aria-labelledby":"commentModalLabel","aria-hidden":"true"},E={class:"modal-dialog modal-xl"},T={class:"modal-content border-0"},A=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{id:"commentModalLabel",class:"modal-title"},[t("span",null,"用戶評論")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),S={class:"modal-body"},U={class:"row"},R={class:"row"},j={class:"mb-3 col-md-2"},B=t("label",{for:"commentId",class:"form-label"},"評論編號",-1),N={class:"mb-3 col-md-2"},P=t("label",{for:"userId",class:"form-label"},"會員編號",-1),O={class:"mb-3 col-md-2"},F=t("label",{for:"productId",class:"form-label"},"產品編號",-1),W={class:"mb-3"},z=t("label",{for:"comment",class:"form-label"},"評論內容",-1),q=t("div",{class:"modal-footer"},[t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 關閉 ")],-1);function G(s,e,d,u,o,m){return i(),c("div",k,[t("div",E,[t("div",T,[A,t("div",S,[t("div",U,[t("div",null,[t("div",R,[t("div",j,[B,r(t("input",{id:"commentId","onUpdate:modelValue":e[0]||(e[0]=n=>o.editComment.id=n),type:"text",class:"form-control",readonly:""},null,512),[[_,o.editComment.id]])]),t("div",N,[P,r(t("input",{id:"userId","onUpdate:modelValue":e[1]||(e[1]=n=>o.editComment.userId=n),type:"text",class:"form-control",readonly:""},null,512),[[_,o.editComment.userId]])]),t("div",O,[F,r(t("input",{id:"productId","onUpdate:modelValue":e[2]||(e[2]=n=>o.editComment.productId=n),type:"text",class:"form-control",readonly:""},null,512),[[_,o.editComment.productId]])])]),t("div",W,[z,r(t("textarea",{id:"comment","onUpdate:modelValue":e[3]||(e[3]=n=>o.editComment.comment=n),type:"text",class:"form-control",style:{height:"200px"},readonly:""},null,512),[[_,o.editComment.comment]])])])])]),q])])],512)}const H=p(L,[["render",G]]),J={props:["tempComment","delComment"],data(){return{ModalCommentDel:null}},methods:{openDelModal(){this.ModalCommentDel.show()},closeDelModal(){this.ModalCommentDel.hide()}},mounted(){this.ModalCommentDel=new $(this.$refs.delCommentModal)}},K={id:"delCommentModal",ref:"delCommentModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delCommentModalLabel","aria-hidden":"true"},Q={class:"modal-dialog"},X={class:"modal-content border-0"},Y=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delCommentModalLabel",class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Z={class:"modal-body"},tt={class:"text-danger"},et={class:"modal-footer"},ot=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function st(s,e,d,u,o,m){return i(),c("div",K,[t("div",Q,[t("div",X,[Y,t("div",Z,[b(" 是否刪除ID "),t("strong",tt,a(d.tempComment.id),1),b(" 評論(刪除後將無法恢復)。 ")]),t("div",et,[ot,t("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=(...n)=>d.delComment&&d.delComment(...n))},"確認刪除")])])])],512)}const nt=p(J,[["render",st]]);var lt={VITE_API_URL:"https://wine-project-tmiy.onrender.com",VITE_REPO_NAME:"Wine-project",BASE_URL:"/Wine-project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API_URL:y}=lt,dt={name:"AdminCommentsView",components:{CommentModal:H,DelCommentModal:nt},data(){return{title:"評論管理",headerLine:V,comments:[],tempComment:{}}},mounted(){this.getComments()},methods:{getComments(){const s=`${y}/comments`;C.get(s).then(e=>{this.comments=e.data}).catch(()=>{h.toastTop("error","獲取評論失敗")})},openModal(s,e){s==="detail"?(this.tempComment={...e},this.$refs.commentModal.openModal()):s==="delete"&&(this.tempComment={...e},this.$refs.delCommentModal.openDelModal())},delComment(){const s=`${y}/comments/${this.tempComment.id}`;C.delete(s).then(e=>{h.toastTop("success","刪除成功"),this.$refs.delCommentModal.closeDelModal(),this.getComments()}).catch(()=>{h.toastTop("error","刪除失敗")})}}},mt=s=>(g("data-v-5d37198a"),s=s(),D(),s),at={class:"row"},it={class:"my-3"},ct={class:"header-line"},rt=["src"],_t={class:"row"},ht={class:"table mt-4 mx-2"},pt=mt(()=>t("thead",{class:"table-light"},[t("tr",null,[t("th",{width:"90"},"評論編號"),t("th",{width:"90"},"會員編號"),t("th",{width:"260"},"評論內容"),t("th",{width:"70",class:"text-center"},"詳細資訊"),t("th",{width:"70",class:"text-center"},"刪除評論")])],-1)),ut={class:"commentContent"},bt={class:"text-center"},Ct=["onClick"],ft={class:"text-center"},Mt=["onClick"];function vt(s,e,d,u,o,m){const n=v("Comment-Modal"),x=v("Del-Comment-Modal");return i(),c(f,null,[t("div",at,[t("h1",it,a(o.title),1),t("div",ct,[t("img",{src:o.headerLine,alt:"header line"},null,8,rt)]),t("div",_t,[t("table",ht,[pt,t("tbody",null,[(i(!0),c(f,null,I(o.comments,l=>(i(),c("tr",{key:l.id},[t("td",null,a(l.id),1),t("td",null,a(l.userId),1),t("td",null,[t("p",ut,a(l.comment),1)]),t("td",bt,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:w=>m.openModal("detail",l)}," 查看 ",8,Ct)]),t("td",ft,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:w=>m.openModal("delete",l)}," 刪除 ",8,Mt)])]))),128))])])])]),M(n,{"temp-comment":o.tempComment,ref:"commentModal"},null,8,["temp-comment"]),M(x,{"temp-comment":o.tempComment,"del-comment":m.delComment,ref:"delCommentModal"},null,8,["temp-comment","del-comment"])],64)}const gt=p(dt,[["render",vt],["__scopeId","data-v-5d37198a"]]);export{gt as default};
