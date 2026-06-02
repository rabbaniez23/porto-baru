import React from 'react';

/**
 * TextSplitter Component
 * Splits a given text into words and characters wrapped in span tags
 * to enable CSS-based filtering (like blur or skew) and GSAP staggered animations.
 */
export const TextSplitter = ({ text, className = '', wordClassName = 'word', charClassName = 'char' }) => {
  if (!text) return null;

  const words = text.split(' ');

  return (
    <span className={`split-text-wrapper ${className}`}>
      {words.map((word, wordIdx) => {
        const characters = Array.from(word);
        return (
          <span 
            key={wordIdx} 
            className={wordClassName} 
            style={{ display: 'inline-block', whiteSpace: 'nowrap', marginRight: '0.25em' }}
          >
            {characters.map((char, charIdx) => (
              <span 
                key={charIdx} 
                className={charClassName} 
                style={{ display: 'inline-block', willChange: 'transform, filter, opacity' }}
              >
                {char}
              </span>
            ))}
          </span>
        );
      })}
    </span>
  );
};

export default TextSplitter;
