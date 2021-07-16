import "../pages/ContactPage/contact.css"
function ContactMeComponent() {
  return (
    <>
      <div class="container md:py-20 mx-auto ">
        <div class="grid grid-cols-1 md:grid-cols-2 h-screen">
          <div class="max-h-96 md:h-screen">
            <img class="w-screen h-screen object-cover object-top" src={"https://firebasestorage.googleapis.com/v0/b/react-portfolio-7e81b.appspot.com/o/juniperPass.jpg?alt=media&token=0791aeeb-c0d2-497d-9874-75fd7b25718e"} alt="" />
          </div>
          <div className="flex flex-col gap-3 bg-gray-100 p-4 grid justify-center pt-0 md:pt-44 text-center">           
              <div>
                <p class="text-3xl">Take a look around.</p>
                <p class="px-2 font-semibold ">I'd love to hear from you.</p>
                <p className="mt-10 text-2xl font-semibold ">
                  Here are some of my links
                </p>
              </div>
              <a href="https://github.com/iigonzoii" rel="noreferrer" target="_blank" className="flex items-center justify-center hover:text-blue-200 hover:bg-gray-400 p-2 rounded">
                <svg fill="currentColor" className="w-6 h-6 m-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Github
              </a>
              <a href="https://www.linkedin.com/in/gonzalez418/" rel="noreferrer" target="_blank" className="flex items-center justify-center hover:text-blue-200 hover:bg-gray-400 p-2 rounded">
                <svg fill="currentColor" className="w-6 h-6 m-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                  <path d="M 21.800781 0 L 2.199219 0 C 1 0 0 1 0 2.199219 L 0 21.800781 C 0 23 1 24 2.199219 24 L 21.800781 24 C 23 24 24 23 24 21.800781 L 24 2.199219 C 24 1 23 0 21.800781 0 Z M 7 20 L 3 20 L 3 9 L 7 9 Z M 5 7.699219 C 3.800781 7.699219 3 6.898438 3 5.898438 C 3 4.800781 3.800781 4 5 4 C 6.199219 4 7 4.800781 7 5.800781 C 7 6.898438 6.199219 7.699219 5 7.699219 Z M 21 20 L 17 20 L 17 14 C 17 12.398438 15.898438 12 15.601563 12 C 15.300781 12 14 12.199219 14 14 C 14 14.199219 14 20 14 20 L 10 20 L 10 9 L 14 9 L 14 10.601563 C 14.601563 9.699219 15.601563 9 17.5 9 C 19.398438 9 21 10.5 21 14 Z" />
                </svg>
                Linkedin
              </a>
              <a href="https://docs.google.com/document/d/1QwG0Qcn2CDvBcTuAvHeYNLwq-zLPtA53K0RXMmcVwm4/export?format=pdf" className="flex items-center justify-center hover:text-blue-200 hover:bg-gray-400 p-2 rounded">
                <div className="m-2">
                  <i className="fas fa-file-pdf fa-2x"></i>
                </div>
              résumé Download
              </a>
            <button class="bg-gray-300 rounded-md py-3 px-7 mt-6 hover:bg-gray-400 hover:text-blue-200"><a href="https://github.com/iigonzoii/react-portfolio" rel="noreferrer" target="_blank" >Take a look at how I built this website</a></button>
          </div>
        </div>
      </div>
    </>


  )
}

export default ContactMeComponent;