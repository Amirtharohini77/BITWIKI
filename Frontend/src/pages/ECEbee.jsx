import React from 'react';
import { Link } from 'react-router-dom';

const ECEbee = () => {
  return (
    <div className="p-6 text-sm space-y-6">
    <h2 className="text-xl font-semibold mt-4 mb-5 border-b pb-1">BASICS OF ELECTRICAL ENGINEERING [22GE003] 24-25:-</h2>
      {/* Contents Table */}
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
                    fontWeight: '550'
                  }}
                  onMouseEnter={e => e.target.style.color = '#004080'}
                  onMouseLeave={e => e.target.style.color = '#0000CD'}
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
                    fontWeight: '550'
                  }}
                  onMouseEnter={e => e.target.style.color = '#004080'}
                  onMouseLeave={e => e.target.style.color = '#0000CD'}
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
                    fontWeight: '550'
                  }}
                  onMouseEnter={e => e.target.style.color = '#004080'}
                  onMouseLeave={e => e.target.style.color = '#0000CD'}
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
                    fontWeight: '550'
                  }}
                  onMouseEnter={e => e.target.style.color = '#004080'}
                  onMouseLeave={e => e.target.style.color = '#0000CD'}
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
                    fontWeight: '550'
                  }}
                  onMouseEnter={e => e.target.style.color = '#004080'}
                  onMouseLeave={e => e.target.style.color = '#0000CD'}
                >
                  5 QUESTIONS BANK (QB)
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Introduction */}
      <section id="introduction">
      <h2 className="text-xl font-semibold mt-4 mb-1 border-b pb-1">INTRODUCTION TO THE COURSE:-</h2>
      <ul className="list-disc pl-15 mt-4 space-y-1">
        <li>Electrical engineering is a professional engineering discipline that deals with the study and application of electricity, electromagnetism, and electronics. The term electrical engineering may or may not encompass electronic engineering. Where a distinction is made, electrical engineering is considered to deal with the problems associated with large-scale electrical systems such as power transmission and motor control such as power generation, transmission, distribution, and motor speed control, whereas electronic engineering deals with the study of small-scale electronic systems including computers and integrated circuits. Another way of looking at the distinction is that electrical engineers are usually concerned with using electricity to transmit energy, while electronics engineers are concerned with using electricity to transmit information.</li>
      </ul>
      </section>

      {/* Objectives */}
      <section id="objectives">
      <h2 className="text-xl font-semibold mt-4 mb-1 border-b pb-1">COURSE OBJECTIVES:-</h2>
        <ul className="list-disc pl-15 mt-4 space-y-1">
          <li>To understand the basic concepts of electrical charge and its properties.</li>
          <li>To interpret the formation of electric field due to electric charges.</li>
          <li>To illustrate the concept of magnetic fields due to revolving electron.</li>
          <li>To illustrate the force on moving charges in electric and magnetic field.</li>
          <li>To understand the energy transfer in electro mechanical conversion.</li>
        </ul>
      </section>

      {/* Outcomes */}
      <section id="outcomes">
      <h2 className="text-xl font-semibold mt-4 mb-1 border-b pb-1">COURSE OUTCOMES:-</h2>
        <ol className="list-decimal pl-15 mt-5 space-y-1">
          <li>Explain the basic concepts and properties of electric charge.</li>
          <li>Interpret the significance of electric field and electric dipole formation.</li>
          <li>Represent the formation of magnetic field and magnetic dipole.</li>
          <li>Analyze the force on the moving charges.</li>
          <li>Interpret the concept of energy conversion principle in electromagnetics.</li>
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
              <td className="border px-2 py-1">Properties of charge</td>
              <td className="border px-2 py-1">1.1</td>
              <td className="border px-2 py-1">1.1</td>
              <td className="border px-2 py-1">DL1</td>
              <td className="border px-2 py-1">fa1</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">1.2</td>
              <td className="border px-2 py-1">Forces between multiples of charges</td>
              <td className="border px-2 py-1">1.2</td>
              <td className="border px-2 py-1">1.2</td>
              <td className="border px-2 py-1">DL2</td>
              <td className="border px-2 py-1">fa2</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">1.3</td>
              <td className="border px-2 py-1">Electric charge in conductors and drift of electrons</td>
              <td className="border px-2 py-1">1.3</td>
              <td className="border px-2 py-1">1.3</td>
              <td className="border px-2 py-1">DL3</td>
              <td className="border px-2 py-1">fa3</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">1.4</td>
              <td className="border px-2 py-1">Charges in clouds</td>
              <td className="border px-2 py-1">1.4</td>
              <td className="border px-2 py-1">1.4</td>
              <td className="border px-2 py-1">DL4</td>
              <td className="border px-2 py-1">fa4</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">1.5</td>
              <td className="border px-2 py-1">Electric field due to system of charges and its significance with Electric field line</td>
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

export default ECEbee;