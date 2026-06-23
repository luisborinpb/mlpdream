"use client";

import { useMemo, useState } from "react";
import { Player } from "@/data/players";
import { Lang, t } from "@/lib/i18n";
import { chemistryScore, getDraftOptions, rosterRating, simulateSeason, Simulation, weightedRating } from "@/lib/game";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [started, setStarted] = useState(false);
  const [roster, setRoster] = useState<Player[]>([]);
  const [simulation, setSimulation] = useState<Simulation | null>(null);
  const [copied, setCopied] = useState(false);

  const copy = t[lang];
  const round = roster.length + 1;

  const options = useMemo(() => {
    if (!started || simulation) return [];
    return getDraftOptions(roster, round);
  }, [started, simulation, roster, round]);

  function pick(player: Player) {
    const nextRoster = [...roster, player];
    setRoster(nextRoster);

    if (nextRoster.length === 6) {
      setSimulation(simulateSeason(nextRoster));
    }
  }

  function restart() {
    setRoster([]);
    setSimulation(null);
    setStarted(true);
    setCopied(false);
  }

  async function copyShareText() {
    if (!simulation) return;
    const text = `🏓 Pickleball Dynasty
${simulation.champion ? "🏆 Champion" : "Playoff Run"}
Record: ${simulation.record}
Team Rating: ${simulation.rating}
Chemistry: ${simulation.chemistry}

Men: ${roster.filter(p => p.gender === "M").map(p => p.name).join(", ")}
Women: ${roster.filter(p => p.gender === "F").map(p => p.name).join(", ")}
Bench: ${roster.slice(4).map(p => p.name).join(", ")}`;
    await navigator.clipboard.writeText(text);
    setCopied(true);
  }

  return (
    <main className="container">
      <div className="topbar">
        <div className="badge">MVP v0.1</div>
        <div className="lang">
          <button className={`pill ${lang === "en" ? "active" : ""}`} onClick={() => setLang("en")}>EN</button>
          <button className={`pill ${lang === "pt" ? "active" : ""}`} onClick={() => setLang("pt")}>PT</button>
        </div>
      </div>

      <section className="hero">
        <h1 className="logo">{copy.title}</h1>
        <p className="subtitle">{copy.subtitle}</p>
        {!started && (
          <div>
            <button className="primary" onClick={() => setStarted(true)}>{copy.start}</button>
          </div>
        )}
      </section>

      {started && !simulation && (
        <>
          <div className="draft-header">
            <div>
              <div className="badge">{copy.round} {round}/6</div>
              <h2>{copy.choose}</h2>
            </div>
            <button className="secondary" onClick={restart}>{copy.restart}</button>
          </div>

          <div className="grid">
            {options.map((player) => (
              <article className="card" key={player.id}>
                <div>
                  <div className="badge">{player.rarity}</div>
                  <h3>{player.name}</h3>
                  <p className="meta">{player.country} · {player.gender === "M" ? copy.men : copy.women}</p>
                  <div className="stats">
                    <div className="stat"><span>Singles</span><strong>{player.singles}</strong></div>
                    <div className="stat"><span>Doubles</span><strong>{player.doubles}</strong></div>
                    <div className="stat"><span>Mixed</span><strong>{player.mixed}</strong></div>
                    <div className="stat"><span>Clutch</span><strong>{player.clutch}</strong></div>
                    <div className="stat"><span>OVR</span><strong>{weightedRating(player)}</strong></div>
                  </div>
                </div>
                <button className="primary" onClick={() => pick(player)}>{copy.choose}</button>
              </article>
            ))}
          </div>

          <Roster copy={copy} roster={roster} />
        </>
      )}

      {simulation && (
        <section className="result">
          <div className="share-card">
            <div className="badge">{copy.result}</div>
            <h2>{simulation.champion ? `🏆 ${copy.champion}` : copy.eliminated}</h2>
            <div className="big">{simulation.record}</div>
            <p className="meta">{copy.record}</p>

            <div className="stats">
              <div className="stat"><span>{copy.teamRating}</span><strong>{simulation.rating}</strong></div>
              <div className="stat"><span>{copy.chemistry}</span><strong>{simulation.chemistry}</strong></div>
            </div>

            <Roster copy={copy} roster={roster} />

            <div className="actions">
              <button className="primary" onClick={copyShareText}>{copied ? copy.copied : copy.share}</button>
              <button className="secondary" onClick={restart}>{copy.restart}</button>
            </div>
          </div>

          <div>
            <h2>{copy.playoffs}</h2>
            <div className="timeline">
              {simulation.log.map((item) => (
                <div className="match" key={item}>{item}</div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

function Roster({ copy, roster }: { copy: any; roster: Player[] }) {
  const men = roster.filter((p) => p.gender === "M");
  const women = roster.filter((p) => p.gender === "F");
  const bench = roster.slice(4);

  return (
    <div className="roster">
      <div className="roster-box">
        <h4>{copy.men}</h4>
        {men.length ? men.map((p) => <div key={p.id}>{p.name}</div>) : <div>—</div>}
      </div>
      <div className="roster-box">
        <h4>{copy.women}</h4>
        {women.length ? women.map((p) => <div key={p.id}>{p.name}</div>) : <div>—</div>}
      </div>
      <div className="roster-box">
        <h4>{copy.bench}</h4>
        {bench.length ? bench.map((p) => <div key={p.id}>{p.name}</div>) : <div>—</div>}
      </div>
    </div>
  );
}
