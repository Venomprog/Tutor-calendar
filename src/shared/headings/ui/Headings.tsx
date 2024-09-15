import { Heading } from "../types/types"
import '../styles/index.scss'

const HeadingFirstLevel = ({text} : Heading) => {
  return (
    <h1 className="main-heading">
      {text}
    </h1>
  )
}
const HeadingSecondLevel = ({text} : Heading) => {
  return (
    <h2 className="main-heading">
      {text}
    </h2>
  )
}
const HeadingThirdLevel = ({text} : Heading) => {
  return (
    <h3 className="main-heading">
      {text}
    </h3>
  )
}


export {HeadingFirstLevel, HeadingSecondLevel, HeadingThirdLevel}