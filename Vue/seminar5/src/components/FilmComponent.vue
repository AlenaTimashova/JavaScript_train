<template>
  <div>
    <h2>Название: {{ film.title }}</h2>
    <p>Год: {{ film.year }}</p>
  </div>
</template>

<script>
export default {
  props: {
    film: Object,
  },
};
</script>

<style lang="scss" scoped></style>
