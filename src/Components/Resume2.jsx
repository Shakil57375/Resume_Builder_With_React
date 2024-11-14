import React, { useContext } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import { ResumeContext } from '../Provider/ResumeProvider';

function getDynamicFontSize(text, baseSize = 12) {
  const wordCount = text.split(' ').length;
  if (wordCount > 60) return `${baseSize - 4}px`;
  if (wordCount > 50) return `${baseSize - 2}px`;
  return `${baseSize}px`;
}

function Resume2({ resumeId }) {
  const { resumesData } = useContext(ResumeContext);
  const data = resumesData[resumeId] || {};

  // Helper function to get the width of the proficiency bar
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
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">{data?.name}</h1>
          <p className="text-xl text-orange-600">{data?.designation}</p>
          <p style={{ fontSize: getDynamicFontSize(data.careerObjective, 12), color: '#333' }}>
            {data.careerObjective}
          </p>
        </div>
        {data?.profileImage && (
          <img src={data.profileImage} alt="Profile" className="w-32 h-32 rounded-full object-cover" />
        )}
      </div>

      {/* Contact Information */}
      <div className="flex items-center space-x-6 text-gray-700 text-sm mb-8">
        {data?.phone && (
          <div className="flex items-center space-x-2">
            <FaPhone />
            <span>{data.phone}</span>
          </div>
        )}
        {data?.email && (
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <span>{data.email}</span>
          </div>
        )}
        {data?.linkedin && (
          <div className="flex items-center space-x-2">
            <FaLinkedin />
            <span>{data.linkedin}</span>
          </div>
        )}
        {data?.location && (
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt />
            <span>{data.location}</span>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          {/* Summary Section */}
          {data?.aboutMe && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Summary</h2>
              <p style={{ fontSize: getDynamicFontSize(data.aboutMe, 12), color: '#333' }}>{data.aboutMe}</p>
            </div>
          )}

          {/* Experience Section */}
          {data?.workExperience?.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Experience</h2>
              {data.workExperience.map((job, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-center">
                    <p className="font-bold">{job.title}</p>
                    <p className="text-gray-500">{`${job?.startingDate} - ${job?.endingDate}`}</p>
                  </div>
                  <p className="text-sm text-gray-500 mb-1">{`${job?.company} | ${job?.location}`}</p>
                  <ul className="list-disc pl-5 text-sm text-gray-600">
                    {job.details?.split(',').map((detail, idx) => (
                      <li key={idx} style={{ fontSize: getDynamicFontSize(detail, 12) }}>
                        {detail.trim()}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Projects Section */}
          {data?.projects?.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Projects</h2>
              {data.projects.map((project, index) => (
                <div key={index} className="mb-4">
                  <p className="font-bold">{project.projectTitle}</p>
                  <p className="italic text-sm text-gray-500">{project.projectSubtitle}</p>
                  <div className="flex space-x-4 text-blue-500 text-sm">
                    {project.projectLiveLink && (
                      <a href={project.projectLiveLink} target="_blank" rel="noopener noreferrer">
                        Live website
                      </a>
                    )}
                    {project.clientGithubLink && (
                      <a href={project.clientGithubLink} target="_blank" rel="noopener noreferrer">
                        GitHub (client)
                      </a>
                    )}
                    {project.serverGithubLink && (
                      <a href={project.serverGithubLink} target="_blank" rel="noopener noreferrer">
                        GitHub (server)
                      </a>
                    )}
                  </div>
                  <ul className="list-disc pl-5 text-sm text-gray-600 mt-1">
                    {project.projectDetails?.split(',').map((detail, idx) => (
                      <li key={idx} style={{ fontSize: getDynamicFontSize(detail, 12) }}>
                        {detail.trim()}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm mt-1 text-gray-500">Technologies: {project.Technologies?.join(', ')}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column */}
        <div>
          {/* Education Section */}
          {data?.education?.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Education</h2>
              {data.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <p className="font-bold">{edu.degree}</p>
                  <p className="text-sm text-gray-500">{edu.institutionName}</p>
                  <p className="text-sm text-gray-500">{`${edu.startDate} - ${edu.endDate} | ${edu.location}`}</p>
                  <p className="text-sm text-gray-600">Field of Study: {edu.fieldOfStudy}</p>
                  <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>
                </div>
              ))}
            </div>
          )}

          {/* Skills Section */}
          {data?.skills?.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Tech Skills</h2>
              <div className="flex flex-wrap gap-4">
                {data.skills.map((skill, index) => (
                  <div key={index} className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm">
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Languages Section */}
          {data?.languages?.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Languages</h2>
              {data.languages.map((language, index) => (
                <div key={index} className="mb-2">
                  <p className="font-semibold">{language.name}</p>
                  <div className="bg-gray-200 rounded-full h-2 my-2">
                    <div
                      className="bg-[#434345] h-2 rounded-full"
                      style={{ width: getProficiencyWidth(language.proficiency) }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Interests Section */}
          {data?.interests?.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Hobbies</h2>
              <ul className="list-disc pl-5 text-sm text-gray-600">
                {data.interests.map((interest, index) => (
                  <li key={index} style={{ fontSize: getDynamicFontSize(interest.name, 12) }}>
                    {interest.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Resume2;
