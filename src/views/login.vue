<template>
  <div class="container">
    <login></login>
  </div>
</template>

<script>
import Login from "../components/login.vue";
export default {
  components: {
    Login,
  },
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 1rem;
}
</style>
