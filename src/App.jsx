import { useReactToPrint } from "react-to-print";
import Resume1 from "./Components/Resume1";
import Resume2 from "./Components/Resume2";
import ResumeForm from "./Components/ResumeForm";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeResume, setActiveResume] = useState(null); // Track which resume opened the form

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

  return (
    <div className="min-h-screen bg-gray-100 px-8 my-4">
      <div className="grid grid-cols-2 gap-10">
        {/* Resume 1 */}
        <div>
          <div className="bg-white p-6 rounded-lg m-4" ref={contentRef1}>
            <Resume1 resumeId="resume1" />
          </div>
          <div className="flex items-start gap-4">
            <button
              className="px-4 py-2 bg-green-600 text-white rounded mb-2"
              onClick={() => openModal("resume1")}
            >
              Make Your Resume
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded"
              onClick={printResume1}
            >
              Download
            </button>
          </div>
        </div>

        {/* Resume 2 */}
        <div>
          <div className="bg-white p-6 rounded-lg m-4" ref={contentRef2}>
            <Resume2 resumeId="resume2" />
          </div>
          <div className="flex items-start gap-4">
            <button
              className="px-4 py-2 bg-green-600 text-white rounded mb-2"
              onClick={() => openModal("resume2")}
            >
              Customize Your Resume
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded"
              onClick={printResume2}
            >
              Download
            </button>
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
