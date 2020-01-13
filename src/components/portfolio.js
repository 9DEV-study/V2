import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
const portfolioItems = [
  {
    imgSrc: "./img/portfolio-1.jpg",
    heading: "도서 공유 프로젝트",
    description: "준비 중"
  },
  {
    imgSrc: "./img/portfolio-2.jpg",
    heading: "출석 체크 프로젝트",
    description:
      "준비 중"
  }
];
const PortfolioSection = () => (
  <ScrollableAnchor id="portfolio">
    <section className="content-section">
      <div className="container">
        <div className="content-section-heading text-center">
          <h3 className="text-secondary mb-0">Project</h3>
          <h2 className="mb-5">9DEV 프로젝트</h2>
        </div>
        <div className="row no-gutters">
          {portfolioItems.map((project, index) => (
            <div className="col-lg-6" key={`portfolio_item_${index}`}>
              <a className="portfolio-item" href="">
                <span className="caption">
                  <span className="caption-content">
                    <h2>{project.heading}</h2>
                    <p className="mb-0">{project.description}</p>
                  </span>
                </span>
                <img className="img-fluid" src={project.imgSrc} alt="" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default PortfolioSection;
