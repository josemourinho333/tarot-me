const express = require('express');
const router = express.Router();

const db = require('../db/database');

// get all cards
router.get('/cards', (req, res) => {
  const query = `
    SELECT * FROM cards;
  `;

  return db
    .query(query)
    .then(({ rows: cards }) => {
      console.log('cards', cards);
    })
    .catch((err) => console.log('err:', err));
});

module.exports = router;
