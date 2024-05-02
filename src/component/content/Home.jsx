import { Link } from "react-router-dom";
import Links from "./Link";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useCallback } from "react";
import About from "./About";
import Skill from "./Skill";
import Project from "./Project";
function Home() {
    const h1elem=useRef(null)
    const imgelem=useRef(null)
    const imgmove=useRef(null)
    useEffect(() => {
        const tl=gsap.timeline()
        gsap.to(h1elem.current,{
            y:28,
            duration:1
        })
        gsap.to(imgelem.current,{
            y:-30,
            delay:0.2,
            duration:1
        })
    }, [])
    useEffect(() => {
        var img=document.getElementById("imgmove")
        img.addEventListener("mousemove",(e)=>{
            let con=document.getElementById("main")
            gsap.to(imgmove.current,{
                x:e.x -con.getBoundingClientRect().x -240,
                y:e.y -con.getBoundingClientRect().y -240,
                zIndex:100,
                opacity:1
            })
        })
    }, [imgmove])
    
    
    

    return (
        <>
            <div id="main" className=" relative  flex justify-center items-center h-[100vh] md:h-screen w-full bg-[url('https://images.unsplash.com/photo-1511649475669-e288648b2339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBvcnRmb2xpb3xlbnwwfHwwfHx8MA%3D%3D')] bg-cover ">
                <div id="imgmove" className="md:flex gap-x-20">
                    <img ref={imgmove} className="hidden md:block md:h-20 opacity-0"  src="src/component/photos/icons8-github-64.png" alt="" />
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
            <About/>
            <Skill/>
            <Project/>


        </>

    )

}
export default Home;