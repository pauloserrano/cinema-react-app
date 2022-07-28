import styled from "styled-components"

const Header = () => {
  return (
    <StyledHeader>
        CINEFLEX
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70px;
    font-size: 34px;
    color: #E8833A;
    background-color: #C3CFD9;
`

export default Header