const express = require('express');
const app = express();

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'up', message: 'Backend is running smoothly!' });
});

module.exports = app; 
