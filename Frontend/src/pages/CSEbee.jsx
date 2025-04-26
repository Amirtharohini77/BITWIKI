import React from 'react';
import { Link } from 'react-router-dom';

const CSEbee = () => {
  return (
    <div className="p-6 text-sm space-y-6">
          <h2 className="text-xl font-semibold mt-4 mb-5 border-b pb-1">BASICS OF ELECTRONICS ENGINEERING [22GE004] 24-25:-</h2>
      {/* Contents Table */}
      <div className="border border-gray-400 w-100 text-center">
        <table className="table-auto border-collapse w-full">
          <thead>
            <tr>
              <th className="border px-40 py-5 text-left bg-gray-200 italic">CONTENTS</th>
            </tr>
          </thead>
          <tbody className="text-blue-600">
            <tr><td className="border px-3 py-4 border border-gray-500">
              <Link
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
              </Link>
            </td></tr>
            <tr><td className="border px-3 py-4 border border-gray-500">
              <Link
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
              </Link>
            </td></tr>
            <tr><td className="border px-3 py-4 border border-gray-500">
              <Link
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
              </Link>
            </td></tr>
            <tr><td className="border px-3 py-4 border border-gray-500">
              <Link
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
              </Link>
            </td></tr>
            <tr><td className="border px-3 py-4 italic border border-gray-500">
              <Link
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
              </Link>
            </td></tr>
          </tbody>
        </table>
      </div>

      {/* Introduction */}
      <section id="introduction">
      <h2 className="text-xl font-semibold mt-4 mb-1 border-b pb-1">INTRODUCTION TO THE COURSE:-</h2>
        <ul className="list-disc pl-15 mt-4 space-y-1">
          <li>The Course covers the basic concepts and principles found in Electronic Engineering. The Course will provide the knowledge on the Energy Transfer and Signals, Signal conditioning using Diodes and Transistors, Digital Logic Synthesis using Diode and Transistors, and Devices for Special Requirements.</li>
        </ul>
      </section>

      {/* Objectives */}
      <section id="objectives">
      <h2 className="text-xl font-semibold mt-4 mb-1 border-b pb-1">COURSE OBJECTIVES:-</h2>
        <ul className="list-disc pl-15 mt-4 space-y-1">
          <li>To Understand the concept of energy transmission through mechanical, electrical and electromagnetic form.</li>
          <li>To Analyze the use of PN Junction Diode and BJT for signal conditioning.</li>
          <li>To apply the working principle of PN Junction Diode and BJT for the design of basic Digital Logic.</li>
          <li>To analyze the working and characteristics of Special Purpose Semiconductor Electronic Devices..</li>
        </ul>
      </section>

      {/* Outcomes */}
      <section id="outcomes">
        <h2 className="text-xl font-semibold mt-4 mb-1 border-b pb-1">COURSE OUTCOMES:-</h2>
        <ol className="list-decimal pl-15 mt-5 space-y-1">
          <li>Understand the need for electrical and electromagnetic signal transmission.</li>
          <li>Analyze the working principle and characteristics of PN junction diode.</li>
          <li>Analyze the working principle and characteristics of Bipolar Junction Transistor.</li>
          <li>Apply the working principle of PN Junction diode and BJT for designing basic Digital Logic functions.</li>
          <li>Analyze the energy conversion needs and working principle of Special purpose electronic devices.</li>
        </ol>
      </section>

      {/* Lesson Plan */}
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

export default CSEbee;
