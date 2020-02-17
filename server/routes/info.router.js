const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM "video";'
  console.log('in info router.get', req.body)
  pool.query(queryText)
    .then(result => {
      console.log(result.rows)
      res.send(result.rows)
    }).catch(error => {
      console.log('error in info GET', error)
      res.sendStatus(500);
    })
})

router.post('/', (req, res) => {
  console.log('Sending this url to database:', req.body.youtube_id)
  const newVideo = req.body.youtube_id;
  const queryText = `INSERT INTO "video" ("youtube_id", "date_time", "hill_id") VALUES ($1, $2, $3)`;
  pool.query(queryText, [newVideo])
    .then(() => { res.sendStatus(200) })
    .catch((err) => {
      console.log('error in post route query thing', err)
      res.sendStatus(500);
    })
});

module.exports = router;