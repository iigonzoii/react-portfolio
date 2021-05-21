

function PortfolioCard (props) {
    return (
      
      
      <div className="grid grid-cols-2 gap-4 portfolio-grid">
        {props.portfolioArray.map((each, index) => {
          return (
            <div key={index}>
              <h1>{each.title}</h1>
              <a href={each.gitHub} rel="noreferrer" target="_blank">
                Github
              </a>
              <p>{each.deployedSite}</p>
              <img src={each.img} alt={each.title} />
              <p>{each.description}</p>
            </div>
          );
        })}
      </div>
      
    );
  }
  
  export default PortfolioCard;