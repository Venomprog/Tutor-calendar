import { FC, useEffect, useState } from "react"
import { IWeekBanner } from "../types/types"
import '../styles/index.scss'

const WeekBanner: FC<IWeekBanner> = ({days, title}) => {

    const [currentDays, setCurrentDays] = useState<IWeekDayItem[]>([])

    interface IWeekDayItem {
        day: string
        isLessonDay: boolean
    }

    let weekDays: IWeekDayItem[] = [
        {
            day: 'Понедельник',
            isLessonDay: false
        },
        {
            day: 'Вторник',
            isLessonDay: false
        },
        {
            day: 'Среда',
            isLessonDay: false
        },
        {
            day: 'Четверг',
            isLessonDay: false
        },
        {
            day: 'Пятница',
            isLessonDay: false
        },
        {
            day: 'Суббота',
            isLessonDay: false
        },
        {
            day: 'Воскресенье',
            isLessonDay: false
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
                                {item.day.slice(0, 2).toUpperCase()}
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