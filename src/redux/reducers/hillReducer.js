const hillReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_HILLS':
            return action.payload;
        default:
            return state;    
    }
}

export default hillReducer;