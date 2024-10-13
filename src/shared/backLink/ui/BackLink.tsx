import { FC } from "react"
import { IBackLinkProps } from "../types/types"
import { useNavigate } from "react-router-dom"
import '../styles/index.scss'


const BackLink: FC<IBackLinkProps> = ({text, isSvg}) => {

    const navigate = useNavigate()

    const HandleBack = () => {
        navigate(-1)
    }
    
    return (
        <div className="back-link" onClick={HandleBack}>
            {isSvg && 
                <div className="back-link__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" viewBox="0 0 19 15" fill="none">
                        <path d="M1.2773 6.79289C0.886774 7.18342 0.886774 7.81658 1.2773 8.20711L7.64126 14.5711C8.03178 14.9616 8.66495 14.9616 9.05547 14.5711C9.446 14.1805 9.446 13.5474 9.05547 13.1569L3.39862 7.5L9.05547 1.84315C9.446 1.45262 9.446 0.819457 9.05547 0.428932C8.66495 0.0384078 8.03178 0.0384078 7.64126 0.428932L1.2773 6.79289ZM18.0156 6.5L1.98441 6.5V8.5L18.0156 8.5V6.5Z" fill="black"/>
                    </svg>
                </div>}
            <p className="back-link__text">{text}</p>
        </div>
    )
}


export default BackLink