import { ILesson } from "src/shared/lesson/types/types"

export interface IWeekDay  {
    day?: Pick<ILesson, "day">
}

export interface IWeekBanner {
    days?: IWeekDay[]
    title: string
}

