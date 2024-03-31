import{S as f}from"./sweetalert2.all-edPz5k6j.js";import{_ as g,m as w,c as v,a as e,b as s,w as c,d as i,r as m,o as V,y as h,z as x,C as y}from"./index-KDcbRjT1.js";import{u as k}from"./user-GOzDLLMT.js";import{u as C}from"./regex-pcAWi6j3.js";import{v as R}from"./vertical_line-Y-FOFHHk.js";import"./helpers-Hx-ZzB2u.js";const D={name:"LoginView",components:{},data(){return{verticalLine:R,title:"登入頁",isLoading:!1,isRemember:!1,userData:{email:"",password:""}}},mounted(){const a=localStorage.getItem("rememberAccount");a&&(this.userData.email=a,this.isRemember=!0)},methods:{...w(k,["setUser","setUserCookie"]),login(){this.$http.post("https://wine-project-tmiy.onrender.com/login",this.userData).then(t=>{t.data.accessToken&&t.data.user.role==="user"?(this.setUserCookie(t.data.user.id,t.data.accessToken),this.setUser(t.data.user),this.isRemember&&localStorage.setItem("rememberAccount",this.userData.email),this.$router.replace("/")):f.fire({title:"登入失敗",text:"",icon:"error"})}).catch(t=>{var d;f.fire({title:((d=t.response)==null?void 0:d.data)||"登入失敗",text:"",icon:"error"})})},onGAuth(){f.fire({title:"Google 登入",text:"即將開放...",icon:"info"})},isPasswordRule(a){return C.test(a)?!0:"密碼長度為 6 ~ 12 碼，需包含英文及數字"}}},L={class:"container"},A={class:"row justify-content-center"},S=e("h2",{class:"fs-3 mt-5 font-weight-normal fw-bold text-center"},"歡迎來到 Vin Chateau",-1),U=e("h2",{class:"fs-3 mt-0 mb-5 font-weight-normal fw-bold text-center"},"若要開始購物，請先登入",-1),G={class:"col-5 py-4"},E={class:"form-floating mb-3"},F=e("label",{for:"email"},"帳號",-1),P={class:"form-floating"},j=e("label",{for:"password"},"密碼",-1),B=e("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 登入 ",-1),M={class:"checkbox d-flex justify-content-between mt-2 mb-3"},N={for:"isRemember"},T={class:"text-center"},z={class:"col-2 text-center"},I=["src"],q={class:"col-5 py-4"},H={class:"text-center mt-3"},J=e("p",{class:"m-0"},"當您使用 Vin Chateau 購物",-1);function K(a,t,d,O,o,r){const p=m("VeeField"),_=m("ErrorMessage"),u=m("RouterLink"),b=m("VeeForm");return V(),v("div",L,[e("div",A,[S,U,e("div",G,[s(b,{ref:"form-login",class:"form-signin",onSubmit:r.login},{default:c(({errors:n})=>[e("div",E,[s(p,{id:"email",type:"email",name:"帳號",class:h(["form-control",{"is-invalid":n.帳號}]),placeholder:"請輸入 Email",rules:"email|required",autofocus:"",modelValue:o.userData.email,"onUpdate:modelValue":t[0]||(t[0]=l=>o.userData.email=l)},null,8,["class","modelValue"]),F,s(_,{name:"帳號",class:"invalid-feedback"})]),e("div",P,[s(p,{id:"password",name:"密碼",type:"password",class:h(["form-control",{"is-invalid":n.密碼}]),placeholder:"請輸入密碼",autocomplete:"false",rules:r.isPasswordRule,modelValue:o.userData.password,"onUpdate:modelValue":t[1]||(t[1]=l=>o.userData.password=l)},null,8,["class","rules","modelValue"]),j,s(_,{name:"密碼",class:"invalid-feedback"})]),B,e("div",M,[e("label",N,[x(e("input",{id:"isRemember",type:"checkbox",value:"false","onUpdate:modelValue":t[2]||(t[2]=l=>o.isRemember=l)},null,512),[[y,o.isRemember]]),i(" 記住我 ")]),s(u,{to:"/forgot",class:"float-end"},{default:c(()=>[i("忘記密碼")]),_:1})]),e("div",T,[i(" 還不是會員嗎?  "),s(u,{to:"/register",class:"p-2"},{default:c(()=>[i("立即註冊新帳號")]),_:1})])]),_:1},8,["onSubmit"])]),e("div",z,[e("img",{src:o.verticalLine,alt:"vertical Line"},null,8,I)]),e("div",q,[e("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit",onClick:t[3]||(t[3]=(...n)=>r.onGAuth&&r.onGAuth(...n))}," 使用 Google 快速登入 "),e("div",H,[J,e("p",null,[i("代表您同意 Vin Chateau "),s(u,{to:"/privacyPolicy",class:"p-2"},{default:c(()=>[i("隱私權條款")]),_:1})])])])])])}const ee=g(D,[["render",K]]);export{ee as default};
