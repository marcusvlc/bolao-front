import api from "@/api";
import { ApiRoutes } from "@/enums/ApiRoutesEnum";

const STR_TOKEN_STORAGE_KEY = "userToken";

class LoginService {
  makeLogin(username: string, password: string) {
    return api.post(ApiRoutes.LOGIN, { username, password });
  }

  onLoginSuccess() {}

  async isAuthenticated() {
    const token = this.getTokenFromLocalStorage();

    return api
      .get(ApiRoutes.VERIFY_TOKEN, {
        headers: { "x-access-token": token },
      })
      .then(() => true)
      .catch(() => false);
  }

  storeTokenOnLocalStorage(token: string) {
    localStorage.setItem(STR_TOKEN_STORAGE_KEY, token);
  }

  getTokenFromLocalStorage() {
    return localStorage.getItem(STR_TOKEN_STORAGE_KEY);
  }
}

export default new LoginService();
