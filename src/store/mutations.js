export default {
  incrementSomeNumber(state) {
    console.log("increment some number");
    state.someNumber++;
  },
  setMovies(state, movies) {
    state.movies = movies;
  },
  setIsLoading(state, payload) {
    state.isLoading = payload;
  },
  deleteMovie(state, movie) {
    state.movies = state.movies.filter((m) => m !== movie);
  },
  addMovie(state, movie) {
    console.log(movie);
    state.movies.push(movie);
  },
};
