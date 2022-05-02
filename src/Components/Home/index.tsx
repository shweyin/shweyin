import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCode,
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "./styles.css";
import { motion } from "framer-motion";

import TextSwap from "../TextSwap/TextSwap";

const Home = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    setTimeout(() => setTime(new Date().toLocaleTimeString()), 1000);

    return (
        <div className="home-page">
            <div className="intro">
                <span className="brackets">{"<div>"}</span>
                <TextSwap
                    text1="Hi, my name is..."
                    text2="こんにちは、僕の名前は"
                    className=""
                />
                <div className="name">
                    <span>
                        {"Shweyin ".split("").map((char, index) => (
                            <span key={`${char}-${index}`} className="char">
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </span>
                    <span>
                        {"Than".split("").map((char, index) => (
                            <span key={`${char}-${index}`} className="char">
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </span>
                </div>
                <div className="software-developer">
                    <span>
                        {"I build ".split("").map((char, index) => (
                            <span key={`${char}-${index}`} className="char">
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </span>
                    <span>
                        {"websites".split("").map((char, index) => (
                            <span key={`${char}-${index}`} className="char">
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </span>
                </div>
                <span className="brackets">{"</div>"}</span>
            </div>
            <div className="graphic">
                <motion.div
                    className="top-line"
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    transition={{ default: { duration: 1.5 } }}
                ></motion.div>
                <div className="circle">
                    <div>{new Date().toDateString()}</div>
                    <div>{time}</div>
                </div>
                <motion.div
                    className="bottom-line"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ default: { duration: 1.5 } }}
                ></motion.div>
            </div>
        </div>
    );
};

export default Home;
