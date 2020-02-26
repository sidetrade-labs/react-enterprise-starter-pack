import React from "react"
import { Trans, Plural } from "@lingui/macro"
import { useSelector, useDispatch } from "react-redux"
import { fetchTasks } from "../../reducers/tasksSlice"
import { Button, Skeleton, Spin } from "antd"
import styled from "styled-components"
import { AppDispatch } from "../../store"
import { AppState } from "../../reducers/rootReducer"

// Overriding ant ui button style
const StyledButton = styled(Button)`
  border-radius: 10px;
`

const Home: React.FC = () => {
  const tasks = useSelector((state: AppState) => state.tasks.tasks)

  const dispatch = useDispatch<AppDispatch>()

  if (!tasks) {
    // Requesting an HTTP call just for the sake of the demo
    dispatch(fetchTasks())
    return (
      <div className="text-center max-w-md m-auto pt-12">
        <Spin tip="Loading..."></Spin>
        <div className="max-w-sm m-auto mt-2">
          <Skeleton active paragraph={{ rows: 2 }} title={false} />
        </div>
      </div>
    )
  }

  return (
    <div className="px-8 pt-12 max-w-md m-auto text-center text-blue-300 border-b border-blue-300">
      <Trans>Hello world</Trans>
      <br />
      <Plural
        value={tasks.length}
        _0="You don't have any task to do"
        one="You successfully fetched # task"
        other="You successfully fetched # tasks"
      />
      <div className="mt-2 mb-5">
        <StyledButton type="primary" size="small">
          <Trans>I'm a Button</Trans>
        </StyledButton>
      </div>
    </div>
  )
}

export default Home
