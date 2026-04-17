<script lang="ts">
  import { defineComponent } from 'vue';

  interface Todo {
    id: number
    title: string
    desc: string
  }

  export default defineComponent({
    data() {
      return {
        newTitle: '',
        newDesc: '',
        todos:  [
          {id: 1, title: 'task', desc: 'desc'},
          {id: 2, title: 'task', desc: 'desc'}
        ] as Todo[]
      }
    },
    methods: {
      addTask(event: MouseEvent) {
        event.preventDefault();
        const newTask:Todo = {
          id: Date.now(),
          title: this.newTitle,
          desc: this.newDesc
        }
        this.todos.push(newTask);
        this.newTitle = '';
        this.newDesc = '';
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
          <input id="title-task" v-model="newTitle" type="text" class="todo__input" autocomplete="on" required>
          <label class="todo__label" for="#desk-task">Описание дела</label>
          <input id="desk-task" v-model="newDesc" type="text" class="todo__input" autocomplete="on" required>
          <input @click="addTask" class="add-btn btn" type="submit" value="добавить">
        </form>
      </div>
    <div class="todo__output">
      <h2 class="title-2">Мои дела</h2>
      <article class="todo__output-content">
        <ul class="list">
          <li class="list__item" v-for="todo in todos">
            <h3>{{ todo.title }}</h3>
            <p>{{ todo.desc }}</p>
            <!-- <button class="done-btn btn done-click edit-click" >
              <img src="/done.jpg" alt="done">
            </button>
            <button class="edit-btn btn done-click edit-click">
              <img  src="/edit.png" alt="edit">
            </button> -->
          </li>
        </ul>
      </article>
    </div>
  </div>
  </div>
</template>

<style lang="scss" scoped>
  .wrapper{
    padding-top: 30px;
    display: flex;
    justify-content: center;
  }

  .title{
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
    // &-item {
    //   &__input {
    //     padding: 5px;
    //     border-radius: 3px;
    //     border: none;
    //     outline: none;
    //     &-wrapper {
    //       display: flex;
    //       border-radius: 5px;
    //       border-width: 1px;
    //       border-style: solid;
    //       border-color: transparent;
    //       transition: all .3s;
    //     }
    //   }
    // }
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

  .add-btn{
    background-color: #000;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 25px;
    cursor: pointer;
  }

  .stub{
    transition: all .3s;
    &__title {
      margin-bottom: 10px;
    }
    &-opacity {
      // opacity: 0;
    }
  }

  .list-done__stub-img {
    width: 100%;
    border-radius: 10px;
  }

  .list {
    &__item{
      opacity: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 10px;
      padding: 5px;
      transition: all .5s;
      position: relative;
      border: 1px solid #000;
      border-radius: 10px;
    }
  }

  .edit{
  &-btn{
    background: transparent;
    border: none;
    margin-right: 10px;
  }
  &-icon{
    width: 30px;
  }
}

.delete-btn{
  padding: 3px 10px;
  background: transparent;
  color: red;
  border: 1px solid red;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 700;
  margin-right: 5px;
}

.done-btn{
  height: 30px;
  border: none;
  margin-right: 10px;
} 

</style>
