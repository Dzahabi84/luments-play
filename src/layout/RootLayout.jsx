import { NavLink, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function RootLayout () {
    return (
        <div className='relative'>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}