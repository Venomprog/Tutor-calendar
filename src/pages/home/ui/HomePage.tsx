import { FC, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useAppSelector } from "src/app/store";

export const HomePage: FC = () => {

  const navigate = useNavigate();
  const isLogined = useAppSelector(state => state.user.isAuthorized)

  useEffect(() => {
    if (!isLogined) {
      navigate('auth')
    } else {
      navigate('students')
    }
  }, [isLogined])

  return (
    <>
      <Outlet />
    </>
  )
}