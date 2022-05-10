import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles.module.css";

const CustomModal = ({ handleClose, children }) => {
    return (
        <AnimatePresence exitBeforeEnter>
            <Backdrop click={handleClose}>
                <div
                    className={styles.myModal}
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </div>
            </Backdrop>
        </AnimatePresence>
    );
};

const Backdrop = ({ children, click }) => (
    <motion.div
        className={styles.backdrop}
        onClick={click}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        {children}
    </motion.div>
);
export default CustomModal;
