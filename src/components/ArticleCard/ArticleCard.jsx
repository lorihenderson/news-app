import React from 'react';
import { StyledContainer } from './ArticleCard.styles';
import { FaThumbsUp } from "react-icons/fa";
import { LiaCommentAlt } from "react-icons/lia";
import { FaArrowRight } from "react-icons/fa";

function ArticleCard( { title, description, img }) {
    return (
        <StyledContainer>
            <div className="article-card">
                <img src={img} alt="" />
                <div className="title"> {title} </div>
                <div className="divider" />
                <div className="description"> {description} </div>
                <div className="data-section">
                    <div className="like-icon vertical-centered">
                        <FaThumbsUp size={16} /> 
                        <span> 165 </span>
                    </div>
                    <div className="comments-icon vertical-centered">
                        <LiaCommentAlt size={16} /> 
                        <span> 30 </span>
                    </div>
                    <div className="more vertical-centered">
                        <span> More </span>
                        <FaArrowRight size={16} />
                    </div>
                </div>
            </div>
        </StyledContainer>
    )
}

export default ArticleCard;