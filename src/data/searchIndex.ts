export interface SearchResult {
  title: string;
  description: string;
  path: string;
  category: string;
}

export const searchIndex: SearchResult[] = [
  {
    title: 'Home',
    description: 'Welcome to the Cake Design System documentation',
    path: '/',
    category: 'Getting Started'
  },
  {
    title: 'Button',
    description: 'Interactive elements for triggering actions',
    path: '/components/button',
    category: 'Components'
  },
  {
    title: 'Badge',
    description: 'Status indicators and notifications',
    path: '/components/badge',
    category: 'Components'
  },
  {
    title: 'Chip',
    description: 'Compact elements that represent an input, attribute, or action',
    path: '/components/chip',
    category: 'Components'
  },
  {
    title: 'Version History',
    description: 'Track the evolution of our design system with detailed release notes and change logs',
    path: '/versioning',
    category: 'Getting Started'
  },
  {
    title: 'Cake for AI',
    description: 'AI-specific components and design patterns',
    path: '/ai',
    category: 'Subsystems'
  },
  {
    title: 'PC Software',
    description: 'Design patterns and components for PC software applications',
    path: '/pc-software',
    category: 'Subsystems'
  },
  {
    title: 'Enterprise',
    description: 'Enterprise-level design patterns and components',
    path: '/enterprise',
    category: 'Subsystems'
  },
  {
    title: 'Red Velvet',
    description: 'Specialized components for the Red Velvet subsystem',
    path: '/red-velvet',
    category: 'Subsystems'
  },
  {
    title: 'Gaming',
    description: 'Gaming-specific components and design patterns',
    path: '/gaming',
    category: 'Subsystems'
  },
  {
    title: 'What are Subsystems?',
    description: 'Learn about the different subsystems in our design system',
    path: '/what-are-subsystems',
    category: 'Subsystems'
  }
]; 