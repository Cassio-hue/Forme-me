'use client'

import FormemeLogo from '@/../public/login_logo.svg'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

import { FormButton } from '../components/Button'
import { Input } from '../components/Input'
import { ModalDialog } from '../components/Modal'

function ModalProcurarProfessor() {
    const [nomeProfessor, setNomeProfessor] = useState('')
    return (
        <div className="">
            <div className="flex justify-between items-center p-5">
                <span className="pr-5">Professor</span>
                <Input
                    placeholder="Digite o nome do professor"
                    valueChange={setNomeProfessor}
                />
            </div>
            <div className="flex justify-between items-center p-5">
                <span className="pr-5">Departamento</span>
                <Input
                    placeholder="Digite o nome do professor"
                    valueChange={setNomeProfessor}
                />
            </div>
            <div className="flex justify-between items-center p-5">
                <span className="pr-5">Disciplina</span>
                <Input
                    placeholder="Digite o nome do professor"
                    valueChange={setNomeProfessor}
                />
            </div>
            <div className="flex justify-between items-center p-5">
                <span className="pr-5">Área de interesse</span>
                <Input
                    placeholder="Digite o nome do professor"
                    valueChange={setNomeProfessor}
                />
            </div>

            <FormButton>Procurar</FormButton>
        </div>
    )
}

export default function BuscarProfessor() {
    const [nomeProfessor, setNomeProfessor] = useState('')
    const [open, setOpen] = useState(false)
    console.log(open)
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
                    <h1 className="text-2xl mb-4">Buscando professor?...</h1>
                    <span
                        className={clsx(
                            'bg-[#D9D9D9] w-full p-4 shadow-lg shadow-slate-600 rounded-md cursor-pointer'
                        )}
                        onClick={() => {
                            handleOpen()
                        }}
                    >
                        Selecione opções
                    </span>
                    <ModalDialog open={open} handleClose={handleClose}>
                        <ModalProcurarProfessor />
                    </ModalDialog>
                </div>
            </div>
        </div>
    )
}
