const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Log every incoming request to mimic Applanga's API
app.all('*', (req, res) => {
  console.log(`[${req.method}] ${req.originalUrl}`);
  console.log('Body:', req.body);
  res.status(200).json({ message: 'Local Applanga mock OK' });
});

app.listen(port, () => {
  console.log(`✅ Mock Applanga server running at http://localhost:${port}`);
});
