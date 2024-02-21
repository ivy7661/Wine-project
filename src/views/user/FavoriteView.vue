<template>
  <div class="row">
    <h2 class="mt-5 font-weight-normal fw-bold">會員 / {{ title }}</h2>

    <div class="col-md-3 mt-3" v-for="n in 10" :key="n">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="..." alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title {{ n }}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FavoriteView',
  components: {},
  data() {
    return {
      title: '慾望酒單'
    };
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
</style>
