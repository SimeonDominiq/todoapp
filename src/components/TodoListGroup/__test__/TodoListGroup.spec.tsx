import renderer from "react-test-renderer"
import { Provider } from "react-redux"
import configureStore from "redux-mock-store"
import TodoListGroup from "../TodoListGroup"

const props = {
  groupId: 1,
  groupTitle: "Foundation",
  todoItems: [
    {
      id: 11,
      title: "Setup virtual office",
      isCompleted: false,
    },
  ],
}

const mockStore = configureStore()

describe("App: Components: Todo List Group Layout", () => {
  let wrapper: any

  it("defines the component", () => {
    wrapper = renderer.create(
      <Provider store={mockStore()}>
        <TodoListGroup todoGroup={props} />
      </Provider>,
    )

    expect(wrapper).toBeDefined()
  })

  it("matches snapshot", () => {
    const output = wrapper.toJSON()
    expect(output).toMatchSnapshot()
  })
})
