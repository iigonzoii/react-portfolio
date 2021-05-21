import PortfolioCard from "../components/PortfolioCard"

function Portfolio(props) {
  return (
    <>
<div className="bg-red-500">
      <PortfolioCard
        portfolioArray={props.portfolioArray}
      />
</div>
    </>
  );
}

export default Portfolio;