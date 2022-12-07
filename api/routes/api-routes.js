const express = require('express');
const router = express.Router();
const axios = require('axios');

const db = require('../db/database');

// get all cards
router.get('/cards', (req, res) => {
  const query = `
    SELECT 
      json_agg(row_to_json(cards)) 
    AS 
      cards
    FROM 
      (
        SELECT
          cards.id,
          name,
          family,
          description,
          images.url,
          (
            SELECT
              json_build_object(
                'upright', (
                  SELECT
                    json_agg(row_to_json(overviews))
                  FROM
                    overviews
                  WHERE 
                    overviews.card_id = cards.id
                  AND
                    reversed = false
                  ),
                'reversed', (
                  SELECT
                    json_agg(row_to_json(overviews))
                  FROM
                    overviews
                  WHERE
                    overviews.card_id = cards.id
                  AND
                    reversed = true
                )
              )
            AS overview
          ),
          images.url AS image
        FROM
          cards
        LEFT JOIN 
          images 
        ON 
          cards.id = images.card_id
      ) as cards
  `;

  return db
    .query(query)
    .then(({ rows: cards }) => {
      res.json(cards);
    })
    .catch((err) => console.log('err:', err));
});

// get dailyhoroscope
router.get('/horoscope', (req, res) => {
  const sign = req.query.sign;
  axios.get(`https://ohmanda.com/api/horoscope/${sign}`)
    .then((data) => {
      return res.json(data.data);
    })
    .catch((err) => console.log('err', err));
});

module.exports = router;
