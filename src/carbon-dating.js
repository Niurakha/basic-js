const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let activity = parseFloat(sampleActivity);

  if (typeof sampleActivity !== "string" || isNaN(activity)) {
    return false;
  };
  if (activity > MODERN_ACTIVITY || activity <= 0) {
    return false;
  };
  let reactionRate = Math.LN2 / HALF_LIFE_PERIOD;
  let date = Math.ceil(Math.log(MODERN_ACTIVITY / activity) / reactionRate);
  return date;
};
