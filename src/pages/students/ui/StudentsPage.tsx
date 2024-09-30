import { HeadingThirdLevel } from "src/shared/headings/ui/Headings"
import '../styles/StudentsPage.scss'

const StudentsPage = () => {
  return (
    <div className="students-page page-container">
      <div className="students-page__inner container">
        <HeadingThirdLevel text="Мои ученики:"/>
      </div>
    </div>
  )
}

export default StudentsPage