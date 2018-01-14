exports.developpeur = function (req, res) {
  res.render('developpeur', {});
};
exports.testWs = function (req, res) {
  // Success
  var q = {
    "Success": true
  }
  // Failure
  res.json(q);
};
