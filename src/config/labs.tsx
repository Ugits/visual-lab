import type { ReactNode } from "react";
import NoiseCanvas from "../components/labs/NoiseCanvas";

export interface Lab {
  id: string;
  title: string;
  description: string;
  component: ReactNode;
  thumbnail: ReactNode;
}

export const LABS: Lab[] = [
  {
    id: "noise-canvas",
    title: "Noise Canvas",
    description: "Click to pause",
    component: <NoiseCanvas />,
    thumbnail: <NoiseCanvas isThumbnail />,
  },
];
