import React from "react";
import Skills from "./Skills";

const SkillsSection = ({ skills }) => (
    <section>
        <h2 style={{ textAlign: "center", marginTop: "30px", color: "#ffffff" }}>Навыки</h2>
        <Skills skills={skills} />
    </section>
);

export default SkillsSection;