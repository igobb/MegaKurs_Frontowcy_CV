import { CVObject } from "./fakeData"

export const MyCV = () => {
    const {photo, name, lastName, experience, position, education} = CVObject

    return (
        <main>
            <header>
                <h1>CV for MegaK Frontowcy course - {name} {lastName}</h1>
            </header>

            <aside>
                <h2>Personal data:</h2>

                <img src={photo} alt={`${name} ${lastName} CV photo`} />

                <p>{name} {lastName}</p>

                <p className="small">Position: {position}</p>
            </aside>

            <section>
                <h2>Experience:</h2>

                <ul>
                    {experience.map(item => {
                        const {description, yearStart, yearEnd, id} = item

                        return (
                            <li key={id}>
                                <p className="big">
                                    {yearStart} - {yearEnd === 'current' ? <span className="grey">current ({new Date().getFullYear()})</span> : yearEnd}
                                </p>

                                <p>
                                    {description}
                                </p>
                            </li>
                        )
                    })}
                </ul>

                <h2>Education:</h2>

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