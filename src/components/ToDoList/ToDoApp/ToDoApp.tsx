import { useDispatch, useSelector } from "react-redux"
import { FormToDoList } from "../FormToDoList/FormToDoList"
import { ToDoItem } from "../ToDoItem/ToDoItem"
import { SORT_LIST } from "../redux/actions"
import './ToDoApp.css'
import React from "react"

export const ToDoApp = () => {
    const services = useSelector((state: any) => state.service);
    const dispatch = useDispatch()

    const hendlerChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checkboxAlphabet = document.getElementById('checkbox-alphabet') as HTMLInputElement
        const checkboxPrice = document.getElementById('checkbox-price') as HTMLInputElement
        if (!checkboxAlphabet.checked && !checkboxPrice.checked) return

        if (e.target == checkboxAlphabet) {
            checkboxPrice.checked = false;
        } else if (e.target == checkboxPrice) {
            checkboxAlphabet.checked = false
        }
        return dispatch({
            type: SORT_LIST,
            sortOpt: e.target.value
        })
    }

    return (
        <>
            <FormToDoList />
            {services.length == 0 ? <div>Товаров нет</div> :
                <ul className="list-services">
                    {services.map((item: any, index: any) => {
                        return <ToDoItem item={item} key={index} />
                    })}
                    <div className="checkbox-container">
                        <label className="sort-alphabet">
                            <input type="checkbox" name="alphabet" value="alphabet" onChange={hendlerChangeCheckbox} id="checkbox-alphabet" />
                            Сортировать в алфавитном порядке
                        </label>
                        <label className="sort-price">
                            <input type="checkbox" name="price" value="price" id="checkbox-price" onChange={hendlerChangeCheckbox} />
                            Сортировать по убыванию цены
                        </label>
                    </div>
                </ul>}
        </>
    )
}
