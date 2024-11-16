import React from "react";
import styled from "styled-components";
import FrameworkList from "./FrameworkList";

const SkillBox = styled.div`
    background: #373737;
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
    text-align: center;
    font-size: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;

    &:hover {
        transform: translateY(-5px);
    }
`;

const SkillsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
`;

const Skills = ({ skills }) => (
    <SkillsWrapper>
        {skills.map((skill, index) => (
            <SkillBox key={index}>
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
                {skill.frameworks && <FrameworkList frameworks={skill.frameworks} />}
            </SkillBox>
        ))}
    </SkillsWrapper>
);

export default Skills;
