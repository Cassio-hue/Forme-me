'use client';
import Image from 'next/image'
import { useState } from 'react';

import FormeMeLogo from '../../../public/formeme_logo_azul.svg'
import { Input } from '../components/Input';

const RegisterPage = () => {
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorConfirm, setErrorConfirm] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    function changePassword(value: string){
        if(value.length < 8){
            setErrorPassword(true);
        } else {
            setErrorPassword(false);
            setPassword(value);
        }
    }

    function changeConfirm(value: string){
        if(value === password) {
            setErrorConfirm(true);
        } else {
            setErrorConfirm(false);
        }
    }

    function changeEmail(value: string){
        const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        const isEmail = regexp.test(value);
        setErrorEmail(isEmail);
        if(isEmail) setEmail(value);
    }
    

    return (
        <div className='flex flex-col w-full items-center justify-center h-5/6 gap-20'>
            <Image sizes='260' src={FormeMeLogo} alt="logo" />
            <form className='flex'>
                <div>
                    <Input 
                        label="Senha" 
                        required 
                        type="password"
                        valueChange={changePassword}
                        placeholder='Digite uma senha' 
                        helperText='Digite uma senha de 8 caracteres'
                        errorMessage="Padrão de senha incorreto"
                        error={errorPassword}
                    />
                    <Input 
                        label="Confirme sua senha" 
                        required 
                        type="password"
                        valueChange={changeConfirm}
                        placeholder='Digite a mesma sequência anterior' 
                        helperText='Deve corresponder com a senha'
                        errorMessage="Correspondência incorreta"
                        error={errorConfirm}
                    />
                </div>
                <Input 
                    label="E-mail" 
                    required 
                    type="email"
                    valueChange={changeEmail}
                    placeholder='Digite um email' 
                    helperText='Digite um email válido'
                    errorMessage="Email inválido"
                    error={errorEmail}
                />
            </form>
            
        </div>
    )
}

export default RegisterPage
