import { NavLink } from "react-router-dom"
import logo from '../../src/img/logo.png'
import hamburger from '../../src/img/hamburger.png'
import { useState } from "react"

export default function Navbar () {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="w-full bg-black-900">
            <div className="items-center m-auto justify-between flex flex-row h-20 w-9/12">
                <NavLink to='/' className="md:w-64 block w-48"><img src={logo} alt="Luments Play"/></NavLink>
                <div onClick={() => isOpen?setIsOpen(false):setIsOpen(true)} className="md:hidden cursor-pointer hamburger block w-10"><img src={hamburger}/></div>
                <nav className={ `${isOpen ? 'block' : 'hidden'} md:block z-50 text-slate-200 md:text-right md:static md:top-0 top-16 md:bg-transparent bg-black-800 absolute list-nav w-full left-0`}>
                    <NavLink className="text-white md:px-3 md:inline-block md:p-0 block p-4 text-center hover:text-orange-500" to='top-rated'>Top Rated</NavLink>
                    <NavLink className="text-white md:px-3 md:inline-block md:p-0 block p-4 text-center hover:text-orange-500" to='upcoming'>Upcoming</NavLink>
                    <NavLink className="text-white md:px-3 md:inline-block md:p-0 block p-4 text-center hover:text-orange-500" to='popular'>Popular</NavLink>
                    <NavLink className="text-white md:px-3 md:inline-block md:p-0 block p-4 text-center hover:text-orange-500" to='now-playing'>Now Playing</NavLink>
                </nav>
            </div>
        </header>
    )
}