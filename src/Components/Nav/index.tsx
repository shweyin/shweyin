import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faUser,
    faFolderTree,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Nav = () => {
    return (
        <nav>
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
        </nav>
    );
};

export default Nav;
