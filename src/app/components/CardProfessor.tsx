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
                className="pt-6"
                sx={{
                    width: 330,
                    height: 440,
                    borderRadius: 8,
                    backgroundColor: '#F1F0F0',
                    '&:hover': {
                        backgroundColor: '#B6B6B6',
                        opacity: [0.9, 0.8, 0.7],
                        borderRadius: 8,
                    },
                }}
            >
                <div className="flex justify-center px-9">
                    <div className="flex-col">
                        <div className="flex justify-center">
                            <Photo
                                alt="Foto do Professor"
                                height={146}
                                width={166}
                                src={image}
                            />
                        </div>
                        <div className="pt-2 text-2xl flex justify-center">
                            <p className="mb-4 font-basic">{name}</p>
                        </div>
                        <div className="pt-4 text-sm">
                            <p className="mb-7 font-basic">
                                Disciplinas ministradas:{' '}
                                {disciplines.join(', ')}.
                            </p>
                            <p className="mb-7 font-basic">
                                Áreas de interesse:{' '}
                                {area_of_interest.join(', ')}.
                            </p>
                            <p className="mb-7 font-basic">
                                Áreas de interesse:{' '}
                                {area_of_ocupation.join(', ')}.
                            </p>
                        </div>
                    </div>
                </div>
            </Box>
        </div>
    )
}
