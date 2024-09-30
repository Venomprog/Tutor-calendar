import { ILesson } from "src/shared/lesson/types/types"
import { TSubject } from "src/shared/subject/types/types"

export interface IStudent {
  name: string
  id: number
  class: 'string'
  price: string
  subjects: TSubject[]
  lessons: ILesson[]
}