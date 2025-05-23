import React from 'react'

const page = () => {
  return (
    <>
      <div className="bg-transparent text-blue-100 md:p-20 p-5 flex flex-col md:flex-row md:justify-around justify-center relative">
        <div className='h-full md:sticky top-0 about-box'>
          <h1 className='animate__animated animate__rubberBand text-6xl font-semibold mb-5'>About me...</h1>
          <div className='slideshow md:mb-0 mb-5'>
            <img src="me-animated-1.png" />
            <img src="me-animated-2.png" />
            <img src="me-animated-3.png" />
            <img src="me-animated-4.png" />
            <img src="me-animated-5.png" />
          </div>
        </div>
        <div>
          <div className="bg-slate-900 animate__animated animate__flipInX h-full md:h-75 md:w-120 w-full rounded-2xl mb-7 overflow-scroll text-blue-200 about-card-shadow">
            <h2 className='text-slate-900 text-4xl sticky top-0 text-center font-semibold p-2 bg-blue-200'>Introduction</h2>
            <ul className='text-lg p-4 mx-5 list-disc flex flex-col gap-5'>
              <li>I am a Full-stack web developer specialized in the MERN stack, with experience in building dynamic and scalable web applications.</li>
              <li>I'm passionate about backend and frontend development, API integration and performance optimization.</li>
              <li>I'm currently expanding knowledge in data science while leveraging strong mathematical skills</li>
              <li>I'm also familiar with basic ethical hacking and cybersecurity principles.</li>
            </ul>
          </div>
          <div className="bg-slate-900 animate__animated animate__flipInX h-full md:h-75 md:w-120 w-full rounded-2xl mb-7 overflow-scroll text-blue-200 about-card-shadow">
            <h2 className='text-slate-900 text-4xl sticky top-0 text-center font-semibold p-2 bg-blue-200'>Tech Stack & Tools</h2>
            <div className="p-4 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-5 place-items-center">
              {[
                { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
                { name: "Javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
                { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
                { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
                { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
                { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
                { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
                { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
                { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
                { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
                { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
                // { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
                // { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
                // { name: "", icon: "" },
                // { name: "", icon: "" },
                // { name: "", icon: "" },
              ].map((tech, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img src={tech.icon} alt={tech.name} className="w-16 h-16" />
                  <p className="mt-2 text-lg font-medium">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-900 animate__animated animate__flipInX h-full md:h-75 md:w-120 w-full rounded-2xl mb-7 md:overflow-hidden overflow-scroll text-blue-200 about-card-shadow">
            <h2 className='text-slate-900 text-4xl sticky top-0 text-center font-semibold p-2 bg-blue-200'>Education</h2>
            <ul className='text-lg p-4 mx-5 list-disc flex flex-col gap-5'>
              <li className='flex justify-between'>
                <div>
                  <h3 className='font-semibold text-2xl'>IIT Madras</h3>
                  <p className=''>BS in Data Science | 2024-28</p>
                </div>
                <img src="IITM_logo.png" className='w-15 h-15 rounded-full' />
              </li>
              <li className='flex justify-between'>
                <div>
                  <h3 className='font-semibold text-2xl'>IIT Roorkee</h3>
                  <p className=''>Basics of Ethical Hacking | 2024</p>
                </div>
                <img src="IITR_logo.png" className='w-15 h-15 rounded-full' />
              </li>
              <li className='flex justify-between'>
                <div>
                  <h3 className='font-semibold text-2xl'>Youtube</h3>
                  <p className=''>Web Development | 2024</p>
                </div>
                <img src="youtube.png" className='w-15 h-15 rounded-full' />
              </li>
            </ul>
          </div>
          <div className="bg-slate-900 animate__animated animate__flipInX h-full md:h-75 md:w-120 w-full rounded-2xl mb-7 overflow-scroll text-blue-200 about-card-shadow">
            <h2 className='text-slate-900 text-4xl sticky top-0 text-center font-semibold p-2 bg-blue-200'>Skills</h2>
            <ul className='text-lg p-4 mx-5 list-disc flex flex-col gap-5'>
              <li>Interactive UI/UX Design</li>
              <li>Search Engine Optimisation</li>
              <li>Data Structures and Algorithms</li>
              <li>Problem Solving</li>
              <li>Fast Learner & Adaptable</li>
              <li>Leadership</li>
              <li>Teamwork</li>
            </ul>
          </div>
        </div>
      </div >
    </>
  )
}

export default page
