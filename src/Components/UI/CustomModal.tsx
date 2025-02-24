import { motion, AnimatePresence } from "framer-motion";
import ReactDOM from "react-dom";

const CustomModal = ({ handleClose, children }) => {
  return ReactDOM.createPortal(
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80"
        onClick={handleClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div
          style={{ width: "clamp(50%, 1200px, 90%)" }}
          className=" flex flex-col gap-5 p-10 rounded-md outline outline-zinc-600 bg-black"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

export default CustomModal;
