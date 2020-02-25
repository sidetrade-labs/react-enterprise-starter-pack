import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface TasksState {
  tasks: Array<ITask> | undefined
}

interface ITask {
  id: number
  title: string
  completed: boolean
}

const initialState: TasksState = {
  tasks: undefined,
}

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    fetchTasks: () => {},
    fetchTasksSucceeded: (
      state: TasksState,
      action: PayloadAction<Array<ITask>>,
    ) => {
      state.tasks = action.payload
    },
  },
})

export const { fetchTasks, fetchTasksSucceeded } = tasksSlice.actions

export default tasksSlice
