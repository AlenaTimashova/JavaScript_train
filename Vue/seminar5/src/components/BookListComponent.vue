<template>
  <div>
    <BookComponent v-for="book in books" :key="book.id" :book="book" />
  </div>
</template>

<script>
import BookComponent from "./BookComponent.vue";
export default {
  data() {
    return {
      books: [
        {
          id: 1,
          title: "Book1",
          author: "Author1",
          year: 2002,
          genre: "genre1",
          description: " Lorem ipsum dolor sit amet.",
        },
        {
          id: 2,
          title: "Book2",
          author: "Author2",
          year: 2012,
          genre: "genre2",
          description: " Lorem dolor sit amet.",
        },
        {
          id: 3,
          title: "Book3",
          author: "Author3",
          year: 1882,
          genre: "genre3",
          description: " Lorem ipsum dolor sit amet.",
        },
      ],
    };
  },
  components: {
    BookComponent,
  },
};
</script>

<style lang="scss" scoped></style>
