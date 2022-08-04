//스토어 생성 - 리듀서를 묶어줌

import { createStore, combineReducers} from "redux";
import todos from "../modules/todos.js";

const rootReducer = combineReducers({ todos});
const store = createStore(rootReducer);

export default store;