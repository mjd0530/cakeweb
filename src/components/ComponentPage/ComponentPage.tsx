import type { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const PageContainer = styled.div`
  width: 100%;
`;

const Header = styled.header`
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #212529;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: #495057;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Section = styled.section`
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  color: #343a40;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const ExampleContainer = styled.div`
  border: 1px solid #e9ecef;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 2rem;
  background: white;
`;

const ExamplePreview = styled.div`
  padding: 2rem;
  background: #ffffff;
  border-bottom: 1px solid #e9ecef;
  overflow-x: auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const CodeBlock = styled.div`
  background: #f8f9fa;
  overflow-x: auto;
  max-width: 100%;

  pre {
    margin: 0 !important;
    border-radius: 0 !important;
  }
`;

const TabContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #e9ecef;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f3f5;
  }

  &::-webkit-scrollbar-thumb {
    background: #dee2e6;
    border-radius: 2px;
  }
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 0.75rem 1.5rem;
  border: none;
  background: none;
  color: ${props => props.active ? '#228be6' : '#495057'};
  font-weight: ${props => props.active ? '600' : '400'};
  cursor: pointer;
  border-bottom: 2px solid ${props => props.active ? '#228be6' : 'transparent'};
  white-space: nowrap;

  &:hover {
    color: #228be6;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
`;

interface ComponentPageProps {
  title: string;
  description: string;
  children?: ReactNode;
  code: string;
}

const ComponentPage: FC<ComponentPageProps> = ({
  title,
  description,
  children,
  code
}) => {
  return (
    <PageContainer>
      <Header>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Header>

      <Section>
        <SectionTitle>Example</SectionTitle>
        <ExampleContainer>
          <ExamplePreview>
            {children}
          </ExamplePreview>
          <CodeBlock>
            <SyntaxHighlighter 
              language="tsx"
              style={tomorrow}
              customStyle={{
                margin: 0,
                borderRadius: 0,
                padding: '1.5rem',
                fontSize: '0.875rem',
              }}
            >
              {code}
            </SyntaxHighlighter>
          </CodeBlock>
        </ExampleContainer>
      </Section>

      <Section>
        <SectionTitle>Usage Guidelines</SectionTitle>
        <Description>
          {/* This section can be customized per component */}
          Learn how to implement and customize this component in your application.
          Follow these best practices and guidelines to ensure consistency across your interface.
        </Description>
      </Section>
    </PageContainer>
  );
};

export default ComponentPage; 