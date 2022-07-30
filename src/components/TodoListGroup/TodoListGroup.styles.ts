import styled from "styled-components"

const TodoListGroupWrapper = styled.div`
  margin-bottom: 20px;

  .group-header {
    display: flex;
    gap: 8px;
    align-items: center;

    .group-sn {
      width: 25px;
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #000;
      color: #fff;
      border-radius: 50%;
    }

    .group-title {
      font-weight: 600;
      font-size: 1.4rem;
      width: 80%;
    }

    svg {
      height: 25px;
    }
  }
`

export default TodoListGroupWrapper
