import baseService from "./base.service";

class AuthService {
  constructor() {
    this.setDefaultHeaders(localStorage.getItem("token"));
  }

  async login(user) {
    const response = await baseService.post("/login", user);

    this.setDefaultHeaders(response.data.token);

    return response;
  }

  logout() {
    localStorage.removeItem("token");
    baseService.defaults.headers.common["Authorization"] = ``;
  }

  setDefaultHeaders(token) {
    if (!token) {
      return;
    }
    localStorage.setItem("token", token);
    baseService.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
}

export const authService = new AuthService();
