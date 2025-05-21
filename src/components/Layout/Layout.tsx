import type { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { useState } from 'react';
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #ffffff;
`;

const MainContent = styled.main<{ noPadding?: boolean }>`
  flex: 1;
  margin-left: 280px;
  min-height: 100vh;
  width: calc(100vw - 280px);
  overflow-x: hidden;
  padding: ${({ noPadding }) => (noPadding ? '0' : '2rem 4rem')};
  box-sizing: border-box;
  background-color: #fafafa;

  @media (max-width: 1200px) {
    padding: ${({ noPadding }) => (noPadding ? '0' : '2rem')};
  }

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100vw;
    padding: ${({ noPadding }) => (noPadding ? '0' : '1rem')};
  }
`;

const MenuButton = styled.button`
  display: none;
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 1000;
  padding: 0.75rem;
  background: #228be6;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 1.25rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div<{ isVisible: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 900;
  opacity: 0;
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    display: ${props => props.isVisible ? 'block' : 'none'};
    opacity: ${props => props.isVisible ? 1 : 0};
  }
`;

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <LayoutContainer>
      <MenuButton onClick={toggleSidebar}>
        ☰
      </MenuButton>
      <Overlay isVisible={isSidebarOpen} onClick={closeSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      <MainContent noPadding={isHome}>
        {children}
      </MainContent>
    </LayoutContainer>
  );
};

export default Layout; 