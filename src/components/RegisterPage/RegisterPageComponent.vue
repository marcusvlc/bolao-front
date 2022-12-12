<template>
  <div class="page-register">
    <SideBannerComponent />
    <RegisterComponent />
  </div>
</template>

<script setup>
import SideBannerComponent from "../SideBanner/SideBannerComponent.vue";
import RegisterComponent from "../Register/RegisterComponent.vue";
</script>

<style lang="scss" scoped>
.page-register {
  display: flex;
  width: 100%;
}
</style>
