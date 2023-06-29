import { Box } from '@mui/material'

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
            <Box
                className="pt-2"
                sx={{
                    width: 270,
                    height: 380,
                    borderRadius: 8,
                    backgroundColor: '#F1F0F0',
                    '&:hover': {
                        backgroundColor: '#B6B6B6',
                        opacity: [0.9, 0.8, 0.7],
                        borderRadius: 8,
                    },
                }}
            >
                <div className="flex justify-center px-5">
                    <div className="flex-col">
                        <div className="flex justify-center">
                            <Photo
                                alt="Foto do Professor"
                                height={100}
                                width={100}
                                src={image}
                            />
                        </div>
                        <div className="pt-2 text-xl flex justify-center">
                            <p className="mb-2 font-basic">{name}</p>
                        </div>
                        <div className="pt-2 text-sm">
                            <p className="mb-5 font-basic">
                                <b>Disciplinas ministradas:{' '}</b>
                                {disciplines.join(', ')}.
                            </p>
                            <p className="mb-5 font-basic">
                                <b>Áreas de interesse:{' '}</b>
                                {area_of_interest.join(', ')}.
                            </p>
                        </div>
                    </div>
                </div>
            </Box>
        </div>
    )
}
