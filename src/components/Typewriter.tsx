import { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  speed?: number;
  delay?: number;
}

const Typewriter = ({ words, speed = 100, delay = 2000 }: TypewriterProps) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    // End of word - wait then start reversing
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), delay);
      return () => clearTimeout(timeout);
    }

    // Back to start - move to next word
    if (subIndex === 0 && reverse) {
      const timeout = setTimeout(() => {
        setReverse(false);
        setIndex((prev) => (prev + 1) % words.length);
      }, speed);
      return () => clearTimeout(timeout);
    }

    // Normal typing/deleting
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, speed, delay]);

  return (
    <span className="inline-block min-h-[1.2em]">
      {words[index].substring(0, subIndex)}
      <span className="inline-block w-[2px] h-[1em] bg-blue-500 ml-1 animate-pulse align-middle" />
    </span>
  );
};

export default Typewriter;
