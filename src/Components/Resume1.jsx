import React, { useContext } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaSkype,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { ResumeContext } from "../Provider/ResumeProvider";

function getDynamicFontSize(text, baseSize = 12) {
  const wordCount = text.split(" ").length;
  if (wordCount > 60) return `${baseSize - 4}px`;
  if (wordCount > 50) return `${baseSize - 2}px`;
  return `${baseSize}px`;
}

function Resume1({ resumeId }) {
  const { resumesData } = useContext(ResumeContext);
  const data = resumesData[resumeId] || {};

  return (
    <div className="flex min-h-screen resume-container">
      {/* Left Sidebar */}
      <div className="basis-3/12 bg-[#858588] text-white px-6 py-8 min-h-screen">
        {/* Profile Image */}
        {data.profileImage && (
          <div className="h-40 w-40 mx-auto mb-4">
            <img
              src={data.profileImage}
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        )}

        {/* Personal Information */}
        <div className="text-start">
          <h2 className="text-xl font-bold mb-2">{data?.name}</h2>
          <p className="text-gray-300">{data?.designation}</p>

          {/* About Me */}
          {data?.aboutMe && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold">About Me</h3>
              <p
                className="text-gray-200"
                style={{ fontSize: getDynamicFontSize(data.aboutMe, 12) }}
              >
                {data.aboutMe}
              </p>
            </div>
          )}

          {/* Contact Information */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-4 mt-4">
              {data?.email && (
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-base mt-1" />
                  <div>{data.email}</div>
                </div>
              )}
              {data?.phone && (
                <div className="flex items-center gap-2">
                  <FaPhone className="text-base mt-1" />
                  <div>{data.phone}</div>
                </div>
              )}
              {data?.location && (
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-base mt-1" />
                  <div>{data.location}</div>
                </div>
              )}
              {data?.linkedin && (
                <div className="flex items-center gap-2">
                  <FaLinkedin className="text-base mt-1" />
                  <div>{data.linkedin}</div>
                </div>
              )}
              {data?.github && (
                <div className="flex items-center gap-2">
                  <FaGithub className="text-base mt-1" />
                  <div>{data.github}</div>
                </div>
              )}
              {data?.skype && (
                <div className="flex items-center gap-2">
                  <FaSkype className="text-base mt-1" />
                  <div>{data.skype}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="basis-9/12 bg-white p-6 min-h-screen">
        {/* Career Objective */}
        {data?.careerObjective && (
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Career Objective</h2>
            <p
              style={{ fontSize: getDynamicFontSize(data.careerObjective, 12) }}
            >
              {data.careerObjective}
            </p>
          </div>
        )}

        {/* Work Experience */}
        {data?.workExperience?.length > 0 && (
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            <div className="relative">
              {data.workExperience.map((job, index) => (
                <div key={index} className="flex mb-8">
                  {/* Left Side: Company, Location, Date */}
                  <div className="w-1/3 text-sm text-gray-600 pr-4">
                    <span className="font-bold">{job.company}</span>
                    <div>{job.location}</div>
                    <div>{`${job.startingDate} - ${job.endingDate}`}</div>
                  </div>

                  {/* Timeline Line and Dot */}
                  <div className="relative flex items-start">
                    <span className="absolute w-3 h-3 bg-gray-600 rounded-full -left-[5px]"></span>
                  </div>

                  {/* Right Side: Job Title and Details */}
                  <div className="w-2/3 border-l-2 border-gray-300 pl-8">
                    <h4 className="text-md font-semibold mb-2">{job.title}</h4>
                    <ul className="list-disc list-inside text-gray-700">
                      {job.details?.split(",").map((detail, idx) => (
                        <li
                          key={idx}
                          style={{ fontSize: getDynamicFontSize(detail, 12) }}
                        >
                          {detail.trim()}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {data?.projects?.length > 0 && (
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>
            {data.projects.map((project, index) => (
              <div key={index} className="mb-6">
                <h3 className="font-bold text-lg">{project.projectTitle}</h3>
                <p className="italic text-gray-500">
                  {project.projectSubtitle}
                </p>
                <div className="flex space-x-4 text-blue-500">
                  {project.projectLiveLink && (
                    <a
                      href={project.projectLiveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live website
                    </a>
                  )}
                  {project.clientGithubLink && (
                    <a
                      href={project.clientGithubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub (client)
                    </a>
                  )}
                  {project.serverGithubLink && (
                    <a
                      href={project.serverGithubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub (server)
                    </a>
                  )}
                </div>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  {project.projectDetails?.split(",").map((detail, idx) => (
                    <li
                      key={idx}
                      style={{ fontSize: getDynamicFontSize(detail, 12) }}
                    >
                      {detail.trim()}
                    </li>
                  ))}
                </ul>
                {project.Technologies && (
                  <p className="text-sm mt-2 text-gray-500">
                    Technologies: {project.Technologies.join(", ")}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {data?.education?.length > 0 && (
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <div className="relative">
              {data.education.map((edu, index) => (
                <div key={index} className="flex mb-8">
                  {/* Left Side: Institution, Location, Date */}
                  <div className="w-1/3 text-sm text-gray-600 pr-4">
                    <span className="font-bold">{edu.institutionName}</span>
                    <div>{edu.location}</div>
                    <div>{`${edu.startDate} - ${edu.endDate}`}</div>
                  </div>

                  {/* Timeline Line and Dot */}
                  <div className="relative flex items-start">
                    <span className="absolute w-3 h-3 bg-gray-600 rounded-full -left-[5px] top-0"></span>
                  </div>

                  {/* Right Side: Degree and Details */}
                  <div className="w-2/3 border-l-2 border-gray-300 pl-8">
                    <h4 className="text-md font-semibold mb-2">{edu.degree}</h4>
                    <p>{edu.fieldOfStudy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {data?.skills?.length > 0 && (
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">Skills</h2>
            {data.skills.map((skill, index) => {
              // Determine the width based on the level string
              const getSkillWidth = (level) => {
                switch (level) {
                  case "beginner":
                    return "33%";
                  case "intermediate":
                    return "67%";
                  case "advanced":
                    return "100%";
                  default:
                    return "0%";
                }
              };

              return (
                <div key={index} className="mb-2">
                  <p className="font-semibold">{skill.name}</p>
                  <div className="bg-gray-200 rounded-full h-2 my-2">
                    <div
                      className="bg-[#434345] h-2 rounded-full"
                      style={{ width: getSkillWidth(skill.level) }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Languages */}
        {data?.languages?.length > 0 && (
          <div className="mb-0">
            <h2 className="text-2xl font-semibold mb-2">Languages</h2>
            {data.languages.map((language, index) => {
              // Determine the width based on the proficiency level string
              const getProficiencyWidth = (level) => {
                switch (level) {
                  case "beginner":
                    return "25%";
                  case "intermediate":
                    return "50%";
                  case "advanced":
                    return "75%";
                  case "native":
                    return "100%";
                  default:
                    return "0%";
                }
              };

              return (
                <div key={index} className="mb-2">
                  <p className="font-semibold">{language.name}</p>
                  <div className="bg-gray-200 rounded-full h-2 my-2">
                    <div
                      className="bg-[#434345] h-2 rounded-full"
                      style={{ width: getProficiencyWidth(language.proficiency) }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Resume1;
