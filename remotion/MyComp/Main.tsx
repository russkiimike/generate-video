import { z } from "zod";
import {
  AbsoluteFill,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Series
} from "remotion";
import { CompositionProps } from "../../types/constants";
import { NextLogo } from "./NextLogo";
import { loadFont, fontFamily } from "@remotion/google-fonts/Inter";
import React, { useMemo } from "react";
import { Rings } from "./Rings";
import { TextFade } from "./TextFade";
import { Greenscreen } from "./Greenscreen";
import { MediaSequence } from "./MediaSequence";

loadFont();

const container: React.CSSProperties = {
  backgroundColor: "white",
};

const logo: React.CSSProperties = {
  justifyContent: "center",
  alignItems: "center",
};

export const Main = ({ 
  title, 
  greenscreenSource, 
  source1,
  source2,
  source3,
  duration1,
  duration2,
  duration3
}: z.infer<typeof CompositionProps>) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const transitionStart = 2 * fps;
  const transitionDuration = 1 * fps;

  const logoOut = spring({
    fps,
    frame,
    config: {
      damping: 200,
    },
    durationInFrames: transitionDuration,
    delay: transitionStart,
  });

  const titleStyle: React.CSSProperties = useMemo(() => {
    return { fontFamily, fontSize: 70 };
  }, []);

  const sequences = useMemo(() => {
    return [
      { src: source1, duration: duration1 },
      { src: source2, duration: duration2 },
      { src: source3, duration: duration3 }
    ].filter(seq => seq.duration > 0);
  }, [source1, source2, source3, duration1, duration2, duration3]);

  return (
    <AbsoluteFill style={container}>
      
     
     
      <Sequence durationInFrames={transitionStart + transitionDuration}>
        <Rings outProgress={logoOut} />
        <AbsoluteFill style={logo}>
          <NextLogo outProgress={logoOut} />
        </AbsoluteFill>
      </Sequence>

       <Series>
        {sequences.map((seq, index) => (
          <Series.Sequence key={index} durationInFrames={seq.duration}>
            <MediaSequence src={seq.src} />
          </Series.Sequence>
        ))}
      </Series>

      <Sequence from={0}>
        <AbsoluteFill style={{
         
        }}>
          <Greenscreen opacity={0} src={greenscreenSource} />
        </AbsoluteFill>
      </Sequence>
   
      <Sequence from={transitionStart + transitionDuration / 2}>
        <TextFade>
          <h1 style={titleStyle}>{title}</h1>
        </TextFade>
      </Sequence>
    </AbsoluteFill>
  );
};