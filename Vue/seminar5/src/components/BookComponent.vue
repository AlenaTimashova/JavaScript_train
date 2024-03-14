<template>
  <div>
    <h2>Название: {{ book.title }}</h2>
    <p>Автор: {{ book.author }}</p>
    <p>Год: {{ book.year }}</p>
    <button @click="showMore">
      {{ isShow ? "Скрыть детали" : "Показать дополнительную информацию" }}
    </button>
    <div v-if="isShow">
      <p>Жанр: {{ book.genre }}</p>
      <p>Краткое описание: {{ book.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    book: Object,
  },

  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    showMore() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style lang="scss" scoped></style>
