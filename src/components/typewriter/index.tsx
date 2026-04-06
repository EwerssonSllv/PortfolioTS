import { useEffect, useRef, useState } from "react";

const words = [
  "Desenvolvedor Fullstack",
  "Desenvolvedor Backend",
  "Desenvolvedor Frontend",
  "Engenheiro de Software",
  "Desenvolvedor Web",
  "Desenvolvedor de Software",
];

export default function Typewriter() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const textRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: any;

    if (!isDeleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80);
    } 
    else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 40);
    } 
    else if (!isDeleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } 
    else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  useEffect(() => {
    if (textRef.current && lineRef.current) {
      const width = textRef.current.offsetWidth;
      lineRef.current.style.width = `${width}px`;
    }
  }, [text]);

  return (
    <span className="relative inline-block text-green-400 font-semibold">
      <span ref={textRef}>
        {text}
        <span className="animate-pulse">|</span>
      </span>
      <div
        ref={lineRef}
        className="absolute left-0 -bottom-1 h-0.5 bg-green-400 transition-all duration-75"
      />
    </span>
  );
}

