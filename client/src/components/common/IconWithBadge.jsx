import React from "react";

// eslint-disable-next-line no-unused-vars
const IconWithBadge = ({ 
  icon: Icon, 
  badgeCount = 0, 
  showBadge = true, 
  className = '', 
  badgeClassName = '',
  onClick,
  title
}) => {
  return (
    <div className={`relative cursor-pointer ${className}`} onClick={onClick} title={title}>
      <Icon className="w-6 h-6 text-black hover:text-green-600 transition-colors duration-200" />
      {showBadge && badgeCount > 0 && (
        <span className={`
          flex items-center justify-center w-4 h-4 bg-green-600 text-white 
          rounded-full text-xs absolute -top-1.5 -right-1.5 font-medium
          ${badgeClassName}
        `}>
          {badgeCount > 99 ? '99+' : badgeCount}
        </span>
      )}
    </div>
  );
};

export default IconWithBadge;
