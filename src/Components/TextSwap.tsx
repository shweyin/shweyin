import { motion } from "framer-motion";

type TextSwapProps = {
  text1: string;
  text2: string;
  className: string;
};

const TextSwap = ({ text1, text2 }: TextSwapProps) => {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
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
      <motion.h3
        variants={sentence}
        initial="hidden"
        animate="visible"
        className=""
      >
        {text1.split("").map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            variants={letter}
            className="text-zinc-600"
          >
            {char}
          </motion.span>
        ))}
      </motion.h3>
    </div>
  );
};

export default TextSwap;
