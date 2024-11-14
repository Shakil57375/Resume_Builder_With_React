import { FaGithub, FaLinkedin, FaSkype } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

function Resume1() {
  const defaultData = {
    personalInfo: [
      { field: "Name", value: "Loraine Hudson" },
      { field: "Designation", value: "Bank Teller" },
      {
        field: "Career Objective",
        value:
          "Analytical, detail-oriented professional with 8+ years of extensive experience...",
      },
      {
        field: "About Me",
        value:
          "Lorem ipsum dolor sit amet, consectetur adip nonum sociis natoque penatibus et justo euismod tempor invidunt ut labore et dolore magna aliqu Lorem ipsum dolor sit amet, consectetur adip nonum sociis natoque pen at vero eu fugiat nulla pariatur et",
      },
      { field: "Email", value: "loraine@gmail.com" },
      { field: "Phone", value: "123-456-7890" },
      { field: "Location", value: "Philadelphia, PA" },
      { field: "LinkedIn", value: "linkedin.com/in/loraine.hudson" },
      { field: "GitHub", value: "github.com/loraine" },
      { field: "Skype", value: "loraine.skype" },
    ],
    profileImage:
      "https://plus.unsplash.com/premium_photo-1682096259050-361e2989706d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eW91bmclMjBtYW58ZW58MHx8MHx8fDA%3D",
    workExperience: [
      {
        title: "Bank Teller",
        company: "Double Star National Bank",
        location: "Harrisburg, PA",
        date: "08/2017 - Present",
        details: [
          "Administered the balancing of the branch’s vaults, Automated Teller Machines (ATMs), Teller Cash Dispensers (TCDs), and Teller Cash Recyclers (TCRs) with a daily total of more than $200K.",
        ],
      },
      {
        title: "Bank Teller/Lead",
        company: "Bank of Pennsylvania, Lancaster Branch",
        location: "Lancaster, PA",
        date: "07/2013 - 06/2017",
        details: [
          "Demonstrated leadership in implementing adequate training to team members, resulting in improved performance and customer service delivery.",
        ],
      },
    ],
    education: [
      {
        degree: "MS in Banking and Finance",
        institution: "The University of Philadelphia",
        location: "Philadelphia, PA",
        year: "2010 - 2012",
      },
    ],
    skills: [{ name: "Cash Drawer Balancing", level: 90 }],
    languages: [
      { name: "English", level: 8 },
      { name: "Spanish", level: 23 },
    ],
    certifications: [
      "Certified Bank Teller (06/2013)",
      "Teller Specialist Certificate Program (06/2013)",
    ],
    honorsAwards: [
      "Bank Teller of the Year (2019)",
      "Employee of the Month - 8 times in 4 years",
    ],
    interests: ["Mediation", "Archery", "Gardening", "Photography"],
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <div className="basis-3/12 bg-[#858588] text-white px-6 py-8 min-h-screen">
        {/* Profile Image */}
        <div className="h-40 w-40 mx-auto mb-4">
          <img
            src={defaultData.profileImage}
            alt="Profile"
            className="w-full h-full rounded-full"
          />
        </div>

        {/* Personal Information */}
        <div className="text-start">
          <h2 className="text-xl font-bold mb-2">
            {defaultData.personalInfo[0].value}
          </h2>
          <p className="text-gray-300">{defaultData.personalInfo[1].value}</p>

          {/* About Me */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold">About Me</h3>
            <p className="text-gray-200 ">{defaultData.personalInfo[3].value}</p>
          </div>

          {/* Contact Information */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-4 mt-4">
              <div className="flex items-center gap-2 ">
                {" "}
                <div>
                  <MdEmail className="text-2xl mt-1" />
                </div>{" "}
                <div>{defaultData.personalInfo[4].value}</div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <MdPhone className="text-2xl mt-1" />
                </div>
                <div>{defaultData.personalInfo[5].value}</div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <MdLocationOn className="text-2xl mt-1" />
                </div>
                <div>{defaultData.personalInfo[6].value}</div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <FaLinkedin className="text-2xl mt-1" />
                </div>
                <div>{defaultData.personalInfo[7].value}</div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <FaGithub className="text-2xl mt-1" />
                </div>
                <div>{defaultData.personalInfo[8].value}</div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <FaSkype className="text-2xl mt-1" />
                </div>
                <div>{defaultData.personalInfo[9].value}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="basis-9/12 bg-white p-6 min-h-screen">
        {/* Work Experience with Timeline */}
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
          <div className="relative">
            {defaultData.workExperience.map((job, index) => (
              <div key={index} className="flex mb-8">
                {/* Left Side: Company, Location, Date */}
                <div className="w-1/3 text-sm text-gray-600 pr-4">
                  <span className="font-bold">{job.company}</span>
                  <div>{job.location}</div>
                  <div>{job.date}</div>
                </div>

                {/* Timeline Line and Dot */}
                <div className="relative flex items-start">
                  <span className="absolute w-3 h-3 bg-gray-600 rounded-full -left-[5px]"></span>
                </div>

                {/* Right Side: Job Title and Details */}
                <div className="w-2/3 border-l-2 border-gray-300 pl-8">
                  <h4 className="text-md font-semibold mb-2">{job.title}</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    {job.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education with Timeline */}
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="relative ">
            {defaultData?.education?.map((edu, index) => (
              <div key={index} className="flex mb-8">
                {/* Left Side: Institution, Location, Date */}
                <div className="w-1/3 text-sm text-gray-600 pr-4">
                  <span className="font-bold">{edu.institution}</span>
                  <div>{edu.location}</div>
                  <div>{edu.date}</div>
                </div>

                {/* Timeline Line and Dot */}
                <div className="relative flex items-start">
                  <span className="absolute w-3 h-3 bg-gray-600 rounded-full -left-[5px] top-0"></span>
                </div>

                {/* Right Side: Degree and Details */}
                <div className="w-2/3  border-l-2 border-gray-300 pl-8">
                  <h4 className="text-md font-semibold mb-2">{edu.degree}</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    {edu?.details?.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          {defaultData.skills.map((skill, index) => (
            <div key={index} className="mb-2">
              <p className="font-semibold">{skill.name}</p>
              <div className="bg-gray-200 rounded-full h-2 my-2">
                <div
                  className="bg-[#434345] h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="mb-0">
          <h2 className="text-2xl font-semibold mb-2">Languages</h2>
          {defaultData.languages.map((language, index) => (
            <div key={index} className="mb-2">
              <p className="font-semibold">{language.name}</p>
              <div className="bg-gray-200 rounded-full h-2 my-2">
                <div
                  className="bg-[#434345] h-2 rounded-full"
                  style={{ width: `${language.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resume1;
