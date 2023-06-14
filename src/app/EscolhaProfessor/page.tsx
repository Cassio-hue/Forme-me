'use client'

import { CardProfessor } from '../components/CardProfessor'

export default function Page() {
    return (
        <CardProfessor
            name={'Maycon'}
            disciplines={['Droga um', 'droga dois']}
            area_of_interest={['seta doido', 'seta dois']}
            area_of_ocupation={['beterraba um', 'brocolis dois']}
            image={'https://loremflickr.com/640/480'}
        />
    )
}
