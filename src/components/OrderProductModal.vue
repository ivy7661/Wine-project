<template>
  <div ref="productModal" class="modal fade" tabindex="-1" aria-labelledby="selectProductModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="selectProductModalLabel" class="modal-title">
            <span>訂單編號 : {{ orderId }}</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-6 mb-3" v-for="product in tempCartProducts" :key="product.id">
              <div class="card h-100 p-2">
                <div class="row h-100">
                  <div class="col-4">
                    <a href="#" @click.prevent="seeProduct(product.id)">
                      <img :src="$filters.imgPath(`/images/wine_images/${product.image}.jpg`)" class="card-img-top"
                        :alt="product.chineseName" />
                    </a>
                  </div>
                  <div class="col-8">
                    <div class="card-body d-flex flex-column h-100 justify-content-between">
                      <div class="mb-2">
                        <div>
                          <h5 class="card-title flex-fill">{{ product.chineseName }}</h5>
                          <p class="card-text text-danger fw-bold">
                            單價 ： NT ${{ $filters.currency(product.price) }} * {{ product.qty }}
                          </p>
                        </div>
                      </div>
                      <div class="mt-3 mb-2">
                        <label :for="`comment-${product.id}`">商品評價:</label>
                        <fieldset class="rating-container">
                          <template v-for="i in 5" :key="`start-${i}`">
                            <input type="radio" name="rating" :id="`rate-${i}-${product.id}`" :value="(6 - i)"
                              v-model="product.rate" :disabled="product.isCommentRate">
                            <!-- 排序是反過來的 5, 4, 3, 2, 1 ，所以才要 (6 - i) -->
                            <!-- 公式為 rate >= (6<為for 的數量> - index) -->
                            <label :class="{ 'is-rate': product.rate >= (6 - i) }" :for="`rate-${i}-${product.id}`">
                              <svg id="Object" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1122 1122">
                                <path class="cls-2"
                                  d="m570.497,252.536l93.771,190c1.543,3.126,4.525,5.292,7.974,5.794l209.678,30.468c8.687,1.262,12.156,11.938,5.87,18.065l-151.724,147.895c-2.496,2.433-3.635,5.939-3.046,9.374l35.817,208.831c1.484,8.652-7.597,15.25-15.367,11.165l-187.542-98.596c-3.085-1.622-6.771-1.622-9.857,0l-187.542,98.596c-7.77,4.085-16.851-2.513-15.367-11.165l35.817-208.831c.589-3.436-.55-6.941-3.046-9.374l-151.724-147.895c-6.286-6.127-2.817-16.803,5.87-18.065l209.678-30.468c3.45-.501,6.432-2.668,7.974-5.794l93.771-190c3.885-7.872,15.11-7.872,18.995,0Z" />
                                <path class="cls-1"
                                  d="m561,296.423l-83.563,161.857c-4.383,8.49-12.797,14.155-22.312,15.024l-181.433,16.562,191.688,8.964c12.175.569,23.317-6.81,27.543-18.243l68.077-184.164Z" />
                                <path class="cls-3"
                                  d="m357.284,838.933l-4.121,24.03c-1.484,8.652,7.597,15.25,15.367,11.165l187.541-98.596c3.086-1.622,6.771-1.622,9.857,0l187.541,98.596c7.77,4.085,16.851-2.513,15.367-11.165l-35.817-208.831c-.589-3.435.55-6.941,3.046-9.374l151.724-147.894c6.287-6.127,2.818-16.802-5.87-18.065l-70.23-10.205c-113.59,203.853-287.527,311.181-454.405,370.34Z" />
                              </svg>
                            </label>
                          </template>
                        </fieldset>
                      </div>
                      <div class="mb-3">
                        <label :for="`comment-${product.id}`">商品評論:</label>
                        <textarea :id="`comment-${product.id}`" rows="6" maxlength="20"
                          :disabled="product.isCommentRate" v-model="product.comment"></textarea>
                      </div>
                      <button class="btn btn-primary w-100" @click.prevent="addComment(product)"
                        v-if="!product.isCommentRate" :disabled="!product.comment">
                        <span v-if="!product.comment">請先新增評論</span>
                        <span v-else>新增評論</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            關閉
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  props: ['cartProduct', 'userData', 'orderId'],
  data() {
    return {
      tempCartProducts: null,
      user: {
        userId: 0,
        name: ''
      }
    };
  },
  watch: {
    cartProduct() {
      this.tempCartProducts = this.cartProduct.map(product => {
        return {
          ...product,
          isCommentRate: product.isCommentRate || false,
          comment: product.comment || '',
          rate: product.rate || 5
        };
      });
    },
    userData() {
      this.user = { ...this.userData };
    }
  },
  methods: {
    openModal() {
      this.modalProduct.show();
    },
    closeModal() {
      this.modalProduct.hide();
    },
    seeProduct(id) {
      this.closeModal();
      setTimeout(() => {
        this.$router.push({ name: 'ProductDetail', params: { id } });
      }, 0);
    },
    updateOrder() {
      const url = `${import.meta.env.VITE_API_URL}/orders/${this.orderId}`;
      const data = {
        cart: this.tempCartProducts
      };

      axios
        .patch(url, data)
        .then((res) => {
          // console.log(res.data);
          Swal.fire({
            title: '商品評論',
            text: '商品已經成功評論。',
            icon: 'success'
          });
        })
        .catch((error) => {
          console.error('updateOrder', error);
          Swal.fire({
            title: '商品評論',
            text: '商品評論失敗',
            icon: 'error'
          });
        });
    },
    addComment(product) {
      // console.log('addComment', product);

      const url = `${import.meta.env.VITE_API_URL}/comments`;
      const data = {
        ordersId: this.orderId,
        productId: product.id,
        chineseName: product.chineseName,
        comment: product.comment,
        rate: product.rate,
        userId: this.user.userId,
        userName: this.user.name
      };

      axios
        .post(url, data)
        .then((res) => {
          // console.log(res.data);
          product.isCommentRate = true;

          this.updateOrder();
        })
        .catch((error) => {
          console.error('addComment', error);
          Swal.fire({
            title: '商品評論',
            text: '商品評論失敗!',
            icon: 'error'
          });
        });
    }
  },
  mounted() {
    this.modalProduct = new Modal(this.$refs.productModal);
  }
};
</script>

