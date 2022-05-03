import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
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
            <div className={styles.nonMobile}>
                <div className={styles.links}>
                    <Link className={styles.link} to="/">
                        <FontAwesomeIcon icon={faHouse} />
                    </Link>
                    <Link className={styles.link} to="/profile">
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                    <Link className={styles.link} to="/notfound">
                        <FontAwesomeIcon icon={faFolderTree} />
                    </Link>
                </div>
                <div className={styles.socials}>
                    <a
                        className={styles.link}
                        target="_blank"
                        href="https://github.com/shweyin"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                        className={styles.link}
                        target="_blank"
                        href="https://www.linkedin.com/in/shweyin-than-656153130/"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a className={styles.link} href="mailto:shweyin@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </div>
            </div>
            <div className={styles.mobile}>
                <button onClick={() => setDrawerOpen(!drawerOpen)}>
                    <FontAwesomeIcon className="fa-2xl" icon={faBars} />
                </button>
                {drawerOpen && (
                    <AnimatePresence exitBeforeEnter>
                        <motion.div
                            className={styles.drawer}
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
                                className={styles.mobileLinks}
                                onClick={() => setDrawerOpen(false)}
                            >
                                <Link className={styles.mobileLink} to="/">
                                    Home
                                </Link>
                                <Link
                                    className={styles.mobileLink}
                                    to="/profile"
                                >
                                    Profile
                                </Link>
                                <Link
                                    className={styles.mobileLink}
                                    to="/notfound"
                                >
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
