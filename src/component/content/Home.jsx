import { Link } from "react-router-dom";
import Links from "./Link";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useCallback } from "react";
import About from "./About";
import Skill from "./Skill";
import Project from "./Project";
function Home() {
    const h1elem = useRef(null)
    const imgelem = useRef(null)
    const imgmove = useRef(null)
    useEffect(() => {
        const tl = gsap.timeline()
        gsap.to(h1elem.current, {
            y: 28,
            duration: 1
        })
        gsap.to(imgelem.current, {
            y: -30,
            delay: 0.2,
            duration: 1
        })
    }, [])
    useEffect(() => {
        var img = document.getElementById("imgmove")
        img.addEventListener("mousemove", (e) => {
            let con = document.getElementById("main")
            gsap.to(imgmove.current, {
                x: e.x - con.getBoundingClientRect().x - 240,
                y: e.y - con.getBoundingClientRect().y - 240,
                zIndex: 100,
                opacity: 1
            })
        })
    }, [imgmove])




    return (
        <>
            <div id="main" className=" relative  flex justify-center items-center h-[100vh] md:h-screen w-full bg-[url('https://images.unsplash.com/photo-1511649475669-e288648b2339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBvcnRmb2xpb3xlbnwwfHwwfHx8MA%3D%3D')] bg-cover ">
                <div id="imgmove" className="md:flex gap-x-20">
                    <div ref={imgmove} className="hidden md:block md:h-20 opacity-0" src="https://icons8.com/icon/63777/github" alt="" ><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
                        <linearGradient id="KpzH_ttTMIjq8dhx1zD2pa_52539_gr1" x1="30.999" x2="30.999" y1="16" y2="55.342" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#KpzH_ttTMIjq8dhx1zD2pa_52539_gr1)" d="M25.008,56.007c-0.003-0.368-0.006-1.962-0.009-3.454l-0.003-1.55 c-6.729,0.915-8.358-3.78-8.376-3.83c-0.934-2.368-2.211-3.045-2.266-3.073l-0.124-0.072c-0.463-0.316-1.691-1.157-1.342-2.263 c0.315-0.997,1.536-1.1,2.091-1.082c3.074,0.215,4.63,2.978,4.694,3.095c1.569,2.689,3.964,2.411,5.509,1.844 c0.144-0.688,0.367-1.32,0.659-1.878C20.885,42.865,15.27,40.229,15.27,30.64c0-2.633,0.82-4.96,2.441-6.929 c-0.362-1.206-0.774-3.666,0.446-6.765l0.174-0.442l0.452-0.144c0.416-0.137,2.688-0.624,7.359,2.433 c1.928-0.494,3.969-0.749,6.074-0.759c2.115,0.01,4.158,0.265,6.09,0.759c4.667-3.058,6.934-2.565,7.351-2.433l0.451,0.145 l0.174,0.44c1.225,3.098,0.813,5.559,0.451,6.766c1.618,1.963,2.438,4.291,2.438,6.929c0,9.591-5.621,12.219-10.588,13.087 c0.563,1.065,0.868,2.402,0.868,3.878c0,1.683-0.007,7.204-0.015,8.402l-2-0.014c0.008-1.196,0.015-6.708,0.015-8.389 c0-2.442-0.943-3.522-1.35-3.874l-1.73-1.497l2.274-0.253c5.205-0.578,10.525-2.379,10.525-11.341c0-2.33-0.777-4.361-2.31-6.036 l-0.43-0.469l0.242-0.587c0.166-0.401,0.894-2.442-0.043-5.291c-0.758,0.045-2.568,0.402-5.584,2.447l-0.384,0.259l-0.445-0.123 c-1.863-0.518-3.938-0.796-6.001-0.806c-2.052,0.01-4.124,0.288-5.984,0.806l-0.445,0.123l-0.383-0.259 c-3.019-2.044-4.833-2.404-5.594-2.449c-0.935,2.851-0.206,4.892-0.04,5.293l0.242,0.587l-0.429,0.469 c-1.536,1.681-2.314,3.712-2.314,6.036c0,8.958,5.31,10.77,10.504,11.361l2.252,0.256l-1.708,1.49 c-0.372,0.325-1.03,1.112-1.254,2.727l-0.075,0.549l-0.506,0.227c-1.321,0.592-5.839,2.162-8.548-2.485 c-0.015-0.025-0.544-0.945-1.502-1.557c0.646,0.639,1.433,1.673,2.068,3.287c0.066,0.19,1.357,3.622,7.28,2.339l1.206-0.262 l0.012,3.978c0.003,1.487,0.006,3.076,0.009,3.444L25.008,56.007z"></path><linearGradient id="KpzH_ttTMIjq8dhx1zD2pb_52539_gr2" x1="32" x2="32" y1="5" y2="59.167" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#KpzH_ttTMIjq8dhx1zD2pb_52539_gr2)" d="M32,58C17.663,58,6,46.337,6,32S17.663,6,32,6s26,11.663,26,26S46.337,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"></path>
                    </svg></div>
                    <img ref={imgelem} className="h-56  mt-24 md:m-auto md:h-80  rounded-full left-20  " src="https://img.freepik.com/premium-vector/man-wearing-spect-working-laptop_579367-106.jpg?w=360" alt="" />
                    <div className="p-5">
                        <h1 ref={h1elem} className="text-7xl md:animate-pulse font-extrabold bg-gradient-to-r from-gray-800  via-blue-800 to-black bg-clip-text text-transparent ">Hi,I'm  <br /> &nbsp;&nbsp;&nbsp;&nbsp;Akash Yadav
                        </h1>
                        <p className=" mt-4  inline-block p-2 rounded-md text-2xl">Fronted Devloper || Ui & Ux Design</p>
                        <br /><br />


                    </div>
                </div>
                <Links />
            </div>
            <About />
            <Skill />
            <Project />


        </>

    )

}
export default Home;