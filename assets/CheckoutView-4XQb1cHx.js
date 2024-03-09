import{S as x}from"./sweetalert2.all-T0PE6sm8.js";import{_ as N,L as T,m as U,I as M,g as p,h as j,c as d,b as c,w as I,a as e,F as C,i as k,k as w,t as h,r as y,o as u,x as _,y as S,B as V,j as D,A as q,z as B,p as R,d as Y}from"./index-K5_kFfoh.js";import{u as F}from"./user-d25ZXIOv.js";/* empty css              */import{W as L}from"./WineGlassLoader-mQqPNoe3.js";import{_ as O}from"./footerContainer-TBENB7Dp.js";import"./helpers-Hx-ZzB2u.js";var W={VITE_API_URL:"https://wine-project-tmiy.onrender.com",VITE_REPO_NAME:"Wine-project",BASE_URL:"/Wine-project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API_URL:f}=W,z={name:"CheckoutPage",data(){return{title:"結帳頁面",cartAll:[],cart:[],userData:{user:{customerEmail:"",customerName:"",customerTel:"",customerAddress:""},payment:{creditCard:"",cardName:"",cardExpiration:"",secureCode:""}},quantityOptions:[1,2,3,4,5,6,7,8],coupon:null,shipping:300,newQty:1,eighteenPlusAgree:!1,privacyAgree:!1,userId:"",isLoading:!1,fullPage:!0}},components:{Loading:T,WineGlassLoader:L},methods:{...U(F,["setUser","cleanUser","getUserCookie"]),doLoading(){this.$loading.show({props:{spinner:L},container:this.$refs.loadingContainer,canCancel:!0,color:"#000000",loader:"spinner",width:64,height:64,backgroundColor:"#ffffff",opacity:.5,zIndex:999},{default:M("WineGlassLoader")}).hide()},setLoadingTime(){this.isLoading=!0,setTimeout(()=>{this.isLoading=!1},800)},getCartList(){const t=`${f}/carts`;p.get(t).then(s=>{this.setLoadingTime(),this.cartAll=s.data,this.cart=s.data.filter(l=>l.userId===this.userId)}).catch(()=>{})},updateCartQty(t){const s=`${f}/carts`,l={qty:t.qty};t.qty===0?this.deleteCartItem(t):p.patch(`${s}/${t.id}`,l).then(g=>{}).catch(()=>{})},deleteCartItem(t){x.fire({title:"確認刪除？",text:"刪除後將無法恢復！",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"確定刪除",cancelButtonText:"取消"}).then(s=>{if(s.isConfirmed){const l=`${f}/carts`;p.delete(`${l}/${t.id}`,{userId:this.userId,id:t.id}).then(g=>{this.getCartList(),x.fire({title:"移出購物車",text:"商品已經成功移出購物車",icon:"success"})}).catch(()=>{})}else t.qty=1})},clearCart(){const t=`${f}/carts`;this.cart.forEach(s=>{console.log(s),p.delete(`${t}/${s.id}`).then(()=>{}).catch(l=>{console.error("刪除購物車商品失敗:",l)})})},getFavoriteList(){const t=`${f}/favorite`;p.get(t).then(s=>{this.allFavoriteList=s.data,this.favoriteList=s.data.filter(l=>l.userId===this.userId),this.checkFavoriteStatus()}).catch(()=>{})},checkFavoriteStatus(){this.cart.forEach(t=>{t.isFavorite=this.isProductInFavorite(t.id)})},isProductInFavorite(t){return this.favoriteList.some(s=>s.productId===t)},addToFavorite(t){if(!this.userId){alert("請先登入");return}const s=`${f}/favorite`,l=new Date,g=`${l.getFullYear()}/${(l.getMonth()+1).toString().padStart(2,"0")}/${l.getDate().toString().padStart(2,"0")}`,a={userId:this.userId,productId:t,created_at:g};p.post(s,a).then(n=>{this.getFavoriteList(),x.fire({title:"加入最愛",text:"商品已經成功加入最愛清單。",icon:"success"})}).catch(()=>{})},toggleFavorite(t){this.isProductInFavorite(t.id)?this.removeFromFavorite(t.id):this.addToFavorite(t.id)},removeFromFavorite(t){if(!this.userId){alert("請先登入");return}const s=`${f}/favorite`,l=this.allFavoriteList.findIndex(a=>a.productId===t&&a.userId===this.userId),g=this.allFavoriteList[l].id;p.delete(`${s}/${g}`,{userId:this.userId,id:l}).then(a=>{this.getFavoriteList()}).catch(()=>{})},applyFreeShippingCoupon(){const t=`${f}/coupons`;p.get(t).then(s=>{this.coupon=s.data[0]}).catch(()=>{})},seeProduct(t){this.$router.push({name:"ProductDetail",params:{id:t}})},isPhone(t){return/^(09)[0-9]{8}$/.test(t)?!0:"需要正確的電話號碼"},isSecurityCode(t){return/^\d{3}$/.test(t)?!0:"需要正確的三位數安全碼"},isCreditCard(t){return/^\d{16}$/.test(t)?!0:"需要正確的信用卡號"},isDateFormat(t){return/^\d{2}\/\d{2}$/.test(t)?!0:"需要正確的日期格式 MM/YY"},createOrder(){const t=`${f}/orders`,s=new Date,l=`${s.getFullYear()}/${(s.getMonth()+1).toString().padStart(2,"0")}/${s.getDate().toString().padStart(2,"0")} ${s.getHours().toString().padStart(2,"0")}:${s.getMinutes().toString().padStart(2,"0")}`,g={user:{userId:this.userId,name:this.userData.user.customerName,phone:this.userData.user.customerTel,email:this.userData.user.customerEmail,address:this.userData.user.customerAddress},cart:this.cart,is_paid:1,orderStatus:"待出貨",create_at:l};p.post(t,g).then(a=>{this.clearCart(),this.userData={user:{customerEmail:"",customerName:"",customerTel:"",customerAddress:""},payment:{creditCard:"",cardName:"",cardExpiration:"",secureCode:""}},this.toPaymentReceived()}).catch(()=>{x.fire({title:"付款失敗",text:"請稍後再試",icon:"error"})})},toPaymentReceived(){this.$router.push({name:"PaymentReceived"})}},watch:{calculateSubtotal(t){t>=3e3?this.applyFreeShippingCoupon():t<3e3&&(this.coupon=null)}},computed:{...j(F,["getUser"]),calculateSubtotal(){return this.cart.reduce((t,s)=>t+s.price*s.qty,0)},processedShipping(){return this.cart.length>0?this.shipping:0},calculateTotalPrice(){const t=this.calculateSubtotal,s=this.coupon?this.coupon.discount:0;return t+this.processedShipping-s},checkoutAgree(){return this.eighteenPlusAgree&&this.privacyAgree}},mounted(){const{userId:t}=this.getUserCookie();this.userId=t,this.getCartList(),this.getFavoriteList()}},o=t=>(R("data-v-3c5959ec"),t=t(),Y(),t),G=o(()=>e("div",{class:"bg-checkout pb-4"},[e("h2",{class:"pb-5 text-white container"},"填寫訂單資訊")],-1)),$={class:"container pb-5"},Q=o(()=>e("img",{src:O,class:"w-100 mb-5"},null,-1)),H=o(()=>e("div",{class:"progress mb-5 fs-5",role:"progressbar","aria-label":"Animated striped example"},[e("div",{class:"progress-bar bg-primary",role:"progressbar",style:{width:"33%"},"aria-valuenow":"33","aria-valuemin":"0","aria-valuemax":"100"}," 確認購物車 "),e("div",{class:"progress-bar bg-primary progress-bar-striped progress-bar-animated",role:"progressbar",style:{width:"33%"},"aria-valuenow":"33","aria-valuemin":"0","aria-valuemax":"100"}," 填寫資料 "),e("div",{class:"progress-bar bg-secondary",role:"progressbar",style:{width:"34%"},"aria-valuenow":"34","aria-valuemin":"0","aria-valuemax":"100"}," 完成訂單 ")],-1)),J={class:"row gy-4 flex-column-reverse flex-md-row"},K={class:"col-12 col-md-8"},X=o(()=>e("h4",{class:"pb-4"},"1. 收件者資訊",-1)),Z={class:"pb-5"},ee={class:"form-floating mb-3"},te=o(()=>e("label",{for:"username"},"姓名",-1)),se={class:"form-floating mb-3"},ae=o(()=>e("label",{for:"customerAddress"},"寄送地址",-1)),oe={class:"form-floating mb-3"},ie=o(()=>e("label",{for:"customerTel"},"電話",-1)),re={class:"form-floating mb-3"},le=o(()=>e("label",{for:"customerEmail"},"電子郵件",-1)),ce=o(()=>e("h4",{class:"pb-4"},"2. 付款資訊",-1)),ne={class:"pb-5"},de={class:"form-floating mb-3"},ue=o(()=>e("label",{for:"creditCard"},"卡號",-1)),me={class:"form-floating mb-3"},he=o(()=>e("label",{for:"cardName"},"持卡人姓名",-1)),pe={class:"form-floating mb-3"},_e=o(()=>e("label",{for:"cardExpiration"},"有效日期 (MM/YY)",-1)),fe={class:"form-floating mb-3"},ge=o(()=>e("label",{for:"secureCode"},"安全碼",-1)),ve={class:"col-12 col-md-4"},be={class:"totalPrice pb-5"},ye={class:"card fs-5"},xe=o(()=>e("div",{class:"card-header bg-primary fs-5 p-3 ps-4 text-white"},"購物車",-1)),Ce={class:"card-body"},ke={class:"d-flex justify-content-between"},we=o(()=>e("p",{class:"card-text"},"商品小計",-1)),Se={class:"card-text"},De={class:"d-flex justify-content-between"},Ie=o(()=>e("p",{class:"card-text"},"運費價格",-1)),Ve={class:"card-text"},Fe={class:"d-flex justify-content-between"},Le=o(()=>e("p",{class:"card-text"},"優惠卷",-1)),Ae={key:0,class:"card-text text-danger"},Pe={key:1,class:"card-text"},Ee=o(()=>e("div",{class:"d-flex justify-content-center"},[e("div",{class:"bg-black text-center line",style:{height:"1px"}})],-1)),Ne={class:"card-body d-flex flex-column justify-content-between"},Te={class:"d-flex justify-content-between fw-bold"},Ue=o(()=>e("p",{class:"card-text"},"總計",-1)),Me={class:"card-text text-danger fs-4"},je={class:"form-check mb-3"},qe=o(()=>e("label",{class:"form-check-label",for:"eighteenPlusAgree"}," 我已年滿18歲 ",-1)),Be={class:"form-check"},Re=o(()=>e("label",{class:"form-check-label",for:"privacyAgree"}," 我同意服務及隱私權條款 ",-1)),Ye=["disabled"],Oe={class:"row"},We={class:"col-12 col-md-8"},ze={class:"cartList d-flex flex-column border border-primary rounded"},Ge=o(()=>e("div",{class:"bg-primary fs-5 text-white mb-3 p-3 ps-4"},"訂購清單",-1)),$e={class:"p-3"},Qe=["onClick"],He=["onClick"],Je={class:"card-body d-flex flex-column justify-content-around"},Ke={class:"d-flex mb-1 justify-content-between"},Xe={key:0,class:"badge bg-danger mb-2"},Ze={class:"d-flex gap-1"},et=["onClick"],tt={class:"card-title text-black fs-4"},st=o(()=>e("p",null,"750 ml",-1)),at={class:"input-group mb-3"},ot=o(()=>e("span",{class:"input-group-text"},"數量",-1)),it=["onUpdate:modelValue","onChange"],rt=["value"],lt={class:"d-flex"},ct={class:"text-danger"},nt=o(()=>e("div",{class:"d-flex justify-content-center mt-3 mb-5"},[e("div",{class:"bg-black text-center line",style:{height:"1px"}})],-1)),dt={class:"d-flex flex-column align-items-end pe-3"},ut={key:0,class:"text-primary fs-5"},mt={key:1,class:"text-primary fs-5"},ht={class:"text-end mb-1"},pt={class:"fs-4"};function _t(t,s,l,g,a,n){const A=y("WineGlassLoader"),P=y("loading"),v=y("VeeField"),b=y("ErrorMessage"),E=y("VeeForm");return u(),d("div",null,[c(P,{active:a.isLoading,"onUpdate:active":s[0]||(s[0]=i=>a.isLoading=i),"is-full-page":a.fullPage},{default:I(()=>[c(A)]),_:1},8,["active","is-full-page"]),G,e("div",$,[Q,H,c(E,{ref:"checkout-form",onSubmit:n.createOrder},{default:I(({errors:i})=>[e("div",J,[e("div",K,[X,e("div",Z,[e("div",ee,[c(v,{id:"customerName",name:"姓名",type:"text",class:_(["form-control",{"is-invalid":i.姓名}]),placeholder:"請輸入名稱",rules:"required|min:2|max:16",modelValue:a.userData.user.customerName,"onUpdate:modelValue":s[1]||(s[1]=r=>a.userData.user.customerName=r)},null,8,["class","modelValue"]),te,c(b,{name:"姓名",class:"invalid-feedback"})]),e("div",se,[c(v,{id:"customerAddress",name:"地址",type:"text",class:_(["form-control",{"is-invalid":i.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:a.userData.user.customerAddress,"onUpdate:modelValue":s[2]||(s[2]=r=>a.userData.user.customerAddress=r)},null,8,["class","modelValue"]),ae,c(b,{name:"地址",class:"invalid-feedback"})]),e("div",oe,[c(v,{id:"customerTel",name:"電話",type:"tel",class:_(["form-control",{"is-invalid":i.電話}]),placeholder:"請輸入電話",rules:n.isPhone,modelValue:a.userData.user.customerTel,"onUpdate:modelValue":s[3]||(s[3]=r=>a.userData.user.customerTel=r)},null,8,["class","rules","modelValue"]),ie,c(b,{name:"電話",class:"invalid-feedback"})]),e("div",re,[c(v,{id:"customerEmail",name:"email",type:"email",class:_(["form-control",{"is-invalid":i.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:a.userData.user.customerEmail,"onUpdate:modelValue":s[4]||(s[4]=r=>a.userData.user.customerEmail=r)},null,8,["class","modelValue"]),le,c(b,{name:"email",class:"invalid-feedback"})])]),ce,e("div",ne,[e("div",de,[c(v,{id:"creditCard",name:"信用卡號",type:"text",class:_(["form-control",{"is-invalid":i.信用卡號}]),placeholder:"請輸入信用卡號",rules:n.isCreditCard,modelValue:a.userData.payment.creditCard,"onUpdate:modelValue":s[5]||(s[5]=r=>a.userData.payment.creditCard=r)},null,8,["class","rules","modelValue"]),ue,c(b,{name:"信用卡號",class:"invalid-feedback"})]),e("div",me,[c(v,{id:"cardName",name:"持卡人姓名",type:"text",class:_(["form-control",{"is-invalid":i.持卡人姓名}]),placeholder:"請輸入持卡人姓名",rules:"required|min:2|max:16",modelValue:a.userData.payment.cardName,"onUpdate:modelValue":s[6]||(s[6]=r=>a.userData.payment.cardName=r)},null,8,["class","modelValue"]),he,c(b,{name:"持卡人姓名",class:"invalid-feedback"})]),e("div",pe,[c(v,{id:"cardExpiration",name:"有效日期",type:"text",class:_(["form-control",{"is-invalid":i.有效日期}]),placeholder:"請輸入有效日期 (MM/YY)",rules:n.isDateFormat,modelValue:a.userData.payment.cardExpiration,"onUpdate:modelValue":s[7]||(s[7]=r=>a.userData.payment.cardExpiration=r)},null,8,["class","rules","modelValue"]),_e,c(b,{name:"有效日期",class:"invalid-feedback"})]),e("div",fe,[c(v,{id:"secureCode",name:"安全碼",type:"number",class:_(["form-control",{"is-invalid":i.安全碼}]),placeholder:"請輸入三位數的安全碼",rules:n.isSecurityCode,modelValue:a.userData.payment.secureCode,"onUpdate:modelValue":s[8]||(s[8]=r=>a.userData.payment.secureCode=r)},null,8,["class","rules","modelValue"]),ge,c(b,{name:"安全碼",class:"invalid-feedback"})])])]),e("div",ve,[e("div",be,[e("div",ye,[xe,e("div",Ce,[e("div",ke,[we,e("p",Se,"NT$ "+h(n.calculateSubtotal),1)]),e("div",De,[Ie,e("p",Ve,"NT$ "+h(n.processedShipping),1)]),e("div",Fe,[Le,a.coupon?(u(),d("p",Ae,"- NT$ "+h(a.coupon.discount),1)):(u(),d("p",Pe,"沒有可用的優惠卷"))])]),Ee,e("div",Ne,[e("div",Te,[Ue,e("p",Me,"NT$ "+h(n.calculateTotalPrice)+" 元",1)]),e("div",je,[S(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":s[9]||(s[9]=r=>a.eighteenPlusAgree=r),id:"eighteenPlusAgree"},null,512),[[V,a.eighteenPlusAgree]]),qe]),e("div",Be,[S(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":s[10]||(s[10]=r=>a.privacyAgree=r),id:"privacyAgree"},null,512),[[V,a.privacyAgree]]),Re])]),e("button",{href:"#",type:"submit",class:"btn bg-primary-low fs-5 text-white py-3",disabled:!n.checkoutAgree}," 確認完成並付款 ",8,Ye)])])])])]),_:1},8,["onSubmit"]),e("div",Oe,[e("div",We,[e("div",ze,[Ge,e("div",$e,[(u(!0),d(C,null,k(a.cart,(i,r)=>(u(),d("div",{class:"card shadow d-flex flex-row justify-content-between mb-3 fs-4 pe-3",key:r},[e("a",{href:"#",onClick:D(m=>n.toggleFavorite(i),["prevent"])},[e("i",{class:_(["bi heart position-absolute top-5 start-5",{"bi-heart":!i.isFavorite,"bi-heart-fill":i.isFavorite}])},null,2)],8,Qe),e("a",{href:"#",onClick:D(m=>n.seeProduct(i.product_id),["prevent"]),class:"wine_image_block"},[e("div",{class:"wine_image",style:q({"background-image":`url(${t.$filters.imgPath("/images/wine_images/"+i.image+".jpg")})`})},null,4)],8,He),e("div",Je,[e("div",Ke,[i.is_hot?(u(),d("span",Xe,"熱門推薦")):w("",!0),e("div",Ze,[(u(!0),d(C,null,k(i.star,m=>(u(),d("i",{class:"bi bi-star-fill text-warning",key:m}))),128))])]),e("a",{href:"#",onClick:D(m=>n.seeProduct(i.id),["prevent"])},[e("h5",tt,h(i.chineseName),1)],8,et),st,e("div",at,[ot,S(e("select",{class:"form-select","onUpdate:modelValue":m=>i.qty=m,onChange:m=>n.updateCartQty(i)},[(u(!0),d(C,null,k(a.quantityOptions,m=>(u(),d("option",{key:m,value:m},h(m),9,rt))),128))],40,it),[[B,i.qty]])]),e("div",lt,[e("p",ct,"$ "+h(i.price),1)])])]))),128))]),nt,e("div",dt,[a.coupon?(u(),d("p",ut,"太棒了！訂單滿3000元，獲得免運卷！")):w("",!0),a.coupon?w("",!0):(u(),d("p",mt," 再 "+h(3e3-n.calculateSubtotal)+" 元即可獲得免運唷！ ",1)),e("div",null,[e("p",ht,"(共 "+h(a.cart.length)+" 件商品)",1),e("p",pt,"小計: NT$ "+h(n.calculateSubtotal)+" 元",1)])])])])])])])}const kt=N(z,[["render",_t],["__scopeId","data-v-3c5959ec"]]);export{kt as default};
