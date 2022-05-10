import React, { useState } from "react";
import styles from "./styles.module.css";
import CustomModal from "../CustomModal/CustomModal";

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
        details: "Coming Soon...",
        link: "/",
    },
    { name: "Mamacre", details: "Coming Soon...", link: "/" },
    { name: "SACHAYS", details: "Coming Soon...", link: "/" },
    { name: "My Portfolio", details: "Coming Soon...", link: "/" },
];

const Projects = () => {
    const [activeProject, setActiveProject] = useState<project>(projects[0]);
    const [showModal, setShowModal] = useState(false);

    const toggleModal = (item: project) => {
        setActiveProject(item);
        setShowModal(!showModal);
    };

    return (
        <div className={styles.projectsPage}>
            <div className={`${styles.card} ${styles.projectPanel}`}>
                <h1>Projects</h1>
                <div className={styles.projectList}>
                    <h2>Name</h2>
                    <ul>
                        {projects.map((item, index) => (
                            <li
                                key={`${item.name}-${index}`}
                                onClick={() => toggleModal(item)}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {showModal && (
                <CustomModal handleClose={() => setShowModal(false)}>
                    <h2>{activeProject.name}</h2>
                    <p>{activeProject.details}</p>
                </CustomModal>
            )}
        </div>
    );
};

export default Projects;
