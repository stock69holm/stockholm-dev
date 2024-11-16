import React from "react";
import styled from "styled-components";

const FrameworkWrapper = styled.div`
  margin-top: 10px;
  padding: 10px;
  background-color: #4a4a4a;
  border-radius: 8px;
  border-left: 8px solid #81afff;
  border-right: 8px solid #81afff;
`;

const FrameworkItem = styled.div`
  font-size: 14px;
  padding: 5px;
  color: #ffffff;
`;

const FrameworkList = ({ frameworks }) => (
    <FrameworkWrapper>
        <h4>Работа с</h4>
        {frameworks.map((framework, index) => (
            <FrameworkItem key={index}>{framework}</FrameworkItem>
        ))}
    </FrameworkWrapper>
);

export default FrameworkList;
