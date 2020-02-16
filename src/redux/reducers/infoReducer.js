const infoReducer = (state = [], action ) => {
    switch (action.type) {
        case 'SET_YOUTUBE':
            return action.payload;
        default:
            return state;
    }
};

export default infoReducer;