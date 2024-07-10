import { SET_FORM, EDIT_ITEM, DELETE_ITEM, CANCEL_EDIT, SAVE_EDIT, SORT_LIST } from "./actions";
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
      const newState = state.filter(item => item.id !== action.id)
      inputText.value = ''
      inputPrice.value = ''
      return [...newState]

    case EDIT_ITEM:
      editingID = action.id
      inputText.value = action.text
      inputPrice.value = action.price
      return [...state]

    case CANCEL_EDIT:
      editingID = null;
      inputText.value = ' '
      inputPrice.value = ' '
      return [...state]

    case SAVE_EDIT:
      const itemEdit = state.filter((item) => item.id == editingID)[0]
      itemEdit.price = inputPrice.value
      itemEdit.text = inputText.value
      editingID = null;
      inputText.value = ''
      inputPrice.value = ''
      return [...state]

    case SORT_LIST:
      if (action.sortOpt == 'alphabet') {
        state.sort((firstItem, secondItem) => {
          console.log(secondItem.text, firstItem.text)
          return firstItem.text > secondItem.text ? 1 : -1
        })
      } else if (action.sortOpt == 'price') {
        state.sort((firstItem, secondItem) => {
          return (Number(secondItem.price) - Number(firstItem.price))
        })
      }

      return [...state]

    default:
      return state;
  }
};
