import React, { useState } from "react";
import "./styles.css";

type TextSwapProps = {
    text1: string;
    text2: string;
};

const TextSwap = ({ text1, text2 }: TextSwapProps) => {
    const [showFirst, setShowFirst] = useState(true);

    setInterval(() => {
        setShowFirst(!showFirst);
    }, 6000);

    return (
        <div>
            <h3 className="typer">{showFirst ? text1 : text2}</h3>
        </div>
    );
};

export default TextSwap;
