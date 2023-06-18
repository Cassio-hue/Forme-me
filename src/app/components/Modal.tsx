import { Dialog } from '@mui/material'

export type Props = {
    children: JSX.Element | JSX.Element[]
    open: boolean
    className?: string
    handleClose: () => void
}

export const ModalDialog = ({ children, open, handleClose }: Props) => {
    return (
        <Dialog
            hideBackdrop
            className="bg-gradient-r"
            open={open}
            onClose={handleClose}
        >
            <div className="w-full h-full flex justify-center items-center">
                {children}
            </div>
        </Dialog>
    )
}
