import{S as f}from"./sweetalert2.all-rOmComfA.js";import{_ as y,m as I,g as u,h as w,c as n,a as t,F as v,i as g,k as m,t as d,j as C,o as l,x as k,A as F,y as S,L,p as P,d as $}from"./index-6puxszkb.js";import{u as x}from"./user-rKheNwX1.js";import{_ as T}from"./footerContainer-g7u_3nq6.js";import"./helpers-Hx-ZzB2u.js";var j={VITE_API_URL:"https://wine-project-tmiy.onrender.com",VITE_REPO_NAME:"Wine-project",BASE_URL:"/undefined/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API_URL:_}=j,D={name:"CartView",data(){return{title:"購物車",cartAll:[],cart:[],favoriteList:[],allFavoriteList:[],coupon:null,shipping:300,newQty:1,userId:""}},methods:{...I(x,["setUser","cleanUser","getUserCookie"]),getCartList(){const e=`${_}/carts`;u.get(e).then(s=>{this.cartAll=s.data,this.cart=s.data.filter(i=>i.userId===this.userId),console.log(this.cart)}).catch(()=>{})},updateCartQty(e){const s=`${_}/carts`,i={qty:e.qty};e.qty===0?this.deleteCartItem(e):u.patch(`${s}/${e.id}`,i).then(p=>{}).catch(()=>{})},deleteCartItem(e){f.fire({title:"確認刪除？",text:"刪除後將無法恢復！",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"確定刪除",cancelButtonText:"取消"}).then(s=>{if(s.isConfirmed){const i=`${_}/carts`;u.delete(`${i}/${e.id}`,{userId:this.userId,id:e.id}).then(p=>{this.getCartList(),f.fire({title:"移出購物車",text:"商品已經成功移出購物車",icon:"success"})}).catch(()=>{})}else e.qty=1})},seeProduct(e){this.$router.push({name:"ProductDetail",params:{id:e}})},getFavoriteList(){const e=`${_}/favorite`;u.get(e).then(s=>{this.allFavoriteList=s.data,this.favoriteList=s.data.filter(i=>i.userId===this.userId),this.checkFavoriteStatus()}).catch(()=>{})},checkFavoriteStatus(){this.cart.forEach(e=>{e.isFavorite=this.isProductInFavorite(e.id)})},isProductInFavorite(e){return this.favoriteList.some(s=>s.productId===e)},addToFavorite(e){if(!this.userId){alert("請先登入");return}const s=`${_}/favorite`,i=new Date,p=`${i.getFullYear()}/${(i.getMonth()+1).toString().padStart(2,"0")}/${i.getDate().toString().padStart(2,"0")}`,a={userId:this.userId,productId:e,created_at:p};u.post(s,a).then(c=>{this.getFavoriteList(),f.fire({title:"加入最愛",text:"商品已經成功加入最愛清單。",icon:"success"})}).catch(()=>{})},toggleFavorite(e){this.isProductInFavorite(e.id)?this.removeFromFavorite(e.id):this.addToFavorite(e.id)},removeFromFavorite(e){if(!this.userId){alert("請先登入");return}const s=`${_}/favorite`,i=this.allFavoriteList.findIndex(a=>a.productId===e&&a.userId===this.userId),p=this.allFavoriteList[i].id;u.delete(`${s}/${p}`,{userId:this.userId,id:i}).then(a=>{this.getFavoriteList(),f.fire({title:"移出最愛",text:"商品已經成功移出最愛清單",icon:"success"})}).catch(()=>{})},applyFreeShippingCoupon(){const e=`${_}/coupons`;u.get(e).then(s=>{this.coupon=s.data[0],console.log(this.coupon)}).catch(s=>{console.log(s)})},toCheckoutPage(){this.$router.push({name:"CheckoutPage"})}},watch:{calculateSubtotal(e){e>=3e3?this.applyFreeShippingCoupon():e<3e3&&(this.coupon=null)}},computed:{...w(x,["getUser"]),calculateSubtotal(){return this.cart.reduce((e,s)=>e+s.price*s.qty,0)},processedShipping(){return this.cart.length>0?this.shipping:0},calculateTotalPrice(){const e=this.calculateSubtotal,s=this.coupon?this.coupon.discount:0;return e+this.processedShipping-s}},mounted(){const{userId:e}=this.getUserCookie();this.userId=e,this.getCartList(),this.getFavoriteList()}},r=e=>(P("data-v-b4bd82cf"),e=e(),$(),e),E=r(()=>t("div",{class:"bg-cart pb-4"},[t("h2",{class:"pb-5 text-white container"},"購物車資訊")],-1)),U={class:"container pb-5"},V=r(()=>t("img",{src:T,class:"w-100 mb-5"},null,-1)),B={class:"row gy-4 flex-column-reverse flex-md-row"},N={class:"col-12 col-md-8"},A={class:"cartList d-flex flex-column border border-primary rounded"},q=r(()=>t("div",{class:"bg-primary fs-5 text-white mb-3 p-3 ps-4"},"訂購清單",-1)),R={class:"p-3"},M=["onClick"],O=["onClick"],Q={class:"card-body d-flex flex-column justify-content-around"},z={class:"d-flex mb-1 justify-content-between"},W={key:0,class:"badge bg-danger mb-2"},Y={class:"d-flex gap-1"},G=["onClick"],H={class:"card-title text-black fs-4"},J=r(()=>t("p",null,"750 ml",-1)),K={class:"input-group mb-3"},X=r(()=>t("span",{class:"input-group-text"},"數量",-1)),Z=["onUpdate:modelValue","onClick"],tt={class:"d-flex"},et={class:"text-danger"},st=r(()=>t("div",{class:"d-flex justify-content-center mt-3 mb-5"},[t("div",{class:"bg-black text-center line",style:{height:"1px"}})],-1)),it={class:"d-flex flex-column align-items-end pe-3"},ot={key:0,class:"text-primary fs-5"},at={key:1,class:"text-primary fs-5"},ct={class:"text-end mb-1"},rt={class:"fs-4"},nt={class:"col-12 col-md-4"},lt={class:"totalPrice"},dt={class:"card fs-5"},ht=r(()=>t("div",{class:"card-header bg-primary fs-5 p-3 ps-4 text-white"},"購物車",-1)),ut={class:"card-body"},_t={class:"d-flex justify-content-between"},pt=r(()=>t("p",{class:"card-text"},"商品小計",-1)),ft={class:"card-text"},mt={class:"d-flex justify-content-between"},vt=r(()=>t("p",{class:"card-text"},"運費價格",-1)),gt={class:"card-text"},xt={class:"d-flex justify-content-between"},bt=r(()=>t("p",{class:"card-text"},"優惠卷",-1)),yt={key:0,class:"card-text text-danger"},It={key:1,class:"card-text"},wt=r(()=>t("div",{class:"d-flex justify-content-center"},[t("div",{class:"bg-black text-center line",style:{height:"1px"}})],-1)),Ct={class:"card-body d-flex justify-content-between fw-bold"},kt=r(()=>t("p",{class:"card-text"},"總計",-1)),Ft={class:"card-text text-danger fs-4"};function St(e,s,i,p,a,c){return l(),n("div",null,[E,t("div",U,[V,t("div",B,[t("div",N,[t("div",A,[q,t("div",R,[(l(!0),n(v,null,g(a.cart,(o,b)=>(l(),n("div",{class:"card shadow d-flex flex-row justify-content-between mb-3 fs-4 pe-3",key:b},[t("a",{href:"#",onClick:h=>c.toggleFavorite(o)},[t("i",{class:k(["bi heart position-absolute top-5 start-5",{"bi-heart":!o.isFavorite,"bi-heart-fill":o.isFavorite}])},null,2)],8,M),t("a",{href:"#",onClick:h=>c.seeProduct(o.product_id),class:"wine_image_block"},[t("div",{class:"wine_image",style:F({"background-image":"url(/images/wine_images/"+o.image+".jpg)"})},null,4)],8,O),t("div",Q,[t("div",z,[o.is_hot?(l(),n("span",W,"熱門推薦")):m("",!0),t("div",Y,[(l(!0),n(v,null,g(o.star,h=>(l(),n("i",{class:"bi bi-star-fill text-warning",key:h}))),128))])]),t("a",{href:"#",onClick:h=>c.seeProduct(o.id)},[t("h5",H,d(o.chineseName),1)],8,G),J,t("div",K,[X,S(t("input",{type:"number",min:"0",class:"form-control text-end","onUpdate:modelValue":h=>o.qty=h,onClick:h=>c.updateCartQty(o)},null,8,Z),[[L,o.qty,void 0,{number:!0}]])]),t("div",tt,[t("p",et,"$ "+d(o.price),1)])])]))),128))]),st,t("div",it,[a.coupon?(l(),n("p",ot,"太棒了！訂單滿3000元，獲得免運！")):m("",!0),a.coupon?m("",!0):(l(),n("p",at," 再 "+d(3e3-c.calculateSubtotal)+" 元即可獲得免運唷！ ",1)),t("div",null,[t("p",ct,"(共 "+d(a.cart.length)+" 件商品)",1),t("p",rt,"小計: NT$ "+d(c.calculateSubtotal)+" 元",1)])])])]),t("div",nt,[t("div",lt,[t("div",dt,[ht,t("div",ut,[t("div",_t,[pt,t("p",ft,"NT$ "+d(c.calculateSubtotal),1)]),t("div",mt,[vt,t("p",gt,"NT$ "+d(c.processedShipping),1)]),t("div",xt,[bt,a.coupon?(l(),n("p",yt,"- NT$ "+d(a.coupon.discount),1)):(l(),n("p",It,"沒有可用的優惠卷"))])]),wt,t("div",Ct,[kt,t("p",Ft,"NT$ "+d(c.calculateTotalPrice)+" 元",1)]),t("a",{href:"#",class:"btn bg-primary-low text-white fs-5 py-3",onClick:s[0]||(s[0]=C((...o)=>c.toCheckoutPage&&c.toCheckoutPage(...o),["prevent"]))},"前往結帳頁面")])])])])])])}const Dt=y(D,[["render",St],["__scopeId","data-v-b4bd82cf"]]);export{Dt as default};
