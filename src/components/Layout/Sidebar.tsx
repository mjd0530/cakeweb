import type { FC } from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronRight } from '@mui/icons-material';
import cakeLogo from '../../assets/cake.svg';

const SidebarContainer = styled.aside`
  width: 280px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background: #ffffff;
  padding: 1rem 0;
  overflow-y: auto;
  z-index: 1000;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
    
    &.open {
      transform: translateX(0);
    }
  }

  /* Custom scrollbar styles */
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #e9ecef;
    border-radius: 2px;
  }
`;

const Logo = styled.div`
  margin-bottom: 2rem;
  
  .logo-link {
    padding: 0.5rem 1.5rem;
    display: block;
    text-decoration: none;
    transition: background-color 0.2s;

    &:hover {
      background-color: #f0f4ff;
    }
  }

  .logo-container {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .logo-square {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 4px;
    flex-shrink: 0;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .logo-text {
    font-size: 1.25rem;
    font-weight: 700;
    color: #333;
    line-height: 1.2;
  }

  .meta-text {
    font-size: 0.75rem;
    color: #666;
    margin-top: 0.0625rem;
  }
`;

const NavList = styled.ul<{ nested?: boolean }>`
  list-style: none;
  padding: 0;
  margin: 0;
  ${props => props.nested && `
    padding-left: 1.5rem;
  `}
`;

const NavSectionHeader = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #868e96;
  padding: 1rem 1.5rem 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: #495057;
  }
`;

const ExpandIcon = styled(ChevronRight)<{ isExpanded: boolean }>`
  width: 1.25rem;
  height: 1.25rem;
  transition: transform 0.2s ease;
  transform: rotate(${props => props.isExpanded ? '90deg' : '0deg'});
  color: #868e96;

  &:hover {
    color: #495057;
  }
`;

const NavSection = styled.div`
  margin-bottom: 0.5rem;
`;

const NavItems = styled.div<{ isExpanded: boolean }>`
  max-height: ${props => props.isExpanded ? '1000px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
`;

const NavItem = styled.li`
  margin: 2px 0;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.625rem 1.5rem;
  color: #333;
  text-decoration: none;
  transition: all 0.2s;
  font-size: 0.9375rem;
  line-height: 1.5;

  &:hover {
    background-color: #f0f4ff;
    color: #0066cc;
  }

  &.active {
    color: #0066cc;
    background-color: #f0f4ff;

    &[data-has-children="true"] svg {
      transform: rotate(180deg);
    }
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: #666;
    transition: transform 0.2s;
  }
`;

const SearchContainer = styled.div`
  padding: 0 1.5rem 1rem;
  position: relative;
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f1f3f5;
    border-color: #dee2e6;
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: #868e96;
  }

  .search-text {
    flex: 1;
    font-size: 0.875rem;
    color: #868e96;
  }

  .shortcut {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .key {
    min-width: 1.25rem;
    height: 1.25rem;
    padding: 0 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border: 1px solid #dee2e6;
    border-radius: 3px;
    font-size: 0.75rem;
    color: #868e96;
  }
`;

const SearchModal = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${props => props.isOpen ? 'flex' : 'none'};
  align-items: flex-start;
  justify-content: center;
  padding-top: 10vh;
  z-index: 1100;
`;

const SearchContent = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const SearchInputModal = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border-bottom: 1px solid #e9ecef;

  svg {
    width: 1rem;
    height: 1rem;
    color: #868e96;
  }

  input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 1rem;
    color: #495057;
    background: transparent;

    &::placeholder {
      color: #adb5bd;
    }
  }
`;

const SearchResults = styled.div`
  max-height: 400px;
  overflow-y: auto;
  padding: 0.5rem;

  &:empty {
    padding: 0;
  }
