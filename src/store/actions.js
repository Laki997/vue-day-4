import { movieService } from "../services/movie.service";

export default {
  async getMovies(store) {
    store.commit("setIsLoading", true);
    console.log("get movies akcija");
    const movies = await movieService.getAll();
    console.log("dobila response od getAll");
    store.commit("setMovies", movies);
    console.log("pozvala se setMovies mutacija");
    store.commit("setIsLoading", false);
  },

  async deleteMovie(store, movie) {
    await movieService.deleteMovie(movie.id);
    store.commit("deleteMovie", movie);
  },
  async createMovie(store, movieData) {
    const movie = await movieService.createMovie(movieData);
    console.log(movie);
    store.commit("addMovie", movie);
  },
};
