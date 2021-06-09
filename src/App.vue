<template>
  <div id="app">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <span>{{ someNumber }}</span>
        <router-link class="navbar-brand" to="/movies" tag="button"
          >All</router-link
        >
        <router-link class="navbar-brand" to="/add" tag="button"
          >Add Movie</router-link
        >
        <div>
          <router-link
            v-if="isLoggedIn"
            class="navbar-brand"
            to="/logout"
            tag="button"
            >Logout</router-link
          >
        </div>
        <div>
          <router-link
            v-if="isNotLoggedIn"
            class="navbar-brand"
            to="/login"
            tag="button"
            >Login</router-link
          >
          <router-link
            v-if="isNotLoggedIn"
            class="navbar-brand"
            to="/register"
            tag="button"
            >Register</router-link
          >
        </div>
        <div v-if="isLoading">LOADING...</div>
      </nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  computed: {
    isLoggedIn() {
      return window.localStorage.getItem("token");
    },
    isNotLoggedIn() {
      return !window.localStorage.getItem("token");
    },

    someNumber() {
      return this.$store.getters.someNumber;
    },
    isLoading() {
      return this.$store.getters.isLoading;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
