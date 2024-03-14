import{S as g}from"./sweetalert2.all-e8h1eDlL.js";import{_ as R,L as O,m as V,I as U,g as l,h as D,c,a as e,b as I,w as N,F as _,j as v,y as x,M as $,z as j,k as u,d as w,x as m,r as P,o as d,t as f,i as L,p as E,e as T,f as B}from"./index-s3QXu1vX.js";import{u as C}from"./user-YI1R6e-5.js";/* empty css              */import{W as y}from"./WineGlassLoader-6Gtp751D.js";import{_ as M}from"./footerContainer-TBENB7Dp.js";import"./helpers-Hx-ZzB2u.js";var W={VITE_API_URL:"https://wine-project-tmiy.onrender.com",VITE_REPO_NAME:"Wine-project",BASE_URL:"/Wine-project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API_URL:h}=W,A={name:"UserProductsView",data(){return{products:[],selectedRegion:"熱賣酒品",productsContent:"",currentSort:"",selectedRegionProducts:[],filteredProducts:[],cart:[],ascendingOrderPrice:!0,ascendingOrderStar:!0,searchKeyword:"",favoriteList:[],allFavoriteList:[],userId:"",isLoading:!1,fullPage:!0}},components:{Loading:O,WineGlassLoader:y},methods:{...V(C,["setUser","cleanUser","getUserCookie"]),doLoading(){this.$loading.show({props:{spinner:y},container:this.$refs.loadingContainer,canCancel:!0,color:"#000000",loader:"spinner",width:64,height:64,backgroundColor:"#ffffff",opacity:.5,zIndex:999},{default:U("WineGlassLoader")}).hide()},setLoadingTime(){this.isLoading=!0,setTimeout(()=>{this.isLoading=!1},800)},getProductList(){const t=`${h}/products`;l.get(t).then(s=>{this.setLoadingTime(),this.products=s.data,this.selectedRegionProducts=this.products.filter(o=>o.is_hot===1)}).catch(()=>{alert("未正確取得產品資訊，請稍後再試～")})},getCartList(){const t=`${h}/carts`;l.get(t).then(s=>{this.cart=s.data.filter(o=>o.userId===this.userId)}).catch(()=>{})},updateContent(t){const s=`${h}/productsContent`;l.get(s).then(o=>{this.productsContent=o.data}).catch(()=>{})},sortBy(t){t==="price"?this.ascendingOrderPrice=!this.ascendingOrderPrice:t==="star"&&(this.ascendingOrderStar=!this.ascendingOrderStar),this.currentSort=t},addToCart(t){if(!this.userId){alert("請先登入");return}const s=`${h}/carts`,o=this.cart.findIndex(a=>a.product_id===t.id&&a.userId===this.userId);if(o===-1){const a={product_id:t.id,chineseName:t.chineseName,image:t.image,price:t.price,is_hot:t.is_hot,star:t.star,qty:1,userId:this.userId};l.post(s,a).then(r=>{g.fire({title:"成功加入購物車",text:"商品已經成功加入購物車",icon:"success"})}).catch(()=>{g.fire({title:"加入購物車失敗",text:"請稍後再試",icon:"error"})})}else{const a=this.cart[o].id;this.cart[o].qty+=1;const r={qty:this.cart[o].qty};l.patch(`${s}/${a}`,r).then(n=>{g.fire({title:"成功加入購物車",text:"商品已經成功加入購物車",icon:"success"})}).catch(()=>{g.fire({title:"加入購物車失敗",text:"請稍後再試",icon:"error"})})}this.getCartList()},seeProduct(t){this.$router.push({name:"ProductDetail",params:{id:t}})},getFavoriteList(){const t=`${h}/favorite`;l.get(t).then(s=>{this.allFavoriteList=s.data,this.favoriteList=s.data.filter(o=>o.userId===this.userId),this.checkFavoriteStatus()}).catch(()=>{})},checkFavoriteStatus(){this.sortedProducts.forEach(t=>{t.isFavorite=this.isProductInFavorite(t.id)})},isProductInFavorite(t){return this.favoriteList.some(s=>s.productId===t)},addToFavorite(t){if(!this.userId){alert("請先登入");return}const s=`${h}/favorite`,o=new Date,a=`${o.getFullYear()}/${(o.getMonth()+1).toString().padStart(2,"0")}/${o.getDate().toString().padStart(2,"0")}`,r={userId:this.userId,productId:t,created_at:a};l.post(s,r).then(n=>{this.getFavoriteList(),g.fire({title:"加入最愛",text:"商品已經成功加入最愛清單。",icon:"success"})}).catch(()=>{})},toggleFavorite(t){this.isProductInFavorite(t.id)?this.removeFromFavorite(t.id):this.addToFavorite(t.id)},removeFromFavorite(t){if(!this.userId){alert("請先登入");return}const s=`${h}/favorite`,o=this.allFavoriteList.findIndex(r=>r.productId===t&&r.userId===this.userId),a=this.allFavoriteList[o].id;l.delete(`${s}/${a}`,{userId:this.userId,id:o}).then(r=>{this.getFavoriteList()}).catch(()=>{})}},computed:{...D(C,["getUser"]),sortedProducts(){let t=[];return this.filteredProducts.length>0?t=this.filteredProducts.slice():t=this.selectedRegionProducts.slice(),t.sort((o,a)=>this.currentSort==="price"?this.ascendingOrderPrice?o.price-a.price:a.price-o.price:this.currentSort==="star"?this.ascendingOrderStar?o.star-a.star:a.star-o.star:0)}},watch:{selectedRegion(t){if(this.searchKeyword.trim()!==""){alert("請先清空搜尋關鍵字"),this.selectedRegion="熱賣酒品";return}this.updateContent(t),t==="熱賣酒品"?this.selectedRegionProducts=this.products.filter(s=>s.is_hot===1):this.selectedRegionProducts=this.products.filter(s=>s.place===t)},searchKeyword(t){t.trim()!==""?(this.filteredProducts=this.products.filter(s=>s.chineseName.includes(t)),this.selectedRegion="熱賣酒品"):this.filteredProducts=[]}},mounted(){const{userId:t}=this.getUserCookie();this.userId=t,this.getProductList(),this.getCartList(),this.updateContent(),this.getFavoriteList()}},b=t=>(E("data-v-1a7e8608"),t=t(),T(),t),q={class:"bg-products pb-4"},G={class:"container"},z={class:"row justify-content-between"},K={class:"col-lg-6"},Q={key:0},Y={class:"pb-5 text-white"},H={class:"text-white lh-large fs-5 font-monospace"},J={class:"col-12 col-lg-5 d-flex flex-column justify-content-end"},X={class:"searchArea mx-3"},Z=b(()=>e("i",{class:"bi bi-search"},null,-1)),tt={class:"filterBox mx-3"},et=b(()=>e("label",{for:"wineRegion",class:"text-white fs-5 pb-1"},"請選擇產區:",-1)),st=B('<option value="" disabled selected hidden data-v-1a7e8608>產區: 請選擇產區</option><option value="波爾多" data-v-1a7e8608>波爾多</option><option value="布根地" data-v-1a7e8608>布根地</option><option value="香檳" data-v-1a7e8608>香檳</option><option value="羅亞爾河谷" data-v-1a7e8608>羅亞爾河谷</option><option value="薄酒萊" data-v-1a7e8608>薄酒萊</option><option value="熱賣酒品" data-v-1a7e8608>熱賣酒品</option>',7),it=[st],ot={class:"filterBtn d-flex justify-content-between gap-3"},rt={class:"container"},at=b(()=>e("img",{src:M,class:"w-100 mb-5"},null,-1)),nt={class:"productList pb-5 align-items-stretch"},ct={class:"row mb-3 gy-3"},dt={class:"card h-100 p-2 product_card"},lt={class:"row h-100"},ht={class:"col-4"},ut=["onClick"],pt=["onClick"],gt=["src","alt"],ft={class:"col-8"},_t={class:"card-body d-flex flex-column h-100 justify-content-between"},vt={class:"mb-2"},mt={class:"d-flex mb-1 justify-content-between"},bt={key:0,class:"badge bg-danger mb-2"},It={class:"d-flex gap-1"},xt=["onClick"],wt={class:"card-title flex-fill"},Pt={class:"card-text text-danger fw-bold"},Lt=["onClick"];function Ct(t,s,o,a,r,n){const F=P("WineGlassLoader"),S=P("loading");return d(),c("div",null,[e("div",q,[I(S,{active:r.isLoading,"onUpdate:active":s[0]||(s[0]=i=>r.isLoading=i),"is-full-page":r.fullPage},{default:N(()=>[I(F)]),_:1},8,["active","is-full-page"]),e("div",G,[e("div",z,[e("div",K,[(d(!0),c(_,null,v(r.productsContent,i=>(d(),c("div",{class:"px-3",key:i.title},[r.selectedRegion===i.title?(d(),c("div",Q,[e("h2",Y,"法國五大產區 - "+f(i.title),1),e("p",H,f(i.content),1)])):L("",!0)]))),128))]),e("div",J,[e("div",X,[Z,x(e("input",{type:"text",placeholder:"請輸入關鍵字",class:"w-100 fs-5","onUpdate:modelValue":s[1]||(s[1]=i=>r.searchKeyword=i)},null,512),[[$,r.searchKeyword]])]),e("div",tt,[et,x(e("select",{id:"wineRegion",name:"wineRegion",class:"mb-3 fs-5","onUpdate:modelValue":s[2]||(s[2]=i=>r.selectedRegion=i),onChange:s[3]||(s[3]=i=>n.updateContent(r.selectedRegion))},it,544),[[j,r.selectedRegion]]),e("div",ot,[e("a",{type:"button",class:"btn btn-primary btn-lg px-4 py-2",onClick:s[4]||(s[4]=u(i=>n.sortBy("price"),["prevent"]))},[w(" 價格 "),e("i",{class:m(r.ascendingOrderPrice?"bi bi-arrow-down":"bi bi-arrow-up")},null,2)]),e("a",{type:"button",class:"btn btn-primary btn-lg px-4 py-2 me-0",onClick:s[5]||(s[5]=u(i=>n.sortBy("star"),["prevent"]))},[w(" 評價 "),e("i",{class:m(r.ascendingOrderStar?"bi bi-arrow-down":"bi bi-arrow-up")},null,2)])])])])])])]),e("div",rt,[at,e("div",nt,[e("div",ct,[(d(!0),c(_,null,v(n.sortedProducts,(i,k)=>(d(),c("div",{class:"col-12 col-md-6 col-lg-4",key:k},[e("div",dt,[e("div",lt,[e("div",ht,[e("a",{href:"#",onClick:u(p=>n.toggleFavorite(i),["prevent"])},[e("i",{class:m(["bi heart position-absolute top-5 start-5",{"bi-heart":!i.isFavorite,"bi-heart-fill":i.isFavorite}])},null,2)],8,ut),e("a",{href:"#",onClick:u(p=>n.seeProduct(i.id),["prevent"])},[e("img",{src:t.$filters.imgPath(`/images/wine_images/${i.image}.jpg`),class:"card-img-top h-100",alt:i.chineseName},null,8,gt)],8,pt)]),e("div",ft,[e("div",_t,[e("div",vt,[e("div",mt,[i.is_hot?(d(),c("span",bt,"熱門推薦")):L("",!0),e("div",It,[(d(!0),c(_,null,v(i.star,p=>(d(),c("i",{class:"bi bi-star-fill text-warning",key:p}))),128))])]),e("div",null,[e("a",{href:"#",class:"text-black",onClick:u(p=>n.seeProduct(i.id),["prevent"])},[e("h5",wt,f(i.chineseName),1)],8,xt),e("p",Pt,"$ "+f(i.price),1)])]),e("a",{href:"#",class:"btn btn-primary w-100",onClick:u(p=>n.addToCart(i),["prevent"])},"加入購物車",8,Lt)])])])])]))),128))])])])])}const Ut=R(A,[["render",Ct],["__scopeId","data-v-1a7e8608"]]);export{Ut as default};
