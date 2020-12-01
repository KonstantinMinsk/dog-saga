import { takeLatest, call, put } from "redux-saga/effects";
import api from "./api";
import { actions } from "./redux";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  // yield takeLatest("apiCallRequest", workerSaga);
  yield takeLatest(actions.apiCallRequest().type, workerSaga);
}  

// function that makes the api request and returns a Promise for response
function fetchDog() {
  return api.get('/random');
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(fetchDog);
    const dog = response.data.message;

    // dispatch a success action to the store with the new dog
    // yield put({ type: "apiCallSuccess", dog });
    yield put(actions.apiCallSuccess(dog));
  } catch (error) {
    // dispatch a failure action to the store with the error
    // yield put({ type: "apiCallFailure", error });
    yield put(actions.apiCallFailure(error));
  }
}