import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Browse from './components/Browse';
import { ProjectProvider, useProjects } from './context/ProjectContext';
import { UserProvider } from './context/UserContext';
import './App.css'

const App: React.FC = () => {
  const { setLoading } = useProjects();

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, [setLoading]);

  return (
    <ProjectProvider>
      <UserProvider>
        <Router>
          <div>
            <nav className='AppNav'>
              <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/browse">Browse</Link></li>
              </ul>
            </nav>
            <Routes>
              <Route path="/"  element={<Dashboard/>} />
              <Route path="/browse" element={<Browse/>} />
            </Routes>
          </div>
        </Router>
      </UserProvider>
    </ProjectProvider>
  );
};

export default App;
