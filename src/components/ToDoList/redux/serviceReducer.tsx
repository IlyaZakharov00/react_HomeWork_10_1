import { SET_FORM, EDIT_ITEM, DELETE_ITEM, CANCEL_EDIT, SAVE_EDIT } from "./actions";
import { InitStateService } from "./types/types";
export let editingID = null;

const initialStateService: InitStateService = []

export const serviceReducer = (state = initialStateService, action: any) => {

  const inputText = document.getElementById("text") as HTMLInputElement;
  const inputPrice = document.getElementById("price") as HTMLInputElement;

  switch (action.type) {
    case SET_FORM:
      inputText.value = ''
      inputPrice.value = ''

      return [...state, {
        text: action.text,
        price: action.price,
        id: Math.random().toString(36).substring(2)
      }]

    case DELETE_ITEM:
      const itemDelete = state.filter((item: any) => { item.id == action.id })[0]
      const indexItemDelete = state.indexOf(itemDelete)
      state.splice(indexItemDelete, 1)
      inputText.value = ''
      inputPrice.value = ''
      return [...state]

    case EDIT_ITEM:
      editingID = action.id
      inputText.value = action.text
      inputPrice.value = action.price
      return [...state]

    case CANCEL_EDIT:
      editingID = null;
      inputText.value = ''
      inputPrice.value = ''
      return [...state]

    case SAVE_EDIT:
      const itemEdit = state.filter((item) => item.id == editingID)[0]
      itemEdit.price = inputPrice.value
      itemEdit.text = inputText.value
      editingID = null;
      inputText.value = ''
      inputPrice.value = ''
      return [...state]

    default:
      return state;
  }
};
