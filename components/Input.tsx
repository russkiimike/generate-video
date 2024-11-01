import React, { useCallback } from "react";

const textarea: React.CSSProperties = {
  resize: "none",
  lineHeight: 1.7,
  display: "block",
  width: "100%",
  borderRadius: "var(--geist-border-radius)",
  backgroundColor: "var(--background)",
  padding: "var(--geist-half-pad)",
  color: "var(--foreground)",
  fontSize: 14,
};

export const Input: React.FC<{
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  disabled?: boolean;
  style?: React.CSSProperties;
  type?: string;
  min?: number;
}> = ({ text, setText, disabled, style, type = "text", min }) => {
  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setText(e.currentTarget.value);
    },
    [setText],
  );

  return (
    <input
      type={type}
      min={min}
      disabled={disabled}
      name="title"
      style={{ ...textarea, ...style }}
      value={text}
      onChange={onChange}
    />
  );
};