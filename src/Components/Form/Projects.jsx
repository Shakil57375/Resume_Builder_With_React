import React, { useEffect } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";

function Projects() {
  const { register, control, formState: { errors } } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name: "projects" });

  // Ensure there is one initial project field
  useEffect(() => {
    if (fields.length === 0) {
      append({
        projectTitle: "",
        projectSubtitle: "",
        projectLiveLink: "",
        clientGithubLink: "",
        serverGithubLink: "",
        projectDetails: ""
      });
    }
  }, [append, fields.length]);

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Projects</h3>
      {fields.map((item, index) => (
        <div key={item.id} className="mb-6 border-b pb-4">
          {/* Project Title */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Project Title</label>
            <input
              type="text"
              placeholder="Enter project title"
              {...register(`projects.${index}.projectTitle`, {
                required: "Project title is required",
              })}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
            {errors.projects?.[index]?.projectTitle && (
              <p className="text-red-500 text-sm">
                {errors.projects[index].projectTitle.message}
              </p>
            )}
          </div>

          {/* Project Subtitle */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Project Subtitle</label>
            <input
              type="text"
              placeholder="Enter project subtitle (optional)"
              {...register(`projects.${index}.projectSubtitle`)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Project Live Link */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Project Live Link</label>
            <input
              type="text"
              placeholder="Enter project live link"
              {...register(`projects.${index}.projectLiveLink`, {
                required: "Project live link is required",
              })}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
            {errors.projects?.[index]?.projectLiveLink && (
              <p className="text-red-500 text-sm">
                {errors.projects[index].projectLiveLink.message}
              </p>
            )}
          </div>

          {/* Client Side GitHub Link */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Client Side GitHub Link</label>
            <input
              type="text"
              placeholder="Enter client side GitHub link"
              {...register(`projects.${index}.clientGithubLink`, {
                required: "Client side GitHub link is required",
              })}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
            {errors.projects?.[index]?.clientGithubLink && (
              <p className="text-red-500 text-sm">
                {errors.projects[index].clientGithubLink.message}
              </p>
            )}
          </div>

          {/* Server Side GitHub Link */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Server Side GitHub Link </label>
            <input
              type="text"
              placeholder="Enter server side GitHub link (optional)"
              {...register(`projects.${index}.serverGithubLink`)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Project Details */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Project Details</label>
            <textarea
              placeholder="Enter project details"
              {...register(`projects.${index}.projectDetails`, {
                required: "Project details are required",
              })}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
            {errors.projects?.[index]?.projectDetails && (
              <p className="text-red-500 text-sm">
                {errors.projects[index].projectDetails.message}
              </p>
            )}
          </div>

          {/* Used Technologies */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Used Technologies</label>
            <textarea
              placeholder="React.js, Tailwind CSS, Firebase, MongoDB, Express.js"
              {...register(`projects.${index}.technologies`, {
                required: "Project details are required",
              })}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
            {errors.projects?.[index]?.projectDetails && (
              <p className="text-red-500 text-sm">
                {errors.projects[index].projectDetails.message}
              </p>
            )}
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

      {/* Add New Project Button */}
      <button
        type="button"
        onClick={() => append({
          projectTitle: "",
          projectSubtitle: "",
          projectLiveLink: "",
          clientGithubLink: "",
          serverGithubLink: "",
          projectDetails: ""
        })}
        className="text-blue-500 underline"
      >
        + Add another project
      </button>
    </div>
  );
}

export default Projects;
