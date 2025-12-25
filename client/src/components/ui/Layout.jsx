import React from 'react';

const Section = ({ 
  children, 
  className = '', 
  background = 'white',
  padding = 'default'
}) => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900',
    transparent: 'bg-transparent'
  };

  const paddings = {
    none: '',
    sm: 'py-8',
    default: 'py-16',
    lg: 'py-24'
  };

  return (
    <section className={`
      ${backgrounds[background]} 
      ${paddings[padding]} 
      ${className}
    `}>
      {children}
    </section>
  );
};

const Container = ({ children, className = '', size = 'default' }) => {
  const sizes = {
    sm: 'max-w-4xl',
    default: 'max-w-[1280px]',
    lg: 'max-w-7xl',
    full: 'max-w-full'
  };

  return (
    <div className={`
      ${sizes[size]} mx-auto px-4 sm:px-6 md:px-8 
      ${className}
    `}>
      {children}
    </div>
  );
};

const SectionHeader = ({ 
  title, 
  description, 
  centered = true, 
  className = '' 
}) => {
  return (
    <div className={`
      ${centered ? 'text-center' : ''} 
      mb-10 ${className}
    `}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export { Section, Container, SectionHeader };
