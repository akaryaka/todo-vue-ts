<template>
  <input class="todo__input" type="text" :placeholder="placeholder">
</template>

<script setup>
  defineProps({
    placeholder: String
  })
</script>

<style scoped lang="scss">
  .todo__input {
    padding: 5px;
    outline: none;
    border: 1px solid #000;
    font-size: 25px;
    width: 90%;
    margin-bottom: 10px;
    border-radius: 5px;
  }
</style>