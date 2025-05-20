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
`;

const GamingPage: FC = () => {
  return (
    <Container>
      <Header>
        <Title>Gaming</Title>
        <Description>
          Design system guidelines and components for gaming applications.
          This includes game interfaces, interactive elements, and gaming-specific patterns.
        </Description>
      </Header>
    </Container>
  );
};

export default GamingPage; 