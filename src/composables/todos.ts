import { watch } from "vue";
import { todos, stubs, form } from "../constants";
import type { Todo } from "../types/todo";


export function composableTodos() {
  const doneTask = (index: number) => {
    todos.value[index].done = true;
    todos.value[index].class = 'list__item done';
    stubs.value.stubVisible = false;
  }

  const editTask = (index: number) => {
    todos.value[index].isEdit = true;
  }


  const editSubmitTask = (index: number) => {
    todos.value[index].isEdit = false;
  }

  const removeTask = (index: number) => {
    todos.value.splice(index, 1);
    checkListNull();
  }

  function checkListNull() {
    if (todos.value.length == 0) {
      stubs.value.imgVisible = true;
      stubs.value.stubVisible = true;
    } else {
      stubs.value.imgVisible = false;
      stubs.value.stubVisible = false;
    }
  }

  function addTask() {
    const newTask: Todo = {
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

  try {
    const todoStor = localStorage.getItem('Task List')
    if (todoStor) {
      todos.value = JSON.parse(todoStor)
    }
  } catch (e) {
    console.error('Ошибка чтения localStorage:', e)
    todos.value = []
  }

  watch(
    todos,
    (updateTodos) => {
      try {
        localStorage.setItem('Task List', JSON.stringify(updateTodos))
      } catch (e) {
        console.log(e)
      }
    },
    { deep: true }
  )

  return { addTask, doneTask, editTask, removeTask, editSubmitTask, checkListNull }
}


