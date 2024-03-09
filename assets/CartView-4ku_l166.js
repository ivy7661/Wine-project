import{S as g}from"./sweetalert2.all-T0PE6sm8.js";import{_ as F,L as S,m as P,I as T,g as u,h as $,c,b as x,w as j,a as t,F as m,i as v,k as b,t as h,j as f,r as y,o as l,x as D,A as U,y as V,z as E,p as N,d as A}from"./index-K5_kFfoh.js";import{u as w}from"./user-d25ZXIOv.js";/* empty css              */import{W as I}from"./WineGlassLoader-mQqPNoe3.js";import{_ as B}from"./footerContainer-TBENB7Dp.js";import"./helpers-Hx-ZzB2u.js";var q={VITE_API_URL:"https://wine-project-tmiy.onrender.com",VITE_REPO_NAME:"Wine-project",BASE_URL:"/Wine-project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API_URL:_}=q,W={name:"CartView",data(){return{title:"購物車",quantityOptions:[1,2,3,4,5,6,7,8],cartAll:[],cart:[],favoriteList:[],allFavoriteList:[],coupon:null,shipping:300,newQty:1,userId:"",isLoading:!1,fullPage:!0}},components:{Loading:S,WineGlassLoader:I},methods:{...P(w,["setUser","cleanUser","getUserCookie"]),doLoading(){this.$loading.show({props:{spinner:I},container:this.$refs.loadingContainer,canCancel:!0,color:"#000000",loader:"spinner",width:64,height:64,backgroundColor:"#ffffff",opacity:.5,zIndex:999},{default:T("WineGlassLoader")}).hide()},setLoadingTime(){this.isLoading=!0,setTimeout(()=>{this.isLoading=!1},800)},getCartList(){const e=`${_}/carts`;u.get(e).then(s=>{this.setLoadingTime(),this.cartAll=s.data,this.cart=s.data.filter(o=>o.userId===this.userId)}).catch(()=>{})},updateCartQty(e){const s=`${_}/carts`,o={qty:e.qty};e.qty===0?this.deleteCartItem(e):u.patch(`${s}/${e.id}`,o).then(p=>{}).catch(()=>{})},deleteCartItem(e){g.fire({title:"確認刪除？",text:"刪除後將無法恢復！",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"確定刪除",cancelButtonText:"取消"}).then(s=>{if(s.isConfirmed){const o=`${_}/carts`;u.delete(`${o}/${e.id}`,{userId:this.userId,id:e.id}).then(p=>{this.getCartList(),g.fire({title:"移出購物車",text:"商品已經成功移出購物車",icon:"success"})}).catch(()=>{})}else e.qty=1})},seeProduct(e){this.$router.push({name:"ProductDetail",params:{id:e}})},getFavoriteList(){const e=`${_}/favorite`;u.get(e).then(s=>{this.allFavoriteList=s.data,this.favoriteList=s.data.filter(o=>o.userId===this.userId),this.checkFavoriteStatus()}).catch(()=>{})},checkFavoriteStatus(){this.cart.forEach(e=>{e.isFavorite=this.isProductInFavorite(e.id)})},isProductInFavorite(e){return this.favoriteList.some(s=>s.productId===e)},addToFavorite(e){if(!this.userId){alert("請先登入");return}const s=`${_}/favorite`,o=new Date,p=`${o.getFullYear()}/${(o.getMonth()+1).toString().padStart(2,"0")}/${o.getDate().toString().padStart(2,"0")}`,a={userId:this.userId,productId:e,created_at:p};u.post(s,a).then(n=>{this.getFavoriteList(),g.fire({title:"加入最愛",text:"商品已經成功加入最愛清單。",icon:"success"})}).catch(()=>{})},toggleFavorite(e){this.isProductInFavorite(e.id)?this.removeFromFavorite(e.id):this.addToFavorite(e.id)},removeFromFavorite(e){if(!this.userId){alert("請先登入");return}const s=`${_}/favorite`,o=this.allFavoriteList.findIndex(a=>a.productId===e&&a.userId===this.userId),p=this.allFavoriteList[o].id;u.delete(`${s}/${p}`,{userId:this.userId,id:o}).then(a=>{this.getFavoriteList()}).catch(()=>{})},applyFreeShippingCoupon(){const e=`${_}/coupons`;u.get(e).then(s=>{this.coupon=s.data[0]}).catch(()=>{})},toCheckoutPage(){this.cart.length>0?this.$router.push({name:"CheckoutPage"}):this.cart.length===0&&alert("目前購物車沒有商品唷！！")}},watch:{calculateSubtotal(e){e>=3e3?this.applyFreeShippingCoupon():e<3e3&&(this.coupon=null)}},computed:{...$(w,["getUser"]),calculateSubtotal(){return this.cart.reduce((e,s)=>e+s.price*s.qty,0)},processedShipping(){return this.cart.length>0?this.shipping:0},calculateTotalPrice(){const e=this.calculateSubtotal,s=this.coupon?this.coupon.discount:0;return e+this.processedShipping-s}},mounted(){const{userId:e}=this.getUserCookie();this.userId=e,this.getCartList(),this.getFavoriteList()}},r=e=>(N("data-v-4c6adfb0"),e=e(),A(),e),R=r(()=>t("div",{class:"bg-cart pb-4"},[t("h2",{class:"pb-5 text-white container"},"購物車資訊")],-1)),M={class:"container pb-5"},O=r(()=>t("img",{src:B,class:"w-100 mb-5"},null,-1)),z=r(()=>t("div",{class:"progress mb-5 fs-5",role:"progressbar","aria-label":"Animated striped example"},[t("div",{class:"progress-bar bg-primary progress-bar-striped progress-bar-animated",role:"progressbar",style:{width:"33%"},"aria-valuenow":"33","aria-valuemin":"0","aria-valuemax":"100"}," 確認購物車 "),t("div",{class:"progress-bar bg-secondary",role:"progressbar",style:{width:"33%"},"aria-valuenow":"33","aria-valuemin":"0","aria-valuemax":"100"}," 填寫資料 "),t("div",{class:"progress-bar bg-secondary",role:"progressbar",style:{width:"34%"},"aria-valuenow":"34","aria-valuemin":"0","aria-valuemax":"100"}," 完成訂單 ")],-1)),G={class:"row gy-4 flex-column-reverse flex-md-row"},Q={class:"col-12 col-md-8"},Y={class:"cartList d-flex flex-column border border-primary rounded"},H=r(()=>t("div",{class:"bg-primary fs-5 text-white mb-3 p-3 ps-4"},"訂購清單",-1)),J={class:"p-3"},K=["onClick"],X=["onClick"],Z={class:"card-body d-flex flex-column justify-content-around"},tt={class:"d-flex mb-1 justify-content-between"},et={key:0,class:"badge bg-danger mb-2"},st={class:"d-flex gap-1"},it=["onClick"],at={class:"card-title text-black fs-4"},ot=r(()=>t("p",null,"750 ml",-1)),rt={class:"input-group mb-3"},nt=r(()=>t("span",{class:"input-group-text"},"數量",-1)),ct=["onUpdate:modelValue","onChange"],lt=["value"],dt={class:"d-flex"},ht={class:"text-danger"},ut=r(()=>t("div",{class:"d-flex justify-content-center mt-3 mb-5"},[t("div",{class:"bg-black text-center line",style:{height:"1px"}})],-1)),_t={class:"d-flex flex-column align-items-end pe-3"},pt={key:0,class:"text-primary fs-5"},ft={key:1,class:"text-primary fs-5"},gt={class:"text-end mb-1"},mt={class:"fs-4"},vt={class:"col-12 col-md-4"},bt={class:"totalPrice"},xt={class:"card fs-5"},yt=r(()=>t("div",{class:"card-header bg-primary fs-5 p-3 ps-4 text-white"},"購物車",-1)),wt={class:"card-body"},It={class:"d-flex justify-content-between"},Ct=r(()=>t("p",{class:"card-text"},"商品小計",-1)),Lt={class:"card-text"},kt={class:"d-flex justify-content-between"},Ft=r(()=>t("p",{class:"card-text"},"運費價格",-1)),St={class:"card-text"},Pt={class:"d-flex justify-content-between"},Tt=r(()=>t("p",{class:"card-text"},"優惠卷",-1)),$t={key:0,class:"card-text text-danger"},jt={key:1,class:"card-text"},Dt=r(()=>t("div",{class:"d-flex justify-content-center"},[t("div",{class:"bg-black text-center line",style:{height:"1px"}})],-1)),Ut={class:"card-body d-flex justify-content-between fw-bold"},Vt=r(()=>t("p",{class:"card-text"},"總計",-1)),Et={class:"card-text text-danger fs-4"};function Nt(e,s,o,p,a,n){const C=y("WineGlassLoader"),L=y("loading");return l(),c("div",null,[x(L,{active:a.isLoading,"onUpdate:active":s[0]||(s[0]=i=>a.isLoading=i),"is-full-page":a.fullPage},{default:j(()=>[x(C)]),_:1},8,["active","is-full-page"]),R,t("div",M,[O,z,t("div",G,[t("div",Q,[t("div",Y,[H,t("div",J,[(l(!0),c(m,null,v(a.cart,(i,k)=>(l(),c("div",{class:"card shadow d-flex flex-row justify-content-between mb-3 fs-4 pe-3",key:k},[t("a",{href:"#",onClick:f(d=>n.toggleFavorite(i),["prevent"])},[t("i",{class:D(["bi heart position-absolute top-5 start-5",{"bi-heart":!i.isFavorite,"bi-heart-fill":i.isFavorite}])},null,2)],8,K),t("a",{href:"#",onClick:f(d=>n.seeProduct(i.product_id),["prevent"]),class:"wine_image_block"},[t("div",{class:"wine_image",style:U({"background-image":`url(${e.$filters.imgPath("/images/wine_images/"+i.image+".jpg")})`})},null,4)],8,X),t("div",Z,[t("div",tt,[i.is_hot?(l(),c("span",et,"熱門推薦")):b("",!0),t("div",st,[(l(!0),c(m,null,v(i.star,d=>(l(),c("i",{class:"bi bi-star-fill text-warning",key:d}))),128))])]),t("a",{href:"#",onClick:f(d=>n.seeProduct(i.id),["prevent"])},[t("h5",at,h(i.chineseName),1)],8,it),ot,t("div",rt,[nt,V(t("select",{class:"form-select","onUpdate:modelValue":d=>i.qty=d,onChange:d=>n.updateCartQty(i)},[(l(!0),c(m,null,v(a.quantityOptions,d=>(l(),c("option",{key:d,value:d},h(d),9,lt))),128))],40,ct),[[E,i.qty]])]),t("div",dt,[t("p",ht,"$ "+h(i.price),1)])])]))),128))]),ut,t("div",_t,[a.coupon?(l(),c("p",pt,"太棒了！訂單滿3000元，獲得免運！")):b("",!0),a.coupon?b("",!0):(l(),c("p",ft," 再 "+h(3e3-n.calculateSubtotal)+" 元即可獲得免運唷！ ",1)),t("div",null,[t("p",gt,"(共 "+h(a.cart.length)+" 件商品)",1),t("p",mt,"小計: NT$ "+h(n.calculateSubtotal)+" 元",1)])])])]),t("div",vt,[t("div",bt,[t("div",xt,[yt,t("div",wt,[t("div",It,[Ct,t("p",Lt,"NT$ "+h(n.calculateSubtotal),1)]),t("div",kt,[Ft,t("p",St,"NT$ "+h(n.processedShipping),1)]),t("div",Pt,[Tt,a.coupon?(l(),c("p",$t,"- NT$ "+h(a.coupon.discount),1)):(l(),c("p",jt,"沒有可用的優惠卷"))])]),Dt,t("div",Ut,[Vt,t("p",Et,"NT$ "+h(n.calculateTotalPrice)+" 元",1)]),t("a",{href:"#",class:"btn bg-primary-low text-white fs-5 py-3",onClick:s[1]||(s[1]=f((...i)=>n.toCheckoutPage&&n.toCheckoutPage(...i),["prevent"]))},"前往結帳頁面")])])])])])])}const zt=F(W,[["render",Nt],["__scopeId","data-v-4c6adfb0"]]);export{zt as default};
