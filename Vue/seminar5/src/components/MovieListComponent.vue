<template>
  <FilmComponent v-for="film in films" :key="film.id" :film="film" />
  <AddMovieComponent @add-film="addFilm" />
</template>

<script>
import FilmComponent from "./FilmComponent.vue";
import AddMovieComponent from "./AddMovieComponent.vue";
export default {
  components: {
    FilmComponent,
    AddMovieComponent,
  },
  data() {
    return {
      films: [
        {
          id: 1,
          title: "Film1",
          year: 2012,
        },
        {
          id: 2,
          title: "Film2",
          year: 2022,
        },
        {
          id: 3,
          title: "Film3",
          year: 1992,
        },
      ],
    };
  },
  methods: {
    addFilm(film) {
      this.films.push(film);
    },
  },
};
</script>

<style lang="scss" scoped></style>
