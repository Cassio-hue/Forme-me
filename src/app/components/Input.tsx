import TextField from "@mui/material/TextField";

type TextFieldProps = {
    required: boolean;
    label: string;
    valueChange: Function;
}

export function Input(props: TextFieldProps) {
    return (
        <TextField 
            id="outlined-basic" 
            error={props.required} 
            onChange = {e => props.valueChange(e.target.value)} 
            label={props.label} variant="outlined" 
            required={props.required} 
        />
    )
}