`;

interface SidebarProps {
  isOpen?: boolean;
}

const Sidebar: FC<SidebarProps> = ({ isOpen }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  // Add state for section expansion
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(() => {
    // Initialize from localStorage or default to all collapsed
    const saved = localStorage.getItem('sidebarExpandedSections');
    return saved ? JSON.parse(saved) : {
      foundations: false,
      components: false,
      subsystems: false
    };
  });

  // Save expanded sections to localStorage when they change
  useEffect(() => {
    localStorage.setItem('sidebarExpandedSections', JSON.stringify(expandedSections));
  }, [expandedSections]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const openSearch = useCallback(() => {
    setIsSearchOpen(true);
    // Focus the input after modal opens
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 0);
  }, []);

  const closeSearch = useCallback(() => {
    setIsSearchOpen(false);
    setSearchQuery('');
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check for ⌘K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
      }
      // Close on Escape
      if (e.key === 'Escape' && isSearchOpen) {
        closeSearch();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, openSearch, closeSearch]);

  return (
    <SidebarContainer className={isOpen ? 'open' : ''}>
      <Logo>
        <NavLink to="/" className="logo-link">
          <div className="logo-container">
            <div className="logo-square">
              <img src={cakeLogo} alt="Cake Logo" />
            </div>
            <div className="text-container">
              <div className="logo-text">Cake</div>
              <div className="meta-text">Version 4.0.1</div>
            </div>
          </div>
        </NavLink>
      </Logo>

      <SearchContainer>
        <SearchInput onClick={openSearch}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="search-text">Search documentation...</span>
          <div className="shortcut">
            <span className="key">{navigator.platform.includes('Mac') ? '⌘' : 'Ctrl'}</span>
            <span className="key">K</span>
          </div>
        </SearchInput>
      </SearchContainer>

      <SearchModal isOpen={isSearchOpen} onClick={closeSearch}>
        <SearchContent onClick={e => e.stopPropagation()}>
          <SearchInputModal>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <div className="shortcut">
              <span className="key">ESC</span>
            </div>
          </SearchInputModal>
          <SearchResults>
            {/* Search results will be rendered here */}
          </SearchResults>
        </SearchContent>
      </SearchModal>

      <NavList>
        <NavItem>
          <StyledNavLink to="/">Home</StyledNavLink>
        </NavItem>

        <NavSection>
          <NavSectionHeader onClick={() => toggleSection('foundations')}>
            Foundations
            <ExpandIcon isExpanded={expandedSections.foundations} />
          </NavSectionHeader>
          <NavItems isExpanded={expandedSections.foundations}>
            <NavItem>
              <StyledNavLink to="/foundations/color">Color</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/foundations/iconography">Iconography</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/foundations/typography">Typography</StyledNavLink>
            </NavItem>
          </NavItems>
        </NavSection>

        <NavSection>
          <NavSectionHeader onClick={() => toggleSection('components')}>
            Components
            <ExpandIcon isExpanded={expandedSections.components} />
          </NavSectionHeader>
          <NavItems isExpanded={expandedSections.components}>
            <NavItem>
              <StyledNavLink to="/components/accordion">Accordion</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/components/alert">Alert</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/components/avatar">Avatar</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/components/badge">Badge</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/components/breadcrumb">Breadcrumb</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/components/button">Button</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/components/checkbox">Checkbox</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/components/chip">Chip</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/components/data-table">Data Table</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/components/date-picker">Date Picker</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/components/dropdown">Dropdown</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/components/link">Link</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/components/loading">Loading</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/components/text-area">Text Area</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/components/text-field">Text Field</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/components/modal">Modal</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/components/menu">Menu</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/components/radio">Radio</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/components/tab">Tab</StyledNavLink>
            </NavItem>
          </NavItems>
        </NavSection>

        <NavSection>
          <NavSectionHeader onClick={() => toggleSection('subsystems')}>
            Subsystems
            <ExpandIcon isExpanded={expandedSections.subsystems} />
          </NavSectionHeader>
          <NavItems isExpanded={expandedSections.subsystems}>
            <NavItem>
              <StyledNavLink to="/what-are-subsystems">What are Subsystems?</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/ai">Cake for AI</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/pc-software">PC Software</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/enterprise">Enterprise</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/red-velvet">Red Velvet</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/gaming">Gaming</StyledNavLink>
            </NavItem>
          </NavItems>
        </NavSection>
      </NavList>
    </SidebarContainer>
  );
};

export default Sidebar; 