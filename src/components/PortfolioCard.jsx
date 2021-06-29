

function PortfolioCard(props) {

  return (
   <>
   
      {/* outer grid  */}
    
      <div className="mainBckgrnd grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {/* left side  */}
        <div className="md:col-span-3">
          <div className="text-white">
            placeholder for two columns on left
          </div>
        </div>
        {/* right side of page  */}
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
      </div>
    </>
  );
}
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