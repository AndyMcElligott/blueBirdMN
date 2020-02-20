const selectedHillReducer = (state = {}, action ) => {
    switch (action.type) {
        case 'GET_INFO':
            return action.payload;
        default: 
            return state;
    }
}

export default selectedHillReducer;