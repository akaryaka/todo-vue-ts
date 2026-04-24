export interface Todo {
  id: number,
  title: string,
  desc: string,
  class: string,
  isEdit: boolean,
  done: boolean
}

export interface Form {
  newTitle: string,
  newDesc: string
}

export interface Errors {
  errorTitleVisible: boolean,
  errorDescVisible: boolean
}