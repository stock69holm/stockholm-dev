import React from "react";
import styled from "styled-components";

const ContactBox = styled.div`
  margin: 10px;
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ContactInfo = styled.p`
  margin: 5px 0;
  font-size: 16px;
  color: #ffffff;

  a {
    color: #8e9eba;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #81afff;
    }
  }
`;

const Contact = () => (
    <ContactBox>
        <ContactInfo>
            <a href="https://vk.com/gg.java">ВКонтакте</a>
        </ContactInfo>
    </ContactBox>
);

export default Contact;