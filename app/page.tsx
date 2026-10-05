import StatCard from "./components/StatCard";

const seasons = [
  { year: "2025", champion: "Coming Soon", runnerUp: "Coming Soon", record: "—" },
  { year: "2024", champion: "Coming Soon", runnerUp: "Coming Soon", record: "—" },
  { year: "2023", champion: "Coming Soon", runnerUp: "Coming Soon", record: "—" },
];

export default function Home() {
  return (
    <main className="league-page">
      <header className="site-header">
        <h1>SUNNY OAKS DYNASTY LEAGUE</h1>

        <nav>
          <a href="#home">Home</a>
          <a href="#history">History</a>
          <a href="#records">Records</a>
        </nav>
      </header>

      <section className="champion-section" id="home">
        <div>
          <p className="eyebrow">2025 LEAGUE CHAMPION</p>
          <h2>Champion Team Name</h2>
          <p>Manager: Name</p>
        </div>

        <div className="trophy">
          <span>🏆</span>
          <strong>2025</strong>
        </div>
      </section>

      <section id="records">
        <h2 className="section-title">ALL-TIME RECORDS</h2>

        <div className="stat-grid">
          <StatCard label="Most Championships" value="Coming Soon" />
          <StatCard label="Highest Single-Season Score" value="Coming Soon" />
          <StatCard label="Best All-Time Record" value="Coming Soon" />
        </div>
      </section>

      <section id="history">
        <h2 className="section-title">SEASON HISTORY</h2>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Season</th>
                <th>Champion</th>
                <th>Runner-Up</th>
                <th>Final Record</th>
              </tr>
            </thead>
            <tbody>
              {seasons.map((season) => (
                <tr key={season.year}>
                  <td>{season.year}</td>
                  <td>{season.champion}</td>
                  <td>{season.runnerUp}</td>
                  <td>{season.record}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}