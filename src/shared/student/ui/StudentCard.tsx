import { FC } from "react"
import { IStudentCard } from "../types/types"
import '../styles/index.scss'


export const StudentCard: FC<IStudentCard> = ({name, subjects, studentClass}) => {


    return (
        <div className="student-card">
            <div className="student-card__inner">
                <div className="student-card__img">

                </div>
                <div className="student-card__info">
                    <div className="student-card__info-name">
                        {name}
                    </div>
                    <div className="student-card__info-class">
                        {studentClass}
                    </div>
                    <div className="student-card__info-subjects">
                        <div className="student-card__info-lessons">Предметы:</div>
                        {subjects.map((item, index) => {
                            return (
                                <div className="student-card__info-subject" key={index}>{item}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default StudentCard