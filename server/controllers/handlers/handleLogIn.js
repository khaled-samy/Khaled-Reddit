const { join } = require('path');

const handleLogin = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', '..', 'public', 'html', 'log-in.html'));
};

module.exports = { handleLogin };
