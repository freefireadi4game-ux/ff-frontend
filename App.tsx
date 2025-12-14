import { useState } from "react";
import UploadBox from "./components/UploadBox";
import Leaderboard from "./components/Leaderboard";
import Loading from "./components/Loading";
import { mockExtractScoreboard } from "./lib/mockAi";
import { PlayerScore } from "./lib/types";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<PlayerScore[] | null>(null);

  const handleUpload = async (file: File) => {
    setLoading(true);
    setData(null);

    // Fake AI processing (frontend only)
    const result = await mockExtractScoreboard(file);

    setData(result);
    setLoading(false);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>🔥 FF Score Extractor</h1>

      <UploadBox onUpload={handleUpload} />

      {loading && <Loading />}

      {data && <Leaderboard data={data} />}
    </div>
  );
}

export default App;
