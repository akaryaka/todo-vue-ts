<script>

</script>

<template>
  <ul class="list">
    <li class="list__item" v-for="todo in todos">
      <h3>{{ todo.title }}</h3>
      <p>{{ todo.desc }}</p>
      <button class="done-btn btn done-click edit-click" >
        <img src="/done.jpg" alt="done">
      </button>
      <button class="edit-btn btn done-click edit-click">
        <img  src="/edit.png" alt="edit">
      </button>
    </li>
  </ul>
</template>