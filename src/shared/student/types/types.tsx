export interface IStudentLesson {
  day: string
  time: string
  subject: string
}

export interface IStudent {
  name: string
  studentClass: string
  price?: string
  subjects: string[]
  lessons?: IStudentLesson[]
}