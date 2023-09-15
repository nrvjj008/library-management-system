import Image from 'next/image'
import { Inter } from 'next/font/google'
import LoginForm from "@/components/LoginForm";
import Link from "next/link";
import {useRouter} from "next/router";
import {useEffect} from "react";


export default function Home() {
    const router = useRouter();
    useEffect(() => {
        if (typeof window !== 'undefined' && localStorage.getItem("access_token") !== null) {
            router.push("/home");
        }
    }, []);
    return (
        <main
            className={`relative bg-gold text-slate-900 flex min-h-screen p-8 space-y-12 flex-col justify-center items-center `}
        >
            <div className={"flex  w-full"}>
            <Link href={"/"} className={"absolute top-8 left-8 h-[130px] w-[280px]  "}>
                <Image className={"mix-blend-multiply bg-contain "} src={"/logo.png"} fill={true}   alt={""}/>
            </Link>
            <div className={"flex-grow flex justify-center pt-12 items-center"}>
                <h1 className={"text-4xl text-black font-bold"}>Login</h1>

            </div>
            </div>

            <div className={" w-fit px-12 rounded flex flex-col bg-darkergold   p-8"}>

            <LoginForm />
            </div>

        </main>
    )
}
