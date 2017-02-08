exports.home = function (req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Vous êtes à l\'accueil');
};
