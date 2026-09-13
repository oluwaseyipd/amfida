'use client'

import { useState } from "react";
import { LockIcon } from "lucide-react";

type VerificationMethod = 'phone_number' | 'email';

export default function VerifyAccount(){
    const [verificationMethod, setVerificationMethod] = useState<VerificationMethod>('phone_number');

    

    return(
        <div className="flex min-h-screen justify-center items-center gap-6 p-5">
            <div className="bg-white w-[600px] h-[600px] p-6 rounded-lg shadow-md">

                {/* Header */}
                <div className="flex flex-col gap-y-3 pt-3 items-center text-center text-text">
                    <span className="flex items-center justify-center w-16 h-16 bg-primary-accent rounded-full shadow-sm">
                        <LockIcon className="w-8 h-8 text-white" />
                    </span>
                    
                    <h3 className='font-jakarta font-semibold text-3xl'>Verify Your Account</h3>
                    <p className='font-sans w-[380px]'>
                        We need to verify your account 
                        before you can access it.</p>
                </div>


                {/* Form body */}
                <form
                    action=""
                    method="post"
                    className="flex flex-col gap-y-6 font-sans p-8 mt-10"
                >

                    {/* User verificationMethod selection */}
                    <div className="flex flex-col gap-2 w-full mb-5">
                        <label className="text-sm font-medium text-text/70 font-sans">
                            How do you want to receive the OTP code?
                        </label>

                        <div className="grid grid-cols-2 gap-4">
                            {/* Phone number Option */}
                            <label
                                htmlFor="verificationMethod-agent"
                                className={`flex items-center gap-3 h-[52px] px-4 rounded-lg border-2 cursor-pointer transition-colors ${verificationMethod === 'phone_number'
                                    ? 'border-primary-accent bg-white'
                                    : 'border-[#DFE4E9] bg-white hover:border-gray-300'
                                    }`}
                            >
                                <input
                                    type="radio"
                                    id="phone_number"
                                    name="verificationMethod"
                                    value="phone_number"
                                    checked={verificationMethod === 'phone_number'}
                                    onChange={() => setVerificationMethod('phone_number')}
                                    className="w-4 h-4 text-primary-accent border-gray-300 focus:ring-primary-accent"
                                />
                                <span className={`text-sm font-sans ${verificationMethod === 'phone_number'
                                    ? 'text-primary-accent font-semibold'
                                    : 'text-text font-medium '
                                    }`}>
                                    Phone Number
                                </span>
                            </label>

                            {/* Email Option */}
                            <label
                                htmlFor="verificationMethod-landlord"
                                className={`flex items-center gap-3 h-[52px] px-4 rounded-lg border-2 cursor-pointer transition-colors ${verificationMethod === 'email'
                                    ? 'border-primary-accent bg-white'
                                    : 'border-[#DFE4E9] bg-white hover:border-gray-300'
                                    }`}
                            >
                                <input
                                    type="radio"
                                    id="email"
                                    name="verificationMethod"
                                    value="email"
                                    checked={verificationMethod === 'email'}
                                    onChange={() => setVerificationMethod('email')}
                                    className="w-4 h-4 text-primary-accent border-gray-300 focus:ring-primary-accent"
                                />
                                <span className={`text-sm font-sans ${verificationMethod === 'email'
                                    ? 'text-primary-accent font-semibold'
                                    : 'text-text font-medium '
                                    }`}>
                                    Email
                                </span>
                            </label>
                        </div>
                    </div>

                    {/* Conditional Rendering */}
                   {verificationMethod === 'phone_number' ? (
                        <div>
                            <div className="flex flex-col gap-2 w-full ">
                                <input
                                    id="phone_input"
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    className='form-input cursor-pointer'
                                />
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="flex flex-col gap-2 w-full ">
                                <input
                                    id="email_input"
                                    type="email"
                                    placeholder="Enter your email address"
                                    className='form-input cursor-pointer'
                                />
                            </div>
                        </div>
                    )}
                     
                    {/* Submit button */}
                    <button
                        type="submit"
                        className="action-btn w-full mt-1"
                    > Send Code </button>
                </form>
            </div>
        </div>
    );
}