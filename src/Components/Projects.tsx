import { useState } from "react";
import CustomModal from "./UI/CustomModal";
import Carousel from "react-material-ui-carousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Card } from "./UI/Card";

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
    name: "Play313",
    details: "A hobby project built to assist in playing the card game 313.",
    link: "https://play313.vercel.app/",
    images: [
      require("../Assets/play313_home.webp"),
      require("../Assets/play313_board.webp"),
    ],
  },
  {
    name: "Sachays",
    details:
      "A non-profit organization website built using Wordpress and Oxygen Builder",
    link: "https://sachays.ca/",
    images: [
      require("../Assets/sachays.webp"),
      require("../Assets/sachays1.webp"),
      require("../Assets/sachays2.webp"),
      require("../Assets/sachays3.webp"),
      require("../Assets/sachays4.webp"),
    ],
  },
  {
    name: "Sonatico",
    details:
      "A startup working on building a platform custom built for music teachers to conduct online music lessons.",
    link: "https://sonatico.com/",
    element: (
      <iframe
        className="min-h-[40vh] md:min-h-[60vh]"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/8E7d7DaOnYI"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    name: "Mamacre Entertainment Corporate Website",
    details: "A corporate website built using Wordpress and Oxygen Builder.",
    link: "https://mamacrecorp.com/",
    element: (
      <iframe
        className="min-h-[40vh] md:min-h-[60vh]"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/JAAEYkq8nvI"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    name: "Leadership Loom",
    details:
      "A corporate leadership skills assessment tool built with ReactJs, TailwindCSS, and Firebase.",
    link: "https://leadership-loom-demo.vercel.app/",
    images: [
      require("../Assets/leadershiploom.webp"),
      require("../Assets/leadershiploom1.webp"),
      require("../Assets/leadershiploom2.webp"),
      require("../Assets/leadershiploom3.webp"),
      require("../Assets/leadershiploom4.webp"),
    ],
  },
  {
    name: "Mamacre Entertainment Label Site",
    details: "A website to showcase Mamacre Entertainment's latest albums",
    link: "https://mamacre-label.vercel.app/",
    images: [
      require("../Assets/mamacreLabel.webp"),
      require("../Assets/mamacreLabel2.webp"),
    ],
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
    <div className="p-10 min-h-screen">
      <Card className="flex flex-col max-w-[1000px] mx-auto">
        <h1 className="text-2xl p-5">Projects</h1>
        <div>
          <ul>
            {projects.map((item, index) => (
              <li
                key={`${item.name}-${index}`}
                onClick={() => toggleModal(item)}
                className="flex px-5 py-3 items-center justify-between cursor-pointer  hover:opacity-70 hover:bg-zinc-600"
              >
                {item.name}
                <ArrowForwardIosIcon />
              </li>
            ))}
          </ul>
        </div>
      </Card>

      {showModal && (
        <CustomModal handleClose={() => setShowModal(false)}>
          <h2 className="text-2xl">
            <a href={activeProject.link} target="_blank" rel="noreferrer">
              {activeProject.name}
            </a>
          </h2>
          {activeProject.images && (
            <Carousel
              className="w-full"
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
                  className="max-w-full h-auto block m-auto object-cover"
                  key={index}
                  src={item}
                  alt={item}
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
