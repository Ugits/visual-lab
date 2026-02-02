import type { ReactNode } from "react";
import NoiseCanvas from "../labs/NoiseCanvas";
import Multiplane from "../labs/Multiplane/Multiplane";
import SlidingTiles from "../labs/SlidingTiles/SlidingTiles";

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
  {
    id: "multiplane",
    title: "Multiplane Camera",
    description: "Disney's 7-layer depth effect",
    component: <Multiplane />,
    thumbnail: <Multiplane isThumbnail />,
  },
  {
    id: "sliding-tiles",
    title: "Sliding Tiles",
    description: "Click to pause",
    component: <SlidingTiles />,
    thumbnail: <SlidingTiles isThumbnail />,
  },
];
