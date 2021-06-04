<template>
  <div>
    <form @submit.prevent="add">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          name="title"
          class="form-control"
          id="title"
          aria-describedby="emailHelp"
          placeholder="Enter title"
          v-model="movie.title"
        />
      </div>
      <div class="form-group">
        <label for="password">Director</label>
        <input
          type="text"
          name="director"
          class="form-control"
          id="director"
          aria-describedby="emailHelp"
          placeholder="Enter director"
          v-model="movie.director"
        />
      </div>

      <button type="submit" class="btn btn-primary">Login</button>
      <h2>{{ error }}</h2>
    </form>
  </div>
</template>

<script>
import { movieService } from "../services/movie.service";
export default {
  data() {
    return {
      movie: {},
      error: "",
    };
  },

  methods: {
    async add() {
      console.log(this.movie);
      await movieService.add(this.movie).catch(
        (error) => {
          this.error = error;
        }

        // this.$router.push("/movies")
      );
    },
  },
};
</script>

<style scoped></style>
