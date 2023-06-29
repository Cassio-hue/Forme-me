'use client'

import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

import { CardProfessor } from '../components/CardProfessor'
import { CardTrabalho } from '../components/CardTrabalho'
import { teachers } from '../components/data'

export default function Page() {
    const searchParams = useSearchParams()
    const nomeProfessor = searchParams.get('nomeProfessor')
    const departamento = searchParams.get('departamento')
    const disciplina = searchParams.get('disciplina')
    const areaInteresse = searchParams.get('areaInteresse')

    // Filtro dos professores que atendem aos requisitos da busca

    console.log(nomeProfessor)
    console.log(departamento)
    console.log(disciplina)
    console.log(areaInteresse)

    console.log(searchParams.get('nomeProfessor'))

    console.log(teachers)

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
