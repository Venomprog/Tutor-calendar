import { IStudent } from "src/entities/student/types/types"

export interface IUserSliceInitialState {
  name: string
  email: string
  photo: string
  isAuthorized: boolean
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
  students: IStudent[]
}