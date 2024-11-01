import { z } from "zod";
export const COMP_NAME = "MyComp";

export const TextStyle = z.object({
  text: z.string(),
  fontFamily: z.string(),
  fontSize: z.number(),
  fontWeight: z.number(),
  color: z.string(),
  strokeWidth: z.number(),
  rotation: z.number(),
  offsetX: z.number(),
  offsetY: z.number(),
});

export const CompositionProps = z.object({
  title: z.string(),
  greenscreenSource: z.string(),
  source1: z.string(),
  source2: z.string(),
  source3: z.string(),
  duration1: z.number(),
  duration2: z.number(),
  duration3: z.number(),
  text1: TextStyle,
  text2: TextStyle,
  text3: TextStyle,
});

export const defaultTextStyle = {
  text: "Add your text here",
  fontFamily: "Arial",
  fontSize: 48,
  fontWeight: 700,
  color: "#FFFFFF",
  strokeWidth: 2,
  rotation: 0,
  offsetX: 0,
  offsetY: 0,
};

export const defaultMyCompProps: z.infer<typeof CompositionProps> = {
  title: "Next.js and Remotion",
  greenscreenSource: "https://remotion-assets.s3.eu-central-1.amazonaws.com/just-do-it-short.mp4",
  source1: "https://remotion-assets.s3.eu-central-1.amazonaws.com/just-do-it-short.mp4",
  source2: "https://picsum.photos/1080/1920",
  source3: "https://picsum.photos/1080/1920",
  duration1: 120,
  duration2: 120,
  duration3: 120,
  text1: defaultTextStyle,
  text2: defaultTextStyle,
  text3: defaultTextStyle,
};

export const DURATION_IN_FRAMES = 360;
export const VIDEO_WIDTH = 1080;
export const VIDEO_HEIGHT = 1920;
export const VIDEO_FPS = 30;