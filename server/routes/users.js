const express = require('express');
const router = express.Router();
var User = require('../models/users.js');

// /* GET USER */
// router.get('/:room', function(req, res, next) {
//     User.find({ room: req.params.room }, function (err, chats) {
//       if (err) return next(err);
//       res.json(chats);
//     });
//   });
  
/* SAVE USER */
router.post('/', function(req, res, next) {
         console.log(req.body)
    // User.create(req.body, function (err, post) {
    //     if (err) return next(err);
    //     res.json(post);
    // });
    var user = new User({
        username: req.body.username,
        password: req.body.password
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