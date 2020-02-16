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
    .then( result => {
      console.log(result.rows)
        res.send(result.rows)
    }).catch( error => {
        console.log('error in info GET', error)
        res.sendStatus(500);
    })
  })

  module.exports = router;