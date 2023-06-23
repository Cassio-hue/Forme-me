import { Box } from '@mui/material'

type CardProfessorProps = {
    title: string
    names: string[]
    orientadores: string[]
    coorientadores: string[]
    related_fields: string[]
}

export function CardTrabalho({
    title,
    names,
    orientadores,
    coorientadores,
    related_fields,
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
                        <div className="pt-4 text-xl flex justify-center text-center">
                            <p className="mb-4 font-basic">{title}</p>
                        </div>
                        <div className="pt-4 text-sm">
                            <p className="mb-5 font-basic">
                                Autor(es): {names.join(', ')}.
                            </p>
                            <p className="mb-5 font-basic">
                                Orientador(es): {orientadores.join(', ')}.
                            </p>
                            <p className="mb-5 font-basic">
                                Coorientador: {coorientadores.join(', ')}.
                            </p>
                            <p className="mb-5 font-basic">
                                Área relacionada: {related_fields.join(', ')}.
                            </p>
                        </div>
                    </div>
                </div>
            </Box>
        </div>
    )
}
