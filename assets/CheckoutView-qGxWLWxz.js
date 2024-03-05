import{S as x}from"./sweetalert2.all-DmFYn2p-.js";import{_ as F,m as A,g as v,h as E,c as d,a as e,b as c,w as N,F as w,i as S,k as y,t as m,r as k,o as u,x as h,y as C,B as D,A as P,L as T,p as U,d as L}from"./index-Tc_nxF_h.js";import{u as V}from"./user-qcgE8jQQ.js";import{_ as M}from"./footerContainer-g7u_3nq6.js";import"./helpers-Hx-ZzB2u.js";var j={VITE_API_URL:"https://wine-project-tmiy.onrender.com",VITE_REPO_NAME:"Wine-project",BASE_URL:"/undefined/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API_URL:g}=j,q={name:"CheckoutPage",components:{},data(){return{title:"購物車",cartAll:[],cart:[],userData:{user:{customerEmail:"",customerName:"",customerTel:"",customerAddress:""},payment:{creditCard:"",cardName:"",cardExpiration:"",secureCode:""}},coupon:null,shipping:300,newQty:1,eighteenPlusAgree:!1,privacyAgree:!1,userId:""}},methods:{...A(V,["setUser","cleanUser","getUserCookie"]),getCartList(){const t=`${g}/carts`;v.get(t).then(s=>{this.cartAll=s.data,this.cart=s.data.filter(l=>l.userId===this.userId)}).catch(()=>{})},updateCartQty(t){const s=`${g}/carts`,l={qty:t.qty};t.qty===0?this.deleteCartItem(t):v.patch(`${s}/${t.id}`,l).then(p=>{}).catch(()=>{})},deleteCartItem(t){x.fire({title:"確認刪除？",text:"刪除後將無法恢復！",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"確定刪除",cancelButtonText:"取消"}).then(s=>{if(s.isConfirmed){const l=`${g}/carts`;v.delete(`${l}/${t.id}`,{userId:this.userId,id:t.id}).then(p=>{this.getCartList(),x.fire({title:"移出購物車",text:"商品已經成功移出購物車",icon:"success"})}).catch(()=>{})}else t.qty=1})},getFavoriteList(){const t=`${g}/favorite`;v.get(t).then(s=>{this.allFavoriteList=s.data,this.favoriteList=s.data.filter(l=>l.userId===this.userId),this.checkFavoriteStatus()}).catch(()=>{})},checkFavoriteStatus(){this.cart.forEach(t=>{t.isFavorite=this.isProductInFavorite(t.id)})},isProductInFavorite(t){return this.favoriteList.some(s=>s.productId===t)},addToFavorite(t){if(!this.userId){alert("請先登入");return}const s=`${g}/favorite`,l=new Date,p=`${l.getFullYear()}/${(l.getMonth()+1).toString().padStart(2,"0")}/${l.getDate().toString().padStart(2,"0")}`,a={userId:this.userId,productId:t,created_at:p};v.post(s,a).then(n=>{this.getFavoriteList(),x.fire({title:"加入最愛",text:"商品已經成功加入最愛清單。",icon:"success"})}).catch(()=>{})},toggleFavorite(t){this.isProductInFavorite(t.id)?this.removeFromFavorite(t.id):this.addToFavorite(t.id)},removeFromFavorite(t){if(!this.userId){alert("請先登入");return}const s=`${g}/favorite`,l=this.allFavoriteList.findIndex(a=>a.productId===t&&a.userId===this.userId),p=this.allFavoriteList[l].id;v.delete(`${s}/${p}`,{userId:this.userId,id:l}).then(a=>{this.getFavoriteList(),x.fire({title:"移出最愛",text:"商品已經成功移出最愛清單",icon:"success"})}).catch(()=>{})},applyFreeShippingCoupon(){const t=`${g}/coupons`;v.get(t).then(s=>{this.coupon=s.data[0]}).catch(()=>{})},seeProduct(t){this.$router.push({name:"ProductDetail",params:{id:t}})},isPhone(t){return/^(09)[0-9]{8}$/.test(t)?!0:"需要正確的電話號碼"},isSecurityCode(t){return/^\d{3}$/.test(t)?!0:"需要正確的三位數安全碼"},isCreditCard(t){return/^\d{16}$/.test(t)?!0:"需要正確的信用卡號"},isDateFormat(t){return/^\d{2}\/\d{2}$/.test(t)?!0:"需要正確的日期格式 MM/YY"},createOrder(){const t=`${g}/orders`,s=new Date,l=`${s.getFullYear()}/${(s.getMonth()+1).toString().padStart(2,"0")}/${s.getDate().toString().padStart(2,"0")} ${s.getHours().toString().padStart(2,"0")}:${s.getMinutes().toString().padStart(2,"0")}`,p={user:{userId:this.userId,name:this.userData.user.customerName,phone:this.userData.user.customerTel,email:this.userData.user.customerEmail,address:this.userData.user.customerAddress},cart:this.cart,is_paid:1,orderStatus:"配送中",create_at:l};v.post(t,p).then(a=>{x.fire({title:"訂單已完成",text:"感謝您的購物，請查看您的電子郵件以獲取訂單狀態。",icon:"success"}),this.userData={user:{customerEmail:"",customerName:"",customerTel:"",customerAddress:""},payment:{creditCard:"",cardName:"",cardExpiration:"",secureCode:""}}}).catch(()=>{x.fire({title:"付款失敗",text:"請稍後再試",icon:"error"})})}},watch:{calculateSubtotal(t){t>=3e3?this.applyFreeShippingCoupon():t<3e3&&(this.coupon=null)}},computed:{...E(V,["getUser"]),calculateSubtotal(){return this.cart.reduce((t,s)=>t+s.price*s.qty,0)},processedShipping(){return this.cart.length>0?this.shipping:0},calculateTotalPrice(){const t=this.calculateSubtotal,s=this.coupon?this.coupon.discount:0;return t+this.processedShipping-s},checkoutAgree(){return this.eighteenPlusAgree&&this.privacyAgree}},mounted(){const{userId:t}=this.getUserCookie();this.userId=t,this.getCartList(),this.getFavoriteList()}},o=t=>(U("data-v-a254d8a0"),t=t(),L(),t),B=o(()=>e("div",{class:"bg-checkout pb-4"},[e("h2",{class:"pb-5 text-white container"},"填寫訂單資訊")],-1)),Y={class:"container pb-5"},R=o(()=>e("img",{src:M,class:"w-100 mb-5"},null,-1)),O=o(()=>e("div",{class:"progress mb-5 fs-5",role:"progressbar","aria-label":"Animated striped example"},[e("div",{class:"progress-bar bg-primary",role:"progressbar",style:{width:"33%"},"aria-valuenow":"33","aria-valuemin":"0","aria-valuemax":"100"}," 確認購物車 "),e("div",{class:"progress-bar bg-primary progress-bar-striped progress-bar-animated",role:"progressbar",style:{width:"33%"},"aria-valuenow":"33","aria-valuemin":"0","aria-valuemax":"100"}," 填寫資料 "),e("div",{class:"progress-bar bg-secondary",role:"progressbar",style:{width:"34%"},"aria-valuenow":"34","aria-valuemin":"0","aria-valuemax":"100"}," 完成訂單 ")],-1)),Q={class:"row gy-4 flex-column-reverse flex-md-row"},z={class:"col-12 col-md-8"},H=o(()=>e("h4",{class:"pb-4"},"1. 收件者資訊",-1)),W={class:"pb-5"},G={class:"form-floating mb-3"},J=o(()=>e("label",{for:"username"},"姓名",-1)),K={class:"form-floating mb-3"},X=o(()=>e("label",{for:"customerAddress"},"寄送地址",-1)),Z={class:"form-floating mb-3"},$=o(()=>e("label",{for:"customerTel"},"電話",-1)),ee={class:"form-floating mb-3"},te=o(()=>e("label",{for:"customerEmail"},"電子郵件",-1)),se=o(()=>e("h4",{class:"pb-4"},"2. 付款資訊",-1)),ae={class:"pb-5"},oe={class:"form-floating mb-3"},re=o(()=>e("label",{for:"creditCard"},"卡號",-1)),ie={class:"form-floating mb-3"},le=o(()=>e("label",{for:"cardName"},"持卡人姓名",-1)),ce={class:"form-floating mb-3"},ne=o(()=>e("label",{for:"cardExpiration"},"有效日期 (MM/YY)",-1)),de={class:"form-floating mb-3"},ue=o(()=>e("label",{for:"secureCode"},"安全碼",-1)),me={class:"col-12 col-md-4"},he={class:"totalPrice pb-5"},pe={class:"card fs-5"},_e=o(()=>e("div",{class:"card-header bg-primary fs-5 p-3 ps-4 text-white"},"購物車",-1)),fe={class:"card-body"},ve={class:"d-flex justify-content-between"},ge=o(()=>e("p",{class:"card-text"},"商品小計",-1)),be={class:"card-text"},xe={class:"d-flex justify-content-between"},ye=o(()=>e("p",{class:"card-text"},"運費價格",-1)),ke={class:"card-text"},Ce={class:"d-flex justify-content-between"},we=o(()=>e("p",{class:"card-text"},"優惠卷",-1)),Se={key:0,class:"card-text text-danger"},De={key:1,class:"card-text"},Ve=o(()=>e("div",{class:"d-flex justify-content-center"},[e("div",{class:"bg-black text-center line",style:{height:"1px"}})],-1)),Ie={class:"card-body d-flex flex-column justify-content-between"},Fe={class:"d-flex justify-content-between fw-bold"},Ae=o(()=>e("p",{class:"card-text"},"總計",-1)),Ee={class:"card-text text-danger fs-4"},Ne={class:"form-check mb-3"},Pe=o(()=>e("label",{class:"form-check-label",for:"eighteenPlusAgree"}," 我已年滿18歲 ",-1)),Te={class:"form-check"},Ue=o(()=>e("label",{class:"form-check-label",for:"privacyAgree"}," 我同意服務及隱私權條款 ",-1)),Le=["disabled"],Me={class:"row"},je={class:"col-12 col-md-8"},qe={class:"cartList d-flex flex-column border border-primary rounded"},Be=o(()=>e("div",{class:"bg-primary fs-5 text-white mb-3 p-3 ps-4"},"訂購清單",-1)),Ye={class:"p-3"},Re=["onClick"],Oe=["onClick"],Qe={class:"card-body d-flex flex-column justify-content-around"},ze={class:"d-flex mb-1 justify-content-between"},He={key:0,class:"badge bg-danger mb-2"},We={class:"d-flex gap-1"},Ge=["onClick"],Je={class:"card-title text-black fs-4"},Ke=o(()=>e("p",null,"750 ml",-1)),Xe={class:"input-group mb-3"},Ze=o(()=>e("span",{class:"input-group-text"},"數量",-1)),$e=["onUpdate:modelValue","onClick"],et={class:"d-flex"},tt={class:"text-danger"},st=o(()=>e("div",{class:"d-flex justify-content-center mt-3 mb-5"},[e("div",{class:"bg-black text-center line",style:{height:"1px"}})],-1)),at={class:"d-flex flex-column align-items-end pe-3"},ot={key:0,class:"text-primary fs-5"},rt={key:1,class:"text-primary fs-5"},it={class:"text-end mb-1"},lt={class:"fs-4"};function ct(t,s,l,p,a,n){const _=k("VeeField"),f=k("ErrorMessage"),I=k("VeeForm");return u(),d("div",null,[B,e("div",Y,[R,O,c(I,{ref:"checkout-form",onSubmit:n.createOrder},{default:N(({errors:r})=>[e("div",Q,[e("div",z,[H,e("div",W,[e("div",G,[c(_,{id:"customerName",name:"姓名",type:"text",class:h(["form-control",{"is-invalid":r.姓名}]),placeholder:"請輸入名稱",rules:"required|min:2|max:16",modelValue:a.userData.user.customerName,"onUpdate:modelValue":s[0]||(s[0]=i=>a.userData.user.customerName=i)},null,8,["class","modelValue"]),J,c(f,{name:"姓名",class:"invalid-feedback"})]),e("div",K,[c(_,{id:"customerAddress",name:"地址",type:"text",class:h(["form-control",{"is-invalid":r.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:a.userData.user.customerAddress,"onUpdate:modelValue":s[1]||(s[1]=i=>a.userData.user.customerAddress=i)},null,8,["class","modelValue"]),X,c(f,{name:"地址",class:"invalid-feedback"})]),e("div",Z,[c(_,{id:"customerTel",name:"電話",type:"tel",class:h(["form-control",{"is-invalid":r.電話}]),placeholder:"請輸入電話",rules:n.isPhone,modelValue:a.userData.user.customerTel,"onUpdate:modelValue":s[2]||(s[2]=i=>a.userData.user.customerTel=i)},null,8,["class","rules","modelValue"]),$,c(f,{name:"電話",class:"invalid-feedback"})]),e("div",ee,[c(_,{id:"customerEmail",name:"email",type:"email",class:h(["form-control",{"is-invalid":r.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:a.userData.user.customerEmail,"onUpdate:modelValue":s[3]||(s[3]=i=>a.userData.user.customerEmail=i)},null,8,["class","modelValue"]),te,c(f,{name:"email",class:"invalid-feedback"})])]),se,e("div",ae,[e("div",oe,[c(_,{id:"creditCard",name:"信用卡號",type:"text",class:h(["form-control",{"is-invalid":r.信用卡號}]),placeholder:"請輸入信用卡號",rules:n.isCreditCard,modelValue:a.userData.payment.creditCard,"onUpdate:modelValue":s[4]||(s[4]=i=>a.userData.payment.creditCard=i)},null,8,["class","rules","modelValue"]),re,c(f,{name:"信用卡號",class:"invalid-feedback"})]),e("div",ie,[c(_,{id:"cardName",name:"持卡人姓名",type:"text",class:h(["form-control",{"is-invalid":r.持卡人姓名}]),placeholder:"請輸入持卡人姓名",rules:"required|min:2|max:16",modelValue:a.userData.payment.cardName,"onUpdate:modelValue":s[5]||(s[5]=i=>a.userData.payment.cardName=i)},null,8,["class","modelValue"]),le,c(f,{name:"持卡人姓名",class:"invalid-feedback"})]),e("div",ce,[c(_,{id:"cardExpiration",name:"有效日期",type:"text",class:h(["form-control",{"is-invalid":r.有效日期}]),placeholder:"請輸入有效日期 (MM/YY)",rules:n.isDateFormat,modelValue:a.userData.payment.cardExpiration,"onUpdate:modelValue":s[6]||(s[6]=i=>a.userData.payment.cardExpiration=i)},null,8,["class","rules","modelValue"]),ne,c(f,{name:"有效日期",class:"invalid-feedback"})]),e("div",de,[c(_,{id:"secureCode",name:"安全碼",type:"number",class:h(["form-control",{"is-invalid":r.安全碼}]),placeholder:"請輸入三位數的安全碼",rules:n.isSecurityCode,modelValue:a.userData.payment.secureCode,"onUpdate:modelValue":s[7]||(s[7]=i=>a.userData.payment.secureCode=i)},null,8,["class","rules","modelValue"]),ue,c(f,{name:"安全碼",class:"invalid-feedback"})])])]),e("div",me,[e("div",he,[e("div",pe,[_e,e("div",fe,[e("div",ve,[ge,e("p",be,"NT$ "+m(n.calculateSubtotal),1)]),e("div",xe,[ye,e("p",ke,"NT$ "+m(n.processedShipping),1)]),e("div",Ce,[we,a.coupon?(u(),d("p",Se,"- NT$ "+m(a.coupon.discount),1)):(u(),d("p",De,"沒有可用的優惠卷"))])]),Ve,e("div",Ie,[e("div",Fe,[Ae,e("p",Ee,"NT$ "+m(n.calculateTotalPrice)+" 元",1)]),e("div",Ne,[C(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":s[8]||(s[8]=i=>a.eighteenPlusAgree=i),id:"eighteenPlusAgree"},null,512),[[D,a.eighteenPlusAgree]]),Pe]),e("div",Te,[C(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":s[9]||(s[9]=i=>a.privacyAgree=i),id:"privacyAgree"},null,512),[[D,a.privacyAgree]]),Ue])]),e("button",{href:"#",type:"submit",class:"btn bg-primary-low fs-5 text-white py-3",disabled:!n.checkoutAgree}," 確認完成並付款 ",8,Le)])])])])]),_:1},8,["onSubmit"]),e("div",Me,[e("div",je,[e("div",qe,[Be,e("div",Ye,[(u(!0),d(w,null,S(a.cart,(r,i)=>(u(),d("div",{class:"card shadow d-flex flex-row justify-content-between mb-3 fs-4 pe-3",key:i},[e("a",{href:"#",onClick:b=>n.toggleFavorite(r)},[e("i",{class:h(["bi heart position-absolute top-5 start-5",{"bi-heart":!r.isFavorite,"bi-heart-fill":r.isFavorite}])},null,2)],8,Re),e("a",{href:"#",onClick:b=>n.seeProduct(r.product_id),class:"wine_image_block"},[e("div",{class:"wine_image",style:P({"background-image":"url(/images/wine_images/"+r.image+".jpg)"})},null,4)],8,Oe),e("div",Qe,[e("div",ze,[r.is_hot?(u(),d("span",He,"熱門推薦")):y("",!0),e("div",We,[(u(!0),d(w,null,S(r.star,b=>(u(),d("i",{class:"bi bi-star-fill text-warning",key:b}))),128))])]),e("a",{href:"#",onClick:b=>n.seeProduct(r.id)},[e("h5",Je,m(r.chineseName),1)],8,Ge),Ke,e("div",Xe,[Ze,C(e("input",{type:"number",min:"0",class:"form-control text-end","onUpdate:modelValue":b=>r.qty=b,onClick:b=>n.updateCartQty(r)},null,8,$e),[[T,r.qty,void 0,{number:!0}]])]),e("div",et,[e("p",tt,"$ "+m(r.price),1)])])]))),128))]),st,e("div",at,[a.coupon?(u(),d("p",ot,"太棒了！訂單滿3000元，獲得免運卷！")):y("",!0),a.coupon?y("",!0):(u(),d("p",rt," 再 "+m(3e3-n.calculateSubtotal)+" 元即可獲得免運唷！ ",1)),e("div",null,[e("p",it,"(共 "+m(a.cart.length)+" 件商品)",1),e("p",lt,"小計: NT$ "+m(n.calculateSubtotal)+" 元",1)])])])])])])])}const pt=F(q,[["render",ct],["__scopeId","data-v-a254d8a0"]]);export{pt as default};
