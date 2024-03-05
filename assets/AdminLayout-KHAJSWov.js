import{S as m}from"./sweetalert2.all-VcjyylQf.js";import{h as p}from"./header_line-t2L8Dpyx.js";import{_ as u,c as _,a,b as e,w as o,F as h,r as d,o as f,e as s}from"./index-woH4x7mR.js";const g={name:"AdminLayout",components:{},data(){return{title:"後台頁面",headerLine:p}},mounted(){},methods:{adminCheck(c){const i=`http://localhost:3001/600/users/${c}`;this.$http.get(i).then(n=>{n.data.role!=="admin"&&this.logout()}).catch(n=>{console.log(n.response),this.logout()})},logout(){document.cookie=`adminToken=0; expires=${new Date("2000/1/1 12:00")}; path=/`,document.cookie=`adminId=0; expires=${new Date("2000/1/1 12:00")}; path=/`,m.fire({title:"無授權，請重新登入",text:"",icon:"error"}),this.$router.push("/adminLogin")}}},x={class:"p-3"},$={class:"nav d-flex"},k={class:"header-line"},L=["src"],v={class:"container"};function w(c,i,n,V,r,R){const t=d("RouterLink"),l=d("RouterView");return f(),_(h,null,[a("header",null,[a("div",x,[a("nav",$,[e(t,{to:"/",class:"p-2"},{default:o(()=>[s("回前台首頁")]),_:1}),e(t,{to:"/admin/accounts",class:"p-2"},{default:o(()=>[s("帳戶管理")]),_:1}),e(t,{to:"/admin/products",class:"p-2"},{default:o(()=>[s("商品管理")]),_:1}),e(t,{to:"/admin/orders",class:"p-2"},{default:o(()=>[s("訂單管理")]),_:1}),e(t,{to:"/admin/comments",class:"p-2"},{default:o(()=>[s("評論管理")]),_:1}),e(t,{to:"/admin/sales",class:"p-2"},{default:o(()=>[s("銷售數據")]),_:1}),e(t,{to:"/adminLogin",class:"p-2"},{default:o(()=>[s("登出")]),_:1})])])]),a("div",k,[a("img",{src:r.headerLine,alt:"header line"},null,8,L)]),a("div",v,[e(l)])],64)}const y=u(g,[["render",w],["__scopeId","data-v-438d030d"]]);export{y as default};
