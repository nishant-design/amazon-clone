import React, { createContext, useContext, useReducer } from 'react';


// for data layer***
// wrap App in index.js with StateProvider
// make reducer.js and initialState in it

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}> {children} </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);