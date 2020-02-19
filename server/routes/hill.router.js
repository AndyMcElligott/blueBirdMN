const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// get all the hills
router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM "hill";'
  console.log('in hills router.get', req.body)
  pool.query(queryText)
    .then(result => {
      console.log(result.rows)
      res.send(result.rows)
    }).catch(error => {
      console.log('error in hills GET', error)
      res.sendStatus(500);
    })
})

// add new hill
router.post('/', (req, res) => {
  console.log(req.body)
  // res.sendStatus(201);
  const queryText = `INSERT INTO "hill" ("name", "open_trails", "hours", "live_view", "about", "logo")
    VALUES ($1, $2, $3, $4, $5, $6);`

  pool.query(queryText,
    [req.body.hillName, req.body.open_trails, req.body.hours, req.body.live_view, req.body.about, req.body.logo])
    .then(result => {
      console.log(result.rows)
      res.send(result.rows)
    }).catch(error => {
      console.log('error in hills POST', error)
      res.sendStatus(500);
    })
})

// delete hill
router.delete('/:id', (req, res) => {
  console.log('in delete hill router')
  let id = req.params.id;
  const queryText = `DELETE FROM "hill" WHERE id= $1;`;
  pool.query(queryText, [id])
  .then(result => {
    res.sendStatus(200);
  }).catch(error => {
    console.log('ERROR DELETING HILL', error);
    res.sendStatus(500);
  })
});

router.get('/', (req, res) => {
  console.log('getting user videos')
  const queryText = `SELECT "id", "user_video" FROM "user";`
  pool.query(queryText)
  .then(result => {
    res.sendStatus(200);
  }).catch(error => {
    console.log('ERROR Getting user video', error);
    res.sendStatus(500);
  })
})

module.exports = router;