<template>
  <div>
    <form @submit.prevent="register">
      <div class="form-group">
        <div v-test-func-dir></div>
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          class="form-control"
          id="name"
          aria-describedby="emailHelp"
          placeholder="Enter name"
          v-model="user.name"
        />
      </div>
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
      <div class="form-group">
        <label for="password">Confirm password</label>
        <input
          type="password"
          name="password_confirmation"
          class="form-control"
          id="password_confirmation"
          aria-describedby="emailHelp"
          placeholder="Confirm password"
          v-model="user.password_confirmation"
        />
      </div>

      <button type="submit" class="btn btn-primary">Register</button>
      <div v-for="error in errors" :key="error">
        <h2>{{ error[0] }}</h2>
      </div>
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import { authService } from "../services/auth.service";
export default {
  data() {
    return {
      user: {},
      errors: "",
    };
  },

  methods: {
    register() {
      console.log(this.user);
      authService
        .register(this.user)
        .then(() => {
          this.$router.push("/login");
          console.log(this.user);
        })
        .catch((error) => {
          //   alert(error.response.data.errors);

          this.errors = error.response.data.errors;

          this.user.name = "";
          this.user.email = "";
          this.user.password = "";
          this.user.password_confirmation = "";
        });
    },
  },

  // directives: {
  //   focus: {
  //     bind(el, binding) {
  //       console.log((el, binding));
  //     },
  //     inserted(el) {
  //       el.focus();
  //     },
  //     update(el, binding) {
  //       console.log(el, binding);
  //     },
  //     componentUpdated(el, binding) {
  //       console.log(el, binding);
  //     },
  //     unbind(el, binding) {
  //       console.log(el, binding);
  //     },
  //   },
  // },
};

Vue.directive("test-func-dir", function(el, binding) {
  console.log("bind ili update ", el, binding);
});
</script>

<style scoped></style>
