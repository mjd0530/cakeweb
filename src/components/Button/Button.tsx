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
  padding: 0 24px;
  border-radius: 100px;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  min-width: 80px;
  border: none;
  height: 40px;
  text-align: center;

  &:focus:not(:disabled) {
    outline: none;
    box-shadow: 0 0 0 2px white, 0 0 0 5px #0D6EFD;
  }

  &:disabled {
    background: #E2E8F0;
    color: #64748B;
    cursor: not-allowed;
    opacity: 1;
  }

  ${({ variant, disabled, isLoading }) => {
    if (disabled) {
      return `
        background: #E2E8F0;
        color: #64748B;
        cursor: not-allowed;
        opacity: 1;
      `;
    }
    if (isLoading) {
      return `
        background: #E2E8F0;
        color: #64748B;
        cursor: not-allowed;
        opacity: 1;
      `;
    }
    switch (variant) {
      case 'secondary':
        return `
          background: #E2E8F0;
          color: #1E293B;

          &:hover:not(:disabled) {
            background: #CBD5E1;
          }

          &:active:not(:disabled) {
            background: #CBD5E1;
          }
        `;
      case 'danger':
        return `
          background: #B91C1C;
          color: white;

          &:hover:not(:disabled) {
            background: #991B1B;
          }

          &:active:not(:disabled) {
            background: #7F1D1D;
          }
        `;
      default: // primary
        return `
          background: #2563EB;
          color: white;

          &:hover:not(:disabled) {
            background: #1D4ED8;
          }

          &:active:not(:disabled) {
            background: #1E40AF;
          }
        `;
    }
  }}
`;

const LoadingSpinner = styled('span')`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: static;
  margin-left: 12px;
  width: 20px;
  height: 20px;
`;

const SpinnerSvg = styled('svg')<{ isLoading?: boolean }>`
  width: 20px;
  height: 20px;
  display: block;
`;

const ContentWrapper = styled.span<{ isLoading?: boolean }>`
  opacity: ${({ isLoading }) => (isLoading ? 0.5 : 1)};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, isLoading, disabled, ...props }, ref) => {
    const spinnerColor = isLoading ? '#1D4ED8' : '#64748B';
    const spinnerTrack = '#E2E8F0';
    return (
      <StyledButton ref={ref} disabled={disabled || isLoading} isLoading={isLoading} {...props}>
        <ContentWrapper isLoading={isLoading}>{children}</ContentWrapper>
        {isLoading && (
          <LoadingSpinner>
            <SpinnerSvg viewBox="0 0 24 24">
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke={spinnerTrack}
                strokeWidth="4"
              />
              <path
                d="M12 2 a 10 10 0 0 1 0 20"
                fill="none"
                stroke={spinnerColor}
                strokeWidth="4"
                strokeLinecap="round"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 12 12"
                  to="360 12 12"
                  dur="0.8s"
                  repeatCount="indefinite"
                />
              </path>
            </SpinnerSvg>
          </LoadingSpinner>
        )}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button'; 