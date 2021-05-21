import PortfolioCard from "../components/PortfolioCard"

function Portfolio(props) {
  return (
    <>
<div className="bg-gray-900">
      <PortfolioCard
        portfolioArray={props.portfolioArray}
      />
</div>
    </>
  );
}

export default Portfolio;