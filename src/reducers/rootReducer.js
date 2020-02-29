import React from "react";
import moment from 'moment';

const initState = {
    apiUrl: 'http://localhost:8080',
    date: moment().format("DD/MM/YYYY"),
    items:[],
    apiConnected:1
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'INITIALIZE_ITEMS') {
        return {
            ...state,
            items: action.data.items,
            date: action.info.date.replace("-","/").replace("-","/"),
            apiConnected: 1
        }
    }
    if (action.type === 'ADD_ITEM') {
        return {
             ...state,
             items: [...state.items,action.data]
        }
    }
    if (action.type === 'ADD_ITEM_NO_CONNECTION') {
        return {
            ...state,
            items: [...state.items,action.info.data]
        }
    }
    if (action.type === 'DELETE_ITEM') {
        let newItems = state.items.filter(item => {
            return item.id !== action.info.item.id
        });
        return {
            ...state,
            items: newItems
        }
    }
    if (action.type === 'DELETE_ERROR') {
        console.log('Error while attempting delete. ' + action.err)
        return {
            ...state
        }
    }
    if (action.type === 'INITIALIZE_ERROR') {
        console.log('Error while attempting initialization. ' + action.err)
        return {
            ...state,
            apiConnected: 0
        }
    }
    return state
}

export default rootReducer