const reducer = (state, action) => {
  switch (action.type) {
    case "set_items":
      return action.payload

    case "add_item":
      return [...state, action.payload]

    default:
      return state
  }
}

export default reducer
