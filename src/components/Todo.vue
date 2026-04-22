<script lang="ts" setup>
  import { ref } from 'vue';
  import TodoList from './TodoList/TodoList.vue';

  interface Todo {
    id: number,
    title: string,
    desc: string,
    class: string,
    isEdit: boolean,
    done: boolean
  }

  interface Form {
    newTitle : string,
    newDesc: string
  }

  interface Errors {
    errorTitleVisible: boolean,
    errorDescVisible: boolean
  }

  // Form
  const form = ref<Form>({
    newTitle: '',
    newDesc: ''
  })
  const errors = ref<Errors>({
    errorTitleVisible: false,
    errorDescVisible: false
  })
  const stubs = ref({
    imgVisible: false,
    stubVisible: false
  })

  const todos: any = ref<any>([]);

  function addTask(event: MouseEvent) {
    event.preventDefault();
    const newTask:Todo = {
      id: Date.now(),
      title: form.value.newTitle,
      desc: form.value.newDesc,
      class: 'list__item',
      isEdit: false,
      done: false
    }
    todos.value.push(newTask);
    form.value.newTitle = '';
    form.value.newDesc = '';
  }

  function validationForm(event: MouseEvent) {
      if (form.value.newDesc == '' && form.value.newTitle == ''){
      errors.value.errorDescVisible = true;
      errors.value.errorTitleVisible = true;
    } else if (form.value.newTitle == '') {
      errors.value.errorTitleVisible = true;
      errors.value.errorDescVisible = false;
    } else if (form.value.newDesc == '') {
      errors.value.errorDescVisible = true;
      errors.value.errorTitleVisible = false;
    } else {
      errors.value.errorDescVisible = false;
      errors.value.errorTitleVisible = false;
      addTask(event);
    }
    checkListNull();
  }

  function doneTask(index: any) {
    todos.value[index].done = true;
    todos.value[index].class = 'list__item done';
    stubs.value.stubVisible = false;
  }

  function editTask(index: any) {
    todos.value[index].isEdit = true;
  }

  function editSubmitTask(index: any) {
    todos.value[index].isEdit = false;
  }

  function removeTask(index: any) {
    todos.value.splice(index, 1);
    checkListNull();
  }

  function checkListNull() {
    if (todos.value.length == 0) {
      stubs.value.imgVisible = true;
      stubs.value.stubVisible = true;
      stubs.value.stubVisible = true;
    } else {
      stubs.value.imgVisible = false;
      stubs.value.stubVisible = false;
    }
  }

</script>

<template>
  <div class="wrapper">
    <div class="todo" id="todo">
      <div class="todo__header">
        <h1 class="title">Что хотите сделать?</h1>
        <TodoList />
        <form action="#" class="todo__form">
          <label class="todo__label" for="title-task">Название дела</label>
          <input id="title-task" type="text" v-model="form.newTitle" class="todo__input" autofocus="true">
          <div v-if="errors.errorTitleVisible" class="error">Введите название дела!</div>
          <label class="todo__label" for="desk-task">Описание дела</label>
          <input id="desk-task" v-model="form.newDesc" type="text" class="todo__input">
          <div v-if="errors.errorDescVisible" class="error">Введите описание дела!</div>
          <input @click="validationForm" class="add-btn" type="submit" value="добавить">
        </form>
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

  .btn-wrapper {
    display: flex;
    align-items: center;
  }

  .edit{
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
