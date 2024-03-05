import{S as f}from"./sweetalert2.all-VcjyylQf.js";import{_ as w,m as v,c as g,a as e,b as t,w as i,e as a,r as n,o as V,x as h,y as x,B as k}from"./index-woH4x7mR.js";import{u as y}from"./user-OY70hAFy.js";import{u as C}from"./regex-pcAWi6j3.js";import{v as R}from"./vertical_line-Y-FOFHHk.js";import"./helpers-Hx-ZzB2u.js";const L={name:"LoginView",components:{},data(){return{verticalLine:R,title:"登入頁",isLoading:!1,isRemember:!1,userData:{email:"",password:""}}},methods:{...v(y,["setUser","setUserCookie"]),login(){this.$http.post("http://localhost:3001/login",this.userData).then(s=>{s.data.accessToken&&s.data.user.role==="user"?(this.setUserCookie(s.data.user.id,s.data.accessToken),this.setUser(s.data.user),this.$router.replace("/")):f.fire({title:"登入失敗",text:"",icon:"error"})}).catch(s=>{var c;console.log(s.response),f.fire({title:((c=s.response)==null?void 0:c.data)||"登入失敗",text:"",icon:"error"})})},isPasswordRule(r){return C.test(r)?!0:"密碼長度為 6 ~ 12 碼，需包含英文及數字"}}},D={class:"container"},U={class:"row justify-content-center"},S=e("h2",{class:"fs-3 mt-5 font-weight-normal fw-bold text-center"},"歡迎來到 Vin Chateau",-1),B=e("h2",{class:"fs-3 mt-0 mb-5 font-weight-normal fw-bold text-center"},"若要開始購物，請先登入",-1),E={class:"col-5 py-4"},F={class:"form-floating mb-3"},M=e("label",{for:"email"},"帳號",-1),N={class:"form-floating"},P=e("label",{for:"password"},"密碼",-1),T=e("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 登入 ",-1),j={class:"checkbox d-flex justify-content-between mt-2 mb-3"},q={for:"isRemember"},z={class:"text-center"},A={class:"col-2 text-center"},G=["src"],H={class:"col-5 py-4"},I=e("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 使用 Google 快速登入 ",-1),J={class:"text-center mt-3"},K=e("p",{class:"m-0"},"當您使用 Vin Chateau 購物",-1);function O(r,s,c,Q,o,m){const u=n("VeeField"),_=n("ErrorMessage"),d=n("RouterLink"),b=n("VeeForm");return V(),g("div",D,[e("div",U,[S,B,e("div",E,[t(b,{ref:"form-login",class:"form-signin",onSubmit:m.login},{default:i(({errors:p})=>[e("div",F,[t(u,{id:"email",type:"email",name:"帳號",class:h(["form-control",{"is-invalid":p.帳號}]),placeholder:"請輸入 Email",rules:"email|required",autofocus:"",modelValue:o.userData.email,"onUpdate:modelValue":s[0]||(s[0]=l=>o.userData.email=l)},null,8,["class","modelValue"]),M,t(_,{name:"帳號",class:"invalid-feedback"})]),e("div",N,[t(u,{id:"password",name:"密碼",type:"password",class:h(["form-control",{"is-invalid":p.密碼}]),placeholder:"請輸入密碼",autocomplete:"false",rules:m.isPasswordRule,modelValue:o.userData.password,"onUpdate:modelValue":s[1]||(s[1]=l=>o.userData.password=l)},null,8,["class","rules","modelValue"]),P,t(_,{name:"密碼",class:"invalid-feedback"})]),T,e("div",j,[e("label",q,[x(e("input",{id:"isRemember",type:"checkbox",value:"false","onUpdate:modelValue":s[2]||(s[2]=l=>o.isRemember=l)},null,512),[[k,o.isRemember]]),a(" 記住我 ")]),t(d,{to:"/forgot",class:"float-end"},{default:i(()=>[a("忘記密碼")]),_:1})]),e("div",z,[a(" 還不是會員嗎?  "),t(d,{to:"/register",class:"p-2"},{default:i(()=>[a("立即註冊新帳號")]),_:1})])]),_:1},8,["onSubmit"])]),e("div",A,[e("img",{src:o.verticalLine,alt:"vertical Line"},null,8,G)]),e("div",H,[I,e("div",J,[K,e("p",null,[a("代表您同意 Vin Chateau "),t(d,{to:"/",class:"p-2"},{default:i(()=>[a("隱私權條款")]),_:1})])])])])])}const se=w(L,[["render",O]]);export{se as default};
