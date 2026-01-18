import React, { useState, useRef } from 'react';
import { useClickOutside } from '../../hooks';

const Dropdown = ({ 
  options = [], 
  value, 
  onChange, 
  placeholder = 'Select an option',
  className = '',
  disabled = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={`relative w-full ${className}`}>
      <button
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`
          w-full flex justify-between items-center px-4 py-3 border 
          rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-green-500 
          text-gray-700 transition-colors duration-200
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:border-green-500'}
          ${isOpen ? 'border-green-500 ring-2 ring-green-500' : 'border-gray-300'}
        `}
      >
        <span className={value ? 'text-gray-900' : 'text-gray-500'}>
          {value || placeholder}
        </span>
        <span className={`
          text-gray-400 transition-transform duration-200
          ${isOpen ? 'rotate-180' : ''}
        `}>
          ▼
        </span>
      </button>

      {isOpen && (
        <ul className="
          absolute left-0 right-0 mt-2 bg-white border border-gray-200 
          rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto
        ">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              className={`
                px-4 py-2 cursor-pointer hover:bg-green-50 transition-colors duration-150
                ${value === option ? 'bg-green-100 text-green-700' : 'text-gray-700'}
                ${index === 0 ? 'rounded-t-xl' : ''}
                ${index === options.length - 1 ? 'rounded-b-xl' : ''}
              `}
            >
              {typeof option === 'string' 
                ? option.charAt(0).toUpperCase() + option.slice(1)
                : option.label || option.name || option
              }
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
