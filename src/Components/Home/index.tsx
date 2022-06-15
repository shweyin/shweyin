import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

import TextSwap from "../TextSwap/TextSwap";

const Home = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [showEnter, setShowEnter] = useState(false);

    setTimeout(() => setTime(new Date().toLocaleTimeString()), 1000);

    useEffect(() => {
        setTimeout(() => setShowEnter(true), 2000);
    }, []);

    return (
        <div className={styles.homePage}>
            <div className={styles.intro}>
                <span className={styles.brackets}>{"<div>"}</span>
                <TextSwap
                    text1="Hi, my name is..."
                    text2="こんにちは、僕の名前は"
                    className=""
                />
                <div className={styles.name}>
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
                <div className={styles.softwareDeveloper}>
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
                <span className={styles.brackets}>{"</div>"}</span>
            </div>
            <div className={styles.graphic}>
                <motion.div
                    className={styles.topLine}
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    transition={{ default: { duration: 1.5 } }}
                ></motion.div>
                <div className={styles.circle}>
                    <div>{new Date().toDateString()}</div>
                    <div>{time}</div>
                </div>
                <motion.div
                    className={styles.bottomLine}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ default: { duration: 1.5 } }}
                ></motion.div>
            </div>
            {showEnter && (
                <div className={styles.enter}>
                    <Link to="/profile" className={styles.link}>
                        Enter
                        <KeyboardArrowDown />
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Home;
