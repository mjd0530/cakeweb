import type { FC } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  min-width: 100%;
`;

const Hero = styled.div`
  width: 100%;
  padding: 4rem 0;
  background: white;
  border-bottom: 1px solid #e9ecef;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const HeroContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: #212529;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #495057;
  margin-bottom: 2rem;
  line-height: 1.4;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const Card = styled(Link)`
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 2rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  color: #228be6;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const CardDescription = styled.p`
  color: #495057;
  line-height: 1.6;
  flex-grow: 1;

  @media (max-width: 768px) {
    font-size: 0.9375rem;
  }
`;

const Section = styled.section`
  width: 100%;
  min-width: 100%;
  padding: 4rem 0;
  background: ${props => props.theme === 'light' ? '#f8f9fa' : 'white'};
  border-bottom: 1px solid #e9ecef;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const SectionContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #212529;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }
`;

const HomePage: FC = () => {
  return (
    <Container>
      <Hero>
        <HeroContent>
          <Title>Design System</Title>
          <Subtitle>
            A comprehensive guide to our design language, components, and patterns
          </Subtitle>
        </HeroContent>
      </Hero>

      <Section>
        <SectionContent>
          <SectionTitle>Getting Started</SectionTitle>
          <Grid>
            <Card to="/installation">
              <CardTitle>Installation</CardTitle>
              <CardDescription>
                Learn how to install and set up the design system in your project
              </CardDescription>
            </Card>
            <Card to="/versioning">
              <CardTitle>Version History</CardTitle>
              <CardDescription>
                Stay up to date with the latest changes and improvements
              </CardDescription>
            </Card>
            <Card to="/guidelines">
              <CardTitle>Design Guidelines</CardTitle>
              <CardDescription>
                Understand our design principles and best practices
              </CardDescription>
            </Card>
          </Grid>
        </SectionContent>
      </Section>

      <Section theme="light">
        <SectionContent>
          <SectionTitle>Components</SectionTitle>
          <Grid>
            <Card to="/components/buttons">
              <CardTitle>Buttons</CardTitle>
              <CardDescription>
                Interactive elements for triggering actions
              </CardDescription>
            </Card>
            <Card to="/components/badges">
              <CardTitle>Badges</CardTitle>
              <CardDescription>
                Status indicators and notifications
              </CardDescription>
            </Card>
            <Card to="/components/inputs">
              <CardTitle>Input Fields</CardTitle>
              <CardDescription>
                Form controls for collecting user input
              </CardDescription>
            </Card>
            <Card to="/components/typography">
              <CardTitle>Typography</CardTitle>
              <CardDescription>
                Text styles and hierarchies
              </CardDescription>
            </Card>
          </Grid>
        </SectionContent>
      </Section>

      <Section>
        <SectionContent>
          <SectionTitle>Design Patterns</SectionTitle>
          <Grid>
            <Card to="/patterns/forms">
              <CardTitle>Forms</CardTitle>
              <CardDescription>
                Best practices for form layout and validation
              </CardDescription>
            </Card>
            <Card to="/patterns/navigation">
              <CardTitle>Navigation</CardTitle>
              <CardDescription>
                Patterns for helping users move through your application
              </CardDescription>
            </Card>
          </Grid>
        </SectionContent>
      </Section>
    </Container>
  );
};

export default HomePage; 