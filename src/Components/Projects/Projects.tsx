import React, { useState } from "react";
import styles from "./styles.module.css";

type project = {
    name: string;
    details: string;
    startDate?: string;
    endDate?: string;
    link: string;
};

const projects: project[] = [
    {
        name: "Leadership Loom",
        details: "1",
        link: "/",
    },
    { name: "Mamacre", details: "2", link: "/" },
    { name: "SACHAYS", details: "3", link: "/" },
    { name: "My Portfolio", details: "4", link: "/" },
];

const Projects = () => {
    const [activeProject, setActiveProject] = useState<project>(projects[0]);

    return (
        <div className={styles.projectsPage + " " + styles.card}>
            <h1>Quests / Projects</h1>
            <div className={styles.projectPanel}>
                <div className={styles.projectList}>
                    <h2>Name</h2>
                    <ul>
                        {projects.map((item, index) => (
                            <li
                                key={`${item.name}-${index}`}
                                onClick={() => setActiveProject(item)}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
                {/* <div className={styles.projectDetails}>
                    <div>
                        <h2>Details</h2>
                        <div>{activeProject?.details}</div>
                    </div>
                    <div>
                        <h2>Preview</h2>
                        <div>{activeProject?.link}</div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Projects;
