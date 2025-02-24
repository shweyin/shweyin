import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faFolderTree,
  faEnvelope,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Nav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <nav>
      <div className="hidden md:flex flex-col justify-between fixed bg-stone-900 h-screen">
        <div className="pt-5 flex gap-5 flex-col">
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "opacity-50" : "opacity-100"
              } flex justify-center px-3 hover:opacity-30 transition-opacity duration-125`
            }
            to="/"
          >
            <FontAwesomeIcon icon={faHouse} />
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "opacity-50" : "opacity-100"
              } flex justify-center px-3 hover:opacity-30 transition-opacity duration-125`
            }
            to="/profile"
          >
            <FontAwesomeIcon icon={faUser} />
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "opacity-50" : "opacity-100"
              } flex justify-center px-3 hover:opacity-30 transition-opacity duration-125`
            }
            to="/projects"
          >
            <FontAwesomeIcon icon={faFolderTree} />
          </NavLink>
        </div>
        <div className="flex flex-col pb-3 gap-3">
          <a
            className="flex justify-center px-3 hover:opacity-30 transition-opacity duration-125"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/shweyin"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className="flex justify-center px-3 hover:opacity-30 transition-opacity duration-125"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/shweyin-than-656153130/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            className="flex justify-center px-3 hover:opacity-30 transition-opacity duration-125"
            href="mailto:shweyin@gmail.com"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-end md:hidden p-5">
        <button className="" onClick={() => setDrawerOpen(!drawerOpen)}>
          <FontAwesomeIcon className="fa-2xl" icon={faBars} />
        </button>
        {drawerOpen && (
          <AnimatePresence exitBeforeEnter>
            <motion.div
              className="flex flex-col items-end fixed inset-0 bg-white z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button onClick={() => setDrawerOpen(!drawerOpen)}>
                <FontAwesomeIcon className="fa-2xl" icon={faBars} />
              </button>
              <div
                className="flex flex-col grow w-full gap-3 items-center justify-center"
                onClick={() => setDrawerOpen(false)}
              >
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive ? "opacity-50" : "opacity-100"
                    } text-black hover:opacity-40 text-lg`
                  }
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive ? "opacity-50" : "opacity-100"
                    } text-black hover:opacity-40 text-lg`
                  }
                  to="/profile"
                >
                  Profile
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive ? "opacity-50" : "opacity-100"
                    } text-black hover:opacity-40 text-lg`
                  }
                  to="/projects"
                >
                  Projects
                </NavLink>
                <div className="flex pt-5 gap-3 text-black">
                  <a
                    className="flex justify-center px-3 hover:opacity-30 transition-opacity duration-125"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/shweyin"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a
                    className="flex justify-center px-3 hover:opacity-30 transition-opacity duration-125"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/shweyin-than-656153130/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a
                    className="flex justify-center px-3 hover:opacity-30 transition-opacity duration-125"
                    href="mailto:shweyin@gmail.com"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </nav>
  );
};

export default Nav;
