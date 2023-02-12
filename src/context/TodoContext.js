import React, {createContext, useContext, useReducer} from "react";

export const ToDoLayer = ({initialState, reducer, children }) => (
    <ToDoLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </ToDoLayerContext.Provider>
);

export const useTodoLayerValue = () => useContext (ToDoLayerContext);
