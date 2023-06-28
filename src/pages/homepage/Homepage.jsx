import React from "react";

import { Spotlight } from "../../components/Spotlight";
import { StyledContainer } from "./Homepage.styles";
import { ArticleCard } from "../../components/ArticleCard";
import { QuickInfoCard } from "../../components/QuickInfoCard";

import data from "../../data/articles.json";
import quick from "../../data/quick.json";

function Homepage( { title, description, urlToImage }) {
  return (
    <StyledContainer>
      <div className="content">
        <Spotlight />
        <div className="news-container">
          <div className="articles-section">
            {data.map(({ title, description, urlToImage }) => (
              <ArticleCard
                title={title}
                description={description}
                img={urlToImage}
              />
            ))}
          </div>
          <div className="quick-infos-section">
            <div className="quick-card">
              <div className="title"> {title} </div>
              <div className="description"> {description} </div>
            </div>
            {quick.map(({ title, description }) => (
              <QuickInfoCard 
                title={title} 
                description={description} 
              />
            ))}
          </div>
        </div>
      </div>
    </StyledContainer>
  );
}

export default Homepage;