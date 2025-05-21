import type { FC } from 'react';
import styled from '@emotion/styled';
import ComponentPage from '../../components/ComponentPage/ComponentPage';
import { Button } from '../../components/Button/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  width: 100%;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SubHeader = styled.h3`
  font-size: 1.125rem;
  color: #64748B;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  align-items: center;
`;

const IconLeft = styled(OpenInNewIcon)<{ disabled?: boolean }>`
  margin-right: 8px;
  color: ${({ disabled }) => (disabled ? '#64748B' : 'inherit')};
`;

const ButtonPage: FC = () => {
  const code = `import { Button } from '@/components/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

// Basic
<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>

// With Icon
<Button><OpenInNewIcon style={{ marginRight: 8 }} />Primary</Button>
<Button variant="secondary"><OpenInNewIcon style={{ marginRight: 8 }} />Secondary</Button>
<Button variant="danger"><OpenInNewIcon style={{ marginRight: 8 }} />Danger</Button>
`;

  return (
    <Container>
      <ComponentPage
        title="Examples"
        description="Buttons allow users to trigger an action or event with a single click. They communicate calls to action to your users and allow them to interact with your interface."
        code={code}
      >
        <Section>
          <SubHeader>Basic</SubHeader>
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
          <SubHeader>With Icon</SubHeader>
          <ButtonGrid>
            <div>
              <Button><IconLeft /><span>Primary</span></Button>
            </div>
            <div>
              <Button variant="secondary"><IconLeft /><span>Secondary</span></Button>
            </div>
            <div>
              <Button variant="danger"><IconLeft /><span>Danger</span></Button>
            </div>
          </ButtonGrid>
        </Section>
      </ComponentPage>
    </Container>
  );
};

export default ButtonPage; 