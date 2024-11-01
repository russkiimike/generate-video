import { z } from "zod";
import { useRendering } from "../helpers/use-rendering";
import { CompositionProps, COMP_NAME } from "../types/constants";
import { AlignEnd } from "./AlignEnd";
import { Button } from "./Button/Button";
import { InputContainer } from "./Container";
import { DownloadButton } from "./DownloadButton";
import { ErrorComp } from "./Error";
import { Input } from "./Input";
import { ProgressBar } from "./ProgressBar";
import { Spacing } from "./Spacing";

const inputLabel: React.CSSProperties = {
  display: "block",
  marginBottom: "8px",
  fontSize: "14px",
  fontWeight: 500,
};

const inputRow: React.CSSProperties = {
  display: "flex",
  gap: "12px",
  alignItems: "flex-start",
};

const durationInput: React.CSSProperties = {
  width: "80px",
};

export const RenderControls: React.FC<{
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  greenscreenSource: string;
  setGreenscreenSource: React.Dispatch<React.SetStateAction<string>>;
  source1: string;
  setSource1: React.Dispatch<React.SetStateAction<string>>;
  source2: string;
  setSource2: React.Dispatch<React.SetStateAction<string>>;
  source3: string;
  setSource3: React.Dispatch<React.SetStateAction<string>>;
  duration1: number;
  setDuration1: React.Dispatch<React.SetStateAction<number>>;
  duration2: number;
  setDuration2: React.Dispatch<React.SetStateAction<number>>;
  duration3: number;
  setDuration3: React.Dispatch<React.SetStateAction<number>>;
  inputProps: z.infer<typeof CompositionProps>;
}> = ({ 
  text, 
  setText,
  greenscreenSource,
  setGreenscreenSource,
  source1,
  setSource1,
  source2,
  setSource2,
  source3,
  setSource3,
  duration1,
  setDuration1,
  duration2,
  setDuration2,
  duration3,
  setDuration3,
  inputProps 
}) => {
  const { renderMedia, state, undo } = useRendering(COMP_NAME, inputProps);

  return (
    <InputContainer>
      {state.status === "init" ||
      state.status === "invoking" ||
      state.status === "error" ? (
        <>
          <label style={inputLabel}>Title</label>
          <Input
            disabled={state.status === "invoking"}
            setText={setText}
            text={text}
          />
          <Spacing />
          
          <div style={inputRow}>
            <div style={{ flex: 1 }}>
              <label style={inputLabel}>Source 1</label>
              <Input
                disabled={state.status === "invoking"}
                setText={setSource1}
                text={source1}
              />
            </div>
            <div>
              <label style={inputLabel}>Duration (frames)</label>
              <Input
                style={durationInput}
                type="number"
                min={0}
                disabled={state.status === "invoking"}
                setText={(value) => setDuration1(Number(value))}
                text={String(duration1)}
              />
            </div>
          </div>
          <Spacing />
          
          <div style={inputRow}>
            <div style={{ flex: 1 }}>
              <label style={inputLabel}>Source 2</label>
              <Input
                disabled={state.status === "invoking"}
                setText={setSource2}
                text={source2}
              />
            </div>
            <div>
              <label style={inputLabel}>Duration (frames)</label>
              <Input
                style={durationInput}
                type="number"
                min={0}
                disabled={state.status === "invoking"}
                setText={(value) => setDuration2(Number(value))}
                text={String(duration2)}
              />
            </div>
          </div>
          <Spacing />
          
          <div style={inputRow}>
            <div style={{ flex: 1 }}>
              <label style={inputLabel}>Source 3</label>
              <Input
                disabled={state.status === "invoking"}
                setText={setSource3}
                text={source3}
              />
            </div>
            <div>
              <label style={inputLabel}>Duration (frames)</label>
              <Input
                style={durationInput}
                type="number"
                min={0}
                disabled={state.status === "invoking"}
                setText={(value) => setDuration3(Number(value))}
                text={String(duration3)}
              />
            </div>
          </div>
          <Spacing />

          <label style={inputLabel}>Greenscreen Video URL</label>
          <Input
            disabled={state.status === "invoking"}
            setText={setGreenscreenSource}
            text={greenscreenSource}
          />
          <Spacing />
          
          <AlignEnd>
            <Button
              disabled={state.status === "invoking"}
              loading={state.status === "invoking"}
              onClick={renderMedia}
            >
              Render video
            </Button>
          </AlignEnd>
          {state.status === "error" ? (
            <ErrorComp message={state.error.message} />
          ) : null}
        </>
      ) : null}
      {state.status === "rendering" || state.status === "done" ? (
        <>
          <ProgressBar
            progress={state.status === "rendering" ? state.progress : 1}
          />
          <Spacing />
          <AlignEnd>
            <DownloadButton undo={undo} state={state} />
          </AlignEnd>
        </>
      ) : null}
    </InputContainer>
  );
};