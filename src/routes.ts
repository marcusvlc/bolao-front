import LoginPageComponent from "./components/LoginPage/LoginPageComponent.vue";
import RegisterPageComponent from "./components/RegisterPage/RegisterPageComponent.vue";
import HomePageComponent from "./components/HomePage/HomePageComponent.vue";
import { createRouter, createWebHistory } from "vue-router";
import { Routes } from "./enums/RouteEnum";
import LoginService from "./services/LoginService";

class RouterManager {
  private routes = [
    {
      path: Routes.BASE,
      component: HomePageComponent,
      meta: { requiresAuth: true },
    },
    { path: Routes.LOGIN, component: LoginPageComponent },
    {
      path: Routes.REGISTER,
      component: RegisterPageComponent,
    },
  ];

  public router = createRouter({
    history: createWebHistory(),
    routes: this.routes,
  });

  constructor() {
    this.setupMiddleware();
  }

  setupMiddleware() {
    this.router.beforeEach(async (to, _from, next) => {
      const isAuthenticated = await LoginService.isAuthenticated();
      if (to.meta.requiresAuth && !isAuthenticated) {
        next(Routes.LOGIN);
        return;
      }

      next();
    });
  }

  goToRoute(strRoute: Routes) {
    this.router.push(strRoute);
  }
}

export default new RouterManager();
