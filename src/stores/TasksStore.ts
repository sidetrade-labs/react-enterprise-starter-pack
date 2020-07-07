import { observable, action, computed, runInAction } from "mobx"
import TasksApi from "../services/tasks-api"

interface ITask {
  id: number
  title: string
  completed: boolean
}

class TasksStore {
  private tasksApi: TasksApi
  @observable tasks: Array<ITask> | undefined

  constructor() {
    this.tasksApi = new TasksApi()
    this.tasks = undefined
  }

  @computed get total() {
    return this.tasks?.length ?? 0
  }

  @action
  fetchTasks = async () => {
    const tasks: any = await this.tasksApi.fetchTasks()
    runInAction(() => {
      this.tasks = tasks
    })
  }
}

export default TasksStore
