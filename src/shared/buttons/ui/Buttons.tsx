import {IButton } from "../types/types"
import '../styles/index.scss'

const MainButton = ({text, type} : IButton) => {
  return (
    <button type={type} className="main-button">{text}</button>
  )
}

export {MainButton}