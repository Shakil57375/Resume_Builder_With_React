import React, { useEffect } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { motion } from "framer-motion";

function Interests() {
  const { register, control } = useFormContext();
  const { fields, append } = useFieldArray({ control, name: "interests" });

  // Ensure there is one interest field set initially
  useEffect(() => {
    if (fields.length === 0) {
      append({ name: "" });
    }
  }, [append, fields.length]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h3 className="text-xl font-bold text-center mb-4">Interests</h3>

      <div className="space-y-4">
        {fields.map((item, index) => (
          <div key={item.id} className="mb-4 border-b pb-4">
            <div className="mb-2">
              <label className="block font-semibold text-sm text-gray-700">Interest</label>
              <input
                type="text"
                {...register(`interests.${index}.name`)}
                placeholder="Interest"
                className="input w-full border p-2 rounded"
              />
            </div>
          </div>
        ))}

        {/* Add More Interests Button */}
        <button
          type="button"
          onClick={() => append({ name: "" })}
          className="text-blue-500 underline mb-4"
        >
          + Add another interest
        </button>
      </div>
    </motion.div>
  );
}

export default Interests;
