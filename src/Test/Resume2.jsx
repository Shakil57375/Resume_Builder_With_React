
function Resume2() {
  return (
    <div className="text-left" style={{ width: "794px" }}>
      <h2 className="text-2xl font-bold text-gray-800">Sherlock Holmes</h2>
      <p className="text-gray-500">Consulting Detective</p>
      <p className="text-gray-600">
        Highly experienced detective with a proven track record of solving
        complex cases using innovative methods...
      </p>

      {/* Work Experience Section */}
      <section className="mt-4">
        <h3 className="text-xl font-semibold">Work Experience</h3>
        <div>
          <p className="font-bold">Consulting Detective</p>
          <p className="text-gray-500">Self-Employed | London</p>
          <p className="text-gray-600">Mar 1881 - Present</p>
          <ul className="list-disc ml-4">
            <li>Solve complex criminal cases...</li>
            <li>Develop innovative detective methods...</li>
          </ul>
        </div>
        <div>
          <p className="font-bold">Chemist</p>
          <p className="text-gray-500">University of London | London</p>
          <p className="text-gray-600">Sep 1878 - Feb 1881</p>
          <ul className="list-disc ml-4">
            <li>Conducted research in organic chemistry...</li>
            <li>Published several papers...</li>
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section className="mt-4">
        <h3 className="text-xl font-semibold">Education</h3>
        <div>
          <p className="font-bold">Bachelor of Science in Chemistry</p>
          <p className="text-gray-500">University of Cambridge | 1878</p>
        </div>
        <div>
          <p className="font-bold">A Levels</p>
          <p className="text-gray-500">Eton College | 1874</p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mt-4">
        <h3 className="text-xl font-semibold">Skills</h3>
        <p>Problem Solving, Logical Reasoning, Forensic Analysis, Observation, Research</p>
      </section>

      {/* Hobbies Section */}
      <section className="mt-4">
        <h3 className="text-xl font-semibold">Hobbies</h3>
        <p>Violin, Boxing, Fencing, Chemistry, Beekeeping</p>
      </section>
    </div>
  );
}

export default Resume2;
