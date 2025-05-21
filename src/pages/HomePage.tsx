import type { FC } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  min-width: 100%;
`;

const Hero = styled.div`
  width: 100vw;
  min-width: 100vw;
  margin: 0;
  padding: 0;
  background: #181A20;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: stretch;
  height: 400px;

  @media (max-width: 900px) {
    flex-direction: column;
    height: auto;
    min-height: 320px;
  }
`;

const HeroContent = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 0 0 4rem;
  z-index: 2;

  @media (max-width: 900px) {
    padding: 2rem 1rem 1rem 1rem;
    align-items: flex-start;
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  color: #fff;
  margin: 0 0 1.5rem 0;
  line-height: 1.1;
  letter-spacing: -2px;
  text-align: left;

  @media (max-width: 900px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

const HeroShapes = styled.div`
  flex: 2 1 0;
  position: relative;
  height: 100%;
  min-width: 400px;
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  z-index: 1;
  pointer-events: none;

  @media (max-width: 900px) {
    min-width: 0;
    height: 200px;
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
          <HeroTitle>Cake<br />Design System</HeroTitle>
        </HeroContent>
        <HeroShapes>
          <svg width="100%" height="100%" viewBox="0 0 700 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', right: 0, top: 0, height: '100%', width: '100%' }}>
            <circle cx="600" cy="200" r="120" fill="#0A58CA" />
            <ellipse cx="500" cy="100" rx="80" ry="120" fill="#22D3EE" />
            <ellipse cx="650" cy="350" rx="60" ry="80" fill="#F59E42" />
            <ellipse cx="400" cy="300" rx="100" ry="60" fill="#F43F5E" />
            <ellipse cx="550" cy="250" rx="60" ry="60" fill="#FDE047" />
            <ellipse cx="700" cy="100" rx="80" ry="80" fill="#2563EB" />
            <ellipse cx="480" cy="350" rx="40" ry="40" fill="#181A20" fillOpacity="0.5" />
          </svg>
        </HeroShapes>
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