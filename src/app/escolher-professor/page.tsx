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

    // Filtro dos professores que atendem aos requisitos da busca

    useEffect(() => {
        if (nomeProfessor) {
            setProfessores(
                professores.filter((professor) =>
                    professor.nome.includes(nomeProfessor)
                )
            )
        } else if (departamento) {
            setProfessores(
                professores.filter((professor) =>
                    professor.departamento.includes(departamento)
                )
            )
            if (professores.length != 0)
                setProfessores(
                    professores.filter((professor) =>
                        professor.sigla_depto.includes(
                            departamento.toUpperCase()
                        )
                    )
                )
        } else if (disciplina) {
            setProfessores(
                professores.filter((professor) =>
                    professor.disciplina.includes(disciplina)
                )
            )
        } else if (areaInteresse) {
            setProfessores(
                professores.filter((professor) =>
                    professor.areasInteresse.includes(areaInteresse)
                )
            )
        } else {
            setProfessores(teachers)
        }
    }, [nomeProfessor, departamento, disciplina, areaInteresse, professores])

    return (
        <div className="p-24 flex flex-wrap gap-5 overflow-y-auto">
            {professores.map((professor, idx) => (
                <CardProfessor
                    key={idx}
                    name={professor.nome}
                    disciplines={professor.disciplina}
                    area_of_interest={professor.areasInteresse}
                    area_of_ocupation={[' ']}
                    image={'https://loremflickr.com/640/480'}
                />
            ))}
        </div>
    )
}
