<template>
  <div class="page-login">
    <SideBannerComponent />
    <LoginComponent />
  </div>
</template>

<script setup>
import SideBannerComponent from "../SideBanner/SideBannerComponent.vue";
import LoginComponent from "../Login/LoginComponent.vue";
</script>

<style lang="scss" scoped>
.page-login {
  display: flex;
  width: 100%;
}
</style>
