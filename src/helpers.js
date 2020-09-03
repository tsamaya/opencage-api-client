/**
 * @private
 * returns true is `val` is a number
 * @param  {Object}  val input parameter
 * @return {Boolean}     [description]
 */
const isNumber = (val) => typeof val === 'number' && !Number.isNaN(val);

/**
 * @private
 * returns true is `val` is an array
 * @param  {Object}  val input parameter
 * @return {Boolean}     returns true if array
 */
const isArray = (val) => !!val && Array.isArray(val);

/**
 * @private
 * returns true is `param` is not defined or empty
 * @param  {String}  param object property as a string
 * @return {Boolean}       returns value
 */
const isUndefinedOrEmpty = (param) =>
  typeof param === 'undefined' || param === '';

/**
 * @private
 * returns true is `param` is not defined or null
 * @param  {String}  param object property as a string
 * @return {Boolean}       returns value
 */
const isUndefinedOrNull = (param) =>
  typeof param === 'undefined' || param === null;

module.exports = {
  isNumber,
  isArray,
  isUndefinedOrEmpty,
  isUndefinedOrNull,
};
