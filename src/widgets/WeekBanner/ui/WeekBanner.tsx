import { FC, useEffect, useState } from "react"
import { IWeekBanner } from "../types/types"
import '../styles/index.scss'

const WeekBanner: FC<IWeekBanner> = ({days, title}) => {

    const [currentDays, setCurrentDays] = useState<IWeekDayItem[]>([])

    interface IWeekDayItem {
        day: string
        isLessonDay: boolean
        title?: string
    }

    let weekDays: IWeekDayItem[] = [
        {
            day: 'Понедельник',
            isLessonDay: false,
            title: 'ПН'
        },
        {
            day: 'Вторник',
            isLessonDay: false,
            title: 'ВТ'
        },
        {
            day: 'Среда',
            isLessonDay: false,
            title: 'СР'
        },
        {
            day: 'Четверг',
            isLessonDay: false,
            title: 'ЧТ'
        },
        {
            day: 'Пятница',
            isLessonDay: false,
            title: 'ПТ'
        },
        {
            day: 'Суббота',
            isLessonDay: false,
            title: 'СБ'
        },
        {
            day: 'Воскресенье',
            isLessonDay: false,
            title: 'ВС'
        },
    ]

    useEffect(() => {
        let newArr = [...weekDays]
        newArr.forEach( item => {
            days?.forEach( day => {
                if (day === item.day){
                    item.isLessonDay = true
                }
            })
        })
        setCurrentDays(newArr)
    }, [days])

    return (
        <div className="week-banner">
            <p className="week-banner__title bold-text">
                {title}
            </p>
            <div className="week-banner__days">
                {currentDays.map((item, index) => {
                    return (
                        <div className="week-banner__days-item week-banner__day" key={index}>
                            <p className="week-banner__day-title">
                                {item?.title}
                            </p>
                            <div className={`week-banner__day-status ${item.isLessonDay ? 'active' : ''}`}>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default WeekBanner