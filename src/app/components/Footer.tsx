import { FaHeart } from 'react-icons/fa'

export function Footer() {
    return (
        <footer className="flex justify-center px-8 bg-verde font-alegreya text-white text-md font-bold h-16 items-center w-full">
            <span>DESENVOLVIDO COM</span>
            <FaHeart className="mx-2" color="red" />
            <span>PELOS ASTRONAUTAS!</span>
        </footer>
    )
}
