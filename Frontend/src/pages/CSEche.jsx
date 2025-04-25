import React from 'react';

const CSEche = () => {
  return (
    <div className="p-6 text-sm space-y-6">
      {/* Contents Table */}
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

      {/* Introduction */}
      <section>
        <h2 className="text-base font-bold">Introduction to the course</h2>
        <p>This course introduces basic chemical principles relevant to engineering. It includes atomic structure, chemical bonding, thermodynamics, and materials chemistry that support engineering applications.</p>
      </section>

      {/* Objectives */}
      <section>
        <h2 className="text-base font-bold">Course Objectives</h2>
        <ul className="list-disc pl-5 space-y-1 mt-1">
          <li>Understand fundamental chemical concepts and their engineering relevance.</li>
          <li>Develop problem-solving skills through chemical equations and reactions.</li>
          <li>Analyze the role of materials chemistry in modern engineering practices.</li>
        </ul>
      </section>

      {/* Outcomes */}
      <section>
        <h2 className="text-base font-bold">Course Outcomes (COs)</h2>
        <ol className="list-decimal pl-5 space-y-1 mt-1">
          <li>Apply chemical principles to solve basic engineering problems.</li>
          <li>Explain the behavior of materials based on their chemical composition.</li>
          <li>Utilize thermodynamics concepts in real-world chemical processes.</li>
        </ol>
      </section>

      {/* Lesson Plan */}
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
              <td className="border px-2 py-1">Elements and Sun - Creation and early evolution of matter in the universe - stellar nucleosynthesis</td>
              <td className="border px-2 py-1">1.1</td>
              <td className="border px-2 py-1">1.1</td>
              <td className="border px-2 py-1">DL1</td>
              <td className="border px-2 py-1">fa1</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">1.2</td>
              <td className="border px-2 py-1">Elements and Sun - Stellar evolution - Birth of stars</td>
              <td className="border px-2 py-1">1.2</td>
              <td className="border px-2 py-1">1.2</td>
              <td className="border px-2 py-1">DL2</td>
              <td className="border px-2 py-1">fa2</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">1.3</td>
              <td className="border px-2 py-1">Hypernova – Supernova</td>
              <td className="border px-2 py-1">1.3</td>
              <td className="border px-2 py-1">1.3</td>
              <td className="border px-2 py-1">DL3</td>
              <td className="border px-2 py-1">fa3</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">1.4</td>
              <td className="border px-2 py-1">Hydrogen Burning</td>
              <td className="border px-2 py-1">1.4</td>
              <td className="border px-2 py-1">1.4</td>
              <td className="border px-2 py-1">DL4</td>
              <td className="border px-2 py-1">fa4</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">1.5</td>
              <td className="border px-2 py-1">Dying Stars- nucleosynthesis of carbon and oxygen –advanced burning stages</td>
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

export default CSEche;
