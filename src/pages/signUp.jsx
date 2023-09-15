import Image from 'next/image';
import SignupForm from '@/components/SignupForm';  // Adjust the path accordingly
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Signup() {
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined' && localStorage.getItem('access_token') !== null) {
            router.push('/home');
        }
    }, []);

    return (
        <main className={`relative bg-gold text-slate-900 flex min-h-screen p-8 space-y-12 flex-col justify-center items-center`}>
            <div className={"flex w-full"}>
                <div className={"absolute top-8 left-8 h-[130px] w-[280px] "}>
                    <Image className={"mix-blend-multiply bg-contain "} src={"/logo.png"} fill={true} alt={""} />
                </div>
                <div className={"flex-grow flex justify-center pt-12 items-center"}>
                    <h1 className={"text-4xl text-black font-bold"}>Sign Up</h1>
                </div>
            </div>

            <div className={"w-1/3 px-12 rounded flex flex-col bg-darkergold p-8"}>
                <SignupForm />
            </div>
        </main>
    );
}
