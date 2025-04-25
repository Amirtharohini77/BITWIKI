import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WikiPage from './pages/WikiPage';
import Login from './pages/Login';
import AdminPage from './pages/AdminPage';
import LecturesPage from './pages/LecturesPage';
import ProfilePage from './pages/ProfilePage';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import AcademicsPage from './pages/AcademicsPage';
import CSE from './pages/CSE';
import CSEmat from './pages/CSEmat';
import CSEphy from './pages/CSEphy';
import CSEche from './pages/CSEche';
import CSEfoc from './pages/CSEfoc';
import CSEbee from './pages/CSEbee';

import MainLayout from './layouts/MainLayout';
import IT from './pages/IT';
// import ITmat from './pages/ITmat';
// import ITphy from './pages/ITphy';
// import ITche from './pages/ITche';
// import ITbee from './pages/ITbee';
// import ITfoc from './pages/ITfoc';

import AIDS from './pages/AIDS';
// import AIDSmat from './pages/AIDSmat';
// import AIDSphy from './pages/AIDSphy';
// import AIDSche from './pages/AIDSche';
// import AIDSbee from './pages/AIDSbee';
// import AIDSfoc from './pages/AIDSfoc';

import ECE from './pages/ECE'; // adjust path based on your folder structure
// import ECEmat from './pages/ECEmat';
// import ECEphy from './pages/ECEphy';
// import ECEche from './pages/ECEche';
import ECEbee from './pages/ECEbee';
// import ECEfoc from './pages/ECEfoc';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Homepage and Login are outside MainLayout */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />

          {/* All other pages use MainLayout with Sidebar/Header/Footer */}
          <Route element={<MainLayout />}>
            <Route path="/wiki" element={<WikiPage />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/CSE" element={<CSE />} />
            <Route path="/csemat" element={<CSEmat />} />            
            <Route path="/csephy" element={<CSEphy />} />
            <Route path="/cseche" element={<CSEche />} />
            <Route path="/csefoc" element={<CSEfoc />} />
            <Route path="/csebee" element={<CSEbee />} />
            <Route path="/it" element={<IT />} />
            {/* <Route path="/itmat" element={<ITmat />} />
            <Route path="/itphy" element={<ITphy />} />
            <Route path="/itche" element={<ITche />} />
            <Route path="/itfoc" element={<ITfoc />} />
            <Route path="/itbee" element={<ITbee />} /> */}
            <Route path="/aids" element={<AIDS />} />
            {/* <Route path="/aidsmat" element={<AIDSmat />} />
            <Route path="/aidsphy" element={<AIDSphy />} />
            <Route path="/aidsche" element={<AIDSche />} />
            <Route path="/aidsfoc" element={<AIDSfoc />} />
            <Route path="/aidsbee" element={<AIDSbee />} /> */}
            <Route path="/ece" element={<ECE />} />
            {<Route path="/ecebee" element={<ECEbee />} />}

            {/* Private routes */}
            <Route
              path="/lectures"
              element={
                <PrivateRoute>
                  <LecturesPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <ProfilePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <PrivateRoute allowedRole="admin">
                  <AdminPage />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
