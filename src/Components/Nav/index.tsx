import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
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
            <div className="non-mobile">
                <div className="links">
                    <Link className="link" to="/">
                        <FontAwesomeIcon icon={faHouse} />
                    </Link>
                    <Link className="link" to="/profile">
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                    <Link className="link" to="/notfound">
                        <FontAwesomeIcon icon={faFolderTree} />
                    </Link>
                </div>
                <div className="socials">
                    <a
                        className="link"
                        target="_blank"
                        href="https://github.com/shweyin"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                        className="link"
                        target="_blank"
                        href="https://www.linkedin.com/in/shweyin-than-656153130/"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a className="link" href="mailto:shweyin@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </div>
            </div>
            <div className="mobile">
                <button onClick={() => setDrawerOpen(!drawerOpen)}>
                    <FontAwesomeIcon className="fa-2xl" icon={faBars} />
                </button>
                {drawerOpen && (
                    <AnimatePresence exitBeforeEnter>
                        <motion.div
                            className="drawer"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <button onClick={() => setDrawerOpen(!drawerOpen)}>
                                <FontAwesomeIcon
                                    className="fa-2xl"
                                    icon={faBars}
                                />
                            </button>
                            <div
                                className="mobile-links"
                                onClick={() => setDrawerOpen(false)}
                            >
                                <Link className="mobile-link" to="/">
                                    Home
                                </Link>
                                <Link className="mobile-link" to="/profile">
                                    Profile
                                </Link>
                                <Link className="mobile-link" to="/notfound">
                                    Projects
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                )}
            </div>
        </nav>
    );
};

export default Nav;
