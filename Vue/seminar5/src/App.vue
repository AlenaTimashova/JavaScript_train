<template>
  <AuthenticationComponent :isAuth="false" />
  <UserListComponent />
  <MortgageCalculatorComponent />
  <ProductDetails />
</template>

<script>
import AuthenticationComponent from "./components/AuthenticationComponent.vue";
import UserListComponent from "./components/UserListComponent.vue";
import MortgageCalculatorComponent from "./components/MortgageCalculatorComponent.vue";
import ProductDetails from "./components/ProductDetails.vue";

export default {
  name: "App",
  components: {
    AuthenticationComponent,
    UserListComponent,
    MortgageCalculatorComponent,
    ProductDetails,
  },
};
</script>
