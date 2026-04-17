<script>

</script>

<template>
  <ul class="list">
    <li class="list__item" v-for="todo in todos">
      <div class="list__item-content">
        <h3>{{ todo.title }}</h3>
        <p>{{ todo.desc }}</p>
      </div>
      <div class="btn-wrapper">
        <button class="done-btn btn done-click edit-click" >
        <!-- <img src="/done.jpg" alt="done"> -->
          done
        </button>
        <button class="edit-btn btn done-click edit-click">
          <!-- <img  src="/edit.png" alt="edit"> -->
          edit
        </button>
        <button class="delete-btn">x</button>
      </div>
    </li>
  </ul>
</template>