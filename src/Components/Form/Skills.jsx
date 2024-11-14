import React from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { motion } from "framer-motion";

function Skills() {
  const { register, control, formState: { errors } } = useFormContext();
  const { fields, append } = useFieldArray({ control, name: "skills" });

  // Ensure there is one skill field set initially
  React.useEffect(() => {
    if (fields.length === 0) {
      append({ name: "", level: "beginner" });
    }
  }, [append, fields.length]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h3 className="text-xl font-bold text-center mb-4">Skills</h3>

      <div className="space-y-4">
        {fields.map((item, index) => (
          <div key={item.id} className="mb-4 border-b pb-4">
            <div className="grid grid-cols-2 gap-4">
              {/* Skill Name Input */}
              <div className="mb-2">
                <label className="block font-semibold text-sm text-gray-700">Skill Name</label>
                <input
                  type="text"
                  {...register(`skills.${index}.name`, { required: "Skill name is required" })}
                  placeholder="Skill Name"
                  className="input w-full border p-2 rounded"
                />
                {errors.skills?.[index]?.name && (
                  <p className="text-red-500 text-sm">{errors.skills[index].name.message}</p>
                )}
              </div>

              {/* Skill Level Select */}
              <div className="mb-2">
                <label className="block font-semibold text-sm text-gray-700">Skill Level</label>
                <select
                  {...register(`skills.${index}.level`)}
                  className="input w-full border p-2 rounded"
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </div>
          </div>
        ))}

        {/* Add More Skills Button */}
        <button
          type="button"
          onClick={() => append({ name: "", level: "beginner" })}
          className="text-blue-500 underline mb-4"
        >
          + Add another skill
        </button>
      </div>
    </motion.div>
  );
}

export default Skills;
