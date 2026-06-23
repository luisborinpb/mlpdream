:root {
  --bg: #07130f;
  --card: #0d2119;
  --card2: #123326;
  --text: #f5fff9;
  --muted: #9bb8ab;
  --accent: #74f2a7;
  --danger: #ffcc66;
  --border: rgba(255,255,255,0.12);
}

* { box-sizing: border-box; }

body {
  margin: 0;
  background:
    radial-gradient(circle at top left, rgba(116,242,167,0.12), transparent 32rem),
    radial-gradient(circle at bottom right, rgba(255,204,102,0.08), transparent 26rem),
    var(--bg);
  color: var(--text);
  font-family: Arial, Helvetica, sans-serif;
}

button {
  font: inherit;
  cursor: pointer;
}

.container {
  width: min(1100px, calc(100% - 32px));
  margin: 0 auto;
  padding: 32px 0 56px;
}

.hero {
  display: grid;
  gap: 18px;
  margin-bottom: 28px;
}

.logo {
  font-size: clamp(38px, 7vw, 76px);
  line-height: 0.95;
  margin: 0;
  letter-spacing: -0.06em;
}

.subtitle {
  color: var(--muted);
  font-size: 18px;
  max-width: 680px;
  line-height: 1.5;
}

.topbar {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
}

.lang {
  display: flex;
  gap: 8px;
}

.pill,
.primary,
.secondary {
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 10px 16px;
  background: rgba(255,255,255,0.04);
  color: var(--text);
}

.pill.active,
.primary {
  background: var(--accent);
  color: #062015;
  border-color: transparent;
  font-weight: 700;
}

.secondary:hover,
.pill:hover {
  border-color: rgba(255,255,255,0.32);
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.card {
  background: linear-gradient(180deg, var(--card2), var(--card));
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 18px;
  min-height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 16px 40px rgba(0,0,0,0.18);
}

.card h3 {
  margin: 0 0 8px;
  font-size: 23px;
  line-height: 1.1;
}

.meta {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.4;
}

.stats {
  display: grid;
  gap: 7px;
  margin: 18px 0;
}

.stat {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  padding-bottom: 5px;
  color: var(--muted);
}

.stat strong {
  color: var(--text);
}

.draft-header {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: end;
  margin-bottom: 18px;
}

.roster {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-top: 26px;
}

.roster-box {
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 14px;
}

.roster-box h4 {
  margin: 0 0 10px;
}

.roster-box div {
  color: var(--muted);
  margin: 7px 0;
}

.result {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 24px;
  align-items: start;
}

.share-card {
  border: 1px solid var(--border);
  border-radius: 28px;
  background: linear-gradient(160deg, #123326, #06130f);
  padding: 28px;
}

.share-card h2 {
  font-size: 42px;
  margin: 0 0 14px;
  letter-spacing: -0.04em;
}

.big {
  font-size: 58px;
  font-weight: 800;
  color: var(--accent);
  margin: 10px 0;
}

.badge {
  display: inline-block;
  border-radius: 999px;
  background: rgba(116,242,167,0.14);
  border: 1px solid rgba(116,242,167,0.28);
  padding: 8px 12px;
  color: var(--accent);
  font-weight: 700;
}

.timeline {
  display: grid;
  gap: 12px;
}

.match {
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 14px;
}

.actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 18px;
}

@media (max-width: 860px) {
  .grid, .roster, .result {
    grid-template-columns: 1fr;
  }
  .draft-header {
    align-items: start;
    flex-direction: column;
  }
}
