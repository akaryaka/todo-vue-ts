<script lang="ts" setup>
  import { stubs, todos } from '../constants/index.ts';
  import { doneTask, editSubmitTask, editTask, removeTask  } from '../composables/todos.ts';
  import TodoForm from './todo/TodoForm.vue';
</script>

<template>
  <div class="wrapper">
    <div class="todo" id="todo">
      <div class="todo__header">
        <h1 class="title">Что хотите сделать?</h1>
        <TodoForm />
      </div>
      <div class="todo__output">
        <h2 class="title-2">Мои дела</h2>
        <article class="todo__output-content">
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
          <img v-if="stubs.imgVisible || todos.length == 0" class="stub-img" src="/cat.jpg" alt="cat">
        </article>

        <div class="done__tasks">
          <h2 class="title-2">выполненные дела</h2>
          <ul class="list">
            <li v-for="todo in todos.filter((t:any) => t.done)"  class="list__item"  :key="todo.id">
              <p> {{ todo.title }}</p>
              <p> {{ todo.desc }}</p>  
            </li>
          </ul>
          <p v-show="todos.length == 0 || todos.filter((t:any) => t.done).length == 0">нет выполненных дел(</p>
        </div> 
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
    padding-top: 30px;
    display: flex;
    justify-content: center;
  }

  .title {
    width: 100%;
    margin-bottom: 10px;
    font-size: 30px;
    line-height: 120%;
    text-align: center;
  }

  .todo {
    width: 70%;
    min-height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    &__header {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    &__output {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
      transition: .3s;
      &-content {
        border: 1px solid #000;
        padding: 10px;
        border-radius: 10px;
        width: 100%;
        transition: .3s;
      }
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

  .stub-img {
    width: 100%;
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
</style>
