import React from 'react';
import { Link } from 'react-router-dom';

const CSEche = () => {
  return (
    <div className="p-6 text-sm space-y-6">
      <h2 className="text-xl font-semibold mt-4 mb-5 border-b pb-1">ENGINEERING CHEMISTRY I [22CH103] 24-25:-</h2>
      {/* Contents Table */}
      <div className="border border-gray-400 w-100 text-center">
        <table className="table-auto border-collapse w-full">
          <thead>
            <tr>
              <th className="border px-40 py-5  text-left bg-gray-200 italic">CONTENTS</th>
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
        <ul className="list-disc pl-15 mt-5 space-y-1">
            <li>Engineering chemistry course imparts the knowledge of basic chemistry and shows how chemistry is applied to use in Computer Science and Engineering .</li>
        </ul>
      </section>

      {/* Objectives */}
      <section id="objectives">
      <h2 className="text-xl font-semibold mt-4 mb-1 border-b pb-1">COURSE OBJECTIVES:-</h2>
        <ul className="list-disc pl-15 mt-4 space-y-1">
          <li>Understand the origin of elements from the universe.</li>
          <li>Outline the properties of elements in the periodic table.</li>
          <li>Analyse the different types of bond formed during chemical reactions and its reaction thermodynamics.</li>
          <li>Summarize different states of matter based on atomic arrangement.</li>
        </ul>
      </section>

      {/* Outcomes */}
      <section id="outcomes">
      <h2 className="text-xl font-semibold mt-4 mb-1 border-b pb-1">COURSE OUTCOMES:-</h2>
        <ol className="list-decimal pl-15 space-y-1 mt-5">
          <li>Understand nuclear transmutation reactions that lead to the formation of elements in the universe</li>
          <li>Illustrate atomic structure of elements in the periodic table and interpret the periodic trends in properties of elements with its anomaly</li>
          <li>Apply the conditions for the formation of different types of chemical bonds and predict the minimum energy required for a reaction to occur</li>
          <li>Analyse endothermic and exothermic processes and exchange of energy during chemical reactions</li>
          <li>Analyse whether the given matter is a solid, liquid, gas, or plasma and interpret the arrangement of atoms

</li>
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
              <td className="border px-2 py-1">Elements and Sun - Creation and early evolution of matter in the universe - stellar nucleosynthesis</td>
              <td className="border px-2 py-1">1.1</td>
              <td className="border px-2 py-1">1.1</td>
              <td className="border px-2 py-1">DL1</td>
              <td className="border px-2 py-1">FA1</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">1.2</td>
              <td className="border px-2 py-1">Elements and Sun - Stellar evolution - Birth of stars</td>
              <td className="border px-2 py-1">1.2</td>
              <td className="border px-2 py-1">1.2</td>
              <td className="border px-2 py-1">DL2</td>
              <td className="border px-2 py-1">FA2</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">1.3</td>
              <td className="border px-2 py-1">Hypernova – Supernova</td>
              <td className="border px-2 py-1">1.3</td>
              <td className="border px-2 py-1">1.3</td>
              <td className="border px-2 py-1">DL3</td>
              <td className="border px-2 py-1">FA3</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">1.4</td>
              <td className="border px-2 py-1">Hydrogen Burning</td>
              <td className="border px-2 py-1">1.4</td>
              <td className="border px-2 py-1">1.4</td>
              <td className="border px-2 py-1">DL4</td>
              <td className="border px-2 py-1">FA4</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">1.5</td>
              <td className="border px-2 py-1">Dying Stars- nucleosynthesis of carbon and oxygen –advanced burning stages</td>
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

export default CSEche;
