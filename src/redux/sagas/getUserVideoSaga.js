import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* getVideoSaga() {
    yield takeEvery('GET_USERVIDEO', getUserVideo)
}

function* getUserVideo() {
    try {
        const response = yield axios.get('/userVideos');
        yield put({type: 'SET_USERVIDEO', payload: response.data })
    }
    catch (error) {
        console.log('error retrieving user videos', error)
    }
}

export default getVideoSaga;