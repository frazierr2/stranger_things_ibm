function language(state = "", action) {
  switch (action.type) {
    case "UPDATE_LANGUAGE":
      return action.newLanguage;
    default:
      return state;
  }
}

export default language;
