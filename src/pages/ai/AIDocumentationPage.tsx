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

const Section = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  color: #343a40;
  margin-bottom: 1.5rem;
`;

const SubSection = styled.div`
  margin-bottom: 2rem;
`;

const SubSectionTitle = styled.h3`
  font-size: 1.25rem;
  color: #495057;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
`;

const ListItem = styled.li`
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
  color: #495057;
  line-height: 1.6;

  &::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #228be6;
  }
`;

const AIDocumentationPage: FC = () => {
  return (
    <Container>
      <Header>
        <Title>Cake for AI</Title>
        <Description>
          A comprehensive guide to our AI design system, providing patterns, components, and best practices
          for building AI-powered interfaces that are intuitive, trustworthy, and user-friendly.
        </Description>
      </Header>

      <Section>
        <SectionTitle>Core Principles</SectionTitle>
        <List>
          <ListItem>
            <strong>Transparency:</strong> Always make it clear when users are interacting with AI-powered features
          </ListItem>
          <ListItem>
            <strong>User Control:</strong> Provide ways for users to adjust, override, or opt out of AI features
          </ListItem>
          <ListItem>
            <strong>Feedback Loops:</strong> Include mechanisms for users to provide feedback on AI outputs
          </ListItem>
          <ListItem>
            <strong>Error Handling:</strong> Gracefully handle AI errors and provide clear fallback options
          </ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>Design Patterns</SectionTitle>
        
        <SubSection>
          <SubSectionTitle>AI Indicators</SubSectionTitle>
          <Description>
            Use consistent visual cues to indicate AI-powered features:
          </Description>
          <List>
            <ListItem>The AI sparkle icon (✨) for AI-generated content</ListItem>
            <ListItem>Purple accent colors (#7048E8) for AI-specific UI elements</ListItem>
            <ListItem>Subtle animation patterns for active AI processes</ListItem>
          </List>
        </SubSection>

        <SubSection>
          <SubSectionTitle>Loading States</SubSectionTitle>
          <Description>
            AI operations often require processing time. Use appropriate loading indicators:
          </Description>
          <List>
            <ListItem>Typing indicators for chat-like interfaces</ListItem>
            <ListItem>Progress bars for longer operations</ListItem>
            <ListItem>Skeleton screens for content generation</ListItem>
          </List>
        </SubSection>
      </Section>

      <Section>
        <SectionTitle>Components</SectionTitle>
        <Description>
          Our AI-specific components are designed to handle common AI interaction patterns:
        </Description>
        <List>
          <ListItem>AI Chat Interface</ListItem>
          <ListItem>AI-Enhanced Input Fields</ListItem>
          <ListItem>AI Response Cards</ListItem>
          <ListItem>Feedback Controls</ListItem>
          <ListItem>Confidence Indicators</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>Accessibility</SectionTitle>
        <Description>
          Ensure AI features are accessible to all users:
        </Description>
        <List>
          <ListItem>Provide text alternatives for AI-generated images</ListItem>
          <ListItem>Ensure screen readers can announce AI-generated content appropriately</ListItem>
          <ListItem>Support keyboard navigation for all AI interactions</ListItem>
          <ListItem>Maintain sufficient color contrast for AI indicators</ListItem>
        </List>
      </Section>
    </Container>
  );
};

export default AIDocumentationPage; 