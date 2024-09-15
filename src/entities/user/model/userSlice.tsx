import { createSlice } from '@reduxjs/toolkit'
import { IUserSliceInitialState } from '../types/types'


const initialStore: IUserSliceInitialState = {
  name: 'Alina',
  email: 'username@mail.com',
  photo: '',
  isAuthorized: false,
  authStatus: 'none'
}

export const counterSlice = createSlice({
  name: 'user',
  initialState: initialStore,
  reducers: {
    userAuthStart: state => {
      state.authStatus = 'pending'
    },
    userAuthCompleted: state => {
      state.authStatus = 'completed'
      state.isAuthorized = true
    },

  }
})

// Action creators are generated for each case reducer function
export const { 
  userAuthStart,
  userAuthCompleted,
  } = counterSlice.actions



export default counterSlice.reducer