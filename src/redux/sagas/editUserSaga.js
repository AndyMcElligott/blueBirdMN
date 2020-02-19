import axios from 'axios'
import { put, takeEvery } from 'redux-saga/effects';
import { connect } from 'react-redux';

function* editUserSaga() {
    // yield takeLatest('FETCH_USER', fetchUser);
    yield takeEvery('EDIT_USER', editUser)
}

function* editUser(action) {
    try {
        console.log('in edit user saga', action.payload)
        let id = action.payload
        let response = yield axios.put(`/api/user`, action.payload);
        console.log('in edit user again')
        yield put({ type: 'FETCH_USER', payload: action.payload })
    }
    catch (error) {
        console.log('Error editing user', error)
    }
}


export default editUserSaga;