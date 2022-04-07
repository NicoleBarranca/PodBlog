const router = require('express').Router();
const { User } = require('../../models');

// GET /api/users. Select all users from user table in the DB and send it back as JSON.
router.get('/', (req, res) => {
    // Access our USER model and run .findAll() method
    User.findAll({
        attributes: { exclude: ['password' ]}
    })
      .then(UserInfo => res.json(UserInfo))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

// POST /api/users. Create a user, values from SQL are from the req.body.
router.post('/', (req,res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
      .then(UserInfo => res.json(UserInfo))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

// Authentication route
router.post('/login', (req, res) => {
    // Query User table using findone for the emailed entered
    User.findOne({
        where: {
            email: req.body.email
        }
    }) .then(UserInfo => {
        if (!UserInfo) {
            res.status(400).json({ messages: 'No user with that email address'});
            return;
        }
        // res.json({ user: UserData });

        // Verify user
        const validPw = UserInfo.checkPassword(req.body.password);
        if (!validPw) {
            res.status(400).json({ message: 'Entered password is incorrect, please retry' });
            return;
        }
        res.json({ user: UserInfo, message: 'Login successful' });
    })
})

module.exports = router;
