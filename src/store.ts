import { configureStore } from "@reduxjs/toolkit"

import rootReducer from "./reducers/rootReducer"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./sagas/rootSaga"

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch

export default store
