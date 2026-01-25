import { Route, Routes } from "react-router-dom";
import NoiseCanvas from "./components/labs/NoiseCanvas";
import { VisualLab } from "./page/VisualLab/VisualLab";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<VisualLab />} />
      <Route
        path="/preview/noise-canvas"
        element={<NoiseCanvas />}
      />
    </Routes>
  );
};
