import { defineStore } from 'pinia';
import axios from 'axios';
import Swal from 'sweetalert2';

import { addDays } from '@/utils/helpers';

export default defineStore('userStore', {
  state: () => ({
    user: null,
    carts: [],
    favorites: []
  }),
  getters: {
    getUser: ({ user }) => {
      return user;
    },
    getFavorites: ({ favorites }) => {
      return favorites || [];
    },
    getCarts: ({ carts }) => {
      return carts || [];
    },
    getCartLength: ({ carts }) => {
      return carts.length || 0;
    }
  },
  actions: {
    setUser(newUser) {
      this.user = {
        ...newUser
      };

      this.reGetAllData();
    },
    getUserCookie() {
      const userToken = document.cookie.replace(
        /(?:(?:^|.*;\s*)userToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      );
      const userId = document.cookie.replace(
        /(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      );

      return {
        userToken: userToken || null,
        userId: parseInt(userId, 10) || null
      };
    },
    reGetAllData() {
      this.resetUserFavorites();
      this.resetUserCarts();
    },
    resetUserFavorites() {
      if (this.user?.id) {
        axios.get(`${import.meta.env.VITE_API_URL}/favorite?userId=${this.user.id}`)
          .then((res) => {
            this.favorites = res.data.map((data) => data.productId);
          })
          .catch((error) => {
            console.error(error.response);
          });
      }
    },
    resetUserCarts() {
      if (this.user?.id) {
        axios.get(`${import.meta.env.VITE_API_URL}/carts?userId=${this.user.id}`)
          .then((res) => {
            this.carts = res.data;
          })
          .catch((error) => {
            console.error(error.response);
          });
      }
    },
    addToCart(product) {
      if (product?.id && this.user?.id) {
        const findCartIdx = this.carts.findIndex((cart) => cart.product_id === product.id && cart.userId === this.user.id);

        if (findCartIdx > -1) {
          // 更新購物車數量
          const cartId = this.carts[findCartIdx].id;
          this.carts[findCartIdx].qty += 1;
          const updateQty = {
            qty: this.carts[findCartIdx].qty
          };

          axios
            .patch(`${import.meta.env.VITE_API_URL}/carts/${cartId}`, updateQty)
            .then((res) => {
              this.resetUserCarts();
              Swal.fire({
                title: '成功加入購物車',
                text: '商品已經成功加入購物車',
                icon: 'success'
              });
            })
            .catch(() => {
              Swal.fire({
                title: '加入購物車失敗',
                text: '請稍後再試',
                icon: 'error'
              });
            });
        } else {
          // 新增至購物車
          const cartData = {
            product_id: product.id,
            chineseName: product.chineseName,
            image: product.image,
            price: product.price,
            is_hot: product.is_hot,
            star: product.star,
            qty: 1,
            userId: parseInt(this.user.id, 10)
          };

          axios.post(`${import.meta.env.VITE_API_URL}/carts`, cartData)
            .then((res) => {
              this.resetUserCarts();
              Swal.fire({
                title: '成功加入購物車',
                text: '商品已經成功加入購物車',
                icon: 'success'
              });
            })
            .catch(() => {
              Swal.fire({
                title: '加入購物車失敗',
                text: '請稍後再試',
                icon: 'error'
              });
            });
        }
      }
    },
    addToFavorite(data) {
      axios.post(`${import.meta.env.VITE_API_URL}/favorite`, data)
        .then((res) => {
          this.resetUserFavorites();

          Swal.fire({
            title: '收藏成功',
            text: '',
            icon: 'success'
          });
        })
        .catch(() => {
          Swal.fire({
            title: '收藏失敗',
            text: '',
            icon: 'error'
          });
        });
    },
    setUserCookie(userId, token) {
      const getDateTime = addDays(new Date(), 2);
      document.cookie = `userToken=${token}; expires=${new Date(getDateTime)}; path=/`;
      document.cookie = `userId=${userId}; expires=${new Date(getDateTime)}; path=/`;
    },
    cleanUser() {
      this.user = null;
      document.cookie = `userToken=0; expires=${new Date('2000/1/1 12:00')}; path=/`;
      document.cookie = `userId=0; expires=${new Date('2000/1/1 12:00')}; path=/`;
    }
  }
});
