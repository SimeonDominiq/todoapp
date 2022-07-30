export interface ITodoItem {
  id: number
  title: string
  isCompleted: boolean
}

export interface ITodoGroup {
  groupId: number
  groupTitle: string
  todoItems: ITodoItem[]
}
