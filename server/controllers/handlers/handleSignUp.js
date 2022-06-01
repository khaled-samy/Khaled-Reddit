const { join } = require('path');

const handleSignUp = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', ',,', 'public', 'html', 'sign-up.html'));
};

module.exports = { handleSignUp };
