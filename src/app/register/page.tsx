import Image from 'next/image'

import FormeMeLogo from '../../../public/formeme_logo_branca.svg'

const RegisterPage = () => {
    return (
        <div>
            <Image src={FormeMeLogo} alt="logo" />
            <input type='email'>
            </input>
            <input type='password'>
            </input>
            <input type='password'>
            </input>
        </div>
    )
}

export default RegisterPage
