<template>
  <div>
    <form @submit.stop.prevent="login()">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="user.email"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          class="form-control"
          id="password"
          aria-describedby="emailHelp"
          placeholder="Enter password"
          v-model="user.password"
        />
      </div>

      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
import { authService } from "../services/auth.service";
export default {
  data() {
    return {
      user: {},
      error: "",
    };
  },

  methods: {
    login() {
      authService
        .login(this.user)
        .then((response) => {
          console.log(response);
          this.$router.push("/movies");
        })
        .catch((error) => {
          this.error = error.response.data[1];
          alert(this.error);
        });
    },
  },

  wrongCredentials() {
    alert(this.error);
  },
};
</script>

<style scoped></style>
