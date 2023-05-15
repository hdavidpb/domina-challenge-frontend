export interface IInitialState {
  tasks: Task[];
  taskSelected?: Task;
  isLoadingTasks: boolean;
}

export interface TaskResponse {
  tasks: Task[];
  statusCode: number;
}

export interface Task {
  id: string;
  description: string;
  isChecked: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateTaskResponse {
  task: Task;
  statusCode: number;
}

export interface UpdateTaskResponse {
  taskUpdated: Task;
  statusCode: number;
}

export interface CreateTaskBody {
  description: string;
}

export interface UpdateTaskBody {
  description: string;
  isChecked: boolean;
}
