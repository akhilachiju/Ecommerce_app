import React from "react";

const Section = ({ children, className = '' }) => (
  <section className={`py-8 ${className}`}>{children}</section>
);

const Container = ({ children, className = '' }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const SectionHeader = ({ title, subtitle, className = '' }) => (
  <div className={`text-center mb-8 ${className}`}>
    <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
    {subtitle && <p className="text-gray-600">{subtitle}</p>}
  </div>
);

const LoadingSpinner = ({ size = 'md', text = 'Loading...', className = '' }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`
        ${sizes[size]} border-4 border-gray-200 border-t-green-600 
        rounded-full animate-spin
      `}></div>
      {text && (
        <p className="text-gray-600 mt-3 animate-pulse">{text}</p>
      )}
    </div>
  );
};

const ErrorMessage = ({ message, className = '', onRetry }) => {
  return (
    <div className={`text-center ${className}`}>
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <p className="text-red-600 text-lg font-medium mb-2">Oops! Something went wrong</p>
        <p className="text-red-500 mb-4">{message}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};

const EmptyState = ({ 
  title = 'No items found', 
  description, 
  actionText, 
  onAction, 
  icon: Icon,
  className = '' 
}) => {
  return (
    <div className={`text-center py-12 ${className}`}>
      {Icon && <Icon className="w-16 h-16 text-gray-400 mx-auto mb-4" />}
      <h3 className="text-xl font-semibold text-gray-700 mb-2">{title}</h3>
      {description && (
        <p className="text-gray-500 mb-6 max-w-md mx-auto">{description}</p>
      )}
      {actionText && onAction && (
        <button
          onClick={onAction}
          className="bg-black text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors duration-300"
        >
          {actionText}
        </button>
      )}
    </div>
  );
};

export { LoadingSpinner, ErrorMessage, EmptyState, Section, Container, SectionHeader };
