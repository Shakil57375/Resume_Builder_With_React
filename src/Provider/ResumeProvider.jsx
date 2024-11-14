// ResumeContext.js
import React, { createContext, useState } from 'react';

export const ResumeContext = createContext();

const defaultResumeData = {
  name: "Shakil Hossain",
  designation: "Jr. Front-end Developer",
  careerObjective: "To secure a challenging front-end developer position, leveraging skills in HTML, CSS, and JavaScript to create innovative, user-friendly web applications.",
  aboutMe: "Front-End Developer with a passion for crafting elegant and intuitive user interfaces. Proficient in HTML, CSS, and JavaScript, with experience in responsive web design and cross-browser compatibility.",
  email: "shakil537375@gmail.com",
  github: "https://github.com/Shakil537375",
  phone: "01814265294",
  linkedin: "https://www.linkedin.co",
  location: "Cumilla, Bangladesh",
  skype: "https://join.skype.com/",
  profileImage: "https://r2.erweima.ai/imgcompressed/img/compressed_a629a7869316bddfdd12ad9bd8683db7.webp",
  education: [
    {
      gpa: "3.69",
      startDate: "2021-03-14",
      endDate: "2025-02-14",
      graduationDate: "2025-03-14",
      location: "Feni, Bangladesh",
      institutionName: "Feni University",
      fieldOfStudy: "Computer Science",
      degree: "Bachelor's"
    }
  ],
  interests: [
    { name: "I don't have any interest" },
    { name: "I don't have any interest" }
  ],
  languages: [
    {
      name: "Bangla",
      proficiency: "native"
    },
    {
      name: "English",
      proficiency: "intermediate"
    }
  ],
  projects: [
    {
      projectTitle: "Toy-Generator",
      projectSubtitle: "A toy generator website",
      projectLiveLink: "https://assignment-eleven-7252c.web.app/",
      clientGithubLink: "https://github.com/Shakil537375/toy-generator-client",
      serverGithubLink: "https://github.com/Shakil537375/toy-generator-server",
      projectDetails: "This is a toy generator website which includes sports toys. On this website anyone can explore many kinds of sports toys. They can select toys based on various categories.",
      technologies : ["React.js", "Tailwind css", "firesebase" , "react-hook-format", "MongoDB" , "express.js"],
    },
    {
      projectTitle: "The Universal News",
      projectSubtitle: "A Newspaper website",
      projectLiveLink: "https://the-universal-news.vercel.app/",
      clientGithubLink: "https://github.com/mthitimuri/the-universal-news",
      serverGithubLink: "",
      projectDetails: "It's a newspaper website and a one-stop solution for all your news needs. It is a team project, and I have contributed additional features to it.",
      technologies : ["Next.js", "Tailwind css", "MongoDB" , "express.js"],
    }
  ],
  skills: [
    {
      name: "Communicative",
      level: "intermediate"
    },
    {
      name: "Cooking",
      level: "beginner"
    }
  ],
  workExperience: [
    {
      title: "Jr. Front-End Developer",
      company: "Bd Calling (Spark Tech)",
      location: "Banasree, Dhaka",
      startingDate: "2021",
      endingDate: "Present",
      details: "I have learned react-pdf, I have learned react-print, I have learned stepper"
    },
    {
      title: "Graphics Designer",
      company: "Shakil's Tech Yard",
      location: "Cumilla",
      startingDate: "2021",
      endingDate: "2024",
      details: "I did my own project, I worked for my friends"
    }
  ]
};

export function ResumeProvider({ children }) {
  const [resumesData, setResumesData] = useState({
    resume1: defaultResumeData,
    resume2: defaultResumeData
  });

  const setResumeData = (resumeId, data) => {
    setResumesData((prevData) => ({
      ...prevData,
      [resumeId]: data
    }));
  };

  return (
    <ResumeContext.Provider value={{ resumesData, setResumeData }}>
      {children}
    </ResumeContext.Provider>
  );
}
