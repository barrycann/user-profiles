module.exports = {
   login: function(req, res, next){
      var name = req.body.name.toLowerCase();
      var pass = req.body.password;
      for(var i=0; i<users.length; i++){
         if(users[i].name.toLowerCase() == name && users[i].password == pass){
            req.session.currentUser = users[i];
            res.send({userFound: true});
            return;
         }
      }
      res.send({userFound: false});
   }
};

var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];