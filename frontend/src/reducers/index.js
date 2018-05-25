import { combineReducers } from 'redux';
import notes from "./notes";

const srcApp = combineReducers({
  notes,
})

export default srcApp;