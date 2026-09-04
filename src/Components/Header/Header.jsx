import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function Header() {

    const navLinkClass = ({ isActive }) =>
        `rounded-lg px-4 py-2 text-sm font-medium transition-colors ${isActive
            ? "bg-blue-600 text-white"
            : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
        }`;

    return (
        <header className="border-b border-gray-200 bg-white shadow-sm">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <NavLink to="/" className="text-xl font-bold text-blue-600">
                    PrepMate
                </NavLink>

                <div className="flex items-center gap-2">
                    <NavLink to="/" className={navLinkClass}>
                        Home
                    </NavLink>

                    <NavLink to="/prepare" className={navLinkClass}>
                        Start Preparing
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Header