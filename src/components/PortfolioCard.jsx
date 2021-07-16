

function PortfolioCard(props) {

  return (
   
    <div class="container md:py-20 mx-auto ">
      <section className="mainBckgrnd py-20">
        <div className="max-w-5xl px-6 mx-auto text-center">
          <h2 className="text-4xl font-semibold text-blue-400">Projects</h2>
          <div className="flex items-center justify-center mt-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {props.portfolioArray.map((each, index) => {
              return (          
                  <div key={index} className=" max-w-xs w-full">
                    <div  className="flex items-center justify-center h-48 bg-gray-100 rounded-md overflow-hidden">
                      <img className="object-cover " src={each.img} alt="" />
                    </div>
                    <a href={each.gitHub} rel="noreferrer" target="_blank" className="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-gray-400 ">
                      <div className="py-2 px-3 text-center text-sm">
                        <p className="text-gray-300 hover:text-blue-200">Click here to see {each.title} repository on Github.<br/>{each.description}.</p>
                        <a href={each.deployedSite} rel="noreferrer" target="_blank" className="block text-gray-300 mt-2 py-2.5 hover:bg-gray-300 hover:text-blue-400 rounded">Click here for deployed site</a>
                      </div>
                    </a>
                    </div>               
              )
            })}
            </div>
          </div>
          <div className="flex items-center justify-center mt-12">
            <a className="rounded hover:bg-gray-400 hover:text-blue-200 flex items-center text-xl font-bold  text-blue-400" href="https://github.com/iigonzoii" rel="noreferrer" target="_blank">
              <span>View More On Github</span>          
            </a>
          </div>
        </div>
      </section>
</div>
   
  );
}

export default PortfolioCard;