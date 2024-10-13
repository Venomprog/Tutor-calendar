import { HeadingThirdLevel } from "src/shared/headings/ui/Headings"
import '../styles/StudentsPage.scss'
import { useAppDispatch, useAppSelector } from "src/app/store"
import { Link } from "react-router-dom"
import StudentCard from "src/shared/student/ui/StudentCard"
import { useEffect } from "react"
import { fetchStudentsData } from "src/entities/student/model/studentsSlice"

const StudentsPage = () => {

  const students = useAppSelector(state => state.students.students)
  const dispatch = useAppDispatch()


  useEffect(() => {
    dispatch(fetchStudentsData())
  }, [])

  return (
    <div className="students-page page-container">
      <div className="students-page__inner container">
        <HeadingThirdLevel text="Мои ученики:"/>
        <div className="students-page__list">
          {students && students.map(item => {
            return (
              <Link to={`/students/${item.id}`} key={item.id}>
                <StudentCard
                  id={item.id}
                  name={item.name}
                  studentClass={item.student_class}
                  subjects={item.subjects}
                />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default StudentsPage