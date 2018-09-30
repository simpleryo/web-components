/**
 * [An algorithm that simulate a smooth progress bar, from 0 - 100]
 * @param  {[type]} prevPercent      [previous percent]
 * @param  {Number} [interval]   [percent change interval, in millisecond]
 * @param  {Number} [totalTime] [total time from 0 to 100 percet ]
 * @return {Number}                  [next percent]
 */
const calculateDummyPercent = (
  prevPercent,
  interval = 100,
  totalTime = 4000
) => {
  const x = 47.5 * interval / totalTime; // 47.5 = 50/4 + 30/2 +20
  let offset = 4 * x;
  if (prevPercent >= 50) {
    offset = 2 * x;
  }
  if (prevPercent >= 80) {
    offset = x;
  }
  return prevPercent + offset >= 100 ? prevPercent : prevPercent + offset;
};

export default calculateDummyPercent;
