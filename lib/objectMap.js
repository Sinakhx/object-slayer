/**
 * @param {object} obj initial object
 * @param {function} fn map/filter function for object values
 * @return {object} a new object with the same structure and keys but with mapped/filtered values
 */
 export const objectMap = (obj, fn, depth = 1) => Object.keys(obj).reduce((result, key) => ({ ...result, [key]: fn(obj[key]) }), {});
