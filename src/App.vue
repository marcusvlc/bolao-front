<template>
  <div class="main-container">
    <SideBannerComponent></SideBannerComponent>
    <RegisterComponent></RegisterComponent>
  </div>
</template>

<script setup lang="ts">
import RegisterComponent from "./components/Register/RegisterComponent.vue";
import SideBannerComponent from "./components/SideBanner/SideBannerComponent.vue";
</script>

<style>
@font-face {
  font-family: "Aceh-Light";
  src: local("Aceh-Light"),
    url(./assets/fonts/Aceh-Light.ttf) format("truetype");
}

* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Aceh-Light";
}
.main-container {
  height: 100%;
  display: flex;
}
</style>
