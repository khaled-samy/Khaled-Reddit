const { join } = require('path');

const handleHome = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', '..', 'public', 'html', 'user-home.html'));
};

module.exports = { handleHome };
