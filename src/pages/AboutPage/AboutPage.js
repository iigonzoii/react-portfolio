import Footer from "../../components/Footer"


function AboutPage() {
    return (

      <>
      <div class="container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div class="max-h-96 md:h-screen">
        <img class="w-screen h-screen object-cover object-top" src={"https://firebasestorage.googleapis.com/v0/b/react-portfolio-7e81b.appspot.com/o/alpinerockoriginal.jpeg?alt=media&token=2f2bbd32-0030-42a1-8bbe-d3a82c0a0ff6"} alt=""/>
      </div>
      <div class="flex bg-gray-100 p-10">
        <div class="mb-auto mt-auto max-w-lg">
          <h1 class="text-3xl uppercase">Aaron Gonzalez</h1>
          <p class="font-semibold mb-5">Web Developer</p>
      
          <p>Originally from the midwest just outside of Chicago, I moved to Denver in 2016. I am a Front-end web developer using life's struggles and accomplishments as fuel to drive an old school work ethic paired with a new school mindset into the next chapter of my life. I love solving problems and making things aesthetically pleasing. I really enjoy working with Reactjs and aim to make my code as dynamic as possible. I recently earned a certificate in full stack development provided by the university of denver. Skills I am actively using to create applications and am efficient in are React, JavaScript, CSS, HTML, Node.js, Object Oriented Programming, Web APIs, and MongoDB. I can’t wait to add the discipline I’ve cultivated in my life to a new career that excites me and makes me happy. I see value in having me around in the simple, but often overlooked, ways. I am reliable, punctual, communicative, forward spoken, and do my best to lead by example in all aspects of my life. Also, I really love riding and working on my motorcycle as well as hanging out with my 11 year old cat Raja :).</p>
          <button class="bg-black rounded-md py-3 px-7 mt-6 text-white"><a href="mailto:a.gonzalez418@gmail.com">Email Me</a></button>
        </div>
      </div>
    </div>
    
  </div>
      </>
      
      
    );
    }
  
  export default AboutPage;
  