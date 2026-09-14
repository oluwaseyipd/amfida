import Link from "next/link";
import { LockIcon, MoveLeft } from "lucide-react";

export default function ForgotPassword(){
    return(
        <div className="flex min-h-screen justify-center items-center gap-6 p-5">
            <div className="bg-white w-full lg:w-[600px] h-full lg:h-[600px] p-6 rounded-lg shadow-md">

                {/* Header */}
                <div className="flex flex-col gap-y-3 pt-3 items-center text-center text-text">
                    <span className="flex items-center justify-center w-16 h-16 bg-primary-accent rounded-full shadow-sm">
                        <LockIcon className="w-8 h-8 text-white" />
                    </span>
                    
                    <h3 className='font-jakarta font-semibold text-2xl md:text-3xl'>Forgot Password</h3>
                    <p className='font-sans tetx-sm md:text-md w-[280px] md:w-[380px]'>
                        Enter your email address to get a secure link to reset your password.</p>
                </div>

                {/* Form body */}
                <form
                    action=""
                    method="post"
                    className="flex flex-col gap-y-6 font-sans  p-4 lg:p-8 mt-7 md:mt-16"
                >
                    {/* Email address */}
                    <div>
                        <div className="flex flex-col gap-2 w-full">
                            <input
                                //   id={email}
                                type="text"
                                placeholder="Enter your email address"
                                className='form-input'
                            />
                        </div>
                    </div>

                    {/* Submit button */}
                    <button
                        type="submit"
                        className="action-btn w-full mt-1"
                    > Send </button>
                </form>

                {/* Redirect */}
                <div className="flex justify-center">
                    <Link href="/auth/login" className="flex gap-1 font-sans text-primary-accent/90 hover:text-primary-accent cursor-pointer"> 
                        <MoveLeft />
                        Back to Login
                    </Link>
                </div>
                
            </div>
        </div>
    );
}