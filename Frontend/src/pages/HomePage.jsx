import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import WOD from '../assets/22.04.2025.png';

const HomePage = () => {
  const styles = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      fontFamily: 'sans-serif',
      backgroundColor: '#f1f1f1'
    },
    content: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    },
    main: {
      padding: '20px'
    },
    section: {
      backgroundColor: '#fff',
      padding: '15px',
      marginBottom: '20px',
      border: '1px solid #ccc',
      borderRadius: '4px'
    },
    heading: {
      fontSize: '27px',
      fontWeight: 'bold',
      color: '#2c3e50',
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: '1.2px',
      textDecoration: 'underline',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
      margin: '15px 0',
      backgroundColor: '#d0d8dc',
      padding: '18px',
      borderRadius: '7px',
      boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
      border: '2px solid #ccc',
      fontFamily: 'Georgia, serif'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    imageWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '10px'
    },
    image: {
      width: '100%',
      maxWidth: '500px',
      height: 'auto'
    },
    thtd: {
      border: '2px solid #111111',
      padding: '15px',
      backgroundColor: '#fff',
      fontSize: '17px',
      borderRadius: '5px'
    },
    th: {
      border: 'px solid #111111',
      padding: '15px',
      backgroundColor: '#d3d3d3', // grey background for header
      fontSize: '17px',
      fontWeight: 'bold'
    }
  };

  return (
    <div style={styles.container}>
      <Sidebar />
      
      <div style={styles.content}>
        <Header />
        <main style={styles.main}>
        
          {/* Word of the Day */}
          <section style={styles.section}>
            <h2 style={styles.heading}>Word for the Day</h2>
            <div style={styles.imageWrapper}>
              <img src={WOD} alt="Word of the Day" style={styles.image} />
            </div>
          </section>

          {/* Placement Table */}
          <section style={styles.section}>
            <div style={styles.heading}>Placement Achievements 2023–2024</div>

            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>S.No</th>
                  <th style={styles.th}>Salary Range</th>
                  <th style={styles.th}>Offers</th>
                  <th style={styles.th}>Prestigious Recruiters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={styles.thtd}>1</td>
                  <td style={styles.thtd}>10 LPA and above</td>
                  <td style={styles.thtd}>24</td>
                  <td style={styles.thtd}>Cadence, CommScope Networks, Turbo Comply, Software AG, Informatica, Applied Materials, Thoughtworks, Analog Devices, Rekise Marine</td>
                </tr>
                <tr>
                  <td style={styles.thtd}>2</td>
                  <td style={styles.thtd}>7-10 LPA</td>
                  <td style={styles.thtd}>175</td>
                  <td style={styles.thtd}>TCS Prime, TCS Digital, Soliton, Rently, Eunimart, Sirius, Mr. Cooper, ESKO Graphics, Holoworld, Qneuro India Pvt Ltd, IDP, KBX Digital, Ylogx, Oneyes, JMAN Group, Visteon, Multicoreware, Innocap, Zohocorp, K S Smart Solutions, Presidio, Avasoft, Tiger Analytics, Ford Business Solutions, TVS Motors, Techplayr, Ribbon Communication</td>
                </tr>
                <tr>
                  <td style={styles.thtd}>3</td>
                  <td style={styles.thtd}>5-6 LPA</td>
                  <td style={styles.thtd}>526</td>
                  <td style={styles.thtd}>Capgemini, Grootan Technologies, Appranix, Divum, Bio Vision Medical Systems, AppviewX, Vakielsearch, ZED Digital, RFPIO, Aquera Labs, Maple Labs, TITAN (TEAL), Schneider Electric, Rinex, Roots Industries, Mistral Solutions, Avasoft, Zohocorp - Tech Support, Azentio, Lakshmi Machine Works - MBA, Cipla Health, Survey Sparrow - QE, Intellect Design Arena - MBA, Alliantgroup India, On Step Technologies, RapidData Technologies, Annalect, TVS</td>
                </tr>
                <tr>
                  <td style={styles.thtd}>4</td>
                  <td style={styles.thtd}>4-5 LPA</td>
                  <td style={styles.thtd}>426</td>
                  <td style={styles.thtd}>Accenture, Capgemini, Cognizant - Gen C, Appranix, Cognitica AI, Kissflow, Exdera, Devden Creative Solutions, Terv Pro, Mallow Technologies, Lucid Imaging, Procyon, PWC India, Decathlon, Hexaware, Unilogic Technologies, BYTS India, Utthunga Technologies, Bajaj Finserv, Phoenix Medical Systems, Prashan Medical Technologies, Datacorp Traffic, Craftsman Automation, Zuci Systems, Cloudvice, UST Global, Span Technologies, Renault Nissan Tech, Mahathi Infotech, Zifo RnD Solutions, OG Healthcare, Data Patterns, Dhan Foundation, Kovai.Co, Aviram Studios, Aspire Systems, Nallas Software Solutions, Crio.Do, Axis Bank, Mphasis, Lakshmi Machine Works, Severn Glocon, Admindroid, HDB Financial Services, True Tech Solutions, Skyroot Aerospace, SPAN Tech - BA, Yokogawa, Sigvitas, Rane Group, TPF Software, ITC Foods, Revature, AMI, Skill Forge, Hella India Automotive, Saama Technologies, Kaar Technologies - MBA, L&T Technology Services, Zohocorp - QA, WEG Industries, Petrus Technologies, Sanmar Group, Gokaldas Exports, TVS</td>
                </tr>
                <tr>
                  <td style={styles.thtd}>5</td>
                  <td style={styles.thtd}>3-4 LPA</td>
                  <td style={styles.thtd}>752</td>
                  <td style={styles.thtd}>TCS Ninja, Tech Mahindra, IDFL, KONE Elevator, IAM NEO.AI, NetXD, KGiSL, SAGS Apparels, Timbertruss, Shahi Exports, Udhayam Medicare Systems, Tata Elxsi, Macbro, RSJ Inspection, MRC Mills, The Grand Structures, Mobitech Wireless, Mayavan Botanics, Syngene, First Step Baby Wear, Milekal, Aaludra, JESCO, Aarbee Structures, Harita Techserv, TVS Brakes India, Max Eye Technology, Maxzone Clothing, Fasco, Aruna Home Fashions, HAP, Pallava Group, SCM Garments, Sobha Developers, Counton.ai, KTM Jewellery, Mindgraph Technologies, Hitech Calibration, Elmech Automation, P3 Fusion, Dams Agri, Salesgear, Aditya Birla, Infiniti Solutions, Aquasub Engineering, Jayem Automotive, Roots, JSE Engineering, Young Brand Apparel, Data Patterns - IT, Adrenalin eSystems, Natex Buying House, Coptech Wire & Cable, Raison Automation, HGS corporation, GSCS International, Royal Classic Mills, Crest Foods, KRK infrastructure, Jaspel&Co, VTiger Systems, GA Morgan Dynamics, Bluemoon Construction, Synergy Scientific Services, KS Smart Solutions, Ponmalai Developers, M N Autoproducts, Utracon Structural Systems, Best Corporation, Abhisphere, ZF Group, Le Contriz PMC, Pinnacle Infotech Solutions, CakeBee, Schnell Technologies, Parikshan, BMS Infra Solutions, GK Power Expertise, Pirai Infotech, Aerospace Manufacturers, Kawasaki Robotics India, Vilvah Store, Pon Pure Chemical, Profenaa Technologies, Lincoln Electric, Galexon Engineering Industries, Wireline Solutions, Farpull Intelligent, Xenovex Technologies, Smart DV, Janatics, Movate, Unavar Food Inspection and Certification, Value Health, Ether Services, Regami Solutions, KT Telematic Solutions, Delphi TVS, Maiva Pharma, Varunan Agro, En Smart Controls, Chainsys, Ashok Leyland, Qmax Systems, Kailash Vimanas, SS Group of Companies, Syrma, Sathiya Group of Companies, Ather Energy, RK Trading, Park Intelli Solutions, SLT Food Consultancy, Numentica, Codincity, Toolcom, Vantage Flow, Karur Vysa Bank, CHC Healthcare, Nous Info Systems, Conserve, Indo-MIM, Cirklo, Tekcogent, Unacademy, Ultramain Softwares, Synapse Robotics, Sacha Engineering, Pentagon Space, TVS Electronics, Suba Plastics, Grandeza Biotech, Ohms Tech Engineer, Life Cell, Brakes India, Hillenbrand, Jio Communication, Jay Jay Mills, Bannari Amman Sugars, KPR Mills, Kyungshin Industrial Motherson, Aviotron Aerospace, Tenxer Labs, BGR Energy Systems</td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
