<template>
  <ul class="list">
    <li :class="todo.class" v-for="(todo, index) in todos" :key="todo.id">
      <div class="list__item-content">
        <h3 v-if="!todo.isEdit">{{ todo.title }}</h3>
        <p v-if="!todo.isEdit">{{ todo.desc }}</p>
        <div v-if="todo.isEdit" class="inputs-wrapper">
          <input class="todo__input" v-model="todo.title" type="text" placeholder="отредактируйте заголовок">
          <input class="todo__input" v-model="todo.desc" type="text" placeholder="отредактируйте описание">
          <button @click="editSubmitTask(index)" class="add-btn">ок</button>
        </div>
      </div>
      <div v-if="!todo.isEdit" class="btn-wrapper">
        <button @click="doneTask(index)" class="done-btn btn" >
          <img class="done-icon" src="/done.jpg" alt="done">
        </button>
        <button @click="editTask(index)" class="edit-btn btn">
          <img class="edit-icon" src="/edit.png" alt="edit">
        </button>
        <button @click="removeTask(index)" class="delete-btn btn">x</button>
      </div>
    </li>
  </ul>
</template>

<script setup>
  import { todos } from '../../constants';
  import { doneTask, editTask, editSubmitTask, removeTask } from '../../composables/todos';
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
  
  .list {
    &__item{
      opacity: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      padding: 5px;
      border: 1px solid #000;
      border-radius: 10px;
    }
  }

  .list__item.done {
    background-color: aquamarine;
  }

  .inputs-wrapper {
    display: flex;
    align-items: center;
    column-gap: 10px;
    & > .todo__input {
      margin-bottom: 0;
    }
  }

  .btn-wrapper {
    display: flex;
    align-items: center;
  }

  .edit {
    &-btn {
      background-color: #fff;
      border: 1px solid rgb(97, 97, 76);
      border-radius: 5px;
      padding: 1px;
      margin-right: 10px;
      height: 31px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 33px;
    }
    &-icon {
      width: 80%;
    }
  }

  .delete-btn {
    padding: 3px 10px;
    background-color: #fff;
    color: red;
    border: 1px solid red;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 700;
    margin-right: 5px;
  }

  .done {
    &-btn {
      border: 1px solid green;
      border-radius: 5px;
      height: 30px;
      margin-right: 10px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &-icon {
      width: 90%;
    }
  } 

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
  }

</style>