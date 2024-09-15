export interface IUserSliceInitialState {
  name: string
  email: string
  photo: string
  isAuthorized: boolean
  authStatus: 'none' | 'pending' | 'completed'
}