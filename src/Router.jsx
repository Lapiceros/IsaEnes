import { Routes, Route } from "react-router-dom";
import MusicPage from "./pages/MusicPage/MusicPage";

function Router() {
  return (
    <Routes>
      <Route path="/music" element={<MusicPage />} />
    </Routes>
  );
}

export default Router;