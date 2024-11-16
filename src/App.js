import React from "react";
import Header from "./components/Header";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";

const skills = [
    {
        name: "Java",
        description: "Основной язык",
        frameworks: [
            "Bukkit API",
            "NMS (Bukkit)",
            "Forge",
            "Fabric",
            "Telegram Bot API",
            "Discord Bot API",
        ],
    },
    {
        name: "JavaScript",
        description: "*",
        frameworks: [
            "React"
        ]
    },
    {
        name: "Python",
        description: "*"
    },
    {
        name: "Json",
        description: "*"
    },
    {
        name: "YAML",
        description: "*"
    },
    {
        name: "SQL",
        description: "*"
    },
    {
        name: "Git",
        description: "*"
    }
];

const App = () => (
    <div style={{ backgroundColor: "#1e1e1e", minHeight: "100vh" }}>
        <Header title="stockholm" subtitle="Ростислав Севастъянов" />
        <main>
            <SkillsSection skills={skills} />
            <ContactSection />
        </main>
    </div>
);

export default App;