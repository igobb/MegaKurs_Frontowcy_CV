import { CVObject } from "./fakeData"
import './MyCV.scss'

export const MyCV = () => {
    const {photo, name, lastName, experience, position, education} = CVObject

    return (
        <main className="wrapper">
            <div className="half-left">  
                <header className="wrapper__header">
                    <h1>CV for MegaK Frontowcy course - {name} {lastName}</h1>
                </header>

                <aside >
                    <img className="wrapper__img" src={photo} alt={`${name} ${lastName} CV photo`} />
                </aside>
            </div>
            
            <section className="half-right">
                <h2>Personal data:</h2>

                <p>{name} {lastName}</p>

                <p className="small">Position: {position}</p>

                <h3>Experience:</h3>

                <ul>
                    {experience.map(item => {
                        const {description, yearStart, yearEnd, id} = item

                        return (
                            <li key={id}>
                                <p className="big">
                                    {yearStart} - {yearEnd === 'current' ? <span className="gray">current ({new Date().getFullYear()})</span> : yearEnd}
                                </p>

                                <p>
                                    {description}
                                </p>
                            </li>
                        )
                    })}
                </ul>

                <h3>Education:</h3>

                <ul>
                    {education.map((item, index) => {
                       return (
                            <li key={index}>
                                {item}
                            </li>
                       )
                    })}
                </ul>
            </section>
            
            
        </main>
    )
}