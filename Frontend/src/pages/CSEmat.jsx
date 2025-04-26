import React from 'react';
import { Link } from 'react-router-dom';

const CSEmat = () => {
  return (
    <div className="p-6 text-sm space-y-6">
    <h2 className="text-xl font-semibold mt-4 mb-5 border-b pb-1">ENGINEERING MATHEMATICS I [22MA101] 24-25:-</h2>
      {/* Small Table for Contents */}
      <div className="border border-gray-400 w-100 text-center"> {/* changed from w-fit to w-80 */}
        <table className="table-auto border-collapse w-full">
          <thead>
            <tr>
              <th className="border px-40 py-5 text-left bg-gray-200 italic">CONTENTS</th>
            </tr>
          </thead>
          <tbody className="text-blue-600">
            <tr><td className="border px-3 py-4 border border-gray-500"><Link
              to="#introduction"
              style={{
                textDecoration: 'none',
                color: '#0000CD',
                fontWeight: '550'
              }}
              onMouseEnter={e => e.target.style.color = '#004080'}
              onMouseLeave={e => e.target.style.color = '#0000CD'}
            >
              1 Introduction to the course
            </Link></td></tr>
            <tr><td className="border px-3 py-4 border border-gray-500"><Link
              to="#objectives"
              style={{
                textDecoration: 'none',
                color: '#0000CD',
                fontWeight: '550'
              }}
              onMouseEnter={e => e.target.style.color = '#004080'}
              onMouseLeave={e => e.target.style.color = '#0000CD'}
            >
              2 Course Objectives
            </Link></td></tr>
            <tr><td className="border px-3 py-4 border border-gray-500"><Link
              to="#outcomes"
              style={{
                textDecoration: 'none',
                color: '#0000CD',
                fontWeight: '550'
              }}
              onMouseEnter={e => e.target.style.color = '#004080'}
              onMouseLeave={e => e.target.style.color = '#0000CD'}
            >
              3 Course Outcomes
            </Link></td></tr>
            <tr><td className="border px-3 py-4 border border-gray-500"><Link
              to="#lesson-plan"
              style={{
                textDecoration: 'none',
                color: '#0000CD',
                fontWeight: '550'
              }}
              onMouseEnter={e => e.target.style.color = '#004080'}
              onMouseLeave={e => e.target.style.color = '#0000CD'}
            >
              4 Lesson Plan
            </Link></td></tr>
            <tr><td className="border px-3 py-4 italic border border-gray-500"><Link
              to="#questions-bank"
              style={{
                textDecoration: 'none',
                color: '#0000CD',
                fontWeight: '550'
              }}
              onMouseEnter={e => e.target.style.color = '#004080'}
              onMouseLeave={e => e.target.style.color = '#0000CD'}
            >
              5 QUESTIONS BANK (QB)
            </Link></td></tr>
          </tbody>
        </table>
      </div>

      {/* Introduction Section */}
      <section id="introduction">
      <h2 className="text-xl font-semibold mt-4 mb-1 border-b pb-1">INTRODUCTION TO THE COURSE:-</h2>
        <ul className="list-disc pl-15 mt-4 space-y-1">
          <li>This course provides knowledge about mathematical modeling and how to apply mathematical modeling concepts to real-time engineering problems. Also, it provides knowledge about how to relate mathematical modeling with real-time engineering problems.</li>
        </ul>
      </section>

      {/* Objectives Section */}
      <section id="objectives">
      <h2 className="text-xl font-semibold mt-4 mb-1 border-b pb-1">COURSE OBJECTIVES:-</h2>
        <ul className="list-disc pl-15 mt-4 space-y-1">
          <li>To impart mathematical modeling to describe and explore real-world phenomena and data.</li>
          <li>To provide basic understanding on Linear, quadratic, power and polynomial, exponential, and multivariable models.</li>
          <li>Summarize and apply the methodologies involved in framing the real world problems related to fundamental principles of polynomial equations.</li>
        </ul>
      </section>

      {/* Outcomes Section */}
      <section id="outcomes">
      <h2 className="text-xl font-semibold mt-4 mb-1 border-b pb-1">COURSE OUTCOMES:-</h2>
        <ol className="list-decimal pl-15 mt-5 space-y-1">
          <li>Implement the concepts of mathematical modeling based on linear functions in Engineering.</li>
          <li>Implement the concepts of mathematical modeling based on linear functions in Engineering.</li>
          <li>Demonstrate the real-world phenomena and data into Power and Polynomial functions.</li>
          <li>Apply the concept of mathematical modeling of exponential functions in Engineering through regression equations.</li>
          <li>Develop the identification of multivariable functions in the physical dynamical problems.</li>
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

export default CSEmat;
