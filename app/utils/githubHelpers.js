var axios = require('axios');

var id = 'a3dd20662e5e57981e76';
var sec = 'b7894149a1d22380c43941e03816fa248295eec9';
var param = '?client_id=' + id + '&client_secret=' + sec;

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param);
}

var helpers = {
  getPlayersInfo: function (players) {
    return axios.all(players.map(function (username) {
      return getUserInfo(username);
    })).then(function (info) {
      return info.map(function (user) {
        return user.data;
      });
    })
    .catch(function (err) {
      console.warn('Error in getPlayersInfo', err);
    });
  },
};

module.exports = helpers;
