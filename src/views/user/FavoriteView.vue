<template>
  <div class="container mb-5">
    <div class="row">
      <div class="d-flex justify-content-between align-items-end mt-3">
        <h2 class="mt-5 mb-1 fs-3 font-weight-normal fw-bold">會員 / {{ title }}</h2>

        <select class="filter-sort" v-model="sortFilter">
          <option value="1">依價格排序 ⬆</option>
          <option value="2">依價格排序 ⬇</option>
        </select>
      </div>
      <img src="/images/footerContainer.png" class="w-100 my-5" />

      <div class="col-md-3 mt-3" v-for="item in getSortList" :key="item.id">
        <div class="card">
          <img class=" card-img-top" src="/images/wine images/wine33.jpg" alt="Card image cap">
          <div class="card-body">
            <div>
              <h5 class="card-title text-wrap">{{ item.product.chineseName }}</h5>
              <p class="card-text">{{ item.product.wineStyle }}</p>
            </div>

            <div class="d-flex justify-content-between align-items-end">
              <p class="card-text m-0">NT$ {{ item.product.price }}</p>
              <a href="#" class="btn btn-warning">
                <svg width="26" height="27" viewBox="0 0 32 33" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.0583 32.9123C9.29326 32.9123 8.64502 32.6435 8.11355 32.106C7.58208 31.5686 7.31634 30.9158 7.31634 30.1479C7.31634 29.3799 7.58399 28.7292 8.1193 28.1956C8.6546 27.662 9.3047 27.3953 10.0696 27.3953C10.8345 27.3953 11.4845 27.664 12.0198 28.2015C12.555 28.739 12.8227 29.3917 12.8227 30.1597C12.8227 30.9276 12.5539 31.5784 12.0165 32.112C11.479 32.6455 10.8262 32.9123 10.0583 32.9123ZM26.2121 32.9123C25.4471 32.9123 24.7988 32.6435 24.2673 32.106C23.7359 31.5686 23.4701 30.9158 23.4701 30.1479C23.4701 29.3799 23.7378 28.7292 24.2731 28.1956C24.8084 27.662 25.4585 27.3953 26.2234 27.3953C26.9883 27.3953 27.6384 27.664 28.1736 28.2015C28.7089 28.739 28.9765 29.3917 28.9765 30.1597C28.9765 30.9276 28.7078 31.5784 28.1703 32.112C27.6328 32.6455 26.98 32.9123 26.2121 32.9123ZM7.80559 6.16017L12.312 15.5705H23.8323C23.9285 15.5705 24.0157 15.5465 24.094 15.4984C24.1724 15.4503 24.2347 15.3835 24.281 15.298L29.062 6.60892C29.1261 6.49139 29.1315 6.38722 29.078 6.29642C29.0246 6.20558 28.9338 6.16017 28.8056 6.16017H7.80559ZM6.76501 4.06621H29.8901C30.5713 4.06621 31.0865 4.35913 31.4356 4.94496C31.7848 5.53079 31.7956 6.12606 31.4679 6.73075L26.2731 16.1418C25.997 16.6092 25.6392 16.9798 25.1998 17.2537C24.7603 17.5275 24.2835 17.6644 23.7693 17.6644H11.5L9.32267 21.6751C9.24434 21.8033 9.24345 21.9422 9.32001 22.0918C9.39659 22.2414 9.51502 22.3162 9.6753 22.3162H28.9765V24.4102H9.86117C8.7914 24.4102 8.0081 24.009 7.5113 23.2067C7.01452 22.4043 7.01079 21.5519 7.50009 20.6495L10.0813 15.9679L3.85909 2.84396H0.720215V0.75H5.1988L6.76501 4.06621Z"
                    fill="#4D403C" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import userStore from '@/stores/user';

export default {
  name: 'FavoriteView',
  components: {},
  data() {
    return {
      title: '慾望酒單',
      sortFilter: '1',
      list: []
    };
  },
  mounted() {
    const { userToken, userId } = this.getUserCookie();
    if (userToken && userId) {
      this.getFavoriteList(userId);
    } else {
      this.$router.push('/login');
    }
  },
  computed: {
    getSortList() {
      const copyData = JSON.parse(JSON.stringify(this.list));
      if (this.sortFilter === '1') {
        return copyData.sort((a, b) => a.product.price - b.product.price);
      } else {
        return copyData.sort((a, b) => b.product.price - a.product.price);
      }
    }
  },
  methods: {
    ...mapActions(userStore, ['getUserCookie']),
    getFavoriteList(userId) {
      const api = `${import.meta.env.VITE_API_URL}/favorite?userId=${userId}&_expand=product`;

      this.$http.get(api)
        .then((res) => {
          console.log(res.data);
          this.list = res.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
    // post http://localhost:3001/favorite
    // {
    //   "userId": 1,
    //   "productId": "5",
    //   "created_at": "2024/02/21";
    // }
    // get http://localhost:3001/favorite?userId=1
    // get http://localhost:3001/favorite?userId=1&_expand=product

  }
};
</script>

<style lang="scss" scoped>
.filter-sort {
  height: 40px;
  margin-bottom: 3px;
}

.card {
  img {
    height: 470px;
  }
}

.card-body {
  height: 175px;
  display: flex;
  flex-wrap: wrap;

  &>div {
    width: 100%;
  }
}
</style>
