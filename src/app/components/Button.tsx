import { Button } from '@mui/material'
import clsx from 'clsx'
import { type } from 'os'

type ButtonProps = {
    children: any
    onClick?: Function
    disabled?: boolean
}

export const FormButton = ({ children, onClick, disabled }: any) => {
    return (
        <Button
            disabled={disabled}
            onClick={onClick}
            className={clsx(
                'bg-azul hover:bg-azul hover:backdrop: text-white rounded-lg normal-case p-3 shadow-lg shadow-slate-600 mt-3 w-full'
            )}
        >
            {children}
        </Button>
    )
}
