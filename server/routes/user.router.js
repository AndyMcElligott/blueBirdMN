const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const rider = req.body.rider;
  const terrain = req.body.terrain;
  const experience = req.body.experience;
  const city = req.body.city;
  console.log(req.body);
  const queryText = 'INSERT INTO "user" (username, password, rider, terrain, experience, city) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id';
  pool.query(queryText, [username, password, rider, terrain, experience, city])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    });
});

// PUT route to edit user profile; not pw 
router.put('/:id', (req, res) => {
  const username = req.params.username;
  const rider = req.params.rider;
  const terrain = req.params.terrain;
  const experience = req.params.experience;
  const city = req.params.city;
  console.log(req.params);
  const queryText = `UPDATE "user" SET = "rider" = $1, AND "terrain", "experience", "city" = $1, $2, $3, $4, $5 WHERE id = ${id}`;
  pool.query(queryText, [username, rider, terrain, experience, city])
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    });
})


// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
