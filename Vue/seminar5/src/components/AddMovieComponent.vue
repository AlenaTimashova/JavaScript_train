<template>
  <div>
    <h3>Добавить новый фильм</h3>
    <input type="text" placeholder="название" v-model="title" />
    <input type="text" placeholder="год" v-model="year" />
    <button @click="addNewMovie">Добавить</button>
  </div>
</template>

<script>
export default {
  emits: ["add-film"],
  data() {
    return {
      title: "",
      year: null,
    };
  },
  methods: {
    addNewMovie() {
      const newFilm = {
        id: Date.now(),
        title: this.title,
        year: this.year,
      };
      this.$emit("add-film", newFilm);
      this.title = "";
      this.year = null;
    },
  },
};
</script>

<style lang="scss" scoped></style>
