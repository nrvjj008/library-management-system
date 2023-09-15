import Image from 'next/image'
import {Inter, Nunito, Open_Sans} from 'next/font/google'
import LoginForm from "@/components/LoginForm";
import Link from "next/link";

const inter = Nunito({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`bg-[url('/bg_main.jpg')] bg-no-repeat bg-cover text-slate-900 flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
    >
      <div className={"font-semibold w-1/2 h-1/2 mx-auto bg-gold/95 flex flex-col rounded p-4 space-y-8 shadow-2xl"}>
        <div className={" h-[250px] w-full relative"}>
        <Image className={"mix-blend-multiply bg-contain"} src={"/logo.png"} fill={true}   alt={""}/>
        </div>
        <div className={"flex justify-end p-4 "}>
          <Link href={"/aboutUs"} ><button className={" bg-gold border border-black rounded py-2 px-4 hover:bg-black/20 hover:shadow-2xl"}>About Us</button></Link>
        </div>
        <div>
          <p className={"text-black text-3xl font-extrabold flex justify-end px-8 text-end"} dir={"rtl"}>أهلاً وسهلاً بكم في مكتبة نسق للكتب والأبحاث حول الفن والثقافة .  نشارك المعرفة ونضيف إلى الحياة نسقاً جميلًا</p>
        </div>
        <div className={"flex space-x-2"}>
          <Link href={"/login"} ><button className={" bg-gold border border-black  rounded py-2 px-4 hover:bg-black/20 hover:shadow-2xl"}>Log In</button></Link>
          <Link href={"/signUp"} ><button className={" bg-gold border border-black rounded py-2  px-4 hover:bg-black/20 hover:shadow-2xl"}>Sign Up</button></Link>

        </div>
      </div>

    </main>
  )
}
