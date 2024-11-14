import React from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { motion } from "framer-motion";

function Languages() {
  const { register, control, formState: { errors } } = useFormContext();
  const { fields, append } = useFieldArray({ control, name: "languages" });

  // Ensure there is one language field set initially
  React.useEffect(() => {
    if (fields.length === 0) {
      append({ name: "", proficiency: "beginner" });
    }
  }, [append, fields.length]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h3 className="text-xl font-bold text-center mb-4">Languages</h3>
      
      <div className="space-y-4">
        {fields.map((item, index) => (
          <div key={item.id} className="mb-4 border-b pb-4">
            <div className="mb-2">
              <label className="block font-semibold text-sm text-gray-700">Language</label>
              <input
                type="text"
                {...register(`languages.${index}.name`, { required: "Language is required" })}
                placeholder="Language"
                className="input w-full border p-2 rounded"
              />
              {errors.languages?.[index]?.name && (
                <p className="text-red-500 text-sm">{errors.languages[index].name.message}</p>
              )}
            </div>

            <div className="mb-2">
              <label className="block font-semibold text-sm text-gray-700">Proficiency</label>
              <select
                {...register(`languages.${index}.proficiency`)}
                className="input w-full border p-2 rounded"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="native">Native</option>
              </select>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={() => append({ name: "", proficiency: "beginner" })}
          className="text-blue-500 underline mb-4"
        >
          + Add another language
        </button>
      </div>
    </motion.div>
  );
}

export default Languages;
