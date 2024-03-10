<template>
  <div>
    <h2>{{ product.name }}</h2>
    <p>Price: {{ formattedPrice }}</p>
    <p v-if="product.available">Available</p>
    <p v-else>Out of stock</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        id: 1,
        name: "dress",
        price: 25,
        available: true,
      },
    };
  },

  computed: {
    formattedPrice() {
      return `$${this.product.price}`;
    },
  },
};
</script>

<style lang="scss" scoped></style>
