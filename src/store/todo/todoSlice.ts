import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ITodoGroup, ITodoItem } from "src/types"
import TodoGroups from "src/mockdata/todos.json"

const initialState = TodoGroups as ITodoGroup[]

const todoSlice = createSlice({
  name: "todoGroups",
  initialState,
  reducers: {
    updateStatus(
      state: any[],
      action: PayloadAction<{
        isCompleted: boolean
        groupId: number
        id: number
      }>,
    ) {
      const activeGroupIndex = state.findIndex(
        (group: ITodoGroup) => group.groupId === action.payload.groupId,
      )
      const activeGroup = state.find(
        (group: ITodoGroup) => group.groupId === action.payload.groupId,
      )
      const itemIndex = activeGroup.todoItems.findIndex(
        (todo: ITodoItem) => todo.id === action.payload.id,
      )
      state[activeGroupIndex].todoItems[itemIndex].isCompleted =
        action.payload.isCompleted
    },
    resetState: () => initialState,
  },
})

export const { updateStatus, resetState } = todoSlice.actions
export default todoSlice.reducer
