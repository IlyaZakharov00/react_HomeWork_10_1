import { useSelector } from "react-redux"
import { FormToDoList } from "../FormToDoList/FormToDoList"
import { ToDoItem } from "../ToDoItem/ToDoItem"

export const ToDoApp = () => {
    const services = useSelector((state: any) => state.service);

    return (
        <>
            <FormToDoList />
            <ul className="list-services">
                {services.map((item: any, index: any) => {
                    return <ToDoItem item={item} key={index} />
                })}
            </ul>
        </>
    )
}
