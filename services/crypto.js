const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports.encrypt = async (data) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(data, salt);
    return hash;
  } catch (error) {
    return false;
  }
};

module.exports.compare = async (data, hash) => {
  const value = await bcrypt.compare(data, hash);
  return value;
};
