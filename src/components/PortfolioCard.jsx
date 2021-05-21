

function PortfolioCard(props) {
  return (


    <div className="grid grid-cols-2 gap-4 portfolio-grid">
      {props.portfolioArray.map((each, index) => {
        return (
          <div key={index}>
            <h1>{each.title}</h1>
            <button>
              <a href={each.gitHub} rel="noreferrer" target="_blank">
                Github
              </a>
            </button>
            <br/>
            <button>
              <a href={each.deployedSite} rel="noreferrer" target="_blank">Deployed Site</a>
            </button>
            <img src={each.img} alt={each.title} />
            <p>{each.description}</p>
          </div>
        );
      })}
    </div>

  );
}

export default PortfolioCard;