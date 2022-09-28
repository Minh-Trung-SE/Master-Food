import React, { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useClickOutsite from '../../hook/UseClickOutside';
import { logout } from '../../services/firebase.service';
import Logo from '../Logo/Logo';

const Account = memo(
    ({ user }) => {
        const [showDropdown, setShowDropdown] = useState(false)
        const handleClickOutsite = useCallback(() => {
            setShowDropdown(false)
        }, [])
        const dropdownRef = useClickOutsite(handleClickOutsite)

        const handleLogout = async () => {
            await logout()
        }

        return (
            <div
                className='flex ml-5 h-full justify-center hover:cursor-pointer'
                ref={dropdownRef}
            >
                <div
                    className='h-full inline-flex items-center rounded-tl-md rounded-bl-md'
                >
                    <span className='text-blue-primary ml-6 md:block hidden'>Hello, <b>{user?.displayName}</b></span>
                </div>
                <div
                    className='h-full ml-4 relative z-[1]'
                    onClick={() => setShowDropdown(toggle => !toggle)}
                >
                    <img
                        className='object-cover border-2 border-[#ff6d4d] block rounded-full overflow-hidden h-full aspect-square'
                        src={user?.avatarLink}
                        alt="User avatar."
                    />
                    {
                        showDropdown && (
                            <div
                                className='absolute top-full right-0'
                            >
                                <ul className='mt-5 bg-white py-4 rounded min-w-[160px]'>
                                    <li className='list-none px-5 py-2 hover:bg-ice-blue'>
                                        <div className='flex items-center'>
                                            <div className='w-fit h-fit mr-2 text-blue-primary '>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                                </svg>
                                            </div>
                                            <span className='text-gray-primary hover:text-blue-primary'>Profile</span>
                                        </div>
                                    </li>
                                    <li
                                        className='list-none mt-2 px-5 py-2 hover:bg-ice-blue'
                                        onClick={handleLogout}
                                    >
                                        <div className='flex items-center'>
                                            <div className='w-fit h-fit mr-2 text-orange-primary '>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                                </svg>
                                            </div>
                                            <span className='text-gray-primary hover:text-blue-primary'>Logout</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
)

const Header = () => {
    const { auth: { user } } = useSelector(state => state.auth)

    const [keyword, setKeyword] = useState("");

    const handleSearchOnChange = useCallback((value) => {
        setKeyword(value)
    }, [])

    return (
        <div className="h-20 px-10 py-5">
            <div className="flex-row flex h-full justify-between">
                <div className='flex'>
                    <Logo />
                    <div className='hidden sm:flex ml-14 h-full bg-[#eeeeee] rounded-lg'>
                        <input
                            className='px-5 py-1 h-full bg-transparent outline-0 text-[#6e6e6e]'
                            placeholder='Search here...'
                            value={keyword}
                            onChange={(e) => handleSearchOnChange(e.target.value)}
                        ></input>
                        <div className='px-5 inline-flex items-center justify-center hover:cursor-pointer'>
                            <div className='text-[#717579]'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex h-11'>
                    <div className='inline-flex items-center aspect-square h-full rounded-md justify-center bg-[#f4f6fd] hover:cursor-pointer'>
                        <div className='text-blue-primary'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                    </div>
                    <div className='inline-flex ml-5 items-center aspect-square h-full rounded-md justify-center bg-[#ffeae6] hover:cursor-pointer'>
                        <div className='text-[#ff6d4d]'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </div>
                    </div>

                    {
                        user ? (
                            <Account user={user} />
                        ) : (
                            <div className='ml-5 flex'>
                                <Link
                                    className='flex justify-center px-6 rounded items-center bg-blue-primary/80 hover:bg-blue-primary hover:cursor-pointer'
                                    to='auth/login'
                                >
                                    <span className='text-white'>Login</span>
                                </Link>
                                <Link
                                    className='ml-5 flex justify-center px-6 rounded items-center bg-orange-primary/80 hover:bg-orange-primary hover:cursor-pointer'
                                    to='auth/register'
                                >
                                    <span className='text-white'>Register</span>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default memo(Header);