import Image from 'next/image'
import { Inter } from 'next/font/google'
import LoginForm from "@/components/LoginForm";
import Link from "next/link";
import React, {useState} from "react";
import NavBar from "@/components/NavBar";
import axios from "axios";
import api from "@/axiosHandler";
import {useRouter} from "next/router";

const inter = Inter({ subsets: ['latin'] })

    export default function Home() {
        const [formData, setFormData] = useState({
            email: '',
            name: '',
            message: ''
        });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        };

        const router = useRouter();
        const handleSubmit = async () => {
            try {
                const response = await api.post('/contactUs/', formData);
                if (response.data.status === 'success') {
                    alert('Your message has been sent successfully!');

                }
            } catch (error) {
                console.error("There was an error sending your message.", error);
                alert('There was an error sending your message. Please try again.');
            }
        };

        return (
        <div className={"bg-gold text-slate-700"}>
        <main className={`bg-gold text-slate-900 flex flex-col min-h-screen p-8 items-center ${inter.className}`}>
            <Link href={"/"} className={"absolute top-8 left-8 h-[130px] w-[280px]  "}>
                <Image className={"mix-blend-multiply bg-cover "} src={"/logo.png"} fill={true}   alt={""}/>
            </Link>

            <h1 className="text-2xl text-black font-bold mb-8">Contact Us</h1>

            <div className="my-auto w-3/4 bg-darkergold p-8 flex flex-col space-y-8">
                <div className="grid grid-cols-5 gap-8">
                    <input
                        className="py-2 px-4 col-span-3 bg-gold"
                        type="email"
                        dir="rtl"
                        placeholder="إيميلك"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        className="py-2 px-4 col-span-2 bg-gold"
                        type="text"
                        dir={"rtl"}
                        placeholder="أسمك الكريم"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <textarea
                    className="px-4 bg-gold w-full h-64"
                    placeholder="رسالتك"
                    dir={"rtl"}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                />
                <button className="bg-black/50 text-white px-10 py-2 w-fit" dir={"rtl"} onClick={handleSubmit}>أرسل</button>
            </div>
        </main>
        </div>
    );
}
