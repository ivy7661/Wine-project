import{S as v}from"./sweetalert2.all-VcjyylQf.js";import{_ as I,m as w,g as b,h as F,c as l,a as t,x as S,k as P,F as m,i as p,t as n,A as g,f as x,o as r,e as k,p as L,d as C}from"./index-woH4x7mR.js";import{u as y}from"./user-OY70hAFy.js";import"./helpers-Hx-ZzB2u.js";const D="/Wine-project/images/wine with food.jpg";var N={VITE_API_URL:"http://localhost:3001",VITE_REPO_NAME:"",BASE_URL:"/Wine-project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API_URL:f}=N,j={name:"ProductDetail",components:{},data(){return{title:"產品詳情",products:[],selectedProduct:{},similarWines:[],cart:[],favoriteList:[],allFavoriteList:[],userId:""}},methods:{...w(y,["setUser","cleanUser","getUserCookie"]),getProduct(){const e=`${f}/products`;b.get(e).then(i=>{this.products=i.data,this.selectedProduct=this.products.find(a=>a.id===this.$route.params.id),this.findSimilarWinesByGrape(this.selectedProduct,this.products)}).catch(()=>{alert("未正確取得產品資訊，請稍後再試～")})},getCartList(){const e=`${f}/carts`;b.get(e).then(i=>{this.cart=i.data.filter(a=>a.userId===this.userId)}).catch(i=>{console.log("未正確取得購物車"),console.log(i.data)})},addToCart(e){if(!this.userId){alert("請先登入");return}const i=`${f}/carts`,a=this.cart.findIndex(h=>h.product_id===e.id&&h.userId===this.userId);if(a===-1){const h={product_id:e.id,chineseName:e.chineseName,image:e.image,price:e.price,is_hot:e.is_hot,star:e.star,qty:1,userId:this.userId};b.post(i,h).then(s=>{v.fire({title:"成功加入購物車",text:"商品已經成功加入購物車",icon:"success"})}).catch(()=>{v.fire({title:"加入購物車失敗",text:"請稍後再試",icon:"error"})})}else{const h=this.cart[a].id;this.cart[a].qty+=1;const s={qty:this.cart[a].qty};b.patch(`${i}/${h}`,s).then(_=>{v.fire({title:"成功加入購物車",text:"商品已經成功加入購物車",icon:"success"})}).catch(_=>{console.log(_.response),v.fire({title:"加入購物車失敗",text:"請稍後再試",icon:"error"})})}this.getCartList()},getFavoriteList(){const e=`${f}/favorite`;b.get(e).then(i=>{this.allFavoriteList=i.data,this.favoriteList=i.data.filter(a=>a.userId===this.userId),this.checkFavoriteStatus()}).catch(i=>{console.log(i)})},checkFavoriteStatus(){this.selectedProduct.isFavorite=this.favoriteList.some(e=>e.productId===this.selectedProduct.id)},addToFavorite(e){if(!this.userId){alert("請先登入");return}const i=`${f}/favorite`,a=new Date,h=`${a.getFullYear()}/${(a.getMonth()+1).toString().padStart(2,"0")}/${a.getDate().toString().padStart(2,"0")}`,s={userId:this.userId,productId:this.selectedProduct.id,created_at:h};b.post(i,s).then(_=>{console.log(_.data),this.getFavoriteList(),v.fire({title:"加入最愛",text:"商品已經成功加入最愛清單。",icon:"success"})}).catch(()=>{alert("未正確取得，請稍後再試～")})},toggleFavorite(e){this.selectedProduct.isFavorite?this.removeFromFavorite(e.id):this.addToFavorite(e.id)},removeFromFavorite(e){if(!this.userId){alert("請先登入");return}const i=`${f}/favorite`,a=this.allFavoriteList.findIndex(s=>s.productId===e&&s.userId===this.userId);console.log(this.allFavoriteList[a].id);const h=this.allFavoriteList[a].id;b.delete(`${i}/${h}`,{userId:this.userId,id:a}).then(s=>{console.log(s),this.getFavoriteList(),v.fire({title:"移出最愛",text:"商品已經成功移出最愛清單",icon:"success"})}).catch(s=>{console.log(s)})},findSimilarWinesByGrape(e,i,a=4){const h=e.grape,_=i.filter(d=>d.grape.some(u=>h.includes(u))).filter(d=>d.id!==e.id);_.sort((d,u)=>u.star-d.star);const c=_.slice(0,a);this.similarWines=c},seeProduct(e){this.$router.push({name:"ProductDetail",params:{id:e}}),this.getProduct()}},computed:{...F(y,["getUser"])},mounted(){const{userId:e}=this.getUserCookie();this.userId=e,this.getProduct(),this.getCartList(),this.getFavoriteList()}},o=e=>(L("data-v-e170cb85"),e=e(),C(),e),W={class:"container"},E={class:"productDisplay pt-5 pb-5"},T={class:"row justify-content-between mb-4"},U={class:"col-12 col-md-4 product-image-block d-flex flex-column align-items-center justify-content-between"},V={class:"position-relative"},A=["src","alt"],B=x('<ul class="socialFriends d-flex" data-v-e170cb85><li data-v-e170cb85><a href="#" data-v-e170cb85><i class="bi bi-facebook" data-v-e170cb85></i></a></li><li data-v-e170cb85><a href="#" data-v-e170cb85><i class="bi bi-instagram" data-v-e170cb85></i></a></li><li data-v-e170cb85><a href="#" data-v-e170cb85><i class="bi bi-line" data-v-e170cb85></i></a></li></ul>',1),R={class:"col-12 col-md-6"},q={class:"card-body"},G={class:"d-flex justify-content-between mb-3"},M={key:0,class:"badge bg-danger fs-6"},O={class:"text-warning d-flex gap-1 mb-1"},z={class:"card-title mb-2"},Q={class:"d-flex justify-content-between mb-3"},Y=o(()=>t("p",{class:"card-text"},"750ml",-1)),H={class:"card-text fs-4 text-danger fw-bold"},J=o(()=>t("h5",null,"風味分類",-1)),K={class:"row"},X=["src","alt"],Z=o(()=>t("h5",null,"餐酒搭配選擇",-1)),$={class:"row"},tt=o(()=>t("img",{src:D,alt:"grape",class:"w-100 rounded-pill mb-2"},null,-1)),st={class:"row justify-content-between mb-4"},et={class:"col-12 col-md-6 mt-4"},it=o(()=>t("h4",{class:"mb-4"},"葡萄酒品味",-1)),ct=o(()=>t("p",{class:"mb-1"},"單寧",-1)),at={class:"progress",role:"progressbar","aria-label":"Default striped example","aria-valuemin":"0","aria-valuemax":"100"},ot=o(()=>t("p",{class:"mb-1"},"酸度",-1)),lt={class:"progress",role:"progressbar","aria-label":"Default striped example","aria-valuemin":"0","aria-valuemax":"100"},rt=o(()=>t("p",{class:"mb-1"},"甜度",-1)),dt={class:"progress",role:"progressbar","aria-label":"Default striped example","aria-valuemin":"0","aria-valuemax":"100"},nt=o(()=>t("p",{class:"mb-1"},"酒體",-1)),ht={class:"progress",role:"progressbar","aria-label":"Default striped example","aria-valuemin":"0","aria-valuemax":"100"},_t={class:"col-12 col-md-5 mt-4"},ut=o(()=>t("h4",{class:"mb-4"},"產品介紹",-1)),bt={class:"table table-striped table-hover"},vt=o(()=>t("th",null,"酒種",-1)),mt=o(()=>t("th",null,"產地",-1)),pt=o(()=>t("th",null,"出產酒莊",-1)),ft=o(()=>t("th",null,"葡萄品種",-1)),gt={key:0},xt={class:"row"},Pt={class:"col"},yt=o(()=>t("h4",{class:"mb-4"},"好評推推推",-1)),It={class:"row d-flex align-items-stretch gy-3"},wt={class:"col-6 col-md-3"},Ft={class:"card h-100 pb-3"},St={class:"card-body px-4"},kt=x('<div class="text-warning d-flex gap-1 mb-1" data-v-e170cb85><i class="bi bi-star-fill fs-5" data-v-e170cb85></i><i class="bi bi-star-fill fs-5" data-v-e170cb85></i><i class="bi bi-star-fill fs-5" data-v-e170cb85></i><i class="bi bi-star-fill fs-5" data-v-e170cb85></i><i class="bi bi-star-fill fs-5" data-v-e170cb85></i></div>',1),Lt={class:"card-title mb-3"},Ct=o(()=>t("p",{class:"card-text"}," 卡師伯： 我是第一次在網上購買酒類，配晚餐挺搭，會再購買! ",-1)),Dt={class:"col-6 col-md-3"},Nt={class:"card h-100 pb-3"},jt={class:"card-body px-4"},Wt=x('<div class="text-warning d-flex gap-1 mb-1" data-v-e170cb85><i class="bi bi-star-fill fs-5" data-v-e170cb85></i><i class="bi bi-star-fill fs-5" data-v-e170cb85></i><i class="bi bi-star-fill fs-5" data-v-e170cb85></i><i class="bi bi-star-fill fs-5" data-v-e170cb85></i><i class="bi bi-star-fill fs-5" data-v-e170cb85></i></div>',1),Et={class:"card-title mb-3"},Tt=o(()=>t("p",{class:"card-text"},"Steve: 經過醒酒後果香濃郁，比較一下價格實在物超所值！",-1)),Ut={class:"col-6 col-md-3"},Vt={class:"card h-100 pb-3"},At={class:"card-body px-4"},Bt=o(()=>t("div",{class:"text-warning d-flex gap-1 mb-1"},[t("i",{class:"bi bi-star-fill fs-5"}),t("i",{class:"bi bi-star-fill fs-5"})],-1)),Rt={class:"card-title mb-3"},qt=o(()=>t("p",{class:"card-text"},"小明： 普普通通，不推薦.",-1)),Gt={class:"col-6 col-md-3"},Mt={class:"card h-100 pb-3"},Ot={class:"card-body px-4"},zt=x('<div class="text-warning d-flex gap-1 mb-1" data-v-e170cb85><i class="bi bi-star-fill fs-5" data-v-e170cb85></i><i class="bi bi-star-fill fs-5" data-v-e170cb85></i><i class="bi bi-star-fill fs-5" data-v-e170cb85></i><i class="bi bi-star-fill fs-5" data-v-e170cb85></i></div>',1),Qt={class:"card-title mb-3"},Yt=o(()=>t("p",{class:"card-text"}," Lukka: 性價比不錯，但偏酸，不是很愛． 之前在這網站有買過其他推薦的紅酒都很不錯． ",-1)),Ht={class:"moreProduct py-5"},Jt={class:"container"},Kt=o(()=>t("h3",{class:"text-white pb-5"},"您可能會喜歡的商品",-1)),Xt={class:"row gy-3"},Zt={class:"card d-flex flex-column h-100"},$t=["onClick"],ts=["src","alt"],ss={class:"card-body h-100 d-flex flex-column justify-content-between"},es={class:"d-flex flex-column mb-3"},is={class:"d-flex justify-content-between mb-1"},cs={key:0,class:"badge bg-danger"},as={class:"text-warning d-flex gap-1 mb-1"},os=["onClick"],ls={class:"card-title"},rs={class:"card-text text-danger fw-bold"},ds=["onClick"];function ns(e,i,a,h,s,_){return r(),l("div",null,[t("div",W,[t("div",E,[t("div",T,[t("div",U,[t("div",V,[t("img",{src:`/images/wine_images/${s.selectedProduct.image}.jpg`,class:"product-image",alt:s.selectedProduct.chineseName},null,8,A),t("a",{href:"#",onClick:i[0]||(i[0]=c=>_.toggleFavorite(s.selectedProduct))},[t("i",{class:S(["bi heart position-absolute top-5 start-10",{"bi-heart":!s.selectedProduct.isFavorite,"bi-heart-fill":s.selectedProduct.isFavorite}])},null,2)])]),B]),t("div",R,[t("div",q,[t("div",G,[s.selectedProduct.is_hot?(r(),l("span",M,"熱賣推薦")):P("",!0),t("div",O,[(r(!0),l(m,null,p(s.selectedProduct.star,c=>(r(),l("i",{class:"bi bi-star-fill text-warning",key:c}))),128))])]),t("h3",z,n(s.selectedProduct.chineseName),1),t("div",Q,[Y,t("p",H,"$ "+n(s.selectedProduct.price),1)]),t("div",null,[J,t("div",K,[(r(!0),l(m,null,p(s.selectedProduct.flavor,(c,d)=>(r(),l("div",{class:"col-2 d-flex flex-column align-items-center",key:d},[t("img",{src:`/images/fruit_images/${c}.jpg`,alt:c,class:"fruit-image rounded-circle mb-2"},null,8,X),t("p",null,n(c),1)]))),128))])]),t("div",null,[Z,t("div",$,[(r(!0),l(m,null,p(s.selectedProduct.food,(c,d)=>(r(),l("div",{class:"col-4 d-flex flex-column align-items-center",key:d},[tt,t("p",null,n(c),1)]))),128))])]),t("a",{href:"#",class:"btn btn-primary w-100 py-2 mt-3",onClick:i[1]||(i[1]=c=>_.addToCart(s.selectedProduct))},"加入購物車")])])]),t("div",st,[t("div",et,[it,ct,t("div",at,[t("div",{class:"progress-bar progress-bar-striped",style:g({width:s.selectedProduct.taste?s.selectedProduct.taste.tannin:"0%"})},null,4)]),ot,t("div",lt,[t("div",{class:"progress-bar progress-bar-striped",style:g({width:s.selectedProduct.taste?s.selectedProduct.taste.acidity:"0%"})},null,4)]),rt,t("div",dt,[t("div",{class:"progress-bar progress-bar-striped",style:g({width:s.selectedProduct.taste?s.selectedProduct.taste.sweet:"0%"})},null,4)]),nt,t("div",ht,[t("div",{class:"progress-bar progress-bar-striped",style:g({width:s.selectedProduct.taste?s.selectedProduct.taste.body:"0%"})},null,4)])]),t("div",_t,[ut,t("table",bt,[t("tbody",null,[t("tr",null,[vt,t("td",null,n(s.selectedProduct.wineStyle),1)]),t("tr",null,[mt,t("td",null,n(s.selectedProduct.place),1)]),t("tr",null,[pt,t("td",null,n(s.selectedProduct.village),1)]),t("tr",null,[ft,t("td",null,[(r(!0),l(m,null,p(s.selectedProduct.grape,(c,d)=>(r(),l("span",{key:d},[k(n(c)+" ",1),d<s.selectedProduct.grape.length-1?(r(),l("span",gt,", ")):P("",!0)]))),128))])])])])])]),t("div",xt,[t("div",Pt,[yt,t("div",It,[t("div",wt,[t("div",Ft,[t("div",St,[kt,t("h5",Lt,n(s.selectedProduct.chineseName),1),Ct])])]),t("div",Dt,[t("div",Nt,[t("div",jt,[Wt,t("h5",Et,n(s.selectedProduct.chineseName),1),Tt])])]),t("div",Ut,[t("div",Vt,[t("div",At,[Bt,t("h5",Rt,n(s.selectedProduct.chineseName),1),qt])])]),t("div",Gt,[t("div",Mt,[t("div",Ot,[zt,t("h5",Qt,n(s.selectedProduct.chineseName),1),Yt])])])])])])])]),t("div",Ht,[t("div",Jt,[Kt,t("div",Xt,[(r(!0),l(m,null,p(s.similarWines,(c,d)=>(r(),l("div",{class:"col-6 col-md-3",key:d},[t("div",Zt,[t("a",{href:"#",onClick:u=>_.seeProduct(c.id)},[t("img",{src:`/images/wine_images/${c.image}.jpg`,class:"card-img-top",alt:c.chineseName},null,8,ts)],8,$t),t("div",ss,[t("div",es,[t("div",is,[c.is_hot?(r(),l("span",cs,"熱賣推薦")):P("",!0),t("div",as,[(r(!0),l(m,null,p(c.star,u=>(r(),l("i",{class:"bi bi-star-fill text-warning",key:u}))),128))])]),t("a",{href:"#",onClick:u=>_.seeProduct(c.id)},[t("h5",ls,n(c.chineseName),1)],8,os),t("p",rs,"$ "+n(c.price),1)]),t("a",{href:"#",class:"btn btn-primary w-100",onClick:u=>_.addToCart(c)},"加入購物車",8,ds)])])]))),128))])])])])}const vs=I(j,[["render",ns],["__scopeId","data-v-e170cb85"]]);export{vs as default};
