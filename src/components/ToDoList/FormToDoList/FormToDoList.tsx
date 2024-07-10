import { SET_FORM, CANCEL_EDIT, SAVE_EDIT } from "../redux/actions"
import { useDispatch, } from "react-redux"
import { editingID } from "../redux/serviceReducer"
import './FormToDoList.css'

export const FormToDoList = () => {

    const dispatch = useDispatch()

    const hendlerSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const price = (document.getElementById("price") as HTMLInputElement).value
        const text = (document.getElementById("text") as HTMLInputElement).value

        return dispatch({
            type: SET_FORM,
            text,
            price,
        })
    }

    const hendlerCancelEdit = () => {
        return dispatch({
            type: CANCEL_EDIT,
        })
    }

    const hendlerSaveEdit = () => {
        const newPrice = (document.getElementById("price") as HTMLInputElement).value
        const newText = (document.getElementById("text") as HTMLInputElement).value

        return dispatch({
            type: SAVE_EDIT,
            newText,
            newPrice,
        })
    }

    return (
        <form id="form-services" className="form-services" onSubmit={hendlerSubmit} >
            <input type="text" placeholder="Услуга" id="text" required />
            <input type="text" placeholder="Цена" id="price" required />
            {editingID ? <>
                <button type='button' onClick={hendlerSaveEdit}>Сохранить</button>
                <button type='button' onClick={hendlerCancelEdit}>Отменить</button>
            </> : <button type="submit">Сохранить</button>}
        </form >
    )
}
