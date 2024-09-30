import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { IStudent } from "../types/types"

interface IStudentsInitialProps {
  students: IStudent[]
  status: 'idle' | 'pending' | 'completed' | 'error'
}

const initialStore: IStudentsInitialProps = {
  students: [],
  status: 'idle'
}

export const fetchStudentsData = createAsyncThunk(
  'students/fetchStudentsData',
  async () => {
    const response = await axios.get("http://localhost:3001/user")
    return response.data.students
  },
)


export const StudentsSlice = createSlice({
  name: 'students',
  initialState: initialStore,
  reducers: {
    addStudent: (state, action) => {
      state.students = [...state.students, action.payload]
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchStudentsData.pending, (state, action) => {
      state.status = 'pending'
    })
    builder.addCase(fetchStudentsData.fulfilled, (state, action) => {
      console.log(action.payload)
      state.status = 'completed'
      state.students = action.payload
    })
  },
})


// Action creators are generated for each case reducer function
export const {
    addStudent 
  } = StudentsSlice.actions



export default StudentsSlice.reducer