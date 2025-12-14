import { PlayerScore } from "../lib/types";

type Props = {
  data: PlayerScore[];
};

export default function Leaderboard({ data }: Props) {
  return (
    <div className="table-wrapper">
      <table className="leaderboard">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Kills</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {data.map((p, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{p.name}</td>
              <td>{p.kills}</td>
              <td>{p.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
