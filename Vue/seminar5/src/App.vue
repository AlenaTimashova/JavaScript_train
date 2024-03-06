<template>
  <AuthenticationComponent :isAuth="false" />
  <UserListComponent />
  <MortgageCalculatorComponent />
</template>

<script>
import AuthenticationComponent from "./components/AuthenticationComponent.vue";
import UserListComponent from "./components/UserListComponent.vue";
import MortgageCalculatorComponent from "./components/MortgageCalculatorComponent.vue";

export default {
  name: "App",
  components: {
    AuthenticationComponent,
    UserListComponent,
    MortgageCalculatorComponent,
  },
};
</script>
