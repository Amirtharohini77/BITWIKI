import React from 'react';
import { Link } from 'react-router-dom';

const CSEphy = () => {
  return (
    <div className="p-6 text-sm space-y-6">
    <h2 className="text-xl font-semibold mt-4 mb-5 border-b pb-1">ENGINEERING PHYSICS [22PH102] 24-25:-</h2>
      {/* Small Table for Contents */}
      <div className="border border-gray-400 w-100 text-center">
        <table className="table-auto border-collapse w-full">
          <thead>
            <tr>
              <th className="border px-40 py-5 text-left bg-gray-200 italic">CONTENTS</th>
            </tr>
          </thead>
          <tbody className="text-blue-600">
            <tr>
              <td className="border px-3 py-4 border border-gray-500">
                <Link
                  to="#introduction"
                  style={{
                    textDecoration: 'none',
                    color: '#0000CD',
                    fontWeight: '550',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#004080')}
                  onMouseLeave={(e) => (e.target.style.color = '#0000CD')}
                >
                  1 Introduction to the course
                </Link>
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-4 border border-gray-500">
                <Link
                  to="#objectives"
                  style={{
                    textDecoration: 'none',
                    color: '#0000CD',
                    fontWeight: '550',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#004080')}
                  onMouseLeave={(e) => (e.target.style.color = '#0000CD')}
                >
                  2 Course Objectives
                </Link>
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-4 border border-gray-500">
                <Link
                  to="#outcomes"
                  style={{
                    textDecoration: 'none',
                    color: '#0000CD',
                    fontWeight: '550',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#004080')}
                  onMouseLeave={(e) => (e.target.style.color = '#0000CD')}
                >
                  3 Course Outcomes
                </Link>
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-4 border border-gray-500">
                <Link
                  to="#lesson-plan"
                  style={{
                    textDecoration: 'none',
                    color: '#0000CD',
                    fontWeight: '550',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#004080')}
                  onMouseLeave={(e) => (e.target.style.color = '#0000CD')}
                >
                  4 Lesson Plan
                </Link>
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-4 italic border border-gray-500">
                <Link
                  to="#questions-bank"
                  style={{
                    textDecoration: 'none',
                    color: '#0000CD',
                    fontWeight: '550',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#004080')}
                  onMouseLeave={(e) => (e.target.style.color = '#0000CD')}
                >
                  5 QUESTIONS BANK (QB)
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Introduction Section */}
      <section id="introduction">
      <h2 className="text-xl font-semibold mt-4 mb-1 border-b pb-1">INTRODUCTION TO THE COURSE:-</h2>
        <ul className="list-disc pl-15 mt-4 space-y-1">
        <li>For engineers, knowledge of Physics is essential to understand and transform the world around us. This course is designed for students with little or no physics background. It focuses on illustrating and developing an understanding of the interplay between problem solving, mathematics and physics in engineering. The course examines some of the core topics in physics essential for further studies in engineering such as mechanics, vibrations and waves, and energy.</li>
        </ul>
      </section>

      {/* Objectives Section */}
      <section id="objectives">
      <h2 className="text-xl font-semibold mt-4 mb-1 border-b pb-1">COURSE OBJECTIVES:-</h2>
        <ul className="list-disc pl-15 mt-4 space-y-1">
          <li>Illustrate the concept of energy and its types.</li>
          <li>Understand the propagation and exchange of energy.</li>
          <li>Categorize the properties of materials based on the energy possession.</li>
        </ul>
      </section>

      {/* Outcomes Section */}
      <section id="outcomes">
      <h2 className="text-xl font-semibold mt-4 mb-1 border-b pb-1">COURSE OUTCOMES:-</h2>
        <ol className="list-decimal pl-15 mt-5 space-y-1">
          <li>Illustrate the concept of energy and apply the same to classify mechanical energy possessed by a system.</li>
          <li>Classify different kinds of motion and oscillations of a body based on vibrational energy.</li>
          <li>Infer the concept of propagation of energy as transverse and longitudinal waves.</li>
          <li>Apply the principles of thermodynamics to understand the exchange of energy between systems.</li>
          <li>Outline the physical and mechanical properties of materials based on the nature of energy possessed.</li>
        </ol>
      </section>

      {/* Lesson Plan Section */}
      <section id="lesson-plan">
      <h2 className="text-xl font-bold mt-5 mb-3 border-b pb-1">LESSON PLAN:-</h2>
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
       {/* QUESTIONS BANK Section */}
       <section id="questions-bank">
       <h2 className="text-xl font-semibold mt-4 mb-1 border-b pb-1">QUESTION BANK (QB):-</h2>
       <ul className="list-disc pl-15 mt-4 space-y-1">
        <p>This section contains a collection of frequently asked questions and answers based on the course topics, which will help in preparing for assessments.</p>
        </ul>
      </section>
    </div>
  );
};

export default CSEphy;
