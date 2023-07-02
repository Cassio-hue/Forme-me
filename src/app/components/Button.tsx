import { ButtonProps as MuiButtonProps } from '@material-ui/core/Button'
import { Button } from '@mui/material'
import clsx from 'clsx'

export const FormButton = ({
    children,
    onClick,
    disabled,
    type,
}: MuiButtonProps) => {
    return (
        <Button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={clsx(
                'rounded-lg p-3 shadow-lg shadow-slate-600 mt-3 w-full'
            )}
            style={{
                backgroundColor: '#004080',
                color: '#FFF',
                textTransform: 'none',
            }}
        >
            {children}
        </Button>
    )
}
