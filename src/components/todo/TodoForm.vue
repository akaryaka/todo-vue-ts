<template>
  <form action="#" class="todo__form">
    <Input label="Название дела"/>
    <div v-if="errors.errorTitleVisible" class="error">Введите название дела!</div>
    <Input label="Описание дела"/>
    <div v-if="errors.errorDescVisible" class="error">Введите описание дела!</div>
    <Button @open="validationForm" value="добавить" />
  </form>
</template>

<script lang="ts" setup>
  import Button from '../ui/Button.vue';
  import Input from '../ui/Input.vue';
  import { validationForm } from '../../composables/validation';
  import { errors } from '../../constants';
</script>

<style lang="scss" scoped>
  .todo {
    &__form {
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
  }

  .error {
    color: red;
    margin-bottom: 5px;
  }
</style>