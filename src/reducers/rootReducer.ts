import { combineReducers } from "redux"
import localeReducer, { LocaleReducerState } from "./localeReducer"
import tasksReducer, { TasksReducerState } from "./tasksReducer"

export interface ReducerDispatch {
  type: string
  payload?: any
  onResolve?: (data?: any) => void
}

export interface AppStore {
  tasksReducer?: TasksReducerState
  localeReducer?: LocaleReducerState
}

const rootReducer = combineReducers({
  tasksReducer,
  localeReducer,
})

export default rootReducer
