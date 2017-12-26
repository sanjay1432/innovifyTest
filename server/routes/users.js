const express = require('express');
const router = express.Router();
var User = require('../models/users.js');
var bcrypt = require('bcryptjs');
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens

/* GET USER */
router.post('/log', function(req, res, next) {
  
  User.findOne({ username: req.body.username}, function (err, user) {
      if (err) return next(err);
      if (!user) {
        res.json({ success: false, message: 'Authentication failed. User not found.' });
      } else if (user) {
  
        // check if password matches
        if (user.password != req.body.password) {
          res.json({ success: false, message: 'Authentication failed. Wrong password.' });
        } else {
  
          // if user is found and password is right
          // create a token with only our given payload
      // we don't want to pass in the entire user since that has the password
      const payload = {
        admin: user.admin 
      };
          var token = jwt.sign(payload,  '123456', {
            expiresIn: 60 * 24 // expires in 24 hours
        });
  
          // return the information including token as JSON
          res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token
          });
        }   
  
      }
  
    });
  });
  
/* SAVE USER */
router.post('/', function(req, res, next) {
         console.log(req.body)
    // User.create(req.body, function (err, post) {
    //     if (err) return next(err);
    //     res.json(post);
    // });
    var user = new User({
        username: req.body.username,
        password: req.body.password,
        admin: true 
      })
      user.save(function (err, post) {
        if (err) { 
                console.log(err)
                res.json(401, err)
            return next(err) }
          console.log(post)
        res.json(201, post)
      })
});

module.exports = router;