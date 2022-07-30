import Todo from "../pages/Todo/Todo"

describe("App: Components: Todo Layout", () => {
  it("matches snapshot", () => {
    expect(Todo).toMatchSnapshot()
  })
})
