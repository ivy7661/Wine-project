<template>
  <div class="container">
    <div class="bg-cart">
      <h2 class="pt-5">購物車資訊</h2>
    </div>
    <img src="../../../images/footerContainer.png" class="w-100 my-5" />
    <div class="row">
      <div class="col-8">
        <div class="shopping-cart">
          <div class="row">
            <div class="cartList">
            <div class="row mb-1">
              <div class="col-4">
                <img src="../../../images/wine hand style.png" class="card-img-top">
              </div>
              <div class="col-4 mt-2 mb-2">
                <span class="badge bg-primary rounded-pill"
                  >熱門推薦</span
                >
                <h5 class="mt-1">法國 尚羅蘭酒莊 珍藏香檳禮盒</h5>
                <div class="input-group mb-3">
                  <span class="input-group-text">數量</span>
                  <input
                    type="number"
                    min="0"
                    class="form-control text-end"
                    value="2"
                  />
                </div>
              </div>
              <div class="col-4 d-flex">
                <div
                  class="d-flex justify-content-center align-items-center w-75"
                >
                  <p>$ 300</p>
                </div>
                <button
                  type="button"
                  class="d-flex justify-content-center align-items-center w-25 btn-danger border-0 p-0 rounded"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash3"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div class="col-4"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartView',
  components: {},
  data() {
    return {
      title: '購物車'
    };
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.bg-cart {
  height: 300px;
}
</style>
