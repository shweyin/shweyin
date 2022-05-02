import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
//import {} from "framer-motion/dist/framer-motion";

import Home from "../Home";

const RoutesWrapper = () => {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={<SlideAnimation content={<Home />} />}
                />
                <Route
                    path="*"
                    element={<SlideAnimation content={<Home />} />}
                />
            </Routes>
        </AnimatePresence>
    );
};

const SlideAnimation = ({ content }) => (
    <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-100%" }}
        style={{ height: "100%", width: "100%" }}
    >
        {content}
    </motion.div>
);

export default RoutesWrapper;
