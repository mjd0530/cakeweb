import type { FC } from 'react';
import styled from '@emotion/styled';
import ComponentPage from '../../components/ComponentPage/ComponentPage';
import { Button } from '../../components/Button/Button';

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  width: 100%;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  align-items: center;
`;

const Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ marginRight: 8 }}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const ButtonPage: FC = () => {
  const exampleCode = `
import { Button } from '@/components/Button';

// Button Variants
<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>
`;

  const iconButtonCode = `
import { Button } from '@/components/Button';

// With icon on the left
<Button><Icon />Button</Button>
<Button variant="secondary"><Icon />Button</Button>
<Button variant="danger"><Icon />Button</Button>
<Button disabled><Icon />Button</Button>
<Button isLoading><Icon />Button</Button>

// Icon component:
const Icon = () => (
  <svg ...>...</svg>
);
`;

  return (
    <Container>
      <ComponentPage
        title="Button"
        description="Buttons allow users to trigger an action or event with a single click. They communicate calls to action to your users and allow them to interact with your interface."
        code={exampleCode}
      >
        <Section>
          <ButtonGrid>
            <div>
              <Button>
                Primary
              </Button>
            </div>
            <div>
              <Button variant="secondary">
                Secondary
              </Button>
            </div>
            <div>
              <Button variant="danger">
                Danger
              </Button>
            </div>
          </ButtonGrid>
        </Section>
        <Section>
          <h2>Button with Icon</h2>
          <ButtonGrid>
            <div>
              <Button><Icon />Button</Button>
            </div>
            <div>
              <Button variant="secondary"><Icon />Button</Button>
            </div>
            <div>
              <Button variant="danger"><Icon />Button</Button>
            </div>
            <div>
              <Button disabled><Icon />Button</Button>
            </div>
            <div>
              <Button isLoading><Icon />Button</Button>
            </div>
          </ButtonGrid>
        </Section>
      </ComponentPage>
    </Container>
  );
};

export default ButtonPage; 