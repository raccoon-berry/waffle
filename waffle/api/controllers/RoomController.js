/**
 * RoomController
 *
 * @module      :: Controller
 * @description :: Contains logic for handling requests.
 */
 
module.exports = {
 
  /* e.g.
  sayHello: function (req, res) {
    res.send('hello world!');
  }
  */
  talkingspot: function(req, res) {
    res.view({id:req.param('id')});
  },
 
  checkin: function(req, res) {
    User.watch(req.socket);
    Chat.watch(req.socket);
    User.message({name: 'aaaa'});
//    User.message({userId:req.param('userID')});
/*    User.create({userName: req.param('userName')}).exec(function created(err, newUser){
      User.publishCreate(newUser);
    });*/
  }
 
};