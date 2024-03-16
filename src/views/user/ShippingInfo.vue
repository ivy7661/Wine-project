<template>
  <div class="container">
    <div class="bg-shipping">
      <h2 class="text-primary my-4">貨品寄送資訊</h2>
    </div>
    <ul class="fs-5 bg-accent-brown rounded py-4">
      <li>
        <strong>運送範圍：</strong>
        <p>我們提供全台灣的送貨服務，包括偏遠地區。您可以在結帳時選擇您的送貨地址。</p>
      </li>
      <li>
        <strong>運送時間：</strong>
        <ul>
          <li>一般情況下，我們會在收到您的訂單後的 1-3 個工作日內安排寄送。</li>
          <li>特殊節日或天氣狀況可能會影響運送時間，我們會提前通知您。</li>
        </ul>
      </li>
      <li>
        <strong>運費：</strong>
        <ul>
          <li>全台灣滿 $3000 元以上訂單享有免運費。</li>
          <li>未滿 $3000 元的訂單，運費將根據您的送貨地址和訂單重量計算。</li>
        </ul>
      </li>
      <li>
        <strong>包裝：</strong>
        <p>我們會使用堅固的包裝材料，確保您的酒類產品在運送過程中不受損壞。</p>
      </li>
      <li>
        <strong>訂單查看：</strong>
        <p>
          您可以在我們的網站上登入您的帳戶，查看訂單狀態和運送詳情。如果您有任何疑問，請隨時聯繫我們的客戶服務團隊。
        </p>
      </li>
      <li>
        <strong>聯繫客戶服務團隊：</strong>
        <p>
          如果您需要進一步協助或有其他問題，請隨時撥打我們的客戶服務熱線，或透過電子郵件與我們聯繫。我們的客戶服務團隊將竭誠為您提供支援。
        </p>
      </li>
      <br />
      <li>
        <strong>🍷🍷🍷感謝您選擇Vin Cheteau，祝您購物愉快🍷🍷🍷！</strong>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ShippingInfo',
  components: {},
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}
.bg-shipping {
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>
