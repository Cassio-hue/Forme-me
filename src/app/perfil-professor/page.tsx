'use client'

import { useState } from 'react'

import { Photo } from '../components/Photo'

export default function BuscarProfessor() {
    const [nomeProfessor, setNomeProfessor] = useState('')
    return (
        <div className="flex flex-col h-full w-full items-center">
            <div className="my-24">
                <Photo
                    alt="Foto do Professor"
                    height={200}
                    width={200}
                    src={
                        'https://cic.unb.br/images/uploads/2016/09/photo_melo-150x150.jpg'
                    }
                />
            </div>
            <p className="text-5xl"> Nome do Professor</p>

            <div className="flex">
                    <div className= "mr-2"><p>aaaa</p></div>
                    <div><p>bbbbbbbbbb</p></div>
            </div>
        </div>
    )

}
