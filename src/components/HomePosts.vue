<template>
  <div class="container-fluid d-flex justify-content-center bg-white-2 container-post">
    <img src="/images/Deco_3.png" alt="Deco_3" class="deco w-100" />
    <div>
      <h2 class="text-primary text-center my-5">好文分享</h2>
      <div class="row mb-5" style="max-width: 1296px">
        <div class="col-12 col-lg-4 mb-3 mb-lg-0 d-flex justify-content-center">
          <div class="card border-0">
            <img src="/images/Article_3.png" class="card-img-top" alt="Article" />
            <div class="card-body">
              <h5 class="text-primary">送酒推薦搭配指南</h5>
              <p class="text-black-70">紅酒推薦挑選方法</p>
              <p class="text-black">
                紅酒、白酒都是葡萄做為原料而製成，根據不同葡萄品種、產區、釀造方法等，有極廣泛的風味......
              </p>
              <p class="text-end">
                <a href="https://www.9hunters.com/gift-recommendation/">繼續閱讀
                  <img src="@/assets/icons/svg/Slider.svg" alt="Slider" class="mb-1" />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4 mb-3 mb-lg-0 d-flex justify-content-center">
          <div class="card border-0">
            <img src="/images/Article_2.png" class="card-img-top" alt="Article" />
            <div class="card-body">
              <h5 class="text-primary">西班牙 CAVA 的由來</h5>
              <p class="text-black-70">葡萄酒知識</p>
              <p class="text-black">
                CAVA是傳統法釀造的氣泡酒，釀造方式使用「二次瓶中發酵法」與香檳相同......
              </p>
              <p class="text-end">
                <a href="https://www.9hunters.com/wine-knowledge-cava/">繼續閱讀
                  <img src="@/assets/icons/svg/Slider.svg" alt="Slider" class="mb-1" />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4 mb-3 mb-lg-0 d-flex justify-content-center">
          <div class="card border-0">
            <img src="/images/Article_1.png" class="card-img-top" alt="Article" />
            <div class="card-body">
              <h5 class="text-primary">六款值得收藏紅酒推薦</h5>
              <p class="text-black-70">紅酒歷史由來</p>
              <p class="text-black">
                從最早的自然發酵到現今專業的釀酒，其多變的風味與香氣，更迷倒了古今中外的無數人......
              </p>
              <p class="text-end">
                <a href="https://www.9hunters.com/red-wine-recommendation/">繼續閱讀
                  <img src="@/assets/icons/svg/Slider.svg" alt="Slider" class="mb-1" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePosts',
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
p,
a {
  font-size: 14px;
}

.card {
  background-color: transparent;
  max-width: 416px;
}

.card-img-top {
  border-radius: 24px;
}

.container-post {
  position: relative;
}

.deco {
  position: absolute;
  max-width: 728px;
  max-height: 120px;
  top: -40px;
  left: 0;
}

@media (max-width: 375px) {
  .card {
    max-width: 310px;
  }

  .deco {
    max-width: 300px;
  }
}
</style>
