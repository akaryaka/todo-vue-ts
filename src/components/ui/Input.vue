<template>
  <label class="todo__label" :for="name">{{ label }}</label>
  <input :value="modelValue" :id="name" @input="$emit('update:modelValue',($event.target as HTMLInputElement)?.value)" class="todo__input" type="text" :placeholder="placeholder">
</template>

<script lang="ts" setup>
  defineEmits(['update:modelValue'])
  
  defineProps({
    placeholder: String,
    label: String,
    name: String,
    modelValue: String
  })

</script>

<style scoped lang="scss">
  .todo {
    &__input {
      padding: 5px;
      outline: none;
      border: 1px solid #000;
      font-size: 25px;
      width: 90%;
      margin-bottom: 10px;
      border-radius: 5px;
    }
    &__label {
      font-size: 22px;
      margin-bottom: 5px;
    }
  }
</style>