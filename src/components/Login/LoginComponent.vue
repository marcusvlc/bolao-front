<template>
  <div class="login-container">
    <div class="form-container">
      <span class="create-title">Entre na sua conta</span>
      <form @submit="onLogin">
        <div class="field">
          <span class="field-label">Nome Completo</span>
          <input
            v-model="username"
            class="input-form text-input rounded"
            type="text"
            required
            placeholder="Seu nome"
          />
        </div>

        <div class="field">
          <span class="field-label">Senha</span>
          <PasswordInputComponent @password-change="onPasswordChange" />
        </div>

        <button
          :disabled="bShowSpinner"
          type="submit"
          class="submit-btn btn-blue"
        >
          <div v-if="bShowSpinner" class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <span v-else>Entrar</span>
        </button>
      </form>
      <div class="register-container">
        <span
          >Ainda não se registrou?
          <RouterLink class="click-text" to="/register"
            >Clique Aqui</RouterLink
          ></span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup scoped>
import PasswordInputComponent from "../PasswordInput/PasswordInputComponent.vue";
import { ref } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";

const bShowSpinner = ref(false);
const username = ref("");
const password = ref("");
const store = useStore(key);

function onLogin(event: Event) {
  event.preventDefault();
  bShowSpinner.value = true;
  store.dispatch("makeAuth", {
    username: username.value,
    password: password.value,
  });
}

function onPasswordChange(value: string) {
  password.value = value;
}
</script>

<style lang="scss" scoped>
@import "../../styles/global";
@import "../../styles/variables";
.login-container {
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .register-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 30px;
    color: rgb(175, 170, 170);

    .click-text {
      cursor: pointer;
      color: $primary-blue;
      text-decoration: none;
      font-weight: bold;

      &:hover {
        color: $secondary-blue;
      }
    }
  }
  .form-container {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    width: 50%;
    margin-top: auto;
    margin-bottom: auto;

    .spinner-border {
      --bs-spinner-width: 1.5rem;
      --bs-spinner-height: 1.5rem;
      margin-top: 5px;
    }

    .field {
      margin-bottom: 30px;
      .input-form {
        width: 100%;

        margin-top: 10px;
      }

      &-label {
        font-weight: bold;
        margin-bottom: 10px;
      }
    }

    .submit-btn {
      width: 80%;
      height: 50px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 50px;
      display: block;
    }

    .create-title {
      font-weight: bolder;
      font-size: 2rem;
      margin-bottom: 50px;
    }
  }
}
</style>
