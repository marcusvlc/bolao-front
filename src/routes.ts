import LoginPageComponent from "./components/LoginPage/LoginPageComponent.vue";
import RegisterPageComponent from "./components/RegisterPage/RegisterPageComponent.vue";
import HomePageComponent from "./components/HomePage/HomePageComponent.vue";
import { createRouter, createWebHistory } from "vue-router";
import { Routes } from "./enums/RouteEnum";

class RouterManager {
  private routes = [
    { path: Routes.BASE, component: HomePageComponent },
    { path: Routes.LOGIN, component: LoginPageComponent },
    { path: Routes.REGISTER, component: RegisterPageComponent },
  ];

  router = createRouter({ history: createWebHistory(), routes: this.routes });

  goToRoute(strRoute: Routes) {
    this.router.push(strRoute);
  }
}

export default new RouterManager();
