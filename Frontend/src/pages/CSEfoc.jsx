import React from 'react';
import { Link } from 'react-router-dom';

const CSEfoc = () => {
  return (
    <div className="p-6 text-sm space-y-6">
    <h2 className="text-xl font-semibold mt-4 mb-5 border-b pb-1">FUNDAMENTALS OF COMPUTING [22GE001] 24-25:-</h2>
      {/* Small Table for Contents */}
      <div className="border border-gray-400 w-100 text-center">
        <table className="table-auto border-collapse w-full">
          <thead>
            <tr>
              <th className="border px-40 py-5 text-left bg-gray-200 italic">C0NTENTS</th>
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
        <li>This course is generic in nature, anyone from any discipline can opt this course to learn computer basics. This course deals with fundamentals of computer, which includes codes & combinations, data encoding using binary, input / output devices and it also deals with the hardware and software aspects of the computer like operating system, application software and system software and development.</li>
      </ul>
      </section>

      {/* Objectives Section */}
      <section id="objectives">
      <h2 className="text-xl font-semibold mt-4 mb-1 border-b pb-1">COURSE OBJECTIVES:-</h2>
        <ul className="list-disc pl-15 mt-4 space-y-1">
          <li>Introduce basic computer science concepts and programming languages.</li>
          <li>Provide an understanding of algorithmic problem-solving.</li>
          <li>Explore practical applications of computing in real-world scenarios.</li>
        </ul>
      </section>

      {/* Outcomes Section */}
      <section id="outcomes">
      <h2 className="text-xl font-semibold mt-4 mb-1 border-b pb-1">COURSE OUTCOMES:-</h2>
        <ol className="list-decimal pl-15 mt-5 space-y-1">
          <li>Develop basic programming skills in a high-level programming language.</li>
          <li>Understand and apply common algorithms to solve problems.</li>
          <li>Design simple computer-based solutions for real-world problems.</li>
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
              <td className="border px-2 py-1">Communication using Mores and Braille binary codes</td>
              <td className="border px-2 py-1">1.1</td>
              <td className="border px-2 py-1">1.1</td>
              <td className="border px-2 py-1">DL1</td>
              <td className="border px-2 py-1">FA1</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">1.2</td>
              <td className="border px-2 py-1">Digitizing letters, numbers and objects using binary codes</td>
              <td className="border px-2 py-1">1.2</td>
              <td className="border px-2 py-1">1.2</td>
              <td className="border px-2 py-1">DL2</td>
              <td className="border px-2 py-1">FA2</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">1.3</td>
              <td className="border px-2 py-1">Performing simple operations: addition through binary codes.</td>
              <td className="border px-2 py-1">1.3</td>
              <td className="border px-2 py-1">1.3</td>
              <td className="border px-2 py-1">DL3</td>
              <td className="border px-2 py-1">FA3</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">1.4</td>
              <td className="border px-2 py-1">Performing simple operations: Half adder and Full adder</td>
              <td className="border px-2 py-1">1.4</td>
              <td className="border px-2 py-1">1.4</td>
              <td className="border px-2 py-1">DL4</td>
              <td className="border px-2 py-1">FA4</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">1.5</td>
              <td className="border px-2 py-1">Communication to computing devices through various input sources</td>
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

export default CSEfoc;
