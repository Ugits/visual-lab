import { useEffect, useRef } from "react";
import "./NoiseCanvas.css";

const COLORS = [
  "#000000",
  "#ff0000",
  "#008000",
  "#0000ff",
  "#ffff00",
  "#800080",
  "#ffa500",
  "#ffc0cb",
  "#a52a2a",
  "#808080",
  "#ffffff",
];

interface SingleNoiseCanvasProps {
  isThumbnail?: boolean;
  dotSize?: number;
}

const SingleNoiseCanvas = ({
  isThumbnail,
  dotSize = 20,
}: SingleNoiseCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let lastTime = 0;
    const interval = 150;

    const draw = () => {
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      const drawSize = dotSize + 1;

      for (let y = 0; y < height; y += dotSize) {
        for (let x = 0; x < width; x += dotSize) {
          ctx.fillStyle = COLORS[Math.floor(Math.random() * COLORS.length)];
          ctx.fillRect(x, y, drawSize, drawSize);
        }
      }
    };

    const render = (time: number) => {
      if (!isPaused.current && time - lastTime > interval) {
        draw();
        lastTime = time;
      }
      animationFrameId = requestAnimationFrame(render);
    };

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === container) {
          const { width, height } = entry.contentRect;

          const dpr = window.devicePixelRatio || 1;

          const size = Math.min(width, height);

          canvas.style.width = `${size}px`;
          canvas.style.height = `${size}px`;
          canvas.style.left = `${(width - size) / 2}px`;
          canvas.style.top = `${(height - size) / 2}px`;

          canvas.width = size * dpr;
          canvas.height = size * dpr;

          ctx.scale(dpr, dpr);

          draw();
        }
      }
    });

    resizeObserver.observe(container);
    render(0);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [dotSize]);

  return (
    <div className="noise-canvas-container" ref={containerRef}>
      <canvas
        ref={canvasRef}
        className={`noise-canvas ${isThumbnail ? "thumbnail" : ""}`}
        onClick={() => {
          isPaused.current = !isPaused.current;
        }}
      />
    </div>
  );
};

interface NoiseCanvasProps {
  isThumbnail?: boolean;
  dotSize?: number;
}

const NoiseCanvas = ({ isThumbnail = false }: NoiseCanvasProps) => {
  const dotSize = isThumbnail ? 5 : undefined;

  return (
    <div className={`noise-canvas-panel ${isThumbnail ? "thumbnail" : ""}`}>
      <SingleNoiseCanvas isThumbnail={isThumbnail} dotSize={dotSize} />
      <SingleNoiseCanvas isThumbnail={isThumbnail} dotSize={dotSize} />
      <SingleNoiseCanvas isThumbnail={isThumbnail} dotSize={dotSize} />
    </div>
  );
};

export default NoiseCanvas;
