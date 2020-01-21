import { TASK_FETCH_SUCCEEDED } from "../actions/tasks"
import { ReducerDispatch } from "./rootReducer"

export interface TasksReducerState {
  tasks: Array<ITask> | undefined
}

interface ITask {
  id: number
  title: string
  completed: boolean
}

const initialState: TasksReducerState = {
  tasks: undefined,
}

const tasksReducer = (
  state = initialState,
  { type, payload }: ReducerDispatch,
) => {
  let values = {}
  switch (type) {
    case TASK_FETCH_SUCCEEDED:
      values = {
        tasks: payload.map((task: ITask) => {
          return {
            ...task,
          }
        }),
      }
      return { ...state, ...values }
    default:
      return state
  }
}

export default tasksReducer
