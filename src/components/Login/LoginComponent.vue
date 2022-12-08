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
          <input
            v-model="password"
            class="input-form text-input"
            type="text"
            required
            placeholder="Digite uma senha"
          />
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
const bShowSpinner = ref(false);
</script>

<style lang="scss"></style>
