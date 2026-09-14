'use client'

import React, { useState, useRef, KeyboardEvent, ClipboardEvent } from 'react';
import { LockIcon, RotateCw } from "lucide-react";

type VerificationMethod = 'phone_number' | 'email';

export default function VerifyAccount(){
    const [verificationMethod, setVerificationMethod] = useState<VerificationMethod>('phone_number');
    // State array to hold the 6 digits
    const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
    
    // References to hold the DOM elements for focus management
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    // Handle normal typing and auto-forward focus
    const handleChange = (value: string, index: number) => {
        if (isNaN(Number(value))) return; // Only allow numeric inputs

        const newOtp = [...otp];
        // Safely extract the last character typed
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        // Auto-focus next input box if current field is filled
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    // Handle backspace to move focus backward
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    // The Next.js compatible paste handler
    const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        
        // Grab text from the user's clipboard
        const pastedData = e.clipboardData
            .getData('text')
            .trim()
            .replace(/[^0-9]/g, '') // Remove non-numbers
            .slice(0, 6);           // Cap at 6 digits

        if (pastedData.length === 0) return;

        // Populate the OTP array state
        const newOtp = [...otp];
        for (let i = 0; i < pastedData.length; i++) {
            newOtp[i] = pastedData[i];
        }
        setOtp(newOtp);

        // Shift focus to the last populated field
        const targetIndex = Math.min(pastedData.length - 1, 5);
        inputRefs.current[targetIndex]?.focus();
    };
    

    return(
        <div className="flex min-h-screen justify-center items-center gap-6 p-5">
    
            <div className="hidden bg-white w-full lg:w-[600px] h-full lg:h-[600px] p-6 rounded-lg shadow-md">

                {/* Header */}
                <div className="flex flex-col gap-y-3 pt-3 items-center text-center text-text">
                    <span className="flex items-center justify-center w-16 h-16 bg-primary-accent rounded-full shadow-sm">
                        <LockIcon className="w-8 h-8 text-white" />
                    </span>
                    
                    <h3 className='font-jakarta font-semibold text-2xl md:text-3xl'>Verify Your Account</h3>
                    <p className='font-sans text-sm lg:text-md w-[250px] lg:w-[380px]'>
                        We need to verify your account 
                        before you can access it.</p>
                </div>


                {/* Form body */}
                <form
                    action=""
                    method="post"
                    className="flex flex-col gap-y-6 font-sans p-2 md:p-8 mt-10"
                >

                    {/* User verificationMethod selection */}
                    <div className="flex flex-col gap-2 w-full mb-5">
                        <label className="text-sm font-medium text-text/70 font-sans">
                            How do you want to receive the OTP code?
                        </label>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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

            {/* Redirect to Verify OTP Code */}
            <div className=" bg-white w-full lg:w-[600px] h-full lg:h-[600px] p-6 rounded-lg shadow-md">

                {/* Header */}
                <div className="flex flex-col gap-y-3 pt-3 items-center text-center text-text">
                    <span className="flex items-center justify-center w-16 h-16 bg-primary-accent rounded-full shadow-sm">
                        <LockIcon className="w-8 h-8 text-white" />
                    </span>
                    
                    <h3 className='font-jakarta font-semibold text-2xl md:text-3xl'>Verify Your Account</h3>
                    <p className='font-sans text-sm md:text-md w-[380px]'>
                        We’ve sent a 6-digit code to {" "} <br/>
                        <span className="font-bold">{`email`}</span>
                    </p>
                </div>

                 <form 
                  className="flex flex-col gap-y-6 font-sans p-8 mt-4">
                {/* Input boxes mapped cleanly */}
                <div className="flex gap-3 justify-center">
                    {otp.map((digit, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                inputMode="numeric" // Pulls up number pad on mobile screens
                                autoComplete="one-time-code" // iOS/Android native SMS autofill hook
                                maxLength={1}
                                value={digit}
                                ref={(el) => { inputRefs.current[index] = el; }}
                                onChange={(e) => handleChange(e.target.value, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                onPaste={handlePaste} // Listening on all fields handles global container paste actions gracefully
                                className='form-input w-[52px] h-[62px] text-center text-3xl font-semibold border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-accent'
                            /> 
                        </div>
                    ))}
                </div>

                {/* Submit button */}
                <button
                    type="submit"
                    className="action-btn w-full mt-1"
                    disabled={otp.includes("")} // Keeps button disabled until all 6 slots have values
                > 
                    Verify Code 
                </button>
            </form>

                    {/* Redirect */}
                <div className="flex flex-col justify-center items-center mt-4">
                     <p className='font-sans w-[380px] text-center'>Didn’t receive the code?.</p>

                    <span className="flex gap-1 font-sans text-primary-accent/90 hover:text-primary-accent mt-2 cursor-pointer"> 
                        <RotateCw />
                        Back to Login
                    </span>
                </div>

            </div>
        </div>
    );
}