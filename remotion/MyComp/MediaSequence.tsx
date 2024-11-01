import React, { useMemo } from 'react';
import { AbsoluteFill, OffthreadVideo } from 'remotion';

interface MediaSequenceProps {
  src: string;
}

export const MediaSequence: React.FC<MediaSequenceProps> = ({ src }) => {
  const isVideo = useMemo(() => {
    return src.match(/\.(mp4|webm|ogg)$/i) !== null;
  }, [src]);

  return (
    <AbsoluteFill>
      {isVideo ? (
        <OffthreadVideo
          src={src}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      ) : (
        <img
          src={src}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      )}
    </AbsoluteFill>
  );
};