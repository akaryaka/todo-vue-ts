<template>
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
</template>

<script lang="ts" setup>
    import { todos } from '../../constants';
</script>

<style lang="scss" scoped>
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
</style>