<template>
  <UserComponent v-for="user in users" :key="user.id" :user="user" />
</template>

<script>
import UserComponent from "./UserComponent.vue";
export default {
  data() {
    return {
      users: [
        { id: 1, name: "John", email: "john@mail.ru" },
        { id: 2, name: "Mary", email: "mary@mail.ru" },
        { id: 3, name: "Max", email: "max@mail.ru", surname: "Doe" },
      ],
    };
  },

  components: {
    UserComponent,
  },
};
</script>

<style lang="scss" scoped></style>
