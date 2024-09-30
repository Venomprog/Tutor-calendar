import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IUserSliceInitialState } from '../types/types'
import axios from 'axios'


export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async () => {
    const response = await axios.get("http://localhost:3001/user")
    return response.data
  },
)

const initialStore: IUserSliceInitialState = {
  name: 'Alina',
  email: 'username@mail.com',
  photo: '',
  isAuthorized: false,
  loading: 'idle',
  students: []
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialStore,
  reducers: {
    userAuthStart: state => {
      state.loading = 'pending'
    },
    userAuthCompleted: state => {
      state.loading = 'succeeded'
      state.isAuthorized = true
    },

  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserData.pending, (state, action) => {
      state.loading = 'pending'
    })
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      console.log(action.payload)
      state.loading = 'succeeded'
      state.name = action.payload.name
      state.email = action.payload.email
      state.students = action.payload.students
    })
  },
})

// Action creators are generated for each case reducer function
export const { 
  userAuthStart,
  userAuthCompleted,
  } = userSlice.actions



export default userSlice.reducer