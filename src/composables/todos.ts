import { todos, stubs, form } from "../constants";
import type { Todo } from "../types/todo";
 
export function doneTask(index: any) {
  todos.value[index].done = true;
  todos.value[index].class = 'list__item done';
  stubs.value.stubVisible = false;
}

export function editTask(index: any) {
  todos.value[index].isEdit = true;
}

export function editSubmitTask(index: any) {
  todos.value[index].isEdit = false;
}

export function removeTask(index: any) {
  todos.value.splice(index, 1);
  checkListNull();
}

export function checkListNull() {
  if (todos.value.length == 0) {
    stubs.value.imgVisible = true;
    stubs.value.stubVisible = true;
    stubs.value.stubVisible = true;
  } else {
    stubs.value.imgVisible = false;
    stubs.value.stubVisible = false;
  }
}

export function addTask(event: MouseEvent) {
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