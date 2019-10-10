function pigLatin(state = "", action) {
  switch (action.type) {
    case "UPDATE_PIGLATIN":
      return action;
    default:
      return state;
  }
}

export default pigLatin;
