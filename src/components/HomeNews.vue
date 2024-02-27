<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 news-container mt-5 mb-5">
        <h2 class="text-primary text-center">最新消息</h2>
        <div class="news-image">
          <div class="bg-slider"></div>
          <img src="/images/slider-image.png" class="img-slider2" alt="slider image">
          <img src="/images/slider-left.png" class="img-slider1" alt="slider left">
          <img src="/images/slider-right.png" class="img-slider3" alt="slider right">
          <div class="info-slider">
            <h3 class="">2024 龍年禮盒 85 折起</h3>
            <div class="text-info">
              <p class="">滿額好禮大方送給您 ！！</p>
              <p>別錯過新春特別優惠</p>
            </div>

            <RouterLink to="/products">
              馬上逛逛
              <img src="/images/arrow-right.svg" alt="arrow-right">
            </RouterLink>
          </div>
        </div>
      </div>

      <!-- <div class=" jumbotron md-5">
              <button class="btn btn-primary">Primary</button>
              <button type="button" class="btn btn-secondary">Secondary</button>
              <button type="button" class="btn btn-success">Success</button>
              <button type="button" class="btn btn-danger">Danger</button>
              <button type="button" class="btn btn-warning">Warning</button>
              <button type="button" class="btn btn-info">Info</button>
              <button type="button" class="btn btn-light">Light</button>
              <button type="button" class="btn btn-dark">Dark</button>
          </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeNews',
  data() {
    return {
    };
  }
};
</script>

<style lang="scss" scoped>
.news-container {
  width: 100%;
  // height: 738px;
  // margin-top: 36px;
}

h2 {
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0.25rem;
}

.news-image {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 580px;

  .info-slider {
    position: absolute;
    width: 416px;
    height: 221px;
    top: 149px;
    left: 770px;
    padding: 32px 40px 32px 40px;
    border-radius: 24px;
    opacity: 0.9px;
    background-color: #FFFBF5;

    h3 {
      font-size: 24px;
      font-weight: 600;
      line-height: 29px;
      letter-spacing: 0.05em;
      text-align: left;
    }

    .text-info {
      margin-top: 20px;

      p {
        margin: 0;
        font-size: 16px;
        font-weight: 350;
        line-height: 24px;
        letter-spacing: 0.03em;
        text-align: left;
        color: #4D403C;
      }
    }

    a {
      display: block;
      width: 134px;
      height: 44px;
      padding: 8px 12px 8px 12px;
      background: #752525;
      border: 2px solid #752525;
      border-radius: 100px;
      color: #FFFFFF;
      margin-top: 20px;
      text-align: center;

      img {
        margin-bottom: 5px;
      }
    }
  }

  .bg-slider {
    width: 856px;
    height: 440px;
    top: 80px;
    left: 220px;
    border-radius: 16px;
    background-color: #E7D8CA;
  }

  .img-slider1 {
    width: 258px;
    position: absolute;
    top: 0;
    left: 0;
  }

  .img-slider2 {
    width: 746px;
    position: absolute;
    top: 40px;
    left: 110px;
    border-radius: 16px;
  }

  .img-slider3 {
    position: absolute;
    width: 306px;
    height: 150px;
    top: 430px;
    left: 935px;
  }
}
</style>
