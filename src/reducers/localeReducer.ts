import { ReducerDispatch } from "./rootReducer"
import { CHANGE_LOCALE } from "../actions/locale"

export interface LocaleReducerState {
  locale: string
}

const initialState: LocaleReducerState = {
  locale: navigator.language.split(/[-_]/)[0],
}

const LocaleReducer = (
  state = initialState,
  { type, payload }: ReducerDispatch,
) => {
  switch (type) {
    case CHANGE_LOCALE:
      return { locale: payload }
    default:
      return state
  }
}

export default LocaleReducer
