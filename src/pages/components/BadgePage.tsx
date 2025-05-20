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

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const BadgePage: FC = () => {
  const exampleCode = `
import React from 'react';
import styled from '@emotion/styled';

// Badge variants based on status/notification type
export type BadgeVariant = 'error' | 'warning' | 'info' | 'success';

// Badge position variants (icon at start, end, or both sides)
export type BadgeIconPosition = 'start' | 'end' | 'both' | 'icon-only';

interface BadgeProps {
  variant: BadgeVariant;
  label?: string;
  iconPosition?: BadgeIconPosition;
  className?: string;
}

// Map of variant to colors
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

// Usage examples:
<Badge variant="info" label="Information" />
<Badge variant="success" label="Success" />
<Badge variant="warning" label="Warning" iconPosition="end" />
<Badge variant="error" label="Error" iconPosition="both" />
<Badge variant="info" iconPosition="icon-only" />
`;

  return (
    <ComponentPage
      title="Badge"
      description="Badges are small status indicators that represent state, attributes, or actions. They help highlight important information, such as statuses, counts, or categories, allowing users to quickly identify and understand different states."
      code={exampleCode}
    >
      <BadgeSection>
        <div>
          <SectionHeading>Standard Badges with Icon at Start</SectionHeading>
          <BadgeContainer>
            <Badge variant="error" label="Error" />
            <Badge variant="warning" label="Warning" />
            <Badge variant="info" label="Information" />
            <Badge variant="success" label="Success" />
          </BadgeContainer>
        </div>

        <div>
          <SectionHeading>Badges with Icon at End</SectionHeading>
          <BadgeContainer>
            <Badge variant="error" label="Error" iconPosition="end" />
            <Badge variant="warning" label="Warning" iconPosition="end" />
            <Badge variant="info" label="Information" iconPosition="end" />
            <Badge variant="success" label="Success" iconPosition="end" />
          </BadgeContainer>
        </div>

        <div>
          <SectionHeading>Badges with Icons on Both Sides</SectionHeading>
          <BadgeContainer>
            <Badge variant="error" label="Error" iconPosition="both" />
            <Badge variant="warning" label="Warning" iconPosition="both" />
            <Badge variant="info" label="Information" iconPosition="both" />
            <Badge variant="success" label="Success" iconPosition="both" />
          </BadgeContainer>
        </div>

        <div>
          <SectionHeading>Icon-Only Badges</SectionHeading>
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

export default BadgePage; 