import React from 'react';
import { useNavigate } from 'react-router-dom';

const ECE = () => {
  const navigate = useNavigate();

  const courseData = [
    { code: '22MA101', name: 'ENGINEERING MATHEMATICS I', objectives: 'I,II', outcomes: 'a,b', L: 3, T: 1, P: 0, C: 4 },
    { code: '22PH102', name: 'ENGINEERING PHYSICS', objectives: 'I,II,III', outcomes: 'a,b,i', L: 2, T: 0, P: 2, C: 3 },
    { code: '22CH103', name: 'ENGINEERING CHEMISTRY I', objectives: 'I,II', outcomes: 'a,b', L: 2, T: 0, P: 2, C: 3 },
    { code: '22GE001', name: 'FUNDAMENTALS OF COMPUTING', objectives: 'I,II', outcomes: 'a,b,c', L: 3, T: 0, P: 0, C: 3 },
    { code: '22GE004', name: 'BASICS OF ELECTRICAL ENGINEERING', objectives: 'I,II', outcomes: 'a,b,c', L: 2, T: 0, P: 2, C: 3 },
  ];

  const handleCourseClick = (courseCode) => {
    switch (courseCode) {
      case '22MA101':
        navigate('/csemat');
        break;
      case '22PH102':
        navigate('/csephy');
        break;
      case '22CH103':
        navigate('/cseche');
        break;
      case '22GE001':
        navigate('/csefoc');
        break;
      case '22GE004':
        navigate('/ecebee');
        break;
      default:
        break;
    }
  };

  const clickableCourses = ['22MA101', '22PH102', '22CH103', '22GE001', '22GE004'];

  return (
    <div className="p-6">
      <div className="overflow-x-auto max-w-6xl mx-auto border rounded shadow-lg">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th colSpan="8" className="text-xl font-bold bg-gray-100 px-4 py-3 border border-gray-500">
                B.E. ELECTRONICS AND COMMUNICATION ENGINEERING
              </th>
            </tr>
            <tr>
              <th colSpan="8" className="text-base font-medium bg-gray-50 px-4 py-2 border border-gray-500">
                Minimum Credits to be Earned: 21.0
              </th>
            </tr>
            <tr className="bg-gray-200 text-center font-semibold">
              <th rowSpan="2" className="border border-gray-300 px-3 py-2 w-[110px] border border-gray-500">Code No.</th>
              <th rowSpan="2" className="border border-gray-300 px-3 py-2 w-[220px] border border-gray-500">Course</th>
              <th colSpan="2" className="border border-gray-300 px-3 py-2 border border-gray-500">Objectives & Outcomes</th>
              <th rowSpan="2" className="border border-gray-300 px-3 py-2 w-[50px] border border-gray-500">L</th>
              <th rowSpan="2" className="border border-gray-300 px-3 py-2 w-[50px] border border-gray-500">T</th>
              <th rowSpan="2" className="border border-gray-300 px-3 py-2 w-[50px] border border-gray-500">P</th>
              <th rowSpan="2" className="border border-gray-300 px-3 py-2 w-[50px] border border-gray-500">C</th>
            </tr>
            <tr className="bg-gray-200 text-center font-semibold">
              <th className="border border-gray-300 px-2 py-1 border border-gray-500">POs</th>
              <th className="border border-gray-300 px-2 py-1 border border-gray-500">PEOs</th>
            </tr>
          </thead>
          <tbody>
            {courseData.map((course, index) => (
              <tr key={index} className="text-center">
                <td className="border px-3 py-2">{course.code}</td>
                <td
                  className={`border px-3 py-2 text-left ${
                    clickableCourses.includes(course.code) ? 'text-blue-600 cursor-pointer hover:underline' : ''
                  }`}
                  onClick={() => clickableCourses.includes(course.code) && handleCourseClick(course.code)}
                >
                  {course.name}
                </td>
                <td className="border px-3 py-2">{course.objectives}</td>
                <td className="border px-3 py-2">{course.outcomes}</td>
                <td className="border px-3 py-2">{course.L}</td>
                <td className="border px-3 py-2">{course.T}</td>
                <td className="border px-3 py-2">{course.P}</td>
                <td className="border px-3 py-2">{course.C}</td>
              </tr>
            ))}
            <tr className="font-semibold text-center bg-gray-100">
              <td colSpan="4" className="border px-3 py-2 text-right">Total</td>
              <td className="border px-3 py-2">14</td>
              <td className="border px-3 py-2">1</td>
              <td className="border px-3 py-2">12</td>
              <td className="border px-3 py-2">27.0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ECE;
