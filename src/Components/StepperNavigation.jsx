import React from "react";

function StepperNavigation({ currentStep, steps, handleNext, handleBack, onSubmit }) {
  return (
    <div className="flex justify-between mt-4">
      {/* Back Button */}
      {currentStep > 0 && (
        <button
          type="button"
          onClick={handleBack}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Back
        </button>
      )}

      {/* Next or Submit Button */}
      {currentStep < steps.length - 1 ? (
        <button
          type="button"
          onClick={handleNext}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Next
        </button>
      ) : (
        <button
          type="button" // Ensuring no accidental form submission
          onClick={onSubmit}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Submit
        </button>
      )}
    </div>
  );
}

export default StepperNavigation;
