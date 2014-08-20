/**
 * ChatController
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
  say: function(req, res) {
  	Chat.create({userName: req.param('userName'), message: req.param('message'), serverId: sails.config.port}).exec(function created(err, newChat){
	    Chat.publishCreate(newChat);
  	})
  }
 
};