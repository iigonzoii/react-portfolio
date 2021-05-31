import PortfolioCard from "../../components/PortfolioCard"
import "./portfolio.css"
function PortfolioPage(props) {
  return (
    <>
<div className="portfolio">
      <PortfolioCard
        portfolioArray={props.portfolioArray}
      />
</div>
    </>
  );
}

export default PortfolioPage;