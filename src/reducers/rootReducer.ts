import localeSlice from "./localeSlice"
import tasksSlice from "./tasksSlice"
import { combineReducers, PayloadAction } from "@reduxjs/toolkit"

export type PayloadActionWithResolve<T> = {
  onResolve?: (data?: any) => void
} & PayloadAction<T>

const rootReducer = combineReducers({
  tasks: tasksSlice.reducer,
  locale: localeSlice.reducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
