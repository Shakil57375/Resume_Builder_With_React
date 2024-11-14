import { useReactToPrint } from "react-to-print";
import Resume1 from "./Components/Resume1";
import Resume2 from "./Components/Resume2";
import ResumeForm from "./Components/ResumeForm";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeResume, setActiveResume] = useState(null);
  const [hoverKey, setHoverKey] = useState(0); // Key to trigger re-animation on hover

  const contentRef1 = useRef(null);
  const contentRef2 = useRef(null);

  const printResume1 = useReactToPrint({
    contentRef: contentRef1,
    documentTitle: "Resume 1",
  });

  const printResume2 = useReactToPrint({
    contentRef: contentRef2,
    documentTitle: "Resume 2",
  });

  const openModal = (resumeId) => {
    setActiveResume(resumeId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveResume(null);
  };

  // Define animations for buttons with increased distance
  const buttonLeftAnimation = {
    initial: { x: -400, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { type: "spring", stiffness: 50, damping: 10, delay: 0.2 },
  };

  const buttonRightAnimation = {
    initial: { x: 400, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { type: "spring", stiffness: 50, damping: 10, delay: 0.4 },
  };

  // Handler to reset the hoverKey on hover to re-trigger animation
  const handleHover = () => {
    setHoverKey((prevKey) => prevKey + 1); // Update key to retrigger animation
  };

  return (
    <div className="min-h-screen bg-gray-100 px-8 my-4">
      <div className="grid grid-cols-2 gap-10">
        {/* Resume 1 */}
        <div className="relative group" onMouseEnter={handleHover}>
          <div className="bg-white p-6 rounded-lg m-4" ref={contentRef1}>
            <Resume1 resumeId="resume1" />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
            <div className="flex flex-col items-center space-y-4">
              {/* Button coming from the left */}
              <motion.button
                key={`left-${hoverKey}`}
                {...buttonLeftAnimation}
                className="px-4 py-2 bg-green-600 text-white rounded"
                onClick={() => openModal("resume1")}
              >
                Customize Your Resume
              </motion.button>

              {/* Button coming from the right */}
              <motion.button
                key={`right-${hoverKey}`}
                {...buttonRightAnimation}
                className="px-4 py-2 bg-blue-600 text-white rounded"
                onClick={printResume1}
              >
                Download
              </motion.button>
            </div>
          </div>
        </div>

        {/* Resume 2 */}
        <div className="relative group" onMouseEnter={handleHover}>
          <div className="bg-white p-6 rounded-lg m-4" ref={contentRef2}>
            <Resume2 resumeId="resume2" />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
            <div className="flex flex-col items-center space-y-4">
              {/* Button coming from the left */}
              <motion.button
                key={`left-${hoverKey}`}
                {...buttonLeftAnimation}
                className="px-4 py-2 bg-green-600 text-white rounded"
                onClick={() => openModal("resume2")}
              >
                Customize Your Resume
              </motion.button>

              {/* Button coming from the right */}
              <motion.button
                key={`right-${hoverKey}`}
                {...buttonRightAnimation}
                className="px-4 py-2 bg-blue-600 text-white rounded"
                onClick={printResume2}
              >
                Download
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && activeResume && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          >
            <ResumeForm closeModal={closeModal} resumeId={activeResume} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
