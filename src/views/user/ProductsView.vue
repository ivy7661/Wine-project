<template>
  <div class="container">
    <div class="row justify-content-between mt-5">
      <div class="col-md-6">
        <h1>法國五大產區 - 波爾多(Bordeaux)</h1>
        <p>Lorem ipsum dolor pariatut. Excepturi magni minima odio voluptas consequatur provident similique, doloribus dolore accusamus repudiandae, ea quas. Totam molestias perferendis, recusandae nemo ratione magnam officiis ea laudantium modi quo?法國酒界的典範，著名的赤霞珠、梅洛、品丽珠等葡萄種植於此。波爾多葡萄酒以豐富的果香和優雅的口感聞名，由於氣候、土壤的多樣性，這片土地上誕生了許多世界頂級的酒莊。</p>
      </div>
      <div class="col-md-3 d-flex flex-column justify-content-around">
        <div class="searchArea">
          <i class="bi bi-search"></i>
          <input type="text" value="請輸入關鍵字">
        </div>
        <div class="filterBox">
          <select id="wineRegion" name="wineRegion">
            <option value="" disabled selected hidden>產區: 請選擇產區</option>
            <option value="波爾多">波爾多</option>
            <option value="勃艮第">勃艮第</option>
            <option value="香檳">香檳</option>
            <option value="隆河谷">隆河谷</option>
            <option value="阿爾薩斯">阿爾薩斯</option>
          </select>
          <div class="filterBtn d-flex justify-content-between">
            <button type="button" class="btn btn-primary btn-lg px-4 py-2">價格 <i class="bi bi-arrow-down"></i></button>
            <button type="button" class="btn btn-primary btn-lg px-4 py-2 me-0">評價 <i class="bi bi-arrow-down"></i></button>
          </div>
        </div>
      </div>
    </div>
    <img src="../../../public/images/footerContainer.png" class="w-100 my-5">
    <div class="productList pb-5">
      <div class="row mb-3">
        <div class="col-md-4">
          <div class="card">
            <div class="row">
              <div class="col-4">
                <img src="../../../public/images/pour red wine.jpg" class="card-img-top h-100" alt="">
              </div>
              <div class="col-8">
                <div class="card-body">
                  <div class="text-warning d-flex gap-1 mb-1">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <span class="badge bg-danger mb-2">店長推薦</span>
                  <h5 class="card-title">法國 特級薄酒萊 摩貢1926荖藤紅酒</h5>
                  <p class="card-text">$ 1150</p>
                  <a href="#" class="btn btn-primary w-100">加入購物車</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="row">
              <div class="col-4">
                <img src="../../../public/images/pour red wine.jpg" class="card-img-top h-100" alt="">
              </div>
              <div class="col-8">
                <div class="card-body">
                  <div class="text-warning d-flex gap-1 mb-1">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <span class="badge bg-danger mb-2">店長推薦</span>
                  <h5 class="card-title">法國 特級薄酒萊 摩貢1926荖藤紅酒</h5>
                  <p class="card-text">$ 1150</p>
                  <a href="#" class="btn btn-primary w-100">加入購物車</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="row">
              <div class="col-4">
                <img src="../../../public/images/pour red wine.jpg" class="card-img-top h-100" alt="">
              </div>
              <div class="col-8">
                <div class="card-body">
                  <div class="text-warning d-flex gap-1 mb-1">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <span class="badge bg-danger mb-2">店長推薦</span>
                  <h5 class="card-title">法國 特級薄酒萊 摩貢1926荖藤紅酒</h5>
                  <p class="card-text">$ 1150</p>
                  <a href="#" class="btn btn-primary w-100">加入購物車</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-4">
          <div class="card">
            <div class="row">
              <div class="col-4">
                <img src="../../../public/images/pour red wine.jpg" class="card-img-top h-100" alt="">
              </div>
              <div class="col-8">
                <div class="card-body">
                  <div class="text-warning d-flex gap-1 mb-1">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <span class="badge bg-danger mb-2">店長推薦</span>
                  <h5 class="card-title">法國 特級薄酒萊 摩貢1926荖藤紅酒</h5>
                  <p class="card-text">$ 1150</p>
                  <a href="#" class="btn btn-primary w-100">加入購物車</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="row">
              <div class="col-4">
                <img src="../../../public/images/pour red wine.jpg" class="card-img-top h-100" alt="">
              </div>
              <div class="col-8">
                <div class="card-body">
                  <div class="text-warning d-flex gap-1 mb-1">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <span class="badge bg-danger mb-2">店長推薦</span>
                  <h5 class="card-title">法國 特級薄酒萊 摩貢1926荖藤紅酒</h5>
                  <p class="card-text">$ 1150</p>
                  <a href="#" class="btn btn-primary w-100">加入購物車</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="row">
              <div class="col-4">
                <img src="../../../public/images/pour red wine.jpg" class="card-img-top h-100" alt="">
              </div>
              <div class="col-8">
                <div class="card-body">
                  <div class="text-warning d-flex gap-1 mb-1">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <span class="badge bg-danger mb-2">店長推薦</span>
                  <h5 class="card-title">法國 特級薄酒萊 摩貢1926荖藤紅酒</h5>
                  <p class="card-text">$ 1150</p>
                  <a href="#" class="btn btn-primary w-100">加入購物車</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-4">
          <div class="card">
            <div class="row">
              <div class="col-4">
                <img src="../../../public/images/pour red wine.jpg" class="card-img-top h-100" alt="">
              </div>
              <div class="col-8">
                <div class="card-body">
                  <div class="text-warning d-flex gap-1 mb-1">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <span class="badge bg-danger mb-2">店長推薦</span>
                  <h5 class="card-title">法國 特級薄酒萊 摩貢1926荖藤紅酒</h5>
                  <p class="card-text">$ 1150</p>
                  <a href="#" class="btn btn-primary w-100">加入購物車</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="row">
              <div class="col-4">
                <img src="../../../public/images/pour red wine.jpg" class="card-img-top h-100" alt="">
              </div>
              <div class="col-8">
                <div class="card-body">
                  <div class="text-warning d-flex gap-1 mb-1">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <span class="badge bg-danger mb-2">店長推薦</span>
                  <h5 class="card-title">法國 特級薄酒萊 摩貢1926荖藤紅酒</h5>
                  <p class="card-text">$ 1150</p>
                  <a href="#" class="btn btn-primary w-100">加入購物車</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="row">
              <div class="col-4">
                <img src="../../../public/images/pour red wine.jpg" class="card-img-top h-100" alt="">
              </div>
              <div class="col-8">
                <div class="card-body">
                  <div class="text-warning d-flex gap-1 mb-1">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <span class="badge bg-danger mb-2">店長推薦</span>
                  <h5 class="card-title">法國 特級薄酒萊 摩貢1926荖藤紅酒</h5>
                  <p class="card-text">$ 1150</p>
                  <a href="#" class="btn btn-primary w-100">加入購物車</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProductsView',
  components: {},
  data() {
    return {
      title: '產品列表'
    };
  }
};
</script>

<style lang="scss" scoped>
.searchArea {
  display: flex;
  align-items: center;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  i {
  margin-right: 5px;
  }
  input {
  border: none;
  outline: none;
  flex: 1;
  }
}
.filterBox {
  margin-top: 10px; /* 调整与上方搜索区域的间距 */
}

/* 样式化下拉框 */
.filterBox select {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px; /* 调整下拉框与按钮组的间距 */
}

/* 样式化按钮组 */
.filterBtn button {
  padding: 5px 10px;
  margin-right: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}

/* 增加悬停效果 */
.filterBtn button:hover {
  background-color: #f0f0f0;
}
</style>
