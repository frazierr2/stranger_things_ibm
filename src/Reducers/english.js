/*eslint no-fallthrough: "error"*/
function english(state = "", action) {
  switch (action.type) {
    case "UPDATE_ENGLISH":
      return action.index;
    default:
      return state;
  }
}

export default english;
