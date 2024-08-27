import React from 'react';

const FramedButton = ({ children, href, onClick }) => {
  return (
    <a 
      href={href} 
      onClick={onClick} 
      className="btn text-sx px-2 py-1 border border-gray-300 rounded-md"
    >
      <span className="noselect">{children}</span>
    </a>
  );
};

export default FramedButton;
