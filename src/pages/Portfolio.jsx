import PortfolioCard from "../components/PortfolioCard"

function Portfolio(props) {
  console.log(`props`,props)
    return (
      <>
      <PortfolioCard portfolioArray={props.portfolioArray}/>
      <h1>portfolio </h1>
      </>
    );
  }
  
  export default Portfolio;