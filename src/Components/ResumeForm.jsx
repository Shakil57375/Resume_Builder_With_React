import React, { useContext, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Stepper, Step } from "react-form-stepper";
import { IoClose } from "react-icons/io5";
import PersonalInformation from "./Form/PersonalInformation";
import Experience from "./Form/Experience";
import Projects from "./Form/Projects";
import StepperNavigation from "./StepperNavigation";
import Languages from "./Form/Languages";
import Education from "./Form/Education";
import Skills from "./Form/Skills";
import Interests from "./Form/Interests";
import ImageUpload from "./Form/ImageUpload";
import { ResumeContext } from "../Provider/ResumeProvider";

function ResumeForm({ closeModal, resumeId }) {
  const methods = useForm();
  const { handleSubmit, trigger } = methods;
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const { setResumeData } = useContext(ResumeContext);

  const handleImageUpload = (url) => {
    setProfileImage(url);
  };

  // Define fields to validate for each step
  const stepFields = [
    ["name", "email", "phone"],
    ["experience"],
    ["projectTitle", "projectLinks"],
    ["education"],
    ["languages"],
    ["skills"],
    [], // Interests (no required fields)
  ];

  const steps = [
    {
      label: "Personal Information",
      component: (
        <>
          <PersonalInformation />
          <ImageUpload onImageUpload={handleImageUpload} />
        </>
      ),
    },
    { label: "Experience", component: <Experience /> },
    { label: "Projects", component: <Projects /> },
    { label: "Education", component: <Education /> },
    { label: "Languages", component: <Languages /> },
    { label: "Skills", component: <Skills /> },
    { label: "Interests", component: <Interests /> },
  ];

  const handleNext = async () => {
    const isStepValid = await trigger(stepFields[currentStep]);
    if (isStepValid) {
      if (currentStep === steps.length - 1) {
        handleSubmit(onSubmit)(); // Only submit on the last step
      } else {
        setCurrentStep((prev) => prev + 1); // Move to the next step
      }
    }
  };

  const handleBack = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const onSubmit = (data) => {
    const completeData = { ...data, profileImage };
    setResumeData(resumeId, completeData);
    setFormData(completeData);
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
      <div className="bg-white p-6 rounded-lg relative w-full max-w-[800px] h-[90vh] mx-auto">
        <button
          className="absolute top-4 right-4 text-gray-500"
          onClick={closeModal}
        >
          <IoClose className="text-2xl text-red-500" />
        </button>
        <h2 className="text-xl font-semibold mb-4">Enter Your Information</h2>

        <Stepper activeStep={currentStep} className="mb-4">
          {steps.map((step, index) => (
            <Step key={index} label={step.label} />
          ))}
        </Stepper>

        <FormProvider {...methods}>
          <div className="overflow-y-auto 2xl:h-[60vh] xl:h-[50vh] lg:h-[40vh] md:h-[20vh] sm:h-[5vh] px-4">
            <form className="space-y-4">
              {steps[currentStep].component}
              <StepperNavigation
                currentStep={currentStep}
                steps={steps}
                handleNext={handleNext}
                handleBack={handleBack}
                onSubmit={handleSubmit(onSubmit)}
              />
            </form>
          </div>
        </FormProvider>

        {formData && (
          <div className="mt-4 p-4 border border-gray-300 rounded bg-gray-100">
            <h3 className="font-semibold">Submitted Data:</h3>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResumeForm;
