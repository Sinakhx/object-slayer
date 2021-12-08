/**
 * @param {object} object 
 * @returns {object} a copy of the object with falsy keys removed
 */
export const objectFilterKeys = (object, depth = 0) => {
  const result = {};
  for (const key in object) {
    if (!!key) {
      result[key] = object[key];
    }
  }
  return result;
};
