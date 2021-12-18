const otpGenerator = require('otp-generator');
const { OTP_LENGTH, OTP_CONFIG } = require('../constants/constants');
module.exports.generateOTP = () => {
  const OTP = otpGenerator.generate(OTP_LENGTH, OTP_CONFIG);
  return OTP;
};
