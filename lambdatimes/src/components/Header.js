import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const HeaderStyles = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background-color: #fff;
    border-bottom: 1px solid lightblack;
    width: 100%;
    height: 120px;
    margin-top: 40px;
    padding-bottom: 15px;
`;

const Header = () => {
  return (
    <HeaderStyles>
        <date>March, 32 2018</date>
        <h1>Lambda Times</h1>
        <temp>98</temp>
    </HeaderStyles>
  )
}

export default Header;
