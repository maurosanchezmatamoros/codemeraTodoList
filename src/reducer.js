const reducer = (state, action) => {
  switch (action.type) {
    case "set_items":
      return action.payload

    case "add_item":
      return [...state, action.payload]

    case "delete_item":
      return state.filter(item => item.id !== action.payload.id)

    case "reset_items":
      return []

    case "update_item":
      return state.map(item => item.id === action.payload.id? action.payload : item)

    default:
      return state
  }
}

export default reducer
