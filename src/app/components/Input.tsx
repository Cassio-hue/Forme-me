import TextField from '@mui/material/TextField'

type TextFieldProps = {
    required?: boolean
    label: string
    valueChange: Function
    disabled?: boolean
    type: string
    placeholder: string
    error: boolean
    helperText?: string
    errorMessage?: string
}

export function Input(props: TextFieldProps) {
    return (
        <div className="flex flex-col">
            <label htmlFor="outlined-basic" className="font-bold">
                {props.label} {props.required ? '*' : ''}
            </label>
            <TextField
                id="outlined-basic"
                error={props.error}
                onChange={(e) => props.valueChange(e.target.value)}
                label=""
                variant="outlined"
                required={props.required}
                disabled={props.disabled}
                type={props.type}
                helperText={props.error ? props.errorMessage : props.helperText}
                placeholder={props.placeholder}
            />
        </div>
    )
}
