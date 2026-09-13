"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react'; 

type Role = 'agent' | 'landlord';

export default function Signup() {
    const [selectedRole, setSelectedRole] = useState<Role>('agent');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    return (

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
                        <h2 className="font-jakarta font-bold text-5xl text-white">Connect with <br />Tenant with Ease</h2>
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

            {/* Right side */}
            <div className="w-[800px] py-6 px-10">

                {/* Header */}
                <div className='text-text'>
                    <h3 className='font-jakarta font-semibold text-3xl'>Create an account</h3>
                    <p className='font-sans mt-2'>Already have an account? {" "}
                         <Link className='font-semibold underline text-primary-accent cursor-pointer' href='/auth/login'> Login </Link>
                    </p>
                </div>

                <form
                    action=""
                    method="post"
                    className="flex flex-col gap-y-6 font-sans mt-16"
                >

                    {/* User role selection */}
                    <div className="flex flex-col gap-2 w-full mb-5">
                        <label className="text-sm font-medium text-text/70 font-sans">
                            You are creating an account as?
                        </label>

                        <div className="grid grid-cols-2 gap-4">
                            {/* Agent Option */}
                            <label
                                htmlFor="role-agent"
                                className={`flex items-center gap-3 h-[52px] px-4 rounded-lg border-2 cursor-pointer transition-colors ${selectedRole === 'agent'
                                    ? 'border-primary-accent bg-white'
                                    : 'border-[#DFE4E9] bg-white hover:border-gray-300'
                                    }`}
                            >
                                <input
                                    type="radio"
                                    id="role-agent"
                                    name="role"
                                    value="agent"
                                    checked={selectedRole === 'agent'}
                                    onChange={() => setSelectedRole('agent')}
                                    className="w-4 h-4 text-primary-accent border-gray-300 focus:ring-primary-accent"
                                />
                                <span className={`text-sm font-sans ${selectedRole === 'agent'
                                    ? 'text-primary-accent font-semibold'
                                    : 'text-text font-medium '
                                    }`}>
                                    As an Agent
                                </span>
                            </label>

                            {/* Landlord Option */}
                            <label
                                htmlFor="role-landlord"
                                className={`flex items-center gap-3 h-[52px] px-4 rounded-lg border-2 cursor-pointer transition-colors ${selectedRole === 'landlord'
                                    ? 'border-primary-accent bg-white'
                                    : 'border-[#DFE4E9] bg-white hover:border-gray-300'
                                    }`}
                            >
                                <input
                                    type="radio"
                                    id="role-landlord"
                                    name="role"
                                    value="landlord"
                                    checked={selectedRole === 'landlord'}
                                    onChange={() => setSelectedRole('landlord')}
                                    className="w-4 h-4 text-primary-accent border-gray-300 focus:ring-primary-accent"
                                />
                                <span className={`text-sm font-sans ${selectedRole === 'landlord'
                                    ? 'text-primary-accent font-semibold'
                                    : 'text-text font-medium '
                                    }`}>
                                    As a Landlord
                                </span>
                            </label>
                        </div>
                    </div>

                    {/* Name */}
                    <div className="flex flex-col md:flex-row gap-x-[60px]">
                        <div className="flex flex-col gap-2 w-full">
                            <label
                                // htmlFor={firstName} 
                                className="text-md font-medium text-text/70 font-sans">
                                First Name
                            </label>
                            <input
                                //   id={firstName}
                                type="text"
                                placeholder="First name"
                                className='form-input'
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label
                                // htmlFor={lastName} 
                                className="text-md font-medium text-text/70 font-sans">
                                Last Name
                            </label>
                            <input
                                //   id={lastName}
                                type="text"
                                placeholder="Last name"
                                className='form-input'
                            />
                        </div>
                    </div>

                    {/* Phone number */}
                    <div>
                        <div className="flex flex-col gap-2 w-full">
                            <label
                                // htmlFor={phoneNumber} 
                                className="text-md font-medium text-text/70 font-sans">
                                Phone Number
                            </label>
                            <input
                                //   id={phoneNumber}
                                type="text"
                                placeholder="Enter your phone number"
                                className='form-input'
                            />
                        </div>
                    </div>

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
                                    placeholder="Create your password"
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

                    {/* Confirm password */}
                    <div>
                        <div className="flex flex-col gap-2 w-full">
                            <label
                                // htmlFor={confirmPassword} 
                                className="text-md font-medium text-text/70 font-sans">
                                Confirm Password
                            </label>
                            <div className="relative flex items-center">
                                <input
                                    //   id={confirmPassword}
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm your password"
                                    className='form-input'
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-4 text-[#888888] hover:text-[#4A4A4A]"
                                >
                                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Submit button */}
                    <button
                        type="submit"
                        className="action-btn w-[300px] "
                    > Create Account </button>
                </form>


            </div>

        </div>
    );
}