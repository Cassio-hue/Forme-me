import { Button } from '@mui/material'
import clsx from 'clsx'

export const FormButton = ( {children}:any ) => {
    return (
        <Button className={clsx("bg-azul hover:bg-azul hover:backdrop: text-white rounded-lg normal-case p-3 shadow-lg shadow-slate-600 mt-3")}>{children}</Button>
    )
}