import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./Home";
import Profile from "./Profile";
import Projects from "./Projects";

const RoutesWrapper = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SlideAnimation content={<Home />} />} />
        <Route
          path="/profile"
          element={<SlideAnimation content={<Profile />} />}
        />
        <Route
          path="/projects"
          element={<SlideAnimation content={<Projects />} />}
        />
        <Route
          path="*"
          element={<SlideAnimation content={<p>Not found</p>} />}
        />
      </Routes>
    </AnimatePresence>
  );
};

type SlideAnimationProps = {
  content: React.ReactNode;
};

const SlideAnimation = ({ content }: SlideAnimationProps) => (
  <motion.div
    className="h-full w-full ml-0 md:ml-[50px]"
    initial={{ opacity: 0, y: "100%" }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: "-100%" }}
  >
    {content}
  </motion.div>
);

export default RoutesWrapper;
