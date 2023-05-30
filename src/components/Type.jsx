import React, { useState, useEffect } from 'react';
import './TypingAnimation.css'; // Import the CSS file for styling

const TypingAnimation = () => {
  const [displayText, setDisplayText] = useState('');
  const textToType = 'Find Your Dream Job'; // The text you want to animate

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;
    let typingInterval;

    const startTyping = () => {
      currentText = '';
      currentIndex = 0;
      typingInterval = setInterval(() => {
        currentText += textToType[currentIndex];
        setDisplayText(currentText);
        currentIndex++;

        if (currentIndex === textToType.length) {
          clearInterval(typingInterval);
          setTimeout(() => {
            setDisplayText(''); // Clear the text
            startTyping(); // Start the typing animation again
          }, 1000); // Delay before starting the next loop (1 second in this example)
        }
      }, 100); // Adjust typing speed by changing the interval value
    };

    startTyping();

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <div className="typing-animation inline ml-2 text-[20px] md:text-[50px] text-indigo-500 text-center">
      {displayText}
      <span className="typing-cursor"></span> {/* Add a blinking cursor */}
    </div>
  );
};

export default TypingAnimation;
