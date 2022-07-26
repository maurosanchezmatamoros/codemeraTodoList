const reducer = (state, action) => {
  switch (action.type) {
    case "set_items":
      return action.payload

    default:
      return state
  }
}

export default reducer
