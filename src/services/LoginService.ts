import api from "@/api";
import { ApiRoutes } from "@/enums/ApiRoutesEnum";

class LoginService {
  makeLogin(username: string, password: string) {
    return api.post(ApiRoutes.LOGIN, { username, password });
  }

  onLoginSuccess() {}
}

export default new LoginService();
