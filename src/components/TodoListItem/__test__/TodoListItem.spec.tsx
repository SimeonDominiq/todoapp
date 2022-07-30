import renderer from "react-test-renderer"
import { Provider } from "react-redux"
import configureStore from "redux-mock-store"
import TodoListItem from "../TodoListItem"

const todoItem = {
  groupId: 1,
  id: 11,
  title: "Setup virtual office",
  isCompleted: false,
}

const mockStore = configureStore()

describe("App: Components: Todo List Item Layout", () => {
  let wrapper: any

  it("defines the component", () => {
    wrapper = renderer.create(
      <Provider store={mockStore()}>
        <TodoListItem {...todoItem} />
      </Provider>,
    )

    expect(wrapper).toBeDefined()
  })

  it("matches snapshot", () => {
    const output = wrapper.toJSON()
    expect(output).toMatchSnapshot()
  })
})
