import type { FC } from 'react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { Button } from '../../components/Button/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  width: 100%;
`;

const PageHeader = styled.h1`
  font-size: 2.5rem;
  color: #212529;
  margin-bottom: 0.5rem;
`;

const SectionHeader = styled.h2`
  font-size: 1.75rem;
  color: #343a40;
  margin-bottom: 2rem;
`;

const SubHeader = styled.h3`
  font-size: 1.125rem;
  color: #64748B;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Card = styled.div`
  border: 1px solid #e9ecef;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 2rem;
  background: white;
`;

const ExamplePreview = styled.div`
  padding: 2rem;
  background: #ffffff;
  border-bottom: 1px solid #e9ecef;
  overflow-x: auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const CodeBlock = styled.div`
  background: #2d2d2d;
  overflow-x: auto;
  max-width: 100%;
  margin: 0;
  border-radius: 0 0 8px 8px;
  position: relative;
`;

const CopyButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #2563EB;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  cursor: pointer;
  z-index: 2;
  transition: background 0.2s;
  &:hover {
    background: #1D4ED8;
  }
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

const Notification = styled.div`
  position: fixed;
  left: 2rem;
  bottom: 2rem;
  background: #212529;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  z-index: 9999;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  opacity: 0.95;
`;

const ButtonPage: FC = () => {
  const [notification, setNotification] = useState('');

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setNotification('Copied to clipboard');
    setTimeout(() => setNotification(''), 3000);
  };

  const basicCode = `import { Button } from '@/components/Button';

<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>`;
  const iconCode = `import { Button } from '@/components/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

<Button>
  <OpenInNewIcon style={{ marginRight: 8 }} />
  Primary
</Button>
<Button variant="secondary">
  <OpenInNewIcon style={{ marginRight: 8 }} />
  Secondary
</Button>
<Button variant="danger">
  <OpenInNewIcon style={{ marginRight: 8 }} />
  Danger
</Button>`;
  const disabledCode = `import { Button } from '@/components/Button';

<Button disabled>Button</Button>`;

  return (
    <Container>
      <PageHeader>Button</PageHeader>
      <DocText>
        The Button Component is a fundamental element of the user interface used for triggering actions, navigating between pages, or submitting forms. It provides a clear call-to-action and enhances user interaction within the application or website.
      </DocText>
      <SectionHeader>Examples</SectionHeader>
      <Card>
        <ExamplePreview>
          <SubHeader>Basic</SubHeader>
          <ButtonGrid>
            <div>
              <Button>Primary</Button>
            </div>
            <div>
              <Button variant="secondary">Secondary</Button>
            </div>
            <div>
              <Button variant="danger">Danger</Button>
            </div>
          </ButtonGrid>
        </ExamplePreview>
        <CodeBlock>
          <CopyButton onClick={() => handleCopy(basicCode)}>Copy</CopyButton>
          <SyntaxHighlighter language="tsx" style={tomorrow} customStyle={{ background: '#2d2d2d', margin: 0, borderRadius: 0, padding: '1.5rem', fontSize: '0.875rem' }}>{basicCode}</SyntaxHighlighter>
        </CodeBlock>
      </Card>
      <Card>
        <ExamplePreview>
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
        </ExamplePreview>
        <CodeBlock>
          <CopyButton onClick={() => handleCopy(iconCode)}>Copy</CopyButton>
          <SyntaxHighlighter language="tsx" style={tomorrow} customStyle={{ background: '#2d2d2d', margin: 0, borderRadius: 0, padding: '1.5rem', fontSize: '0.875rem' }}>{iconCode}</SyntaxHighlighter>
        </CodeBlock>
      </Card>
      <Card>
        <ExamplePreview>
          <SubHeader>Disabled</SubHeader>
          <ButtonGrid>
            <div>
              <Button disabled>Disabled</Button>
            </div>
          </ButtonGrid>
        </ExamplePreview>
        <CodeBlock>
          <CopyButton onClick={() => handleCopy(`import { Button } from '@/components/Button';\n\n<Button disabled>Disabled</Button>`)}>Copy</CopyButton>
          <SyntaxHighlighter language="tsx" style={tomorrow} customStyle={{ background: '#2d2d2d', margin: 0, borderRadius: 0, padding: '1.5rem', fontSize: '0.875rem' }}>{`import { Button } from '@/components/Button';\n\n<Button disabled>Disabled</Button>`}</SyntaxHighlighter>
        </CodeBlock>
      </Card>
      <Card>
        <ExamplePreview>
          <SubHeader>Loading</SubHeader>
          <ButtonGrid>
            <div>
              <Button isLoading>Loading</Button>
            </div>
          </ButtonGrid>
        </ExamplePreview>
        <CodeBlock>
          <CopyButton onClick={() => handleCopy(`import { Button } from '@/components/Button';\n\n<Button isLoading>Loading</Button>`)}>Copy</CopyButton>
          <SyntaxHighlighter language="tsx" style={tomorrow} customStyle={{ background: '#2d2d2d', margin: 0, borderRadius: 0, padding: '1.5rem', fontSize: '0.875rem' }}>{`import { Button } from '@/components/Button';\n\n<Button isLoading>Loading</Button>`}</SyntaxHighlighter>
        </CodeBlock>
      </Card>
      {notification && <Notification>{notification}</Notification>}
    </Container>
  );
};

const DocText = styled.p`
  font-size: 1.125rem;
  color: #495057;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

export default ButtonPage; 