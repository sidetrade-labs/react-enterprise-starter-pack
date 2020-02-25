import { all, takeEvery } from "redux-saga/effects"
import { PayloadActionWithResolve } from "../reducers/rootReducer"
import tasksSaga from "./tasksSaga"

export default function* rootSaga() {
  // Attach an "onResolve" method on any
  // payload dispatched by a Saga so it can be
  // called here and you get feedback from within your component
  yield takeEvery(
    "*",
    (
      action: PayloadActionWithResolve<any> & {
        "@@redux-saga/SAGA_ACTION": boolean
      },
    ) => {
      if (action.onResolve && action["@@redux-saga/SAGA_ACTION"]) {
        action.onResolve(action.payload)
      }
    },
  )
  yield all([tasksSaga()])
}
