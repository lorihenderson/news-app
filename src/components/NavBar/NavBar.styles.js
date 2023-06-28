import styled from "styled-components";

export const StyledContainer = styled.div`
width:100%;

.nav-items {
    position: sticky;
    top: 0;
    width:100%;
    background-color: black;
    text-align: center;

    span {
        a {
            color: white;
            text-decoration: none;
            font-size: 20px;
            padding 0px 10px;
            font-weight: 600;
            letter-spacing: 1px;

            &:hover {
                background-color: navy;
                color: yellow;
            }
        }
    }
}
`