<template>
  <div class="login">
    <div class="form">
      <h1>Login</h1>
      <form @submit.prevent="handleSignon">
        <input
          class="form-control"
          type="email"
          v-model="form.username"
          placeholder="Email"
          required
        />
        <input
          class="form-control"
          v-model="form.password"
          type="password"
          placeholder="Password"
          required
        />
        <button class="btn" type="submit">Login</button>
      </form>
      <span class="error">{{ error }}</span>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    form: {
      username: "",
      password: "",
    },
    error: "",
  }),
  methods: {
    async handleSignon() {
      try {
        const result = await axios.post(
          "https://brstore.shop/wp-json/bam/user/",
          this.form
        );
        if (result.data.token) {
          this.$router.push({ name: "Dashboard" });
        } else {
          this.error = "Invalid credentails";
          this.form.username = "";
          this.form.password = "";
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.login {
  .form {
    max-width: 600px;
    margin: 0 auto;
    box-shadow: rgba(0, 69, 126, 0.4) 0px 0px 1px;
    padding: 1rem 2rem;
    margin-top: 3rem;
    border-radius: 10px;
    h1 {
      font-size: 1.5rem;
      letter-spacing: 1px;
      color: #00457e;
      margin-bottom: 1rem;
    }
    .form-control {
      display: block;
      width: 100%;
      padding: 10px 20px;
      margin-bottom: 0.8rem;
      box-sizing: border-box;
      font-size: 1rem;
      background-color: rgba(0, 69, 126, 0.1);
      border: none;
      outline: none;
      border-radius: 10px;
    }
    .btn {
      display: block;
      width: 100%;
      padding: 10px 20px;
      margin-bottom: 0.8rem;
      font-size: 1rem;
      background-color: rgba(0, 69, 126, 0.8);
      border: none;
      border-radius: 10px;
      cursor: pointer;
      color: #fff;
    }
    .error {
      color: #9c4a1a;
      margin-left: 3px;
    }
  }
}
</style>
