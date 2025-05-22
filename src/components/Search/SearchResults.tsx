import type { FC } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import type { SearchResult } from '../../data/searchIndex';

const ResultsContainer = styled.div`
  padding: 0.5rem;
`;

const ResultCard = styled(Link)`
  display: block;
  padding: 1rem;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  margin-bottom: 0.5rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s;

  &:hover {
    background-color: #f8f9fa;
    border-color: #dee2e6;
    transform: translateY(-1px);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const ResultTitle = styled.h3`
  font-size: 1rem;
  color: #228be6;
  margin: 0 0 0.5rem 0;
`;

const ResultDescription = styled.p`
  font-size: 0.875rem;
  color: #495057;
  margin: 0 0 0.5rem 0;
`;

const ResultCategory = styled.span`
  font-size: 0.75rem;
  color: #868e96;
  background-color: #f1f3f5;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
`;

const NoResults = styled.div`
  padding: 2rem;
  text-align: center;
  color: #868e96;
  font-size: 0.875rem;
`;

interface SearchResultsProps {
  results: SearchResult[];
  onResultClick?: () => void;
}

const SearchResults: FC<SearchResultsProps> = ({ results, onResultClick }) => {
  if (results.length === 0) {
    return (
      <NoResults>
        No results found. Try a different search term.
      </NoResults>
    );
  }

  return (
    <ResultsContainer>
      {results.map((result) => (
        <ResultCard
          key={result.path}
          to={result.path}
          onClick={onResultClick}
        >
          <ResultTitle>{result.title}</ResultTitle>
          <ResultDescription>{result.description}</ResultDescription>
          <ResultCategory>{result.category}</ResultCategory>
        </ResultCard>
      ))}
    </ResultsContainer>
  );
};

export default SearchResults; 