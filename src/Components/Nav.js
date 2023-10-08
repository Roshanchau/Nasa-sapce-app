import { Link } from "react-scroll";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Nav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const content = <>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 ">
            <ul className="text-center text-xl p-20">
                <Link spy={true} smooth={true} to="home">
                    <li className="b=my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</li>
                </Link>
                <Link spy={true} smooth={true} to="about">
                    <li className="b=my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">About</li>
                </Link>
                <Link spy={true} smooth={true} to="navigate">
                    <li className="b=my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Navigate</li>
                </Link>
                <Link spy={true} smooth={true} to="donation">
                    <li className="b=my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Donation</li>
                </Link>
                <Link spy={true} smooth={true} to="login">
                    <li className="b=my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Log In</li>
                </Link>
            </ul>
        </div>
    </>
    return (
        <div>
            <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
                <div className="flex items-center flex-1">
                    <span className="text-3xl font-bold ">Logo</span>
                </div>
                <div className="lg:flex md:flex lg:flex-1 items center justify-end font-normal hidden ">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px]">
                            <Link spy={true} smooth={true} to="home">
                                <li className="hover:text-fuschia-600 transition border-b-2 border-slate-900 hover:border-orange-600 cursor-pointer ">Home</li>
                            </Link>
                            <Link spy={true} smooth={true} to="about">
                                <li className="hover:text-fuschia-600 transition border-b-2 border-slate-900 hover:border-orange-600 cursor-pointer ">About</li>
                            </Link>
                            <Link spy={true} smooth={true} to="navigate">
                                <li className="hover:text-fuschia-600 transition border-b-2 border-slate-900 hover:border-orange-600 cursor-pointer ">Navigate</li>
                            </Link>
                            <Link spy={true} smooth={true} to="donation">
                                <li className="hover:text-fuschia-600 transition border-b-2 border-slate-900 hover:border-orange-600 cursor-pointer ">Donation</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>
                <button className="block sm:hidden transition" onClick={handleClick}>
                    {click ? <FaTimes /> : <CiMenuFries />}
                </button>
            </div>
        </div>
    );
};

export default Nav;
