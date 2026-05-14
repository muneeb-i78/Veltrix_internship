// Only load .env file locally, not on Render
if (process.env.NODE_ENV !== 'production') {
  const fs   = require('fs');
  const path = require('path');
  try {
    fs.readFileSync(path.join(__dirname, '.env'), 'utf-8')
      .split('\n')
      .forEach(line => {
        const [key, ...val] = line.split('=');
        if (key && val.length) process.env[key.trim()] = val.join('=').trim();
      });
  } catch (e) {}
}

const express    = require('express');
const cors       = require('cors');
const connectDB  = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const dataRoutes = require('./routes/dataRoutes');

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'TASIK API is running!' }));
app.use('/api/auth', authRoutes);
app.use('/api/data', dataRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});