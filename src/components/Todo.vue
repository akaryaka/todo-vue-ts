<script lang="ts" setup>
  import { stubs, todos } from '../constants/index.ts';
  import TodoForm from './todo/TodoForm.vue';
  import TodoList from './todo/TodoList.vue';
  import TodoListDone from './todo/TodoListDone.vue';
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
          <TodoList />
          <img v-if="stubs.imgVisible || todos.length == 0" class="stub-img" src="/cat.jpg" alt="cat">
        </article>
        <TodoListDone />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
    padding-top: 30px;
    display: flex;
    justify-content: center;
    width: 1920px;
    margin: 0 auto;
    @media(max-width: 991px) {
      padding-top: 300px;
    }
    @media(max-width: 575px) {
      width: 500px;
      padding-top: 100px;
    }
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
    @media(max-width: 1620px) {
      width: 90%;
    }
    @media(max-width: 991px) {
      flex-direction: column;
    }

    &__header {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      @media(max-width: 1620px) {
        align-items: flex-start;
        margin-right: 300px;
        width: 600px;
      }
      @media(max-width: 991px) {
        // padding-top: 300px;
        margin-right: 0;
        margin-bottom: 100px;
      }
      @media(max-width: 575px) {
        width: 100%;
      }
    }
    &__output {
      height: 100%;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
      transition: .3s;
      @media(max-width: 575px) {
        // width: 500px;
        width: 100%;
      }
      &-content {
        border: 1px solid #000;
        padding: 10px;
        border-radius: 10px;
        width: 100%;
        transition: .3s;
      }
    }
  }

  .stub-img {
    width: 100%;
  }
</style>
