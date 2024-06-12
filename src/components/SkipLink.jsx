import { useState } from 'react';

function SkipLink() {
    const [isVisible, setIsVisible] = useState(false);

    function handleKeyDown (event) {
        if (event.key === 'Tab') {
            setIsVisible(true);
        }
    }

    document.addEventListener('keydown', handleKeyDown);

  return (
    <>
        {isVisible && (
        <a href="#main-content" 
        className="skip-to-content-link" 
        >Skip to main content</a>
        )}
    </>
  )
};

export default SkipLink;