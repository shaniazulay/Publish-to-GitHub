import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 text-center text-sm font-light text-gray-500 border-t border-gray-900">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Aya Design. כל הזכויות שמורות.</p>
      </div>
    </footer>
  );
};

export default Footer;
