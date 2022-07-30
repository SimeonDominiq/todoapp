import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import TodoListGroup from "src/components/TodoListGroup/TodoListGroup"
import { ITodoGroup } from "src/types"
import RandomFact from "src/components/RandomFact/RandomFact"

import { TodoContainer, TodoWrapper } from "./Todo.styles"

const Todo = () => {
  const todoGroups = useSelector((state: RootState) => state.todoGroups)
  const checkGroupIsCompleted = (group: ITodoGroup) =>
    group.todoItems.every((item) => item.isCompleted === true)
  const allPhaseCompleted = todoGroups.every(checkGroupIsCompleted)

  return (
    <TodoWrapper>
      <TodoContainer>
        {allPhaseCompleted ? (
          <RandomFact />
        ) : (
          <>
            <h2>My starup progress</h2>
            {todoGroups?.map((todoGroup) => (
              <TodoListGroup
                key={todoGroup.groupId}
                {...{
                  todoGroup,
                }}
              />
            ))}
          </>
        )}
      </TodoContainer>
    </TodoWrapper>
  )
}

export default Todo
