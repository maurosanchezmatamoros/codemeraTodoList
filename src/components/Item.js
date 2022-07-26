import { useState } from "react"
import "./Item.css"


const Item = ({ item, handleDelete, handleUpdate }) => {

    const [updateInput, setUpdateInput] = useState(false)
    const [updateTodo, setUpdateTodo] = useState("")

    if(updateInput === true) return(
        <li className="list-item">
            <input
            placeholder={item.todo}
            autoFocus={true}
            value={updateTodo}
            onChange={e => setUpdateTodo(e.target.value)}
            />
            <button onClick={() => {
                handleUpdate({id: item.id, todo: updateTodo})
                setUpdateInput(false)
                }}><img src="./images/svg/ok.svg" alt="delete" width={"20px"}/></button>
        </li>
    )

    return(
        <li className="list-item">{item.todo}
            <button onClick={() => handleDelete(item)}><img src="./images/svg/delete.svg" alt="delete" width={"18px"}/></button>
            <button onClick={() => setUpdateInput(true)}><img src="./images/svg/edit.svg" alt="delete" width={"20px"}/></button>
        </li>
    )
}

export default Item