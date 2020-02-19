import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

function* getVideoSaga() {
    yield takeLatest('GET_USERVIDEO', getUserVideo)
}

function* getUserVideo() {
    try {
        const response = yield axios.get('/hill');
        yield put({type: 'SET_USERVIDEO', payload: response.data })
    }
    catch (error) {
        console.log('error retrieving user videos', error)
    }
}

export default getVideoSaga;