import React from "react";
import { useFormContext } from "react-hook-form";

function PersonalInformation() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <div className="flex flex-wrap -mx-2">
        <div className="w-1/2 px-2 mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            placeholder="Name Here..."
            {...register("name", { required: "Name is required" })}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div className="w-1/2 px-2 mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Designation
          </label>
          <input
            type="text"
            placeholder="Designation Here..."
            
            {...register("designation", {
              required: "Designation is required",
            })}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
          {errors.designation && (
            <p className="text-red-500 text-sm">{errors.designation.message}</p>
          )}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Career Objective
        </label>
        <textarea
          {...register("careerObjective")}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          placeholder="Career Objective..."
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          About Me
        </label>
        <textarea
          {...register("aboutMe")}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          placeholder="About Me..."
        />
      </div>

      <div className="flex flex-wrap -mx-2">
        <div className="w-1/2 px-2 mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="Email Here..."
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="w-1/2 px-2 mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="text"
            placeholder="Phone Number..."
            {...register("phone", { required: "Phone is required" })}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap -mx-2">
        <div className="w-1/2 px-2 mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            placeholder="Vill, P.O, P.S, Dist, City"
            {...register("location", { required: "Location is required" })}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
          {errors.location && (
            <p className="text-red-500 text-sm">{errors.location.message}</p>
          )}
        </div>

        <div className="w-1/2 px-2 mb-4">
          <label className="block text-sm font-medium text-gray-700">
            LinkedIn
          </label>
          <input
            type="text"
            {...register("linkedin")}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="LinkedIn Profile Link"
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-2">
        <div className="w-1/2 px-2 mb-4">
          <label className="block text-sm font-medium text-gray-700">
            GitHub
          </label>
          <input
            type="text"
            {...register("github")}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="GitHub Profile Link"
          />
        </div>

        <div className="w-1/2 px-2 mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Skype
          </label>
          <input
            type="text"
            {...register("skype")}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Skype Profile Link"
          />
        </div>
      </div>
    </div>
  );
}

export default PersonalInformation;
