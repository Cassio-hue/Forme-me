'use client'

import { useState } from 'react'

import { FormButton } from '../components/Button'
import { Input } from '../components/Input'
import { ReportInput } from '../components/ReportInput'

export default function Suporte() {
    const [nomeProfessor, setNomeProfessor] = useState('')

    return (
        <div className="flex flex-col h-screen px-52 pt-20">
            <h1 className="text-4xl flex justify-center mb-12">
                Falar com os Desenvolvedores
            </h1>
            <Input
                placeholder="Título do problema"
                valueChange={setNomeProfessor}
            />
            <div className="mt-8">
                <ReportInput
                    label="Mensagem"
                    placeholder="Relate sobre o seu problema..."
                    valueChange={setNomeProfessor}
                />
            </div>
            <div className="flex self-end w-40 mt-5">
                <FormButton>Enviar</FormButton>
            </div>
        </div>
    )
}
