import React, { Suspense, lazy } from "react"
import ReactDOM from "react-dom"
import "./tailwind-generated.css"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Provider, useSelector } from "react-redux"
import { I18nProvider } from "@lingui/react"
import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import rootReducer from "./reducers/rootReducer"
import rootSaga from "./sagas/rootSaga"
import { LocaleReducerState } from "./reducers/localeReducer"
import { Spin } from "antd"

// Lazy loading main pages
const Home = lazy(() => import("./pages/Home/index"))

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

const I18nWrapper: React.FC = () => {
  const { locale } = useSelector<any, LocaleReducerState>(
    store => store.localeReducer,
  )
  const catalogs = {
    [locale]: require(`./locales/${locale}/messages.js`).default,
  }

  return (
    <I18nProvider language={locale} catalogs={catalogs}>
      <App />
    </I18nProvider>
  )
}

const App: React.FC = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="text-center pt-12">
            <Spin></Spin>
          </div>
        }
      >
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Suspense>
    </Router>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <I18nWrapper />
  </Provider>,
  document.getElementById("root"),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
