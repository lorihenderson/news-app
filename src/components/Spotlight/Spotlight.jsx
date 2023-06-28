import React from 'react';
import { StyledContainer } from './Spotlight.styles';
import { TfiWorld } from "react-icons/tfi";


function Spotlight(props) {
  return (
    <StyledContainer>
        <div className="spotlight-section">
            <div className="title"> NEWS </div>
            <p className="description"> The most important news in the world </p>
            <div className="dividers-container">
                <div className="divider" />
                <div className="icon-container"> <TfiWorld /> </div>
                <div className="divider" />
            </div>
        </div>
    </StyledContainer>
  )
}

export default Spotlight