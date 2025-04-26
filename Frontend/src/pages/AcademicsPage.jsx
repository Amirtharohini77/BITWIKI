// pages/AcademicsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function AcademicsPage() {
const styles = {
  table: {
    width: '100%',
    margin: '20px auto',
    borderCollapse: 'collapse',
    border: '3px solid #fff',
    borderRadius: '5px',
    boxShadow: '0 2px 10px rgba(21, 15, 15, 0.87)',
    backgroundColor: '#fff',
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    marginTop: '20px',
    marginBottom: '20px',
    borderWidth: '2px',
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
     <table style={{
  ...styles.table,
  width: '60%',
  border: '2px solid #aaa',
}}>
  <thead>
    <tr>
      <th style={{
        ...styles.thtd,
        backgroundColor: '#004080',
        color: 'white'
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '22px',
          fontWeight: 'bold',
          margin: '10px 0'
        }}>
          Contents
        </h2>
      </th>
    </tr>
  </thead>
  <tbody>
    {[
      { label: "2022 Regulation", path: "/Academics/2022" },
      { label: "Other Regulations", path: "/Academics/2022" },
      { label: "2024 Regulation", path: "/Academics/2022" },
      { label: "2021 Regulation", path: "/Academics/2022" },
      { label: "2018 Regulation", path: "/Academics/2022" },
      { label: "Previous Academic and Curriculum", path: "/Academics/2022" },
    ].map((item, index) => (
      <tr key={index}>
        <td style={{
          ...styles.thtd,
          padding: '8px 12px',
          backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff'
        }}>
          <Link
            to={item.path}
            style={{
              textDecoration: 'none',
              color: '#0000CD',
              fontWeight: '500'
            }}
            onMouseEnter={e => e.target.style.color = '#004080'}
            onMouseLeave={e => e.target.style.color = '#0000CD'}
          >
            {item.label}
          </Link>
        </td>
      </tr>
    ))}
  </tbody>
</table>


      <table style={styles.table}>
      <thead style={styles.thtd}>
      <tr>
          <th style={styles.thtd}><h4 style={
            { textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }
          }>2022 Regulation</h4></th>
          </tr>
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
          <th style={styles.thtd}><h4 style={{ textAlign: 'center' }}>Department</h4></th>
          <th colSpan="2" style={styles.thtd}><h4 style={{ textAlign: 'center' }}>Semester</h4></th>
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
      <th style={styles.thtd}><h4 style={{ textAlign: 'center' }}>Department</h4></th>
      <th colSpan="2" style={styles.thtd}><h4 style={{ textAlign: 'center' }}>Semester</h4></th>
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

          <table style={styles.table}>
            
          <thead>
          <tr>
          <th colspan="5" style={styles.thtd}><h4 style={
            { textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }
          }>Other Regulations</h4></th>
          </tr>
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

         <table style={styles.table}>
          </table>

      <table style={styles.table}>
      <thead style={styles.thtd}>
      <tr>
          <th style={styles.thtd}><h4 style={
            { textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }
          }>2024 Regulation</h4></th>
          </tr>
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
          <th colspan="2" style={styles.thtd}><h4 style={{textAlign: 'center'}}>Semester</h4></th>
        </tr>
        </thead>
          <tbody> 
          <tr>
          <td style={styles.thtd}>Master of Business Administration</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>
          </tr>
          </tbody>
          </table>
        
          <table style={styles.table}>
      <thead style={styles.thtd}>
      <tr>
          <th style={styles.thtd}><h4 style={
            { textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }
          }>2021 Regulation</h4></th>
          </tr>
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
          <th colspan="2" style={styles.thtd}><h4 style={{textAlign: 'center'}}>Semester</h4></th>
        </tr>
        </thead>
          <tbody>
          
          <tr>
          <td style={styles.thtd}>Master of Business Administration</td>
          <td style={styles.thtd}>Semester 1</td>
          <td style={styles.thtd}>Semester 2</td>
          </tr>
          </tbody>
          </table>

      <table style={styles.table}>
      <thead style={styles.thtd}>
      <tr>
          <th style={styles.thtd}><h4 style={
            { textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }
          }>2018 Regulation</h4></th>
          </tr>
        <tr>
          <th style={styles.thtd}><h4 style={
            { textAlign: 'center', fontSize: '15px', fontWeight: 'bold' }
          }>Bachelor of Engineering(UG)</h4></th>
          </tr>
          </thead>
          <table style={styles.table}>
          <thead>
    <tr>
      <th style={styles.thtd}><h4 style={{ textAlign: 'center' }}>Department</h4></th>
      <th colSpan="2" style={styles.thtd}><h4 style={{ textAlign: 'center' }}>Semester</h4></th>
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
      <th style={styles.thtd}><h4 style={{ textAlign: 'center' }}>Department</h4></th>
      <th colSpan="2" style={styles.thtd}><h4 style={{ textAlign: 'center' }}>Semester</h4></th>
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

        <table style={styles.table}>
        <tr>
          <th style={styles.thtd}><h4 style={
            { textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }
          }>Previous Academic and Curriculum</h4></th>
          </tr>
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