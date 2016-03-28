/**
 * numberWithCommas [ref: http://goo.gl/03WHAI]
 */

const numberWithCommas = (x) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export default numberWithCommas;
