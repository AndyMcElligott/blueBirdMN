const userVideoReducer = (state= [], action) => {
    if (action.type === 'SET_USERVIDEO') {
        return action.payload;
    }
    return state;
}

export default userVideoReducer;