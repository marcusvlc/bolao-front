<template>
  <div class="create-sweepstake-container">
    <div class="first-step" v-if="isCurrentStep(0)">
      <span>Escolha abaixo o tipo do bolão</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SweepStakeOptionEnum from "@/enums/SweepStakeOptionEnum";

const currentStep = ref(0);
const arrOptions = [
  SweepStakeOptionEnum.FOOTBALL,
  SweepStakeOptionEnum.LOL,
].map((eSweepStake) => eSweepStake.toOption());

function isCurrentStep(stepNumber: number) {
  return stepNumber === currentStep.value;
}
</script>

<style lang="scss" scoped>
.create-sweepstake-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  width: 100%;
  height: 100vh;
}
</style>
