import React from 'react'
import Links from './Link';

function Skill() {
  return (<>
    <div className=" relative flex justify-center items-center gap-12 h-screen w-full 
    bg-[url('src/component/photos/leone-venter-VieM9BdZKFo-unsplash.jpg')] bg-cover ">
<div className=' h-1/2 w-1/2 flex  flex-wrap gap-5'>
  
<div ><h1 className='absolute top-28 text-2xl font-bold'>My Skill:</h1><img  className="h-24  shadow-lg " src="src/component/photos/icons8-html-logo-64.png" alt="html" /> Html</div>
<div><img  className="h-24 shadow-lg" src="src/component/photos/icons8-css-logo-48.png" alt="css" />Css</div>
<div><img  className="h-24 shadow-lg" src="src/component/photos/icons8-javascript-48.png" alt="javascript" />Javascript</div>
<div><img  className="h-24 shadow-lg" src="src/component/photos/icons8-tailwind-css-100.png" alt="tailwind css" />Tailwind Css</div>
<div><img  className="h-24 shadow-lg" src="src/component/photos/icons8-react-native-64.png" alt="react" />React</div>
<div><img  className="h-24 shadow-lg" src="src/component/photos/icons8-github-64.png" alt="github" />Github</div>
</div>
<Links/>
    </div>
  </>

  )
}

export default Skill;