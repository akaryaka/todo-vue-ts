<template>
  <p>{{ title }}</p>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Заголовок'
  }
})
</script>

<style scoped>
    p {
    padding: 10px;
    background: #f0f0f0;
    }
</style>