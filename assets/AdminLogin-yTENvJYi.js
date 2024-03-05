import{S as i}from"./sweetalert2.all-GUnQSQlJ.js";import{a as p}from"./helpers-Hx-ZzB2u.js";import{_ as u,c as f,a as t,t as h,j as _,y as r,L as l,b as w,w as b,e as c,r as x,o as g}from"./index-C0heAfxI.js";const D={name:"AdminLogin",components:{},data(){return{title:"管理者登入頁",userData:{email:"",password:""}}},methods:{login(){this.$http.post("https://wine-project-tmiy.onrender.com/login",this.userData).then(e=>{if(e.data.accessToken&&e.data.user.role==="admin"){const o=p(new Date,2);document.cookie=`adminToken=${e.data.accessToken}; expires=${new Date(o)}; path=/`,document.cookie=`adminId=${e.data.user.id}; expires=${new Date(o)}; path=/`,this.$router.push("/admin/accounts"),i.fire({title:"登入成功",text:`管理員：${e.data.user.name}`,icon:"success"})}else i.fire({title:"登入失敗",text:"",icon:"error"})}).catch(e=>{var o;i.fire({title:((o=e.response)==null?void 0:o.data)||"登入失敗",text:"",icon:"error"}),this.isLoading=!1})}},mounted(){}},k={class:"row justify-content-center"},v={class:"mt-5 font-weight-normal fw-bold text-center"},y={class:"col-6 py-4"},L={class:"form-floating mb-3"},T=t("label",{for:"email"},"帳號",-1),V={class:"form-floating"},$=t("label",{for:"password"},"密碼",-1),S=t("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"},"登入",-1),j=t("div",{class:"checkbox mb-3"},[t("label",null,[t("input",{type:"checkbox",value:"remember-me"}),c(" 記住我 ")])],-1),B={class:"text-center"};function N(d,e,o,q,s,n){const m=x("RouterLink");return g(),f("div",k,[t("h2",v,h(s.title),1),t("div",y,[t("form",{id:"form",class:"form-signin",onSubmit:e[2]||(e[2]=_((...a)=>n.login&&n.login(...a),["prevent"]))},[t("div",L,[r(t("input",{type:"email",class:"form-control",id:"email",placeholder:"name@example.com",required:"",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=a=>s.userData.email=a)},null,512),[[l,s.userData.email]]),T]),t("div",V,[r(t("input",{type:"password",class:"form-control",id:"password",placeholder:"Password",autocomplete:"false",required:"","onUpdate:modelValue":e[1]||(e[1]=a=>s.userData.password=a)},null,512),[[l,s.userData.password]]),$]),S,j,t("div",B,[w(m,{to:"/",class:"p-2"},{default:b(()=>[c("回到首頁")]),_:1})])],32)])])}const R=u(D,[["render",N]]);export{R as default};
