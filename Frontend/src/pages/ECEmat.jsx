import React from 'react';
import { useNavigate } from 'react-router-dom';

const ECE = () => {
  const navigate = useNavigate();

  const courseData = [
    {
      code: '22MA101',
      name: 'ENGINEERING MATHEMATICS I',
      objectives: 'I,II',
      outcomes: 'a,b',
      L: 3, T: 1, P: 0, C: 4
    },
    {
      code: '22PH102',
      name: 'ENGINEERING PHYSICS',
      objectives: 'I,II,III',
      outcomes: 'a,b,i',
      L: 2, T: 0, P: 2, C: 3
    },
    {
      code: '22CH103',
      name: 'ENGINEERING CHEMISTRY I',
      objectives: 'I,II',
      outcomes: 'a,b',
      L: 2, T: 0, P: 2, C: 3
    },
    {
      code: '22GE001',
      name: 'FUNDAMENTALS OF COMPUTING',
      objectives: 'I,II',
      outcomes: 'a,b,c',
      L: 3, T: 0, P: 0, C: 3
    },
    {
      code: '22GE004',
      name: 'BASICS OF ELECTRONICS ENGINEERING',
      objectives: 'I,II',
      outcomes: 'a,b,c',
      L: 2, T: 0, P: 2, C: 3
    },
    {
      code: '22HS001',
      name: 'FOUNDATIONAL ENGLISH',
      objectives: 'I,II',
      outcomes: 'a,b,c',
      L: 1, T: 0, P: 2, C: 2
    },
    {
      code: '22HS002',
      name: 'STARTUP MANAGEMENT',
      objectives: 'I,II',
      outcomes: 'a,b,c',
      L: 1, T: 0, P: 2, C: 2
    },
    {
      code: '22HS003',
      name: 'தமிழர் மரபு / Heritage of Tamils',
      objectives: 'I,II',
      outcomes: 'a,b,c',
      L: 0, T: 0, P: 2, C: 1
    }
  ];

  const handleMathClick = () => {
    navigate('/ecemat');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">B.E. ELECTRONICS & COMMUNICATION ENGINEERING</h1>
      <p className="mb-2 font-medium">Minimum Credits to be Earned: 21.0</p>
      <h2 className="text-xl font-semibold mt-4 mb-2">Core Courses</h2>
      <table className="w-full border border-gray-400 text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-2 py-1">Code No.</th>
            <th className="border px-2 py-1">Course</th>
            <th className="border px-2 py-1">Objectives & Outcomes</th>
            <th className="border px-2 py-1">L</th>
            <th className="border px-2 py-1">T</th>
            <th className="border px-2 py-1">P</th>
            <th className="border px-2 py-1">C</th>
          </tr>
        </thead>
        <tbody>
          {courseData.map((course, index) => (
            <tr key={index} className="text-center">
              <td className="border px-2 py-1">{course.code}</td>
              <td
                className={`border px-2 py-1 ${
                  course.code === '22MA101' ? 'text-blue-600 cursor-pointer hover:underline' : ''
                }`}
                onClick={course.code === '22MA101' ? handleMathClick : undefined}
              >
                {course.name}
              </td>
              <td className="border px-2 py-1">{course.objectives} / {course.outcomes}</td>
              <td className="border px-2 py-1">{course.L}</td>
              <td className="border px-2 py-1">{course.T}</td>
              <td className="border px-2 py-1">{course.P}</td>
              <td className="border px-2 py-1">{course.C}</td>
            </tr>
          ))}
          <tr className="font-semibold">
            <td colSpan="3" className="border px-2 py-1 text-right">Total</td>
            <td className="border px-2 py-1">14</td>
            <td className="border px-2 py-1">1</td>
            <td className="border px-2 py-1">12</td>
            <td className="border px-2 py-1">27.0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ECE;
