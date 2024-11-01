import React from 'react';
import { AbsoluteFill } from 'remotion';
import { z } from 'zod';
import { TextStyle } from '../../types/constants';

export const TextOverlay: React.FC<{
  style: z.infer<typeof TextStyle>;
}> = ({ style }) => {
  if (!style?.text) {
    return null;
  }

  const words = style.text.split(' ');
  let lines: string[] = [];
  let currentLine = '';

  words.forEach(word => {
    if (currentLine.length + word.length > 30) {
      lines.push(currentLine.trim());
      currentLine = word;
    } else {
      currentLine += (currentLine ? ' ' : '') + word;
    }
  });
  if (currentLine) {
    lines.push(currentLine.trim());
  }

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        transform: `translate(${style.offsetX}px, ${style.offsetY}px) rotate(${style.rotation}deg)`,
      }}
    >
      <div
        style={{
          textAlign: 'center',
          fontFamily: style.fontFamily,
          fontSize: style.fontSize,
          fontWeight: style.fontWeight,
          color: style.color,
          WebkitTextStroke: `${style.strokeWidth}px black`,
          textStroke: `${style.strokeWidth}px black`,
        }}
      >
        {lines.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </AbsoluteFill>
  );
};