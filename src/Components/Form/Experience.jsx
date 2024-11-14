import React from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { motion } from "framer-motion";

function Experience() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  const { fields, append , remove} = useFieldArray({ control, name: "workExperience" });

  // Ensure there is exactly one experience field set initially
  React.useEffect(() => {
    if (fields.length === 0) {
      append({ title: "", company: "", location: "", date: "", details: "" });
    }
  }, [append, fields.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h3 className="text-xl font-bold text-center mb-4">Work Experience</h3>
      <div className="space-y-4">
        {fields.map((item, index) => (
          <div key={item.id} className="mb-6 border-b pb-4">
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Job Title
              </label>
              <input
                type="text"
                {...register(`workExperience.${index}.title`, {
                  required: "Job Title is required",
                })}
                placeholder="Job Title"
                className="mt-1 block w-full border p-2 rounded"
              />
              {errors.workExperience?.[index]?.title && (
                <p className="text-red-500 text-sm">
                  {errors.workExperience[index].title.message}
                </p>
              )}
            </div>

            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Company
              </label>
              <input
                type="text"
                {...register(`workExperience.${index}.company`, {
                  required: "Company is required",
                })}
                placeholder="Company"
                className="mt-1 block w-full border p-2 rounded"
              />
              {errors.workExperience?.[index]?.company && (
                <p className="text-red-500 text-sm">
                  {errors.workExperience[index].company.message}
                </p>
              )}
            </div>

            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                {...register(`workExperience.${index}.location`)}
                placeholder="Dist, City,"
                className="mt-1 block w-full border p-2 rounded"
              />
            </div>

            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Starting Date
              </label>
              <input
                type="date"
                {...register(`workExperience.${index}.startingDate`)}
                placeholder="Starting Date of your Job"
                className="mt-1 block w-full border p-2 rounded"
              />
            </div>

            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Ending Date
              </label>
              <input
                type="text"
                {...register(`workExperience.${index}.endingDate`)}
                placeholder="Ending Date of your Job"
                className="mt-1 block w-full border p-2 rounded"
              />
            </div>

            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Details
              </label>
              <textarea
                {...register(`workExperience.${index}.details`)}
                placeholder="Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor"
                className="mt-1 block w-full border p-2 rounded h-16"
              />
            </div>
            
          {/* Remove Project Button */}
          {fields.length > 1 && (
            <button
              type="button"
              onClick={() => remove(index)}
              className="text-red-500 underline mb-4"
            >
              Remove Project
            </button>
          )}
          </div>
        ))}

        <button
          type="button"
          onClick={() =>
            append({
              title: "",
              company: "",
              location: "",
              date: "",
              details: "",
            })
          }
          className="text-blue-500 underline mb-4"
        >
          + Add more experience
        </button>
      </div>
    </motion.div>
  );
}

export default Experience;
