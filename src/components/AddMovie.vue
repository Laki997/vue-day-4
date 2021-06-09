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

      <button type="submit" class="btn btn-primary">Add Movie</button>
      <div v-for="error in errors" :key="error">
        {{ error }}
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
// import { movieService } from "../services/movie.service";
export default {
  data() {
    return {
      movie: {
        title: "",
        director: "",
      },
      errors: [],
    };
  },

  methods: {
    ...mapActions(["createMovie"]),
    // add() {
    //   // console.log(this.movie);
    //   movieService
    //     .add(this.movie)
    //     .then((response) => {
    //       console.log(response);
    //       console.log("test");
    //       this.$router.push("/movies");
    //     })
    //     .catch((errors) => {
    //       console.log(errors);
    //       this.errors = errors.response.data.errors;
    //     });
    // },
    async add() {
      await this.createMovie(this.movie);
      console.log(this.movie);
      this.$router.push("/movies");
    },
  },
};
</script>

<style scoped></style>
