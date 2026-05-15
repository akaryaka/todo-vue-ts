import { form, errors } from "../constants";
import { composableTodos } from "./todos";
// import { checkListNull } from "./todos";
// import { checkListNull, addTask } from "./todos";

const { addTask, checkListNull } = composableTodos()

export function validationForm() {
  if (form.value.newDesc.trim() == '' && form.value.newTitle.trim() == '') {
    errors.value.errorDescVisible = true;
    errors.value.errorTitleVisible = true;
  } else if (form.value.newTitle.trim() == '') {
    errors.value.errorTitleVisible = true;
    errors.value.errorDescVisible = false;
  } else if (form.value.newDesc.trim() == '') {
    errors.value.errorDescVisible = true;
    errors.value.errorTitleVisible = false;
  } else {
    errors.value.errorDescVisible = false;
    errors.value.errorTitleVisible = false;
    addTask();
  }
  checkListNull();
}