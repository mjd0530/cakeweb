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

const ButtonPage: FC = () => {
  const exampleCode = `
import { Button } from '@/components/Button';

// Button Variants
<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>
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
      </ComponentPage>
    </Container>
  );
};

export default ButtonPage; 