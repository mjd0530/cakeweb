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

const VersionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Version = styled.div`
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 2rem;
`;

const VersionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const VersionNumber = styled.h2`
  font-size: 1.5rem;
  color: #228be6;
`;

const VersionDate = styled.span`
  color: #868e96;
`;

const ChangeList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ChangeItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ChangeType = styled.span<{ type: 'added' | 'changed' | 'fixed' | 'removed' }>`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-right: 1rem;
  min-width: 80px;
  text-align: center;

  ${props => {
    switch (props.type) {
      case 'added':
        return `
          background: #d3f9d8;
          color: #2b8a3e;
        `;
      case 'changed':
        return `
          background: #fff3bf;
          color: #9c6700;
        `;
      case 'fixed':
        return `
          background: #e7f5ff;
          color: #1971c2;
        `;
      case 'removed':
        return `
          background: #ffe3e3;
          color: #c92a2a;
        `;
    }
  }}
`;

const ChangeDescription = styled.p`
  color: #495057;
  line-height: 1.6;
  flex: 1;
`;

const VersioningPage: FC = () => {
  const versions = [
    {
      number: '1.0.0',
      date: 'April 15, 2024',
      changes: [
        {
          type: 'added' as const,
          description: 'Initial release of the design system with core components'
        },
        {
          type: 'added' as const,
          description: 'Button component with primary, secondary, and outline variants'
        },
        {
          type: 'added' as const,
          description: 'Documentation site with component examples and usage guidelines'
        }
      ]
    },
    {
      number: '0.9.0',
      date: 'April 1, 2024',
      changes: [
        {
          type: 'added' as const,
          description: 'Beta release of core components'
        },
        {
          type: 'changed' as const,
          description: 'Updated color palette to improve accessibility'
        },
        {
          type: 'fixed' as const,
          description: 'Button component hover states and transitions'
        }
      ]
    }
  ];

  return (
    <Container>
      <Header>
        <Title>Version History</Title>
        <Description>
          Track the evolution of our design system with detailed release notes and change logs.
          Each version includes new features, improvements, and bug fixes.
        </Description>
      </Header>

      <VersionList>
        {versions.map(version => (
          <Version key={version.number}>
            <VersionHeader>
              <VersionNumber>Version {version.number}</VersionNumber>
              <VersionDate>{version.date}</VersionDate>
            </VersionHeader>
            <ChangeList>
              {version.changes.map((change, index) => (
                <ChangeItem key={index}>
                  <ChangeType type={change.type}>
                    {change.type.charAt(0).toUpperCase() + change.type.slice(1)}
                  </ChangeType>
                  <ChangeDescription>{change.description}</ChangeDescription>
                </ChangeItem>
              ))}
            </ChangeList>
          </Version>
        ))}
      </VersionList>
    </Container>
  );
};

export default VersioningPage; 