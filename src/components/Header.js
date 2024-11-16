import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  text-align: center;
  padding: 50px 20px;
  font-size: 25px;
  color: #ffffff;
`;

const Title = styled.h1`
  font-size: 32px;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 20px;
  margin: 0;
`;

const Header = ({ title, subtitle }) => (
    <HeaderWrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
    </HeaderWrapper>
);

export default Header;