import { createStore } from 'redux';

const INITIAL_STATE = []


const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
        case 'initState':
            return [...new Set(state.concat(action.target))]
    }
};

export default createStore(reducer);