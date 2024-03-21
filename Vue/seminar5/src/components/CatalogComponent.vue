<template>
  <div>
    <h1>Catalogue</h1>
    <ul>
      <li v-for="product in paginatedProducts" :key="product.id">
        {{ product.title }}
      </li>
    </ul>
    <div v-if="totalPages > 1">
      <router-link
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        :to="getPageLink(pageNumber)"
      >
        {{ pageNumber }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, title: "Product1" },
        { id: 2, title: "Product2" },
        { id: 3, title: "Product3" },
        { id: 4, title: "Product4" },
        { id: 5, title: "Product5" },
        { id: 6, title: "Product6" },
        { id: 7, title: "Product7" },
        { id: 8, title: "Product8" },
        { id: 9, title: "Product9" },
        { id: 10, title: "Product10" },
      ],
      itemsPerPage: 10,
    };
  },

  methods: {
    getCurrentPageNumber() {
      const pageNumberParam = parseInt(this.$route.params.pageNumber); // обращение к глобальному объекту роутер, его параметрам
      return isNaN(pageNumberParam) || pageNumberParam < 1
        ? 1
        : pageNumberParam;
    },
    getPageLink(pageNumber) {
      return `/catalogue/${pageNumber}`;
    },
  },

  computed: {
    totalPages() {
      return Math.ceil(this.products.length / this.itemsPerPage);
    },
    paginatedProducts() {
      const pageNumber = this.getCurrentPageNumber();
      const startIndex = (pageNumber - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.products.slice(startIndex, endIndex);
    },
  },
};
</script>

<style lang="scss" scoped></style>
