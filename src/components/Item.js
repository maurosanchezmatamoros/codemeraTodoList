import { useState } from "react"


const Item = ({ item, handleDelete, handleUpdate }) => {

    const [updateInput, setUpdateInput] = useState(false)
    const [updateTodo, setUpdateTodo] = useState("")

    if(updateInput === true) return(
        <li>
            <input
            placeholder={item.todo}
            autoFocus={true}
            value={updateTodo}
            onChange={e => setUpdateTodo(e.target.value)}
            />
            <button onClick={() => {
                handleUpdate({id: item.id, todo: updateTodo})
                setUpdateInput(false)
                }}>OK</button>
        </li>
    )

    return(
        <li>{item.todo}
            <button onClick={() => handleDelete(item)}>X</button>
            <button onClick={() => setUpdateInput(true)}>Edit</button>
        </li>
    )
}

export default Item