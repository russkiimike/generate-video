import React, { useCallback, useRef } from "react";
import { AbsoluteFill, OffthreadVideo, useVideoConfig } from "remotion";

export const Greenscreen: React.FC<{
  opacity: number;
  src: string;
}> = ({ opacity, src }) => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const { width, height } = useVideoConfig();
 
  const onVideoFrame = useCallback(
    (frame: CanvasImageSource) => {
      if (!canvas.current) {
        return;
      }
      const context = canvas.current.getContext("2d");
 
      if (!context) {
        return;
      }
 
      context.drawImage(frame, 0, 0, width, height);
      const imageFrame = context.getImageData(0, 0, width, height);
      const { length } = imageFrame.data;
 
      for (let i = 0; i < length; i += 4) {
        const red = imageFrame.data[i + 0];
        const green = imageFrame.data[i + 1];
        const blue = imageFrame.data[i + 2];
        if (green > 100 && red < 100 && blue < 100) {
          imageFrame.data[i + 3] = opacity * 255;
        }
      }
      context.putImageData(imageFrame, 0, 0);
    },
    [height, width, opacity]
  );
 
  return (
    <AbsoluteFill>
      <AbsoluteFill>
        <OffthreadVideo
          style={{ opacity: 0 }}
          onVideoFrame={onVideoFrame}
          src={src}
        />
      </AbsoluteFill>
      <AbsoluteFill>
        <canvas ref={canvas} width={width} height={height} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};