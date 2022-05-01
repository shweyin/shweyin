import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./styles.css";

type TextSwapProps = {
    text1: string;
    text2: string;
};

const TextSwap = ({ text1, text2 }: TextSwapProps) => {
    const [showFirst, setShowFirst] = useState(true);

    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.1,
                staggerChildren: 0.08,
            },
        },
    };
    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <div>
            <motion.h3 variants={sentence} initial="hidden" animate="visible">
                {text1.split("").map((char, index) => (
                    <motion.span key={`${char}-${index}`} variants={letter}>
                        {char}
                    </motion.span>
                ))}
            </motion.h3>
        </div>
    );
};

export default TextSwap;
