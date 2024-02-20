<template>
  <div class="container">
    <div class="bg-checkout">
      <h2 class="pt-5">填寫訂單資訊</h2>
    </div>
    <img src="../../../images/footerContainer.png" class="w-100 my-5" />
    <div class="row">
      <div class="col-8">
        <form class="pb-4">
          <h4>1. 收件者資訊</h4>
          <div class="mb-3">
            <label for="customerName" class="form-label">收件者姓名</label>
            <input type="text" class="form-control" id="customerName" />
          </div>
          <div class="mb-3">
            <label for="customerAddress" class="form-label">寄送地址</label>
            <input type="text" class="form-control" id="customerAddress" />
          </div>
          <div class="mb-3">
            <label for="customerTel" class="form-label">電話</label>
            <input type="tel" class="form-control" id="customerTel" />
          </div>
          <div class="mb-4">
            <label for="customerEmail" class="form-label">電子郵件</label>
            <input type="email" class="form-control" id="customerEmail" />
          </div>
          <h4>2. 付款資訊</h4>
          <div class="mb-3">
            <label for="creditCard" class="form-label">卡號</label>
            <input type="number" class="form-control" id="creditCard" />
          </div>
          <div class="mb-3">
            <label for="cardName" class="form-label">持卡人姓名</label>
            <input type="text" class="form-control" id="cardName" />
          </div>
          <div class="mb-3">
            <label for="cardExpiration" class="form-label">有效日期 (MM/YY)</label>
            <input type="text" class="form-control" id="cardExpiration" />
          </div>
          <div class="mb-3">
            <label for="secureCode" class="form-label">安全碼</label>
            <input type="number" class="form-control" id="customerEmail" />
          </div>
        </form>
        <!-- 購物車清單外框 -->
        <div class="cartList d-flex flex-column border border-secondary rounded">
          <div class="bg-secondary text-white mb-3 p-3 ps-4">訂購清單</div>
          <div class="p-3">
            <div class="card d-flex flex-row justify-content-center mb-2">
              <img src="../../../images/wine-glass.jpg" class="card-img-top" alt="產品圖片" />
              <div class="card-body">
                <span class="badge bg-primary rounded-pill mb-2">熱門推薦</span>
                <h5 class="card-title">法國尚羅蘭珍藏香檳禮盒</h5>
                <p>750 ml</p>
                <div class="input-group mb-3">
                  <span class="input-group-text">數量</span>
                  <input type="number" min="0" class="form-control text-end" value="2" />
                </div>
                <strong class="text-danger">$ 3000</strong>
              </div>
              <a href="#" class="btn btn-primary d-flex justify-content-center align-items-center"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash3"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.500 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"
                  /></svg
              ></a>
            </div>
            <div class="card d-flex flex-row">
              <img src="../../../images/wine-glass.jpg" class="card-img-top" alt="產品圖片" />
              <div class="card-body">
                <span class="badge bg-primary rounded-pill mb-2">熱門推薦</span>
                <h5 class="card-title">法國尚羅蘭珍藏香檳禮盒</h5>
                <p>750 ml</p>
                <div class="input-group mb-3">
                  <span class="input-group-text">數量</span>
                  <input type="number" min="0" class="form-control text-end" value="2" />
                </div>
                <strong class="text-danger">$ 3000</strong>
              </div>
              <a href="#" class="btn btn-primary d-flex justify-content-center align-items-center"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash3"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.500 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"
                  /></svg
              ></a>
            </div>
          </div>
          <div class="d-flex justify-content-center mt-5 mb-5">
            <div class="bg-black text-center line" style="height: 1px"></div>
          </div>
          <div class="d-flex flex-column align-items-end pe-3">
            <p class="text-primary fs-5">恭喜您達成單次消費滿3000，此次消費免運費！</p>
            <div>
              <span>(共4件商品)</span>
              <p>小計: $8500</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="totalPrice">
          <div class="card">
            <div class="card-header bg-secondary text-white">您的購物車</div>
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <p class="card-text">商品小計</p>
                <p class="card-text">NT$ 8500</p>
              </div>
              <div class="d-flex justify-content-between">
                <p class="card-text">運費價格</p>
                <p class="card-text">NT$ 0</p>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <div class="bg-black text-center line" style="height: 1px"></div>
            </div>
            <div class="card-body d-flex flex-column justify-content-between">
              <div class="d-flex justify-content-between fw-bold">
                <p class="card-text">總計</p>
                <p class="card-text text-danger">NT$ 8500</p>
              </div>
              <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" value="" id="eighteenPlusAgree" />
                <label class="form-check-label" for="eighteenPlusAgree"> 我已年滿18歲 </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="privacyAgree" />
                <label class="form-check-label" for="privacyAgree"> 我同意服務及隱私權條款 </label>
              </div>
            </div>
            <a href="#" class="btn btn-primary py-3">前往結帳頁面</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckoutPage',
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
.bg-checkout {
  padding-top: 50px;
  padding-bottom: 50px;
}
.cartList .card {
  height: 230px;
  img {
    height: 100%;
    width: auto;
    object-fit: contain;
  }
}
.line {
  width: 95%;
}
</style>
