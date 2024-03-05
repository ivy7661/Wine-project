import{_ as I,C as N,l as h,c as E,a as e,t as M,b as s,w as i,v as w,o as T,x as p,e as f,g as x,r as _,p as D,d as $}from"./index-woH4x7mR.js";import{S as V,f as L}from"./swiper-vue-_idCGNGk.js";import{S as c}from"./sweetalert2.all-VcjyylQf.js";import{p as j,u as q}from"./regex-pcAWi6j3.js";const a=d=>(D("data-v-77f880a3"),d=d(),$(),d),z={class:"container"},H={class:"row justify-content-center"},W={class:"mt-5 font-weight-normal fw-bold text-center"},A={class:"col-5 py-4"},G=a(()=>e("h3",{class:"mt-3 mb-3 font-weight-normal fw-bold text-center"},"請輸入資料",-1)),J={class:"form-floating mb-3"},K=a(()=>e("label",{for:"email"},"帳號",-1)),O={class:"form-floating mb-3"},Q=a(()=>e("label",{for:"phone"},"電話",-1)),X=a(()=>e("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 下一步 ",-1)),Y={class:"text-center mt-3"},Z=a(()=>e("h3",{class:"mt-3 mb-3 font-weight-normal fw-bold text-center"},"請重新輸入密碼",-1)),ee={class:"form-floating mb-3"},oe=a(()=>e("label",{for:"password"},"密碼",-1)),te={class:"form-floating mb-3"},se=a(()=>e("label",{for:"checkPwd"},"確認密碼",-1)),le=a(()=>e("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 修改密碼 ",-1)),ae={class:"text-center mt-3"},ne={__name:"ForgotView",setup(d){const k=N(),v=h(null),S=h("忘記密碼?"),t=h({id:0,email:"",phone:"",password:"",checkPwd:""}),y=l=>{v.value=l},P=()=>{x.post("http://localhost:3001/v1/api/uservalid",{email:t.value.email,phone:t.value.phone}).then(o=>{o.data.id?(t.value.id=o.data.id,v.value.slideNext()):c.fire({title:"查無此會員",text:"",icon:"error"})}).catch(o=>{console.log(o.response),c.fire({title:"查無此會員",text:"",icon:"error"})})},B=()=>{c.fire({title:"確認修改密碼??",text:"",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"確認",cancelButtonText:"取消"}).then(l=>{l.isConfirmed&&C()})},C=()=>{const l=`http://localhost:3001/users/${t.value.id}`;x.patch(l,{password:t.value.password}).then(o=>{c.fire({title:"密碼已重置",text:"",icon:"success"}),k.push("/login")}).catch(o=>{console.log(o.response),c.fire({title:"密碼重置失敗",text:"",icon:"error"}),t.value={id:0,email:"",phone:"",password:"",checkPwd:""}})},R=l=>j.test(l)?!0:"請輸入正確的電話號碼",U=l=>q.test(l)?!0:"密碼長度為 6 ~ 12 碼，需包含英文及數字",F=l=>l===t.value.password?!0:"密碼不一致";return(l,o)=>{const u=_("VeeField"),m=_("ErrorMessage"),b=_("RouterLink"),g=_("VeeForm");return T(),E("div",z,[e("div",H,[e("h2",W,M(S.value),1),e("div",A,[s(w(L),{autoHeight:!0,spaceBetween:20,allowTouchMove:!1,allowSlidePrev:!1,onSwiper:y,class:"mySwiper"},{default:i(()=>[s(w(V),null,{default:i(()=>[G,s(g,{ref:"form-login",class:"form-signin",onSubmit:P},{default:i(({errors:r})=>[e("div",J,[s(u,{id:"email",name:"帳號",type:"email",class:p(["form-control",{"is-invalid":r.帳號}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:t.value.email,"onUpdate:modelValue":o[0]||(o[0]=n=>t.value.email=n)},null,8,["class","modelValue"]),K,s(m,{name:"帳號",class:"invalid-feedback"})]),e("div",O,[s(u,{id:"phone",name:"電話",type:"text",class:p(["form-control",{"is-invalid":r.電話}]),placeholder:"請輸入電話",rules:R,modelValue:t.value.phone,"onUpdate:modelValue":o[1]||(o[1]=n=>t.value.phone=n)},null,8,["class","modelValue"]),Q,s(m,{name:"電話",class:"invalid-feedback"})]),X,e("div",Y,[f(" 還不是會員嗎?  "),s(b,{to:"/register",class:"p-2"},{default:i(()=>[f("立即註冊新帳號")]),_:1})])]),_:1},512)]),_:1}),s(w(V),null,{default:i(()=>[Z,s(g,{ref:"form-login",class:"form-signin",onSubmit:B},{default:i(({errors:r})=>[e("div",ee,[s(u,{id:"password",name:"密碼",type:"password",class:p(["form-control",{"is-invalid":r.密碼}]),placeholder:"請輸入密碼",autocomplete:"false",rules:U,modelValue:t.value.password,"onUpdate:modelValue":o[2]||(o[2]=n=>t.value.password=n)},null,8,["class","modelValue"]),oe,s(m,{name:"密碼",class:"invalid-feedback"})]),e("div",te,[s(u,{id:"checkPwd",name:"確認密碼",type:"password",class:p(["form-control",{"is-invalid":r.確認密碼}]),placeholder:"Password",autocomplete:"false",rules:F,modelValue:t.value.checkPwd,"onUpdate:modelValue":o[3]||(o[3]=n=>t.value.checkPwd=n)},null,8,["class","modelValue"]),se,s(m,{name:"確認密碼",class:"invalid-feedback"})]),le,e("div",ae,[f(" 還不是會員嗎?  "),s(b,{to:"/register",class:"p-2"},{default:i(()=>[f("立即註冊新帳號")]),_:1})])]),_:1},512)]),_:1})]),_:1})])])])}}},ue=I(ne,[["__scopeId","data-v-77f880a3"]]);export{ue as default};
