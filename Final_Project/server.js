const fs   = require('fs');
const path = require('path');

fs.readFileSync(path.join(__dirname, '.env'), 'utf-8')
  .split('\n')
  .forEach(line => {
    const [key, ...val] = line.split('=');
    if (key && val.length) process.env[key.trim()] = val.join('=').trim();
  });

const express    = require('express');
const cors       = require('cors');
const connectDB  = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const dataRoutes = require('./routes/dataRoutes');

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Server is running!' }));
app.use('/api/auth', authRoutes);
app.use('/api/data', dataRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on http://localhost:${process.env.PORT || 5000}`);
});