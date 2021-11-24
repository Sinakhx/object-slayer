/**
 * merges objects from an array into one object
 * @param {object[]} array of objects to be merged
 * @returns {object} of merged objects in array
 */
export const unifyObjects = (array) => array.reduce((result, obj) => ({ ...result, ...obj }), {});
