import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../components/Logo/Logo'

export const Login = () => {
    return (
        <div className='min-h-screen bg-primary-bg flex items-center justify-center'>
            <div className='bg-white mx-4 w-full md:w-5/12 p-12 rounded'>
                <div className='w-full flex flex-col'>
                    <div className='w-full'>
                        <div className='w-full flex items-center flex-col mb-4'>
                            <Logo />
                        </div>
                        <h2 className='text-center'>Sign in your account</h2>
                    </div>

                    <div className='w-full mt-6'>
                        <div className='flex w-full flex-col mb-4'>
                            <label className='font-extrabold text-gray-primary mb-1'>Email</label>
                            <input
                                className='py-2 px-5 outline-none border-gray-primary border rounded-lg'
                                type='text'
                                placeholder='youremail@gmail.com' />
                        </div>

                        <div className='flex w-full flex-col mb-4'>
                            <label className='font-extrabold text-gray-primary mb-1'>Password</label>
                            <input
                                className='py-2 px-5 outline-none border-gray-primary border rounded-lg'
                                type='password'
                                placeholder='Enter your password...' />
                        </div>

                        <div className='flex w-full flex-col mb-4'>
                            <Link to='../forgot' replace>Forgot Password?</Link>
                        </div>

                        <button className='w-full bg-purple text-white px-4 py-3 text-center rounded-lg'> Sign Me In</button>
                    </div>

                    <div className='w-full mt-4'>
                        <h2 className='mb-4 text-center'>Or</h2>
                        <div className='flex justify-between'>
                            <div className='bg-[#0b5ed7] flex-1 py-2 px-3 rounded hover:cursor-pointer'>
                                <span className='text-white '>Facebook</span>
                            </div>
                            <div className='ml-5 bg-[#ea4335] flex-1 py-2 px-3 rounded hover:cursor-pointer'>
                                <span className='text-white'>Google</span>
                            </div>
                        </div>
                    </div>

                    <div className='mt-4'>
                        <span>Don't have an account?</span>
                        <Link to='register'> Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
