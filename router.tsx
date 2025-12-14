import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadBox from "./components/UploadBox";
import Leaderboard from "./components/Leaderboard";
import AdminToggle from "./components/AdminToggle";
import Loading from "./components/Loading";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UploadBox />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/admin" element={<AdminToggle />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </BrowserRouter>
  );
}
