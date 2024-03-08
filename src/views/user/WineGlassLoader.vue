<template>
  <img src="/images/drawn_cocktail.png" width="200px" height="200px"  alt="cocktail">
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
