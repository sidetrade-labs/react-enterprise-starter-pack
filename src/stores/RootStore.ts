import React from "react"
import { configure } from "mobx"
import LocaleStore from "./LocaleStore"
import TasksStore from "./TasksStore"

configure({ enforceActions: "observed" })

export const stores = {
  localeStore: new LocaleStore(),
  tasksStore: new TasksStore(),
}

const RootStore = React.createContext(stores)

export default RootStore
