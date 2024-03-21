<template>
  <div>
    <h2>Cчетчик</h2>
    <p>{{ count }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
  <hr />
  <h2>Корзина</h2>
  <ul>
    <li v-for="item in cartItems" :key="item.id">
      {{ item.name }} - {{ item.price }}
    </li>
  </ul>
  <p>Total: {{ totalItems }}</p>
  <p>TotalPrice: {{ totalPrice }}</p>
  <button @click="addItemToCart({ id: 1, name: 'Товар', price: 10 })">
    Добавить в корзину
  </button>
  <hr />
  <h2>Данные с сервера</h2>
  <ul>
    <li v-for="item in data" :key="item">
      {{ item }}
    </li>
  </ul>
  <button @click="fetchData">Загрузить данные</button>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["count", "data"]),
    ...mapGetters(["cartItems", "totalItems", "totalPrice"]),
  },
  methods: {
    ...mapMutations(["increment", "decrement"]),
    ...mapActions(["addItemToCart", "fetchData"]),
  },
};
</script>

<style lang="scss" scoped></style>
