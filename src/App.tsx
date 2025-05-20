import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ButtonPage from './pages/components/ButtonPage';
import BadgePage from './pages/components/BadgePage';
import ChipPage from './pages/components/ChipPage';
import HomePage from './pages/HomePage';
import VersioningPage from './pages/VersioningPage';
import AIDocumentationPage from './pages/ai/AIDocumentationPage';
import PCSoftwarePage from './pages/subsystems/PCSoftwarePage';
import EnterprisePage from './pages/subsystems/EnterprisePage';
import RedVelvetPage from './pages/subsystems/RedVelvetPage';
import GamingPage from './pages/subsystems/GamingPage';
import WhatAreSubsystemsPage from './pages/subsystems/WhatAreSubsystemsPage';

// Import global styles
import { Global, css } from '@emotion/react';

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    width: 100%;
    min-width: 100%;
  }

  body {
    font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.5;
    color: #212529;
    background-color: #ffffff;
  }

  #root {
    width: 100%;
    min-width: 100%;
    min-height: 100vh;
    display: flex;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;

function App() {
  return (
    <Router>
      <Global styles={globalStyles} />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          <Route path="/components/button" element={<ButtonPage />} />
          <Route path="/components/buttons" element={<ButtonPage />} />
          <Route path="/components/badge" element={<BadgePage />} />
          <Route path="/components/badges" element={<BadgePage />} />
          <Route path="/components/chip" element={<ChipPage />} />
          <Route path="/versioning" element={<VersioningPage />} />
          <Route path="/ai" element={<AIDocumentationPage />} />
          <Route path="/pc-software" element={<PCSoftwarePage />} />
          <Route path="/enterprise" element={<EnterprisePage />} />
          <Route path="/red-velvet" element={<RedVelvetPage />} />
          <Route path="/gaming" element={<GamingPage />} />
          <Route path="/what-are-subsystems" element={<WhatAreSubsystemsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
