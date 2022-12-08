<template>
  <div class="register-container">
    <div class="login-container">
      <span class="login-title">Já possui uma conta?</span>
      <button class="btn-blue login-btn">Entrar</button>
    </div>
    <div class="form-container">
      <span class="create-title">Crie sua conta gratuitamente</span>

      <form @submit="onRegister">
        <div class="field">
          <span class="field-label">Nome Completo</span>
          <input
            v-model="name"
            class="input-form text-input"
            type="text"
            required
            placeholder="Seu nome"
          />
        </div>

        <div class="field">
          <span class="field-label">Nome de usuário</span>
          <input
            v-model="username"
            class="input-form text-input"
            type="text"
            required
            placeholder="Escolha um nome de usuário"
          />
        </div>

        <div class="field">
          <span class="field-label">E-mail</span>
          <input
            v-model="email"
            class="input-form text-input"
            type="email"
            required
            placeholder="Seu e-mail"
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
          <span v-else>Crie sua conta</span>
        </button>
      </form>

      <div class="divider">
        <div class="divider-line"></div>
        <span class="divider-text">OU</span>
        <div class="divider-line"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import PasswordInputComponent from "../PasswordInput/PasswordInputComponent.vue";

const bShowSpinner = ref(false);
const name = ref("");
const username = ref("");
const email = ref("");
const password = ref("");

function onPasswordChange(value: string) {
  password.value = value;
}

function onRegister(event: Event) {
  event.preventDefault();
  bShowSpinner.value = true;
}
</script>

<style lang="scss">
@import "../../styles/global";

.register-container {
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .login-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 20px;
    margin-left: auto;
    color: #455a64;
    width: 100%;

    .login-title {
      font-weight: 550;
    }

    .login-btn {
      width: 110px;
      height: 60px;
      margin-left: 20px;
      margin-right: 20px;
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

    .divider {
      text-align: center;
      font-weight: bold;
      margin-top: 30px;
      display: flex;
      align-items: center;
      color: #aaa9a9;

      .divider-line {
        width: 100%;
        height: 1px;
        background-color: #d3d3d3;
      }

      .divider-text {
        margin-left: 10px;
        margin-right: 10px;
      }
    }

    .create-title {
      font-weight: bolder;
      font-size: 2rem;
      margin-bottom: 50px;
    }
  }
}
</style>
