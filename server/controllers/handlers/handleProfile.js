const { join } = require('path');

const handleProfile = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', '..', 'public', 'html', 'profile.html'));
};

module.exports = { handleProfile };
