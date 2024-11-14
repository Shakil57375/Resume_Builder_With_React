import React from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { motion } from "framer-motion";

function Education() {
  const { register, control, formState: { errors } } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name: "education" });

  // Ensure there is one education field set initially
  React.useEffect(() => {
    if (fields.length === 0) {
      append({
        gpa: "",
        startDate: "",
        endDate: "",
        graduationDate: "",
        location: "",
        institutionName: "",
        fieldOfStudy: "",
        degree: ""
      });
    }
  }, [append, fields.length]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h3 className="text-xl font-bold text-center mb-4">Education</h3>

      <div className="space-y-4">
        {fields.map((item, index) => (
          <div key={item.id} className="mb-6 border-b pb-4">
            <div className="mb-2">
              <label className="block font-semibold text-sm text-gray-700">Institution Name</label>
              <input
                type="text"
                {...register(`education.${index}.institutionName`, { required: "Institution Name is required" })}
                placeholder="Institution Name"
                className="input w-full border p-2 rounded"
              />
              {errors.education?.[index]?.institutionName && (
                <p className="text-red-500 text-sm">{errors.education[index].institutionName.message}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="mb-2">
                <label className="block font-semibold text-sm text-gray-700">Field of Study</label>
                <input
                  type="text"
                  {...register(`education.${index}.fieldOfStudy`, { required: "Field of Study is required" })}
                  placeholder="Field of Study"
                  className="input w-full border p-2 rounded"
                />
                {errors.education?.[index]?.fieldOfStudy && (
                  <p className="text-red-500 text-sm">{errors.education[index].fieldOfStudy.message}</p>
                )}
              </div>

              <div className="mb-2">
                <label className="block font-semibold text-sm text-gray-700">Degree</label>
                <input
                  type="text"
                  {...register(`education.${index}.degree`, { required: "Degree is required" })}
                  placeholder="Degree"
                  className="input w-full border p-2 rounded"
                />
                {errors.education?.[index]?.degree && (
                  <p className="text-red-500 text-sm">{errors.education[index].degree.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="mb-2">
                <label className="block font-semibold text-sm text-gray-700">GPA</label>
                <input
                  type="number"
                  {...register(`education.${index}.gpa`)}
                  placeholder="GPA"
                  className="input w-full border p-2 rounded"
                />
              </div>

              <div className="mb-2">
                <label className="block font-semibold text-sm text-gray-700">Location</label>
                <input
                  type="text"
                  {...register(`education.${index}.location`)}
                  placeholder="Location"
                  className="input w-full border p-2 rounded"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="mb-2">
                <label className="block font-semibold text-sm text-gray-700">Start Date</label>
                <input
                  type="date"
                  {...register(`education.${index}.startDate`)}
                  className="input w-full border p-2 rounded"
                />
              </div>

              <div className="mb-2">
                <label className="block font-semibold text-sm text-gray-700">End Date</label>
                <input
                  type="date"
                  {...register(`education.${index}.endDate`)}
                  className="input w-full border p-2 rounded"
                />
              </div>
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
          onClick={() => append({
            gpa: "",
            startDate: "",
            endDate: "",
            graduationDate: "",
            location: "",
            institutionName: "",
            fieldOfStudy: "",
            degree: ""
          })}
          className="text-blue-500 underline mb-4"
        >
          + Add another education
        </button>
      </div>
    </motion.div>
  );
}

export default Education;
