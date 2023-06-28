import styled from "styled-components";

export const StyledContainer = styled.div`
  margin: 0px 15px 15px 15px;

  .article-card {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;

    img {
      max-width: 400px;
    }

    .title {
      font-family: arial,sans-serif;
      padding: 5px 10px 0px 10px;
      font-size: 25px;
      text-align: center;
    }

    .divider {
      margin-top: 13px;
      margin-bottom: 3px;
      height: 1px;
      width: 45%;
      background-color: black;
      border-radius: 10px;
    }

    .description {
      font-family: arial,sans-serif;
      text-align: center;
      padding: 12px;
      font-size: 15px;
      font-weight: 300;
      color: black;
    }

    .data-section {
      display: flex;
      justify-content: space-around;
      width: 70%;
      margin-bottom: 30px;
      
      span {
        padding-left: 2px;
        font-size: 13px;
      }

      .more {
        text-decoration: underline;
      }

      .vertical-centered {
        display: flex;
        align-items: center;
      }
    }
  }
`;