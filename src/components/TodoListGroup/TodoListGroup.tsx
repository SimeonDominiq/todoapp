import { FC } from "react"
import { ITodoGroup } from "src/types"
import CheckMark from "../Icons/CheckMark"
import TodoListItem from "../TodoListItem/TodoListItem"
import TodoListGroupWrapper from "./TodoListGroup.styles"

type Props = {
  todoGroup: ITodoGroup
}

const TodoListGroup: FC<Props> = ({ todoGroup }) => {
  const { groupId, groupTitle, todoItems } = todoGroup

  const isGroupCompleted = todoItems.every((item) => item.isCompleted === true)

  return (
    <TodoListGroupWrapper>
      <div className="group-header">
        <span className="group-sn">{groupId}</span>
        <h2 className="group-title">{groupTitle}</h2>
        {isGroupCompleted && <CheckMark />}
      </div>
      {todoItems.map((item) => (
        <TodoListItem key={item.id} {...{ ...item, groupId }} />
      ))}
    </TodoListGroupWrapper>
  )
}

export default TodoListGroup
