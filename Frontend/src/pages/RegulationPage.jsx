// pages/RegulationPage.jsx
import React from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';

function RegulationPage() {
  const { regulation } = useParams();

  const departments = [
    { name: 'Computer Science & Engineering', path: 'cse' },
    { name: 'Information Technology', path: 'it' },
    { name: 'Electronics & Communication Engineering', path: 'ece' },
    { name: 'Artificial Intelligence and Data Science', path: 'aids' },
    { name: 'Mechanical Engineering', path: 'mech' },
  ];

  return (
    <div>
      <h2>{regulation} Regulation</h2>
      <ul>
        {departments.map((dept) => (
          <li key={dept.path}>
            <Link to={dept.path}>{dept.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default RegulationPage;
