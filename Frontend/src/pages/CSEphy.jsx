import React from 'react';

const CSEphy = () => {
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
          For engineers, knowledge of Physics is essential to understand and transform the world around us. This course is designed for students with little or no physics background. It focuses on illustrating and developing an understanding of the interplay between problem solving, mathematics, and physics in engineering. The course examines core topics in physics such as mechanics, vibrations, waves, and energy.
        </p>
      </section>

      {/* Objectives Section */}
      <section>
        <h2 className="text-base font-bold">Course Objectives</h2>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>Illustrate the concept of energy and its types.</li>
          <li>Understand the propagation and exchange of energy.</li>
          <li>Categorize the properties of materials based on the energy possession.</li>
        </ul>
      </section>

      {/* Outcomes Section */}
      <section>
        <h2 className="text-base font-bold">Course Outcomes (COs)</h2>
        <ol className="list-decimal pl-5 mt-1 space-y-1">
          <li>Illustrate the concept of energy and apply the same to classify mechanical energy possessed by a system.</li>
          <li>Classify different kinds of motion and oscillations of a body based on vibrational energy.</li>
          <li>Infer the concept of propagation of energy as transverse and longitudinal waves.</li>
          <li>Apply the principles of thermodynamics to understand the exchange of energy between systems.</li>
          <li>Outline the physical and mechanical properties of materials based on the nature of energy possessed.</li>
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
              <td className="border px-2 py-1">Concept of energy and its types</td>
              <td className="border px-2 py-1">1.1</td>
              <td className="border px-2 py-1">1.1</td>
              <td className="border px-2 py-1">DL1</td>
              <td className="border px-2 py-1">fa1</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">1.2</td>
              <td className="border px-2 py-1">Mechanical energy: translation, rotation and vibration</td>
              <td className="border px-2 py-1">1.2</td>
              <td className="border px-2 py-1">1.2</td>
              <td className="border px-2 py-1">DL2</td>
              <td className="border px-2 py-1">fa2</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">1.3</td>
              <td className="border px-2 py-1">Kinetic & potential energies and its conservation</td>
              <td className="border px-2 py-1">1.3</td>
              <td className="border px-2 py-1">1.3</td>
              <td className="border px-2 py-1">DL3</td>
              <td className="border px-2 py-1">fa3</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">1.4</td>
              <td className="border px-2 py-1">Conservation of work and energy and laws of motion</td>
              <td className="border px-2 py-1">1.4</td>
              <td className="border px-2 py-1">1.4</td>
              <td className="border px-2 py-1">DL4</td>
              <td className="border px-2 py-1">fa4</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">1.5</td>
              <td className="border px-2 py-1">Minimization of potential energy and equilibrium</td>
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

export default CSEphy;
