"use client";

import { Player } from "@remotion/player";
import type { NextPage } from "next";
import React, { useMemo, useState } from "react";
import { Main } from "../remotion/MyComp/Main";
import {
  CompositionProps,
  defaultMyCompProps,
  DURATION_IN_FRAMES,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "../types/constants";
import { z } from "zod";
import { RenderControls } from "../components/RenderControls";
import { Tips } from "../components/Tips/Tips";
import { Spacing } from "../components/Spacing";

const container: React.CSSProperties = {
  maxWidth: 768,
  margin: "auto",
  marginBottom: 20,
};

const outer: React.CSSProperties = {
  borderRadius: "var(--geist-border-radius)",
  overflow: "hidden",
  boxShadow: "0 0 200px rgba(0, 0, 0, 0.15)",
  marginBottom: 40,
  marginTop: 60,
};

const player: React.CSSProperties = {
  width: "100%",
};

const Home: NextPage = () => {
  const [text, setText] = useState<string>(defaultMyCompProps.title);
  const [greenscreenSource, setGreenscreenSource] = useState<string>(defaultMyCompProps.greenscreenSource);
  const [source1, setSource1] = useState<string>(defaultMyCompProps.source1);
  const [source2, setSource2] = useState<string>(defaultMyCompProps.source2);
  const [source3, setSource3] = useState<string>(defaultMyCompProps.source3);
  const [duration1, setDuration1] = useState<number>(defaultMyCompProps.duration1);
  const [duration2, setDuration2] = useState<number>(defaultMyCompProps.duration2);
  const [duration3, setDuration3] = useState<number>(defaultMyCompProps.duration3);
  const [text1, setText1] = useState(defaultMyCompProps.text1);
  const [text2, setText2] = useState(defaultMyCompProps.text2);
  const [text3, setText3] = useState(defaultMyCompProps.text3);

  const inputProps: z.infer<typeof CompositionProps> = useMemo(() => {
    return {
      title: text,
      greenscreenSource,
      source1,
      source2,
      source3,
      duration1,
      duration2,
      duration3,
      text1,
      text2,
      text3,
    };
  }, [text, greenscreenSource, source1, source2, source3, duration1, duration2, duration3, text1, text2, text3]);

  return (
    <div>
      <div style={container}>
        <div className="cinematics" style={outer}>
          <Player
            component={Main}
            inputProps={inputProps}
            durationInFrames={DURATION_IN_FRAMES}
            fps={VIDEO_FPS}
            compositionHeight={VIDEO_HEIGHT}
            compositionWidth={VIDEO_WIDTH}
            style={player}
            controls
            autoPlay
            loop
          />
        </div>
        <RenderControls
          text={text}
          setText={setText}
          greenscreenSource={greenscreenSource}
          setGreenscreenSource={setGreenscreenSource}
          source1={source1}
          setSource1={setSource1}
          source2={source2}
          setSource2={setSource2}
          source3={source3}
          setSource3={setSource3}
          duration1={duration1}
          setDuration1={setDuration1}
          duration2={duration2}
          setDuration2={setDuration2}
          duration3={duration3}
          setDuration3={setDuration3}
          text1={text1}
          setText1={setText1}
          text2={text2}
          setText2={setText2}
          text3={text3}
          setText3={setText3}
          inputProps={inputProps}
        />
        <Spacing />
        <Spacing />
        <Spacing />
        <Spacing />
        <Tips />
      </div>
    </div>
  );
};

export default Home;