import { FC } from "react"
import { useDispatch } from "react-redux"
import { updateStatus } from "src/store/todo/todoSlice"
import { AppDispatch } from "../../store/store"
import TodoListItemWrapper from "./TodoListItem.styles"

type Props = {
  groupId: number
  id: number
  title: string
  isCompleted: boolean
}

const TodoListItem: FC<Props> = ({ groupId, id, title, isCompleted }) => {
  const dispatch = useDispatch<AppDispatch>()
  return (
    <TodoListItemWrapper>
      <label>
        <input
          type="checkbox"
          value={id}
          onChange={() => {
            dispatch(updateStatus({ isCompleted: !isCompleted, groupId, id }))
          }}
          checked={isCompleted}
        />{" "}
        {title}
      </label>
    </TodoListItemWrapper>
  )
}

export default TodoListItem
