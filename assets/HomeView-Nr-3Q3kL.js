import{e as he,c as fe,m as F,a as ve,b as le,d as be,S as Z,f as ee}from"./swiper-vue-b4P0BN-z.js";import{_ as q,o as r,c as p,a as e,F as P,i as W,j as K,k as se,t as B,s as ne,l as H,n as oe,q as ce,b as D,w as N,u as te,v as M,e as V,x as $e,g as re,p as ae,d as ie,r as X,y as ye,z as xe,A as J,f as we}from"./index-NdDJ3vZo.js";import{M as Ce}from"./bootstrap.esm-TTjMTX3M.js";import{v as ke}from"./vertical_line-Y-FOFHHk.js";import{g as de}from"./helpers-Hx-ZzB2u.js";import{u as pe}from"./user-bg32h6Qo.js";import"./sweetalert2.all-KC4FWgCs.js";const Se="/Wine-project/images/hot_icon.svg",me="/Wine-project/images/switch.png",Le="/Wine-project/images/wine_icon.svg";function je(c,s,h,u){return c.params.createElements&&Object.keys(u).forEach(m=>{if(!h[m]&&h.auto===!0){let l=he(c.el,`.${u[m]}`)[0];l||(l=fe("div",u[m]),l.className=u[m],c.el.append(l)),h[m]=l,s[m]=l}}),h}function U(c){return c===void 0&&(c=""),`.${c.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function _e(c){let{swiper:s,extendParams:h,on:u,emit:m}=c;const l="swiper-pagination";h({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:t=>t,formatFractionTotal:t=>t,bulletClass:`${l}-bullet`,bulletActiveClass:`${l}-bullet-active`,modifierClass:`${l}-`,currentClass:`${l}-current`,totalClass:`${l}-total`,hiddenClass:`${l}-hidden`,progressbarFillClass:`${l}-progressbar-fill`,progressbarOppositeClass:`${l}-progressbar-opposite`,clickableClass:`${l}-clickable`,lockClass:`${l}-lock`,horizontalClass:`${l}-horizontal`,verticalClass:`${l}-vertical`,paginationDisabledClass:`${l}-disabled`}}),s.pagination={el:null,bullets:[]};let d,v=0;function j(){return!s.params.pagination.el||!s.pagination.el||Array.isArray(s.pagination.el)&&s.pagination.el.length===0}function A(t,a){const{bulletActiveClass:i}=s.params.pagination;t&&(t=t[`${a==="prev"?"previous":"next"}ElementSibling`],t&&(t.classList.add(`${i}-${a}`),t=t[`${a==="prev"?"previous":"next"}ElementSibling`],t&&t.classList.add(`${i}-${a}-${a}`)))}function R(t){const a=t.target.closest(U(s.params.pagination.bulletClass));if(!a)return;t.preventDefault();const i=le(a)*s.params.slidesPerGroup;if(s.params.loop){if(s.realIndex===i)return;s.slideToLoop(i)}else s.slideTo(i)}function T(){const t=s.rtl,a=s.params.pagination;if(j())return;let i=s.pagination.el;i=F(i);let _,w;const n=s.virtual&&s.params.virtual.enabled?s.virtual.slides.length:s.slides.length,k=s.params.loop?Math.ceil(n/s.params.slidesPerGroup):s.snapGrid.length;if(s.params.loop?(w=s.previousRealIndex||0,_=s.params.slidesPerGroup>1?Math.floor(s.realIndex/s.params.slidesPerGroup):s.realIndex):typeof s.snapIndex<"u"?(_=s.snapIndex,w=s.previousSnapIndex):(w=s.previousIndex||0,_=s.activeIndex||0),a.type==="bullets"&&s.pagination.bullets&&s.pagination.bullets.length>0){const o=s.pagination.bullets;let $,y,G;if(a.dynamicBullets&&(d=ve(o[0],s.isHorizontal()?"width":"height",!0),i.forEach(x=>{x.style[s.isHorizontal()?"width":"height"]=`${d*(a.dynamicMainBullets+4)}px`}),a.dynamicMainBullets>1&&w!==void 0&&(v+=_-(w||0),v>a.dynamicMainBullets-1?v=a.dynamicMainBullets-1:v<0&&(v=0)),$=Math.max(_-v,0),y=$+(Math.min(o.length,a.dynamicMainBullets)-1),G=(y+$)/2),o.forEach(x=>{const C=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(S=>`${a.bulletActiveClass}${S}`)].map(S=>typeof S=="string"&&S.includes(" ")?S.split(" "):S).flat();x.classList.remove(...C)}),i.length>1)o.forEach(x=>{const C=le(x);C===_?x.classList.add(...a.bulletActiveClass.split(" ")):s.isElement&&x.setAttribute("part","bullet"),a.dynamicBullets&&(C>=$&&C<=y&&x.classList.add(...`${a.bulletActiveClass}-main`.split(" ")),C===$&&A(x,"prev"),C===y&&A(x,"next"))});else{const x=o[_];if(x&&x.classList.add(...a.bulletActiveClass.split(" ")),s.isElement&&o.forEach((C,S)=>{C.setAttribute("part",S===_?"bullet-active":"bullet")}),a.dynamicBullets){const C=o[$],S=o[y];for(let E=$;E<=y;E+=1)o[E]&&o[E].classList.add(...`${a.bulletActiveClass}-main`.split(" "));A(C,"prev"),A(S,"next")}}if(a.dynamicBullets){const x=Math.min(o.length,a.dynamicMainBullets+4),C=(d*x-d)/2-G*d,S=t?"right":"left";o.forEach(E=>{E.style[s.isHorizontal()?S:"top"]=`${C}px`})}}i.forEach((o,$)=>{if(a.type==="fraction"&&(o.querySelectorAll(U(a.currentClass)).forEach(y=>{y.textContent=a.formatFractionCurrent(_+1)}),o.querySelectorAll(U(a.totalClass)).forEach(y=>{y.textContent=a.formatFractionTotal(k)})),a.type==="progressbar"){let y;a.progressbarOpposite?y=s.isHorizontal()?"vertical":"horizontal":y=s.isHorizontal()?"horizontal":"vertical";const G=(_+1)/k;let x=1,C=1;y==="horizontal"?x=G:C=G,o.querySelectorAll(U(a.progressbarFillClass)).forEach(S=>{S.style.transform=`translate3d(0,0,0) scaleX(${x}) scaleY(${C})`,S.style.transitionDuration=`${s.params.speed}ms`})}a.type==="custom"&&a.renderCustom?(o.innerHTML=a.renderCustom(s,_+1,k),$===0&&m("paginationRender",o)):($===0&&m("paginationRender",o),m("paginationUpdate",o)),s.params.watchOverflow&&s.enabled&&o.classList[s.isLocked?"add":"remove"](a.lockClass)})}function z(){const t=s.params.pagination;if(j())return;const a=s.virtual&&s.params.virtual.enabled?s.virtual.slides.length:s.grid&&s.params.grid.rows>1?s.slides.length/Math.ceil(s.params.grid.rows):s.slides.length;let i=s.pagination.el;i=F(i);let _="";if(t.type==="bullets"){let w=s.params.loop?Math.ceil(a/s.params.slidesPerGroup):s.snapGrid.length;s.params.freeMode&&s.params.freeMode.enabled&&w>a&&(w=a);for(let n=0;n<w;n+=1)t.renderBullet?_+=t.renderBullet.call(s,n,t.bulletClass):_+=`<${t.bulletElement} ${s.isElement?'part="bullet"':""} class="${t.bulletClass}"></${t.bulletElement}>`}t.type==="fraction"&&(t.renderFraction?_=t.renderFraction.call(s,t.currentClass,t.totalClass):_=`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),t.type==="progressbar"&&(t.renderProgressbar?_=t.renderProgressbar.call(s,t.progressbarFillClass):_=`<span class="${t.progressbarFillClass}"></span>`),s.pagination.bullets=[],i.forEach(w=>{t.type!=="custom"&&(w.innerHTML=_||""),t.type==="bullets"&&s.pagination.bullets.push(...w.querySelectorAll(U(t.bulletClass)))}),t.type!=="custom"&&m("paginationRender",i[0])}function g(){s.params.pagination=je(s,s.originalParams.pagination,s.params.pagination,{el:"swiper-pagination"});const t=s.params.pagination;if(!t.el)return;let a;typeof t.el=="string"&&s.isElement&&(a=s.el.querySelector(t.el)),!a&&typeof t.el=="string"&&(a=[...document.querySelectorAll(t.el)]),a||(a=t.el),!(!a||a.length===0)&&(s.params.uniqueNavElements&&typeof t.el=="string"&&Array.isArray(a)&&a.length>1&&(a=[...s.el.querySelectorAll(t.el)],a.length>1&&(a=a.filter(i=>be(i,".swiper")[0]===s.el)[0])),Array.isArray(a)&&a.length===1&&(a=a[0]),Object.assign(s.pagination,{el:a}),a=F(a),a.forEach(i=>{t.type==="bullets"&&t.clickable&&i.classList.add(...(t.clickableClass||"").split(" ")),i.classList.add(t.modifierClass+t.type),i.classList.add(s.isHorizontal()?t.horizontalClass:t.verticalClass),t.type==="bullets"&&t.dynamicBullets&&(i.classList.add(`${t.modifierClass}${t.type}-dynamic`),v=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),t.type==="progressbar"&&t.progressbarOpposite&&i.classList.add(t.progressbarOppositeClass),t.clickable&&i.addEventListener("click",R),s.enabled||i.classList.add(t.lockClass)}))}function I(){const t=s.params.pagination;if(j())return;let a=s.pagination.el;a&&(a=F(a),a.forEach(i=>{i.classList.remove(t.hiddenClass),i.classList.remove(t.modifierClass+t.type),i.classList.remove(s.isHorizontal()?t.horizontalClass:t.verticalClass),t.clickable&&(i.classList.remove(...(t.clickableClass||"").split(" ")),i.removeEventListener("click",R))})),s.pagination.bullets&&s.pagination.bullets.forEach(i=>i.classList.remove(...t.bulletActiveClass.split(" ")))}u("changeDirection",()=>{if(!s.pagination||!s.pagination.el)return;const t=s.params.pagination;let{el:a}=s.pagination;a=F(a),a.forEach(i=>{i.classList.remove(t.horizontalClass,t.verticalClass),i.classList.add(s.isHorizontal()?t.horizontalClass:t.verticalClass)})}),u("init",()=>{s.params.pagination.enabled===!1?O():(g(),z(),T())}),u("activeIndexChange",()=>{typeof s.snapIndex>"u"&&T()}),u("snapIndexChange",()=>{T()}),u("snapGridLengthChange",()=>{z(),T()}),u("destroy",()=>{I()}),u("enable disable",()=>{let{el:t}=s.pagination;t&&(t=F(t),t.forEach(a=>a.classList[s.enabled?"remove":"add"](s.params.pagination.lockClass)))}),u("lock unlock",()=>{T()}),u("click",(t,a)=>{const i=a.target,_=F(s.pagination.el);if(s.params.pagination.el&&s.params.pagination.hideOnClick&&_&&_.length>0&&!i.classList.contains(s.params.pagination.bulletClass)){if(s.navigation&&(s.navigation.nextEl&&i===s.navigation.nextEl||s.navigation.prevEl&&i===s.navigation.prevEl))return;const w=_[0].classList.contains(s.params.pagination.hiddenClass);m(w===!0?"paginationShow":"paginationHide"),_.forEach(n=>n.classList.toggle(s.params.pagination.hiddenClass))}});const b=()=>{s.el.classList.remove(s.params.pagination.paginationDisabledClass);let{el:t}=s.pagination;t&&(t=F(t),t.forEach(a=>a.classList.remove(s.params.pagination.paginationDisabledClass))),g(),z(),T()},O=()=>{s.el.classList.add(s.params.pagination.paginationDisabledClass);let{el:t}=s.pagination;t&&(t=F(t),t.forEach(a=>a.classList.add(s.params.pagination.paginationDisabledClass))),I()};Object.assign(s.pagination,{enable:b,disable:O,render:z,update:T,init:g,destroy:I})}const Me={props:["tempProducts","favorites"],data(){return{modalProduct:null}},methods:{openModal(){this.modalProduct.show()},closeModal(){this.modalProduct.hide()},seeProduct(c){this.closeModal(),setTimeout(()=>{this.$router.push({name:"ProductDetail",params:{id:c}})},0)},addToCart(c){this.$emit("add-to-cart",c)},addFavorite(c){this.$emit("add-to-favorite",c)}},mounted(){this.modalProduct=new Ce(this.$refs.productModal)}},Pe={ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"selectProductModalLabel","aria-hidden":"true"},Te={class:"modal-dialog modal-xl"},Ae={class:"modal-content border-0"},He=e("div",{class:"modal-header bg-dark text-white"},[e("h5",{id:"selectProductModalLabel",class:"modal-title"},[e("span",null,"推薦酒品")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Be={class:"modal-body"},Ie={class:"row"},De={class:"card h-100 p-2"},Fe={class:"row h-100"},We={class:"col-4"},ze=["onClick"],Ne={key:0,class:"bi bi-heart-fill me-1"},Re={key:1,class:"bi bi-heart me-1"},Oe=["onClick"],Ee=["src","alt"],Ve={class:"col-8"},qe={class:"card-body d-flex flex-column h-100 justify-content-between"},Ge={class:"mb-2"},Ue={class:"d-flex mb-1 justify-content-between"},Xe={key:0,class:"badge bg-danger mb-2"},Ye={class:"d-flex gap-1"},Ke=["onClick"],Je={class:"card-title flex-fill"},Qe={class:"card-text text-danger fw-bold"},Ze=["onClick"],es=e("div",{class:"modal-footer"},[e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 關閉 ")],-1);function ss(c,s,h,u,m,l){return r(),p("div",Pe,[e("div",Te,[e("div",Ae,[He,e("div",Be,[e("div",Ie,[(r(!0),p(P,null,W(h.tempProducts,d=>(r(),p("div",{class:"col-12 col-md-6 col-lg-4 mb-3",key:d.id},[e("div",De,[e("div",Fe,[e("div",We,[e("a",{href:"#",onClick:K(v=>l.addFavorite(d),["prevent"])},[h.favorites.includes(d.id)?(r(),p("i",Ne)):(r(),p("i",Re))],8,ze),e("a",{href:"#",onClick:K(v=>l.seeProduct(d.id),["prevent"])},[e("img",{src:c.$filters.imagePath(`/images/wine_images/${d.image}.jpg`),class:"card-img-top",alt:d.chineseName},null,8,Ee)],8,Oe)]),e("div",Ve,[e("div",qe,[e("div",Ge,[e("div",Ue,[d.is_hot?(r(),p("span",Xe,"熱門推薦")):se("",!0),e("div",Ye,[(r(!0),p(P,null,W(d.star,v=>(r(),p("i",{class:"bi bi-star-fill text-warning",key:v}))),128))])]),e("div",null,[e("a",{href:"#",class:"text-black",onClick:K(v=>l.seeProduct(d.id),["prevent"])},[e("h5",Je,B(d.chineseName),1)],8,Ke),e("p",Qe,"$ "+B(d.price),1)])]),e("a",{href:"#",class:"btn btn-primary w-100",onClick:K(v=>l.addToCart(d),["prevent"])},"加入購物車",8,Ze)])])])])]))),128))])]),es])])],512)}const ts=q(Me,[["render",ss]]),Y=c=>(ae("data-v-2af72124"),c=c(),ie(),c),as={class:"selection-container container-lg mt-5"},is={class:"row justify-content-between"},ls={class:"hot-container col-md-12 col-lg-6"},ns={class:"info"},os=Y(()=>e("div",{class:"title d-flex justify-content-between align-items-center mb-3"},[e("div",null,[e("img",{src:Se,class:"mb-2 me-1",alt:"hot"}),e("h5",{class:"d-inline-block text-primary"},"熱賣商品")]),e("div",{id:"hot_pagination",class:"swiper-pagination homeswiper-pagination"})],-1)),cs={class:"region-card card bg-white"},rs={class:"card-body px-0"},ds={class:"region-card_head d-flex"},ps={class:"image-wine"},ms=["src"],_s=Y(()=>e("img",{class:"image-switch",src:me,alt:"wine"},null,-1)),gs={class:"info single-ellipsis"},us={class:"text-black mt-2"},hs={class:"card-subtitle mt-2 single-ellipsis"},fs={class:"d-flex gap-1 mt-2"},vs={class:"price-block d-flex justify-content-between align-items-center"},bs={class:"price text-primary"},$s=["disabled","onClick"],ys=Y(()=>e("span",null,"立即購買",-1)),xs=Y(()=>e("i",{class:"bi bi-arrow-right"},null,-1)),ws={class:"text-center vertical-line"},Cs=["src"],ks={class:"select-container col-md-12 col-lg-6 d-flex justify-content-end"},Ss={class:"info"},Ls={class:"title d-flex justify-content-between align-items-center mb-3"},js=Y(()=>e("div",null,[e("img",{src:Le,class:"mb-2 me-1",alt:"hot"}),e("h5",{class:"d-inline-block text-primary"},"引導選酒區")],-1)),Ms={key:0},Ps={key:1},Ts={class:"container"},As={class:"row justify-content-between"},Hs=["onClick"],Bs=["src"],Is={__name:"HomeWineSelection",setup(c){const s=pe(),{getUser:h,getFavorites:u}=ne(s),m=H("taste"),l=H(0),d=H(null),v=H(null),j=H(null),A=H([]),R=H([]),T=H([]),z=[{id:0,type:["taste","food"],options:[{name:"純品酒",image:"/images/select_wine1.png",next:1},{name:"搭配餐酒",image:"/images/select_wine2.png",next:10}]},{id:1,type:["taste"],options:[{name:"偏甜",image:"/images/lead_wine/sweet.png",next:2},{name:"偏酸",image:"/images/lead_wine/sour.png",next:2},{name:"偏乾",image:"/images/lead_wine/dry.png",next:90}]},{id:2,type:["taste"],options:[{name:"飽滿",image:"/images/lead_wine/filling.png",next:90},{name:"輕盈",image:"/images/lead_wine/light.png",next:90}]},{id:10,type:["food"],options:[{name:"開胃菜",image:"/images/lead_wine/appetizer.png",next:90},{name:"主菜",image:"/images/lead_wine/main_course.png",next:90},{name:"甜點",image:"/images/lead_wine/dessert.png",next:90}]},{id:90,type:["taste","food"],options:[{name:"氣泡",image:"/images/lead_wine/sparkling.png",next:99},{name:"無氣泡",image:"/images/lead_wine/sparkling_non.png",next:99}]},{id:99,type:["taste","food"],options:[{name:"紅葡萄酒",image:"/images/lead_wine/red_wine.png",next:-1},{name:"白葡萄酒",image:"/images/lead_wine/white_wine.png",next:-1}]}],g=()=>{re.get("https://wine-project-tmiy.onrender.com/products").then(n=>{R.value=n.data,A.value=n.data.filter(k=>!!k.is_hot&&k.star>3).slice(0,3)}).catch(n=>{console.log(n.response)})},I=n=>{v.value=n,v.value.slideReset(),v.value.slideTo(0)},b=n=>{j.value=n,j.value.slideReset(),j.value.slideTo(0)},O=n=>{n.name==="搭配餐酒"?m.value="food":n.name==="純品酒"&&(m.value="taste"),n&&n.next>0?j.value.slideNext():(l.value=n.next,i(n))},t=n=>{var k;n&&n.id&&((k=h.value)!=null&&k.id)&&s.addToCart(n)},a=n=>{var k;if(n.id&&((k=h.value)!=null&&k.id)&&!u.value.includes(n.id)){const o={userId:h.value.id,productId:n.id,created_at:de()};s.addToFavorite(o)}},i=n=>{T.value=R.value.filter(k=>k.wineStyle===n.name).slice(0,6),d.value.openModal()},_=()=>{l.value===-1&&(j.value.slideReset(),j.value.slideTo(0))},w=oe(()=>z.filter(n=>n.type.includes(m.value)));return ce(()=>{g()}),(n,k)=>(r(),p("div",as,[e("div",is,[e("div",ls,[e("div",ns,[os,D(M(ee),{pagination:{el:"#hot_pagination"},onSwiper:I,modules:[M(_e)],class:"mySwiper"},{default:N(()=>[(r(!0),p(P,null,W(A.value,o=>(r(),te(M(Z),{key:o.id},{default:N(()=>{var $;return[e("div",cs,[e("div",null,[e("div",rs,[e("div",ds,[e("div",ps,[e("img",{src:`/images/wine_images/${o.image}.jpg`,alt:"wine"},null,8,ms)]),_s,e("div",gs,[e("h5",us,B(o.chineseName),1),e("h6",hs,B(o.englishName),1),e("div",fs,[(r(!0),p(P,null,W(o.star,y=>(r(),p("i",{class:"bi bi-star-fill text-warning",key:y}))),128))]),e("div",vs,[e("h5",bs,"NT$"+B(n.$filters.currency(o.price)),1),e("button",{type:"button",class:"btn btn-primary me-0",disabled:!(($=M(h))!=null&&$.id),onClick:y=>t(o)},[ys,V(),xs],8,$s)])])])])])])]}),_:2},1024))),128))]),_:1},8,["modules"])]),e("div",ws,[e("img",{src:M(ke),alt:"vertical Line"},null,8,Cs)])]),e("div",ks,[e("div",Ss,[e("div",Ls,[js,e("button",{type:"button",class:"btn btn-primary btn-next",onClick:_},[l.value===-1?(r(),p("span",Ms,"重新選擇")):(r(),p("span",Ps,"下一步"))])]),D(M(ee),{onSwiper:b,allowTouchMove:!1,class:"mySwiper"},{default:N(()=>[(r(!0),p(P,null,W(w.value,o=>(r(),te(M(Z),{key:o.id},{default:N(()=>[e("div",Ts,[e("div",As,[(r(!0),p(P,null,W(o.options,$=>(r(),p("div",{class:$e(["",[o.options.length>=3?"col-4":"col-6 g-0"]]),key:`child-${$.id}`},[e("div",{class:"card-select",onClick:y=>O($)},[e("img",{src:$.image,alt:"wine"},null,8,Bs),e("h5",null,B($.name),1)],8,Hs)],2))),128))])])]),_:2},1024))),128))]),_:1})])])]),D(ts,{ref_key:"selectProductModal",ref:d,tempProducts:T.value,favorites:M(u),onAddToCart:t,onAddToFavorite:a},null,8,["tempProducts","favorites"])]))}},Ds=q(Is,[["__scopeId","data-v-2af72124"]]),ge="/Wine-project/images/slider-image.png",Fs="/Wine-project/images/slider-left.png",ue="/Wine-project/images/slider-right.png",Ws={name:"HomeNews",data(){return{}}},L=c=>(ae("data-v-6a359db1"),c=c(),ie(),c),zs={class:"container-xl"},Ns={class:"row"},Rs={class:"col-md-12 news-container mt-5 mb-5"},Os=L(()=>e("h2",{class:"text-primary text-center mt-5"},"最新消息",-1)),Es={class:"news-image d-none d-lg-flex justify-content-lg-center align-items-lg-center"},Vs=L(()=>e("div",{class:"bg-slider"},null,-1)),qs=L(()=>e("img",{src:ge,class:"img-slider2",alt:"slider image"},null,-1)),Gs=L(()=>e("img",{src:Fs,class:"img-slider1 d-none d-lg-block",alt:"slider left"},null,-1)),Us=L(()=>e("img",{src:ue,class:"img-slider3",alt:"slider right"},null,-1)),Xs={class:"info-slider"},Ys=L(()=>e("h3",{class:""},"2024 龍年禮盒 85 折起",-1)),Ks=L(()=>e("div",{class:"text-info"},[e("p",{class:""},"滿額好禮大方送給您 ！！"),e("p",null,"別錯過新春特別優惠")],-1)),Js=L(()=>e("i",{class:"bi bi-arrow-right"},null,-1)),Qs={class:"news-md-image d-lg-none d-flex justify-content-center"},Zs=L(()=>e("div",{class:"bg-slider"},null,-1)),et={class:"card"},st=L(()=>e("img",{src:ge,class:"card-img-top",alt:"slider image"},null,-1)),tt={class:"card-body"},at=L(()=>e("h5",{class:"card-title"},"2024 龍年禮盒 85 折起",-1)),it=L(()=>e("div",{class:"text-info my-3"},[e("p",{class:""},"滿額好禮大方送給您 ！！"),e("p",null,"別錯過新春特別優惠")],-1)),lt=L(()=>e("span",null,"馬上逛逛",-1)),nt=L(()=>e("i",{class:"bi bi-arrow-right"},null,-1)),ot=L(()=>e("img",{src:ue,class:"img-slider3",alt:"slider right"},null,-1));function ct(c,s,h,u,m,l){const d=X("RouterLink");return r(),p("div",zs,[e("div",Ns,[e("div",Rs,[Os,e("div",Es,[Vs,qs,Gs,Us,e("div",Xs,[Ys,Ks,D(d,{to:"/products"},{default:N(()=>[V(" 馬上逛逛 "),Js]),_:1})])]),e("div",Qs,[Zs,e("div",et,[st,e("div",tt,[at,it,D(d,{class:"btn btn-primary",to:"/products"},{default:N(()=>[lt,V(),nt]),_:1})])]),ot])])])])}const rt=q(Ws,[["render",ct],["__scopeId","data-v-6a359db1"]]),dt="/Wine-project/images/region2.jpg",pt="/Wine-project/images/region1.jpg",mt="/Wine-project/images/card-top-line.svg",f=c=>(ae("data-v-87cb7d49"),c=c(),ie(),c),_t={class:"region-container bg-accent-brown"},gt={class:"container"},ut={class:"row justify-content-center flex-lg-row flex-column align-content-center"},ht={class:"col-lg-5 col-md-8"},ft={class:"d-flex justify-content-between flex-lg-row flex-column align-items-center"},vt=f(()=>e("h3",{class:"title text-primary"},"法國特色產區",-1)),bt=f(()=>e("label",{for:"select-region",class:"form-label region-label"},"選擇產區",-1)),$t=f(()=>e("option",{value:"1",selected:""},"法國產區 薄酒萊",-1)),yt=f(()=>e("option",{value:"2"},"法國產區 波爾多",-1)),xt=[$t,yt],wt={class:"region-image d-flex"},Ct=f(()=>e("img",{src:dt,alt:"region image"},null,-1)),kt=f(()=>e("div",{class:"info bg-primary d-flex flex-wrap align-content-center justify-content-center"},[e("h4",null,"薄酒萊新酒"),e("p",null,"Beaujolais Nouveau")],-1)),St=f(()=>e("img",{src:pt,alt:"region image"},null,-1)),Lt=f(()=>e("div",{class:"info bg-primary d-flex flex-wrap align-content-center justify-content-center"},[e("h4",null,"波爾多新酒"),e("p",null,"Bordeaux Nouveau")],-1)),jt=f(()=>e("div",{class:"region-content text-start"},[e("p",{class:"lead"},"特色"),e("ol",null,[e("li",null,"每年的11月份的第三個星期四，葡萄採收馬上被裝瓶上架"),e("li",null,"主要以 Gamay 葡萄品種"),e("li",null,"適合用在慶祝活動"),e("li",null,"果味濃郁(草莓、覆盆子和櫻桃)、單寧低、口感輕盈"),e("li",null,"試飲期一到兩年飲用")])],-1)),Mt={class:"col-lg-5 col-md-8"},Pt={class:"region-card card bg-white"},Tt={class:"card-body px-0"},At={class:"region-card_head d-flex"},Ht={class:"image-wine"},Bt=["src"],It=f(()=>e("img",{class:"image-switch",src:me,alt:"wine"},null,-1)),Dt={class:"single-ellipsis"},Ft={class:"text-black mt-2"},Wt={class:"card-subtitle mt-2 single-ellipsis"},zt={class:"price text-primary mt-3"},Nt={class:"region-info mt-2"},Rt=f(()=>e("img",{src:mt,class:"line-image",alt:"line"},null,-1)),Ot={class:"taste mt-4"},Et=f(()=>e("p",{class:"taste-title mb-3"},"這款酒喝起來的味道如何？",-1)),Vt={class:"container-fluid taste-content px-0 mt-1"},qt={class:"row"},Gt={class:"col-md-6 d-flex align-items-center mb-1"},Ut=f(()=>e("p",null,"單寧",-1)),Xt={class:"progress-bar"},Yt={class:"col-md-6 d-flex align-items-center mb-1"},Kt=f(()=>e("p",null,"酸度",-1)),Jt={class:"progress-bar"},Qt={class:"col-md-6 d-flex align-items-center mb-1"},Zt=f(()=>e("p",null,"甜度",-1)),ea={class:"progress-bar"},sa={class:"col-md-6 d-flex align-items-center mb-1"},ta=f(()=>e("p",null,"酒體",-1)),aa={class:"progress-bar"},ia={class:"region-taste container-fluid px-0 my-4"},la={class:"row"},na={class:"col-6"},oa=f(()=>e("p",{class:"mb-2"},"風味分類",-1)),ca={class:"d-flex justify-content-between"},ra=["src"],da={class:"icon-text text-center"},pa={class:"col-6"},ma=f(()=>e("p",{class:"mb-2"},"搭配餐酒",-1)),_a={class:"d-flex justify-content-between"},ga=["src"],ua={class:"icon-text text-center"},ha={class:"region-button d-flex justify-content-between"},fa=["onClick","disabled"],va=f(()=>e("i",{class:"bi bi-heart-fill me-1"},null,-1)),ba=f(()=>e("i",{class:"bi bi-heart me-1"},null,-1)),$a=["disabled","onClick"],ya=f(()=>e("i",{class:"bi bi-cart3 me-1"},null,-1)),xa=f(()=>e("div",{id:"region_pagination",class:"swiper-pagination homeswiper-pagination mt-3"},null,-1)),wa={__name:"HomeWineRegion",setup(c){const s=pe(),{getUser:h,getFavorites:u}=ne(s),m=H(null),l=H("1"),d=H([]),v=oe(()=>l.value==="2"?d.value.filter(g=>g.place==="波爾多").slice(0,3):d.value.filter(g=>g.place==="薄酒萊").slice(0,3)),j=()=>{re.get("https://wine-project-tmiy.onrender.com/products").then(g=>{d.value=g.data}).catch(g=>{console.log(g.response)})},A=g=>{if(g&&h.value.id&&!u.value.includes(g)){const I={userId:h.value.id,productId:g,created_at:de()};s.addToFavorite(I)}},R=g=>{g&&g.id&&h.value.id&&s.addToCart(g)},T=()=>{m.value&&(m.value.slideReset(),m.value.slideTo(0))},z=g=>{m.value=g,m.value.slideReset(),m.value.slideTo(0)};return ce(()=>{j()}),(g,I)=>(r(),p("div",_t,[e("div",gt,[e("div",ut,[e("div",ht,[e("div",ft,[vt,e("div",null,[bt,ye(e("select",{id:"select-region",class:"form-select region text-primary","aria-label":"選擇產區","onUpdate:modelValue":I[0]||(I[0]=b=>l.value=b),onChange:T},xt,544),[[xe,l.value]])])]),e("div",wt,[l.value==="1"?(r(),p(P,{key:0},[Ct,kt],64)):se("",!0),l.value==="2"?(r(),p(P,{key:1},[St,Lt],64)):se("",!0)]),jt]),e("div",Mt,[D(M(ee),{pagination:{el:"#region_pagination"},onSwiper:z,modules:[M(_e)],class:"mySwiper"},{default:N(()=>[(r(!0),p(P,null,W(v.value,b=>(r(),te(M(Z),{key:b.id},{default:N(()=>{var O,t;return[e("div",Pt,[e("div",null,[e("div",Tt,[e("div",At,[e("div",Ht,[e("img",{src:`/images/wine_images/${b.image}.jpg`,alt:"wine"},null,8,Bt)]),It,e("div",Dt,[e("h5",Ft,B(b.chineseName),1),e("h6",Wt,B(b.englishName),1),e("h5",zt,"NT$ "+B(g.$filters.currency(b.price)),1)])]),e("div",Nt,[Rt,e("div",Ot,[Et,e("div",Vt,[e("div",qt,[e("div",Gt,[Ut,e("div",Xt,[e("div",{class:"progress",style:J({width:b.taste.tannin})},null,4)])]),e("div",Yt,[Kt,e("div",Jt,[e("div",{class:"progress",style:J({width:b.taste.acidity})},null,4)])]),e("div",Qt,[Zt,e("div",ea,[e("div",{class:"progress",style:J({width:b.taste.sweet})},null,4)])]),e("div",sa,[ta,e("div",aa,[e("div",{class:"progress",style:J({width:b.taste.body})},null,4)])])])])])]),e("div",ia,[e("div",la,[e("div",na,[oa,e("div",ca,[(r(!0),p(P,null,W(b.flavor.slice(0,3),(a,i)=>(r(),p("div",{class:"icon-container",key:a},[e("img",{src:`/images/taste/t${i+1}.png`,alt:"Icon",class:"icon mb-1"},null,8,ra),e("p",da,B(a),1)]))),128))])]),e("div",pa,[ma,e("div",_a,[(r(!0),p(P,null,W(b.food.slice(0,3),(a,i)=>(r(),p("div",{class:"icon-container",key:a},[e("img",{src:`/images/taste/f${i+1}.png`,alt:"Icon",class:"icon mb-1"},null,8,ga),e("p",ua,B(a),1)]))),128))])])])]),e("div",ha,[e("button",{type:"button",class:"btn btn-black me-0",onClick:a=>A(b.id),disabled:!((O=M(h))!=null&&O.id)},[M(u).includes(b.id)?(r(),p(P,{key:0},[va,V(" 已收藏 ")],64)):(r(),p(P,{key:1},[ba,V(" 加入收藏 ")],64))],8,fa),e("button",{type:"button",class:"btn btn-primary me-0",disabled:!((t=M(h))!=null&&t.id),onClick:a=>R(b)},[ya,V(" 加入購物車 ")],8,$a)])])])])]}),_:2},1024))),128))]),_:1},8,["modules"]),xa])])])]))}},Ca=q(wa,[["__scopeId","data-v-87cb7d49"]]),ka="/Wine-project/images/Article_3.png",Q="/Wine-project/assets/Slider-VELHKiOe.svg",Sa="/Wine-project/images/Article_2.png",La="/Wine-project/images/Article_1.png",ja="/Wine-project/images/Deco_3.png",Ma={name:"HomePosts",data(){return{}}},Pa={class:"container-fluid d-flex justify-content-center bg-white-2 container-post"},Ta=we('<div data-v-9faa12c0><h2 class="text-primary text-center my-5" data-v-9faa12c0>好文分享</h2><div class="row mb-5" style="max-width:1296px;" data-v-9faa12c0><div class="col-12 col-lg-4 mb-3 mb-lg-0" data-v-9faa12c0><div class="card border-0" data-v-9faa12c0><img src="'+ka+'" class="card-img-top" alt="" data-v-9faa12c0><div class="card-body" data-v-9faa12c0><h5 class="text-primary" data-v-9faa12c0>送酒推薦搭配指南</h5><p class="text-black-70" data-v-9faa12c0>紅酒推薦挑選方法</p><p class="text-black" data-v-9faa12c0> 紅酒、白酒都是葡萄做為原料而製成，根據不同葡萄品種、產區、釀造方法等，有極廣泛的風味...... </p><p class="text-end" data-v-9faa12c0><a href="https://www.9hunters.com/gift-recommendation/" data-v-9faa12c0>繼續閱讀 <img src="'+Q+'" alt="Slider" class="mb-1" data-v-9faa12c0></a></p></div></div></div><div class="col-12 col-lg-4 mb-3 mb-lg-0" data-v-9faa12c0><div class="card border-0" data-v-9faa12c0><img src="'+Sa+'" class="card-img-top" alt="" data-v-9faa12c0><div class="card-body" data-v-9faa12c0><h5 class="text-primary" data-v-9faa12c0>西班牙 CAVA 的由來</h5><p class="text-black-70" data-v-9faa12c0>葡萄酒知識</p><p class="text-black" data-v-9faa12c0> CAVA是傳統法釀造的氣泡酒，釀造方式使用「二次瓶中發酵法」與香檳相同...... </p><p class="text-end" data-v-9faa12c0><a href="https://www.9hunters.com/wine-knowledge-cava/" data-v-9faa12c0>繼續閱讀 <img src="'+Q+'" alt="Slider" class="mb-1" data-v-9faa12c0></a></p></div></div></div><div class="col-12 col-lg-4 mb-3 mb-lg-0" data-v-9faa12c0><div class="card border-0" data-v-9faa12c0><img src="'+La+'" class="card-img-top" alt="" data-v-9faa12c0><div class="card-body" data-v-9faa12c0><h5 class="text-primary" data-v-9faa12c0>六款值得收藏紅酒推薦</h5><p class="text-black-70" data-v-9faa12c0>紅酒歷史由來</p><p class="text-black" data-v-9faa12c0> 從最早的自然發酵到現今專業的釀酒，其多變的風味與香氣，更迷倒了古今中外的無數人...... </p><p class="text-end" data-v-9faa12c0><a href="https://www.9hunters.com/red-wine-recommendation/" data-v-9faa12c0>繼續閱讀 <img src="'+Q+'" alt="Slider" class="mb-1" data-v-9faa12c0></a></p></div></div></div></div></div><img src="'+ja+'" alt="Deco_3" class="deco" data-v-9faa12c0>',2),Aa=[Ta];function Ha(c,s,h,u,m,l){return r(),p("div",Pa,Aa)}const Ba=q(Ma,[["render",Ha],["__scopeId","data-v-9faa12c0"]]),Ia={name:"HomeView",components:{HomeWineSelection:Ds,HomeNews:rt,HomeWineRegion:Ca,HomePosts:Ba},data(){return{}}};function Da(c,s,h,u,m,l){const d=X("HomeWineSelection"),v=X("HomeNews"),j=X("HomeWineRegion"),A=X("HomePosts");return r(),p(P,null,[D(d),D(v),D(j),D(A)],64)}const Va=q(Ia,[["render",Da]]);export{Va as default};
