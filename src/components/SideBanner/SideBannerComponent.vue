<template>
  <div class="banner">
    <img class="soccer-img" src="../../assets/images/american-football.svg" />
    <span class="text-welcome">Bem vindo ao</span>
    <span class="text-logo">WebBolão</span>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.banner {
  background-color: #2666fa;
  width: 50%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  text-align: center;
  color: white;
  justify-content: center;

  .soccer-img {
  }

  .text-welcome {
    font-size: 2vw;
    margin-top: 30px;
  }

  .text-logo {
    font-size: 5vw;
    font-weight: bolder;
    margin-top: 10px;
  }
}
</style>
