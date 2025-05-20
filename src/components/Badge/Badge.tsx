import React from 'react';
import styled from '@emotion/styled';
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Badge variants based on the status/notification type
export type BadgeVariant = 'error' | 'warning' | 'info' | 'success';

// Badge position variants (icon at start, end, or both sides)
export type BadgeIconPosition = 'start' | 'end' | 'both' | 'icon-only';

interface BadgeProps {
  variant: BadgeVariant;
  label?: string;
  iconPosition?: BadgeIconPosition;
  className?: string;
}

// Dark grey color for text
const TEXT_COLOR = '#333333';

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

// Container styles for the badge
const BadgeContainer = styled.div<{
  variant: BadgeVariant;
  iconPosition: BadgeIconPosition;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  gap: 8px;
  padding: ${(props) => {
    if (props.iconPosition === 'icon-only') return '0';
    if (props.iconPosition === 'end') return '0 8px 0 12px'; // Reversed padding for end icon
    return '0 12px 0 8px'; // Default for start and both
  }};
  ${(props) => props.iconPosition === 'icon-only' && `
    width: 32px;
    border-radius: 50%;
  `}
  ${(props) => props.iconPosition !== 'icon-only' && `
    border-radius: 50px;
  `}
  font-size: 14px;
  font-weight: 600;
  font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: ${(props) => variantColors[props.variant].bg};
  color: ${TEXT_COLOR};
`;

// Icon styles for the Material Design icons
const IconWrapper = styled.div<{ variant: BadgeVariant }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => variantColors[props.variant].color};
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const Badge: React.FC<BadgeProps> = ({ 
  variant, 
  label = '', 
  iconPosition = 'start',
  className = '' 
}) => {
  // Render the appropriate Material Design icon based on variant
  const renderIcon = () => {
    switch (variant) {
      case 'error':
        return <ErrorIcon fontSize="small" />;
      case 'warning':
        return <WarningIcon fontSize="small" />;
      case 'info':
        return <InfoIcon fontSize="small" />;
      case 'success':
        return <CheckCircleIcon fontSize="small" />;
      default:
        return null;
    }
  };

  return (
    <BadgeContainer 
      variant={variant} 
      iconPosition={iconPosition} 
      className={className}
    >
      {(iconPosition === 'start' || iconPosition === 'both' || iconPosition === 'icon-only') && (
        <IconWrapper variant={variant}>
          {renderIcon()}
        </IconWrapper>
      )}
      
      {iconPosition !== 'icon-only' && label}
      
      {(iconPosition === 'end' || iconPosition === 'both') && (
        <IconWrapper variant={variant}>
          {renderIcon()}
        </IconWrapper>
      )}
    </BadgeContainer>
  );
};

export default Badge; 