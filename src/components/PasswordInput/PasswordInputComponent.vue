<template>
  <div class="password-input">
    <input
      v-model="password"
      @input="onPasswordChange"
      class="input-form text-input"
      :type="passwordType"
      required
    />
    <i @click="togglePasswordView" class="far" :class="[eyeClass]"></i>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from "vue";
import { EyeEnum, InputType } from "@/enums/PasswordEnums";

const eyeClass = ref(EyeEnum.EYE);
const passwordType = ref(InputType.PASSWORD);
const password = ref("");
const emit = defineEmits(["password-change"]);

function onPasswordChange() {
  emit("password-change", password.value);
}
function togglePasswordView() {
  eyeClass.value =
    eyeClass.value === EyeEnum.EYE ? EyeEnum.EYE_SLASH : EyeEnum.EYE;

  passwordType.value =
    eyeClass.value === EyeEnum.EYE ? InputType.PASSWORD : InputType.TEXT;
}
</script>
<style lang="scss">
.password-input {
  .fa-eye,
  .fa-eye-slash {
    float: right;
    margin-right: 10px;
    margin-top: -33px;
    position: relative;
    z-index: 2;
    cursor: pointer;
  }
}
</style>
