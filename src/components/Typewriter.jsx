import React, { useEffect, useState } from 'react';

const Typewriter = ({ words = [], typeSpeed = 100, deleteSpeed = 50, pause = 1200 }) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const current = words[wordIndex % words.length];

    if (!isDeleting) {
      // typing
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          // pause then start deleting
          setTimeout(() => setIsDeleting(true), pause);
        }
      }, typeSpeed);
    } else {
      // deleting
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => prev + 1);
        }
      }, deleteSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return (
    <span className="typewriter">
      <span className="typewriter-text">{text}</span>
      <span className="typewriter-cursor" aria-hidden>│</span>
    </span>
  );
};

export default Typewriter;
