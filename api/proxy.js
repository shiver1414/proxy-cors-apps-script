const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.get('/', async (req, res) => {
  const dataUrl = 'https://script.google.com/macros/s/AKfycby_pyMEY-wlNdgkMq7X2wC91aZ2K1GpUimquIxTvLVK0lQUDYBIm2Z6CaT1pf8njOQ/exec'; // URL Apps Script Anda

  try {
    const response = await fetch(dataUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }
    const data = await response.json();

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = app;
