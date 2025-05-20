import type { FC } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.header`
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #212529;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: #495057;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const Section = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  color: #343a40;
  margin-bottom: 1.5rem;
`;

const DiagramContainer = styled.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 2rem;
  margin: 2rem 0;
`;

const Diagram = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Layer = styled.div<{ width: string }>`
  background: white;
  border: 2px solid #dee2e6;
  border-radius: 8px;
  padding: 1rem 2rem;
  width: ${props => props.width};
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const LayerTitle = styled.h3`
  font-size: 1.25rem;
  color: #212529;
  margin: 0;
`;

const LayerDescription = styled.p`
  font-size: 0.875rem;
  color: #6c757d;
  margin: 0.5rem 0 0;
`;

const Arrow = styled.div`
  width: 2px;
  height: 2rem;
  background: #dee2e6;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 8px solid #dee2e6;
  }
`;

const WhatAreSubsystemsPage: FC = () => {
  return (
    <Container>
      <Header>
        <Title>What are Subsystems?</Title>
        <Description>
          Similar to layers of a cake, our system is divided into product-specific sub-systems. These sub-systems draw on the foundational elements from the core system while also hosting components tailored to each product. This modular approach enhances scalability and simplifies maintenance across the entire platform.
        </Description>
      </Header>

      <Section>
        <SectionTitle>System Architecture</SectionTitle>
        <Description>
          Our design system follows a layered architecture, where each subsystem builds upon the core foundation while maintaining its unique identity and requirements.
        </Description>
        
        <DiagramContainer>
          <Diagram>
            <Layer width="100%">
              <LayerTitle>Core Cake System</LayerTitle>
              <LayerDescription>Foundational elements, design tokens, and base components</LayerDescription>
            </Layer>
            <Arrow />
            <Layer width="90%">
              <LayerTitle>Product Subsystems</LayerTitle>
              <LayerDescription>Specialized components and patterns for specific product domains</LayerDescription>
            </Layer>
          </Diagram>
        </DiagramContainer>
      </Section>
    </Container>
  );
};

export default WhatAreSubsystemsPage; 