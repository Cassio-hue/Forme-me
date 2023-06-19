import Button from '@mui/material/Button';

type ButtonPropsCustom = {
    startIcon?: string;
    text: string;
    bgColor?: string;
    textColor?: string;

}

export function Botao(propsCustom: ButtonPropsCustom) {
    const styles = {
        background: `${propsCustom.bgColor ? propsCustom.bgColor : '#004080'}`,
        color: `${propsCustom.textColor ? propsCustom.textColor : 'ffffff'}`,
        borderRadius: '8px'
    }
    
    return (
        <Button variant="contained" className="w-full" style={styles} startIcon={propsCustom.startIcon}>
            {propsCustom.text}
        </Button>
    )
}