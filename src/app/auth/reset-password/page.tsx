'use client'


import { useState } from 'react';
import { LockIcon, Eye, EyeOff, CircleCheckBig } from 'lucide-react'; 

export default function ResetPassword(){
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return(
        <div className="flex min-h-screen justify-center items-center gap-6 p-5">
            <div className="bg-white w-[600px] h-[600px] p-6 rounded-lg shadow-md">
                {/* Header */}
                <div className="flex flex-col gap-y-3 pt-3 items-center text-center text-text">
                    <span className="flex items-center justify-center w-16 h-16 bg-primary-accent rounded-full shadow-sm">
                        <LockIcon className="w-8 h-8 text-white" />
                    </span>
                    
                    <h3 className='font-jakarta font-semibold text-3xl'>Reset Password</h3>
                    <p className='font-sans w-[380px]'>Choose a new password for your account.</p>
                </div>

                {/* Form body */}
                <form
                    action=""
                    method="post"
                    className="flex flex-col gap-y-6 font-sans p-8 mt-12"
                >
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
                                    placeholder="Enter new password"
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
                        className="action-btn w-full "
                    > Send </button>
                </form>
            </div>

            {/* Rest Successfully */}
            <div className="hidden flex flex-col justify-center items-center gap-16 bg-white w-[600px] h-[600px] p-8 rounded-lg shadow-md">
                 <div className='flex flex-col justify-center items-center gap-6'>
                     <span className="flex items-center justify-center w-24 h-24 bg-primary-accent/10 rounded-full shadow-sm">
                        <CircleCheckBig className="w-12 h-12 text-primary-accent/80" />
                    </span>
                    <p className='font-sans text-lg'>Password reset successfully</p>
                 </div>
                
                <p className='action-btn w-full text-center'> Continue to Login</p>
            </div>

        </div>
    );
}