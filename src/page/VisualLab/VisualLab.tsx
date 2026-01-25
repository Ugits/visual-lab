import { useState, useEffect } from "react";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { AnimatedBox } from "./components/AnimatedBox/AnimatedBox";
import { ContentPanel } from "./components/ContentPanel/ContentPanel";
import "./VisualLab.css";
import { LABS } from "../../config/labs";

export const VisualLab = () => {
  const [unboxed, setUnboxed] = useState(false);

  useEffect(() => {
    localStorage.setItem("unboxed", unboxed.toString());
  }, [unboxed]);
  const [selectedLab, setSelectedLab] = useState<string | null>(null);
  return (
    <>
      <div className="app-container">
        <Sidebar unboxed={unboxed} onSelectLab={setSelectedLab} />
        <div className="app-main-content">
          <div className="title-panel">
            <AnimatedBox
              unboxed={unboxed}
              onToggle={() => setUnboxed(!unboxed)}
            />
          </div>
          <ContentPanel unboxed={unboxed}>
            {selectedLab && (
              <div className="lab-container">
                {/* <div className="lab-header">
                  <h2>{LABS.find((l) => l.id === selectedLab)?.title}</h2>
                  <p>{LABS.find((l) => l.id === selectedLab)?.description}</p>
                </div> */}
                <div className="lab-content">
                  {LABS.find((l) => l.id === selectedLab)?.component}
                </div>
              </div>
            )}
          </ContentPanel>
        </div>
      </div>
    </>
  );
};
