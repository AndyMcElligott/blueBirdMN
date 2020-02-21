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
  const queryText = `INSERT INTO "user" ("youtube_id") VALUES ($1)`;
  pool.query(queryText, [newVideo])
    .then(() => { res.sendStatus(200) })
    .catch((err) => {
      console.log('error in post route query thing', err)
      res.sendStatus(500);
    })
});

router.delete('/:id/:hill_id', rejectUnauthenticated, (req, res) => {
  console.log(req.user.id)
  const id = req.params.id
  const user_id = req.params.user_id
  const loggedin_user = req.user.id
  console.log('in delete route', id)
  if (loggedin_user == user_id) {
      const queryText = 'DELETE FROM "video" WHERE "id" = $1'
      pool.query(queryText, [id])
      .then(() => {res.sendStatus(200)})
      .catch((err) => {
      console.log(err)
      res.sendStatus(500)
  })
  } else {
      res.sendStatus(403)
  }
});

router.delete('/:id', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;