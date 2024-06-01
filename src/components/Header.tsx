import { useEffect, useState, FormEvent, ChangeEvent } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import userIcon from '../assets/user.png';
import { IoSearchOutline } from "react-icons/io5";
import { navigation } from '../contants/navigation';
import { NavigationItem } from '../types/types';

const Header: React.FC = () => {
    const location = useLocation();
    const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ");
    const [searchInput, setSearchInput] = useState<string>(removeSpace || '');
    const navigate = useNavigate();

    useEffect(() => {
        if (searchInput) {
            navigate(`/search?q=${searchInput}`);
        }
    }, [searchInput, navigate]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    return (
        <header className='fixed top-0 w-full h-16 bg-black bg-opacity-50 z-40'>
            <div className='container mx-auto px-3 flex items-center h-full'>
                <Link to="/">
                <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
        Vodo.TV
    </h1>
                </Link>

                <nav className='hidden lg:flex items-center gap-1 ml-5'>
                    {navigation.map((nav: NavigationItem, index: number) => (
                        <div key={nav.label + "header" + index}>
                            <NavLink to={nav.href} className={({ isActive }) => `px-2 hover:text-neutral-100 ${isActive ? "text-neutral-100" : ""}`}>
                                {nav.label}
                            </NavLink>
                        </div>
                    ))}
                </nav>

                <div className='ml-auto flex items-center gap-5'>
                    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder='Search here...'
                            className='bg-transparent px-4 py-1 outline-none border-none hidden lg:block'
                            onChange={handleInputChange}
                            value={searchInput}
                        />
                        <button type="submit" className='text-2xl text-white'>
                            <IoSearchOutline />
                        </button>
                    </form>
                    <div className='w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all'>
                        <img
                            src={userIcon}
                            alt='user'
                            className='w-full h-full'
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
