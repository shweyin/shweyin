import React from "react";
import "./styles.css";

const Home = () => {
    return (
        <div className="home-page">
            <div className="intro">
                <div className="hello">こんにちは、僕の名前は</div>
                <div className="name">Shweyin Than</div>
                <div className="software-developer">Software Developer</div>
            </div>
            <div className="graphic">
                <svg viewBox="0 0 100 100" className="svg-graphic">
                    <line className="svg-top-line" x1="50" y1="0" x2="50" y2="25" stroke="white" />
                    <circle className="svg-circle" r="15" cx="50" cy="40" fill="none" stroke="white"/>
                    <text textAnchor="middle" dominantBaseline="middle" className="svg-text" x="50" y="40" fill="white">10</text>
                    <line className="svg-bottom-line" x1="50" y1="55" x2="50" y2="100" stroke="white" />
                </svg>
            </div>
        </div>
    );
};

export default Home;
