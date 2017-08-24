exports.home = function (req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Vous êtes à l\'accueil');
};
exports.testWs = function (req, res) {
  // Success
  var q = {
    "Success": true
  }
  // Failure
  res.json(q);
};
