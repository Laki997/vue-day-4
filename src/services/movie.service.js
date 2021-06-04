import baseService from "./base.service";

class MovieService {
  async add(movie) {
    const response = await baseService.post("/movies", movie);
    console.log(response);
    return response;
  }

  async getAll() {
    const response = await baseService.get("/movies");

    console.log(response);
    return response.data;
  }
}

export const movieService = new MovieService();
