import { Box } from "lucide-react";
import "./AnimatedBox.css";

interface AnimatedBoxProps {
  unboxed: boolean;
  onToggle: () => void;
}

export const AnimatedBox = ({ unboxed, onToggle }: AnimatedBoxProps) => {
  return (
    <div
      className={`title-header-box ${unboxed ? "unboxed" : ""}`}
      onClick={onToggle}
    >
      <div className="initial-box-row-container">
        <div className="initial-box-row-1">
          <div className="initial-box-spacer"></div>
        </div>
        <div className="initial-box-row-2">
          <div className="box-icon">
            <div className="box-icon-1">
              <Box
                className="animated-box-icon"
                size={34}
                strokeWidth={2}
                absoluteStrokeWidth
              />
            </div>
            <div className="box-icon-2">
              <Box
                className="animated-box-icon"
                size={34}
                strokeWidth={2}
                absoluteStrokeWidth
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
