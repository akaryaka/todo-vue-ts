import { ref } from "vue";
import type { Form, Errors } from "../types/todo";

export const form = ref<Form>({
  newTitle: '',
  newDesc: ''
})
  
export const errors = ref<Errors>({
  errorTitleVisible: false,
  errorDescVisible: false
})

export const stubs = ref({
  imgVisible: false,
  stubVisible: false
})

export const todos: any = ref<any>([]);