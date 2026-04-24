<template>
  <form @submit.prevent action="#" class="todo__form">
    <Input v-model="form.newTitle" label="Название дела"/>
    <div v-if="errors.errorTitleVisible" class="error">Введите название дела!</div>
    <Input v-model="form.newDesc" label="Описание дела"/>
    <div v-if="errors.errorDescVisible" class="error">Введите описание дела!</div>
    <Button @add="validationForm" value="добавить" />
  </form>
</template>

<script lang="ts" setup>
  import Button from '../ui/Button.vue';
  import Input from '../ui/Input.vue';
  import { validationForm } from '../../composables/validation';
  import { errors, form } from '../../constants';
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