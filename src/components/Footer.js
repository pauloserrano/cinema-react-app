import styled from "styled-components"

const Footer = ({ children }) => {
  return (
    <StyledFooter>
        { children }
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
        display: flex;
        justify-content: center;
        align-items: center;
        position: sticky;
        bottom: 0;
        width: 100%;
        padding: 16px;
        color: #293845;
        background-color: #9EADBA;

        img{
            max-width: 65px;
            border: 5px solid white;
            border-radius: 5px;
            margin-right: 16px;
            box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        }

        div{
            display: flex;
            flex-direction: column;

            p{
                font-size: 26px;
                line-height: 1.25em;
            }
        }
`

export default Footer