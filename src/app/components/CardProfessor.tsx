import Image from 'next/image'

import { Photo } from './Photo'

type CardProfessorProps = {
    name: string
    disciplines: string[]
    area_of_interest: string[]
    area_of_ocupation: string[]
    image: string
}

export function CardProfessor({
    name,
    disciplines,
    area_of_interest,
    area_of_ocupation,
    image,
}: CardProfessorProps) {
    return (
        <div>
            <Photo
                alt="Foto do Professor"
                height={160}
                width={140}
                src={image}
            />
            {disciplines.map((discipline, index) => (
                <p key={index}>{discipline}</p>
            ))}
        </div>
    )
}
