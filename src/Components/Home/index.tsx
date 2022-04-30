import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCode,
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./styles.css";

import TextSwap from "../TextSwap/TextSwap";

const Home = () => {
    return (
        <div className="home-page">
            <div className="intro">
                <span>
                    <FontAwesomeIcon icon={faChevronLeft} className="icon" />
                    <FontAwesomeIcon icon={faChevronRight} className="icon" />
                </span>
                <TextSwap
                    text1="Hi, my name is"
                    text2="こんにちは、僕の名前は"
                />
                <div className="name">Shweyin Than</div>
                <div className="software-developer">Software Developer</div>
                <FontAwesomeIcon icon={faCode} className="icon" />
            </div>
            <div className="graphic">
                <svg viewBox="0 0 100 100" className="svg-graphic">
                    <line
                        className="svg-top-line"
                        x1="50"
                        y1="0"
                        x2="50"
                        y2="25"
                        stroke="white"
                    />
                    <circle
                        className="svg-circle"
                        r="15"
                        cx="50"
                        cy="40"
                        fill="none"
                        stroke="white"
                    />
                    <text
                        className="svg-text"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        x="50"
                        y="40"
                        fill="white"
                    >{`${new Date().toDateString()}`}</text>
                    <line
                        className="svg-bottom-line"
                        x1="50"
                        y1="55"
                        x2="50"
                        y2="100"
                        stroke="white"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Home;
