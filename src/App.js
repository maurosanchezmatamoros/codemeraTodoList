import { useEffect, useReducer } from "react";
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
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: "set_items",
      payload: DATA
    });
  },[]);

  return (
    <div className="App">
      <ul className="items-container">
        {state.map(item => <Item key={item.id} item={item}/>)}
      </ul>
    </div>
  );
}

export default App;
