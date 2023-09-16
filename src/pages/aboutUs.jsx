import Image from 'next/image'
import {Inter, Noto_Sans_Arabic} from 'next/font/google'
import LoginForm from "@/components/LoginForm";
import Link from "next/link";
const inter = Noto_Sans_Arabic({ subsets: ['arabic'] })

export default function Home() {
    return (
        <main
            className={` ${inter.className} relative bg-darkergold text-slate-900 flex min-h-screen  flex-col  font-semibold`}
        >

           <div className={"flex w-full  flex-wrap p-4"}>
               <Link href={"/"}>
               <Image className={"mix-blend-multiply bg-cover aspect-auto"} src={"/logo.png"} height={150} width={200}   alt={""}/>
               </Link>
                <h1 className={"flex-grow  flex items-center justify-center text-2xl text-black font-bold"}>About Us</h1>

           </div>

            <div className={" w-3/4 flex flex-col mx-auto my-auto  p-4 py-8 "}>
                <div className={"h-full"}>
                <div className={" flex flex-col justify-around  space-y-4 bg-gold/50 rounded relative py-8 w-full"} >
                    <p className={"text-black text-xl  lg:text-2xl font-bold  px-4 "} dir={"rtl"}>أهلاً وسهلاً بكم :ً</p>
                    <p className={"text-black text-xl  lg:text-2xl font-bold  px-4 "} dir={"rtl"}>مكتبة  متخصصة للكتب والأبحاث حول الفن والثقافة </p>
                    <p className={"text-black text-xl  lg:text-2xl font-bold  px-4 "} dir={"rtl"}>مبادرة لتعزيز المعرفة ودعم المبدعين والباحثين من خلال الإطلاع المعرفي لكتب </p>
                    <p className={"text-black text-xl  lg:text-2xl font-bold  px-4 "} dir={"rtl"}>والأبحاث الفنية والدراسات النظرية في جميع سياقاتهم الإبداع .</p>




                </div>
                <div className={"pt-8  flex flex-wrap justify-center lg:justify-start space-x-2"}>
                    <span>Contact Us</span>
                    {/*<Link href={"/contactUs"} ><button className={"rounded bg-gold border border-black   px-4"}>Here</button></Link>*/}
                    {/*<Link href={"/login"} ><button className={"rounded bg-gold border border-black   px-4"}>Sign Up</button></Link>*/}
                    <span className={"text-black text-xl  font-bold  px-4 "} dir={"rtl"}>للانضمام إلى المكتبة وأن تكون أحد أعضائها نرجو مراسلتنا وتقديم طلب </span>
                </div>
                </div>
            </div>

        </main>
    )
}
