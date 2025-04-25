import React from 'react';

const ECEbee = () => {
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
        <li>Electrical engineering is a professional engineering discipline that deals with the study and application of electricity, electromagnetism, and electronics. The term electrical engineering may or may not encompass electronic engineering. Where a distinction is made, electrical engineering is considered to deal with the problems associated with large-scale electrical systems such as power transmission and motor control such as power generation, transmission, distribution and motor speed control, whereas electronic engineering deals with the study of small-scale electronic systems including computers and integrated circuits. Another way of looking at the distinction is that electrical engineers are usually concerned with using electricity to transmit energy, while electronics engineers are concerned with using electricity to transmit information..</li>
      </section>

      {/* Objectives */}
      <section>
        <h2 className="text-base font-bold">Course Objectives</h2>
        <ul className="list-disc pl-5 space-y-1 mt-1">
          <li>To understand the basic concepts of electrical charge and its properties.
          </li>
          <li>To interpret the formation of electric field due to electric charges.
          </li>
          <li>To illustrate the concept of magnetic fields due to revolving electron.
          </li>
          <li>To illustrate the force on moving charges in electric and magnetic field.
          </li>
          <li>To understand the energy transfer in electro mechanical conversion.
          </li>
        </ul>
      </section>

      {/* Outcomes */}
      <section>
        <h2 className="text-base font-bold">Course Outcomes (COs)</h2>
        <ol className="list-decimal pl-5 space-y-1 mt-1">
          <li>Explain the basic concepts and properties of electric charge.</li>
          <li>Interpret the significance of electric field and electric dipole formation.</li>
          <li>Represent the formation of magnetic field and magnetic dipole.</li>
          <li>Analyze the force on the moving charges.</li>
          <li>Interpret the concept of energy conversion principle in electromagnetics.</li>
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
              <td className="border px-2 py-1">	Properties of charge</td>
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
    </div>
  );
};

export default ECEbee;
