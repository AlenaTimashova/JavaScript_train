<template>
  <BookListComponent />
  <MovieListComponent />
</template>

<script>
import BookListComponent from "./components/BookListComponent.vue";
import MovieListComponent from "./components/MovieListComponent.vue";

export default {
  name: "App",
  components: {
    BookListComponent,
    MovieListComponent,
  },
};
</script>
