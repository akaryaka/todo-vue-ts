Структура проекта

src

- components/
- - todo/
- - - TodoForm.vue(ref: errors?)
- - - TodoList.vue(ref: btn, input)
- - - TodoListDone.vue(+)
- - ui/
- - - Input.vue(+)
- - - Button.vue(+)
- - - Error.vue
- - Todo.vue
- composables/
- - todos.ts( + )
- - validation.ts( +, ref )
- types/
- - todos.ts( + )
- constants/
- - index.ts( + , разобраться с тип ref todos )
- App.vue

---

Информация о компонентах

- TodoForm.vue - форма добавления задачи
- TodoList.vue - контейнер списка задач
- TodoItem.vue - отдельная задача
- CompletedList.vue - список выполненных задач
