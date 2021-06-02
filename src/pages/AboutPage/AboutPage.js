import "./about.css"


function AboutPage() {
    return (
      <div className="about grid grid-cols-3 gap-4 md:grid-cols-3 sm:grid-cols-1 ">
      <div className ="m-1 ml-5">
        <img src={"https://firebasestorage.googleapis.com/v0/b/react-portfolio-7e81b.appspot.com/o/alpinerock.jpeg?alt=media&token=bf476c1b-0c60-4cd8-b58e-0ec2f8b0a187"}
        alt={"me sitting on a rock"} />
        
      </div>
      <div className="col-span-2  mr-5 ">
        
      Originally from the midwest just outside of Chicago, I moved to Denver in 2016. I am a Front-end web developer using life's struggles and accomplishments as fuel to drive an old school work ethic paired with a new school mindset into the next chapter of my life. I love solving problems and making things aesthetically pleasing. I would love to work on user interfaces and design to provide people with seamless and responsive interactions upon visiting a website I’ve built. I love css, generating and displaying html with Javascript, and seeing a blank screen come to life. I also love learning how to build my own components, I am learning to pick apart styling frameworks to drive my root knowledge of css even deeper. I’ve come to learn that starting small allows you to build big if you stay the course. I am in the process of earning a certificate in full stack development provided by the university of denver. Skills I am actively using to create applications and by the end of this bootcamp will be efficient in JavaScript, CSS, HTML, React.js, Node.js, Object Oriented Programming, Web APIs, and MongoDB. I can’t wait to add the discipline I’ve cultivated in my life to a new career that excites me and makes me happy. I see value in having me around in the simple, but often overlooked, ways. I am reliable, punctual, communicative, forward spoken, and do my best to lead by example of all aspects of my life. Also, I really love riding and working on my motorcycle as well as hanging out with my 11 year old cat Raja :).
      <br/>
      Most of my career background was in sales and contsruction. I'm extremely excited to move into a different
            field. I hope to work remotely one day and I would love to travel abroad. Take a look at my <a href="
            https://github.com/iigonzoii" target="_blank" className="text-blue-500">Github</a>, download my  <a href="
            https://docs.google.com/document/d/1QwG0Qcn2CDvBcTuAvHeYNLwq-zLPtA53K0RXMmcVwm4/export?format=pdf" target="_blank" className="text-blue-500">Resume</a>,  and find me on  <a href="
            https://www.linkedin.com/in/gonzalez418/" target="_blank" className="text-blue-500">Linkedin!</a>
      </div>
      
      </div>
    );
  }
  
  export default AboutPage;
  