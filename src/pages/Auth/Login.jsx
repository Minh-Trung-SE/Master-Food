import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../components/Logo/Logo'
import { emailSiginWithPopup } from '../../services/firebase.service'

export const Login = () => {
    return (
        <div className='min-h-screen bg-primary-bg flex items-center justify-center'>
            <div className='bg-white mx-4 w-full lg:w-5/12 sm:w-8/12 max-w-xl p-12 rounded'>
                <div className='w-full flex flex-col'>
                    <div className='w-full'>
                        <div className='w-full flex items-center flex-col mb-4'>
                            <Logo />
                        </div>
                        <h2 className='text-center text-lg font-semibold'>Sign in your account</h2>
                    </div>

                    <div className='w-full mt-6'>
                        <div className='flex w-full flex-col'>
                            <label className='text-sm font-semibold text-gray-primary mb-1'>Email</label>
                            <input
                                className='py-2 px-5 h-12 outline-none border-gray-primary border rounded-lg focus:border-purple'
                                type='text'
                                placeholder='youremail@gmail.com' />
                        </div>

                        <div className='flex w-full flex-col mt-6'>
                            <label className='text-sm font-semibold text-gray-primary mb-1'>Password</label>
                            <input
                                className='py-2 px-5 h-12 text-sm outline-none border-gray-primary focus:border-purple border rounded-lg'
                                type='password'
                                placeholder='Enter your password...' />
                        </div>

                        <div className='flex w-full flex-col mt-6 text-sm text-gray-primary font-extralight hover:text-purple'>
                            <Link to='../forgot' replace>Forgot Password?</Link>
                        </div>

                        <button className='w-full bg-purple text-white font-bold mt-6 px-4 py-3 text-center rounded-lg'> Sign Me In</button>
                    </div>

                    <div className='w-full mt-4'>
                        <h2 className='mb-4 text-center'>Or</h2>
                        <div className='flex justify-between'>
                            <div 
                            className=' flex items-center bg-[#dd4b39] flex-1 py-2 px-3 rounded hover:cursor-pointer'
                            onClick={emailSiginWithPopup}
                            >
                                <div className="w-fit h-fit mr-4 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="30" height="30"
                                        viewBox="0 0 172 172"
                                    >
                                        <g fill="none">
                                            <path d="M0,172v-172h172v172z" fill="none"></path>
                                            <g fill="#FFFFFF"><path d="M86.02239,17.2c-38.00627,0 -68.82239,30.8052 -68.82239,68.8c0,37.9948 30.81613,68.8 68.82239,68.8c57.39067,0 70.32032,-53.27987 64.93672,-80.26667h-7.62578h-13.00078h-44.33255v22.93333h44.36614c-5.10025,19.76997 -23.004,34.4 -44.36614,34.4c-25.32987,0 -45.86667,-20.5368 -45.86667,-45.86667c0,-25.32987 20.5368,-45.86667 45.86667,-45.86667c11.51827,0 22.01108,4.27563 30.06641,11.2875l16.29297,-16.28177c-12.23494,-11.1456 -28.48912,-17.93906 -46.33698,-17.93906z"></path>
                                            </g>
                                        </g></svg>
                                </div>
                                <span className='text-white '>Facebook</span>
                            </div>
                            <div className='ml-4 flex items-center bg-[#0b5ed7] flex-1 py-2 px-3 rounded hover:cursor-pointer'>
                                <div className="w-fit h-fit mr-4 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className='w-8 h-8'>
                                        <path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z" />
                                    </svg>
                                </div>
                                <span className='text-white '>Facebook</span>
                            </div>

                        </div>
                    </div>

                    <div className='mt-4'>
                        <span className='text-sm text-gray-primary'>Don't have an account?</span>
                        <Link className='text-sm text-purple' to='../register'> Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
