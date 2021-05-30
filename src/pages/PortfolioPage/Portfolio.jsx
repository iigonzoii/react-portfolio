import PortfolioCard from "../../components/PortfolioCard"
import "./portfolio.css"
function PortfolioPage(props) {
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

export default PortfolioPage;