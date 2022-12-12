<template>
  <div class="main-container">
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts"></script>

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
