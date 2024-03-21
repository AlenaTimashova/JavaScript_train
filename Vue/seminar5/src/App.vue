<template>
  <!-- <BookListComponent />
  <MovieListComponent /> -->
  <!-- <CounterComponent /> -->
  <NavComponent />
  <RouterView />
</template>

<script>
// import BookListComponent from "./components/BookListComponent.vue";
// import MovieListComponent from "./components/MovieListComponent.vue";
// import CounterComponent from "./components/CounterComponent.vue";
import NavComponent from "./components/NavComponent.vue";

export default {
  name: "App",
  components: {
    // BookListComponent,
    // MovieListComponent,
    // CounterComponent,
    NavComponent,
  },
};
</script>
