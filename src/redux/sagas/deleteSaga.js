import axios from 'axios'
import { put, takeEvery } from 'redux-saga/effects';
import { connect } from 'react-redux';

function* deleteSaga() {
    yield takeEvery('DELETE_VIDEO', deleteVideo);
}

function* deleteVideo(action) {
        try {
            console.log(action.payload)
            let id = action.payload.id
            let user_id= action.payload.user_id
            
            let response = yield axios.delete(`/info/${id}/${hill_id}`);
            
            yield put({ type: 'FETCH_YOUTUBE' })
            console.log(response.data);
        }
        catch (error) {
            console.log('Error deleting video', error)
        }
}

export default deleteSaga