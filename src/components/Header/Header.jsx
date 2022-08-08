import React, { useCallback, useState } from 'react';
import Logo from '../Logo/Logo';

function Header() {
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
                        <div className='text-[#2f4cdd]'>
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

                    <div className=' flex ml-5  h-full justify-center hover:cursor-pointer'>
                        <div
                            className='h-full inline-flex items-center
                            rounded-tl-md rounded-bl-md'
                        >
                            <span className='text-blue-primary ml-6 md:block hidden'>Hello, <b>Minh Trung</b></span>
                        </div>
                        <div className='h-full ml-4 relative z-[1]'>
                            <img className='object-cover border-2 border-[#ff6d4d] block rounded-full overflow-hidden h-full aspect-square' src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/161814663_435341347536927_2718388379880840379_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=tcd_jUgOvAIAX9aN9nl&_nc_ht=scontent.fsgn5-10.fna&oh=00_AT8uzQ85qlOiz3AlxCIkr1PLR6sTXspnUiQsjJ8akwrEmw&oe=62FE032D" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;