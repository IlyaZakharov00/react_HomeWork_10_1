import './ToDoItem.css'
import { IPropsItem } from '../redux/types/types'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_ITEM, EDIT_ITEM } from '../redux/actions'
import { editingID } from '../redux/serviceReducer'

export const ToDoItem = (props: IPropsItem) => {
    const dispatch = useDispatch()
    const { text } = props.item
    const { price } = props.item
    const { id } = props.item

    const services = useSelector((state: any) => state.service);

    const hendlerEditItem = (id: string) => {
        return dispatch({
            type: EDIT_ITEM,
            text,
            price,
            id,
        })
    }

    const hendlerDeleteItem = (id: string) => {
        return dispatch({
            type: DELETE_ITEM,
            id,
        })
    }
    return (
        <li className="service-item" id={id}>{text} {price}
            <button type='button' onClick={() => hendlerEditItem(id)}>Редактировать</button>
            {editingID ? null : <button type='button' onClick={() => hendlerDeleteItem(id)}>Удалить</button>}
        </li>
    )
}
