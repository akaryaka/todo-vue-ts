<template>
  <form action="#" class="todo__form">
    <label class="todo__label" for="#title-task">Название дела</label>
    <input id="title-task" v-model="newTitle" type="text" class="todo__input" autofocus="true">
    <div v-if="errorTitleVisible" class="error">Введите название дела!</div>
    <label class="todo__label" for="#desk-task">Описание дела</label>
    <input id="desk-task" v-model="newDesc" type="text" class="todo__input">
    <div v-if="errorDescVisible" class="error">Введите описание дела!</div>
    <input @click="handle" class="add-btn" type="submit" value="добавить">
    <!-- <input @click="validationForm" class="add-btn" type="submit" value="добавить"> -->
  </form>
</template>

<script>
  export default {
    emits: ['click'],
    methods: {
      handle() {
        this.$emit('click')
      }
    }
  }
</script>

<style lang="scss">
  .todo {
    &__form {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    }
    &__label {
      font-size: 22px;
      margin-bottom: 5px;
    }
    &__input {
      padding: 5px;
      outline: none;
      border: 1px solid #000;
      font-size: 25px;
      width: 90%;
      margin-bottom: 10px;
      border-radius: 5px;
    }
  }

  .error {
    color: red;
    margin-bottom: 5px;
  }

  .add-btn {
    background-color: #000;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 25px;
    cursor: pointer;
  }

</style>