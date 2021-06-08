<template>
  <div>
    Title:
    <h1>
      {{ movie.director }}
    </h1>
    <hr />
    <br />
    Director:
    <h1>
      {{ movie.title }}
    </h1>
  </div>
</template>

<script>
import { movieService } from "../services/movie.service";
export default {
  data() {
    return {
      movie: {},
    };
  },

  async beforeRouteEnter(to, from, next) {
    const movie = await movieService.getMovie(to.params.id);

    next((vm) => vm.setMovie(movie.data));
  },

  methods: {
    setMovie(movie) {
      this.movie = movie;
    },
  },
};
</script>

<style scoped></style>
