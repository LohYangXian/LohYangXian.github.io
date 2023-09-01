import React from 'react';

const ScrollAnchorTag = ({ to, children }) => {
  const handleClick = (event) => {
    event.preventDefault();
    const targetElement = document.getElementById(to);
    if (targetElement) {
      const yOffset = -80; // Adjust the offset as needed
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <a className='text-black transition hover:text-gray-500/75' href={`#${to}`} onClick={handleClick}>
      {children}
    </a>
  );
};

export default ScrollAnchorTag;