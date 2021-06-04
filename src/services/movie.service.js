import baseService from "./base.service";

class MovieService {
  constructor() {
    this.setDefaultHeaders(localStorage.getItem("token"));
  }
  async add(movie) {
    console.log(movie);
    return baseService.post("/movies", movie);
  }

  async getAll() {
    const response = await baseService.get("/movies");

    console.log(response);
    return response.data;
  }

  async login(user) {
    const response = await baseService.post("/login", user);

    this.setDefaultHeaders(response.data.token);

    return response;
  }

  setDefaultHeaders(token) {
    if (!token) {
      return;
    }
    localStorage.setItem("token", token);
    baseService.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
}

export const movieService = new MovieService();
