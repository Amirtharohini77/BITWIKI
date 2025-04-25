import React from 'react';
import { Link } from 'react-router-dom';

const departments = [
  {
    name: 'Computer Science & Engineering',
    sem1Link: '/wiki/2022/cse/sem1',
    sem2Link: '/wiki/2022/cse/sem2',
  },
  {
    name: 'Information Technology',
    sem1Link: '/wiki/2022/it/sem1',
    sem2Link: '/wiki/2022/it/sem2',
  },
  {
    name: 'Electronics & Communication Engineering',
    sem1Link: '/wiki/2022/ece/sem1',
    sem2Link: '/wiki/2022/ece/sem2',
  },
  {
    name: 'Artificial Intelligence and Data Science',
    sem1Link: '/wiki/2022/aids/sem1',
    sem2Link: '/wiki/2022/aids/sem2',
  },
  {
    name: 'Mechanical Engineering',
    sem1Link: '/wiki/2022/mech/sem1',
    sem2Link: '/wiki/2022/mech/sem2',
  },
];

const AcademicsPage = () => {
  return (
    <div className="academics-page container mx-auto p-6">
      <h4 className="text-3xl font-bold mb-6">2022 Regulation</h4>
      <table className="min-w-full border text-left">
        <thead>
          <tr>
            <th className="border px-6 py-2">Department</th>
            <th className="border px-4 py-2">Semester 1</th>
            <th className="border px-4 py-2">Semester 2</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((dept, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{dept.name}</td>
              <td className="border px-4 py-2">
                <Link to={dept.sem1Link} className="text-blue-600 underline">Semester 1</Link>
              </td>
              <td className="border px-4 py-2">
                <Link to={dept.sem2Link} className="text-blue-600 underline">Semester 2</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AcademicsPage;