<template>
  <form v-if="isAuth">
    <input type="text" placeholder="login" />
    <input type="password" placeholder="password" />
    <button>Submit</button>
  </form>
  <div v-else>
    <h1>Вы зарегистрированы успешно</h1>
  </div>
</template>

<script>
export default {
  props: {
    isAuth: Boolean,
  },
};
</script>

<style lang="scss" scoped></style>
