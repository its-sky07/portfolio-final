import React from 'react'
import { Link } from 'react-router-dom'
import Links from './Link'

function Project() {
  return (
    <>
      <div className=" md:flex relative sm:flex-wrap justify-center  w-full mt-32 p-10 gap-4 md:mt-480">
        <h1 className='absolute  top-0 left-5 text-2xl font-bold'>Project:</h1>

        <div class="w-80 rounded-md border">
          <img
            src="https://images.unsplash.com/photo-1545665277-5937489579f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvfGVufDB8fDB8fHww"
            alt="Laptop"
            class="h-[200px] w-full rounded-t-md object-cover"
          />
          <div class="p-4">
            <h1 class="inline-flex items-center text-lg font-semibold">
              Lazarev Agency {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-4 w-4"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </h1>
            <p class="mt-3 text-sm text-gray-600">
              Using HTML, CSS, JS And GSAP
            </p>
            <div class="mt-4">
              <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Animated Website
              </span>
              <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Responsive
              </span>
              <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #GSAP Animation
              </span>
            </div>
            <Link
              to="https://github.com/its-sky07/lazarev-agency-clone"
              type="button"
              class="mt-4 w-full rounded-md bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Click to open code on Github
            </Link><br /><br />
            <Link
              to="https://skylazarev.netlify.app"
              type="button"
              class="mt-4 w-full rounded-md bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Click to try
            </Link>
          </div>

        </div><br />
        <div class="w-[300px] rounded-md border">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHBvcnRmb2xpb3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Laptop"
            class="h-[200px] w-full rounded-t-md object-cover"
          />
          <div class="p-4">
            <h1 class="inline-flex items-center text-lg font-semibold">
              Netflix Clone {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-4 w-4"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </h1>
            <p class="mt-3 text-sm text-gray-600">
              using HTML And CSS
            </p>
            <div class="mt-4">
              <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Netflix
              </span>
              <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #responisve design
              </span>
              <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #advanced css
              </span>
            </div>
            <Link
              to="https://github.com/its-sky07/netflix"
              type="button"
              class="mt-4 w-full rounded-md bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Click to open code on Github
            </Link>
          </div>
        </div>
        <br />
        <div class="w-[300px] rounded-md border">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHBvcnRmb2xpb3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Laptop"
            class="h-[200px] w-full rounded-t-md object-cover"
          />
          <div class="p-4">
            <h1 class="inline-flex items-center text-lg font-semibold">
              Github searcher {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-4 w-4"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </h1>
            <p class="mt-3 text-sm text-gray-600">
              Using HTML, CSS, JAVASCRIPT
            </p>
            <div class="mt-4">
              <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #github
              </span>
              <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #api fetching
              </span>
              <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #responisve DESIGN
              </span>
            </div>
            <Link
              to="https://github.com/its-sky07/github-api-fatching-"
              type="button"
              class="mt-4 w-full rounded-md bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Click to open code on Github
            </Link><br /><br />
            <Link
              to="https://skygithub.netlify.app"
              type="button"
              class="mt-4 w-full rounded-md bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Click to try
            </Link>
          </div>

        </div>

        <div class="w-[300px] rounded-md border">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHBvcnRmb2xpb3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Laptop"
            class="h-[200px] w-full rounded-t-md object-cover"
          />
          <div class="p-4">
            <h1 class="inline-flex items-center text-lg font-semibold">
              E-commerce {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-4 w-4"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </h1>
            <p class="mt-3 text-sm text-gray-600">
              Using React, tailwind css, Firebase
            </p>
            <div class="mt-4">
              <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Authentication
              </span>
              <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #api fetching
              </span>
              <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #responisve DESIGN
              </span>
            </div>
            <Link
              to="https://github.com/its-sky07/skyshop"
              type="button"
              class="mt-4 w-full rounded-md bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Click to open code on Github
            </Link><br /><br />
            <Link
              to="https://sky-shop.netlify.app"
              type="button"
              class="mt-4 w-full rounded-md bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Click to try
            </Link>
          </div>

        </div>



      </div>




    </>

  )
}

export default Project
