// pages/AcademicsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import CSE from './CSE.jsx';

function AcademicsPage() {
const styles = {
  table: {
    width: '100%',
  },
  thtd: {
    border: '0.5px solid #ccc',
    padding: '5px',
    textAlign: 'left',
    backgroundColor: '#f2f2f2',
  }
}
  return (
    <div>
      <h2>BITWIKI:Departments and Semesters 2024-2025</h2>
     
     <table style={styles.table}>
      <thead style={styles.thtd}>
        <tr>
          <th style={styles.thtd}><h2 style={
            { textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }
          }>Contents</h2></th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={styles.thtd}><Link to="/Academics/2022" style={{ textDecoration: 'none', color: '#0000CD' }}>2022 Regulation</Link></td>
  
  
        </tr>
        <tr>
          <td style={styles.thtd}><Link to="/Academics/2022" style={{ textDecoration: 'none', color: '#0000CD' }}>Other Regulations</Link></td>

        </tr>
        <tr>
          <td style={styles.thtd}><Link to="/Academics/2022" style={{ textDecoration: 'none', color: '#0000CD' }}>2024 Regulation</Link></td>

        </tr>
        <tr>
          <td style={styles.thtd}><Link to="/Academics/2022" style={{ textDecoration: 'none', color: '#0000CD' }}>2021 Regulation</Link></td>

        </tr>
        <tr>
          <td style={styles.thtd}><Link to="/Academics/2022" style={{ textDecoration: 'none', color: '#0000CD' }}>2018 Regulation</Link></td>
        </tr>
       
        <tr>
          <td style={styles.thtd}><Link to="/Academics/2022" style={{ textDecoration: 'none', color: '#0000CD' }}>	Previous Academic and Curriculum</Link></td>
        </tr>
      </tbody>
     
      </table>

     
         <h1>2022 Regulation</h1>
         <table style={styles.table}>
      <thead style={styles.thtd}>
        
        <tr>
          <th style={styles.thtd}><h4 style={
            { textAlign: 'center', fontSize: '15px', fontWeight: 'bold' }
          }>Bachelor of Engineering(UG)</h4></th>
          </tr>
          </thead>
          </table>
          <table style={styles.table}>
          <thead>
          <tr>
          <th style={styles.thtd}><h4 style={{textAlign: 'center'}}>Department</h4></th>
          <th style={styles.thtd}><h4 style={{textAlign: 'center'}} >Semester</h4></th>
        </tr>
        </thead>
          <tbody>
          <tr>
          <td style={styles.thtd}>Computer Science Engineering</td>
          <td style={styles.thtd}><Link to="/CSE" style={{ textDecoration: 'none', color: '#0000CD' }}>Semester 1</Link></td>
          <td style={styles.thtd}>Semester 2</td>
          </tr>
          <tr>
          <td style={styles.thtd}>Biomedical Engineering</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>
          </tr>
          <tr>
          <td style={styles.thtd}>Civil Engineering</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>
          </tr>
          <tr>
          <td style={styles.thtd}>Computer Science & Design</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>
          </tr>
          <tr>
          <td style={styles.thtd}>Electrical & Electronics Engineering</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>
          </tr>
          <tr>
          <td style={styles.thtd}>Electronics & Communication Engineering</td>
          <td style={styles.thtd}><Link to="/ECE" style={{ textDecoration: 'none', color: '#0000CD' }}>Semester 1</Link></td>
          <td style={styles.thtd}>Semester 2</td>
          </tr>
          <tr>
          <td style={styles.thtd}>Electronics & Instrumentation Engineering</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>
          </tr>
          <tr>
          <td style={styles.thtd}>Information Science & Engineering</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>
          </tr>
          <tr>
          <td style={styles.thtd}>Mechanical Engineering</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>
          </tr>
          <tr>
          <td style={styles.thtd}>Mechatronics Engineering</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>
          </tr>
          </tbody>
          </table>

          <table style={styles.table}>
      <thead style={styles.thtd}>
        
        <tr>
          <th style={styles.thtd}><h4 style={
            { textAlign: 'center', fontSize: '15px', fontWeight: 'bold' }
          }>Bachelor of Technology(UG)</h4></th>
          </tr>
          </thead>
          </table>
          <table style={styles.table}>
          <thead>
          <tr>
          <th style={styles.thtd}><h4 style={{textAlign: 'center'}}>Department</h4></th>
          <th style={styles.thtd}><h4 style={{textAlign: 'center'}}>Semester</h4></th>
        </tr>
        </thead>
          <tbody>
          <tr>
          <td style={styles.thtd}>Agricultural Engineering</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>
          </tr>
          <tr>
          <td style={styles.thtd}>Artificial Intelligence and Data Science</td>
          <td style={styles.thtd}><Link to="/AIDS" style={{ textDecoration: 'none', color: '#0000CD' }}>Semester 1</Link></td>
          <td style={styles.thtd}>Semester 2</td>          </tr>
          <tr>
          <td style={styles.thtd}>Artificial Intelligence and Machine Learning</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>          </tr>
          <tr>
          <td style={styles.thtd}>Biotechnology</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>          </tr>
          <tr>
          <td style={styles.thtd}>Computer Science & Business Systems</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>          </tr>
          <tr>
          <td style={styles.thtd}>Computer Technology</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>          </tr>
          <tr>
          <td style={styles.thtd}>Food Technology</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>          </tr>
          <tr>
          <td style={styles.thtd}>Fashion Technology</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>          </tr>
          <tr>
          <td style={styles.thtd}>Information Technology</td>
          <td style={styles.thtd}><Link to="/IT" style={{ textDecoration: 'none', color: '#0000CD' }}>Semester 1</Link></td>
          <td style={styles.thtd}>Semester 2</td>          </tr>
          <tr>
          <td style={styles.thtd}>Textile Technology</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>          </tr>
          </tbody>
          </table>

        <h2>Other Regulations</h2>
          <table style={styles.table}>
          <thead>
          <tr>
          <th style={styles.thtd}><h4 style={{textAlign: 'center'}}>Courses</h4></th>
          <th style={styles.thtd}><h4 style={{textAlign: 'center'}}>French</h4></th>
          <th style={styles.thtd}><h4 style={{textAlign: 'center'}}>German</h4></th>
          <th style={styles.thtd}><h4 style={{textAlign: 'center'}}>Japanese</h4></th>
          <th style={styles.thtd}><h4 style={{textAlign: 'center'}}>Hindi</h4></th>
        </tr>

        </thead>
          <tbody>
          </tbody>
          </table>

          <h2>2024 Regulation</h2>
         <table style={styles.table}>
      <thead style={styles.thtd}>  
          </thead>
          </table>
          <table style={styles.table}>
      <thead style={styles.thtd}>
        
        <tr>
          <th style={styles.thtd}><h4 style={
            { textAlign: 'center', fontSize: '15px', fontWeight: 'bold' }
          }>Master of Business Administration (PG)</h4></th>
          </tr>
          </thead>
          </table>

          <table style={styles.table}>
          <thead>
          <tr>
          <th style={styles.thtd}><h4 style={{textAlign: 'center'}}>Department</h4></th>
          <th style={styles.thtd}><h4 style={{textAlign: 'center'}}>Semester</h4></th>
        </tr>
        </thead>
          <tbody>
          
          <tr>
          <td style={styles.thtd}>Master of Business Administration</td>
          <td style={styles.thtd}>Biomedical Engineering</td>
          </tr>
          </tbody>
          </table>

          <h2>2021 Regulation</h2>
         <table style={styles.table}>
      <thead style={styles.thtd}>  
          </thead>
          </table>
          <table style={styles.table}>
      <thead style={styles.thtd}>
        
        <tr>
          <th style={styles.thtd}><h4 style={
            { textAlign: 'center', fontSize: '15px', fontWeight: 'bold' }
          }>Master of Business Administration (PG)</h4></th>
          </tr>
          </thead>
          </table>

          <table style={styles.table}>
          <thead>
          <tr>
          <th style={styles.thtd}><h4 style={{textAlign: 'center'}}>Department</h4></th>
          <th style={styles.thtd}><h4 style={{textAlign: 'center'}}>Semester</h4></th>
        </tr>
        </thead>
          <tbody>
          
          <tr>
          <td style={styles.thtd}>Master of Business Administration</td>
          <td style={styles.thtd}>Biomedical Engineering</td>
          </tr>
          </tbody>
          </table>

          <h2>2018 Regulation</h2>
         <table style={styles.table}>
      <thead style={styles.thtd}>  
          </thead>
          </table>
          <table style={styles.table}>
      <thead style={styles.thtd}>
      
        <tr>
          <th style={styles.thtd}><h4 style={
            { textAlign: 'center', fontSize: '15px', fontWeight: 'bold' }
          }>Bachelor of Engineering(UG)</h4></th>
          </tr>
          </thead>
          <table style={styles.table}>
          <thead>
          <tr>
          <th style={styles.thtd}><h4 style={{textAlign: 'center'}}>Department</h4></th>
          <th style={styles.thtd}><h4 style={{textAlign: 'center'}} colspan={2}>Semester</h4></th>
        </tr>
        </thead>
        
          <tbody>
          <tr>
          <td style={styles.thtd}>Aeronautical Engineering</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>          </tr>
          <tr>
          <td style={styles.thtd}>Agriculture Engineering</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>
          </tr>
          <tr>
          <td style={styles.thtd}>Automobile Engineering</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>          </tr>     
          <tr>
          <td style={styles.thtd}>Computer Science Engineering</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>          </tr>
          <tr>
          <td style={styles.thtd}>Biomedical Engineering</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>          </tr>
          <tr>
          <td style={styles.thtd}>Civil Engineering</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>          </tr>
          <tr>
          <td style={styles.thtd}>Electrical & Electronics Engineering</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>          </tr>
          <tr>
          <td style={styles.thtd}>Electronics & Communication Engineering</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>          </tr>
          <tr>
          <td style={styles.thtd}>Electronics & Instrumentation Engineering</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>          </tr>
          <tr>
          <td style={styles.thtd}>Information Science & Engineering</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>          </tr>
          <tr>
          <td style={styles.thtd}>Mechanical Engineering</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>          </tr>
          <tr>
          <td style={styles.thtd}>Mechatronics</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>          </tr>
          </tbody>
          </table>

          <table style={styles.table}>
      <thead style={styles.thtd}>
        
        <tr>
          <th style={styles.thtd}><h4 style={
            { textAlign: 'center', fontSize: '15px', fontWeight: 'bold' }
          } colSpan={3} >Bachelor of Technology(UG)</h4></th>
          </tr>
          </thead>
          </table>
          <table style={styles.table}>
          <thead>
          <tr>
          <th style={styles.thtd}><h4 style={{textAlign: 'center'}}>Department</h4></th>
          <th style={styles.thtd}><h4 style={{textAlign: 'center'}} >Semester</h4></th>
        </tr>      
        </thead>

          <tbody>
          <tr>
          <td style={styles.thtd}>Artificial Intelligence and Data Science</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>          </tr>
          <tr>
          <td style={styles.thtd}>Artificial Intelligence and Machine Learning</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>          </tr>
          <tr>
          <td style={styles.thtd}>Biotechnology</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>          </tr>
          <tr>
          <td style={styles.thtd}>Computer Science & Business Systems</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>          </tr>
          <tr>
          <td style={styles.thtd}>Computer Technology</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>          </tr>
          <tr>
          <td style={styles.thtd}>Fashion Technology</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>          </tr>
          <tr>
          <td style={styles.thtd}>Food Technology</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>          </tr>
          <tr>
          <td style={styles.thtd}>Information Technology</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>          </tr>
          <tr>
          <td style={styles.thtd}>Textile Technology</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>          </tr>
          </tbody>
          </table>
          </table>

          <h3>Previous Academic and Curriculum</h3>
         <table style={styles.table}>
      <thead style={styles.thtd}>  
          </thead>
          </table>

        <table style={styles.table}>
      
      <tbody>
        <tr>
          <td style={styles.thtd}><Link to="/Academics/2022" style={{ textDecoration: 'none', color: '#0000CD' }}>2023 - 2024 Academic and Curriculum</Link></td>
  
  
        </tr>
        <tr>
          <td style={styles.thtd}><Link to="/Academics/2022" style={{ textDecoration: 'none', color: '#0000CD' }}>2022 - 2023 Academic and Curriculum</Link></td>

        </tr>
        <tr>
          <td style={styles.thtd}><Link to="/Academics/2022" style={{ textDecoration: 'none', color: '#0000CD' }}>2021 - 2022 Academic and Curriculum</Link></td>

        </tr>
        <tr>
          <td style={styles.thtd}><Link to="/Academics/2022" style={{ textDecoration: 'none', color: '#0000CD' }}>2020 - 2021 Academic and Curriculum</Link></td>

        </tr>       
      </tbody>
     
      </table>
      
      </div>   
  );
}

export default AcademicsPage;
