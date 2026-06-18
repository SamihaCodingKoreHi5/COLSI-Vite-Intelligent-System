import express from 'express';
import cors from 'cors';
const app = express();
const port = 3001;

const simulateEnergy = (hour) => {
  const base = 50 + 20 * Math.sin(((hour - 9) * Math.PI) / 12);
  let peak = 0; if (hour >= 18 && hour <= 22) peak = 25;
  let morningPeak = 0; if (hour >= 7 && hour <= 9) morningPeak = 10;
  return Math.min(100, Math.max(0, base + peak + morningPeak + (Math.random() - 0.5) * 5));
};

const simulateFood = (ts) => {
  const hoursSinceStart = (ts - new Date('2026-01-01').getTime()) / (1000 * 60 * 60);
  const trend = 50 + 0.01 * hoursSinceStart;
  const dailyFluct = 2 * Math.sin(((hoursSinceStart % 24) * Math.PI) / 12);
  const shock = Math.random() < 0.02 ? Math.random() * 8 : 0;
  return Math.min(100, Math.max(0, trend + dailyFluct + shock + (Math.random() - 0.5)));
};

const simulateTransport = (hour) => {
  let spike = 0;
  if (hour >= 8 && hour <= 10) spike = 35;
  else if (hour >= 17 && hour <= 20) spike = 40;
  return Math.min(100, Math.max(0, 30 + spike + (Math.random() - 0.5) * 3));
};

const simulateHousing = (ts) => {
  const hoursSinceStart = (ts - new Date('2026-01-01').getTime()) / (1000 * 60 * 60);
  return Math.min(100, Math.max(0, 60 + 0.002 * hoursSinceStart + (Math.random() - 0.5) * 0.5));
};

const generateHistory = (hours = 24) => {
  const data = [];
  const now = Date.now();
  for (let i = hours; i >= 0; i--) {
    const ts = now - i * 60 * 60 * 1000;
    const hour = new Date(ts).getHours();
    data.push({ timestamp: ts, energy: simulateEnergy(hour), food: simulateFood(ts), transport: simulateTransport(hour), housing: simulateHousing(ts) });
  }
  return data;
};

const calculateCOLSI = (data) => {
  const score = data.energy * 0.4 + data.food * 0.3 + data.transport * 0.2 + data.housing * 0.1;
  let level = 'STABLE';
  if (score > 80) level = 'CRITICAL';
  else if (score > 60) level = 'HIGH';
  else if (score > 30) level = 'MODERATE';
  return { score: parseFloat(score.toFixed(2)), level };
};

app.use(cors());

app.get('/api/dashboard', (req, res) => {
  const history = generateHistory(24);
  const current = history[history.length - 1];
  const colsi = calculateCOLSI(current);
  res.json({ current, history, colsi });
});

app.get('/api/regions', (req, res) => {
  res.json([
    { id: 'reg-001', name: 'Central Dhaka', currentScore: 78.4, trend: 'up', indicators: { inflation: 9.2, income_level: 45000, cost_of_living_index: 82.5 } },
    { id: 'reg-002', name: 'Chattogram Metropolitan', currentScore: 65.2, trend: 'stable', indicators: { inflation: 8.5, income_level: 42000, cost_of_living_index: 75.0 } },
    { id: 'reg-003', name: 'Sylhet Division', currentScore: 42.8, trend: 'down', indicators: { inflation: 7.1, income_level: 38000, cost_of_living_index: 60.2 } },
  ]);
});

app.get('/api/insights', (req, res) => {
  res.json([
    { id: '1', timestamp: Date.now(), title: 'Economic Stress Threshold Breached', description: 'Average cost of living exceeded projected income levels by 20%.', severity: 'critical', category: 'general' },
    { id: '2', timestamp: Date.now(), title: 'Energy Demand Spike Detected', description: 'Recommending load-shedding measures or off-peak usage shift.', severity: 'warning', category: 'energy' },
  ]);
});

app.get('/api/alerts', (req, res) => {
  res.json([
    { id: 'alt-001', timestamp: Date.now() - 1000 * 60 * 45, region: 'Dhaka', message: 'Critical energy demand surge detected.', severity: 'high' },
  ]);
});

app.listen(port, () => {
  console.log(`COLSI API listening at http://localhost:${port}`);
});
