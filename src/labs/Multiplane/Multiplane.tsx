import { useRef, useState } from "react";
import "./Multiplane.css";
import keyHoleMask from "./materials/key-hole-mask.png";

interface MultiplaneProps {
  isThumbnail?: boolean;
}

const Multiplane = ({ isThumbnail = false }: MultiplaneProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [zPos, setZPos] = useState(-1200);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (isThumbnail) return;
    const delta = e.deltaY;
    setZPos((prev) => Math.max(-1200, Math.min(prev - delta, 10)));
  };

  return (
    <div
      className={`multiplane-container ${isThumbnail ? "thumbnail" : ""}`}
      ref={containerRef}
      onWheel={handleWheel}
    >
      <div
        className="multiplane-scene"
        style={{
          transform: `translateZ(${zPos}px)`,
        }}
      >
        {/* Layer 1: Sky & Base Background */}
        <div className="layer layer-1">
          <div className="moon" />
        </div>

        {/* Layer 2: Far Mountains */}
        <div className="layer layer-2">
          <div className="mountain small" style={{ left: "10%" }}></div>
          <div className="mountain big" style={{ right: "15%" }}></div>
          <div
            className="mountain"
            style={{ left: "50%", transform: "translateX(-50%)" }}
          ></div>
        </div>

        {/* Layer 3: Mid Trees */}
        <div className="layer layer-3">
          <div className="tree" style={{ left: "15%" }}></div>
          <div className="tree" style={{ left: "25%" }}></div>
          <div className="tree" style={{ right: "20%" }}></div>
          <div className="tree" style={{ right: "10%" }}></div>
        </div>

        {/* Layer 4: Front Bushes */}
        <div className="layer layer-4">
          <div className="bush" style={{ left: "5%" }}></div>
          <div className="bush" style={{ left: "35%" }}></div>
          <div className="bush" style={{ right: "40%" }}></div>
          <div className="bush" style={{ right: "5%" }}></div>
        </div>

        {/* Layer 5: Wood and key-holes*/}
        <div className="layer layer-5">
          <div className="wood" />
          <div className="key-hole" />
        </div>
      </div>

      {/* SVG Mask Definition */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <mask
            id="keyhole-mask"
            maskUnits="objectBoundingBox"
            maskContentUnits="objectBoundingBox"
          >
            <rect x="0" y="0" width="1" height="1" fill="white" />
            <image
              href={keyHoleMask}
              x="0.4"
              y="0.4"
              width="0.2"
              height="0.2"
              preserveAspectRatio="xMidYMid slice"
              style={{ filter: "contrast(5) brightness(5)" }}
            />
            {/* 
                Note: x/y/width/height here are in bounding box units (0 to 1).
                If keyhole is 20% size: width=0.2, height=0.2.
                Centered: x = (1 - 0.2)/2 = 0.4. y = 0.4.
                PreserveAspectRatio ensure it fits like background-size: cover/contain.
             */}
          </mask>
        </defs>
      </svg>
    </div>
  );
};

export default Multiplane;
