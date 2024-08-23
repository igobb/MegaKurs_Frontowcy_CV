import { CVData } from "../../types/CVTypes"

export const CVObject: CVData = {
    photo: 'https://placehold.co/400x400?text=TG',
    name: 'Tomasz',
    lastName: 'Gołąb',
    position: 'Regular Frontend Developer',
    experience: [{
        id:1,
        yearStart: 2020,
        yearEnd: 2022,
        description: 'IT specialist'
    }, {
        id: 2,
        yearStart: 2022,
        yearEnd: 'current',
        description: 'Better IT specialist'
    }],
    education: ['Lorem ipsum', 'Dolor sit amet', 'Lorem ipsum v2']
}