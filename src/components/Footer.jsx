

import Link from 'next/link';
import {FaInstagram} from "react-icons/fa";
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="flex items-center justify-center space-x-2">
            © {currentYear} Nasaq Library All rights reserved.

            <Link href="https://instagram.com/nasaq_library?igshid=NGVhN2U2NjQ0Yg==">
                    <FaInstagram  size={"2.5em"} className={"px-2"} />

            </Link>
        </div>
    );
}
