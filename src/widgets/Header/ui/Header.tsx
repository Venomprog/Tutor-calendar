import { useAppSelector } from 'src/app/store'
import '../styles/styles.scss'
import UserHeader from 'src/entities/user/ui/userHeader'

export default function Header() {

  const isUserAuthorized = useAppSelector(state => state.user.isAuthorized)

  return (
    <div className="header">
      <div className="header-user">
        <UserHeader/>
        {isUserAuthorized && 
          <div className='header-user__logout'>
            Выйти
          </div>
        }
      </div>
    </div>
  )
}
