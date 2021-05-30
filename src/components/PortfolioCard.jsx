

function PortfolioCard(props) {
  
  
  return (
<>


    <div className="grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4  portfolio-grid">
    
      {props.portfolioArray.map((each, index) => {
        return (
          <div key={index}>
            <h1>{each.title}</h1>
            <button className="bg-gray-500 hover:bg-blue-300">
              <a href={each.gitHub} rel="noreferrer" target="_blank">
                Github
              </a>
            </button>
            <br/>
            <button className="bg-gray-500 hover:bg-blue-300">
              <a href={each.deployedSite} rel="noreferrer" target="_blank">Deployed Site</a>
            </button>
            <img src={each.img} alt={each.title} />
            <p>{each.description}</p>
          </div>
        );
      })}
    </div>
    
    </>
  );
}

export default PortfolioCard;