import{_ as p,o as a,c,a as e,e as u,t as d,g as _,F as h,i as M,b as f,r as A,p as g,d as v}from"./index-U4Y8dCTH.js";import{M as $}from"./bootstrap.esm-uhsrVe-H.js";import{h as U}from"./header_line-Qy0EEKQO.js";const w={props:["tempUser","delUser"],data(){return{delModalAccount:null}},methods:{openDelModal(){this.delModalAccount.show()},closeDelModal(){this.delModalAccount.hide()}},mounted(){this.delModalAccount=new $(this.$refs.delAccountModal)}},x={id:"delAccountModal",ref:"delAccountModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delAccountModalLabel","aria-hidden":"true"},y={class:"modal-dialog"},D={class:"modal-content border-0"},E=e("div",{class:"modal-header bg-danger text-white"},[e("h5",{id:"delAccountModalLabel",class:"modal-title"},[e("span",null,"刪除帳戶")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),I={class:"modal-body"},V={class:"text-danger"},L={class:"modal-footer"},S=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function k(t,s,n,b,o,r){return a(),c("div",x,[e("div",y,[e("div",D,[E,e("div",I,[u(" 是否刪除 "),e("strong",V,d(n.tempUser.name),1),u(" 帳戶(刪除後將無法恢復)。 ")]),e("div",L,[S,e("button",{type:"button",class:"btn btn-danger",onClick:s[0]||(s[0]=(...i)=>n.delUser&&n.delUser(...i))},"確認刪除")])])])],512)}const R=p(w,[["render",k]]);var C={VITE_API_URL:"https://wine-project-tmiy.onrender.com",VITE_REPO_NAME:"Wine-project",BASE_URL:"/undefined/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API_URL:m}=C,B={name:"AdminAccountsView",components:{DelAccountModal:R},data(){return{title:"帳戶管理",headerLine:U,users:[],tempUser:{}}},mounted(){this.getAccounts()},methods:{getAccounts(){const t=`${m}/users`;_.get(t).then(s=>{console.log(s.data),this.users=s.data}).catch(()=>{alert("取得帳戶資訊失敗")})},delUser(){const t=`${m}/users/${this.tempUser.id}`;_.delete(t).then(s=>{alert("刪除成功"),this.$refs.delModal.closeDelModal(),this.getAccounts()}).catch(()=>{alert("刪除失敗")})},openModal(t){this.tempUser={...t},this.$refs.delModal.openDelModal()}}},N=t=>(g("data-v-d98a4328"),t=t(),v(),t),P={class:"row"},T={class:"my-3"},O={class:"header-line"},j=["src"],F={class:"row"},W={class:"table mt-4 mx-2"},q=N(()=>e("thead",{class:"table-light"},[e("tr",null,[e("th",{width:"120"},"身分"),e("th",{width:"120"},"名稱"),e("th",{width:"120"},"電子信箱"),e("th",{width:"120",class:"text-center"},"刪除帳戶")])],-1)),z={class:"text-center"},G=["onClick"];function H(t,s,n,b,o,r){const i=A("Del-Account-Modal");return a(),c(h,null,[e("div",P,[e("h1",T,d(o.title),1),e("div",O,[e("img",{src:o.headerLine,alt:"header line"},null,8,j)]),e("div",F,[e("div",null,[e("table",W,[q,e("tbody",null,[(a(!0),c(h,null,M(o.users,l=>(a(),c("tr",{key:l.id},[e("td",null,d(l.role),1),e("td",null,d(l.username),1),e("td",null,d(l.email),1),e("td",z,[e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:J=>r.openModal(l)}," 刪除 ",8,G)])]))),128))])])])])]),f(i,{"temp-user":o.tempUser,"del-user":r.delUser,ref:"delModal"},null,8,["temp-user","del-user"])],64)}const Y=p(B,[["render",H],["__scopeId","data-v-d98a4328"]]);export{Y as default};
