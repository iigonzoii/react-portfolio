

function PortfolioCard(props) {

  return (
    <>
      <section className="mainBckgrnd py-20">
        <div className="max-w-5xl px-6 mx-auto text-center">
          <h2 className="text-4xl font-semibold text-white">Projects</h2>

          <div className="flex items-center justify-center mt-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {props.portfolioArray.map((each, index) => {
              return (
                

                  <div key={index} className=" max-w-xs w-full">

                    <div  className="  flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">

                      <img className="object-cover h-full" src={each.img} alt="" />
                    </div>
                    <a href={each.gitHub} rel="noreferrer" target="_blank" className="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-black">
                      <div className="py-2 px-3 text-center text-sm">
                        <p className="text-gray-300">Click here to see {each.title} repo<br/>{each.description}.</p>

                        <a href={each.deployedSite} rel="noreferrer" target="_blank" className="block text-gray-300 mt-2 hover:bg-white hover:text-black">Click here for deployed site</a>
                      </div>
                    </a>
                    </div>

                
              )
            })}
            </div>
          </div>

          <div className="flex items-center justify-center mt-12">
            <a className="hover:bg-black flex items-center text-white text-xl font-bold hover:underline hover:text-gray-200" href="https://github.com/iigonzoii" rel="noreferrer" target="_blank">
              <span>View More On Github</span>

            
            </a>
          </div>
        </div>
      </section>



    </>
  );
}


/* <div className="mainBckgrnd grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
       
<div className="md:col-span-3">
  <div className="text-white">
    placeholder for two columns on left
  </div>
</div>

<div className="rounded mt-1 mb-1 text-center bg-black bg-opacity-75 ">
  {props.portfolioArray.map((each, index) => {
    return (
      <div classname=""key={index}>
        <div className="grid justify-items-center">
        <img classname="" src={each.img}  alt={each.title} />
        </div>
        
        <div className="text-white  px-6 py-4">
          {each.description}
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 hover:bg-gray-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <a href={each.gitHub} rel="noreferrer" target="_blank">
              Github
            </a>
          </span>
          <span className="inline-block bg-gray-200 hover:bg-gray-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <a href={each.deployedSite} rel="noreferrer" target="_blank">
              Deployed Site
            </a>
          </span>
        </div>
      </div>
    );
  })}
</div>
</div> */


/* <div className="p-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
     
   
     {props.portfolioArray.map((each, index) => {
       return (
         <div key={index}>

     <img className=" " src={each.img} alt={each.title}/>
     
     <div className="px-6 py-4">
       <p className="text-gray-500 text-base">
       {each.description}
       </p>
     </div>
     <div className="px-6 pt-4 pb-2">
       <span className="inline-block bg-gray-200 hover:bg-gray-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">

         <a href={each.gitHub} rel="noreferrer" target="_blank">
               Github
         </a>
         </span>

       <span className="inline-block bg-gray-200 hover:bg-gray-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">

         <a href={each.deployedSite} rel="noreferrer" target="_blank">
           Deployed Site
         </a>
         </span>
     </div>
   
         
         </div>
       );
     })}
   </div> */

export default PortfolioCard;