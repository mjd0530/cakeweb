import type { FC } from 'react';
import styled from '@emotion/styled';
import ComponentPage from '../../components/ComponentPage/ComponentPage';
import Badge from '../../components/Badge/Badge';

const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
`;

const BadgeSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SectionHeading = styled.h3`
  font-size: 1.25rem;
  color: #343a40;
  margin-bottom: 0.5rem;
  font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const DesignNote = styled.p`
  font-size: 0.9375rem;
  color: #6c757d;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
  font-style: italic;
`;

const ChipPage: FC = () => {
  const exampleCode = `
import React from 'react';
import styled from '@emotion/styled';

// Badge/Chip variants based on status/notification type
export type BadgeVariant = 'error' | 'warning' | 'info' | 'success';

// Badge/Chip position variants (icon at start, end, or both sides)
export type BadgeIconPosition = 'start' | 'end' | 'both' | 'icon-only';

// Dark grey color for text
const TEXT_COLOR = '#333333';

interface BadgeProps {
  variant: BadgeVariant;
  label?: string;
  iconPosition?: BadgeIconPosition;
  className?: string;
}

// Map of variant to colors (for backgrounds and icons)
const variantColors = {
  error: {
    bg: '#FFF0F0',
    color: '#E03131',
  },
  warning: {
    bg: '#FFF9DB',
    color: '#F08C00',
  },
  info: {
    bg: '#E7F5FF',
    color: '#1971C2',
  },
  success: {
    bg: '#EBFBEE',
    color: '#2B8A3E',
  },
};

// Container styles for the badge
const BadgeContainer = styled.div<{
  variant: BadgeVariant;
  iconPosition: BadgeIconPosition;
}>\`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: \${(props) => (props.iconPosition === 'icon-only' ? '4px' : '4px 16px')};
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: \${(props) => variantColors[props.variant].bg};
  color: \${TEXT_COLOR}; /* Dark grey text color for better readability */
\`;

// Usage examples:
<Badge variant="info" label="Information" />
<Badge variant="success" label="Success" />
<Badge variant="warning" label="Warning" iconPosition="end" />
<Badge variant="error" label="Error" iconPosition="both" />
`;

  return (
    <ComponentPage
      title="Chip"
      description="Chips are compact elements that represent discrete pieces of information, attributes, or actions. They help users enter information, make selections, filter content, or trigger actions in a limited space format."
      code={exampleCode}
    >
      <DesignNote>
        This component uses Material Design inspired icons and Segoe UI font with semi-bold (600) weight for optimal visual clarity and emphasis.
        The text color is a dark grey (#333333) for consistent readability across all chip variants, while background colors vary to distinguish different states.
        The 16px horizontal padding provides balanced spacing for better readability.
      </DesignNote>
      
      <BadgeSection>
        <div>
          <SectionHeading>Standard Chips with Icon at Start</SectionHeading>
          <BadgeContainer>
            <Badge variant="error" label="Error" />
            <Badge variant="warning" label="Warning" />
            <Badge variant="info" label="Information" />
            <Badge variant="success" label="Success" />
          </BadgeContainer>
        </div>

        <div>
          <SectionHeading>Chips with Icon at End</SectionHeading>
          <BadgeContainer>
            <Badge variant="error" label="Error" iconPosition="end" />
            <Badge variant="warning" label="Warning" iconPosition="end" />
            <Badge variant="info" label="Information" iconPosition="end" />
            <Badge variant="success" label="Success" iconPosition="end" />
          </BadgeContainer>
        </div>

        <div>
          <SectionHeading>Chips with Icons on Both Sides</SectionHeading>
          <BadgeContainer>
            <Badge variant="error" label="Error" iconPosition="both" />
            <Badge variant="warning" label="Warning" iconPosition="both" />
            <Badge variant="info" label="Information" iconPosition="both" />
            <Badge variant="success" label="Success" iconPosition="both" />
          </BadgeContainer>
        </div>

        <div>
          <SectionHeading>Icon-Only Chips</SectionHeading>
          <BadgeContainer>
            <Badge variant="error" iconPosition="icon-only" />
            <Badge variant="warning" iconPosition="icon-only" />
            <Badge variant="info" iconPosition="icon-only" />
            <Badge variant="success" iconPosition="icon-only" />
          </BadgeContainer>
        </div>
      </BadgeSection>
    </ComponentPage>
  );
};

export default ChipPage; 