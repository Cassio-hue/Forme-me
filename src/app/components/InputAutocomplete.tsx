import { Autocomplete, TextField } from '@mui/material'

type Option = {
    label: string
    id: number
}

type AutocompleteProps = {
    placeholder?: string
    options: Option[]
}

export default function InputAutocomplete({
    placeholder,
    options,
}: AutocompleteProps) {
    return (
        <Autocomplete
            disablePortal
            id=""
            options={options}
            sx={{ width: 300 }}
            renderInput={({ InputProps, ...params }) => (
                <TextField
                    {...params}
                    label=""
                    variant="outlined"
                    InputProps={{ ...InputProps, style: { borderRadius: 15 } }}
                    {...params}
                    placeholder={placeholder}
                />
            )}
        />
    )
}
