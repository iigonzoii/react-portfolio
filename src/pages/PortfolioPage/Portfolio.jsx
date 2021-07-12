import PortfolioCard from "../../components/PortfolioCard"
import "./portfolio.css"

let portfolioArray = [
  {
    title: "Employee Directory",
    gitHub: "https://github.com/iigonzoii/EmployeeDirectory",
    deployedSite: "https://iigonzoii.github.io/EmployeeDirectory/",
    img: "https://firebasestorage.googleapis.com/v0/b/project-images-5c20b.appspot.com/o/reactDirScaled2.jpg?alt=media&token=e704d7ed-9068-481e-b409-e2fe44b3874f",
    description:
      "React App geared towards managment that allows the user to view nonsensitive information about their employees. You can filter names by typing or sort employees alphabetically ",
  },
  {
    title: "Weather Dashboard",
    gitHub: "https://github.com/iigonzoii/WeatherDashBoard",
    deployedSite: "https://iigonzoii.github.io/WeatherDashBoard/",
    img: "https://firebasestorage.googleapis.com/v0/b/project-images-5c20b.appspot.com/o/wdb3fb.jpg?alt=media&token=aeadc92a-972f-4203-9068-a24ef70602c2",
    description:
      "Use this application to find the current forecast and the upcoming fiveday forecast as well",
  },
  {
    title: "WorkDay Scheduler",
    gitHub: "https://github.com/iigonzoii/WorkDayScheduler",
    deployedSite: "https://iigonzoii.github.io/WorkDayScheduler/",
    img: "https://firebasestorage.googleapis.com/v0/b/project-images-5c20b.appspot.com/o/better%20copy.jpg?alt=media&token=0d96e8e2-a5d1-4446-a325-52624fef95d1",
    description:
      "Responsive scheduler that breaks down your work day hour blocks by color. Itemizing your meetings by past, present, and future",
  },
  {
    title: "Team Profile Generator",
    gitHub: "https://github.com/iigonzoii/TeamProfileGenerator",
    deployedSite:
      "https://drive.google.com/file/d/1RtkfeQF_KHjy0BkcvBe0SF9fTBpma_kL/view",
    img: "https://firebasestorage.googleapis.com/v0/b/project-images-5c20b.appspot.com/o/tpg2.jpg?alt=media&token=6caa525d-6722-4986-a309-1ce65924f375",
    description:
      "Command line application using Node.js to create team profiles for your business",
  },
  {
    title: "Belay Buddy",
    gitHub: "https://github.com/paxton44/belay-buddy",
    deployedSite:
      "https://drive.google.com/file/d/1ikJFGkNK2Xt7bPuYxJmJn6yohxJAw1Ht/view",
    img: "https://raw.githubusercontent.com/paxton44/belay-buddy/main/client/BelayBuddyPictures/landingpage.png",
    description:
      "Application in development for people to meet other rock climbers to partner and learn with",
  },
  {
    title: "Employee Tracker",
    gitHub: "https://github.com/iigonzoii/Employee-Tracker",
    deployedSite:
      "https://drive.google.com/file/d/1o5mH19KhQ79HI4axrDuIulG5ifPUnsfP/view",
    img: "https://raw.githubusercontent.com/iigonzoii/Employee-Tracker/main/images/et.jpg",
    description:
      "command line application using node.js and MySQL for the database in order to keep track of employees, their departments, managers, salaries, and roles in the company."
  },
];
function PortfolioPage() {
  return (
    <>
<div className="portfolio">
      <PortfolioCard
        portfolioArray={portfolioArray}
      />
</div>
    </>
  );
}

export default PortfolioPage;