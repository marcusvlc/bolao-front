import LoginService from "@/services/LoginService";
import { createStore, Store } from "vuex";
import routes from "@/routes";
import { InjectionKey } from "vue";
import { Routes } from "@/enums/RouteEnum";

const store = createStore<StoreProps>({
  state() {
    return {
      user: {},
      token: null,
    };
  },
  mutations: {
    storeUser(state, user) {
      state.user = user;
    },
    storeToken(state, authToken: string) {
      state.token = authToken;
    },
  },
  getters: {},
  actions: {
    makeAuth(context, { username, password }) {
      return LoginService.makeLogin(username, password).then((payload) => {
        const { token, user } = payload.data;
        context.commit("storeToken", token);
        context.commit("storeUser", user);
        routes.goToRoute(Routes.BASE);
      });
    },
  },
});

export const key: InjectionKey<Store<StoreProps>> = Symbol();

interface StoreProps {
  user: any;
  token: null | string;
}

export default store;
