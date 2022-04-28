import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faFolderTree, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    return(
        <nav>
            <Link className="links" to="/"><FontAwesomeIcon icon={faHouse}/></Link>
            <Link className="links" to="/test"><FontAwesomeIcon icon={faUser}/></Link>
            <Link className="links" to="/"><FontAwesomeIcon icon={faFolderTree}/></Link>
            <Link className="links" to="/"><FontAwesomeIcon icon={faEnvelope}/></Link>
        </nav>
    )
}

export default Nav;