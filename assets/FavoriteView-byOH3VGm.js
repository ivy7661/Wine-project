import{_ as u,m,g as f,c as d,a as e,t as c,y as v,z as g,F as w,i as C,o as l,j as h,p as x,d as F}from"./index-C0heAfxI.js";import{S as p}from"./sweetalert2.all-GUnQSQlJ.js";import{u as b}from"./user-WkEoJIIk.js";import{_ as S}from"./footerContainer-TBENB7Dp.js";import"./helpers-Hx-ZzB2u.js";const y={name:"FavoriteView",components:{},data(){return{title:"慾望酒單",userId:0,sortFilter:"1",list:[]}},mounted(){const{userToken:t,userId:s}=this.getUserCookie();t&&s?(this.userId=s,this.getFavoriteList()):this.$router.push("/login")},computed:{getSortList(){const t=JSON.parse(JSON.stringify(this.list));return this.sortFilter==="1"?t.sort((s,r)=>s.product.price-r.product.price):t.sort((s,r)=>r.product.price-s.product.price)}},methods:{...m(b,["getUserCookie","addToCart","resetUserFavorites"]),getFavoriteList(){if(!this.userId)return;const t=`https://wine-project-tmiy.onrender.com/favorite?userId=${this.userId}&_expand=product`;this.$http.get(t).then(s=>{this.list=s.data}).catch(s=>{console.log(s.response)})},removeFavorite(t){!this.userId||!(t!=null&&t.id)||p.fire({title:"確認移除收藏嗎?",text:`商品: ${t.product.chineseName}`,icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"確定",cancelButtonText:"取消"}).then(s=>{s.isConfirmed&&f.delete(`https://wine-project-tmiy.onrender.com/favorite/${t.id}`).then(r=>{this.getFavoriteList(),this.resetUserFavorites(),p.fire({title:"刪除成功",text:"",icon:"success"})}).catch(r=>{console.log(r.response),p.fire({title:"收藏失敗",text:"",icon:"error"})})})},addToUserCart(t){console.log("addToUserCart",t),this.addToCart(t)}}},i=t=>(x("data-v-cc742e02"),t=t(),F(),t),I={class:"container mb-5"},k={class:"row"},$={class:"d-flex justify-content-between align-items-end mt-3"},T={class:"mt-5 mb-1 fs-3 font-weight-normal fw-bold"},B=i(()=>e("option",{value:"1"},"依價格排序 ⬆",-1)),U=i(()=>e("option",{value:"2"},"依價格排序 ⬇",-1)),j=[B,U],L=i(()=>e("img",{src:S,class:"w-100 my-5"},null,-1)),N={class:"card"},V=["src"],D={class:"card-body"},J={class:"card-title text-wrap"},M={class:"card-text"},O={class:"d-flex justify-content-between align-items-end"},z={class:"card-text m-0"},A=["onClick"],E=i(()=>e("i",{class:"bi bi-trash"},null,-1)),P=[E],q=["onClick"],G=i(()=>e("i",{class:"bi bi-cart3"},null,-1)),H=[G];function K(t,s,r,Q,n,a){return l(),d("div",I,[e("div",k,[e("div",$,[e("h2",T,"會員 / "+c(n.title),1),v(e("select",{class:"filter-sort","onUpdate:modelValue":s[0]||(s[0]=o=>n.sortFilter=o)},j,512),[[g,n.sortFilter]])]),L,(l(!0),d(w,null,C(a.getSortList,o=>(l(),d("div",{class:"col-md-3 mt-3",key:o.id},[e("div",N,[e("img",{class:"card-img-top",src:t.$filters.imgPath(`/images/wine_images/${o.product.image}.jpg`),alt:"Card image cap"},null,8,V),e("div",D,[e("div",null,[e("h5",J,c(o.product.chineseName),1),e("p",M,c(o.product.wineStyle),1)]),e("div",O,[e("p",z,"NT$ "+c(o.product.price),1),e("div",null,[e("a",{href:"#",class:"btn btn-danger mx-3",onClick:h(_=>a.removeFavorite(o),["prevent"])},P,8,A),e("a",{href:"#",class:"btn btn-warning",onClick:h(_=>a.addToUserCart(o.product),["prevent"])},H,8,q)])])])])]))),128))])])}const tt=u(y,[["render",K],["__scopeId","data-v-cc742e02"]]);export{tt as default};
