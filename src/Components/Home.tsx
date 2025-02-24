import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ArrowDownward from "@mui/icons-material/ArrowDownward";

import TextSwap from "./TextSwap";

const Home = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [showEnter, setShowEnter] = useState(false);

  setTimeout(() => setTime(new Date().toLocaleTimeString()), 1000);

  useEffect(() => {
    setTimeout(() => setShowEnter(true), 1000);
  }, []);

  return (
    <div className="flex w-full p-0 m-0 overflow-hidden">
      <div className="flex flex-col gap-1 w-1/2 flex-grow-[2] h-screen justify-center pl-[5%]">
        <span>{"<div>"}</span>
        <div className="px-5">
          <TextSwap
            text1="Hi, my name is..."
            text2="こんにちは、僕の名前は"
            className=""
          />
          <div className="text-4xl md:text-6xl ">Shweyin Than</div>
          <div className="text-4xl sm:text-5xl md:text-7xl text-zinc-600 whitespace-nowrap">
            I build websites
          </div>
        </div>
        <span>{"</div>"}</span>
      </div>
      <div className="hidden xl:flex flex-col w-1/2 h-screen overflow-hidden">
        <motion.div
          className="w-1/2 h-[25%] border-r-4"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ default: { duration: 1.5 } }}
        ></motion.div>
        <div className="flex flex-col justify-center items-center mx-auto my-0 border-4 rounded-full h-[15vw] w-[15vw]">
          <div>{new Date().toDateString()}</div>
          <div className="">{time}</div>
        </div>
        <motion.div
          className="grow w-1/2 border-r-4"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ default: { duration: 1.5 } }}
        ></motion.div>
      </div>
      <div
        className={`flex justify-center absolute bottom-[5vh] xl:bottom-[18vh] right-0 left-0 transition-opacity duration-1000 ${
          showEnter ? "opacity-100" : "opacity-0"
        }`}
      >
        <Link
          to="/profile"
          className="flex flex-col gap-1 items-center animate-bounce hover:opacity-80 transition-opacity duration-75"
        >
          Enter
          <ArrowDownward />
        </Link>
      </div>
    </div>
  );
};

export default Home;
