'use client'

import FormemeLogo from '@/../public/login_logo.svg'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import * as React from 'react'

import { teachers } from '../../utils/data'
import { FormButton } from '../components/Button'
import { Input } from '../components/Input'
import InputAutocomplete from '../components/InputAutocomplete'
import { ModalDialog } from '../components/Modal'

const departamentos = [
    { label: 'Ciência da Computação', id: 1 },
    { label: 'Matemática', id: 2 },
]

const disciplinas: { label: string; id: number }[] = teachers.flatMap(
    (teacher, index) =>
        teacher.disciplina.map((disciplina, id) => ({
            label: disciplina,
            id: id + 1 + index * teacher.disciplina.length,
        }))
)

const disciplinasUnicas = disciplinas.filter(
    (disciplina, index) =>
        disciplinas.findIndex((d) => d.label === disciplina.label) === index
)

const areasInteresse: string[] = teachers.flatMap(
    (teacher) => teacher.areasInteresse
)

const areasInteresseUnicas: { label: string; id: number }[] = []
const areasProcessadas: { [area: string]: number } = {}

areasInteresse.forEach((area) => {
    if (!areasProcessadas.hasOwnProperty(area)) {
        const id = Object.keys(areasProcessadas).length + 1
        areasProcessadas[area] = id
        areasInteresseUnicas.push({ label: area, id })
    }
})

function ModalProcurarProfessor({
    open,
    onClose,
}: {
    open: boolean
    onClose: Function
}) {
    const [nomeProfessor, setNomeProfessor] = useState('')
    const [departamento, setDepartamento] = React.useState<string | undefined>(
        ''
    )
    const [disciplina, setDisciplina] = React.useState<string | undefined>('')
    const [areaInteresse, setAreaInteresse] = React.useState<
        string | undefined
    >('')

    return (
        <div className="bg-[#D6D6D6]">
            <div className="flex justify-between items-center p-5">
                <span className="pr-5">Professor</span>
                <Input
                    placeholder="Digite o nome do professor"
                    valueChange={setNomeProfessor}
                />
            </div>
            <div className="flex justify-between items-center p-5">
                <span className="pr-5">Departamento</span>
                <InputAutocomplete
                    placeholder="Selecione departamento"
                    options={departamentos}
                    valueChange={setDepartamento}
                />
            </div>
            <div className="flex justify-between items-center p-5">
                <span className="pr-5">Disciplina</span>
                <InputAutocomplete
                    placeholder="Selecione disciplina"
                    options={disciplinasUnicas}
                    valueChange={setDisciplina}
                />
            </div>
            <div className="flex justify-between items-center p-5">
                <span className="pr-5">Área de interesse</span>
                <InputAutocomplete
                    placeholder="Selecione área de interesse"
                    options={areasInteresseUnicas}
                    valueChange={setAreaInteresse}
                />
            </div>
            <Link
                href={{
                    pathname: '/escolher-professor',
                    query: {
                        nomeProfessor: nomeProfessor,
                        departamento: departamento,
                        disciplina: disciplina,
                        areaInteresse: areaInteresse,
                    },
                }}
            >
                <FormButton
                    disabled={
                        !(
                            (nomeProfessor ?? '') !== '' ||
                            (disciplina ?? '') !== '' ||
                            (departamento ?? '') !== '' ||
                            (areaInteresse ?? '') !== ''
                        )
                    }
                >
                    Procurar
                </FormButton>
            </Link>
        </div>
    )
}

export default function BuscarProfessor() {
    const [nomeProfessor, setNomeProfessor] = useState('')
    const [open, setOpen] = useState(false)
    function handleOpen() {
        setOpen(true)
    }
    function handleClose() {
        setOpen(false)
    }
    return (
        <div className="flex justify-center h-full w-full">
            <div className="flex h-full flex-col">
                <Image
                    className="p-8"
                    src={FormemeLogo}
                    alt="logo"
                    width={300}
                />
                <div className="flex flex-col mt-20">
                    <h1 className="text-2xl mb-4">Buscando Professor?...</h1>
                    <span
                        className={clsx(
                            'bg-[#D9D9D9] w-full p-4 shadow-lg shadow-slate-600 rounded-md cursor-pointer'
                        )}
                        onClick={() => {
                            handleOpen()
                        }}
                    >
                        Selecione as opções
                    </span>
                    <ModalDialog open={open} handleClose={handleClose}>
                        <ModalProcurarProfessor
                            open={false}
                            onClose={handleClose}
                        />
                    </ModalDialog>
                </div>
            </div>
        </div>
    )
}
