import { FC, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "src/app/store";

export const HomePage: FC = () => {

  const navigate = useNavigate();
  const isLogined = useAppSelector(state => state.user.isAuthorized)

  useEffect(() => {
    if (!isLogined) {
      navigate('auth')
    } else {
      navigate('calendar')
    }
  }, [isLogined])

  return (
    <>
    </>
  )
}