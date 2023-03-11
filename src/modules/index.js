// 2.류트리듀서
import todos from "./todos"
import { combineReducers } from "redux"


const rootReducer = combineReducers({
    todos,
})

export default rootReducer