<style lang="scss" scoped>
textarea {
  width: 100%;
  padding: 6px 8px;
  letter-spacing: 1px;
}

button {
  letter-spacing: 3px;
}

// stars
.rating-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  // padding: 2em 2em 2em 5em;
  gap: 10px;
  position: relative;

  .cls-1 {
    fill: #f7db5e;
  }

  .cls-2 {
    fill: #f3cc30;
  }

  .cls-3 {
    fill: #edbd31;
  }

  .rating-value {
    position: absolute;
    top: -10px;
    left: -69px;
    border-radius: 50%;
    height: 138px;
    width: 138px;
    background: #ffbb00;
    box-shadow: 0 1px 1px hsl(0deg 0% 0%/0.075), 0 2px 2px hsl(0deg 0% 0%/0.075),
      0 4px 4px hsl(0deg 0% 0%/0.075), 0 8px 8px hsl(0deg 0% 0%/0.075),
      0 16px 16px hsl(0deg 0% 0%/0.075), inset 0 0 10px #f7db5e, 0 0 10px #f7db5e;

    &:before {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      text-align: center;
      line-height: 138px;
      font-size: 2.5em;
      color: #2b2b2b;
      content: "0";
      transform-origin: "center center";
      transition: all 0.25s ease 0s;
    }

    &:after {
      content: "";
      position: absolute;
      height: 138px;
      width: 138px;
      top: -1px;
      left: -1px;

      margin: auto;
      border: 1px solid #ffbb00;
      border-radius: 50%;
      transition: all 0.4s ease-in;
    }
  }

  input {
    display: none;
  }

  label {
    height: 50px;
    width: 50px;
    transform-origin: "center center";

    svg {
      transition: transform 0.4s ease-in-out;
      opacity: 0.5;
    }

    &:hover {
      svg {
        transform: scale(1.25) rotate(10deg);
      }
    }
  }

  label:hover {

    svg,
    ~label svg {
      opacity: 1;
      transform: scale(1.25) rotate(10deg);
    }
  }

  .is-rate {
    svg {
      opacity: 1;
      transform: scale(1.25) rotate(10deg);
    }
  }
}
</style>
