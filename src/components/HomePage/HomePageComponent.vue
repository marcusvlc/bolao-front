<template>
  <div>
    Home

    <pre>{{ store.state.user }}</pre>
    <span>{{ store.state.token }}</span>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { key } from "@/store";
const store = useStore(key);
</script>

<style lang="scss" scoped></style>
