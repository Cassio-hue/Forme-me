/* eslint-disable simple-import-sort/imports */
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import './globals.css'

export const metadata = {
    title: 'Forme-me',
    description: 'Trabalho da disciplina de Sistemas da Informação',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
