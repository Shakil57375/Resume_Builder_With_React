import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { motion } from "framer-motion";

function WorkExperience({ onSubmit}) {
  const { register, control, handleSubmit } = useForm();
  const { fields, append } = useFieldArray({ control, name: "workExperience" });

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h2 className="text-xl font-bold text-center">Resume Builder</h2>
      <h3 className="font-semibold text-center mb-4">Work Experience</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((item, index) => (
          <div key={item.id} className="mb-2">
            <label>Job Title</label>
            <input
              {...register(`workExperience.${index}.title`, { required: "Job Title is required" })}
              placeholder="Job Title"
              className="input w-full border p-2 rounded mb-1"
            />
            <label>Company</label>
            <input
              {...register(`workExperience.${index}.company`, { required: "Company is required" })}
              placeholder="Company"
              className="input w-full border p-2 rounded mb-1"
            />
            <label>Location</label>
            <input
              {...register(`workExperience.${index}.location`)}
              placeholder="Location"
              className="input w-full border p-2 rounded mb-1"
            />
            <label>Date</label>
            <input
              {...register(`workExperience.${index}.date`)}
              placeholder="Date"
              className="input w-full border p-2 rounded mb-1"
            />
            <label>Details</label>
            <textarea
              {...register(`workExperience.${index}.details`)}
              placeholder="Details"
              className="textarea w-full border p-2 rounded h-16 mb-2"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() => append({ title: "", company: "", location: "", date: "", details: "" })}
          className="text-blue-500 underline mb-4"
        >
          + Add another work experience
        </button>
      </form>
    </motion.div>
  );
}

export default WorkExperience;
