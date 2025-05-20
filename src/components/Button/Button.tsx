import { forwardRef } from 'react';
import styled from '@emotion/styled';
import CircularProgress from '@mui/material/CircularProgress';

export type ButtonVariant = 'primary' | 'secondary' | 'danger';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  isLoading?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 24px;
  border-radius: 100px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  min-width: 80px;
  border: none;

  &:focus:not(:disabled) {
    outline: none;
    box-shadow: 0 0 0 2px white, 0 0 0 5px #0D6EFD;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: #E0E0E0;
    color: #9E9E9E;
  }

  ${({ variant }) => {
    switch (variant) {
      case 'secondary':
        return `
          background: #E2E8F0;
          color: #495057;

          &:hover:not(:disabled) {
            background: #CBD5E1;
          }

          &:active:not(:disabled) {
            background: #CBD5E1;
          }
        `;
      case 'danger':
        return `
          background: #DC3545;
          color: white;

          &:hover:not(:disabled) {
            background: #C82333;
          }

          &:active:not(:disabled) {
            background: #BD2130;
          }
        `;
      default: // primary
        return `
          background: #0D6EFD;
          color: white;

          &:hover:not(:disabled) {
            background: #0B5ED7;
          }

          &:active:not(:disabled) {
            background: #0A58CA;
          }
        `;
    }
  }}
`;

const LoadingSpinner = styled(CircularProgress)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const ContentWrapper = styled.span<{ isLoading?: boolean }>`
  opacity: ${({ isLoading }) => (isLoading ? 0 : 1)};
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, isLoading, disabled, ...props }, ref) => {
    return (
      <StyledButton ref={ref} disabled={disabled || isLoading} {...props}>
        {isLoading && <LoadingSpinner size={16} color="inherit" />}
        <ContentWrapper isLoading={isLoading}>{children}</ContentWrapper>
      </StyledButton>
    );
  }
);

Button.displayName = 'Button'; 