import axios from 'axios'
import { put, takeEvery, } from 'redux-saga/effects';

function* infoSaga() {
    yield takeEvery('FETCH_YOUTUBE', fetchYouTube)
    yield takeEvery('POST_YOUTUBE', postYoutube);
}

function* postYoutube(action) {
    console.log('in postYoutube saga', action.payload)
    let response = yield axios.post(`/info`, action.payload)
    yield put({type: 'FETCH_YOUTUBE'})
}

function* fetchYouTube() {
    try {
        let response = yield axios.get(`/info`)
        console.log(response.data)
        yield.put({type: 'SET_YOUTUBE', payload: response.data})
    }
    catch(error) {
        console.log('error getting youtube', error)
    }
}

export default infoSaga;