import baseService from "./base.service";

class MovieService {
  async add(movie) {
    console.log(movie);
    return baseService.post("/movies", movie);
  }

  async getAll() {
    const response = await baseService.get("/movies");

    console.log(response);
    return response.data;
  }

  async getMovie(id) {
    const response = await baseService.get(`/movie/${id}`);

    return response;
  }
}

export const movieService = new MovieService();
