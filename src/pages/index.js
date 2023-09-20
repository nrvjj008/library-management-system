import Image from 'next/image'
import {Inter, Noto_Sans_Arabic, Nunito, Open_Sans} from 'next/font/google'
import LoginForm from "@/components/LoginForm";
import Link from "next/link";
import Footer from "@/components/Footer";
import React from "react";

const inter = Noto_Sans_Arabic({ subsets: ['arabic'] })

export default function Home() {
  return (
    <main
      className={`bg-[url('/bg_main.jpg')] bg-no-repeat bg-cover text-slate-900 flex min-h-screen flex-col items-center justify-center p-8 ${inter.className}`}
    >
      <div className={"font-semibold w-11/12 lg:w-fit lg:h-1/2 mx-auto bg-gold/95 flex flex-col rounded p-4 space-y-2 lg:space-y-8 shadow-2xl"}>
        <div className={"h-[150px] lg:h-[230px] w-[200px] lg:w-2/3 mx-auto pt-8 relative"}>
        <Image className={"mix-blend-multiply object-contain aspect-auto mx-auto"} src={"/logo.png"} fill={true}   alt={""}/>
        </div>
        <div className={"flex justify-end p-4 "}>
          <Link href={"/aboutUs"} ><button className={" bg-gold border border-black rounded py-2 px-4 hover:bg-black/20 hover:shadow-2xl"}>About Us</button></Link>
        </div>
        <div>
          <p className={"text-black text-lg xl:text-2xl font-medium  px-4 "} dir={"rtl"}>أهلاً وسهلاً بكم في مكتبة نسق للكتب والأبحاث حول الفن والثقافة .</p>
          <p className={"text-black text-lg xl:text-2xl font-medium  px-4 pt-4 "} dir={"rtl"}> نشارك المعرفة ونضيف إلى الحياة نسقاً جميلًا</p>
        </div>
        <div className={"flex flex-wrap space-x-2"}>
          <Link href={"/login"} ><button className={" bg-gold border border-black  rounded py-2 px-4 hover:bg-black/20 hover:shadow-2xl"}>Log In</button></Link>
          <Link href={"/signUp"} ><button className={" bg-gold border border-black rounded py-2  px-4 hover:bg-black/20 hover:shadow-2xl"}>Sign Up</button></Link>

        </div>
      </div>
      <Footer/>
    </main>
  )
}
