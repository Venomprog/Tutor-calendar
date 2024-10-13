export interface IStudentLesson {
  day: string
  time: string
  subject: string
}

export interface IStudentCard {
  name: string
  studentClass: string
  id: number
  price?: string
  subjects: string[]
  lessons?: IStudentLesson[]
}