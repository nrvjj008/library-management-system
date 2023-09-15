import Link from "next/link";
import {useEffect, useState} from 'react';
import {FaSearch, FaUserAlt} from "react-icons/fa";
import {FaAngleDown} from "react-icons/fa6";
import api from "@/axiosHandler";
import {useRouter} from "next/router";

export default function NavBar({ onSearch, onCategoryChange }) {

    const [categoryId, setCategoryId] = useState(null);
    const [categories, setCategories] = useState([]);  // Now it will hold both IDs and Titles

    const [searchText, setSearchText] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isUserDropdownVisible, setUserDropdownVisible] = useState(false);
    const [searchType, setSearchType] = useState('book');  // Default to 'book'

    const router = useRouter();
    useEffect(() => {
            api.get(`/categories/`).then(response => {
                setCategories(response.data);
            }).catch(error => {
                console.error(error);
            });
    }, []);

    const handleCategorySelect = (id, title) => {
        setCategoryId(id);
        setSelectedCategory(title);
        setDropdownVisible(false);
        onCategoryChange && onCategoryChange(id);  // Propagate the selected category ID upwards
    }

    const handleLogout = () => {
        localStorage.removeItem('access_token');  // Clear the token
        router.push('/');  // Redirect to root (or login page)
    };


// Then, within the dropdown menu, modify the category link:


    const handleSearch = () => {
        router.push(`/search?query=${searchText}&type=${searchType}`);
    }



    return (
        <nav className="flex justify-between items-center px-4 shadow-sm">
            <div className="flex items-center">
                <img src="/logo.png" alt="logo" className="w-[150px] py-4 object-cover mix-blend-multiply mr-2" />
            </div>
            <ul className="flex space-x-12 font-bold items-center">
                {/* ... other nav links ... */}
                <li>
                    <Link href="/home">Home</Link>
                </li>
                <li className="relative ">
                    <button
                        onMouseEnter={() => setDropdownVisible(true)}
                        onMouseLeave={() => setDropdownVisible(false)} // New: hide on mouse leave
                        className={"flex items-center justify-center space-x-1"}
                    >
                        <span>Categories</span>
                        <FaAngleDown size={"1rem "} className={"font-bold"}/>
                    </button>
                    {isDropdownVisible && (
                        <ul className="absolute top-6  mt-0 z-10 w-[300px]  bg-white border border-gray-300 rounded shadow-lg"
                            onMouseEnter={() => setDropdownVisible(true)} // New: remain visible on hover
                            onMouseLeave={() => setDropdownVisible(false)} // New: hide on mouse leave
                        >
                            {categories.map(category => (
                                <li key={category.id} className="px-4 py-2 hover:bg-gray-200">
                                    <Link href={`/categories/${category.id}`} className={"w-[300px]"}>
                                        {category.name}
                                    </Link>
                                </li>
                            ))}

                        </ul>
                    )}
                </li>
                {/* ... other nav links ... */}

                <li>
                    <Link href="/favouriteBooks">Favourite Books</Link>
                </li>
                {/*<li>*/}
                {/*    <Link href="/research">Research & Studies</Link>*/}
                {/*</li>*/}


                <li className="relative flex items-center space-x-2 p-4">

                    <FaUserAlt
                        onMouseEnter={() => setUserDropdownVisible(true)}
                        onMouseLeave={() => setUserDropdownVisible(false)} // New: hide on mouse leave

                    />
                    <FaAngleDown
                        onMouseEnter={() => setUserDropdownVisible(true)}
                        onMouseLeave={() => setUserDropdownVisible(false)} // New: hide on mouse leave
                    />
                    {isUserDropdownVisible && (
                        <div className="absolute left-0 top-8 w-[100px] bg-white border border-gray-300 rounded shadow-lg"
                             onMouseEnter={() => setUserDropdownVisible(true)} // New: remain visible on hover
                             onMouseLeave={() => setUserDropdownVisible(false)} // New: hide on mouse leave
                        >
                            <ul>
                                <li className="px-4 py-2 hover:bg-gray-200">
                                    <a onClick={handleLogout} href="#">Log out</a> {/* Modified this link */}
                                </li>
                            </ul>
                        </div>
                    )}
                </li>
            </ul>
            <div className="flex items-center space-x-2 border  border-slate-500 rounded">
                <select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                    className="border-r border-slate-500  p-2 bg-gold"
                >
                    <option value="book">Book</option>
                    <option value="author">Author</option>
                    <option value="publisher">Publisher</option>
                </select>

                <input
                    type="text"
                    placeholder="Search..."
                    className="p-2 bg-gold "
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button className=" border rounded  p-2 flex justify-center items-center" onClick={handleSearch}>
                    <FaSearch className={"border-l border-slate-500 pl-2"} size={"1.5em"}/>
                </button>
            </div>
        </nav>
    )
};