<template>
  <ul class="list">
    <li>
      <div class="list__item-content">
        <h3>{{ title }}</h3>
        <p>{{ desc }}</p>
        <div class="inputs-wrapper">
          <input class="todo__input" type="text" placeholder="отредактируйте заголовок">
          <input class="todo__input"  type="text" placeholder="отредактируйте описание">
          <button  class="add-btn">ок</button>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup>
  defineProps({
    title: '',
    desc: ''
  })
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