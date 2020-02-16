import axios from 'axios'
import { put, takeEvery, } from 'redux-saga/effects';

function* watcherSaga() {
    yield takeEvery('FETCH_HILLS', getHills)
}

function* getHills() {
    try {
        let response = yield axios.get('/hill')
        console.log(response.data)
        yield put({ type: 'SET_HILLS', payload: response.data })
        
    }
    catch (error) {
        console.log('Error getting hills', error)
    }
}

export default watcherSaga;