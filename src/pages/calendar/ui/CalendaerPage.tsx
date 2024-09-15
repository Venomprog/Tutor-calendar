import { FC, useEffect } from "react"

export const CalendaerPage: FC = () => {

  useEffect(() => {
    console.log('render')
  }, [])

  return (
    <div>CalendaerPage</div>
  )
}
