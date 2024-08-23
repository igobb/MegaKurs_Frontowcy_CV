interface ExperienceInterface {
    id: number
    yearStart: number
    yearEnd: number | string
    description: string
}

export interface CVData {
    photo: string
    name: string
    lastName: string
    position: string
    experience: ExperienceInterface[]
    education: string[]
}