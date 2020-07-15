import { createStore } from 'redux';

const INITIAL_STATE = []


const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
        case 'initState':
            return state.concat(action.target);
        case 'createPost':
            return state.concat(action.post)
        case 'deletePost':
            return state.filter((post) => post.id !== action.target.id);
    }
};

export default createStore(reducer);