import { FC } from "react"
import { useAppSelector } from "src/app/store"
import UserLogo from "src/shared/user/ui/userLogo"
import '../styles/index.scss'

const UserHeader: FC = () => {

  const userEmail = useAppSelector(state => state.user.email)

  return (
    <div className="user-header">
      <div className="user-header__logo">
        <UserLogo/>
      </div>
      <div className="user-header__email">
        {userEmail}
      </div>
    </div>
  )
}

export default UserHeader