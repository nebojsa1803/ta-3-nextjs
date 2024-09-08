import { configureStore } from '@reduxjs/toolkit'
import generalDataReducer from '@/features/generalDataSlice'

export const store = configureStore({
  reducer: {
    generalData: generalDataReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
