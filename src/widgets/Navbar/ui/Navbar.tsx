import { useNavigate } from "react-router-dom";
import '../styles/Navbar.scss'


export const Navbar = () => {
    const navigate = useNavigate();

    const handleNavigate = (url: string) => {
        navigate(url)
    }

    return (
        <div className="navbar">
            <div className="navbar-inner">
                <div className="navbar-items">
                    <div className="navbar__item" onClick={() => handleNavigate('/students')}>
                        <div className="navbar__item-logo">
                        <svg xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect width="24" height="24" fill="url(#pattern0_1_4571)"/>
                            <defs>
                                <pattern id="pattern0_1_4571" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_1_4571" transform="scale(0.0416667)"/>
                                </pattern>
                                <image id="image0_1_4571" width="24" height="24" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABW0lEQVR4nM2VQStEURiGHzYyKMoOC6VmP7bWbPADEHsbGyHNDsVe5C/YKMlGUZQhNVnKQlN2hgUbC3T05Rvdznx3nHu74q237pzzfs97F+fMhX+gdmAWKAGv6pKuyV5q9QPrwBPgYvwM7AD5JOAhYBd4awD2/QEcAWNAkwVtAaaB6wRQF+MbYA7I1eALwEMGYOdZmPNScPsLcKd+l4I2YBGoZgiuRp6/1QEUM4AXlVVXIBrMoKCgLLNgO4OCzUYF95GNA6An4N70AoeRuYqunwGn0WDeexMZDFWfNztghWa8UFK5iKeswIYX6kwA7/Jm16zQfsxpCFHBm92zQmUvtByE/pJ/f66sUMULye/WAHjOmL2zgi/Gmd4KKLDujrDqdBJzcVaAZiMva6sxM8cBL8akfkhk4BwY1v8Y8QhwoXuSmSClxn/4ZD4Co2nhNXXribrUMrE8L+ne3+oTR/INlnxf0jUAAAAASUVORK5CYII="/>
                            </defs>
                        </svg>
                        </div>
                        <p className="navbar__item-title">Ученики</p>
                    </div>
                    <div className="navbar__item" onClick={() => handleNavigate('/calendar')}>
                        <div className="navbar__item-logo">
                        <svg xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <rect width="25" height="25" fill="url(#pattern0_1_4573)"/>
                            <defs>
                                <pattern id="pattern0_1_4573" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <   use xlinkHref="#image0_1_4573" transform="scale(0.04)"/>
                                </pattern>
                                <image id="image0_1_4573" width="25" height="25" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAm0lEQVR4nO2WwQoDIQxE56+99ug/9VaX/a1ZdoklFRWtsfWwAw+JiQ4GBYG8NgAEEAr50fpLTEaT+l0KNHFRK8jMnfu+xUknYc0kyNyr0SQU6qsmVmIauAkwNfET4F/apTXSomYT3b5N8KoFtVyXSdRD6M2tY8IvWe8kPzFxwlNw6hXXcl0m9xVe6wpbicXAUNRB7iNhwcdHYqoO9HbaxLoYF0QAAAAASUVORK5CYII="/>
                            </defs>
                        </svg>
                        </div>
                        <p className="navbar__item-title">Расписание</p>
                    </div>
                </div>
            </div>
        </div>
    )
}