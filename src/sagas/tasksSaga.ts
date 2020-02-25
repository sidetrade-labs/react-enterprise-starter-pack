import { takeEvery, call, put } from "redux-saga/effects"
import backend from "../config/axios"
import { fetchTasks, fetchTasksSucceeded } from "../reducers/tasksSlice"

function* runFetchTasks() {
  try {
    const tasks = yield call(() =>
      backend.get(`https://jsonplaceholder.typicode.com/todos`),
    )
    yield put(fetchTasksSucceeded(tasks))
  } catch (e) {
    // handle errors
  }
}

function* tasksSaga() {
  yield takeEvery(fetchTasks.type, runFetchTasks)
}

export default tasksSaga
