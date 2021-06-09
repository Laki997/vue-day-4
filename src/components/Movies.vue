<template>
  <div>
    <h1>Movies</h1>
    {{ someNumber }}
    {{ someNumberPlusTwo }}
    <button @click="incrementSomeNumber">Povecaj</button>
    <br />
    <hr />
    <div v-for="movie in movies" :key="movie.id" @click="handleDeleteMovie">
      <h2>Title: {{ movie.title }}</h2>
      <h2>Director: {{ movie.director }}</h2>
      <router-link :to="`/movie/${movie.id}`">Movie Info</router-link>
      <hr />
      <button @click="deleteMovie(movie)">Delete</button>
    </div>
    <button @click="logout" class="btn btn-danger">Logout</button>
  </div>
</template>

<script>
// import { movieService } from "../services/movie.service";
import { authService } from "../services/auth.service";
import { mapActions, mapGetters, mapMutations } from "vuex";
import store from "../store";
export default {
  // data() {
  //   return {
  //     movies: {},
  //   };
  // },
  computed: {
    ...mapGetters(["someNumber", "movies", "someNumberPlusTwo"]),
    // someNumber() {
    //   return this.$store.getters.someNumber;
    // },
  },

  // async created() {
  //   // const movies = await movieService.getAll();

  //   this.$store.dispatch("getMovies");

  //   console.log("movies created", this.$store.getters.someSumber);
  // },
  async beforeRouteEnter(to, from, next) {
    await store.dispatch("getMovies");
    next();
  },
  methods: {
    ...mapMutations(["incrementSomeNumber"]),
    ...mapActions(["deleteMovie"]),
    logout() {
      authService.logout();
      this.$router.push("/login");
    },
    // incrementSomeNumber() {
    //   this.$store.commit("incrementSomeNumber");
    // },

    async handleDeleteMovie(movie) {
      this.deleteMovie(movie.id);
    },
  },
};
</script>

<style scoped></style>
