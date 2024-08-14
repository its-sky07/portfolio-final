import React from 'react';
import { Link } from 'react-router-dom';

function Project() {
  const projects = [
    {
      title: 'Sky Gallery',
      imageUrl: 'https://res.cloudinary.com/dm2c41gia/image/upload/v1723447559/p29ql3xsfk8qw7otjt04.png',
      description: 'Using React, Tailwind, Express, MongoDB',
      tags: ['#Auth', '#api fetching', '#responsive DESIGN'],
      githubLink: 'https://github.com/its-sky07/skygallery',
      liveLink: 'https://slygallery.vercel.app',
    },
    {
      title: 'SkyShop',
      imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHBvcnRmb2xpb3xlbnwwfHwwfHx8MA%3D%3D',
      description: 'Using React, Tailwind CSS, Firebase',
      tags: ['#Authentication', '#api fetching', '#responsive DESIGN'],
      githubLink: 'https://github.com/its-sky07/skyshop',
      liveLink: 'https://theskyshop.netlify.app',
    },
    {
      title: 'Lazarev Agency',
      imageUrl: 'https://images.unsplash.com/photo-1545665277-5937489579f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvfGVufDB8fDB8fHww',
      description: 'Using HTML, CSS, JS And GSAP',
      tags: ['#Animated Website', '#Responsive', '#GSAP Animation'],
      githubLink: 'https://github.com/its-sky07/lazarev-agency-clone',
      liveLink: 'https://skylazarev.netlify.app',
    },
    {
      title: 'Github Searcher',
      imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHBvcnRmb2xpb3xlbnwwfHwwfHx8MA%3D%3D',
      description: 'Using HTML, CSS, JAVASCRIPT',
      tags: ['#github', '#api fetching', '#responsive DESIGN'],
      githubLink: 'https://github.com/its-sky07/github-api-fatching-',
      liveLink: 'https://skygithub.netlify.app',
    },
   
  ];

  return (
    <div className="md:flex flex-wrap justify-center w-full mt-32 p-10 gap-4">
      <h1 className='absolute top-0 left-5 text-2xl font-bold'>Projects:</h1>
      {projects.map((project, index) => (
        <div key={index} className="w-[300px] rounded-md border">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-[200px] w-full rounded-t-md object-cover"
          />
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">
              {project.title}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 ml-2"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </h1>
            <p className="mt-3 text-sm text-gray-600">{project.description}</p>
            <div className="mt-4">
              {project.tags.map((tag, i) => (
                <span key={i} className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  {tag}
                </span>
              ))}
            </div>
            <Link
              to={project.githubLink}
              target="_blank"
              type="button"
              className="mt-4 w-full rounded-md bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Click to open code on Github
            </Link>
            <br /><br />
            <Link
              to={project.liveLink}
              target="_blank"
              type="button"
              className="mt-4 w-full rounded-md bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Click to try
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
