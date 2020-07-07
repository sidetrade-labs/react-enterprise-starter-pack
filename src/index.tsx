import React, { Suspense, lazy, useContext } from "react"
import ReactDOM from "react-dom"
import "./tailwind-generated.css"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { I18nProvider } from "@lingui/react"
import { Spin } from "antd"
import RootStore, { stores } from "./stores/RootStore"
import "mobx-react/batchingForReactDom"

// Lazy loading main pages
const Home = lazy(() => import("./pages/Home/index"))

const I18nWrapper: React.FC = () => {
  const { localeStore } = useContext(RootStore)
  const catalogs = {
    [localeStore.locale]: require(`./locales/${localeStore.locale}/messages.js`)
      .default,
  }

  return (
    <I18nProvider language={localeStore.locale} catalogs={catalogs}>
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
  <RootStore.Provider value={stores}>
    <I18nWrapper />
  </RootStore.Provider>,
  document.getElementById("root"),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
