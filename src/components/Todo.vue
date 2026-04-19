<script lang="ts">
  import { defineComponent } from 'vue';

  interface Todo {
    id: number
    title: string
    desc: string,
    class: string,
    isEdit: any
  }

  export default defineComponent({
    data() {
      return {
        newTitle: '',
        newDesc: '',
        errorTitleVisible: false,
        errorDescVisible: false,
        imgVisible: false,
        todos:  [
          {id: 1, title: 'task 1', desc: 'desc 1', class: 'list__item', isEdit: false},
          {id: 2, title: 'task 2', desc: 'desc 2', class: 'list__item', isEdit: false}
        ] as Todo[]
      }
    },
    methods: {
      addTask(event: MouseEvent) {
        event.preventDefault();
        const newTask:Todo = {
          id: Date.now(),
          title: this.newTitle,
          desc: this.newDesc,
          class: 'list__item',
          isEdit: false
        }
        this.todos.push(newTask);
        this.newTitle = '';
        this.newDesc = '';
        this.checkListNull();
      },
      validationForm(event: MouseEvent) { 
        if (this.newDesc == '' && this.newTitle == ''){
          this.errorDescVisible = true;
          this.errorTitleVisible = true;
        } else if (this.newTitle == '') {
          this.errorTitleVisible = true;
          this.errorDescVisible = false;
        } else if (this.newDesc == '') {
          this.errorDescVisible = true;
          this.errorTitleVisible = false;
        } else {
          this.errorDescVisible = false;
          this.errorTitleVisible = false;
          this.addTask(event);
        }
      },
      checkListNull() {
        if (this.todos.length == 0) {
          this.imgVisible = true;
        } else {
          this.imgVisible = false;
        }
      },
      removeTask(index: any) {
        this.todos.splice(index, 1);
        this.checkListNull();
      },
      editTask(index: any) {
        this.todos[index].isEdit = true;
      },
      editSubmitTask(index: any) {
        this.todos[index].isEdit = false;
      }
    }
  })
</script>

<template>
  <div class="wrapper">
    <div class="todo" id="todo">
      <div class="todo__header">
        <h1 class="title">Что хотите сделать?</h1>
        <form action="#" class="todo__form">
          <label class="todo__label" for="#title-task">Название дела</label>
          <input id="title-task" v-model="newTitle" type="text" class="todo__input">
          <div v-if="errorTitleVisible" class="error">Введите название дела!</div>
          <label class="todo__label" for="#desk-task">Описание дела</label>
          <input id="desk-task" v-model="newDesc" type="text" class="todo__input">
          <div v-if="errorDescVisible" class="error">Введите описание дела!</div>
          <input @click="validationForm" class="add-btn" type="submit" value="добавить">
        </form>
      </div>
    <div class="todo__output">
      <h2 class="title-2">Мои дела</h2>
      <article class="todo__output-content">
        <ul class="list">
          <li :class="todo.class" v-for="(todo, index) in todos" :key="index">
            <div class="list__item-content">
              <h3>{{ todo.title }}</h3>
              <p>{{ todo.desc }}</p>
              <div v-if="todo.isEdit" class="inputs-wrapper">
                <input v-model="todo.title" type="text" placeholder="отредактируйте заголовок">
                <input v-model="todo.desc" type="text" placeholder="отредактируйте описание">
                <button @click="editSubmitTask(index)">ок</button>
              </div>
            </div>
            <div class="btn-wrapper">
              <button @click="todo.class='list__item done'" class="done-btn btn" >
                <img class="done-icon" src="/done.jpg" alt="done">
              </button>
              <button @click="editTask(index)" class="edit-btn btn">
                <img class="edit-icon" src="/edit.png" alt="edit">
              </button>
              <button @click="removeTask(index)" class="delete-btn btn">x</button>
            </div>
          </li>
          <img v-if="imgVisible" class="stub-img" src="/cat.jpg" alt="cat">
        </ul>
      </article>
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
    width: 40%;
    min-height: 500px;
    display: flex;
    flex-direction: column;
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
        height: 100%;
        width: 100%;
        transition: .3s;
      }
    }
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

  .add-btn {
    background-color: #000;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 25px;
    cursor: pointer;
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

  .error {
    color: red;
    margin-bottom: 5px;
  }

  .stub-img {
    width: 100%;
  }

  .list__item.done {
    background-color: aquamarine;
  }

</style>
