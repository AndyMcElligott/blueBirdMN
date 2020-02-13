import axios from 'axios'
import { put, takeEvery, } from 'redux-saga/effects';

function* hillSaga() {
    yield takeEvery('GET')
}

function* fetchHills() {
    try {
        let response = yield axios.get('/hill')
        console.log(response.data)
        yield put({ type: 'SET_BOOKS', payload: response.data })

    }
    catch (error) {
        console.log('Error getting books', error)
    }
}

export default hillSaga;