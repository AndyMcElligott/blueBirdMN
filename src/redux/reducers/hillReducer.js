const hillReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_HILLS':
            return action.payload;
        default:
            return state;    
    }
}

export default hillReducer;