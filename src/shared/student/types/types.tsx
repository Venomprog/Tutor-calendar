export interface IStudentLesson {
  day: string
  time: string
  subject: string
}

export interface IStudent {
  name: string
  class: string
  price: string
  subjects: string[]
  lessons: IStudentLesson[]
}