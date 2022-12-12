import LoginService from "@/services/LoginService";
import { createStore, Store } from "vuex";
import routes from "@/routes";
import { InjectionKey } from "vue";
import { Routes } from "@/enums/RouteEnum";

const store = createStore<StoreProps>({
  state() {
    return {
      user: {},
    };
  },
  mutations: {
    storeUser(state, user) {
      state.user = user;
    },
  },
  getters: {},
  actions: {
    makeAuth(context, { username, password }) {
      return LoginService.makeLogin(username, password).then((payload) => {
        const { user, token } = payload.data;
        context.commit("storeUser", user);
        LoginService.storeTokenOnLocalStorage(token);
        routes.goToRoute(Routes.BASE);
      });
    },
  },
});

export const key: InjectionKey<Store<StoreProps>> = Symbol();

interface StoreProps {
  user: any; // todo type
}

export default store;
