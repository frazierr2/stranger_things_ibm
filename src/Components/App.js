import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Main from "./Main";
import "./App.css";
// import { updateLanguage } from "../Actions/ActionCreators";
import * as actionCreators from "../Actions/ActionCreators";

function mapStateToProps(state) {
  let languageSelected;
  if (state.language === "English") {
    languageSelected = state.english;
  } else {
    languageSelected = state.pigLatin;
  }
  return {
    language: state.language,
    languageObject: languageSelected
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default App;
