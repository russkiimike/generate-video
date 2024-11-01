import React from 'react';
import { Input } from './Input';
import { Spacing } from './Spacing';
import { z } from 'zod';
import { TextStyle } from '../types/constants';

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

const smallInput: React.CSSProperties = {
  width: "80px",
};

export const TextControls: React.FC<{
  textStyle: z.infer<typeof TextStyle>;
  setTextStyle: (style: z.infer<typeof TextStyle>) => void;
  disabled?: boolean;
  label: string;
}> = ({ textStyle, setTextStyle, disabled, label }) => {
  return (
    <div>
      <h3 style={inputLabel}>{label}</h3>
      
      <label style={inputLabel}>Text</label>
      <Input
        disabled={disabled}
        text={textStyle.text}
        setText={(value) => setTextStyle({ ...textStyle, text: value })}
      />
      <Spacing />

      <div style={inputRow}>
        <div style={{ flex: 1 }}>
          <label style={inputLabel}>Font Family</label>
          <Input
            disabled={disabled}
            text={textStyle.fontFamily}
            setText={(value) => setTextStyle({ ...textStyle, fontFamily: value })}
          />
        </div>
        <div>
          <label style={inputLabel}>Size</label>
          <Input
            style={smallInput}
            type="number"
            disabled={disabled}
            text={String(textStyle.fontSize)}
            setText={(value) => setTextStyle({ ...textStyle, fontSize: Number(value) })}
          />
        </div>
      </div>
      <Spacing />

      <div style={inputRow}>
        <div>
          <label style={inputLabel}>Weight</label>
          <Input
            style={smallInput}
            type="number"
            min={100}
            max={900}
            disabled={disabled}
            text={String(textStyle.fontWeight)}
            setText={(value) => setTextStyle({ ...textStyle, fontWeight: Number(value) })}
          />
        </div>
        <div>
          <label style={inputLabel}>Color</label>
          <Input
            style={smallInput}
            disabled={disabled}
            text={textStyle.color}
            setText={(value) => setTextStyle({ ...textStyle, color: value })}
          />
        </div>
        <div>
          <label style={inputLabel}>Stroke</label>
          <Input
            style={smallInput}
            type="number"
            min={0}
            disabled={disabled}
            text={String(textStyle.strokeWidth)}
            setText={(value) => setTextStyle({ ...textStyle, strokeWidth: Number(value) })}
          />
        </div>
      </div>
      <Spacing />

      <div style={inputRow}>
        <div>
          <label style={inputLabel}>Rotation</label>
          <Input
            style={smallInput}
            type="number"
            disabled={disabled}
            text={String(textStyle.rotation)}
            setText={(value) => setTextStyle({ ...textStyle, rotation: Number(value) })}
          />
        </div>
        <div>
          <label style={inputLabel}>X Offset</label>
          <Input
            style={smallInput}
            type="number"
            disabled={disabled}
            text={String(textStyle.offsetX)}
            setText={(value) => setTextStyle({ ...textStyle, offsetX: Number(value) })}
          />
        </div>
        <div>
          <label style={inputLabel}>Y Offset</label>
          <Input
            style={smallInput}
            type="number"
            disabled={disabled}
            text={String(textStyle.offsetY)}
            setText={(value) => setTextStyle({ ...textStyle, offsetY: Number(value) })}
          />
        </div>
      </div>
      <Spacing />
    </div>
  );
};