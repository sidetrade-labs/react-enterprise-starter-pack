import backend from "../config/axios"

class TasksApi {
  fetchTasks = () => {
    return backend.get(`https://jsonplaceholder.typicode.com/todos`)
  }
}

export default TasksApi
