import to_reducer from "./to_reducer";
import {combineReducers} from "redux";
import signupReducer from "./signup_reducer";
import searchReducer from "./search_reducer";

const allReducers = combineReducers({
    todo: to_reducer,
    signup: signupReducer,
    search: searchReducer
})

export default allReducers;