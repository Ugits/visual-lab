import type { ReactNode } from "react";
import "./ContentPanel.css";

interface ContentPanelProps {
  unboxed: boolean;
  children: ReactNode;
}

export const ContentPanel = ({ unboxed, children }: ContentPanelProps) => {
  return (
    <div className={`content-panel ${unboxed ? "unboxed" : ""}`}>
      {children}
    </div>
  );
};
