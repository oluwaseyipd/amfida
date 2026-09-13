"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react'; 

export default function Login(){
    const [showPassword, setShowPassword] = useState(false);

    return(
        <div className="flex flex-row  items-center gap-6 p-5">
            {/* Left side */}
            <div className="flex flex-col justify-between bg-primary-accent w-[700px] h-[950px] py-8 px-16 rounded-2xl">
                        
                        <div className='flex flex-col justify-between h-[400px]'>
                            {/* Logo */}
                            <Image
                                src="/logo-w.png"
                                width={150}
                                height={150}
                                alt="logo"
                                className='mt-16'
                            />
                            {/* Header */}
                            <div>
                                <h2 className="font-jakarta font-bold text-5xl text-white">Welcome back<br />to Amfida!</h2>
                                <p className="w-[300px] font-sans font-light text-white mt-3">
                                    Discover endless possibilities on Amfida,
                                    where tenants and house owners unite.
                                    Jump right in with us!
                                </p>
                            </div>
                        </div>
                        {/* Sliding reviews */}
        
                        <div>
                            <p className="w-[300px] font-sans font-light text-white mt-3">
                                Discover endless possibilities on Amfida,
                                where tenants and house owners unite.
                                Jump right in with us!
                            </p>
                        </div>
            </div>

            {/* Right side  */}
            <div className="w-[800px] py-6 px-10">
                {/* Header */}
                <div className='flex flex-col items-center text-text'>
                    <h3 className='font-jakarta font-semibold text-3xl'>Login to your account</h3>
                    <p className='font-sans mt-2'>Don't have an account {" "}
                         <Link className='font-semibold underline text-primary-accent cursor-pointer' href='/auth/signup'> Signup </Link>
                    </p>
                </div>

                <form
                    action=""
                    method="post"
                    className="flex flex-col gap-y-6 font-sans mt-16"
                >
                     {/* Email address */}
                    <div>
                        <div className="flex flex-col gap-2 w-full">
                            <label
                                // htmlFor={email} 
                                className="text-md font-medium text-text/70 font-sans">
                                Email Address
                            </label>
                            <input
                                //   id={email}
                                type="text"
                                placeholder="Enter your email address"
                                className='form-input'
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <div className="flex flex-col gap-2 w-full">
                            <label
                                // htmlFor={password} 
                                className="text-md font-medium text-text/70 font-sans">
                                Password
                            </label>
                            <div className="relative flex items-center">
                                <input
                                    //   id={password}
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    className='form-input'
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 text-[#888888] hover:text-[#4A4A4A]"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>
                    </div>

                    <span className='font-sans text-sm text-primary-accent text-right mb-3'>Forgot Password?</span>


                    {/* Submit button */}
                    <button
                        type="submit"
                        className="action-btn w-[200px] "
                    > 
                    Login </button>

                </form>

            </div>
        </div>
    );
}