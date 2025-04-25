// pages/SemesterPage.jsx
import React from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';

function SemesterPage() {
  const { department, semester } = useParams();

  const courses = [
    { code: '22MA101', name: 'ENGINEERING MATHEMATICS I' },
    { code: '22PH102', name: 'ENGINEERING PHYSICS' },
    // Add other courses as needed
  ];

  return (
    <div>
      <h4>{department.toUpperCase()} - Semester {semester}</h4>
      <ul>
        {courses.map((course) => (
          <li key={course.code}>
            <Link to={course.code}>{course.code} - {course.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default SemesterPage;
