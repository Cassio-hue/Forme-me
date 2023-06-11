// import clsx from 'clsx'
// import Image from 'next/image'
import { FaHeart } from "react-icons/fa"

// import FalarDevs from '../../../public/converse_devs.svg'
// import FormeMeLogo from '../../../public/formeme_logo.svg'
// import UserPicture from '../../../public/gus.jpeg'
// import Sair from '../../../public/sair.svg'

export function Footer() {
    return (
        <footer
            className='flex justify-center px-8 bg-verde font-alegreya text-white text-md font-bold h-16 items-center'
        >
            <span>
                DESENVOLVIDO COM
            </span>
            <FaHeart className='mx-2' color='red'/>
            <span>PELOS ASTRONAUTAS!</span>
        </footer>
    )
}
