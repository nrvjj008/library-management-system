import Image from 'next/image'
import { Inter } from 'next/font/google'
import LoginForm from "@/components/LoginForm";
import Link from "next/link";


export default function Home() {
    return (
        <main
            className={`relative bg-gold text-slate-900 flex min-h-screen p-8 flex-col justify-center items-center font-semibold`}
        >
            <div className={"h-[150px] w-[300px]  absolute top-4 left-4"}>
                <Image className={"mix-blend-multiply bg-cover aspect-auto"} src={"/logo.png"} fill={true}   alt={""}/>
            </div>
            <div className={"absolute top-24 w-fit mx-auto left-1/2 -translate-x-1/2"}>
                <h1 className={"text-2xl text-black font-bold"}>About Us</h1>

            </div>

            <div className={" w-3/4 flex flex-col   p-4 mb-[50px]  mt-[200px]"}>
                <div className={"h-full"}>
                <div className={"flex flex-col justify-between items-end space-y-8 relative h-[400px] w-full"}>
                    {/*<p className={"text-slate-900 text-2xl font-bold flex justify-end px-8 text-end"}>أهلاً وسهلاً بكم :ً</p>*/}
                    {/*<p className={"text-slate-900 text-2xl font-bold flex justify-end px-8 text-end"}>متخصصة للكتب والأبحاث حول الفن والثقافة   مكتبة</p>*/}
                    {/*<p className={"text-slate-900 text-2xl font-bold flex justify-end px-8 text-end"}>مرحباً :*/}
                    {/*    مكتبة متخصصة بالكتب والأبحاث في الفن والثقافة*/}
                    {/*    مبادرة لتعزيز المعرفة ودعم المبدعين والباحثين من خلال الوصول المعرفي إلى الكتب والأبحاث*/}
                    {/*    دراسات فنية ونظرية في كافة سياقات الإبداع.</p>*/}

                    {/*<p>    نحن نشارك المعرفة ونجعل الحياة جميلةً</p>*/}
                    <Image fill={true} src={"/aboutUs.png"} alt={""} className={"mix-blend-multiply object-fill"}/>

                </div>
                <div className={"pt-4  flex space-x-2"}>
                    <span>Contact Us</span>
                    <Link href={"/contactUs"} ><button className={"rounded bg-gold border border-black   px-4"}>Here</button></Link>
                    <Link href={"/login"} ><button className={"rounded bg-gold border border-black   px-4"}>Sign Up</button></Link>
                    <span>للانضمام إلى المكتبة وأن تكون أحد أعضائها نرجو مراسلتنا وتقديم طلب </span>
                </div>
                </div>
            </div>

        </main>
    )
}
