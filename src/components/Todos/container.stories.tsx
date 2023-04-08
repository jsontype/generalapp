import React from "react";
import { Provider } from "react-redux"
import { createStore } from "redux"
import TodosContainer from "./container"
import rootReducer from "../../modules"

export default {
    title: "TodosContainer",
    component: TodosContainer,
}

const store = createStore(rootReducer)

export const Default = () => (
    <Provider store={store}>
        <TodosContainer />
    </Provider>
)
