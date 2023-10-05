import { NavLink } from "react-router-dom"
import logo from '../../public/img/logo.png'
import hamburger from '../../public/img/hamburger.png'
import { useState ,useRef } from "react"

export default function Navbar () {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="w-full bg-slate-950">
            <div className="items-center m-auto w-11/12 justify-between flex flex-row h-16">
                <NavLink to='/' className="block w-64"><img src={logo} alt="Luments Play"/></NavLink>
                <div onClick={() => isOpen?setIsOpen(false):setIsOpen(true)} className="cursor-pointer hamburger block w-12"><img src={hamburger}/></div>
                <nav className={ `${isOpen ? 'block' : 'hidden'} z-50 right-0 text-slate-200 top-16 bg-slate-900 absolute list-nav w-full`}>
                    <NavLink className="block p-4 text-center hover:text-orange-500" to='top-rated'>Top Rated</NavLink>
                    <NavLink className="block p-4 text-center hover:text-orange-500" to='upcoming'>Upcoming</NavLink>
                </nav>
            </div>
        </header>
    )
}