/**
 * @param {object} object 
 * @param {object} options
 * @param {string[] | function} options.filter
 * @param {number} options.depth
 * @returns {object} a copy of the object with falsy keys removed
 */
export const objectFilterKeys = (object, { filter, depth = 1 } = {}) => {
  if (depth < 1) return object;
  const result = {};
  for (const key in object) {
    if (!!key) {
      result[key] = object[key];
    }
  }
  return result;
};
