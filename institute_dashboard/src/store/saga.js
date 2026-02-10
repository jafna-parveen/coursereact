import { all, call } from 'redux-saga/effects';

import LoginActionWatcher from 'container/LoginContainer/saga';
import ratingActionWatcher from 'container/RatingContainer/saga';
import coursWatcher from 'container/coursecontainer/saga';



function* rootSaga() {
     yield all([
        call(LoginActionWatcher),
        call(ratingActionWatcher),
        call(coursWatcher),
        
    ]);
}

export default rootSaga;
