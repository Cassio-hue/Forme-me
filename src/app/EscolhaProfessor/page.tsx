'use client'

import { CardProfessor } from '../components/CardProfessor'
import { CardTrabalho } from '../components/CardTrabalho'

export default function Page() {
    return (
        <div className="flex-grow overflow-y-auto">
            <CardTrabalho
                names={['Maycon']}
                orientadores={['Droga um', 'droga dois']}
                coorientadores={['seta doido', 'seta dois']}
                related_fields={['beterraba um', 'brocolis dois']}
                title={'Como namorar o Maycon'}
            />
            <CardProfessor
                name={'Maycon'}
                disciplines={['Droga um', 'droga dois']}
                area_of_interest={['seta doido', 'seta dois']}
                area_of_ocupation={['beterraba um', 'brocolis dois']}
                image={'https://loremflickr.com/640/480'}
            />
        </div>
    )
}
