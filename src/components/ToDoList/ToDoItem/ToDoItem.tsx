import './ToDoItem.css'
import { IPropsItem } from '../redux/types/types'
import { useDispatch } from 'react-redux'
import { DELETE_ITEM, EDIT_ITEM } from '../redux/actions'
import { editingID } from '../redux/serviceReducer'

export const ToDoItem = (props: IPropsItem) => {
    const dispatch = useDispatch()
    const { text } = props.item
    const { price } = props.item
    const { id } = props.item

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
        <li className="service-item" id={id}>
            <div className='item-container'>
                <div className="item-info">
                    <span className="item-text">{text}</span>
                    <span className="item-price">{price} ₽</span>
                </div>
                <div className="btn-container">
                    <button type='button' onClick={() => hendlerEditItem(id)}>Редактировать</button>
                    {editingID ? null : <button type='button' onClick={() => hendlerDeleteItem(id)}>Удалить</button>}
                </div>
            </div>
        </li>
    )
}
