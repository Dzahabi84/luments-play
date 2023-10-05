import { NavLink, Outlet } from 'react-router-dom'
import logo from '../../public/img/logo.png'
import hamburger from '../../public/img/hamburger.png'
import Navbar from '../components/Navbar'

export default function RootLayout () {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    )
}