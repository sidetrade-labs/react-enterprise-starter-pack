import React from "react"
import { render } from "@testing-library/react"
import Home from "."
import { Provider } from "react-redux"
import configureStore from "redux-mock-store"
import { AppState } from "../../reducers/rootReducer"

describe("Home component", () => {
  test("renders hello world", () => {
    // mocking store for component
    const initialState: Partial<AppState> = { tasks: { tasks: [] } }
    const mockStore = configureStore()
    const store = mockStore(initialState)

    const { getByText } = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    )
    const linkElement = getByText(/hello world/i)
    expect(linkElement).toBeInTheDocument()
  })
})
