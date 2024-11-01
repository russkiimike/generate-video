import { z } from "zod";
export const COMP_NAME = "MyComp";

export const CompositionProps = z.object({
  title: z.string(),
  greenscreenSource: z.string(),
  source1: z.string(),
  source2: z.string(),
  source3: z.string(),
  duration1: z.number(),
  duration2: z.number(),
  duration3: z.number(),
});

export const defaultMyCompProps: z.infer<typeof CompositionProps> = {
  title: "Next.js and Remotion",
  greenscreenSource: "https://remotion-assets.s3.eu-central-1.amazonaws.com/just-do-it-short.mp4",
  source1: "https://remotion-assets.s3.eu-central-1.amazonaws.com/just-do-it-short.mp4",
  source2: "https://picsum.photos/1280/720",
  source3: "https://picsum.photos/1280/720",
  duration1: 120,
  duration2: 120,
  duration3: 120,
};

export const DURATION_IN_FRAMES = 360;
export const VIDEO_WIDTH = 720;
export const VIDEO_HEIGHT = 1240;
export const VIDEO_FPS = 30;