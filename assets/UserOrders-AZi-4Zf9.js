import{_ as d,m as l,g as u,c as i,a as s,t as h,y as m,z as p,F as f,i as _,o as n}from"./index-3GCOjAQq.js";import{S as a}from"./sweetalert2.all-AeZisGce.js";import{u as g}from"./user-td7QyERS.js";import{_ as v}from"./footerContainer-TBENB7Dp.js";import"./helpers-Hx-ZzB2u.js";const w={name:"UserOrders",components:{},data(){return{title:"會員訂單",orderList:[],userId:0}},mounted(){const{userToken:e,userId:t}=this.getUserCookie();e&&t?(this.userId=t,this.getOrders()):this.$router.push("/login")},methods:{...l(g,["getUserCookie"]),getOrders(){if(!this.userId)return;const e=`https://wine-project-tmiy.onrender.com/orders?userId=${this.userId}&_expand=user`;this.$http.get(e).then(t=>{console.log("getOrders",t.data),this.orderList=t.data}).catch(t=>{console.log(t.response)})},removeFavorite(e){!this.userId||!(e!=null&&e.id)||a.fire({title:"確認移除收藏嗎?",text:`商品: ${e.product.chineseName}`,icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"確定",cancelButtonText:"取消"}).then(t=>{t.isConfirmed&&u.delete(`https://wine-project-tmiy.onrender.com/favorite/${e.id}`).then(o=>{this.getFavoriteList(),this.resetUserFavorites(),a.fire({title:"刪除成功",text:"",icon:"success"})}).catch(o=>{console.log(o.response),a.fire({title:"收藏失敗",text:"",icon:"error"})})})}}},$={class:"container mb-5"},x={class:"row"},B={class:"d-flex justify-content-between align-items-end mt-3"},y={class:"mt-5 mb-1 fs-3 font-weight-normal fw-bold"},F=s("option",{value:"1"},"依價格排序 ⬆",-1),I=s("option",{value:"2"},"依價格排序 ⬇",-1),k=[F,I],C=s("img",{src:v,class:"w-100 my-5"},null,-1);function S(e,t,o,U,c,b){return n(),i("div",$,[s("div",x,[s("div",B,[s("h2",y,"會員 / "+h(c.title),1),m(s("select",{class:"filter-sort","onUpdate:modelValue":t[0]||(t[0]=r=>e.sortFilter=r)},k,512),[[p,e.sortFilter]])]),C,(n(!0),i(f,null,_(e.getSortList,r=>(n(),i("div",{class:"col-md-3 mt-3",key:r.id}," Table "))),128))])])}const N=d(w,[["render",S]]);export{N as default};
