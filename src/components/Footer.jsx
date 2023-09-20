

import Link from 'next/link';
import {FaInstagram} from "react-icons/fa";
import {FaEnvelope, FaTwitter} from "react-icons/fa6";
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="flex items-center justify-center space-x-2 px-4">
            © {currentYear} Nasaq Library All rights reserved.

            <Link href="https://instagram.com/nasaq_library?igshid=NGVhN2U2NjQ0Yg==">
                    <FaInstagram  size={"2.5em"} className={"px-2"} />

            </Link>
            <Link href="https://twitter.com/nasaqlibrary">
                    <FaTwitter  size={"2.5em"} className={"px-2"} />

            </Link>
            <Link href={"mailto:info@nasaqlibrary.org"}><FaEnvelope size={"2.5em"} className={"px-2"}/></Link>
        </div>
    );
}
