import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "src/app/store";
import { IStudent } from "src/entities/student/types/types";
import '../styles/StudentProfile.scss'
import BackLink from "src/shared/backLink/ui/BackLink";
import { MainButton } from "src/shared/buttons/ui/Buttons";
import WeekBanner from "src/widgets/WeekBanner/ui/WeekBanner";
import { IWeekDay } from "src/widgets/WeekBanner/types/types";

export const StudentProfilePage = () => {
    const { studentId } = useParams(); 
    const [student, setStudent] = useState<IStudent>()
    const students = useAppSelector(state => state.user.students)

    const lessonsDays: IWeekDay[] = student?.lessons?.map(item => item.day as IWeekDay) || []

    useEffect(() => {
        const currentStudent = students.filter(item => item.id === Number(studentId))
        setStudent(currentStudent[0])
    }, [students])

    return (
        <div className="student-profile page-container">
            <div className="student-profile__inner container">
                <div className="student-profile__top">
                    <BackLink text="Назад" isSvg />
                    <button className="student-profile__delete red-text">
                        Удалить ученика
                    </button>
                </div>
                <div className="student-profile__info">
                    <p className="student-profile__info-title">Об ученике</p>
                    <div className="student-profile__info-row">
                        <div className="student-profile__info-img">

                        </div>
                        <div className="student-profile__info-description">
                            <div className="student-profile__info-name">{student?.name}</div>
                            <p className="student-profile__info-class">{student?.student_class}</p>
                            <div className="student-profile__info-subjects">
                                <p className="student-profile__info-heading">Предметы: </p>
                                {student?.subjects && student.subjects.map((item, index) => {
                                    return (
                                        <p key={index} className="student-profile__info-subject">{item}</p>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <p className="student-profile__info-price">
                        {`Стоимость занятия: ${student?.price}`}
                    </p>
                </div>
                <div className="student-profile__themes">
                    <MainButton text="Пройдены темы" type="button"/>
                </div>
                <div className="student-profile__calendar">
                    <WeekBanner title="Дни занятий" days={lessonsDays} />
                </div>
                <div className="student-profile__days">
                    {student?.lessons.map((item, index) => {
                        return (
                            <div className="student-profile__day" key={index}>
                                <div className="student-profile__day-day">{item.day}</div>
                                <div className="student-profile__day-row">
                                    <div className="student-profile__day-lessons">Занятия:</div>
                                    <div className="student-profile__day-time">{item.time}</div>
                                    <div className="student-profile__day-subject">{item.subject}</div>
                                </div>

                            </div>
                        )
                    })}
                </div>
                <div className="student-profile__add"></div>
            </div>
        </div>
    )
}

export default StudentProfilePage