'use client'

import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { teachers } from '../../utils/data'
import { CardProfessor } from '../components/CardProfessor'

export default function Page() {
    const [professores, setProfessores] = useState(teachers)

    const searchParams = useSearchParams()
    const nomeProfessor = searchParams.get('nomeProfessor')
    const departamento = searchParams.get('departamento')
    const disciplina = searchParams.get('disciplina')
    const areaInteresse = searchParams.get('areaInteresse')

    useEffect(() => {
        let filteredProfessores = teachers

        if (nomeProfessor)
            filteredProfessores = filteredProfessores.filter((professor) =>
                professor.nome
                    .toLowerCase()
                    .includes(nomeProfessor.toLowerCase())
            )
        if (departamento)
            filteredProfessores = filteredProfessores.filter((professor) =>
                professor.departamento.includes(departamento)
            )
        if (disciplina)
            filteredProfessores = filteredProfessores.filter((professor) =>
                professor.disciplina.includes(disciplina)
            )
        if (areaInteresse)
            filteredProfessores = filteredProfessores.filter((professor) =>
                professor.areasInteresse.includes(areaInteresse)
            )

        setProfessores(filteredProfessores)
    }, [nomeProfessor, departamento, disciplina, areaInteresse])
    return (
        <div className="p-24 flex flex-wrap gap-5 overflow-y-auto">
            {professores.map((professor, idx) => (
                <CardProfessor
                    key={idx}
                    name={professor.nome}
                    disciplines={professor.disciplina}
                    area_of_interest={professor.areasInteresse}
                    area_of_ocupation={[' ']}
                    image={professor.foto}
                    curriculumLink={professor.link_lattes}
                />
            ))}
        </div>
    )
}
