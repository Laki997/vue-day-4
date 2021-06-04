<template>
  <div>
    <h1>Movies</h1>
    <br />
    <hr />
    <div v-for="movie in movies" :key="movie.id">
      <h2>Title: {{ movie.title }}</h2>
      <h2>Director: {{ movie.director }}</h2>
      <hr />
    </div>
  </div>
</template>

<script>
import { movieService } from "../services/movie.service";
export default {
  data() {
    return {
      movies: {},
    };
  },

  async created() {
    this.movies = await movieService.getAll();
  },
};
</script>

<style scoped></style>
