

import Navlink from "./Navlink";
import { Link } from "react-router-dom";
import { useState } from "react";



function Nav() {
    const [isopen, setisopen] = useState(false)
    const menuHabdler = () => {
        setisopen(!isopen)



    }
    return (
        <>
            <nav className="w-full h-auto flex justify-between px-10  py-1 absolute top-0  text-black  z-10 text-center items-center " >
                {/* <h2 className="text-4xl font-extrabold text-blue-700 hover:text-black" >SKY</h2>
                 */}
                <img className="h-24 mix-blend-darken " src="https://logos.textgiraffe.com/logos/logo-name/Akash-designstyle-kiddo-m.png" alt="" />
                <ul className="hidden md:flex gap-20 text-lg absolute font-bold right-12">
                    <Navlink />
                </ul>
                <div>
                    <button
                        onClick={menuHabdler}
                        className="md:hidden bg-slate-500 p-2 rounded-full animate-bounce hover:bg-blue-500">{(isopen) ? "X" :
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>}</button>
                    {isopen && <div className="list-none bg-white w-full sm:w-56 p-8 flex flex-col font-bold gap-1 right-0 absolute rounded-md mt-3"><Navlink /></div>
                    }
                   

                </div>
                <Link className=" p-2 bg-blue-500  hover:bg-slate-700  hover:text-white rotate-90 -right-7 mt-96  fixed"  to="/Contact" >Contact me</Link>



            </nav>

        </>

    )

}
export default Nav;