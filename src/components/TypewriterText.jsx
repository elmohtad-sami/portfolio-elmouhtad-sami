import React, { useState, useEffect, useRef } from 'react';

const PHRASES = [
  'FULL STACK WEB DEVELOPER',
  'PROBLEM SOLVER',
  'BACKEND & FRONTEND',
];

const TYPING_SPEED = 75;
const DELETING_SPEED = 35;
const PAUSE_AFTER_TYPING = 2200;
const PAUSE_AFTER_DELETING = 500;

export default function TypewriterText() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [fade, setFade] = useState(1);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentPhrase = PHRASES[phraseIndex];

    const schedule = (fn, delay) => {
      timeoutRef.current = setTimeout(fn, delay);
    };

    if (!isDeleting) {
      // Typing forward
      if (displayText.length < currentPhrase.length) {
        schedule(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, TYPING_SPEED + Math.random() * 50);
      } else {
        // Finished typing — pause, then fade out and start deleting
        schedule(() => {
          setFade(0);
          setTimeout(() => {
            setIsDeleting(true);
          }, 400);
        }, PAUSE_AFTER_TYPING);
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        schedule(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1));
        }, DELETING_SPEED);
      } else {
        // Finished deleting — move to next phrase, fade back in
        schedule(() => {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
          setFade(1);
        }, PAUSE_AFTER_DELETING);
      }
    }

    return () => clearTimeout(timeoutRef.current);
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <div className="typewriter-container">
      <span
        className="typewriter-text"
        style={{ opacity: fade }}
      >
        {displayText}
      </span>
      <span className="typewriter-cursor">|</span>

      <style>{`
        .typewriter-container {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 2em;
          gap: 2px;
        }

        .typewriter-text {
          font-size: clamp(0.85rem, 2.5vw, 1.15rem);
          font-weight: 700;
          letter-spacing: 0.25em;
          color: #ffffff;
          transition: opacity 0.4s ease;
          white-space: nowrap;
          text-shadow: none;
          font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
        }

        .typewriter-cursor {
          font-size: clamp(0.85rem, 2.5vw, 1.15rem);
          font-weight: 300;
          color: #ffffff;
          animation: blink 1s step-end infinite;
          margin-left: 1px;
          user-select: none;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
