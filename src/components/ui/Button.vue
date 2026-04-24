<template>
  <input @click="$emit('add')" type="submit" :value="value" class="add-btn">
</template>

<script lang="ts" setup>
  const emit = defineEmits(['add']);
  defineProps({
    value: String
  })

</script>

<style lang="scss" scoped>
  .add-btn {
    background-color: #000;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 25px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
</style>