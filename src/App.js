import { useEffect, useReducer, useState } from "react";
import "./App.css";
import reducer from "./reducer";
import Item from "./components/Item";

const DATA = [
  {id: 1, todo: "item 1"},
  {id: 2, todo: "item 2"},
  {id: 3, todo: "item 3"}
]

const initialState = []

function App() {

  const [newTodo, setNewTodo] = useState("")

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: "set_items",
      payload: DATA
    });
  },[]);

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type: "add_item",
      payload: {
        id: state[state.length -1].id + 1,
        todo: newTodo
      }
    })
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          autoFocus={true}
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
      <ul className="items-container">
        {state.map(item => <Item key={item.id} item={item}/>)}
      </ul>
    </div>
  );
}

export default App;
