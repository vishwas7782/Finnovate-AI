// TypewriterEffect.jsx
import React, { useState, useEffect, useRef } from 'react';

const TypewriterEffect = ({ text, speed = 50 }) => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRef = useRef(text);

  useEffect(() => {
    let timeout;
    if (currentIndex < textRef.current.length) {
      timeout = setTimeout(() => {
        setTypedText((prevTypedText) => prevTypedText + textRef.current.charAt(currentIndex));
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, speed);
    } else {
      // Optional: Reset after full text is typed
       // setTypedText(text);
       // setCurrentIndex(0);
    }
    return () => clearTimeout(timeout);
  }, [currentIndex, speed, text]);

  return (
    <span className="typewriter-text">
      {typedText}
      <span className="typewriter-cursor">|</span>
    </span>
  );
};

export default TypewriterEffect;