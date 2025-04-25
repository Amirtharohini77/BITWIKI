// pages/CoursePage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function CoursePage() {
  const { courseCode } = useParams();

  // Fetch course details based on courseCode
  // For demonstration, using static data
  const courseDetails = {
    '22MA101': {
      title: 'ENGINEERING MATHEMATICS I',
      faculty: 'Dr V R VINOTHINI, Dr D UMAMAGESWARI',
      credits: 4,
      objectives: 'To impart mathematical modeling...',
      outcomes: [
        'Implement the concepts of mathematical modeling...',
        // Add other outcomes
      ],
      lessonPlan: [
        { unit: '1.1', topic: 'The geometry of linear equations', material: '1.1', video: '1.1', discourse: 'DL1', assessment: 'FA1' },
        // Add other lessons
      ],
    },
}
};
// Add other courses here 
