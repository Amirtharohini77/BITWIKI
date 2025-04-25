import React from 'react';

const CSEfoc = () => {
  return (
    <div className="p-6 text-sm space-y-6">
      {/* Small Table for Contents */}
      <div className="border border-gray-400 w-fit text-sm">
        <table className="table-auto border-collapse">
          <thead>
            <tr>
              <th className="border px-3 py-1 text-left bg-gray-100 font-semibold">Contents [hide]</th>
            </tr>
          </thead>
          <tbody className="text-blue-600">
            <tr><td className="border px-3 py-1">1 Introduction to the course</td></tr>
            <tr><td className="border px-3 py-1">2 Course Objectives</td></tr>
            <tr><td className="border px-3 py-1">3 Course Outcomes</td></tr>
            <tr><td className="border px-3 py-1">4 Lesson Plan</td></tr>
            <tr><td className="border px-3 py-1 italic">5 QUESTIONS BANK (QB)</td></tr>
          </tbody>
        </table>
      </div>

      {/* Introduction Section */}
      <section>
        <h2 className="text-base font-bold">Introduction to the course</h2>
        <p>
          This course provides an introduction to computing. It covers the basics of computer hardware, software, programming languages, and algorithms. The focus is on the fundamental principles and concepts that underlie modern computing systems, as well as their applications in real-world scenarios.
        </p>
      </section>

      {/* Objectives Section */}
      <section>
        <h2 className="text-base font-bold">Course Objectives</h2>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>Introduce basic computer science concepts and programming languages.</li>
          <li>Provide an understanding of algorithmic problem-solving.</li>
          <li>Explore practical applications of computing in real-world scenarios.</li>
        </ul>
      </section>

      {/* Outcomes Section */}
      <section>
        <h2 className="text-base font-bold">Course Outcomes (COs)</h2>
        <ol className="list-decimal pl-5 mt-1 space-y-1">
          <li>Develop basic programming skills in a high-level programming language.</li>
          <li>Understand and apply common algorithms to solve problems.</li>
          <li>Design simple computer-based solutions for real-world problems.</li>
        </ol>
      </section>

      {/* Lesson Plan Section */}
      <section id="lesson-plan">
        <h2 className="text-lg font-bold mb-2">Lesson Plan</h2>
        <table className="w-full border border-gray-400 text-sm text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-2 py-1">UNIT No.</th>
              <th className="border px-2 py-1">TOPIC</th>
              <th className="border px-2 py-1">LECTURE MATERIAL</th>
              <th className="border px-2 py-1">LECTURE VIDEO</th>
              <th className="border px-2 py-1">DISCOURSE LINK</th>
              <th className="border px-2 py-1">ASSESSMENT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">1.1</td>
              <td className="border px-2 py-1">Communication using Mores and Braille binary codes</td>
              <td className="border px-2 py-1">1.1</td>
              <td className="border px-2 py-1">1.1</td>
              <td className="border px-2 py-1">DL1</td>
              <td className="border px-2 py-1">fa1</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">1.2</td>
              <td className="border px-2 py-1">Digitizing letters, numbers and objects using binary codes</td>
              <td className="border px-2 py-1">1.2</td>
              <td className="border px-2 py-1">1.2</td>
              <td className="border px-2 py-1">DL2</td>
              <td className="border px-2 py-1">fa2</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">1.3</td>
              <td className="border px-2 py-1">Performing simple operations: addition through binary codes.</td>
              <td className="border px-2 py-1">1.3</td>
              <td className="border px-2 py-1">1.3</td>
              <td className="border px-2 py-1">DL3</td>
              <td className="border px-2 py-1">fa3</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">1.4</td>
              <td className="border px-2 py-1">	Performing simple operations: Half adder and Full adder</td>
              <td className="border px-2 py-1">1.4</td>
              <td className="border px-2 py-1">1.4</td>
              <td className="border px-2 py-1">DL4</td>
              <td className="border px-2 py-1">fa4</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">1.5</td>
              <td className="border px-2 py-1">Communication to computing devices through various input sources</td>
              <td className="border px-2 py-1">1.5</td>
              <td className="border px-2 py-1">1.5</td>
              <td className="border px-2 py-1">DL5</td>
              <td className="border px-2 py-1">fa5</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default CSEfoc;
