import React from "react"
import { render } from "@testing-library/react"
import Home from "."
import RootStore, { stores } from "../../stores/RootStore"

describe("Home component", () => {
  test("renders hello world", () => {
    // mocking store for component
    const initialState: any = {
      ...stores,
      tasksStore: { tasks: [], total: 0, fetchTasks: () => [] },
    }

    const { getByText } = render(
      <RootStore.Provider value={initialState}>
        <Home />
      </RootStore.Provider>,
    )

    const linkElement = getByText(/hello world/i)
    expect(linkElement).toBeInTheDocument()
  })
})
