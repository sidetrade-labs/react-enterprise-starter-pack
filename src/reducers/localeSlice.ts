import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface LocaleState {
  locale: string
}

const initialState: LocaleState = {
  locale: navigator.language.split(/[-_]/)[0],
}

const localeSlice = createSlice({
  name: "locale",
  initialState,
  reducers: {
    changeLocale: (state: LocaleState, action: PayloadAction<string>) => {
      state.locale = action.payload
    },
  },
})

export default localeSlice
