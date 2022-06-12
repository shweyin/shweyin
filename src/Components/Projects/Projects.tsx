import React, { useState } from "react";
import styles from "./styles.module.css";
import CustomModal from "../CustomModal/CustomModal";
import Carousel from "react-material-ui-carousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

type project = {
    name: string;
    details: string;
    startDate?: string;
    endDate?: string;
    link: string;
    images?: string[];
    element?: JSX.IntrinsicElements[keyof JSX.IntrinsicElements];
};

const projects: project[] = [
    {
        name: "Leadership Loom",
        details: "Coming Soon...",
        link: "/",
        images: [
            require("../../Assets/loom.PNG"),
            require("../../Assets/loom1.PNG"),
            require("../../Assets/loom2.PNG"),
            require("../../Assets/loom3.PNG"),
            require("../../Assets/loom4.PNG"),
        ],
    },
    {
        name: "Mamacre",
        details: "Coming Soon...",
        link: "/",
        element: (
            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/xhvAVqAJ0Sw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
        ),
    },
    {
        name: "SACHAYS",
        details: "Coming Soon...",
        link: "/",
        images: [
            require("../../Assets/sachays.PNG"),
            require("../../Assets/sachays1.PNG"),
        ],
    },
    {
        name: "My Portfolio",
        details: "Coming Soon...",
        link: "/",
    },
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
                    <h2>
                        <a href={activeProject.link}>{activeProject.name}</a>
                    </h2>
                    {activeProject.images && (
                        <Carousel
                            className={styles.carousel}
                            autoPlay={false}
                            navButtonsAlwaysVisible
                            cycleNavigation
                            animation="slide"
                            NextIcon={<ArrowForwardIosIcon />}
                            PrevIcon={<ArrowBackIosNewIcon />}
                            indicatorContainerProps={{
                                style: { margin: "20px" },
                            }}
                            navButtonsProps={{
                                // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                                style: {
                                    backgroundColor: "transparent",
                                },
                            }}
                        >
                            {activeProject.images?.map((item, index) => (
                                <img
                                    className={styles.slideImg}
                                    key={index}
                                    src={item}
                                ></img>
                            ))}
                        </Carousel>
                    )}

                    {activeProject.element}
                    <p>{activeProject.details}</p>
                </CustomModal>
            )}
        </div>
    );
};

export default Projects;
