<script lang="ts">

</script>

<template>
  <div class="wrapper">
    <div class="todo" id="todo">
      <div class="todo__header">
        <h1 class="title">Что хотите сделать?</h1>
        <form action="#" class="todo__form">
          <input type="text" placeholder="Дело" class="todo__input" autocomplete="on">
          <input class="add-btn btn" type="submit" value="+">
        </form>
      </div>
    <div class="todo__output">
      <h2 class="title-2">Мои дела</h2>
      <article class="todo__output-content">
        <div class="stub">
          <img class="list-done__stub-img" src="/cat.jpg">
        </div>  
        <ul class="list" ></ul>
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
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &-item {
      &__input {
        padding: 5px;
        border-radius: 3px;
        border: none;
        outline: none;
        &-wrapper {
          display: flex;
          border-radius: 5px;
          border-width: 1px;
          border-style: solid;
          border-color: transparent;
          transition: all .3s;
        }
      }
    }
    &__input {
      padding: 5px;
      margin-right: 10px;
      border: none;
      outline: none;
      border-bottom: 1px solid #000;
      font-size: 25px;
      width: 90%;
    }
  }

  .add-btn{
    background-color: #000;
    color: #fff;
    padding: 0px 10px;
    border: none;
    border-radius: 5px;
    font-size: 25px;
    width: 10%;
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
</style>
