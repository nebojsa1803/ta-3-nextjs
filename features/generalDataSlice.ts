import { getDataFromLocalStorage } from '@/utils/functions'
import { GeneralDataType } from '@/utils/types'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { format } from 'date-fns'

const initialState = {
  generalData: getDataFromLocalStorage('generalData'),
}

export const generalDataSlice = createSlice({
  name: 'generalData',
  initialState,
  reducers: {
    addGeneralData: (state, { payload }) => {
      state.generalData = payload
    },
  },
})

export const { addGeneralData } = generalDataSlice.actions

export default generalDataSlice.reducer
