Composition API

- vue 3

Необходимо соблюдать принцип единой ответственности(SRP)

Структура проекта

src

- components/
- - todo/
- - - TodoForm.vue
- - - TodoList.vue
- - - TodoItem.vue
- - - CompletedList.vue
- - - EmptyState.vue
- - ui/
- - - Input.vue
- - - Button.vue
- - - Error.vue
- composables/
- - todos.ts( + )
- - validation.ts( + )
- types/
- - todos.ts( + )
- constants/
- - index.ts( + )
- App.vue

---

Информация о компонентах

- TodoForm.vue - форма добавления задачи
- TodoList.vue - контейнер списка задач
- TodoItem.vue - отдельная задача
- CompletedList.vue - список выполненных задач
- EmptyState.vue - заглушка, когда задач нет
