import React from 'react';

const CSEmat = () => {
  return (
    <div className="p-6 text-sm space-y-6">
      {/* Small Table for Contents */}
      <h1 className="text-2xl font-bold mb-10">B.E. COMPUTER SCIENCE AND ENGINEERING</h1>

      <div className="border border-gray-400 w-100 text-center"> {/* changed from w-fit to w-80 */}
  <table className="table-auto border-collapse w-full">
          <thead>
            <tr>
              <th className="border px-40 py-5 text-left bg-gray-300 italic">Contents [hide]</th>
            </tr>
          </thead>
          <tbody className="text-blue-600">
            <tr><td className="border px-3 py-4 ">1 Introduction to the course</td></tr>
            <tr><td className="border px-3 py-4">2 Course Objectives</td></tr>
            <tr><td className="border px-3 py-4">3 Course Outcomes</td></tr>
            <tr><td className="border px-3 py-4 ">4 Lesson Plan</td></tr>
            <tr><td className="border px-3 py-4 italic">5 QUESTIONS BANK (QB)</td></tr>
          </tbody>
        </table>
      </div>

      {/* Introduction Section */}
      <section>
        <h2 className="text-base font-bold">Introduction to the course</h2>
        <li>This course provides knowledge about mathematical modeling and how to apply mathematical modeling
          concepts to real-time engineering problems. Also, it provides knowledge about how to relate
          mathematical modeling with real-time engineering problems.
          </li>
      </section>

      {/* Objectives Section */}
      <section>
        <h2 className="text-base font-bold">Course Objectives</h2>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>To impart mathematical modeling to describe and explore real-world phenomena and data.</li>
          <li>To provide basic understanding on Linear, quadratic, power and polynomial, exponential, and multi variable models.</li>
          <li>Summarize and apply the methodologies involved in framing the real world problems related to fundamental principles of polynomial equations.</li>
        </ul>
      </section>

      {/* Outcomes Section */}
      <section>
        <h2 className="text-base font-bold">Course Outcomes</h2>
        <ol className="list-decimal pl-5 mt-1 space-y-1">
          <li>Implement the concepts of mathematical modeling based on linear functions in Engineering.</li>
          <li>Implement the concepts of mathematical modeling based on linear functions in Engineering.</li>
          <li>Demonstrate the real-world phenomena and data into Power and Polynomial functions..</li>
          <li>Apply the concept of mathematical modeling of exponential functions in Engineering through regression equations.</li>
          <li>Develop the identification of multivariable functions in the physical dynamical problems.</li>
        </ol>
      </section>

      {/* Placeholder for Lesson Plan (optional for now, can be expanded later) */}
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
                <td className="border px-2 py-1">The geometry of linear equations - Formation of linear equations: Method of least squares</td>
                <td className="border px-2 py-1">1.1</td>
                <td className="border px-2 py-1">1.1</td>
                <td className="border px-2 py-1">DL1</td>
                <td className="border px-2 py-1">FA1</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">1.2</td>
                <td className="border px-2 py-1">Method of regression</td>
                <td className="border px-2 py-1">1.2</td>
                <td className="border px-2 py-1">1.2</td>
                <td className="border px-2 py-1">DL2</td>
                <td className="border px-2 py-1">FA2</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">1.3</td>
                <td className="border px-2 py-1">Method of regression</td>
                <td className="border px-2 py-1">1.3</td>
                <td className="border px-2 py-1">1.3</td>
                <td className="border px-2 py-1">DL3</td>
                <td className="border px-2 py-1">FA3</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">1.4</td>
                <td className="border px-2 py-1">Vector spaces: Basic concepts with examples - Linear combination</td>
                <td className="border px-2 py-1">1.4</td>
                <td className="border px-2 py-1">1.4</td>
                <td className="border px-2 py-1">DL4</td>
                <td className="border px-2 py-1">FA4</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">1.5</td>
                <td className="border px-2 py-1">Eigen values and vectors for non repeated Eigen values</td>
                <td className="border px-2 py-1">1.5</td>
                <td className="border px-2 py-1">1.5</td>
                <td className="border px-2 py-1">DL5</td>
                <td className="border px-2 py-1">FA5</td>
              </tr>                                       
            </tbody>
          </table>
        </section>
    </div>
  );
};

export default CSEmat;
