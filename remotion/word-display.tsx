import { Composition, useCurrentFrame, useVideoConfig } from 'remotion';
import script from './script.json';
import { useEffect, useState } from 'react';

export const WordDisplay = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const [currentWord, setCurrentWord] = useState('');

  useEffect(() => {
    // Calculate the current time in seconds
    const currentTimeInSeconds = frame / fps;

    // Find the word that should be displayed based on the current time
    const wordObject = script.find(
      (wordObj) =>
        currentTimeInSeconds >= wordObj.start_time &&
        currentTimeInSeconds <= wordObj.end_time
    );

    // Update the displayed word
    if (wordObject) {
      setCurrentWord(wordObject.word);
    } else {
      setCurrentWord('');
    }
  }, [frame, fps]);

  return (
    <div
      style={{
        textAlign: 'center',
        padding: '20%',
        color: 'white',
        fontSize: 70,
        fontWeight: 900,
        textShadow:
          '-4px -4px 0 #000, ' +
          '4px -4px 0 #000, ' +
          '-4px 4px 0 #000, ' +
          '4px 4px 0 #000, ' +
          '0 0 8px rgba(0,0,0,0.7)',
        fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
        WebkitTextStroke: '2px black',
        paintOrder: 'stroke fill',
        textTransform: 'lowercase',
        letterSpacing: '1px',
      }}
    >
      {currentWord}
    </div>
  );
};

// Render the composition in Remotion
export const MyVideo = () => {
  return (
    <Composition
      id="WordDisplay"
      component={WordDisplay}
      durationInFrames={Math.ceil(script[script.length - 1].end_time * 30)} // Calculate total duration based on the last word
      fps={30}
      width={720}
      height={1280}
    />
  );
};