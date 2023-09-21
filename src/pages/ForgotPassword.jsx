import React, { useState } from 'react';
import VerifyResetPassword from "@/components/VerifyPassword";
import RequestResetPassword from "@/components/RequestResetPassword";
import Link from "next/link";
import LoginForm from "@/components/LoginForm";
import Footer from "@/components/Footer";


export default function ResetPasswordPage() {
    const [isCodeSent, setCodeSent] = useState(false);

    const handleCodeSent = () => {
        setCodeSent(true);
    };

    return (
        <main
            className={`relative bg-gold text-slate-900 flex min-h-screen p-8 space-y-12 flex-col justify-center items-center `}
        >
            <div className={"flex flex-col lg:flex-row items-center justify-between w-full"}>
                <Link href={"/"} className={" h-[130px] w-[280px]  "}>
                    <img className={"mix-blend-multiply bg-contain "} src={"/logo.png"} fill={true}   alt={""}/>
                </Link>
                <div className={"flex-grow flex justify-center pt-12 items-center"}>
                    <h1 className={"text-4xl text-black font-bold"}>Login</h1>

                </div>
            </div>

            <div className={" px-12 rounded flex flex-col bg-darkergold   p-8"}>

                <div>
                    <h1>Reset Password</h1>
                    {isCodeSent ? (
                        <VerifyResetPassword />
                    ) : (
                        <RequestResetPassword onCodeSent={handleCodeSent} />
                    )}
                </div>
            </div>
            <Footer/>
        </main>
    );
}

