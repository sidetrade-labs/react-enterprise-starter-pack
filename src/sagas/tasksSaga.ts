import { takeEvery, call, put } from "redux-saga/effects"
import {
  TASKS_FETCH_REQUESTED,
  TASK_FETCH_SUCCEEDED,
  TASK_FETCH_FAILED,
} from "../actions/tasks"
import backend from "../config/axios"

function* fetchTasks() {
  try {
    const tasks = yield call(() =>
      backend.get(`https://jsonplaceholder.typicode.com/todos`),
    )
    yield put({ type: TASK_FETCH_SUCCEEDED, payload: tasks })
  } catch (e) {
    yield put({ type: TASK_FETCH_FAILED, message: e.message })
  }
}

function* tasksSaga() {
  yield takeEvery(TASKS_FETCH_REQUESTED, fetchTasks)
}

export default tasksSaga
