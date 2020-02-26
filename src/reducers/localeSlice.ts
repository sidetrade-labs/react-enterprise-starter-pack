import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: string = navigator.language.split(/[-_]/)[0]

const localeSlice = createSlice({
  name: "locale",
  initialState,
  reducers: {
    changeLocale: (state, action: PayloadAction<string>) => {
      state = action.payload
    },
  },
})

export default localeSlice
