<template>
  <img src="/images/drawn_cocktail.png" class="image_rotate" width="200px" height="200px"  alt="cocktail">
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 24
    },
    height: {
      type: Number,
      default: 24
    }
  }
};
</script>
<style lang="scss" scoped>
.image_rotate {
  animation: rotation 2s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotateY(0);
  }

  to {
    transform: rotateY(360deg);
  }
}
</style>
