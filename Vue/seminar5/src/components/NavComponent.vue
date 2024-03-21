<template>
  <nav>
    <router-link v-for="link in links" :key="link.id" :to="link.url"
      >{{ link.title }}
    </router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          id: 1,
          title: "user",
          url: "/",
        },
        {
          id: 2,
          title: "books",
          url: "/books",
        },
        {
          id: 3,
          title: "films",
          url: "/films",
        },
        {
          id: 4,
          title: "catalogue",
          url: "/catalogue",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
