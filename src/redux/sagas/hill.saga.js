import axios from 'axios'
import { put, takeEvery, } from 'redux-saga/effects';

function* watcherSaga() {
    yield takeEvery('FETCH_HILLS', getHills)
    yield takeEvery('SUBMIT_HILL', submitNewHill)
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

function* submitNewHill() {
    try {
        let response = yield axios.post('/hill')
        console.log(response.data)
        yield put({ type: 'POST_HILL', payload: response.data })
    }
    catch (error) {
        console.log('Error submitting hill', error)
    }
}

export default watcherSaga;